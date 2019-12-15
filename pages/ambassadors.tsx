import glamorous from "glamorous";
import Head from "next/head";
import * as React from "react";
import Faq from "../components/Faq";
import HeadMeta from "../components/HeadMeta";
import Wrapper from "../components/Wrapper";
import seo from "../content/ambassadors/seo";
import hero from "../content/ambassadors/hero";
import { breakpoints, colors } from "../design-system";
import HappyIcon from "../svgs/givecrypto-scene-03.svg";
import "../utils/rehydrate";
import { Step } from "../utils/Scale";
import ambassadorsFaq from "../content/faq/ambassadors-faq";
import Analytics from "../components/Analytics";

const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6),
  },
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`,
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

export default class App extends React.Component<{}, {}> {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
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
          <Title>{hero.title}</Title>
          <Subtitle className="measure-narrow center lh-copy">
            {hero.subtitle}
          </Subtitle>
          <IconContainer className="responsive">
            <HappyIcon />
          </IconContainer>
        </Wrapper>
        <Wrapper
          className="ph3 ph0-l"
          background={colors.white}
          padding={"4rem 0"}
        >
          <Faq list={ambassadorsFaq} theme="light" />
        </Wrapper>
      </Analytics>
    );
  }
}
