export type SourceType = "google_drive" | "onedrive" | "upload" | "manual";

export interface RagDocument {
  id: string;
  organizationId: string;
  title: string;
  sourceType: SourceType;
  sourceId?: string;
  contentText: string;
  isIndexed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RagChunk {
  id: string;
  documentId: string;
  organizationId: string;
  chunkText: string;
  chunkIndex: number;
  metadata: Record<string, unknown>;
  embedding?: number[];
}

export interface RagSearchResult {
  chunkText: string;
  documentTitle: string;
  documentId: string;
  score: number;
}

export type ChunkingStrategy = "fixed" | "paragraph" | "page";

export interface ChunkingConfig {
  strategy: ChunkingStrategy;
  chunkSize: number;
  overlap: number;
}

export type CloudProvider = "google_drive" | "onedrive";

export interface CloudConnection {
  id: string;
  organizationId: string;
  provider: CloudProvider;
  connected: boolean;
  email?: string;
  lastSync?: Date;
  createdAt: Date;
}

export interface CloudFile {
  id: string;
  name: string;
  mimeType: string;
  size?: number;
  webUrl?: string;
  downloadUrl?: string;
  parentFolderId?: string;
  createdTime?: string;
  modifiedTime?: string;
}

export interface CloudUploadResult {
  success: boolean;
  documentId?: string;
  message?: string;
}

export type EmbeddingProvider = "huggingface" | "openai" | "gemini" | "local";

export interface PlatformConfig {
  embeddingProvider: EmbeddingProvider;
  huggingfaceApiKey?: string;
  openaiApiKey?: string;
  geminiApiKey?: string;
  isConfigured: boolean;
  lastUpdated?: Date;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
