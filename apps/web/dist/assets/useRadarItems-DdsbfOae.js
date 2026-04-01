import { u } from "./useQuery-pMG9BRxa.js";
import { F as i, b6 as s } from "./index-DRWQgA5q.js";
import { u as m } from "./useMutation-Bm6B-fB6.js";
import { r as t } from "./radarItemService-DLp7Z56m.js";
const r = {
  all: (e) => ["radar_items", e],
  byStatus: (e, a) => ["radar_items", e, "status", a],
  bySeverity: (e, a) => ["radar_items", e, "severity", a],
  byType: (e, a) => ["radar_items", e, "type", a],
  byDomain: (e, a) => ["radar_items", e, "domain", a],
  byId: (e) => ["radar_items", e],
  dashboard: (e) => ["radar_items", "dashboard", e],
  detected: (e) => ["radar_items", "detected", e],
};
function b(e) {
  return u({
    queryKey: r.all(e),
    queryFn: () => t.getRadarItems(e),
    enabled: !!e,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3,
  });
}
function c(e) {
  return u({
    queryKey: r.dashboard(e),
    queryFn: () => t.getDashboardSummary(e),
    enabled: !!e,
    staleTime: 2 * 60 * 1e3,
  });
}
function p() {
  const e = i();
  return m({
    mutationFn: ({ id: a, dto: d }) => t.updateRadarItemStatus(a, d),
    onSuccess: (a) => {
      (e.invalidateQueries({ queryKey: r.byId(a.id) }),
        e.invalidateQueries({ queryKey: r.all(a.organizationId) }),
        e.invalidateQueries({ queryKey: r.dashboard(a.organizationId) }),
        s.success(`Status atualizado para: ${a.status}`));
    },
    onError: (a) => {
      (s.error("Erro ao atualizar status"),
        console.error("Update radar item status error:", a));
    },
  });
}
function q() {
  const e = i();
  return (a) => {
    (e.invalidateQueries({ queryKey: r.all(a) }),
      e.invalidateQueries({ queryKey: r.dashboard(a) }));
  };
}
export { b as a, c as b, q as c, p as u };
