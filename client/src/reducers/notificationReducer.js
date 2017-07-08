import {ERROR_STOCK, SUCCESS_STOCK} from '../actions/stock';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_STOCK:
      return Object.assign({}, action.message);
    case SUCCESS_STOCK:
      return {};
    default:
      return state;
  }
};

export default notificationReducer;
