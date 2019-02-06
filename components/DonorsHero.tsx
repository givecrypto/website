import glamorous from "glamorous";
import * as React from "react";
import { breakpoints, colors, shadows } from "../design-system";
import { Step } from "../utils/Scale";
import Link from "./Link";

const Container = glamorous.section({
  background: `url('/static/images/donor-hero.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  width: "100%",
  height: 575,
  marginTop: Step(7.5),
  boxShadow: shadows.default,
});

const InfoCard = glamorous.div({
  textAlign: "center",
  display: "inline-block",
  boxSizing: "border-box",
  background: colors.white,
  borderRadius: Step(2),
  padding: Step(5),
  maxWidth: 260,
  boxShadow: shadows.card,
  margin: "0 auto",
  [breakpoints.ns]: {
    margin: `0 0 0 ${Step(7)}`,
  },
});

const CardTitle = glamorous.h4({
  textTransform: "uppercase",
  fontWeight: 800,
  fontSize: Step(3.5),
  color: colors.blue,
});
const CardMetric = glamorous.h2({
  margin: 0,
  padding: 0,
  textTransform: "uppercase",
  fontSize: Step(6.5),
  color: colors.greyDark,
});
const CardDetails = glamorous.h2({
  fontSize: Step(5),
  color: colors.greyDark,
});
const CardLink = glamorous.h2({
  "& a": {
    textTransform: "uppercase",
    fontSize: Step(3.5),
    fontWeight: 800,
    color: colors.blue,

    "&:hover": {
      color: colors.blueDark,
    },
  },
});

const DonorsHero: React.SFC = () => {
  return (
    <Container className="flex items-center">
      <InfoCard>
        <CardTitle>Our first milestone</CardTitle>
        <CardMetric>$4M</CardMetric>
        <CardDetails>Raised to date</CardDetails>
        <CardLink>
          <Link href="/donors">MEET OUR DONORS -></Link>
        </CardLink>
      </InfoCard>
    </Container>
  );
};

export default DonorsHero;
