import axios from 'axios';
import Stock from './models/stock';

const QUANDL_API_KEY = process.env.QUANDL_API_KEY;
const financialData = (code) => `https://www.quandl.com/api/v3/datasets/WIKI/${code}.json?column_index=1&order=asc&api_key=${QUANDL_API_KEY}`;

module.exports = io => {
  io.on('connection', socket => {
    /* We need all data when client connects to the page */
    socket.emit('action is loading');
    Stock.find({}, (err, docs) => {
      if (err)
        throw err;
      // We decide what object to send to client because we don't want '_id' and '__v'
      let allStockCodes = docs.map(doc => ({ code: doc.code, id: doc.id, description: doc.description, data: doc.data }));
      socket.emit('load stocks', allStockCodes);
    });
    socket.on('add stock code', code => {
      Stock.findOne({
        code: code
      }, (err, doc) => {
        if (err)
          throw err;
        if (!doc) {
          // We need to verify if the stock code is a valid one by calling Quandl API
          axios.get(financialData(code)).then(response => {
            let stock = response.data.dataset;
            let stockToSave = new Stock({ code: stock.dataset_code, description: stock.name, data: stock.data });
            // Convert datetime to timestamp for Highcharts
            for (let i = 0; i < stockToSave.data.length; i++) {
              stockToSave.data[i][0] = Date.parse(stockToSave.data[i][0]);
            }
            stockToSave.save(err => {
              if (err)
                throw err;
              return io.emit('add stock code', {
                id: stockToSave.id,
                code: stockToSave.code,
                description: stockToSave.description,
                data: stockToSave.data
              });
            });
          }).catch(err => {
            if (err)
              return socket.emit('action has failed', { message: `You have entered an incorrect code` })
          });
        } else {
          return socket.emit('action has failed', { message: `The stock symbol already exists` });
        }
      });
    });
    socket.on('delete stock code', id => {
      Stock.findByIdAndRemove(id, (err) => {
        if (err)
          throw err;

        // Send back the id to the client to delete the object in the state object
        return io.emit('delete stock code', id);
      });
    });
  });
}
