import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getReportsByOrganization,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
} from "@/services/supabaseReportsService";
import { supabase } from "@/lib/supabase";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe("supabaseReportsService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getReportsByOrganization", () => {
    it("returns reports for a valid organization", async () => {
      const mockReports = [
        {
          id: "r1",
          organization_id: "org-1",
          user_id: "u1",
          title: "Report 1",
          description: "Desc 1",
          data_json: { category: "Executivo" },
          status: "completed",
          file_url: null,
          created_at: "2026-01-01",
          updated_at: "2026-01-02",
        },
      ];

      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: mockReports, error: null });
      const mockEq = vi.fn().mockReturnValue({ order: mockOrder });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getReportsByOrganization("org-1");

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("r1");
      expect(result[0].title).toBe("Report 1");
      expect(supabase.from).toHaveBeenCalledWith("reports");
    });

    it("returns empty array on error", async () => {
      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error("DB error") });
      const mockEq = vi.fn().mockReturnValue({ order: mockOrder });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getReportsByOrganization("org-1");

      expect(result).toEqual([]);
    });
  });

  describe("getReportById", () => {
    it("returns a single report", async () => {
      const mockReport = {
        id: "r1",
        organization_id: "org-1",
        user_id: "u1",
        title: "Report 1",
        description: "Desc 1",
        data_json: null,
        status: "draft",
        file_url: null,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      };

      const mockSingle = vi
        .fn()
        .mockResolvedValue({ data: mockReport, error: null });
      const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getReportById("r1");

      expect(result).not.toBeNull();
      expect(result?.id).toBe("r1");
    });

    it("returns null when report not found", async () => {
      const mockSingle = vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error("Not found") });
      const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getReportById("invalid");

      expect(result).toBeNull();
    });
  });

  describe("createReport", () => {
    it("creates a new report", async () => {
      const mockReport = {
        id: "r-new",
        organization_id: "org-1",
        user_id: "u1",
        title: "New Report",
        description: "New Desc",
        data_json: { templateId: "executive-strategic" },
        status: "draft",
        file_url: null,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      };

      const mockSingle = vi
        .fn()
        .mockResolvedValue({ data: mockReport, error: null });
      const mockSelect = vi.fn().mockReturnValue({ single: mockSingle });
      const mockInsert = vi.fn().mockReturnValue({ select: mockSelect });
      vi.mocked(supabase.from).mockReturnValue({ insert: mockInsert } as any);

      const result = await createReport(
        "org-1",
        "u1",
        "New Report",
        "New Desc",
        "executive-strategic",
      );

      expect(result).not.toBeNull();
      expect(result?.title).toBe("New Report");
    });

    it("returns null on creation error", async () => {
      const mockSingle = vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error("Insert failed") });
      const mockSelect = vi.fn().mockReturnValue({ single: mockSingle });
      const mockInsert = vi.fn().mockReturnValue({ select: mockSelect });
      vi.mocked(supabase.from).mockReturnValue({ insert: mockInsert } as any);

      const result = await createReport("org-1", "u1", "Fail", "Fail", "t1");

      expect(result).toBeNull();
    });
  });

  describe("updateReport", () => {
    it("updates a report successfully", async () => {
      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

      const result = await updateReport("r1", {
        title: "Updated",
        status: "completed",
      });

      expect(result).toBe(true);
    });

    it("returns false on update error", async () => {
      const mockEq = vi
        .fn()
        .mockResolvedValue({ error: new Error("Update failed") });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

      const result = await updateReport("r1", { title: "Fail" });

      expect(result).toBe(false);
    });
  });

  describe("deleteReport", () => {
    it("deletes a report successfully", async () => {
      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockDelete = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ delete: mockDelete } as any);

      const result = await deleteReport("r1");

      expect(result).toBe(true);
    });

    it("returns false on delete error", async () => {
      const mockEq = vi
        .fn()
        .mockResolvedValue({ error: new Error("Delete failed") });
      const mockDelete = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ delete: mockDelete } as any);

      const result = await deleteReport("r1");

      expect(result).toBe(false);
    });
  });
});
