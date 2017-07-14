import { combineReducers } from 'redux';
import stocks from './stocks';
import notification from './notifications';

const stockApp = combineReducers({
    stocks,
    notification
});

export default stockApp;