import App, { Container } from "next/app";
import * as React from "react";
import Navigation from "../components/Navigation/Navigation";
import "../styles/index.css";
import "../utils/setupFonts";

export default class GiveCryptoApp extends App<any, any> {
  public render() {
    const { Component, pageProps, router } = this.props;
    let theme = "default";

    if (router) {
      theme = router.pathname === "/donate" ? "light" : "default";
    }

    return (
      <Container>
        <Navigation theme={theme} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
