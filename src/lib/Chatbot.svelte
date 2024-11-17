<!-- src/lib/chatbot.svelte -->
<script>
  import { onMount } from 'svelte';
  import { supabase } from './supabase';
  let user;
  let messages = [];
  let inputMessage = '';
  let loading = false;

  // Function to fetch the user and check authentication
  onMount(async () => {
      const { data, error } = await supabase.auth.getUser ();
      if (error || !data.user) {
          window.location.href = '/login';
      } else {
          user = data.user;
      }
  });

  // Function to send a message to Gemini AI
  async function sendMessage() {
      if (!inputMessage.trim()) return;

      // Add user message to chat
      messages.push({ text: inputMessage, sender: 'user' });

      // Clear input field
      const messageToSend = inputMessage;
      inputMessage = '';
      loading = true;

      try {
          // Call Gemini AI API
          const response = await fetch('https://api.gemini.ai/v1/chat', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer AIzaSyDmE1vZWMvalReOfjtirCbyO7QZJqu7v7s` // Replace with your actual API key
              },
              body: JSON.stringify({
                  prompt: messageToSend,
                  // Add any other parameters required by the API
              })
          });

          const data = await response.json();

          if (data && data.response) {
              // Add Gemini AI response to chat
              messages.push({ text: data.response, sender: 'gemini' });
          } else {
              messages.push({ text: 'Error: No response from AI', sender: 'gemini' });
          }
      } catch (error) {
          console.error('Error communicating with Gemini AI:', error);
          messages.push({ text: 'Error: Could not reach AI service', sender: 'gemini' });
      } finally {
          loading = false;
      }
  }
</script>

<style>
  /* Basic styling for the chatbot */
  .chat-container {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      max-width: 600px;
      margin: auto;
      height: 400px;
      overflow-y: auto;
  }
  .message {
      margin: 5px 0;
      padding: 5px;
      border-radius: 5px;
  }
  .user {
      background-color: #d1e7dd;
      text-align: right;
  }
  .gemini {
      background-color: #f8d7da;
      text-align: left;
  }
  .input-container {
      display: flex;
      margin-top: 10px;
  }
  input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
  }
  button {
      padding: 10px;
      margin-left: 5px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
</style>

<div class="chat-container">
  {#each messages as message}
      <div class="message {message.sender}">
          {message.text}
      </div>
  {/each}
  {#if loading}
      <div class="message gemini">Gemini is typing...</div>
  {/if}
</div>

<div class="input-container">
  <input type="text" bind:value={inputMessage} placeholder="Type your message..." on:keydown="{(e) => e.key === 'Enter' && sendMessage()}" />
  <button on:click="{sendMessage}">Send</button>
</div>