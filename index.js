import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

mongoose.connect(process.env.STOCK_MLAB_URI);

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Express Server is listening on port ${port}`));

const io = require('socket.io')(server);
require('./server/sockets.js')(io);
