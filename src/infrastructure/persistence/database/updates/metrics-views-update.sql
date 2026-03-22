-- =====================================================
-- METRICS SYSTEM UPDATE - VIEWS & FUNCTIONS
-- Replace old metric tables with new metrics_library system
-- =====================================================

-- =====================================================
-- 1. UPDATE EXISTING VIEWS TO USE NEW METRICS LIBRARY
-- =====================================================

-- Replace metrics_summary view
DROP VIEW IF EXISTS metrics_summary CASCADE;
CREATE OR REPLACE VIEW metrics_summary AS
SELECT 
    mv.period_start,
    ml.name as metric_name,
    ml.unit,
    ml.domain,
    mv.value,
    mv.organization_id,
    o.name as organization_name,
    mv.created_at as calculated_at,
    CASE 
        WHEN ml.trend_direction = 'higher_is_better' THEN 
            CASE 
                WHEN ml.name = 'Net Profit Margin' THEN
                    CASE WHEN mv.value <= 5 THEN 'critical'
                         WHEN mv.value <= 10 THEN 'warning'
                         ELSE 'good'
                    END
                WHEN ml.name = 'Sales Conversion Rate' THEN
                    CASE WHEN mv.value <= 5 THEN 'critical'
                         WHEN mv.value <= 15 THEN 'warning'
                         ELSE 'good'
                    END
                WHEN ml.name = 'Runway' THEN
                    CASE WHEN mv.value <= 3 THEN 'critical'
                         WHEN mv.value <= 6 THEN 'warning'
                         ELSE 'good'
                    END
                ELSE 'good'
            END
        WHEN ml.trend_direction = 'lower_is_better' THEN 
            CASE 
                WHEN ml.name = 'Cash Burn Rate' THEN
                    CASE WHEN mv.value >= 10000 THEN 'critical'
                         WHEN mv.value >= 5000 THEN 'warning'
                         ELSE 'good'
                    END
                WHEN ml.name = 'Customer Acquisition Cost' THEN
                    CASE WHEN mv.value >= 500 THEN 'critical'
                         WHEN mv.value >= 200 THEN 'warning'
                         ELSE 'good'
                    END
                ELSE 'good'
            END
        ELSE 'neutral'
    END as health_status,
    CASE 
        WHEN ml.trend_direction = 'higher_is_better' THEN 
            CASE WHEN mv.value > 0 THEN 'positive' ELSE 'negative' END
        WHEN ml.trend_direction = 'lower_is_better' THEN 
            CASE WHEN mv.value < 0 THEN 'positive' ELSE 'negative' END
        ELSE 'neutral'
    END as trend_direction
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
JOIN organizations o ON mv.organization_id = o.id
WHERE ml.is_active = true
  AND mv.period_start = (
    SELECT MAX(period_start) 
    FROM metric_values mv2 
    WHERE mv2.metric_id = mv.metric_id 
      AND mv2.organization_id = mv.organization_id
  )
ORDER BY ml.domain, ml.name;

-- Update operations_metrics_summary view
DROP VIEW IF EXISTS operations_metrics_summary CASCADE;
CREATE OR REPLACE VIEW operations_metrics_summary AS
SELECT 
    mv.period_start,
    ml.name as metric_name,
    ml.unit,
    mv.value,
    mv.created_at as calculated_at,
    CASE 
        WHEN ml.name = 'Operational Efficiency' THEN
            CASE WHEN mv.value < 60 THEN 'critical'
                 WHEN mv.value < 75 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Quality Rate' THEN
            CASE WHEN mv.value < 85 THEN 'critical'
                 WHEN mv.value < 90 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Capacity Utilization' THEN
            CASE WHEN mv.value < 60 THEN 'critical'
                 WHEN mv.value < 75 THEN 'warning'
                 ELSE 'good'
            END
        ELSE 'good'
    END as health_status,
    CASE 
        WHEN ml.name = 'Operational Efficiency' THEN mv.value
        WHEN ml.name = 'Quality Rate' THEN mv.value
        ELSE 0
    END as efficiency_score,
    CASE 
        WHEN ml.name = 'Quality Rate' THEN mv.value
        ELSE 0
    END as quality_score
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
WHERE ml.domain = 'operations'
  AND ml.is_active = true
  AND mv.period_start = (
    SELECT MAX(period_start) 
    FROM metric_values mv2 
    WHERE mv2.metric_id = mv.metric_id 
      AND mv2.organization_id = mv.organization_id
  )
ORDER BY period_start DESC;

-- Update commercial_metrics_summary view
DROP VIEW IF EXISTS commercial_metrics_summary CASCADE;
CREATE OR REPLACE VIEW commercial_metrics_summary AS
SELECT 
    mv.period_start,
    ml.name as metric_name,
    ml.unit,
    mv.value,
    mv.created_at as calculated_at,
    CASE 
        WHEN ml.name = 'Sales Conversion Rate' THEN
            CASE WHEN mv.value < 5 THEN 'critical'
                 WHEN mv.value < 15 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Customer Acquisition Cost' THEN
            CASE WHEN mv.value > 500 THEN 'critical'
                 WHEN mv.value > 200 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Churn Rate' THEN
            CASE WHEN mv.value > 15 THEN 'critical'
                 WHEN mv.value > 10 THEN 'warning'
                 ELSE 'good'
            END
        ELSE 'good'
    END as health_status
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
WHERE ml.domain = 'commercial'
  AND ml.is_active = true
  AND mv.period_start = (
    SELECT MAX(period_start) 
    FROM metric_values mv2 
    WHERE mv2.metric_id = mv.metric_id 
      AND mv2.organization_id = mv.organization_id
  )
ORDER BY period_start DESC;

-- Update strategy_metrics_summary view
DROP VIEW IF EXISTS strategy_metrics_summary CASCADE;
CREATE OR REPLACE VIEW strategy_metrics_summary AS
SELECT 
    mv.period_start,
    ml.name as metric_name,
    ml.unit,
    mv.value,
    mv.created_at as calculated_at,
    CASE 
        WHEN ml.name = 'OKR Progress' THEN
            CASE WHEN mv.value < 30 THEN 'critical'
                 WHEN mv.value < 60 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Execution Rate' THEN
            CASE WHEN mv.value < 50 THEN 'critical'
                 WHEN mv.value < 75 THEN 'warning'
                 ELSE 'good'
            END
        ELSE 'good'
    END as health_status,
    (mv.value + 0) as overall_score -- Placeholder for complex calculations
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id
WHERE ml.domain = 'strategy'
  AND ml.is_active = true
  AND mv.period_start = (
    SELECT MAX(period_start) 
    FROM metric_values mv2 
    WHERE mv2.metric_id = mv.metric_id 
      AND mv2.organization_id = mv.organization_id
  )
ORDER BY period_start DESC;

-- =====================================================
-- 2. UPDATE ALERTS SYSTEM
-- =====================================================

-- Update alerts table to reference new metrics
ALTER TABLE alerts 
ADD COLUMN metric_id UUID REFERENCES metrics_library(id),
ADD COLUMN organization_id UUID REFERENCES organizations(id);

-- Migrate existing alerts to new structure
UPDATE alerts SET 
    metric_id = ml.id,
    organization_id = 1 -- Default organization, adjust as needed
FROM metrics_library ml
WHERE 
    (alerts.kpi_code = 'netProfitMargin' AND ml.name = 'Net Profit Margin') OR
    (alerts.kpi_code = 'cashBurnRate' AND ml.name = 'Cash Burn Rate') OR
    (alerts.kpi_code = 'runway' AND ml.name = 'Runway') OR
    (alerts.kpi_code = 'salesConversion' AND ml.name = 'Sales Conversion Rate') OR
    (alerts.kpi_code = 'customerAcquisitionCost' AND ml.name = 'Customer Acquisition Cost');

-- Update alerts constraint to use new metric references
ALTER TABLE alerts DROP CONSTRAINT IF EXISTS alerts_kpi_code_check;
ALTER TABLE alerts ADD CONSTRAINT alerts_metric_id_check CHECK (
    metric_id IN (SELECT id FROM metrics_library WHERE is_active = true)
);

-- Create new alerts view
DROP VIEW IF EXISTS active_alerts CASCADE;
CREATE OR REPLACE VIEW active_alerts AS
SELECT 
    a.id,
    ml.name as metric_name,
    ml.unit,
    ml.domain,
    a.level,
    a.title,
    a.description,
    a.recommendation,
    a.current_value,
    a.threshold_value,
    a.triggered_at,
    a.acknowledged_at,
    a.organization_id,
    o.name as organization_name,
    CASE 
        WHEN a.resolved_at IS NULL THEN true
        ELSE false
    END as is_active,
    CASE 
        WHEN ml.trend_direction = 'higher_is_better' AND a.current_value > a.threshold_value THEN 'good'
        WHEN ml.trend_direction = 'lower_is_better' AND a.current_value < a.threshold_value THEN 'good'
        ELSE 'bad'
    END as trend_status
FROM alerts a
JOIN metrics_library ml ON a.metric_id = ml.id
LEFT JOIN organizations o ON a.organization_id = o.id
WHERE a.resolved_at IS NULL
ORDER BY a.triggered_at DESC;

-- =====================================================
-- 3. UPDATE STRATEGIC DASHBOARD VIEW
-- =====================================================

DROP VIEW IF EXISTS strategic_dashboard CASCADE;
CREATE OR REPLACE VIEW strategic_dashboard AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    usf.id as focus_id,
    usf.status,
    lc.code as challenge_code,
    lc.title as challenge_title,
    lg.code as goal_code,
    lg.title as goal_title,
    usf.progress_percentage,
    usf.started_at,
    lg.suggested_timeframe_days,
    (lg.suggested_timeframe_days - EXTRACT(days FROM NOW() - usf.started_at)) as days_remaining,
    CASE 
        WHEN usf.progress_percentage >= 80 THEN 'success'
        WHEN usf.progress_percentage >= 50 THEN 'warning'
        ELSE 'danger'
    END as urgency_level,
    -- Add latest metric values for this focus
    (SELECT mv.value 
     FROM metric_values mv 
     JOIN metrics_library ml ON mv.metric_id = ml.id 
     WHERE mv.organization_id = o.id 
       AND ml.domain = 'strategy'
       AND mv.period_start = (
         SELECT MAX(period_start) 
         FROM metric_values mv2 
         WHERE mv2.metric_id = mv.metric_id 
           AND mv2.organization_id = mv.organization_id
       )
     LIMIT 1) as latest_strategy_metric
FROM organizations o
JOIN user_strategy_focus usf ON o.id = usf.organization_id
JOIN library_challenges lc ON usf.challenge_id = lc.id
JOIN library_goals lg ON usf.goal_id = lg.id
WHERE usf.status = 'active';

-- =====================================================
-- 4. UPDATE CALCULATION FUNCTIONS
-- =====================================================

-- Update strategy progress calculation to use new metrics
CREATE OR REPLACE FUNCTION calculate_strategy_progress_v2(
    p_focus_id UUID,
    p_current_report_id UUID
) RETURNS DECIMAL(5,2) AS $$
DECLARE
    v_challenge_code TEXT;
    v_goal_target_type TEXT;
    v_current_value DECIMAL;
    v_previous_value DECIMAL;
    v_progress DECIMAL(5,2);
    v_main_metric_id UUID;
BEGIN
    -- Get metric configuration
    SELECT lc.code, lg.target_type, ml.id
    INTO v_challenge_code, v_goal_target_type, v_main_metric_id
    FROM user_strategy_focus usf
    JOIN library_challenges lc ON usf.challenge_id = lc.id
    JOIN library_goals lg ON usf.goal_id = lg.id
    JOIN metrics_library ml ON ml.name = 
        CASE 
            WHEN lc.code LIKE '%profit%' THEN 'Net Profit Margin'
            WHEN lc.code LIKE '%conversion%' THEN 'Sales Conversion Rate'
            WHEN lc.code LIKE '%cash%' THEN 'Cash Burn Rate'
            ELSE 'OKR Progress'
        END
    WHERE usf.id = p_focus_id;
    
    -- Get current value
    SELECT value INTO v_current_value
    FROM metric_values
    WHERE organization_id = (SELECT organization_id FROM user_strategy_focus WHERE id = p_focus_id)
      AND metric_id = v_main_metric_id
      AND period_start = (
        SELECT MAX(period_start) 
        FROM metric_values 
        WHERE metric_id = v_main_metric_id
      );
    
    -- Get previous value
    SELECT value INTO v_previous_value
    FROM metric_values
    WHERE organization_id = (SELECT organization_id FROM user_strategy_focus WHERE id = p_focus_id)
      AND metric_id = v_main_metric_id
      AND period_start < (
        SELECT MAX(period_start) 
        FROM metric_values 
        WHERE metric_id = v_main_metric_id
      )
    ORDER BY period_start DESC
    LIMIT 1;
    
    -- Calculate progress based on target type
    IF v_goal_target_type = 'increase' THEN
        v_progress := CASE 
            WHEN v_previous_value = 0 THEN 0
            WHEN v_current_value > v_previous_value THEN 
                LEAST(((v_current_value - v_previous_value) / v_previous_value) * 100, 100)
            ELSE 0
        END;
    ELSIF v_goal_target_type = 'decrease' THEN
        v_progress := CASE 
            WHEN v_previous_value = 0 THEN 0
            WHEN v_current_value < v_previous_value THEN 
                LEAST(((v_previous_value - v_current_value) / v_previous_value) * 100, 100)
            ELSE 0
        END;
    ELSE -- maintain
        v_progress := CASE 
            WHEN ABS(v_current_value - v_previous_value) / v_previous_value < 0.05 THEN 100
            ELSE 50
        END;
    END IF;
    
    -- Update progress
    UPDATE user_strategy_focus 
    SET progress_percentage = v_progress, last_calculated_at = NOW()
    WHERE id = p_focus_id;
    
    RETURN v_progress;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 5. CREATE UNIFIED DASHBOARD VIEW
-- =====================================================

CREATE OR REPLACE VIEW unified_metrics_dashboard AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    ml.domain,
    ml.name as metric_name,
    ml.unit,
    ml.trend_direction,
    mv.value,
    mv.period_start,
    mv.period_end,
    mv.created_at,
    CASE 
        WHEN ml.trend_direction = 'higher_is_better' THEN 
            CASE WHEN mv.value > 0 THEN 'positive' ELSE 'negative' END
        WHEN ml.trend_direction = 'lower_is_better' THEN 
            CASE WHEN mv.value < 0 THEN 'positive' ELSE 'negative' END
        ELSE 'neutral'
    END as trend_status,
    -- Calculate trend vs previous period
    (SELECT 
        CASE 
            WHEN prev_val.value IS NULL OR prev_val.value = 0 THEN 0
            ELSE ((mv.value - prev_val.value) / prev_val.value) * 100
        END
     FROM metric_values prev_val
     WHERE prev_val.metric_id = mv.metric_id
       AND prev_val.organization_id = mv.organization_id
       AND prev_val.period_start = (
         SELECT MAX(period_start) 
         FROM metric_values prev_val2 
         WHERE prev_val2.metric_id = mv.metric_id 
           AND prev_val2.organization_id = mv.organization_id
           AND prev_val2.period_start < mv.period_start
       )
    ) as trend_percentage,
    -- Health status based on metric-specific thresholds
    CASE 
        WHEN ml.name = 'Net Profit Margin' THEN
            CASE WHEN mv.value <= 5 THEN 'critical'
                 WHEN mv.value <= 10 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Cash Burn Rate' THEN
            CASE WHEN mv.value >= 10000 THEN 'critical'
                 WHEN mv.value >= 5000 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Runway' THEN
            CASE WHEN mv.value <= 3 THEN 'critical'
                 WHEN mv.value <= 6 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Sales Conversion Rate' THEN
            CASE WHEN mv.value <= 5 THEN 'critical'
                 WHEN mv.value <= 15 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Customer Acquisition Cost' THEN
            CASE WHEN mv.value >= 500 THEN 'critical'
                 WHEN mv.value >= 200 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Operational Efficiency' THEN
            CASE WHEN mv.value < 60 THEN 'critical'
                 WHEN mv.value < 75 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'Quality Rate' THEN
            CASE WHEN mv.value < 85 THEN 'critical'
                 WHEN mv.value < 90 THEN 'warning'
                 ELSE 'good'
            END
        WHEN ml.name = 'OKR Progress' THEN
            CASE WHEN mv.value < 30 THEN 'critical'
                 WHEN mv.value < 60 THEN 'warning'
                 ELSE 'good'
            END
        ELSE 'good'
    END as health_status
FROM organizations o
CROSS JOIN metrics_library ml
LEFT JOIN metric_values mv ON mv.metric_id = ml.id 
  AND mv.organization_id = o.id
  AND mv.period_start = (
    SELECT MAX(period_start) 
    FROM metric_values mv2 
    WHERE mv2.metric_id = ml.id 
      AND mv2.organization_id = o.id
  )
WHERE ml.is_active = true
ORDER BY o.name, ml.domain, ml.name;

-- =====================================================
-- 6. UPDATE TRIGGERS
-- =====================================================

-- Update auto-update trigger to use new metric system
CREATE OR REPLACE FUNCTION auto_update_strategy_progress_v2()
RETURNS trigger AS $$
BEGIN
    -- For each active strategy focus, recalculate progress using new metrics
    UPDATE user_strategy_focus 
    SET progress_percentage = calculate_strategy_progress_v2(id, NEW.report_id),
        last_calculated_at = NOW()
    WHERE organization_id = NEW.organization_id 
      AND status = 'active';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop old trigger and create new one
DROP TRIGGER IF EXISTS trigger_auto_update_progress ON metric_values;
CREATE TRIGGER trigger_auto_update_progress_v2
    AFTER INSERT ON metric_values
    FOR EACH ROW EXECUTE FUNCTION auto_update_strategy_progress_v2();

-- =====================================================
-- 7. CLEANUP PREPARATION
-- =====================================================

-- Create a comprehensive migration validation view
CREATE OR REPLACE VIEW migration_validation AS
SELECT 
    'Metrics Library Status' as validation_type,
    (SELECT COUNT(*) FROM metrics_library) as total_metrics,
    (SELECT COUNT(*) FROM metrics_library WHERE is_active = true) as active_metrics,
    (SELECT COUNT(DISTINCT domain) FROM metrics_library) as domains_covered,
    (SELECT COUNT(*) FROM metric_values) as total_values,
    (SELECT COUNT(DISTINCT organization_id) FROM metric_values) as organizations_with_data,
    (SELECT COUNT(DISTINCT metric_id) FROM metric_values) as metrics_with_data

UNION ALL

SELECT 
    'Data Completeness' as validation_type,
    COUNT(*) as total_metrics,
    COUNT(*) FILTER (WHERE mv.value IS NOT NULL) as metrics_with_values,
    COUNT(*) FILTER (WHERE mv.period_start IS NOT NULL) as metrics_with_periods,
    COUNT(*) FILTER (WHERE mv.organization_id IS NOT NULL) as metrics_with_orgs,
    COUNT(*) FILTER (WHERE mv.source_type = 'migration') as migrated_values,
    COUNT(*) FILTER (WHERE mv.source_type = 'manual') as manual_values
FROM metrics_library ml
LEFT JOIN metric_values mv ON ml.id = mv.metric_id

UNION ALL

SELECT 
    'View Compatibility' as validation_type,
    COUNT(*) as total_views,
    COUNT(*) FILTER (WHERE table_name IS NOT NULL) as views_working,
    0 as metrics_with_values,
    0 as metrics_with_periods,
    0 as metrics_with_orgs,
    0 as migrated_values,
    0 as manual_values
FROM information_schema.views 
WHERE table_schema = 'public' 
  AND (table_name LIKE '%metrics%' OR table_name LIKE '%summary%' OR table_name LIKE '%dashboard%');

-- Add comments for documentation
COMMENT ON VIEW unified_metrics_dashboard IS 'Comprehensive dashboard view using new metrics_library system';
COMMENT ON VIEW migration_validation IS 'Validation view for metrics migration status';
COMMENT ON FUNCTION calculate_strategy_progress_v2 IS 'Updated progress calculation using new metrics system';
