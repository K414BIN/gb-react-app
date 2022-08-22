import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './theme';
import './styles/index.scss'
import { ThemeProvider } from '@material-ui/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);
