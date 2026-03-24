-- =====================================================
-- LÓGICA DE PROGRESSO AUTOMÁTICO FILE-TO-FILE
-- Motor de Deltas Qualitativos com Vetor de Tendência
-- =====================================================

-- Função principal com Vetor de Tendência Qualitativo
CREATE OR REPLACE FUNCTION calculate_file_to_file_progress(
    p_focus_id UUID,
    p_current_report_id UUID
) RETURNS JSONB AS $$
DECLARE
    v_result JSONB;
    v_challenge_code TEXT;
    v_goal_target_type TEXT;
    v_main_kpi TEXT;
    v_target_value DECIMAL;
    v_current_value DECIMAL;
    v_previous_value DECIMAL;
    v_baseline_value DECIMAL;
    v_progress_percentage DECIMAL(5,2);
    v_delta_percentage DECIMAL(5,2);
    v_trend_direction TEXT;
    v_trend_strength TEXT;
    v_urgency_level TEXT;
    v_visual_status TEXT;
    v_system_narrative TEXT;
    v_suggested_action TEXT;
    v_periods_considered INT;
BEGIN
    -- Obter configuração do desafio
    SELECT 
        lc.code,
        lg.target_type,
        lc.metric_tree_config->>'main_kpi'
    INTO 
        v_challenge_code,
        v_goal_target_type,
        v_main_kpi
    FROM user_strategy_focus usf
    JOIN library_challenges lc ON usf.challenge_id = lc.id
    JOIN library_goals lg ON usf.goal_id = lg.id
    WHERE usf.id = p_focus_id;
    
    -- Obter valor atual do relatório
    SELECT COALESCE(value, 0) INTO v_current_value
    FROM user_metrics
    WHERE report_id = p_current_report_id AND kpi_code = v_main_kpi;
    
    -- Obter valor anterior (último relatório)
    SELECT COALESCE(value, 0) INTO v_previous_value
    FROM user_metrics um
    JOIN reports r ON um.report_id = r.id
    WHERE um.organization_id = (SELECT organization_id FROM user_strategy_focus WHERE id = p_focus_id)
      AND um.kpi_code = v_main_kpi
      AND r.id != p_current_report_id
    ORDER BY r.created_at DESC
    LIMIT 1;
    
    -- Obter valor base (3 relatórios atrás para tendência)
    SELECT COALESCE(value, 0) INTO v_baseline_value
    FROM user_metrics um
    JOIN reports r ON um.report_id = r.id
    WHERE um.organization_id = (SELECT organization_id FROM user_strategy_focus WHERE id = p_focus_id)
      AND um.kpi_code = v_main_kpi
      AND r.id != p_current_report_id
    ORDER BY r.created_at DESC
    OFFSET 1 LIMIT 1;
    
    -- Calcular delta percentage
    IF v_previous_value = 0 THEN
        v_delta_percentage := 0;
    ELSIF v_goal_target_type = 'increase' THEN
        v_delta_percentage := ((v_current_value - v_previous_value) / v_previous_value) * 100;
    ELSIF v_goal_target_type = 'decrease' THEN
        v_delta_percentage := ((v_previous_value - v_current_value) / v_previous_value) * 100;
    ELSE -- maintain
        v_delta_percentage := 100 - ABS((v_current_value - v_previous_value) / v_previous_value * 100);
    END IF;
    
    -- =====================================================
    -- MOTOR DE DELTAS QUALITATIVOS (Vetor de Tendência)
    -- =====================================================
    
    -- Determinar status visual e narrativa baseada no delta
    IF v_delta_percentage > 25 THEN
        v_visual_status := '🟢 Estelar';
        v_system_narrative := 'Crescimento Exponencial: Acima da Meta.';
        v_suggested_action := 'Escalar/Replicar tática.';
        v_urgency_level := 'success';
    ELSIF v_delta_percentage > 5 THEN
        v_visual_status := '🟡 Atenção';
        v_system_narrative := 'Progresso Lento: Abaixo da velocidade necessária.';
        v_suggested_action := 'Revisar alavancas.';
        v_urgency_level := 'warning';
    ELSIF v_delta_percentage >= -5 THEN
        v_visual_status := '⚪ Estagnado';
        v_system_narrative := 'Inércia: Sem tração no período.';
        v_suggested_action := 'Provocar mudança.';
        v_urgency_level := 'warning';
    ELSIF v_delta_percentage >= -15 THEN
        v_visual_status := '🟠 Alerta';
        v_system_narrative := 'Declínio Leve: Desvio de rota detectado.';
        v_suggested_action := 'Ajuste corretivo.';
        v_urgency_level := 'danger';
    ELSE
        v_visual_status := '🔴 Crítico';
        v_system_narrative := 'Hemorragia: Impacto severo no indicador.';
        v_suggested_action := 'Intervenção imediata.';
        v_urgency_level := 'critical';
    END IF;
    
    -- Determinar força da tendência para contexto adicional
    IF ABS(v_delta_percentage) > 30 THEN
        v_trend_strength := 'MUITO FORTE';
    ELSIF ABS(v_delta_percentage) > 15 THEN
        v_trend_strength := 'FORTE';
    ELSIF ABS(v_delta_percentage) > 5 THEN
        v_trend_strength := 'MODERADO';
    ELSE
        v_trend_strength := 'FRACO';
    END IF;
    
    -- Calcular progresso acumulado (base vs atual)
    IF v_baseline_value = 0 THEN
        v_progress_percentage := 0;
    ELSIF v_goal_target_type = 'increase' THEN
        v_progress_percentage := LEAST(((v_current_value - v_baseline_value) / v_baseline_value) * 100, 100);
    ELSIF v_goal_target_type = 'decrease' THEN
        v_progress_percentage := LEAST(((v_baseline_value - v_current_value) / v_baseline_value) * 100, 100);
    ELSE -- maintain
        v_progress_percentage := 100 - LEAST(ABS((v_current_value - v_baseline_value) / v_baseline_value * 100), 100);
    END IF;
    
    -- Construir resultado JSON com Vetor de Tendência Completo
    v_result := jsonb_build_object(
        'progress_percentage', v_progress_percentage,
        'delta_percentage', v_delta_percentage,
        'visual_status', v_visual_status,
        'system_narrative', v_system_narrative,
        'suggested_action', v_suggested_action,
        'trend_strength', v_trend_strength,
        'urgency_level', v_urgency_level,
        'current_value', v_current_value,
        'previous_value', v_previous_value,
        'baseline_value', v_baseline_value,
        'main_kpi', v_main_kpi,
        'target_type', v_goal_target_type,
        'calculated_at', NOW()
    );
    
    -- Atualizar foco estratégico
    UPDATE user_strategy_focus 
    SET 
        progress_percentage = v_progress_percentage,
        last_calculated_at = NOW()
    WHERE id = p_focus_id;
    
    -- Inserir no histórico de progresso com vetor completo
    INSERT INTO progress_history (
        user_strategy_focus_id,
        report_id,
        progress_percentage,
        delta_from_previous,
        trend_direction,
        calculated_result
    ) VALUES (
        p_focus_id,
        p_current_report_id,
        v_progress_percentage,
        v_delta_percentage,
        CASE 
            WHEN v_delta_percentage > 5 THEN 'improving'
            WHEN v_delta_percentage < -5 THEN 'declining'
            ELSE 'stable'
        END,
        v_result
    );
    
    RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger automático melhorado
CREATE OR REPLACE FUNCTION trigger_auto_progress_calculation()
RETURNS trigger AS $$
DECLARE
    v_progress_result JSONB;
    v_focus_record RECORD;
BEGIN
    -- Para cada foco estratégico ativo da organização
    FOR v_focus_record IN 
        SELECT id, organization_id 
        FROM user_strategy_focus 
        WHERE organization_id = NEW.organization_id 
          AND status = 'active'
    LOOP
        -- Calcular progresso para este foco
        v_progress_result := calculate_file_to_file_progress(v_focus_record.id, NEW.report_id);
        
        -- Se detectar tendência negativa forte, poderia acionar alerta
        IF v_progress_result->>'trend_direction' = 'declining' 
           AND (v_progress_result->>'trend_strength') = 'strong' THEN
            
            -- Aqui poderia inserir em uma tabela de alertas
            INSERT INTO progress_history (
                user_strategy_focus_id,
                report_id,
                progress_percentage,
                delta_from_previous,
                trend_direction
            ) VALUES (
                v_focus_record.id,
                NEW.report_id,
                (v_progress_result->>'progress_percentage')::DECIMAL,
                (v_progress_result->>'delta_percentage')::DECIMAL,
                'ALERT_STRONG_DECLINE'
            );
        END IF;
    END LOOP;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recriar trigger
DROP TRIGGER IF EXISTS trigger_auto_update_progress ON user_metrics;
CREATE TRIGGER trigger_auto_progress_calculation
    AFTER INSERT ON user_metrics
    FOR EACH STATEMENT EXECUTE FUNCTION trigger_auto_progress_calculation();

-- =====================================================
-- FUNÇÕES DE ANÁLISE E DIAGNÓSTICO
-- =====================================================

-- Função para detectar automaticamente desafios baseados nas métricas
CREATE OR REPLACE FUNCTION detect_challenges_from_metrics(
    p_organization_id UUID,
    p_report_id UUID
) RETURNS TABLE(
    challenge_code TEXT,
    confidence_score DECIMAL(3,2),
    detected_symptoms JSONB,
    recommendation TEXT
) AS $$
BEGIN
    RETURN QUERY
    WITH current_metrics AS (
        SELECT 
            um.kpi_code,
            um.value,
            kml.title as kpi_title,
            kml.domain,
            kml.unit
        FROM user_metrics um
        JOIN kpi_master_library kml ON um.kpi_code = kml.code
        WHERE um.organization_id = p_organization_id 
          AND um.report_id = p_report_id
    ),
    challenge_analysis AS (
        SELECT 
            lc.code as challenge_code,
            lc.title,
            lc.symptoms,
            lc.related_kpi_codes,
            lc.metric_tree_config,
            -- Calcular score de confiança baseado nos KPIs relacionados
            CASE 
                WHEN lc.code = 'LOW_MARGIN' THEN
                    CASE 
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'NET_MARGIN') < 5 THEN 0.95
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'NET_MARGIN') < 10 THEN 0.80
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'NET_MARGIN') < 15 THEN 0.60
                        ELSE 0.20
                    END
                WHEN lc.code = 'CASH_FLOW_CRUNCH' THEN
                    CASE 
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'RUNWAY_MONTHS') < 2 THEN 0.98
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'RUNWAY_MONTHS') < 4 THEN 0.85
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'RUNWAY_MONTHS') < 6 THEN 0.70
                        ELSE 0.30
                    END
                WHEN lc.code = 'SALES_STAGNATION' THEN
                    CASE 
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'CONVERSION_RATE') < 10 THEN 0.90
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'CONVERSION_RATE') < 15 THEN 0.75
                        WHEN (SELECT value FROM current_metrics WHERE kpi_code = 'CONVERSION_RATE') < 20 THEN 0.60
                        ELSE 0.25
                    END
                ELSE 0.50
            END as confidence_score
        FROM library_challenges lc
        WHERE lc.id IN (
            SELECT challenge_id FROM strategic_templates WHERE is_active = true
        )
    )
    SELECT 
        ca.challenge_code,
        ca.confidence_score,
        jsonb_agg(
            jsonb_build_object(
                'kpi_code', cm.kpi_code,
                'kpi_title', cm.kpi_title,
                'current_value', cm.value,
                'unit', cm.unit,
                'is_critical', 
                CASE 
                    WHEN ca.challenge_code = 'LOW_MARGIN' AND cm.kpi_code = 'NET_MARGIN' AND cm.value < 10 THEN true
                    WHEN ca.challenge_code = 'CASH_FLOW_CRUNCH' AND cm.kpi_code = 'RUNWAY_MONTHS' AND cm.value < 3 THEN true
                    WHEN ca.challenge_code = 'SALES_STAGNATION' AND cm.kpi_code = 'CONVERSION_RATE' AND cm.value < 15 THEN true
                    ELSE false
                END
            )
        ) as detected_symptoms,
        CASE 
            WHEN ca.confidence_score > 0.85 THEN 
                'ALERTA CRÍTICA: ' || ca.title || ' detectado com alta confiança. Ação imediata recomendada.'
            WHEN ca.confidence_score > 0.70 THEN 
                'ATENÇÃO: ' || ca.title || ' identificado. Monitore e considere ação.'
            WHEN ca.confidence_score > 0.50 THEN 
                'MONITORAR: Sinais iniciais de ' || ca.title || '. Continue observando.'
            ELSE 
                'Baixa probabilidade de ' || ca.title || '. Mantenha foco atual.'
        END as recommendation
    FROM challenge_analysis ca
    LEFT JOIN current_metrics cm ON cm.kpi_code = ANY(ca.related_kpi_codes)
    WHERE ca.confidence_score > 0.5
    GROUP BY ca.challenge_code, ca.confidence_score, ca.title
    ORDER BY ca.confidence_score DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- View para diagnóstico rápido
CREATE VIEW organization_diagnostic_summary AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    COUNT(DISTINCT usf.id) as active_strategies,
    AVG(usf.progress_percentage) as avg_progress,
    MAX(ph.calculated_at) as last_progress_update,
    CASE 
        WHEN COUNT(DISTINCT usf.id) = 0 THEN 'no_strategy'
        WHEN AVG(usf.progress_percentage) >= 80 THEN 'excellent'
        WHEN AVG(usf.progress_percentage) >= 50 THEN 'good'
        WHEN AVG(usf.progress_percentage) >= 20 THEN 'attention'
        ELSE 'critical'
    END as overall_health
FROM organizations o
LEFT JOIN user_strategy_focus usf ON o.id = usf.organization_id AND usf.status = 'active'
LEFT JOIN progress_history ph ON usf.id = ph.user_strategy_focus_id
GROUP BY o.id, o.name;
