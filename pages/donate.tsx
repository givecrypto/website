import glamorous from "glamorous";
import Head from "next/head";
import * as React from "react";
import DonateButton from "../components/DonateButton";
import Faq from "../components/Faq";
import HeadMeta from "../components/HeadMeta";
import Wrapper from "../components/Wrapper";
import CoinbaseDisclaimer from "../components/CoinbaseDisclaimer";
import seo from "../content/donate/seo";
import { breakpoints, colors } from "../design-system";
import BitcoinCashIcon from "../svgs/crypto/bch.svg";
import BitcoinIcon from "../svgs/crypto/btc.svg";
import EtheriumIcon from "../svgs/crypto/eth.svg";
import LitecoinIcon from "../svgs/crypto/ltc.svg";
import RippleIcon from "../svgs/crypto/xrp.svg";
import ZCashIcon from "../svgs/crypto/zec.svg";
import HappyIcon from "../svgs/givecrypto-scene-03.svg";
import "../utils/rehydrate";
import faqs from "../content/faq/donation-faq";
import { Step } from "../utils/Scale";
import Analytics from "../components/Analytics";

const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6),
  },
});

const Meta = glamorous.h2({
  textTransform: "uppercase",
  marginBottom: Step(5),
  fontSize: Step(3.5),
  color: colors.blue,
  fontWeight: 800,
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

const ButtonGroup = glamorous.div({
  maxWidth: 400,
});

export interface AppState {
  message: string;
}

export default class App extends React.Component<{}, AppState> {
  public readonly state: Readonly<AppState> = {
    message: "Donate Today",
  };

  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    const { message } = this.state;

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
          <Title>{message}</Title>
          <Subtitle className="measure-narrow center lh-copy">
            Give the gift of crypto to help people in need around the world.
          </Subtitle>
          <div className="center tc mb5">
            <Meta>We currently accept:</Meta>
            <div className="flex flex-wrap justify-between w5 center">
              <BitcoinIcon />
              <BitcoinCashIcon />
              <EtheriumIcon />
              <LitecoinIcon />
              <RippleIcon />
              <ZCashIcon />
            </div>
          </div>
          <ButtonGroup className="center">
            <div className="mb3">
              <DonateButton theme="full">
                DONATE &amp; RECEIVE RECEIPT
              </DonateButton>
            </div>
            <div className="center flex flex-wrap justify-between">
              <DonateButton type="ripple" theme="ghost" />
              <DonateButton type="zcash" theme="ghost" />
            </div>
          </ButtonGroup>
          <CoinbaseDisclaimer />
          <IconContainer className="responsive">
            <HappyIcon />
          </IconContainer>
        </Wrapper>
        <Wrapper
          className="ph3 ph0-l"
          background={colors.white}
          padding={"4rem 0"}
        >
          <Faq
            list={faqs}
            scheme="light"
            title="Understand more about your donation"
          />
        </Wrapper>
      </Analytics>
    );
  }
}
