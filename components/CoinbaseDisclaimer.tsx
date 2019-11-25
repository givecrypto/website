import glamorous from "glamorous";
import * as React from "react";
import { colors } from "../design-system";
import { Step } from "../utils/Scale";

const Container = glamorous.section({
  padding: `${Step(1)} 0`,
  maxWidth: 320,
});
const Title = glamorous.p({
  maxWidth: 600,
  fontSize: Step(4),
  color: colors.grey,
});

const CoinbaseDisclaimer: React.SFC = () => {
  return (
    <Container className="tc center">
      <Title className="lh-copy center">
        GiveCrypto.org is a non-profit entity unaffiliated with Coinbase.
      </Title>
    </Container>
  );
};

export default CoinbaseDisclaimer;
