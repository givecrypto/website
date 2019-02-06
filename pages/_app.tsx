import App, { Container } from 'next/app';
import Router from 'next/router';
import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';
import '../styles/index.css';
import { getCookie } from '../utils/session';
import '../utils/setupFonts';

// Set to true to require a password in production
const authenticateProduction = false;

export default class GiveCryptoApp extends App<any, any> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};

    // Force a password on staging, and respect production settings above
    const secure =
      (ctx.req && ctx.req.headers === 'https://staging.givecrypto.org') ||
      authenticateProduction;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.res && secure) {
      const authRoute = ctx.pathname === '/authenticate';
      const password = getCookie('password', ctx.req);
      const isAuthenticated = password === `${process.env.PASSWORD}`;

      if (!authRoute && !isAuthenticated) {
        ctx.res.writeHead(301, { Location: '/authenticate' });
        ctx.res.end();
        ctx.res.finished = true;
      }
    } else if (secure) {
      const { router } = pageProps;
      const isAuthenticated = getCookie('jwt', null);
      if (router) {
        const authenticationPath = router.pathname === '/authenticate';
        Router.replace('/authenticate').then(() => window.scrollTo(0, 0));

        if (!authenticationPath && !isAuthenticated) {
          const password = localStorage.getItem('password');
          if (password !== `${process.env.PASSWORD}`) {
            Router.push('/authenticate').then(() => window.scrollTo(0, 0));
          }
        }
      }
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    let authenticationPath;
    let theme = 'default';

    if (router) {
      authenticationPath = router.pathname === '/authenticate';
      theme = router.pathname === '/donate' ? 'light' : 'default';
    }
    return (
      <Container>
        {!authenticationPath && <Navigation theme={theme} />}
        <Component {...pageProps} />
      </Container>
    );
  }
}
