const ADD_STOCK = 'ADD_STOCK';
const REMOVE_STOCK = 'REMOVE_STOCK';

let nextStockID = 0;

export const removeStock = id => ({type: REMOVE_STOCK, id});
export const addStock = code => ({type: ADD_STOCK, code, id: nextStockID++});
