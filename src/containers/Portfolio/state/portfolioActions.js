export const ACTION_TYPES = {
   SET_PORTFOLIOS: 'SET_PORTFOLIOS',
   SET_CURRENT_PORTFOLIO: 'SET_CURRENT_PORTFOLIO'
}

export const setPortfolios = (portfolios) => {
   console.log('action setPortfolios');
   return {
      type: ACTION_TYPES.SET_PORTFOLIOS,
      payload: {
         portfolios
      }
   }
};

export const setCurrentPortfolio = (portfolioId) => {
   return {
      type: ACTION_TYPES.SET_CURRENT_PORTFOLIO,
      payload: {
         portfolioId
      }
   }
}