-- Security Fix: Encrypt API Keys in platform_config
-- Migration: 20260405_security_encrypt_api_keys
-- Created: 2026-04-05
-- Priority: HIGH (SEC-002)

-- Add encrypted fields for API keys
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'platform_config' AND column_name = 'encrypted_keys'
  ) THEN
    ALTER TABLE platform_config ADD COLUMN encrypted_keys JSONB;
  END IF;
END $$;

-- The encrypted_keys column will store API keys encrypted
-- Example structure:
-- {
--   "huggingface_api_key": "enc_xxx",
--   "openai_api_key": "enc_xxx", 
--   "gemini_api_key": "enc_xxx"
-- }

-- NOTE: Full implementation requires:
-- 1. Enable pgsodium extension
-- 2. Create encryption keys in Supabase Vault
-- 3. Use pgsodium.crypto_encrypt() for storing keys
-- 4. Use pgsodium.crypto_decrypt() for retrieving keys

-- For now, restrict access to service_role only via RLS
-- (Already done in 20260405_security_rls_policies.sql)
