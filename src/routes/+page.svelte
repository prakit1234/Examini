<script>
  import { goto } from '$app/navigation';
</script>

<main>
  <header>
    <h1>Welcome to the Examini Ai</h1>
    <p>Examini Ai: Revolutionizing AI-powered chatbots for a better user experience.</p>
    <div class="buttons">
      <button on:click={() => goto('/login')}>Login</button>
      <button on:click={() => goto('/register')}>Register</button>
    </div>
  </header>

  <section class="about">
    <h2>About Us</h2>
    <p>We are the Zenox Team, dedicated to providing the best AI chatbot experience. Our chatbot is designed to assist users with a variety of tasks and provide information in an engaging manner.</p>
  </section>

  <section class="features">
    <h2>Features</h2>
    <div class="feature-grid">
      <div class="feature-box">
        <h3>Student Friendly</h3>
        <p>Our chatbot is designed to be user-friendly and accessible to students of all ages.</p>
      </div>
      <div class="feature-box">
        <h3>Instant Responses</h3>
        <p>Get instant responses to your queries with our AI-powered chatbot.</p>
      </div>
      <div class="feature-box">
        <h3>Free Version</h3>
        <p>Our free version has no limitations, so you can try it out without any restrictions.</p>
      </div>
      <div class="feature-box">
        <h3>Personalized Interactions</h3>
        <p>Our chatbot provides personalized interactions to make your experience more engaging and fun.</p>
      </div>
    </div>
  </section>

  <section class="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or feedback, feel free to reach out to us at <a href="mailto:TeamRebellion@proton.me">TeamRebellion@proton.me</a>.</p>
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 20px;
    background-color: #f7f7f7;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    animation: fadeIn 2s;
  }
  header {
    margin-bottom: 30px;
  }
  h1 {
    color: #3498db;
    margin-bottom: 20px;
  }
  .buttons {
    margin-bottom: 20px;
  }
  button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #2e6da4;
  }
  section {
    margin: 20px 0;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    color: #3498db;
  }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .feature-box {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .feature-box h3 {
    margin-top: 0;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
