-- =====================================================
-- PATCH_DOMAINS_V2.sql CORRIGIDO
-- Executar ORDEM CORRETA:
-- 1. Primeiro atualizar dados
-- 2. Depois criar constraints
-- =====================================================

-- =====================================================
-- PASSO 1: Migrar dados ANTES de criar constraints
-- =====================================================

-- Verificar domínios atuais
SELECT 'Antes da migração:' as info;
SELECT DISTINCT domain as dominio FROM library_kpis;

-- Migrar sales → commercial (PRIMEIRO!)
UPDATE library_kpis SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_challenges SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_diagnoses SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_levers SET category = 'commercial' WHERE category = 'sales';
UPDATE radar_items SET domain = 'commercial' WHERE domain = 'sales';

-- Verificar após update
SELECT 'Após migração sales→commercial:' as info;
SELECT DISTINCT domain as dominio FROM library_kpis;

-- =====================================================
-- PASSO 2: Criar constraints (após dados migrados)
-- =====================================================

-- library_kpis
ALTER TABLE library_kpis 
  DROP CONSTRAINT IF EXISTS library_kpis_domain_check;

ALTER TABLE library_kpis
  ADD CONSTRAINT library_kpis_domain_check 
  CHECK (domain IN (
    'finance', 'commercial', 'marketing', 'operations',
    'people', 'strategy', 'technology', 'customers'
  ));

-- library_challenges
ALTER TABLE library_challenges
  DROP CONSTRAINT IF EXISTS library_challenges_domain_check;

ALTER TABLE library_challenges
  ADD CONSTRAINT library_challenges_domain_check
  CHECK (domain IN (
    'finance', 'commercial', 'marketing', 'operations',
    'people', 'strategy', 'technology', 'customers'
  ));

-- library_diagnoses
ALTER TABLE library_diagnoses
  DROP CONSTRAINT IF EXISTS library_diagnoses_domain_check;

ALTER TABLE library_diagnoses
  ADD CONSTRAINT library_diagnoses_domain_check
  CHECK (domain IN (
    'finance', 'commercial', 'marketing', 'operations',
    'people', 'strategy', 'technology', 'customers'
  ));

-- library_levers
ALTER TABLE library_levers
  DROP CONSTRAINT IF EXISTS library_levers_category_check;

ALTER TABLE library_levers
  ADD CONSTRAINT library_levers_category_check
  CHECK (category IN (
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

-- =====================================================
-- PASSO 3: Verificar resultado final
-- =====================================================

SELECT 'Domínios finais:' as info;
SELECT 'library_kpis' as tabela, domain, COUNT(*) as total FROM library_kpis GROUP BY domain
UNION ALL
SELECT 'library_challenges', domain, COUNT(*) FROM library_challenges GROUP BY domain
UNION ALL
SELECT 'library_diagnoses', domain, COUNT(*) FROM library_diagnoses GROUP BY domain
UNION ALL
SELECT 'library_levers', category, COUNT(*) FROM library_levers GROUP BY category
UNION ALL
SELECT 'radar_items', domain, COUNT(*) FROM radar_items GROUP BY domain
ORDER BY tabela, domain;

-- =====================================================
-- SUCESSO!
-- =====================================================
