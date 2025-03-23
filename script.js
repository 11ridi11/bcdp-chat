function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMessage = input.value.trim();

  if (userMessage === '') return;

  const userDiv = document.createElement('div');
  userDiv.className = 'message user';
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = 'message bot';
    botDiv.textContent = generateBotReply(userMessage);
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

function generateBotReply(message) {
  if (message.toLowerCase().includes('hello')) {
    return 'Hi there! 👋';
  } else if (message.toLowerCase().includes('how are you')) {
    return 'I\'m just a bot, but I\'m doing great! 🤖';
  } else {
    return 'I\'m still learning! Try asking something else.';
  }
}
