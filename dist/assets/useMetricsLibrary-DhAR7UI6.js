import { u as s } from "./useQuery-DdwYXWd4.js";
import { s as a } from "./index-BYfWtJYS.js";
const o = () =>
  s({
    queryKey: ["library-kpis"],
    queryFn: async () => {
      const { data: e, error: r } = await a
        .from("library_kpis")
        .select("*")
        .eq("is_active", !0)
        .order("code");
      if (r) throw r;
      return e || [];
    },
    staleTime: 5 * 60 * 1e3,
  });
export { o as u };
