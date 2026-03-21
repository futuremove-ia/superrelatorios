-- Infrastructure Layer - Commercial Domain Schema
-- Supabase database schema for Commercial Metrics
-- Following Clean Architecture principles

-- Commercial metrics table for storing calculated commercial KPIs
CREATE TABLE IF NOT EXISTS commercial_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  sales_conversion_rate DECIMAL(5,2) NOT NULL,
  customer_acquisition_cost DECIMAL(10,2) NOT NULL,
  customer_lifetime_value DECIMAL(12,2) NOT NULL,
  churn_rate DECIMAL(5,2) NOT NULL,
  average_ticket DECIMAL(10,2) NOT NULL,
  pipeline_velocity DECIMAL(10,2) NOT NULL,
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT commercial_metrics_period_check CHECK (period ~ '^\d{4}-\d{2}$'),
  CONSTRAINT commercial_metrics_sales_conversion_rate_check CHECK (sales_conversion_rate >= 0 AND sales_conversion_rate <= 100),
  CONSTRAINT commercial_metrics_cac_check CHECK (customer_acquisition_cost >= 0),
  CONSTRAINT commercial_metrics_clv_check CHECK (customer_lifetime_value >= 0),
  CONSTRAINT commercial_metrics_churn_rate_check CHECK (churn_rate >= 0 AND churn_rate <= 100),
  CONSTRAINT commercial_metrics_average_ticket_check CHECK (average_ticket >= 0),
  CONSTRAINT commercial_metrics_pipeline_velocity_check CHECK (pipeline_velocity >= 0),
  
  -- Unique period to avoid duplicates
  CONSTRAINT commercial_metrics_period_unique UNIQUE (period)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_commercial_metrics_period ON commercial_metrics(period);
CREATE INDEX IF NOT EXISTS idx_commercial_metrics_created_at ON commercial_metrics(created_at);
CREATE INDEX IF NOT EXISTS idx_commercial_metrics_conversion_rate ON commercial_metrics(sales_conversion_rate);
CREATE INDEX IF NOT EXISTS idx_commercial_metrics_cac ON commercial_metrics(customer_acquisition_cost);

-- RLS (Row Level Security) - Enable for multi-tenant
ALTER TABLE commercial_metrics ENABLE ROW LEVEL SECURITY;

-- Policy for users to see their own organization's data
CREATE POLICY "Users can view their organization's commercial metrics" ON commercial_metrics
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Policy for users to insert their own organization's data
CREATE POLICY "Users can insert their organization's commercial metrics" ON commercial_metrics
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Policy for users to update their own organization's data
CREATE POLICY "Users can update their organization's commercial metrics" ON commercial_metrics
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_commercial_metrics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER commercial_metrics_updated_at
  BEFORE UPDATE ON commercial_metrics
  FOR EACH ROW
  EXECUTE FUNCTION update_commercial_metrics_updated_at();

-- View for commercial metrics summary
CREATE OR REPLACE VIEW commercial_metrics_summary AS
SELECT 
  period,
  sales_conversion_rate,
  customer_acquisition_cost,
  customer_lifetime_value,
  churn_rate,
  average_ticket,
  pipeline_velocity,
  calculated_at,
  CASE 
    WHEN sales_conversion_rate < 5 THEN 'critical'
    WHEN sales_conversion_rate < 15 THEN 'warning'
    ELSE 'good'
  END as conversion_health,
  CASE 
    WHEN customer_acquisition_cost > 500 THEN 'critical'
    WHEN customer_acquisition_cost > 200 THEN 'warning'
    ELSE 'good'
  END as cac_health,
  CASE 
    WHEN churn_rate > 15 THEN 'critical'
    WHEN churn_rate > 10 THEN 'warning'
    ELSE 'good'
  END as churn_health
FROM commercial_metrics
ORDER BY period DESC;
