import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Alert optional cofiguration
// const options = {
//   position: 'bottom center',
//   timeout: 3000,
//   offset: '30px',
//   transition: 'scale',
// };

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);
registerServiceWorker();
