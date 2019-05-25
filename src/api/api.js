import axios from 'axios';

// const baseURL = 'http://198.199.100.209:5005/api';
const baseURL = 'http://localhost:5005/api/v1.0';
const getRequestConfig = () => {
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
   users: `${baseURL}/users`,
   charts: `${baseURL}/charts`,
   transactions: `${baseURL}/transactions`,
   portfolios: `${baseURL}/portfolios`,
   leagues: `${baseURL}/leagues`
};

/**
 * params:
 * firstName
 * lastName
 * email
 * password
 */
export const registerUser = async (params) => {		
   await axios.post(urls.users, params, getRequestConfig());
}

/**
 * params:
 * email
 * password
 */
export const loginUser = async (params) => {
   return await axios.post(`${urls.users}/session`, params, getRequestConfig());
}

/**
 * params:
 * ticker
 * length
 */
export const getStockHistory = async (params) => {
   return await axios.get(`${urls.charts}/${params.ticker}?length=${params.length}`, getRequestConfig());
};

/**
 * params:
 * ticker
 * shareCount
 * action
 * portfolioId
 */
export const createTransaction = async (params) => {
   return await axios.post(urls.transactions, params, getRequestConfig());
};

/**
 * params:
 * inviteCode
 * name
 */
export const joinLeague = async (params) => {
   return await axios.post(urls.portfolios, params, getRequestConfig());
}

/**
 * params:
 * name
 * startPos
 * start
 * end
 */
export const createLeague = async (params) => {
   return await axios.post(urls.leagues, params, getRequestConfig());
}

export const getPortfoliosForUser = async () => {
   return await axios.get(urls.portfolios, getRequestConfig());
}

/**
 * portfolioId
 */
export const getPortfolio = async (params) => {
   return await axios.get(`${urls.portfolios}/${params.portfolioId}`, getRequestConfig());
}