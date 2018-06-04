import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import { Step } from '../utils/Scale';

const Container = glamorous.section({
  background: `url('/static/images/map@2x.png')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: 575,
  marginTop: Step(7.5)
});

const Title = glamorous.h2({
  textAlign: 'center',
  fontSize: Step(5.65),
  padding: `0 ${Step(6)}`,
  color: colors.black
});

interface DonorsCTAProps {}

const DonorsCTA: React.SFC<DonorsCTAProps> = () => {
  return (
    <Container id="about" className="flex items-center justify-center">
      <Title className="lh-copy measure">
        Our mission is to financially empower people by distributing
        cryptocurrency globally.
      </Title>
    </Container>
  );
};

export default DonorsCTA;
