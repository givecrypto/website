import * as React from 'react';
import content from '../content/home/hero';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors } from '../design-system';

export interface HeroProps {
  page: string;
}

const Title = glamorous.h1({
  fontSize: Step(6)
});
const SubTitle = glamorous.h1({
  fontSize: Step(5),
  color: colors.greyLight,
  fontWeight: 500
});

export default class Hero extends React.Component<HeroProps, any> {
  render() {
    const { page } = this.props;

    if (page == 'home') {
      // Setup data
      const { title, subtitle } = content;

      return (
        <div className="flex">
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
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
