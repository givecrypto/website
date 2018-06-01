import * as React from 'react';
import glamorous from 'glamorous';

// export interface WrapperProps {
//   id?: string;
//   color?: string;
//   background?: string;
//   narrow?: boolean;
//   render: any;
// }
// export interface WrapperState {}

export default class Wrapper extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      attrs: props
    };
  }

  render() {
    const { background, narrow, children, ...rest } = this.state.attrs;
    const Wrapper = glamorous.section({
      width: '100%',
      background
    });

    const WrapperInner = glamorous.section({
      maxWidth: narrow ? 890 : 1100,
      margin: '0 auto',
      ...rest
    });

    return (
      <Wrapper {...rest}>
        <WrapperInner>{children}</WrapperInner>
      </Wrapper>
    );
  }
}
