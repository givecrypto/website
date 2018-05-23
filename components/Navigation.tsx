import * as React from 'react';
import Router from 'next/router';
import Link from '../components/Link';

export interface NavigationProps {}

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
