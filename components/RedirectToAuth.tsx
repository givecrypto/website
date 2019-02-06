import Router from 'next/router';
import React from 'react';

export default class extends React.Component {
  public static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/authenticate'
      });
      res.end();
      res.finished = true;
    } else {
      Router.push('/authenticate').then(() => window.scrollTo(0, 0));
    }
    return {};
  }
}
