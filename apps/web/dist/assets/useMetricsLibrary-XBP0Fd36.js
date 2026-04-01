import { u as a } from "./useQuery-pMG9BRxa.js";
import { s } from "./index-DRWQgA5q.js";
const o = () =>
  a({
    queryKey: ["metrics-library"],
    queryFn: async () => {
      const { data: e, error: r } = await s
        .from("metrics_library")
        .select("*")
        .eq("is_active", !0)
        .order("domain, name");
      if (r) throw r;
      return e || [];
    },
    staleTime: 5 * 60 * 1e3,
  });
export { o as u };
