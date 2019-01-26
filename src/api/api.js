import store from '../store/store';
import axios from 'axios';

// const baseURL = 'http://198.199.100.209:5005/api';
const baseURL = 'http://localhost:5005/api/v1.0';
const getConfig = () => {
   return {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'token 10cbb8be976d8db1efcca8c60fd7e3594f74772fd877d36afc825ed6df3b7829'
         // Need to implement login register
         // 'Authorization': store.getState().auth.token
      },
      data: {}
   }
};

const urls = {
   charts: baseURL + '/charts',
   transactions: baseURL + '/transactions'
};

export const getStockHistory = async (ticker, length) => {
   return await axios.get(urls.charts + `/${ticker}?length=${length}`, getConfig());
};

export const transaction = async (ticker, shareCount, action, portfolioId) => {
   console.log(shareCount);
   return await axios.post(urls.transactions, {
      ticker,
      shareCount,
      action,
      portfolioId
   }, getConfig());
};