import * as React from "react";

interface Item {
  Date: string;
  Amount: string;
}
interface Props {
  data: Item[];
}

const SpendValue: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((item: Item) => (
          <li>
            {item.Date}: {item.Amount}
          </li>
        ))}
    </ul>
  );
};

export default SpendValue;
