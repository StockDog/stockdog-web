import store from '../store/store';
import axios from 'axios';

const baseURL = 'http://198.199.100.209:5005/api';
const getHeaders = () => {
   return {
      'headers': {
         'Content-Type': 'application/json',
         // Need to implement login register
         // 'Authorization': store.getState().auth.token
      }
   }
};
const urls = {
   charts: baseURL + '/charts'
};

const getStockHistory = async (ticker, length) => {
   return await axios(urls.charts + '/${ticker}?length=${length}');
}

export { getStockHistory };
