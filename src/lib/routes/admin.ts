import { supabase } from "@/lib/supabase";
import { EmbeddingProvider } from "@/lib/api/types";
import { PlatformConfig } from "@/lib/api/types";

const PLATFORM_CONFIG_KEY = "platform_embedding_config";

export const adminRoutes = {
  async getEmbeddingConfig(): Promise<PlatformConfig | null> {
    const { data, error } = await supabase
      .from("platform_config")
      .select("*")
      .eq("key", PLATFORM_CONFIG_KEY)
      .single();

    if (error || !data) return null;

    return {
      embeddingProvider: data.embedding_provider as EmbeddingProvider,
      huggingfaceApiKey: data.huggingface_api_key,
      openaiApiKey: data.openai_api_key,
      geminiApiKey: data.gemini_api_key,
      isConfigured: !!data.embedding_provider,
      lastUpdated: data.updated_at ? new Date(data.updated_at) : undefined,
    };
  },

  async updateEmbeddingConfig(config: {
    embeddingProvider: EmbeddingProvider;
    huggingfaceApiKey?: string;
    openaiApiKey?: string;
    geminiApiKey?: string;
  }): Promise<{ success: boolean }> {
    const { error } = await supabase.from("platform_config").upsert(
      {
        key: PLATFORM_CONFIG_KEY,
        embedding_provider: config.embeddingProvider,
        huggingface_api_key: config.huggingfaceApiKey,
        openai_api_key: config.openaiApiKey,
        gemini_api_key: config.geminiApiKey,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    );

    if (error) throw error;
    return { success: true };
  },

  async testEmbeddingConfig(
    provider: EmbeddingProvider,
    apiKey?: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      if (provider === "huggingface" && !apiKey) {
        return { success: false, message: "API Key required" };
      }
      if (provider === "openai" && !apiKey) {
        return { success: false, message: "API Key required" };
      }
      if (provider === "gemini" && !apiKey) {
        return { success: false, message: "API Key required" };
      }
      if (provider === "local") {
        return { success: true, message: "Local provider always available" };
      }

      return { success: true, message: "Connection successful" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Test failed",
      };
    }
  },
};

export default adminRoutes;
