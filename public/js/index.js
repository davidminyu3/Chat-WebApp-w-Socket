const socket = io();

socket.on('connect', function () {   // listen for an event  ('event name', 'callback' function)
  console.log('connected to the server');

  socket.emit('createMessage', {
    from: 'Unknown',
    text: 'Guess who I am'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('new message:', message);
});