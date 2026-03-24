import { u as s } from "./useQuery-D4K2XlIj.js";
import { s as t } from "./index-CZZTgEon.js";
const c = (e) =>
    s({
      queryKey: ["metric-values", e],
      queryFn: async () => {
        const { data: a, error: r } = await t
          .from("latest_metric_values")
          .select("*")
          .eq("organization_id", e)
          .order("metric_name");
        if (r) throw r;
        return a || [];
      },
      staleTime: 2 * 60 * 1e3,
      enabled: !!e,
    }),
  n = (e) =>
    s({
      queryKey: ["cross-domain-analytics", e],
      queryFn: async () => {
        const { data: a, error: r } = await t
          .from("cross_domain_analytics_summary")
          .select("*")
          .eq("organization_id", e)
          .order("period_start", { ascending: !1 })
          .limit(1)
          .single();
        if (r && r.code !== "PGRST116") throw r;
        return (
          a || {
            overall_health_score: 0,
            overall_health_trend: "stable",
            overall_health_change: 0,
            critical_relationships_count: 0,
            recommendations_count: 0,
            business_health_score: 0,
            growth_potential_score: 0,
            operational_excellence_score: 0,
          }
        );
      },
      staleTime: 10 * 60 * 1e3,
      enabled: !!e,
    });
export { n as a, c as u };
