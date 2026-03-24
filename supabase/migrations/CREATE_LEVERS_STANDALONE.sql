-- =====================================================
-- CREATE_LIBRARY_LEVERS_ACTIONS_STANDALONE.sql
-- Versão sem dependências de tabelas externas
-- Cria tabelas v3.0 independentes (sem FKs para library_challenges, organizations, etc.)
-- =====================================================

-- =====================================================
-- 1. TABELA: library_levers (As Alavancas Estratégicas)
-- =====================================================

DROP TABLE IF EXISTS library_levers CASCADE;

CREATE TABLE library_levers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    category VARCHAR(50) NOT NULL CHECK (category IN ('financeiro', 'vendas', 'operacoes', 'pessoas', 'relacionamento', 'marketing')),
    target_kpi_code VARCHAR(50),
    impact_level VARCHAR(20) CHECK (impact_level IN ('high', 'medium', 'low')),
    implementation_complexity VARCHAR(20) CHECK (implementation_complexity IN ('high', 'medium', 'low')),
    typical_timeframe_days INT DEFAULT 30,
    expected_impact_description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_levers_category ON library_levers(category);
CREATE INDEX idx_levers_kpi ON library_levers(target_kpi_code);
CREATE INDEX idx_levers_active ON library_levers(is_active);

-- =====================================================
-- 2. TABELA: library_actions (As Ações Táticas)
-- =====================================================

DROP TABLE IF EXISTS library_actions CASCADE;

CREATE TABLE library_actions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    step_by_step JSONB DEFAULT '[]'::jsonb,
    estimated_effort_hours INT DEFAULT 4,
    required_resources TEXT,
    success_metrics TEXT,
    priority_score INT CHECK (priority_score BETWEEN 1 AND 5),
    quick_win BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_actions_lever ON library_actions(lever_id);
CREATE INDEX idx_actions_priority ON library_actions(priority_score);
CREATE INDEX idx_actions_quick_win ON library_actions(quick_win);
CREATE INDEX idx_actions_active ON library_actions(is_active);

-- =====================================================
-- 3. TABELA: library_challenge_lever_mapping
-- Mapeamento Desafio → Alavanca (códigos textuais, sem FK)
-- =====================================================

DROP TABLE IF EXISTS library_challenge_lever_mapping CASCADE;

CREATE TABLE library_challenge_lever_mapping (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_code VARCHAR(50) NOT NULL,
    lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
    priority INT NOT NULL DEFAULT 1,
    is_primary BOOLEAN DEFAULT false,
    confidence_score DECIMAL(3,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(challenge_code, lever_id)
);

CREATE INDEX idx_challenge_lever_code ON library_challenge_lever_mapping(challenge_code);
CREATE INDEX idx_challenge_lever_id ON library_challenge_lever_mapping(lever_id);

-- =====================================================
-- 4. TABELA: library_goal_lever_mapping
-- Mapeamento Objetivo → Alavanca (códigos textuais, sem FK)
-- =====================================================

DROP TABLE IF EXISTS library_goal_lever_mapping CASCADE;

CREATE TABLE library_goal_lever_mapping (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_code VARCHAR(50) NOT NULL,
    lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
    priority INT NOT NULL DEFAULT 1,
    effectiveness_score DECIMAL(3,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(goal_code, lever_id)
);

CREATE INDEX idx_goal_lever_code ON library_goal_lever_mapping(goal_code);
CREATE INDEX idx_goal_lever_id ON library_goal_lever_mapping(lever_id);

-- =====================================================
-- 5. FUNÇÃO: get_lever_actions
-- Retorna ações de uma alavanca
-- =====================================================

CREATE OR REPLACE FUNCTION get_lever_actions(p_lever_code VARCHAR)
RETURNS TABLE (
    action_id UUID,
    action_code VARCHAR,
    action_title VARCHAR,
    action_description TEXT,
    step_by_step JSONB,
    estimated_effort_hours INT,
    quick_win BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        la.id,
        la.code,
        la.title,
        la.description,
        la.step_by_step,
        la.estimated_effort_hours,
        la.quick_win
    FROM library_actions la
    JOIN library_levers ll ON la.lever_id = ll.id
    WHERE ll.code = p_lever_code
      AND la.is_active = true
    ORDER BY la.priority_score;
END;
$$ LANGUAGE plpgsql STABLE;

-- =====================================================
-- 6. FUNÇÃO: get_challenge_levers
-- Retorna alavancas para um desafio (via código)
-- =====================================================

CREATE OR REPLACE FUNCTION get_challenge_levers(p_challenge_code VARCHAR)
RETURNS TABLE (
    lever_id UUID,
    lever_code VARCHAR,
    lever_title VARCHAR,
    lever_category VARCHAR,
    priority INT,
    is_primary BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ll.id,
        ll.code,
        ll.title,
        ll.category,
        lclm.priority,
        lclm.is_primary
    FROM library_challenge_lever_mapping lclm
    JOIN library_levers ll ON lclm.lever_id = ll.id
    WHERE lclm.challenge_code = p_challenge_code
      AND ll.is_active = true
    ORDER BY lclm.priority;
END;
$$ LANGUAGE plpgsql STABLE;

-- =====================================================
-- 7. FUNÇÃO: get_recommended_actions_for_challenge
-- Retorna as 3 melhores ações para um desafio
-- =====================================================

CREATE OR REPLACE FUNCTION get_recommended_actions_for_challenge(
    p_challenge_code VARCHAR
)
RETURNS TABLE (
    action_id UUID,
    action_code VARCHAR,
    action_title VARCHAR,
    action_description TEXT,
    step_by_step JSONB,
    lever_title VARCHAR,
    lever_category VARCHAR,
    priority INT,
    estimated_effort_hours INT,
    quick_win BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        la.id as action_id,
        la.code as action_code,
        la.title as action_title,
        la.description as action_description,
        la.step_by_step,
        ll.title as lever_title,
        ll.category as lever_category,
        lclm.priority,
        la.estimated_effort_hours,
        la.quick_win
    FROM library_challenge_lever_mapping lclm
    JOIN library_levers ll ON lclm.lever_id = ll.id
    JOIN library_actions la ON la.lever_id = ll.id
    WHERE lclm.challenge_code = p_challenge_code
      AND ll.is_active = true
      AND la.is_active = true
    ORDER BY lclm.priority, la.priority_score
    LIMIT 3;
END;
$$ LANGUAGE plpgsql STABLE;

-- =====================================================
-- VALIDAÇÃO
-- =====================================================

SELECT 'TABELAS V3.0 STANDALONE CRIADAS COM SUCESSO' as status;

SELECT 
    table_name,
    'CRIADA' as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('library_levers', 'library_actions', 'library_challenge_lever_mapping', 'library_goal_lever_mapping');
