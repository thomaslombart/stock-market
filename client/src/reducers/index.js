import { combineReducers } from 'redux';
import stocks from './stockReducer';
import notification from './notificationReducer';

const stockApp = combineReducers({
    stocks,
    notification
});

export default stockApp;