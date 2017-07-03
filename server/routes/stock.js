import express from 'express';
import axios from 'axios';
import Stock from '../models/stock';

const router = express.Router();

router.get('/', (req, res) => {
  Stock.find({}, (err, docs) => {
    if (err) throw err;
    let allStockCodes = docs.map(doc => {
      return {'id': doc.id, 'code': doc.code}
    });
    res.json(allStockCodes);
  });
});

router.post('/', (req, res) => {
  Stock.findOne({code: req.body.code}, (err, doc) => {
    if (!doc) {
      let stock = new Stock({code: req.body.code});
      stock.save(err => err ? res.sendStatus(500) : res.sendStatus(200));
    }
  });
});

export default router;
