-- =====================================================
-- METRICS SYSTEM CLEANUP SCRIPT
-- Remove old duplicate tables after successful migration
-- =====================================================

-- =====================================================
-- 1. VALIDATION BEFORE CLEANUP
-- =====================================================

-- Check if migration was successful
DO $$
DECLARE
    v_metrics_library_count INTEGER;
    v_metric_values_count INTEGER;
    v_old_metrics_count INTEGER;
    v_validation_passed BOOLEAN := TRUE;
BEGIN
    -- Count new system records
    SELECT COUNT(*) INTO v_metrics_library_count FROM metrics_library WHERE is_active = true;
    SELECT COUNT(*) INTO v_metric_values_count FROM metric_values WHERE source_type = 'migration';
    
    -- Count old system records
    SELECT COUNT(*) INTO v_old_metrics_count FROM (
        SELECT COUNT(*) FROM metrics WHERE period IS NOT NULL
        UNION ALL
        SELECT COUNT(*) FROM operations_metrics WHERE period IS NOT NULL
        UNION ALL
        SELECT COUNT(*) FROM commercial_metrics WHERE period IS NOT NULL
        UNION ALL
        SELECT COUNT(*) FROM strategy_metrics WHERE period IS NOT NULL
    ) old_data;
    
    -- Validation checks
    IF v_metrics_library_count < 15 THEN
        RAISE EXCEPTION 'Insufficient metrics defined in library: %', v_metrics_library_count;
        v_validation_passed := FALSE;
    END IF;
    
    IF v_metric_values_count < v_old_metrics_count * 0.8 THEN
        RAISE EXCEPTION 'Insufficient data migrated. Expected: %, Got: %', 
                       v_old_metrics_count * 0.8, v_metric_values_count;
        v_validation_passed := FALSE;
    END IF;
    
    -- Log validation results
    INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, notes)
    SELECT 
        ml.id,
        1,
        CURRENT_DATE,
        CURRENT_DATE,
        CASE WHEN v_validation_passed THEN 1 ELSE 0 END,
        'validation',
        format('Migration validation: %s metrics, %s values, passed: %s', 
               v_metrics_library_count, v_metric_values_count, v_validation_passed)
    FROM metrics_library ml 
    WHERE ml.name = 'Migration Status'
    LIMIT 1;
    
    IF v_validation_passed THEN
        RAISE NOTICE 'Migration validation passed. Proceeding with cleanup.';
    ELSE
        RAISE EXCEPTION 'Migration validation failed. Aborting cleanup.';
    END IF;
END $$;

-- =====================================================
-- 2. CREATE ROLLBACK PROCEDURES
-- =====================================================

-- Create rollback function in case issues are discovered
CREATE OR REPLACE FUNCTION rollback_metrics_migration()
RETURNS void AS $$
BEGIN
    -- Restore original tables from backups
    DROP TABLE IF EXISTS metrics;
    CREATE TABLE metrics AS SELECT * FROM metrics_backup;
    
    DROP TABLE IF EXISTS operations_metrics;
    CREATE TABLE operations_metrics AS SELECT * FROM operations_metrics_backup;
    
    DROP TABLE IF EXISTS commercial_metrics;
    CREATE TABLE commercial_metrics AS SELECT * FROM commercial_metrics_backup;
    
    DROP TABLE IF EXISTS strategy_metrics;
    CREATE TABLE strategy_metrics AS SELECT * FROM strategy_metrics_backup;
    
    -- Drop new system
    DROP TABLE IF EXISTS metric_values CASCADE;
    DROP TABLE IF EXISTS metrics_library CASCADE;
    
    -- Restore original views (would need to be recreated from original definitions)
    RAISE NOTICE 'Rollback completed. Original tables restored from backups.';
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 3. DROP OLD TABLES (AFTER VALIDATION)
-- =====================================================

-- Drop old metric tables in order (respecting dependencies)
DROP TABLE IF EXISTS progress_history CASCADE;
DROP TABLE IF EXISTS user_metrics CASCADE;
DROP TABLE IF EXISTS strategy_metrics CASCADE;
DROP TABLE IF EXISTS commercial_metrics CASCADE;
DROP TABLE IF EXISTS operations_metrics CASCADE;
DROP TABLE IF EXISTS metrics CASCADE;

-- Drop old views that depend on these tables
DROP VIEW IF EXISTS strategic_dashboard CASCADE;
DROP VIEW IF EXISTS metrics_summary CASCADE;
DROP VIEW IF EXISTS operations_metrics_summary CASCADE;
DROP VIEW IF EXISTS commercial_metrics_summary CASCADE;
DROP VIEW IF EXISTS strategy_metrics_summary CASCADE;
DROP VIEW IF EXISTS active_alerts CASCADE;

-- =====================================================
-- 4. CLEANUP OLD FUNCTIONS AND TRIGGERS
-- =====================================================

-- Drop old calculation functions
DROP FUNCTION IF EXISTS calculate_strategy_progress(UUID, UUID) CASCADE;
DROP FUNCTION IF EXISTS auto_update_strategy_progress() CASCADE;

-- Drop old triggers
DROP TRIGGER IF EXISTS trigger_auto_update_progress ON user_metrics;

-- Drop old types if they exist
DROP TYPE IF EXISTS input_type_enum CASCADE;
DROP TYPE IF EXISTS group_data_period_enum CASCADE;
DROP TYPE IF EXISTS total_is_enum CASCADE;
DROP TYPE IF EXISTS trend_direction_enum CASCADE;
DROP TYPE IF EXISTS source_type_enum CASCADE;

-- =====================================================
-- 5. UPDATE SYSTEM DOCUMENTATION
-- =====================================================

-- Create system documentation table
CREATE TABLE IF NOT EXISTS system_documentation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    component TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO system_documentation (component, description, status) VALUES
('metrics_library', 'Central metric definitions based on Cascade.app patterns', 'active'),
('metric_values', 'Unified storage for all metric values across domains', 'active'),
('unified_metrics_dashboard', 'Comprehensive dashboard view using new metrics_library system', 'active'),
('latest_metric_values', 'Latest values per metric and organization', 'active'),
('metric_values_aggregated', 'Aggregated values based on metric configuration', 'active'),
('cross_domain_metrics_summary', 'Summary statistics by domain', 'active'),
('migration_validation', 'Validation view for metrics migration status', 'active');

-- =====================================================
-- 6. PERFORMANCE OPTIMIZATION
-- =====================================================

-- Analyze tables for query optimization
ANALYZE metrics_library;
ANALYZE metric_values;
ANALYZE organizations;
ANALYZE alerts;

-- Rebuild indexes if needed
REINDEX INDEX CONCURRENTLY idx_metrics_library_domain;
REINDEX INDEX CONCURRENTLY idx_metric_values_metric_org;
REINDEX INDEX CONCURRENTLY idx_metric_values_org_period;

-- =====================================================
-- 7. CREATE MONITORING VIEWS
-- =====================================================

-- System health monitoring view
CREATE OR REPLACE VIEW system_health_monitor AS
SELECT 
    'System Health' as category,
    'Metrics Library' as component,
    COUNT(*) as total_records,
    COUNT(*) FILTER (WHERE is_active = true) as active_records,
    MAX(updated_at) as last_updated,
    CASE 
        WHEN COUNT(*) > 0 AND COUNT(*) FILTER (WHERE is_active = true) > 0 THEN 'healthy'
        ELSE 'warning'
    END as status
FROM metrics_library

UNION ALL

SELECT 
    'System Health' as category,
    'Metric Values' as component,
    COUNT(*) as total_records,
    COUNT(*) FILTER (WHERE created_at > CURRENT_DATE - INTERVAL '30 days') as recent_records,
    MAX(created_at) as last_updated,
    CASE 
        WHEN COUNT(*) > 100 THEN 'healthy'
        WHEN COUNT(*) > 10 THEN 'warning'
        ELSE 'critical'
    END as status
FROM metric_values

UNION ALL

SELECT 
    'System Health' as category,
    'Active Alerts' as component,
    COUNT(*) as total_records,
    COUNT(*) FILTER (WHERE acknowledged_at IS NULL) as unacknowledged,
    MAX(triggered_at) as last_updated,
    CASE 
        WHEN COUNT(*) FILTER (WHERE acknowledged_at IS NULL) > 10 THEN 'critical'
        WHEN COUNT(*) FILTER (WHERE acknowledged_at IS NULL) > 5 THEN 'warning'
        ELSE 'healthy'
    END as status
FROM alerts
WHERE resolved_at IS NULL;

-- Data quality monitoring view
CREATE OR REPLACE VIEW data_quality_monitor AS
SELECT 
    'Data Quality' as category,
    'Missing Values' as issue,
    COUNT(*) FILTER (WHERE value IS NULL) as count,
    ROUND(COUNT(*) FILTER (WHERE value IS NULL) * 100.0 / COUNT(*), 2) as percentage
FROM metric_values

UNION ALL

SELECT 
    'Data Quality' as category,
    'Invalid Periods' as issue,
    COUNT(*) FILTER (WHERE period_start > period_end) as count,
    ROUND(COUNT(*) FILTER (WHERE period_start > period_end) * 100.0 / COUNT(*), 2) as percentage
FROM metric_values

UNION ALL

SELECT 
    'Data Quality' as category,
    'Future Dates' as issue,
    COUNT(*) FILTER (WHERE period_start > CURRENT_DATE) as count,
    ROUND(COUNT(*) FILTER (WHERE period_start > CURRENT_DATE) * 100.0 / COUNT(*), 2) as percentage
FROM metric_values;

-- =====================================================
-- 8. FINAL VALIDATION
-- =====================================================

-- Create comprehensive final validation report
CREATE OR REPLACE VIEW final_migration_report AS
SELECT 
    'Migration Summary' as report_section,
    'Metrics Library' as item,
    COUNT(*) as count,
    'records created' as unit
FROM metrics_library

UNION ALL

SELECT 
    'Migration Summary' as report_section,
    'Metric Values' as item,
    COUNT(*) as count,
    'records migrated' as unit
FROM metric_values

UNION ALL

SELECT 
    'Migration Summary' as report_section,
    'Organizations' as item,
    COUNT(DISTINCT organization_id) as count,
    'organizations with data' as unit
FROM metric_values

UNION ALL

SELECT 
    'Migration Summary' as report_section,
    'Domains Covered' as item,
    COUNT(DISTINCT domain) as count,
    'metric domains' as unit
FROM metrics_library

UNION ALL

SELECT 
    'Migration Summary' as report_section,
    'Date Range' as item,
    MIN(period_start) as count,
    'earliest data' as unit
FROM metric_values

UNION ALL

SELECT 
    'Migration Summary' as report_section,
    'Date Range' as item,
    MAX(period_start) as count,
    'latest data' as unit
FROM metric_values;

-- =====================================================
-- 9. CLEANUP COMPLETION MESSAGE
-- =====================================================

DO $$
BEGIN
    RAISE NOTICE '====================================================';
    RAISE NOTICE 'METRICS LIBRARY MIGRATION COMPLETED SUCCESSFULLY';
    RAISE NOTICE '====================================================';
    RAISE NOTICE 'Old tables have been dropped and new system is active.';
    RAISE NOTICE 'Backup tables are available for rollback if needed.';
    RAISE NOTICE 'Run SELECT * FROM final_migration_report for summary.';
    RAISE NOTICE 'Run SELECT * FROM system_health_monitor for status.';
    RAISE NOTICE '====================================================';
END $$;

-- Add final comments for documentation
COMMENT ON TABLE system_documentation IS 'Documentation for system components and their status';
COMMENT ON VIEW system_health_monitor IS 'Monitor overall system health and performance';
COMMENT ON VIEW data_quality_monitor IS 'Monitor data quality issues and metrics';
COMMENT ON VIEW final_migration_report IS 'Comprehensive migration summary report';
COMMENT ON FUNCTION rollback_metrics_migration IS 'Emergency rollback function to restore old system';
