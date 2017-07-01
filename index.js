const express = require('express');
const axios = require('axios');
const path = require('path');
const QUANDL_API_KEY = process.env.QUANDL_API_KEY;
const app = express();

const getFinancialData = code => `https://www.quandl.com/api/v3/datasets/WIKI/${code}.json?api_key=${QUANDL_API_KEY}`;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/stock/:code', (req, res) => {
  axios.get(getFinancialData(req.params.code)).then(response => console.log(response.data))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
