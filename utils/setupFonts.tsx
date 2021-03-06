import { injectGlobal } from "emotion";

// Mono
injectGlobal`
  * {
    font-family: "Apercu";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: "Apercu";
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Apercu-Light.woff2') format('woff2'),
    url('/static/fonts/Apercu-Light.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: normal;
    font-weight: 200;
    src: url('/static/fonts/Apercu-Mono.woff2') format('woff2'),
      url('/static/fonts/Apercu-Mono.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/Apercu-Regular.woff2') format('woff2'),
      url('/static/fonts/Apercu-Regular.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Apercu-Medium.woff2') format('woff2'),
      url('/static/fonts/Apercu-Medium.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: normal;
    font-weight: 900;
    src: url('/static/fonts/Apercu-Bold.woff2') format('woff2'), url('/static/fonts/Apercu-Bold.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: italic;
    font-weight: 500;
    src: url('/static/fonts/Apercu-Italic.woff2') format('woff2'),
      url('/static/fonts/Apercu-Italic.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: italic;
    font-weight: 700;
    src: url('/static/fonts/Apercu-MediumItalic.woff2') format('woff2'),
      url('/static/fonts/Apercu-MediumItalic.woff') format('woff');
  }
  @font-face {
    font-family: "Apercu";
    font-style: italic;
    font-weight: 900;
    src: url('/static/fonts/Apercu-BoldItalic.woff2') format('woff2'),
      url('/static/fonts/Apercu-BoldItalic.woff') format('woff');
  }
`;
