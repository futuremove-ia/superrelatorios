-- Cloud Storage Integration Tables
-- Migration: 20260405_cloud_storage_tables
-- Created: 2026-04-05

-- Google Drive Config
CREATE TABLE IF NOT EXISTS organization_drive_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  credentials_encrypted TEXT NOT NULL,
  root_folder_id TEXT,
  sync_enabled BOOLEAN DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id)
);

-- OneDrive Config
CREATE TABLE IF NOT EXISTS organization_onedrive_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  credentials_encrypted TEXT NOT NULL,
  root_folder_id TEXT,
  sync_enabled BOOLEAN DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id)
);

-- Cloud Files Cache
CREATE TABLE IF NOT EXISTS cloud_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  provider VARCHAR(20) NOT NULL,
  external_file_id TEXT NOT NULL,
  file_name TEXT NOT NULL,
  mime_type TEXT,
  parent_folder_id TEXT,
  file_size BIGINT,
  content_text TEXT,
  imported_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, provider, external_file_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS cloud_files_org_idx ON cloud_files(organization_id, provider);

-- RAG Tables
-- RAG Documents
CREATE TABLE IF NOT EXISTS rag_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  source_type VARCHAR(50) NOT NULL,
  source_id TEXT,
  content_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  is_indexed BOOLEAN DEFAULT false
);

-- RAG Chunks
CREATE TABLE IF NOT EXISTS rag_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES rag_documents(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  chunk_text TEXT NOT NULL,
  chunk_index INTEGER NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable vector extension if available
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'vector') THEN
    CREATE EXTENSION IF NOT EXISTS vector;
  END IF;
END $$;

-- Add embedding column (for pgvector)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'rag_chunks' AND column_name = 'embedding'
  ) THEN
    ALTER TABLE rag_chunks ADD COLUMN embedding vector(1536);
  END IF;
END $$;

-- Indexes for RAG
CREATE INDEX IF NOT EXISTS rag_chunks_org_idx ON rag_chunks(organization_id);
CREATE INDEX IF NOT EXISTS rag_documents_org_idx ON rag_documents(organization_id);
