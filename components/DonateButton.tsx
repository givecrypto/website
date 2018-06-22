import * as React from 'react';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../design-system';
import { Step } from '../utils/Scale';
import chroma from 'chroma-js';
import Modal from 'react-responsive-modal';
import PaymentModal from './PaymentModal';
import SetupCoinbaseCommerce from '../utils/SetupCoinbaseCommerce';
import _ from 'lodash';

export interface DonateProps {
  type?: string;
  onClick?: any;
  theme?: string;
}

declare global {
  interface Window {
    BuyWithCrypto: any;
  }
}

const linkStyles = {
  '&.donate-with-crypto': {
    minWidth: `48%`,
    boxSizing: 'border-box',
    transition: 'all 200ms ease',
    cursor: 'pointer',
    color: 'white',
    border: `1px solid ${colors.green}`,
    background: colors.green,
    textDecoration: 'none',
    borderRadius: Step(2),
    height: 'inherit !important',
    boxShadow: '0 8px 16px rgba(0,0,0,0.075)',
    display: 'inline-block',
    '> span': {
      display: 'inline',
      fontSize: '1em',
      fontFamily: 'Apercu',
      fontWeight: 200,
      textTransform: 'uppercase',
      letterSpacing: `0.05rem`,
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
    },
    '&.theme-full': {
      display: 'block',
      width: '100%'
    },
    fontSize: Step(3.45),
    padding: `${Step(4)} ${Step(3.75)}`,
    [breakpoints.ns]: {
      '> span': {
        letterSpacing: `0.1rem`
      },
      padding: Step(4),
      fontSize: Step(3.75)
    }
  }
};
const Link = glamorous.a(linkStyles);

declare global {
  interface Window {
    checkoutScript: any;
  }
}

export default class Donate extends React.Component<DonateProps, any> {
  constructor(props) {
    super(props);
    const uuid = _.uniqueId('coinbase-commerce--');
    this.state = {
      paymentModalState: false,
      uuid
    };
  }

  componentDidMount() {
    const { uuid } = this.state;
    const { type = 'default' } = this.props;
    if (type !== 'ripple') {
      SetupCoinbaseCommerce(window, document, uuid, type);
    }
  }

  onOpenModal = () => {
    this.setState({ paymentModalState: true });
  };

  onCloseModal = () => {
    this.setState({ paymentModalState: false });
  };

  render() {
    const { type = 'default', theme = 'default', children } = this.props;
    const { paymentModalState } = this.state;

    const buttonText = () => {
      switch (type) {
        case 'default':
          return 'Donate Crypto';

        case 'anonymous':
          return 'Donate Anonymously';

        case 'ripple':
          return 'Donate Ripple';

        case 'zcash':
          return 'Donate ZCash';

        default:
          return `Donate ${type}`;
      }
    };

    let id =
      type === 'anonymous'
        ? process.env.COMMERCE_ID_ANONYMOUS
        : process.env.COMMERCE_ID_DEFAULT;

    if (type === 'ripple' || type === 'zcash') {
      return (
        <>
          <Link
            onClick={this.onOpenModal}
            className={`donate-with-crypto theme-${theme}`}
            rel="noopener"
            target="_self"
          >
            <span>{children || buttonText()}</span>
          </Link>
          <Modal
            open={paymentModalState}
            onClose={this.onCloseModal}
            center
            classNames={{
              overlay: 'custom-overlay',
              modal: 'custom-modal',
              closeButton: 'pointer'
            }}
          >
            <PaymentModal currency={type} />
          </Modal>
        </>
      );
    }
    return (
      <>
        <Link
          id={`button-${type}`}
          className={`donate-with-crypto theme-${theme}`}
          href={`https://commerce.coinbase.com/checkout/${id}`}
          rel="noopener"
          target="_self"
        >
          <span>{children || buttonText()}</span>
        </Link>
      </>
    );
  }
}
