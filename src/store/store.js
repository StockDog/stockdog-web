import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

middleware.push(reduxLogger);

const store = createStore(
  combineReducers({}),
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
