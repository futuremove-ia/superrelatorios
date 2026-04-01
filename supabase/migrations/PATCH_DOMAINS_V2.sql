-- =====================================================
-- PATCH_DOMAINS_V2.sql
-- Taxonomia de Domínios PME/SMB — v2.1
-- Data: 2026-04-01
-- =====================================================
-- OBJETIVO:
--   1. Adicionar 'technology' e 'customers' como domínios válidos
--   2. Manter 'sales' como legado temporário (compatibilidade de dados)
--   3. Migrar todos os registros 'sales' → 'commercial'
--   4. Atualizar CONSTRAINTs nas tabelas afetadas
-- =====================================================

-- PASSO 1: Remover constraints antigas e recriar com novos domínios
-- (Postgres não suporta ALTER CHECK diretamente — precisa DROP + ADD)

-- library_kpis
ALTER TABLE library_kpis 
  DROP CONSTRAINT IF EXISTS library_kpis_domain_check;

ALTER TABLE library_kpis
  ADD CONSTRAINT library_kpis_domain_check 
  CHECK (domain IN (
    'finance', 'commercial', 'marketing', 'operations',
    'people', 'strategy', 'technology', 'customers'
  ));

-- radar_items
ALTER TABLE radar_items
  DROP CONSTRAINT IF EXISTS radar_items_domain_check;

ALTER TABLE radar_items
  ADD CONSTRAINT radar_items_domain_check
  CHECK (domain IN (
    'finance', 'commercial', 'marketing', 'operations',
    'people', 'strategy', 'technology', 'customers'
  ));

-- library_diagnoses (se existir coluna domain)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'library_diagnoses' AND column_name = 'domain'
  ) THEN
    ALTER TABLE library_diagnoses
      DROP CONSTRAINT IF EXISTS library_diagnoses_domain_check;
    ALTER TABLE library_diagnoses
      ADD CONSTRAINT library_diagnoses_domain_check
      CHECK (domain IN (
        'finance', 'commercial', 'marketing', 'operations',
        'people', 'strategy', 'technology', 'customers'
      ));
  END IF;
END $$;

-- library_challenges (se existir coluna domain)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'library_challenges' AND column_name = 'domain'
  ) THEN
    ALTER TABLE library_challenges
      DROP CONSTRAINT IF EXISTS library_challenges_domain_check;
    ALTER TABLE library_challenges
      ADD CONSTRAINT library_challenges_domain_check
      CHECK (domain IN (
        'finance', 'commercial', 'marketing', 'operations',
        'people', 'strategy', 'technology', 'customers'
      ));
  END IF;
END $$;

-- user_strategy_focus (se existir coluna domain)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_strategy_focus' AND column_name = 'domain'
  ) THEN
    ALTER TABLE user_strategy_focus
      DROP CONSTRAINT IF EXISTS user_strategy_focus_domain_check;
    ALTER TABLE user_strategy_focus
      ADD CONSTRAINT user_strategy_focus_domain_check
      CHECK (domain IN (
        'finance', 'commercial', 'marketing', 'operations',
        'people', 'strategy', 'technology', 'customers'
      ));
  END IF;
END $$;

-- PASSO 2: Migrar dados legados sales → commercial
-- (Somente após garantir que a constraint já permite ambos via DROP acima)

UPDATE radar_items
  SET domain = 'commercial'
  WHERE domain = 'sales';

UPDATE library_kpis
  SET domain = 'commercial'
  WHERE domain = 'sales';

-- PASSO 3: Confirmar resultado
SELECT 
  domain,
  COUNT(*) as total
FROM radar_items
GROUP BY domain
ORDER BY domain;

-- =====================================================
-- NOTA: Os domínios 'technology' e 'customers' foram
-- adicionados ao schema e ao frontend.
-- 
-- Próximo passo: popular library_diagnoses com
-- diagnósticos categorizados nesses novos domínios
-- para que a IA possa detectar desafios e 
-- oportunidades de TI e CX nas PMEs.
-- =====================================================
