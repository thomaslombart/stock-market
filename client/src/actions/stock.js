import store from '../store';
import axios from 'axios';

export const ADD_STOCK = 'ADD_STOCK';
export const REMOVE_STOCK = 'REMOVE_STOCK';

let nextStockID = 0;

/* setup socket */

export const socket = require('socket.io-client').connect();

/* socket listeners */

socket.on('receive stock code', data => {
  store.dispatch({
    type: ADD_STOCK,
    id: nextStockID++,
    code: data
  });
});

/* actions */

export const addStock = code => {
  return dispatch => {
    return axios.post(`/api/stock`, {'code': code})
    .then(res => socket.emit('send stock code', code));
  }
}

export const removeStock = id => ({type: REMOVE_STOCK, id});
