import { describe, it, expect, beforeEach } from "vitest";
import { RagChunkEntity } from "./RagChunk";

describe("RagChunkEntity", () => {
  let entity: RagChunkEntity;
  const now = new Date();

  beforeEach(() => {
    entity = new RagChunkEntity(
      "chunk-1",
      "doc-1",
      "org-123",
      "This is chunk number one",
      0,
      { strategy: "fixed" },
      null,
      now,
    );
  });

  describe("embedding", () => {
    it("should be null initially", () => {
      expect(entity.embedding).toBeNull();
    });
  });

  describe("static create", () => {
    it("should create entity with generated id", () => {
      const created = RagChunkEntity.create({
        documentId: "doc-1",
        organizationId: "org-123",
        chunkText: "Test chunk",
        chunkIndex: 0,
      });

      expect(created.id).toBeDefined();
      expect(created.chunkText).toBe("Test chunk");
    });

    it("should accept optional metadata", () => {
      const created = RagChunkEntity.create({
        documentId: "doc-1",
        organizationId: "org-123",
        chunkText: "Test chunk",
        chunkIndex: 0,
        metadata: { page: 1, source: "file.pdf" },
      });

      expect(created.metadata.page).toBe(1);
    });
  });

  describe("setEmbedding", () => {
    it("should set embedding vector", () => {
      const embedding = [0.1, 0.2, 0.3, 0.4];
      entity.setEmbedding(embedding);

      expect(entity.embedding).toEqual(embedding);
    });
  });
});
