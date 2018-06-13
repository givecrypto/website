import * as React from 'react';
import Router from 'next/router';
import Link, { linkStyles } from '../../components/Link';
import Links from './Links';
import Headroom from 'react-headroom';
import { colors, breakpoints } from '../../design-system';
import Logo from '../../svgs/logotype.svg';
import { Step } from '../../utils/Scale';
import glamorous, { Nav, Ul, Li, Div } from 'glamorous';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../../components/Button';
import NProgress from 'nprogress';
import Lottie from 'react-lottie';
import * as animationData from '../../animations/menu--grey-white.json';
import Modal from 'react-responsive-modal';

export interface NavigationProps {
  theme?: string;
}

const AnimationContainer = glamorous.div({
  display: 'inline-block',
  width: 24,
  height: 24,
  '> *': {
    '&:focus': {
      outline: 'none'
    }
  }
});

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      menuModalState: false,
      currentRoute: '/',
      isStopped: false,
      direction: -1
    };

    Router.onRouteChangeStart = () => {
      NProgress.start();
      this.setState({
        menuModalState: false,
        direction: -1,
        isStopped: false
      });
    };
    Router.onRouteChangeComplete = () => {
      NProgress.done();
      this.setState({
        currentRoute: Router.pathname
      });
    };
    Router.onRouteChangeError = () => NProgress.done();
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

        if (currentRoute === '/') {
          return (
            <NavItem key={title}>
              <ScrollLink
                activeClass="active"
                to={to}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-50}
                duration={550}
              >
                <Span
                  onClick={() => {
                    this.closeMenu();
                  }}
                >
                  {title}
                </Span>
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

  toggleMenu() {
    let { direction, menuModalState } = this.state;
    // Reverse things
    direction = direction * -1;
    menuModalState = !menuModalState;

    // Set things
    this.setState({ direction, isStopped: false, menuModalState });
  }

  closeMenu() {
    this.setState(
      {
        direction: -1,
        isStopped: false,
        menuModalState: false
      },
      () => {
        document.querySelector('html').removeAttribute('style');
      }
    );
  }

  onOpenModal = () => {
    this.setState({ menuModalState: true });
  };

  onCloseModal = () => {
    this.toggleMenu();
    this.setState({ menuModalState: false });
  };

  render() {
    const { theme } = this.props;
    const { menuModalState } = this.state;
    const donateTheme = theme === 'light' ? 'ghost' : 'default';
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <>
        <Headroom className={`relative z-999 open-${menuModalState}`}>
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
            <Div alignSelf="end" className="dn db-l">
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
            <Div lineHeight="0" className="flex items-center dn-l">
              <Button
                className="mr3 button-donate"
                href={'/donate'}
                theme={donateTheme}
              >
                Donate
              </Button>
              <AnimationContainer
                onClick={() => this.toggleMenu()}
                className="pointer responisive center"
              >
                <Lottie
                  options={defaultOptions}
                  isPaused={this.state.isStopped}
                  direction={this.state.direction}
                />
              </AnimationContainer>
            </Div>
          </Nav>
        </Headroom>
        <Modal
          open={menuModalState}
          showCloseIcon={false}
          onClose={this.onCloseModal}
          center
          classNames={{
            overlay: 'green-overlay',
            modal: 'flat-modal'
          }}
        >
          <Ul
            role="navigation"
            display="flex"
            textAlign="center"
            flexDirection="column"
            alignItems="center"
            listStyle="none"
            margin={0}
            padding={0}
          >
            {this.mapLinks()}
            <li>
              <Button
                className="mt4 db button-donate"
                href={'/donate'}
                size={'big'}
                theme="ghost"
              >
                Donate
              </Button>
            </li>
          </Ul>
        </Modal>
      </>
    );
  }
}

const NavItem = glamorous.li({
  listStyle: 'none',
  marginLeft: 0,
  paddingLeft: 0,
  marginBottom: Step(5),
  fontSize: Step(5),
  fontWeight: 500,
  '& a, & span': {
    color: colors.white
  },
  [breakpoints.l]: {
    display: 'inline-block',
    marginRight: Step(6),
    marginBottom: 0,
    '> .active > span': {
      color: colors.black,
      borderBottom: `1px solid ${colors.black}`
    }
  }
});
