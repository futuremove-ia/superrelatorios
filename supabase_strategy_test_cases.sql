-- =====================================================
-- CASOS DE TESTE - VALIDAÇÃO DO SISTEMA DE ESTRATÉGIA
-- 3 Cenários PME Realistas com 3 Meses de Dados
-- =====================================================

-- Criar organização de teste
INSERT INTO organizations (id, name) VALUES 
('550e8400-e29b-41d4-a716-446655440001', 'TechSolutions Ltda - Teste');

-- Criar perfil de teste (associado a organization)
INSERT INTO profiles (id, organization_id, full_name, email) VALUES 
('550e8400-e29b-41d4-a716-446655440002', 
 '550e8400-e29b-41d4-a716-446655440001', 
 'João Silva', 
 'joao@techsolutions.com');

-- =====================================================
-- CENÁRIO 1: LOW_MARGIN (Margem Baixa)
-- Empresa de software com muito faturamento mas pouco lucro
-- =====================================================

-- Criar relatórios mensais
INSERT INTO reports (id, organization_id, user_id, title, description, status, created_at) VALUES
('r1-mes-1', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 
 'Relatório Financeiro - Mês 1', 'Resultado operacional mensal', 'completed', '2026-01-31 10:00:00'),
('r1-mes-2', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 
 'Relatório Financeiro - Mês 2', 'Resultado operacional mensal', 'completed', '2026-02-28 10:00:00'),
('r1-mes-3', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 
 'Relatório Financeiro - Mês 3', 'Resultado operacional mensal', 'completed', '2026-03-31 10:00:00');

-- Inserir métricas evoluindo de ruim para melhor
INSERT INTO user_metrics (organization_id, report_id, kpi_code, value, source_file_id, recorded_at) VALUES
-- Mês 1: Crítico
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-1', 'NET_MARGIN', 6.5, 'file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-1', 'EBITDA_MARGIN', 8.2, 'file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-1', 'AVG_TICKET', 5000, 'file-001', '2026-01-31 10:00:00'),

-- Mês 2: Melhorando
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-2', 'NET_MARGIN', 9.8, 'file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-2', 'EBITDA_MARGIN', 12.1, 'file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-2', 'AVG_TICKET', 5500, 'file-002', '2026-02-28 10:00:00'),

-- Mês 3: Quase lá
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-3', 'NET_MARGIN', 13.2, 'file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-3', 'EBITDA_MARGIN', 15.8, 'file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-3', 'AVG_TICKET', 6200, 'file-003', '2026-03-31 10:00:00');

-- Criar foco estratégico para LOW_MARGIN
INSERT INTO user_strategy_focus (id, organization_id, challenge_id, goal_id, status, context_notes) VALUES
('focus-001', '550e8400-e29b-41d4-a716-446655440001', 
 (SELECT id FROM library_challenges WHERE code = 'LOW_MARGIN'),
 (SELECT id FROM library_goals WHERE code = 'PROFIT_MAXIMIZER'),
 'active', 
 'Detectado via relatório financeiro: margem líquida de 6.5% no Mês 1. Cliente relatou "vendo muito mas o dinheiro não aparece no fim do mês".');

-- =====================================================
-- CENÁRIO 2: CASH_FLOW_CRUNCH (Hemorragia de Caixa)
-- E-commerce crescendo rápido mas queimando caixa
-- =====================================================

INSERT INTO organizations (id, name) VALUES 
('550e8400-e29b-41d4-a716-446655440003', 'VendeRápido E-commerce - Teste');

INSERT INTO profiles (id, organization_id, full_name, email) VALUES 
('550e8400-e29b-41d4-a716-446655440004', 
 '550e8400-e29b-41d4-a716-446655440003', 
 'Maria Santos', 
 'maria@venderapido.com');

INSERT INTO reports (id, organization_id, user_id, title, description, status, created_at) VALUES
('r2-mes-1', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 
 'Relatório Caixa - Mês 1', 'Fluxo de caixa mensal', 'completed', '2026-01-31 10:00:00'),
('r2-mes-2', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 
 'Relatório Caixa - Mês 2', 'Fluxo de caixa mensal', 'completed', '2026-02-28 10:00:00'),
('r2-mes-3', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 
 'Relatório Caixa - Mês 3', 'Fluxo de caixa mensal', 'completed', '2026-03-31 10:00:00');

-- Métricas de caixa críticas melhorando
INSERT INTO user_metrics (organization_id, report_id, kpi_code, value, source_file_id, recorded_at) VALUES
-- Mês 1: Crítico (1.5 meses de runway)
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-1', 'RUNWAY_MONTHS', 1.5, 'cash-file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-1', 'BURN_RATE', 85000, 'cash-file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-1', 'DAYS_TO_RECEIVE', 45, 'cash-file-001', '2026-01-31 10:00:00'),

-- Mês 2: Melhorou um pouco
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-2', 'RUNWAY_MONTHS', 2.8, 'cash-file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-2', 'BURN_RATE', 72000, 'cash-file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-2', 'DAYS_TO_RECEIVE', 38, 'cash-file-002', '2026-02-28 10:00:00'),

-- Mês 3: Estabilizando
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-3', 'RUNWAY_MONTHS', 4.2, 'cash-file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-3', 'BURN_RATE', 58000, 'cash-file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-3', 'DAYS_TO_RECEIVE', 32, 'cash-file-003', '2026-03-31 10:00:00');

INSERT INTO user_strategy_focus (id, organization_id, challenge_id, goal_id, status, context_notes) VALUES
('focus-002', '550e8400-e29b-41d4-a716-446655440003', 
 (SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'),
 (SELECT id FROM library_goals WHERE code = 'BURN_REDUCTION'),
 'active', 
 'Detectado emergência de caixa: apenas 1.5 meses de runway. Cliente "dormindo com um olho aberto" preocupado com folha de pagamento.');

-- =====================================================
-- CENÁRIO 3: SALES_STAGNATION (Vendas Estagnadas)
-- Empresa de serviços com pipeline parado
-- =====================================================

INSERT INTO organizations (id, name) VALUES 
('550e8400-e29b-41d4-a716-446655440005', 'Consultoria Pro - Teste');

INSERT INTO profiles (id, organization_id, full_name, email) VALUES 
('550e8400-e29b-41d4-a716-446655440006', 
 '550e8400-e29b-41d4-a716-446655440005', 
 'Pedro Costa', 
 'pedro@consultoriapro.com');

INSERT INTO reports (id, organization_id, user_id, title, description, status, created_at) VALUES
('r3-mes-1', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440006', 
 'Relatório Vendas - Mês 1', 'Performance comercial', 'completed', '2026-01-31 10:00:00'),
('r3-mes-2', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440006', 
 'Relatório Vendas - Mês 2', 'Performance comercial', 'completed', '2026-02-28 10:00:00'),
('r3-mes-3', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440006', 
 'Relatório Vendas - Mês 3', 'Performance comercial', 'completed', '2026-03-31 10:00:00');

-- Métricas de vendas estagnadas recuperando
INSERT INTO user_metrics (organization_id, report_id, kpi_code, value, source_file_id, recorded_at) VALUES
-- Mês 1: Estagnação severa
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-1', 'CONVERSION_RATE', 8.5, 'sales-file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-1', 'SALES_CYCLE_DAYS', 35, 'sales-file-001', '2026-01-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-1', 'PIPELINE_VALUE', 120000, 'sales-file-001', '2026-01-31 10:00:00'),

-- Mês 2: Pequena melhora
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-2', 'CONVERSION_RATE', 12.3, 'sales-file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-2', 'SALES_CYCLE_DAYS', 28, 'sales-file-002', '2026-02-28 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-2', 'PIPELINE_VALUE', 180000, 'sales-file-002', '2026-02-28 10:00:00'),

-- Mês 3: Recuperação forte
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-3', 'CONVERSION_RATE', 18.7, 'sales-file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-3', 'SALES_CYCLE_DAYS', 22, 'sales-file-003', '2026-03-31 10:00:00'),
('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-3', 'PIPELINE_VALUE', 280000, 'sales-file-003', '2026-03-31 10:00:00');

INSERT INTO user_strategy_focus (id, organization_id, challenge_id, goal_id, status, context_notes) VALUES
('focus-003', '550e8400-e29b-41d4-a716-446655440005', 
 (SELECT id FROM library_challenges WHERE code = 'SALES_STAGNATION'),
 (SELECT id FROM library_goals WHERE code = 'SALES_ACCELERATION'),
 'active', 
 'Vendas paradas há 4 meses. Ciclo de vendas aumentou de 15 para 35 dias. Cliente "desesperado" com pipeline vazio.');

-- =====================================================
-- VALIDAÇÃO AUTOMÁTICA DOS TESTES
-- =====================================================

-- Testar detecção de desafios para cada organização
SELECT 'TechSolutions - LOW_MARGIN Detection' as test_case, * FROM detect_challenges_from_metrics('550e8400-e29b-41d4-a716-446655440001', 'r1-mes-3')
UNION ALL
SELECT 'VendeRápido - CASH_FLOW Detection' as test_case, * FROM detect_challenges_from_metrics('550e8400-e29b-41d4-a716-446655440003', 'r2-mes-3')
UNION ALL
SELECT 'Consultoria Pro - SALES Detection' as test_case, * FROM detect_challenges_from_metrics('550e8400-e29b-41d4-a716-446655440005', 'r3-mes-3');

-- Verificar cálculo de progresso para cada foco
SELECT 
    o.name as empresa,
    lc.code as desafio,
    lg.code as objetivo,
    usf.progress_percentage,
    usf.last_calculated_at,
    ph.delta_from_previous,
    ph.trend_direction
FROM user_strategy_focus usf
JOIN organizations o ON usf.organization_id = o.id
JOIN library_challenges lc ON usf.challenge_id = lc.id
JOIN library_goals lg ON usf.goal_id = lg.id
LEFT JOIN progress_history ph ON usf.id = ph.user_strategy_focus_id
WHERE usf.organization_id IN (
    '550e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440003',
    '550e8400-e29b-41d4-a716-446655440005'
)
ORDER BY o.name, ph.calculated_at DESC;

-- Resumo do diagnóstico organizacional
SELECT * FROM organization_diagnostic_summary 
WHERE organization_id IN (
    '550e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440003',
    '550e8400-e29b-41d4-a716-446655440005'
);

-- =====================================================
-- EXPECTED RESULTS (O que deveria aparecer)
-- =====================================================

/*
TechSolutions (LOW_MARGIN):
- Progress: ~103% ((13.2 - 6.5) / 6.5 * 100)
- Trend: improving
- Urgency: success
- Detection: HIGH confidence (>0.85)

VendeRápido (CASH_FLOW_CRUNCH):
- Progress: ~180% ((4.2 - 1.5) / 1.5 * 100) 
- Trend: improving
- Urgency: warning/success
- Detection: HIGH confidence (>0.90)

Consultoria Pro (SALES_STAGNATION):
- Progress: ~120% ((18.7 - 8.5) / 8.5 * 100)
- Trend: improving  
- Urgency: success
- Detection: HIGH confidence (>0.80)
*/
