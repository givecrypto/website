import * as React from "react";
import { clamp } from "lodash";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import { colors } from "../../design-system";

const Pull = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture(({ down, delta, velocity, direction }) => {
    velocity = clamp(velocity, 1, 8);
    const lockedPosition = [0, direction[1] ? 300 : 0];

    set({
      xy: down ? delta : lockedPosition,
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        background: colors.green,
        width: 24,
        height: 24,
        transform: xy.interpolate(
          (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
        ),
      }}
    />
  );
};

export default Pull;
