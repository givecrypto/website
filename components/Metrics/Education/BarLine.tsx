import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../design-system";
import { totalParticipants } from "../../../content/ambassadors-report/metrics";

interface Item {
  id: string;
  color: string;
  category: string;
  label: string;
  value: string;
}

interface Props {
  items: Item[];
  highlightId?: string;
  onHighlight?: (label?: string) => void | null;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Bar = styled.div(({ color, value, fade }: any) => ({
  height: "100%",
  width: value,
  background: color || colors.blue,
  opacity: fade ? 0.5 : 1,
  transition: "opacity 200ms ease",
}));

const BarContainer = styled.div({
  height: 10,
  overflow: "hidden",
  borderRadius: 12,
  marginBottom: "3rem",
  background: colors.greyLightest,
});

const Title = styled.h2({
  fontSize: "3rem",
  fontWeight: 500,
  color: colors.coldWater,
  marginBottom: 12,
});
const Tiny = styled.span({
  fontSize: "1rem",
  fontWeight: 400,
});

const BarLine: React.FC<Props> = ({ items, highlightId, onHighlight }) => {
  const item = items.find(i => i.category === highlightId);
  const title = highlightId
    ? `of Recipients have completed ${highlightId}`
    : `Recipients`;

  return (
    <>
      <Title>
        {item ? item.value : numberWithCommas(totalParticipants)}{" "}
        <Tiny>{title}</Tiny>
      </Title>
      <BarContainer className="flex">
        {items.map((item: Item) => (
          <Bar
            key={`bar-${item.id}`}
            fade={highlightId && highlightId !== item.category}
            onMouseOver={() => onHighlight && onHighlight(item.category)}
            onMouseOut={() => onHighlight && onHighlight()}
            {...item}
          />
        ))}
      </BarContainer>
    </>
  );
};

export default BarLine;
