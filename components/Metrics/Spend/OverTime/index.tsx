import * as React from "react";
import Heading from "../../components/Heading";
import useMeasure from "../../../../utils/useMeasure";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
} from "react-vis";
import { colors } from "../../../../design-system";

// Data Import
import valueData from "../../../../content/ambassadors-report/data/crypto-spend-value.csv";

const asCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 2,
    style: "currency",
    currency: "usd",
  });
  return formatter.format(amount);
};

const OverTime = () => {
  const ref = React.useRef();
  const { width = 1440 } = useMeasure(ref);

  return (
    <>
      <Heading>Spend Per Day</Heading>
      <div
        className="flex items-center justify-center justify-between-l"
        ref={ref}
      >
        <div>
          <XYPlot xType="time" width={width} height={400}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="Date" tickTotal={valueData.length} />
            <YAxis
              tickFormat={value => asCurrency(value)}
              title="Amount in USD"
            />
            <LineMarkSeries
              animation
              curve={"curveMonotoneX"}
              color={colors.blue}
              data={valueData.map(({ Date: date, Amount }) => {
                return {
                  x: new Date(date),
                  y: Number(Amount.replace(/[^0-9.-]+/g, "")),
                };
              })}
            />
          </XYPlot>
        </div>
      </div>
    </>
  );
};

export default OverTime;
