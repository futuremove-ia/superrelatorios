-- =====================================================
-- TESTES VALIDAÇÃO DO MOTOR DE DELTAS QUALITATIVOS
-- =====================================================

-- Testar o Vetor de Tendência com diferentes cenários
-- Cenário 1: Crescimento Estelar (🟢)
SELECT 'CENÁRIO 1 - CRESCIMENTO ESTELAR' as teste,
       calculate_file_to_file_progress(
           (SELECT id FROM user_strategy_focus WHERE organization_id = '550e8400-e29b-41d4-a716-446655440001' LIMIT 1),
           'r1-mes-3'
       ) as resultado;

-- Cenário 2: Progresso Lento (🟡) 
SELECT 'CENÁRIO 2 - PROGRESSO LENTO' as teste,
       calculate_file_to_file_progress(
           (SELECT id FROM user_strategy_focus WHERE organization_id = '550e8400-e29b-41d4-a716-446655440003' LIMIT 1),
           'r2-mes-2'
       ) as resultado;

-- Cenário 3: Recuperação Forte (🟢)
SELECT 'CENÁRIO 3 - RECUPERAÇÃO FORTE' as teste,
       calculate_file_to_file_progress(
           (SELECT id FROM user_strategy_focus WHERE organization_id = '550e8400-e29b-41d4-a716-446655440005' LIMIT 1),
           'r3-mes-3'
       ) as resultado;

-- =====================================================
-- VALIDAÇÃO DOS THRESHOLDS DO VETOR DE TENDÊNCIA
-- =====================================================

-- Testar thresholds manualmente para validar a lógica
WITH delta_tests AS (
  SELECT 30 as delta_percentage, 'Aumentou Muito' as expected_status UNION ALL
  SELECT 15, 'Aumentou Pouco' UNION ALL
  SELECT 0, 'Estável' UNION ALL
  SELECT -10, 'Diminuiu Pouco' UNION ALL
  SELECT -25, 'Diminuiu Muito'
)
SELECT 
  delta_percentage,
  expected_status,
  CASE 
    WHEN delta_percentage > 25 THEN '🟢 Estelar'
    WHEN delta_percentage > 5 THEN '🟡 Atenção'
    WHEN delta_percentage >= -5 THEN '⚪ Estagnado'
    WHEN delta_percentage >= -15 THEN '🟠 Alerta'
    ELSE '🔴 Crítico'
  END as calculated_status,
  CASE 
    WHEN delta_percentage > 25 THEN 'Escalar/Replicar tática.'
    WHEN delta_percentage > 5 THEN 'Revisar alavancas.'
    WHEN delta_percentage >= -5 THEN 'Provocar mudança.'
    WHEN delta_percentage >= -15 THEN 'Ajuste corretivo.'
    ELSE 'Intervenção imediata.'
  END as suggested_action
FROM delta_tests
ORDER BY delta_percentage DESC;

-- =====================================================
-- VALIDAÇÃO DE INTEGRAÇÃO COM O FRONTEND
-- =====================================================

-- View para o StrategicFocusBar consumir
CREATE OR REPLACE VIEW strategic_focus_with_vectors AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    usf.id as focus_id,
    usf.status,
    lc.code as challenge_code,
    lc.title as challenge_title,
    lg.code as goal_code,
    lg.title as goal_title,
    usf.progress_percentage,
    usf.started_at,
    lg.suggested_timeframe_days,
    (lg.suggested_timeframe_days - EXTRACT(days FROM NOW() - usf.started_at)) as days_remaining,
    -- Último cálculo do vetor de tendência
    (ph.calculated_result->>'visual_status') as visual_status,
    (ph.calculated_result->>'system_narrative') as system_narrative,
    (ph.calculated_result->>'suggested_action') as suggested_action,
    (ph.calculated_result->>'trend_strength') as trend_strength,
    (ph.calculated_result->>'delta_percentage')::DECIMAL(5,2) as delta_percentage,
    CASE 
        WHEN (ph.calculated_result->>'urgency_level') = 'success' THEN 'success'
        WHEN (ph.calculated_result->>'urgency_level') = 'warning' THEN 'warning'
        WHEN (ph.calculated_result->>'urgency_level') = 'danger' THEN 'danger'
        WHEN (ph.calculated_result->>'urgency_level') = 'critical' THEN 'critical'
        ELSE 'warning'
    END as urgency_level
FROM organizations o
JOIN user_strategy_focus usf ON o.id = usf.organization_id
JOIN library_challenges lc ON usf.challenge_id = lc.id
JOIN library_goals lg ON usf.goal_id = lg.id
LEFT JOIN progress_history ph ON usf.id = ph.user_strategy_focus_id
WHERE usf.status = 'active'
  AND ph.calculated_at = (
    SELECT MAX(calculated_at) 
    FROM progress_history ph2 
    WHERE ph2.user_strategy_focus_id = usf.id
  );

-- Query para o frontend buscar dados formatados
SELECT * FROM strategic_focus_with_vectors WHERE organization_id = '550e8400-e29b-41d4-a716-446655440001';

-- =====================================================
-- RESULTADOS ESPERADOS
-- =====================================================

/*
TechSolutions (LOW_MARGIN):
- Delta: ~34.6% ((13.2 - 9.8) / 9.8 * 100)
- Status: 🟢 Estelar
- Narrativa: "Crescimento Exponencial: Acima da Meta."
- Ação: "Escalar/Replicar tática."

VendeRápido (CASH_FLOW_CRUNCH):
- Delta: ~50% ((4.2 - 2.8) / 2.8 * 100)
- Status: 🟢 Estelar  
- Narrativa: "Crescimento Exponencial: Acima da Meta."
- Ação: "Escalar/Replicar tática."

Consultoria Pro (SALES_STAGNATION):
- Delta: ~52% ((18.7 - 12.3) / 12.3 * 100)
- Status: 🟢 Estelar
- Narrativa: "Crescimento Exponencial: Acima da Meta."
- Ação: "Escalar/Replicar tática."
*/
