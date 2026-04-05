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
    return spreadsheetTypes.includes(this.mimeType || "");
  }

  isGoogleSheet(): boolean {
    return this.mimeType === "application/vnd.google-apps.spreadsheet";
  }

  isExcel(): boolean {
    const excelTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];
    return excelTypes.includes(this.mimeType || "");
  }

  isPDF(): boolean {
    return this.mimeType === "application/pdf";
  }

  isFolder(): boolean {
    return this.mimeType === "application/vnd.google-apps.folder";
  }

  getExtension(): string {
    const parts = this.fileName.split(".");
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
  }
}
