/**
 * A Circle Chart that visualizes data trends over time
 * Uses d3.js to apply data transformations and draw circles on an SVG
 * returns jsx of an svg group parent of many circle children distributed along an x-axis
 */

/* External Imports */
import React from "react";
import { ScaleTime, scaleSqrt, scaleLinear, extent, min, max } from "d3";

/* Local Imports */

/* Components */

/* Styles */
import styles from "./Trends.module.scss";

/* Constants */
import { CONFIG, UNKNOWN_GROUP_COLOR_EXTENT } from "./constants";

/* Helpers */

/* Define type interface */
export interface CircleChartProps {
  data: [Date, number][];
  xScale: ScaleTime<number, string | number | undefined>;
}

/* Render component */
export function CircleChart({ data, xScale }: CircleChartProps) {
  /* Config */
  const { WIDTH, HEIGHT, MARGIN, RADIUS_EXTENT } = CONFIG;

  /* Scales */
  const percentDomain =
    data && data.map(([_, percent]: [Date, number]) => percent);
  const unknownGroupExtent: [number, number] = extent(percentDomain);

  // radius scale for circles
  const rScale = scaleSqrt(unknownGroupExtent, RADIUS_EXTENT);
  // color interpolation scale
  const colors = scaleLinear(unknownGroupExtent, UNKNOWN_GROUP_COLOR_EXTENT);

  /* Helpers */
  function getLegendValues() {
    const maxPercent = max(percentDomain);
    const minPercent = min(percentDomain);
    const midPercent = maxPercent - minPercent / 2;
    return [minPercent, midPercent, maxPercent];
  }

  return (
    <g>
      <g transform={`translate(0, ${HEIGHT - MARGIN.bottom + 30})`}>
        {data &&
          data.map(([date, percent]: [Date, number], i: number) => (
            <circle
              key={`circle-${i}`}
              r={rScale(percent)}
              cx={xScale(new Date(date))}
              fill={colors(percent)}
            />
          ))}
      </g>
      <g
        className={styles.AxesLabels}
        transform={`translate(${MARGIN.left + (WIDTH - MARGIN.right) / 2}, ${
          HEIGHT - 30
        })`}
      >
        <text className={styles.AxisLabel} textAnchor="end" dx="-20px" dy="2px">
          Percent Unknown Group
        </text>
        {getLegendValues().map((percent, i) => (
          <g
            key={`legendCircle-${i}`}
            transform={`translate(${i * 3 * RADIUS_EXTENT[1]}, 0)`}
          >
            <circle r={rScale(percent)} fill={colors(percent)} />
            <text textAnchor="middle" dy="30px">
              {percent?.toFixed(0)}
              {"%"}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
}
