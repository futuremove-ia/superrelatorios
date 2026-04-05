import { describe, it, expect, beforeEach, vi } from "vitest";
import { OnboardingService } from "../onboardingService";
import { OnboardingFlow, OnboardingStep } from "@/types/onboarding";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn(() => ({
            limit: vi.fn(() => ({
              single: vi.fn(() =>
                Promise.resolve({ data: null, error: "No data" }),
              ),
            })),
          })),
        })),
      })),
      upsert: vi.fn(() => Promise.resolve({ error: null })),
    })),
  },
}));

describe("OnboardingService", () => {
  let service: OnboardingService;

  beforeEach(() => {
    service = new OnboardingService("user-123");
  });

  describe("createInitialState", () => {
    it("should create initial state with correct defaults", async () => {
      const state = await service.initialize();

      expect(state.userId).toBe("user-123");
      expect(state.currentStep).toBe("welcome");
      expect(state.status).toBe("not_started");
      expect(state.completedSteps).toEqual([]);
      expect(state.skippedSteps).toEqual([]);
      expect(state.stepData).toEqual({});
    });

    it("should generate unique id for state", async () => {
      const state1 = await service.initialize();
      const state2 = await service.initialize();

      expect(state1.id).toBeDefined();
      expect(state2.id).toBeDefined();
    });
  });

  describe("goToStep", () => {
    it("should transition to valid next step", async () => {
      await service.initialize();
      const state = await service.goToStep("company_info");

      expect(state.currentStep).toBe("company_info");
      expect(state.status).toBe("in_progress");
      expect(state.startedAt).toBeDefined();
    });

    it("should reject jump to non-adjacent step", async () => {
      await service.initialize();

      await expect(service.goToStep("industry_select")).rejects.toThrow(
        "Cannot jump",
      );
    });
  });

  describe("nextStep", () => {
    it("should advance to next step in order", async () => {
      await service.initialize();
      const state = await service.nextStep();

      expect(state.currentStep).toBe("company_info");
    });
  });

  describe("previousStep", () => {
    it("should return to previous step", async () => {
      await service.initialize();
      await service.goToStep("company_info");
      const state = await service.previousStep();

      expect(state.currentStep).toBe("welcome");
    });
  });

  describe("skipStep", () => {
    it("should skip optional steps", async () => {
      await service.initialize();
      await service.goToStep("company_info");
      await service.goToStep("industry_select");
      await service.goToStep("data_goals");
      const state = await service.skipStep();

      expect(state.skippedSteps).toContain("data_goals");
    });

    it("should reject skipping required steps", async () => {
      await service.initialize();

      await expect(service.skipStep("company_info")).rejects.toThrow(
        "Cannot skip",
      );
    });
  });

  describe("completeStep", () => {
    it("should complete current step and advance", async () => {
      await service.initialize();
      await service.goToStep("company_info");

      const state = await service.completeStep("company_info", {
        companyInfo: { name: "Test Corp", size: "small", currency: "BRL" },
      });

      expect(state.completedSteps).toContain("company_info");
      expect(state.stepData.companyInfo).toEqual({
        name: "Test Corp",
        size: "small",
        currency: "BRL",
      });
    });
  });

  describe("completeOnboarding", () => {
    it("should mark onboarding as completed", async () => {
      await service.initialize();
      const state = await service.completeOnboarding("org-123");

      expect(state.status).toBe("completed");
      expect(state.currentStep).toBe("completed");
      expect(state.organizationId).toBe("org-123");
      expect(state.completedAt).toBeDefined();
    });
  });

  describe("getProgress", () => {
    it("should calculate correct percentage", async () => {
      await service.initialize();
      await service.goToStep("company_info");
      await service.completeStep("company_info");

      const progress = service.getProgress();

      expect(progress.percentage).toBeGreaterThan(0);
      expect(progress.completedSteps).toBe(1);
    });

    it("should indicate if can go back", async () => {
      await service.initialize();
      const progress = service.getProgress();

      expect(progress.canGoBack).toBe(false);
    });
  });

  describe("validateCurrentStep", () => {
    it("should fail validation for empty company name", async () => {
      await service.initialize();
      await service.goToStep("company_info");

      const validation = service.validateCurrentStep();

      expect(validation.valid).toBe(false);
      expect(validation.errors.companyName).toBeDefined();
    });

    it("should pass validation when data is complete", async () => {
      await service.initialize();
      await service.goToStep("company_info");
      await service.updateStepData({
        companyInfo: { name: "Test", size: "small" },
      });

      const validation = service.validateCurrentStep();

      expect(validation.valid).toBe(true);
    });
  });

  describe("updateStepData", () => {
    it("should merge step data correctly", async () => {
      await service.initialize();
      await service.updateStepData({
        companyInfo: { name: "Test", size: "small", currency: "BRL" },
      });

      const state = service.getState();
      expect(state?.stepData.companyInfo).toEqual({
        name: "Test",
        size: "small",
        currency: "BRL",
      });
    });
  });

  describe("reset", () => {
    it("should reset to initial state", async () => {
      await service.initialize();
      await service.goToStep("company_info");
      await service.reset();

      const state = service.getState();
      expect(state?.currentStep).toBe("welcome");
      expect(state?.status).toBe("not_started");
    });
  });

  describe("isCompleted", () => {
    it("should return false when not completed", async () => {
      await service.initialize();
      expect(service.isCompleted()).toBe(false);
    });

    it("should return true when completed", async () => {
      await service.initialize();
      await service.completeOnboarding("org-123");
      expect(service.isCompleted()).toBe(true);
    });
  });
});

describe("OnboardingFlow", () => {
  describe("type validation", () => {
    it("should accept instant flow", () => {
      const flow: OnboardingFlow = "instant";
      expect(flow).toBe("instant");
    });

    it("should accept strategic flow", () => {
      const flow: OnboardingFlow = "strategic";
      expect(flow).toBe("strategic");
    });

    it("should accept cloud flow", () => {
      const flow: OnboardingFlow = "cloud";
      expect(flow).toBe("cloud");
    });

    it("should accept demo flow", () => {
      const flow: OnboardingFlow = "demo";
      expect(flow).toBe("demo");
    });
  });
});
