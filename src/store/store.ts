import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root.reducer';

const middleware = [];

if (__DEV__) {
  middleware.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middleware, thunk));
