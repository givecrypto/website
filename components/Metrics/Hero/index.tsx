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
  minHeight: 450,
  transform: "translateY(-7rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Title = styled.h1({
  color: colors.white,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5.45),
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
    fontSize: Step(4.5),
  },
});

const Img = styled.img({
  // mixBlendMode: "multiply",
  zIndex: 1,
  position: "absolute",
  objectFit: "contain",
  width: "100%",
  bottom: 0,
  left: 0,
});

interface Props {}
const ReportHero: React.FC<Props> = () => {
  return (
    <Container style={{ position: "relative" }}>
      <Img
        src={`/static/images/charts-small.png`}
        srcSet={`/static/images/charts-small.png, /static/images/charts-small@2x.png 2x`}
        alt={"Charts Graphic"}
      />
      <Wrapper className="pb5" style={{ zIndex: 2, position: "relative" }}>
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
