import * as React from 'react';
import Twitter from '../svgs/social/twitter.svg';
import Medium from '../svgs/social/medium.svg';
import Reddit from '../svgs/social/reddit.svg';
import Link from '../components/Link';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';

export interface ShareProps {}
const Icons = glamorous.div({
  padding: `${Step(5)} 0 0 0`,
  '& a': {
    padding: `0 ${Step(4)}`
  }
});

export default class Share extends React.Component<ShareProps, any> {
  render() {
    return (
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
    );
  }
}
