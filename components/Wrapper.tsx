import glamorous from "glamorous";
import * as React from "react";
import { breakpoints } from "../design-system";
import { Step } from "../utils/Scale";

export interface WrapperProps extends React.HTMLProps<any> {
  color?: string;
  background?: string;
  flush?: boolean;
  narrow?: boolean;
  wide?: boolean;
}
// export interface WrapperState {}

const Wrapper: React.SFC<any> = props => {
  const { color, background, narrow, wide, children, ...rest } = props;

  const Container = glamorous.div(
    {
      width: "100%",
      background,
    },
    (styleProps: any) => {
      if (!styleProps.flush) {
        return {
          padding: `0 ${Step(4)}`,
          [breakpoints.l]: {
            padding: 0,
          },
        };
      }

      if (styleProps.pattern) {
        return {
          position: "relative",
          zIndex: 1,

          "> *": {
            position: "relative",
            zIndex: 1,
          },

          background: background || "#ffffff",
          "&::after, &::before": {
            zIndex: 0,
            content: `''`,
            display: "block",
            background: "url(/static/images/pattern@2x.png)",
            backgroundSize: "100%",
            position: "absolute",
            left: -200,
            width: 423,
            height: 263,
            transform: "translateY(40px)",
          },
          "&::after": {
            left: "auto",
            right: -200,
          },
        };
      }
    }
  );

  const narrowWidth = narrow ? 890 : 1100;
  const defaultWidth = wide ? 1240 : narrowWidth;
  const WrapperInner = glamorous.section({
    maxWidth: narrow ? narrowWidth : defaultWidth,
    margin: "0 auto",
    ...rest,
  });

  return (
    <Container {...rest}>
      <WrapperInner>{children}</WrapperInner>
    </Container>
  );
};

export default Wrapper;
