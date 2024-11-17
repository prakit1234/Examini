// src/routes/api/register.js
import { supabase } from '$lib/supabase';

export async function post(request) {
    const { username, password } = request.body;

    const { user, error } = await supabase.auth.signUp({
        email: username,
        password: password,
    });

    if (error) {
        return {
            status: 400,
            body: { message: error.message }
        };
    }

    return {
        status: 201,
        body: { message: 'User  registered successfully', user }
    };
}