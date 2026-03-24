-- =====================================================
-- TABELAS PARA JORNADA DE DADOS v3.0
-- user_metrics e user_challenges
-- Conectam relatórios ao dashboard com dados reais
-- =====================================================

-- =====================================================
-- 1. TABELA: user_metrics
-- Armazena KPIs extraídos dos relatórios para agregação no dashboard
-- =====================================================

DROP TABLE IF EXISTS user_metrics CASCADE;

CREATE TABLE user_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    kpi_code VARCHAR(50) NOT NULL,
    value DECIMAL(15,4) NOT NULL,
    unit VARCHAR(20) CHECK (unit IN ('percentage', 'currency', 'days', 'ratio', 'count', 'monetary')),
    benchmark_value DECIMAL(15,4),
    delta_percentage DECIMAL(8,4), -- Variação vs período anterior
    reference_period VARCHAR(10) NOT NULL, -- "2026-03" ou "2026-Q1"
    extracted_confidence DECIMAL(3,2) DEFAULT 0.80, -- Confiança da extração IA
    is_manual_entry BOOLEAN DEFAULT false,
    source_block_index INT, -- Índice do bloco no relatório
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_user_metrics_org ON user_metrics(organization_id);
CREATE INDEX idx_user_metrics_period ON user_metrics(reference_period);
CREATE INDEX idx_user_metrics_kpi ON user_metrics(kpi_code);
CREATE INDEX idx_user_metrics_report ON user_metrics(report_id);
CREATE INDEX idx_user_metrics_lookup ON user_metrics(organization_id, reference_period, kpi_code);

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_metrics_updated_at
    BEFORE UPDATE ON user_metrics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 2. TABELA: user_challenges
-- Desafios detectados nos relatórios com ligação ao library_challenges
-- =====================================================

DROP TABLE IF EXISTS user_challenges CASCADE;

CREATE TABLE user_challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID,
    challenge_code VARCHAR(50) NOT NULL,
    -- Campos enriquecidos da biblioteca
    title VARCHAR(200),
    description TEXT,
    severity VARCHAR(20) CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    -- Status do ciclo de vida
    status VARCHAR(30) NOT NULL DEFAULT 'detected' 
        CHECK (status IN ('detected', 'acknowledged', 'in_progress', 'resolved', 'dismissed')),
    -- Ligação com relatório
    detected_in_report_id UUID REFERENCES reports(id) ON DELETE SET NULL,
    detected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    acknowledged_at TIMESTAMP WITH TIME ZONE,
    resolved_at TIMESTAMP WITH TIME ZONE,
    dismissed_at TIMESTAMP WITH TIME ZONE,
    -- Ligação com alavanca sugerida
    suggested_lever_code VARCHAR(50),
    -- Métricas de confiança
    confidence_score DECIMAL(3,2) DEFAULT 0.80,
    ai_diagnostic_data JSONB, -- Diagnóstico completo da IA
    -- Métricas de resolução
    expected_resolution_days INT DEFAULT 30,
    actual_resolution_days INT,
    -- Resultado
    resolution_summary TEXT,
    resolution_impact_value DECIMAL(15,2), -- Valor do impacto (R$)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraint única: uma organização não pode ter o mesmo desafio ativo 2x
    UNIQUE(organization_id, challenge_code, status)
);

-- Índices
CREATE INDEX idx_user_challenges_org ON user_challenges(organization_id);
CREATE INDEX idx_user_challenges_status ON user_challenges(status);
CREATE INDEX idx_user_challenges_code ON user_challenges(challenge_code);
CREATE INDEX idx_user_challenges_report ON user_challenges(detected_in_report_id);
CREATE INDEX idx_user_challenges_active ON user_challenges(organization_id, status) 
    WHERE status IN ('detected', 'acknowledged', 'in_progress');

-- Trigger updated_at
CREATE TRIGGER user_challenges_updated_at
    BEFORE UPDATE ON user_challenges
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 3. VIEW: dashboard_metrics_summary
-- Agregação pronta para o dashboard
-- =====================================================

CREATE OR REPLACE VIEW dashboard_metrics_summary AS
WITH 
-- Métricas ativas por organização
active_challenges AS (
    SELECT 
        organization_id,
        COUNT(*) as active_challenges_count,
        COUNT(*) FILTER (WHERE severity = 'critical') as critical_challenges,
        COUNT(*) FILTER (WHERE suggested_lever_code IS NOT NULL) as challenges_with_lever
    FROM user_challenges
    WHERE status IN ('detected', 'acknowledged', 'in_progress')
    GROUP BY organization_id
),
-- Últimos KPIs do período atual
current_kpis AS (
    SELECT 
        organization_id,
        kpi_code,
        value,
        delta_percentage,
        reference_period,
        ROW_NUMBER() OVER (PARTITION BY organization_id, kpi_code ORDER BY created_at DESC) as rn
    FROM user_metrics
    WHERE reference_period = TO_CHAR(CURRENT_DATE, 'YYYY-MM')
),
-- Contagem de relatórios
report_counts AS (
    SELECT 
        user_id,
        COUNT(*) as total_reports,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days') as reports_last_30d
    FROM reports
    GROUP BY user_id
)
SELECT 
    ac.organization_id,
    -- Desafios
    COALESCE(ac.active_challenges_count, 0) as active_priorities,
    COALESCE(ac.critical_challenges, 0) as critical_count,
    COALESCE(ac.challenges_with_lever, 0) as challenges_with_suggested_lever,
    -- KPIs críticos (últimos valores)
    (SELECT COUNT(*) FROM current_kpis ck WHERE ck.organization_id = ac.organization_id AND ck.rn = 1) as tracked_kpis,
    -- Resumo para dashboard
    jsonb_object_agg(
        ck.kpi_code,
        jsonb_build_object(
            'value', ck.value,
            'delta', ck.delta_percentage
        )
    ) FILTER (WHERE ck.rn = 1) as latest_kpis,
    -- Taxa de execução estimada (placeholder para quando tivermos user_actions)
    0 as execution_rate
FROM active_challenges ac
LEFT JOIN current_kpis ck ON ac.organization_id = ck.organization_id
GROUP BY ac.organization_id, ac.active_challenges_count, ac.critical_challenges, ac.challenges_with_lever;

-- =====================================================
-- 4. FUNÇÕES AUXILIARES
-- =====================================================

-- Função para obter métricas do dashboard
CREATE OR REPLACE FUNCTION get_dashboard_metrics(p_organization_id UUID)
RETURNS TABLE (
    active_priorities BIGINT,
    tracked_kpis BIGINT,
    critical_count BIGINT,
    latest_kpis JSONB,
    execution_rate INT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        dms.active_priorities,
        dms.tracked_kpis,
        dms.critical_count,
        dms.latest_kpis,
        dms.execution_rate
    FROM dashboard_metrics_summary dms
    WHERE dms.organization_id = p_organization_id;
END;
$$ LANGUAGE plpgsql STABLE;

-- Função para salvar métricas em lote (usada pelo frontend)
CREATE OR REPLACE FUNCTION save_report_metrics(
    p_report_id UUID,
    p_organization_id UUID,
    p_metrics JSONB -- Array de {kpi_code, value, unit, benchmark_value, delta_percentage}
)
RETURNS INT AS $$
DECLARE
    v_count INT := 0;
    v_metric JSONB;
BEGIN
    FOR v_metric IN SELECT jsonb_array_elements(p_metrics)
    LOOP
        INSERT INTO user_metrics (
            report_id,
            organization_id,
            kpi_code,
            value,
            unit,
            benchmark_value,
            delta_percentage,
            reference_period
        ) VALUES (
            p_report_id,
            p_organization_id,
            v_metric->>'kpi_code',
            (v_metric->>'value')::DECIMAL,
            v_metric->>'unit',
            (v_metric->>'benchmark_value')::DECIMAL,
            (v_metric->>'delta_percentage')::DECIMAL,
            TO_CHAR(CURRENT_DATE, 'YYYY-MM')
        );
        v_count := v_count + 1;
    END LOOP;
    
    RETURN v_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- VALIDAÇÃO
-- =====================================================

SELECT 'TABELAS DE MÉTRICAS CRIADAS COM SUCESSO' as status;

SELECT 
    table_name,
    'CRIADA' as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('user_metrics', 'user_challenges');

SELECT 
    'View criada' as objeto,
    viewname as nome
FROM pg_views 
WHERE schemaname = 'public' 
  AND viewname = 'dashboard_metrics_summary';

SELECT 
    'Funções criadas' as objeto,
    routine_name as nome
FROM information_schema.routines 
WHERE routine_schema = 'public' 
  AND routine_name IN ('get_dashboard_metrics', 'save_report_metrics');
