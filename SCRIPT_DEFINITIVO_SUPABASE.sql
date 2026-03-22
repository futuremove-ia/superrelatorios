-- =====================================================
-- SCRIPT DEFINITIVO 100% COMPATÍVEL - PAINEL DE INDICADORES
-- Versão final sem IF NOT EXISTS em nenhum comando
-- =====================================================

-- =====================================================
-- PARTE 1: LIMPAR E CRIAR TIPOS
-- =====================================================

-- Apagar tipos se existirem
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'input_type_enum') THEN
        DROP TYPE input_type_enum CASCADE;
    END IF;
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'group_data_period_enum') THEN
        DROP TYPE group_data_period_enum CASCADE;
    END IF;
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'total_is_enum') THEN
        DROP TYPE total_is_enum CASCADE;
    END IF;
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'trend_direction_enum') THEN
        DROP TYPE trend_direction_enum CASCADE;
    END IF;
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'source_type_enum') THEN
        DROP TYPE source_type_enum CASCADE;
    END IF;
END $$;

-- Criar tipos
CREATE TYPE input_type_enum AS ENUM ('cumulative', 'non_cumulative');
CREATE TYPE group_data_period_enum AS ENUM ('daily', 'weekly', 'monthly', 'quarterly', 'half_yearly', 'yearly');
CREATE TYPE total_is_enum AS ENUM ('sum_of_values', 'average_of_values', 'last_value', 'all_time', 'ytd_as_of');
CREATE TYPE trend_direction_enum AS ENUM ('higher_is_better', 'lower_is_better', 'no_trend');
CREATE TYPE source_type_enum AS ENUM ('manual', 'report', 'integration');

-- =====================================================
-- PARTE 2: CRIAR TABELAS
-- =====================================================

-- Tabela de métricas
CREATE TABLE metrics_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    unit TEXT NOT NULL,
    input_type input_type_enum NOT NULL DEFAULT 'non_cumulative',
    group_data_period group_data_period_enum NOT NULL DEFAULT 'monthly',
    total_is total_is_enum NOT NULL DEFAULT 'last_value',
    trend_direction trend_direction_enum NOT NULL DEFAULT 'higher_is_better',
    domain TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de valores
CREATE TABLE metric_values (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_id UUID NOT NULL REFERENCES metrics_library(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    value DECIMAL(15,4) NOT NULL,
    source_type source_type_enum NOT NULL DEFAULT 'manual',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(metric_id, organization_id, period_start, period_end)
);

-- Tabela cross-domain
CREATE TABLE cross_domain_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    period VARCHAR(7) NOT NULL UNIQUE,
    overall_health_score DECIMAL(5,2),
    critical_relationships_count INTEGER DEFAULT 0,
    recommendations_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- PARTE 3: ÍNDICES
-- =====================================================

CREATE INDEX idx_metrics_library_domain ON metrics_library(domain);
CREATE INDEX idx_metrics_library_active ON metrics_library(is_active);
CREATE INDEX idx_metric_values_metric_org ON metric_values(metric_id, organization_id);
CREATE INDEX idx_metric_values_period_start ON metric_values(period_start);

-- =====================================================
-- PARTE 4: SEGURANÇA (sem IF NOT EXISTS)
-- =====================================================

ALTER TABLE metrics_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE metric_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE cross_domain_analytics ENABLE ROW LEVEL SECURITY;

-- Apagar policies se existirem
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public read metrics" ON metrics_library;
    DROP POLICY IF EXISTS "Service manage metrics" ON metrics_library;
    DROP POLICY IF EXISTS "Users view org metrics" ON metric_values;
    DROP POLICY IF EXISTS "Service manage values" ON metric_values;
    DROP POLICY IF EXISTS "Public read analytics" ON cross_domain_analytics;
    DROP POLICY IF EXISTS "Service manage analytics" ON cross_domain_analytics;
END $$;

-- Criar policies
CREATE POLICY "Public read metrics" ON metrics_library FOR SELECT USING (true);
CREATE POLICY "Service manage metrics" ON metrics_library FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Users view org metrics" ON metric_values FOR SELECT USING (
    organization_id IN (SELECT organization_id FROM profiles WHERE id = auth.uid())
);
CREATE POLICY "Service manage values" ON metric_values FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Public read analytics" ON cross_domain_analytics FOR SELECT USING (true);
CREATE POLICY "Service manage analytics" ON cross_domain_analytics FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- PARTE 5: VIEW PRINCIPAL
-- =====================================================

CREATE OR REPLACE VIEW latest_metric_values AS
SELECT DISTINCT ON (mv.metric_id, mv.organization_id)
    ml.id as metric_id,
    ml.name as metric_name,
    ml.unit,
    ml.domain,
    ml.trend_direction,
    mv.organization_id,
    o.name as organization_name,
    mv.value,
    mv.period_start,
    mv.period_end,
    mv.source_type,
    mv.created_at as recorded_at,
    CASE 
        WHEN ml.trend_direction = 'higher_is_better' THEN 
            CASE WHEN mv.value > 0 THEN 'good' ELSE 'bad' END
        WHEN ml.trend_direction = 'lower_is_better' THEN 
            CASE WHEN mv.value < 0 THEN 'good' ELSE 'bad' END
        ELSE 'neutral'
    END as health_status
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
JOIN organizations o ON mv.organization_id = o.id
WHERE ml.is_active = true
ORDER BY mv.metric_id, mv.organization_id, mv.period_start DESC;

-- =====================================================
-- PARTE 6: INSERIR MÉTRICAS
-- =====================================================

DO $$
BEGIN
    -- Financeiras
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Net Profit Margin') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Net Profit Margin', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'finance', 'Margem de lucro líquida');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Cash Burn Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Cash Burn Rate', 'R$', 'non_cumulative', 'monthly', 'last_value', 'lower_is_better', 'finance', 'Taxa de queima de caixa mensal');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Runway') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Runway', 'meses', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'finance', 'Meses de caixa restantes');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Customer Acquisition Cost') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Customer Acquisition Cost', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'finance', 'Custo de aquisição de cliente');
    END IF;
    
    -- Comerciais
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Sales Conversion Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Sales Conversion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Taxa de conversão de vendas');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Customer Lifetime Value') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Customer Lifetime Value', 'R$', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'commercial', 'Valor vitalício do cliente');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Churn Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Churn Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'commercial', 'Taxa de cancelamento');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Average Ticket') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Average Ticket', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Ticket médio');
    END IF;
    
    -- Operacionais
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Operational Efficiency') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Operational Efficiency', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Eficiência operacional');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Quality Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Quality Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Taxa de qualidade');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Throughput') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Throughput', 'unidades', 'cumulative', 'monthly', 'sum_of_values', 'higher_is_better', 'operations', 'Throughput produtivo');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Capacity Utilization') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Capacity Utilization', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Utilização da capacidade');
    END IF;
    
    -- Estratégicas
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'OKR Progress') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('OKR Progress', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Progresso dos OKRs');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Initiative Completion Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Initiative Completion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Taxa de conclusão de iniciativas');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Strategic Alignment') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Strategic Alignment', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Alinhamento estratégico');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM metrics_library WHERE name = 'Execution Rate') THEN
        INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
        ('Execution Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Taxa de execução');
    END IF;
END $$;

-- =====================================================
-- PARTE 7: INSERIR DADOS DE EXEMPLO
-- =====================================================

DO $$
DECLARE
    v_org_id UUID;
BEGIN
    -- Obter ou criar organização
    SELECT id INTO v_org_id FROM organizations LIMIT 1;
    
    IF v_org_id IS NULL THEN
        INSERT INTO organizations (name) VALUES ('SuperRelatórios') RETURNING id INTO v_org_id;
    END IF;
    
    -- Inserir valores de janeiro
    IF NOT EXISTS (SELECT 1 FROM metric_values WHERE period_start = '2024-01-01' AND organization_id = v_org_id LIMIT 1) THEN
        INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
        ((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), v_org_id, '2024-01-01', '2024-01-31', 15.5, 'manual', 'Margem saudável'),
        ((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), v_org_id, '2024-01-01', '2024-01-31', 8500.00, 'manual', 'Controlado'),
        ((SELECT id FROM metrics_library WHERE name = 'Runway'), v_org_id, '2024-01-01', '2024-01-31', 8.5, 'manual', 'Estável'),
        ((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), v_org_id, '2024-01-01', '2024-01-31', 350.00, 'manual', 'Aceitável'),
        ((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), v_org_id, '2024-01-01', '2024-01-31', 12.3, 'manual', 'Precisa melhorar'),
        ((SELECT id FROM metrics_library WHERE name = 'Customer Lifetime Value'), v_org_id, '2024-01-01', '2024-01-31', 2100.00, 'manual', 'Bom'),
        ((SELECT id FROM metrics_library WHERE name = 'Churn Rate'), v_org_id, '2024-01-01', '2024-01-31', 5.2, 'manual', 'Controlado'),
        ((SELECT id FROM metrics_library WHERE name = 'Average Ticket'), v_org_id, '2024-01-01', '2024-01-31', 450.00, 'manual', 'Estável'),
        ((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), v_org_id, '2024-01-01', '2024-01-31', 72.5, 'manual', 'Bom'),
        ((SELECT id FROM metrics_library WHERE name = 'Quality Rate'), v_org_id, '2024-01-01', '2024-01-31', 94.2, 'manual', 'Excelente'),
        ((SELECT id FROM metrics_library WHERE name = 'Throughput'), v_org_id, '2024-01-01', '2024-01-31', 1250.0, 'manual', 'Produtivo'),
        ((SELECT id FROM metrics_library WHERE name = 'Capacity Utilization'), v_org_id, '2024-01-01', '2024-01-31', 68.0, 'manual', 'Adequado'),
        ((SELECT id FROM metrics_library WHERE name = 'OKR Progress'), v_org_id, '2024-01-01', '2024-01-31', 78.5, 'manual', 'Bom progresso'),
        ((SELECT id FROM metrics_library WHERE name = 'Initiative Completion Rate'), v_org_id, '2024-01-01', '2024-01-31', 65.0, 'manual', 'Dentro do esperado'),
        ((SELECT id FROM metrics_library WHERE name = 'Strategic Alignment'), v_org_id, '2024-01-01', '2024-01-31', 82.0, 'manual', 'Bem alinhado'),
        ((SELECT id FROM metrics_library WHERE name = 'Execution Rate'), v_org_id, '2024-01-01', '2024-01-31', 71.5, 'manual', 'Execução consistente');
    END IF;
    
    -- Inserir valores de fevereiro
    IF NOT EXISTS (SELECT 1 FROM metric_values WHERE period_start = '2024-02-01' AND organization_id = v_org_id LIMIT 1) THEN
        INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
        ((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), v_org_id, '2024-02-01', '2024-02-29', 18.2, 'manual', 'Melhorou'),
        ((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), v_org_id, '2024-02-01', '2024-02-29', 7200.00, 'manual', 'Reduziu'),
        ((SELECT id FROM metrics_library WHERE name = 'Runway'), v_org_id, '2024-02-01', '2024-02-29', 9.8, 'manual', 'Aumentou'),
        ((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), v_org_id, '2024-02-01', '2024-02-29', 14.7, 'manual', 'Melhorou'),
        ((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), v_org_id, '2024-02-01', '2024-02-29', 320.00, 'manual', 'Reduziu'),
        ((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), v_org_id, '2024-02-01', '2024-02-29', 76.8, 'manual', 'Melhorou');
    END IF;
    
END $$;

-- Inserir analytics
INSERT INTO cross_domain_analytics (period, overall_health_score, critical_relationships_count, recommendations_count) VALUES
('2024-01', 75.5, 2, 3),
('2024-02', 82.3, 1, 2)
ON CONFLICT (period) DO UPDATE SET 
    overall_health_score = EXCLUDED.overall_health_score,
    critical_relationships_count = EXCLUDED.critical_relationships_count,
    recommendations_count = EXCLUDED.recommendations_count;

-- =====================================================
-- PARTE 8: VERIFICAÇÃO FINAL
-- =====================================================

SELECT 
    '✅ SCRIPT DEFINITIVO EXECUTADO!' as mensagem,
    'Painel de Indicadores pronto para usar' as status,
    'Acesse /app/metrics no seu aplicativo' as proximo_passo;

SELECT 
    'RESUMO DEFINITIVO' as info,
    (SELECT COUNT(*) FROM metrics_library WHERE is_active = true) as total_metrics,
    (SELECT COUNT(*) FROM metric_values) as total_values,
    (SELECT COUNT(DISTINCT domain) FROM metrics_library WHERE is_active = true) as domains;

SELECT 
    'MÉTRICAS POR DOMÍNIO' as info,
    domain,
    COUNT(*) as quantidade,
    STRING_AGG(name, ', ') as metricas
FROM metrics_library 
WHERE is_active = true 
GROUP BY domain 
ORDER BY domain;
