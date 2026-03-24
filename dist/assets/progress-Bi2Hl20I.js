import { o as $, j as i, P as v, d as y } from "./index-BZzvAVnT.js";
import { r as d } from "./vendor-BgR6OOld.js";
var u = "Progress",
  p = 100,
  [R, C] = $(u),
  [w, E] = R(u),
  f = d.forwardRef((e, r) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: a,
      getValueLabel: b = j,
      ...h
    } = e;
    (a || a === 0) && !c(a) && console.error(_(`${a}`, "Progress"));
    const t = c(a) ? a : p;
    o !== null && !m(o, t) && console.error(A(`${o}`, "Progress"));
    const s = m(o, t) ? o : null,
      I = l(s) ? b(s, t) : void 0;
    return i.jsx(w, {
      scope: n,
      value: s,
      max: t,
      children: i.jsx(v.div, {
        "aria-valuemax": t,
        "aria-valuemin": 0,
        "aria-valuenow": l(s) ? s : void 0,
        "aria-valuetext": I,
        role: "progressbar",
        "data-state": P(s, t),
        "data-value": s ?? void 0,
        "data-max": t,
        ...h,
        ref: r,
      }),
    });
  });
f.displayName = u;
var g = "ProgressIndicator",
  x = d.forwardRef((e, r) => {
    const { __scopeProgress: n, ...o } = e,
      a = E(g, n);
    return i.jsx(v.div, {
      "data-state": P(a.value, a.max),
      "data-value": a.value ?? void 0,
      "data-max": a.max,
      ...o,
      ref: r,
    });
  });
x.displayName = g;
function j(e, r) {
  return `${Math.round((e / r) * 100)}%`;
}
function P(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function l(e) {
  return typeof e == "number";
}
function c(e) {
  return l(e) && !isNaN(e) && e > 0;
}
function m(e, r) {
  return l(e) && !isNaN(e) && e <= r && e >= 0;
}
function _(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${p}\`.`;
}
function A(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${p} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N = f,
  D = x;
const M = d.forwardRef(({ className: e, value: r, ...n }, o) =>
  i.jsx(N, {
    "data-lov-id": "src\\components\\ui\\progress.tsx:10:2",
    "data-lov-name": "ProgressPrimitive.Root",
    "data-component-path": "src\\components\\ui\\progress.tsx",
    "data-component-line": "10",
    "data-component-file": "progress.tsx",
    "data-component-name": "ProgressPrimitive.Root",
    "data-component-content": "%7B%7D",
    ref: o,
    className: y(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e,
    ),
    ...n,
    children: i.jsx(D, {
      "data-lov-id": "src\\components\\ui\\progress.tsx:18:4",
      "data-lov-name": "ProgressPrimitive.Indicator",
      "data-component-path": "src\\components\\ui\\progress.tsx",
      "data-component-line": "18",
      "data-component-file": "progress.tsx",
      "data-component-name": "ProgressPrimitive.Indicator",
      "data-component-content":
        "%7B%22className%22%3A%22h-full%20w-full%20flex-1%20bg-primary%20transition-all%22%7D",
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (r || 0)}%)` },
    }),
  }),
);
M.displayName = N.displayName;
export { M as P };
