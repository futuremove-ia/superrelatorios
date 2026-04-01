import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export interface CurrentOrganization {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

async function fetchOrganizationByUser(
  userId: string,
  isDemoMode: boolean,
): Promise<CurrentOrganization | null> {
  if (isDemoMode || userId === "demo-user-id") {
    return {
      id: "demo-org-id",
      name: "Empresa Demo",
      slug: "empresa-demo",
      createdAt: new Date().toISOString(),
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("organization_id")
    .eq("user_id", userId)
    .single();

  if (profileError || !profile?.organization_id) {
    console.warn("Profile or organization not found for user:", userId);
    return null;
  }

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

export function useCurrentOrganization() {
  const { user, isDemoMode } = useAuth();
  const userId = user?.id ?? "";

  const query = useQuery<CurrentOrganization | null>({
    queryKey: ["organization", "user", userId],
    queryFn: () => fetchOrganizationByUser(userId, isDemoMode),
    enabled: !!userId,
    staleTime: 10 * 60 * 1000,
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
