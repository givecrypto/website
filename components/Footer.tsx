import glamorous, { Div, Section } from "glamorous";
import * as React from "react";
import Link from "../components/Link";
import Share from "../components/Share";
import { breakpoints } from "../design-system";
import Logo from "../svgs/GiveCrypto.svg";
import { Step } from "../utils/Scale";

const Legal = glamorous.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: Step(3.75)
});

const LogoContainer = glamorous.div({
  maxWidth: 150,
  [breakpoints.ns]: {
    maxWidth: 170
  }
});

const Footer: React.SFC = () => (
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

export default Footer;
