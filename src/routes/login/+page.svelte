<!-- src/routes/login/+page.svelte -->
<script>
  import Login from '$lib/login.svelte';

  function handleLoginSuccess() {
      window.location.href = '/chatbot';
  }
</script>

<Login on:loginSuccess={handleLoginSuccess} />