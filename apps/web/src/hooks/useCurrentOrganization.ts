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

  // Buscar organização via profiles (tabela correta no banco)
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("organization_id")
    .eq("user_id", userId)
    .single();

  if (profileError || !profile?.organization_id) {
    console.warn("Profile or organization not found for user:", userId);
    return null;
  }

  // Buscar dados da organização
  const { data: org, error: orgError } = await supabase
    .from("organizations")
    .select("id, name, slug, created_at")
    .eq("id", profile.organization_id)
    .single();

  if (orgError) {
    console.warn("Organization not found:", profile.organization_id);
    return null;
  }

  return {
    id: org.id,
    name: org.name,
    slug: org.slug,
    createdAt: org.created_at,
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
