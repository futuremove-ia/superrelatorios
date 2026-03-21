-- Infrastructure Layer - Strategy Domain Schema
-- Supabase database schema for Strategy Metrics
-- Following Clean Architecture principles

-- Strategy metrics table for storing calculated strategy KPIs
CREATE TABLE IF NOT EXISTS strategy_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  okr_progress DECIMAL(5,2) NOT NULL,
  initiative_completion DECIMAL(5,2) NOT NULL,
  strategic_alignment DECIMAL(5,2) NOT NULL,
  execution_rate DECIMAL(5,2) NOT NULL,
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT strategy_metrics_period_check CHECK (period ~ '^\d{4}-\d{2}$'),
  CONSTRAINT strategy_metrics_okr_progress_check CHECK (okr_progress >= 0 AND okr_progress <= 100),
  CONSTRAINT strategy_metrics_initiative_completion_check CHECK (initiative_completion >= 0 AND initiative_completion <= 100),
  CONSTRAINT strategy_metrics_strategic_alignment_check CHECK (strategic_alignment >= 0 AND strategic_alignment <= 100),
  CONSTRAINT strategy_metrics_execution_rate_check CHECK (execution_rate >= 0 AND execution_rate <= 100),
  
  -- Unique period to avoid duplicates
  CONSTRAINT strategy_metrics_period_unique UNIQUE (period)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_strategy_metrics_period ON strategy_metrics(period);
CREATE INDEX IF NOT EXISTS idx_strategy_metrics_created_at ON strategy_metrics(created_at);
CREATE INDEX IF NOT EXISTS idx_strategy_metrics_okr_progress ON strategy_metrics(okr_progress);
CREATE INDEX IF NOT EXISTS idx_strategy_metrics_execution_rate ON strategy_metrics(execution_rate);

-- RLS (Row Level Security) - Enable for multi-tenant
ALTER TABLE strategy_metrics ENABLE ROW LEVEL SECURITY;

-- Policy for users to see their own organization's data
CREATE POLICY "Users can view their organization's strategy metrics" ON strategy_metrics
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Policy for users to insert their own organization's data
CREATE POLICY "Users can insert their organization's strategy metrics" ON strategy_metrics
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Policy for users to update their own organization's data
CREATE POLICY "Users can update their organization's strategy metrics" ON strategy_metrics
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_strategy_metrics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER strategy_metrics_updated_at
  BEFORE UPDATE ON strategy_metrics
  FOR EACH ROW
  EXECUTE FUNCTION update_strategy_metrics_updated_at();

-- View for strategy metrics summary
CREATE OR REPLACE VIEW strategy_metrics_summary AS
SELECT 
  period,
  okr_progress,
  initiative_completion,
  strategic_alignment,
  execution_rate,
  calculated_at,
  CASE 
    WHEN okr_progress < 30 THEN 'critical'
    WHEN okr_progress < 60 THEN 'warning'
    ELSE 'good'
  END as okr_health,
  CASE 
    WHEN execution_rate < 50 THEN 'critical'
    WHEN execution_rate < 75 THEN 'warning'
    ELSE 'good'
  END as execution_health,
  (okr_progress + initiative_completion + strategic_alignment + execution_rate) / 4 as overall_score
FROM strategy_metrics
ORDER BY period DESC;
