import * as React from "react";
import useMeasure from "../../../../utils/useMeasure";
import Heading from "../../components/Heading";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
} from "react-vis";
import { colors } from "../../../../design-system";

const asCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 2,
    style: "currency",
    currency: "usd",
  });
  return formatter.format(amount);
};

const Value = ({ data }: any) => {
  const ref = React.useRef();
  const { width = 1440 } = useMeasure(ref);

  return (
    <div className="pv4">
      <Heading>Spend Per Day</Heading>
      <div className="flex flex-wrap items-end mb4">
        <div className="w-100">
          <div
            className="flex items-center justify-center justify-between-l"
            ref={ref}
          >
            <div>
              <XYPlot xType="time" width={width} height={400}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="Date" tickTotal={data.length} />
                <YAxis
                  tickFormat={value => asCurrency(value)}
                  title="Amount Spend in USD"
                />
                <LineMarkSeries
                  animation
                  curve={"curveMonotoneX"}
                  color={colors.blue}
                  data={data.map(({ Date: date, Amount }) => {
                    return {
                      x: new Date(date),
                      y: Number(Amount.replace(/[^0-9.-]+/g, "")),
                    };
                  })}
                />
              </XYPlot>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
