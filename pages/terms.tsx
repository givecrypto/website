import * as React from "react";
import ReactMarkdown from "react-markdown";
import glamorous from "glamorous";
import Head from "next/head";
import Analytics from "../components/Analytics";
import seo from "../content/donors/seo";
import Wrapper from "../components/Wrapper";
import { Step } from "../utils/Scale";
import HeadMeta from "../components/HeadMeta";
import { breakpoints, colors } from "../design-system";
import DonateHero from "../components/DonateHero";
import legal from "../content/terms/legal";
import DonorsIcon from "../svgs/givecrypto-scene-04.svg";

const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  padding: `0 ${Step(5)}`,
  [breakpoints.ns]: {
    padding: 0,
    fontSize: Step(6),
  },
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`,
});

const Terms = () => {
  return (
    <Analytics>
      <Head>
        <title key="head-title">{seo.title}</title>
      </Head>
      <HeadMeta
        path="/donors"
        title={seo.title}
        description={seo.description}
      />
      <Wrapper className="center tc ph3 ph0-l">
        <Title>
          GiveCrypto's Sanctions
          <br />
          Compliance Program
        </Title>
        <IconContainer className="responsive">
          <DonorsIcon />
        </IconContainer>
        <Wrapper className="tl ph3-m ph4-l mt3 mt6-l">
          <ReactMarkdown source={legal} />
        </Wrapper>
      </Wrapper>
    </Analytics>
  );
};

export default Terms;
