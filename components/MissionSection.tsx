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
import { breakpoints } from '../design-system';

interface MissionProps {}

const DetailItem = glamorous.div({
  color: colors.greyLight,
  margin: `${Step(6)} 0`
});

const IconContainer: any = glamorous.div(
  {
    padding: Step(6),
    [breakpoints.l]: {
      maxWidth: 450,
      order: 1
    }
  },
  (props: any) => {
    return {
      order: 0,
      [breakpoints.l]: {
        order: props.left ? 0 : 2
      }
    };
  }
);

const Description = glamorous.div({
  color: colors.greyLight,
  fontSize: Step(5),
  order: 1,

  '> h3': {
    fontWeight: 500,
    fontSize: Step(5)
  },

  '& ul': {
    listStyle: 'none',
    fontWeight: 400,
    paddingLeft: 0,
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
    <DetailItem className="flex flex-wrap items-center justify-center responsive">
      <IconContainer left={left}>{icon}</IconContainer>
      <Description className="measure-narrow lh-copy">
        <>{children}</>
      </Description>
    </DetailItem>
  );
};

const Mission: React.SFC<MissionProps> = () => {
  return (
    <section id="about">
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
    </section>
  );
};

export default Mission;
