import glamorous from "glamorous";
import * as React from "react";
import { colors } from "../design-system";
import Medium from "../svgs/social/medium.svg";
import Reddit from "../svgs/social/reddit.svg";
import Twitter from "../svgs/social/twitter.svg";
import { Step } from "../utils/Scale";

const Icons = glamorous.div({
  "& a": {
    padding: `0 ${Step(4)}`,
    "> svg": {
      transition: "all 200ms",
      fill: colors.grey
    },

    "&:hover, &:active": {
      color: colors.grey,
      "> svg": {
        fill: colors.black
      }
    }
  }
});

const Share: React.SFC = () => (
  <Icons>
    <a href="http://twitter.com/givecrypto/">
      <Twitter className="test" />
    </a>
    <a href="http://medium.com/givecrypto/">
      <Medium />
    </a>
    <a href="https://www.reddit.com/r/givecrypto/">
      <Reddit />
    </a>
  </Icons>
);

export default Share;
