import { css } from 'glamor';

// Mono
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'mono',
  fontWeight: 400,
  src: `url('/static/Apercu-Mono.woff2') format('woff2'), url('/static/Apercu-Mono.woff') format('woff')`
});

// Normal
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url('/static/Apercu-Light.woff2') format('woff2'), url('/static/Apercu-Light.woff') format('woff')`
});
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `url('/static/Apercu-Regular.woff2') format('woff2'), url('/static/Apercu-Regular.woff') format('woff')`
});
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `url('/static/Apercu-Medium.woff2') format('woff2'), url('/static/Apercu-Medium.woff') format('woff')`
});
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 900,
  src: `url('/static/Apercu-Bold.woff2') format('woff2'), url('/static/Apercu-Bold.woff') format('woff')`
});

// Italic
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'italic',
  fontWeight: 700,
  src: `url('/static/Apercu-MediumItalic.woff2') format('woff2'), url('/static/Apercu-MediumItalic.woff') format('woff')`
});
css.global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'italic',
  fontWeight: 900,
  src: `url('/static/Apercu-BoldItalic.woff2') format('woff2'), url('/static/Apercu-BoldItalic.woff') format('woff')`
});
