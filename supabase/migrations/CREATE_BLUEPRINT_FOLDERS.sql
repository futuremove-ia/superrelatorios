-- Migration: CREATE_BLUEPRINT_FOLDERS
-- Criação das tabelas company_blueprints e report_folders

-- 1. company_blueprints
CREATE TABLE IF NOT EXISTS company_blueprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  industry_sector TEXT,
  company_size TEXT,
  data_sources TEXT[],
  goals JSONB,
  challenges JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE company_blueprints ENABLE ROW LEVEL SECURITY;

CREATE POLICY "org_own_blueprint" ON company_blueprints
  FOR ALL USING (organization_id = (SELECT organization_id FROM profiles WHERE id = auth.uid()));

-- 2. report_folders
CREATE TABLE IF NOT EXISTS report_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  parent_id UUID REFERENCES report_folders(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE report_folders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "org_own_folders" ON report_folders
  FOR ALL USING (organization_id = (SELECT organization_id FROM profiles WHERE id = auth.uid()));
