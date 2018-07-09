import store from "../store";

export const ADD_STOCK = "ADD_STOCK";
export const REMOVE_STOCK = "REMOVE_STOCK";
export const LOAD_STOCKS = "LOAD_STOCKS";
export const LOADING = "LOADING";
export const ACTION_FAILURE = "ACTION_FAILURE";
export const ACTION_SUCCESS = "ACTION_SUCCESS";

/* setup socket */

export const socket = require("socket.io-client").connect();

/* socket listeners */

socket.on("load stocks", res => {
  store.dispatch({
    type: LOAD_STOCKS,
    stocks: res
  });
  store.dispatch({
    type: ACTION_SUCCESS
  });
});

socket.on("add stock code", res => {
  store.dispatch({
    type: ADD_STOCK,
    code: res.code,
    description: res.description,
    data: res.data,
    id: res.id
  });
  store.dispatch({
    type: ACTION_SUCCESS
  });
});

socket.on("delete stock code", id => {
  store.dispatch({
    type: REMOVE_STOCK,
    id
  });
  store.dispatch({
    type: ACTION_SUCCESS
  });
});

socket.on("action has failed", message => {
  store.dispatch({
    type: ACTION_FAILURE,
    message
  });
});

socket.on("action is loading", () => {
  store.dispatch({
    type: LOADING
  });
});

/* actions */

export const addStock = code => dispatch => {
  dispatch({
    type: LOADING
  });
  return socket.emit("add stock code", code);
};

export const removeStock = id => dispatch => {
  dispatch({
    type: LOADING
  });
  return socket.emit("delete stock code", id);
};
