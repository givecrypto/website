import glamorous, { Div } from "glamorous";
import Head from "next/head";
import * as React from "react";
import { animateScroll } from "react-scroll";
// import ActivityFeed from "../components/ActivityFeed";
// import Hooks from "../components/ActivityFeed/Hooks";
import DonateHero from "../components/DonateHero";
import DonorsHero from "../components/DonorsHero";
import Faq from "../components/Faq";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Mission from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import VideoSection from "../components/VideoSection";
import Wrapper from "../components/Wrapper";
// import events from "../content/activity-feed/events";
import seo from "../content/home/seo";
import { breakpoints, colors } from "../design-system";
import "../utils/rehydrate";
import { Step } from "../utils/Scale";

const { div } = glamorous;

const Container = div({
  padding: `${Step(5)} 0`,
  [breakpoints.l]: {
    padding: Step(5),
  },
});

export default class App extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public preventScrolling = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  public enableScrolling = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  public scrollToLocation() {
    if (
      typeof document !== "undefined" &&
      location.hash &&
      document.getElementById(location.hash.slice(1))
    ) {
      const offset =
        document.getElementById(location.hash.slice(1)).getBoundingClientRect()
          .top - 50;
      animateScroll.scrollMore(offset);
    }
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
    this.scrollToLocation();
  }

  public render() {
    return (
      <>
        <Head>
          <title key="head-title">{seo.title}</title>
        </Head>
        <HeadMeta path="/home" description={seo.description} />

        <Container>
          {/* <Wrapper>
            <Hooks />
            <ActivityFeed
              events={events}
              onDragStart={this.preventScrolling}
              onDragEnd={this.enableScrolling}
            />
          </Wrapper> */}

          <Wrapper wide={true}>
            <Hero page="home" />
            <Div display="block" className="mb3 mb6-ns" />
          </Wrapper>

          <Wrapper narrow={true}>
            <HowItWorks />
          </Wrapper>
          <Wrapper flush={true}>
            <DonorsHero />
          </Wrapper>
          <Wrapper>
            <Mission />
          </Wrapper>

          <Wrapper padding={"3rem 0"}>
            <VideoSection />
          </Wrapper>

          <Wrapper>
            <TeamSection />
          </Wrapper>

          <Wrapper
            id="faq"
            color={colors.white}
            background={colors.blueDark}
            padding={"4rem 0 calc(6% + 2rem) 0"}
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
