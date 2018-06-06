import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import RippleIcon from '../svgs/crypto/xrp.svg';
import { Step } from '../utils/Scale';
import copy from 'copy-to-clipboard';
import Logo from '../svgs/logotype.svg';
import Copy from '../svgs/copy.svg';
import Delay from '../utils/Delay';
const address = 'rEb8tk592300d37181fCFc758d722d1dfddd338911';

interface RippleModalProps {}

const Container = glamorous.div({
  padding: Step(5)
});
const InnerContainer = glamorous.div({
  textAlign: 'left'
});
const IconContainer = glamorous.div({
  width: 14,
  marginLeft: Step(5)
});
const QR = glamorous.img({
  display: 'block',
  width: 203,
  transform: 'translateX(-22px)'
});

const Heading = glamorous.h2({
  textTransform: 'uppercase',
  marginBottom: Step(5),
  fontSize: Step(3.5),
  color: colors.blue,
  fontWeight: 800
});

const Title = glamorous.h2({
  fontSize: Step(5),
  textAlign: 'center',
  paddingBottom: Step(5),
  color: colors.greyDark
});

const Subtitle = glamorous.p({
  fontSize: Step(3.5)
});

const WalletInput = glamorous.div({
  cursor: 'pointer',
  marginBottom: Step(5),
  '> div': {
    padding: Step(4),
    border: `1px solid ${colors.greyLight}`,
    borderRadius: Step(1)
  },
  '& h2': {
    fontWeight: 300,
    width: 500,
    maxWidth: '100%',
    fontSize: Step(4),
    padding: 0,
    margin: 0
  }
});

const Notice = glamorous.span(
  {
    color: colors.green
  },
  ({ type }: any) => {
    if (type === 'warning') {
      return {
        background: colors.redWarning,
        color: colors.black,
        fontSize: Step(3.5),
        padding: Step(5),
        border: `1px solid ${colors.red}`
      };
    }
  }
);

export default class RippleModal extends React.Component<
  RippleModalProps,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = { clipboardFull: false };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  render() {
    const { clipboardFull } = this.state;

    return (
      <Container className="center tc">
        <Heading>Donate Ripple</Heading>
        <RippleIcon />
        <Title>Donate XRP to the address below</Title>
        <InnerContainer>
          <WalletInput>
            <Subtitle>
              Wallet Address{` `} {clipboardFull && <Notice>Copied!</Notice>}
            </Subtitle>

            <div
              onClick={this.copyToClipboard}
              className="flex flex-row justify-between items-center"
            >
              <h2>{address}</h2>
              <IconContainer className="responsive">
                <Copy />
              </IconContainer>
            </div>
          </WalletInput>
          <div className="flex justify-between items-center">
            <QR src="/static/images/temp-qr-code@2x.jpg" width="203" />
            <Notice type="warning">
              Send only Ripple (XRP) to this address.
            </Notice>
          </div>
          <div className="flex flex-wrap justify-between items-center w-100 mt5">
            <Logo />
            <Subtitle>&copy; 2018 GiveCrypto. All rights reserved.</Subtitle>
          </div>
        </InnerContainer>
      </Container>
    );
  }

  async copyToClipboard() {
    copy(address);

    this.setState({
      clipboardFull: true
    });

    await Delay(3000);
    this.setState({
      clipboardFull: false
    });
  }
}
