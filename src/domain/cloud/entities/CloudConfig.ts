import { CloudProvider } from "../types";

export class CloudConfigEntity {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly provider: CloudProvider,
    public readonly credentials: string,
    public rootFolderId: string | null,
    public syncEnabled: boolean,
    public lastSyncAt: Date | null,
    public readonly createdAt: Date,
    public updatedAt: Date,
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

  enableSync(): void {
    this.syncEnabled = true;
    this.updatedAt = new Date();
  }

  disableSync(): void {
    this.syncEnabled = false;
    this.updatedAt = new Date();
  }

  updateLastSync(): void {
    this.lastSyncAt = new Date();
    this.updatedAt = new Date();
  }

  setRootFolder(folderId: string): void {
    this.rootFolderId = folderId;
    this.updatedAt = new Date();
  }
}
