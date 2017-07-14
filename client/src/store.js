import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocks from './reducers/stockReducer';
import notification from './reducers/notificationReducer';

const rootReducer = combineReducers({
  stocks,
  notification
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
