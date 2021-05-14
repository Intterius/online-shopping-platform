import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './Theme';
import 'fontsource-roboto';
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";



const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
