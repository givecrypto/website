import * as React from 'react';
import Link, { linkStyles } from '../../components/Link';
import Links from './Links';
import Donate from '../Donate';
import Headroom from 'react-headroom';
import { colors } from '../../design-system';
import Logo from '../../svgs/logotype.svg';
import { Step } from '../../utils/Scale';
import glamorous, { Nav, Ul, Li, Div } from 'glamorous';
import { Link as ScrollLink } from 'react-scroll';
export interface NavigationProps {
  theme?: string;
}

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);
  }

  mapLinks() {
    return Links.map(({ href, title, to }: any) => {
      if (to) {
        const Span = glamorous.span(linkStyles);
        return (
          <NavItem key={title}>
            <ScrollLink
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Span>{title}</Span>
            </ScrollLink>
          </NavItem>
        );
      }

      return (
        <NavItem key={title}>
          <Link href={href}>{title}</Link>
        </NavItem>
      );
    });
  }

  render() {
    const { theme } = this.props;
    const donateTheme = theme === 'light' ? 'ghost' : 'default';
    return (
      <Headroom>
        <Nav
          padding={Step(5)}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
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
      </Headroom>
    );
  }
}

const NavItem = glamorous.li({
  display: 'inline-block',
  marginRight: Step(6),
  '> .active > span': {
    color: colors.grey
  }
});
