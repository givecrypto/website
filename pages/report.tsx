import * as React from "react";
import glamorous from "glamorous";
import Head from "next/head";
import Analytics from "../components/Analytics";
import seo from "../content/ambassadors-report/seo";
import HeadMeta from "../components/HeadMeta";
import Wrapper from "../components/Wrapper";
import { breakpoints, colors } from "../design-system";
import { Step } from "../utils/Scale";

// Refresh styles
import "../utils/rehydrate";

// Styled Components
const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6),
  },
});
const Subtitle = glamorous.h1({
  paddingBottom: Step(5),
  color: colors.grey,
  fontWeight: 500,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5),
  },
});

interface Props {}

const Report: React.FC<Props> = () => {
  return (
    <Analytics>
      <Head>
        <title key="head-title">{seo.title}</title>
      </Head>
      <HeadMeta
        path="/report"
        title={seo.title}
        description={seo.description}
      />
      <Wrapper className="center tc ph3 ph0-l">
        <Title>Ambassadors Report</Title>
        <Subtitle className="measure-narrow center lh-copy">
          Give the gift of crypto to help people in need around the world.
        </Subtitle>
      </Wrapper>
    </Analytics>
  );
};

export default Report;
