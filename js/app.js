let currentChannel = "# General";

function sendMessage() {
  const input = document.getElementById('message-input');
  const messageContainer = document.getElementById('message-container');
  if (input.value.trim() !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = `[${currentChannel}] ${input.value}`;
    messageContainer.appendChild(messageDiv);
    input.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

function switchChannel(element) {
  document.querySelector('.channel.active').classList.remove('active');
  element.classList.add('active');
  currentChannel = element.textContent.trim();
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = ''; // Clear the message container
}
