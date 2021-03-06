import chroma from "chroma-js";
import glamorous, { CSSProperties } from "glamorous";
import * as React from "react";
import { colors } from "../design-system";
import { Step } from "../utils/Scale";
import BrowserLink from "./Link";

export interface ButtonProps {
  href?: string;
  size?: string;
  to?: string;
  className?: string;
  theme?: string;
  target?: string;
}

const buttonStyles: CSSProperties = {
  boxSizing: "border-box",
  transition: "all 200ms",
  cursor: "pointer",
  color: "white",
  border: `1px solid ${colors.green}`,
  borderRadius: Step(2),
  background: colors.green,
  textDecoration: "none",
  display: "inline-block",
  fontSize: Step(3.75),
  boxShadow: "0 8px 16px rgba(0,0,0,0.075)",
  fontFamily: "Apercu",
  fontWeight: 200,
  textTransform: "uppercase",
  letterSpacing: `0.1rem`,
  "&:hover": {
    background: chroma(colors.green)
      .brighten(0.25)
      .css(),
  },
  "&:active": {
    padding: `${Step(4)} !important`,
    height: "auto",
    background: chroma(colors.green)
      .brighten(0.125)
      .css(),
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  "&.theme-ghost": {
    color: colors.green,
    background: colors.white,
    boxShadow: "0 8px 16px rgba(0,0,0,0.075)",
    transition: "all 200ms",
    "&:hover": {
      color: "white",
      background: chroma(colors.green)
        .brighten(0.25)
        .css(),
    },
  },
  "&.theme-submit": {
    transition: "all 300ms",
    color: colors.white,
    background: chroma(colors.green)
      .brighten(0.25)
      .css(),
    borderColor: colors.green,
    textTransform: "none",
    fontWeight: 400,
    letterSpacing: `0.075rem`,
    boxShadow: "none",
    borderRadius: `0 ${Step(2)} ${Step(2)} 0`,
    "&:hover": {
      color: colors.white,
      background: chroma(colors.green)
        .brighten(0.25)
        .css(),
    },
    "&.disable-true, &[disabled]": {
      pointerEvents: "none",
      color: colors.black,
      background: colors.white,
    },
    "&.loading-true": {
      padding: `0 ${Step(4)}`,
      backgroundColor: `${colors.yellowLight} !important`,
      borderColor: colors.yellow,
    },
  },
  padding: Step(4),
  "&.size-big": {
    fontSize: Step(5),
    fontWeight: 500,
    textTransform: "none",
    padding: `${Step(4)} ${Step(5)}`,
  },
};

export default class Button extends React.Component<any, any> {
  public render() {
    const {
      tabindex,
      href,
      className,
      theme = "default",
      size = "default",
      children,
      ...rest
    } = this.props;
    const el = href ? glamorous.span : glamorous.button;
    const Link = el(buttonStyles);

    if (href) {
      return (
        <BrowserLink href={href} className={className}>
          <Link
            tabIndex={tabindex}
            className={`Link-with-crypto theme-${theme} size-${size}`}
            href={href}
            {...rest}
          >
            <span>{children}</span>
          </Link>
        </BrowserLink>
      );
    } else {
      return (
        <Link
          tabIndex={tabindex}
          className={`Link-with-crypto theme-${theme}`}
          {...rest}
        >
          <span>{children}</span>
        </Link>
      );
    }
  }
}
