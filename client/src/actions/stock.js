const ADD_STOCK = 'ADD_STOCK';
const REMOVE_STOCK = 'REMOVE_STOCK';
const QUANDL_API_KEY = process.env;
console.log(QUANDL_API_KEY)
let nextStockID = 0;

export const addStock = (code) => {
  return function(dispatch) {
    return fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${code}/data.json?api_key=${QUANDL_API_KEY}`).then(data => dispatch(addStockSuccess({data, code}))).catch(error => error);
  }
}

export const removeStock = id => ({type: REMOVE_STOCK, id});
export const addStockSuccess = ({data, code}) => ({
  type: ADD_STOCK,
  code,
  data,
  id: nextStockID++
});
