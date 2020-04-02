import * as React from "react";
interface Item {
  Destination: string;
  Amount: string;
}
interface Props {
  data: Item[];
}

interface Item {
  Destination: string;
  Amount: string;
}
const DestinationValue: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((item: Item) => (
          <li key={item.Destination}>
            {item.Destination}: {item.Amount}
          </li>
        ))}
    </ul>
  );
};

export default DestinationValue;
