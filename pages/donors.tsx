import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous from 'glamorous';
import Head from 'next/head';
import HeadContent from '../components/HeadContent';
import Donate from '../components/Donate';
import Navigation from '../components/Navigation/Navigation';
import '../utils/rehydrate';

const { div } = glamorous;

const Container = div({
  padding: Step(5)
});

export interface AppProps {}
export interface AppState {
  donation: string;
  message: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      donation: 'pending',
      message: 'Donate Today'
    };
  }

  render() {
    const { donation, message } = this.state;

    return (
      <Container>
        <Head>
          <title>
            GiveCrypto Donors | Empowering, educating and elevating communities
            into the open financial system.
          </title>
          <HeadContent page="donors" />
        </Head>
        <Navigation theme="light" />
        <h1>{message}</h1>
        {donation === 'pending' && <Donate theme="ghost" />}
      </Container>
    );
  }
}
