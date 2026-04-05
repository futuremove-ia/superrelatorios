import { describe, it, expect, beforeEach } from "vitest";
import { RagDocumentEntity } from "./RagDocument";

describe("RagDocumentEntity", () => {
  let entity: RagDocumentEntity;
  const now = new Date();

  beforeEach(() => {
    entity = new RagDocumentEntity(
      "doc-1",
      "org-123",
      "Financial Report 2024",
      "upload",
      "source-1",
      "This is the content of the document",
      false,
      now,
      now,
    );
  });

  describe("isIndexed", () => {
    it("should return false initially", () => {
      expect(entity.isIndexed).toBe(false);
    });
  });

  describe("static create", () => {
    it("should create entity with generated id", () => {
      const created = RagDocumentEntity.create({
        organizationId: "org-456",
        title: "Test Document",
        sourceType: "upload",
        contentText: "Some content",
      });

      expect(created.id).toBeDefined();
      expect(created.title).toBe("Test Document");
      expect(created.isIndexed).toBe(false);
    });

    it("should accept optional sourceId", () => {
      const created = RagDocumentEntity.create({
        organizationId: "org-456",
        title: "Test Document",
        sourceType: "google_drive",
        sourceId: "drive-file-123",
        contentText: "Some content",
      });

      expect(created.sourceId).toBe("drive-file-123");
    });
  });

  describe("markAsIndexed", () => {
    it("should set isIndexed to true", () => {
      entity.markAsIndexed();
      expect(entity.isIndexed).toBe(true);
    });

    it("should update updatedAt timestamp", () => {
      const oldUpdatedAt = entity.updatedAt;
      entity.markAsIndexed();
      expect(entity.updatedAt.getTime()).toBeGreaterThan(
        oldUpdatedAt.getTime(),
      );
    });
  });
});
