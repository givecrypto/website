import * as React from "react";
import { RadialChart, Hint } from "react-vis";
import { colors, shadows } from "../../../design-system";
import { isEmpty } from "lodash";
import Tip from "../../../components/Tip";
import {
  totalParticipants,
  gender,
} from "../../../content/ambassadors-report/metrics";

interface Props {}
const Gender: React.FC<Props> = () => {
  const [value, setValue]: any = React.useState({});

  return (
    <div>
      <p>Gender Metrics</p>
      <RadialChart
        colorRange={[colors.black, colors.blue, colors.green]}
        innerRadius={90}
        radius={120}
        data={gender}
        width={300}
        height={300}
        showLabels
        labelsStyle={{
          fill: colors.coldWater,
        }}
        onValueMouseOver={(v: any) => {
          setValue({
            data: v,
            title: gender.find(item => item.label === v.label).label,
            metrics: [
              {
                label: "Total",
                value: Math.floor(
                  totalParticipants *
                    (gender.find(item => item.label === v.label).angle * 0.01),
                ),
              },
              {
                label: "Percentage",
                value: `${gender.find(item => item.label === v.label).angle}%`,
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
  );
};

export default Gender;
