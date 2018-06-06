import * as React from 'react';
import glamorous from 'glamorous';
import Link from './Link';
import { colors, shadows } from '../design-system';
import { Step } from '../utils/Scale';

const Container = glamorous.section({
  background: `url('/static/images/donor-hero.jpg')`,
  backgroundSize: 'cover',
  width: '100%',
  height: 575,
  marginTop: Step(7.5),
  boxShadow: shadows.default
});

const InfoCard = glamorous.div({
  margin: `0 0 0 ${Step(7)}`,
  textAlign: 'center',
  display: 'inline-block',
  boxSizing: 'border-box',
  background: colors.white,
  borderRadius: Step(2),
  padding: Step(5),
  maxWidth: 260,
  boxShadow: shadows.card
});

const CardTitle = glamorous.h4({
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: Step(3.5),
  color: colors.blue
});
const CardMetric = glamorous.h2({
  margin: 0,
  padding: 0,
  textTransform: 'uppercase',
  fontSize: Step(6.5),
  color: colors.greyDark
});
const CardDetails = glamorous.h2({
  fontSize: Step(5),
  color: colors.greyDark
});
const CardLink = glamorous.h2({
  '& a': {
    textTransform: 'uppercase',
    fontSize: Step(3.5),
    fontWeight: 800,
    color: colors.blue,

    '&:hover': {
      color: colors.blueDark
    }
  }
});

interface DonorsHeroProps {}

const DonorsHero: React.SFC<DonorsHeroProps> = () => {
  return (
    <Container className="flex items-center">
      <InfoCard>
        <CardTitle>Our first milestone</CardTitle>
        <CardMetric>$1M</CardMetric>
        <CardDetails>Raised to date</CardDetails>
        <CardLink>
          <Link href="/donors">MEET OUR DONORS -></Link>
        </CardLink>
      </InfoCard>
    </Container>
  );
};

export default DonorsHero;
