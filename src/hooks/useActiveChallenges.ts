import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export interface Challenge {
  id: string;
  organization_id: string;
  challenge_code: string;
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  status: "detected" | "acknowledged" | "in_progress" | "resolved" | "ignored";
  priority: number;
  confidence_score: number;
  detected_at: string;
  updated_at: string;
  suggested_lever_code: string | null;
  ai_diagnostic_data: Record<string, unknown> | null;
  expected_resolution_days: number;
}

interface UseActiveChallengesOptions {
  category?: string;
  severity?: string;
  status?: string;
  organizationId?: string;
  refreshInterval?: number;
}

export const useActiveChallenges = (
  options: UseActiveChallengesOptions = {},
) => {
  const {
    category,
    severity,
    status,
    organizationId,
    refreshInterval = 60000,
  } = options;

  const {
    data: challenges,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["active-challenges", organizationId, category, severity, status],
    queryFn: async (): Promise<Challenge[]> => {
      if (!organizationId) {
        console.warn("useActiveChallenges: organizationId is required");
        return [];
      }

      let query = supabase
        .from("user_challenges")
        .select("*")
        .eq("organization_id", organizationId)
        .in("status", ["detected", "acknowledged", "in_progress"])
        .order("severity", { ascending: true })
        .order("detected_at", { ascending: false });

      if (severity && severity !== "all") {
        query = query.eq("severity", severity);
      }

      if (status && status !== "all") {
        query = query.eq("status", status);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        console.error("Error fetching challenges:", fetchError);
        throw fetchError;
      }

      let filteredChallenges = data || [];

      if (category && category !== "all") {
        const categoryMap: Record<string, string[]> = {
          financial: ["RUNWAY", "BURN_RATE", "MARGIN"],
          operational: [
            "CHURN_RATE",
            "CUSTOMER_SATISFACTION",
            "PROCESS_EFFICIENCY",
          ],
          strategic: ["MARKET_SHARE", "GROWTH_RATE", "COMPETITIVE_POSITION"],
          marketing: ["CAC", "LTV", "MARKETING_ROI"],
          sales: ["SALES_CYCLE_DAYS", "CONVERSION_RATE", "REVENUE_PER_REP"],
        };
        const codes = categoryMap[category] || [];
        filteredChallenges = filteredChallenges.filter((c) =>
          codes.includes(c.challenge_code),
        );
      }

      return filteredChallenges;
    },
    enabled: !!organizationId,
    refetchInterval: refreshInterval,
    staleTime: 30000,
  });

  const getChallengesByCategory = (cat: string) => {
    return (
      challenges?.filter((challenge) => {
        const categoryMap: Record<string, string[]> = {
          financial: ["RUNWAY", "BURN_RATE", "MARGIN"],
          operational: [
            "CHURN_RATE",
            "CUSTOMER_SATISFACTION",
            "PROCESS_EFFICIENCY",
          ],
          strategic: ["MARKET_SHARE", "GROWTH_RATE", "COMPETITIVE_POSITION"],
          marketing: ["CAC", "LTV", "MARKETING_ROI"],
          sales: ["SALES_CYCLE_DAYS", "CONVERSION_RATE", "REVENUE_PER_REP"],
        };
        return categoryMap[cat]?.includes(challenge.challenge_code) || false;
      }) || []
    );
  };

  const getChallengesBySeverity = (sev: string) => {
    return challenges?.filter((challenge) => challenge.severity === sev) || [];
  };

  const getCriticalChallenges = () => {
    return (
      challenges?.filter((challenge) => challenge.severity === "critical") || []
    );
  };

  const getWarningChallenges = () => {
    return (
      challenges?.filter((challenge) => challenge.severity === "warning") || []
    );
  };

  const getActiveChallenges = () => {
    return (
      challenges?.filter((challenge) =>
        ["detected", "acknowledged", "in_progress"].includes(challenge.status),
      ) || []
    );
  };

  const getChallengeById = (id: string) => {
    return challenges?.find((challenge) => challenge.id === id);
  };

  const refreshChallenges = () => {
    return refetch();
  };

  return {
    data: challenges,
    isLoading,
    error,
    refetch: refreshChallenges,
    getChallengesByCategory,
    getChallengesBySeverity,
    getCriticalChallenges,
    getWarningChallenges,
    getActiveChallenges,
    getChallengeById,
  };
};

export default useActiveChallenges;
