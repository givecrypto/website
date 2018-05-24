import * as React from 'react';
import Router from 'next/router';
import { Step } from '../utils/Scale';
import glamorous, { Div } from 'glamorous';
import Head from 'next/head';
import HeadMeta from '../components/HeadMeta';
import Navigation from '../components/Navigation/Navigation';
import { animateScroll } from 'react-scroll';
import '../utils/rehydrate';

const { div } = glamorous;

const Container = div({
  padding: Step(5)
});

export interface AppProps {}

export interface AppState {
  message?: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(Router.asPath);
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

  render() {
    const { message = 'Giving copy' } = this.state;
    return (
      <>
        <Head>
          <title key="head-title">
            GiveCrypto | Empowering, educating and elevating communities into
            the open financial system.
          </title>
        </Head>
        <HeadMeta path="/home" />
        <Navigation />
        <Container>
          <h1>Home Template. {message}</h1>
          <Div display="block" height="300px" />
          <h1 id="how-it-works">How It Works</h1>
          <Div display="block" height="300px" />
          <h1 id="about">About</h1>
        </Container>
      </>
    );
  }
}
