import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  createFinancialDocumentPipeline,
  FinancialDocumentPipeline,
} from "../financialDocumentPipeline";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    storage: {
      from: vi.fn(() => ({
        upload: vi.fn(() =>
          Promise.resolve({ data: { path: "test-path" }, error: null }),
        ),
        createSignedUrl: vi.fn(() =>
          Promise.resolve({
            data: { signedUrl: "https://test.url" },
            error: null,
          }),
        ),
      })),
    },
  },
}));

vi.mock("../unstructuredService", () => ({
  unstructuredClient: {
    extractElements: vi.fn(() =>
      Promise.resolve([
        {
          type: "Table",
          text: "Data,Valor\n2024-01-01,1000",
          metadata: {
            table_as_json: JSON.stringify([
              { Data: "2024-01-01", Valor: 1000 },
            ]),
          },
        },
      ]),
    ),
    extractFromStorage: vi.fn(() =>
      Promise.resolve([
        {
          type: "Table",
          text: "Data,Valor\n2024-01-01,1000",
          metadata: {
            table_as_json: JSON.stringify([
              { Data: "2024-01-01", Valor: 1000 },
            ]),
          },
        },
      ]),
    ),
  },
}));

describe("FinancialDocumentPipeline", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("processFile", () => {
    it("should process a CSV file and return result", async () => {
      const pipeline = createFinancialDocumentPipeline({
        organizationId: "org-123",
        userId: "user-456",
        strategy: "auto",
        onProgress: vi.fn(),
      });

      const csvContent = "Data,Valor\n2024-01-01,1000";
      const file = new File([csvContent], "test.csv", { type: "text/csv" });

      const result = await pipeline.processFile(file);

      expect(result.documentType).toBeDefined();
      expect(result.processingTime).toBeGreaterThan(0);
      expect(result.elements.length).toBeGreaterThan(0);
    });

    it("should track progress during processing", async () => {
      const progressCalls: Array<{ progress: number; message: string }> = [];

      const pipeline = createFinancialDocumentPipeline({
        organizationId: "org-123",
        userId: "user-456",
        onProgress: (progress, message) => {
          progressCalls.push({ progress, message });
        },
      });

      const csvContent = "Data,Valor\n2024-01-01,1000";
      const file = new File([csvContent], "test.csv", { type: "text/csv" });

      await pipeline.processFile(file);

      expect(progressCalls.length).toBeGreaterThan(0);
      expect(progressCalls.some((p) => p.progress === 100)).toBe(true);
    });
  });

  describe("processStorageFile", () => {
    it("should process a file from storage successfully", async () => {
      const pipeline = createFinancialDocumentPipeline({
        organizationId: "org-123",
        userId: "user-456",
      });

      const result = await pipeline.processStorageFile("uploads/test.pdf");

      expect(result.success).toBe(true);
      expect(result.elements.length).toBeGreaterThan(0);
    });
  });

  describe("validateFileType", () => {
    function validateFileType(file: File): {
      valid: boolean;
      type?: string;
      error?: string;
    } {
      const extension = "." + file.name.split(".").pop()?.toLowerCase();
      const supportedExtensions = [
        ".pdf",
        ".doc",
        ".docx",
        ".xls",
        ".xlsx",
        ".ppt",
        ".pptx",
        ".csv",
        ".txt",
        ".eml",
        ".msg",
        ".html",
        ".json",
        ".png",
        ".jpg",
        ".jpeg",
        ".tiff",
        ".bmp",
      ];

      if (!supportedExtensions.includes(extension)) {
        return {
          valid: false,
          error: `Tipo de arquivo não suportado: ${extension}. Arquivos permitidos: ${supportedExtensions.join(", ")}`,
        };
      }

      const MAX_FILE_SIZE = 50 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        return {
          valid: false,
          error: `Arquivo muito grande. Máximo: 50MB`,
        };
      }

      return { valid: true, type: extension.slice(1) };
    }

    it("should validate PDF files", () => {
      const file = new File([""], "test.pdf", { type: "application/pdf" });
      const result = validateFileType(file);

      expect(result.valid).toBe(true);
      expect(result.type).toBe("pdf");
    });

    it("should validate Excel files", () => {
      const file = new File([""], "test.xlsx", {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const result = validateFileType(file);

      expect(result.valid).toBe(true);
      expect(result.type).toBe("xlsx");
    });

    it("should reject unsupported file types", () => {
      const file = new File([""], "test.exe", {
        type: "application/x-executable",
      });
      const result = validateFileType(file);

      expect(result.valid).toBe(false);
      expect(result.error).toContain("não suportado");
    });

    it("should reject files larger than 50MB", () => {
      const largeContent = "x".repeat(51 * 1024 * 1024);
      const file = new File([largeContent], "large.csv", { type: "text/csv" });
      const result = validateFileType(file);

      expect(result.valid).toBe(false);
      expect(result.error).toContain("muito grande");
    });

    it("should validate DOCX files", () => {
      const file = new File([""], "test.docx", {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const result = validateFileType(file);

      expect(result.valid).toBe(true);
      expect(result.type).toBe("docx");
    });

    it("should validate image files with OCR support", () => {
      const pngFile = new File([""], "test.png", { type: "image/png" });
      const jpgFile = new File([""], "test.jpg", { type: "image/jpeg" });

      expect(validateFileType(pngFile).valid).toBe(true);
      expect(validateFileType(jpgFile).valid).toBe(true);
    });
  });
});
