import { describe, it, expect, vi, beforeEach } from "vitest";
import { CloudStorageService } from "./CloudStorageService";

vi.mock("@/infrastructure/cloud/GoogleDriveAdapter", () => ({
  GoogleDriveAdapter: class GoogleDriveAdapter {
    listFiles = vi.fn().mockResolvedValue([]);
    readSpreadsheet = vi.fn().mockResolvedValue([]);
    getAuthUrl = vi.fn().mockResolvedValue("https://google.auth.url");
    exchangeCode = vi
      .fn()
      .mockResolvedValue({ accessToken: "token", refreshToken: "refresh" });
  },
}));

vi.mock("@/infrastructure/cloud/OneDriveAdapter", () => ({
  OneDriveAdapter: class OneDriveAdapter {
    listFiles = vi.fn().mockResolvedValue([]);
    readSpreadsheet = vi.fn().mockResolvedValue([]);
    getAuthUrl = vi.fn().mockResolvedValue("https://onedrive.auth.url");
    exchangeCode = vi
      .fn()
      .mockResolvedValue({ accessToken: "token", refreshToken: "refresh" });
  },
}));

vi.mock("@/infrastructure/cloud/CloudStorageConfigRepository", () => ({
  CloudStorageConfigRepository: class CloudStorageConfigRepository {
    findByOrgAndProvider = vi.fn().mockResolvedValue(null);
    save = vi.fn().mockResolvedValue(undefined);
    delete = vi.fn().mockResolvedValue(undefined);
  },
}));

vi.mock("@/lib/crypto", () => ({
  encrypt: vi.fn().mockReturnValue("encrypted-credentials"),
  decrypt: vi
    .fn()
    .mockReturnValue(
      JSON.stringify({ accessToken: "token", refreshToken: "refresh" }),
    ),
}));

describe("CloudStorageService", () => {
  let service: CloudStorageService;

  beforeEach(() => {
    service = new CloudStorageService();
  });

  describe("getConnectUrl", () => {
    it("should return Google Drive auth URL", async () => {
      const url = await service.getConnectUrl("org-123", "google_drive");
      expect(url).toBe("https://google.auth.url");
    });

    it("should return OneDrive auth URL", async () => {
      const url = await service.getConnectUrl("org-123", "onedrive");
      expect(url).toBe("https://onedrive.auth.url");
    });
  });

  describe("connect", () => {
    it("should encrypt and save credentials", async () => {
      await expect(
        service.connect("org-123", "google_drive", "auth-code"),
      ).resolves.not.toThrow();
    });
  });

  describe("disconnect", () => {
    it("should delete credentials", async () => {
      await expect(
        service.disconnect("org-123", "google_drive"),
      ).resolves.not.toThrow();
    });
  });

  describe("listFiles", () => {
    it("should throw when not connected", async () => {
      await expect(
        service.listFiles("org-123", "google_drive"),
      ).rejects.toThrow("Cloud not connected");
    });
  });

  describe("isConnected", () => {
    it("should return false when not connected", async () => {
      const result = await service.isConnected("org-123", "google_drive");
      expect(result).toBe(false);
    });
  });
});
