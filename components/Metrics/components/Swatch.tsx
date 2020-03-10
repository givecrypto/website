import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  color: string;
}

const Div = styled.div(({ color }: any) => ({
  width: 15,
  height: 15,
  margin: 0,
  padding: 0,
  borderRadius: 4,
  backgroundColor: color,
  transition: "background 200ms ease",
}));

const Swatch: React.FunctionComponent<Props> = props => {
  return <Div {...props} />;
};

export default Swatch;
