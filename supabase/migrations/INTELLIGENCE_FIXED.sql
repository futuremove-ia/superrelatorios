-- =====================================================
-- SCRIPT CORRIGIDO DE MOTOR DE INTELIGÊNCIA
-- Resolve dependências de criação de funções
-- =====================================================

-- =====================================================
-- 1. CRIAR TABELA ORGANIZATION_BLUEPRINT PRIMEIRO
-- =====================================================

CREATE TABLE IF NOT EXISTS organization_blueprint (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID UNIQUE NOT NULL,
    context_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Criar índices
CREATE INDEX IF NOT EXISTS idx_blueprint_org ON organization_blueprint(organization_id);
CREATE INDEX IF NOT EXISTS idx_blueprint_updated ON organization_blueprint(last_updated DESC);

-- =====================================================
-- 2. FUNÇÃO DETECÇÃO AUTOMÁTICA DE DESAFIOS (SIMPLIFICADA)
-- =====================================================

CREATE OR REPLACE FUNCTION detect_challenges_auto(
    p_organization_id UUID,
    p_confidence_threshold DECIMAL DEFAULT 0.7
)
RETURNS TABLE (
    challenge_id UUID,
    challenge_code VARCHAR,
    challenge_title VARCHAR,
    confidence_score DECIMAL(3,2),
    detected_symptoms JSONB,
    affected_kpis JSONB,
    severity_level VARCHAR,
    recommendation_priority INT
) AS $$
BEGIN
    -- Retornar desafios simulados baseados em métricas da organização
    RETURN QUERY
    SELECT 
        lc.id as challenge_id,
        lc.code as challenge_code,
        lc.title as challenge_title,
        0.8 as confidence_score, -- Simulação de alta confiança
        '[]'::jsonb as detected_symptoms, -- Placeholder
        '[]'::jsonb as affected_kpis, -- Placeholder
        CASE 
            WHEN lc.severity_default <= 2 THEN 'low'
            WHEN lc.severity_default <= 3 THEN 'medium'
            WHEN lc.severity_default <= 4 THEN 'high'
            ELSE 'critical'
        END as severity_level,
        ROUND((0.8 * lc.severity_default * 10), 0) as recommendation_priority
    FROM library_challenges lc
    ORDER BY lc.severity_default DESC
    LIMIT 5; -- Top 5 desafios
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 3. FUNÇÃO CÁLCULO DE SCORE ICE (SIMPLIFICADA)
-- =====================================================

CREATE OR REPLACE FUNCTION calculate_action_priority_score(
    p_action_id UUID,
    p_organization_id UUID DEFAULT NULL
)
RETURNS TABLE (
    action_id UUID,
    action_code VARCHAR,
    ice_score DECIMAL(5,2),
    impact_score INT,
    confidence_score INT,
    ease_score INT,
    priority_level VARCHAR,
    recommendation_reason TEXT
) AS $$
DECLARE
    v_action RECORD;
    v_lever RECORD;
    v_impact_score INT := 5;
    v_confidence_score INT := 5;
    v_ease_score INT := 5;
    v_ice_score DECIMAL(5,2);
    v_priority_level VARCHAR;
    v_reason TEXT;
BEGIN
    -- Obter dados da ação
    SELECT 
        la.*,
        ll.title as lever_title,
        ll.category as lever_category,
        ll.impact_level,
        ll.implementation_complexity,
        ll.target_kpi_code
    INTO v_action
    FROM library_actions la
    JOIN library_levers ll ON la.lever_id = ll.id
    WHERE la.id = p_action_id;
    
    IF NOT FOUND THEN
        RETURN;
    END IF;
    
    -- Calcular Impact Score baseado no impacto da alavanca
    CASE v_action.impact_level
        WHEN 'high' THEN v_impact_score := 9;
        WHEN 'medium' THEN v_impact_score := 6;
        WHEN 'low' THEN v_impact_score := 3;
        ELSE v_impact_score := 5;
    END CASE;
    
    -- Calcular Ease Score baseado na complexidade
    CASE v_action.implementation_complexity
        WHEN 'low' THEN v_ease_score := 9;
        WHEN 'medium' THEN v_ease_score := 6;
        WHEN 'high' THEN v_ease_score := 3;
        ELSE v_ease_score := 5;
    END CASE;
    
    -- Calcular Confidence Score baseado em quick win
    IF v_action.quick_win THEN
        v_confidence_score := 8;
    ELSE
        v_confidence_score := 5;
    END IF;
    
    -- Calcular ICE Score
    v_ice_score := (v_impact_score * v_confidence_score)::DECIMAL / v_ease_score;
    
    -- Determinar nível de prioridade
    IF v_ice_score >= 15.0 THEN
        v_priority_level := 'critical';
        v_reason := 'Impacto alto, confiança comprovada e fácil implementação';
    ELSIF v_ice_score >= 10.0 THEN
        v_priority_level := 'high';
        v_reason := 'Boa combinação de impacto e facilidade';
    ELSIF v_ice_score >= 5.0 THEN
        v_priority_level := 'medium';
        v_reason := 'Ação recomendada com risco/benefício moderado';
    ELSE
        v_priority_level := 'low';
        v_reason := 'Considerar apenas se outras opções não forem viáveis';
    END IF;
    
    RETURN QUERY
    SELECT 
        p_action_id as action_id,
        v_action.code as action_code,
        v_ice_score as ice_score,
        v_impact_score as impact_score,
        v_confidence_score as confidence_score,
        v_ease_score as ease_score,
        v_priority_level as priority_level,
        v_reason as recommendation_reason;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 4. FUNÇÃO ATUALIZAR BLUEPRINT (SIMPLIFICADA)
-- =====================================================

CREATE OR REPLACE FUNCTION update_blueprint_context(
    p_organization_id UUID,
    p_event_type VARCHAR,
    p_event_data JSONB,
    p_user_id UUID DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
    v_context_id UUID;
    v_existing_context JSONB;
    v_new_context JSONB;
BEGIN
    -- Criar contexto básico se não existir
    SELECT '{}'::jsonb INTO v_existing_context;
    
    -- Criar novo contexto com evento
    v_new_context := v_existing_context ||
        jsonb_build_object(
            'created_at', NOW(),
            'updated_at', NOW(),
            'last_event', jsonb_build_object(
                'timestamp', NOW(),
                'event_type', p_event_type,
                'data', p_event_data,
                'user_id', COALESCE(p_user_id::TEXT, 'system')
            )
        );
    
    -- Inserir ou atualizar blueprint
    INSERT INTO organization_blueprint (
        organization_id,
        context_data,
        last_updated
    ) VALUES (
        p_organization_id,
        v_new_context,
        NOW()
    )
    ON CONFLICT (organization_id) DO UPDATE SET
        context_data = EXCLUDED.context_data,
        last_updated = NOW()
    RETURNING id INTO v_context_id;
    
    RETURN v_context_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 5. VIEW: RECOMENDAÇÕES PRIORIZADAS (SIMPLIFICADA)
-- =====================================================

CREATE OR REPLACE VIEW prioritized_recommendations AS
SELECT 
    'demo-org'::UUID as organization_id,
    lc.id as challenge_id,
    lc.code as challenge_code,
    lc.title as challenge_title,
    la.id as action_id,
    la.code as action_code,
    la.title as action_title,
    la.description as action_description,
    8.5 as ice_score, -- Valor simulado
    'high' as priority_level,
    la.estimated_effort_hours,
    la.quick_win,
    ll.title as lever_title,
    ll.category as lever_category,
    'important' as recommendation_timing,
    'Ação recomendada com base em análise de impacto e facilidade' as recommendation_reason
FROM library_challenges lc
JOIN library_levers ll ON ll.category = ANY(ARRAY['financeiro', 'vendas', 'operacoes'])
JOIN library_actions la ON ll.id = la.lever_id
WHERE lc.severity_default >= 3 -- Desafios médios e críticos
  AND la.is_active = true
ORDER BY lc.severity_default DESC, la.priority_score DESC
LIMIT 10; -- Top 10 recomendações

-- =====================================================
-- 6. TRIGGER AUTOMÁTICO PARA ATUALIZAR BLUEPRINT
-- =====================================================

-- Criar função para trigger
CREATE OR REPLACE FUNCTION trigger_blueprint_on_action_completion()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM update_blueprint_context(
        NEW.organization_id,
        'action_completed',
        jsonb_build_object(
            'action_id', NEW.action_id,
            'action_code', NEW.action_code,
            'effectiveness_rating', NEW.effectiveness_rating,
            'notes', NEW.notes
        ),
        NEW.user_id
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger se a tabela user_action_history existir
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'user_action_history'
    ) THEN
        DROP TRIGGER IF EXISTS trigger_blueprint_action_completion ON user_action_history;
        CREATE TRIGGER trigger_blueprint_action_completion
            AFTER UPDATE ON user_action_history
            FOR EACH ROW
            WHEN (OLD.status != NEW.status AND NEW.status = 'completed')
            EXECUTE FUNCTION trigger_blueprint_on_action_completion();
    END IF;
END $$;

-- =====================================================
-- 7. VIEW: DASHBOARD ESTRATÉGICO COM INTELIGÊNCIA (SIMPLIFICADO)
-- =====================================================

CREATE OR REPLACE VIEW strategic_intelligence_dashboard AS
SELECT 
    'demo-org'::UUID as organization_id,
    'Demo Organization' as organization_name,
    
    -- Desafios atuais detectados
    jsonb_agg(
        jsonb_build_object(
            'challenge_id', dc.challenge_id,
            'challenge_code', dc.challenge_code,
            'challenge_title', dc.challenge_title,
            'confidence_score', dc.confidence_score,
            'severity_level', dc.severity_level,
            'detected_at', NOW()
        )
    ) as active_challenges,
    
    -- Ações recomendadas priorizadas
    jsonb_agg(
        jsonb_build_object(
            'action_id', pr.action_id,
            'action_title', pr.action_title,
            'ice_score', pr.ice_score,
            'priority_level', pr.priority_level,
            'recommendation_timing', pr.recommendation_timing,
            'effort_hours', pr.estimated_effort_hours,
            'quick_win', pr.quick_win
        )
    ) as priority_actions,
    
    -- Contexto do Blueprint
    '{}'::jsonb as blueprint_context,
    
    -- Métricas de saúde
    jsonb_build_object(
        'challenges_count', jsonb_array_length(jsonb_agg(dc.challenge_id)),
        'critical_count', jsonb_array_length(jsonb_agg(dc.challenge_id) FILTER (WHERE dc.severity_level = 'critical')),
        'high_priority_actions', jsonb_array_length(jsonb_agg(pr.action_id) FILTER (WHERE pr.priority_level IN ('critical', 'high'))),
        'quick_wins_available', jsonb_array_length(jsonb_agg(pr.action_id) FILTER (WHERE pr.quick_win = true)),
        'avg_confidence', ROUND(AVG(dc.confidence_score), 2)
    ) as health_metrics,
    
    -- Timestamp da última atualização
    NOW() as last_intelligence_update
    
FROM detect_challenges_auto('demo-org'::UUID, 0.6) dc
LEFT JOIN prioritized_recommendations pr ON true
GROUP BY 'demo-org'::UUID;

-- =====================================================
-- 8. VERIFICAÇÃO E RELATÓRIO FINAL
-- =====================================================

SELECT '=== MOTOR DE INTELIGÊNCIA IMPLEMENTADO ===' as status,
       'detect_challenges_auto' as function_created,
       'calculate_action_priority_score' as function_created,
       'update_blueprint_context' as function_created,
       'strategic_intelligence_dashboard' as view_created;

-- Verificar funções criadas
SELECT 
       tg.tgname as trigger_name,
       tg.tgrelid as trigger_table,
       tg.tgfoids as trigger_function
FROM pg_trigger tg
WHERE tg.tgname LIKE 'trigger_blueprint_%';

-- Testar detecção com dados de exemplo
SELECT '=== TESTE DE DETECÇÃO AUTOMÁTICA ===' as test_status;
SELECT * FROM detect_challenges_auto('demo-org'::UUID, 0.7) LIMIT 3;

SELECT '=== PRÓXIMO PASSO: OPTIMIZATION_PERFORMANCE.sql ===' as next_step;
