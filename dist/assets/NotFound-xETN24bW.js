import { u as n, j as t, B as e } from "./index-BZzvAVnT.js";
import { u as s, L as d } from "./router-D2JcpG7e.js";
import { r as m } from "./vendor-BgR6OOld.js";
import { au as c } from "./utils-C25gojUd.js";
const x = () => {
  const a = s(),
    { t: o } = n();
  return (
    m.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        a.pathname,
      );
    }, [a.pathname]),
    t.jsx("div", {
      "data-lov-id": "src\\pages\\NotFound.tsx:21:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\NotFound.tsx",
      "data-component-line": "21",
      "data-component-file": "NotFound.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-background%20px-4%22%7D",
      className:
        "min-h-screen flex items-center justify-center bg-background px-4",
      children: t.jsxs("div", {
        "data-lov-id": "src\\pages\\NotFound.tsx:22:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\NotFound.tsx",
        "data-component-line": "22",
        "data-component-file": "NotFound.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22text-center%20max-w-md%22%7D",
        className: "text-center max-w-md",
        children: [
          t.jsx("h1", {
            "data-lov-id": "src\\pages\\NotFound.tsx:23:8",
            "data-lov-name": "h1",
            "data-component-path": "src\\pages\\NotFound.tsx",
            "data-component-line": "23",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "h1",
            "data-component-content":
              "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-6xl%20font-bold%20mb-6%20text-primary%22%7D",
            className: "text-6xl font-bold mb-6 text-primary",
            children: "404",
          }),
          t.jsx("h2", {
            "data-lov-id": "src\\pages\\NotFound.tsx:24:8",
            "data-lov-name": "h2",
            "data-component-path": "src\\pages\\NotFound.tsx",
            "data-component-line": "24",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "h2",
            "data-component-content":
              "%7B%22className%22%3A%22text-2xl%20font-semibold%20mb-4%20text-foreground%22%7D",
            className: "text-2xl font-semibold mb-4 text-foreground",
            children: o("errors.not_found_title"),
          }),
          t.jsx("p", {
            "data-lov-id": "src\\pages\\NotFound.tsx:25:8",
            "data-lov-name": "p",
            "data-component-path": "src\\pages\\NotFound.tsx",
            "data-component-line": "25",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22className%22%3A%22text-muted-foreground%20mb-8%22%7D",
            className: "text-muted-foreground mb-8",
            children: o("errors.not_found_desc"),
          }),
          t.jsx(e, {
            "data-lov-id": "src\\pages\\NotFound.tsx:28:8",
            "data-lov-name": "Button",
            "data-component-path": "src\\pages\\NotFound.tsx",
            "data-component-line": "28",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "Button",
            "data-component-content":
              "%7B%22className%22%3A%22w-full%20sm%3Aw-auto%22%7D",
            asChild: !0,
            size: "lg",
            className: "w-full sm:w-auto",
            children: t.jsxs(d, {
              "data-lov-id": "src\\pages\\NotFound.tsx:29:10",
              "data-lov-name": "Link",
              "data-component-path": "src\\pages\\NotFound.tsx",
              "data-component-line": "29",
              "data-component-file": "NotFound.tsx",
              "data-component-name": "Link",
              "data-component-content": "%7B%7D",
              to: "/",
              children: [
                t.jsx(c, {
                  "data-lov-id": "src\\pages\\NotFound.tsx:30:12",
                  "data-lov-name": "Home",
                  "data-component-path": "src\\pages\\NotFound.tsx",
                  "data-component-line": "30",
                  "data-component-file": "NotFound.tsx",
                  "data-component-name": "Home",
                  "data-component-content":
                    "%7B%22className%22%3A%22mr-2%20h-5%20w-5%22%7D",
                  className: "mr-2 h-5 w-5",
                }),
                o("errors.return_home"),
              ],
            }),
          }),
        ],
      }),
    })
  );
};
export { x as default };
