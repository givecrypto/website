import * as React from 'react';
import content from '../content/home/hero';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';
import SceneB from '../svgs/givecrypto-scene-05.svg';
import Share from './Share';
import SubscriptionForm from './SubscriptionForm';

export interface HeroProps {
  page: string;
}

const Details = glamorous.div({
  width: '50%',
  maxWidth: 560
});
const Title = glamorous.h1({
  fontSize: Step(6),
  color: colors.black
});
const Subtitle = glamorous.h1({
  fontSize: Step(5),
  color: colors.grey,
  fontWeight: 500
});
const Illustration = glamorous.div({
  width: '45%',
  maxWidth: 560
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
            <SceneB />
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
