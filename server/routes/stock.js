import express from 'express';
import axios from 'axios';
import {getFinancialData} from '../helpers/';

const router = express.Router();

router.get('/:code', (req, res) => {
  axios.get(getFinancialData(req.params.code)).then(response => res.json(response.data)).catch(error => console.log(error));
});

export default router;
