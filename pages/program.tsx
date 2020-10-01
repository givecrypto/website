import glamorous from "glamorous";
import Head from "next/head";
import * as React from "react";
import HeadMeta from "../components/HeadMeta";
import faqs from "../content/faq/program";
import Wrapper from "../components/Wrapper";
import DonateHero from "../components/DonateHero";
import seo from "../content/program/seo";
import "../utils/rehydrate";
import Analytics from "../components/Analytics";
import Faq from "../components/Faq";
export default class ComplianceProgram extends React.Component<{}, {}> {
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
        <Wrapper id="faq">
          <Faq scheme="light" list={faqs} />
        </Wrapper>
        <Wrapper className="ph3 ph0-l">
          <DonateHero />
        </Wrapper>
      </Analytics>
    );
  }
}
