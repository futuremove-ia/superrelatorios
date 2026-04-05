import { j as a, aR as r, aS as t } from "./vendor-radix-C8JHQxE0.js";
import { r as i } from "./vendor-react-Ju9LKgAZ.js";
import { c as m } from "./index-DF8MdIXV.js";
const f = i.forwardRef(({ className: s, value: o, ...l }, e) =>
  a.jsx(r, {
    ref: e,
    className: m(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      s,
    ),
    ...l,
    children: a.jsx(t, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (o || 0)}%)` },
    }),
  }),
);
f.displayName = r.displayName;
export { f as P };
