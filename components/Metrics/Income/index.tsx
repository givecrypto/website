import * as React from "react";
import chroma from "chroma-js";
import { RadialChart, Hint } from "react-vis";
import { colors } from "../../../design-system";
import { isEmpty } from "lodash";
import List from "../../../components/List";
import {
  totalParticipants,
  income,
} from "../../../content/ambassadors-report/metrics";
import Tip from "../../../components/Tip";

// Brighten/darken every other item
const colorRange = income.map((_, i) =>
  chroma(colors.green)
    [i % 2 == 0 ? "darken" : "brighten"](0.3 * i)
    .css(),
);

const listItems = (activeLabel: string) =>
  income.map((item, i) => ({
    id: `${i}`,
    highlight: activeLabel === item.label,
    color: colorRange[i],
    category: item.label,
    label: `Another ${item.subLabel}`,
    value: item.subLabel,
  }));

interface Props {}
const Income: React.FC<Props> = () => {
  const [value, setValue]: any = React.useState({});
  return (
    <div>
      <p>Income Metrics</p>
      <div className="flex flex-wrap">
        <div className="w-50">
          <RadialChart
            colorRange={colorRange}
            data={income}
            width={300}
            height={300}
            innerRadius={90}
            radius={120}
            showLabels
            labelsStyle={{
              fill: colors.coldWater,
            }}
            onValueMouseOver={(v: any) => {
              setValue({
                data: v,
                title: income.find(item => item.label === v.label).label,
                metrics: [
                  {
                    label: "Total",
                    value: Math.floor(
                      totalParticipants *
                        (income.find(item => item.label === v.label).angle *
                          0.01),
                    ),
                  },
                  {
                    label: "Percentage",
                    value: `${
                      income.find(item => item.label === v.label).angle
                    }%`,
                  },
                ],
              });
            }}
            onSeriesMouseOut={(v: any) => setValue({})}
          >
            {!isEmpty(value) && (
              <Hint value={value.data}>
                <Tip title={value.title} metrics={value.metrics} />
              </Hint>
            )}
          </RadialChart>
        </div>
        <div className="w-50">
          <List items={listItems(value.title)} />
        </div>
      </div>
    </div>
  );
};

export default Income;
