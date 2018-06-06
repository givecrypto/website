import * as React from 'react';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';
import glamorous from 'glamorous';
import HeadMeta from '../components/HeadMeta';
import DonateHero from '../components/DonateHero';
import Wrapper from '../components/Wrapper';
import DonorsIcon from '../svgs/givecrypto-scene-04.svg';
import '../utils/rehydrate';

const Title = glamorous.h2({
  fontSize: Step(6),
  color: colors.black
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  margin: `${Step(5)} auto`
});

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeadMeta
          path="/donors"
          title="Give the gift of crypto to help people in need around the world."
        />
        <Wrapper className="center tc">
          <Title>Meet our generous donors</Title>
          <IconContainer className="responsive">
            <DonorsIcon />
          </IconContainer>
          <DonateHero />
        </Wrapper>
      </>
    );
  }
}
