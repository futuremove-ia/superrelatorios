# Cloud Storage + RAG Integration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar módulos de integração com Google Drive, OneDrive e RAG por tenant para o SuperRelatórios

**Architecture:**

- Cloud Storage: Adapter Pattern com OAuth 2.0 Service Account
- RAG: Metadata Filter + Embeddings com VectorStore abstraction
- Clean Architecture: Domain → Application → Infrastructure

**Tech Stack:**

- Google Drive API (googleapis)
- Microsoft Graph API (@microsoft/microsoft-graph-client)
- OpenAI Embeddings (text-embedding-3-small)
- Pinecone ou pgvector (Supabase)
- xlsx, papaparse, pdf-parse

---

## Phase 1: Cloud Storage Integration (Google Drive + OneDrive)

### Task 1: Database Schema

**Files:**

- Create: `supabase/migrations/YYYYMMDDHHMMSS_cloud_storage_tables.sql`
- Modify: `knowledge/decisions/005-cloud-storage-integration.md`

- [ ] **Step 1: Create migration file**

```sql
-- Migration: cloud_storage_tables.sql
-- Run: npx supabase migration new cloud_storage_tables

-- Google Drive Config
CREATE TABLE organization_drive_config (
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
CREATE TABLE organization_onedrive_config (
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
CREATE TABLE cloud_files (
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

CREATE INDEX cloud_files_org_idx ON cloud_files(organization_id, provider);
```

- [ ] **Step 2: Run migration**

```bash
npx supabase db push
```

- [ ] **Step 3: Commit**

```bash
git add supabase/migrations/ knowledge/decisions/
git commit -m "feat: add cloud storage tables schema"
```

---

### Task 2: Domain Entities

**Files:**

- Create: `src/domain/cloud/entities/CloudConfig.ts`
- Create: `src/domain/cloud/entities/CloudFile.ts`
- Create: `src/domain/cloud/types.ts`

- [ ] **Step 1: Create domain types**

```typescript
// src/domain/cloud/types.ts
export type CloudProvider = "google_drive" | "onedrive";

export interface CloudCredentials {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface CloudFile {
  id: string;
  name: string;
  mimeType: string;
  size?: number;
  parentId?: string;
  webViewLink?: string;
  createdTime?: Date;
  modifiedTime?: Date;
}

export interface CloudConfig {
  id: string;
  organizationId: string;
  provider: CloudProvider;
  isConnected: boolean;
  rootFolderId?: string;
  syncEnabled: boolean;
  lastSyncAt?: Date;
}
```

- [ ] **Step 2: Create entity classes**

```typescript
// src/domain/cloud/entities/CloudConfig.ts
import { CloudProvider } from "../types";

export class CloudConfigEntity {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly provider: CloudProvider,
    public readonly credentials: string, // encrypted
    public readonly rootFolderId: string | null,
    public readonly syncEnabled: boolean,
    public readonly lastSyncAt: Date | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(props: {
    organizationId: string;
    provider: CloudProvider;
    credentials: string;
  }): CloudConfigEntity {
    const now = new Date();
    return new CloudConfigEntity(
      crypto.randomUUID(),
      props.organizationId,
      props.provider,
      props.credentials,
      null,
      false,
      null,
      now,
      now,
    );
  }

  isValid(): boolean {
    return !!this.organizationId && !!this.provider && !!this.credentials;
  }
}
```

- [ ] **Step 3: Create CloudFile entity**

```typescript
// src/domain/cloud/entities/CloudFile.ts
export class CloudFileEntity {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly provider: string,
    public readonly externalFileId: string,
    public readonly fileName: string,
    public readonly mimeType: string | null,
    public readonly parentFolderId: string | null,
    public readonly fileSize: number | null,
    public readonly contentText: string | null,
    public readonly importedAt: Date,
  ) {}

  static create(props: {
    organizationId: string;
    provider: string;
    externalFileId: string;
    fileName: string;
    mimeType?: string;
    parentFolderId?: string;
    fileSize?: number;
    contentText?: string;
  }): CloudFileEntity {
    return new CloudFileEntity(
      crypto.randomUUID(),
      props.organizationId,
      props.provider,
      props.externalFileId,
      props.fileName,
      props.mimeType || null,
      props.parentFolderId || null,
      props.fileSize || null,
      props.contentText || null,
      new Date(),
    );
  }

  isSpreadsheet(): boolean {
    const spreadsheetTypes = [
      "application/vnd.google-apps.spreadsheet",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
    ];
    return spreadsheetTypes.includes(this.mimeType);
  }
}
```

- [ ] **Step 4: Create index exports**

```typescript
// src/domain/cloud/index.ts
export * from "./types";
export * from "./entities/CloudConfig";
export * from "./entities/CloudFile";
```

- [ ] **Step 5: Commit**

```bash
git add src/domain/cloud/
git commit -m "feat: add cloud storage domain entities"
```

---

### Task 3: Infrastructure - Cloud Storage Adapters

**Files:**

- Create: `src/infrastructure/cloud/GoogleDriveAdapter.ts`
- Create: `src/infrastructure/cloud/OneDriveAdapter.ts`
- Create: `src/infrastructure/cloud/CloudStorageConfigRepository.ts`

- [ ] **Step 1: Create Google Drive Adapter**

```typescript
// src/infrastructure/cloud/GoogleDriveAdapter.ts
import { google, drive_v3 } from "googleapis";
import { CloudFile } from "@/domain/cloud";

export class GoogleDriveAdapter {
  private drive: drive_v3.Drive;
  private orgId: string;

  constructor(accessToken: string, refreshToken: string, orgId: string) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
    oauth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    this.drive = google.drive({ version: "v3", auth: oauth2Client });
    this.orgId = orgId;
  }

  async listFiles(folderId?: string): Promise<CloudFile[]> {
    const query = folderId
      ? `'${folderId}' in parents and trashed = false`
      : "trashed = false and mimeType != 'application/vnd.google-apps.folder'";

    const response = await this.drive.files.list({
      q: query,
      fields:
        "files(id, name, mimeType, size, parents, webViewLink, createdTime, modifiedTime)",
      pageSize: 100,
    });

    return (response.data.files || []).map((file) => ({
      id: file.id || "",
      name: file.name || "",
      mimeType: file.mimeType || "",
      size: file.size ? parseInt(file.size) : undefined,
      parentId: file.parents?.[0],
      webViewLink: file.webViewLink,
      createdTime: file.createdTime ? new Date(file.createdTime) : undefined,
      modifiedTime: file.modifiedTime ? new Date(file.modifiedTime) : undefined,
    }));
  }

  async readSpreadsheet(fileId: string): Promise<string[][]> {
    const response = await this.drive.files.get({
      fileId,
      alt: "media",
    });

    // For Google Sheets, use sheets API
    const sheets = google.sheets({
      version: "v4",
      auth: this.drive.auth as any,
    });
    const sheetResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: fileId,
      range: "A1:ZZ10000",
    });

    return sheetResponse.data.values || [];
  }

  async getAuthUrl(): string {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    return oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/drive.readonly",
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
      state: this.orgId,
    });
  }

  async exchangeCode(
    code: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    const { tokens } = await oauth2Client.getToken(code);
    return {
      accessToken: tokens.access_token || "",
      refreshToken: tokens.refresh_token || "",
    };
  }
}
```

- [ ] **Step 2: Create OneDrive Adapter**

```typescript
// src/infrastructure/cloud/OneDriveAdapter.ts
import { Client } from "@microsoft/microsoft-graph-client";
import { CloudFile } from "@/domain/cloud";

export class OneDriveAdapter {
  private client: Client;
  private orgId: string;

  constructor(accessToken: string, orgId: string) {
    this.client = Client.init({
      authProvider: (done) => done(null, accessToken),
    });
    this.orgId = orgId;
  }

  async listFiles(folderId?: string): Promise<CloudFile[]> {
    const path = folderId
      ? `/me/drive/items/${folderId}/children`
      : "/me/drive/root/children";

    const response = await this.client.api(path).get();

    return (response.value || []).map((item) => ({
      id: item.id,
      name: item.name,
      mimeType: item.file?.mimeType || "application/octet-stream",
      size: item.size,
      parentId: item.parentReference?.id,
      webViewLink: item.webUrl,
      createdTime: item.createdDateTime
        ? new Date(item.createdDateTime)
        : undefined,
      modifiedTime: item.lastModifiedDateTime
        ? new Date(item.lastModifiedDateTime)
        : undefined,
    }));
  }

  async readSpreadsheet(fileId: string): Promise<string[][]> {
    // For Excel files, need to use different endpoint
    const response = await this.client
      .api(`/me/drive/items/${fileId}/content`)
      .get();
    // Parse as needed - using xlsx library
    return [];
  }

  async getAuthUrl(): string {
    const clientId = process.env.ONEDRIVE_CLIENT_ID;
    const redirectUri = process.env.ONEDRIVE_REDIRECT_URI;
    const scope = encodeURIComponent(
      "Files.Read.All Sites.Read.All offline_access",
    );

    return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${this.orgId}`;
  }

  async exchangeCode(
    code: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const tokenUrl =
      "https://login.microsoftonline.com/common/oauth2/v2.0/token";

    const params = new URLSearchParams({
      client_id: process.env.ONEDRIVE_CLIENT_ID || "",
      client_secret: process.env.ONEDRIVE_CLIENT_SECRET || "",
      code,
      redirect_uri: process.env.ONEDRIVE_REDIRECT_URI || "",
      grant_type: "authorization_code",
    });

    const response = await fetch(tokenUrl, {
      method: "POST",
      body: params,
    });

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    };
  }
}
```

- [ ] **Step 3: Create Repository**

```typescript
// src/infrastructure/cloud/CloudStorageConfigRepository.ts
import { supabase } from "@/lib/supabase";
import { CloudConfigEntity } from "@/domain/cloud";

export class CloudStorageConfigRepository {
  async findByOrgAndProvider(
    orgId: string,
    provider: string,
  ): Promise<CloudConfigEntity | null> {
    const table =
      provider === "google_drive"
        ? "organization_drive_config"
        : "organization_onedrive_config";

    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("organization_id", orgId)
      .single();

    if (error || !data) return null;

    return new CloudConfigEntity(
      data.id,
      data.organization_id,
      provider,
      data.credentials_encrypted,
      data.root_folder_id,
      data.sync_enabled,
      data.last_sync_at,
      data.created_at,
      data.updated_at,
    );
  }

  async save(config: CloudConfigEntity, provider: string): Promise<void> {
    const table =
      provider === "google_drive"
        ? "organization_drive_config"
        : "organization_onedrive_config";

    await supabase.from(table).upsert({
      id: config.id,
      organization_id: config.organizationId,
      credentials_encrypted: config.credentials,
      root_folder_id: config.rootFolderId,
      sync_enabled: config.syncEnabled,
      last_sync_at: config.lastSyncAt,
      updated_at: new Date().toISOString(),
    });
  }

  async delete(orgId: string, provider: string): Promise<void> {
    const table =
      provider === "google_drive"
        ? "organization_drive_config"
        : "organization_onedrive_config";

    await supabase.from(table).delete().eq("organization_id", orgId);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/infrastructure/cloud/
git commit -m "feat: add cloud storage adapters (Google Drive + OneDrive)"
```

---

### Task 4: Application Service - CloudStorageService

**Files:**

- Create: `src/application/CloudStorageService.ts`

- [ ] **Step 1: Create CloudStorageService**

```typescript
// src/application/CloudStorageService.ts
import { GoogleDriveAdapter } from "@/infrastructure/cloud/GoogleDriveAdapter";
import { OneDriveAdapter } from "@/infrastructure/cloud/OneDriveAdapter";
import { CloudStorageConfigRepository } from "@/infrastructure/cloud/CloudStorageConfigRepository";
import {
  CloudConfigEntity,
  CloudFileEntity,
  CloudProvider,
  CloudFile,
} from "@/domain/cloud";
import { encrypt, decrypt } from "@/lib/crypto";

export class CloudStorageService {
  private configRepo: CloudStorageConfigRepository;

  constructor() {
    this.configRepo = new CloudStorageConfigRepository();
  }

  async getConnectUrl(orgId: string, provider: CloudProvider): Promise<string> {
    const adapter =
      provider === "google_drive"
        ? new GoogleDriveAdapter("", "", orgId)
        : new OneDriveAdapter("", orgId);

    return adapter.getAuthUrl();
  }

  async connect(
    orgId: string,
    provider: CloudProvider,
    authCode: string,
  ): Promise<void> {
    const adapter =
      provider === "google_drive"
        ? new GoogleDriveAdapter("", "", orgId)
        : new OneDriveAdapter("", orgId);

    const tokens = await adapter.exchangeCode(authCode);
    const encrypted = encrypt(JSON.stringify(tokens));

    const config = CloudConfigEntity.create({
      organizationId: orgId,
      provider,
      credentials: encrypted,
    });

    await this.configRepo.save(config, provider);
  }

  async disconnect(orgId: string, provider: CloudProvider): Promise<void> {
    await this.configRepo.delete(orgId, provider);
  }

  async listFiles(
    orgId: string,
    provider: CloudProvider,
    folderId?: string,
  ): Promise<CloudFile[]> {
    const config = await this.configRepo.findByOrgAndProvider(orgId, provider);
    if (!config) throw new Error("Cloud not connected");

    const tokens = JSON.parse(decrypt(config.credentials));
    const adapter =
      provider === "google_drive"
        ? new GoogleDriveAdapter(tokens.accessToken, tokens.refreshToken, orgId)
        : new OneDriveAdapter(tokens.accessToken, orgId);

    return adapter.listFiles(folderId);
  }

  async readSpreadsheet(
    orgId: string,
    provider: CloudProvider,
    fileId: string,
  ): Promise<string[][]> {
    const config = await this.configRepo.findByOrgAndProvider(orgId, provider);
    if (!config) throw new Error("Cloud not connected");

    const tokens = JSON.parse(decrypt(config.credentials));
    const adapter =
      provider === "google_drive"
        ? new GoogleDriveAdapter(tokens.accessToken, tokens.refreshToken, orgId)
        : new OneDriveAdapter(tokens.accessToken, orgId);

    return adapter.readSpreadsheet(fileId);
  }

  async isConnected(orgId: string, provider: CloudProvider): Promise<boolean> {
    const config = await this.configRepo.findByOrgAndProvider(orgId, provider);
    return config?.isValid() || false;
  }
}
```

- [ ] **Step 2: Create crypto utility**

```typescript
// src/lib/crypto.ts
import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const KEY = crypto.scryptSync(
  process.env.ENCRYPTION_KEY || "default-key-change-me",
  "salt",
  32,
);

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag();
  return iv.toString("hex") + ":" + authTag.toString("hex") + ":" + encrypted;
}

export function decrypt(encrypted: string): string {
  const [ivHex, authTagHex, encryptedText] = encrypted.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const authTag = Buffer.from(authTagHex, "hex");
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/application/ src/lib/crypto.ts
git commit -m "feat: add CloudStorageService with encryption"
```

---

## Phase 2: RAG Module

### Task 5: RAG Database Schema

**Files:**

- Create: `supabase/migrations/YYYYMMDDHHMMSS_rag_tables.sql`

- [ ] **Step 1: Create RAG migration**

```sql
-- Migration: rag_tables.sql

-- RAG Documents
CREATE TABLE rag_documents (
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
CREATE TABLE rag_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES rag_documents(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  chunk_text TEXT NOT NULL,
  chunk_index INTEGER NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Add embedding column (if using pgvector)
ALTER TABLE rag_chunks ADD COLUMN IF NOT EXISTS embedding vector(1536);

-- Indexes
CREATE INDEX rag_chunks_org_idx ON rag_chunks(organization_id);
CREATE INDEX rag_documents_org_idx ON rag_documents(organization_id);
```

- [ ] **Step 2: Run migration**

```bash
npx supabase db push
```

- [ ] **Step 3: Commit**

```bash
git add supabase/migrations/
git commit -m "feat: add RAG database schema"
```

---

### Task 6: RAG Domain Entities

**Files:**

- Create: `src/domain/rag/types.ts`
- Create: `src/domain/rag/entities/RagDocument.ts`
- Create: `src/domain/rag/entities/RagChunk.ts`

- [ ] **Step 1: Create RAG types**

```typescript
// src/domain/rag/types.ts
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
  metadata: Record<string, any>;
  embedding?: number[];
}

export interface RagSearchResult {
  chunk: RagChunk;
  document: RagDocument;
  score: number;
}

export type ChunkingStrategy = "fixed" | "paragraph" | "page";
```

- [ ] **Step 2: Create entities**

```typescript
// src/domain/rag/entities/RagDocument.ts
export class RagDocumentEntity {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly title: string,
    public readonly sourceType: string,
    public readonly sourceId: string | null,
    public readonly contentText: string,
    public readonly isIndexed: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(props: {
    organizationId: string;
    title: string;
    sourceType: string;
    sourceId?: string;
    contentText: string;
  }): RagDocumentEntity {
    const now = new Date();
    return new RagDocumentEntity(
      crypto.randomUUID(),
      props.organizationId,
      props.title,
      props.sourceType,
      props.sourceId || null,
      props.contentText,
      false,
      now,
      now,
    );
  }

  markAsIndexed(): void {
    this.isIndexed = true;
    this.updatedAt = new Date();
  }
}
```

- [ ] **Step 3: Create chunk entity**

```typescript
// src/domain/rag/entities/RagChunk.ts
export class RagChunkEntity {
  constructor(
    public readonly id: string,
    public readonly documentId: string,
    public readonly organizationId: string,
    public readonly chunkText: string,
    public readonly chunkIndex: number,
    public readonly metadata: Record<string, any>,
    public readonly embedding: number[] | null,
    public readonly createdAt: Date,
  ) {}

  static create(props: {
    documentId: string;
    organizationId: string;
    chunkText: string;
    chunkIndex: number;
    metadata?: Record<string, any>;
  }): RagChunkEntity {
    return new RagChunkEntity(
      crypto.randomUUID(),
      props.documentId,
      props.organizationId,
      props.chunkText,
      props.chunkIndex,
      props.metadata || {},
      null,
      new Date(),
    );
  }

  setEmbedding(embedding: number[]): void {
    this.embedding = embedding;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/domain/rag/
git commit -m "feat: add RAG domain entities"
```

---

### Task 7: RAG Infrastructure - Document Parser & Embedding

**Files:**

- Create: `src/infrastructure/rag/DocumentParser.ts`
- Create: `src/infrastructure/rag/EmbeddingService.ts`
- Create: `src/infrastructure/rag/VectorStoreAdapter.ts`

- [ ] **Step 1: Create Document Parser**

```typescript
// src/infrastructure/rag/DocumentParser.ts
import * as XLSX from "xlsx";
import Papa from "papaparse";

export class DocumentParser {
  async parse(content: Buffer | string, mimeType: string): Promise<string> {
    if (
      mimeType.includes("spreadsheet") ||
      mimeType.includes("excel") ||
      mimeType.endsWith(".xlsx")
    ) {
      return this.parseExcel(content);
    }
    if (mimeType === "text/csv" || mimeType.endsWith(".csv")) {
      return this.parseCSV(content);
    }
    if (mimeType === "text/plain" || mimeType.endsWith(".txt")) {
      return content.toString();
    }
    // PDF requires pdf-parse library
    if (mimeType === "application/pdf") {
      return this.parsePDF(content);
    }
    // Default: treat as text
    return content.toString();
  }

  private parseExcel(content: Buffer | string): string {
    const workbook = XLSX.read(content, { type: "buffer" });
    const sheets: string[] = [];

    workbook.SheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      sheets.push(JSON.stringify(data));
    });

    return sheets.join("\n\n");
  }

  private parseCSV(content: Buffer | string): string {
    const result = Papa.parse(content.toString(), { header: false });
    return JSON.stringify(result.data);
  }

  private parsePDF(_content: Buffer | string): string {
    // Implement with pdf-parse
    return "";
  }
}
```

- [ ] **Step 2: Create Embedding Service**

```typescript
// src/infrastructure/rag/EmbeddingService.ts
import OpenAI from "openai";

export class EmbeddingService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async embed(text: string): Promise<number[]> {
    const response = await this.client.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return response.data[0].embedding;
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    const response = await this.client.embeddings.create({
      model: "text-embedding-3-small",
      input: texts,
    });

    return response.data.map((d) => d.embedding);
  }
}
```

- [ ] **Step 3: Create Vector Store Adapter**

```typescript
// src/infrastructure/rag/VectorStoreAdapter.ts
import { Pinecone } from "@pinecone-database/pinecone";
import { RagChunk } from "@/domain/rag";

export class VectorStoreAdapter {
  private pinecone: Pinecone;
  private index: any;

  constructor() {
    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || "",
    });
    this.index = this.pinecone.Index(
      process.env.PINECONE_INDEX || "superrelatorios",
    );
  }

  async upsert(chunks: RagChunk[], tenantId: string): Promise<void> {
    const vectors = chunks.map((chunk) => ({
      id: chunk.id,
      values: chunk.embedding || [],
      metadata: {
        tenant_id: tenantId,
        document_id: chunk.documentId,
        chunk_text: chunk.chunkText.substring(0, 1000), // Truncate for metadata
        chunk_index: chunk.chunkIndex,
        ...chunk.metadata,
      },
    }));

    await this.index.upsert(vectors);
  }

  async search(
    queryEmbedding: number[],
    tenantId: string,
    topK: number = 5,
  ): Promise<any[]> {
    const response = await this.index.query({
      vector: queryEmbedding,
      filter: { tenant_id: tenantId },
      topK,
      includeMetadata: true,
    });

    return response.matches || [];
  }

  async delete(documentId: string): Promise<void> {
    // Delete all chunks for a document
    await this.index.delete({
      filter: { document_id: documentId },
    });
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/infrastructure/rag/
git commit -m "feat: add RAG infrastructure (parser, embedding, vector store)"
```

---

### Task 8: RAG Application Service

**Files:**

- Create: `src/application/RagService.ts`

- [ ] **Step 1: Create RagService**

```typescript
// src/application/RagService.ts
import { DocumentParser } from "@/infrastructure/rag/DocumentParser";
import { EmbeddingService } from "@/infrastructure/rag/EmbeddingService";
import { VectorStoreAdapter } from "@/infrastructure/rag/VectorStoreAdapter";
import {
  RagDocumentEntity,
  RagChunkEntity,
  ChunkingStrategy,
} from "@/domain/rag";
import { supabase } from "@/lib/supabase";

export class RagService {
  private parser: DocumentParser;
  private embedding: EmbeddingService;
  private vectorStore: VectorStoreAdapter;

  constructor() {
    this.parser = new DocumentParser();
    this.embedding = new EmbeddingService();
    this.vectorStore = new VectorStoreAdapter();
  }

  async indexDocument(
    orgId: string,
    title: string,
    content: string | Buffer,
    mimeType: string,
    sourceType: string,
    sourceId?: string,
  ): Promise<string> {
    // 1. Parse document
    const text = await this.parser.parse(content, mimeType);

    // 2. Create document entity
    const doc = RagDocumentEntity.create({
      organizationId: orgId,
      title,
      sourceType,
      sourceId,
      contentText: text,
    });

    // 3. Save to DB
    const { data: docData, error } = await supabase
      .from("rag_documents")
      .insert({
        id: doc.id,
        organization_id: doc.organizationId,
        title: doc.title,
        source_type: doc.sourceType,
        source_id: doc.sourceId,
        content_text: doc.contentText,
        is_indexed: false,
      })
      .select()
      .single();

    if (error) throw error;

    // 4. Chunk and embed
    const chunks = this.chunkText(text, orgId, doc.id);

    // 5. Generate embeddings
    const texts = chunks.map((c) => c.chunkText);
    const embeddings = await this.embedding.embedBatch(texts);

    // 6. Save chunks to DB
    for (let i = 0; i < chunks.length; i++) {
      chunks[i].setEmbedding(embeddings[i]);
      await supabase.from("rag_chunks").insert({
        id: chunks[i].id,
        document_id: chunks[i].documentId,
        organization_id: chunks[i].organizationId,
        chunk_text: chunks[i].chunkText,
        chunk_index: chunks[i].chunkIndex,
        metadata: chunks[i].metadata,
        embedding: `[${embeddings[i].join(",")}]`,
      });
    }

    // 7. Upsert to Vector Store
    await this.vectorStore.upsert(chunks, orgId);

    // 8. Mark as indexed
    await supabase
      .from("rag_documents")
      .update({ is_indexed: true })
      .eq("id", doc.id);

    return doc.id;
  }

  async search(orgId: string, query: string, topK: number = 5): Promise<any[]> {
    // 1. Embed query
    const queryEmbedding = await this.embedding.embed(query);

    // 2. Search vector store
    const results = await this.vectorStore.search(queryEmbedding, orgId, topK);

    // 3. Fetch document details
    const docIds = [
      ...new Set(results.map((r: any) => r.metadata.document_id)),
    ];
    const { data: docs } = await supabase
      .from("rag_documents")
      .select("*")
      .in("id", docIds);

    const docMap = new Map((docs || []).map((d) => [d.id, d]));

    return results.map((r: any) => ({
      chunkText: r.metadata.chunk_text,
      documentTitle: docMap.get(r.metadata.document_id)?.title,
      documentId: r.metadata.document_id,
      score: r.score,
    }));
  }

  async deleteDocument(documentId: string): Promise<void> {
    // Delete from vector store
    await this.vectorStore.delete(documentId);

    // Delete from DB (cascade will handle chunks)
    await supabase.from("rag_documents").delete().eq("id", documentId);
  }

  private chunkText(
    text: string,
    orgId: string,
    docId: string,
    strategy: ChunkingStrategy = "fixed",
  ): RagChunkEntity[] {
    const CHUNK_SIZE = 500;
    const OVERLAP = 50;

    const chunks: RagChunkEntity[] = [];
    const words = text.split(/\s+/);

    for (let i = 0; i < words.length; i += CHUNK_SIZE - OVERLAP) {
      const chunkWords = words.slice(i, i + CHUNK_SIZE);
      const chunkText = chunkWords.join(" ");

      chunks.push(
        RagChunkEntity.create({
          documentId: docId,
          organizationId: orgId,
          chunkText,
          chunkIndex: Math.floor(i / (CHUNK_SIZE - OVERLAP)),
          metadata: { strategy },
        }),
      );
    }

    return chunks;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/application/RagService.ts
git commit -m "feat: add RagService for document indexing and search"
```

---

## Phase 3: Integration & UI

### Task 9: API Routes

**Files:**

- Create: `src/pages/api/cloud/connect.ts`
- Create: `src/pages/api/cloud/callback.ts`
- Create: `src/pages/api/cloud/files.ts`
- Create: `src/pages/api/rag/index.ts`
- Create: `src/pages/api/rag/search.ts`

- [ ] **Step 1: Create Cloud Connect API**

```typescript
// src/pages/api/cloud/connect.ts
import { NextRequest, NextResponse } from "next/server";
import { CloudStorageService } from "@/application/CloudStorageService";
import { getCurrentOrg } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const org = await getCurrentOrg();
  if (!org)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const provider = searchParams.get("provider") as "google_drive" | "onedrive";

  const service = new CloudStorageService();
  const url = await service.getConnectUrl(org.id, provider);

  return NextResponse.redirect(url);
}
```

- [ ] **Step 2: Create Callback API**

```typescript
// src/pages/api/cloud/callback.ts
import { NextRequest, NextResponse } from "next/server";
import { CloudStorageService } from "@/application/CloudStorageService";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state"); // orgId
  const provider = searchParams.get("provider");

  if (!code || !state) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const service = new CloudStorageService();
  await service.connect(state, provider, code);

  return NextResponse.redirect(
    `/app/settings/integrations?connected=${provider}`,
  );
}
```

- [ ] **Step 3: Create RAG Index API**

```typescript
// src/pages/api/rag/index.ts
import { NextRequest, NextResponse } from "next/server";
import { RagService } from "@/application/RagService";
import { getCurrentOrg } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const org = await getCurrentOrg();
  if (!org)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const service = new RagService();

  const docId = await service.indexDocument(
    org.id,
    title || file.name,
    buffer,
    file.type,
    "upload",
  );

  return NextResponse.json({ id: docId });
}
```

- [ ] **Step 4: Create RAG Search API**

```typescript
// src/pages/api/rag/search.ts
import { NextRequest, NextResponse } from "next/server";
import { RagService } from "@/application/RagService";
import { getCurrentOrg } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const org = await getCurrentOrg();
  if (!org)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { query } = await req.json();

  const service = new RagService();
  const results = await service.search(org.id, query);

  return NextResponse.json({ results });
}
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/api/cloud/ src/pages/api/rag/
git commit -m "feat: add API routes for cloud storage and RAG"
```

---

### Task 10: UI Components

**Files:**

- Create: `src/components/cloud/CloudConnectButton.tsx`
- Create: `src/components/rag/DocumentUploader.tsx`
- Create: `src/components/rag/SearchBar.tsx`

- [ ] **Step 1: Create Cloud Connect Button**

```typescript
// src/components/cloud/CloudConnectButton.tsx
'use client';

import { useState } from 'react';

interface Props {
  provider: 'google_drive' | 'onedrive';
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function CloudConnectButton({ provider, isConnected, onConnect, onDisconnect }: Props) {
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    window.location.href = `/api/cloud/connect?provider=${provider}`;
  };

  if (isConnected) {
    return (
      <button onClick={onDisconnect} className="btn-danger">
        Desconectar
      </button>
    );
  }

  return (
    <button onClick={handleConnect} disabled={loading} className="btn-primary">
      {loading ? 'Conectando...' : `Conectar ${provider === 'google_drive' ? 'Google Drive' : 'OneDrive'}`}
    </button>
  );
}
```

- [ ] **Step 2: Create RAG Search Bar**

```typescript
// src/components/rag/SearchBar.tsx
'use client';

import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch('/api/rag/search', {
      method: 'POST',
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar em documentos..."
          className="input"
        />
        <button onClick={handleSearch} disabled={loading} className="btn-primary">
          Buscar
        </button>
      </div>

      <div className="results">
        {results.map((r, i) => (
          <div key={i} className="result-item">
            <h4>{r.documentTitle}</h4>
            <p>{r.chunkText}</p>
            <span className="score">{Math.round(r.score * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/cloud/ src/components/rag/
git commit -m "feat: add UI components for cloud storage and RAG"
```

---

## Resumo de Tasks

| Task | Descrição                                | Complexidade |
| ---- | ---------------------------------------- | ------------ |
| 1    | Database Schema (Cloud Storage)          | Baixa        |
| 2    | Domain Entities (Cloud)                  | Baixa        |
| 3    | Infrastructure Adapters                  | Alta         |
| 4    | Application Service                      | Média        |
| 5    | Database Schema (RAG)                    | Baixa        |
| 6    | Domain Entities (RAG)                    | Baixa        |
| 7    | Infrastructure (Parser/Embedding/Vector) | Alta         |
| 8    | Application Service (RAG)                | Alta         |
| 9    | API Routes                               | Média        |
| 10   | UI Components                            | Média        |

---

## Dependencies

```json
{
  "dependencies": {
    "googleapis": "^140.0.0",
    "@microsoft/microsoft-graph-client": "^3.0.0",
    "xlsx": "^0.18.5",
    "papaparse": "^5.4.0",
    "openai": "^4.0.0",
    "@pinecone-database/pinecone": "^2.0.0"
  }
}
```

---

## Plan Complete

**Saved to:** `docs/superpowers/plans/2026-04-05-cloud-storage-rag-integration.md`

Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
