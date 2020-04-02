import * as React from "react";
import SpendValue from "./SpendValue";
import destinationData from "../../../content/ambassadors-report/data/crypto-spend-destination.csv";
import valueData from "../../../content/ambassadors-report/data/crypto-spend-value.csv";
import DestinationValue from "./DestinationValue";

interface Props {}
const Spend: React.FC<Props> = () => {
  return (
    <>
      <SpendValue data={valueData} />
      <DestinationValue data={destinationData} />
    </>
  );
};

export default Spend;
