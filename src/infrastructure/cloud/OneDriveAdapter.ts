import { Client } from "@microsoft/microsoft-graph-client";
import { CloudFile } from "@/domain/cloud/types";

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
    await this.client.api(`/me/drive/items/${fileId}/content`).get();
    return [];
  }

  getAuthUrl(): string {
    const clientId =
      process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID ||
      process.env.ONEDRIVE_CLIENT_ID;
    const redirectUri =
      process.env.NEXT_PUBLIC_ONEDRIVE_REDIRECT_URI ||
      process.env.ONEDRIVE_REDIRECT_URI;
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
      client_id:
        process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID ||
        process.env.ONEDRIVE_CLIENT_ID ||
        "",
      client_secret: process.env.ONEDRIVE_CLIENT_SECRET || "",
      code,
      redirect_uri:
        process.env.NEXT_PUBLIC_ONEDRIVE_REDIRECT_URI ||
        process.env.ONEDRIVE_REDIRECT_URI ||
        "",
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
