module.exports = io => {
  io.on('connection', socket => {
    console.log('Someone has just connected');
  });
}
