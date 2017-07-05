import axios from 'axios';

const QUANDL_API_KEY = process.env.QUANDL_API_KEY;

module.exports = io => {
  io.on('connection', socket => {
    socket.on('send stock code', code => {
      return io.emit('receive stock code', code);
    });
    socket.on('send delete stock code', id => {
      return io.emit('delete stock code', id);
    });
  });
}
