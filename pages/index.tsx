import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous from 'glamorous';
import Head from 'next/head';
import HeadContent from '../components/HeadContent';
import Donate from '../components/Donate';

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
          <title>Home page</title>
          <HeadContent page="home" />
        </Head>
        <h1>GiveCrypto - {message}</h1>
        <Donate anonymous={true} />
      </Container>
    );
  }
}
