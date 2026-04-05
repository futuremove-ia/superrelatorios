import { j as t } from "./vendor-data-DuuuwLk5.js";
import { r as d } from "./vendor-react-DfYPWlel.js";
import {
  ap as b,
  aq as N,
  ar as y,
  as as i,
  at as l,
  au as c,
  av as g,
  aw as m,
  ax as p,
  ay as f,
  az as u,
  aA as x,
  aB as w,
} from "./vendor-radix-CfL9Rjb9.js";
import { c as n } from "./index-CaCe4Bjh.js";
import { K as h, C as j, as as v } from "./vendor-utils-CGetvm_l.js";
const B = b,
  K = N,
  P = g,
  D = d.forwardRef(({ className: e, inset: a, children: o, ...s }, r) =>
    t.jsxs(p, {
      ref: r,
      className: n(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        a && "pl-8",
        e,
      ),
      ...s,
      children: [o, t.jsx(h, { className: "ml-auto h-4 w-4" })],
    }),
  );
D.displayName = p.displayName;
const M = d.forwardRef(({ className: e, ...a }, o) =>
  t.jsx(f, {
    ref: o,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
    ),
    ...a,
  }),
);
M.displayName = f.displayName;
const R = d.forwardRef(({ className: e, sideOffset: a = 4, ...o }, s) =>
  t.jsx(y, {
    children: t.jsx(i, {
      ref: s,
      sideOffset: a,
      className: n(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...o,
    }),
  }),
);
R.displayName = i.displayName;
const C = d.forwardRef(({ className: e, inset: a, ...o }, s) =>
  t.jsx(l, {
    ref: s,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      e,
    ),
    ...o,
  }),
);
C.displayName = l.displayName;
const I = d.forwardRef(({ className: e, children: a, checked: o, ...s }, r) =>
  t.jsxs(u, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: o,
    ...s,
    children: [
      t.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: t.jsx(x, { children: t.jsx(j, { className: "h-4 w-4" }) }),
      }),
      a,
    ],
  }),
);
I.displayName = u.displayName;
const S = d.forwardRef(({ className: e, children: a, ...o }, s) =>
  t.jsxs(w, {
    ref: s,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...o,
    children: [
      t.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: t.jsx(x, {
          children: t.jsx(v, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      a,
    ],
  }),
);
S.displayName = w.displayName;
const z = d.forwardRef(({ className: e, inset: a, ...o }, s) =>
  t.jsx(m, {
    ref: s,
    className: n("px-2 py-1.5 text-sm font-semibold", a && "pl-8", e),
    ...o,
  }),
);
z.displayName = m.displayName;
const k = d.forwardRef(({ className: e, ...a }, o) =>
  t.jsx(c, { ref: o, className: n("-mx-1 my-1 h-px bg-muted", e), ...a }),
);
k.displayName = c.displayName;
const T = ({ className: e, ...a }) =>
  t.jsx("span", {
    className: n("ml-auto text-xs tracking-widest opacity-60", e),
    ...a,
  });
T.displayName = "DropdownMenuShortcut";
export { B as D, K as a, R as b, C as c, k as d, z as e, P as f, T as g };
