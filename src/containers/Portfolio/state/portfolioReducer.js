import { ACTION_TYPES } from './portfolioActions';

const initialState = {
  portfolios: [],
  currentPortfolioId: -1
}

export function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_PORTFOLIOS:
      console.log('setting portfolios');
      return Object.assign({}, state, {
        portfolios: action.payload.portfolios
      });
    case ACTION_TYPES.SET_CURRENT_PORTFOLIO:
      return Object.assign({}, state, {
        currentPortfolioId: action.payload.portfolioId
      });
    default:
      return state;
  }
}