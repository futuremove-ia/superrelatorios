import { cloudStorageApi } from "@/lib/api/cloudStorage";
import {
  CloudProvider,
  CloudFile,
  CloudConnection,
} from "@/domain/cloud/types";

export const cloudStorageRoutes = {
  async connect(
    orgId: string,
    provider: CloudProvider,
  ): Promise<{ authUrl: string }> {
    return cloudStorageApi.getConnectUrl(orgId, provider);
  },

  async handleCallback(
    orgId: string,
    provider: CloudProvider,
    authCode: string,
  ): Promise<{ success: boolean }> {
    return cloudStorageApi.connect(orgId, provider, authCode);
  },

  async disconnect(
    orgId: string,
    provider: CloudProvider,
  ): Promise<{ success: boolean }> {
    return cloudStorageApi.disconnect(orgId, provider);
  },

  async getStatus(orgId: string): Promise<CloudConnection[]> {
    return cloudStorageApi.getStatus(orgId);
  },

  async listFiles(
    orgId: string,
    provider: CloudProvider,
    folderId?: string,
  ): Promise<CloudFile[]> {
    return cloudStorageApi.listFiles(orgId, provider, folderId);
  },

  async importFile(
    orgId: string,
    provider: CloudProvider,
    fileId: string,
  ): Promise<{ success: boolean; message?: string }> {
    return cloudStorageApi.importFile(orgId, provider, fileId);
  },
};

export default cloudStorageRoutes;
