-- =====================================================
-- SCRIPT COMPLETO - PAINEL DE INDICADORES SUPERRELATÓRIOS
-- Copiar e colar tudo isso no SQL Editor do Supabase
-- =====================================================

-- =====================================================
-- PARTE 1: CRIAR TIPOS E TABELAS PRINCIPAIS
-- =====================================================

-- Criar tipos para configurações
CREATE TYPE input_type_enum AS ENUM ('cumulative', 'non_cumulative');
CREATE TYPE group_data_period_enum AS ENUM ('daily', 'weekly', 'monthly', 'quarterly', 'half_yearly', 'yearly');
CREATE TYPE total_is_enum AS ENUM ('sum_of_values', 'average_of_values', 'last_value', 'all_time', 'ytd_as_of');
CREATE TYPE trend_direction_enum AS ENUM ('higher_is_better', 'lower_is_better', 'no_trend');
CREATE TYPE source_type_enum AS ENUM ('manual', 'report', 'integration');

-- Tabela de definições das métricas
CREATE TABLE IF NOT EXISTS metrics_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    input_type input_type_enum NOT NULL DEFAULT 'non_cumulative',
    group_data_period group_data_period_enum NOT NULL DEFAULT 'monthly',
    total_is total_is_enum NOT NULL DEFAULT 'last_value',
    trend_direction trend_direction_enum NOT NULL DEFAULT 'higher_is_better',
    domain TEXT NOT NULL,
    calculation_formula TEXT,
    ytd_month_offset INT DEFAULT 0,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de valores das métricas
CREATE TABLE IF NOT EXISTS metric_values (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_id UUID NOT NULL REFERENCES metrics_library(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    value DECIMAL(15,4) NOT NULL,
    source_type source_type_enum NOT NULL DEFAULT 'manual',
    source_reference TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela para analytics cross-domain
CREATE TABLE IF NOT EXISTS cross_domain_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    period VARCHAR(7) NOT NULL,
    kpi_metrics JSONB NOT NULL,
    impact_calculations JSONB NOT NULL,
    composite_kpis JSONB NOT NULL,
    cross_domain_health JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- PARTE 2: CRIAR ÍNDICES PARA PERFORMANCE
-- =====================================================

-- Índices para metrics_library
CREATE INDEX IF NOT EXISTS idx_metrics_library_domain ON metrics_library(domain);
CREATE INDEX IF NOT EXISTS idx_metrics_library_active ON metrics_library(is_active);

-- Índices para metric_values
CREATE INDEX IF NOT EXISTS idx_metric_values_metric_org ON metric_values(metric_id, organization_id);
CREATE INDEX IF NOT EXISTS idx_metric_values_period_start ON metric_values(period_start);
CREATE INDEX IF NOT EXISTS idx_metric_values_created_at ON metric_values(created_at DESC);

-- Índices para cross_domain_analytics
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_period ON cross_domain_analytics(period);

-- =====================================================
-- PARTE 3: CONFIGURAR SEGURANÇA
-- =====================================================

-- Ativar Row Level Security
ALTER TABLE metrics_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE metric_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE cross_domain_analytics ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
CREATE POLICY "Anyone can read metrics library" ON metrics_library FOR SELECT USING (true);
CREATE POLICY "Service role can manage metrics library" ON metrics_library FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Users can view their organization's metric values" ON metric_values FOR SELECT USING (
    organization_id IN (SELECT organization_id FROM profiles WHERE id = auth.uid())
);
CREATE POLICY "Service role can manage all metric values" ON metric_values FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Anyone can read cross domain analytics" ON cross_domain_analytics FOR SELECT USING (true);
CREATE POLICY "Service role can manage cross domain analytics" ON cross_domain_analytics FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- PARTE 4: CRIAR VIEWS (VISÕES) PARA FACILITAR CONSULTAS
-- =====================================================

-- View com os valores mais recentes de cada métrica
CREATE OR REPLACE VIEW latest_metric_values AS
SELECT DISTINCT ON (mv.metric_id, mv.organization_id)
    ml.id as metric_id,
    ml.name as metric_name,
    ml.unit,
    ml.domain,
    ml.trend_direction,
    ml.total_is,
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

-- View com resumo por domínio
CREATE OR REPLACE VIEW cross_domain_metrics_summary AS
SELECT 
    domain,
    COUNT(*) as total_metrics,
    COUNT(*) FILTER (WHERE is_active = true) as active_metrics,
    STRING_AGG(DISTINCT unit, ', ') as available_units
FROM metrics_library
GROUP BY domain
ORDER BY domain;

-- View com analytics cross-domain
CREATE OR REPLACE VIEW cross_domain_analytics_summary AS
SELECT 
    period,
    created_at,
    (cross_domain_health->>'overallScore')::decimal as overall_health_score,
    jsonb_array_length(cross_domain_health->'criticalRelationships') as critical_relationships_count,
    jsonb_array_length(cross_domain_health->'recommendations') as recommendations_count
FROM cross_domain_analytics
ORDER BY period DESC;

-- =====================================================
-- PARTE 5: INSERIR MÉTRICAS DE EXEMPLO
-- =====================================================

-- Métricas Financeiras
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Net Profit Margin', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'finance', 'Margem de lucro líquida'),
('Cash Burn Rate', 'R$', 'non_cumulative', 'monthly', 'last_value', 'lower_is_better', 'finance', 'Taxa de queima de caixa mensal'),
('Runway', 'meses', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'finance', 'Meses de caixa restantes'),
('Customer Acquisition Cost', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'finance', 'Custo de aquisição de cliente')
ON CONFLICT (name) DO NOTHING;

-- Métricas Comerciais
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Sales Conversion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Taxa de conversão de vendas'),
('Customer Lifetime Value', 'R$', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'commercial', 'Valor vitalício do cliente'),
('Churn Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'commercial', 'Taxa de cancelamento'),
('Average Ticket', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Ticket médio')
ON CONFLICT (name) DO NOTHING;

-- Métricas Operacionais
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Operational Efficiency', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Eficiência operacional'),
('Quality Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Taxa de qualidade'),
('Throughput', 'unidades', 'cumulative', 'monthly', 'sum_of_values', 'higher_is_better', 'operations', 'Throughput produtivo'),
('Capacity Utilization', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Utilização da capacidade')
ON CONFLICT (name) DO NOTHING;

-- Métricas Estratégicas
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('OKR Progress', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Progresso dos OKRs'),
('Initiative Completion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Taxa de conclusão de iniciativas'),
('Strategic Alignment', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Alinhamento estratégico'),
('Execution Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Taxa de execução')
ON CONFLICT (name) DO NOTHING;

-- =====================================================
-- PARTE 6: INSERIR DADOS DE EXEMPLO PARA TESTE
-- =====================================================

-- Obter ID da organização (assumindo que existe uma organização)
DO $$
DECLARE
    v_org_id UUID;
BEGIN
    SELECT id INTO v_org_id FROM organizations LIMIT 1;
    
    IF v_org_id IS NULL THEN
        -- Criar organização de exemplo se não existir
        INSERT INTO organizations (name) VALUES ('SuperRelatórios') RETURNING id INTO v_org_id;
    END IF;
    
    -- Inserir valores para métricas financeiras
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
    ((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), v_org_id, '2024-01-01', '2024-01-31', 15.5, 'manual', 'Margem saudável'),
    ((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), v_org_id, '2024-01-01', '2024-01-31', 8500.00, 'manual', 'Controlado'),
    ((SELECT id FROM metrics_library WHERE name = 'Runway'), v_org_id, '2024-01-01', '2024-01-31', 8.5, 'manual', 'Estável'),
    ((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), v_org_id, '2024-01-01', '2024-01-31', 350.00, 'manual', 'Aceitável')
    ON CONFLICT DO NOTHING;
    
    -- Inserir valores para métricas comerciais
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
    ((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), v_org_id, '2024-01-01', '2024-01-31', 12.3, 'manual', 'Precisa melhorar'),
    ((SELECT id FROM metrics_library WHERE name = 'Customer Lifetime Value'), v_org_id, '2024-01-01', '2024-01-31', 2100.00, 'manual', 'Bom'),
    ((SELECT id FROM metrics_library WHERE name = 'Churn Rate'), v_org_id, '2024-01-01', '2024-01-31', 5.2, 'manual', 'Controlado'),
    ((SELECT id FROM metrics_library WHERE name = 'Average Ticket'), v_org_id, '2024-01-01', '2024-01-31', 450.00, 'manual', 'Estável')
    ON CONFLICT DO NOTHING;
    
    -- Inserir valores para métricas operacionais
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
    ((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), v_org_id, '2024-01-01', '2024-01-31', 72.5, 'manual', 'Bom'),
    ((SELECT id FROM metrics_library WHERE name = 'Quality Rate'), v_org_id, '2024-01-01', '2024-01-31', 94.2, 'manual', 'Excelente'),
    ((SELECT id FROM metrics_library WHERE name = 'Throughput'), v_org_id, '2024-01-01', '2024-01-31', 1250.0, 'manual', 'Produtivo'),
    ((SELECT id FROM metrics_library WHERE name = 'Capacity Utilization'), v_org_id, '2024-01-01', '2024-01-31', 68.0, 'manual', 'Adequado')
    ON CONFLICT DO NOTHING;
    
    -- Inserir valores para métricas estratégicas
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
    ((SELECT id FROM metrics_library WHERE name = 'OKR Progress'), v_org_id, '2024-01-01', '2024-01-31', 78.5, 'manual', 'Bom progresso'),
    ((SELECT id FROM metrics_library WHERE name = 'Initiative Completion Rate'), v_org_id, '2024-01-01', '2024-01-31', 65.0, 'manual', 'Dentro do esperado'),
    ((SELECT id FROM metrics_library WHERE name = 'Strategic Alignment'), v_org_id, '2024-01-01', '2024-01-31', 82.0, 'manual', 'Bem alinhado'),
    ((SELECT id FROM metrics_library WHERE name = 'Execution Rate'), v_org_id, '2024-01-01', '2024-01-31', 71.5, 'manual', 'Execução consistente')
    ON CONFLICT DO NOTHING;
    
    -- Inserir dados de fevereiro para mostrar tendências
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes) VALUES
    ((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), v_org_id, '2024-02-01', '2024-02-29', 18.2, 'manual', 'Melhorou'),
    ((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), v_org_id, '2024-02-01', '2024-02-29', 7200.00, 'manual', 'Reduziu'),
    ((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), v_org_id, '2024-02-01', '2024-02-29', 14.7, 'manual', 'Melhorou'),
    ((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), v_org_id, '2024-02-01', '2024-02-29', 76.8, 'manual', 'Melhorou')
    ON CONFLICT DO NOTHING;
    
END $$;

-- Inserir dados de cross-domain analytics
INSERT INTO cross_domain_analytics (period, kpi_metrics, impact_calculations, composite_kpis, cross_domain_health) VALUES
('2024-02', 
'[{"kpiCode": "NET_PROFIT_MARGIN", "value": 18.2, "unit": "%", "trend": "up", "domain": "finance"}, {"kpiCode": "SALES_CONVERSION", "value": 14.7, "unit": "%", "trend": "up", "domain": "commercial"}]',
'[{"sourceKPI": "SALES_CONVERSION", "targetKPI": "NET_PROFIT_MARGIN", "impact": 0.75, "confidence": 0.85}]',
'[{"name": "Business Health", "value": 82.5}, {"name": "Growth Potential", "value": 78.3}]',
'{"overallScore": 80.4, "criticalRelationships": [], "recommendations": [{"priority": "medium", "action": "Continuar foco em eficiência operacional"}]}'
ON CONFLICT (period) DO UPDATE SET 
kpi_metrics = EXCLUDED.kpi_metrics,
cross_domain_health = EXCLUDED.cross_domain_health;

-- =====================================================
-- PARTE 7: VERIFICAÇÃO FINAL
-- =====================================================

-- Mostrar resumo do que foi criado
SELECT 
    'RESUMO DA CRIAÇÃO' as status,
    (SELECT COUNT(*) FROM metrics_library WHERE is_active = true) as total_metrics,
    (SELECT COUNT(*) FROM metric_values) as total_values,
    (SELECT COUNT(DISTINCT domain) FROM metrics_library WHERE is_active = true) as domains,
    (SELECT COUNT(*) FROM cross_domain_analytics) as analytics_records;

-- Mostrar algumas métricas criadas
SELECT 
    'MÉTRICAS CRIADAS' as info,
    name,
    domain,
    unit,
    trend_direction
FROM metrics_library 
WHERE is_active = true 
ORDER BY domain, name;

-- Mostrar valores mais recentes
SELECT 
    'VALORES MAIS RECENTES' as info,
    ml.name,
    mv.value,
    mv.period_start,
    mv.health_status
FROM latest_metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
ORDER BY ml.domain, ml.name;

SELECT 
    '✅ SCRIPT EXECUTADO COM SUCESSO!' as mensagem,
    'Painel de Indicadores pronto para usar' as status,
    'Acesse /app/metrics no seu aplicativo' as proximo_passo;
