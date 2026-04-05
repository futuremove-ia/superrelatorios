import { j as r } from "./vendor-data-DuuuwLk5.js";
import { r as l } from "./vendor-react-DfYPWlel.js";
import { aC as t, aD as m, aE as f } from "./vendor-radix-CfL9Rjb9.js";
import { c as o } from "./index-CaCe4Bjh.js";
const d = l.forwardRef(({ className: a, ...s }, e) =>
  r.jsx(t, {
    ref: e,
    className: o(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      a,
    ),
    ...s,
  }),
);
d.displayName = t.displayName;
const i = l.forwardRef(({ className: a, ...s }, e) =>
  r.jsx(m, { ref: e, className: o("aspect-square h-full w-full", a), ...s }),
);
i.displayName = m.displayName;
const c = l.forwardRef(({ className: a, ...s }, e) =>
  r.jsx(f, {
    ref: e,
    className: o(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      a,
    ),
    ...s,
  }),
);
c.displayName = f.displayName;
export { d as A, i as a, c as b };
