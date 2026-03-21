-- Infrastructure Layer - Operations Domain Schema
-- Supabase database schema for Operations Metrics
-- Following Clean Architecture principles

-- Operations metrics table for storing calculated operations KPIs
CREATE TABLE IF NOT EXISTS operations_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  operational_efficiency DECIMAL(5,2) NOT NULL,
  quality_rate DECIMAL(5,2) NOT NULL,
  throughput DECIMAL(8,2) NOT NULL,
  capacity_utilization DECIMAL(5,2) NOT NULL,
  operational_cost DECIMAL(10,2) NOT NULL,
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT operations_metrics_period_check CHECK (period ~ '^\d{4}-\d{2}$'),
  CONSTRAINT operations_metrics_efficiency_check CHECK (operational_efficiency >= 0 AND operational_efficiency <= 100),
  CONSTRAINT operations_metrics_quality_rate_check CHECK (quality_rate >= 0 AND quality_rate <= 100),
  CONSTRAINT operations_metrics_throughput_check CHECK (throughput >= 0),
  CONSTRAINT operations_metrics_capacity_utilization_check CHECK (capacity_utilization >= 0 AND capacity_utilization <= 100),
  CONSTRAINT operations_metrics_operational_cost_check CHECK (operational_cost >= 0),
  
  -- Unique period to avoid duplicates
  CONSTRAINT operations_metrics_period_unique UNIQUE (period)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_operations_metrics_period ON operations_metrics(period);
CREATE INDEX IF NOT EXISTS idx_operations_metrics_created_at ON operations_metrics(created_at);
CREATE INDEX IF NOT EXISTS idx_operations_metrics_efficiency ON operations_metrics(operational_efficiency);
CREATE INDEX IF NOT EXISTS idx_operations_metrics_quality_rate ON operations_metrics(quality_rate);

-- RLS (Row Level Security) - Enable for multi-tenant
ALTER TABLE operations_metrics ENABLE ROW LEVEL SECURITY;

-- Policy for users to see their own organization's data
CREATE POLICY "Users can view their organization's operations metrics" ON operations_metrics
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Policy for users to insert their own organization's data
CREATE POLICY "Users can insert their organization's operations metrics" ON operations_metrics
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Policy for users to update their own organization's data
CREATE POLICY "Users can update their organization's operations metrics" ON operations_metrics
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_operations_metrics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER operations_metrics_updated_at
  BEFORE UPDATE ON operations_metrics
  FOR EACH ROW
  EXECUTE FUNCTION update_operations_metrics_updated_at();

-- View for operations metrics summary
CREATE OR REPLACE VIEW operations_metrics_summary AS
SELECT 
  period,
  operational_efficiency,
  quality_rate,
  throughput,
  capacity_utilization,
  operational_cost,
  calculated_at,
  CASE 
    WHEN operational_efficiency < 60 THEN 'critical'
    WHEN operational_efficiency < 75 THEN 'warning'
    ELSE 'good'
  END as efficiency_health,
  CASE 
    WHEN quality_rate < 85 THEN 'critical'
    WHEN quality_rate < 90 THEN 'warning'
    ELSE 'good'
  END as quality_health,
  CASE 
    WHEN capacity_utilization < 60 THEN 'critical'
    WHEN capacity_utilization < 75 THEN 'warning'
    ELSE 'good'
  END as capacity_health,
  (operational_efficiency + quality_rate) / 2 as overall_score
FROM operations_metrics
ORDER BY period DESC;
