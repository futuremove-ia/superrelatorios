import { useState, useCallback, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOnboardingService,
  getUrlForStep,
  type OnboardingService,
} from "@/services/onboardingService";
import {
  OnboardingStep,
  OnboardingState,
  OnboardingProgress,
  OnboardingStepData,
  ValidationResult,
  STEP_ORDER,
} from "@/types/onboarding";
import { useNavigate } from "react-router-dom";

const ONBOARDING_KEYS = {
  state: (userId: string) => ["onboarding", "state", userId] as const,
  progress: (userId: string) => ["onboarding", "progress", userId] as const,
};

export function useOnboarding(userId: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [service, setService] = useState<OnboardingService | null>(null);

  useEffect(() => {
    if (userId) {
      const svc = createOnboardingService(userId);
      setService(svc);
    }
  }, [userId]);

  const {
    data: state,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ONBOARDING_KEYS.state(userId),
    queryFn: async () => {
      if (!service) return null;
      return service.initialize();
    },
    enabled: !!service && !!userId,
  });

  const progress: OnboardingProgress = service?.getProgress() || {
    totalSteps: STEP_ORDER.length - 1,
    completedSteps: 0,
    currentStep: "welcome" as OnboardingStep,
    percentage: 0,
    canGoBack: false,
    canSkip: false,
  };

  const mutation = useMutation({
    mutationFn: async (action: {
      type: string;
      data?: Partial<OnboardingStepData>;
    }) => {
      if (!service) throw new Error("Service not initialized");

      switch (action.type) {
        case "next":
          return service.nextStep();
        case "previous":
          return service.previousStep();
        case "goTo":
          return service.goToStep(
            action.data?.welcomeAcknowledged ? "company_info" : "welcome",
          );
        case "skip":
          return service.skipStep();
        case "complete":
          return service.completeStep(
            state?.currentStep || "welcome",
            action.data,
          );
        case "completeOnboarding":
          return service.completeOnboarding(
            action.data?.companyInfo?.name || "",
          );
        case "reset":
          return service.reset();
        default:
          throw new Error(`Unknown action: ${action.type}`);
      }
    },
    onSuccess: (newState) => {
      queryClient.setQueryData(ONBOARDING_KEYS.state(userId), newState);

      if (newState.currentStep === "completed") {
        navigate("/dashboard");
      } else {
        const nextUrl = getUrlForStep(newState.currentStep);
        if (nextUrl !== window.location.pathname) {
          navigate(nextUrl);
        }
      }
    },
  });

  const goToStep = useCallback(
    (step: OnboardingStep) => {
      mutation.mutate({
        type: "goTo",
        data: {
          welcomeAcknowledged: step === "company_info" ? true : undefined,
        },
      });
    },
    [mutation],
  );

  const nextStep = useCallback(() => {
    const validation = service?.validateCurrentStep();
    if (validation && !validation.valid) {
      return { success: false, validation };
    }
    mutation.mutate({ type: "next" });
    return { success: true };
  }, [mutation, service]);

  const previousStep = useCallback(() => {
    mutation.mutate({ type: "previous" });
  }, [mutation]);

  const skipStep = useCallback(() => {
    mutation.mutate({ type: "skip" });
  }, [mutation]);

  const completeStep = useCallback(
    (data: Partial<OnboardingStepData>) => {
      mutation.mutate({ type: "complete", data });
    },
    [mutation],
  );

  const completeOnboarding = useCallback(
    (organizationId: string) => {
      mutation.mutate({
        type: "completeOnboarding",
        data: { companyInfo: { name: organizationId } as any },
      });
    },
    [mutation],
  );

  const resetOnboarding = useCallback(() => {
    mutation.mutate({ type: "reset" });
  }, [mutation]);

  const validateCurrentStep = useCallback((): ValidationResult => {
    return service?.validateCurrentStep() || { valid: false, errors: {} };
  }, [service]);

  const isFirstStep = state?.currentStep === "welcome";
  const isLastStep = state?.currentStep === "sample_data";
  const canGoBack = progress.canGoBack && state?.currentStep !== "welcome";
  const canSkip = progress.canSkip && !isLastStep;

  return {
    state,
    progress,
    isLoading: isLoading || mutation.isPending,
    isCompleted: state?.status === "completed",
    canResume: service?.canResume() || false,
    isFirstStep,
    isLastStep,
    canGoBack,
    canSkip,
    goToStep,
    nextStep,
    previousStep,
    skipStep,
    completeStep,
    completeOnboarding,
    resetOnboarding,
    validateCurrentStep,
    refetch,
  };
}

export function useOnboardingStep(step: OnboardingStep) {
  return useCallback(
    (currentStep: OnboardingStep) =>
      STEP_ORDER.indexOf(currentStep) >= STEP_ORDER.indexOf(step),
    [],
  );
}

export function useOnboardingRedirect(userId: string, currentPath: string) {
  const { state, isLoading } = useOnboarding(userId);

  if (isLoading || !state) {
    return { shouldRedirect: false, targetPath: null };
  }

  if (state.status === "completed") {
    return { shouldRedirect: true, targetPath: "/dashboard" };
  }

  const stepFromUrl = currentPath.split("/").pop();
  const currentStepIndex = STEP_ORDER.indexOf(state.currentStep);
  const urlStepIndex = STEP_ORDER.findIndex((s) => s === stepFromUrl);

  if (urlStepIndex > currentStepIndex && urlStepIndex !== -1) {
    return {
      shouldRedirect: true,
      targetPath: getUrlForStep(state.currentStep),
    };
  }

  return { shouldRedirect: false, targetPath: null };
}
