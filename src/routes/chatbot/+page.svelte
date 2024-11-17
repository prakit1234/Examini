<script>
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
    let user: any;

    onMount(async () => {
        try {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data.user) {
                window.location.href = '/login';
            } else {
                user = data.user;
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            window.location.href = '/login';
        }
    });
</script>

{#if user}
    <h2>Welcome to the Chatbot, {user.email}</h2>
    <p>Ask your questions and get instant answers from our chatbot.</p>
{:else}
    <p>Loading...</p>
{/if}