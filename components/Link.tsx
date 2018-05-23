import Router from 'next/router';

const onClickHandler = href => {
  return e => {
    e.preventDefault();
    Router.push(href);
  };
};

const Link = ({ children, href }) => (
  <a href="#" onClick={onClickHandler(href)}>
    {children}
  </a>
);

export default Link;
