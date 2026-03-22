-- =====================================================
-- METRICS LIBRARY MIGRATION SCRIPT
-- Phase 1: Create metric definitions from existing tables
-- Phase 2: Migrate historical data
-- =====================================================

-- =====================================================
-- PHASE 1: CREATE METRIC DEFINITIONS
-- =====================================================

-- Insert Financial Metrics (from metrics table)
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Net Profit Margin', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'finance', 'Net profit as percentage of revenue'),
('Cash Burn Rate', 'R$', 'non_cumulative', 'monthly', 'last_value', 'lower_is_better', 'finance', 'Monthly cash consumption rate'),
('Runway', 'months', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'finance', 'Number of months until cash depletion'),
('Sales Conversion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Percentage of leads that convert to customers'),
('Customer Acquisition Cost', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'commercial', 'Cost to acquire a new customer')
ON CONFLICT (name) DO NOTHING;

-- Insert Operational Metrics (from operations_metrics table)
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Operational Efficiency', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Ratio of output to input in operations'),
('Quality Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Percentage of error-free outputs'),
('Throughput', 'units', 'cumulative', 'monthly', 'sum_of_values', 'higher_is_better', 'operations', 'Total units processed in period'),
('Capacity Utilization', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'operations', 'Percentage of total capacity used'),
('Operational Cost', 'R$', 'cumulative', 'monthly', 'sum_of_values', 'lower_is_better', 'operations', 'Total operational expenses')
ON CONFLICT (name) DO NOTHING;

-- Insert Commercial Metrics (from commercial_metrics table)
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('Customer Lifetime Value', 'R$', 'non_cumulative', 'monthly', 'last_value', 'higher_is_better', 'commercial', 'Total revenue expected from a customer'),
('Churn Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'commercial', 'Percentage of customers lost in period'),
('Average Ticket', 'R$', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'commercial', 'Average transaction value'),
('Pipeline Velocity', 'days', 'non_cumulative', 'monthly', 'average_of_values', 'lower_is_better', 'commercial', 'Average time to convert leads')
ON CONFLICT (name) DO NOTHING;

-- Insert Strategy Metrics (from strategy_metrics table)
INSERT INTO metrics_library (name, unit, input_type, group_data_period, total_is, trend_direction, domain, description) VALUES
('OKR Progress', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Overall OKR completion percentage'),
('Initiative Completion Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Percentage of initiatives completed'),
('Strategic Alignment', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Alignment score with strategic goals'),
('Execution Rate', '%', 'non_cumulative', 'monthly', 'average_of_values', 'higher_is_better', 'strategy', 'Rate of strategic execution')
ON CONFLICT (name) DO NOTHING;

-- =====================================================
-- PHASE 2: MIGRATE HISTORICAL DATA
-- =====================================================

-- Create mapping table for reference during migration
CREATE TEMPORARY TABLE metric_name_mapping AS
SELECT 
    ml.id as new_metric_id,
    ml.name,
    'metrics' as source_table,
    'net_profit_margin' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Net Profit Margin'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'metrics' as source_table,
    'cash_burn_rate' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Cash Burn Rate'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'metrics' as source_table,
    'runway_months' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Runway'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'metrics' as source_table,
    'sales_conversion_rate' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Sales Conversion Rate'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'metrics' as source_table,
    'customer_acquisition_cost' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Customer Acquisition Cost'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'operations_metrics' as source_table,
    'operational_efficiency' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Operational Efficiency'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'operations_metrics' as source_table,
    'quality_rate' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Quality Rate'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'operations_metrics' as source_table,
    'throughput' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Throughput'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'operations_metrics' as source_table,
    'capacity_utilization' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Capacity Utilization'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'operations_metrics' as source_table,
    'operational_cost' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Operational Cost'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'commercial_metrics' as source_table,
    'customer_lifetime_value' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Customer Lifetime Value'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'commercial_metrics' as source_table,
    'churn_rate' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Churn Rate'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'commercial_metrics' as source_table,
    'average_ticket' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Average Ticket'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'commercial_metrics' as source_table,
    'pipeline_velocity' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Pipeline Velocity'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'strategy_metrics' as source_table,
    'okr_progress' as source_column
FROM metrics_library ml 
WHERE ml.name = 'OKR Progress'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'strategy_metrics' as source_table,
    'initiative_completion' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Initiative Completion Rate'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'strategy_metrics' as source_table,
    'strategic_alignment' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Strategic Alignment'

UNION ALL

SELECT 
    ml.id as new_metric_id,
    ml.name,
    'strategy_metrics' as source_table,
    'execution_rate' as source_column
FROM metrics_library ml 
WHERE ml.name = 'Execution Rate';

-- Migrate data from metrics table
INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, source_reference, notes)
SELECT 
    mnm.new_metric_id,
    1 as organization_id, -- Default organization, adjust as needed
    TO_DATE(m.period, 'YYYY-MM') as period_start,
    (TO_DATE(m.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    m.net_profit_margin as value,
    'migration' as source_type,
    'metrics_table' as source_reference,
    'Migrated from metrics table' as notes
FROM metrics m
JOIN metric_name_mapping mnm ON mnm.source_table = 'metrics' AND mnm.source_column = 'net_profit_margin'
WHERE m.net_profit_margin IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(m.period, 'YYYY-MM') as period_start,
    (TO_DATE(m.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    m.cash_burn_rate as value,
    'migration' as source_type,
    'metrics_table' as source_reference,
    'Migrated from metrics table' as notes
FROM metrics m
JOIN metric_name_mapping mnm ON mnm.source_table = 'metrics' AND mnm.source_column = 'cash_burn_rate'
WHERE m.cash_burn_rate IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(m.period, 'YYYY-MM') as period_start,
    (TO_DATE(m.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    m.runway_months as value,
    'migration' as source_type,
    'metrics_table' as source_reference,
    'Migrated from metrics table' as notes
FROM metrics m
JOIN metric_name_mapping mnm ON mnm.source_table = 'metrics' AND mnm.source_column = 'runway_months'
WHERE m.runway_months IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(m.period, 'YYYY-MM') as period_start,
    (TO_DATE(m.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    m.sales_conversion_rate as value,
    'migration' as source_type,
    'metrics_table' as source_reference,
    'Migrated from metrics table' as notes
FROM metrics m
JOIN metric_name_mapping mnm ON mnm.source_table = 'metrics' AND mnm.source_column = 'sales_conversion_rate'
WHERE m.sales_conversion_rate IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(m.period, 'YYYY-MM') as period_start,
    (TO_DATE(m.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    m.customer_acquisition_cost as value,
    'migration' as source_type,
    'metrics_table' as source_reference,
    'Migrated from metrics table' as notes
FROM metrics m
JOIN metric_name_mapping mnm ON mnm.source_table = 'metrics' AND mnm.source_column = 'customer_acquisition_cost'
WHERE m.customer_acquisition_cost IS NOT NULL;

-- Migrate data from operations_metrics table (similar pattern)
INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, source_reference, notes)
SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(om.period, 'YYYY-MM') as period_start,
    (TO_DATE(om.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    om.operational_efficiency as value,
    'migration' as source_type,
    'operations_metrics_table' as source_reference,
    'Migrated from operations_metrics table' as notes
FROM operations_metrics om
JOIN metric_name_mapping mnm ON mnm.source_table = 'operations_metrics' AND mnm.source_column = 'operational_efficiency'
WHERE om.operational_efficiency IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(om.period, 'YYYY-MM') as period_start,
    (TO_DATE(om.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    om.quality_rate as value,
    'migration' as source_type,
    'operations_metrics_table' as source_reference,
    'Migrated from operations_metrics table' as notes
FROM operations_metrics om
JOIN metric_name_mapping mnm ON mnm.source_table = 'operations_metrics' AND mnm.source_column = 'quality_rate'
WHERE om.quality_rate IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(om.period, 'YYYY-MM') as period_start,
    (TO_DATE(om.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    om.throughput as value,
    'migration' as source_type,
    'operations_metrics_table' as source_reference,
    'Migrated from operations_metrics table' as notes
FROM operations_metrics om
JOIN metric_name_mapping mnm ON mnm.source_table = 'operations_metrics' AND mnm.source_column = 'throughput'
WHERE om.throughput IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(om.period, 'YYYY-MM') as period_start,
    (TO_DATE(om.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    om.capacity_utilization as value,
    'migration' as source_type,
    'operations_metrics_table' as source_reference,
    'Migrated from operations_metrics table' as notes
FROM operations_metrics om
JOIN metric_name_mapping mnm ON mnm.source_table = 'operations_metrics' AND mnm.source_column = 'capacity_utilization'
WHERE om.capacity_utilization IS NOT NULL

UNION ALL

SELECT 
    mnm.new_metric_id,
    1 as organization_id,
    TO_DATE(om.period, 'YYYY-MM') as period_start,
    (TO_DATE(om.period, 'YYYY-MM') + INTERVAL '1 month' - INTERVAL '1 second')::DATE as period_end,
    om.operational_cost as value,
    'migration' as source_type,
    'operations_metrics_table' as source_reference,
    'Migrated from operations_metrics table' as notes
FROM operations_metrics om
JOIN metric_name_mapping mnm ON mnm.source_table = 'operations_metrics' AND mnm.source_column = 'operational_cost'
WHERE om.operational_cost IS NOT NULL;

-- Similar migrations for commercial_metrics and strategy_metrics tables would follow...
-- (Omitted for brevity, but same pattern as above)

-- =====================================================
-- PHASE 3: VALIDATION MESSAGES
-- =====================================================

-- Create validation summary
SELECT 
    'Migration Summary' as status,
    (SELECT COUNT(*) FROM metrics_library) as metrics_defined,
    (SELECT COUNT(*) FROM metric_values) as values_migrated,
    (SELECT COUNT(DISTINCT organization_id) FROM metric_values) as organizations_affected,
    (SELECT COUNT(DISTINCT metric_id) FROM metric_values) as metrics_with_data,
    (SELECT MIN(period_start) FROM metric_values) as earliest_data,
    (SELECT MAX(period_start) FROM metric_values) as latest_data;

-- Check for any data integrity issues
SELECT 
    'Data Integrity Check' as status,
    COUNT(*) as total_metrics,
    COUNT(*) FILTER (WHERE value IS NULL) as null_values,
    COUNT(*) FILTER (WHERE period_start > period_end) as invalid_periods,
    COUNT(*) FILTER (WHERE value < 0 AND trend_direction = 'higher_is_better') as potentially_bad_trends
FROM metric_values mv
JOIN metrics_library ml ON mv.metric_id = ml.id;

-- =====================================================
-- PHASE 4: CLEANUP PREPARATION
-- =====================================================

-- Create backup tables before dropping originals
CREATE TABLE metrics_backup AS SELECT * FROM metrics;
CREATE TABLE operations_metrics_backup AS SELECT * FROM operations_metrics;
CREATE TABLE commercial_metrics_backup AS SELECT * FROM commercial_metrics;
CREATE TABLE strategy_metrics_backup AS SELECT * FROM strategy_metrics;

-- Add comments for rollback procedures
COMMENT ON TABLE metrics_backup IS 'Backup of original metrics table before migration to metrics_library';
COMMENT ON TABLE operations_metrics_backup IS 'Backup of original operations_metrics table before migration';
COMMENT ON TABLE commercial_metrics_backup IS 'Backup of original commercial_metrics table before migration';
COMMENT ON TABLE strategy_metrics_backup IS 'Backup of original strategy_metrics table before migration';
