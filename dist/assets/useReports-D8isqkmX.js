import { u as n } from "./useQuery-Brgg0_h5.js";
import { e as s } from "./index-BvTrNtPA.js";
import { u as i } from "./useMutation-CQVWeyQi.js";
import { c as u, g as a } from "./supabaseReportsService-DsEpBzVS.js";
import { u as o } from "./useCurrentOrganization-ejFtle5S.js";
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
