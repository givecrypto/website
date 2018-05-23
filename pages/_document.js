import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import { css } from 'glamor';
import { Body } from 'glamorous';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html || page.errorHtml);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    css.global('@font-face', {
      fontFamily: 'Apercu',
      src: `url('/static/Apercu-Regular.woff2') format('woff2'), url('/static/Apercu-Regular.woff') format('woff')`
    });

    return (
      <html>
        <Head>
          <title>
            GiveCrypto | Empowering, educating and elevating communities into
            the open financial system.
          </title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <Body fontFamily="Apercu">
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
