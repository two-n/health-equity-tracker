import React from "react";
import styles from "./LandingPage.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { EXPLORE_DATA_PAGE_LINK } from "../../utils/urlutils";
import { Accordion, AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Grid container className={styles.Grid}>
        <Grid
          container
          className={styles.GridOutlinedImgRow}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6} className={styles.GridVerticallyAlignedItem}>
            <Typography className={styles.HeaderText}>
              Equity Forward
            </Typography>
            <br />
            <Typography className={styles.HeaderSubtext}>
              <p>
                We know that our communities are experiencing life or death
                situations due to the inequities, conditions and policies into
                which they are born, grow, learn, work and age.
              </p>
              <p>
                We work to collect the data needed to identify and address these
                inequities.
              </p>
              <br />
            </Typography>
            <a href={EXPLORE_DATA_PAGE_LINK} className={styles.PrimaryButton}>
              Explore the Health Equity Tracker
            </a>
          </Grid>
          <Grid item xs={6} className={styles.HeaderImgItem}>
            <img
              src="img/shutterstock_1414416191 2 (1).png"
              className={styles.HeaderImg}
              alt="A man and woman laying with their two children"
            />
          </Grid>
        </Grid>

        <Grid
          container
          className={styles.GridOutlinedRow}
          direction="column"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography className={styles.HeaderL2Text}>
              Take a look around
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={styles.HeaderSubtext}>
              We’re working toward health equity, but can’t do it alone. Please
              join our effort to move the needle forward.
            </Typography>
          </Grid>

          <Grid
            container
            className={styles.GridSubRow}
            direction="row"
            justify="space-around"
          >
            <Grid item xs={4} className={styles.TakeALookAroundItem}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <img
                    className={styles.TakeALookAroundImg}
                    src="img/Dots_1@2x 5.png"
                    alt="Decorative dots"
                  />
                </Grid>
                <Grid item>
                  <Typography className={styles.HeaderSubtextL2}>
                    <p>(1) Learn about health equity</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} className={styles.TakeALookAroundItem}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <img
                    className={styles.TakeALookAroundImg}
                    src="img/Asset 3@2x 4.png"
                    alt="Decorative thick lines"
                  />
                </Grid>
                <Grid item>
                  <Typography className={styles.HeaderSubtextL2}>
                    <p>(2) Investigate the data</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} className={styles.TakeALookAroundItem}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <img
                    className={styles.TakeALookAroundImg}
                    src="img/Asset 4@2x 2 (1).png"
                    alt="Decorative circular pattern"
                  />
                </Grid>
                <Grid item>
                  <Typography className={styles.HeaderSubtextL2}>
                    <p>(3) Share our site and join our movement</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.GridSubRow}
            direction="row"
            justify="center"
          >
            <Grid item xs={2}>
              <a href="/whatishealthequity" className={styles.PrimaryButton}>
                Learn more
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={styles.GridOutlinedImgRow}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={5} className={styles.DecorativeHImgItem}>
            <div className={styles.DecorativeHImgContainer}>
              <img
                src="img/Asset 10@3x 1.png"
                className={styles.DecorativeHImg}
                alt="A decorative letter H centered on an orange background"
              />
            </div>
          </Grid>
          <Grid item xs={7} className={styles.GridVerticallyAlignedItem}>
            <Typography className={styles.HeaderL2Text}>
              It's time to prioritize health equity
            </Typography>
            <br />
            <Typography className={styles.HeaderSubtext}>
              <p>
                We’re living through a historical moment. COVID-19 has taken a
                toll on everyone. But the pandemic is hitting the most
                marginalized, vulnerable communities the hardest.
              </p>
              <p>
                <b>People need help, and they need it now.</b>
              </p>
              <br />
              <a className={styles.MinorLink} href="/whatishealthequity">
                Learn more about health equity
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={styles.GridOutlinedRow}>
          <Grid item xs={12}>
            <Typography className={styles.HeaderText}>
              How do I use the Data Tracker?
            </Typography>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              className={styles.HowToStepContainer}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={8}>
                <img
                  className={styles.HowToStepImg}
                  src="img/ezgif 2.png"
                  alt="Screenshot of Data Tracker - selecting mad libs"
                />
              </Grid>
              <Grid item xs={3}>
                <div>
                  <p className={styles.HowToTextHeader}>
                    Search by completing the sentence
                  </p>
                  <p className={styles.HowToTextSubheader}>
                    Select variables you’re interested in to complete the
                    sentence and explore the data
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              className={styles.HowToStepContainer}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={8}>
                <img
                  className={styles.HowToStepImg}
                  src="img/ezgif 5.png"
                  alt="Screenshot of Data Tracker - using filters"
                />
              </Grid>
              <Grid item xs={3}>
                <div>
                  <p className={styles.HowToTextHeader}>
                    Use filters to go deeper
                  </p>
                  <p className={styles.HowToTextSubheader}>
                    Where available, the tracker offers breakdowns by race and
                    ethnicity, sex, and age. This is currently limited to the
                    national and state level, with county-level data coming
                    soon.
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              className={styles.HowToStepContainer}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={8}>
                <img
                  className={styles.HowToStepImg}
                  src="img/ezgif 6.png"
                  alt="Screenshot of Data Tracker - map of the US"
                />
              </Grid>
              <Grid item xs={3}>
                <div>
                  <p className={styles.HowToTextHeader}>
                    Explore maps and graphs
                  </p>
                  <p className={styles.HowToTextSubheader}>
                    The interactive maps and graphs are a great way to
                    investigate the data more closely. If a state or county is
                    gray, that means there’s no data currently available.
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid item>
              <br />
              <br />
              <a href={EXPLORE_DATA_PAGE_LINK} className={styles.PrimaryButton}>
                Explore the Tracker
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={styles.GridOutlinedRow}>
          <Grid item xs={12}>
            <Typography className={styles.FaqHeader}>
              Frequently asked questions
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.FaqQAItem}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.FaqQuestion}>
                  What is health equity? Why is it important?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.FaqAnswer}>
                  <p>
                    The World Health Organization defines health equity “as the
                    absence of unfair and avoidable or remediable differences in
                    health among population groups defined socially,
                    economically, demographically or geographically”.
                  </p>
                  <p>
                    Health Equity exists when all people, regardless of race,
                    gender, socio-economic status, geographic location, or other
                    societal constructs have the same access, opportunity, and
                    resources to achieve their highest potential for health
                    (Health Equity Leadership and Exchange Network).
                  </p>
                  <p>
                    Health equity is important because everyone, regardless of
                    race, ethnicity, gender, or socioeconomic status, should
                    have the opportunity to reach their full potential and
                    achieve optimal health.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.FaqQuestion}>
                  What are disparities?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.FaqAnswer}>
                  <p>
                    Health disparities are preventable differences in the burden
                    of disease, injury, violence, or in opportunities to achieve
                    optimal health experienced by socially disadvantaged racial,
                    ethnic, and other population groups, and communities. (CDC)
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.FaqQuestion}>
                  What data sources did you use? Why?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.FaqAnswer}>
                  <p>
                    In this tracker, we are using many sources, including{" "}
                    <a href="https://www.census.gov/data/developers/data-sets/acs-5year.html">
                      American Community Survey 5-year estimates (2015-2019)
                    </a>
                    ,{" "}
                    <a href="https://www.cdc.gov/brfss/index.html">
                      CDC’s BRFSS data set
                    </a>
                    , and{" "}
                    <a href="https://covidtracking.com/race">
                      COVID Tracking Project’s Racial Data Tracker
                    </a>
                    . Some sources are “real-time”, like case data, but other
                    important data, such as information around social
                    determinants of health can lag from weeks to years. For the
                    moment, this is our best representation of how the country
                    is doing based on publicly available information.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.FaqQuestion}>
                  What are the limitations in the data?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.FaqAnswer}>
                  <p>
                    Unfortunately, with these publicly available data sets,
                    there are crucial gaps, including but not limited to:{" "}
                  </p>
                  <ul>
                    <li>
                      comprehensive city-, census tract-, and county-level data
                    </li>
                    <li>comprehensive race and ethnicity breakdowns</li>
                    <li>comprehensive gender and age breakdowns</li>
                  </ul>
                  <span className={styles.FaqSubheaderText}>
                    Known limitations in the data
                  </span>
                  <ul>
                    <li>
                      To protect the privacy of affected individuals, COVID-19
                      data may be hidden in counties with smaller numbers of
                      COVID-19 cases, hospitalizations and deaths.
                    </li>
                    <li>
                      Specific racial and ethnic categories (e.g. “Native
                      Hawaiian,” “Alaska Native”) differ by source and can be
                      inappropriately obscured by broader categories (e.g.
                      “Other,” “Asian”).
                    </li>
                    <li>
                      National statistics are aggregations of state-wide data.
                      If state data is not available, these aggregations may be
                      incomplete and potentially skewed.
                    </li>
                    <li>
                      We typically refresh our data sources with newly available
                      data within a few days. Seeking the latest information?
                      Please navigate to the data sources directly.
                    </li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.FaqQuestion}>
                  What was your methodology in ingesting the data?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.FaqAnswer}>
                  <ul>
                    <li>
                      Our data is retrieved via a mix of APIs and manual
                      downloads
                    </li>
                    <li>
                      Once acquired, this data is converted to tables in Google
                      BigQuery
                    </li>
                    <li>
                      During this process, values are standardized and
                      normalized to facilitate reporting, comparison and
                      visualization
                    </li>
                    <li>
                      Sources are refreshed when update notifications are
                      received
                    </li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item>
            <a href="/aboutus" className={styles.FaqLink}>
              See our full FAQ page
            </a>
          </Grid>
        </Grid>

        <Grid container className={styles.GridOutlinedRow}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={styles.EmailAddressBackgroundImgContainer}
          >
            <div className={styles.EmailAddressContentDiv}>
              <Grid item>
                <Typography className={styles.NewsletterRowHeader}>
                  Engage in
                  <br />
                  Health Equity
                </Typography>
              </Grid>
              <Grid item>
                <form className={styles.EmailAddressForm}>
                  <input
                    className={styles.EmailAddressFormText}
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                  />
                  <input
                    className={styles.EmailAddressFormSubmit}
                    type="submit"
                    value="Sign up"
                  />
                </form>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
