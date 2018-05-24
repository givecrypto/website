import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import { Body } from 'glamorous';
import '../utils/setupFonts';

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
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <Body fontFamily="Apercu">
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
