import { j as r } from "./vendor-data-DuuuwLk5.js";
import { r as t } from "./vendor-react-DfYPWlel.js";
import { aJ as a, aK as m } from "./vendor-radix-CfL9Rjb9.js";
import { c as i } from "./index-CaCe4Bjh.js";
const f = t.forwardRef(({ className: s, value: o, ...l }, e) =>
  r.jsx(a, {
    ref: e,
    className: i(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      s,
    ),
    ...l,
    children: r.jsx(m, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (o || 0)}%)` },
    }),
  }),
);
f.displayName = a.displayName;
export { f as P };
