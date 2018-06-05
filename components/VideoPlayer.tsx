import * as React from 'react';
import YouTube from 'react-youtube';
import glamorous from 'glamorous';
import { shadows } from '../design-system';

export interface VideoPlayerProps {}
const VideoContainer = glamorous.div({
  height: 0,
  display: 'block',
  overflow: 'hidden',
  paddingBottom: '56.25%',
  position: 'relative',
  width: '100%',
  boxShadow: shadows.card,

  '& iframe': {
    display: 'block',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
});

export default class VideoPlayer extends React.Component<
  VideoPlayerProps,
  any
> {
  render() {
    const opts = {
      height: '390',
      width: '640',
      // https://developers.google.com/youtube/player_parameters
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <VideoContainer>
        <YouTube videoId="0_bx8bnCoiU" opts={opts} />
      </VideoContainer>
    );
  }
}
