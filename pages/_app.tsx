import App, { Container } from 'next/app';
import Router from 'next/router';
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
    let theme = 'default';
    if (router) {
      theme = router.pathname === '/donate' ? 'light' : 'default';
      const authRoute = router.pathname === '/authenticate';

      if (!authRoute && process.browser) {
        const password = localStorage.getItem('password');
        if (password !== process.env.PASSWORD) {
          console.log(password);
          Router.push('/authenticate');
        }
      }
    }
    return (
      <Container>
        <Navigation theme={theme} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
