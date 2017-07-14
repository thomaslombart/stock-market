import { ACTION_FAILURE, ACTION_SUCCESS, LOADING } from '../actions/stock';

const notifications = (state = {}, action) => {
  switch (action.type) {
    case ACTION_FAILURE:
      return Object.assign({}, action.message, { isFetching: false });
    case ACTION_SUCCESS:
      return { isFetching: false };
    case LOADING:
      return { isFetching: true };
    default:
      return state;
  }
};

export default notifications;
