import { u as o } from "./useQuery-pMG9BRxa.js";
import { F as s } from "./index-DRWQgA5q.js";
import { u } from "./useMutation-Bm6B-fB6.js";
import { r as e } from "./mockReports-3cW05Ka2.js";
const m = () => o({ queryKey: ["reports"], queryFn: () => e.getAllReports() }),
  y = () => {
    const r = s();
    return u({
      mutationFn: (t) => e.createReport(t),
      onSuccess: () => {
        r.invalidateQueries({ queryKey: ["reports"] });
      },
    });
  };
export { y as a, m as u };
