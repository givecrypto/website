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

const A = glamorous.a({
  color: colors.black,
  textDecoration: 'none',
  '&:hover, &:active': {
    color: colors.grey
  },
  '&.active': {
    color: colors.grey,
    pointerEvents: 'none'
  }
});

const Link = ({ children, href, ...rest }: LinkProps) => (
  <A href={href} onClick={onClickHandler(href)} {...rest}>
    {children}
  </A>
);

export default Link;
