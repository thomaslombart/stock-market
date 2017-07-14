import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockApp from './reducers';

const store = createStore(stockApp, applyMiddleware(logger, thunk));

export default store;
