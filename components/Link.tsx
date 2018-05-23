import Router from 'next/router';

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

const Link = ({ children, href, ...rest }: LinkProps) => (
  <a href={href} onClick={onClickHandler(href)} {...rest}>
    {children}
  </a>
);

export default Link;
