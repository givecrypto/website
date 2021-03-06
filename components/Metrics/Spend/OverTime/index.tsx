import * as React from "react";
import Heading from "../../components/Heading";
import useMeasure from "../../../../utils/useMeasure";
import { format } from "date-fns";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  Hint,
  LineMarkSeries,
} from "react-vis";
import { colors } from "../../../../design-system";
import { isEmpty } from "lodash";

// Data Import
import valueData from "../../../../content/ambassadors-report/data/crypto-spend-value.csv";
const MAX_TICKS = 4;

const asCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  });
  return formatter.format(amount);
};

const asCurrencyFloor = (amount: number) => {
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
  const [value, setValue] = React.useState({});

  return (
    <>
      <Heading>Spend Per Day</Heading>
      <div
        className="flex items-center justify-center justify-between-l"
        ref={ref}
      >
        <div onMouseOut={() => setValue({})}>
          <XYPlot
            xType="time"
            width={width}
            height={400}
            margin={{ right: 20 }}
          >
            <HorizontalGridLines />
            <XAxis
              title="Date"
              tickTotal={
                valueData.length > MAX_TICKS ? MAX_TICKS : valueData.length
              }
              tickFormat={val => `${format(val, "MMM d")}`}
              tickLabelAngle={width < 600 ? -35 : 0}
            />
            <YAxis
              tickFormat={value => asCurrencyFloor(value)}
              width={60}
              title="Amount in USD"
            />
            <LineMarkSeries
              animation
              curve={"curveMonotoneX"}
              color={colors.blue}
              onNearestXY={setValue}
              data={valueData.map(({ Date: date, Spend }) => {
                return {
                  x: new Date(date),
                  y: Number(Spend.replace(/[^0-9.-]+/g, "")),
                };
              })}
            />
            {!isEmpty(value) && (
              <Hint
                format={thing => [
                  {
                    title: (
                      <span>{format(new Date(thing.x), "MMM dd, yyyy")}</span>
                    ),
                    value: <b>{asCurrency(thing.y)}</b>,
                  },
                ]}
                value={value}
              />
            )}
          </XYPlot>
        </div>
      </div>
    </>
  );
};

export default OverTime;
