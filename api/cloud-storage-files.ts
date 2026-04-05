import { jwtVerify, createRemoteJWKSet } from "jose";
import { isRateLimited, getIp } from "./utils/rate-limit";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const ONEDRIVE_CLIENT_ID = process.env.ONEDRIVE_CLIENT_ID;
const ONEDRIVE_CLIENT_SECRET = process.env.ONEDRIVE_CLIENT_SECRET;

const ALLOWED_ORIGIN =
  process.env.NEXT_PUBLIC_APP_URL || "https://superrelatorios.vercel.app";

const JWKS = createRemoteJWKSet(
  new URL(`${SUPABASE_URL}/auth/v1/.well-known/jwks`),
);

async function verifyToken(authHeader: string | null): Promise<boolean> {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.slice(7);

  try {
    await jwtVerify(token, JWKS);
    return true;
  } catch {
    return false;
  }
}

async function getOrgIdFromToken(authHeader: string): Promise<string | null> {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.slice(7);

  try {
    const { payload } = await jwtVerify(token, JWKS);
    return (payload.organization_id as string) || null;
  } catch {
    return null;
  }
}

async function getCloudConfig(
  orgId: string,
  provider: string,
): Promise<{ credentials: string } | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    throw new Error("Supabase not configured");
  }

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/cloud_storage_configs?organization_id=eq.${orgId}&provider=eq.${provider}`,
    {
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data[0] || null;
}

async function refreshGoogleToken(
  refreshToken: string,
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID || "",
      client_secret: GOOGLE_CLIENT_SECRET || "",
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to refresh Google token");
  }

  const tokens = await response.json();
  return {
    accessToken: tokens.access_token,
    refreshToken: refreshToken,
  };
}

async function refreshOneDriveToken(
  refreshToken: string,
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await fetch(
    "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: ONEDRIVE_CLIENT_ID || "",
        client_secret: ONEDRIVE_CLIENT_SECRET || "",
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to refresh OneDrive token");
  }

  const tokens = await response.json();
  return {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token || refreshToken,
  };
}

async function listGoogleDriveFiles(
  accessToken: string,
  folderId?: string,
): Promise<unknown[]> {
  const query = folderId
    ? `'${folderId}' in parents and trashed = false`
    : "trashed = false and mimeType != 'application/vnd.google-apps.folder'";

  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType,size,parents,webViewLink,createdTime,modifiedTime)&pageSize=100`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google Drive API error: ${error}`);
  }

  const data = await response.json();
  return data.files || [];
}

async function readGoogleSheet(
  accessToken: string,
  spreadsheetId: string,
): Promise<string[][]> {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:ZZ10000`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google Sheets API error: ${error}`);
  }

  const data = await response.json();
  return data.values || [];
}

async function listOneDriveFiles(
  accessToken: string,
  folderId?: string,
): Promise<unknown[]> {
  const path = folderId
    ? `/me/drive/items/${folderId}/children`
    : "/me/drive/root/children";

  const response = await fetch(`https://graph.microsoft.com/v1.0${path}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OneDrive API error: ${error}`);
  }

  const data = await response.json();
  return data.value || [];
}

async function readOneDriveFile(
  accessToken: string,
  fileId: string,
): Promise<string[][]> {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}/content`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OneDrive API error: ${error}`);
  }

  const text = await response.text();
  return parseCSV(text);
}

function parseCSV(text: string): string[][] {
  const lines = text.split("\n").filter((line) => line.trim());
  return lines.map((line) => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  const authHeader = req.headers.get("Authorization");
  const isValid = await verifyToken(authHeader);

  if (!isValid) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return jsonResponse(
      { error: "Too many requests. Please try again later." },
      429,
    );
  }

  const orgId = await getOrgIdFromToken(authHeader!);
  if (!orgId) {
    return jsonResponse({ error: "Organization not found" }, 400);
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  const { provider, action, folderId, fileId } = body as {
    provider?: string;
    action?: string;
    folderId?: string;
    fileId?: string;
  };

  if (!provider || (provider !== "google_drive" && provider !== "onedrive")) {
    return jsonResponse({ error: "Invalid provider" }, 400);
  }

  const config = await getCloudConfig(orgId, provider);
  if (!config) {
    return jsonResponse({ error: "Cloud not connected" }, 400);
  }

  const creds = JSON.parse(config.credentials);
  let accessToken = creds.accessToken;
  const refreshToken = creds.refreshToken;

  try {
    if (provider === "google_drive") {
      const tokens = await refreshGoogleToken(refreshToken);
      accessToken = tokens.accessToken;
    } else {
      const tokens = await refreshOneDriveToken(refreshToken);
      accessToken = tokens.accessToken;
    }
  } catch {
    return jsonResponse({ error: "Failed to refresh token" }, 401);
  }

  try {
    if (action === "list-files") {
      let files: unknown[];
      if (provider === "google_drive") {
        files = await listGoogleDriveFiles(accessToken, folderId);
      } else {
        files = await listOneDriveFiles(accessToken, folderId);
      }
      return jsonResponse({ files }, 200);
    }

    if (action === "read-file") {
      if (!fileId) {
        return jsonResponse({ error: "Missing fileId" }, 400);
      }

      let content: string[][];
      if (provider === "google_drive") {
        content = await readGoogleSheet(accessToken, fileId);
      } else {
        content = await readOneDriveFile(accessToken, fileId);
      }
      return jsonResponse({ content }, 200);
    }

    return jsonResponse({ error: "Invalid action" }, 400);
  } catch (err) {
    console.error("[cloud-files] Error:", err);
    return jsonResponse(
      { error: err instanceof Error ? err.message : "Unknown error" },
      500,
    );
  }
}

function jsonResponse(
  data: unknown,
  status: number,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      ...extraHeaders,
    },
  });
}

export const config = {
  runtime: "edge",
};
