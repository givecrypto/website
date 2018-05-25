import * as React from 'react';
import glamorous from 'glamorous';

const withWrapper = WrappedComponent => props => {
  const Wrapper = glamorous.section({
    width: '100%',
    background: props.background
  });

  const WrapperInner = glamorous.section({
    maxWidth: props.narrow ? 900 : 1100,
    margin: '0 auto',
    ...props
  });

  return (
    <Wrapper {...props}>
      <WrapperInner>
        <WrappedComponent {...props} />
      </WrapperInner>
    </Wrapper>
  );
};

export default withWrapper;
