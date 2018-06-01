import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';
import chroma from 'chroma-js';

export interface DonateProps {
  anonymous?: boolean;
  theme?: string;
}

declare global {
  interface Window {
    BuyWithCrypto: any;
  }
}

const linkStyles = {
  '&.donate-with-crypto': {
    boxSizing: 'border-box',
    transition: 'all 200ms ease',
    cursor: 'pointer',
    color: 'white',
    border: `1px solid ${colors.green}`,
    background: colors.green,
    textDecoration: 'none',
    padding: Step(4),
    borderRadius: Step(2),
    fontSize: Step(3.75),
    height: 'inherit !important',
    boxShadow: '0 8px 16px rgba(0,0,0,0.075)',
    display: 'inline',
    '> span': {
      display: 'inline',
      fontSize: '1em',
      fontFamily: 'Apercu',
      fontWeight: 200,
      textTransform: 'uppercase',
      letterSpacing: `0.1rem`,
      cursor: 'pointer',
      textShadow: 'none',
      padding: 0
    },
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
    '&.theme-ghost': {
      color: colors.green,
      background: 'transparent',
      boxShadow: '0 8px 16px rgba(0,0,0,0.075)',
      '> span': {
        transition: 'color 200ms ease',
        color: colors.green
      },
      '&:hover': {
        background: chroma(colors.green)
          .brighten(0.25)
          .css(),
        '> span': {
          color: 'white'
        }
      }
    }
  }
};
const Link = glamorous.a(linkStyles);

export default class Donate extends React.Component<DonateProps, {}> {
  // componentDidMount() {
  //   const doThing = checkout();
  //   doThing(window, document);
  // }

  render() {
    const { anonymous, theme = 'default' } = this.props;

    let id = anonymous
      ? process.env.COMMERCE_ID_ANONYMOUS
      : process.env.COMMERCE_ID_DEFAULT;

    return (
      <>
        <Link
          className={`donate-with-crypto theme-${theme}`}
          href={`https://commerce.coinbase.com/checkout/${id}`}
          rel="noopener"
          target="_self"
        >
          <span>Donate Crypto</span>
        </Link>
        <script src="/static/vendor/checkout.js" />
      </>
    );
  }
}
