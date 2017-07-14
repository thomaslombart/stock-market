import { ERROR_STOCK, SUCCESS_STOCK, FETCH_DATA } from '../actions/stock';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_STOCK:
      return Object.assign({}, action.message, { isFetching: false });
    case SUCCESS_STOCK:
      return { isFetching: false };
    case FETCH_DATA:
      return { isFetching: true };
    default:
      return state;
  }
};

export default notificationReducer;
