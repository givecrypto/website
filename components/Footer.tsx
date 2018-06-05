import * as React from 'react';
import glamorous, { Section, Div } from 'glamorous';
import { Step } from '../utils/Scale';
import Reddit from '../svgs/social/reddit.svg';
import Twitter from '../svgs/social/twitter.svg';
import Medium from '../svgs/social/medium.svg';
import Logo from '../svgs/logotype.svg';
import Link from '../components/Link';

interface FooterProps {}

const Icons = glamorous.div({
  '> a': {
    padding: `0 ${Step(4)}`
  }
});

const Legal = glamorous.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: Step(3.75)
});

const Footer: React.SFC<FooterProps> = () => {
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
        <Icons>
          <Link href="http://twitter.com/givecrypto/">
            <Twitter className="test" />
          </Link>
          <Link href="http://medium.com/givecrypto/">
            <Medium />
          </Link>
          <Link href="https://www.reddit.com/r/givecrypto/">
            <Reddit />
          </Link>
        </Icons>
      </Div>
    </Section>
  );
};

export default Footer;
