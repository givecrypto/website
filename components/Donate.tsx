import * as React from 'react';

export interface AppProps {
  anonymous?: boolean;
}

export default class App extends React.Component<AppProps, any> {
  render() {
    const { anonymous = false } = this.props;
    if (anonymous) {
      <div>
        <a
          className="donate-with-crypto"
          href="https://commerce.coinbase.com/checkout/4ebc0918-08e8-4c9c-8085-ed756e9a7625"
        >
          <span>Donate with Crypto</span>
        </a>
        <script src="https://commerce.coinbase.com/v1/checkout.js" />
      </div>;
    }

    return (
      <div>
        <a
          className="donate-with-crypto"
          href="https://commerce.coinbase.com/checkout/ab0a435a-6e00-46f6-b4dc-f72a5924ef39"
        >
          <span>Donate with Crypto</span>
        </a>
        <script src="https://commerce.coinbase.com/v1/checkout.js" />
      </div>
    );
  }
}
