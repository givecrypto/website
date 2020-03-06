import * as React from "react";
import styled from "@emotion/styled";
import { shadows, colors } from "../design-system";

const Container = styled.div({
  borderRadius: 8,
  backgroundColor: colors.black,
  padding: "1rem 1rem",
  boxShadow: shadows.card,
  opacity: 0.92,
});
const Title = styled.h2({
  color: colors.white,
  fontSize: "1rem",
  padding: 0,
  paddingBottom: "0.4rem",
  margin: 0,
});
const ListItem = styled.h4({
  color: colors.white,
  fontWeight: "normal",
  fontSize: "0.75rem",
  opacity: 0.9,
  padding: 0,
  paddingTop: "0.25rem",
  margin: 0,
});

interface Metric {
  label: string;
  value: string;
}
interface Props {
  title: string;
  metrics: Metric[];
}
const Tip: React.FunctionComponent<Props> = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.metrics.map(({ label, value }) => (
        <ListItem key={`legend-list-item--${label}`}>
          {label}: {value}
        </ListItem>
      ))}
    </Container>
  );
};

export default Tip;
