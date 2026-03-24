import { j as a, _ as c, s as l } from "./index-BZzvAVnT.js";
import { r } from "./vendor-BgR6OOld.js";
import { a as d, d as i } from "./router-D2JcpG7e.js";
import "./utils-C25gojUd.js";
const g = () => {
  const n = d(),
    [e] = i();
  return (
    r.useEffect(() => {
      (async () => {
        try {
          const { data: t, error: o } = await l.auth.getSession();
          if (o) throw o;
          const s = e.get("redirect") || "/app";
          t.session
            ? (window.location.href = s)
            : (window.location.href = "/login");
        } catch (t) {
          (console.error("Auth: Falha crítica na validação do callback:", t),
            (window.location.href = "/login?error=auth_callback_failed"));
        }
      })();
    }, [n, e]),
    a.jsx("div", {
      "data-lov-id": "src\\pages\\auth\\AuthCallback.tsx:42:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\auth\\AuthCallback.tsx",
      "data-component-line": "42",
      "data-component-file": "AuthCallback.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22flex%20flex-col%20items-center%20justify-center%20min-h-screen%20bg-background%22%7D",
      className:
        "flex flex-col items-center justify-center min-h-screen bg-background",
      children: a.jsxs("div", {
        "data-lov-id": "src\\pages\\auth\\AuthCallback.tsx:43:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\auth\\AuthCallback.tsx",
        "data-component-line": "43",
        "data-component-file": "AuthCallback.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22text-center%20space-y-4%22%7D",
        className: "text-center space-y-4",
        children: [
          a.jsx(c, {
            "data-lov-id": "src\\pages\\auth\\AuthCallback.tsx:44:8",
            "data-lov-name": "PageLoader",
            "data-component-path": "src\\pages\\auth\\AuthCallback.tsx",
            "data-component-line": "44",
            "data-component-file": "AuthCallback.tsx",
            "data-component-name": "PageLoader",
            "data-component-content": "%7B%7D",
          }),
          a.jsx("p", {
            "data-lov-id": "src\\pages\\auth\\AuthCallback.tsx:45:8",
            "data-lov-name": "p",
            "data-component-path": "src\\pages\\auth\\AuthCallback.tsx",
            "data-component-line": "45",
            "data-component-file": "AuthCallback.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22text%22%3A%22Finalizando%20login%20seguro...%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20animate-pulse%22%7D",
            className: "text-sm text-muted-foreground animate-pulse",
            children: "Finalizando login seguro...",
          }),
        ],
      }),
    })
  );
};
export { g as default };
