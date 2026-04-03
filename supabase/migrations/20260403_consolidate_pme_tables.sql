-- ============================================================================
-- CONSOLIDAR TABELAS _PME - SuperRelatórios
-- Data: 2026-04-03
-- ============================================================================

-- 1. Se library_levers_pme tiver dados, inserir em library_levers (se não existirem)
INSERT INTO library_levers (code, title_en, title_pt, title_es, description_en, description_pt, description_es, category, impact_level, complexity_code, is_active)
SELECT 
    code, 
    title_en, title_pt, title_es, 
    description_en, description_pt, description_es, 
    category, impact_level, complexity_code, is_active
FROM library_levers_pme
WHERE NOT EXISTS (SELECT 1 FROM library_levers WHERE library_levers.code = library_levers_pme.code);

-- 2. Se library_risks_pme tiver dados, inserir em library_challenges (se não existirem)
INSERT INTO library_challenges (code, challenge_type, title_en, title_pt, title_es, description_en, description_pt, description_es, domain, severity_level, is_active)
SELECT 
    code, 
    'risk' as challenge_type,
    title_en, title_pt, title_es,
    description_en, description_pt, description_es,
    domain, severity_level, is_active
FROM library_risks_pme
WHERE NOT EXISTS (SELECT 1 FROM library_challenges WHERE library_challenges.code = library_risks_pme.code);

-- 3. Remover tabelas _pme
DROP TABLE IF EXISTS library_levers_pme;
DROP TABLE IF EXISTS library_risks_pme;

-- 4. Adicionar coluna is_pme às tabelas principais se necessário
-- (para identificar se é específico para PME ou não)
ALTER TABLE library_levers ADD COLUMN IF NOT EXISTS is_pme_specific BOOLEAN DEFAULT false;
ALTER TABLE library_challenges ADD COLUMN IF NOT EXISTS is_pme_specific BOOLEAN DEFAULT false;
