import App, { Container } from 'next/app';
import * as React from 'react';
import '../utils/setupFonts';
import '../styles/index.css';
import Navigation from '../components/Navigation/Navigation';

export default class GiveCryptoApp extends App<any, any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const theme = router.pathname === '/donate' ? 'light' : 'default';
    return (
      <Container>
        <Navigation theme={theme} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
