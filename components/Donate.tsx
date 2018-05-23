import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';
import chroma from 'chroma-js';

export interface DonateProps {
  anonymous?: boolean;
}

const linkStyles = {
  '&.donate-with-crypto': {
    transition: 'all 200ms ease',
    color: 'white',
    cursor: 'pointer',
    background: colors.green,
    textDecoration: 'none',
    padding: Step(4),
    height: 'auto',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    '&:after': {
      display: 'none'
    },
    '&:hover': {
      background: chroma(colors.green)
        .brighten(0.25)
        .css()
    },
    '&:active': {
      padding: `${Step(4)} !important`,
      height: 'auto',
      background: chroma(colors.green)
        .brighten(0.125)
        .css(),
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    '> span': {
      textShadow: 'none',
      padding: 0
    }
  }
};
const Link = glamorous.a(linkStyles);

export default class Donate extends React.Component<DonateProps, any> {
  render() {
    let id = this.props.anonymous
      ? process.env.COMMERCE_ID_ANONYMOUS
      : process.env.COMMERCE_ID_DEFAULT;

    return (
      <>
        <Link
          className="donate-with-crypto"
          href={`https://commerce.coinbase.com/checkout/${id}`}
        >
          <span>Donate Crypto</span>
        </Link>
        <script src="https://commerce.coinbase.com/v1/checkout.js" />
      </>
    );
  }
}
