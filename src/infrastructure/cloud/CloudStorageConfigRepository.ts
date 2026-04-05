import { supabase } from "@/lib/supabase";
import { CloudConfigEntity } from "@/domain/cloud/entities/CloudConfig";
import { CloudProvider } from "@/domain/cloud/types";

export class CloudStorageConfigRepository {
  async findByOrgAndProvider(
    orgId: string,
    provider: CloudProvider,
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
