/**
 * SuperRelatórios v2.0 Data Hub Types
 * Centralized management of user-provided files, data, and URLs.
 */

export type SourceType = 'file' | 'url' | 'raw_text';

export interface DataSourceMetadata {
  size?: number; // Size in bytes for files
  extension?: string; // File extension
  lastSynced?: string; // Last time URL was scraped/checked
  mimeType?: string;
  rowCount?: number; // Number of rows if tabular
}

export interface DataSource {
  id: string;
  userId: string;
  folderId?: string;
  name: string;
  type: SourceType;
  contentUrl?: string; // Supabase Storage URL for files or external URL
  rawContent?: string; // Cached text content for search/indexing
  metadata: DataSourceMetadata;
  linkedReportIds: string[]; // Reports generated using this data
  createdAt: string;
  updatedAt: string;
}

export interface DataHubStats {
  totalFiles: number;
  totalUrls: number;
  totalRawTexts: number;
  totalStorageUsed: number; // In bytes
}
