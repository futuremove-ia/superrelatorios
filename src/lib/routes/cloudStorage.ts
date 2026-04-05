import { cloudStorageApi } from "@/lib/api/cloudStorage";
import {
  CloudProvider,
  CloudFile,
  CloudConnection,
} from "@/domain/cloud/types";

export const cloudStorageRoutes = {
  async connect(provider: CloudProvider): Promise<{ authUrl: string }> {
    return cloudStorageApi.getConnectUrl(provider);
  },

  async handleCallback(
    provider: CloudProvider,
    authCode: string,
  ): Promise<{ success: boolean }> {
    return cloudStorageApi.connect(provider, authCode);
  },

  async disconnect(provider: CloudProvider): Promise<{ success: boolean }> {
    return cloudStorageApi.disconnect(provider);
  },

  async getStatus(): Promise<CloudConnection[]> {
    return cloudStorageApi.getStatus();
  },

  async listFiles(
    provider: CloudProvider,
    folderId?: string,
  ): Promise<CloudFile[]> {
    return cloudStorageApi.listFiles(provider, folderId);
  },

  async importFile(
    provider: CloudProvider,
    fileId: string,
  ): Promise<{ success: boolean; message?: string }> {
    return cloudStorageApi.importFile(provider, fileId);
  },
};

export default cloudStorageRoutes;
