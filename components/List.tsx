import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../design-system";

interface Item {
  id: string;
  highlight: boolean;
  color: string;
  category: string;
  label: string;
  value: string;
}

interface ItemProps {
  item: Item;
}

const Swatch = styled.div(props => ({
  width: 15,
  height: 15,
  margin: 0,
  padding: 0,
  borderRadius: 4,
  backgroundColor: props.color,
}));

const ListItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${colors.greyLightest}`,
});
const Left = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& p": {
    marginLeft: 10,
  },
});
const Right = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: "40%",
  "& p": {
    marginLeft: 30,
    minWidth: 45,
  },
  "&:last-child": {
    textAlign: "right",
  },
});
const ListItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <ListItemContainer>
      <Left>
        <Swatch theme={null} color={item.color} />
        <p>{item.category}</p>
      </Left>
      <Right>
        {item.highlight && <p>heiiiii</p>}
        <p>{item.label}</p>
        <p>{item.value}</p>
      </Right>
    </ListItemContainer>
  );
};

const ListContainer = styled.section({
  display: "flex",
  flexDirection: "column",
});

interface Props {
  items: Item[];
}
const List: React.FC<Props> = ({ items }) => {
  return (
    <ListContainer>
      {items.map(item => {
        return <ListItem item={item} />;
      })}
    </ListContainer>
  );
};

export default List;
