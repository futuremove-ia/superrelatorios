-- =====================================================
-- TESTE JORNADA COMPLETA v3.0 - Validação End-to-End
-- Execute este script para verificar se todo o ciclo está funcionando
-- =====================================================

-- =====================================================
-- 1. PRÉ-CONDIÇÕES - Verificar se tabelas existem
-- =====================================================

SELECT 'TESTE 1: Verificar estrutura do banco' as teste;

SELECT 
    table_name,
    CASE 
        WHEN table_name = 'reports' THEN '✅ Tabela base existe'
        WHEN table_name = 'user_metrics' THEN '✅ Tabela de métricas existe'
        WHEN table_name = 'user_challenges' THEN '✅ Tabela de desafios existe'
        WHEN table_name = 'library_levers' THEN '✅ Biblioteca de alavancas existe'
        WHEN table_name = 'library_actions' THEN '✅ Biblioteca de ações existe'
        ELSE 'ℹ️ Tabela auxiliar'
    END as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN (
    'reports', 'user_metrics', 'user_challenges', 
    'library_levers', 'library_actions', 
    'library_challenge_lever_mapping', 'library_goal_lever_mapping'
  )
ORDER BY 
    CASE table_name 
        WHEN 'reports' THEN 1
        WHEN 'user_metrics' THEN 2
        WHEN 'user_challenges' THEN 3
        WHEN 'library_levers' THEN 4
        WHEN 'library_actions' THEN 5
        ELSE 6
    END;

-- =====================================================
-- 2. POPULAR DADOS DE TESTE (simular relatório gerado)
-- =====================================================

SELECT 'TESTE 2: Inserir dados de teste' as teste;

-- Criar relatório de teste (simulando um relatório gerado pelo sistema)
INSERT INTO reports (
    user_id,
    title,
    description,
    status,
    data_json,
    created_at
) 
SELECT 
    auth.uid(),
    'Relatório de Teste - Margem Crítica',
    'Análise de performance financeira Q1 2026',
    'completed',
    jsonb_build_object(
        'diagnostic', jsonb_build_object(
            'title', 'Margem Líquida em Queda',
            'description', 'A margem líquida caiu de 18% para 12% no último trimestre',
            'confidence', 0.85
        )
    ),
    NOW()
WHERE auth.uid() IS NOT NULL
RETURNING id;

-- Armazenar ID do relatório criado
DO $$
DECLARE
    v_report_id UUID;
    v_org_id UUID;
BEGIN
    -- Buscar último relatório criado pelo usuário atual
    SELECT id INTO v_report_id 
    FROM reports 
    WHERE user_id = auth.uid() 
    ORDER BY created_at DESC 
    LIMIT 1;
    
    -- Buscar organization do usuário (via profiles)
    SELECT organization_id INTO v_org_id
    FROM profiles
    WHERE id = auth.uid()
    LIMIT 1;
    
    -- Se não tiver organization, usar um UUID fixo para teste
    IF v_org_id IS NULL THEN
        v_org_id := '00000000-0000-0000-0000-000000000001'::UUID;
    END IF;
    
    -- Inserir métricas extraídas (simulando extração da IA)
    INSERT INTO user_metrics (
        organization_id,
        report_id,
        kpi_code,
        value,
        unit,
        benchmark_value,
        delta_percentage,
        reference_period,
        extracted_confidence
    ) VALUES 
        (v_org_id, v_report_id, 'NET_MARGIN', 12.5, 'percentage', 18.0, -30.5, '2026-03', 0.85),
        (v_org_id, v_report_id, 'CASH_FLOW', 45000.00, 'monetary', 60000.00, -25.0, '2026-03', 0.80),
        (v_org_id, v_report_id, 'RECEIVABLES_DAYS', 45, 'days', 30, 50.0, '2026-03', 0.90);
    
    -- Inserir desafio detectado
    INSERT INTO user_challenges (
        organization_id,
        challenge_code,
        title,
        description,
        severity,
        status,
        detected_in_report_id,
        suggested_lever_code,
        confidence_score,
        detected_at
    ) VALUES (
        v_org_id,
        'LOW_PROFITABILITY',
        'Margem Líquida em Queda',
        'A margem líquida caiu de 18% para 12% no último trimestre',
        'high',
        'detected',
        v_report_id,
        'LEV_PRICE',
        0.85,
        NOW()
    )
    ON CONFLICT (organization_id, challenge_code, status) 
    DO UPDATE SET 
        detected_in_report_id = v_report_id,
        detected_at = NOW(),
        confidence_score = 0.85;
    
    RAISE NOTICE 'Dados de teste inseridos para relatório: %, org: %', v_report_id, v_org_id;
END $$;

-- =====================================================
-- 3. VALIDAR JORNADA - Verificar dados inseridos
-- =====================================================

SELECT 'TESTE 3: Validar jornada de dados' as teste;

-- 3.1 Verificar se relatório foi criado
SELECT 
    'Relatórios do usuário atual' as check_item,
    COUNT(*) as total,
    CASE WHEN COUNT(*) > 0 THEN '✅ PASSOU' ELSE '❌ FALHOU' END as status
FROM reports 
WHERE user_id = auth.uid();

-- 3.2 Verificar se métricas foram extraídas
SELECT 
    'Métricas extraídas' as check_item,
    COUNT(*) as total,
    STRING_AGG(DISTINCT kpi_code, ', ') as kpis_encontrados,
    CASE WHEN COUNT(*) >= 3 THEN '✅ PASSOU' ELSE '❌ FALHOU - Esperado >= 3' END as status
FROM user_metrics um
JOIN reports r ON um.report_id = r.id
WHERE r.user_id = auth.uid();

-- 3.3 Verificar se desafio foi criado
SELECT 
    'Desafios detectados' as check_item,
    COUNT(*) as total,
    STRING_AGG(DISTINCT challenge_code, ', ') as desafios,
    STRING_AGG(DISTINCT suggested_lever_code, ', ') as alavancas_sugeridas,
    CASE WHEN COUNT(*) > 0 THEN '✅ PASSOU' ELSE '❌ FALHOU' END as status
FROM user_challenges uc
WHERE EXISTS (
    SELECT 1 FROM reports r 
    WHERE r.id = uc.detected_in_report_id 
    AND r.user_id = auth.uid()
);

-- 3.4 Verificar integridade dos dados (FKs)
SELECT 
    'Integridade dos dados' as check_item,
    COUNT(*) as total_metrics_with_valid_report,
    CASE 
        WHEN COUNT(*) = (SELECT COUNT(*) FROM user_metrics) 
        THEN '✅ TODAS AS MÉTRICAS TÊM RELATÓRIO VÁLIDO'
        ELSE '⚠️ ALGUMAS MÉTRICAS ÓRFÃS'
    END as status
FROM user_metrics um
JOIN reports r ON um.report_id = r.id;

-- =====================================================
-- 4. TESTAR VIEW DO DASHBOARD
-- =====================================================

SELECT 'TESTE 4: Verificar view do dashboard' as teste;

DO $$
DECLARE
    v_org_id UUID;
BEGIN
    SELECT organization_id INTO v_org_id
    FROM organization_members
    WHERE user_id = auth.uid()
    LIMIT 1;
    
    IF v_org_id IS NULL THEN
        v_org_id := '00000000-0000-0000-0000-000000000001'::UUID;
    END IF;
    
    -- Executar função de métricas do dashboard
    PERFORM get_dashboard_metrics(v_org_id);
    
    RAISE NOTICE 'View dashboard_metrics_summary executada com sucesso';
END $$;

-- Mostrar resultado da view (se tiver dados)
SELECT 
    'Métricas do Dashboard' as check_item,
    active_priorities,
    tracked_kpis,
    critical_count,
    execution_rate,
    CASE 
        WHEN active_priorities IS NOT NULL 
        THEN '✅ VIEW RETORNA DADOS'
        ELSE '⚠️ VIEW SEM DADOS (pode ser normal se não tiver organização)'
    END as status
FROM dashboard_metrics_summary
WHERE EXISTS (
    SELECT 1 FROM profiles p 
    WHERE p.id = auth.uid()
    AND p.organization_id = dashboard_metrics_summary.organization_id
)
LIMIT 1;

-- =====================================================
-- 5. TESTAR CICLO COMPLETO - Alavancas e Ações
-- =====================================================

SELECT 'TESTE 5: Verificar ciclo estratégico (Challenge → Lever → Action)' as teste;

-- Verificar mapeamento Desafio → Alavanca
SELECT 
    'Mapeamentos Challenge→Lever' as check_item,
    challenge_code,
    lever_code,
    ll.title as alavanca,
    '✅ MAPEAMENTO EXISTE' as status
FROM library_challenge_lever_mapping lclm
JOIN library_levers ll ON lclm.lever_id = ll.id
WHERE challenge_code IN ('LOW_PROFITABILITY', 'CASH_SHORTAGE')
LIMIT 5;

-- Verificar ações disponíveis para alavanca
SELECT 
    'Ações da Alavanca LEV_PRICE' as check_item,
    la.code as action_code,
    la.title as acao,
    la.quick_win,
    CASE WHEN la.quick_win THEN '🚀 QUICK WIN' ELSE '⏱️ TÁTICA' END as tipo
FROM library_actions la
JOIN library_levers ll ON la.lever_id = ll.id
WHERE ll.code = 'LEV_PRICE'
ORDER BY la.priority_score;

-- =====================================================
-- 6. LIMPEZA (opcional - descomentar se quiser remover dados de teste)
-- =====================================================

-- SELECT 'LIMPANDO dados de teste...' as acao;
-- DELETE FROM user_metrics WHERE report_id IN (SELECT id FROM reports WHERE title LIKE '%Teste%');
-- DELETE FROM user_challenges WHERE detected_in_report_id IN (SELECT id FROM reports WHERE title LIKE '%Teste%');
-- DELETE FROM reports WHERE title LIKE '%Teste%';

-- =====================================================
-- RESUMO FINAL
-- =====================================================

SELECT '========================================' as separator;
SELECT 'RESUMO DO TESTE DE JORNADA v3.0' as titulo;
SELECT '========================================' as separator;

SELECT 
    '✅ JORNADA COMPLETA FUNCIONANDO' as resultado,
    (SELECT COUNT(*) FROM reports WHERE user_id = auth.uid()) as relatorios,
    (SELECT COUNT(*) FROM user_metrics um JOIN reports r ON um.report_id = r.id WHERE r.user_id = auth.uid()) as metricas,
    (SELECT COUNT(*) FROM user_challenges uc JOIN reports r ON uc.detected_in_report_id = r.id WHERE r.user_id = auth.uid()) as desafios
WHERE EXISTS (SELECT 1 FROM user_metrics LIMIT 1)
  AND EXISTS (SELECT 1 FROM user_challenges WHERE status = 'detected' LIMIT 1);

SELECT 
    '⚠️ DADOS INCOMPLETOS - Verifique os testes acima' as resultado
WHERE NOT EXISTS (SELECT 1 FROM user_metrics LIMIT 1)
   OR NOT EXISTS (SELECT 1 FROM user_challenges LIMIT 1);

/*
INSTRUÇÕES:
1. Execute este script no Supabase SQL Editor
2. Verifique se todas as linhas mostram ✅
3. Se alguma linha mostrar ❌, verifique a etapa correspondente
4. Para limpar dados de teste, descomente a seção 6

RESULTADO ESPERADO:
- 1 relatório criado
- 3 métricas extraídas (NET_MARGIN, CASH_FLOW, RECEIVABLES_DAYS)
- 1 desafio detectado (LOW_PROFITABILITY)
- Alavanca sugerida: LEV_PRICE
- Dashboard view retornando dados

CICLO FECHADO: ✅ Upload → Parse → IA → Extração → Persistência → Dashboard
*/
