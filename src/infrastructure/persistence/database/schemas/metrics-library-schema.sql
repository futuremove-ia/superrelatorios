-- =====================================================
-- METRICS LIBRARY UNIFICATION v1.0
-- Based on Cascade.app patterns
-- Replaces: metrics, operations_metrics, commercial_metrics, strategy_metrics, user_metrics
-- =====================================================

-- =====================================================
-- 1. METRICS LIBRARY (Central Definition Table)
-- =====================================================

CREATE TYPE input_type_enum AS ENUM ('cumulative', 'non_cumulative');
CREATE TYPE group_data_period_enum AS ENUM ('daily', 'weekly', 'monthly', 'quarterly', 'half_yearly', 'yearly');
CREATE TYPE total_is_enum AS ENUM ('sum_of_values', 'average_of_values', 'last_value', 'all_time', 'ytd_as_of');
CREATE TYPE trend_direction_enum AS ENUM ('higher_is_better', 'lower_is_better', 'no_trend');
CREATE TYPE source_type_enum AS ENUM ('manual', 'report', 'integration');

DROP TABLE IF EXISTS metrics_library CASCADE;
CREATE TABLE metrics_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    input_type input_type_enum NOT NULL DEFAULT 'non_cumulative',
    group_data_period group_data_period_enum NOT NULL DEFAULT 'monthly',
    total_is total_is_enum NOT NULL DEFAULT 'last_value',
    trend_direction trend_direction_enum NOT NULL DEFAULT 'higher_is_better',
    domain TEXT NOT NULL, -- 'finance', 'operations', 'commercial', 'strategy'
    calculation_formula TEXT,
    ytd_month_offset INT DEFAULT 0,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT metrics_library_name_unique UNIQUE (name),
    CONSTRAINT metrics_library_unit_not_empty CHECK (length(trim(unit)) > 0),
    CONSTRAINT metrics_library_ytd_offset_valid CHECK (ytd_month_offset >= 0 AND ytd_month_offset <= 11),
    CONSTRAINT metrics_library_domain_valid CHECK (domain IN ('finance', 'operations', 'commercial', 'strategy', 'cross_domain'))
);

-- =====================================================
-- 2. METRIC VALUES (Unified Data Table)
-- =====================================================

DROP TABLE IF EXISTS metric_values CASCADE;
CREATE TABLE metric_values (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_id UUID NOT NULL REFERENCES metrics_library(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    value DECIMAL(15,4) NOT NULL,
    source_type source_type_enum NOT NULL DEFAULT 'manual',
    source_reference TEXT, -- Can be report_id, integration_name, etc.
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT metric_values_period_valid CHECK (period_end >= period_start),
    CONSTRAINT metric_values_unique_metric_org_period UNIQUE (metric_id, organization_id, period_start, period_end)
);

-- =====================================================
-- 3. INDEXES FOR PERFORMANCE
-- =====================================================

-- Metrics Library indexes
CREATE INDEX idx_metrics_library_domain ON metrics_library(domain);
CREATE INDEX idx_metrics_library_active ON metrics_library(is_active);
CREATE INDEX idx_metrics_library_input_type ON metrics_library(input_type);
CREATE INDEX idx_metrics_library_group_period ON metrics_library(group_data_period);

-- Metric Values indexes
CREATE INDEX idx_metric_values_metric_org ON metric_values(metric_id, organization_id);
CREATE INDEX idx_metric_values_period_start ON metric_values(period_start);
CREATE INDEX idx_metric_values_period_end ON metric_values(period_end);
CREATE INDEX idx_metric_values_source_type ON metric_values(source_type);
CREATE INDEX idx_metric_values_created_at ON metric_values(created_at DESC);

-- Composite indexes for common queries
CREATE INDEX idx_metric_values_org_period ON metric_values(organization_id, period_start DESC);
CREATE INDEX idx_metric_values_metric_period ON metric_values(metric_id, period_start DESC);

-- =====================================================
-- 4. ROW LEVEL SECURITY (RLS)
-- =====================================================

ALTER TABLE metrics_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE metric_values ENABLE ROW LEVEL SECURITY;

-- Metrics Library policies (read-only for authenticated users)
CREATE POLICY "Authenticated users can read metrics library" ON metrics_library
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Service role can manage metrics library" ON metrics_library
  FOR ALL USING (auth.role() = 'service_role');

-- Metric Values policies (organization-based access)
CREATE POLICY "Users can view their organization's metric values" ON metric_values
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their organization's metric values" ON metric_values
  FOR INSERT WITH CHECK (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

CREATE POLICY "Users can update their organization's metric values" ON metric_values
  FOR UPDATE USING (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

CREATE POLICY "Service role can manage all metric values" ON metric_values
  FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- 5. TRIGGERS FOR UPDATED_AT
-- =====================================================

CREATE OR REPLACE FUNCTION update_metrics_library_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_metric_values_created_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER metrics_library_updated_at
    BEFORE UPDATE ON metrics_library
    FOR EACH ROW EXECUTE FUNCTION update_metrics_library_updated_at();

CREATE TRIGGER metric_values_created_at
    BEFORE INSERT ON metric_values
    FOR EACH ROW EXECUTE FUNCTION update_metric_values_created_at();

-- =====================================================
-- 6. VIEWS FOR COMMON QUERIES
-- =====================================================

-- View: Latest metric values per organization
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

-- View: Metric values by period with aggregations
CREATE OR REPLACE VIEW metric_values_aggregated AS
SELECT 
    ml.id as metric_id,
    ml.name as metric_name,
    ml.unit,
    ml.domain,
    ml.input_type,
    ml.group_data_period,
    ml.total_is,
    mv.organization_id,
    o.name as organization_name,
    DATE_TRUNC(ml.group_data_period, mv.period_start)::date as period_start,
    DATE_TRUNC(ml.group_data_period, mv.period_start)::date + 
        CASE 
            WHEN ml.group_data_period = 'daily' THEN INTERVAL '1 day' - INTERVAL '1 second'
            WHEN ml.group_data_period = 'weekly' THEN INTERVAL '1 week' - INTERVAL '1 second'
            WHEN ml.group_data_period = 'monthly' THEN INTERVAL '1 month' - INTERVAL '1 second'
            WHEN ml.group_data_period = 'quarterly' THEN INTERVAL '3 months' - INTERVAL '1 second'
            WHEN ml.group_data_period = 'half_yearly' THEN INTERVAL '6 months' - INTERVAL '1 second'
            WHEN ml.group_data_period = 'yearly' THEN INTERVAL '1 year' - INTERVAL '1 second'
        END as period_end,
    CASE 
        WHEN ml.total_is = 'sum_of_values' THEN SUM(mv.value)
        WHEN ml.total_is = 'average_of_values' THEN AVG(mv.value)
        WHEN ml.total_is = 'last_value' THEN (
            SELECT value FROM metric_values mv2 
            WHERE mv2.metric_id = mv.metric_id 
              AND mv2.organization_id = mv.organization_id
              AND DATE_TRUNC(ml.group_data_period, mv2.period_start) = DATE_TRUNC(ml.group_data_period, mv.period_start)
            ORDER BY mv2.created_at DESC 
            LIMIT 1
        )
        ELSE mv.value
    END as aggregated_value,
    COUNT(*) as data_points,
    MAX(mv.created_at) as last_updated
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
JOIN organizations o ON mv.organization_id = o.id
WHERE ml.is_active = true
GROUP BY 
    ml.id, ml.name, ml.unit, ml.domain, ml.input_type, ml.group_data_period, ml.total_is,
    mv.organization_id, o.name, DATE_TRUNC(ml.group_data_period, mv.period_start)
ORDER BY period_start DESC;

-- View: Cross-domain metrics summary
CREATE OR REPLACE VIEW cross_domain_metrics_summary AS
SELECT 
    domain,
    COUNT(*) as total_metrics,
    COUNT(*) FILTER (WHERE is_active = true) as active_metrics,
    COUNT(*) FILTER (WHERE input_type = 'cumulative') as cumulative_metrics,
    COUNT(*) FILTER (WHERE input_type = 'non_cumulative') as non_cumulative_metrics,
    STRING_AGG(DISTINCT unit, ', ') as available_units,
    STRING_AGG(DISTINCT group_data_period::text, ', ') as available_periods
FROM metrics_library
GROUP BY domain
ORDER BY domain;

-- =====================================================
-- 7. HELPER FUNCTIONS
-- =====================================================

-- Function: Get metric trend analysis
CREATE OR REPLACE FUNCTION get_metric_trend_analysis(
    p_metric_id UUID,
    p_organization_id UUID,
    p_periods_back INT DEFAULT 3
) RETURNS TABLE (
    period_start DATE,
    period_end DATE,
    value DECIMAL(15,4),
    trend_direction TEXT,
    trend_percentage DECIMAL(5,2),
    health_status TEXT
) AS $$
BEGIN
    RETURN QUERY
    WITH ranked_values AS (
        SELECT 
            mv.period_start,
            mv.period_end,
            mv.value,
            ml.trend_direction,
            LAG(mv.value) OVER (ORDER BY mv.period_start) as previous_value,
            ROW_NUMBER() OVER (ORDER BY mv.period_start DESC) as rn
        FROM metric_values mv
        JOIN metrics_library ml ON mv.metric_id = ml.id
        WHERE mv.metric_id = p_metric_id 
          AND mv.organization_id = p_organization_id
          AND ml.is_active = true
        ORDER BY mv.period_start DESC
        LIMIT p_periods_back
    )
    SELECT 
        period_start,
        period_end,
        value,
        trend_direction,
        CASE 
            WHEN previous_value IS NULL OR previous_value = 0 THEN 0
            ELSE ((value - previous_value) / previous_value) * 100
        END as trend_percentage,
        CASE 
            WHEN trend_direction = 'higher_is_better' AND value > 0 THEN 'good'
            WHEN trend_direction = 'higher_is_better' AND value < 0 THEN 'bad'
            WHEN trend_direction = 'lower_is_better' AND value < 0 THEN 'good'
            WHEN trend_direction = 'lower_is_better' AND value > 0 THEN 'bad'
            ELSE 'neutral'
        END as health_status
    FROM ranked_values
    ORDER BY period_start DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Calculate YTD values
CREATE OR REPLACE FUNCTION calculate_ytd_values(
    p_metric_id UUID,
    p_organization_id UUID,
    p_as_of_month INT DEFAULT 1 -- January = 1
) RETURNS TABLE (
    ytd_start DATE,
    ytd_end DATE,
    ytd_sum DECIMAL(15,4),
    ytd_average DECIMAL(15,4),
    ytd_last_value DECIMAL(15,4),
    data_points_count INT
) AS $$
DECLARE
    v_current_year INT := EXTRACT(YEAR FROM CURRENT_DATE);
    v_ytd_start DATE;
    v_ytd_end DATE;
BEGIN
    v_ytd_start := MAKE_DATE(v_current_year, p_as_of_month, 1);
    v_ytd_end := v_ytd_start + INTERVAL '11 months' + INTERVAL '30 days';
    
    RETURN QUERY
    SELECT 
        v_ytd_start,
        v_ytd_end,
        COALESCE(SUM(mv.value), 0) as ytd_sum,
        COALESCE(AVG(mv.value), 0) as ytd_average,
        COALESCE(
            (SELECT value FROM metric_values mv2 
             WHERE mv2.metric_id = p_metric_id 
               AND mv2.organization_id = p_organization_id
               AND mv2.period_start >= v_ytd_start 
               AND mv2.period_start <= v_ytd_end
             ORDER BY mv2.created_at DESC LIMIT 1), 0
        ) as ytd_last_value,
        COUNT(*) as data_points_count
    FROM metric_values mv
    WHERE mv.metric_id = p_metric_id 
      AND mv.organization_id = p_organization_id
      AND mv.period_start >= v_ytd_start 
      AND mv.period_start <= v_ytd_end;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 8. MIGRATION PREPARATION
-- =====================================================

-- Create temporary mapping table for migration
CREATE TABLE IF NOT EXISTS metrics_migration_mapping (
    old_table TEXT,
    old_column TEXT,
    new_metric_id UUID,
    migration_status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add comment for documentation
COMMENT ON TABLE metrics_library IS 'Central metric definitions based on Cascade.app patterns';
COMMENT ON TABLE metric_values IS 'Unified storage for all metric values across domains';
COMMENT ON VIEW latest_metric_values IS 'Latest values per metric and organization';
COMMENT ON VIEW metric_values_aggregated IS 'Aggregated values based on metric configuration';
COMMENT ON VIEW cross_domain_metrics_summary IS 'Summary statistics by domain';
