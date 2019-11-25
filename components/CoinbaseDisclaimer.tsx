import glamorous from "glamorous";
import * as React from "react";
import { colors } from "../design-system";
import { Step } from "../utils/Scale";

const Title = glamorous.p({
  padding: `${Step(1)} 0`,
  maxWidth: 320,
  fontSize: Step(4),
  color: colors.grey,
});

const CoinbaseDisclaimer: React.SFC = () => {
  return (
    <Title className="lh-copy center">
      GiveCrypto.org is a non-profit entity unaffiliated with Coinbase.
    </Title>
  );
};

export default CoinbaseDisclaimer;
