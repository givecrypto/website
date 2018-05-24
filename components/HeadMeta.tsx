import * as React from 'react';

interface HeadContentProps {
  page: string;
}

export default class HeadContent extends React.Component<
  HeadContentProps,
  any
> {
  render() {
    const { page } = this.props;
    let info = {
      title:
        'GiveCrypto | Empowering, educating and elevating communities into the open financial system.'
    };

    switch (page) {
      case 'home':
        info.title = 'OMG';
        break;

      case 'donors':
        info.title = 'The Donors';
        break;

      default:
        info.title = 'Nevermind';
        break;
    }

    return (
      <>
        <title key="head-title">{info.title}</title>
        <meta name="twitter" key="title" content={info.title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </>
    );
  }
}
