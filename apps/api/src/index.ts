import { serve } from "@hono/node-server";
import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { v4 as uuidv4 } from "uuid";
import { ParserManager } from "@superrelatorios/parser";
import { ingestionDb } from "./services/supabase";

const app = new Hono();

const CORS_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") || [
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  "*",
  cors({
    origin: (origin) => {
      if (!origin || CORS_ORIGINS.includes(origin)) {
        return origin || CORS_ORIGINS[0];
      }
      return CORS_ORIGINS[0];
    },
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Request-Id"],
    credentials: true,
    maxAge: 86400,
  }),
);

// Rota de Diagnóstico do Motor
app.get("/health", (c: Context) => {
  return c.json({
    status: "ok",
    version: "1.0.0-alpha",
    system: "SuperRelatorios Intelligence Motor",
  });
});

// Orquestrador do Parser (Integrado com sua inteligência anterior)
const parserManager = new ParserManager({
  unstructuredApiKey: process.env.UNSTRUCTURED_API_KEY,
});

// Endpoint de Ingestão de Dados (Onde a mágica acontece)
app.post("/api/v1/ingestion/process", async (c: Context) => {
  try {
    const body = await c.req.parseBody();
    const file = body["file"] as any;
    const organizationId = (body["organizationId"] as string) || "default-org";

    if (!file || !file.arrayBuffer) {
      return c.json({ error: "Nenhum arquivo válido enviado." }, 400);
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const kpis = await parserManager.processFile(buffer, file.name);

    // 1. Criar o DataSource para rastreabilidade
    const source = await ingestionDb.createDataSource({
      id: uuidv4(),
      organization_id: organizationId,
      name: file.name,
      type: "file",
      status: "active",
      metadata: {
        size: file.size,
        extension: file.name?.split(".").pop(),
        mimeType: file.type,
      },
    });

    // 2. Persistência Silenciosa (Best Practice: Auto-sync high confidence)
    const highConfidenceKPIs = kpis.filter((k: any) => k.confidence >= 0.8);

    if (highConfidenceKPIs.length > 0) {
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        .toISOString()
        .split("T")[0];
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
        .toISOString()
        .split("T")[0];
      const referencePeriod = now.toISOString().substring(0, 7);

      const entries = highConfidenceKPIs.map((k: any) => ({
        organization_id: organizationId,
        source_file_id: source.id,
        kpi_code: k.code,
        value: k.value,
        unit: k.unit || "count",
        extracted_confidence: k.confidence,
        is_verified: true,
        reference_period: referencePeriod,
        period_start: firstDayOfMonth,
        period_end: lastDayOfMonth,
      }));

      await ingestionDb.saveKPIEntries(entries);
    }

    return c.json({
      success: true,
      filename: file.name,
      source_id: source.id,
      extracted_at: new Date().toISOString(),
      auto_synced: highConfidenceKPIs.length > 0,
      synced_count: highConfidenceKPIs.length,
      kpis,
    });
  } catch (error) {
    console.error("Falha no Ingestion:", error);
    return c.json({ error: "Falha durante o processamento do arquivo." }, 500);
  }
});

const port = 3333;
console.log(`🚀 Motor de Inteligência rodando em: http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
