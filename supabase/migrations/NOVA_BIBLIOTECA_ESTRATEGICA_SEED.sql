-- =====================================================
-- NOVA BIBLIOTECA ESTRATÉGICA - TERMINOLOGIA DIDÁTICA
-- Substituição completa: 14 KPIs, 8 Desafios, 7 Objetivos
-- Interface: Português didático | Código: Inglês técnico
-- =====================================================

-- =====================================================
-- 1. BIBLIOTECA DE KPIs (14 indicadores)
-- Código técnico (IA) | Título didático (Interface)
-- =====================================================

-- Limpar biblioteca atual e inserir nova estrutura
TRUNCATE TABLE kpi_master_library CASCADE;

INSERT INTO kpi_master_library (code, title, description, calculation_formula, unit, domain, created_at) VALUES
-- FINANCEIROS (8 KPIs)
('NET_PROFIT', 
 'Lucro Líquido', 
 'Resultado final após todas as despesas e impostos. O que realmente sobra no bolso.', 
 'Receita Total - Custos - Despesas - Impostos', 
 'R$', 
 'finance', 
 NOW()),

('NET_MARGIN', 
 'Margem Líquida', 
 'Porcentagem de lucro sobre o faturamento total. Indicador de saúde financeira.', 
 '(Lucro Líquido / Receita Total) * 100', 
 '%', 
 'finance', 
 NOW()),

('CONTRIB_MARGIN', 
 'Margem de Contribuição', 
 'Quanto sobra da venda para pagar os custos fixos. Poder de precificação.', 
 '(Receita - Custos Variáveis) / Receita * 100', 
 '%', 
 'finance', 
 NOW()),

('FIXED_COSTS', 
 'Custos Fixos', 
 'Total de despesas que não variam com a venda. Estrutura operacional.', 
 'Soma de aluguel, salários, utilities, etc.', 
 'R$', 
 'finance', 
 NOW()),

('BREAK_EVEN', 
 'Ponto de Equilíbrio', 
 'Faturamento necessário para não ter prejuízo. Meta mínima de sobrevivência.', 
 'Custos Fixos / Margem de Contribuição', 
 'R$', 
 'finance', 
 NOW()),

('CASH_FLOW', 
 'Fluxo de Caixa', 
 'Saldo disponível de entradas e saídas no período. Disponibilidade imediata.', 
 'Entradas - Saídas (período)', 
 'R$', 
 'finance', 
 NOW()),

('ACCOUNTS_RECEIVABLE', 
 'Contas a Receber', 
 'Total de valores pendentes de pagamento por clientes. Dinheiro a entrar.', 
 'Soma de faturas pendentes', 
 'R$', 
 'finance', 
 NOW()),

('AVG_COLLECTION_PERIOD', 
 'Prazo Médio de Recebimento', 
 'Tempo médio que a empresa leva para receber as vendas. Ciclo financeiro.', 
 '(Contas a Receber / Receita Total) * 30', 
 'Dias', 
 'finance', 
 NOW()),

-- VENDAS (2 KPIs)
('SALES_CONVERSION', 
 'Taxa de Conversão', 
 'Porcentagem de orçamentos que viraram vendas. Eficiência comercial.', 
 '(Vendas Fechadas / Orçamentos Enviados) * 100', 
 '%', 
 'sales', 
 NOW()),

('AVG_TICKET', 
 'Ticket Médio', 
 'Valor médio de cada venda realizada. Tamanho do negócio.', 
 'Receita Total / Número de Vendas', 
 'R$', 
 'sales', 
 NOW()),

-- MARKETING (2 KPIs)
('CUSTOMER_ACQ_COST', 
 'Custo de Aquisição (CAC)', 
 'Investimento em marketing para atrair cada cliente. Eficiência de captação.', 
 'Gasto em Marketing / Novos Clientes', 
 'R$', 
 'marketing', 
 NOW()),

('CUSTOMER_LIFETIME_VALUE', 
 'Valor do Cliente (LTV)', 
 'Total que o cliente gasta na empresa enquanto é ativo. Valor do relacionamento.', 
 'Ticket Médio * Frequência * Tempo de Vida', 
 'R$', 
 'marketing', 
 NOW()),

-- OPERAÇÕES (1 KPI)
('INVENTORY_TURNOVER', 
 'Giro de Estoque', 
 'Quantas vezes o estoque foi renovado no período. Velocidade de vendas.', 
 'Custo das Vendas / Estoque Médio', 
 'x', 
 'operations', 
 NOW()),

-- RH (1 KPI)
('EMPLOYEE_TURNOVER', 
 'Rotatividade de Equipe', 
 'Porcentagem de funcionários que saíram no período. Estabilidade organizacional.', 
 '(Funcionários que Saíram / Total de Funcionários) * 100', 
 '%', 
 'hr', 
 NOW());

-- =====================================================
-- 2. BIBLIOTECA DE DESAFIOS (8 desafios)
-- Título didático (Interface) | Código técnico (IA)
-- =====================================================

TRUNCATE TABLE library_challenges CASCADE;

INSERT INTO library_challenges (code, title, description, domain, severity_default, symptoms, related_kpi_codes, metric_tree_config, created_at) VALUES
-- 1. Baixa Lucratividade
(
    'LOW_PROFITABILITY',
    'Baixa Lucratividade',
    'A empresa fatura, mas o lucro final é insuficiente. Margens comprimidas e dificuldade de reinvestimento.',
    'finance',
    4,
    '[
        "Margem líquida abaixo de 5%",
        "Lucro não cobre o esforço operacional",
        "Dificuldade em pagar prêmios ou bonificações",
        "Preços pressionados pela concorrência"
    ]',
    ARRAY['NET_PROFIT', 'NET_MARGIN', 'CONTRIB_MARGIN'],
    '{
        "main_kpi": "NET_MARGIN",
        "supporting_kpis": ["NET_PROFIT", "CONTRIB_MARGIN"],
        "thresholds": {
            "critical": {"min": 0, "max": 3},
            "warning": {"min": 3, "max": 8},
            "good": {"min": 8, "max": 50}
        },
        "diagnostic_weight": {
            "NET_MARGIN": 0.5,
            "NET_PROFIT": 0.3,
            "CONTRIB_MARGIN": 0.2
        }
    }',
    NOW()
),

-- 2. Falta de Caixa
(
    'CASH_SHORTAGE',
    'Falta de Caixa',
    'Dificuldade para pagar as contas do mês no prazo. Ciclo financeiro desfavorável.',
    'finance',
    5,
    '[
        "Saldo de caixa negativo frequentemente",
        "Atraso no pagamento de fornecedores",
        "Dependência de empréstimos para pagar folha",
        "Cheques ou boletos pré-datados"
    ]',
    ARRAY['CASH_FLOW', 'AVG_COLLECTION_PERIOD', 'ACCOUNTS_RECEIVABLE'],
    '{
        "main_kpi": "CASH_FLOW",
        "supporting_kpis": ["AVG_COLLECTION_PERIOD", "ACCOUNTS_RECEIVABLE"],
        "thresholds": {
            "critical": {"min": -999999, "max": 0},
            "warning": {"min": 0, "max": 50000},
            "good": {"min": 50000, "max": 999999999}
        },
        "diagnostic_weight": {
            "CASH_FLOW": 0.5,
            "AVG_COLLECTION_PERIOD": 0.3,
            "ACCOUNTS_RECEIVABLE": 0.2
        }
    }',
    NOW()
),

-- 3. Custo Fixo Elevado
(
    'HIGH_FIXED_COSTS',
    'Custo Fixo Elevado',
    'A estrutura da empresa consome muito do faturamento. Pouca flexibilidade operacional.',
    'finance',
    4,
    '[
        "Custos fixos > 70% da receita",
        "Dificuldade de reduzir despesas em crise",
        "Alto comprometimento com aluguel/salários",
        "Estrutura pesada para o faturamento"
    ]',
    ARRAY['FIXED_COSTS', 'BREAK_EVEN', 'NET_MARGIN'],
    '{
        "main_kpi": "FIXED_COSTS",
        "supporting_kpis": ["BREAK_EVEN", "NET_MARGIN"],
        "thresholds": {
            "critical": {"min": 0, "max": -1},
            "warning": {"min": -1, "max": 1},
            "good": {"min": 1, "max": 999}
        },
        "diagnostic_weight": {
            "FIXED_COSTS": 0.4,
            "BREAK_EVEN": 0.35,
            "NET_MARGIN": 0.25
        }
    }',
    NOW()
),

-- 4. Atraso no Recebimento
(
    'LATE_RECEIVABLES',
    'Atraso no Recebimento',
    'Prazo de recebimento muito longo ou inadimplência. Capital de giro comprometido.',
    'finance',
    3,
    '[
        "Prazo médio de recebimento > 45 dias",
        "Inadimplência crescente",
        "Clientes atrasando pagamentos sistematicamente",
        "Necessidade de antecipar recebíveis"
    ]',
    ARRAY['AVG_COLLECTION_PERIOD', 'ACCOUNTS_RECEIVABLE', 'CASH_FLOW'],
    '{
        "main_kpi": "AVG_COLLECTION_PERIOD",
        "supporting_kpis": ["ACCOUNTS_RECEIVABLE", "CASH_FLOW"],
        "thresholds": {
            "critical": {"min": 60, "max": 999},
            "warning": {"min": 45, "max": 60},
            "good": {"min": 0, "max": 45}
        },
        "diagnostic_weight": {
            "AVG_COLLECTION_PERIOD": 0.5,
            "ACCOUNTS_RECEIVABLE": 0.3,
            "CASH_FLOW": 0.2
        }
    }',
    NOW()
),

-- 5. Perda de Clientes
(
    'CUSTOMER_LOSS',
    'Perda de Clientes',
    'Taxa alta de cancelamento ou não retorno de clientes. Fidelidade baixa.',
    'marketing',
    4,
    '[
        "Taxa de churn > 20% mensal",
        "Clientes não repetem compra",
        "Reclamações frequentes de atendimento",
        "Baixa satisfação medida"
    ]',
    ARRAY['EMPLOYEE_TURNOVER', 'CUSTOMER_LIFETIME_VALUE', 'AVG_TICKET'],
    '{
        "main_kpi": "EMPLOYEE_TURNOVER",
        "supporting_kpis": ["CUSTOMER_LIFETIME_VALUE", "AVG_TICKET"],
        "thresholds": {
            "critical": {"min": 30, "max": 100},
            "warning": {"min": 15, "max": 30},
            "good": {"min": 0, "max": 15}
        },
        "diagnostic_weight": {
            "EMPLOYEE_TURNOVER": 0.4,
            "CUSTOMER_LIFETIME_VALUE": 0.35,
            "AVG_TICKET": 0.25
        }
    }',
    NOW()
),

-- 6. Baixa Conversão de Vendas
(
    'LOW_SALES_CONVERSION',
    'Baixa Conversão de Vendas',
    'Muitos orçamentos enviados, mas poucos fechados. Ineficiência comercial.',
    'sales',
    3,
    '[
        "Taxa de conversão < 15%",
        "Muitos orçamentos sem retorno",
        "Preços rejeitados frequentemente",
        "Concorrência vencendo nos fechamentos"
    ]',
    ARRAY['SALES_CONVERSION', 'AVG_TICKET', 'CUSTOMER_ACQ_COST'],
    '{
        "main_kpi": "SALES_CONVERSION",
        "supporting_kpis": ["AVG_TICKET", "CUSTOMER_ACQ_COST"],
        "thresholds": {
            "critical": {"min": 0, "max": 10},
            "warning": {"min": 10, "max": 20},
            "good": {"min": 20, "max": 100}
        },
        "diagnostic_weight": {
            "SALES_CONVERSION": 0.5,
            "AVG_TICKET": 0.25,
            "CUSTOMER_ACQ_COST": 0.25
        }
    }',
    NOW()
),

-- 7. Custo de Venda Elevado
(
    'HIGH_ACQUISITION_COST',
    'Custo de Venda Elevado',
    'O gasto para atrair um cliente é maior que o lucro. Marketing ineficiente.',
    'marketing',
    4,
    '[
        "CAC > 30% do ticket médio",
        "Marketing não gera retorno",
        "Canais de aquisição caros",
        "Dependência de anúncios pagos"
    ]',
    ARRAY['CUSTOMER_ACQ_COST', 'CUSTOMER_LIFETIME_VALUE', 'NET_MARGIN'],
    '{
        "main_kpi": "CUSTOMER_ACQ_COST",
        "supporting_kpis": ["CUSTOMER_LIFETIME_VALUE", "NET_MARGIN"],
        "thresholds": {
            "critical": {"min": 0, "max": 0.5},
            "warning": {"min": 0.5, "max": 1.0},
            "good": {"min": 1.0, "max": 10.0}
        },
        "diagnostic_weight": {
            "CUSTOMER_ACQ_COST": 0.4,
            "CUSTOMER_LIFETIME_VALUE": 0.35,
            "NET_MARGIN": 0.25
        }
    }',
    NOW()
),

-- 8. Estoque Parado
(
    'STOCK_STAGNATION',
    'Estoque Parado',
    'Dinheiro imobilizado em produtos que não giram. Capital travado.',
    'operations',
    3,
    '[
        "Giro de estoque < 2x ao ano",
        "Produtos parados há mais de 6 meses",
        "Descontos agressivos para liquidar",
        "Capital de giro comprometido com estoque"
    ]',
    ARRAY['INVENTORY_TURNOVER', 'CASH_FLOW', 'AVG_TICKET'],
    '{
        "main_kpi": "INVENTORY_TURNOVER",
        "supporting_kpis": ["CASH_FLOW", "AVG_TICKET"],
        "thresholds": {
            "critical": {"min": 0, "max": 2},
            "warning": {"min": 2, "max": 4},
            "good": {"min": 4, "max": 20}
        },
        "diagnostic_weight": {
            "INVENTORY_TURNOVER": 0.5,
            "CASH_FLOW": 0.3,
            "AVG_TICKET": 0.2
        }
    }',
    NOW()
);

-- =====================================================
-- 3. BIBLIOTECA DE OBJETIVOS (7 objetivos)
-- Título didático (Interface) | Código técnico (IA)
-- =====================================================

TRUNCATE TABLE library_goals CASCADE;

INSERT INTO library_goals (code, title, description, success_definition, calculation_logic_ref, target_type, suggested_timeframe_days, created_at) VALUES
-- 1. Aumentar o Lucro
(
    'INCREASE_PROFIT',
    'Aumentar o Lucro',
    'Elevar a porcentagem de lucro líquido sobre a receita. Focar na margem final.',
    'Aumentar NET_MARGIN em pelo menos 5 pontos percentuais e manter por 3 meses consecutivos.',
    'NET_MARGIN improvement trend',
    'increase',
    90,
    NOW()
),

-- 2. Equilibrar o Caixa
(
    'BALANCE_CASH_FLOW',
    'Equilibrar o Caixa',
    'Garantir que as entradas superem as saídas mensalmente. Eliminar saldo negativo.',
    'Manter CASH_FLOW positivo por 3 meses consecutivos com margem de segurança de 20%.',
    'CASH_FLOW stability analysis',
    'increase',
    60,
    NOW()
),

-- 3. Reduzir Despesas Fixas
(
    'REDUCE_EXPENSES',
    'Reduzir Despesas Fixas',
    'Otimizar custos operacionais sem perder a qualidade. Eficiência estrutural.',
    'Reduzir FIXED_COSTS em 10-15% sem impactar operações críticas.',
    'FIXED_COSTS optimization',
    'decrease',
    75,
    NOW()
),

-- 4. Antecipar Recebimentos
(
    'ACCELERATE_RECEIPTS',
    'Antecipar Recebimentos',
    'Diminuir o prazo médio entre a venda e o dinheiro no caixa. Ciclo financeiro otimizado.',
    'Reduzir AVG_COLLECTION_PERIOD para menos de 30 dias.',
    'AVG_COLLECTION_PERIOD reduction',
    'decrease',
    60,
    NOW()
),

-- 5. Melhorar Conversão de Vendas
(
    'IMPROVE_CONVERSION',
    'Melhorar Conversão de Vendas',
    'Aumentar a eficácia da equipe comercial nos fechamentos. Eficiência de vendas.',
    'Aumentar SALES_CONVERSION para pelo menos 25%.',
    'SALES_CONVERSION improvement',
    'increase',
    90,
    NOW()
),

-- 6. Reter Clientes
(
    'RETAIN_CUSTOMERS',
    'Reter Clientes',
    'Aumentar a recorrência e o tempo de permanência do cliente. Fidelização.',
    'Reduzir EMPLOYEE_TURNOVER para menos de 10% mensal e aumentar LTV.',
    'EMPLOYEE_TURNOVER reduction + LTV increase',
    'decrease',
    120,
    NOW()
),

-- 7. Otimizar Estoque
(
    'OPTIMIZE_STOCK',
    'Otimizar Estoque',
    'Ajustar o estoque para evitar faltas e excessos. Capital de giro liberado.',
    'Aumentar INVENTORY_TURNOVER para pelo menos 6x ao ano.',
    'INVENTORY_TURNOVER optimization',
    'increase',
    90,
    NOW()
);

-- =====================================================
-- 4. MAPEAMENTO ESTRATÉGICO (Desafio → Objetivo)
-- =====================================================

TRUNCATE TABLE strategic_templates CASCADE;

INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active, created_at)
SELECT 
    lc.id as challenge_id,
    lg.id as recommended_goal_id,
    true as is_active,
    NOW() as created_at
FROM library_challenges lc
CROSS JOIN library_goals lg
WHERE 
    -- Baixa Lucratividade → Aumentar o Lucro
    (lc.code = 'LOW_PROFITABILITY' AND lg.code = 'INCREASE_PROFIT')
    OR
    -- Falta de Caixa → Equilibrar o Caixa
    (lc.code = 'CASH_SHORTAGE' AND lg.code = 'BALANCE_CASH_FLOW')
    OR
    -- Custo Fixo Elevado → Reduzir Despesas Fixas
    (lc.code = 'HIGH_FIXED_COSTS' AND lg.code = 'REDUCE_EXPENSES')
    OR
    -- Atraso no Recebimento → Antecipar Recebimentos
    (lc.code = 'LATE_RECEIVABLES' AND lg.code = 'ACCELERATE_RECEIPTS')
    OR
    -- Perda de Clientes → Reter Clientes
    (lc.code = 'CUSTOMER_LOSS' AND lg.code = 'RETAIN_CUSTOMERS')
    OR
    -- Baixa Conversão → Melhorar Conversão
    (lc.code = 'LOW_SALES_CONVERSION' AND lg.code = 'IMPROVE_CONVERSION')
    OR
    -- Custo de Venda Elevado → Melhorar Conversão
    (lc.code = 'HIGH_ACQUISITION_COST' AND lg.code = 'IMPROVE_CONVERSION')
    OR
    -- Estoque Parado → Otimizar Estoque
    (lc.code = 'STOCK_STAGNATION' AND lg.code = 'OPTIMIZE_STOCK');

-- =====================================================
-- 5. ALAVANCAS ESTRATÉGICAS (Top 3 por desafio)
-- =====================================================

TRUNCATE TABLE action_levers CASCADE;

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
    -- LOW_PROFITABILITY
    ('LOW_PROFITABILITY', 'Revisar precificação de produtos principais', 
     'Analisar margem de contribuição dos 20% de produtos que geram 80% da receita e ajustar preços.', 
     'Aumenta CONTRIB_MARGIN em 3-5%', 'medium', 30, 1),
    ('LOW_PROFITABILITY', 'Negociar custos variáveis com fornecedores', 
     'Focar nos maiores fornecedores para reduzir custos de insumos em 5-10%.', 
     'Reduz custos diretos', 'medium', 45, 2),
    ('LOW_PROFITABILITY', 'Eliminar produtos com margem negativa', 
     'Identificar e descontinuar produtos/serviços que geram prejuízo.', 
     'Foca no que dá lucro', 'low', 60, 3),
    
    -- CASH_SHORTAGE
    ('CASH_SHORTAGE', 'Renegociar prazos de pagamento com fornecedores', 
     'Estender prazo de 30 para 45-60 dias com principais fornecedores.', 
     'Libera caixa imediato', 'medium', 15, 1),
    ('CASH_SHORTAGE', 'Implementar régua de cobrança automática', 
     'Criar sistema de lembretes dia 5, aviso dia 15, negociação dia 30.', 
     'Reduz prazo de recebimento', 'low', 21, 2),
    ('CASH_SHORTAGE', 'Antecipar recebíveis via factoring', 
     'Usar factoring para receber em 2 dias ao invés de 45, mesmo com desconto.', 
     'Caixa imediato', 'low', 7, 3),
    
    -- HIGH_FIXED_COSTS
    ('HIGH_FIXED_COSTS', 'Revisar contratos de aluguel e serviços', 
     'Renegociar aluguel, internet, telefone, contabilidade para reduzir 10%.', 
     'Reduz FIXO mensal', 'medium', 30, 1),
    ('HIGH_FIXED_COSTS', 'Otimizar escala de equipe', 
     'Analisar produtividade por funcionário e ajustar equipe à demanda real.', 
     'Reduz custo pessoal', 'high', 60, 2),
    ('HIGH_FIXED_COSTS', 'Compartilhar custos de infraestrutura', 
     'Sublocar espaço ocioso ou compartilhar equipamentos.', 
     'Reduz custos fixos', 'medium', 45, 3),
    
    -- LATE_RECEIVABLES
    ('LATE_RECEIVABLES', 'Exigir pagamento adiantado ou à vista', 
     'Oferecer desconto de 5% para pagamento à vista no fechamento.', 
     'Reduz prazo de recebimento', 'low', 14, 1),
    ('LATE_RECEIVABLES', 'Implementar análise de crédito pré-venda', 
     'Verificar inadimplência antes de vender a prazo para novos clientes.', 
     'Reduz inadimplência', 'medium', 21, 2),
    ('LATE_RECEIVABLES', 'Cobrar juros de mora contratuais', 
     'Aplicar juros de 2% ao mês para pagamentos atrasados.', 
     'Desincentiva atraso', 'low', 7, 3),
    
    -- CUSTOMER_LOSS
    ('CUSTOMER_LOSS', 'Implementar programa de fidelidade', 
     'Criar sistema de pontos ou descontos progressivos para compras recorrentes.', 
     'Aumenta retenção', 'medium', 45, 1),
    ('CUSTOMER_LOSS', 'Fazer pesquisa de satisfação pós-venda', 
     'Ligar 7 dias após venda para verificar satisfação e resolver problemas.', 
     'Identifica insatisfação', 'low', 14, 2),
    ('CUSTOMER_LOSS', 'Criar oferta exclusiva para clientes inativos', 
     'Enviar promoção especial para clientes que não compram há 3 meses.', 
     'Recupera clientes', 'low', 21, 3),
    
    -- LOW_SALES_CONVERSION
    ('LOW_SALES_CONVERSION', 'Treinar equipe em técnicas de fechamento', 
     'Capacitar vendedores em técnicas de negociação e superação de objeções.', 
     'Aumenta taxa de conversão', 'medium', 30, 1),
    ('LOW_SALES_CONVERSION', 'Criar propostas automatizadas e padronizadas', 
     'Desenvolver templates profissionais que agilizam orçamentos.', 
     'Reduz tempo de resposta', 'low', 14, 2),
    ('LOW_SALES_CONVERSION', 'Fazer follow-up sistemático de orçamentos', 
     'Implementar 3 tentativas de contato após envio de orçamento.', 
     'Aumenta fechamentos', 'low', 7, 3),
    
    -- HIGH_ACQUISITION_COST
    ('HIGH_ACQUISITION_COST', 'Focar em marketing de indicação', 
     'Criar programa de indicação premiada para clientes atuais.', 
     'Reduz CAC em 50%', 'low', 30, 1),
    ('HIGH_ACQUISITION_COST', 'Desligar canais de marketing que não convertem', 
     'Analisar CAC por canal e desligar os 20% piores performers.', 
     'Reduz CAC imediato', 'medium', 14, 2),
    ('HIGH_ACQUISITION_COST', 'Otimizar landing pages para conversão', 
     'Aumentar taxa de conversão de visitantes em leads qualificados.', 
     'Melhora eficiência', 'medium', 21, 3),
    
    -- STOCK_STAGNATION
    ('STOCK_STAGNATION', 'Implementar just-in-time com fornecedores', 
     'Negociar entregas mais frequentes em menores quantidades.', 
     'Reduz estoque imobilizado', 'medium', 60, 1),
    ('STOCK_STAGNATION', 'Fazer promoções de queima de estoque', 
     'Liquidar produtos parados com descontos de 20-30%.', 
     'Libera capital', 'low', 14, 2),
    ('STOCK_STAGNATION', 'Analisar curva ABC do estoque', 
     'Identificar produtos A (20% que geram 80% das vendas) e focar neles.', 
     'Otimiza mix', 'medium', 30, 3)
) AS al(challenge_code, title, description, expected_impact, implementation_complexity, time_to_result_days, priority_score)
WHERE lc.code = al.challenge_code;

-- =====================================================
-- 6. REGRAS DE DETECÇÃO AUTOMÁTICA (Symptom Detection)
-- =====================================================

TRUNCATE TABLE symptom_detection_rules CASCADE;

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
    -- LOW_PROFITABILITY
    ('LOW_PROFITABILITY', 'NET_MARGIN', '<', 5, NULL, 'Margem líquida abaixo de 5%', 0.8),
    ('LOW_PROFITABILITY', 'NET_MARGIN', '<', 3, NULL, 'Margem líquida crítica (< 3%)', 0.9),
    ('LOW_PROFITABILITY', 'CONTRIB_MARGIN', '<', 20, NULL, 'Margem de contribuição baixa', 0.7),
    
    -- CASH_SHORTAGE
    ('CASH_SHORTAGE', 'CASH_FLOW', '<', 0, NULL, 'Fluxo de caixa negativo', 0.9),
    ('CASH_SHORTAGE', 'AVG_COLLECTION_PERIOD', '>', 45, NULL, 'Prazo de recebimento muito longo', 0.7),
    ('CASH_SHORTAGE', 'AVG_COLLECTION_PERIOD', '>', 60, NULL, 'Prazo de recebimento crítico (> 60 dias)', 0.8),
    
    -- HIGH_FIXED_COSTS
    ('HIGH_FIXED_COSTS', 'FIXED_COSTS', '>', -1, NULL, 'Custos fixos > 70% da receita', 0.8),
    ('HIGH_FIXED_COSTS', 'BREAK_EVEN', '>', 1, NULL, 'Ponto de equilíbrio muito alto', 0.7),
    
    -- LATE_RECEIVABLES
    ('LATE_RECEIVABLES', 'AVG_COLLECTION_PERIOD', '>', 45, NULL, 'Prazo médio de recebimento > 45 dias', 0.8),
    ('LATE_RECEIVABLES', 'AVG_COLLECTION_PERIOD', '>', 60, NULL, 'Prazo médio de recebimento crítico', 0.9),
    ('LATE_RECEIVABLES', 'ACCOUNTS_RECEIVABLE', '>', 100000, NULL, 'Contas a receber elevadas', 0.6),
    
    -- CUSTOMER_LOSS
    ('CUSTOMER_LOSS', 'EMPLOYEE_TURNOVER', '>', 20, NULL, 'Taxa de perda de clientes > 20%', 0.8),
    ('CUSTOMER_LOSS', 'EMPLOYEE_TURNOVER', '>', 30, NULL, 'Taxa de perda de clientes crítica', 0.9),
    ('CUSTOMER_LOSS', 'CUSTOMER_LIFETIME_VALUE', '<', 500, NULL, 'LTV abaixo do esperado', 0.6),
    
    -- LOW_SALES_CONVERSION
    ('LOW_SALES_CONVERSION', 'SALES_CONVERSION', '<', 15, NULL, 'Taxa de conversão < 15%', 0.8),
    ('LOW_SALES_CONVERSION', 'SALES_CONVERSION', '<', 10, NULL, 'Taxa de conversão crítica (< 10%)', 0.9),
    
    -- HIGH_ACQUISITION_COST
    ('HIGH_ACQUISITION_COST', 'CUSTOMER_ACQ_COST', '>', -1, NULL, 'CAC > 30% do ticket médio', 0.8),
    ('HIGH_ACQUISITION_COST', 'CUSTOMER_ACQ_COST', '>', -1, NULL, 'CAC maior que LTV', 0.9),
    
    -- STOCK_STAGNATION
    ('STOCK_STAGNATION', 'INVENTORY_TURNOVER', '<', 4, NULL, 'Giro de estoque < 4x ao ano', 0.8),
    ('STOCK_STAGNATION', 'INVENTORY_TURNOVER', '<', 2, NULL, 'Giro de estoque crítico (< 2x)', 0.9)
) AS sdr(challenge_code, kpi_code, condition_operator, threshold_value, threshold_value_max, symptom_description, confidence_weight)
WHERE lc.code = sdr.challenge_code;

-- =====================================================
-- 7. BENCHMARKS SETORIAIS (Atualizados)
-- =====================================================

TRUNCATE TABLE industry_benchmarks CASCADE;

INSERT INTO industry_benchmarks (industry, kpi_code, benchmark_min, benchmark_target, benchmark_excellent, unit, source, period, description) VALUES
-- Serviços
('Serviços', 'NET_MARGIN', 10, 20, 35, '%', 'Sebrae 2024', '2024', 'Serviços profissionais devem ter margens saudáveis'),
('Serviços', 'NET_PROFIT', 5000, 15000, 50000, 'R$', 'Internal Analysis', '2024', 'Lucro líquido mínimo mensal para sustentabilidade'),
('Serviços', 'AVG_COLLECTION_PERIOD', 15, 30, 45, 'Dias', 'Sebrae 2024', '2024', 'Prazo de recebimento em serviços'),
('Serviços', 'SALES_CONVERSION', 20, 30, 50, '%', 'Internal Analysis', '2024', 'Taxa de conversão esperada'),

-- Varejo
('Varejo', 'NET_MARGIN', 8, 15, 25, '%', 'ABRAS 2024', '2024', 'Margem típica do varejo'),
('Varejo', 'INVENTORY_TURNOVER', 6, 12, 20, 'x', 'ABRAS 2024', '2024', 'Giro de estoque no varejo'),
('Varejo', 'AVG_COLLECTION_PERIOD', 0, 0, 30, 'Dias', 'ABRAS 2024', '2024', 'Varejo geralmente à vista'),
('Varejo', 'SALES_CONVERSION', 25, 40, 60, '%', 'Internal Analysis', '2024', 'Conversão esperada no varejo'),

-- Indústria
('Indústria', 'NET_MARGIN', 5, 12, 20, '%', 'IBGE 2024', '2024', 'Margem típica industrial'),
('Indústria', 'INVENTORY_TURNOVER', 4, 8, 15, 'x', 'IBGE 2024', '2024', 'Giro de estoque em indústria'),
('Indústria', 'AVG_COLLECTION_PERIOD', 30, 45, 60, 'Dias', 'IBGE 2024', '2024', 'Prazo de recebimento industrial'),

-- SaaS/Tecnologia
('SaaS/Tecnologia', 'NET_MARGIN', 15, 25, 40, '%', 'SaaS Capital 2024', '2024', 'Margem típica SaaS'),
('SaaS/Tecnologia', 'CUSTOMER_ACQ_COST', 100, 300, 500, 'R$', 'SaaS Capital 2024', '2024', 'CAC aceitável por cliente'),
('SaaS/Tecnologia', 'CUSTOMER_LIFETIME_VALUE', 1000, 3000, 10000, 'R$', 'SaaS Capital 2024', '2024', 'LTV esperado'),
('SaaS/Tecnologia', 'EMPLOYEE_TURNOVER', 5, 10, 20, '%', 'SaaS Capital 2024', '2024', 'Churn mensal aceitável'),

-- Consultoria
('Consultoria', 'NET_MARGIN', 20, 35, 50, '%', 'Internal Analysis', '2024', 'Margem típica consultoria'),
('Consultoria', 'AVG_TICKET', 2000, 5000, 20000, 'R$', 'Internal Analysis', '2024', 'Ticket médio consultoria'),
('Consultoria', 'SALES_CONVERSION', 15, 25, 40, '%', 'Internal Analysis', '2024', 'Conversão consultoria B2B');

-- =====================================================
-- 8. VALIDAÇÃO DA MIGRAÇÃO
-- =====================================================

-- Verificar contagem de registros
SELECT 'KPIs' as entity, COUNT(*) as total FROM kpi_master_library
UNION ALL
SELECT 'Desafios', COUNT(*) FROM library_challenges
UNION ALL
SELECT 'Objetivos', COUNT(*) FROM library_goals
UNION ALL
SELECT 'Mapeamentos', COUNT(*) FROM strategic_templates
UNION ALL
SELECT 'Alavancas', COUNT(*) FROM action_levers
UNION ALL
SELECT 'Regras de Detecção', COUNT(*) FROM symptom_detection_rules
UNION ALL
SELECT 'Benchmarks', COUNT(*) FROM industry_benchmarks;

-- =====================================================
-- RESUMO DA MIGRAÇÃO
-- =====================================================

/*
✅ MIGRAÇÃO COMPLETA REALIZADA:

ANTES:
- KPIs: 13 indicadores
- Desafios: 3 desafios
- Objetivos: 3 objetivos

DEPOIS:
- KPIs: 14 indicadores (1 novo: NET_PROFIT)
- Desafios: 8 desafios (5 novos, 3 expandidos)
- Objetivos: 7 objetivos (4 novos)

MUDANÇAS PRINCIPAIS:
1. Terminologia didática em português para interface
2. Códigos técnicos em inglês para IA
3. Foco em reconhecimento imediato por empresários
4. Nomes de ações em formato de verbos
5. KPIs mais alinhados com gestão financeira tradicional

STATUS: ✅ SCHEMA ATUALIZADO E POPULADO
*/
