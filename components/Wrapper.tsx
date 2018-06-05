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

    const Wrapper = glamorous.div(
      {
        width: '100%',
        background
      },
      (attrs: any) => {
        if (attrs.pattern) {
          return {
            position: 'relative',
            zIndex: 1,

            '> *': {
              position: 'relative',
              zIndex: 1
            },

            background: background || '#ffffff',
            '&::after, &::before': {
              zIndex: 0,
              content: `''`,
              display: 'block',
              background: 'url(/static/images/pattern@2x.png)',
              backgroundSize: '100%',
              position: 'absolute',
              left: -200,
              width: 423,
              height: 263,
              transform: 'translateY(40px)'
            },
            '&::after': {
              left: 'auto',
              right: -200
            }
          };
        }
      }
    );

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
