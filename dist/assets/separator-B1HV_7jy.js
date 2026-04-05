import { j as p } from "./vendor-data-DuuuwLk5.js";
import { r as e } from "./vendor-react-DfYPWlel.js";
import { an as o } from "./vendor-radix-CfL9Rjb9.js";
import { c as l } from "./index-CaCe4Bjh.js";
const f = e.forwardRef(
  (
    { className: a, orientation: r = "horizontal", decorative: s = !0, ...t },
    m,
  ) =>
    p.jsx(o, {
      ref: m,
      decorative: s,
      orientation: r,
      className: l(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a,
      ),
      ...t,
    }),
);
f.displayName = o.displayName;
export { f as S };
