import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous from 'glamorous';
const { div } = glamorous;

const Container = div({
  padding: Step(5)
})

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
    const { message = 'folks' } = this.state;
    return (
      <Container>
        <h1>Really cool {message}</h1>
      </Container>
    );
  }
}
