export type CloudProvider = "google_drive" | "onedrive";

export interface CloudCredentials {
  accessToken: string;
  refreshToken: string;
  expiresAt?: Date;
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

export interface CloudConnection {
  id: string;
  organizationId: string;
  provider: CloudProvider;
  connected: boolean;
  email?: string;
  lastSync?: Date;
  createdAt: Date;
}
