
<script>
  import { createEventDispatcher } from 'svelte';
  let username = '';
  let password = '';
  let errorMessage = '';

  const dispatch = createEventDispatcher();

  async function handleRegister() {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        dispatch('registerSuccess');
      } else {
        const data = await response.json();
        errorMessage = data.message;
      }
    } catch (error) {
      console.error(error);
      errorMessage = 'An error occurred during registration.';
    }
  }
</script>

<style>
  /* Basic styling */
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
  }
  button {
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  p {
    color: red;
  }
</style>

<h2>Register</h2>
<form on:submit|preventDefault={handleRegister}>
  <input type="email" bind:value={username} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Register</button>
  {#if errorMessage}<p>{errorMessage}</p>{/if}
</form>
