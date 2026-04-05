import { describe, it, expect, vi, beforeEach } from "vitest";
import { CloudFileEntity } from "@/domain/cloud/entities/CloudFile";

describe("CloudFileEntity", () => {
  describe("isSpreadsheet", () => {
    it("should return true for Google Sheets", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "data.xlsx",
        "application/vnd.google-apps.spreadsheet",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isSpreadsheet()).toBe(true);
    });

    it("should return true for Excel files", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "onedrive",
        "file-1",
        "data.xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isSpreadsheet()).toBe(true);
    });

    it("should return true for CSV", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "data.csv",
        "text/csv",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isSpreadsheet()).toBe(true);
    });

    it("should return false for PDF", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "doc.pdf",
        "application/pdf",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isSpreadsheet()).toBe(false);
    });
  });

  describe("isGoogleSheet", () => {
    it("should return true for Google Sheets", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "data",
        "application/vnd.google-apps.spreadsheet",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isGoogleSheet()).toBe(true);
    });

    it("should return false for Excel", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "onedrive",
        "file-1",
        "data.xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isGoogleSheet()).toBe(false);
    });
  });

  describe("isPDF", () => {
    it("should return true for PDF files", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "doc.pdf",
        "application/pdf",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.isPDF()).toBe(true);
    });
  });

  describe("getExtension", () => {
    it("should return file extension", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "document.xlsx",
        "application/vnd.google-apps.spreadsheet",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.getExtension()).toBe("xlsx");
    });

    it("should return empty string for files without extension", () => {
      const file = new CloudFileEntity(
        "id-1",
        "org-1",
        "google_drive",
        "file-1",
        "README",
        "text/plain",
        null,
        null,
        null,
        new Date(),
      );
      expect(file.getExtension()).toBe("");
    });
  });

  describe("static create", () => {
    it("should create entity with generated id", () => {
      const created = CloudFileEntity.create({
        organizationId: "org-456",
        provider: "google_drive",
        externalFileId: "file-123",
        fileName: "test.xlsx",
        mimeType: "application/vnd.google-apps.spreadsheet",
      });

      expect(created.id).toBeDefined();
      expect(created.fileName).toBe("test.xlsx");
      expect(created.isSpreadsheet()).toBe(true);
    });
  });
});
