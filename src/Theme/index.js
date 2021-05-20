import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#89c74a',
    },
    secondary: {
      main: '#FF6600',
    },
    rating: {
      main: 'black',
    },
    common: {
      white: 'white',
      black: 'black',
    },
  },
  fontFamily: {
    main: "'Roboto', sans-serif",
  },
});

export default theme;
