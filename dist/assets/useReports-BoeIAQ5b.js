import { u as n } from "./useQuery-lOGkLDRM.js";
import { e as s } from "./index-DJVek99o.js";
import { u as i } from "./useMutation-1mVySGEi.js";
import { c as u, g as a } from "./supabaseReportsService-CRYy_N2b.js";
import { u as o } from "./useCurrentOrganization-QE33f3lM.js";
const d = () => {
    const { organizationId: e, isDemoMode: r } = o();
    return n({
      queryKey: ["reports", e],
      queryFn: () => a(e),
      enabled: !r && !!e,
    });
  },
  f = () => {
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
export { f as a, d as u };
