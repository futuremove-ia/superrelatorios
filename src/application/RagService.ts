import {
  createEmbeddingProvider,
  type EmbeddingProvider,
  type EmbeddingConfig,
} from "../infrastructure/rag/EmbeddingProvider";
import { DocumentParser } from "../infrastructure/rag/DocumentParser";
import { supabase } from "@/lib/supabase";

export interface IndexDocumentParams {
  organizationId: string;
  title: string;
  content: string;
  sourceType: "google_drive" | "onedrive" | "upload" | "manual";
  sourceId?: string;
  mimeType?: string;
}

export interface SearchParams {
  organizationId: string;
  query: string;
  topK?: number;
  filters?: Record<string, unknown>;
}

export interface SearchResult {
  documentId: string;
  title: string;
  chunkText: string;
  score: number;
}

export class RagService {
  private embeddingProvider: EmbeddingProvider;
  private parser: DocumentParser;
  private defaultTopK = 5;

  constructor(config: EmbeddingConfig) {
    this.embeddingProvider = createEmbeddingProvider(config);
    this.parser = new DocumentParser();
  }

  async indexDocument(params: IndexDocumentParams): Promise<string> {
    const { organizationId, title, content, sourceType, sourceId, mimeType } =
      params;

    const text = mimeType
      ? await this.parser.parse(Buffer.from(content), mimeType)
      : content;

    const { data: doc, error: docError } = await supabase
      .from("rag_documents")
      .insert({
        organization_id: organizationId,
        title,
        source_type: sourceType,
        source_id: sourceId,
        content_text: text,
        is_indexed: false,
      })
      .select()
      .single();

    if (docError || !doc)
      throw new Error(docError?.message || "Failed to create document");

    const chunks = this.chunkText(text, organizationId, doc.id);
    const embeddings = await this.embeddingProvider.embedBatch(
      chunks.map((c) => c.text),
    );

    const chunksToInsert = chunks.map((chunk, i) => ({
      document_id: doc.id,
      organization_id: organizationId,
      chunk_text: chunk.text,
      chunk_index: chunk.index,
      metadata: JSON.stringify(chunk.metadata),
      embedding: `[${embeddings[i].join(",")}]`,
    }));

    const { error: chunkError } = await supabase
      .from("rag_chunks")
      .insert(chunksToInsert);

    if (chunkError) throw new Error(chunkError.message);

    await supabase
      .from("rag_documents")
      .update({ is_indexed: true })
      .eq("id", doc.id);

    return doc.id;
  }

  async search(params: SearchParams): Promise<SearchResult[]> {
    const { organizationId, query, topK = this.defaultTopK, filters } = params;

    const queryVariations = this.generateQueryVariations(query);
    const queryEmbedding = await this.embeddingProvider.embed(
      queryVariations.join(" "),
    );

    const { data: chunks, error } = await supabase
      .from("rag_chunks")
      .select(
        "id, document_id, chunk_text, chunk_index, embedding, metadata, rag_documents!inner(title)",
      )
      .eq("organization_id", organizationId)
      .limit(topK * 3);

    if (error || !chunks) return [];

    const results = chunks
      .map((chunk) => ({
        ...chunk,
        title: (chunk as unknown as { "rag_documents.title": string })[
          "rag_documents.title"
        ],
        score: this.cosineSimilarity(
          queryEmbedding,
          this.parseEmbedding(chunk.embedding),
        ),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map((r) => ({
        documentId: r.document_id,
        title: r.title,
        chunkText: r.chunk_text,
        score: r.score,
      }));

    return results;
  }

  async deleteDocument(documentId: string): Promise<void> {
    await supabase.from("rag_documents").delete().eq("id", documentId);
  }

  generateQueryVariations(query: string): string[] {
    const variations: string[] = [query];

    const translations: Record<string, string[]> = {
      receita: ["faturamento", "vendas", "renda", "income", "revenue"],
      vendas: ["sales", "venda", "transactions", "commercial"],
      lucro: ["profit", "earnings", "gain"],
      custo: ["cost", "despesa", "expense", "gasto"],
      cliente: ["customer", "client", "buyer", "consumidor"],
      fornecedor: ["supplier", "vendor", "provider"],
      estoque: ["inventory", "stock", "goods"],
      funcionario: ["employee", "staff", "worker"],
      dívida: ["debt", "liability", "loan"],
      faturamento: ["revenue", "billing"],
      margem: ["margin", "profitability"],
      mês: ["month", "mensal"],
      ano: ["year", "anual"],
    };

    const lowerQuery = query.toLowerCase();

    for (const [pt, enVars] of Object.entries(translations)) {
      if (lowerQuery.includes(pt)) {
        for (const en of enVars) {
          variations.push(query.replace(new RegExp(pt, "gi"), en));
          variations.push(query.replace(new RegExp(en, "gi"), pt));
        }
      }
    }

    return [...new Set(variations)].slice(0, 8);
  }

  private chunkText(
    text: string,
    organizationId: string,
    documentId: string,
  ): { text: string; index: number; metadata: Record<string, unknown> }[] {
    const CHUNK_SIZE = 500;
    const OVERLAP = 50;
    const words = text.split(/\s+/);
    const chunks: {
      text: string;
      index: number;
      metadata: Record<string, unknown>;
    }[] = [];

    for (let i = 0; i < words.length; i += CHUNK_SIZE - OVERLAP) {
      const chunkWords = words.slice(i, i + CHUNK_SIZE);
      if (chunkWords.length > 0) {
        chunks.push({
          text: chunkWords.join(" "),
          index: Math.floor(i / (CHUNK_SIZE - OVERLAP)),
          metadata: { documentId, organizationId },
        });
      }
    }

    return chunks;
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length || a.length === 0) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    return denominator === 0 ? 0 : dotProduct / denominator;
  }

  private parseEmbedding(embeddingStr: string): number[] {
    if (!embeddingStr)
      return new Array(this.embeddingProvider.dimensions).fill(0);

    try {
      const match = embeddingStr.match(/\[(.*)\]/);
      if (match) {
        return match[1].split(",").map(Number);
      }
      return new Array(this.embeddingProvider.dimensions).fill(0);
    } catch {
      return new Array(this.embeddingProvider.dimensions).fill(0);
    }
  }
}

export function createRagService(
  config?: Partial<EmbeddingConfig>,
): RagService {
  return new RagService({
    provider:
      config?.provider ||
      (process.env.HUGGINGFACE_API_KEY ? "huggingface" : "local"),
    apiKey: config?.apiKey,
    model: config?.model,
  });
}
