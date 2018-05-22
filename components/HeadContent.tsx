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
      title: 'This is the home page'
    };

    switch (page) {
      case 'home':
        info.title = 'OMG';
        break;

      default:
        info.title = 'Nevermind';
        break;
    }

    return (
      <>
        <meta name="twitter" key="title" content={info.title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </>
    );
  }
}
