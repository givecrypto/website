import "glamor/reset";
import { renderStatic } from "glamor/server";
import { Body, Section } from "glamorous";
import Document, { Head, Main, NextScript } from "next/document";
import ErrorBoundary from "../components/ErrorBoundary";

// Force style update on the server
import "../utils/setupFonts";
import "../styles/index.css";

const data = {
  "@context": "http://schema.org",
  "@type": "Organization",
  url: "https://www.givecrypto.org",
  logo: "https://www.givecrypto.org/static/images/givecrypto-share.png",
};

const GoogleMeta: React.SFC<any> = props => {
  return (
    <>
      <meta
        name="google-site-verification"
        content="wQT3gDXQgjJoQ2e8t1QpVrEM7nzhKs4FLv3a-16XgV4"
      />
      <script type="application/ld+json">{JSON.stringify(props.data)}</script>
    </>
  );
};

export default class GiveCryptoDocument extends Document {
  public static async getInitialProps({ renderPage }) {
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

  public render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="icon" href="/static/favicon.ico" />
          <GoogleMeta data={data} />
        </Head>
        <ErrorBoundary>
          <Body
            fontFamily="Apercu, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif"
            display="flex"
            flexDirection="column"
            height="100vh"
          >
            <Section role="main" flex="1 0 auto" className="overflow-hidden">
              <Main />
            </Section>
            <NextScript />
          </Body>
        </ErrorBoundary>
      </html>
    );
  }
}
