import * as React from "react";
import { RadialChart, Hint } from "react-vis";
import chroma from "chroma-js";
import { colors } from "../../../design-system";
import { isEmpty } from "lodash";
import Tip from "../../../components/Tip";
import Heading from "../components/Heading";
import Legend from "./Legend";
import {
  totalParticipants,
  gender,
} from "../../../content/ambassadors-report/metrics";

interface Props {}
const Gender: React.FC<Props> = () => {
  const [value, setValue]: any = React.useState({});

  const dataWithColors = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        const colorScale = chroma
          .scale([colors.coldWater, colors.green, colors.yellow])
          .mode("rgb")
          .colors(data.length);

        return colorScale[index];
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => ({
        ...item,
        color: getColor(index),
      }));
    }, []);

  const data = dataWithColors(gender);

  return (
    <div className="flex flex-column justify-between h-100">
      <Heading>Gender</Heading>
      <div className="flex justify-center">
        <RadialChart
          colorType="literal"
          innerRadius={85}
          radius={120}
          data={data}
          width={300}
          height={300}
          onValueMouseOver={(v: any) => {
            setValue({
              data: v,
              title: gender.find(item => item.label === v.label).label,
              metrics: [
                {
                  label: "Total",
                  value: gender.find(item => item.label === v.label).angle,
                },
                {
                  label: "Percentage",
                  value: `${(
                    (gender.find(item => item.label === v.label).angle /
                      totalParticipants) *
                    100
                  ).toFixed(2)}%`,
                },
              ],
            });
          }}
          onSeriesMouseOut={() => setValue({})}
        >
          {!isEmpty(value) && (
            <Hint value={value.data}>
              <Tip title={value.title} metrics={value.metrics} />
            </Hint>
          )}
        </RadialChart>
      </div>
      <Legend highlight={value.title} data={data} />
    </div>
  );
};

export default Gender;
