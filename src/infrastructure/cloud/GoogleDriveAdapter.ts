import { google, drive_v3 } from "googleapis";
import { CloudFile } from "@/domain/cloud/types";

export class GoogleDriveAdapter {
  private drive: drive_v3.Drive;
  private orgId: string;

  constructor(accessToken: string, refreshToken: string, orgId: string) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
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
      size: file.size ? parseInt(file.size, 10) : undefined,
      parentId: file.parents?.[0],
      webViewLink: file.webViewLink,
      createdTime: file.createdTime ? new Date(file.createdTime) : undefined,
      modifiedTime: file.modifiedTime ? new Date(file.modifiedTime) : undefined,
    }));
  }

  async readSpreadsheet(fileId: string): Promise<string[][]> {
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

  async getAuthUrl(): Promise<string> {
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
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
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
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
