import { describe, it, expect, vi, beforeEach } from "vitest";
import { CloudConfigEntity } from "@/domain/cloud/entities/CloudConfig";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: null, error: null }),
        }),
      }),
      upsert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: {}, error: null }),
        }),
      }),
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: {}, error: null }),
        }),
      }),
      delete: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({ data: null, error: null }),
      }),
    }),
  },
}));

import { CloudStorageConfigRepository } from "./CloudStorageConfigRepository";

describe("CloudStorageConfigRepository", () => {
  let repository: CloudStorageConfigRepository;
  const now = new Date();

  beforeEach(() => {
    repository = new CloudStorageConfigRepository();
  });

  describe("findByOrgAndProvider", () => {
    it("should return null when no config exists", async () => {
      const { CloudConfigEntity: MockEntity } =
        await import("@/domain/cloud/entities/CloudConfig");

      const result = await repository.findByOrgAndProvider(
        "org-123",
        "google_drive",
      );
      expect(result).toBeNull();
    });
  });

  describe("save", () => {
    it("should save Google Drive config", async () => {
      const entity = new CloudConfigEntity(
        "test-id",
        "org-123",
        "google_drive",
        "encrypted-creds",
        null,
        false,
        null,
        now,
        now,
      );

      await expect(
        repository.save(entity, "google_drive"),
      ).resolves.not.toThrow();
    });

    it("should save OneDrive config", async () => {
      const entity = new CloudConfigEntity(
        "test-id",
        "org-123",
        "onedrive",
        "encrypted-creds",
        null,
        false,
        null,
        now,
        now,
      );

      await expect(repository.save(entity, "onedrive")).resolves.not.toThrow();
    });
  });

  describe("delete", () => {
    it("should delete Google Drive config", async () => {
      await expect(
        repository.delete("org-123", "google_drive"),
      ).resolves.not.toThrow();
    });

    it("should delete OneDrive config", async () => {
      await expect(
        repository.delete("org-123", "onedrive"),
      ).resolves.not.toThrow();
    });
  });
});
