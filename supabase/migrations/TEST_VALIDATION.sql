-- =====================================================
-- TESTE DE VALIDAÇÃO - Biblioteca v3.0 Standalone
-- Execute após CREATE_LEVERS_STANDALONE.sql e SEED_LEVERS_STANDALONE.sql
-- =====================================================

-- Test 1: Verificar se todas as tabelas foram criadas
SELECT 'TESTE 1: TABELAS CRIADAS' as teste;
SELECT 
    table_name,
    '✅ EXISTE' as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('library_levers', 'library_actions', 'library_challenge_lever_mapping', 'library_goal_lever_mapping');

-- Test 2: Contar alavancas
SELECT 'TESTE 2: CONTAGEM DE ALAVANCAS' as teste;
SELECT 
    COUNT(*) as total_alavancas,
    CASE WHEN COUNT(*) = 11 THEN '✅ PASSOU' ELSE '❌ FALHOU - Esperado: 11' END as status
FROM library_levers;

-- Test 3: Contar ações
SELECT 'TESTE 3: CONTAGEM DE AÇÕES' as teste;
SELECT 
    COUNT(*) as total_acoes,
    CASE WHEN COUNT(*) = 15 THEN '✅ PASSOU' ELSE '❌ FALHOU - Esperado: 15' END as status
FROM library_actions;

-- Test 4: Contar Quick Wins
SELECT 'TESTE 4: QUICK WINS IDENTIFICADOS' as teste;
SELECT 
    COUNT(*) as total_quick_wins,
    CASE WHEN COUNT(*) >= 5 THEN '✅ PASSOU' ELSE '❌ FALHOU' END as status
FROM library_actions WHERE quick_win = true;

-- Test 5: Verificar mapeamentos Desafio → Alavanca
SELECT 'TESTE 5: MAPEAMENTOS DESAFIO → ALAVANCA' as teste;
SELECT 
    COUNT(*) as total_mapeamentos,
    CASE WHEN COUNT(*) >= 15 THEN '✅ PASSOU' ELSE '❌ FALHOU' END as status
FROM library_challenge_lever_mapping;

-- Test 6: Verificar mapeamentos Objetivo → Alavanca  
SELECT 'TESTE 6: MAPEAMENTOS OBJETIVO → ALAVANCA' as teste;
SELECT 
    COUNT(*) as total_mapeamentos,
    CASE WHEN COUNT(*) >= 13 THEN '✅ PASSOU' ELSE '❌ FALHOU' END as status
FROM library_goal_lever_mapping;

-- Test 7: Listar todas as alavancas
SELECT 'TESTE 7: LISTA DE ALAVANCAS' as teste;
SELECT 
    code as codigo,
    title as titulo,
    category as categoria,
    target_kpi_code as kpi_alvo,
    impact_level as impacto
FROM library_levers 
ORDER BY category, code;

-- Test 8: Listar Quick Wins
SELECT 'TESTE 8: LISTA DE QUICK WINS' as teste;
SELECT 
    a.code as codigo_acao,
    a.title as titulo,
    l.code as alavanca,
    a.estimated_effort_hours as esforco_horas,
    a.step_by_step->>0 as primeiro_passo
FROM library_actions a
JOIN library_levers l ON a.lever_id = l.id
WHERE a.quick_win = true
ORDER BY a.estimated_effort_hours;

-- Test 9: Testar função get_challenge_levers
SELECT 'TESTE 9: FUNÇÃO get_challenge_levers' as teste;
SELECT * FROM get_challenge_levers('CASH_SHORTAGE');

-- Test 10: Testar função get_recommended_actions_for_challenge
SELECT 'TESTE 10: FUNÇÃO get_recommended_actions_for_challenge' as teste;
SELECT 
    action_code,
    action_title,
    lever_title,
    quick_win,
    estimated_effort_hours
FROM get_recommended_actions_for_challenge('CASH_SHORTAGE');

-- Test 11: Resumo final
SELECT 'TESTE 11: RESUMO FINAL' as teste;
SELECT 
    '✅ Biblioteca v3.0 Standalone' as status,
    (SELECT COUNT(*) FROM library_levers) as alavancas,
    (SELECT COUNT(*) FROM library_actions) as acoes,
    (SELECT COUNT(*) FROM library_actions WHERE quick_win = true) as quick_wins,
    (SELECT COUNT(*) FROM library_challenge_lever_mapping) as mapeamentos_challenge,
    (SELECT COUNT(*) FROM library_goal_lever_mapping) as mapeamentos_goal;

-- =====================================================
-- SE TODOS OS TESTES PASSARAM, A IMPLEMENTAÇÃO ESTÁ OK!
-- =====================================================
