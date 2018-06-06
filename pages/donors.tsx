import * as React from 'react';
import { Step } from '../utils/Scale';
import glamorous from 'glamorous';
import HeadMeta from '../components/HeadMeta';
import DonateButton from '../components/DonateButton';
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

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  render() {
    const { donation, message } = this.state;

    return (
      <>
        <HeadMeta
          path="/donors"
          title="Give the gift of crypto to help people in need around the world."
        />
        <Container>
          <h1>{message}</h1>
          {donation === 'pending' && <DonateButton theme="ghost" />}
          <DonateButton theme="ghost" />
        </Container>
      </>
    );
  }
}
