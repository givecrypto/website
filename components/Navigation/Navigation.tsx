import * as React from 'react';
import Link from '../../components/Link';
import Links from './Links';
import Donate from '../Donate';
import Logo from '../../svgs/logo.svg';
import { Step } from '../../utils/Scale';
import glamorous, { Nav, Ul, Li, Div } from 'glamorous';
export interface NavigationProps {
  theme?: string;
}

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);
  }

  mapLinks() {
    return Links.map(({ href, title }) => {
      return (
        <NavItem>
          <Link href={href}>{title}</Link>
        </NavItem>
      );
    });
  }

  render() {
    const { theme } = this.props;
    const donateTheme = theme === 'light' ? 'ghost' : 'default';
    return (
      <Nav display="flex" alignItems="center" justifyContent="space-between">
        <Div lineHeight="0">
          <Link href="/">
            <Logo />
          </Link>
        </Div>
        <Div alignSelf="end">
          <Ul
            role="navigation"
            display="flex"
            alignItems="center"
            listStyle="none"
            margin={0}
          >
            {this.mapLinks()}
            <Li display="inline-block">
              <Donate theme={donateTheme} />
            </Li>
          </Ul>
        </Div>
      </Nav>
    );
  }
}

const NavItem = glamorous.li({
  display: 'inline-block',
  marginRight: Step(6)
});
