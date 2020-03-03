import * as React from "react";
import {
  YAxis,
  XAxis,
  VerticalGridLines,
  XYPlot,
  HorizontalBarSeries,
} from "react-vis";
import { colors } from "../../../design-system";
import { age } from "../../../content/ambassadors-report/metrics";
import useMeasure from "../../../utils/useMeasure";

interface Props {}

const Age: React.FC<Props> = () => {
  const ref = React.useRef();
  const { width } = useMeasure(ref);

  console.log(width);
  return (
    <div ref={ref}>
      <p>Age Metrics</p>
      <XYPlot
        yType="ordinal"
        height={275}
        width={width - 100}
        xDistance={100}
        style={{
          overflow: "visible",
        }}
      >
        <VerticalGridLines animation={{ damping: 15, stiffness: 110 }} />
        <XAxis animation={{ damping: 14, stiffness: 100 }} />
        <YAxis />
        <HorizontalBarSeries
          animation={{ damping: 14, stiffness: 100 }}
          barWidth={0.6}
          data={age}
          style={{}}
          color={colors.yellow}
        />
      </XYPlot>
    </div>
  );
};

export default Age;
