import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import chroma from 'chroma-js';

export interface DonateProps {
  anonymous?: boolean;
}

const linkStyles = {
  '&.donate-with-crypto': {
    color: 'white',
    background: colors.green,
    textDecoration: 'none',
    '&:hover': {
      background: chroma(colors.green)
        .brighten(0.25)
        .css()
    },
    '> span': {
      textShadow: 'none'
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
