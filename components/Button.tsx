import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';
import chroma from 'chroma-js';

export interface ButtonProps {
  href: string;
  theme?: string;
  target?: string;
}

const buttonStyles: CSSProperties = {
  transition: 'all 200ms',
  cursor: 'pointer',
  color: 'white',
  border: `1px solid ${colors.green}`,
  borderRadius: Step(2),
  background: colors.green,
  textDecoration: 'none',
  padding: Step(4),
  boxShadow: '0 8px 16px rgba(0,0,0,0.075)',
  fontFamily: 'Apercu',
  fontWeight: 200,
  fontSize: Step(3.75),
  textTransform: 'uppercase',
  letterSpacing: `0.1rem`,
  '&:hover': {
    background: chroma(colors.green)
      .brighten(0.25)
      .css()
  },
  '&:active': {
    padding: `${Step(4)} !important`,
    height: 'auto',
    background: chroma(colors.green)
      .brighten(0.125)
      .css(),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  '&.theme-ghost': {
    color: colors.green,
    background: 'transparent',
    boxShadow: '0 8px 16px rgba(0,0,0,0.075)',
    transition: 'all 200ms',
    '&:hover': {
      color: 'white',
      background: chroma(colors.green)
        .brighten(0.25)
        .css()
    }
  }
};

const Link = glamorous.a(buttonStyles);

export default class Button extends React.Component<ButtonProps, any> {
  render() {
    const { href, theme = 'default', children, ...rest } = this.props;

    return (
      <Link className={`Link-with-crypto theme-${theme}`} href={href} {...rest}>
        {children}
      </Link>
    );
  }
}
