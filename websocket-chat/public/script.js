const socket = io();

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Load chat history on connection
socket.on('chatHistory', (history) => {
  history.forEach((msg) => {
    appendMessage(msg.text);
  });
});

// Listen for messages from the server
socket.on('chatMessage', (msg) => {
  appendMessage(msg.text);
});

// Send message on button click
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.emit('chatMessage', message);
    messageInput.value = '';
  }
});

// Function to append messages to the chat box
function appendMessage(message) {
  const div = document.createElement('div');
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}
