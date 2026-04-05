import { j as l, aK as o, aL as m, aM as f } from "./vendor-radix-C8JHQxE0.js";
import { r } from "./vendor-react-Ju9LKgAZ.js";
import { c as t } from "./index-DF8MdIXV.js";
const d = r.forwardRef(({ className: a, ...s }, e) =>
  l.jsx(o, {
    ref: e,
    className: t(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      a,
    ),
    ...s,
  }),
);
d.displayName = o.displayName;
const i = r.forwardRef(({ className: a, ...s }, e) =>
  l.jsx(m, { ref: e, className: t("aspect-square h-full w-full", a), ...s }),
);
i.displayName = m.displayName;
const c = r.forwardRef(({ className: a, ...s }, e) =>
  l.jsx(f, {
    ref: e,
    className: t(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      a,
    ),
    ...s,
  }),
);
c.displayName = f.displayName;
export { d as A, i as a, c as b };
