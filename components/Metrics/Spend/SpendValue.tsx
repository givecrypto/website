import * as React from "react";
import Value from "./Value";

interface Item {
  Date: string;
  Amount: string;
}
interface Props {
  data: Item[];
}

const SpendValue: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Value data={data} />
      <ul>
        {data &&
          data.map((item: Item) => (
            <li key={item.Amount}>
              {item.Date}: {item.Amount}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SpendValue;
