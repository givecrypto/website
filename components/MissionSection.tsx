import * as React from 'react';
import MissionHero from './MissionHero';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import SceneSix from '../svgs/givecrypto-scene-06.svg';
import SceneTwo from '../svgs/givecrypto-scene-02.svg';
import SceneOne from '../svgs/givecrypto-scene-01.svg';
import { Step } from '../utils/Scale';

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
      <Detail icon={<SceneSix />}>
        <h3>
          Two billion people have smartphones, but don't have access to basic
          financial services.
        </h3>
      </Detail>
      <Detail left icon={<SceneTwo />}>
        <h3>
          Bringing cryptocurrency to those smartphones enables basic financial
          services for everyone.
        </h3>
      </Detail>
      <Detail icon={<SceneOne />}>
        <h3>Our first steps to acheiving this:</h3>
        <ul className="lh-title">
          <li>Send direct cash transfers to people in need</li>
          <li>They can exchange it to their local currency</li>
          <li>We provide a way to safely store funds</li>
        </ul>
      </Detail>
    </>
  );
};

export default Mission;
