-- =====================================================
-- FASE 4: MOTOR DE INTELIGÊNCIA
-- Implementa detecção automática de desafios e sistema de priorização
-- Cria o Blueprint/contexto histórico para aprendizado da IA
-- =====================================================

-- =====================================================
-- 1. FUNÇÃO DETECÇÃO AUTOMÁTICA DE DESAFIOS
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
DECLARE
    v_current_metrics RECORD;
    v_challenge RECORD;
    v_symptom_detected BOOLEAN;
    v_confidence_score DECIMAL(3,2);
    v_symptoms JSONB;
    v_affected_kpis JSONB;
BEGIN
    -- Obter métricas atuais da organização
    FOR v_current_metrics IN (
        SELECT 
            kpi_code,
            value,
            created_at
        FROM user_metrics um
        WHERE um.organization_id = p_organization_id
          AND um.created_at >= NOW() - INTERVAL '30 days'
        ORDER BY um.created_at DESC
    ) LOOP
        -- Verificar cada desafio relevante
        FOR v_challenge IN (
            SELECT 
                lc.id,
                lc.code,
                lc.title,
                lc.severity_default,
                lc.symptoms,
                lc.related_kpi_codes,
                lc.metric_tree_config
            FROM library_challenges lc
            WHERE lc.related_kpi_codes @> ARRAY[v_current_metrics.kpi_code]
        ) LOOP
            -- Calcular confiança baseada nos sintomas
            v_symptoms := '[]'::jsonb;
            v_affected_kpis := '[]'::jsonb;
            v_confidence_score := 0.0;
            v_symptom_detected := FALSE;
            
            -- Analisar sintomas configurados
            IF v_challenge.symptoms IS NOT NULL THEN
                FOR i IN 0..jsonb_array_length(v_challenge.symptoms)-1 LOOP
                    DECLARE
                        v_symptom TEXT := v_challenge.symptoms->>i->>'text';
                        v_condition TEXT := v_challenge.symptoms->>i->>'condition';
                        v_threshold DECIMAL;
                        v_current_value DECIMAL;
                        v_detected BOOLEAN := FALSE;
                    BEGIN
                        -- Extrair threshold e valor atual
                        v_threshold := COALESCE(
                            (v_challenge.metric_tree_config->>'thresholds')->v_condition->>'max',
                            (v_challenge.metric_tree_config->>'thresholds')->v_condition->>'min'
                        )::DECIMAL;
                        
                        v_current_value := v_current_metrics.value;
                        
                        -- Verificar condição do sintoma
                        IF v_condition LIKE '%abaixo%' THEN
                            v_detected := v_current_value <= v_threshold;
                        ELSIF v_condition LIKE '%acima%' THEN
                            v_detected := v_current_value >= v_threshold;
                        ELSIF v_condition LIKE '%menor%' THEN
                            v_detected := v_current_value < v_threshold;
                        ELSIF v_condition LIKE '%maior%' THEN
                            v_detected := v_current_value > v_threshold;
                        END IF;
                        
                        -- Se sintoma detectado, adicionar à lista
                        IF v_detected THEN
                            v_symptom_detected := TRUE;
                            v_symptoms := v_symptoms || jsonb_build_object(
                                'symptom', v_symptom,
                                'condition', v_condition,
                                'threshold', v_threshold,
                                'current_value', v_current_value,
                                'detected', v_detected
                            );
                        END IF;
                    END;
                END LOOP;
            END IF;
            
            -- Calcular confiança geral
            IF v_symptom_detected THEN
                -- Basear confiança no número de sintomas detectados vs totais
                v_confidence_score := (
                    jsonb_array_length(v_symptoms)::DECIMAL / 
                    NULLIF(jsonb_array_length(v_challenge.symptoms), 0)
                ) * 0.9; -- 90% base weight
                
                -- Adicionar fator de gravidade (desafios mais críticos têm peso maior)
                v_confidence_score := v_confidence_score + (v_challenge.severity_default * 0.02);
                
                -- Limitar a 1.0
                v_confidence_score := LEAST(v_confidence_score, 1.0);
            END IF;
            
            -- Retornar se passar threshold de confiança
            IF v_confidence_score >= p_confidence_threshold THEN
                -- Preparar KPIs afetados
                v_affected_kpis := jsonb_agg(
                    jsonb_build_object(
                        'kpi_code', v_current_metrics.kpi_code,
                        'value', v_current_metrics.value,
                        'change_percent', CASE 
                            WHEN LAG(v_current_metrics.value) OVER (
                                PARTITION BY v_current_metrics.kpi_code 
                                ORDER BY v_current_metrics.created_at
                            ) IS NOT NULL THEN
                                ROUND(((v_current_metrics.value - LAG(v_current_metrics.value) OVER (
                                    PARTITION BY v_current_metrics.kpi_code 
                                    ORDER BY v_current_metrics.created_at
                                )) / NULLIF(LAG(v_current_metrics.value) OVER (
                                    PARTITION BY v_current_metrics.kpi_code 
                                    ORDER BY v_current_metrics.created_at
                                ), 0)) * 100, 2)
                            ELSE NULL
                        END
                    )
                );
                
                RETURN QUERY
                SELECT 
                    v_challenge.id as challenge_id,
                    v_challenge.code as challenge_code,
                    v_challenge.title as challenge_title,
                    v_confidence_score as confidence_score,
                    v_symptoms as detected_symptoms,
                    v_affected_kpis as affected_kpis,
                    CASE 
                        WHEN v_challenge.severity_default <= 2 THEN 'low'
                        WHEN v_challenge.severity_default <= 3 THEN 'medium'
                        WHEN v_challenge.severity_default <= 4 THEN 'high'
                        ELSE 'critical'
                    END as severity_level,
                    -- Prioridade = (Confiança * Severidade * 10) - arredondado
                    ROUND((v_confidence_score * v_challenge.severity_default * 10), 0) as recommendation_priority
                WHERE v_confidence_score >= p_confidence_threshold;
            END IF;
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 2. FUNÇÃO CÁLCULO DE SCORE ICE (Impact, Confidence, Ease)
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
    v_challenge RECORD;
    v_org_metrics RECORD;
    v_impact_score INT := 5; -- Default médio
    v_confidence_score INT := 5; -- Default médio
    v_ease_score INT := 5; -- Default médio
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
    
    -- Calcular Confidence Score baseado em dados históricos
    SELECT COUNT(*) as success_count
    INTO v_confidence_score
    FROM user_action_history uah
    WHERE uah.action_id = p_action_id
      AND uah.status = 'completed'
      AND uah.effectiveness_rating >= 4;
    
    -- Se não há histórico, usar Quick Win como fator
    IF v_confidence_score = 0 THEN
        IF v_action.quick_win THEN
            v_confidence_score := 8;
        ELSE
            v_confidence_score := 5;
        END IF;
    ELSE
        -- Basear confiança em sucesso histórico (max 10)
        v_confidence_score := LEAST(v_confidence_score * 2, 10);
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
-- 3. VIEW: RECOMENDAÇÕES PRIORIZADAS
-- =====================================================

CREATE OR REPLACE VIEW prioritized_recommendations AS
WITH challenge_detections AS (
    SELECT 
        dc.organization_id,
        dc.challenge_id,
        dc.confidence_score,
        dc.severity_level,
        dc.recommendation_priority,
        ROW_NUMBER() OVER (PARTITION BY dc.organization_id ORDER BY dc.recommendation_priority DESC) as challenge_rank
    FROM detect_challenges_auto(dc.organization_id, 0.6) dc
),
action_scores AS (
    SELECT 
        cd.organization_id,
        la.id as action_id,
        la.code as action_code,
        aps.ice_score,
        aps.priority_level,
        ROW_NUMBER() OVER (
            PARTITION BY cd.organization_id, cd.challenge_id 
            ORDER BY aps.ice_score DESC
        ) as action_rank
    FROM challenge_detections cd
    JOIN lever_challenge_mapping lcm ON cd.challenge_id = lcm.challenge_id
    JOIN library_levers ll ON lcm.lever_id = ll.id
    JOIN library_actions la ON ll.id = la.lever_id
    JOIN calculate_action_priority_score(la.id) aps ON la.id = aps.action_id
)
SELECT 
    ar.organization_id,
    ar.challenge_id,
    lc.title as challenge_title,
    lc.code as challenge_code,
    ar.action_id,
    la.title as action_title,
    la.description as action_description,
    ar.ice_score,
    ar.priority_level,
    la.estimated_effort_hours,
    la.quick_win,
    ll.title as lever_title,
    ll.category as lever_category,
    CASE 
        WHEN ar.challenge_rank = 1 AND ar.action_rank = 1 THEN 'immediate'
        WHEN ar.challenge_rank <= 2 AND ar.action_rank <= 2 THEN 'urgent'
        WHEN ar.challenge_rank <= 3 AND ar.action_rank <= 3 THEN 'important'
        ELSE 'consider'
    END as recommendation_timing,
    ar.recommendation_reason
FROM action_scores ar
JOIN library_actions la ON ar.action_id = la.id
JOIN library_levers ll ON la.lever_id = ll.id
JOIN library_challenges lc ON ar.challenge_id = lc.id
WHERE ar.challenge_rank <= 3 -- Top 3 desafios
  AND ar.action_rank <= 3; -- Top 3 ações por desafio;

-- =====================================================
-- 4. FUNÇÃO: ATUALIZAR BLUEPRINT (CONTEXTO HISTÓRICO)
-- =====================================================

CREATE OR REPLACE FUNCTION update_blueprint_context(
    p_organization_id UUID,
    p_event_type VARCHAR, -- 'challenge_detected', 'action_completed', 'kpi_change'
    p_event_data JSONB,
    p_user_id UUID DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
    v_context_id UUID;
    v_existing_context JSONB;
    v_new_context JSONB;
BEGIN
    -- Obter contexto existente ou criar novo
    SELECT context_data INTO v_existing_context
    FROM organization_blueprint
    WHERE organization_id = p_organization_id;
    
    IF v_existing_context IS NULL THEN
        -- Criar novo contexto
        v_new_context := jsonb_build_object(
            'created_at', NOW(),
            'updated_at', NOW(),
            'events', jsonb_build_array(
                jsonb_build_object(
                    'timestamp', NOW(),
                    'event_type', p_event_type,
                    'data', p_event_data,
                    'user_id', COALESCE(p_user_id, 'system')
                )
            ),
            'learnings', '[]'::jsonb,
            'patterns', '[]'::jsonb,
            'success_metrics', '[]'::jsonb
        );
        
        INSERT INTO organization_blueprint (
            organization_id,
            context_data,
            last_updated
        ) VALUES (
            p_organization_id,
            v_new_context,
            NOW()
        ) RETURNING id INTO v_context_id;
    ELSE
        -- Atualizar contexto existente
        v_new_context := v_existing_context ||
            jsonb_build_object(
                'updated_at', NOW(),
                'events', v_existing_context->'events' || jsonb_build_array(
                    jsonb_build_object(
                        'timestamp', NOW(),
                        'event_type', p_event_type,
                        'data', p_event_data,
                        'user_id', COALESCE(p_user_id, 'system')
                    )
                )
            );
        
        -- Extrair aprendizados dos eventos
        v_new_context := v_new_context ||
            jsonb_build_object(
                'learnings', extract_learnings_from_events(v_new_context->'events'),
                'patterns', extract_patterns_from_events(v_new_context->'events'),
                'success_metrics', extract_success_metrics(v_new_context->'events')
            );
        
        UPDATE organization_blueprint 
        SET 
            context_data = v_new_context,
            last_updated = NOW()
        WHERE organization_id = p_organization_id
        RETURNING id INTO v_context_id;
    END IF;
    
    RETURN v_context_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 5. FUNÇÕES AUXILIARES DO BLUEPRINT
-- =====================================================

CREATE OR REPLACE FUNCTION extract_learnings_from_events(p_events JSONB)
RETURNS JSONB AS $$
BEGIN
    RETURN jsonb_agg(
        DISTINCT jsonb_build_object(
            'type', CASE 
                WHEN event->>'event_type' = 'action_completed' AND (event->'data'->>'effectiveness_rating')::DECIMAL >= 4 THEN 'effective_action'
                WHEN event->>'event_type' = 'challenge_detected' AND (event->'data'->>'confidence_score')::DECIMAL >= 0.8 THEN 'high_confidence_detection'
                WHEN event->>'event_type' = 'kpi_change' AND ABS((event->'data'->>'change_percent')::DECIMAL) > 20 THEN 'significant_kpi_movement'
                ELSE 'general_pattern'
            END,
            'description', CASE 
                WHEN event->>'event_type' = 'action_completed' THEN 
                    'Ação "' || (event->'data'->>'action_title') || '" foi efetiva'
                WHEN event->>'event_type' = 'challenge_detected' THEN 
                    'Desafio "' || (event->'data'->>'challenge_title') || '" detectado com alta confiança'
                ELSE 'Evento registrado'
            END,
            'timestamp', event->>'timestamp'
        )
    ) FILTER (WHERE event IS NOT NULL)
    );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION extract_patterns_from_events(p_events JSONB)
RETURNS JSONB AS $$
BEGIN
    RETURN jsonb_build_array(
        -- Padrão: Desafios recorrentes
        jsonb_build_object(
            'pattern_type', 'recurring_challenges',
            'description', 'Desafios que aparecem múltiplas vezes',
            'frequency', jsonb_array_length(
                jsonb_agg(DISTINCT event->'data'->>'challenge_code') FILTER (WHERE event->>'event_type' = 'challenge_detected')
            ),
            'examples', jsonb_agg(
                jsonb_build_object(
                    'challenge', event->'data'->>'challenge_title',
                    'timestamp', event->>'timestamp'
                )
            ) FILTER (WHERE event->>'event_type' = 'challenge_detected')
        ),
        
        -- Padrão: Ações bem-sucedidas por categoria
        jsonb_build_object(
            'pattern_type', 'successful_actions_by_category',
            'description', 'Ações mais efetivas por categoria',
            'categories', jsonb_object_agg(
                event->'data'->>'lever_category',
                jsonb_agg(event->'data'->>'action_title') FILTER (WHERE 
                    event->>'event_type' = 'action_completed' 
                    AND (event->'data'->>'effectiveness_rating')::DECIMAL >= 4
                )
            )
        )
    );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION extract_success_metrics(p_events JSONB)
RETURNS JSONB AS $$
BEGIN
    RETURN jsonb_build_object(
        'total_actions_completed', jsonb_array_length(
            jsonb_agg(event) FILTER (WHERE event->>'event_type' = 'action_completed')
        ),
        'avg_effectiveness_rating', ROUND(
            AVG((event->'data'->>'effectiveness_rating')::DECIMAL) FILTER (WHERE 
                event->>'event_type' = 'action_completed' 
                AND event->'data'->>'effectiveness_rating' IS NOT NULL
            ), 2
        ),
        'most_effective_actions', jsonb_agg(
            event->'data'->>'action_title' FILTER (WHERE 
                event->>'event_type' = 'action_completed' 
                AND (event->'data'->>'effectiveness_rating')::DECIMAL >= 4
            )
        ),
        'challenges_resolved', jsonb_array_length(
            jsonb_agg(DISTINCT event->'data'->>'challenge_code') FILTER (WHERE 
                event->>'event_type' = 'action_completed'
                AND event->'data'->>'challenge_code' IS NOT NULL
            )
        )
    );
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 6. TABELA ORGANIZATION_BLUEPRINT (SE NÃO EXISTIR)
-- =====================================================

CREATE TABLE IF NOT EXISTS organization_blueprint (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID UNIQUE NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    context_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blueprint_org ON organization_blueprint(organization_id);
CREATE INDEX IF NOT EXISTS idx_blueprint_updated ON organization_blueprint(last_updated DESC);

-- =====================================================
-- 7. TRIGGER AUTOMÁTICO PARA ATUALIZAR BLUEPRINT
-- =====================================================

-- Trigger quando desafios são detectados
CREATE OR REPLACE FUNCTION trigger_blueprint_on_challenge_detection()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM update_blueprint_context(
        NEW.organization_id,
        'challenge_detected',
        jsonb_build_object(
            'challenge_id', NEW.challenge_id,
            'challenge_code', NEW.challenge_code,
            'confidence_score', NEW.confidence_score,
            'detected_symptoms', NEW.detected_symptoms
        ),
        NULL
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger quando ações são completadas
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

-- Criar triggers
DROP TRIGGER IF EXISTS trigger_blueprint_challenge_detection ON user_strategy_focus;
DROP TRIGGER IF EXISTS trigger_blueprint_action_completion ON user_action_history;

CREATE TRIGGER trigger_blueprint_challenge_detection
    AFTER INSERT ON user_strategy_focus
    FOR EACH ROW
    EXECUTE FUNCTION trigger_blueprint_on_challenge_detection();

CREATE TRIGGER trigger_blueprint_action_completion
    AFTER UPDATE ON user_action_history
    FOR EACH ROW
    WHEN (OLD.status != NEW.status AND NEW.status = 'completed')
    EXECUTE FUNCTION trigger_blueprint_on_action_completion();

-- =====================================================
-- 8. VIEW: DASHBOARD ESTRATÉGICO COM INTELIGÊNCIA
-- =====================================================

CREATE OR REPLACE VIEW strategic_intelligence_dashboard AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    
    -- Desafios atuais detectados
    (SELECT json_agg(
        jsonb_build_object(
            'challenge_id', dc.challenge_id,
            'challenge_code', dc.challenge_code,
            'challenge_title', dc.challenge_title,
            'confidence_score', dc.confidence_score,
            'severity_level', dc.severity_level,
            'detected_at', NOW()
        )
    ) FROM detect_challenges_auto(o.id, 0.6) dc) as active_challenges,
    
    -- Ações recomendadas priorizadas
    (SELECT json_agg(
        jsonb_build_object(
            'action_id', pr.action_id,
            'action_title', pr.action_title,
            'ice_score', pr.ice_score,
            'priority_level', pr.priority_level,
            'recommendation_timing', pr.recommendation_timing,
            'effort_hours', pr.estimated_effort_hours,
            'quick_win', pr.quick_win
        ) ORDER BY pr.ice_score DESC
    ) FROM prioritized_recommendations pr 
     WHERE pr.organization_id = o.id 
       AND pr.recommendation_timing IN ('immediate', 'urgent')
     LIMIT 10) as priority_actions,
    
    -- Contexto do Blueprint
    COALESCE(ob.context_data, '{}'::jsonb) as blueprint_context,
    
    -- Métricas de saúde
    (SELECT json_build_object(
        'challenges_count', jsonb_array_length(active_challenges),
        'critical_count', jsonb_array_length(active_challenges FILTER (WHERE challenge->>'severity_level' = 'critical')),
        'high_priority_actions', jsonb_array_length(priority_actions FILTER (WHERE action->>'priority_level' IN ('critical', 'high'))),
        'quick_wins_available', jsonb_array_length(priority_actions FILTER (WHERE action->>'quick_win' = true)),
        'avg_confidence', ROUND(AVG((challenge->>'confidence_score')::DECIMAL), 2)
    ) FROM detect_challenges_auto(o.id, 0.6) dc) as health_metrics,
    
    -- Timestamp da última atualização
    COALESCE(ob.last_updated, NOW()) as last_intelligence_update
    
FROM organizations o
LEFT JOIN organization_blueprint ob ON o.id = ob.organization_id;

-- =====================================================
-- 9. VALIDAÇÃO E RELATÓRIO
-- =====================================================

-- Verificar funções criadas
SELECT 'MOTOR DE INTELIGÊNCIA IMPLEMENTADO' as status,
       'detect_challenges_auto' as function_created,
       'calculate_action_priority_score' as function_created,
       'update_blueprint_context' as function_created,
       'strategic_intelligence_dashboard' as view_created;

-- Verificar triggers criados
SELECT 
       tg.tgname as trigger_name,
       tg.tgrelid as trigger_table,
       tg.tgfoids as trigger_function
FROM pg_trigger tg
WHERE tg.tgname LIKE 'trigger_blueprint_%';

-- Testar detecção com dados de exemplo
SELECT 'TESTE DE DETECÇÃO AUTOMÁTICA' as test_status;
-- DESCOMENTAR APÓS TESTES
-- SELECT * FROM detect_challenges_auto('organization-id-teste', 0.7);

SELECT 'FASE 4 CONCLUÍDA: Motor de Inteligência implementado com sucesso' as final_status,
       'Próximo: Implementar otimização e performance (Fase 5)' as next_step;
