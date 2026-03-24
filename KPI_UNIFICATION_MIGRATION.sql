-- =====================================================
-- FASE 1: UNIFICAÇÃO KPI - MIGRAÇÃO CRÍTICA
-- Resolve duplicidade entre kpi_master_library e metrics_library
-- Cria tabela unificada com 25 KPIs essenciais PME
-- =====================================================

-- =====================================================
-- 1. CRIAR TABELA UNIFICADA kpi_master_unified
-- =====================================================

DROP TABLE IF EXISTS kpi_master_unified CASCADE;

CREATE TABLE kpi_master_unified (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    calculation_formula TEXT,
    unit VARCHAR(20) NOT NULL,
    domain VARCHAR(30) NOT NULL CHECK (domain IN ('finance', 'sales', 'marketing', 'operations', 'hr', 'strategy')),
    benchmark_target DECIMAL(12,2),
    benchmark_good DECIMAL(12,2),
    benchmark_warning DECIMAL(12,2),
    trend_direction VARCHAR(20) CHECK (trend_direction IN ('higher_is_better', 'lower_is_better', 'no_trend')),
    input_type VARCHAR(20) DEFAULT 'non_cumulative' CHECK (input_type IN ('cumulative', 'non_cumulative')),
    group_data_period VARCHAR(20) DEFAULT 'monthly' CHECK (group_data_period IN ('daily', 'weekly', 'monthly', 'quarterly', 'yearly')),
    total_is VARCHAR(30) DEFAULT 'last_value' CHECK (total_is IN ('sum_of_values', 'average_of_values', 'last_value', 'all_time', 'ytd_as_of')),
    is_active BOOLEAN DEFAULT true,
    source_system VARCHAR(20) DEFAULT 'unified', -- Para rastreabilidade
    migration_notes TEXT, -- Notas da migração
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT kpi_master_unified_code_upper CHECK (code = UPPER(code)),
    CONSTRAINT kpi_master_unified_unit_not_empty CHECK (length(trim(unit)) > 0)
);

-- =====================================================
-- 2. ÍNDICES OTIMIZADOS
-- =====================================================

CREATE INDEX idx_kpi_unified_domain_active ON kpi_master_unified(domain, is_active);
CREATE INDEX idx_kpi_unified_code ON kpi_master_unified(code);
CREATE INDEX idx_kpi_unified_trend ON kpi_master_unified(trend_direction);
CREATE INDEX idx_kpi_unified_input_type ON kpi_master_unified(input_type);

-- =====================================================
-- 3. TRIGGER PARA UPDATED_AT
-- =====================================================

CREATE OR REPLACE FUNCTION update_kpi_unified_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_kpi_unified_updated_at 
    BEFORE UPDATE ON kpi_master_unified 
    FOR EACH ROW 
    EXECUTE FUNCTION update_kpi_unified_updated_at();

-- =====================================================
-- 4. MIGRAR DADOS EXISTENTES - kpi_master_library
-- =====================================================

-- Verificar se a tabela existe antes de migrar
DO $$
DECLARE
    v_table_exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'kpi_master_library'
    ) INTO v_table_exists;
    
    IF v_table_exists THEN
        INSERT INTO kpi_master_unified (
            code, title, description, calculation_formula, unit, domain, 
            benchmark_target, benchmark_good, benchmark_warning, trend_direction,
            source_system, migration_notes
        )
        SELECT 
            UPPER(code) as code,
            title,
            description,
            calculation_formula,
            unit,
            CASE 
                WHEN domain = 'finance' THEN 'finance'
                WHEN domain = 'sales' THEN 'sales'
                WHEN domain = 'ops' THEN 'operations'
                ELSE 'strategy'
            END as domain,
            NULL as benchmark_target, -- Será preenchido depois
            NULL as benchmark_good,
            NULL as benchmark_warning,
            'higher_is_better' as trend_direction, -- Padrão para migração
            'kpi_master_library' as source_system,
            'Migrado de kpi_master_library original' as migration_notes
        FROM kpi_master_library
        WHERE code IS NOT NULL
        ON CONFLICT (code) DO NOTHING;
        
        RAISE NOTICE '✅ Dados de kpi_master_library migrados com sucesso';
    ELSE
        RAISE NOTICE '⚠️  kpi_master_library não encontrada, pulando migração';
    END IF;
END $$;

-- =====================================================
-- 5. MIGRAR DADOS RELEVANTES - metrics_library
-- =====================================================

-- Verificar se a tabela existe antes de migrar
DO $$
DECLARE
    v_table_exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'metrics_library'
    ) INTO v_table_exists;
    
    IF v_table_exists THEN
        INSERT INTO kpi_master_unified (
            code, title, description, calculation_formula, unit, domain,
            benchmark_target, benchmark_good, benchmark_warning, trend_direction,
            input_type, group_data_period, total_is,
            source_system, migration_notes
        )
        SELECT 
            UPPER(REPLACE(REPLACE(name, ' ', '_'), '-', '_')) as code,
            name as title,
            description,
            calculation_formula,
            unit,
            domain,
            NULL as benchmark_target,
            NULL as benchmark_good,
            NULL as benchmark_warning,
            trend_direction,
            input_type,
            group_data_period,
            total_is,
            'metrics_library' as source_system,
            'Migrado de metrics_library Cascade-like' as migration_notes
        FROM metrics_library
        WHERE is_active = true
          AND UPPER(REPLACE(REPLACE(name, ' ', '_'), '-', '_')) NOT IN (
              SELECT code FROM kpi_master_unified WHERE source_system = 'kpi_master_library'
          )
        ON CONFLICT (code) DO NOTHING;
        
        RAISE NOTICE '✅ Dados de metrics_library migrados com sucesso';
    ELSE
        RAISE NOTICE '⚠️  metrics_library não encontrada, pulando migração';
    END IF;
END $$;

-- =====================================================
-- 6. POPULAR COM 25 KPIs ESSENCIAIS PME (Dados Faltantes)
-- =====================================================

INSERT INTO kpi_master_unified (
    code, title, description, calculation_formula, unit, domain,
    benchmark_target, benchmark_good, benchmark_warning, trend_direction,
    input_type, group_data_period, total_is,
    source_system, migration_notes
) VALUES
-- FINANCEIROS (10 KPIs)
('NET_MARGIN', 
 'Margem Líquida', 
 'O que realmente sobra no bolso depois de pagar tudo', 
 '(Receita - Custos - Despesas) / Receita * 100', 
 '%', 'finance', 15.0, 20.0, 10.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Lucratividade'),

('EBITDA_MARGIN', 
 'Margem EBITDA', 
 'Rentabilidade operacional antes de juros e impostos', 
 'EBITDA / Receita * 100', 
 '%', 'finance', 12.0, 18.0, 8.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Rentabilidade'),

('GROSS_MARGIN', 
 'Margem Bruta', 
 'Rentabilidade do produto/serviço antes de despesas operacionais', 
 '(Receita - Custo dos Produtos) / Receita * 100', 
 '%', 'finance', 40.0, 50.0, 30.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Margem'),

('BURN_RATE', 
 'Queima de Caixa', 
 'Quanto de caixa você está queimando por mês', 
 'Despesas Operacionais Mensais', 
 'R$', 'finance', 50000.0, 30000.0, 80000.0, 'lower_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Sobrevivência'),

('RUNWAY_MONTHS', 
 'Pista de Decolagem', 
 'Quantos meses de sobrevivência sem nova receita', 
 'Caixa Disponível / Burn Rate', 
 'meses', 'finance', 12.0, 18.0, 6.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Liquidez'),

('DAYS_TO_RECEIVE', 
 'Dias para Receber', 
 'Tempo médio para receber dos clientes', 
 'Soma Contas a Receber / (Receita Mensal * 30)', 
 'dias', 'finance', 30.0, 20.0, 45.0, 'lower_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Ciclo Financeiro'),

('CASH_CONVERSION_CYCLE', 
 'Ciclo de Conversão de Caixa', 
 'Dias desde compra de matéria-prima até recebimento', 
 'Dias Estoque + Dias a Receber - Dias a Pagar', 
 'dias', 'finance', 45.0, 30.0, 60.0, 'lower_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Eficiência'),

('WORKING_CAPITAL', 
 'Capital de Giro', 
 'Recursos para operações do dia a dia', 
 'Ativos Circulantes - Passivos Circulantes', 
 'R$', 'finance', 100000.0, 200000.0, 50000.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Solidez'),

('DEBT_TO_EQUITY', 
 'Endividamento', 
 'Relação entre dívidas e patrimônio líquido', 
 'Dívidas Totais / Patrimônio Líquido', 
 'ratio', 'finance', 1.5, 1.0, 2.5, 'lower_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Risco'),

('OPERATING_CASH_FLOW', 
 'Fluxo de Caixa Operacional', 
 'Dinheiro gerado pelas operações principais', 
 'Lucro Líquido + Depreciação + Variações Circulantes', 
 'R$', 'finance', 50000.0, 100000.0, 20000.0, 'higher_is_better', 'cumulative', 'monthly', 'sum_of_values',
 'unified', 'KPI essencial PME - Geração'),

-- VENDAS (6 KPIs)
('SALES_CONVERSION', 
 'Taxa de Conversão', 
 'Propostas que viram negócio', 
 '(Negócios Fechados / Propostas Enviadas) * 100', 
 '%', 'sales', 25.0, 35.0, 15.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Eficiência Comercial'),

('SALES_CYCLE_DAYS', 
 'Ciclo de Vendas', 
 'Dias desde primeiro contato até fechamento', 
 'Média de dias dos negócios fechados', 
 'dias', 'sales', 30.0, 20.0, 45.0, 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values',
 'unified', 'KPI essencial PME - Velocidade'),

('AVG_TICKET', 
 'Ticket Médio', 
 'Valor médio por cliente', 
 'Receita Total / Número de Clientes', 
 'R$', 'sales', 500.0, 1000.0, 250.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Valor'),

('PIPELINE_VALUE', 
 'Valor do Pipeline', 
 'Potencial de negócios em andamento', 
 'Soma valores das oportunidades', 
 'R$', 'sales', 500000.0, 1000000.0, 200000.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Oportunidades'),

('CUSTOMER_ACQ_COST', 
 'Custo de Aquisição de Cliente', 
 'Quanto custa conseguir um novo cliente', 
 'Investimento Marketing / Novos Clientes', 
 'R$', 'sales', 200.0, 100.0, 400.0, 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values',
 'unified', 'KPI essencial PME - Eficiência'),

('SALES_PER_EMPLOYEE', 
 'Vendas por Funcionário', 
 'Produtividade da equipe de vendas', 
 'Receita Total / Número de Vendedores', 
 'R$', 'sales', 50000.0, 100000.0, 25000.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Produtividade'),

-- MARKETING (3 KPIs)
('MARKETING_ROAS', 
 'Retorno sobre Investimento em Marketing', 
 'Quanto cada R$ investido em marketing gera', 
 'Receita de Vendas / Investimento Marketing', 
 'ratio', 'marketing', 4.0, 6.0, 2.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - ROI'),

('LEAD_TO_CONVERSION', 
 'Conversão de Lead', 
 'Leads que viram clientes', 
 '(Clientes Novos / Leads Totais) * 100', 
 '%', 'marketing', 5.0, 10.0, 2.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Funil'),

('WEBSITE_TRAFFIC', 
 'Tráfego do Site', 
 'Visitantes únicos no período', 
 'COUNT(DISTINCT visitor_id)', 
 'visitas', 'marketing', 10000.0, 20000.0, 5000.0, 'higher_is_better', 'cumulative', 'monthly', 'sum_of_values',
 'unified', 'KPI essencial PME - Presença'),

-- OPERAÇÕES (4 KPIs)
('PRODUCTIVITY_PER_EMPLOYEE', 
 'Produtividade por Funcionário', 
 'Receita gerada por cada funcionário', 
 'Receita Total / Número de Funcionários', 
 'R$', 'operations', 200000.0, 400000.0, 100000.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Eficiência'),

('OPERATIONAL_EFFICIENCY', 
 'Eficiência Operacional', 
 'Quanto da capacidade está sendo utilizada', 
 'Horas Produtivas / Horas Disponíveis * 100', 
 '%', 'operations', 75.0, 85.0, 60.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Capacidade'),

('INVENTORY_TURNOVER', 
 'Giro de Estoque', 
 'Quantas vezes o estoque é renovado no ano', 
 'Custo das Mercadorias Vendidas / Estoque Médio', 
 'vezes', 'operations', 12.0, 15.0, 8.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Capital'),

('QUALITY_RATE', 
 'Taxa de Qualidade', 
 'Percentual de produtos/serviços sem defeitos', 
 '(Unidades Boas / Total Unidades) * 100', 
 '%', 'operations', 95.0, 98.0, 90.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Qualidade'),

-- RH (2 KPIs)
('EMPLOYEE_TURNOVER', 
 'Rotatividade de Funcionários', 
 'Percentual de funcionários que saem na empresa', 
 '(Funcionários que Saíram / Total Funcionários) * 100', 
 '%', 'hr', 10.0, 5.0, 20.0, 'lower_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Retenção'),

('EMPLOYEE_SATISFACTION', 
 'Satisfação dos Funcionários', 
 'Nível de satisfação da equipe', 
 'Média das Avaliações de Satisfação', 
 'score', 'hr', 4.0, 4.5, 3.0, 'higher_is_better', 'non_cumulative', 'monthly', 'last_value',
 'unified', 'KPI essencial PME - Clima')

ON CONFLICT (code) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    calculation_formula = EXCLUDED.calculation_formula,
    unit = EXCLUDED.unit,
    domain = EXCLUDED.domain,
    benchmark_target = EXCLUDED.benchmark_target,
    benchmark_good = EXCLUDED.benchmark_good,
    benchmark_warning = EXCLUDED.benchmark_warning,
    trend_direction = EXCLUDED.trend_direction,
    input_type = EXCLUDED.input_type,
    group_data_period = EXCLUDED.group_data_period,
    total_is = EXCLUDED.total_is,
    updated_at = NOW(),
    migration_notes = EXCLUDED.migration_notes || ' | Atualizado em unificação';

-- =====================================================
-- 7. CRIAR VIEW DE COMPATIBILIDADE TEMPORÁRIA
-- =====================================================

CREATE OR REPLACE VIEW kpi_library_compatibility AS
SELECT 
    'kpi_master_unified' as source_table,
    id,
    code,
    title,
    description,
    calculation_formula,
    unit,
    domain,
    benchmark_target,
    benchmark_good,
    benchmark_warning,
    trend_direction,
    input_type,
    group_data_period,
    total_is,
    is_active,
    created_at,
    updated_at
FROM kpi_master_unified
WHERE is_active = true;

-- =====================================================
-- 8. ATUALIZAR REFERÊNCIAS NAS OUTRAS TABELAS
-- =====================================================

-- Atualizar library_challenges.related_kpi_codes
UPDATE library_challenges 
SET related_kpi_codes = ARRAY(
    SELECT code FROM kpi_master_unified 
    WHERE code = ANY(related_kpi_codes)
    AND is_active = true
)
WHERE related_kpi_codes IS NOT NULL;

-- Atualizar library_levers.target_kpi_code
UPDATE library_levers 
SET target_kpi_code = (
    SELECT code FROM kpi_master_unified 
    WHERE UPPER(target_kpi_code) = UPPER(code)
    AND is_active = true
    LIMIT 1
)
WHERE target_kpi_code IS NOT NULL;

-- =====================================================
-- 9. HABILITAR RLS NA TABELA UNIFICADA
-- =====================================================

ALTER TABLE kpi_master_unified ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura (para todos usuários autenticados)
CREATE POLICY "Anyone can read unified KPI library" ON kpi_master_unified
  FOR SELECT USING (auth.role() = 'authenticated');

-- Política de escrita (apenas service role)
CREATE POLICY "Service role can manage unified KPI library" ON kpi_master_unified
  FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- 10. VALIDAÇÃO E RELATÓRIO
-- =====================================================

-- Relatório de migração
SELECT 'MIGRAÇÃO KPI CONCLUÍDA' as status,
       COUNT(*) as total_kpis_unified,
       COUNT(*) FILTER (WHERE source_system = 'kpi_master_library') as from_original,
       COUNT(*) FILTER (WHERE source_system = 'metrics_library') as from_cascade,
       COUNT(*) FILTER (WHERE source_system = 'unified') as new_essentials,
       STRING_AGG(DISTINCT domain, ', ') as domains_covered
FROM kpi_master_unified
WHERE is_active = true;

-- Verificar integridade das referências
SELECT 'INTEGRIDADE REFERÊNCIAS' as status,
       (SELECT COUNT(*) FROM library_challenges WHERE related_kpi_codes IS NOT NULL) as challenges_with_kpis,
       (SELECT COUNT(*) FROM library_challenges lc WHERE EXISTS(
           SELECT 1 FROM kpi_master_unified kpi 
           WHERE kpi.code = ANY(lc.related_kpi_codes)
       )) as challenges_valid_kpis,
       (SELECT COUNT(*) FROM library_levers WHERE target_kpi_code IS NOT NULL) as levers_with_kpis,
       (SELECT COUNT(*) FROM library_levers ll WHERE EXISTS(
           SELECT 1 FROM kpi_master_unified kpi 
           WHERE kpi.code = ll.target_kpi_code
       )) as levers_valid_kpis;

-- =====================================================
-- 11. LIMPEZA DAS TABELAS ANTIGAS (OPCIONAL)
-- =====================================================

-- COMENTADO POR SEGURANÇA - DESCOMENTAR APÓS VALIDAÇÃO
-- DROP TABLE IF EXISTS kpi_master_library CASCADE;
-- DROP TABLE IF EXISTS metrics_library CASCADE;
-- DROP TABLE IF EXISTS metric_values CASCADE;

-- =====================================================
-- 12. PRÓXIMOS PASSOS RECOMENDADOS
-- =====================================================

-- 1. Testar todas as queries que usavam as tabelas antigas
-- 2. Atualizar frontend para usar a nova view kpi_library_compatibility
-- 3. Validar integridade dos dados migrados
-- 4. Remover tabelas antigas após validação completa
-- 5. Atualizar documentação e APIs

SELECT 'PRÓXIMO PASSO: Validar migração antes de remover tabelas antigas' as next_step;
