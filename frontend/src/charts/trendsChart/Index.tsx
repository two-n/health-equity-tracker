/**
 * A parent component with a Filter, Line Chart and optional Circle Chart that visualizes data trends over time
 * Uses d3.js to apply data transformations and draw the lines and circles on an SVG
 * returns jsx of a div encapsulating a div containing legend items which can be used to filter and and svg with data visualization
 */

/* External Imports */
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  scaleOrdinal,
  scaleTime,
  scaleLinear,
  extent,
  min,
  max,
  bisector,
} from "d3";

/* Local Imports */

/* Components */
import { FilterLegend } from "./FilterLegend";
import { LineChart } from "./LineChart";
import { Axes } from "./Axes";
import { CircleChart } from "./CircleChart";
import { TrendsTooltip } from "./TrendsTooltip";

/* Styles */
import styles from "./Trends.module.scss";

/* Constants */
import { COLOR_RANGE, CONFIG } from "./constants";
import { UnknownData, TrendsData, AxisConfig } from "./types";

/* Helpers */
import { filterDataByGroup } from "./helpers";

/* Define type interface */
export interface TrendsChartProps {
  data: TrendsData;
  unknown: UnknownData;
  axisConfig: AxisConfig;
}

/* Render component */
export function TrendsChart({
  data = [],
  unknown,
  axisConfig,
}: TrendsChartProps) {
  /* Config */
  const { STARTING_WIDTH, HEIGHT, MARGIN, MOBILE } = CONFIG;

  /* Refs */
  // parent container ref - used for setting svg width
  const containerRef = useRef(null);

  /* State Management */
  // Manages which group filters user has applied
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  // svg width
  const [[width, isMobile], setWidth] = useState<[number, boolean]>([
    STARTING_WIDTH,
    false,
  ]);
  // Manages tooltip
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  /* Effects */
  // resets svg width on window resize, only sets listener after first render (so ref is defined)
  useEffect(() => {
    function setDimensions() {
      const isMobile = window.innerWidth < 600;
      // @ts-ignore
      setWidth([containerRef.current.getBoundingClientRect().width, isMobile]);
    }
    setDimensions();
    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  /* Memoized constants */

  // Data filtered by user selected
  const filteredData = useMemo(
    () =>
      selectedGroups.length ? filterDataByGroup(data, selectedGroups) : data,
    [selectedGroups]
  );

  // Display unknowns or not - affects margin below line chart
  const showUnknowns = useMemo(
    () => unknown && unknown.find(([, percent]) => percent > 0),
    [unknown]
  );

  // Margin below line chart - create space for unknown circles
  const marginBottom = useMemo(
    () => (showUnknowns ? MARGIN.bottom_with_unknowns : MARGIN.bottom),
    [unknown]
  );

  // Margin to left of line chart - different on mobile & desktop
  const marginLeft = useMemo(
    () => (isMobile ? MOBILE.MARGIN.left : MARGIN.left),
    [isMobile]
  );

  /* Scales */
  const colors = scaleOrdinal(
    data.map(([group]) => group),
    COLOR_RANGE
  );

  const dates =
    filteredData && filteredData.length
      ? filteredData.flatMap(
          ([_, d]) =>
            d && // @ts-ignore
            d.map(([date]: [string]) => date)
        )
      : [];
  // TODO: how to handle case when extent is made of undefined values
  // implement error boundary or error handling?
  const xExtent: [Date, Date] | [undefined, undefined] = extent(
    dates.map((date) => new Date(date))
  );

  const yValues =
    filteredData && filteredData.length
      ? filteredData.flatMap(([_, d]) =>
          // @ts-ignore
          d ? d.map(([_, amount]: [string, number]) => amount || 0) : [0]
        )
      : [0];

  // @ts-ignore
  const yMin = min(yValues) < 0 ? min(yValues) : 0; // if numbers are all positive, y domain min should be 0
  const yMax = max(yValues) ? max(yValues) : 0;
  const yExtent: [number, number] = [yMin as number, yMax as number];

  const xScale = scaleTime(xExtent as [Date, Date], [
    isMobile ? MOBILE.MARGIN.left : MARGIN.left,
    (width as number) - MARGIN.right,
  ]);

  const yScale = scaleLinear(yExtent as [number, number], [
    HEIGHT - marginBottom,
    MARGIN.top,
  ]);

  /* Event Handlers */
  function handleClick(selectedGroup: string | null) {
    // Toggle selected group
    const newSelectedGroups =
      selectedGroup === null
        ? [] // if selectedGroup has null value, clear selected group array to remove filter
        : selectedGroups.includes(selectedGroup) // otherwise update the array with newly selected or removed group
        ? selectedGroups.filter((group) => group !== selectedGroup)
        : [...selectedGroups, selectedGroup];
    // Set new array of selected groups to state
    setSelectedGroups(newSelectedGroups);
  }

  const handleMousemove = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      const { clientX } = e;
      // need to offset by how far the element is from edge of page
      const { x: parentX } =
        e.currentTarget.parentElement.getBoundingClientRect();
      const invertedDate = xScale.invert(clientX - parentX);
      const bisect = bisector((d) => d);
      const closestIdx = bisect.left(
        dates.map((d) => new Date(d)),
        invertedDate
      );
      console.log("closestDate", dates[closestIdx]);
      if (hoveredDate != dates[closestIdx] && dates[closestIdx]) {
        setHoveredDate(dates[closestIdx]);
      }
      // not sure why '-1' but it works?
    },
    [dates, xScale]
  );

  useEffect(() => {
    console.log("hoveredDateUpdate", hoveredDate);
  }, [hoveredDate]);
  return (
    // Container
    <div className={styles.TrendsChart} ref={containerRef}>
      <div className={styles.FilterWrapper}>
        {/* Filter */}
        {data && colors && (
          <FilterLegend
            data={data}
            selectedGroups={selectedGroups}
            colors={colors}
            handleClick={handleClick}
          />
        )}
      </div>
      <div
        className={styles.TooltipWrapper}
        style={{
          transform: `translate(${
            xScale(new Date(hoveredDate)) > width / 2
              ? xScale(new Date(hoveredDate)) - 220
              : xScale(new Date(hoveredDate)) + 10
          }px, ${MARGIN.top}px)`,
          opacity: hoveredDate ? 1 : 0,
        }}
      >
        <TrendsTooltip
          data={filteredData}
          colors={colors}
          type={axisConfig[0]}
          selectedGroups={selectedGroups}
          selectedDate={hoveredDate}
        />
      </div>
      {/* Chart */}
      {filteredData && xScale && yScale && colors && (
        <svg
          height={CONFIG.HEIGHT}
          width={width as number}
          role="img"
          onMouseMove={handleMousemove}
          onMouseLeave={() => setHoveredDate(null)}
          // TODO link accompanying table here for accesibility
          // aria-describedby={}
        >
          {/* Chart Axes */}
          <Axes
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            width={width as number}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            axisConfig={axisConfig}
            isMobile={isMobile}
          />
          {/* Lines */}
          <LineChart
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            colors={colors}
          />
          <line
            className={styles.IndicatorLine}
            style={{
              transform: `translateX(${xScale(new Date(hoveredDate))}px)`,
            }}
            stroke={hoveredDate ? "black" : "transparent"}
            y1={HEIGHT - marginBottom}
            y2={MARGIN.top}
            x1={0}
            x2={0}
          />

          {/* // TODO: move this check up into parent component (only pass unknown if there is an unknown greater than 0) */}
          {/* Only render unknown group circles when there is data for which the group is unknown */}
          {showUnknowns && (
            <CircleChart
              data={unknown}
              xScale={xScale}
              width={width}
              isMobile={isMobile}
              marginLeft={marginLeft}
            />
          )}
        </svg>
      )}
    </div>
  );
}
