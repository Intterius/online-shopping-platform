import 'fontsource-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { tokenReducer } from './redux/reducers/tokenReducer';

const store = createStore(tokenReducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
