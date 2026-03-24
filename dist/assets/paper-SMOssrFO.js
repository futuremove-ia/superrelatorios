import { j as a, d } from "./index-BZzvAVnT.js";
import { r as c } from "./vendor-BgR6OOld.js";
const r = c.forwardRef(
  (
    {
      orientation: t = "portrait",
      size: e = "a4",
      children: o,
      className: p,
      padding: n = "md",
    },
    s,
  ) => {
    const l = {
        a4: { portrait: "aspect-[3/4.24]", landscape: "aspect-[4.24/3]" },
        letter: { portrait: "aspect-[3/3.9]", landscape: "aspect-[3.9/3]" },
      },
      m = {
        none: "",
        sm: "p-2 sm:p-3",
        md: "p-3 sm:p-4 lg:p-6",
        lg: "p-4 sm:p-6 lg:p-8",
      };
    return a.jsx("div", {
      "data-lov-id": "src\\components\\ui\\paper.tsx:34:6",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\ui\\paper.tsx",
      "data-component-line": "34",
      "data-component-file": "paper.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%7D",
      ref: s,
      className: d(
        "bg-white border-2 shadow-lg rounded-lg overflow-hidden",
        "w-full max-w-full",
        "md:" + l[e][t],
        "min-h-[400px] sm:min-h-[500px]",
        m[n],
        p,
      ),
      children: a.jsx("div", {
        "data-lov-id": "src\\components\\ui\\paper.tsx:49:8",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\ui\\paper.tsx",
        "data-component-line": "49",
        "data-component-file": "paper.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22h-full%20w-full%20flex%20flex-col%20min-h-0%22%7D",
        className: "h-full w-full flex flex-col min-h-0",
        children: o,
      }),
    });
  },
);
r.displayName = "Paper";
export { r as P };
