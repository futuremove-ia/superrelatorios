import { GoogleDriveAdapter } from "@/infrastructure/cloud/GoogleDriveAdapter";
import { OneDriveAdapter } from "@/infrastructure/cloud/OneDriveAdapter";
import { CloudStorageConfigRepository } from "@/infrastructure/cloud/CloudStorageConfigRepository";
import { CloudConfigEntity } from "@/domain/cloud/entities/CloudConfig";
import { CloudProvider, CloudFile } from "@/domain/cloud/types";
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
