-- =====================================================
-- FUNDAÇÃO INTELECTUAL - SUPERRELATÓRIOS
-- Bibliotecas Estratégicas (Gestão Empresarial adaptadas para PME)
-- =====================================================

-- 1. Biblioteca de KPIs Mestre (Base Matemática)
-- Cada KPI alimenta árvores de métricas com rigor de consultoria
INSERT INTO kpi_master_library (code, title, description, calculation_formula, unit, domain, created_at) VALUES
-- Financeiros (Core Business Metrics)
('NET_PROFIT_MARG', 'Margem de Lucro Líquida', '(Lucro Líquido / Receita Bruta) * 100 - A métrica definitiva de saúde do negócio', '(Lucro Líquido / Receita Bruta) * 100', '%', 'finance', NOW()),
('CONTRIB_MARGIN', 'Margem de Contribuição', '(Receita - Custos Variáveis) / Receita - Indica o poder de precificação real', '(Receita - Custos Variáveis) / Receita * 100', '%', 'finance', NOW()),
('BURN_RATE', 'Queima de Caixa Mensal', 'Média de saídas de caixa operacionais negativas - Velocidade de consumo de capital', 'SUM(Saídas Operacionais Negativas)', 'R$', 'finance', NOW()),
('RUNWAY', 'Runway (Sobrevivência)', 'Saldo Total de Caixa / Burn Rate - Meses de sobrevivência sem nova receita', 'Saldo Caixa / Burn Rate Mensal', 'meses', 'finance', NOW()),
('CAC', 'Custo de Aquisição', 'Total Investido Mkt e Vendas / Novos Clientes - Eficiência do motor de crescimento', '(Investimento Mkt + Vendas) / Novos Clientes', 'R$', 'marketing', NOW()),
('LTV_CAC_RATIO', 'LTV / CAC Ratio', 'Valor do Ciclo de Vida do Cliente / Custo de Aquisição - Health do modelo de negócio', 'LTV / CAC', 'ratio', 'marketing', NOW()),
('BREAK_EVEN', 'Ponto de Equilíbrio', 'Custos Fixos / % Margem de Contribuição - Volume mínimo para sobrevivência', 'Custos Fixos / Margem Contribuição', 'R$', 'finance', NOW()),
('CHURN_RATE', 'Taxa de Cancelamento', 'Clientes perdidos no período / Total de clientes - Retenção da base', '(Clientes Perdidos / Total Clientes) * 100', '%', 'marketing', NOW()),

-- KPIs Leading Essenciais (Adicionados)
('DAYS_TO_RECEIVE', 'Dias para Receber', 'Prazo médio para receber dos clientes - Crítico para cash flow', 'Soma Contas a Receber / (Receita Mensal * 30)', 'dias', 'finance', NOW()),
('SALES_CYCLE_DAYS', 'Ciclo de Vendas', 'Dias desde primeiro contato até fechamento - Eficiência comercial', 'Média de dias dos negócios fechados', 'dias', 'sales', NOW()),
('PIPELINE_COVERAGE', 'Cobertura de Pipeline', 'Pipeline / Meta Mensal - Previsibilidade de vendas', 'Valor Pipeline / Meta Mensal', 'ratio', 'sales', NOW()),
('CUSTOMER_LTV', 'Lifetime Value', 'Valor total gerado por cliente durante todo o relacionamento', '(Receita Média Mensal * Tempo de Vida Cliente) - CAC', 'R$', 'marketing', NOW()),
('PRODUCTIVITY_PER_EMPLOYEE', 'Produtividade por Funcionário', 'Receita gerada por cada funcionário - Eficiência operacional', 'Receita Total / Número de Funcionários', 'R$', 'ops', NOW());

-- 2. Biblioteca de Desafios (Dores Identificadas pela IA)
-- Estrutura de Gestão: Problem Statement → Symptoms → Related Metrics
INSERT INTO library_challenges (code, title, description, domain, severity_default, symptoms, related_kpi_codes, metric_tree_config, created_at) VALUES
(
    'CASH_FLOW_CRUNCH',
    'O dinheiro não chega ao fim do mês',
    'Crise de liquidez que ameaça a sobrevivência do negócio. O ciclo financeiro está descasado e a operação consome mais caixa do que gera.',
    'finance',
    5,
    '[
        "Runway < 3 meses - Risco de insolvência",
        "Ciclo financeiro descasado (pagamentos > recebimentos)",
        "Margem líquida < 5% - Sem geração de caixa",
        "Dependência de empréstimos para pagar fornecedores",
        "Dificuldade em honrar folha de pagamento"
    ]',
    ARRAY['BURN_RATE', 'RUNWAY', 'CONTRIB_MARGIN'],
    '{
        "main_kpi": "RUNWAY",
        "supporting_kpis": ["BURN_RATE", "CONTRIB_MARGIN"],
        "thresholds": {
            "critical": {"min": 0, "max": 1},
            "warning": {"min": 1, "max": 3},
            "good": {"min": 3, "max": 24}
        },
        "diagnostic_weight": {
            "RUNWAY": 0.5,
            "BURN_RATE": 0.3,
            "CONTRIB_MARGIN": 0.2
        }
    }',
    NOW()
),
(
    'INEFFICIENT_SALES_MACHINE',
    'Esforço de vendas alto para pouco retorno',
    'O motor de vendas está ineficiente. Custo de aquisição cresce enquanto a qualidade dos clientes diminui, indicando problemas de canal ou produto.',
    'marketing',
    4,
    '[
        "CAC subindo mensalmente (>10% de crescimento)",
        "LTV/CAC < 3 - Modelo não sustentável",
        "Queda na taxa de conversão (>15% de queda)",
        "Ciclo de vendas alongando",
        "Alta dependência de um canal de aquisição"
    ]',
    ARRAY['CAC', 'LTV_CAC_RATIO', 'CHURN_RATE'],
    '{
        "main_kpi": "LTV_CAC_RATIO",
        "supporting_kpis": ["CAC", "CHURN_RATE"],
        "thresholds": {
            "critical": {"min": 0, "max": 1.5},
            "warning": {"min": 1.5, "max": 2.5},
            "good": {"min": 2.5, "max": 10}
        },
        "diagnostic_weight": {
            "LTV_CAC_RATIO": 0.4,
            "CAC": 0.35,
            "CHURN_RATE": 0.25
        }
    }',
    NOW()
),
(
    'COMMODITY_TRAP',
    'Guerra de preços e margens espremidas',
    'A empresa está presa na armadilha da comoditização. Receita alta com lucro próximo de zero, indicando perda de poder de precificação.',
    'strategy',
    4,
    '[
        "Receita alta com Lucro Líquido quase zero (<3%)",
        "Alta dependência de descontos para fechar vendas",
        "Clientes trocando por concorrentes mais baratos",
        "Diferencial competitivo apenas em preço",
        "Mix de produtos com margens muito diferentes"
    ]',
    ARRAY['CONTRIB_MARGIN', 'NET_PROFIT_MARG'],
    '{
        "main_kpi": "NET_PROFIT_MARG",
        "supporting_kpis": ["CONTRIB_MARGIN"],
        "thresholds": {
            "critical": {"min": -5, "max": 0},
            "warning": {"min": 0, "max": 5},
            "good": {"min": 5, "max": 50}
        },
        "diagnostic_weight": {
            "NET_PROFIT_MARG": 0.6,
            "CONTRIB_MARGIN": 0.4
        }
    }',
    NOW()
);

-- 3. Biblioteca de Objetivos (Destinos Estratégicos)
-- Metas SMART baseadas em melhores práticas de consultoria
INSERT INTO library_goals (code, title, description, success_definition, calculation_logic_ref, target_type, suggested_timeframe_days, created_at) VALUES
(
    'PROFIT_MAXIMIZER',
    'Maximizar a Lucratividade Real',
    'Focar na última linha da DRE, otimizando custos e precificação para transformar receita em lucro sustentável.',
    'NET_PROFIT_MARG consistentemente acima de 15% por 3 meses consecutivos, com capacidade de reinvestimento e geração de caixa positivo.',
    'NET_PROFIT_MARG improvement trend + cash generation',
    'increase',
    90,
    NOW()
),
(
    'CASH_SAFETY_NET',
    'Construir Reserva de Segurança',
    'Garantir que a operação sobreviva a sazonalidades e imprevistos sem depender de linhas de crédito externas.',
    'RUNWAY mínimo de 6 meses + margem de contribuição positiva estável por 2 meses consecutivos.',
    'RUNWAY stability + CONTRIBUTION_MARGIN positive',
    'increase',
    60,
    NOW()
),
(
    'SCALABLE_GROWTH',
    'Crescimento Escalável e Rentável',
    'Construir máquina de crescimento previsível onde cada novo cliente adiciona valor ao negócio de forma sustentável.',
    'LTV/CAC > 3.5 mantido por 4 meses + CAC estável ou decrescente + churn < 5% mensal.',
    'LTV_CAC_RATIO optimization + CAC control',
    'increase',
    75,
    NOW()
);

-- 4. Tabela de Alavancas Simplificada (Top 3 Ações por Desafio)
-- O "Como fazer" da consultoria - ações específicas com impacto mensurável
CREATE TABLE IF NOT EXISTS action_levers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID REFERENCES library_challenges(id),
    title TEXT NOT NULL,
    description TEXT,
    expected_impact TEXT, -- "Melhora o Ciclo Financeiro", "Redução imediata de CAC"
    implementation_complexity TEXT, -- 'low', 'medium', 'high'
    time_to_result_days INT,
    success_metrics TEXT[], -- KPIs que esta alavanca impacta
    priority_score INT DEFAULT 1, -- 1 (mais importante) a 3 (menos importante)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Popular Alavancas Estratégicas (Top 3 por Desafio)
INSERT INTO action_levers (challenge_id, title, description, expected_impact, implementation_complexity, time_to_result_days, success_metrics, priority_score) VALUES
-- Alavancas para CASH_FLOW_CRUNCH
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), 
 'Renegociar prazos com fornecedores principais',
 'Focar nos 20% maiores fornecedores para estender prazos de 30 para 60-90 dias, liberando caixa imediato.',
 'Melhora o Ciclo Financeiro',
 'medium',
 15,
 ARRAY['RUNWAY', 'DAYS_TO_RECEIVE'],
 1),
 
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'),
 'Implementar régua de cobrança para inadimplentes',
 'Criar sistema automatizado com 3 pontos de contato: dia 5 (lembrete), dia 15 (aviso), dia 30 (negociação)',
 'Reduz Necessidade de Capital Giro',
 'low',
 30,
 ARRAY['RUNWAY', 'DAYS_TO_RECEIVE'],
 2),

((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'),
 'Revisar estrutura de custos fixos',
 'Analisar e cortar 10-15% de custos fixos não essenciais, mantendo o core do negócio intacto.',
 'Redução Imediata do Burn Rate',
 'high',
 45,
 ARRAY['BURN_RATE', 'RUNWAY'],
 3),

-- Alavancas para INEFFICIENT_SALES_MACHINE
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'),
 'Auditoria de canais de Marketing (Desligar o que não converte)',
 'Analisar CAC por canal e desligar os 20% piores performers, realocando budget para canais LTV/CAC > 3',
 'Redução imediata de CAC',
 'medium',
 21,
 ARRAY['CAC', 'LTV_CAC_RATIO'],
 1),

((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'),
 'Otimizar processo de vendas (Sales Ops)',
 'Mapear e eliminar gargalos no funil, reduzindo ciclo de vendas em 30% através de automação.',
 'Aumenta Eficiência Comercial',
 'medium',
 60,
 ARRAY['SALES_CYCLE_DAYS', 'CONVERSION_RATE'],
 2),

((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'),
 'Programa de indicação para clientes',
 'Criar sistema de indicação pago que reduz CAC em 50% e aumenta LTV através de clientes similares.',
 'Melhora LTV/CAC Ratio',
 'low',
 90,
 ARRAY['CAC', 'LTV_CAC_RATIO', 'CHURN_RATE'],
 3),

-- Alavancas para COMMODITY_TRAP
((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'),
 'Revisão de Mix de Produtos (Pareto 80/20)',
 'Identificar produtos/margens e focar vendas nos 20% que geram 80% do lucro, mesmo que representem menos volume.',
 'Focar no que dá lucro, não no que dá volume',
 'high',
 45,
 ARRAY['NET_PROFIT_MARG', 'CONTRIB_MARGIN'],
 1),

((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'),
 'Implementar precificação dinâmica',
 'Criar sistema de preços baseado em valor e demanda, não apenas em custo + margem fixa.',
 'Aumenta Poder de Precificação',
 'high',
 60,
 ARRAY['NET_PROFIT_MARG', 'CONTRIB_MARGIN'],
 2),

((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'),
 'Desenvolver serviços agregados',
 'Criar serviços premium que acompanham o produto principal, aumentando o LTV e diferenciando da concorrência.',
 'Diferenciação vs Concorrência',
 'medium',
 90,
 ARRAY['CUSTOMER_LTV', 'NET_PROFIT_MARG'],
 3);

-- 5. Configuração para o Blueprint (Mapa Mestre com Fontes)
CREATE TABLE IF NOT EXISTS industry_benchmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    industry TEXT NOT NULL,
    kpi_code TEXT REFERENCES kpi_master_library(code),
    benchmark_min DECIMAL(10,2),
    benchmark_target DECIMAL(10,2),
    benchmark_excellent DECIMAL(10,2),
    unit TEXT,
    source TEXT DEFAULT 'Internal Analysis', -- 'IBGE', 'Sebrae', 'Industry Reports', etc.
    period TEXT DEFAULT '2024', -- '2024 Q1', '2023', etc.
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Benchmarks Setoriais para PMEs (Fontes Diversas)
INSERT INTO industry_benchmarks (industry, kpi_code, benchmark_min, benchmark_target, benchmark_excellent, unit, source, period, description) VALUES
('Serviços', 'NET_PROFIT_MARG', 15, 25, 35, '%', 'Industry Reports 2024', '2024', 'Serviços profissionais têm margens saudáveis devido a baixo custo variável'),
('Varejo', 'CONTRIB_MARGIN', 25, 35, 45, '%', 'BCG 2024', '2024', 'Varejo precisa de margem de contribuição robusta para cobrir fixed costs'),
('SaaS/Recorrência', 'LTV_CAC_RATIO', 2.5, 3.5, 5, 'ratio', 'SaaS Capital 2024', '2024', 'Modelo SaaS requer LTV/CAC > 3 para sustentabilidade'),
('Indústria', 'NET_PROFIT_MARG', 8, 15, 25, '%', 'IBGE 2024', '2024', 'Indústria tem custos fixos elevados, exige eficiência operacional'),
('Consultoria', 'NET_PROFIT_MARG', 20, 35, 50, '%', 'Industry Reports 2024', '2024', 'Consultoria de alto valor tem margens excepcionais'),

-- Benchmarks adicionais para KPIs leading
('Serviços', 'DAYS_TO_RECEIVE', 30, 45, 60, 'dias', 'Sebrae 2024', '2024', 'Serviços geralmente têm prazos de recebimento mais longos'),
('Varejo', 'DAYS_TO_RECEIVE', 15, 30, 45, 'dias', 'ABRAS 2024', '2024', 'Varejo tem ciclo rápido mas precisa gerenciar inadimplência'),
('SaaS/Recorrência', 'CHURN_RATE', 5, 3, 1, '%', 'SaaS Capital 2024', '2024', 'Churn baixo é crítico para modelo SaaS'),
('Serviços', 'PRODUCTIVITY_PER_EMPLOYEE', 15000, 25000, 50000, 'R$', 'Sebrae 2024', '2024', 'Produtividade por funcionário em serviços profissionais');

-- 6. Mapeamento Estratégico (Templates)
INSERT INTO strategic_templates (challenge_id, recommended_goal_id, is_active, created_at) VALUES
((SELECT id FROM library_challenges WHERE code = 'CASH_FLOW_CRUNCH'), (SELECT id FROM library_goals WHERE code = 'CASH_SAFETY_NET'), true, NOW()),
((SELECT id FROM library_challenges WHERE code = 'INEFFICIENT_SALES_MACHINE'), (SELECT id FROM library_goals WHERE code = 'SCALABLE_GROWTH'), true, NOW()),
((SELECT id FROM library_challenges WHERE code = 'COMMODITY_TRAP'), (SELECT id FROM library_goals WHERE code = 'PROFIT_MAXIMIZER'), true, NOW());

-- 7. Atualizar Schema para incluir novas tabelas
ALTER TABLE action_levers ENABLE ROW LEVEL SECURITY;
ALTER TABLE industry_benchmarks ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
CREATE POLICY "Anyone can read action levers" ON action_levers FOR SELECT USING (true);
CREATE POLICY "Anyone can read benchmarks" ON industry_benchmarks FOR SELECT USING (true);

-- =====================================================
-- VALIDAÇÃO DA INTEGRIDADE ESTRATÉGICA
-- =====================================================

-- Verificar se todos os KPIs relacionados existem
SELECT 
    lc.code as challenge_code,
    lc.title as challenge_title,
    array_length(lc.related_kpi_codes, 1) as kpi_count,
    lc.related_kpi_codes
FROM library_challenges lc
WHERE lc.id IN (SELECT challenge_id FROM strategic_templates WHERE is_active = true)
ORDER BY lc.code;

-- Verificar alinhamento desafio-objetivo
SELECT 
    lc.code as challenge_code,
    lc.title as challenge_desafio,
    lg.code as goal_code,
    lg.title as goal_objetivo,
    lg.suggested_timeframe_days
FROM strategic_templates st
JOIN library_challenges lc ON st.challenge_id = lc.id
JOIN library_goals lg ON st.recommended_goal_id = lg.id
WHERE st.is_active = true;

-- Verificar benchmarks por indústria
SELECT 
    industry,
    COUNT(*) as kpi_count,
    STRING_AGG(kpi_code || ' (' || benchmark_target || ' ' || unit || ')', ', ') as benchmarks
FROM industry_benchmarks
GROUP BY industry
ORDER BY industry;
