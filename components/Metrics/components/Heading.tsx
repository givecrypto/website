import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../design-system";

interface Props {}

const H2 = styled.h2({
  fontSize: "1rem",
  color: colors.coldWater,
});

const Heading: React.FunctionComponent<Props> = props => {
  return <H2 {...props} />;
};

export default Heading;
