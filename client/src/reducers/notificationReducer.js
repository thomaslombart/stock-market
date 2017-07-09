import {ERROR_STOCK, SUCCESS_STOCK, FETCH_DATA, LOAD_DETAIL_STOCK} from '../actions/stock';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_STOCK:
      return Object.assign({}, action.message, {isFetching: false});
    case SUCCESS_STOCK:
      return {...state, isFetching: false};
    case FETCH_DATA:
      return {...state, isFetching: true};
    case LOAD_DETAIL_STOCK:
      return {ohlc: action.ohlc, volume: action.volume, isFetching: false}
    default:
      return state;
  }
};

export default notificationReducer;
