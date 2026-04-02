import { useQuery } from "@tanstack/react-query";
import {
  relevanceEngine,
  type RelevantKPI,
  type MaturityInfo,
} from "@/services/relevanceEngine";

export const RELEVANCE_KEYS = {
  relevance: (orgId: string) => ["relevance", orgId] as const,
  dataPresence: (orgId: string) => ["dataPresence", orgId] as const,
  maturity: (orgId: string) => ["maturity", orgId] as const,
};

export interface UseRelevantKPIsResult {
  kpis: RelevantKPI[] | undefined;
  isLoading: boolean;
  error: Error | null;
  maturity: MaturityInfo | undefined;
}

export function useRelevantKPIs(
  organizationId: string,
  sector?: string,
  companySize?: string,
): UseRelevantKPIsResult {
  const relevanceQuery = useQuery({
    queryKey: RELEVANCE_KEYS.relevance(organizationId),
    queryFn: () =>
      relevanceEngine.calculateRelevance(organizationId, sector, companySize),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });

  const dataPresenceQuery = useQuery({
    queryKey: RELEVANCE_KEYS.dataPresence(organizationId),
    queryFn: () => relevanceEngine.getDataPresence(organizationId),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });

  const maturity: MaturityInfo | undefined = dataPresenceQuery.data
    ? relevanceEngine.getMaturityInfo(dataPresenceQuery.data.totalDataPoints)
    : undefined;

  return {
    kpis: relevanceQuery.data,
    isLoading: relevanceQuery.isLoading || dataPresenceQuery.isLoading,
    error: relevanceQuery.error || dataPresenceQuery.error,
    maturity,
  };
}

export function useMaturityLevel(
  organizationId: string,
): MaturityInfo | undefined {
  const dataPresenceQuery = useQuery({
    queryKey: RELEVANCE_KEYS.dataPresence(organizationId),
    queryFn: () => relevanceEngine.getDataPresence(organizationId),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });

  if (!dataPresenceQuery.data) return undefined;

  return relevanceEngine.getMaturityInfo(
    dataPresenceQuery.data.totalDataPoints,
  );
}

export function useNextAction(kpiCode: string): string {
  return relevanceEngine.suggestNextAction(kpiCode);
}
