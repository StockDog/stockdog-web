import { get, post, del } from './apiUtils';
import store from '../store';
import axios from 'axios';

const baseUrl = 'http://198.199.100.209:5005/api';
const getHeaders = () => {
   return {
      'headers': {
         'Content-Type': 'application/json',
         'Authorization': store.getState().auth.token
      }
   }
};
const urls = {
   charts: baseURL + '/charts'
};

const getStockHistory = async (ticker, length) => {
   return await axios(charts + '/${ticker}?length=${length}');
}

export { getStockHistory };
