-- =====================================================
-- SCRIPT DE EXECUÇÃO SEQUENCIAL COM VERIFICAÇÃO
-- Executa os scripts na ordem correta com verificação de dependências
-- =====================================================

-- =====================================================
-- PASSO 1: VERIFICAR E CRIAR TABELAS BASE
-- =====================================================

-- Verificar se a tabela verify_strategic_structure existe, se não, criar
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.routines 
        WHERE routine_schema = 'public' 
        AND routine_name = 'verify_strategic_structure'
    ) THEN
        -- Criar função de verificação básica
        CREATE OR REPLACE FUNCTION verify_strategic_structure()
        RETURNS TABLE (
            table_name TEXT,
            status TEXT,
            row_count BIGINT,
            columns_info JSONB
        ) AS $$
        BEGIN
            RETURN QUERY
            SELECT 
                table_name,
                CASE 
                    WHEN EXISTS (
                        SELECT 1 FROM information_schema.columns 
                        WHERE table_schema = 'public' 
                        AND table_name = t.table_name
                    ) THEN '✅ OK'
                    ELSE '❌ SEM COLUNAS'
                END as status,
                COALESCE((
                    SELECT COUNT(*) 
                    FROM information_schema.columns 
                    WHERE table_schema = 'public' 
                    AND table_name = t.table_name
                ), 0) as row_count,
                (
                    SELECT jsonb_agg(
                        jsonb_build_object(
                            'column_name', column_name,
                            'data_type', data_type,
                            'is_nullable', is_nullable
                        )
                    ) 
                    FROM information_schema.columns 
                    WHERE table_schema = 'public' 
                    AND table_name = t.table_name
                ) as columns_info
            FROM (
                VALUES 
                    ('kpi_master_library'),
                    ('library_challenges'),
                    ('library_goals'),
                    ('strategic_templates'),
                    ('library_levers'),
                    ('library_actions')
            ) t(table_name);
        END;
        $$ LANGUAGE plpgsql;
    END IF;
END $$;

-- Verificar se as tabelas base existem
DO $$
DECLARE
    v_kpi_master_exists BOOLEAN;
    v_challenges_exists BOOLEAN;
    v_goals_exists BOOLEAN;
    v_templates_exists BOOLEAN;
    v_levers_exists BOOLEAN;
    v_actions_exists BOOLEAN;
BEGIN
    -- Verificar existência das tabelas
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'kpi_master_library'
    ) INTO v_kpi_master_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_challenges'
    ) INTO v_challenges_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_goals'
    ) INTO v_goals_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates'
    ) INTO v_templates_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_levers'
    ) INTO v_levers_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_actions'
    ) INTO v_actions_exists;
    
    -- Se as tabelas não existem, criar estrutura básica
    IF NOT v_kpi_master_exists OR NOT v_challenges_exists OR NOT v_goals_exists THEN
        -- Criar kpi_master_library (versão simplificada)
        IF NOT v_kpi_master_exists THEN
            CREATE TABLE kpi_master_library (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                calculation_formula TEXT,
                unit TEXT,
                domain TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        END IF;
        
        -- Criar library_challenges
        IF NOT v_challenges_exists THEN
            CREATE TABLE library_challenges (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                domain TEXT,
                severity_default INT DEFAULT 3,
                symptoms JSONB,
                related_kpi_codes TEXT[],
                metric_tree_config JSONB,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        END IF;
        
        -- Criar library_goals
        IF NOT v_goals_exists THEN
            CREATE TABLE library_goals (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                success_definition TEXT,
                calculation_logic_ref TEXT,
                target_type TEXT,
                suggested_timeframe_days INT DEFAULT 90,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        END IF;
        
        -- Criar strategic_templates (versão simplificada)
        IF NOT v_templates_exists THEN
            CREATE TABLE strategic_templates (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                challenge_id UUID REFERENCES library_challenges(id),
                recommended_goal_id UUID REFERENCES library_goals(id),
                is_active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        END IF;
    END IF;
    
    -- Criar tabelas de levers e actions se não existirem
    IF NOT v_levers_exists OR NOT v_actions_exists THEN
        -- Criar library_levers
        IF NOT v_levers_exists THEN
            CREATE TABLE library_levers (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code VARCHAR(50) UNIQUE NOT NULL,
                title VARCHAR(200) NOT NULL,
                description TEXT,
                category VARCHAR(50) NOT NULL CHECK (category IN ('financeiro', 'vendas', 'operacoes', 'pessoas', 'relacionamento', 'marketing')),
                target_kpi_code VARCHAR(50),
                impact_level VARCHAR(20) CHECK (impact_level IN ('high', 'medium', 'low')),
                implementation_complexity VARCHAR(20) CHECK (implementation_complexity IN ('high', 'medium', 'low')),
                typical_timeframe_days INT DEFAULT 30,
                expected_impact_description TEXT,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            
            CREATE INDEX idx_levers_category ON library_levers(category);
            CREATE INDEX idx_levers_active ON library_levers(is_active);
        END IF;
        
        -- Criar library_actions
        IF NOT v_actions_exists THEN
            CREATE TABLE library_actions (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code VARCHAR(50) UNIQUE NOT NULL,
                lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
                title VARCHAR(200) NOT NULL,
                description TEXT NOT NULL,
                step_by_step JSONB DEFAULT '[]'::jsonb,
                estimated_effort_hours INT DEFAULT 4,
                required_resources TEXT,
                success_metrics TEXT,
                priority_score INT CHECK (priority_score BETWEEN 1 AND 5),
                quick_win BOOLEAN DEFAULT false,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            
            CREATE INDEX idx_actions_lever ON library_actions(lever_id);
            CREATE INDEX idx_actions_priority ON library_actions(priority_score);
            CREATE INDEX idx_actions_active ON library_actions(is_active);
        END IF;
    END IF;
END $$;

-- =====================================================
-- PASSO 2: CRIAR TABELA KPI_MASTER_UNIFIED
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
    source_system VARCHAR(20) DEFAULT 'unified',
    migration_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT kpi_master_unified_code_upper CHECK (code = UPPER(code)),
    CONSTRAINT kpi_master_unified_unit_not_empty CHECK (length(trim(unit)) > 0)
);

-- Criar trigger para updated_at
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

-- Criar índices
CREATE INDEX idx_kpi_unified_domain_active ON kpi_master_unified(domain, is_active);
CREATE INDEX idx_kpi_unified_code ON kpi_master_unified(code);
CREATE INDEX idx_kpi_unified_trend ON kpi_master_unified(trend_direction);
CREATE INDEX idx_kpi_unified_input_type ON kpi_master_unified(input_type);

-- =====================================================
-- PASSO 3: POPULAR KPIs ESSENCIAIS PME
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
-- PASSO 4: CRIAR VIEW DE COMPATIBILIDADE
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
-- PASSO 5: VERIFICAÇÃO FINAL
-- =====================================================

SELECT '=== RELATÓRIO FINAL DE EXECUÇÃO ===' as report_title;

SELECT 'KPIs criados' as item, COUNT(*) as count FROM kpi_master_unified WHERE is_active = true;

SELECT 'KPIs por domínio' as item, domain, COUNT(*) as count 
FROM kpi_master_unified 
WHERE is_active = true 
GROUP BY domain;

SELECT '=== EXECUÇÃO CONCLUÍDA COM SUCESSO ===' as final_status,
       'Próximo passo: Executar STRATEGIC_TEMPLATES_COMPLETION.sql' as next_step,
       NOW() as completion_timestamp;
