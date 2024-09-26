const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.static('public'));

let chatHistory = [];

io.on('connection', (socket) => {
  console.log('a user connected');

  // Send previous chat history on connection
  socket.emit('chatHistory', chatHistory);

  // Listen for incoming messages
  socket.on('chatMessage', (msg) => {
    const message = { id: socket.id, text: msg };
    chatHistory.push(message); // Store in chat history
    io.emit('chatMessage', message); // Broadcast to all clients
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
