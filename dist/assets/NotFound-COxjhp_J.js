import { j as e } from "./vendor-data-DuuuwLk5.js";
import { u as r, r as o, L as a } from "./vendor-react-DfYPWlel.js";
import { u as n, B as m } from "./index-CaCe4Bjh.js";
import { aC as c } from "./vendor-utils-CGetvm_l.js";
import "./vendor-radix-CfL9Rjb9.js";
const f = () => {
  const s = r(),
    { t } = n();
  return (
    o.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        s.pathname,
      );
    }, [s.pathname]),
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
            children: t("errors.not_found_title"),
          }),
          e.jsx("p", {
            className: "text-muted-foreground mb-8",
            children: t("errors.not_found_desc"),
          }),
          e.jsx(m, {
            asChild: !0,
            size: "lg",
            className: "w-full sm:w-auto",
            children: e.jsxs(a, {
              to: "/",
              children: [
                e.jsx(c, { className: "mr-2 h-5 w-5" }),
                t("errors.return_home"),
              ],
            }),
          }),
        ],
      }),
    })
  );
};
export { f as default };
