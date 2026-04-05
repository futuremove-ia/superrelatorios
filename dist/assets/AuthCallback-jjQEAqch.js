import { j as e } from "./vendor-data-DuuuwLk5.js";
import { d as c, i, r as n } from "./vendor-react-DfYPWlel.js";
import { P as l, s as d } from "./index-CaCe4Bjh.js";
import "./vendor-radix-CfL9Rjb9.js";
import "./vendor-utils-CGetvm_l.js";
const g = () => {
  const t = c(),
    [s] = i();
  return (
    n.useEffect(() => {
      (async () => {
        try {
          const { data: a, error: r } = await d.auth.getSession();
          if (r) throw r;
          const o = s.get("redirect") || "/app";
          a.session
            ? (window.location.href = o)
            : (window.location.href = "/login");
        } catch (a) {
          (console.error("Auth: Falha crítica na validação do callback:", a),
            (window.location.href = "/login?error=auth_callback_failed"));
        }
      })();
    }, [t, s]),
    e.jsx("div", {
      className:
        "flex flex-col items-center justify-center min-h-screen bg-background",
      children: e.jsxs("div", {
        className: "text-center space-y-4",
        children: [
          e.jsx(l, {}),
          e.jsx("p", {
            className: "text-sm text-muted-foreground animate-pulse",
            children: "Finalizando login seguro...",
          }),
        ],
      }),
    })
  );
};
export { g as default };
