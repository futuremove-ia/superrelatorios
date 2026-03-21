-- Infrastructure Layer - Cross-Domain Analytics Schema
-- Supabase database schema for Cross-Domain Analytics
-- Following Clean Architecture principles

-- Cross-domain analytics table for storing calculated cross-domain insights
CREATE TABLE IF NOT EXISTS cross_domain_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  kpi_metrics JSONB NOT NULL, -- Array of KPIMetric objects
  impact_calculations JSONB NOT NULL, -- Array of ImpactCalculation objects
  composite_kpis JSONB NOT NULL, -- Array of CompositeKPI objects
  cross_domain_health JSONB NOT NULL, -- CrossDomainHealth object
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT cross_domain_analytics_period_check CHECK (period ~ '^\d{4}-\d{2}$'),
  CONSTRAINT cross_domain_analytics_period_unique UNIQUE (period)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_period ON cross_domain_analytics(period);
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_created_at ON cross_domain_analytics(created_at);
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_kpi_metrics ON cross_domain_analytics USING GIN(kpi_metrics);
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_impact_calculations ON cross_domain_analytics USING GIN(impact_calculations);
CREATE INDEX IF NOT EXISTS idx_cross_domain_analytics_composite_kpis ON cross_domain_analytics USING GIN(composite_kpis);

-- RLS (Row Level Security) - Enable for multi-tenant
ALTER TABLE cross_domain_analytics ENABLE ROW LEVEL SECURITY;

-- Policy for users to see their own organization's data
CREATE POLICY "Users can view their organization's cross-domain analytics" ON cross_domain_analytics
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Policy for users to insert their own organization's data
CREATE POLICY "Users can insert their organization's cross-domain analytics" ON cross_domain_analytics
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Policy for users to update their own organization's data
CREATE POLICY "Users can update their organization's cross-domain analytics" ON cross_domain_analytics
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_cross_domain_analytics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cross_domain_analytics_updated_at
  BEFORE UPDATE ON cross_domain_analytics
  FOR EACH ROW
  EXECUTE FUNCTION update_cross_domain_analytics_updated_at();

-- View for cross-domain analytics summary
CREATE OR REPLACE VIEW cross_domain_analytics_summary AS
SELECT 
  period,
  created_at,
  -- Extract overall health score from cross_domain_health
  (cross_domain_health->>'overallScore')::decimal as overall_health_score,
  -- Count of critical issues
  jsonb_array_length(cross_domain_health->'criticalRelationships') as critical_relationships_count,
  -- Count of recommendations
  jsonb_array_length(cross_domain_health->'recommendations') as recommendations_count,
  -- Extract business health score from composite_kpis
  (composite_kpis->0->>'value')::decimal as business_health_score,
  -- Extract growth potential score from composite_kpis
  (composite_kpis->1->>'value')::decimal as growth_potential_score,
  -- Extract operational excellence score from composite_kpis
  (composite_kpis->2->>'value')::decimal as operational_excellence_score
FROM cross_domain_analytics
ORDER BY period DESC;

-- Function to extract KPI metrics by domain
CREATE OR REPLACE FUNCTION get_kpi_metrics_by_domain(
  analytics_record JSONB,
  target_domain TEXT
) RETURNS JSONB AS $$
BEGIN
  RETURN (
    SELECT jsonb_agg(
      jsonb_build_object(
        'kpiCode', metric->>'kpiCode',
        'value', (metric->>'value')::decimal,
        'unit', metric->>'unit',
        'trend', metric->>'trend'
      )
    )
    FROM jsonb_array_elements(analytics_record->'kpi_metrics') AS metric
    WHERE metric->>'domain' = target_domain
  );
END;
$$ LANGUAGE plpgsql;

-- Function to extract impact calculations by relationship
CREATE OR REPLACE FUNCTION get_impact_by_domains(
  analytics_record JSONB,
  source_domain TEXT,
  target_domain TEXT
) RETURNS JSONB AS $$
BEGIN
  RETURN (
    SELECT jsonb_agg(
      jsonb_build_object(
        'sourceKPI', impact->>'sourceKPI',
        'targetKPI', impact->>'targetKPI',
        'impact', (impact->>'impact')::decimal,
        'confidence', (impact->>'confidence')::decimal,
        'methodology', impact->>'methodology'
      )
    )
    FROM jsonb_array_elements(analytics_record->'impact_calculations') AS impact
    WHERE impact->>'sourceDomain' = source_domain 
      AND impact->>'targetDomain' = target_domain
  );
END;
$$ LANGUAGE plpgsql;
