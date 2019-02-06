import glamorous from "glamorous";
import Router from "next/router";
import NextLink from "../components/NextLink";
import { colors } from "../design-system";

interface LinkProps {
  href: string;
  className?: string;
  activeClass?: string;
  children?: any;
}

const onClickHandler = (href: string) => {
  return e => {
    e.preventDefault();
    Router.push(href).then(() => window.scrollTo(0, 0));
  };
};

export const linkStyles = {
  cursor: "pointer",
  color: colors.greyDark,
  textDecoration: "none",

  "> svg": {
    transition: "all 200ms",
    fill: colors.grey,
  },

  "&:hover, &:active": {
    color: colors.grey,
    "> svg": {
      fill: colors.black,
    },
  },

  "&.active": {
    pointerEvents: "none",

    "&-style": {
      color: colors.black,
      borderBottom: `1px solid ${colors.black}`,
    },
  },
};

const A = glamorous.a(linkStyles);

const Link = ({
  children,
  href,
  activeClass,
  className,
  ...rest
}: LinkProps) => {
  return (
    <span onClick={onClickHandler(href)} className={className}>
      <NextLink activeClassName={activeClass} href={href}>
        <A {...rest}>{children}</A>
      </NextLink>
    </span>
  );
};

export default Link;
