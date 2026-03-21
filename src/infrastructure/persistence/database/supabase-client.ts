import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase Client Configuration
 * Centralized configuration for database connections
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-application-name': 'metrics-mvp',
    },
  },
});

/**
 * Database connection health check
 */
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    const { error } = await supabase.from('metrics').select('count').limit(1);
    return !error;
  } catch (error) {
    console.error('Database health check failed:', error);
    return false;
  }
}

/**
 * Get database connection info
 */
export function getDatabaseInfo() {
  return {
    url: supabaseUrl,
    connected: true,
    timestamp: new Date().toISOString(),
  };
}
