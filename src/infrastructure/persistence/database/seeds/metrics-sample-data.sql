-- =====================================================
-- METRICS SAMPLE DATA FOR TESTING
-- Creates sample data to test the Metrics Dashboard
-- =====================================================

-- Insert sample metric values for testing
INSERT INTO metric_values (metric_id, organization_id, period_start, period_end, value, source_type, source_reference, notes) VALUES
-- Financial Metrics - Good status
((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 15.5, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 8500.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Runway'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 8.5, 'manual', 'sample_data', 'Sample data for testing'),

-- Commercial Metrics - Warning status
((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 12.3, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 350.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Customer Lifetime Value'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 2100.00, 'manual', 'sample_data', 'Sample data for testing'),

-- Operational Metrics - Critical status
((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 58.0, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Quality Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 82.5, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Throughput'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 1250.0, 'manual', 'sample_data', 'Sample data for testing'),

-- Strategy Metrics - Mixed status
((SELECT id FROM metrics_library WHERE name = 'OKR Progress'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 73.5, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Initiative Completion Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 67.0, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Strategic Alignment'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-01-01', '2024-01-31', 85.0, 'manual', 'sample_data', 'Sample data for testing'),

-- Additional period for trend analysis (February 2024)
((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 18.2, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 7200.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Runway'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 9.8, 'manual', 'sample_data', 'Sample data for testing'),

((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 14.7, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 320.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-02-01', '2024-02-29', 62.0, 'manual', 'sample_data', 'Sample data for testing'),

-- March 2024 data
((SELECT id FROM metrics_library WHERE name = 'Net Profit Margin'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 22.1, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Cash Burn Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 6800.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Runway'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 11.2, 'manual', 'sample_data', 'Sample data for testing'),

((SELECT id FROM metrics_library WHERE name = 'Sales Conversion Rate'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 16.8, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Customer Acquisition Cost'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 280.00, 'manual', 'sample_data', 'Sample data for testing'),
((SELECT id FROM metrics_library WHERE name = 'Operational Efficiency'), (SELECT id FROM organizations WHERE name = 'SuperRelatórios' LIMIT 1), '2024-03-01', '2024-03-31', 71.0, 'manual', 'sample_data', 'Sample data for testing')

ON CONFLICT (metric_id, organization_id, period_start, period_end) DO NOTHING;

-- Create cross-domain analytics sample data
INSERT INTO cross_domain_analytics (period, kpi_metrics, impact_calculations, composite_kpis, cross_domain_health) VALUES
('2024-03', 
'[{"kpiCode": "NET_PROFIT_MARGIN", "value": 22.1, "unit": "%", "trend": "up", "domain": "finance"}, {"kpiCode": "SALES_CONVERSION", "value": 16.8, "unit": "%", "trend": "up", "domain": "commercial"}]',
'[{"sourceKPI": "SALES_CONVERSION", "targetKPI": "NET_PROFIT_MARGIN", "impact": 0.65, "confidence": 0.85, "methodology": "correlation"}]',
'[{"name": "Business Health", "value": 78.5, "unit": "score"}, {"name": "Growth Potential", "value": 82.3, "unit": "score"}, {"name": "Operational Excellence", "value": 71.0, "unit": "score"}]',
'{"overallScore": 77.3, "criticalRelationships": [{"source": "Operational Efficiency", "target": "Sales Conversion", "impact": -0.3, "severity": "medium"}], "recommendations": [{"priority": "high", "action": "Improve operational efficiency to boost sales conversion", "impact": 15.2}]}'
ON CONFLICT (period) DO UPDATE SET 
kpi_metrics = EXCLUDED.kpi_metrics,
impact_calculations = EXCLUDED.impact_calculations,
composite_kpis = EXCLUDED.composite_kpis,
cross_domain_health = EXCLUDED.cross_domain_health;

-- Verify data insertion
SELECT 
    'Sample Data Summary' as status,
    (SELECT COUNT(*) FROM metrics_library WHERE is_active = true) as total_metrics,
    (SELECT COUNT(*) FROM metric_values) as total_values,
    (SELECT COUNT(DISTINCT domain) FROM metrics_library WHERE is_active = true) as domains_covered,
    (SELECT COUNT(*) FROM cross_domain_analytics) as analytics_records;

-- Sample data for testing completed
SELECT 'Sample data inserted successfully! Ready to test Metrics Dashboard.' as message;
