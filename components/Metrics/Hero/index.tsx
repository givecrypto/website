import * as React from "react";
import styled from "@emotion/styled";
import chroma from "chroma-js";
import Button from "../../../components/Button";
import { breakpoints, colors } from "../../../design-system";
import { Step } from "../../../utils/Scale";
import Wrapper from "../../../components/Wrapper";

const Container = styled.section({
  background: `${colors.coldWater} url(/static/images/report-hero@2x.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  paddingTop: "7rem",
  paddingBottom: "7rem",
  minHeight: 650,
  transform: "translateY(-7rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Title = styled.h1({
  color: colors.white,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6),
  },
  lineHeight: 1.35,
});
const Subtitle = styled.h2({
  color: colors.greyLightest,
  fontWeight: 500,
  opacity: 0.6,
  lineHeight: 1.5,
  maxWidth: 675,
  marginBottom: "4rem",
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5),
  },
});

interface Props {}
const ReportHero: React.FC<Props> = () => {
  return (
    <Container>
      <Wrapper className="pb5">
        <Title className="measure">
          Venezuelan Ambassador Program
          <br />
          Real Time Data
        </Title>
        <Subtitle className="measure">
          We are sharing the live results of our randomized controlled trial
          that compares the benefits of giving cash and crypto.
        </Subtitle>
        <Button
          className="mr3 button-donate"
          css={{
            background: colors.blue,
            borderColor: colors.blue,
            "&:hover, :active": {
              background: chroma(colors.blue)
                .brighten(0.25)
                .css(),
            },
          }}
          href={"/reports/venezuelan-ambassador-program"}
          scheme="light"
        >
          View Data
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ReportHero;
