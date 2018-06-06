import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous, { Div } from 'glamorous';
import Head from 'next/head';
import HeadMeta from '../components/HeadMeta';
import { animateScroll } from 'react-scroll';
import Faq from '../components/Faq';
import '../utils/rehydrate';
import { colors } from '../design-system';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Wrapper from '../components/Wrapper';
import DonorsHero from '../components/DonorsHero';
import DonateHero from '../components/DonateHero';
import Mission from '../components/MissionSection';
import VideoSection from '../components/VideoSection';
import TeamSection from '../components/TeamSection';

const { div } = glamorous;

const Container = div({
  padding: Step(5)
});

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollToLocation() {
    if (
      typeof document !== 'undefined' &&
      location.hash &&
      document.getElementById(location.hash.slice(1))
    ) {
      const offset =
        document.getElementById(location.hash.slice(1)).getBoundingClientRect()
          .top - 50;
      animateScroll.scrollMore(offset);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.scrollToLocation();
  }

  render() {
    return (
      <>
        <Head>
          <title key="head-title">
            GiveCrypto | Empowering, educating and elevating communities into
            the open financial system.
          </title>
        </Head>
        <HeadMeta path="/home" />
        <Container>
          <Wrapper wide>
            <Hero page="home" />
            <Div display="block" height="220px" />
          </Wrapper>

          <Wrapper narrow>
            <HowItWorks />
          </Wrapper>
          <Wrapper>
            <DonorsHero />
          </Wrapper>
          <Wrapper>
            <Mission />
          </Wrapper>

          <Wrapper padding={'3rem 0'}>
            <VideoSection />
          </Wrapper>

          <Wrapper>
            <TeamSection />
          </Wrapper>

          <Wrapper
            id="faq"
            color={colors.white}
            background={colors.blueDark}
            padding={'4rem 0'}
          >
            <Faq />
          </Wrapper>

          <Wrapper>
            <DonateHero />
          </Wrapper>
        </Container>
      </>
    );
  }
}
