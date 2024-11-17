// src/routes/api/login.js
import { supabase } from '$lib/supabase';

export async function post(request) {
    const { username, password } = request.body;

    const { user, error } = await supabase.auth.signIn({
        email: username,
        password: password,
    });

    if (error) {
        return {
            status: 401,
            body: { message: error.message }
        };
    }

    return {
        status: 200,
        body: { message: 'Login successful', user }
    };
}