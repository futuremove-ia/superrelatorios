-- =====================================================
-- CAMADA DE DETECÇÃO INTELIGENTE (Symptom Detection)
-- Regras para IA identificar automaticamente desafios nos dados
-- =====================================================

CREATE TABLE IF NOT EXISTS symptom_detection_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID REFERENCES library_challenges(id),
    kpi_code TEXT REFERENCES kpi_master_library(code),
    condition_operator TEXT NOT NULL, -- '<', '>', 'between', 'trend_down', 'trend_up'
    threshold_value DECIMAL(10,2),
    threshold_value_max DECIMAL(10,2), -- Para operador 'between'
    symptom_description TEXT NOT NULL,
    confidence_weight DECIMAL(3,2) DEFAULT 1.0, -- Peso no cálculo de confiança
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Regras de Detecção para cada Desafio
INSERT INTO symptom_detection_rules (challenge_id, kpi_code, condition_operator, threshold_value, symptom_description, confidence_weight) VALUES
-- Regras para CASH_FLOW_CRUNCH
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), 'RUNWAY', '<', 1, 'Runway inferior a 1 mês - Risco crítico de insolvência', 0.9),
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), 'RUNWAY', '<', 3, 'Runway inferior a 3 meses - Baixa reserva de segurança', 0.7),
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), 'CONTRIB_MARGIN', '<', 5, 'Margem de contribuição muito baixa - Sem geração de caixa', 0.6),
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), 'BURN_RATE', 'trend_up', 20, 'Burn Rate acelerando nos últimos 2 meses', 0.8),

-- Regras para INEFFICIENT_SALES_MACHINE
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'), 'LTV_CAC_RATIO', '<', 1.5, 'LTV/CAC abaixo de 1.5 - Modelo insustentável', 0.9),
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'), 'LTV_CAC_RATIO', '<', 2.5, 'LTV/CAC abaixo de 2.5 - Ineficiência grave', 0.7),
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'), 'CAC', 'trend_up', 15, 'CAC aumentando mais de 15% mensalmente', 0.8),
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'), 'CHURN_RATE', '>', 10, 'Taxa de cancelamento acima de 10% - Retenção péssima', 0.7),

-- Regras para COMMODITY_TRAP
((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'), 'NET_PROFIT_MARG', '<', 0, 'Margem líquida negativa - Prejuízo operacional', 0.9),
((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'), 'NET_PROFIT_MARG', '<', 3, 'Margem líquida abaixo de 3% - Comoditização', 0.7),
((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'), 'CONTRIB_MARGIN', 'between', 10, 20, 'Margem de contribuição entre 10-20% - Pressão de preços', 0.6);

-- Função para detectar sintomas automaticamente
CREATE OR REPLACE FUNCTION detect_symptoms_from_metrics(
    p_organization_id UUID,
    p_report_id UUID
) RETURNS TABLE(
    challenge_code TEXT,
    challenge_title TEXT,
    symptom_detected TEXT,
    confidence_score DECIMAL(3,2),
    severity_level TEXT,
    kpi_evidence JSONB
) AS $$
BEGIN
    RETURN QUERY
    WITH current_metrics AS (
        SELECT 
            um.kpi_code,
            um.value as current_value,
            kml.title as kpi_title,
            kml.unit,
            LAG(um.value, 1) OVER (PARTITION BY um.kpi_code ORDER BY r.created_at) as previous_value,
            LAG(um.value, 2) OVER (PARTITION BY um.kpi_code ORDER BY r.created_at) as baseline_value
        FROM user_metrics um
        JOIN kpi_master_library kml ON um.kpi_code = kml.code
        JOIN reports r ON um.report_id = r.id
        WHERE um.organization_id = p_organization_id 
          AND (um.report_id = p_report_id OR r.created_at <= (SELECT created_at FROM reports WHERE id = p_report_id))
    ),
    symptom_matches AS (
        SELECT 
            lc.code as challenge_code,
            lc.title as challenge_title,
            sdr.symptom_description,
            sdr.confidence_weight,
            CASE 
                WHEN sdr.confidence_weight >= 0.8 THEN 'critical'
                WHEN sdr.confidence_weight >= 0.6 THEN 'high'
                WHEN sdr.confidence_weight >= 0.4 THEN 'medium'
                ELSE 'low'
            END as severity_level,
            cm.kpi_code,
            cm.current_value,
            cm.previous_value,
            cm.baseline_value,
            cm.kpi_title,
            cm.unit,
            CASE 
                WHEN sdr.condition_operator = '<' AND cm.current_value < sdr.threshold_value THEN true
                WHEN sdr.condition_operator = '>' AND cm.current_value > sdr.threshold_value THEN true
                WHEN sdr.condition_operator = 'between' AND cm.current_value BETWEEN sdr.threshold_value AND sdr.threshold_value_max THEN true
                WHEN sdr.condition_operator = 'trend_up' AND cm.previous_value > 0 
                     AND ((cm.current_value - cm.previous_value) / cm.previous_value * 100) > sdr.threshold_value THEN true
                WHEN sdr.condition_operator = 'trend_down' AND cm.previous_value > 0 
                     AND ((cm.previous_value - cm.current_value) / cm.previous_value * 100) > sdr.threshold_value THEN true
                ELSE false
            END as rule_matched
        FROM symptom_detection_rules sdr
        JOIN library_challenges lc ON sdr.challenge_id = lc.id
        LEFT JOIN current_metrics cm ON sdr.kpi_code = cm.kpi_code
        WHERE sdr.is_active = true
          AND lc.id IN (SELECT challenge_id FROM strategic_templates WHERE is_active = true)
    )
    SELECT 
        sm.challenge_code,
        sm.challenge_title,
        sm.symptom_description,
        sm.confidence_weight as confidence_score,
        sm.severity_level,
        jsonb_build_object(
            'kpi_code', sm.kpi_code,
            'kpi_title', sm.kpi_title,
            'current_value', sm.current_value,
            'previous_value', sm.previous_value,
            'baseline_value', sm.baseline_value,
            'unit', sm.unit,
            'threshold_applied', 
                CASE 
                    WHEN sdr.condition_operator = '<' THEN '< ' || sdr.threshold_value
                    WHEN sdr.condition_operator = '>' THEN '> ' || sdr.threshold_value
                    WHEN sdr.condition_operator = 'between' THEN 'BETWEEN ' || sdr.threshold_value || ' AND ' || sdr.threshold_value_max
                    WHEN sdr.condition_operator = 'trend_up' THEN 'TREND UP > ' || sdr.threshold_value || '%'
                    WHEN sdr.condition_operator = 'trend_down' THEN 'TREND DOWN > ' || sdr.threshold_value || '%'
                END
        ) as kpi_evidence
    FROM symptom_matches sm
    WHERE sm.rule_matched = true
      AND sm.current_value IS NOT NULL
    ORDER BY sm.confidence_weight DESC, sm.severity_level DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- View para diagnóstico automático do Blueprint
CREATE OR REPLACE VIEW automatic_diagnostic_summary AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    r.id as report_id,
    r.title as report_title,
    r.created_at as report_date,
    ds.challenge_code,
    ds.challenge_title,
    ds.symptom_detected,
    ds.confidence_score,
    ds.severity_level,
    ds.kpi_evidence,
    CASE 
        WHEN COUNT(*) OVER (PARTITION BY o.id, r.id) > 1 THEN 'MULTIPLE_CHALLENGES'
        WHEN ds.confidence_score >= 0.8 THEN 'HIGH_CONFIDENCE'
        WHEN ds.confidence_score >= 0.6 THEN 'MEDIUM_CONFIDENCE'
        ELSE 'LOW_CONFIDENCE'
    END as diagnostic_status
FROM organizations o
JOIN reports r ON o.id = r.organization_id
CROSS JOIN LATERAL detect_symptoms_from_metrics(o.id, r.id) ds
WHERE r.status = 'completed'
ORDER BY r.created_at DESC, ds.confidence_score DESC;

-- Ativar RLS para nova tabela
ALTER TABLE symptom_detection_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read detection rules" ON symptom_detection_rules FOR SELECT USING (true);

-- =====================================================
-- VALIDAÇÃO DO SISTEMA DE DETECÇÃO
-- =====================================================

-- Testar detecção com dados de exemplo
SELECT * FROM detect_symptoms_from_metrics('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-3');

-- Verificar regras ativas por desafio
SELECT 
    lc.code as challenge_code,
    lc.title as challenge_title,
    COUNT(sdr.id) as active_rules,
    STRING_AGG(sdr.kpi_code || ': ' || sdr.condition_operator || ' ' || COALESCE(sdr.threshold_value::TEXT, ''), ', ') as rules_summary
FROM library_challenges lc
LEFT JOIN symptom_detection_rules sdr ON lc.id = sdr.challenge_id AND sdr.is_active = true
WHERE lc.id IN (SELECT challenge_id FROM strategic_templates WHERE is_active = true)
GROUP BY lc.id, lc.code, lc.title
ORDER BY lc.code;
