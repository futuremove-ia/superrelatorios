import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn().mockReturnValue({
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi
            .fn()
            .mockResolvedValue({ data: { id: "doc-1" }, error: null }),
        }),
      }),
      select: vi.fn().mockImplementation(() => ({
        eq: vi.fn().mockImplementation(() => ({
          single: vi.fn().mockResolvedValue({ data: null, error: null }),
          limit: vi.fn().mockResolvedValue({ data: [], error: null }),
        })),
      })),
      update: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({ data: null, error: null }),
      }),
      delete: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({ data: null, error: null }),
      }),
    }),
  },
}));

vi.mock("@/infrastructure/rag/EmbeddingProvider", () => ({
  createEmbeddingProvider: vi.fn().mockReturnValue({
    embed: vi.fn().mockResolvedValue(new Array(384).fill(0.1)),
    embedBatch: vi
      .fn()
      .mockResolvedValue([new Array(384).fill(0.1), new Array(384).fill(0.2)]),
    dimensions: 384,
  }),
}));

import { RagService } from "./RagService";

describe("RagService", () => {
  let service: RagService;

  beforeEach(() => {
    service = new RagService({ provider: "local" });
  });

  describe("indexDocument", () => {
    it("should index a document", async () => {
      const docId = await service.indexDocument({
        organizationId: "org-1",
        title: "Test Document",
        content: "This is test content with revenue and sales data",
        sourceType: "upload",
      });

      expect(docId).toBeDefined();
    });
  });

  describe("search", () => {
    it("should search documents", async () => {
      const results = await service.search({
        organizationId: "org-1",
        query: "receita do mês",
        topK: 5,
      });

      expect(results).toBeDefined();
    });
  });

  describe("generateMultiQuery", () => {
    it("should generate query variations", () => {
      const variations = service.generateQueryVariations("receita do mês");

      expect(variations).toContain("receita do mês");
      expect(variations.length).toBeGreaterThan(1);
    });
  });
});
