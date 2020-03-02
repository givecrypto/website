import * as React from "react";

interface Props {}

const Age: React.FC<Props> = props => {
  console.log(props);

  return (
    <div>
      <p>Age Metrics</p>
    </div>
  );
};

export default Age;
