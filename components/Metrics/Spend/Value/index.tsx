import * as React from "react";
import Destination from "../Destination";
import OverTime from "../OverTime";

const Value = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-100 w-60-l pv4 pr4">
        <OverTime />
      </div>
      <div className="w-100 w-40-l pl4 bl-l b--light-gray pv4">
        <Destination />
      </div>
    </div>
  );
};

export default Value;
