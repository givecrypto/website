import * as React from "react";
import chroma from "chroma-js";
import {
  YAxis,
  XAxis,
  HorizontalGridLines,
  XYPlot,
  VerticalBarSeries,
} from "react-vis";
import { colors } from "../../../design-system";
import List from "../components/List";
import {
  householdBar,
  totalParticipants,
} from "../../../content/ambassadors-report/metrics";
import { isNil } from "lodash";
import BarLine from "../Education/BarLine";
import Heading from "../components/Heading";
import useMeasure from "../../../utils/useMeasure";

interface Props {}
const HouseholdBarChart: React.FC<Props> = () => {
  const ref = React.useRef();
  const wRef = React.useRef();
  const { height } = useMeasure(ref);
  const { width } = useMeasure(wRef);
  const [highlightId, setHighlightId]: any = React.useState(null);

  // Hold on to any timers
  const timers = [];

  const dataWithColors = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        const colorScale = chroma
          .scale([colors.blueDark, colors.red])
          .mode("rgb")
          .colors(data.length);

        if (isNil(highlightId)) {
          return colorScale[index];
        } else {
          return index === data.findIndex(a => a.label === highlightId)
            ? chroma.mix(colorScale[index], colors.coldWater).css()
            : colorScale[index];
        }
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => ({
        ...item,
        color: getColor(index),
      }));
    }, [highlightId]);

  const listItems = dataWithColors(householdBar)
    .slice()
    .map((item, i) => ({
      id: `${i}`,
      color: item.color,
      category: item.x,
      label: `${item.y} Recipients`,
      value: `${((item.y / totalParticipants) * 100).toFixed(2)}%`,
    }));

  const handleHighlightChange = (label?: string) => {
    timers.map(clearTimeout);
    timers.push(
      setTimeout(() => {
        setHighlightId(label);
      }, 10),
    );
  };

  return (
    <div className="pv4">
      <Heading>Household Size</Heading>
      <div className="flex flex-wrap items-end mb4">
        <div className="w-100">
          <BarLine
            description="have a housold size of"
            items={listItems}
            highlightId={highlightId}
            onHighlight={handleHighlightChange}
          />
        </div>
        <div className="w-100 w-60-l">
          <div
            className="flex items-center justify-center justify-between-l"
            ref={wRef}
          >
            <div>
              <XYPlot
                xType="ordinal"
                height={height}
                width={width - 60}
                xDistance={100}
                style={{
                  overflow: "visible",
                }}
              >
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                  colorType="literal"
                  animation={{ damping: 14, stiffness: 100 }}
                  barWidth={0.6}
                  data={dataWithColors(householdBar)}
                  onValueMouseOver={(v: any) => {
                    handleHighlightChange(
                      householdBar.find(item => item.x === v.x).x,
                    );
                  }}
                />
              </XYPlot>
            </div>
          </div>
        </div>
        <div className="w-100 w-40-l pb0 pb3-l" ref={ref}>
          <List
            items={listItems}
            highlightId={highlightId}
            onHighlight={handleHighlightChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HouseholdBarChart;
