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
