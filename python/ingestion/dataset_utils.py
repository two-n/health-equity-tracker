import pandas as pd  # type: ignore
import numpy as np  # type: ignore
import ingestion.standardized_columns as std_col

from ingestion.standardized_columns import Race


def generate_pct_share_col_without_unknowns(df, raw_count_to_pct_share, breakdown_col, all_val):
    """Returns a DataFrame with a percent share column based on the raw_count_cols
       Each row must have a corresponding 'ALL' row.
       This function is meant to be used on datasets without any rows where the
       breakdown value is `Unknown`.

       df: DataFrame to generate the `pct_share_col` for.
       raw_count_to_pct_share: A dictionary with the mapping of raw_count
                               columns to the pct_share columns they should
                               be used to generate. eg: ({'population': 'population_pct'})
       breakdown_col: The name of column to calculate the percent across.
       all_val: The value representing 'ALL'"""

    all_demo_values = set(df[breakdown_col].to_list())
    if Race.UNKNOWN.value in all_demo_values or 'Unknown' in all_demo_values:
        raise ValueError(('This dataset contains unknowns, use the'
                          'generate_pct_share_col_with_unknowns function instead'))

    return _generate_pct_share_col(df, raw_count_to_pct_share, breakdown_col, all_val)


def generate_pct_share_col_with_unknowns(df, raw_count_to_pct_share,
                                         breakdown_col, all_val, unknown_val):
    """Returns a DataFrame with a percent share column based on the raw_count_cols.
       The resulting `pct_share` value for the 'unknown' row will the the raw
       percent share, whereas the resulting `pct_share` values for all other
       rows will be the percent share disregarding unknowns.

       df: DataFrame to generate the share_of_known column for.
       raw_count_to_pct_share: dictionary {raw_col_name: pct_share_col_name }
                    mapping a string column name for the raw condition count column to a
                    string column name for the resulting percent share of known / percent
                    share unknown column.
       breakdown_col: String column name representing the demographic breakdown
                      (race/sex/age).
       all_val: String representing an ALL demographic value in the dataframe.
       unknown_val: String representing an UNKNOWN value in the dataframe."""

    df = _generate_pct_share_col(
        df, raw_count_to_pct_share, breakdown_col, all_val)

    unknown_df = df.loc[df[breakdown_col] ==
                        unknown_val].reset_index(drop=True)
    if len(unknown_df) == 0:
        raise ValueError(('This dataset does not contains unknowns, use the'
                          'generate_pct_share_col_without_unknowns function instead'))

    all_df = df.loc[df[breakdown_col] == all_val].reset_index(drop=True)

    df = df.loc[~df[breakdown_col].isin({unknown_val, all_val})]

    groupby_cols = [std_col.STATE_FIPS_COL]
    if std_col.COUNTY_FIPS_COL in df.columns:
        groupby_cols.append(std_col.COUNTY_FIPS_COL)

    df = df.drop(columns=list(raw_count_to_pct_share.values()))

    alls = df.groupby(groupby_cols).sum().reset_index()
    alls[breakdown_col] = all_val
    df = pd.concat([df, alls]).reset_index(drop=True)

    df = _generate_pct_share_col(
        df, raw_count_to_pct_share, breakdown_col, all_val)

    df = df.loc[df[breakdown_col] != all_val]

    for share_of_known_col in raw_count_to_pct_share.values():
        all_df[share_of_known_col] = 100.0

    df = pd.concat([df, all_df, unknown_df]).reset_index(drop=True)
    return df


def _generate_pct_share_col(df, raw_count_to_pct_share, breakdown_col, all_val):
    def calc_pct_share(record, raw_count_col):
        return percent_avoid_rounding_to_zero(
            record[raw_count_col], record[f'{raw_count_col}_all'])

    rename_cols = {}
    for raw_count_col in raw_count_to_pct_share.keys():
        rename_cols[raw_count_col] = f'{raw_count_col}_all'

    alls = df.loc[df[breakdown_col] == all_val]
    alls = alls.rename(columns=rename_cols)

    on_cols = [std_col.STATE_FIPS_COL]
    if std_col.COUNTY_FIPS_COL in df.columns:
        on_cols.append(std_col.COUNTY_FIPS_COL)

    alls = alls[on_cols + list(rename_cols.values())]

    fips = std_col.COUNTY_FIPS_COL if std_col.COUNTY_FIPS_COL in df.columns else std_col.STATE_FIPS_COL

    # Ensure there is exactly one ALL value for each fips group.
    all_fips = df[fips].drop_duplicates().to_list()
    value_counts = alls[fips].value_counts()
    for f in all_fips:
        count = value_counts[f]
        if count != 1:
            raise ValueError(
                f'Fips {f} has {count} ALL rows, there should be 1')

    df = pd.merge(df, alls, how='left', on=on_cols)

    for raw_count_col, pct_share_col in raw_count_to_pct_share.items():
        df[pct_share_col] = df.apply(
            calc_pct_share, axis=1, args=(raw_count_col,))

    df = df.drop(columns=list(rename_cols.values()))
    return df.reset_index(drop=True)


def generate_per_100k_col(df, raw_count_col, pop_col, per_100k_col):
    """Returns a dataframe with a `per_100k` column

       df: DataFrame to generate the `per_100k_col` for.
       raw_count_col: String column name with the total number of people
                      who have the given condition.
       pop_col: String column name with the population number.
       per_100k_col: String column name to place the generated row in."""

    def calc_per_100k(record):
        per_100k = percent_avoid_rounding_to_zero(1000 * float(record[raw_count_col]),
                                                  float(record[pop_col]), 0, 0)
        if not pd.isna(per_100k):
            return round(per_100k, 0)
        return np.nan

    df[per_100k_col] = df.apply(calc_per_100k, axis=1)
    return df


def percent_avoid_rounding_to_zero(numerator, denominator, default_decimals=1, max_decimals=2):
    """Calculates percentage to `default_decimals` number of decimal places. If
       the percentage would round to 0, calculates with more decimal places until
       either it doesn't round to 0, or until `max_decimals`. `default_decimals`
       and `max_decimals` should be >= -1 and `max_decimals` should be >=
       `default_decimals`.

       Avoids division by zero errors and returns `0.0` instead"""

    if (float(denominator) == 0.0) or (numerator is None) or (denominator is None):
        return None

    decimals = default_decimals
    pct = round((float(numerator) / float(denominator) * 100), decimals)
    while pct == 0 and numerator != 0 and decimals < max_decimals:
        decimals += 1
        pct = round((float(numerator) / float(denominator) * 100), decimals)

    return pct


def ratio_round_to_None(numerator, denominator):
    """Calculates a ratio to one decimal point and rounds any number less than .1 to None
       so it is shown as the warning triangle sign on the frontend."""

    ratio = float(numerator) / float(denominator)

    if ratio < .1:
        return None

    return round(ratio, 1)


def add_sum_of_rows(df, breakdown_col, value_col, new_row_breakdown_val,
                    breakdown_vals_to_sum=None):
    """Returns a new DataFrame by appending rows by summing the values of other
       rows. Automatically groups by all other columns, so this won't work if
       there are extraneous columns.

       For example, calling
           `add_sum_of_rows(df, 'race', 'population', 'Total')`
       will group by all columns except for 'race' and 'population, and for each
       group add a row with race='Total' and population=the sum of population
       for all races in that group.

       df: The DataFrame to calculate new rows from.
       breakdown_col: The name of the breakdown column that a new value is being
                      summed over.
       value_col: The name of the column whose values should be summed.
       new_row_breakdown_val: The value to use for the breakdown column.
       breakdown_vals_to_sum: The list of breakdown values to sum across. If not
                              provided, defaults to summing across all values.
       """
    filtered_df = df
    if breakdown_vals_to_sum is not None:
        filtered_df = df.loc[df[breakdown_col].isin(breakdown_vals_to_sum)]

    group_by_cols = list(df.columns)
    group_by_cols.remove(breakdown_col)
    group_by_cols.remove(value_col)

    sums = filtered_df.groupby(group_by_cols).sum().reset_index()
    sums[breakdown_col] = new_row_breakdown_val

    result = pd.concat([df, sums])
    result = result.reset_index(drop=True)
    return result


def estimate_total(row, condition_name_per_100k):
    """Returns an estimate of the total number of people with a given condition.
        Parameters:
            row: a dataframe row containing a "per_100k" column with values for the incidence rate
                and a "population" column containing the total number of people
            condition_name_per_100k: string column name of the "per_100k" referenced above used for the calc
        Returns:
            float value representing the estimated raw total for the row
            """

    if (pd.isna(row[condition_name_per_100k]) or
        pd.isna(row[std_col.POPULATION_COL]) or
            int(row[std_col.POPULATION_COL]) == 0):
        return None

    return round((float(row[condition_name_per_100k]) / 100_000) * float(row[std_col.POPULATION_COL]))


def ensure_leading_zeros(df, fips_col_name: str, num_digits: int):
    """
    Ensure a column contains values of a certain digit length, adding leading zeros as needed.
    This could be used for 5 digit fips codes, or zip codes, etc.

    Parameters:
        df: dataframe containing a column of value that need leading zeros padded to
             ensure a consistent number of digits
        fips_col_name: string column name containing the values to be padded
        num_digits: how many digits should be present after leading zeros are added
    """
    df[fips_col_name] = df[fips_col_name].apply(
        lambda code: (str(code).rjust(num_digits, '0')))
    return df
