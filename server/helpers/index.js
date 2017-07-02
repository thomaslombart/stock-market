const QUANDL_API_KEY = process.env.QUANDL_API_KEY;

export const getFinancialData = code => `https://www.quandl.com/api/v3/datasets/WIKI/${code}.json?api_key=${QUANDL_API_KEY}`;
