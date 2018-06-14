import * as React from 'react';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../design-system';
import { Step } from '../utils/Scale';
import ReactMarkdown from 'react-markdown';
import content from '../content/home/about';
/* Uncomment this when ready for deploying */
// import Map from './Map';

/* comment the background attrs when ready for deploying */
const Container = glamorous.section({
  background: 'url(/static/images/map@2x.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  marginTop: Step(7.5),
  height: 'auto',
  [breakpoints.ns]: {
    height: 475
  }
});

const Title = glamorous.h2({
  textAlign: 'center',
  padding: `0 ${Step(2)}`,
  color: colors.black,
  fontSize: Step(5),
  [breakpoints.ns]: {
    padding: `0 ${Step(6)}`,
    fontSize: Step(5.65)
  }
});

interface DonorsCTAProps {}

const DonorsCTA: React.SFC<DonorsCTAProps> = () => {
  return (
    <>
      <Container className="flex items-center justify-center relative mb6-ns">
        {/* Uncomment this when ready for deploying */}
        {/* <div className="z-1 absolute responsive w-100 h-100">
          <Map />
        </div> */}
        <div className="z-5">
          <Title className="lh-copy measure">
            <ReactMarkdown source={content.title} />
          </Title>
        </div>
      </Container>
    </>
  );
};

export default DonorsCTA;
