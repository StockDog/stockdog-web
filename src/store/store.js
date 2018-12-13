import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [
   thunk
];

middleware.push(reduxLogger);

const store = createStore(
   combineReducers({}),
   compose(
      applyMiddleware(...middleware),
      typeof window === 'object' &&
         typeof window.devToolsExtension !== 'undefined'
         ? window.devToolsExtension() : f => f
   )
);

export default store
