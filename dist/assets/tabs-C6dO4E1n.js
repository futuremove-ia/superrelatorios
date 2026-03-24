import {
  o as M,
  p as F,
  j as c,
  z as $,
  P as v,
  q as g,
  A as L,
  d as T,
} from "./index-BZzvAVnT.js";
import { r as l } from "./vendor-BgR6OOld.js";
import { c as h, R as V, I as k } from "./index-DUaPDS5r.js";
import { u as G } from "./index-CIr2Jy9Y.js";
var f = "Tabs",
  [B, X] = M(f, [h]),
  y = h(),
  [K, x] = B(f),
  C = l.forwardRef((e, t) => {
    const {
        __scopeTabs: a,
        value: o,
        onValueChange: i,
        defaultValue: d,
        orientation: n = "horizontal",
        dir: u,
        activationMode: b = "automatic",
        ...p
      } = e,
      r = G(u),
      [s, m] = F({ prop: o, onChange: i, defaultProp: d ?? "", caller: f });
    return c.jsx(K, {
      scope: a,
      baseId: $(),
      value: s,
      onValueChange: m,
      orientation: n,
      dir: r,
      activationMode: b,
      children: c.jsx(v.div, { dir: r, "data-orientation": n, ...p, ref: t }),
    });
  });
C.displayName = f;
var N = "TabsList",
  I = l.forwardRef((e, t) => {
    const { __scopeTabs: a, loop: o = !0, ...i } = e,
      d = x(N, a),
      n = y(a);
    return c.jsx(V, {
      asChild: !0,
      ...n,
      orientation: d.orientation,
      dir: d.dir,
      loop: o,
      children: c.jsx(v.div, {
        role: "tablist",
        "aria-orientation": d.orientation,
        ...i,
        ref: t,
      }),
    });
  });
I.displayName = N;
var P = "TabsTrigger",
  R = l.forwardRef((e, t) => {
    const { __scopeTabs: a, value: o, disabled: i = !1, ...d } = e,
      n = x(P, a),
      u = y(a),
      b = A(n.baseId, o),
      p = _(n.baseId, o),
      r = o === n.value;
    return c.jsx(k, {
      asChild: !0,
      ...u,
      focusable: !i,
      active: r,
      children: c.jsx(v.button, {
        type: "button",
        role: "tab",
        "aria-selected": r,
        "aria-controls": p,
        "data-state": r ? "active" : "inactive",
        "data-disabled": i ? "" : void 0,
        disabled: i,
        id: b,
        ...d,
        ref: t,
        onMouseDown: g(e.onMouseDown, (s) => {
          !i && s.button === 0 && s.ctrlKey === !1
            ? n.onValueChange(o)
            : s.preventDefault();
        }),
        onKeyDown: g(e.onKeyDown, (s) => {
          [" ", "Enter"].includes(s.key) && n.onValueChange(o);
        }),
        onFocus: g(e.onFocus, () => {
          const s = n.activationMode !== "manual";
          !r && !i && s && n.onValueChange(o);
        }),
      }),
    });
  });
R.displayName = P;
var j = "TabsContent",
  w = l.forwardRef((e, t) => {
    const { __scopeTabs: a, value: o, forceMount: i, children: d, ...n } = e,
      u = x(j, a),
      b = A(u.baseId, o),
      p = _(u.baseId, o),
      r = o === u.value,
      s = l.useRef(r);
    return (
      l.useEffect(() => {
        const m = requestAnimationFrame(() => (s.current = !1));
        return () => cancelAnimationFrame(m);
      }, []),
      c.jsx(L, {
        present: i || r,
        children: ({ present: m }) =>
          c.jsx(v.div, {
            "data-state": r ? "active" : "inactive",
            "data-orientation": u.orientation,
            role: "tabpanel",
            "aria-labelledby": b,
            hidden: !m,
            id: p,
            tabIndex: 0,
            ...n,
            ref: t,
            style: { ...e.style, animationDuration: s.current ? "0s" : void 0 },
            children: m && d,
          }),
      })
    );
  });
w.displayName = j;
function A(e, t) {
  return `${e}-trigger-${t}`;
}
function _(e, t) {
  return `${e}-content-${t}`;
}
var q = C,
  E = I,
  S = R,
  D = w;
const Y = q,
  z = l.forwardRef(({ className: e, ...t }, a) =>
    c.jsx(E, {
      "data-lov-id": "src\\components\\ui\\tabs.tsx:12:2",
      "data-lov-name": "TabsPrimitive.List",
      "data-component-path": "src\\components\\ui\\tabs.tsx",
      "data-component-line": "12",
      "data-component-file": "tabs.tsx",
      "data-component-name": "TabsPrimitive.List",
      "data-component-content": "%7B%7D",
      ref: a,
      className: T(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        e,
      ),
      ...t,
    }),
  );
z.displayName = E.displayName;
const H = l.forwardRef(({ className: e, ...t }, a) =>
  c.jsx(S, {
    "data-lov-id": "src\\components\\ui\\tabs.tsx:27:2",
    "data-lov-name": "TabsPrimitive.Trigger",
    "data-component-path": "src\\components\\ui\\tabs.tsx",
    "data-component-line": "27",
    "data-component-file": "tabs.tsx",
    "data-component-name": "TabsPrimitive.Trigger",
    "data-component-content": "%7B%7D",
    ref: a,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e,
    ),
    ...t,
  }),
);
H.displayName = S.displayName;
const O = l.forwardRef(({ className: e, ...t }, a) =>
  c.jsx(D, {
    "data-lov-id": "src\\components\\ui\\tabs.tsx:42:2",
    "data-lov-name": "TabsPrimitive.Content",
    "data-component-path": "src\\components\\ui\\tabs.tsx",
    "data-component-line": "42",
    "data-component-file": "tabs.tsx",
    "data-component-name": "TabsPrimitive.Content",
    "data-component-content": "%7B%7D",
    ref: a,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e,
    ),
    ...t,
  }),
);
O.displayName = D.displayName;
export { Y as T, z as a, H as b, O as c };
