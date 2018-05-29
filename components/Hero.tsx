import * as React from 'react';
import content from '../content/home/hero';

export interface HeroProps {
  page: string;
}

export default class Hero extends React.Component<HeroProps, any> {
  render() {
    const { page } = this.props;

    if (page == 'home') {
      // Setup data
      const { title, subtitle } = content;

      return (
        <div>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
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
