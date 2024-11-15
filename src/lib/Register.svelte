<script>
  let email = '';
  let password = '';
  let confirmPassword = '';

  function handleRegister() {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering with:', email, password);
  }
</script>

<div class="form-container">
  <h2>Register</h2>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" required />
  <button on:click={handleRegister}>Register</button>
  <p>Already have an account? <a href="/login">Login</a></p>
</div>

<style>
  .form-container {
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
  p {
    text-align: center;
    margin-top: 10px;
  }
</style>