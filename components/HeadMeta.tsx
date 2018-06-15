import * as React from 'react';
import Head from 'next/head';

interface HeadMetaProps {
  path: string;
  title?: string;
  image?: string;
  description?: string;
  url?: string;
}

const defaults = {
  title: 'GiveCrypto | Give cryptocurrency to people in need.',
  description:
    'Empowering, educating and elevating communities into the open financial system.',
  image: 'https://www.givecrypto.org/static/images/givecrypto-share.png'
};

export default class HeadMeta extends React.Component<HeadMetaProps, any> {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    return { ...page };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      path,
      title = defaults.title,
      description = defaults.description,
      image = defaults.image
    } = this.props;
    return (
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="twitter-card" name="twitter:card" content="summary" />
        <meta key="twitter-site" name="twitter:site" content="@givecrypto" />
        <meta key="twitter-title" name="twitter:title" content={title} />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={description}
        />
        <meta key="twitter-image" name="twitter:image" content={image} />
        <meta
          key="twitter-url"
          name="twitter:url"
          content={`https://www.givecrypto.com${path}`}
        />

        <meta key="facebook-type" property="og:type" content="article" />
        <meta key="facebook-title" property="og:title" content={title} />
        <meta
          key="facebook-description"
          property="og:description"
          content={description}
        />
        <meta key="facebook-image" property="og:image" content={image} />
        <meta
          key="facebook-url"
          property="og:url"
          content={`https://www.givecrypto.com${path}`}
        />
      </Head>
    );
  }
}
