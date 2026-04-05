import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("googleapis", () => ({
  google: {
    auth: {
      OAuth2: vi.fn().mockImplementation(() => ({
        setCredentials: vi.fn(),
        generateAuthUrl: vi.fn().mockResolvedValue("https://auth.url"),
        getToken: vi.fn().mockResolvedValue({
          tokens: {
            access_token: "test-access-token",
            refresh_token: "test-refresh-token",
          },
        }),
      })),
    },
    drive: vi.fn().mockReturnValue({
      files: {
        list: vi.fn().mockResolvedValue({
          data: {
            files: [
              {
                id: "file-1",
                name: "Test.xlsx",
                mimeType: "application/vnd.google-apps.spreadsheet",
                size: "1024",
                parents: ["root"],
              },
              {
                id: "file-2",
                name: "Document.pdf",
                mimeType: "application/pdf",
                size: "2048",
                parents: ["root"],
              },
            ],
          },
        }),
        get: vi.fn().mockResolvedValue({ data: {} }),
      },
    }),
    sheets: vi.fn().mockReturnValue({
      spreadsheets: {
        values: {
          get: vi.fn().mockResolvedValue({
            data: {
              values: [
                ["Header", "Data"],
                ["Value1", "Value2"],
              ],
            },
          }),
        },
      },
    }),
  },
}));

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

import { GoogleDriveAdapter } from "./GoogleDriveAdapter";
import { CloudProvider } from "@/domain/cloud/types";

describe("GoogleDriveAdapter", () => {
  let adapter: GoogleDriveAdapter;

  beforeEach(() => {
    adapter = new GoogleDriveAdapter(
      "test-access-token",
      "test-refresh-token",
      "org-123",
    );
  });

  describe("listFiles", () => {
    it("should list files from root folder", async () => {
      const files = await adapter.listFiles();

      expect(files).toHaveLength(2);
      expect(files[0].name).toBe("Test.xlsx");
      expect(files[0].mimeType).toBe("application/vnd.google-apps.spreadsheet");
    });

    it("should list files from specific folder", async () => {
      const files = await adapter.listFiles("folder-123");

      expect(files).toHaveLength(2);
    });
  });

  describe("readSpreadsheet", () => {
    it("should read Google Sheets content", async () => {
      const data = await adapter.readSpreadsheet("spreadsheet-id");

      expect(data).toEqual([
        ["Header", "Data"],
        ["Value1", "Value2"],
      ]);
    });
  });

  describe("getAuthUrl", () => {
    it("should generate OAuth URL", async () => {
      const url = await adapter.getAuthUrl();

      expect(url).toBe("https://auth.url");
    });
  });

  describe("exchangeCode", () => {
    it("should exchange code for tokens", async () => {
      const tokens = await adapter.exchangeCode("auth-code");

      expect(tokens.accessToken).toBe("test-access-token");
      expect(tokens.refreshToken).toBe("test-refresh-token");
    });
  });
});
