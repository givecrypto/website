import * as React from 'react';
import glamorous, { Section, Div } from 'glamorous';
import { Step } from '../utils/Scale';
import Logo from '../svgs/GiveCrypto.svg';
import Link from '../components/Link';
import Share from '../components/Share';

interface FooterProps {}

const Legal = glamorous.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: Step(3.75)
});

const LogoContainer = glamorous.div({
  maxWidth: 180
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
          className="h4 flex flex-wrap justify-between items-center items-top-ns"
        >
          <Div className="order-0">
            <Link href="/">
              <LogoContainer className="responsive">
                <Logo />
              </LogoContainer>
            </Link>
          </Div>
          <Div className="o-30 order-2 order-1-ns">
            <Legal>&copy; 2018 GiveCrypto. All rights reserved.</Legal>
          </Div>
          <Div className="order-1 order-2-ns tc">
            <Share />
          </Div>
        </Div>
      </Section>
    );
  }
}
