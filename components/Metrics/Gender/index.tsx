import * as React from "react";
import { RadialChart } from "react-vis";

interface Props {}

const Gender: React.FC<Props> = props => {
  // Let there be props
  console.log("props", props);

  const data = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];

  return (
    <div>
      <p>Gender Metrics</p>
      <RadialChart
        innerRadius={90}
        radius={120}
        data={data}
        width={300}
        height={300}
      />
    </div>
  );
};

export default Gender;
