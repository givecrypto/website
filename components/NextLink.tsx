import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }: any) => {
  const child = Children.only(children);

  let className = child.props.className || null;
  if (router) {
    if (router.pathname === props.href) {
      if (props.activeClassName) {
        className = `${className !== null ? className : ''} ${
          props.activeClassName
        }`.trim();
      } else {
        className = `${className !== null ? className : ''} active`.trim();
      }
    }
  }
  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
