-- =====================================================
-- SEED DATA - BIBLIOTECA DE ESTRATÉGIA PME
-- Tom de Voz: Sócio Consultor Especializado
-- =====================================================

-- 1. KPIs Master Library (Indicadores Essenciais PME)
INSERT INTO kpi_master_library (code, title, description, calculation_formula, unit, domain) VALUES
-- Financeiros
('NET_MARGIN', 'Margem Líquida', 'O que realmente sobra no bolso depois de pagar tudo', '(Receita - Custos - Despesas) / Receita * 100', '%', 'finance'),
('EBITDA_MARGIN', 'Margem EBITDA', 'Rentabilidade operacional antes de juros e impostos', 'EBITDA / Receita * 100', '%', 'finance'),
('BURN_RATE', 'Queima de Caixa', 'Quanto de caixa você está queimando por mês', 'Despesas Operacionais Mensais', 'R$', 'finance'),
('RUNWAY_MONTHS', 'Pista de Decolagem', 'Quantos meses de sobrevivência sem nova receita', 'Caixa Disponível / Burn Rate', 'meses', 'finance'),
('DAYS_TO_RECEIVE', 'Dias para Receber', 'Tempo médio para receber dos clientes', 'Soma Contas a Receber / (Receita Mensal * 30)', 'dias', 'finance'),

-- Vendas
('SALES_CYCLE_DAYS', 'Ciclo de Vendas', 'Dias desde primeiro contato até fechamento', 'Média de dias dos negócios fechados', 'dias', 'sales'),
('CONVERSION_RATE', 'Taxa de Conversão', 'Propostas que viram negócio', '(Negócios Fechados / Propostas Enviadas) * 100', '%', 'sales'),
('AVG_TICKET', 'Ticket Médio', 'Valor médio por cliente', 'Receita Total / Número de Clientes', 'R$', 'sales'),
('PIPELINE_VALUE', 'Valor do Pipeline', 'Potencial de negócios em andamento', 'Soma valores das oportunidades', 'R$', 'sales'),

-- Operacionais
('PRODUCTIVITY_PER_EMPLOYEE', 'Produtividade por Funcionário', 'Receita gerada por cada funcionário', 'Receita Total / Número de Funcionários', 'R$', 'ops'),
('OPERATIONAL_EFFICIENCY', 'Eficiência Operacional', 'Quanto da capacidade está sendo utilizada', 'Horas Produtivas / Horas Disponíveis * 100', '%', 'ops');

-- 2. Biblioteca de Desafios (Dores Reais PME)
INSERT INTO library_challenges (code, title, description, domain, severity_default, symptoms, related_kpi_codes, metric_tree_config) VALUES
(
    'LOW_MARGIN',
    'Vendo muito, mas não vejo a cor do dinheiro',
    'Sua empresa tem faturamento, mas o lucro não aparece no fim do mês. O esforço não está se convertendo em resultado financeiro.',
    'finance',
    4,
    '[
        "Margem líquida abaixo de 10%",
        "Dificuldade em pagar fornecedores no prazo",
        "Precisa fazer empréstimos para cobrir despesas operacionais",
        "Preços pressionados pelos clientes"
    ]',
    ARRAY['NET_MARGIN', 'EBITDA_MARGIN'],
    '{
        "main_kpi": "NET_MARGIN",
        "supporting_kpis": ["EBITDA_MARGIN", "AVG_TICKET"],
        "thresholds": {
            "critical": {"min": 0, "max": 5},
            "warning": {"min": 5, "max": 10},
            "good": {"min": 10, "max": 100}
        }
    }'
),
(
    'CASH_FLOW_CRUNCH',
    'A hemorragia de caixa está matando o negócio',
    'O dinheiro está saindo mais rápido que entrando. Você está vivendo no limite e qualquer imprevisto pode ser fatal.',
    'finance',
    5,
    '[
        "Runway menor que 3 meses",
        "Contas a pagar vencendo antes de receber",
        "Dificuldade em fazer folha de pagamento",
        "Queima de caixa acelerada nos últimos 2 meses"
    ]',
    ARRAY['BURN_RATE', 'RUNWAY_MONTHS', 'DAYS_TO_RECEIVE'],
    '{
        "main_kpi": "RUNWAY_MONTHS",
        "supporting_kpis": ["BURN_RATE", "DAYS_TO_RECEIVE"],
        "thresholds": {
            "critical": {"min": 0, "max": 2},
            "warning": {"min": 2, "max": 4},
            "good": {"min": 4, "max": 24}
        }
    }'
),
(
    'SALES_STAGNATION',
    'As vendas estagnaram e o futuro está incerto',
    'O crescimento parou. Os mesmos clientes, os mesmos valores, e a sensação de que o negócio não decola mais.',
    'sales',
    3,
    '[
        "Crescimento de receita < 5% nos últimos 3 meses",
        "Ciclo de vendas aumentando",
        "Taxa de conversão em queda",
        "Dependência de poucos clientes"
    ]',
    ARRAY['SALES_CYCLE_DAYS', 'CONVERSION_RATE', 'PIPELINE_VALUE'],
    '{
        "main_kpi": "CONVERSION_RATE",
        "supporting_kpis": ["SALES_CYCLE_DAYS", "PIPELINE_VALUE"],
        "thresholds": {
            "critical": {"min": 0, "max": 10},
            "warning": {"min": 10, "max": 20},
            "good": {"min": 20, "max": 100}
        }
    }'
);

-- 3. Biblioteca de Objetivos (Destinos Claros)
INSERT INTO library_goals (code, title, description, success_definition, calculation_logic_ref, target_type, suggested_timeframe_days) VALUES
(
    'PROFIT_MAXIMIZER',
    'Maximizar Lucro Líquido',
    'Transformar vendas em lucro real e sustentável.',
    'Margem líquida consistentemente acima de 15% por 3 meses consecutivos, com capacidade de reinvestimento.',
    'NET_MARGIN improvement trend',
    'increase',
    90
),
(
    'BURN_REDUCTION',
    'Estancar a queima de caixa',
    'Alcançar equilíbrio financeiro e criar reserva de segurança.',
    'Runway mínimo de 6 meses + margem positiva por 2 meses consecutivos.',
    'RUNWAY_MONTHS stability',
    'increase',
    60
),
(
    'SALES_ACCELERATION',
    'Acelerar o Motor de Vendas',
    'Criar máquina de crescimento previsível e escalável.',
    'Crescimento de receita > 20% ao mês + pipeline 3x maior que meta mensal.',
    'CONVERSION_RATE + PIPELINE_VALUE growth',
    'increase',
    75
);

-- 4. Templates Estratégicos (Mapeamento Challenge → Goal)
INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active) VALUES
((SELECT id FROM library_challenges WHERE code = 'LOW_MARGIN'), (SELECT id FROM library_goals WHERE code = 'PROFIT_MAXIMIZER'), true),
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), (SELECT id FROM library_goals WHERE code = 'BURN_REDUCTION'), true),
((SELECT id FROM library_challenges WHERE code = 'SALES_STAGNATION'), (SELECT id FROM library_goals WHERE code = 'SALES_ACCELERATION'), true);

-- 5. Exemplo de Foco Estratégico (Para testes)
-- Este seria criado dinamicamente quando o usuário ativa um desafio
/*
INSERT INTO user_strategy_focus (organization_id, challenge_id, goal_id, context_notes) VALUES
(
    (SELECT id FROM organizations LIMIT 1), -- Primeira organização de teste
    (SELECT id FROM library_challenges WHERE code = 'LOW_MARGIN'),
    (SELECT id FROM library_goals WHERE code = 'PROFIT_MAXIMIZER'),
    'Detectado via relatório financeiro: margem líquida de 7% nos últimos 2 meses. Cliente relatou dificuldade em pagar fornecedores.'
);
*/

-- =====================================================
-- VALIDAÇÃO DOS DADOS
-- =====================================================

-- Verificar se tudo foi inserido corretamente
SELECT 
    'KPIs' as table_name, COUNT(*) as total_count FROM kpi_master_library
UNION ALL
SELECT 
    'Challenges' as table_name, COUNT(*) as total_count FROM library_challenges
UNION ALL
SELECT 
    'Goals' as table_name, COUNT(*) as total_count FROM library_goals
UNION ALL
SELECT 
    'Templates' as table_name, COUNT(*) as total_count FROM strategic_templates;

-- Verificar configuração das árvores de métricas
SELECT 
    lc.code as challenge_code,
    lc.title,
    lc.metric_tree_config->>'main_kpi' as main_kpi,
    jsonb_array_length(lc.metric_tree_config->'supporting_kpis') as supporting_kpis_count
FROM library_challenges lc
ORDER BY lc.code;
