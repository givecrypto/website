import * as React from 'react';
import glamorous from 'glamorous';
import { colors, shadows } from '../design-system';
import { Step } from '../utils/Scale';

interface TeamSectionProps {}

const Container = glamorous.section({
  marginBottom: Step(8)
});

const Title = glamorous.h2({
  fontSize: Step(6),
  textAlign: 'center',
  paddingBottom: Step(5),
  color: colors.black
});

const ImageCard = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  display: 'block',
  background: colors.white,
  borderRadius: Step(2),
  width: '100%',
  boxShadow: shadows.default,

  '& img': {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 0
  },
  '&::before': {
    top: 0,
    zIndex: 0,
    content: `''`,
    display: 'block',
    background: 'url(/static/images/pattern@2x.png)',
    backgroundSize: '100%',
    position: 'absolute',
    left: -200,
    width: 423,
    height: 263,
    transform: 'translateY(40px)'
  },
  '&.right': {
    '&::before': {
      display: 'none'
    },
    '&::after': {
      top: 0,
      zIndex: 0,
      content: `''`,
      display: 'block',
      background: 'url(/static/images/pattern@2x.png)',
      backgroundSize: '100%',
      position: 'absolute',
      left: 'auto',
      right: -200,
      width: 423,
      height: 263,
      transform: 'translateY(40px)'
    }
  }
});

const Meta = glamorous.div({
  padding: `${Step(4)} 0`
});

const PersonName = glamorous.h3({
  padding: `2rem 0 ${Step(3)} 0`,
  margin: 0,
  color: colors.black
});

const PersonTitle = glamorous.h3({
  padding: '0 0 2rem 0',
  margin: 0,
  paddingBottom: Step(3),
  fontWeight: 300,
  color: colors.black
});

const TeamSection: React.SFC<TeamSectionProps> = props => {
  return (
    <Container>
      <Title>The Team</Title>
      <div className="flex items-top justify-between">
        <div className="w-40">
          <ImageCard>
            <img
              src="/static/images/brian-armstrong.jpg"
              srcSet="/static/images/brian-armstrong.jpg, /static/images/brian-armstrong@2x.jpg 2x"
              alt="Brian's Headshot"
            />
          </ImageCard>
          <Meta>
            <PersonName>Brian Armstrong</PersonName>
            <PersonTitle>CEO, Coinbase</PersonTitle>
          </Meta>
          <p className="lh-copy">
            Brian had the idea for GiveCrypto after seeing the enormous wealth
            creation from cryptocurrency and wanting to harness it for good. His
            personal mission is to help accelerate the world to an open
            financial system by spreading the adoption of cryptocurrency. Brian
            is the co-founder and CEO of Coinbase the largest digital currency
            exchange.
          </p>
        </div>
        <div className="w-40">
          <ImageCard className="right">
            <img
              src="/static/images/rose-broome.jpg"
              srcSet="/static/images/rose-broome.jpg, /static/images/rose-broome@2x.jpg 2x"
              alt="Brian's Headshot"
            />
          </ImageCard>
          <Meta>
            <PersonName>Rose Broome</PersonName>
            <PersonTitle>Founder, HandUp.org</PersonTitle>
          </Meta>
          <p className="lh-copy">
            After working on poverty programs and wanting to see more
            transformative solutions, Rose joined forces with Brian to help
            launch GiveCrypto. She believes we need to think as big about new
            solutions to poverty as we do about artificial intelligence and
            self-driving cars. Previously Rose was the co-founder &amp; CEO of
            HandUp.org a platform for donating to people experiencing poverty in
            the US.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;
