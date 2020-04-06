import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../design-system";
import Swatch from "../../components/Swatch";

interface Props {
  highlight: string | null;
  onHighlight: (value: any) => void | null;
  data: Array<{
    label: string;
    x: string;
    y: string;
    color: string;
  }>;
}

const H2 = styled.h2({
  fontSize: "0.9rem",
  fontWeight: 400,
  color: colors.grey,
  padding: "0 0 0 0.5rem",
  margin: 0,
});

const Pill = styled.div({
  background: colors.white,
  border: `1px solid ${colors.greyLightest}`,
  borderRadius: 12,
  padding: "0.5rem 0.5rem",
  margin: "0 1rem 0 0",
});

const Legend: React.FunctionComponent<Props> = ({ data, onHighlight }) => {
  return (
    <div className="flex mb3">
      {data.map(item => {
        const { label, color } = item;
        return (
          <Pill
            key={`${label}--key`}
            className="flex items-center mr3 br3"
            onMouseOver={() => onHighlight(item)}
            onMouseLeave={() => onHighlight(null)}
          >
            <Swatch color={color} />
            <H2>{label}</H2>
          </Pill>
        );
      })}
    </div>
  );
};

export default Legend;
