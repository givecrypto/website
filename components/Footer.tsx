import * as React from 'react';
import glamorous, { Section, Div } from 'glamorous';
import { Step } from '../utils/Scale';
import Logo from '../svgs/logotype.svg';
import Link from '../components/Link';
import Share from '../components/Share';

interface FooterProps {}

const Legal = glamorous.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: Step(3.75)
});

export default class Footer extends React.Component<FooterProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section flexShrink={0} role="footer">
        <Div
          padding={Step(5)}
          display="flex"
          justifyContent="space-between"
          alignItems="top"
        >
          <Div>
            <Link href="/">
              <Logo />
            </Link>
          </Div>
          <Div>
            <Legal>&copy; 2018 GiveCrypto. All rights reserved.</Legal>
          </Div>
          <Share />
        </Div>
      </Section>
    );
  }
}
