import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Theme from '../src/components/Theme';
import 'fontsource-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
