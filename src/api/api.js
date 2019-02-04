import axios from 'axios';

// const baseURL = 'http://198.199.100.209:5005/api';
const baseURL = 'http://localhost:5005/api/v1.0';
const getRequestConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token 10cbb8be976d8db1efcca8c60fd7e3594f74772fd877d36afc825ed6df3b7829',
    // Need to implement login register
    // 'Authorization': store.getState().auth.token
  },
  data: {},
});

const urls = {
  charts: `${baseURL}/charts`,
  transactions: `${baseURL}/transactions`,
};

/**
 * params:
 * ticker
 * length
 */
export const getStockHistory = async params => await axios.get(`${urls.charts}/${params.ticker}?length=${params.length}`, getRequestConfig());

/**
 * params:
 * ticker
 * shareCount
 * action
 * portfolioId
 */
export const createTransaction = async params => await axios.post(urls.transactions, params, getRequestConfig());

export const registerUser = async (userInfo) => {
  await axios.post('http://localhost:5005/api/v1.0/users', userInfo);
};
