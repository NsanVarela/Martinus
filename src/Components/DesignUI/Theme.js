import { createMuiTheme } from '@material-ui/core/styles';
import GothamRoundedW2 from '../../assets/fonts/GothamRounded-Light.woff2';
import GothamRoundedW from '../../assets/fonts/GothamRounded-Light.woff';
import GothamRoundedBookW2 from '../../assets/fonts/GothamRounded-Book.woff2';
import GothamRoundedBookW from '../../assets/fonts/GothamRounded-Book.woff';
import GothamW2 from '../../assets/fonts/Gotham-Light.woff2';
import GothamW from '../../assets/fonts/Gotham-Light.woff';
import GothamBookW2 from '../../assets/fonts/Gotham-Book.woff2';
import GothamBookW from '../../assets/fonts/Gotham-Book.woff';
import GothamMediumW2 from '../../assets/fonts/Gotham-Medium.woff2';
import GothamMediumW from '../../assets/fonts/Gotham-Medium.woff';
import GothamRoundedMediumW2 from '../../assets/fonts/GothamRounded-Medium.woff2';
import GothamRoundedMediumW from '../../assets/fonts/GothamRounded-Medium.woff';

const primaryColor = '#001E5F';
const secondaryColor = '#ecedf0';
const errorColor = '#9B2841';

const gothamRounded = {
  fontFamily: 'GothamRounded',
  fontStyle: 'normal',
  fontWeight: 300,
  fontStretch: 'normal',
  fontDisplay: 'auto',
  src: `
    url(${GothamRoundedW2}) format('woff2'),
    url(${GothamRoundedW}) format('woff')
  `,
};

const gothamRoundedBook = {
  fontFamily: 'GothamRoundedBook',
  src: `
  url(${GothamRoundedBookW2}) format('woff2'),
  url(${GothamRoundedBookW}) format('woff')
`,
  fontWeight: 400,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontStretch: 'normal',
};

const gotham = {
  fontFamily: 'GothamLight',
  src: `
  url(${GothamW2}) format('woff2'),
  url(${GothamW}) format('woff')
`,
  fontWeight: 300,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontStretch: 'normal',
};

const gothamBook = {
  fontFamily: 'GothamBook',
  src: `
  url(${GothamBookW2}) format('woff2'),
  url(${GothamBookW}) format('woff')
`,
  fontWeight: 400,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontStretch: 'normal',
};

const gothamMedium = {
  fontFamily: 'GothamMedium',
  src: `
  url(${GothamMediumW2}) format('woff2'),
  url(${GothamMediumW}) format('woff')
`,
  fontWeight: 500,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontStretch: 'normal',
};

const gothamRoundedMedium = {
  fontFamily: 'GothamRoundedMedium',
  src: `
  url(${GothamRoundedMediumW2}) format('woff2'),
  url(${GothamRoundedMediumW}) format('woff')
`,
  fontWeight: 500,
  fontDisplay: 'auto',
  fontStyle: 'normal',
  fontStretch: 'normal',
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'GothamBook',
    fontStyle: 'normal',
    color: primaryColor,
    //h1
    h1: {
      fontFamily: 'GothamRounded',
      fontSize: 34,
      lineHeight: '41px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //h2
    h2: {
      fontFamily: 'GothamRounded',
      fontSize: 22,
      lineHeight: '26px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //h3
    h3: {
      fontFamily: 'GothamRoundedBook',
      fontSize: 16,
      lineHeight: '19px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //h4
    h4: {
      fontFamily: 'GothamRoundedBook',
      fontSize: 13,
      lineHeight: '16px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //h5
    h5: {
      fontFamily: 'GothamBook',
      fontSize: 11,
      lineHeight: '13px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //h6
    h6: {
      fontFamily: 'GothamMedium',

      fontSize: 10,
      lineHeight: '14px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    //Text-Book_20px
    subtitle1: {
      fontFamily: 'GothamRoundedBook',
      fontSize: 20,
      lineHeight: '23px',
    },
    //Text-Book_18px
    subtitle2: {
      fontFamily: 'GothamBook',
      fontSize: 18,
      lineHeight: '27px',
    },
    //Text-Book_15px
    body1: {
      fontFamily: 'GothamBook',
      fontSize: 15,
      lineHeight: '22px',
    },
    //Text-Book_14px
    body2: {
      fontFamily: 'GothamBook',
      fontSize: 14,
      lineHeight: '22px',
    },
    //Text-Book_13px
    body3: {
      fontFamily: 'GothamBook',
      fontSize: 13,
      lineHeight: '20px',
    },
    htmlFontSize: 18,
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gothamRounded, gothamRoundedBook, gotham, gothamBook, gothamMedium, gothamRoundedMedium],
        '::-webkit-scrollbar': {
          width: 0,
          height: 0,
        },
        html: {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          overflow: '-moz-scrollbars-none',
        },
      },
    },
  },
});