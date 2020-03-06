import * as React from "react";
import chroma from "chroma-js";
import { RadialChart } from "react-vis";
import { colors, shadows } from "../../../design-system";
import List from "../components/List";
import {
  household,
  totalParticipants,
} from "../../../content/ambassadors-report/metrics";
import { isNil } from "lodash";
import BarLine from "../Education/BarLine";
import Heading from "../components/Heading";

interface Props {}
const Household: React.FC<Props> = () => {
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

  const listItems = dataWithColors(household)
    .slice()
    .map((item, i) => ({
      id: `${i}`,
      color: item.color,
      category: item.label,
      label: `${item.angle} Recipients`,
      value: `${((item.angle / totalParticipants) * 100).toFixed(2)}%`,
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
      <div className="flex flex-wrap items-center mb4">
        <div className="w-100 w-40-l pv4">
          <div className="flex items-center justify-center justify-between-l">
            <RadialChart
              colorType="literal"
              data={dataWithColors(household)}
              width={300}
              height={300}
              innerRadius={85}
              radius={120}
              animation
              style={{
                boxShadow: shadows.card,
              }}
              onValueMouseOver={(v: any) => {
                handleHighlightChange(
                  household.find(item => item.label === v.label).label,
                );
              }}
              onSeriesMouseOut={() => {
                handleHighlightChange();
              }}
            />
          </div>
        </div>
        <div className="w-100 w-60-l">
          <BarLine
            description="have a housold size of"
            items={listItems}
            highlightId={highlightId}
            onHighlight={handleHighlightChange}
          />
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

export default Household;
