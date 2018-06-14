import * as React from 'react';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../design-system';
import { Step } from '../utils/Scale';
import PersonCard from './PersonCard';
// import content from '../content/home/team';

interface TeamSectionProps {}

const Container = glamorous.section({
  marginBottom: Step(5),
  [breakpoints.ns]: {
    marginBottom: Step(8)
  }
});

const Title = glamorous.h2({
  fontSize: Step(6),
  textAlign: 'center',
  paddingBottom: Step(5),
  color: colors.black
});

const TeamSection: React.SFC<TeamSectionProps> = () => {
  return (
    <Container>
      <Title>The Team</Title>
      <div className="flex flex-wrap items-top justify-between">
        <div className="w-100 w-40-ns">
          <PersonCard
            name="Brian Armstrong"
            role="CEO, Coinbase"
            filename="brian-armstrong"
            pattern="left"
            bio="Brian had the idea for GiveCrypto after seeing the enormous wealth creation from cryptocurrency and wanting to harness it for good. His personal mission is to help accelerate the world to an open financial system by spreading the adoption of cryptocurrency. Brian is the co-founder and CEO of Coinbase the largest digital currency exchange."
          />
        </div>
        <div className="mt5 mt0-ns w-100 w-40-ns">
          <PersonCard
            name="Rose Broome"
            role="Founder, HandUp.org"
            filename="rose-broome"
            pattern="right"
            bio="After working on poverty programs and wanting to see more transformative solutions, Rose joined forces with Brian to help launch GiveCrypto. She believes we need to think as big about new solutions to poverty as we do about artificial intelligence and self-driving cars. Previously Rose was the co-founder &amp; CEO of HandUp.org a platform for donating to people experiencing poverty in the US."
          />
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;
