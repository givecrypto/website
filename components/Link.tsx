import Router from 'next/router';
import glamorous from 'glamorous';
import { colors } from '../design-system';

interface LinkProps {
  href: string;
  children?: any;
}

const onClickHandler = (href: string) => {
  return e => {
    e.preventDefault();
    Router.push(href);
  };
};

export const linkStyles = {
  cursor: 'pointer',
  color: colors.black,
  textDecoration: 'none',
  '> svg': {
    transition: 'all 200ms',
    fill: colors.grey
  },
  '&:hover, &:active': {
    color: colors.grey,
    '> svg': {
      fill: colors.black
    }
  },
  '&.active': {
    color: colors.grey,
    pointerEvents: 'none'
  }
};

const A = glamorous.a(linkStyles);

const Link = ({ children, href, ...rest }: LinkProps) => (
  <A href={href} onClick={onClickHandler(href)} {...rest}>
    {children}
  </A>
);

export default Link;
