<script>
  import Register from '$lib/register.svelte';

  function handleRegisterSuccess() {
      window.location.href = '/login';
  }
</script>

<Register on:registerSuccess={handleRegisterSuccess} />