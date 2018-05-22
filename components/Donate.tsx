import * as React from 'react';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';
import * as chroma from 'chroma-js';

export interface DonateProps {
  anonymous?: boolean;
}

const linkStyles = {
  padding: Step(4),
  borderRadius: Step(3),
  color: 'white',
  background: colors.green,
  textDecoration: 'none',
  '&:hover': {
    background: chroma(colors.green)
      .brighten(0.25)
      .css()
  }
};
const Link = glamorous.a(linkStyles);

export default class Donate extends React.Component<DonateProps, any> {
  render() {
    let id = this.props.anonymous
      ? process.env.COMMERCE_ID_TEST
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
