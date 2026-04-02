import React from "react";
import { OnboardingWizard } from "@/components/ui/OnboardingWizard";
import { WelcomeScreen } from "@/components/ui/WelcomeScreen";

const STORAGE_KEY = "onboarding_completed";

export function SetupWizard() {
  const hasCompletedOnboarding = typeof window !== "undefined" 
    ? localStorage.getItem(STORAGE_KEY) === "true"
    : false;

  if (hasCompletedOnboarding) {
    return <OnboardingWizard />;
  }

  return <WelcomeScreen />;
}

export default SetupWizard;
