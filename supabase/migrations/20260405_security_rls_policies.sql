-- Security Fix: RLS Policies for Cloud Storage and RAG Tables
-- Migration: 20260405_security_rls_policies
-- Created: 2026-04-05
-- Priority: CRITICAL (SEC-001)

-- Enable RLS on new tables
ALTER TABLE cloud_storage_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE rag_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE rag_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_config ENABLE ROW LEVEL SECURITY;

-- Cloud Storage Configs: Users can only access their organization's config
CREATE POLICY "Users manage own org cloud configs" ON cloud_storage_configs
  FOR ALL 
  USING (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  )
  WITH CHECK (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

-- Service role can manage all cloud configs
CREATE POLICY "Service role manages cloud configs" ON cloud_storage_configs
  FOR ALL 
  USING (auth.role() = 'service_role');

-- RAG Documents: Users can only access their organization's documents
CREATE POLICY "Users manage own org rag documents" ON rag_documents
  FOR ALL 
  USING (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  )
  WITH CHECK (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

-- Service role can manage all rag documents
CREATE POLICY "Service role manages rag documents" ON rag_documents
  FOR ALL 
  USING (auth.role() = 'service_role');

-- RAG Chunks: Users can only access their organization's chunks
CREATE POLICY "Users manage own org rag chunks" ON rag_chunks
  FOR ALL 
  USING (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  )
  WITH CHECK (
    organization_id IN (
      SELECT organization_id FROM profiles WHERE id = auth.uid()
    )
  );

-- Service role can manage all rag chunks
CREATE POLICY "Service role manages rag chunks" ON rag_chunks
  FOR ALL 
  USING (auth.role() = 'service_role');

-- Platform Config: Only service role can access (contains API keys)
CREATE POLICY "Service role manages platform config" ON platform_config
  FOR ALL 
  USING (auth.role() = 'service_role');

-- Read access for authenticated users (for checking if config exists)
CREATE POLICY "Authenticated users can read platform config" ON platform_config
  FOR SELECT 
  USING (auth.role() = 'authenticated');
