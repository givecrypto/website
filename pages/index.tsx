import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous from 'glamorous';
import Head from 'next/head';
import HeadMeta from '../components/HeadMeta';
import Navigation from '../components/Navigation/Navigation';
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

  render() {
    const { message = 'Giving copy' } = this.state;
    return (
      <Container>
        <Head>
          <title key="head-title">
            GiveCrypto | Empowering, educating and elevating communities into
            the open financial system.
          </title>
          <HeadMeta page="home" />
        </Head>
        <Navigation />
        <h1>Home Template. {message}</h1>
      </Container>
    );
  }
}
