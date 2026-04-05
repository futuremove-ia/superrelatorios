import { j as r } from "./vendor-data-DuuuwLk5.js";
import { r as s } from "./vendor-react-DfYPWlel.js";
import {
  aL as t,
  aM as m,
  aN as n,
  aO as c,
  aP as p,
} from "./vendor-radix-CfL9Rjb9.js";
import { c as d } from "./index-CaCe4Bjh.js";
const f = s.forwardRef(({ className: e, children: a, ...l }, o) =>
  r.jsxs(t, {
    ref: o,
    className: d("relative overflow-hidden", e),
    ...l,
    children: [
      r.jsx(m, { className: "h-full w-full rounded-[inherit]", children: a }),
      r.jsx(i, {}),
      r.jsx(n, {}),
    ],
  }),
);
f.displayName = t.displayName;
const i = s.forwardRef(
  ({ className: e, orientation: a = "vertical", ...l }, o) =>
    r.jsx(c, {
      ref: o,
      orientation: a,
      className: d(
        "flex touch-none select-none transition-colors",
        a === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        a === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e,
      ),
      ...l,
      children: r.jsx(p, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    }),
);
i.displayName = c.displayName;
export { f as S };
