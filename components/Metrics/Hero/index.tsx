import * as React from "react";
import styled from "@emotion/styled";
import chroma from "chroma-js";
import Button from "../../../components/Button";
import { breakpoints, colors } from "../../../design-system";
import { Step } from "../../../utils/Scale";
import Wrapper from "../../../components/Wrapper";

const Container = styled.section({
  background: "#f4f6fa",
  // backgroundImage: `linear-gradient(to right, #f4f6fa, ${colors.greyLightest})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  minHeight: 350,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [breakpoints.l]: {
    paddingLeft: Step(6),
  },
  [breakpoints.m]: {
    paddingLeft: Step(6),
  },
  [breakpoints.ns]: {
    minHeight: 550,
    fontSize: Step(5.65),
  },
});

const Title = styled.h1({
  color: colors.navy,
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

const Img = styled.img({
  // mixBlendMode: "multiply",
  pointerEvents: "none",
  position: "absolute",
  objectFit: "cover",
  width: "300%",
  maxWidth: "300%",
  right: "-90%",
  top: -100,
  [breakpoints.ns]: {
    top: "auto",
    right: "auto",
    bottom: "-40%",
    left: 0,
    width: "100%",
    maxHeight: 820,
    objectFit: "contain",
    objectPosition: "right",
  },
});

interface Props {}
const ReportHero: React.FC<Props> = () => {
  return (
    <Container style={{ position: "relative" }}>
      <Wrapper className="pb5" style={{ zIndex: 2, position: "relative" }}>
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
      </Wrapper>
    </Container>
  );
};

export default ReportHero;
