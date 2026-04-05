import { u as n, e as s, f as i } from "./vendor-data-DuuuwLk5.js";
import { c as u, g as a } from "./supabaseReportsService-DSkxDjHQ.js";
import { u as o } from "./useCurrentOrganization-DeW0zOch.js";
const y = () => {
    const { organizationId: e, isDemoMode: r } = o();
    return n({
      queryKey: ["reports", e],
      queryFn: () => a(e),
      enabled: !r && !!e,
    });
  },
  g = () => {
    const e = s(),
      { organizationId: r } = o();
    return i({
      mutationFn: (t) => {
        if (!r) throw new Error("Organization ID is required");
        return u(r, "", t.title, t.description, t.templateId, t.dataJson);
      },
      onSuccess: () => {
        e.invalidateQueries({ queryKey: ["reports", r] });
      },
    });
  };
export { g as a, y as u };
