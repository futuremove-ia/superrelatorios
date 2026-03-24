import { j as n, d as e, y as c } from "./index-BZzvAVnT.js";
import { r as d } from "./vendor-BgR6OOld.js";
const r = c("rounded-lg border bg-card text-card-foreground shadow-sm", {
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
  m = d.forwardRef(({ className: a, variant: t, ...o }, s) =>
    n.jsx("div", {
      "data-lov-id": "src\\components\\ui\\card.tsx:27:2",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\ui\\card.tsx",
      "data-component-line": "27",
      "data-component-file": "card.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%7D",
      ref: s,
      className: e(r({ variant: t }), a),
      ...o,
    }),
  );
m.displayName = "Card";
const p = d.forwardRef(({ className: a, ...t }, o) =>
  n.jsx("div", {
    "data-lov-id": "src\\components\\ui\\card.tsx:39:2",
    "data-lov-name": "div",
    "data-component-path": "src\\components\\ui\\card.tsx",
    "data-component-line": "39",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: o,
    className: e("flex flex-col space-y-1.5 p-6", a),
    ...t,
  }),
);
p.displayName = "CardHeader";
const i = d.forwardRef(({ className: a, ...t }, o) =>
  n.jsx("h3", {
    "data-lov-id": "src\\components\\ui\\card.tsx:51:2",
    "data-lov-name": "h3",
    "data-component-path": "src\\components\\ui\\card.tsx",
    "data-component-line": "51",
    "data-component-file": "card.tsx",
    "data-component-name": "h3",
    "data-component-content": "%7B%7D",
    ref: o,
    className: e("text-2xl font-semibold leading-none tracking-tight", a),
    ...t,
  }),
);
i.displayName = "CardTitle";
const l = d.forwardRef(({ className: a, ...t }, o) =>
  n.jsx("p", {
    "data-lov-id": "src\\components\\ui\\card.tsx:66:2",
    "data-lov-name": "p",
    "data-component-path": "src\\components\\ui\\card.tsx",
    "data-component-line": "66",
    "data-component-file": "card.tsx",
    "data-component-name": "p",
    "data-component-content": "%7B%7D",
    ref: o,
    className: e("text-sm text-muted-foreground", a),
    ...t,
  }),
);
l.displayName = "CardDescription";
const x = d.forwardRef(({ className: a, ...t }, o) =>
  n.jsx("div", {
    "data-lov-id": "src\\components\\ui\\card.tsx:78:2",
    "data-lov-name": "div",
    "data-component-path": "src\\components\\ui\\card.tsx",
    "data-component-line": "78",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: o,
    className: e("p-6 pt-0", a),
    ...t,
  }),
);
x.displayName = "CardContent";
const f = d.forwardRef(({ className: a, ...t }, o) =>
  n.jsx("div", {
    "data-lov-id": "src\\components\\ui\\card.tsx:86:2",
    "data-lov-name": "div",
    "data-component-path": "src\\components\\ui\\card.tsx",
    "data-component-line": "86",
    "data-component-file": "card.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: o,
    className: e("flex items-center p-6 pt-0", a),
    ...t,
  }),
);
f.displayName = "CardFooter";
export { m as C, x as a, p as b, i as c, l as d, f as e };
