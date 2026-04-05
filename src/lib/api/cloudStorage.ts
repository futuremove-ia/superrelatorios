import { supabase } from "@/lib/supabase";
import {
  CloudProvider,
  CloudFile,
  CloudConnection,
} from "@/domain/cloud/types";

const API_BASE = "/api";

async function getAuthHeaders(): Promise<HeadersInit> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.access_token) {
    throw new Error("Not authenticated");
  }
  return {
    Authorization: `Bearer ${session.access_token}`,
    "Content-Type": "application/json",
  };
}

export const cloudStorageApi = {
  async getConnectUrl(provider: CloudProvider): Promise<{ authUrl: string }> {
    const endpoint = provider === "google_drive" ? "google-drive" : "onedrive";
    const response = await fetch(`${API_BASE}/${endpoint}?action=auth-url`, {
      headers: await getAuthHeaders(),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to get auth URL");
    }

    return response.json();
  },

  async connect(
    provider: CloudProvider,
    authCode: string,
  ): Promise<{ success: boolean }> {
    const endpoint = provider === "google_drive" ? "google-drive" : "onedrive";
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ action: "connect", code: authCode }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to connect");
    }

    return response.json();
  },

  async disconnect(provider: CloudProvider): Promise<{ success: boolean }> {
    const endpoint = provider === "google_drive" ? "google-drive" : "onedrive";
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ action: "disconnect" }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to disconnect");
    }

    return response.json();
  },

  async getStatus(): Promise<CloudConnection[]> {
    const headers = await getAuthHeaders();
    const providers: CloudProvider[] = ["google_drive", "onedrive"];
    const results: CloudConnection[] = [];

    for (const provider of providers) {
      const endpoint =
        provider === "google_drive" ? "google-drive" : "onedrive";
      const response = await fetch(`${API_BASE}/${endpoint}?action=status`, {
        headers,
      });

      if (response.ok) {
        const data = await response.json();
        results.push({
          id: `${provider}`,
          organizationId: "",
          provider,
          connected: data.connected,
          createdAt: new Date(),
        });
      } else {
        results.push({
          id: `${provider}`,
          organizationId: "",
          provider,
          connected: false,
          createdAt: new Date(),
        });
      }
    }

    return results;
  },

  async listFiles(
    provider: CloudProvider,
    folderId?: string,
  ): Promise<CloudFile[]> {
    const response = await fetch(`${API_BASE}/cloud-storage-files`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({
        provider,
        action: "list-files",
        folderId,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to list files");
    }

    const data = await response.json();
    return (data.files || []).map(
      (file: {
        id: string;
        name: string;
        mimeType: string;
        size?: number;
        parents?: string[];
        webViewLink?: string;
        createdTime?: string;
        modifiedTime?: string;
      }) => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        size: file.size,
        parentId: file.parents?.[0],
        webViewLink: file.webViewLink,
        createdTime: file.createdTime ? new Date(file.createdTime) : undefined,
        modifiedTime: file.modifiedTime
          ? new Date(file.modifiedTime)
          : undefined,
      }),
    );
  },

  async importFile(
    provider: CloudProvider,
    fileId: string,
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${API_BASE}/cloud-storage-files`, {
        method: "POST",
        headers: await getAuthHeaders(),
        body: JSON.stringify({
          provider,
          action: "read-file",
          fileId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          message: error.error || "Failed to read file",
        };
      }

      const data = await response.json();
      return {
        success: true,
        message: `Importado: ${data.content?.length || 0} linhas`,
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
