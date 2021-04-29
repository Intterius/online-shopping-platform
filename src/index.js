import 'fontsource-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "@material-ui/core";
import theme from "./Theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root'));
