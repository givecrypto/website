import * as React from 'react';
import { Step } from '../utils/Scale';
import { colors, breakpoints } from '../design-system';
import glamorous from 'glamorous';
import HeadMeta from '../components/HeadMeta';
import DonateButton from '../components/DonateButton';
import Wrapper from '../components/Wrapper';
import BitcoinIcon from '../svgs/crypto/btc.svg';
import BitcoinCashIcon from '../svgs/crypto/bch.svg';
import EtheriumIcon from '../svgs/crypto/eth.svg';
import LitecoinIcon from '../svgs/crypto/ltc.svg';
import RippleIcon from '../svgs/crypto/xrp.svg';
import HappyIcon from '../svgs/givecrypto-scene-03.svg';
import Faq from '../components/Faq';
import '../utils/rehydrate';

const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6)
  }
});

const Meta = glamorous.h2({
  textTransform: 'uppercase',
  marginBottom: Step(5),
  fontSize: Step(3.5),
  color: colors.blue,
  fontWeight: 800
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`
});

const Subtitle = glamorous.h1({
  paddingBottom: Step(5),
  color: colors.grey,
  fontWeight: 500,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5)
  }
});

const ButtonGroup = glamorous.div({
  maxWidth: 400
});

export interface AppProps {}
export interface AppState {
  message: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Donate Today'
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { message } = this.state;

    return (
      <>
        <HeadMeta
          path="/donate"
          title="Give the gift of crypto to help people in need around the world."
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
            </div>
          </div>
          <ButtonGroup className="center">
            <div className="mb3">
              <DonateButton theme="full">
                DONATE &amp; RECEIVE RECEIPT
              </DonateButton>
            </div>
            <div className="center flex flex-wrap justify-between">
              <DonateButton type="anonymous" theme="ghost" />
              <DonateButton type="ripple" theme="ghost" />
            </div>
          </ButtonGroup>
          <IconContainer className="responsive">
            <HappyIcon />
          </IconContainer>
        </Wrapper>
        <Wrapper
          className="ph3 ph0-l"
          background={colors.white}
          padding={'4rem 0'}
        >
          <Faq
            donate={true}
            theme="light"
            title="Understand more about your donation"
          />
        </Wrapper>
      </>
    );
  }
}
