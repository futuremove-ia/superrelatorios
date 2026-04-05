export interface EmbeddingProvider {
  embed(text: string): Promise<number[]>;
  embedBatch(texts: string[]): Promise<number[][]>;
  dimensions: number;
}

export type EmbeddingProviderType =
  | "huggingface"
  | "openai"
  | "gemini"
  | "local";

export interface EmbeddingConfig {
  provider: EmbeddingProviderType;
  apiKey?: string;
  model?: string;
}

export function createEmbeddingProvider(
  config: EmbeddingConfig,
): EmbeddingProvider {
  switch (config.provider) {
    case "huggingface":
      return new HuggingFaceProvider(config.apiKey, config.model);
    case "openai":
      return new OpenAIProvider(config.apiKey, config.model);
    case "gemini":
      return new GeminiProvider(config.apiKey, config.model);
    case "local":
    default:
      return new LocalProvider();
  }
}

class HuggingFaceProvider implements EmbeddingProvider {
  dimensions = 384;
  private apiKey: string;
  private model = "BAAI/bge-small-en-v1.5";

  constructor(apiKey?: string, model?: string) {
    this.apiKey = apiKey || process.env.HUGGINGFACE_API_KEY || "";
    if (model) this.model = model;
    if (!this.apiKey) {
      console.warn("[HuggingFaceProvider] No API key, using fallback");
    }
  }

  async embed(text: string): Promise<number[]> {
    if (!this.apiKey) return new LocalProvider().embed(text);

    const response = await fetch(
      `https://api-inference.huggingface.com/pipeline/feature-extraction/${this.model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: text, options: { normalize: true } }),
      },
    );

    if (!response.ok) {
      console.error("[HuggingFaceProvider] Error:", await response.text());
      return new LocalProvider().embed(text);
    }

    const embedding = await response.json();
    return Array.isArray(embedding)
      ? embedding
      : new LocalProvider().embed(text);
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    return Promise.all(texts.map((t) => this.embed(t)));
  }
}

class OpenAIProvider implements EmbeddingProvider {
  dimensions = 1536;
  private apiKey: string;
  private model = "text-embedding-3-small";

  constructor(apiKey?: string, model?: string) {
    this.apiKey = apiKey || process.env.OPENAI_API_KEY || "";
    if (model) this.model = model;
  }

  async embed(text: string): Promise<number[]> {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: this.model, input: text }),
    });

    if (!response.ok) {
      console.error("[OpenAIProvider] Error:", await response.text());
      return new LocalProvider().embed(text);
    }

    const data = await response.json();
    return data.data?.[0]?.embedding || new LocalProvider().embed(text);
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: this.model, input: texts }),
    });

    if (!response.ok) {
      return Promise.all(texts.map((t) => this.embed(t)));
    }

    const data = await response.json();
    return (data.data || []).map((d: { embedding: number[] }) => d.embedding);
  }
}

class GeminiProvider implements EmbeddingProvider {
  dimensions = 768;
  private apiKey: string;
  private model = "gemini-embedding-001";

  constructor(apiKey?: string, model?: string) {
    this.apiKey = apiKey || process.env.GEMINI_API_KEY || "";
    if (model) this.model = model;
  }

  async embed(text: string): Promise<number[]> {
    const url = `https://generativelanguage.googleapis.com/v1/models/${this.model}:embedContent?key=${this.apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { role: "user", parts: [{ text }] },
        taskType: "SEMANTIC_SIMILARITY",
      }),
    });

    if (!response.ok) {
      console.error("[GeminiProvider] Error:", await response.text());
      return new LocalProvider().embed(text);
    }

    const data = await response.json();
    return data.embedding?.values || new LocalProvider().embed(text);
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    return Promise.all(texts.map((t) => this.embed(t)));
  }
}

class LocalProvider implements EmbeddingProvider {
  dimensions = 384;

  async embed(text: string): Promise<number[]> {
    const hash = this.simpleHash(text);
    const embedding = new Array(this.dimensions).fill(0);

    for (let i = 0; i < this.dimensions; i++) {
      embedding[i] = Math.sin(hash * (i + 1)) * Math.cos(hash * (i + 2));
    }

    const magnitude = Math.sqrt(
      embedding.reduce((sum, val) => sum + val * val, 0),
    );
    return magnitude > 0 ? embedding.map((val) => val / magnitude) : embedding;
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    const results: number[][] = [];
    for (const text of texts) {
      results.push(await this.embed(text));
    }
    return results;
  }

  private simpleHash(text: string): number {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = (hash << 5) - hash + text.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash);
  }
}
