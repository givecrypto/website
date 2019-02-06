import glamorous from "glamorous";
import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "../animations/loader--blue.json";

const AnimationContainer = glamorous.div({
  display: "inline-block",
  width: 44,
  height: 44
});

const Loader: React.SFC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <AnimationContainer className="responisive center">
      <Lottie options={defaultOptions} />
    </AnimationContainer>
  );
};

export default Loader;
