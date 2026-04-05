import { j as s } from "./vendor-data-DuuuwLk5.js";
import { r as d } from "./vendor-react-DfYPWlel.js";
import { a as i } from "./vendor-utils-CGetvm_l.js";
import { c as t } from "./index-CaCe4Bjh.js";
const l = i("rounded-lg border bg-card text-card-foreground shadow-sm", {
    variants: {
      variant: {
        default: "shadow-sm border-dsp-light",
        dsp: "card-dsp",
        elevated: "shadow-lg border-0",
        flat: "shadow-none border-0 bg-dsp-subtle-light",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  n = d.forwardRef(({ className: a, variant: r, ...e }, o) =>
    s.jsx("div", { ref: o, className: t(l({ variant: r }), a), ...e }),
  );
n.displayName = "Card";
const c = d.forwardRef(({ className: a, ...r }, e) =>
  s.jsx("div", {
    ref: e,
    className: t("flex flex-col space-y-1.5 p-6", a),
    ...r,
  }),
);
c.displayName = "CardHeader";
const m = d.forwardRef(({ className: a, ...r }, e) =>
  s.jsx("h3", {
    ref: e,
    className: t("text-2xl font-semibold leading-none tracking-tight", a),
    ...r,
  }),
);
m.displayName = "CardTitle";
const f = d.forwardRef(({ className: a, ...r }, e) =>
  s.jsx("p", {
    ref: e,
    className: t("text-sm text-muted-foreground", a),
    ...r,
  }),
);
f.displayName = "CardDescription";
const p = d.forwardRef(({ className: a, ...r }, e) =>
  s.jsx("div", { ref: e, className: t("p-6 pt-0", a), ...r }),
);
p.displayName = "CardContent";
const x = d.forwardRef(({ className: a, ...r }, e) =>
  s.jsx("div", { ref: e, className: t("flex items-center p-6 pt-0", a), ...r }),
);
x.displayName = "CardFooter";
export { n as C, p as a, c as b, m as c, f as d, x as e };
