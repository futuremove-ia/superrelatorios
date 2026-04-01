import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

// ============================================================
// QUERY KEYS
// ============================================================

export const ORG_KEYS = {
  byUser: (userId: string) => ["organization", "user", userId] as const,
} as const;

// ============================================================
// TYPES
// ============================================================

export interface CurrentOrganization {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

// ============================================================
// SERVICE
// ============================================================

/**
 * Busca a organização do usuário autenticado.
 * Modelo 1-usuário:1-organização (PME scope).
 * Em modo demo, retorna organização fictícia.
 */
async function fetchOrganizationByUser(
  userId: string,
  isDemoMode: boolean,
): Promise<CurrentOrganization | null> {
  // Modo demo: retornar organização mock para evitar chamadas ao banco
  if (isDemoMode || userId === "demo-user-id") {
    return {
      id: "demo-org-id",
      name: "Empresa Demo",
      slug: "empresa-demo",
      createdAt: new Date().toISOString(),
    };
  }

  // Buscar organização real vinculada ao usuário
  const { data, error } = await supabase
    .from("organizations")
    .select("id, name, slug, created_at")
    .eq("owner_id", userId)
    .single();

  if (error) {
    // Se não encontrar por owner_id, tentar pelo campo user_id (fallback)
    const { data: fallback, error: fallbackError } = await supabase
      .from("organizations")
      .select("id, name, slug, created_at")
      .eq("user_id", userId)
      .single();

    if (fallbackError) {
      console.warn("Organization not found for user:", userId);
      return null;
    }

    return {
      id: fallback.id,
      name: fallback.name,
      slug: fallback.slug,
      createdAt: fallback.created_at,
    };
  }

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    createdAt: data.created_at,
  };
}

// ============================================================
// HOOK
// ============================================================

/**
 * Hook que resolve a organização ativa do usuário autenticado.
 *
 * Padrão 1-usuário:1-organização para o scope de PMEs.
 * Em modo demo, retorna dados fictícios sem chamada ao banco.
 *
 * @example
 * const { organizationId, organization, isLoading } = useCurrentOrganization()
 */
export function useCurrentOrganization() {
  const { user, isDemoMode } = useAuth();
  const userId = user?.id ?? "";

  const query = useQuery<CurrentOrganization | null>({
    queryKey: ORG_KEYS.byUser(userId),
    queryFn: () => fetchOrganizationByUser(userId, isDemoMode),
    enabled: !!userId,
    staleTime: 10 * 60 * 1000, // 10 minutos — organização muda raramente
    gcTime: 30 * 60 * 1000,
  });

  return {
    organization: query.data ?? null,
    organizationId: query.data?.id ?? "",
    organizationName: query.data?.name ?? "",
    isLoading: query.isLoading,
    isError: query.isError,
    isDemoMode,
  };
}
