import * as React from "react";

interface Props {}

const Gender: React.FC<Props> = props => {
  console.log(props);

  return (
    <div>
      <p>Gender Metrics</p>
    </div>
  );
};

export default Gender;
