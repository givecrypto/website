import App, { Container } from 'next/app';
import * as React from 'react';
import '../utils/setupFonts';
import '../styles/index.css';

export default class GiveCryptoApp extends App<any, any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    // OMMG this type error :(
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
