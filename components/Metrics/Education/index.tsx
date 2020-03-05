import * as React from "react";
import Heading from "../components/Heading";
import List from "../components/List";
import chroma from "chroma-js";
import { colors } from "../../../design-system";
import {
  education,
  totalParticipants,
} from "../../../content/ambassadors-report/metrics";
import BarLine from "./BarLine";

interface Props {}

const Education: React.FC<Props> = () => {
  const [highlightId, setHighlightId]: any = React.useState(null);

  const dataWithColors = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        const colorScale = chroma
          .scale([colors.blue, colors.blueDark])
          .mode("rgb")
          .colors(data.length);

        return colorScale[index];
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => ({
        ...item,
        color: getColor(index),
      }));
    }, [highlightId]);

  const listItems = React.useMemo(
    () =>
      dataWithColors(education)
        .slice()
        .map((item, i) => ({
          id: `${i}`,
          color: item.color,
          category: item.label,
          label: `${Math.floor(
            (item.angle * totalParticipants) / 100,
          )} Recipients`,
          value: `${item.angle}%`,
        })),
    [highlightId],
  );

  const handleHighlightChange = (label?: string) => {
    setHighlightId(label);
  };

  return (
    <div className="w-100 pl3">
      <Heading>Education</Heading>
      <BarLine
        description="have completed"
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
  );
};

export default Education;
