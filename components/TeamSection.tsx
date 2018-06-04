import * as React from 'react';

interface TeamSectionProps {}

const TeamSection: React.SFC<TeamSectionProps> = props => {
  return (
    <>
      <h1>The Team</h1>
      <div>
        <div>
          <h2>Brian Armstrong</h2>
          <h3>CEO, Coinbase</h3>
          <p>
            Brian had the idea for GiveCrypto after seeing the enormous wealth
            creation from cryptocurrency and wanting to harness it for good. His
            personal mission is to help accelerate the world to an open
            financial system by spreading the adoption of cryptocurrency. Brian
            is the co-founder and CEO of Coinbase the largest digital currency
            exchange.
          </p>
        </div>
        <div>
          <h2>Rose Broome</h2>
          <h3>Founder, HandUp.org</h3>
          <p>
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
    </>
  );
};

export default TeamSection;
