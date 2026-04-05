import { jwtVerify, createRemoteJWKSet } from "jose";
import { isRateLimited, getIp } from "./utils/rate-limit.js";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

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

async function saveCloudConfig(
  orgId: string,
  provider: string,
  credentials: string,
): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    throw new Error("Supabase not configured");
  }

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/cloud_storage_configs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        Prefer: "resolution=merge",
      },
      body: JSON.stringify({
        organization_id: orgId,
        provider,
        credentials,
        is_valid: true,
        updated_at: new Date().toISOString(),
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("[google-drive-oauth] Failed to save config:", error);
    throw new Error("Failed to save credentials");
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

async function deleteCloudConfig(
  orgId: string,
  provider: string,
): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    throw new Error("Supabase not configured");
  }

  await fetch(
    `${SUPABASE_URL}/rest/v1/cloud_storage_configs?organization_id=eq.${orgId}&provider=eq.${provider}`,
    {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    },
  );
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

  if (req.method === "GET") {
    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (action === "auth-url") {
      if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URI) {
        return jsonResponse({ error: "Google OAuth not configured" }, 503);
      }

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent("https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly")}&access_type=offline&state=${orgId}`;

      return jsonResponse({ authUrl }, 200);
    }

    if (action === "status") {
      const config = await getCloudConfig(orgId, "google_drive");
      return jsonResponse({ connected: !!config }, 200);
    }

    return jsonResponse({ error: "Invalid action" }, 400);
  }

  if (req.method === "POST") {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON body." }, 400);
    }

    const { action } = body as { action?: string };

    if (action === "connect") {
      const { code } = body as { code?: string };
      if (!code) {
        return jsonResponse({ error: "Missing authorization code" }, 400);
      }

      if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
        return jsonResponse({ error: "Google OAuth not configured" }, 503);
      }

      try {
        const tokenResponse = await fetch(
          "https://oauth2.googleapis.com/token",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              client_id: GOOGLE_CLIENT_ID,
              client_secret: GOOGLE_CLIENT_SECRET,
              code,
              grant_type: "authorization_code",
              redirect_uri: GOOGLE_REDIRECT_URI,
            }),
          },
        );

        if (!tokenResponse.ok) {
          const error = await tokenResponse.text();
          console.error("[google-drive-oauth] Token exchange failed:", error);
          return jsonResponse({ error: "Failed to exchange code" }, 400);
        }

        const tokens = await tokenResponse.json();
        const credentials = JSON.stringify({
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
        });

        await saveCloudConfig(orgId, "google_drive", credentials);

        return jsonResponse({ success: true }, 200);
      } catch (err) {
        console.error("[google-drive-oauth] Connect error:", err);
        return jsonResponse({ error: "Failed to connect" }, 500);
      }
    }

    if (action === "disconnect") {
      await deleteCloudConfig(orgId, "google_drive");
      return jsonResponse({ success: true }, 200);
    }

    return jsonResponse({ error: "Invalid action" }, 400);
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
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
