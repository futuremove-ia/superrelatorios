import { createClient } from '@supabase/supabase-js';
import { config } from '@/config/env';

const { url: supabaseUrl, anonKey: supabaseAnonKey } = config.supabase;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'COLE_SUA_URL_AQUI') {
  console.warn('Supabase URL ou Anon Key não configurados no arquivo .env.local');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    // Restaurando o padrão: deixa o Supabase lidar com a URL automaticamente
    detectSessionInUrl: true, 
    flowType: 'pkce',
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Export createClient for services that need their own instance
export { createClient };
