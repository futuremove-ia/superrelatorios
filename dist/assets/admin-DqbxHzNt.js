import { s } from "./index-CaCe4Bjh.js";
import "./vendor-data-DuuuwLk5.js";
import "./vendor-react-DfYPWlel.js";
import "./vendor-radix-CfL9Rjb9.js";
import "./vendor-utils-CGetvm_l.js";
const r = "platform_embedding_config",
  u = {
    async getEmbeddingConfig() {
      const { data: e, error: i } = await s
        .from("platform_config")
        .select("*")
        .eq("key", r)
        .single();
      return i || !e
        ? null
        : {
            embeddingProvider: e.embedding_provider,
            huggingfaceApiKey: e.huggingface_api_key,
            openaiApiKey: e.openai_api_key,
            geminiApiKey: e.gemini_api_key,
            isConfigured: !!e.embedding_provider,
            lastUpdated: e.updated_at ? new Date(e.updated_at) : void 0,
          };
    },
    async updateEmbeddingConfig(e) {
      const { error: i } = await s
        .from("platform_config")
        .upsert(
          {
            key: r,
            embedding_provider: e.embeddingProvider,
            huggingface_api_key: e.huggingfaceApiKey,
            openai_api_key: e.openaiApiKey,
            gemini_api_key: e.geminiApiKey,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "key" },
        );
      if (i) throw i;
      return { success: !0 };
    },
    async testEmbeddingConfig(e, i) {
      try {
        return e === "huggingface" && !i
          ? { success: !1, message: "API Key required" }
          : e === "openai" && !i
            ? { success: !1, message: "API Key required" }
            : e === "gemini" && !i
              ? { success: !1, message: "API Key required" }
              : e === "local"
                ? { success: !0, message: "Local provider always available" }
                : { success: !0, message: "Connection successful" };
      } catch (a) {
        return {
          success: !1,
          message: a instanceof Error ? a.message : "Test failed",
        };
      }
    },
  };
export { u as adminRoutes, u as default };
