import * as React from 'react';
import content from '../content/home/hero';

export interface HeroProps {}

export default class Hero extends React.Component<HeroProps, any> {
  render() {
    const { title, subtitle } = content;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
}
