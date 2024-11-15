<script>
  import axios from 'axios';

  let userMessage = '';
  let messages = [];

  async function sendMessage() {
    if (userMessage.trim() === '') return;

    messages.push({ text: userMessage, sender: 'user' });
    const response = await fetchGemini Response(userMessage);
    messages.push({ text: response, sender: 'bot' });
    userMessage = '';
  }

  async function fetchGeminiResponse(message) {
    try {
      const res = await axios.post('https://api.gemini.com/v1/your_endpoint', {
        message: message,
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
        },
      });
      return res.data.response;
    } catch (error) {
      console.error('Error fetching response:', error);
      return 'Sorry, something went wrong.';
    }
  }
</script>

<div class="chatbot">
  <h2 class="chatbot-title">Chatbot</h2>
  <div class="messages">
    {#each messages as msg}
      <div class={msg.sender}>
        {msg.sender === 'user' ? 'You: ' : 'Bot: '}{msg.text}
      </div>
    {/each}
  </div>
  <div class="input-area">
    <input type="text" bind:value={userMessage} placeholder="Type a message..." on:keydown="{(e) => e.key === 'Enter' && sendMessage()}" />
    <button on:click={sendMessage}>Send</button>
  </div>
</div>

<style>
  .chatbot {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    width: 350px;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
  }
  .chatbot-title {
    font-size: 20px;
    color: #007bff;
    margin-bottom: 10px;
  }
  .messages {
    margin-bottom: 10px;
    max-height: 300px;
    overflow-y: auto;
  }
  .user {
    text-align: right;
    color: #007bff;
    font-weight: bold;
  }
  .bot {
    text-align: left;
    color: #333;
  }
  .input-area {
    display: flex;
    justify-content: space-between;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: calc(100% - 22px);
    margin-right: 10px;
    font-size: 16px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>