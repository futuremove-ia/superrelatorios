-- Data Versioning and Validation Queue Tables
-- Date: 2026-04-02

-- Table: data_versions
-- Stores historical changes to any data field
CREATE TABLE IF NOT EXISTS data_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  field_name TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  old_value JSONB,
  new_value JSONB NOT NULL,
  change_type TEXT NOT NULL CHECK (change_type IN ('extraction', 'manual', 'ai_correction', 'import')),
  source_document_id UUID,
  verified_by UUID REFERENCES auth.users(id),
  verified_at TIMESTAMPTZ,
  validation_status TEXT NOT NULL DEFAULT 'pending' CHECK (validation_status IN ('pending', 'approved', 'rejected', 'auto_approved')),
  confidence_score DECIMAL(3,2) CHECK (confidence_score >= 0 AND confidence_score <= 1),
  change_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for data_versions
CREATE INDEX IF NOT EXISTS idx_data_versions_org ON data_versions(organization_id);
CREATE INDEX IF NOT EXISTS idx_data_versions_table_record ON data_versions(table_name, record_id);
CREATE INDEX IF NOT EXISTS idx_data_versions_field ON data_versions(field_name);
CREATE INDEX IF NOT EXISTS idx_data_versions_status ON data_versions(validation_status);
CREATE INDEX IF NOT EXISTS idx_data_versions_created ON data_versions(created_at DESC);

-- Table: validation_queue
-- Stores pending validations that require user action
CREATE TABLE IF NOT EXISTS validation_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  field_name TEXT NOT NULL,
  old_value JSONB,
  new_value JSONB NOT NULL,
  change_percent DECIMAL(10,2),
  confidence_score DECIMAL(3,2),
  change_type TEXT NOT NULL,
  source_document_id UUID,
  suggested_action TEXT CHECK (suggested_action IN ('approve', 'reject', 'review')),
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'reviewed')),
  validated_by UUID REFERENCES auth.users(id),
  validated_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for validation_queue
CREATE INDEX IF NOT EXISTS idx_validation_queue_org ON validation_queue(organization_id);
CREATE INDEX IF NOT EXISTS idx_validation_queue_status ON validation_queue(status);
CREATE INDEX IF NOT EXISTS idx_validation_queue_created ON validation_queue(created_at DESC);

-- Table: blueprint_extraction_log
-- Logs all blueprint extraction attempts
CREATE TABLE IF NOT EXISTS blueprint_extraction_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  document_id UUID,
  extraction_status TEXT NOT NULL,
  confidence_score DECIMAL(3,2),
  fields_extracted JSONB,
  fields_failed JSONB,
  warnings TEXT[],
  errors TEXT[],
  extraction_time_ms INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for blueprint_extraction_log
CREATE INDEX IF NOT EXISTS idx_blueprint_extraction_log_org ON blueprint_extraction_log(organization_id);
CREATE INDEX IF NOT EXISTS idx_blueprint_extraction_log_doc ON blueprint_extraction_log(document_id);

-- Enable RLS on all tables
ALTER TABLE data_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE blueprint_extraction_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for data_versions
CREATE POLICY "Users can view own organization versions"
  ON data_versions FOR SELECT
  USING (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Users can insert own organization versions"
  ON data_versions FOR INSERT
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Service role full access data_versions"
  ON data_versions FOR ALL
  USING (auth.role() = 'service_role');

-- RLS Policies for validation_queue
CREATE POLICY "Users can view own organization validation queue"
  ON validation_queue FOR SELECT
  USING (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Users can update own organization validation"
  ON validation_queue FOR UPDATE
  USING (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Service role full access validation_queue"
  ON validation_queue FOR ALL
  USING (auth.role() = 'service_role');

-- RLS Policies for blueprint_extraction_log
CREATE POLICY "Users can view own organization extraction logs"
  ON blueprint_extraction_log FOR SELECT
  USING (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Users can insert own organization extraction logs"
  ON blueprint_extraction_log FOR INSERT
  WITH CHECK (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Service role full access blueprint_extraction_log"
  ON blueprint_extraction_log FOR ALL
  USING (auth.role() = 'service_role');

-- Comments
COMMENT ON TABLE data_versions IS 'Stores historical changes to all data fields with version control';
COMMENT ON TABLE validation_queue IS 'Pending validations requiring user confirmation';
COMMENT ON TABLE blueprint_extraction_log IS 'Logs of all blueprint extraction attempts for audit';

-- Function to get current value with fallback
CREATE OR REPLACE FUNCTION get_current_value(
  p_table_name TEXT,
  p_record_id UUID,
  p_field_name TEXT
)
RETURNS JSONB AS $$
DECLARE
  v_value JSONB;
BEGIN
  EXECUTE format('SELECT %I FROM %I WHERE id = $1', p_field_name, p_table_name)
  INTO v_value
  USING p_record_id;
  
  RETURN v_value;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to calculate change percentage
CREATE OR REPLACE FUNCTION calculate_change_percent(
  p_old_value NUMERIC,
  p_new_value NUMERIC
)
RETURNS NUMERIC AS $$
BEGIN
  IF p_old_value IS NULL OR p_old_value = 0 THEN
    RETURN CASE WHEN p_new_value > 0 THEN 100 ELSE 0 END;
  END IF;
  
  RETURN ABS(((p_new_value - p_old_value) / p_old_value) * 100);
END;
$$ LANGUAGE plpgsql IMMUTABLE;
