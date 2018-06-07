import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';
import Link from './Link';
import VideoPlayer from './VideoPlayer';
import Wrapper from './Wrapper';
import ReactMarkdown from 'react-markdown';
import content from '../content/home/video-section';

interface VideoSectionProps {}

const LinkContainer = glamorous.h2({
  '& a': {
    textTransform: 'uppercase',
    fontSize: Step(3.5),
    color: colors.blue,
    fontWeight: 800,

    '&:hover': {
      color: colors.blueDark
    }
  }
});

const Title = glamorous.h2({
  fontSize: Step(6),
  textAlign: 'center',
  paddingBottom: Step(5),
  color: colors.black
});

const Subtitle = glamorous.h3({
  padding: `${Step(4)} 0`,
  fontSize: Step(5),
  fontStyle: 'italic',
  fontWeight: 400,
  color: colors.greyLight
});

const Meta = glamorous.h4({
  fontSize: Step(5),
  fontWeight: 900,
  color: colors.black
});

const VideoSection: React.SFC<VideoSectionProps> = () => {
  return (
    <div className="center tc">
      <Title>
        <ReactMarkdown source={content.title} />
      </Title>
      <Wrapper narrow className="mb6">
        <VideoPlayer videoId={content.youtubeId} />
      </Wrapper>
      <Subtitle className="lh-copy measure center">
        <ReactMarkdown source={content.subtitle} />
      </Subtitle>
      <Meta className="lh-title">{content.meta}</Meta>
      <LinkContainer>
        <Link href={content.link}>Read the story -></Link>
      </LinkContainer>
    </div>
  );
};

export default VideoSection;
