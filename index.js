import express from 'express';
import axios from 'axios';
import path from 'path';
import stock from './server/routes/stock';

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/stock', stock);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Express Server is listening on port ${port}`));

const io = require('socket.io')(server);
require('./server/sockets.js')(io);
