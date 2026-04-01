import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getDiagnosticsByOrganization,
  getPrioritiesByOrganization,
  getActionsByOrganization,
  updateActionStatus,
} from "@/services/supabaseBusinessService";
import { supabase } from "@/lib/supabase";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe("supabaseBusinessService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getDiagnosticsByOrganization", () => {
    it("returns diagnostics filtered by organization and type=risk", async () => {
      const mockData = [
        {
          id: "d1",
          organization_id: "org-1",
          type: "risk",
          title: "Churn Alert",
          diagnosis_code: "DIAG_CHURN",
          severity: "high",
          priority_score: 8,
          domain: "commercial",
          status: "detected",
          detected_at: "2026-01-01",
          ai_confidence_score: 0.85,
          custom_notes: "5 clientes premium churned",
          ai_raw_analysis: { causes: ["cause1"], implications: ["imp1"] },
          created_at: "2026-01-01",
        },
      ];

      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: mockData, error: null });
      const mockEq2 = vi.fn().mockReturnValue({ order: mockOrder });
      const mockEq1 = vi.fn().mockReturnValue({ eq: mockEq2 });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq1 });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getDiagnosticsByOrganization("org-1");

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Churn Alert");
    });

    it("returns empty array on error", async () => {
      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error("DB error") });
      const mockEq2 = vi.fn().mockReturnValue({ order: mockOrder });
      const mockEq1 = vi.fn().mockReturnValue({ eq: mockEq2 });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq1 });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getDiagnosticsByOrganization("org-1");

      expect(result).toEqual([]);
    });
  });

  describe("getPrioritiesByOrganization", () => {
    it("returns priorities mapped from radar items", async () => {
      const mockData = [
        {
          id: "p1",
          organization_id: "org-1",
          type: "risk",
          title: "High Priority Risk",
          diagnosis_code: "DIAG_1",
          severity: "high",
          priority_score: 80,
          domain: "finance",
          status: "detected",
          detected_at: "2026-01-01",
          ai_confidence_score: 0.9,
          resolution_summary: "Fix needed",
          created_at: "2026-01-01",
        },
      ];

      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: mockData, error: null });
      const mockEq = vi.fn().mockReturnValue({ order: mockOrder });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getPrioritiesByOrganization("org-1");

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("High Priority Risk");
      expect(result[0].level).toBe("high");
      expect(result[0].status).toBe("suggested");
    });
  });

  describe("getActionsByOrganization", () => {
    it("returns actions for an organization", async () => {
      const mockData = [
        {
          id: "a1",
          organization_id: "org-1",
          radar_item_id: "r1",
          title: "Fix Churn",
          status: "pending",
          priority: 1,
          notes: "Create retention program",
          due_date: "2026-02-01",
          assigned_to: null,
          created_at: "2026-01-01",
          updated_at: "2026-01-01",
        },
      ];

      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: mockData, error: null });
      const mockEq = vi.fn().mockReturnValue({ order: mockOrder });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getActionsByOrganization("org-1");

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Fix Churn");
      expect(result[0].status).toBe("pending");
    });

    it("returns empty array on error", async () => {
      const mockOrder = vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error("DB error") });
      const mockEq = vi.fn().mockReturnValue({ order: mockOrder });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ select: mockSelect } as any);

      const result = await getActionsByOrganization("org-1");

      expect(result).toEqual([]);
    });
  });

  describe("updateActionStatus", () => {
    it("updates action status successfully", async () => {
      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

      const result = await updateActionStatus("a1", "completed");

      expect(result).toBe(true);
    });

    it("returns false on update error", async () => {
      const mockEq = vi
        .fn()
        .mockResolvedValue({ error: new Error("Update failed") });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      vi.mocked(supabase.from).mockReturnValue({ update: mockUpdate } as any);

      const result = await updateActionStatus("a1", "completed");

      expect(result).toBe(false);
    });
  });
});
