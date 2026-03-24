-- ################################################
-- SUPERRELATÓRIOS AI 360 - SQL DEFINITIVO (V1.0)
-- Banco de Dados: PostgreSQL (Supabase)
-- Objetivo: Sistema Operacional de Decisão e Crescimento
-- ################################################

-- EXTENSÕES NECESSÁRIAS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ################################################
-- 1. TABELA: kpi_library (O Dicionário Global de KPIs)
-- ################################################
CREATE TABLE IF NOT EXISTS kpi_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    calculation_formula TEXT,
    unit VARCHAR(20) NOT NULL,
    domain VARCHAR(30) NOT NULL CHECK (domain IN ('finance', 'sales', 'marketing', 'operations', 'hr', 'strategy')),
    
    -- Configuração de Inteligência
    trend_direction VARCHAR(20) DEFAULT 'higher_is_better' CHECK (trend_direction IN ('higher_is_better', 'lower_is_better', 'no_trend')),
    input_type VARCHAR(20) DEFAULT 'non_cumulative' CHECK (input_type IN ('cumulative', 'non_cumulative')),
    group_data_period VARCHAR(20) DEFAULT 'monthly' CHECK (group_data_period IN ('daily', 'weekly', 'monthly', 'quarterly', 'yearly')),
    total_is VARCHAR(30) DEFAULT 'last_value' CHECK (total_is IN ('sum_of_values', 'average_of_values', 'last_value', 'all_time', 'ytd_as_of')),
    
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT kpi_library_code_upper CHECK (code = UPPER(code))
);

-- ################################################
-- 2. TABELA: organization_kpis (Os Valores Reais das Empresas)
-- ################################################
CREATE TABLE IF NOT EXISTS organization_kpis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kpi_id UUID NOT NULL REFERENCES kpi_library(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL, -- ID da empresa no seu sistema de auth
    
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    period_key VARCHAR(10) NOT NULL, -- Ex: "2026-03" (Facilita buscas e evita duplicidade)
    
    value DECIMAL(15,4) NOT NULL,
    currency VARCHAR(10) DEFAULT 'BRL',
    data_source VARCHAR(50) DEFAULT 'manual_input',
    
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_org_kpi_period UNIQUE (organization_id, kpi_id, period_key),
    CONSTRAINT organization_kpis_period_order CHECK (period_end >= period_start)
);

-- ################################################
-- 3. TABELA: organization_benchmarks (Metas Internas / Histórico)
-- ################################################
CREATE TABLE IF NOT EXISTS organization_benchmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kpi_id UUID NOT NULL REFERENCES kpi_library(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL,
    
    period_reference VARCHAR(50) NOT NULL, -- Ex: "Last 12 Months"
    value_target DECIMAL(15,4) NOT NULL,   -- A meta que o dono definiu
    
    -- Níveis de Alerta (Calculados via App ou preenchidos manualmente)
    value_excellent DECIMAL(15,4),
    value_good DECIMAL(15,4),
    value_warning DECIMAL(15,4),
    value_critical DECIMAL(15,4),
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ################################################
-- 4. TABELA: market_benchmarks (Referências de Mercado/Setor)
-- ################################################
CREATE TABLE IF NOT EXISTS market_benchmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kpi_id UUID NOT NULL REFERENCES kpi_library(id) ON DELETE CASCADE,
    
    industry_sector VARCHAR(50), -- Ex: 'Varejo', 'SaaS', 'Serviços'
    company_size VARCHAR(20),    -- Ex: 'Micro', 'PME'
    
    value_market_avg DECIMAL(15,4) NOT NULL,
    source_name VARCHAR(100) NOT NULL, -- Ex: 'Sebrae', 'IBGE'
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ################################################
-- 5. TABELA: risk_registry (Gestão de Riscos e Incertezas)
-- ################################################
CREATE TABLE IF NOT EXISTS risk_registry (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    kpi_id UUID REFERENCES kpi_library(id) ON DELETE SET NULL, 
    
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    
    origin_type VARCHAR(20) NOT NULL CHECK (origin_type IN ('internal', 'external')),
    category VARCHAR(30) NOT NULL CHECK (category IN (
        'strategic', 'operational', 'compliance', 'financial', -- Internos
        'regulatory', 'economical', 'demand', 'sociopolitical', 'environmental' -- Externos
    )),
    
    -- Matriz de Risco 1-10
    likelihood INTEGER NOT NULL CHECK (likelihood BETWEEN 1 AND 10),
    impact INTEGER NOT NULL CHECK (impact BETWEEN 1 AND 10),
    risk_score INTEGER GENERATED ALWAYS AS (likelihood * impact) STORED,
    
    status VARCHAR(20) DEFAULT 'identified' CHECK (status IN ('identified', 'active', 'mitigated', 'occurred', 'archived')),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ################################################
-- 6. TABELA: risk_mitigations (Plano de Ação para os Riscos)
-- ################################################
CREATE TABLE IF NOT EXISTS risk_mitigations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    risk_id UUID NOT NULL REFERENCES risk_registry(id) ON DELETE CASCADE,
    
    title VARCHAR(200) NOT NULL,
    action_plan TEXT NOT NULL,
    responsible_id UUID, 
    deadline DATE,
    
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),
    cost_estimated DECIMAL(15,4), -- Custo para mitigar
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ################################################
-- TRIGGERS PARA ATUALIZAÇÃO AUTOMÁTICA (updated_at)
-- ################################################
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar triggers nas tabelas que têm updated_at
DROP TRIGGER IF EXISTS set_timestamp_kpi_library ON kpi_library;
CREATE TRIGGER set_timestamp_kpi_library BEFORE UPDATE ON kpi_library FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

DROP TRIGGER IF EXISTS set_timestamp_org_kpis ON organization_kpis;
CREATE TRIGGER set_timestamp_org_kpis BEFORE UPDATE ON organization_kpis FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

DROP TRIGGER IF EXISTS set_timestamp_risks ON risk_registry;
CREATE TRIGGER set_timestamp_risks BEFORE UPDATE ON risk_registry FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- ################################################
-- ÍNDICES PARA PERFORMANCE
-- ################################################
-- Índices para kpi_library
CREATE INDEX IF NOT EXISTS idx_kpi_library_domain_active ON kpi_library(domain, is_active);
CREATE INDEX IF NOT EXISTS idx_kpi_library_code ON kpi_library(code);

-- Índices para organization_kpis
CREATE INDEX IF NOT EXISTS idx_org_kpis_org_period ON organization_kpis(organization_id, period_key);
CREATE INDEX IF NOT EXISTS idx_org_kpis_kpi_org ON organization_kpis(kpi_id, organization_id);

-- Índices para organization_benchmarks
CREATE INDEX IF NOT EXISTS idx_org_benchmarks_org_kpi ON organization_benchmarks(organization_id, kpi_id);

-- Índices para market_benchmarks
CREATE INDEX IF NOT EXISTS idx_market_benchmarks_kpi_sector ON market_benchmarks(kpi_id, industry_sector);
CREATE INDEX IF NOT EXISTS idx_market_benchmarks_kpi_size ON market_benchmarks(kpi_id, company_size);

-- Índices para risk_registry
CREATE INDEX IF NOT EXISTS idx_risk_registry_org_score ON risk_registry(organization_id, risk_score);
CREATE INDEX IF NOT EXISTS idx_risk_registry_status ON risk_registry(status);
CREATE INDEX IF NOT EXISTS idx_risk_registry_kpi ON risk_registry(kpi_id) WHERE kpi_id IS NOT NULL;

-- Índices para risk_mitigations
CREATE INDEX IF NOT EXISTS idx_risk_mitigations_risk_status ON risk_mitigations(risk_id, status);

-- ################################################
-- VIEWS DE COMPATIBILIDADE (Para migração gradual)
-- ################################################
-- View para compatibilidade com kpi_master_library (se existir)
CREATE OR REPLACE VIEW kpi_master_library_view AS
SELECT 
    id,
    code,
    title,
    description,
    calculation_formula,
    unit,
    domain,
    created_at
FROM kpi_library 
WHERE is_active = true;

-- View para compatibilidade com kpi_master_unified (se existir)
CREATE OR REPLACE VIEW kpi_master_unified_view AS
SELECT 
    id,
    code,
    title,
    description,
    calculation_formula,
    unit,
    domain,
    trend_direction,
    input_type,
    group_data_period,
    total_is,
    is_active,
    created_at,
    updated_at
FROM kpi_library 
WHERE is_active = true;

-- ################################################
-- FUNÇÕES ÚTEIS
-- ################################################

-- Função para calcular níveis de benchmark automaticamente
CREATE OR REPLACE FUNCTION calculate_benchmark_levels(p_target DECIMAL(15,4))
RETURNS TABLE(
    value_excellent DECIMAL(15,4),
    value_good DECIMAL(15,4),
    value_average DECIMAL(15,4),
    value_warning DECIMAL(15,4),
    value_critical DECIMAL(15,4)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p_target * 1.3 as value_excellent,
        p_target * 1.1 as value_good,
        p_target * 0.9 as value_average,
        p_target * 0.7 as value_warning,
        p_target * 0.5 as value_critical;
END;
$$ LANGUAGE plpgsql;

-- Função para obter melhor benchmark (interno vs externo)
CREATE OR REPLACE FUNCTION get_best_benchmark(
    p_kpi_id UUID,
    p_organization_id UUID,
    p_company_size VARCHAR DEFAULT NULL,
    p_industry_sector VARCHAR DEFAULT NULL
)
RETURNS TABLE (
    benchmark_type VARCHAR,
    source VARCHAR,
    value_target DECIMAL(15,4),
    value_excellent DECIMAL(15,4),
    value_good DECIMAL(15,4),
    value_warning DECIMAL(15,4),
    value_critical DECIMAL(15,4),
    relevance_score INT
) AS $$
BEGIN
    -- Prioriza benchmark interno se existir
    RETURN QUERY
    SELECT 
        'internal' as benchmark_type,
        'organization_history' as source,
        ob.value_target,
        ob.value_excellent,
        ob.value_good,
        ob.value_warning,
        ob.value_critical,
        100 as relevance_score
    FROM organization_benchmarks ob
    WHERE ob.kpi_id = p_kpi_id
      AND ob.organization_id = p_organization_id
    LIMIT 1;
    
    -- Se não tiver interno, busca externo
    RETURN QUERY
    SELECT 
        'market' as benchmark_type,
        mb.source_name,
        mb.value_market_avg,
        NULL, -- market benchmarks só têm média
        NULL,
        NULL,
        NULL,
        -- Score baseado no match de contexto
        CASE 
            WHEN mb.company_size = p_company_size AND mb.industry_sector = p_industry_sector THEN 90
            WHEN mb.company_size = p_company_size THEN 70
            WHEN mb.industry_sector = p_industry_sector THEN 60
            ELSE 40
        END as relevance_score
    FROM market_benchmarks mb
    WHERE mb.kpi_id = p_kpi_id
      AND (p_company_size IS NULL OR mb.company_size = p_company_size OR mb.company_size IS NULL)
      AND (p_industry_sector IS NULL OR mb.industry_sector = p_industry_sector OR mb.industry_sector IS NULL)
    ORDER BY relevance_score DESC
    LIMIT 1;
END;
$$ LANGUAGE plpgsql;

-- ################################################
-- DADOS INICIAIS (SEED) - 3 KPIs CORE PARA TESTE
-- ################################################

-- Inserir KPIs básicos
INSERT INTO kpi_library (code, title, unit, domain, trend_direction, description) VALUES 
('REV_01', 'Faturamento Bruto', 'BRL', 'finance', 'higher_is_better', 'Receita total de vendas antes de deduções'),
('CAC_01', 'Custo de Aquisição de Cliente', 'BRL', 'marketing', 'lower_is_better', 'Custo total para adquirir um novo cliente'),
('CHURN_01', 'Taxa de Cancelamento', '%', 'sales', 'lower_is_better', 'Percentual de clientes que cancelam no período'),
('MARGEM_01', 'Margem Líquida', '%', 'finance', 'higher_is_better', 'Lucro líquido como percentagem do faturamento'),
('LTV_01', 'Lifetime Value', 'BRL', 'sales', 'higher_is_better', 'Valor total que um cliente gera durante todo o relacionamento'),
('ROI_01', 'Retorno sobre Investimento', '%', 'finance', 'higher_is_better', 'Retorno financeiro sobre o investimento realizado'),
('CONVERSAO_01', 'Taxa de Conversão', '%', 'marketing', 'higher_is_better', 'Percentual de visitantes que se tornam clientes'),
('SATISFACAO_01', 'Satisfação do Cliente', 'pontos', 'hr', 'higher_is_better', 'Nível de satisfação dos clientes em escala de 0-10'),
('PRODUTIVIDADE_01', 'Produtividade por Funcionário', 'BRL', 'operations', 'higher_is_better', 'Faturamento gerado por funcionário'),
('TICKET_01', 'Ticket Médio', 'BRL', 'sales', 'higher_is_better', 'Valor médio por transação/venda')
ON CONFLICT (code) DO NOTHING;

-- Inserir benchmarks de mercado (exemplos)
INSERT INTO market_benchmarks (kpi_id, industry_sector, company_size, value_market_avg, source_name) VALUES 
((SELECT id FROM kpi_library WHERE code = 'MARGEM_01'), 'Varejo', 'PME', 12.0, 'Sebrae 2024'),
((SELECT id FROM kpi_library WHERE code = 'CAC_01'), 'SaaS', 'PME', 150.0, 'Distrito Startup 2024'),
((SELECT id FROM kpi_library WHERE code = 'CHURN_01'), 'SaaS', 'PME', 5.0, 'Recurly Benchmark 2024'),
((SELECT id FROM kpi_library WHERE code = 'LTV_01'), 'SaaS', 'PME', 1200.0, 'HubSpot Research 2024'),
((SELECT id FROM kpi_library WHERE code = 'SATISFACAO_01'), 'Serviços', 'PME', 8.5, 'CustomerGauge 2024')
ON CONFLICT DO NOTHING;

-- ################################################
-- RELATÓRIO DE CRIAÇÃO
-- ################################################
DO $$
DECLARE
    table_count INTEGER;
    kpi_count INTEGER;
    benchmark_count INTEGER;
BEGIN
    -- Contar tabelas criadas
    SELECT COUNT(*) INTO table_count
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name IN ('kpi_library', 'organization_kpis', 'organization_benchmarks', 'market_benchmarks', 'risk_registry', 'risk_mitigations');
    
    -- Contar KPIs inseridos
    SELECT COUNT(*) INTO kpi_count FROM kpi_library;
    
    -- Contar benchmarks inseridos
    SELECT COUNT(*) INTO benchmark_count FROM market_benchmarks;
    
    RAISE NOTICE '✅ SUPERRELATÓRIOS AI 360 - Schema criado com sucesso!';
    RAISE NOTICE '📊 Tabelas criadas: %/6', table_count;
    RAISE NOTICE '🎯 KPIs inseridos: %', kpi_count;
    RAISE NOTICE '📈 Benchmarks inseridos: %', benchmark_count;
    RAISE NOTICE '🚀 Sistema pronto para uso!';
END $$;
