import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../animations/loader--blue.json';
import glamorous from 'glamorous';

export interface LoaderProps {
  isInline?: boolean;
  isStopped?: boolean;
  isPaused?: boolean;
}

const AnimationContainer = glamorous.div({
  display: 'inline-block',
  width: 44,
  height: 44
});

export default class Loader extends React.Component<LoaderProps, any> {
  constructor(props) {
    super(props);
    const { isStopped = false, isPaused = false } = props;
    this.state = { isStopped, isPaused };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <AnimationContainer className="responisive center">
        <Lottie options={defaultOptions} />
      </AnimationContainer>
    );
  }
}
