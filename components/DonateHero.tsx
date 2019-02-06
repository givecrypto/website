import glamorous from 'glamorous';
import * as React from 'react';
import { breakpoints } from '../design-system';
import { Step } from '../utils/Scale';
import Button from './Button';

interface DonateHeroProps {
  theme?: string;
}
const Container = glamorous.section({
  padding: `${Step(8)} 0`
});
const Title = glamorous.h2({
  maxWidth: 600,
  fontSize: Step(5.5),
  [breakpoints.ns]: {
    fontSize: Step(6)
  }
});

const DonateHero: React.SFC<DonateHeroProps> = (props: DonateHeroProps) => {
  const { theme = 'default' } = props;
  const donateTheme = theme === 'light' ? 'ghost' : 'default';

  return (
    <Container className="tc center">
      <Title className="lh-copy center">
        Ready to put your crypto to work for good?
      </Title>
      <Button href={'/donate'} theme={donateTheme}>
        Donate Crypto
      </Button>
    </Container>
  );
};

export default DonateHero;
