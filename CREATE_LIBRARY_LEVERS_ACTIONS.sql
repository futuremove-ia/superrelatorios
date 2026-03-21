-- =====================================================
-- BIBLIOTECA DE ALAVANCAS E AÇÕES v3.0
-- Separação arquitetural: Alavancas (Estratégia) vs Ações (Tática)
-- Ciclo: Challenge → Goal → Lever → Action → KPI
-- =====================================================

-- =====================================================
-- 1. TABELA: library_levers (As Alavancas Estratégicas)
-- Variáveis que movem os KPIs - O "O quê"
-- =====================================================

DROP TABLE IF EXISTS lever_challenge_mapping CASCADE;
DROP TABLE IF EXISTS lever_goal_mapping CASCADE;
DROP TABLE IF EXISTS library_actions CASCADE;
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para library_levers
CREATE INDEX idx_levers_category ON library_levers(category);
CREATE INDEX idx_levers_kpi ON library_levers(target_kpi_code);
CREATE INDEX idx_levers_active ON library_levers(is_active);

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_library_levers_updated_at 
    BEFORE UPDATE ON library_levers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 2. TABELA: library_actions (As Ações Táticas)
-- Checklists práticos de execução - O "Como"
-- =====================================================

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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para library_actions
CREATE INDEX idx_actions_lever ON library_actions(lever_id);
CREATE INDEX idx_actions_priority ON library_actions(priority_score);
CREATE INDEX idx_actions_quick_win ON library_actions(quick_win);
CREATE INDEX idx_actions_active ON library_actions(is_active);

CREATE TRIGGER update_library_actions_updated_at 
    BEFORE UPDATE ON library_actions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 3. TABELA: lever_challenge_mapping
-- Conecta Desafios às Alavancas (1 desafio → 1-3 alavancas)
-- =====================================================

CREATE TABLE lever_challenge_mapping (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID NOT NULL REFERENCES library_challenges(id) ON DELETE CASCADE,
    lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
    priority INT NOT NULL DEFAULT 1 CHECK (priority BETWEEN 1 AND 3),
    is_primary BOOLEAN DEFAULT false,
    confidence_score DECIMAL(3,2) CHECK (confidence_score BETWEEN 0.00 AND 1.00),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(challenge_id, lever_id)
);

CREATE INDEX idx_lever_challenge_challenge ON lever_challenge_mapping(challenge_id);
CREATE INDEX idx_lever_challenge_lever ON lever_challenge_mapping(lever_id);
CREATE INDEX idx_lever_challenge_priority ON lever_challenge_mapping(priority);

-- =====================================================
-- 4. TABELA: lever_goal_mapping
-- Conecta Objetivos às Alavancas (1 objetivo → várias alavancas)
-- =====================================================

CREATE TABLE lever_goal_mapping (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES library_goals(id) ON DELETE CASCADE,
    lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
    priority INT NOT NULL DEFAULT 1,
    effectiveness_score DECIMAL(3,2) CHECK (effectiveness_score BETWEEN 0.00 AND 1.00),
    typical_sequence_order INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(goal_id, lever_id)
);

CREATE INDEX idx_lever_goal_goal ON lever_goal_mapping(goal_id);
CREATE INDEX idx_lever_goal_lever ON lever_goal_mapping(lever_id);
CREATE INDEX idx_lever_goal_priority ON lever_goal_mapping(priority);

-- =====================================================
-- 5. TABELA: user_action_history (O Blueprint/Registro)
-- Histórico de ações executadas para contexto futuro
-- =====================================================

CREATE TABLE user_action_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID,
    user_id UUID REFERENCES auth.users(id),
    action_id UUID NOT NULL REFERENCES library_actions(id),
    challenge_id UUID REFERENCES library_challenges(id),
    goal_id UUID REFERENCES library_goals(id),
    status VARCHAR(30) NOT NULL CHECK (status IN ('suggested', 'accepted', 'in_progress', 'completed', 'abandoned', 'failed')),
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    results_summary TEXT,
    kpi_before JSONB,
    kpi_after JSONB,
    effectiveness_rating INT CHECK (effectiveness_rating BETWEEN 1 AND 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_user_action_org ON user_action_history(organization_id);
CREATE INDEX idx_user_action_user ON user_action_history(user_id);
CREATE INDEX idx_user_action_action ON user_action_history(action_id);
CREATE INDEX idx_user_action_status ON user_action_history(status);
CREATE INDEX idx_user_action_created ON user_action_history(created_at);

-- RLS para user_action_history (temporariamente desabilitado - requer tabela organizations)
-- ALTER TABLE user_action_history ENABLE ROW LEVEL SECURITY;
-- 
-- CREATE POLICY user_action_history_org_isolation ON user_action_history
--     FOR ALL
--     USING (organization_id IN (
--         SELECT organization_id FROM organization_members 
--         WHERE user_id = auth.uid()
--     ));

-- =====================================================
-- 6. VIEW: kpi_progress_calculation (Motor de Deltas)
-- Calcula progresso relativo com regras de qualificação
-- =====================================================

CREATE OR REPLACE VIEW kpi_progress_calculation AS
WITH kpi_measurements AS (
    SELECT 
        um.organization_id,
        um.kpi_code,
        um.value as current_value,
        um.reference_period,
        LAG(um.value) OVER (PARTITION BY um.organization_id, um.kpi_code ORDER BY um.reference_period) as previous_value,
        kml.benchmark_target as target_value,
        um.created_at
    FROM user_metrics um
    JOIN kpi_master_library kml ON um.kpi_code = kml.code
)
SELECT 
    organization_id,
    kpi_code,
    current_value as v1,
    previous_value as v0,
    target_value as t,
    CASE 
        WHEN previous_value IS NULL OR target_value IS NULL THEN 'INSUFFICIENT_DATA'
        WHEN previous_value = target_value THEN 'ALREADY_AT_TARGET'
        WHEN (current_value - previous_value) / NULLIF((target_value - previous_value), 0) > 0.80 THEN 'HIGH_PROGRESS'
        WHEN (current_value - previous_value) / NULLIF(previous_value, 0) > 0.15 THEN 'HIGH_PROGRESS'
        WHEN (current_value - previous_value) / NULLIF(previous_value, 0) BETWEEN 0.01 AND 0.10 THEN 'LOW_PROGRESS'
        WHEN ABS(current_value - previous_value) / NULLIF(previous_value, 0) <= 0.01 THEN 'STABLE'
        WHEN (current_value - previous_value) / NULLIF(previous_value, 0) BETWEEN -0.10 AND -0.01 THEN 'LOW_DECLINE'
        WHEN (current_value - previous_value) / NULLIF(previous_value, 0) < -0.10 THEN 'HIGH_DECLINE'
        ELSE 'CALCULATION_ERROR'
    END as progress_status,
    CASE 
        WHEN previous_value IS NULL OR target_value IS NULL OR previous_value = 0 THEN NULL
        ELSE ROUND(((current_value - previous_value) / (target_value - previous_value))::numeric, 2)
    END as progress_percentage,
    CASE 
        WHEN previous_value IS NULL OR previous_value = 0 THEN NULL
        ELSE ROUND(((current_value - previous_value) / previous_value * 100)::numeric, 2)
    END as relative_change_percentage,
    created_at
FROM kpi_measurements;

-- =====================================================
-- 7. FUNÇÃO: get_recommended_actions_for_challenge
-- Retorna as 3 melhores ações para um desafio
-- =====================================================

CREATE OR REPLACE FUNCTION get_recommended_actions_for_challenge(
    p_challenge_id UUID,
    p_organization_id UUID DEFAULT NULL
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
        lcm.priority,
        la.estimated_effort_hours,
        la.quick_win
    FROM lever_challenge_mapping lcm
    JOIN library_levers ll ON lcm.lever_id = ll.id
    JOIN library_actions la ON la.lever_id = ll.id
    WHERE lcm.challenge_id = p_challenge_id
      AND ll.is_active = true
      AND la.is_active = true
    ORDER BY lcm.priority, la.priority_score
    LIMIT 3;
END;
$$ LANGUAGE plpgsql STABLE;

-- =====================================================
-- 8. FUNÇÃO: record_action_suggestion
-- Registra sugestão de ação no histórico (Blueprint)
-- =====================================================

CREATE OR REPLACE FUNCTION record_action_suggestion(
    p_organization_id UUID,
    p_user_id UUID,
    p_action_id UUID,
    p_challenge_id UUID,
    p_goal_id UUID
)
RETURNS UUID AS $$
DECLARE
    v_record_id UUID;
BEGIN
    INSERT INTO user_action_history (
        organization_id,
        user_id,
        action_id,
        challenge_id,
        goal_id,
        status,
        created_at
    ) VALUES (
        p_organization_id,
        p_user_id,
        p_action_id,
        p_challenge_id,
        p_goal_id,
        'suggested',
        NOW()
    )
    RETURNING id INTO v_record_id;
    
    RETURN v_record_id;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- VALIDAÇÃO: Verificar estrutura criada
-- =====================================================

SELECT 'TABELAS CRIADAS COM SUCESSO' as status;

SELECT 
    table_name,
    'CRIADA' as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('library_levers', 'library_actions', 'lever_challenge_mapping', 'lever_goal_mapping', 'user_action_history');
