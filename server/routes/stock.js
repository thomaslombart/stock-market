import express from 'express';
import axios from 'axios';
import Stock from '../models/stock';

const router = express.Router();

router.post('/', (req, res) => {
  let stock = new Stock({code: req.body.code});
  stock.save(err => err ? res.sendStatus(500) : res.sendStatus(200));
});

export default router;
