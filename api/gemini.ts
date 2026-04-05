import { jwtVerify, createRemoteJWKSet } from "jose";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
const ALLOWED_ORIGIN =
  process.env.NEXT_PUBLIC_APP_URL || "https://superrelatorios.vercel.app";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const MAX_PAYLOAD_SIZE = 1024 * 1024; // 1MB

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

// Rate limiting simples em memória (por IP — em produção use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // 20 req/minuto por IP
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export default async function handler(req: Request): Promise<Response> {
  // CORS pre-flight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
    return jsonResponse(
      { error: "Payload too large. Maximum 1MB allowed." },
      413,
    );
  }

  const authHeader = req.headers.get("Authorization");
  const isValid = await verifyToken(authHeader);
  if (!isValid) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  // Rate limiting por IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return jsonResponse(
      { error: "Too many requests. Please try again later." },
      429,
    );
  }

  // Verificar que a API key está configurada no servidor
  if (!GEMINI_API_KEY) {
    console.error("[gemini-proxy] GEMINI_API_KEY not configured on server");
    return jsonResponse({ error: "AI service is not configured." }, 503);
  }

  // Parse do body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  // Validação básica de payload
  const { contents, generationConfig } = body as {
    contents?: unknown;
    generationConfig?: unknown;
  };
  if (!contents) {
    return jsonResponse({ error: "Missing required field: contents" }, 400);
  }

  try {
    const geminiResponse = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents, generationConfig }),
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("[gemini-proxy] Gemini API error:", data);
      return jsonResponse(
        { error: data?.error?.message || "Gemini API error" },
        geminiResponse.status,
      );
    }

    return jsonResponse(data, 200, {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    });
  } catch (err) {
    console.error("[gemini-proxy] Upstream fetch failed:", err);
    return jsonResponse({ error: "Failed to reach AI service." }, 502);
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
