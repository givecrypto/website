import * as React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Analytics from "../components/Analytics";
import seo from "../content/ambassadors-report/seo";
import hero from "../content/ambassadors-report/hero";
import HeadMeta from "../components/HeadMeta";
import Wrapper from "../components/Wrapper";
import { breakpoints, colors } from "../design-system";
import { Step } from "../utils/Scale";
import Gender from "../components/Metrics/Gender";
import Education from "../components/Metrics/Education";
import Age from "../components/Metrics/Age";
import Household from "../components/Metrics/Household";
import HouseholdBarChart from "../components/Metrics/Household/HouseholdBarChart";

// Refresh styles
import "../utils/rehydrate";

// Styled Components
const Title = styled.h2({
  color: colors.coldWater,
  fontWeight: 600,
  marginBottom: 0,
  paddingBottom: 0,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5.45),
  },
});
const Subtitle = styled.h1({
  paddingBottom: Step(3),
  marginTop: 0,
  paddingTop: 0,
  color: colors.coldWater,
  fontWeight: 400,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5.45),
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
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <Title>{hero.title}</Title>
        <Subtitle className="lh-copy">{hero.subtitle}</Subtitle>
      </Wrapper>
      <Wrapper className="ph0 bb b--light-gray">
        <div className="flex flex-wrap">
          <div className="ph3 ph0-l w-100 w-50-l pb4 pb0-l bb br-l b--light-gray pt4">
            <Gender />
          </div>
          <div className="ph3 ph0-l w-100 w-50-l pl0 pl3-l pt4">
            <Education />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <Age />
      </Wrapper>
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <HouseholdBarChart />
      </Wrapper>
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <Household />
      </Wrapper>
    </Analytics>
  );
};

export default Report;
