import store from '../store';

export const ADD_STOCK = 'ADD_STOCK';
export const REMOVE_STOCK = 'REMOVE_STOCK';
export const LOAD_STOCKS = 'LOAD_STOCKS';
export const ERROR_STOCK = 'ERROR_STOCK';
export const SUCCESS_STOCK = 'SUCCESS_STOCK';
export const FETCH_DATA = 'FETCH_DATA';
export const LOAD_DETAIL_STOCK = 'LOAD_DETAIL_STOCK';

/* setup socket */

export const socket = require('socket.io-client').connect();

/* socket listeners */

socket.on('fetch data', () => {
  store.dispatch({ type: FETCH_DATA });
});

socket.on('load stocks', (res) => {
  store.dispatch({ type: LOAD_STOCKS, stocks: res });
  store.dispatch({ type: SUCCESS_STOCK });
});

socket.on('add stock code', (res) => {
  store.dispatch({ type: ADD_STOCK, code: res.code, description: res.description, data: res.data, id: res.id });
  store.dispatch({ type: SUCCESS_STOCK });
});

socket.on('error stock code', (message) => {
  store.dispatch({ type: ERROR_STOCK, message: message });
});

socket.on('delete stock code', (id) => {
  store.dispatch({ type: REMOVE_STOCK, id });
  store.dispatch({ type: SUCCESS_STOCK });
});

socket.on('load detailed stock', (data) => {
  store.dispatch({ type: LOAD_DETAIL_STOCK, ohlc: data.ohlc, volume: data.volume });
});

/* actions */

export const addStock = (code) => (
  dispatch => {
    dispatch({ type: FETCH_DATA });
    return socket.emit('send stock code', code);
  }
);

export const removeStock = (id) => (
  dispatch => {
    dispatch({ type: FETCH_DATA });
    return socket.emit('send delete stock code', id);
  }
);

export const loadDetailedStock = (code) => (
  dispatch => {
    dispatch({ type: FETCH_DATA });
    return socket.emit('send detail stock code', code);
  }
);