import { describe, it, expect, vi, beforeEach } from "vitest";
import { CloudConfigEntity } from "@/domain/cloud/entities/CloudConfig";

describe("CloudConfigEntity", () => {
  let entity: CloudConfigEntity;
  const now = new Date();

  beforeEach(() => {
    entity = new CloudConfigEntity(
      "test-id",
      "org-123",
      "google_drive",
      "encrypted-credentials",
      null,
      false,
      null,
      now,
      now,
    );
  });

  describe("isValid", () => {
    it("should return true when credentials exist", () => {
      expect(entity.isValid()).toBe(true);
    });

    it("should return false when organizationId is missing", () => {
      const invalid = new CloudConfigEntity(
        "test-id",
        "",
        "google_drive",
        "encrypted-credentials",
        null,
        false,
        null,
        now,
        now,
      );
      expect(invalid.isValid()).toBe(false);
    });

    it("should return false when credentials are empty", () => {
      const invalid = new CloudConfigEntity(
        "test-id",
        "org-123",
        "google_drive",
        "",
        null,
        false,
        null,
        now,
        now,
      );
      expect(invalid.isValid()).toBe(false);
    });
  });

  describe("static create", () => {
    it("should create entity with generated id", () => {
      const created = CloudConfigEntity.create({
        organizationId: "org-456",
        provider: "onedrive",
        credentials: "test-creds",
      });

      expect(created.id).toBeDefined();
      expect(created.organizationId).toBe("org-456");
      expect(created.provider).toBe("onedrive");
      expect(created.credentials).toBe("test-creds");
      expect(created.syncEnabled).toBe(false);
      expect(created.lastSyncAt).toBeNull();
    });
  });

  describe("enableSync", () => {
    it("should enable sync and update timestamp", () => {
      entity.enableSync();
      expect(entity.syncEnabled).toBe(true);
    });
  });

  describe("disableSync", () => {
    it("should disable sync", () => {
      entity.enableSync();
      entity.disableSync();
      expect(entity.syncEnabled).toBe(false);
    });
  });

  describe("updateLastSync", () => {
    it("should update lastSyncAt timestamp", () => {
      const before = entity.lastSyncAt;
      entity.updateLastSync();
      expect(entity.lastSyncAt).not.toBe(before);
    });
  });

  describe("setRootFolder", () => {
    it("should set root folder id", () => {
      entity.setRootFolder("folder-123");
      expect(entity.rootFolderId).toBe("folder-123");
    });
  });
});
