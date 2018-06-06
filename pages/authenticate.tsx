import * as React from 'react';
import Wrapper from '../components/Wrapper';
import glamorous from 'glamorous';
import Router from 'next/router';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';

export interface AuthenticateProps {}

const Container = glamorous.div({});
const Input = glamorous.input({
  fontWeight: 100,
  textAlign: 'center',
  border: 'none',
  color: colors.black,
  paddingBottom: Step(3),
  borderBottom: `1px solid transparent`,
  '&::placeholder': {
    opacity: 1,
    transition: 'all 200ms',
    transform: 'scale(1)',
    fontWeight: 100
  },
  '&:focus': {
    outline: 'none',
    borderBottom: `1px solid ${colors.black}`,
    '&::placeholder': {
      opacity: 0,
      transform: 'scale(0.9)'
    }
  }
});

export default class Authenticate extends React.Component<
  AuthenticateProps,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      referralLink: '',
      clipboardState: 'EMPTY'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let password = event.target.value;

    if (password === process.env.PASSWORD) {
      localStorage.setItem('password', password);
      Router.push('/');
    }
  }

  render() {
    return (
      <Wrapper>
        <Container className="vh-75 dt w-100 tc center">
          <div className="v-mid dtc">
            <Input
              placeholder="What's the password?"
              onChange={this.handleChange}
            />
          </div>
        </Container>
      </Wrapper>
    );
  }
}
