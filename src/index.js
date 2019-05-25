import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Alert optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 3000,
  offset: '30px',
  transition: 'scale',
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);
registerServiceWorker();
