import copy from "copy-to-clipboard";
import glamorous from "glamorous";
import * as React from "react";
import { breakpoints, colors } from "../design-system";
import Copy from "../svgs/copy.svg";
import RippleIcon from "../svgs/crypto/xrp.svg";
import ZCashIcon from "../svgs/crypto/zec.svg";
import Logo from "../svgs/logotype.svg";
import delay from "../utils/delay";
import { Step } from "../utils/Scale";

const currencyDetails = {
  ripple: {
    title: "Ripple",
    symbol: "XRP",
    icon: <RippleIcon />,
    address: process.env.RIPPLE_WALLET_ID,
  },
  zcash: {
    title: "ZCash",
    symbol: "ZEC",
    icon: <ZCashIcon />,
    address: process.env.ZEC_WALLET_ID,
  },
};

interface PaymentModalProps {
  currency?: string;
}

const Container = glamorous.div({
  padding: Step(5),
});
const InnerContainer = glamorous.div({
  textAlign: "left",
});
const IconContainer = glamorous.div({
  width: 14,
  marginLeft: Step(5),
});
const QR = glamorous.picture({
  display: "block",
  width: 115,
  [breakpoints.ns]: {
    width: 203,
  },
});

const Heading = glamorous.h2({
  textTransform: "uppercase",
  marginBottom: Step(5),
  fontSize: Step(3.5),
  color: colors.blue,
  fontWeight: 800,
});

const Title = glamorous.h2({
  fontSize: Step(5),
  textAlign: "center",
  paddingBottom: Step(5),
  color: colors.greyDark,
});

const Subtitle = glamorous.p({
  fontSize: Step(3.5),
});

const DesinationTag = () => {
  return (
    <Subtitle>Destination Tag: {process.env.RIPPLE_DESTINATION_TAG}</Subtitle>
  );
};

const WalletInput = glamorous.div({
  cursor: "pointer",
  marginBottom: Step(5),
  "> div": {
    padding: Step(4),
    border: `1px solid ${colors.greyLight}`,
    borderRadius: Step(1),
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: `''`,
      position: "absolute",
      right: 0,
      width: "60px",
      height: "100%",
      top: 0,
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    },
  },
  "& h2": {
    fontWeight: 300,
    width: 500,
    maxWidth: "100%",
    fontSize: Step(4),
    padding: 0,
    margin: 0,
  },
});

const Notice = glamorous.span(
  {
    color: colors.green,
    display: "block",
  },
  ({ type }: any) => {
    if (type === "warning") {
      return {
        background: colors.redWarning,
        color: colors.black,
        fontSize: Step(3.5),
        padding: Step(4),
        marginTop: Step(4),
        border: `1px solid ${colors.red}`,
        [breakpoints.ns]: {
          marginTop: 0,
          padding: Step(5),
        },
      };
    }
  }
);

export default class PaymentModal extends React.Component<
  PaymentModalProps,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = { clipboardFull: false };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  public render() {
    const { clipboardFull } = this.state;
    const { currency = "ripple" } = this.props;
    const { symbol, icon, address } = currencyDetails[currency];

    return (
      <Container className="middle center tc">
        <Heading>Donate {symbol}</Heading>
        {icon}
        <Title>Donate {symbol} to the address below</Title>
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
          <div className="flex flex-wrap tc tl-ns justify-center justify-between-ns items-center">
            <QR className="center ml0-ns">
              <source
                type="image/webp"
                srcSet={`/static/images/${currency}-qr-code.webp, /static/images/${currency}-qr-code@2x.webp 2x`}
              />
              <source
                srcSet={`/static/images/${currency}-qr-code.jpg, /static/images/${currency}-qr-code@2x.jpg 2x`}
              />
              <img
                src={`/static/images/${currency}-qr-code.jpg`}
                srcSet={`/static/images/${currency}-qr-code.jpg, /static/images/${currency}-qr-code@2x.jpg 2x`}
                alt={`${symbol} QR Code`}
              />
            </QR>
            <div className="tc">
              <Notice className="lh-copy" type="warning">
                Send only {symbol} to this address.
              </Notice>
              {symbol === "XRP" && <DesinationTag />}
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center w-100 mt5">
            <Logo />
            <Subtitle>&copy; 2018 GiveCrypto. All rights reserved.</Subtitle>
          </div>
        </InnerContainer>
      </Container>
    );
  }

  public async copyToClipboard() {
    const { currency = "ripple" } = this.props;
    const { address } = currencyDetails[currency];
    copy(address);

    this.setState({
      clipboardFull: true,
    });

    await delay(3000);
    this.setState({
      clipboardFull: false,
    });
  }
}
