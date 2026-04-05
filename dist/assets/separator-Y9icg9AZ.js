import { j as m, av as a } from "./vendor-radix-C8JHQxE0.js";
import { r as e } from "./vendor-react-Ju9LKgAZ.js";
import { c as l } from "./index-DF8MdIXV.js";
const f = e.forwardRef(
  (
    { className: o, orientation: r = "horizontal", decorative: s = !0, ...t },
    p,
  ) =>
    m.jsx(a, {
      ref: p,
      decorative: s,
      orientation: r,
      className: l(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        o,
      ),
      ...t,
    }),
);
f.displayName = a.displayName;
export { f as S };
