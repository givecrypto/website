import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';
import Link from './Link';

interface VideoSectionProps {}

const CardLink = glamorous.h2({
  '> a': {
    textTransform: 'uppercase',
    fontSize: Step(3.5),
    color: colors.blue,
    fontWeight: 800,

    '&:hover': {
      color: colors.blueDark
    }
  }
});

const VideoSection: React.SFC<VideoSectionProps> = () => {
  return (
    <div className="center tc">
      <h2>A video from our founder</h2>
      <img src="/static/images/video-preview.png" />
      <h4>
        “Given the enormous wealth creation from cryptocurrency, and the future
        potential upside, I believe there is a rare opportunity to create a
        large non-profit fund.”
      </h4>
      <h5>— Brian Armstrong, Founder</h5>
      <CardLink>
        <Link href="/donors">Read the story -></Link>
      </CardLink>
    </div>
  );
};

export default VideoSection;
