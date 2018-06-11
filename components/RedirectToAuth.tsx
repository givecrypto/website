import React from 'react';
import Router from 'next/router';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/authenticate'
      });
      res.end();
      res.finished = true;
    } else {
      Router.push('/authenticate');

      // if (router) {
      //   theme = router.pathname === '/donate' ? 'light' : 'default';

      //   // Authentication
      //   const authRoute = router.pathname === '/authenticate';
      //   if (!authRoute && process.browser) {
      //     const password = localStorage.getItem('password');
      //     if (password !== `${process.env.PASSWORD}`) {
      //       console.log(password);
      //       Router.push('/authenticate');
      //     }
      //   }
      // }
    }
    return {};
  }
}
