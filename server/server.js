const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer((app));
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {    // io.on registers an event listener
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'David',
    text: 'I am David'
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {   // appears on terminal (server), when chrome tab (client) closes
    console.log('user was disconnected');
  });
});   

server.listen(port, () => {
  console.log(`SERVER ON ${port}`);
});