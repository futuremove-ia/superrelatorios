import { u as s } from "./vendor-data-DuuuwLk5.js";
import { b as d, s as t } from "./index-CaCe4Bjh.js";
async function u(a, n) {
  if (n || a === "demo-user-id")
    return {
      id: "demo-org-id",
      name: "Empresa Demo",
      slug: "empresa-demo",
      createdAt: new Date().toISOString(),
    };
  const { data: r, error: o } = await t
    .from("profiles")
    .select("organization_id")
    .eq("user_id", a)
    .single();
  if (o || !(r != null && r.organization_id))
    return (
      console.warn("Profile or organization not found for user:", a),
      null
    );
  const { data: e, error: i } = await t
    .from("organizations")
    .select("id, name, slug, created_at")
    .eq("id", r.organization_id)
    .single();
  return i
    ? (console.warn("Organization not found:", r.organization_id), null)
    : { id: e.id, name: e.name, slug: e.slug, createdAt: e.created_at };
}
function l() {
  var e, i;
  const { user: a, isDemoMode: n } = d(),
    r = (a == null ? void 0 : a.id) ?? "",
    o = s({
      queryKey: ["organization", "user", r],
      queryFn: () => u(r, n),
      enabled: !!r,
      staleTime: 10 * 60 * 1e3,
      gcTime: 30 * 60 * 1e3,
    });
  return {
    organization: o.data ?? null,
    organizationId: ((e = o.data) == null ? void 0 : e.id) ?? "",
    organizationName: ((i = o.data) == null ? void 0 : i.name) ?? "",
    isLoading: o.isLoading,
    isError: o.isError,
    isDemoMode: n,
  };
}
export { l as u };
