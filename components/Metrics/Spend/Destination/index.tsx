import * as React from "react";
import { RadialChart, Hint } from "react-vis";
import chroma from "chroma-js";
import { colors } from "../../../../design-system";
import { isEmpty } from "lodash";
import Tip from "../../../../components/Tip";
import Heading from "../../components/Heading";
import Legend from "./Legend";

// Data Import
import destinationData from "../../../../content/ambassadors-report/data/crypto-spend-destination.csv";
const totalReducer = (acc: number, curr: number) => acc + curr;

interface Props {}

const colorScale = chroma
  .scale(["#72664F", "#59503E", colors.yellowDark, "#AE8544"])
  .mode("rgb")
  .colors(destinationData.length);

const Gender: React.FC<Props> = () => {
  const [value, setValue]: any = React.useState({});

  // Hold on to any timers
  const timers = [];

  const dataWithColors = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        if (isEmpty(value)) {
          return colorScale[index];
        } else {
          return index ===
            destinationData.findIndex(a => a.Destination === value.title)
            ? colorScale[index]
            : chroma.mix(colorScale[index], colors.white).css();
        }
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => ({
        ...item,
        angle: Number(item.Amount.replace(/[^0-9.-]+/g, "")),
        color: getColor(index),
      }));
    }, [value]);

  const totalSpent = React.useMemo(
    () =>
      destinationData.reduce(
        (acc: number, { Amount }: any) =>
          totalReducer(acc, Number(Amount.replace(/[^0-9.-]+/g, ""))),
        0,
      ),
    [],
  );

  const dataForLegend = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        if (isEmpty(value)) {
          return colorScale[index];
        } else {
          return index ===
            destinationData.findIndex(a => a.Destination === value.title)
            ? colorScale[index]
            : chroma.mix(colorScale[index], colors.white).css();
        }
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => {
        return {
          label: item.Destination,
          color: getColor(index),
        };
      });
    }, [value]);

  const data = dataWithColors(destinationData);

  const handleValueChange = (v: any) => {
    timers.map(clearTimeout);
    timers.push(
      setTimeout(() => {
        const value = isEmpty(v)
          ? null
          : v.x
          ? data.find(item => item.Destination === v.Destination)
          : data.find(item => item.Destination === v.label);

        setValue(
          isEmpty(v) || !value
            ? {}
            : {
                data: {
                  x: 0,
                  y: 0,
                  ...v,
                },
                title: value.Destination,
                metrics: [
                  {
                    label: "Amount Spent",
                    value: value.Amount,
                  },
                  {
                    label: "Percentage",
                    value: `${((value.angle / totalSpent) * 100).toFixed(2)}%`,
                  },
                ],
              },
        );
      }, 100),
    );
  };

  return (
    <div className="flex flex-column justify-between h-100">
      <Heading>Spending by Category</Heading>
      <div className="flex justify-center">
        <RadialChart
          colorType="literal"
          animation={{ damping: 14, stiffness: 100 }}
          innerRadius={85}
          radius={120}
          data={data}
          width={300}
          height={300}
          onValueMouseOver={handleValueChange}
          onSeriesMouseOut={() => handleValueChange({})}
        >
          {!isEmpty(value) && (
            <Hint value={value.data}>
              <Tip title={value.title} metrics={value.metrics} />
            </Hint>
          )}
        </RadialChart>
      </div>
      <Legend
        onHighlight={handleValueChange}
        highlight={value.title}
        data={dataForLegend(data)}
      />
    </div>
  );
};

export default Gender;
