import glamorous, { Div, Li, Ul } from "glamorous";
import Router from "next/router";
import NProgress from "nprogress";
import * as React from "react";
import Headroom from "react-headroom";
import Lottie from "react-lottie";
import Modal from "react-responsive-modal";
import { Link as ScrollLink } from "react-scroll";
import animationData from "../../animations/menu--grey-white.json";
import Button from "../../components/Button";
import Link, { linkStyles } from "../../components/Link";
import { breakpoints, colors } from "../../design-system";
import Logo from "../../svgs/GiveCrypto.svg";
import { Step } from "../../utils/Scale";
import Links from "./Links";

export interface NavigationProps {
  theme?: string;
}

const Nav = glamorous.nav({
  padding: `${Step(4)} ${Step(4)}`,
  background: colors.white,
  [breakpoints.ns]: {
    padding: Step(5),
  },
});

const LogoContainer = glamorous.div(({ color }: any) => ({
  maxWidth: 170,
  [breakpoints.ns]: {
    maxWidth: 170,
  },
  "& g, & path": { transition: "fill 200ms ease", fill: color },
}));

const AnimationContainer = glamorous.div({
  display: "inline-block",
  width: 24,
  height: 24,
  "> *": {
    "&:focus": {
      outline: "none",
    },
  },
});

export default class Navigation extends React.Component<NavigationProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      menuModalState: false,
      currentRoute: "/",
      isStopped: false,
      direction: -1,
    };

    Router.onRouteChangeStart = () => {
      NProgress.start();
      this.setState({
        menuModalState: false,
        direction: -1,
        isStopped: false,
      });
    };
    Router.onRouteChangeComplete = () => {
      NProgress.done();
      this.setState({
        currentRoute: Router.pathname,
      });
    };
    Router.onRouteChangeError = () => NProgress.done();
  }

  public componentDidMount() {
    this.setState({
      currentRoute: Router.pathname,
    });
  }

  public mapLinks() {
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

        if (currentRoute === "/") {
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
                <Span onClick={this.closeMenu}>{title}</Span>
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

  public toggleMenu = () => {
    let { direction, menuModalState } = this.state;
    // Reverse things
    direction = direction * -1;
    menuModalState = !menuModalState;

    // Set things
    this.setState({ direction, isStopped: false, menuModalState });
  };

  public closeMenu = () => {
    document.querySelector("html").removeAttribute("style");
    this.setState({
      direction: -1,
      isStopped: false,
      menuModalState: false,
    });
  };

  public onOpenModal = () => {
    this.setState({ menuModalState: true });
  };

  public onCloseModal = () => {
    this.toggleMenu();
    this.setState({ menuModalState: false });
  };

  public render() {
    const { theme } = this.props;
    const { menuModalState, currentRoute } = this.state;
    const donateTheme = theme === "light" ? "ghost" : "default";
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <>
        <Headroom className={`relative z-999 open-${menuModalState}`}>
          <Nav className="flex items-center justify-between">
            <Div lineHeight="0">
              <Link href="/">
                <LogoContainer
                  className="responsive"
                  color={
                    currentRoute === "/report" ? colors.coldWater : colors.black
                  }
                >
                  <Logo />
                </LogoContainer>
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
                  <Button href={"/donate"} theme={donateTheme}>
                    Donate Crypto
                  </Button>
                </Li>
              </Ul>
            </Div>
            <Div lineHeight="0" className="flex items-center dn-l">
              <Button
                className="mr3 button-donate"
                href={"/donate"}
                theme={donateTheme}
              >
                Donate
              </Button>
              <AnimationContainer
                onClick={this.toggleMenu}
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
          center={true}
          classNames={{
            overlay: "green-overlay",
            modal: "flat-modal",
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
                href={"/donate"}
                size={"big"}
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
  listStyle: "none",
  marginLeft: 0,
  paddingLeft: 0,
  marginBottom: Step(5),
  fontSize: Step(5),
  fontWeight: 500,
  "& a, & span": {
    color: colors.white,
    "&:hover": {
      color: colors.greyLighter,
    },
  },
  "& .active": {
    color: colors.greyLightest,
    borderBottom: `1px solid ${colors.greyLightest}`,
  },
  [breakpoints.l]: {
    display: "inline-block",
    marginRight: Step(6),
    fontSize: Step(4),
    fontWeight: 400,
    marginBottom: 0,
    "& a, & span": {
      color: colors.black,
      "&:hover": {
        color: colors.grey,
      },
    },
    "> .active > span": {
      "& a, & span": {
        color: colors.black,
      },
      color: colors.black,
      borderBottom: `1px solid ${colors.black}`,
    },
    "& .active": {
      color: colors.black,
      borderBottom: `1px solid ${colors.black}`,
    },
  },
});
