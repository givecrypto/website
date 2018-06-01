import * as React from 'react';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import { colors, shadows } from '../design-system';
import content from '../content/home/how-it-works';
import Help from '../svgs/givecrypto-help.svg';
import Distribute from '../svgs/givecrypto-distribute.svg';
import Donate from '../svgs/givecrypto-donate.svg';

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

const Cards: any = () => {
  const { cards } = content;
  return cards.map(({ title, subtitle, icon }, index) => {
    let Icon = Help;
    switch (icon) {
      case 'Help':
        Icon = Help;
        break;
      case 'Donate':
        Icon = Donate;
        break;
      case 'Distribute':
        Icon = Distribute;
        break;

      default:
        break;
    }

    return (
      <Card className="tc" key={title}>
        <CardNumber>Step {index + 1}</CardNumber>
        <IconContainer className="responsive">
          <Icon />
        </IconContainer>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle className="lh-copy">{subtitle}</CardSubTitle>
      </Card>
    );
  });
};

export default () => {
  const { title, subtitle } = content;
  return (
    <>
      <Title id="how-it-works" className="lh-title">
        {title}
      </Title>
      <SubTitle className="measure lh-copy">{subtitle}</SubTitle>
      <CardWrapper className="flex flex-wrap justify-between">
        <Cards />
      </CardWrapper>
    </>
  );
};
