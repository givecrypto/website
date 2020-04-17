import * as React from "react";
import styled from "@emotion/styled";
import chroma from "chroma-js";
import Button from "../../../components/Button";
import { breakpoints, colors, shadows } from "../../../design-system";
import { Step } from "../../../utils/Scale";
import Wrapper from "../../../components/Wrapper";

const Container = styled.section({
  // background: `${colors.coldWater} url(/static/images/report-hero@2x.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  paddingTop: "4rem",
  paddingBottom: "4rem",
  minHeight: 800,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled.h1({
  color: colors.black,
  fontSize: Step(5),
  [breakpoints.ns]: {
    fontSize: Step(5.65),
  },
});

const Subtitle = styled.h1({
  marginBottom: Step(5.5),
  color: colors.greyLight,
  fontWeight: 500,
  fontSize: Step(4.125),
  [breakpoints.ns]: {
    fontSize: Step(5),
  },
});

const Box = styled.div({
  maxWidth: "40rem",
  padding: "2rem",
  margin: "0 auto",
  background: "rgba(255, 255, 255, 0.4)",
  boxShadow: shadows.card,
  borderRadius: Step(3),
  overflow: "hidden",
  position: "relative",
});

const Img = styled.img({
  // mixBlendMode: "multiply",
  position: "absolute",
  objectFit: "cover",
  width: "200%",
  top: 0,
  maxWidth: "200%",
  right: -400,
  zIndex: 0,
  pointerEvents: "none",
});

interface Props {}
const ReportHero: React.FC<Props> = () => {
  return (
    <Container style={{ position: "relative" }}>
      <Wrapper className="pb5" style={{ zIndex: 2, position: "relative" }}>
        <Box>
          <Img
            src={`/static/images/charts-small.png`}
            srcSet={`/static/images/charts-small.png, /static/images/charts-small@2x.png 2x`}
            alt={"Charts Graphic"}
          />
          <Title className="measure">
            Venezuelan Ambassador
            <br />
            Program Real Time Data
          </Title>
          <Subtitle className="lh-copy measure-narrow">
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
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ReportHero;
