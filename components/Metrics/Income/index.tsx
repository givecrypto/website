import * as React from "react";

interface Props {}

const Income: React.FC<Props> = props => {
  console.log(props);

  return (
    <div>
      <p>Income Metrics</p>
    </div>
  );
};

export default Income;
