import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { globalReducer } from '../global/state/globalReducer';
import { portfolioReducer } from '../containers/Portfolio/state/portfolioReducer';

const middleware = [thunk];

middleware.push(reduxLogger);

const store = createStore(
  combineReducers({global: globalReducer, portfolio: portfolioReducer}),
  compose(
    applyMiddleware(...middleware),
    /*eslint-disable */
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
    /* eslint-enable */
  ),
);

export default store;
