import glamorous from "glamorous";
import Head from "next/head";
import * as React from "react";
import DonateHero from "../components/DonateHero";
import HeadMeta from "../components/HeadMeta";
import PersonCard from "../components/PersonCard";
import Wrapper from "../components/Wrapper";
import donors, { DonorSegment, Donor } from "../content/donors/donors-list";
import seo from "../content/donors/seo";
import { breakpoints, colors } from "../design-system";
import DonorsIcon from "../svgs/givecrypto-scene-04.svg";
import "../utils/rehydrate";
import { Step } from "../utils/Scale";

const Title = glamorous.h2({
  color: colors.black,
  fontSize: Step(5.35),
  padding: `0 ${Step(5)}`,
  [breakpoints.ns]: {
    padding: 0,
    fontSize: Step(6),
  },
});

const List = glamorous.ul(
  {
    height: 500,
    listStyle: "none",
    padding: 0,
  },
  ({ height }: any) => {
    return {
      height,
    };
  },
);

const Item = glamorous.li({
  width: `100%`,
  fontWeight: 700,
  fontSize: Step(4.25),
  padding: `0 0 ${Step(5.5)} 0`,
  [breakpoints.l]: {
    width: `${100 / 5}%`,
  },
});

const SectionTitle = glamorous.h3({
  marginBottom: Step(6),
  fontSize: Step(4.75),
  color: colors.black,
  paddingBottom: Step(4),
  borderBottom: `1px solid ${colors.black}`,
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`,
});

export default class App extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public cardList(list: any, key: string) {
    return list.map(({ name, role, filename }: any, index) => {
      const size = key === "$100M+" ? "w-30" : "w-100 w-50-m w-25-l";

      return (
        <div
          className={`${size} pa3-m pa4-l`}
          key={`person-${filename}-${index}`}
        >
          <PersonCard name={name} role={role} filename={filename} />
        </div>
      );
    });
  }

  public list(list: Donor[]) {
    return list.map((name, index) => {
      return <Item key={`list${name}-${index}`}>{name}</Item>;
    });
  }

  public listSections(list: DonorSegment) {
    const results = [];

    // Iterate over the list sections
    Object.entries(list).forEach(([key, person]) => {
      results.push(
        <Wrapper
          className="ph3 ph0-l"
          key={`wrap-${key}`}
          marginBottom={Step(7)}
        >
          <div className="ph3-m ph4-l">
            <SectionTitle>{key}</SectionTitle>
          </div>
          <div className="flex flex-wrap">{this.cardList(person, key)}</div>
        </Wrapper>,
      );
    });

    return results;
  }

  public render() {
    return (
      <>
        <Head>
          <title key="head-title">{seo.title}</title>
        </Head>
        <HeadMeta
          path="/donors"
          title={seo.title}
          description={seo.description}
        />
        <Wrapper className="center tc ph3 ph0-l">
          <Title>Meet our generous donors</Title>
          <IconContainer className="responsive">
            <DonorsIcon />
          </IconContainer>
        </Wrapper>

        {this.listSections(donors)}

        <Wrapper className="ph3 ph0-l">
          <DonateHero />
        </Wrapper>
      </>
    );
  }
}
