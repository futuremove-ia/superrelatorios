-- =====================================================
-- EXPANSÃO v2.1 - BIBLIOTECA ESTRATÉGICA SUPERRELATÓRIOS
-- Adiciona 11 novos KPIs, 1 desafio e refinamentos
-- Mantém 100% compatibilidade com v2.0
-- =====================================================

-- =====================================================
-- 1. NOVOS KPIs (11 adições à biblioteca existente)
-- =====================================================

-- Inserir novos KPIs sem truncar os existentes
INSERT INTO kpi_master_library (code, title, description, calculation_formula, unit, domain, created_at) VALUES

-- Financeiros Adicionais
('RECEIVABLES_DAYS', 
 'Prazo de Recebimento', 
 'Tempo médio que você leva para receber dos clientes. Ciclo financeiro de entrada.', 
 'Contas a Receber / (Receita / 30)', 
 'Dias', 
 'finance', 
 NOW()),

('PAYABLES_DAYS', 
 'Prazo de Pagamento', 
 'Tempo médio que você tem para pagar fornecedores. Ciclo financeiro de saída.', 
 'Contas a Pagar / (Custos / 30)', 
 'Dias', 
 'finance', 
 NOW()),

-- Vendas Adicionais
('SALES_PIPELINE', 
 'Funil de Vendas', 
 'Valor total de negócios em negociação no momento. Pipeline de oportunidades.', 
 'Soma de oportunidades em aberto', 
 'R$', 
 'sales', 
 NOW()),

-- Marketing Adicionais
('ROAS', 
 'Retorno sobre Anúncios', 
 'Quantas vezes o valor investido em anúncios voltou em vendas. Eficiência de investimento.', 
 'Receita de Anúncios / Investimento em Anúncios', 
 'x', 
 'marketing', 
 NOW()),

-- Pessoas (RH) - NOVA CATEGORIA
('REVENUE_PER_EMP', 
 'Receita por Funcionário', 
 'Faturamento total dividido pelo número de colaboradores. Produtividade individual.', 
 'Receita Total / Número de Funcionários', 
 'R$', 
 'pessoas', 
 NOW()),

('LABOR_COST_PCT', 
 'Peso da Folha', 
 'Quanto a folha de pagamento consome do faturamento. Peso da estrutura.', 
 '(Folha de Pagamento / Receita) * 100', 
 '%', 
 'pessoas', 
 NOW()),

-- Operações - NOVA CATEGORIA
('REWORK_RATE', 
 'Taxa de Retrabalho', 
 'Percentual de serviços ou produtos que precisaram de correção. Qualidade operacional.', 
 '(Serviços Refeitos / Total Serviços) * 100', 
 '%', 
 'operacoes', 
 NOW()),

('ORDER_CYCLE', 
 'Prazo de Entrega', 
 'Tempo total do pedido até a entrega final ao cliente. Velocidade operacional.', 
 'Data Entrega - Data Pedido (média)', 
 'Dias', 
 'operacoes', 
 NOW()),

('CAPACITY_USE', 
 'Uso da Capacidade', 
 'Quanto da sua estrutura ou tempo da equipe está sendo usado. Otimização.', 
 '(Capacidade Usada / Capacidade Total) * 100', 
 '%', 
 'operacoes', 
 NOW()),

-- Estoque - NOVA CATEGORIA
('DEAD_STOCK', 
 'Estoque Parado', 
 'Valor em produtos sem venda há mais de 90 dias. Capital imobilizado.', 
 'Soma de produtos sem movimentação > 90 dias', 
 'R$', 
 'estoque', 
 NOW()),

-- Satisfação - NOVA CATEGORIA
('NPS', 
 'Satisfação do Cliente', 
 'Nota de lealdade e recomendação dada pelos clientes. Índice promotor.', 
 '% Promotores - % Detratores', 
 'pts', 
 'satisfacao', 
 NOW()),

('REPURCHASE', 
 'Taxa de Recompra', 
 'Percentual de clientes que voltaram a comprar. Retenção e fidelidade.', 
 '(Clientes que Repetiram / Total Clientes) * 100', 
 '%', 
 'satisfacao', 
 NOW());

-- =====================================================
-- 2. NOVO DESAFIO - DELIVERY_DELAY (Atraso na Operação)
-- =====================================================

INSERT INTO library_challenges (code, title, description, domain, severity_default, symptoms, related_kpi_codes, metric_tree_config, created_at) VALUES
(
    'DELIVERY_DELAY',
    'Atraso na Operação',
    'Lentidão na entrega de produtos ou na execução de serviços. Clientes insatisfeitos com prazos e competitividade prejudicada.',
    'operacoes',
    3,
    '[
        "Prazo de entrega maior que o prometido ao cliente",
        "Reclamações frequentes sobre atrasos",
        "Gargalos no processo produtivo",
        "Capacidade ociosa enquanto pedidos atrasam",
        "Dependência de fornecedores lentos"
    ]',
    ARRAY['ORDER_CYCLE', 'CAPACITY_USE', 'REWORK_RATE'],
    '{
        "main_kpi": "ORDER_CYCLE",
        "supporting_kpis": ["CAPACITY_USE", "REWORK_RATE"],
        "thresholds": {
            "critical": {"min": 30, "max": 999},
            "warning": {"min": 15, "max": 30},
            "good": {"min": 0, "max": 15}
        },
        "diagnostic_weight": {
            "ORDER_CYCLE": 0.5,
            "CAPACITY_USE": 0.3,
            "REWORK_RATE": 0.2
        }
    }',
    NOW()
);

-- =====================================================
-- 3. ATUALIZAÇÃO DE KPIs EXISTENTES (Compatibilidade)
-- =====================================================

-- Atualizar descrição do EMPLOYEE_TURNOVER para consolidar com TURNOVER
UPDATE kpi_master_library 
SET title = 'Rotatividade de Equipe',
    description = 'Percentual de funcionários que saíram ou foram trocados. Estabilidade organizacional.'
WHERE code = 'EMPLOYEE_TURNOVER';

-- =====================================================
-- 4. ATUALIZAÇÃO DE MAPEAMENTOS ESTRATÉGICOS
-- =====================================================

-- Adicionar mapeamento para DELIVERY_DELAY → FAST_OPERATION (novo objetivo)
-- Primeiro, verificar se o objetivo existe, senão criar
INSERT INTO library_goals (code, title, description, success_definition, calculation_logic_ref, target_type, suggested_timeframe_days, created_at)
SELECT 
    'FAST_OPERATION',
    'Agilizar Operação', 
    'Reduzir o tempo de entrega e aumentar o uso da capacidade. Eficiência operacional.',
    'Reduzir ORDER_CYCLE em 30% e manter CAPACITY_USE acima de 75% por 3 meses.',
    'ORDER_CYCLE reduction + CAPACITY_USE optimization',
    'decrease',
    90,
    NOW()
WHERE NOT EXISTS (SELECT 1 FROM library_goals WHERE code = 'FAST_OPERATION');

-- Adicionar mapeamento estratégico
INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active, created_at)
SELECT 
    lc.id as challenge_id,
    lg.id as recommended_goal_id,
    true as is_active,
    NOW() as created_at
FROM library_challenges lc
CROSS JOIN library_goals lg
WHERE lc.code = 'DELIVERY_DELAY' 
  AND lg.code = 'FAST_OPERATION'
  AND NOT EXISTS (
    SELECT 1 FROM strategic_templates st 
    WHERE st.challenge_id = lc.id AND st.recommended_goal_id = lg.id
  );

-- Adicionar mapeamentos para desafios existentes com novos objetivos
-- TEAM_INEFFICIENCY → HIGH_PERFORMANCE
INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active, created_at)
SELECT 
    lc.id as challenge_id,
    lg.id as recommended_goal_id,
    true as is_active,
    NOW() as calculated_at
FROM library_challenges lc
CROSS JOIN library_goals lg
WHERE lc.code = 'TEAM_INEFFICIENCY' 
  AND lg.code = 'HIGH_PERFORMANCE'
  AND NOT EXISTS (
    SELECT 1 FROM strategic_templates st 
    WHERE st.challenge_id = lc.id AND st.recommended_goal_id = lg.id
  );

-- STOCK_MONEY_TRAP → STOCK_EFFICIENCY
INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active, created_at)
SELECT 
    lc.id as challenge_id,
    lg.id as recommended_goal_id,
    true as is_active,
    NOW() as calculated_at
FROM library_challenges lc
CROSS JOIN library_goals lg
WHERE lc.code = 'STOCK_MONEY_TRAP' 
  AND lg.code = 'STOCK_EFFICIENCY'
  AND NOT EXISTS (
    SELECT 1 FROM strategic_templates st 
    WHERE st.challenge_id = lc.id AND st.recommended_goal_id = lg.id
  );

-- =====================================================
-- 5. REGRAS DE DETECÇÃO PARA NOVOS SINTOMAS
-- =====================================================

INSERT INTO symptom_detection_rules (challenge_id, kpi_code, condition_operator, threshold_value, threshold_value_max, symptom_description, confidence_weight, is_active, created_at)
SELECT 
    lc.id,
    sdr.kpi_code,
    sdr.condition_operator,
    sdr.threshold_value,
    sdr.threshold_value_max,
    sdr.symptom_description,
    sdr.confidence_weight,
    true,
    NOW()
FROM library_challenges lc
CROSS JOIN LATERAL (
    VALUES
    -- DELIVERY_DELAY
    ('DELIVERY_DELAY', 'ORDER_CYCLE', '>', 30, NULL, 'Prazo de entrega > 30 dias', 0.8),
    ('DELIVERY_DELAY', 'ORDER_CYCLE', '>', 20, NULL, 'Prazo de entrega crítico (> 20 dias)', 0.9),
    ('DELIVERY_DELAY', 'CAPACITY_USE', '<', 60, NULL, 'Capacidade subutilizada (< 60%)', 0.7),
    ('DELIVERY_DELAY', 'REWORK_RATE', '>', 15, NULL, 'Retrabalho elevado (> 15%)', 0.6),
    
    -- Atualizações para desafios existentes com novos KPIs
    ('LOW_PROFITABILITY', 'LABOR_COST_PCT', '>', 40, NULL, 'Folha consome > 40% da receita', 0.7),
    ('HIGH_FIXED_COSTS', 'LABOR_COST_PCT', '>', 50, NULL, 'Folha pesada (> 50%)', 0.8),
    ('CUSTOMER_LOSS', 'NPS', '<', 20, NULL, 'NPS baixo (< 20)', 0.8),
    ('CUSTOMER_LOSS', 'REPURCHASE', '<', 30, NULL, 'Taxa de recompra baixa (< 30%)', 0.7),
    ('LOW_SALES_CONVERSION', 'SALES_PIPELINE', '<', -1, NULL, 'Pipeline insuficiente', 0.6),
    ('HIGH_ACQUISITION_COST', 'ROAS', '<', 2, NULL, 'ROAS baixo (< 2x)', 0.7),
    ('STOCK_STAGNATION', 'DEAD_STOCK', '>', -1, NULL, 'Estoque morto alto (> 20% do total)', 0.8),
    ('TEAM_INEFFICIENCY', 'REVENUE_PER_EMP', '<', 10000, NULL, 'Receita por emp baixa (< 10k)', 0.7)
) AS sdr(challenge_code, kpi_code, condition_operator, threshold_value, threshold_value_max, symptom_description, confidence_weight)
WHERE lc.code = sdr.challenge_code
  AND NOT EXISTS (
    SELECT 1 FROM symptom_detection_rules existing
    WHERE existing.challenge_id = lc.id 
      AND existing.kpi_code = sdr.kpi_code
      AND existing.condition_operator = sdr.condition_operator
  );

-- =====================================================
-- 6. NOVAS ALAVANCAS ESTRATÉGICAS (para DELIVERY_DELAY)
-- =====================================================

INSERT INTO action_levers (challenge_id, title, description, expected_impact, implementation_complexity, time_to_result_days, priority_score, created_at)
SELECT 
    lc.id,
    al.title,
    al.description,
    al.expected_impact,
    al.implementation_complexity,
    al.time_to_result_days,
    al.priority_score,
    NOW()
FROM library_challenges lc
CROSS JOIN LATERAL (
    VALUES
    ('DELIVERY_DELAY', 'Mapear e eliminar gargalos do processo', 
     'Analisar fluxo de trabalho e identificar pontos de espera/desperdício de tempo.', 
     'Reduz ORDER_CYCLE em 20%', 'medium', 30, 1),
    ('DELIVERY_DELAY', 'Implementar sistema de priorização de pedidos', 
     'Criar filas por urgência/complexidade para otimizar sequência de trabalho.', 
     'Melhora alocação de CAPACITY_USE', 'low', 14, 2),
    ('DELIVERY_DELAY', 'Padronizar procedimentos operacionais', 
     'Criar checklists e SOPs para reduzir variação e retrabalho.', 
     'Reduz REWORK_RATE e acelera entrega', 'medium', 45, 3)
) AS al(challenge_code, title, description, expected_impact, implementation_complexity, time_to_result_days, priority_score)
WHERE lc.code = al.challenge_code;

-- =====================================================
-- 7. BENCHMARKS ADICIONAIS (para novos KPIs)
-- =====================================================

INSERT INTO industry_benchmarks (industry, kpi_code, benchmark_min, benchmark_target, benchmark_excellent, unit, source, period, description)
SELECT * FROM (VALUES
    ('Serviços', 'NPS', 20, 50, 70, 'pts', 'Qualtrics 2024', '2024', 'NPS ideal para serviços'),
    ('Varejo', 'REPURCHASE', 25, 40, 60, '%', 'ABRAS 2024', '2024', 'Taxa de recompra no varejo'),
    ('Indústria', 'CAPACITY_USE', 60, 80, 95, '%', 'IBGE 2024', '2024', 'Uso ideal da capacidade'),
    ('SaaS/Tecnologia', 'REVENUE_PER_EMP', 15000, 30000, 60000, 'R$', 'SaaS Capital 2024', '2024', 'Produtividade por funcionário'),
    ('Consultoria', 'LABOR_COST_PCT', 30, 50, 70, '%', 'Internal Analysis', '2024', 'Peso saudável da folha'),
    ('Varejo', 'DEAD_STOCK', 0, 10, 20, '%', 'ABRAS 2024', '2024', 'Percentual aceitável de estoque morto')
) AS v(industry, kpi_code, benchmark_min, benchmark_target, benchmark_excellent, unit, source, period, description)
WHERE NOT EXISTS (
    SELECT 1 FROM industry_benchmarks existing
    WHERE existing.industry = v.industry 
      AND existing.kpi_code = v.kpi_code
);

-- =====================================================
-- 8. VALIDAÇÃO DA EXPANSÃO
-- =====================================================

-- Verificar contagem após expansão
SELECT 
    'APÓS EXPANSÃO v2.1' as status,
    (SELECT COUNT(*) FROM kpi_master_library) as total_kpis,
    (SELECT COUNT(*) FROM library_challenges) as total_desafios,
    (SELECT COUNT(*) FROM library_goals) as total_objetivos,
    (SELECT COUNT(*) FROM strategic_templates) as total_mapeamentos,
    (SELECT COUNT(DISTINCT domain) FROM kpi_master_library) as categorias;

/*
RESULTADO ESPERADO:
- KPIs: 25 (14 v2.0 + 11 novos)
- Desafios: 9 (8 v2.0 + 1 novo)
- Objetivos: 8 (7 v2.0 + 1 novo)
- Mapeamentos: 9+ (8 v2.0 + 1 novo)
- Categorias: 7 (finance, sales, marketing, pessoas, operacoes, estoque, satisfacao)

✅ EXPANSÃO v2.1 CONCLUÍDA COM SUCESSO
*/
