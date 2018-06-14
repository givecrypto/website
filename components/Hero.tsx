import * as React from 'react';
import content from '../content/home/hero';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';
import SceneLarge from '../svgs/givecrypto-scene-05.svg';
import SceneSmall from '../svgs/givecrypto-scene-06.svg';
import Share from './Share';
import SubscriptionForm from './SubscriptionForm';
import { breakpoints } from '../design-system';

export interface HeroProps {
  page: string;
}

const Details = glamorous.div({
  width: '100%',
  maxWidth: 560,
  [breakpoints.ns]: {
    width: '50%'
  }
});
const Title = glamorous.h1({
  color: colors.black,
  fontSize: Step(5.35),
  [breakpoints.ns]: {
    fontSize: Step(6)
  }
});
const Subtitle = glamorous.h1({
  fontSize: Step(4.25),
  [breakpoints.ns]: {
    fontSize: Step(5)
  },
  color: colors.grey,
  fontWeight: 500
});
const Illustration = glamorous.div({
  width: '100%',
  maxWidth: 660,
  padding: `0 ${Step(3)}`,
  [breakpoints.ns]: {
    maxWidth: 560,
    width: '45%',
    padding: 0
  }
});

export default class Hero extends React.Component<HeroProps, any> {
  render() {
    const { page } = this.props;

    if (page == 'home') {
      // Setup data
      const { title, subtitle } = content;

      return (
        <div className="flex align-center justify-around items-center flex-column flex-row-ns">
          <Illustration className="responsive">
            <div className="responsive dn db-l">
              <SceneLarge />
            </div>
            <div className="responsive db dn-l">
              <SceneSmall />
            </div>
          </Illustration>
          <Details>
            <Title className="lh-title measure">{title}</Title>
            <Subtitle className="lh-copy measure-narrow mb4">
              {subtitle}
            </Subtitle>
            <SubscriptionForm />
            <div className="mt3">
              <Share />
            </div>
          </Details>
        </div>
      );
    }

    return (
      <div>
        <h1>Default hero title</h1>
        <h3>Default hero subtitle</h3>
      </div>
    );
  }
}
