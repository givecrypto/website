import * as React from 'react';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors, shadows } from '../design-system';
import DistributeIcon from '../svgs/givecrypto-distribute.svg';
import DonateIcon from '../svgs/givecrypto-donate.svg';
import HelpIcon from '../svgs/givecrypto-help.svg';

const Title = glamorous.h1({
  fontSize: Step(6),
  color: colors.black
});
const SubTitle = glamorous.h1({
  fontSize: Step(5),
  marginBottom: Step(7),
  color: colors.greyLight,
  fontWeight: 500
});
const CardWrapper = glamorous.div({
  position: 'relative',

  '&::after, &::before': {
    zIndex: -1,
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
  '&::after': {
    zIndex: -1,
    left: 'auto',
    right: -200
  }
});
const Card = glamorous.div({
  boxSizing: 'border-box',
  background: colors.white,
  borderRadius: Step(2),
  padding: Step(5),
  maxWidth: 260,
  boxShadow: shadows.card
});
const IconContainer = glamorous.div({
  display: 'block',
  margin: '0 auto',
  width: 80,
  height: 80,
  padding: Step(4.5),
  borderRadius: '100%',
  background: colors.white,
  boxShadow: shadows.card
});
const CardNumber = glamorous.h4({
  fontSize: Step(4),
  color: colors.blue
});
const CardTitle = glamorous.h2({
  fontSize: Step(5),
  color: colors.greyDark
});
const CardSubTitle = glamorous.p({
  fontSize: Step(4),
  color: colors.greyLight,
  fontWeight: 400
});

export default () => {
  return (
    <>
      <Title id="how-it-works" className="lh-title">
        How It Works
      </Title>
      <SubTitle className="measure lh-copy">
        We distribute your cryptocurrency to impact communities and help drive
        the real-world utility of crypto.
      </SubTitle>
      <CardWrapper className="flex flex-wrap justify-between">
        <Card className="tc">
          <CardNumber>Step 1</CardNumber>
          <IconContainer className="responsive">
            <DistributeIcon />
          </IconContainer>
          <CardTitle>Donate Crypto</CardTitle>
          <CardSubTitle className="lh-copy">
            Put your crypto to work to benefit the world.
          </CardSubTitle>
        </Card>
        <Card className="tc">
          <CardNumber>Step 2</CardNumber>
          <IconContainer className="responsive">
            <DonateIcon />
          </IconContainer>
          <CardTitle>We Distribute It</CardTitle>
          <CardSubTitle className="lh-copy">
            We make direct cash transfers to those in need.
          </CardSubTitle>
        </Card>
        <Card className="tc">
          <CardNumber>Step 3</CardNumber>
          <IconContainer className="responsive">
            <HelpIcon />
          </IconContainer>
          <CardTitle>Help People</CardTitle>
          <CardSubTitle className="lh-copy">
            People use the funds in their local economy.
          </CardSubTitle>
        </Card>
      </CardWrapper>
    </>
  );
};
