// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdijndlgrelaackyrnal.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaWpuZGxncmVsYWFja3lybmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDczMzIsImV4cCI6MjA0NDk4MzMzMn0.CfoZgLRx0kC8H85MYflzowNFGuwigyxYficMNlJfM9g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);