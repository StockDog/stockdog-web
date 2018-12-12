import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';
import { Provider as AlertProvider } from 'react-alert'

// Alert optional cofiguration
const options = {
   position: 'bottom center',
   timeout: 3000,
   offset: '30px',
   transition: 'scale'
}

ReactDOM.render(
   <CookiesProvider>
      <App />
   </CookiesProvider>,
   document.getElementById('root'));
registerServiceWorker();
