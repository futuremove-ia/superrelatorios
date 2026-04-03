import { u as r, j as e, B as o } from "./index-DJVek99o.js";
import { u as a, L as n } from "./router-Db_Yswnp.js";
import { r as m } from "./vendor-Bp-AcFIh.js";
import { ay as c } from "./utils-BrIGbSZG.js";
const u = () => {
  const t = a(),
    { t: s } = r();
  return (
    m.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        t.pathname,
      );
    }, [t.pathname]),
    e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-background px-4",
      children: e.jsxs("div", {
        className: "text-center max-w-md",
        children: [
          e.jsx("h1", {
            className: "text-6xl font-bold mb-6 text-primary",
            children: "404",
          }),
          e.jsx("h2", {
            className: "text-2xl font-semibold mb-4 text-foreground",
            children: s("errors.not_found_title"),
          }),
          e.jsx("p", {
            className: "text-muted-foreground mb-8",
            children: s("errors.not_found_desc"),
          }),
          e.jsx(o, {
            asChild: !0,
            size: "lg",
            className: "w-full sm:w-auto",
            children: e.jsxs(n, {
              to: "/",
              children: [
                e.jsx(c, { className: "mr-2 h-5 w-5" }),
                s("errors.return_home"),
              ],
            }),
          }),
        ],
      }),
    })
  );
};
export { u as default };
