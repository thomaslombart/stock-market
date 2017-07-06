import {ADD_STOCK, REMOVE_STOCK, LOAD_STOCKS} from '../actions/stock';

const stockReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STOCK:
      return [
        ...state, {
          code: action.code,
          data: action.data,
          description: action.description,
          id: action.id
        }
      ]
    case LOAD_STOCKS:
      return state.concat(action.stocks);
    case REMOVE_STOCK:
      return state.filter(stock => stock.id !== action.id);
    default:
      return state;
  }
};

export default stockReducer;
