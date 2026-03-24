/**
 * Centralized environment configuration provider.
 * This module ensures all environment variables are correctly typed and
 * provides a single source of truth for the application.
 */

interface EnvConfig {
  supabase: {
    url: string;
    anonKey: string;
  };
  isDev: boolean;
  isProd: boolean;
}

const getEnvVar = (key: string, required = true): string => {
  const value = import.meta.env[key];
  if (required && !value) {
    console.error(`Missing required environment variable: ${key}`);
    return "";
  }
  return value || "";
};

export const config: EnvConfig = {
  supabase: {
    url: getEnvVar("VITE_SUPABASE_URL"),
    anonKey: getEnvVar("VITE_SUPABASE_ANON_KEY"),
  },
  gemini: {
    apiKey: getEnvVar("VITE_GEMINI_API_KEY", false),
  },
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};

export default config;
