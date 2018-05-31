import * as React from 'react';
import glamorous from 'glamorous';

export interface WrapperProps {
  id?: string;
  color?: string;
  background?: string;
  narrow?: boolean;
  render: any;
}

// This will be a wrapper we can use with render props
export default class Wrapper extends React.Component<WrapperProps, any> {
  render() {
    const { background, narrow, render, ...rest } = this.props;
    const Wrapper = glamorous.section({
      width: '100%',
      background: background
    });

    const WrapperInner = glamorous.section({
      maxWidth: narrow ? 900 : 1100,
      margin: '0 auto',
      color: rest.color
    });

    return (
      <Wrapper {...rest}>
        <WrapperInner>{render}</WrapperInner>
      </Wrapper>
    );
  }
}
