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
import Income from "../components/Metrics/Income";

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
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <div className="flex">
          <div className="w-50 br b--light-gray pt4">
            <Gender />
          </div>
          <div className="w-50 pl3 pt4">
            <Education />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <Age />
      </Wrapper>
      <Wrapper className="ph3 ph0-l bb b--light-gray">
        <Income />
      </Wrapper>
    </Analytics>
  );
};

export default Report;
