import * as React from 'react';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';
import glamorous from 'glamorous';
import HeadMeta from '../components/HeadMeta';
import DonateHero from '../components/DonateHero';
import Wrapper from '../components/Wrapper';
import DonorsIcon from '../svgs/givecrypto-scene-04.svg';
import PersonCard from '../components/PersonCard';
import { top, middle, bottom } from '../content/donors/donors-list';
import '../utils/rehydrate';

const Title = glamorous.h2({
  fontSize: Step(6),
  color: colors.black
});

const List = glamorous.ul(
  {
    height: 500,
    listStyle: 'none',
    padding: 0
  },
  ({ height }: any) => {
    return {
      height
    };
  }
);

const Item = glamorous.li({
  width: `${100 / 5}%`,
  fontWeight: 700,
  fontSize: Step(4.25),
  padding: `0 0 ${Step(5.5)} 0`
});

const SectionTitle = glamorous.h3({
  marginBottom: Step(6),
  fontSize: Step(4.75),
  color: colors.black,
  paddingBottom: Step(4),
  borderBottom: `1px solid ${colors.black}`
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`
});

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  cardList(list: any) {
    return list.map(({ name, role, filename }: any) => {
      return (
        <div className="w-30">
          <PersonCard name={name} role={role} filename={filename} />
        </div>
      );
    });
  }

  list(list: string[]) {
    return list.map(name => {
      return <Item>{name}</Item>;
    });
  }

  listHeight(list: string[]) {
    return list.length / 5 * 90;
  }

  render() {
    return (
      <>
        <HeadMeta path="/donors" title="Meet our generous donors." />
        <Wrapper className="center tc">
          <Title>Meet our generous donors</Title>
          <IconContainer className="responsive">
            <DonorsIcon />
          </IconContainer>
        </Wrapper>

        <Wrapper marginBottom={Step(7)}>
          <SectionTitle>$1M+</SectionTitle>
          <div className="flex flex-wrap justify-between">
            {this.cardList(top)}
          </div>
        </Wrapper>

        <Wrapper marginBottom={Step(7)}>
          <SectionTitle>$100k+</SectionTitle>
          <List
            height={this.listHeight(middle)}
            className="flex flex-wrap flex-column"
          >
            {this.list(middle)}
          </List>
        </Wrapper>

        <Wrapper>
          <SectionTitle>$25k+</SectionTitle>
          <List
            height={this.listHeight(bottom)}
            className="flex flex-wrap flex-column"
          >
            {this.list(bottom)}
          </List>
        </Wrapper>

        <Wrapper>
          <DonateHero />
        </Wrapper>
      </>
    );
  }
}
