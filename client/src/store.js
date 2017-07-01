import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockReducer from './reducers/stockReducer';

const store = createStore(stockReducer, applyMiddleware(logger, thunk));

export default store;
