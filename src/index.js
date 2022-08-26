import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import './styles/index.scss';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
