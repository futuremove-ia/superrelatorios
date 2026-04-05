import { u as n, b as s, d as i } from "./vendor-data-BixP7Wq-.js";
import { c as u, g as a } from "./supabaseReportsService-DuiPZd3J.js";
import { u as o } from "./useCurrentOrganization-CMbUnvon.js";
const y = () => {
    const { organizationId: e, isDemoMode: r } = o();
    return n({
      queryKey: ["reports", e],
      queryFn: () => a(e),
      enabled: !r && !!e,
    });
  },
  d = () => {
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
export { d as a, y as u };
