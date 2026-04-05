import { CloudStorageService } from "@/application/CloudStorageService";
import {
  CloudProvider,
  CloudFile,
  CloudConnection,
} from "@/domain/cloud/types";

const cloudService = new CloudStorageService();

export const cloudStorageApi = {
  async getConnectUrl(
    orgId: string,
    provider: CloudProvider,
  ): Promise<{ authUrl: string }> {
    const authUrl = await cloudService.getConnectUrl(orgId, provider);
    return { authUrl };
  },

  async connect(
    orgId: string,
    provider: CloudProvider,
    authCode: string,
  ): Promise<{ success: boolean }> {
    await cloudService.connect(orgId, provider, authCode);
    return { success: true };
  },

  async disconnect(
    orgId: string,
    provider: CloudProvider,
  ): Promise<{ success: boolean }> {
    await cloudService.disconnect(orgId, provider);
    return { success: true };
  },

  async getStatus(orgId: string): Promise<CloudConnection[]> {
    const providers: CloudProvider[] = ["google_drive", "onedrive"];
    const results: CloudConnection[] = [];

    for (const provider of providers) {
      const isConnected = await cloudService.isConnected(orgId, provider);
      results.push({
        id: `${orgId}-${provider}`,
        organizationId: orgId,
        provider,
        connected: isConnected,
        createdAt: new Date(),
      });
    }

    return results;
  },

  async listFiles(
    orgId: string,
    provider: CloudProvider,
    folderId?: string,
  ): Promise<CloudFile[]> {
    return cloudService.listFiles(orgId, provider, folderId);
  },

  async importFile(
    orgId: string,
    provider: CloudProvider,
    fileId: string,
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const content = await cloudService.readSpreadsheet(
        orgId,
        provider,
        fileId,
      );
      return {
        success: true,
        message: `Importado: ${content.length} linhas`,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erro desconhecido",
      };
    }
  },
};

export default cloudStorageApi;
