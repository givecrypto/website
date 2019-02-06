import glamorous from "glamorous";
import * as React from "react";
import content from "../content/home/how-it-works";
import { breakpoints, colors, shadows } from "../design-system";
import Distribute from "../svgs/givecrypto-distribute.svg";
import Donate from "../svgs/givecrypto-donate.svg";
import Help from "../svgs/givecrypto-help.svg";
import { Step } from "../utils/Scale";

const Title = glamorous.h1({
  color: colors.black,
  fontSize: Step(5),
  [breakpoints.ns]: {
    fontSize: Step(6),
  },
});
const SubTitle = glamorous.h1({
  marginBottom: Step(7),
  color: colors.greyLight,
  fontWeight: 500,
  fontSize: Step(4.125),
  [breakpoints.ns]: {
    fontSize: Step(5),
  },
});
const CardWrapper = glamorous.div({
  position: "relative",
  zIndex: 1,

  "> *": {
    position: "relative",
    zIndex: 1,
  },

  "&::after, &::before": {
    zIndex: 0,
    content: `''`,
    display: "block",
    background: "url(/static/images/pattern@2x.png)",
    backgroundSize: "100%",
    position: "absolute",
    left: -200,
    width: 423,
    height: 263,
    transform: "translateY(40px)",
  },
  "&::after": {
    left: "auto",
    right: -200,
  },
});

const Card = glamorous.div({
  boxSizing: "border-box",
  background: colors.white,
  borderRadius: Step(2),
  padding: Step(5),
  boxShadow: shadows.card,
  maxWidth: "100%",
  [breakpoints.ns]: {
    maxWidth: 280,
  },
});
const IconContainer = glamorous.div({
  display: "block",
  margin: "0 auto",
  width: 80,
  height: 80,
  padding: Step(4.5),
  borderRadius: "100%",
  background: colors.white,
  boxShadow: shadows.card,
});
const CardNumber = glamorous.h4({
  textTransform: "uppercase",
  fontSize: Step(3.5),
  color: colors.blue,
});
const CardTitle = glamorous.h2({
  fontSize: Step(5),
  color: colors.greyDark,
});
const CardSubTitle = glamorous.p({
  fontSize: Step(4),
  color: colors.greyLight,
  fontWeight: 400,
});

const Cards: any = () => {
  const { cards } = content;
  return cards.map(({ title, subtitle, icon }, index) => {
    let Icon = Help;
    switch (icon) {
      case "Help":
        Icon = Help;
        break;
      case "Donate":
        Icon = Donate;
        break;
      case "Distribute":
        Icon = Distribute;
        break;

      default:
        break;
    }

    return (
      <Card className="tc center mb4 mb0-l" key={title}>
        <CardNumber>Step {index + 1}</CardNumber>
        <IconContainer className="responsive">
          <Icon />
        </IconContainer>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle className="lh-copy">{subtitle}</CardSubTitle>
      </Card>
    );
  });
};

export default () => {
  const { title, subtitle } = content;
  return (
    <div id="how-it-works" className={"mt5 mt0-ns"}>
      <Title id="how-it-works" className="lh-title">
        {title}
      </Title>
      <SubTitle className="measure lh-copy">{subtitle}</SubTitle>
      <CardWrapper className="flex flex-wrap justify-between">
        <Cards />
      </CardWrapper>
    </div>
  );
};
