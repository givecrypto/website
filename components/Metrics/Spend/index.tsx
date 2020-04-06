import * as React from "react";
import Destination from "./Destination";
import OverTime from "./OverTime";

const Spend = () => {
  return (
    <div className="flex flex-wrap justify-center bb bn-ns b--light-gray">
      <div className="ph3 w-100 w-60-l pv4 pr4-ns bb bn-ns b--light-gray">
        <OverTime />
      </div>
      <div className="ph3 w-100 w-40-l pl4-ns bl-ns b--light-gray pv4">
        <Destination />
      </div>
    </div>
  );
};

export default Spend;
