import * as React from 'react';
import Router from 'next/router';
import Link, { linkStyles } from '../../components/Link';
import Links from './Links';
import Headroom from 'react-headroom';
import { colors } from '../../design-system';
import Logo from '../../svgs/logotype.svg';
import { Step } from '../../utils/Scale';
import glamorous, { Nav, Ul, Li, Div } from 'glamorous';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../../components/Button';
export interface NavigationProps {
  theme?: string;
}

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentRoute: null
    };
  }

  componentDidMount() {
    this.setState({
      currentRoute: Router.pathname
    });
  }

  mapLinks() {
    const { currentRoute } = this.state;
    return Links.map(({ href, title, to, activeClass }: any) => {
      const defaultLink = (url = href): any => (
        <NavItem key={title}>
          <Link activeClass={activeClass} href={url}>
            {title}
          </Link>
        </NavItem>
      );

      if (to) {
        const Span = glamorous.span(linkStyles);
        const ElementIsAvailable =
          typeof document !== 'undefined' && document.getElementById(to);

        if (ElementIsAvailable && currentRoute === '/') {
          return (
            <NavItem key={title}>
              <ScrollLink
                activeClass="active"
                to={to}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Span>{title}</Span>
              </ScrollLink>
            </NavItem>
          );
        } else {
          return defaultLink(`/#${to}`);
        }
      }

      return defaultLink();
    });
  }

  render() {
    const { theme } = this.props;
    const donateTheme = theme === 'light' ? 'ghost' : 'default';
    return (
      <Headroom className="relative z-9999">
        <Nav
          padding={Step(5)}
          background={colors.white}
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
                <Button href={'/donate'} theme={donateTheme}>
                  Donate Crypto
                </Button>
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
