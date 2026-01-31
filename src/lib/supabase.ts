// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types';

// Gunakan typing string, bukan "any"
const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
