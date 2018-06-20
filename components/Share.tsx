import * as React from 'react';
import Twitter from '../svgs/social/twitter.svg';
import Medium from '../svgs/social/medium.svg';
import Reddit from '../svgs/social/reddit.svg';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';

export interface ShareProps {}
const Icons = glamorous.div({
  '& a': {
    padding: `0 ${Step(4)}`,
    '> svg': {
      transition: 'all 200ms',
      fill: colors.grey
    },

    '&:hover, &:active': {
      color: colors.grey,
      '> svg': {
        fill: colors.black
      }
    }
  }
});

export default class Share extends React.Component<ShareProps, any> {
  render() {
    return (
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
  }
}
