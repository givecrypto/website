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
import Heading from "../components/Heading";

interface Props {}

const Age: React.FC<Props> = () => {
  const ref = React.useRef();
  const { width } = useMeasure(ref);

  return (
    <div ref={ref} className="pv4">
      <Heading>Age</Heading>
      <XYPlot
        yType="ordinal"
        height={275}
        width={width}
        xDistance={100}
        style={{
          overflow: "visible",
        }}
      >
        <VerticalGridLines />
        <XAxis />
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
