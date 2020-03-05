import * as React from "react";
import styled from "@emotion/styled";
import { colors, shadows } from "../design-system";

interface Item {
  id: string;
  color: string;
  category: string;
  label: string;
  value: string;
}

interface ItemProps {
  item: Item;
  highlightId: string;
  onMouseOver: () => void | null;
  onMouseOut: () => void | null;
}

const Swatch = styled.div(({ color }: any) => ({
  width: 15,
  height: 15,
  margin: 0,
  padding: 0,
  borderRadius: 4,
  backgroundColor: color,
  transition: "background 200ms ease",
}));

const ListItemContainer = styled.div(({ fade }: any) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.2rem",
  transition: "all 200ms ease",
  borderBottom: `1px solid ${colors.greyLightest}`,
  "&:last-child": {
    borderBottom: "none",
  },
  "> *": {
    transition: "all 200ms ease",
    opacity: fade ? 0.4 : 1,
  },
}));
const Left = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const Right = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: "40%",
  "&:last-child": {
    textAlign: "right",
  },
});

const Category = styled.h3({
  fontWeight: 500,
  fontSize: "0.9rem",
  color: colors.greyDark,
  marginLeft: 10,
});
const Label = styled.h4({
  fontWeight: "normal",
  fontSize: "0.9rem",
  color: colors.grey,
  marginLeft: 30,
  padding: 0,
  minWidth: 45,
});

const ListItem: React.FC<ItemProps> = ({ item, highlightId, ...rest }) => {
  return (
    <ListItemContainer
      fade={highlightId && highlightId !== item.category}
      {...rest}
    >
      <Left>
        <Swatch color={item.color} />
        <Category>{item.category}</Category>
      </Left>
      <Right>
        <Label>{item.label}</Label>
        <Label>{item.value}</Label>
      </Right>
    </ListItemContainer>
  );
};

const ListContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${colors.greyLightest}`,
  borderRadius: 8,
  boxShadow: shadows.card,
});

interface Props {
  items: Item[];
  highlightId: string;
  onHighlight: (label?: string) => void | null;
}
const List: React.FC<Props> = ({ items, highlightId, onHighlight }) => {
  return (
    <ListContainer>
      {items.map(item => {
        console.log(item);
        return (
          <ListItem
            item={item}
            highlightId={highlightId}
            onMouseOver={() => onHighlight(item.category)}
            onMouseOut={() => onHighlight()}
          />
        );
      })}
    </ListContainer>
  );
};

export default List;
