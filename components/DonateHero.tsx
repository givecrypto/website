import * as React from 'react';
import Button from './Button';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';

interface DonateHeroProps {
  theme?: string;
}
const Container = glamorous.section({
  padding: `${Step(8)} 0`
});
const Title = glamorous.h2({
  fontSize: Step(6),
  maxWidth: 600
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