-- Document Extraction Storage Table
-- Date: 2026-04-02

CREATE TABLE IF NOT EXISTS document_extractions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  sector TEXT,
  business_model TEXT,
  tables JSONB DEFAULT '[]'::jsonb,
  sections JSONB DEFAULT '[]'::jsonb,
  detected_fields JSONB DEFAULT '[]'::jsonb,
  raw_data JSONB DEFAULT '[]'::jsonb,
  metadata JSONB DEFAULT '{}'::jsonb,
  extracted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_document_extractions_org 
  ON document_extractions(organization_id);

CREATE INDEX IF NOT EXISTS idx_document_extractions_doc 
  ON document_extractions(document_id);

-- Enable RLS
ALTER TABLE document_extractions ENABLE ROW LEVEL SECURITY;

-- RLS Policy
CREATE POLICY "Users can view own organization extractions"
  ON document_extractions FOR SELECT
  USING (organization_id IN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
  ));

CREATE POLICY "Service role full access"
  ON document_extractions FOR ALL
  USING (auth.role() = 'service_role');

COMMENT ON TABLE document_extractions IS 'Stores parsed data from documents processed through Unstructured API';
