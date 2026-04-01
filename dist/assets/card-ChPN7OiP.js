import { j as r, c as d, $ as i } from "./index-BNBvVWlM.js";
import { r as t } from "./router-C2uYhr1z.js";
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
  n = t.forwardRef(({ className: a, variant: e, ...s }, o) =>
    r.jsx("div", { ref: o, className: d(l({ variant: e }), a), ...s }),
  );
n.displayName = "Card";
const c = t.forwardRef(({ className: a, ...e }, s) =>
  r.jsx("div", {
    ref: s,
    className: d("flex flex-col space-y-1.5 p-6", a),
    ...e,
  }),
);
c.displayName = "CardHeader";
const f = t.forwardRef(({ className: a, ...e }, s) =>
  r.jsx("h3", {
    ref: s,
    className: d("text-2xl font-semibold leading-none tracking-tight", a),
    ...e,
  }),
);
f.displayName = "CardTitle";
const p = t.forwardRef(({ className: a, ...e }, s) =>
  r.jsx("p", {
    ref: s,
    className: d("text-sm text-muted-foreground", a),
    ...e,
  }),
);
p.displayName = "CardDescription";
const m = t.forwardRef(({ className: a, ...e }, s) =>
  r.jsx("div", { ref: s, className: d("p-6 pt-0", a), ...e }),
);
m.displayName = "CardContent";
const x = t.forwardRef(({ className: a, ...e }, s) =>
  r.jsx("div", { ref: s, className: d("flex items-center p-6 pt-0", a), ...e }),
);
x.displayName = "CardFooter";
export { n as C, m as a, c as b, f as c, p as d, x as e };
