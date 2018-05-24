import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import 'glamor/reset';
import { Body, Section } from 'glamorous';
import Footer from '../components/Footer';
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
        <Body
          fontFamily="Apercu"
          display="flex"
          flexDirection="column"
          height="100vh"
        >
          <Section role="main" flex="1 0 auto">
            <Main />
          </Section>
          <NextScript />
          <Footer />
        </Body>
      </html>
    );
  }
}
