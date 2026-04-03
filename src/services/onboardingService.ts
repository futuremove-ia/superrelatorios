import { supabase } from "@/lib/supabase";
import {
  OnboardingStep,
  OnboardingStatus,
  OnboardingState,
  OnboardingStepData,
  OnboardingProgress,
  OnboardingTransition,
  SaveOnboardingStateOptions,
  ValidationResult,
  STEP_ORDER,
  REQUIRED_STEPS,
  OPTIONAL_STEPS,
} from "@/types/onboarding";

export class OnboardingService {
  private userId: string;
  private state: OnboardingState | null = null;

  constructor(userId: string) {
    this.userId = userId;
  }

  async initialize(): Promise<OnboardingState> {
    const existing = await this.loadState();

    if (existing) {
      this.state = existing;
      return existing;
    }

    this.state = this.createInitialState();
    await this.saveState();
    return this.state;
  }

  private createInitialState(): OnboardingState {
    return {
      id: crypto.randomUUID(),
      userId: this.userId,
      organizationId: undefined,
      currentStep: "welcome",
      status: "not_started",
      startedAt: undefined,
      completedAt: undefined,
      lastUpdatedAt: new Date(),
      stepData: {},
      completedSteps: [],
      skippedSteps: [],
    };
  }

  private async loadState(): Promise<OnboardingState | null> {
    const { data, error } = await supabase
      .from("onboarding_states")
      .select("*")
      .eq("user_id", this.userId)
      .order("last_updated_at", { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      return null;
    }

    return this.mapToState(data);
  }

  private async saveState(): Promise<void> {
    if (!this.state) return;

    const dbData = {
      id: this.state.id,
      user_id: this.state.userId,
      organization_id: this.state.organizationId || null,
      current_step: this.state.currentStep,
      status: this.state.status,
      started_at: this.state.startedAt?.toISOString() || null,
      completed_at: this.state.completedAt?.toISOString() || null,
      last_updated_at: new Date().toISOString(),
      step_data: this.state.stepData as unknown as Record<string, unknown>,
      completed_steps: this.state.completedSteps,
      skipped_steps: this.state.skippedSteps,
    };

    const { error } = await supabase
      .from("onboarding_states")
      .upsert(dbData, { onConflict: "id" });

    if (error) {
      console.error("[OnboardingService] Failed to save state:", error);
    }
  }

  private mapToState(data: Record<string, unknown>): OnboardingState {
    return {
      id: data.id as string,
      userId: data.user_id as string,
      organizationId: data.organization_id as string | undefined,
      currentStep: data.current_step as OnboardingStep,
      status: data.status as OnboardingStatus,
      startedAt: data.started_at
        ? new Date(data.started_at as string)
        : undefined,
      completedAt: data.completed_at
        ? new Date(data.completed_at as string)
        : undefined,
      lastUpdatedAt: new Date(data.last_updated_at as string),
      stepData: data.step_data as OnboardingStepData,
      completedSteps: data.completed_steps as OnboardingStep[],
      skippedSteps: data.skipped_steps as OnboardingStep[],
    };
  }

  async goToStep(step: OnboardingStep): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    const currentIndex = STEP_ORDER.indexOf(this.state!.currentStep);
    const targetIndex = STEP_ORDER.indexOf(step);

    if (targetIndex > currentIndex + 1) {
      throw new Error(`Cannot jump to ${step} from ${this.state!.currentStep}`);
    }

    this.state!.currentStep = step;
    this.state!.lastUpdatedAt = new Date();

    if (this.state!.status === "not_started") {
      this.state!.status = "in_progress";
      this.state!.startedAt = new Date();
    }

    await this.saveState();
    return this.state!;
  }

  async nextStep(): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    const currentIndex = STEP_ORDER.indexOf(this.state!.currentStep);
    if (currentIndex >= STEP_ORDER.length - 1) {
      return this.state!;
    }

    const nextStep = STEP_ORDER[currentIndex + 1];
    return this.goToStep(nextStep);
  }

  async previousStep(): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    const currentIndex = STEP_ORDER.indexOf(this.state!.currentStep);
    if (currentIndex <= 0) {
      return this.state!;
    }

    const prevStep = STEP_ORDER[currentIndex - 1];
    return this.goToStep(prevStep);
  }

  async skipStep(step?: OnboardingStep): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    const stepToSkip = step || this.state!.currentStep;

    if (REQUIRED_STEPS.includes(stepToSkip)) {
      throw new Error(`Cannot skip required step: ${stepToSkip}`);
    }

    this.state!.skippedSteps.push(stepToSkip);
    this.state!.lastUpdatedAt = new Date();

    await this.saveState();
    return this.nextStep();
  }

  async completeStep(
    step: OnboardingStep,
    data?: Partial<OnboardingStepData>,
  ): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    if (!this.state!.completedSteps.includes(step)) {
      this.state!.completedSteps.push(step);
    }

    if (data) {
      this.state!.stepData = { ...this.state!.stepData, ...data };
    }

    this.state!.lastUpdatedAt = new Date();

    await this.saveState();
    return this.nextStep();
  }

  async completeOnboarding(organizationId: string): Promise<OnboardingState> {
    if (!this.state) {
      await this.initialize();
    }

    this.state!.organizationId = organizationId;
    this.state!.currentStep = "completed";
    this.state!.status = "completed";
    this.state!.completedAt = new Date();
    this.state!.lastUpdatedAt = new Date();

    await this.saveState();
    return this.state!;
  }

  getProgress(): OnboardingProgress {
    if (!this.state) {
      return {
        totalSteps: STEP_ORDER.length,
        completedSteps: 0,
        currentStep: "welcome",
        percentage: 0,
        canGoBack: false,
        canSkip: false,
      };
    }

    const currentIndex = STEP_ORDER.indexOf(this.state.currentStep);
    const completedCount = this.state.completedSteps.length;
    const totalSteps = STEP_ORDER.length - 1;

    return {
      totalSteps,
      completedSteps: completedCount,
      currentStep: this.state.currentStep,
      percentage: Math.round((completedCount / totalSteps) * 100),
      canGoBack: currentIndex > 0,
      canSkip: OPTIONAL_STEPS.includes(this.state.currentStep),
    };
  }

  validateCurrentStep(): ValidationResult {
    if (!this.state) {
      return { valid: false, errors: { _root: "Onboarding not initialized" } };
    }

    const errors: Record<string, string> = {};

    switch (this.state.currentStep) {
      case "company_info":
        if (!this.state.stepData.companyInfo?.name) {
          errors.companyName = "Nome da empresa é obrigatório";
        }
        if (!this.state.stepData.companyInfo?.size) {
          errors.companySize = "Tamanho da empresa é obrigatório";
        }
        break;
      case "industry_select":
        if (!this.state.stepData.industryConfig?.industry) {
          errors.industry = "Selecione uma indústria";
        }
        break;
    }

    return { valid: Object.keys(errors).length === 0, errors };
  }

  async updateStepData(data: Partial<OnboardingStepData>): Promise<void> {
    if (!this.state) {
      await this.initialize();
    }

    this.state!.stepData = { ...this.state!.stepData, ...data };
    this.state!.lastUpdatedAt = new Date();

    await this.saveState();
  }

  getState(): OnboardingState | null {
    return this.state;
  }

  isCompleted(): boolean {
    return this.state?.status === "completed";
  }

  canResume(): boolean {
    if (!this.state) return false;
    return (
      this.state.status === "in_progress" || this.state.status === "paused"
    );
  }

  async reset(): Promise<void> {
    this.state = this.createInitialState();
    await this.saveState();
  }
}

export function createOnboardingService(userId: string): OnboardingService {
  return new OnboardingService(userId);
}

export function getStepFromUrl(pathname: string): OnboardingStep | null {
  const path = pathname.split("/").pop();
  const stepMap: Record<string, OnboardingStep> = {
    welcome: "welcome",
    company: "company_info",
    industry: "industry_select",
    goals: "data_goals",
    import: "first_data_import",
    sample: "sample_data",
    complete: "completed",
  };
  return stepMap[path || ""] || null;
}

export function getUrlForStep(step: OnboardingStep): string {
  const stepMap: Record<OnboardingStep, string> = {
    login: "/login",
    signup: "/signup",
    welcome: "/onboarding/welcome",
    company_info: "/onboarding/company",
    industry_select: "/onboarding/industry",
    data_goals: "/onboarding/goals",
    first_data_import: "/onboarding/import",
    sample_data: "/onboarding/sample",
    completed: "/dashboard",
  };
  return stepMap[step];
}
