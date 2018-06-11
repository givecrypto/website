import App, { Container } from 'next/app';
import Router from 'next/router';
import * as React from 'react';
import '../utils/setupFonts';
import '../styles/index.css';
import Navigation from '../components/Navigation/Navigation';

export default class GiveCryptoApp extends App<any, any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.res) {
      const authRoute = ctx.pathname === '/authenticate';
      // if (ctx.query.auth == 'true') {
      //   ctx.session = ctx.query.auth;
      // }

      if (!authRoute) {
        ctx.res.writeHead(301, { Location: '/authenticate' });
        ctx.res.end();
        ctx.res.finished = true;
      }
    } else {
      const { router } = pageProps;
      if (router) {
        const authenticationPath = router.pathname === '/authenticate';
        Router.replace('/authenticate');

        if (!authenticationPath) {
          const password = localStorage.getItem('password');
          if (password !== `${process.env.PASSWORD}`) {
            Router.push('/authenticate');
          }
        }
      }
    }

    return { pageProps };
  }

  render() {
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
