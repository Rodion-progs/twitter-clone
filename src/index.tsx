import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import './index.css';
import App from './App';
import {store} from './store/store';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
