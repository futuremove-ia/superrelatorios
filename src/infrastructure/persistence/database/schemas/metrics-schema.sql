-- Infrastructure Layer - Metrics Schema
-- Supabase database schema for Metrics MVP
-- Following Clean Architecture principles

-- Metrics table for storing calculated KPIs
CREATE TABLE IF NOT EXISTS metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  net_profit_margin DECIMAL(5,2) NOT NULL,
  cash_burn_rate DECIMAL(10,2) NOT NULL,
  runway_months DECIMAL(5,2) NOT NULL,
  sales_conversion_rate DECIMAL(5,2) NOT NULL,
  customer_acquisition_cost DECIMAL(10,2) NOT NULL,
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT metrics_period_check CHECK (period ~ '^\d{4}-\d{2}$'),
  CONSTRAINT metrics_net_profit_margin_check CHECK (net_profit_margin >= -100 AND net_profit_margin <= 100),
  CONSTRAINT metrics_cash_burn_rate_check CHECK (cash_burn_rate >= 0),
  CONSTRAINT metrics_runway_months_check CHECK (runway_months >= 0),
  CONSTRAINT metrics_sales_conversion_rate_check CHECK (sales_conversion_rate >= 0 AND sales_conversion_rate <= 100),
  CONSTRAINT metrics_cac_check CHECK (customer_acquisition_cost >= 0),
  
  -- Unique period to avoid duplicates
  CONSTRAINT metrics_period_unique UNIQUE (period)
);

-- Alerts table for storing triggered alerts
CREATE TABLE IF NOT EXISTS alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kpi_code VARCHAR(50) NOT NULL,
  level VARCHAR(10) NOT NULL CHECK (level IN ('critical', 'warning', 'info')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  recommendation TEXT,
  current_value DECIMAL(10,2) NOT NULL,
  threshold_value DECIMAL(10,2) NOT NULL,
  triggered_at TIMESTAMPTZ DEFAULT NOW(),
  acknowledged_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT alerts_kpi_code_check CHECK (kpi_code IN (
    'netProfitMargin', 'cashBurnRate', 'runway', 
    'salesConversion', 'customerAcquisitionCost'
  )),
  CONSTRAINT alerts_value_check CHECK (current_value >= 0),
  CONSTRAINT alerts_threshold_check CHECK (threshold_value >= 0)
);

-- Indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_metrics_period ON metrics(period);
CREATE INDEX IF NOT EXISTS idx_metrics_calculated_at ON metrics(calculated_at DESC);
CREATE INDEX IF NOT EXISTS idx_alerts_active ON alerts(resolved_at) WHERE resolved_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_alerts_kpi_level ON alerts(kpi_code, level);
CREATE INDEX IF NOT EXISTS idx_alerts_triggered_at ON alerts(triggered_at DESC);

-- Row Level Security (RLS) policies
ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Public read access for metrics (demo purposes)
CREATE POLICY "Enable read access for all users" ON metrics
  FOR SELECT USING (true);

-- Public read access for alerts (demo purposes)  
CREATE POLICY "Enable read access for all users" ON alerts
  FOR SELECT USING (true);

-- Enable insert for service role (background jobs)
CREATE POLICY "Enable insert for service role" ON metrics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for service role" ON alerts
  FOR INSERT WITH CHECK (true);

-- Enable update for service role (acknowledge/resolve alerts)
CREATE POLICY "Enable update for service role" ON alerts
  FOR UPDATE USING (true);

-- Functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for automatic updated_at
CREATE TRIGGER update_metrics_updated_at 
  BEFORE UPDATE ON metrics 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_alerts_updated_at 
  BEFORE UPDATE ON alerts 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Views for common queries
CREATE OR REPLACE VIEW metrics_summary AS
SELECT 
  period,
  net_profit_margin,
  cash_burn_rate,
  runway_months,
  sales_conversion_rate,
  customer_acquisition_cost,
  calculated_at,
  CASE 
    WHEN net_profit_margin <= 5 THEN 'critical'
    WHEN net_profit_margin <= 10 THEN 'warning'
    ELSE 'good'
  END as net_profit_margin_status,
  CASE 
    WHEN cash_burn_rate >= 10000 THEN 'critical'
    WHEN cash_burn_rate >= 5000 THEN 'warning'
    ELSE 'good'
  END as cash_burn_rate_status,
  CASE 
    WHEN runway_months <= 3 THEN 'critical'
    WHEN runway_months <= 6 THEN 'warning'
    ELSE 'good'
  END as runway_status,
  CASE 
    WHEN sales_conversion_rate <= 5 THEN 'critical'
    WHEN sales_conversion_rate <= 15 THEN 'warning'
    ELSE 'good'
  END as sales_conversion_status,
  CASE 
    WHEN customer_acquisition_cost >= 500 THEN 'critical'
    WHEN customer_acquisition_cost >= 200 THEN 'warning'
    ELSE 'good'
  END as cac_status
FROM metrics
ORDER BY calculated_at DESC;

-- Active alerts view
CREATE OR REPLACE VIEW active_alerts AS
SELECT 
  id,
  kpi_code,
  level,
  title,
  description,
  recommendation,
  current_value,
  threshold_value,
  triggered_at,
  acknowledged_at,
  CASE 
    WHEN resolved_at IS NULL THEN true
    ELSE false
  END as is_active
FROM alerts
WHERE resolved_at IS NULL
ORDER BY triggered_at DESC;
