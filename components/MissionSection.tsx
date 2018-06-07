import * as React from 'react';
import MissionHero from './MissionHero';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import SceneNine from '../svgs/givecrypto-scene-09.svg';
import SceneTwo from '../svgs/givecrypto-scene-02.svg';
import SceneOne from '../svgs/givecrypto-scene-01.svg';
import content from '../content/home/about';
import { Step } from '../utils/Scale';
import ReactMarkdown from 'react-markdown';

interface MissionProps {}

const DetailItem = glamorous.div({
  color: colors.greyLight,
  margin: `${Step(6)} 0`
});

const IconContainer = glamorous.div({
  maxWidth: 450,
  padding: Step(6)
});

const Description = glamorous.div({
  color: colors.greyLight,
  fontSize: Step(5),

  '> h3': {
    fontWeight: 500,
    fontSize: Step(5)
  },

  '& ul': {
    listStyle: 'none',
    fontWeight: 400,
    '& li': {
      fontSize: Step(4.75),
      marginBottom: '1rem',

      '&:before': {
        color: colors.blue,
        content: '+',
        marginRight: Step(3)
      }
    }
  }
});

const Detail: React.SFC<any> = ({ icon, left, children }: any) => {
  return (
    <DetailItem className="flex items-center justify-center responsive">
      <IconContainer>{left && icon}</IconContainer>
      <Description className="measure-narrow lh-copy">
        <>{children}</>
      </Description>
      <IconContainer>{!left && icon}</IconContainer>
    </DetailItem>
  );
};

const Mission: React.SFC<MissionProps> = () => {
  return (
    <>
      <MissionHero />
      <Detail icon={<SceneNine />}>
        <h3>
          <ReactMarkdown source={content.sectionOne} />
        </h3>
      </Detail>
      <Detail left icon={<SceneTwo />}>
        <h3>
          <ReactMarkdown source={content.sectionTwo} />
        </h3>
      </Detail>
      <Detail icon={<SceneOne />}>
        <ReactMarkdown className="lh-title" source={content.sectionThree} />
      </Detail>
    </>
  );
};

export default Mission;
