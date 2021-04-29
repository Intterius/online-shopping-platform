import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#89C74A',
    },
  },
});

export default theme;
