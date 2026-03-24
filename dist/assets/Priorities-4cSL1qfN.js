import {
  m as Pt,
  o as yt,
  p as jt,
  j as t,
  q as B,
  r as V,
  P as _,
  t as At,
  d as O,
  u as E,
  T as St,
  v as wt,
  w as Nt,
  x as Dt,
  B as I,
  c as Bt,
} from "./index-BZzvAVnT.js";
import { r as p } from "./vendor-BgR6OOld.js";
import { B as J } from "./badge-DMGJasfj.js";
import { K as R } from "./kpi-card-CWRTA62G.js";
import { I as Vt } from "./input-BnDZujQi.js";
import { T as Mt, a as Ct, b as W } from "./tabs-C6dO4E1n.js";
import { P as Tt } from "./PriorityCard-BWrVvT5h.js";
import {
  D as kt,
  a as _t,
  b as Rt,
  c as It,
  d as Et,
  e as Lt,
} from "./dialog-CVqcLEoi.js";
import { u as Kt, c as Q } from "./index-Cda9Zv0V.js";
import { u as Ft } from "./index-CIr2Jy9Y.js";
import { L as Ht } from "./label-DNWlrZfM.js";
import {
  a0 as Ot,
  b as z,
  N as zt,
  J as $,
  p as Ut,
  T as Gt,
  Z as tt,
  q as et,
  s as Yt,
  af as $t,
  u as Zt,
  H as Xt,
} from "./utils-C25gojUd.js";
import { m as qt, E as Wt } from "./mockBusiness-BBPynaQW.js";
import "./router-D2JcpG7e.js";
import "./card-DCmFy9yX.js";
import "./index-DUaPDS5r.js";
import "./index-lGW99eWD.js";
import "./index-DaXQxPyL.js";
var at = ["PageUp", "PageDown"],
  ot = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  nt = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  M = "Slider",
  [U, Jt, Qt] = Pt(M),
  [st, Ee] = yt(M, [Qt]),
  [te, L] = st(M),
  it = p.forwardRef((e, o) => {
    const {
        name: a,
        min: n = 0,
        max: s = 100,
        step: d = 1,
        orientation: i = "horizontal",
        disabled: r = !1,
        minStepsBetweenThumbs: m = 0,
        defaultValue: v = [n],
        value: g,
        onValueChange: l = () => {},
        onValueCommit: x = () => {},
        inverted: h = !1,
        form: j,
        ...f
      } = e,
      c = p.useRef(new Set()),
      u = p.useRef(0),
      b = i === "horizontal" ? ee : ae,
      [P = [], C] = jt({
        prop: g,
        defaultProp: v,
        onChange: (y) => {
          var N;
          ((N = [...c.current][u.current]) == null || N.focus(), l(y));
        },
      }),
      K = p.useRef(P);
    function F(y) {
      const S = re(P, y);
      T(y, S);
    }
    function ht(y) {
      T(y, u.current);
    }
    function bt() {
      const y = K.current[u.current];
      P[u.current] !== y && x(P);
    }
    function T(y, S, { commit: N } = { commit: !1 }) {
      const X = pe(d),
        H = me(Math.round((y - n) / d) * d + n, X),
        k = Q(H, [n, s]);
      C((D = []) => {
        const w = se(D, k, S);
        if (le(w, m * d)) {
          u.current = w.indexOf(k);
          const q = String(w) !== String(D);
          return (q && N && x(w), q ? w : D);
        } else return D;
      });
    }
    return t.jsx(te, {
      scope: e.__scopeSlider,
      name: a,
      disabled: r,
      min: n,
      max: s,
      valueIndexToChangeRef: u,
      thumbs: c.current,
      values: P,
      orientation: i,
      form: j,
      children: t.jsx(U.Provider, {
        scope: e.__scopeSlider,
        children: t.jsx(U.Slot, {
          scope: e.__scopeSlider,
          children: t.jsx(b, {
            "aria-disabled": r,
            "data-disabled": r ? "" : void 0,
            ...f,
            ref: o,
            onPointerDown: B(f.onPointerDown, () => {
              r || (K.current = P);
            }),
            min: n,
            max: s,
            inverted: h,
            onSlideStart: r ? void 0 : F,
            onSlideMove: r ? void 0 : ht,
            onSlideEnd: r ? void 0 : bt,
            onHomeKeyDown: () => !r && T(n, 0, { commit: !0 }),
            onEndKeyDown: () => !r && T(s, P.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: y, direction: S }) => {
              if (!r) {
                const H =
                    at.includes(y.key) || (y.shiftKey && ot.includes(y.key))
                      ? 10
                      : 1,
                  k = u.current,
                  D = P[k],
                  w = d * H * S;
                T(D + w, k, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
it.displayName = M;
var [rt, dt] = st(M, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  ee = p.forwardRef((e, o) => {
    const {
        min: a,
        max: n,
        dir: s,
        inverted: d,
        onSlideStart: i,
        onSlideMove: r,
        onSlideEnd: m,
        onStepKeyDown: v,
        ...g
      } = e,
      [l, x] = p.useState(null),
      h = V(o, (b) => x(b)),
      j = p.useRef(void 0),
      f = Ft(s),
      c = f === "ltr",
      u = (c && !d) || (!c && d);
    function A(b) {
      const P = j.current || l.getBoundingClientRect(),
        C = [0, P.width],
        F = Z(C, u ? [a, n] : [n, a]);
      return ((j.current = P), F(b - P.left));
    }
    return t.jsx(rt, {
      scope: e.__scopeSlider,
      startEdge: u ? "left" : "right",
      endEdge: u ? "right" : "left",
      direction: u ? 1 : -1,
      size: "width",
      children: t.jsx(ct, {
        dir: f,
        "data-orientation": "horizontal",
        ...g,
        ref: h,
        style: {
          ...g.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (b) => {
          const P = A(b.clientX);
          i == null || i(P);
        },
        onSlideMove: (b) => {
          const P = A(b.clientX);
          r == null || r(P);
        },
        onSlideEnd: () => {
          ((j.current = void 0), m == null || m());
        },
        onStepKeyDown: (b) => {
          const C = nt[u ? "from-left" : "from-right"].includes(b.key);
          v == null || v({ event: b, direction: C ? -1 : 1 });
        },
      }),
    });
  }),
  ae = p.forwardRef((e, o) => {
    const {
        min: a,
        max: n,
        inverted: s,
        onSlideStart: d,
        onSlideMove: i,
        onSlideEnd: r,
        onStepKeyDown: m,
        ...v
      } = e,
      g = p.useRef(null),
      l = V(o, g),
      x = p.useRef(void 0),
      h = !s;
    function j(f) {
      const c = x.current || g.current.getBoundingClientRect(),
        u = [0, c.height],
        b = Z(u, h ? [n, a] : [a, n]);
      return ((x.current = c), b(f - c.top));
    }
    return t.jsx(rt, {
      scope: e.__scopeSlider,
      startEdge: h ? "bottom" : "top",
      endEdge: h ? "top" : "bottom",
      size: "height",
      direction: h ? 1 : -1,
      children: t.jsx(ct, {
        "data-orientation": "vertical",
        ...v,
        ref: l,
        style: {
          ...v.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (f) => {
          const c = j(f.clientY);
          d == null || d(c);
        },
        onSlideMove: (f) => {
          const c = j(f.clientY);
          i == null || i(c);
        },
        onSlideEnd: () => {
          ((x.current = void 0), r == null || r());
        },
        onStepKeyDown: (f) => {
          const u = nt[h ? "from-bottom" : "from-top"].includes(f.key);
          m == null || m({ event: f, direction: u ? -1 : 1 });
        },
      }),
    });
  }),
  ct = p.forwardRef((e, o) => {
    const {
        __scopeSlider: a,
        onSlideStart: n,
        onSlideMove: s,
        onSlideEnd: d,
        onHomeKeyDown: i,
        onEndKeyDown: r,
        onStepKeyDown: m,
        ...v
      } = e,
      g = L(M, a);
    return t.jsx(_.span, {
      ...v,
      ref: o,
      onKeyDown: B(e.onKeyDown, (l) => {
        l.key === "Home"
          ? (i(l), l.preventDefault())
          : l.key === "End"
            ? (r(l), l.preventDefault())
            : at.concat(ot).includes(l.key) && (m(l), l.preventDefault());
      }),
      onPointerDown: B(e.onPointerDown, (l) => {
        const x = l.target;
        (x.setPointerCapture(l.pointerId),
          l.preventDefault(),
          g.thumbs.has(x) ? x.focus() : n(l));
      }),
      onPointerMove: B(e.onPointerMove, (l) => {
        l.target.hasPointerCapture(l.pointerId) && s(l);
      }),
      onPointerUp: B(e.onPointerUp, (l) => {
        const x = l.target;
        x.hasPointerCapture(l.pointerId) &&
          (x.releasePointerCapture(l.pointerId), d(l));
      }),
    });
  }),
  lt = "SliderTrack",
  pt = p.forwardRef((e, o) => {
    const { __scopeSlider: a, ...n } = e,
      s = L(lt, a);
    return t.jsx(_.span, {
      "data-disabled": s.disabled ? "" : void 0,
      "data-orientation": s.orientation,
      ...n,
      ref: o,
    });
  });
pt.displayName = lt;
var G = "SliderRange",
  mt = p.forwardRef((e, o) => {
    const { __scopeSlider: a, ...n } = e,
      s = L(G, a),
      d = dt(G, a),
      i = p.useRef(null),
      r = V(o, i),
      m = s.values.length,
      v = s.values.map((x) => ft(x, s.min, s.max)),
      g = m > 1 ? Math.min(...v) : 0,
      l = 100 - Math.max(...v);
    return t.jsx(_.span, {
      "data-orientation": s.orientation,
      "data-disabled": s.disabled ? "" : void 0,
      ...n,
      ref: r,
      style: { ...e.style, [d.startEdge]: g + "%", [d.endEdge]: l + "%" },
    });
  });
mt.displayName = G;
var Y = "SliderThumb",
  xt = p.forwardRef((e, o) => {
    const a = Jt(e.__scopeSlider),
      [n, s] = p.useState(null),
      d = V(o, (r) => s(r)),
      i = p.useMemo(
        () => (n ? a().findIndex((r) => r.ref.current === n) : -1),
        [a, n],
      );
    return t.jsx(oe, { ...e, ref: d, index: i });
  }),
  oe = p.forwardRef((e, o) => {
    const { __scopeSlider: a, index: n, name: s, ...d } = e,
      i = L(Y, a),
      r = dt(Y, a),
      [m, v] = p.useState(null),
      g = V(o, (A) => v(A)),
      l = m ? i.form || !!m.closest("form") : !0,
      x = At(m),
      h = i.values[n],
      j = h === void 0 ? 0 : ft(h, i.min, i.max),
      f = ie(n, i.values.length),
      c = x == null ? void 0 : x[r.size],
      u = c ? de(c, j, r.direction) : 0;
    return (
      p.useEffect(() => {
        if (m)
          return (
            i.thumbs.add(m),
            () => {
              i.thumbs.delete(m);
            }
          );
      }, [m, i.thumbs]),
      t.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [r.startEdge]: `calc(${j}% + ${u}px)`,
        },
        children: [
          t.jsx(U.ItemSlot, {
            scope: e.__scopeSlider,
            children: t.jsx(_.span, {
              role: "slider",
              "aria-label": e["aria-label"] || f,
              "aria-valuemin": i.min,
              "aria-valuenow": h,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...d,
              ref: g,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: B(e.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              }),
            }),
          }),
          l &&
            t.jsx(
              ut,
              {
                name:
                  s ??
                  (i.name
                    ? i.name + (i.values.length > 1 ? "[]" : "")
                    : void 0),
                form: i.form,
                value: h,
              },
              n,
            ),
        ],
      })
    );
  });
xt.displayName = Y;
var ne = "RadioBubbleInput",
  ut = p.forwardRef(({ __scopeSlider: e, value: o, ...a }, n) => {
    const s = p.useRef(null),
      d = V(s, n),
      i = Kt(o);
    return (
      p.useEffect(() => {
        const r = s.current;
        if (!r) return;
        const m = window.HTMLInputElement.prototype,
          g = Object.getOwnPropertyDescriptor(m, "value").set;
        if (i !== o && g) {
          const l = new Event("input", { bubbles: !0 });
          (g.call(r, o), r.dispatchEvent(l));
        }
      }, [i, o]),
      t.jsx(_.input, {
        style: { display: "none" },
        ...a,
        ref: d,
        defaultValue: o,
      })
    );
  });
ut.displayName = ne;
function se(e = [], o, a) {
  const n = [...e];
  return ((n[a] = o), n.sort((s, d) => s - d));
}
function ft(e, o, a) {
  const d = (100 / (a - o)) * (e - o);
  return Q(d, [0, 100]);
}
function ie(e, o) {
  return o > 2
    ? `Value ${e + 1} of ${o}`
    : o === 2
      ? ["Minimum", "Maximum"][e]
      : void 0;
}
function re(e, o) {
  if (e.length === 1) return 0;
  const a = e.map((s) => Math.abs(s - o)),
    n = Math.min(...a);
  return a.indexOf(n);
}
function de(e, o, a) {
  const n = e / 2,
    d = Z([0, 50], [0, n]);
  return (n - d(o) * a) * a;
}
function ce(e) {
  return e.slice(0, -1).map((o, a) => e[a + 1] - o);
}
function le(e, o) {
  if (o > 0) {
    const a = ce(e);
    return Math.min(...a) >= o;
  }
  return !0;
}
function Z(e, o) {
  return (a) => {
    if (e[0] === e[1] || o[0] === o[1]) return o[0];
    const n = (o[1] - o[0]) / (e[1] - e[0]);
    return o[0] + n * (a - e[0]);
  };
}
function pe(e) {
  return (String(e).split(".")[1] || "").length;
}
function me(e, o) {
  const a = Math.pow(10, o);
  return Math.round(e * a) / a;
}
var gt = it,
  xe = pt,
  ue = mt,
  fe = xt;
const vt = p.forwardRef(({ className: e, ...o }, a) =>
  t.jsxs(gt, {
    "data-lov-id": "src\\components\\ui\\slider.tsx:10:2",
    "data-lov-name": "SliderPrimitive.Root",
    "data-component-path": "src\\components\\ui\\slider.tsx",
    "data-component-line": "10",
    "data-component-file": "slider.tsx",
    "data-component-name": "SliderPrimitive.Root",
    "data-component-content": "%7B%7D",
    ref: a,
    className: O("relative flex w-full touch-none select-none items-center", e),
    ...o,
    children: [
      t.jsx(xe, {
        "data-lov-id": "src\\components\\ui\\slider.tsx:18:4",
        "data-lov-name": "SliderPrimitive.Track",
        "data-component-path": "src\\components\\ui\\slider.tsx",
        "data-component-line": "18",
        "data-component-file": "slider.tsx",
        "data-component-name": "SliderPrimitive.Track",
        "data-component-content":
          "%7B%22className%22%3A%22relative%20h-2%20w-full%20grow%20overflow-hidden%20rounded-full%20bg-secondary%22%7D",
        className:
          "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: t.jsx(ue, {
          "data-lov-id": "src\\components\\ui\\slider.tsx:19:6",
          "data-lov-name": "SliderPrimitive.Range",
          "data-component-path": "src\\components\\ui\\slider.tsx",
          "data-component-line": "19",
          "data-component-file": "slider.tsx",
          "data-component-name": "SliderPrimitive.Range",
          "data-component-content":
            "%7B%22className%22%3A%22absolute%20h-full%20bg-primary%22%7D",
          className: "absolute h-full bg-primary",
        }),
      }),
      t.jsx(fe, {
        "data-lov-id": "src\\components\\ui\\slider.tsx:21:4",
        "data-lov-name": "SliderPrimitive.Thumb",
        "data-component-path": "src\\components\\ui\\slider.tsx",
        "data-component-line": "21",
        "data-component-file": "slider.tsx",
        "data-component-name": "SliderPrimitive.Thumb",
        "data-component-content":
          "%7B%22className%22%3A%22block%20h-5%20w-5%20rounded-full%20border-2%20border-primary%20bg-background%20ring-offset-background%20transition-colors%20focus-visible%3Aoutline-none%20focus-visible%3Aring-2%20focus-visible%3Aring-ring%20focus-visible%3Aring-offset-2%20disabled%3Apointer-events-none%20disabled%3Aopacity-50%22%7D",
        className:
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  }),
);
vt.displayName = gt.displayName;
const ge = ({ score: e, onChange: o }) => {
    const { t: a } = E(),
      n = (d, i) => {
        const r = { ...e, [d]: i };
        ((r.calculatedValue = Math.round(
          (r.impact * r.urgency * r.confidence) / r.effort,
        )),
          o(r));
      },
      s = [
        {
          key: "impact",
          label: a("priorities.validation_modal.rice.impact"),
          tooltip: a("priorities.validation_modal.rice.impact_tip"),
        },
        {
          key: "urgency",
          label: a("priorities.validation_modal.rice.urgency"),
          tooltip: a("priorities.validation_modal.rice.urgency_tip"),
        },
        {
          key: "confidence",
          label: a("priorities.validation_modal.rice.confidence"),
          tooltip: a("priorities.validation_modal.rice.confidence_tip"),
        },
        {
          key: "effort",
          label: a("priorities.validation_modal.rice.effort"),
          tooltip: a("priorities.validation_modal.rice.effort_tip"),
        },
      ];
    return t.jsxs("div", {
      "data-lov-id": "src\\components\\business\\ScoreAdjuster.tsx:34:4",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\business\\ScoreAdjuster.tsx",
      "data-component-line": "34",
      "data-component-file": "ScoreAdjuster.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22space-y-6%20py-4%22%7D",
      className: "space-y-6 py-4",
      children: [
        t.jsx("div", {
          "data-lov-id": "src\\components\\business\\ScoreAdjuster.tsx:35:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\business\\ScoreAdjuster.tsx",
          "data-component-line": "35",
          "data-component-file": "ScoreAdjuster.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20gap-6%22%7D",
          className: "grid grid-cols-1 gap-6",
          children: s.map((d) =>
            t.jsxs(
              "div",
              {
                "data-lov-id":
                  "src\\components\\business\\ScoreAdjuster.tsx:37:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\ScoreAdjuster.tsx",
                "data-component-line": "37",
                "data-component-file": "ScoreAdjuster.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-3%22%7D",
                className: "space-y-3",
                children: [
                  t.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\business\\ScoreAdjuster.tsx:38:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\ScoreAdjuster.tsx",
                    "data-component-line": "38",
                    "data-component-file": "ScoreAdjuster.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      t.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\business\\ScoreAdjuster.tsx:39:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\business\\ScoreAdjuster.tsx",
                        "data-component-line": "39",
                        "data-component-file": "ScoreAdjuster.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          t.jsx(Ht, {
                            "data-lov-id":
                              "src\\components\\business\\ScoreAdjuster.tsx:40:16",
                            "data-lov-name": "Label",
                            "data-component-path":
                              "src\\components\\business\\ScoreAdjuster.tsx",
                            "data-component-line": "40",
                            "data-component-file": "ScoreAdjuster.tsx",
                            "data-component-name": "Label",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20font-bold%20uppercase%20tracking-wider%20text-muted-foreground%22%7D",
                            className:
                              "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                            children: d.label,
                          }),
                          t.jsx(St, {
                            "data-lov-id":
                              "src\\components\\business\\ScoreAdjuster.tsx:43:16",
                            "data-lov-name": "TooltipProvider",
                            "data-component-path":
                              "src\\components\\business\\ScoreAdjuster.tsx",
                            "data-component-line": "43",
                            "data-component-file": "ScoreAdjuster.tsx",
                            "data-component-name": "TooltipProvider",
                            "data-component-content": "%7B%7D",
                            children: t.jsxs(wt, {
                              "data-lov-id":
                                "src\\components\\business\\ScoreAdjuster.tsx:44:18",
                              "data-lov-name": "Tooltip",
                              "data-component-path":
                                "src\\components\\business\\ScoreAdjuster.tsx",
                              "data-component-line": "44",
                              "data-component-file": "ScoreAdjuster.tsx",
                              "data-component-name": "Tooltip",
                              "data-component-content": "%7B%7D",
                              children: [
                                t.jsx(Nt, {
                                  "data-lov-id":
                                    "src\\components\\business\\ScoreAdjuster.tsx:45:20",
                                  "data-lov-name": "TooltipTrigger",
                                  "data-component-path":
                                    "src\\components\\business\\ScoreAdjuster.tsx",
                                  "data-component-line": "45",
                                  "data-component-file": "ScoreAdjuster.tsx",
                                  "data-component-name": "TooltipTrigger",
                                  "data-component-content": "%7B%7D",
                                  asChild: !0,
                                  children: t.jsx(Ot, {
                                    "data-lov-id":
                                      "src\\components\\business\\ScoreAdjuster.tsx:46:22",
                                    "data-lov-name": "Info",
                                    "data-component-path":
                                      "src\\components\\business\\ScoreAdjuster.tsx",
                                    "data-component-line": "46",
                                    "data-component-file": "ScoreAdjuster.tsx",
                                    "data-component-name": "Info",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-3.5%20w-3.5%20text-muted-foreground%20cursor-help%22%7D",
                                    className:
                                      "h-3.5 w-3.5 text-muted-foreground cursor-help",
                                  }),
                                }),
                                t.jsx(Dt, {
                                  "data-lov-id":
                                    "src\\components\\business\\ScoreAdjuster.tsx:48:20",
                                  "data-lov-name": "TooltipContent",
                                  "data-component-path":
                                    "src\\components\\business\\ScoreAdjuster.tsx",
                                  "data-component-line": "48",
                                  "data-component-file": "ScoreAdjuster.tsx",
                                  "data-component-name": "TooltipContent",
                                  "data-component-content": "%7B%7D",
                                  children: t.jsx("p", {
                                    "data-lov-id":
                                      "src\\components\\business\\ScoreAdjuster.tsx:49:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\components\\business\\ScoreAdjuster.tsx",
                                    "data-component-line": "49",
                                    "data-component-file": "ScoreAdjuster.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22max-w-xs%20text-xs%22%7D",
                                    className: "max-w-xs text-xs",
                                    children: d.tooltip,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t.jsx("span", {
                        "data-lov-id":
                          "src\\components\\business\\ScoreAdjuster.tsx:54:14",
                        "data-lov-name": "span",
                        "data-component-path":
                          "src\\components\\business\\ScoreAdjuster.tsx",
                        "data-component-line": "54",
                        "data-component-file": "ScoreAdjuster.tsx",
                        "data-component-name": "span",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-lg%20font-mono%20font-bold%20text-primary%22%7D",
                        className: "text-lg font-mono font-bold text-primary",
                        children: e[d.key],
                      }),
                    ],
                  }),
                  t.jsx(vt, {
                    "data-lov-id":
                      "src\\components\\business\\ScoreAdjuster.tsx:58:12",
                    "data-lov-name": "Slider",
                    "data-component-path":
                      "src\\components\\business\\ScoreAdjuster.tsx",
                    "data-component-line": "58",
                    "data-component-file": "ScoreAdjuster.tsx",
                    "data-component-name": "Slider",
                    "data-component-content":
                      "%7B%22className%22%3A%22py-2%22%7D",
                    value: [e[d.key]],
                    min: 1,
                    max: 10,
                    step: 1,
                    onValueChange: ([i]) => n(d.key, i),
                    className: "py-2",
                  }),
                ],
              },
              d.key,
            ),
          ),
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\components\\business\\ScoreAdjuster.tsx:70:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\business\\ScoreAdjuster.tsx",
          "data-component-line": "70",
          "data-component-file": "ScoreAdjuster.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22mt-8%20p-4%20bg-primary%2F5%20rounded-xl%20border%20border-primary%2F10%20flex%20items-center%20justify-between%22%7D",
          className:
            "mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between",
          children: [
            t.jsxs("div", {
              "data-lov-id":
                "src\\components\\business\\ScoreAdjuster.tsx:71:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\ScoreAdjuster.tsx",
              "data-component-line": "71",
              "data-component-file": "ScoreAdjuster.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%7D",
              children: [
                t.jsx("p", {
                  "data-lov-id":
                    "src\\components\\business\\ScoreAdjuster.tsx:72:10",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\business\\ScoreAdjuster.tsx",
                  "data-component-line": "72",
                  "data-component-file": "ScoreAdjuster.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xs%20font-bold%20uppercase%20text-primary%2F60%20tracking-widest%22%7D",
                  className:
                    "text-xs font-bold uppercase text-primary/60 tracking-widest",
                  children: a("priorities.validation_modal.rice.final_score"),
                }),
                t.jsx("p", {
                  "data-lov-id":
                    "src\\components\\business\\ScoreAdjuster.tsx:73:10",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\business\\ScoreAdjuster.tsx",
                  "data-component-line": "73",
                  "data-component-file": "ScoreAdjuster.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                  className: "text-sm text-muted-foreground",
                  children: a("priorities.validation_modal.rice.formula"),
                }),
              ],
            }),
            t.jsx("div", {
              "data-lov-id":
                "src\\components\\business\\ScoreAdjuster.tsx:75:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\ScoreAdjuster.tsx",
              "data-component-line": "75",
              "data-component-file": "ScoreAdjuster.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22text-3xl%20font-black%20text-primary%22%7D",
              className: "text-3xl font-black text-primary",
              children: e.calculatedValue,
            }),
          ],
        }),
      ],
    });
  },
  ve = ({ priority: e, isOpen: o, onClose: a, onValidate: n }) => {
    const { t: s } = E(),
      [d, i] = p.useState({ ...e.score }),
      r = () => {
        (n(e.id, d), a());
      };
    return t.jsx(kt, {
      "data-lov-id":
        "src\\components\\business\\PriorityValidationModal.tsx:32:4",
      "data-lov-name": "Dialog",
      "data-component-path":
        "src\\components\\business\\PriorityValidationModal.tsx",
      "data-component-line": "32",
      "data-component-file": "PriorityValidationModal.tsx",
      "data-component-name": "Dialog",
      "data-component-content": "%7B%7D",
      open: o,
      onOpenChange: a,
      children: t.jsxs(_t, {
        "data-lov-id":
          "src\\components\\business\\PriorityValidationModal.tsx:33:6",
        "data-lov-name": "DialogContent",
        "data-component-path":
          "src\\components\\business\\PriorityValidationModal.tsx",
        "data-component-line": "33",
        "data-component-file": "PriorityValidationModal.tsx",
        "data-component-name": "DialogContent",
        "data-component-content": "%7B%22className%22%3A%22max-w-2xl%22%7D",
        className: "max-w-2xl",
        children: [
          t.jsxs(Rt, {
            "data-lov-id":
              "src\\components\\business\\PriorityValidationModal.tsx:34:8",
            "data-lov-name": "DialogHeader",
            "data-component-path":
              "src\\components\\business\\PriorityValidationModal.tsx",
            "data-component-line": "34",
            "data-component-file": "PriorityValidationModal.tsx",
            "data-component-name": "DialogHeader",
            "data-component-content": "%7B%7D",
            children: [
              t.jsxs("div", {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:35:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "35",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-primary%20mb-2%22%7D",
                className: "flex items-center gap-2 text-primary mb-2",
                children: [
                  t.jsx(z, {
                    "data-lov-id":
                      "src\\components\\business\\PriorityValidationModal.tsx:36:12",
                    "data-lov-name": "Target",
                    "data-component-path":
                      "src\\components\\business\\PriorityValidationModal.tsx",
                    "data-component-line": "36",
                    "data-component-file": "PriorityValidationModal.tsx",
                    "data-component-name": "Target",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                    className: "h-5 w-5",
                  }),
                  t.jsx("span", {
                    "data-lov-id":
                      "src\\components\\business\\PriorityValidationModal.tsx:37:12",
                    "data-lov-name": "span",
                    "data-component-path":
                      "src\\components\\business\\PriorityValidationModal.tsx",
                    "data-component-line": "37",
                    "data-component-file": "PriorityValidationModal.tsx",
                    "data-component-name": "span",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-widest%22%7D",
                    className: "text-xs font-bold uppercase tracking-widest",
                    children: s("priorities.validation_modal.title"),
                  }),
                ],
              }),
              t.jsx(It, {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:39:10",
                "data-lov-name": "DialogTitle",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "39",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "DialogTitle",
                "data-component-content":
                  "%7B%22className%22%3A%22text-2xl%22%7D",
                className: "text-2xl",
                children: e.title,
              }),
              t.jsx(Et, {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:40:10",
                "data-lov-name": "DialogDescription",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "40",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "DialogDescription",
                "data-component-content": "%7B%7D",
                children: s("priorities.validation_modal.description"),
              }),
            ],
          }),
          t.jsxs("div", {
            "data-lov-id":
              "src\\components\\business\\PriorityValidationModal.tsx:45:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\components\\business\\PriorityValidationModal.tsx",
            "data-component-line": "45",
            "data-component-file": "PriorityValidationModal.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-8%20mt-4%22%7D",
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-4",
            children: [
              t.jsxs("div", {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:46:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "46",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [
                  t.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\business\\PriorityValidationModal.tsx:47:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\PriorityValidationModal.tsx",
                    "data-component-line": "47",
                    "data-component-file": "PriorityValidationModal.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20bg-muted%2F30%20rounded-lg%22%7D",
                    className: "p-4 bg-muted/30 rounded-lg",
                    children: [
                      t.jsxs("h4", {
                        "data-lov-id":
                          "src\\components\\business\\PriorityValidationModal.tsx:48:14",
                        "data-lov-name": "h4",
                        "data-component-path":
                          "src\\components\\business\\PriorityValidationModal.tsx",
                        "data-component-line": "48",
                        "data-component-file": "PriorityValidationModal.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20font-bold%20mb-2%20flex%20items-center%20gap-2%22%7D",
                        className:
                          "text-sm font-bold mb-2 flex items-center gap-2",
                        children: [
                          t.jsx(zt, {
                            "data-lov-id":
                              "src\\components\\business\\PriorityValidationModal.tsx:49:16",
                            "data-lov-name": "AlertCircle",
                            "data-component-path":
                              "src\\components\\business\\PriorityValidationModal.tsx",
                            "data-component-line": "49",
                            "data-component-file":
                              "PriorityValidationModal.tsx",
                            "data-component-name": "AlertCircle",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20text-amber-500%22%7D",
                            className: "h-4 w-4 text-amber-500",
                          }),
                          s("priorities.validation_modal.why_important"),
                        ],
                      }),
                      t.jsx("p", {
                        "data-lov-id":
                          "src\\components\\business\\PriorityValidationModal.tsx:52:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\business\\PriorityValidationModal.tsx",
                        "data-component-line": "52",
                        "data-component-file": "PriorityValidationModal.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
                        className:
                          "text-sm text-muted-foreground leading-relaxed",
                        children: e.explanation,
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\business\\PriorityValidationModal.tsx:57:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\PriorityValidationModal.tsx",
                    "data-component-line": "57",
                    "data-component-file": "PriorityValidationModal.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      t.jsx("h4", {
                        "data-lov-id":
                          "src\\components\\business\\PriorityValidationModal.tsx:58:14",
                        "data-lov-name": "h4",
                        "data-component-path":
                          "src\\components\\business\\PriorityValidationModal.tsx",
                        "data-component-line": "58",
                        "data-component-file": "PriorityValidationModal.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xs%20font-bold%20uppercase%20text-muted-foreground%20tracking-wider%22%7D",
                        className:
                          "text-xs font-bold uppercase text-muted-foreground tracking-wider",
                        children: s("priorities.validation_modal.status_label"),
                      }),
                      t.jsx("div", {
                        "data-lov-id":
                          "src\\components\\business\\PriorityValidationModal.tsx:59:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\business\\PriorityValidationModal.tsx",
                        "data-component-line": "59",
                        "data-component-file": "PriorityValidationModal.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20font-medium%20text-amber-600%20bg-amber-50%20w-fit%20px-2%20py-1%20rounded%20border%20border-amber-100%22%7D",
                        className:
                          "flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded border border-amber-100",
                        children: s("priorities.card.ai_suggested"),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsx("div", {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:65:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "65",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22border-l%20pl-8%20border-border%2F50%22%7D",
                className: "border-l pl-8 border-border/50",
                children: t.jsx(ge, {
                  "data-lov-id":
                    "src\\components\\business\\PriorityValidationModal.tsx:66:12",
                  "data-lov-name": "ScoreAdjuster",
                  "data-component-path":
                    "src\\components\\business\\PriorityValidationModal.tsx",
                  "data-component-line": "66",
                  "data-component-file": "PriorityValidationModal.tsx",
                  "data-component-name": "ScoreAdjuster",
                  "data-component-content": "%7B%7D",
                  score: d,
                  onChange: i,
                }),
              }),
            ],
          }),
          t.jsxs(Lt, {
            "data-lov-id":
              "src\\components\\business\\PriorityValidationModal.tsx:70:8",
            "data-lov-name": "DialogFooter",
            "data-component-path":
              "src\\components\\business\\PriorityValidationModal.tsx",
            "data-component-line": "70",
            "data-component-file": "PriorityValidationModal.tsx",
            "data-component-name": "DialogFooter",
            "data-component-content":
              "%7B%22className%22%3A%22mt-8%20pt-6%20border-t%22%7D",
            className: "mt-8 pt-6 border-t",
            children: [
              t.jsx(I, {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:71:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "71",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "ghost",
                onClick: a,
                children: s("priorities.validation_modal.cta_cancel"),
              }),
              t.jsxs(I, {
                "data-lov-id":
                  "src\\components\\business\\PriorityValidationModal.tsx:72:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\components\\business\\PriorityValidationModal.tsx",
                "data-component-line": "72",
                "data-component-file": "PriorityValidationModal.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%22className%22%3A%22gap-2%22%7D",
                onClick: r,
                className: "gap-2",
                children: [
                  t.jsx($, {
                    "data-lov-id":
                      "src\\components\\business\\PriorityValidationModal.tsx:73:12",
                    "data-lov-name": "CheckCircle2",
                    "data-component-path":
                      "src\\components\\business\\PriorityValidationModal.tsx",
                    "data-component-line": "73",
                    "data-component-file": "PriorityValidationModal.tsx",
                    "data-component-name": "CheckCircle2",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                    className: "h-4 w-4",
                  }),
                  s("priorities.validation_modal.cta_confirm"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  he = ({ priority: e, onValidate: o, onAction: a }) => {
    const { t: n } = E(),
      s = (d) => {
        switch (d) {
          case "high":
            return "text-red-600 bg-red-50 border-red-100";
          case "medium":
            return "text-amber-600 bg-amber-50 border-amber-100";
          case "low":
            return "text-blue-600 bg-blue-50 border-blue-100";
        }
      };
    return t.jsxs("div", {
      "data-lov-id": "src\\pages\\app\\Priorities.tsx:45:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\app\\Priorities.tsx",
      "data-component-line": "45",
      "data-component-file": "Priorities.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20items-start%20sm%3Aitems-center%20justify-between%20p-4%20bg-card%20rounded-xl%20border%20border-border%2F40%20hover%3Aborder-primary%2F20%20transition-all%20gap-4%20group%22%7D",
      className:
        "flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-card rounded-xl border border-border/40 hover:border-primary/20 transition-all gap-4 group",
      children: [
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:46:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "46",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20items-center%20gap-4%20flex-1%20min-w-0%22%7D",
          className: "flex items-center gap-4 flex-1 min-w-0",
          children: [
            t.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:47:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "47",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%7D",
              className: O(
                "p-2 rounded-lg flex-shrink-0",
                e.status === "validated" ? "bg-green-50" : "bg-amber-50",
              ),
              children:
                e.status === "validated"
                  ? t.jsx($, {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:52:12",
                      "data-lov-name": "CheckCircle2",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "52",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "CheckCircle2",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-green-600%22%7D",
                      className: "h-5 w-5 text-green-600",
                    })
                  : t.jsx(tt, {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:54:12",
                      "data-lov-name": "Zap",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "54",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "Zap",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-amber-600%22%7D",
                      className: "h-5 w-5 text-amber-600",
                    }),
            }),
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:57:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "57",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22min-w-0%20flex-1%22%7D",
              className: "min-w-0 flex-1",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:58:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "58",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-1%22%7D",
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    t.jsx("h4", {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:59:12",
                      "data-lov-name": "h4",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "59",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "h4",
                      "data-component-content":
                        "%7B%22className%22%3A%22font-bold%20text-sm%20text-foreground%20truncate%22%7D",
                      className: "font-bold text-sm text-foreground truncate",
                      children: e.title,
                    }),
                    t.jsx(J, {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:60:12",
                      "data-lov-name": "Badge",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "60",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "Badge",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      className: O("text-[10px] h-4 px-1", s(e.level)),
                      children: n(`priorities.levels.${e.level}`),
                    }),
                  ],
                }),
                t.jsx("p", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:64:10",
                  "data-lov-name": "p",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "64",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20line-clamp-1%22%7D",
                  className: "text-xs text-muted-foreground line-clamp-1",
                  children: e.explanation,
                }),
              ],
            }),
          ],
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:68:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "68",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20items-center%20gap-4%20w-full%20sm%3Aw-auto%20justify-between%20sm%3Ajustify-end%22%7D",
          className:
            "flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:69:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "69",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20flex-col%20items-end%22%7D",
              className: "flex flex-col items-end",
              children: [
                t.jsx("span", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:70:10",
                  "data-lov-name": "span",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "70",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "span",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-%5B10px%5D%20font-bold%20text-muted-foreground%20uppercase%20tracking-widest%22%7D",
                  className:
                    "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                  children: n("priorities.card.score"),
                }),
                t.jsx("span", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:71:10",
                  "data-lov-name": "span",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "71",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "span",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-sm%20font-black%20text-foreground%22%7D",
                  className: "text-sm font-black text-foreground",
                  children: e.score.calculatedValue,
                }),
              ],
            }),
            t.jsxs(I, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:74:8",
              "data-lov-name": "Button",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "74",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "Button",
              "data-component-content":
                "%7B%22className%22%3A%22h-9%20px-4%20font-bold%22%7D",
              size: "sm",
              variant: e.status === "suggested" ? "default" : "outline",
              className: "h-9 px-4 font-bold",
              onClick: () => (e.status === "suggested" ? o(e) : a(e.id)),
              children: [
                e.status === "suggested"
                  ? n("priorities.card.cta_validate")
                  : n("priorities.card.cta_action"),
                t.jsx(et, {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:81:10",
                  "data-lov-name": "ArrowRight",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "81",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "ArrowRight",
                  "data-component-content":
                    "%7B%22className%22%3A%22ml-2%20h-4%20w-4%22%7D",
                  className: "ml-2 h-4 w-4",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Le = () => {
    const { t: e } = E(),
      { toast: o } = Bt(),
      [a, n] = p.useState(qt),
      [s, d] = p.useState(null),
      [i, r] = p.useState(!1),
      [m, v] = p.useState(""),
      [g, l] = p.useState("cards"),
      x = p.useMemo(
        () =>
          a.filter(
            (c) =>
              c.title.toLowerCase().includes(m.toLowerCase()) ||
              c.explanation.toLowerCase().includes(m.toLowerCase()),
          ),
        [a, m],
      ),
      h = (c) => {
        (d(c), r(!0));
      },
      j = (c, u) => {
        (n((A) =>
          A.map((b) =>
            b.id === c ? { ...b, status: "validated", score: u } : b,
          ),
        ),
          o({
            title: e("priorities.toast.validated_title"),
            description: e("priorities.toast.validated_desc"),
          }));
      },
      f = {
        high: a.filter((c) => c.level === "high").length,
        medium: a.filter((c) => c.level === "medium").length,
        low: a.filter((c) => c.level === "low").length,
        validated: a.filter((c) => c.status === "validated").length,
      };
    return t.jsxs("div", {
      "data-lov-id": "src\\pages\\app\\Priorities.tsx:130:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\app\\Priorities.tsx",
      "data-component-line": "130",
      "data-component-file": "Priorities.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%20space-y-8%22%7D",
      className: "p-4 sm:p-6 max-w-7xl mx-auto space-y-8",
      children: [
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:131:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "131",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-6%20border-b%20pb-6%22%7D",
          className:
            "flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:132:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "132",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-1%22%7D",
              className: "space-y-1",
              children: [
                t.jsxs("h1", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:133:10",
                  "data-lov-name": "h1",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "133",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "h1",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-2xl%20sm%3Atext-4xl%20font-black%20text-foreground%20tracking-tight%20flex%20items-center%20gap-3%22%7D",
                  className:
                    "text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3",
                  children: [
                    t.jsx("div", {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:134:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "134",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-2%20bg-primary%2F10%20rounded-xl%22%7D",
                      className: "p-2 bg-primary/10 rounded-xl",
                      children: t.jsx(z, {
                        "data-lov-id": "src\\pages\\app\\Priorities.tsx:135:14",
                        "data-lov-name": "Target",
                        "data-component-path":
                          "src\\pages\\app\\Priorities.tsx",
                        "data-component-line": "135",
                        "data-component-file": "Priorities.tsx",
                        "data-component-name": "Target",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D",
                        className: "h-8 w-8 text-primary",
                      }),
                    }),
                    e("priorities.title"),
                  ],
                }),
                t.jsx("p", {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:139:10",
                  "data-lov-name": "p",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "139",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-muted-foreground%20text-sm%20font-medium%22%7D",
                  className: "text-muted-foreground text-sm font-medium",
                  children: e("priorities.subtitle"),
                }),
              ],
            }),
            t.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:143:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "143",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
              className: "flex items-center gap-2",
              children: t.jsxs(I, {
                "data-lov-id": "src\\pages\\app\\Priorities.tsx:144:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\Priorities.tsx",
                "data-component-line": "144",
                "data-component-file": "Priorities.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22font-bold%20border-2%22%7D",
                variant: "outline",
                className: "font-bold border-2",
                children: [
                  t.jsx(Ut, {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:145:12",
                    "data-lov-name": "Plus",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "145",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "Plus",
                    "data-component-content":
                      "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                    className: "mr-2 h-4 w-4",
                  }),
                  e("priorities.new_analysis"),
                ],
              }),
            }),
          ],
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:152:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "152",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-3%20sm%3Agap-4%22%7D",
          className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
          children: [
            t.jsx(R, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:153:8",
              "data-lov-name": "KPICard",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "153",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "KPICard",
              "data-component-content": "%7B%7D",
              title: e("priorities.summary.high"),
              value: f.high.toString(),
              icon: Gt,
              variant: "destructive",
            }),
            t.jsx(R, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:159:8",
              "data-lov-name": "KPICard",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "159",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "KPICard",
              "data-component-content": "%7B%7D",
              title: e("priorities.summary.medium"),
              value: f.medium.toString(),
              icon: tt,
              variant: "warning",
            }),
            t.jsx(R, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:165:8",
              "data-lov-name": "KPICard",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "165",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "KPICard",
              "data-component-content": "%7B%7D",
              title: e("priorities.summary.low"),
              value: f.low.toString(),
              icon: et,
              variant: "info",
            }),
            t.jsx(R, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:171:8",
              "data-lov-name": "KPICard",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "171",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "KPICard",
              "data-component-content": "%7B%7D",
              title: e("priorities.summary.validated"),
              value: f.validated.toString(),
              icon: $,
              variant: "success",
            }),
          ],
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:180:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "180",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20flex-col%20md%3Aflex-row%20gap-4%20items-center%20justify-between%20bg-muted%2F30%20p-4%20rounded-2xl%20border%20border-border%2F40%22%7D",
          className:
            "flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/30 p-4 rounded-2xl border border-border/40",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:181:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "181",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22relative%20w-full%20md%3Amax-w-md%22%7D",
              className: "relative w-full md:max-w-md",
              children: [
                t.jsx(Yt, {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:182:10",
                  "data-lov-name": "Search",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "182",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "Search",
                  "data-component-content":
                    "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20-translate-y-1%2F2%20h-4%20w-4%20text-muted-foreground%22%7D",
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                t.jsx(Vt, {
                  "data-lov-id": "src\\pages\\app\\Priorities.tsx:183:10",
                  "data-lov-name": "Input",
                  "data-component-path": "src\\pages\\app\\Priorities.tsx",
                  "data-component-line": "183",
                  "data-component-file": "Priorities.tsx",
                  "data-component-name": "Input",
                  "data-component-content":
                    "%7B%22className%22%3A%22pl-10%20bg-background%20border-none%20shadow-sm%20h-11%20rounded-xl%22%7D",
                  placeholder: e("priorities.search_placeholder"),
                  className:
                    "pl-10 bg-background border-none shadow-sm h-11 rounded-xl",
                  value: m,
                  onChange: (c) => v(c.target.value),
                }),
              ],
            }),
            t.jsx(Mt, {
              "data-lov-id": "src\\pages\\app\\Priorities.tsx:191:8",
              "data-lov-name": "Tabs",
              "data-component-path": "src\\pages\\app\\Priorities.tsx",
              "data-component-line": "191",
              "data-component-file": "Priorities.tsx",
              "data-component-name": "Tabs",
              "data-component-content":
                "%7B%22className%22%3A%22w-full%20md%3Aw-auto%22%7D",
              value: g,
              onValueChange: (c) => l(c),
              className: "w-full md:w-auto",
              children: t.jsxs(Ct, {
                "data-lov-id": "src\\pages\\app\\Priorities.tsx:192:10",
                "data-lov-name": "TabsList",
                "data-component-path": "src\\pages\\app\\Priorities.tsx",
                "data-component-line": "192",
                "data-component-file": "Priorities.tsx",
                "data-component-name": "TabsList",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20w-full%20grid-cols-2%20h-11%20p-1%20bg-background%20border%20shadow-sm%20rounded-xl%22%7D",
                className:
                  "grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl",
                children: [
                  t.jsxs(W, {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:193:12",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "193",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22rounded-lg%20font-bold%20gap-2%22%7D",
                    value: "cards",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      t.jsx($t, {
                        "data-lov-id": "src\\pages\\app\\Priorities.tsx:194:14",
                        "data-lov-name": "LayoutGrid",
                        "data-component-path":
                          "src\\pages\\app\\Priorities.tsx",
                        "data-component-line": "194",
                        "data-component-file": "Priorities.tsx",
                        "data-component-name": "LayoutGrid",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                        className: "h-4 w-4",
                      }),
                      e("priorities.view_cards"),
                    ],
                  }),
                  t.jsxs(W, {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:197:12",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "197",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22rounded-lg%20font-bold%20gap-2%22%7D",
                    value: "list",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      t.jsx(Zt, {
                        "data-lov-id": "src\\pages\\app\\Priorities.tsx:198:14",
                        "data-lov-name": "ListIcon",
                        "data-component-path":
                          "src\\pages\\app\\Priorities.tsx",
                        "data-component-line": "198",
                        "data-component-file": "Priorities.tsx",
                        "data-component-name": "ListIcon",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                        className: "h-4 w-4",
                      }),
                      e("priorities.view_list"),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        t.jsx("div", {
          "data-lov-id": "src\\pages\\app\\Priorities.tsx:205:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Priorities.tsx",
          "data-component-line": "205",
          "data-component-file": "Priorities.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20gap-8%22%7D",
          className: "grid grid-cols-1 gap-8",
          children: t.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\Priorities.tsx:206:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\Priorities.tsx",
            "data-component-line": "206",
            "data-component-file": "Priorities.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              t.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\Priorities.tsx:207:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\Priorities.tsx",
                "data-component-line": "207",
                "data-component-file": "Priorities.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-2%22%7D",
                className: "flex items-center justify-between mb-2",
                children: [
                  t.jsxs("h2", {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:208:12",
                    "data-lov-name": "h2",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "208",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xl%20font-black%20text-foreground%20uppercase%20tracking-wider%20flex%20items-center%20gap-2%22%7D",
                    className:
                      "text-xl font-black text-foreground uppercase tracking-wider flex items-center gap-2",
                    children: [
                      t.jsx(Xt, {
                        "data-lov-id": "src\\pages\\app\\Priorities.tsx:209:14",
                        "data-lov-name": "Sparkles",
                        "data-component-path":
                          "src\\pages\\app\\Priorities.tsx",
                        "data-component-line": "209",
                        "data-component-file": "Priorities.tsx",
                        "data-component-name": "Sparkles",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                        className: "h-5 w-5 text-primary",
                      }),
                      e("priorities.list_title"),
                    ],
                  }),
                  t.jsxs(J, {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:212:12",
                    "data-lov-name": "Badge",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "212",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "Badge",
                    "data-component-content":
                      "%7B%22className%22%3A%22font-bold%22%7D",
                    variant: "secondary",
                    className: "font-bold",
                    children: [
                      x.length,
                      " ",
                      e("priorities.items_count", { count: x.length }),
                    ],
                  }),
                ],
              }),
              x.length > 0
                ? g === "cards"
                  ? t.jsx("div", {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:219:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "219",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: x.map((c) =>
                        t.jsx(
                          Tt,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\Priorities.tsx:221:18",
                            "data-lov-name": "PriorityCard",
                            "data-component-path":
                              "src\\pages\\app\\Priorities.tsx",
                            "data-component-line": "221",
                            "data-component-file": "Priorities.tsx",
                            "data-component-name": "PriorityCard",
                            "data-component-content": "%7B%7D",
                            priority: c,
                            onValidate: h,
                          },
                          c.id,
                        ),
                      ),
                    })
                  : t.jsx("div", {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:229:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "229",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-3%22%7D",
                      className: "space-y-3",
                      children: x.map((c) =>
                        t.jsx(
                          he,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\Priorities.tsx:231:18",
                            "data-lov-name": "PriorityListItem",
                            "data-component-path":
                              "src\\pages\\app\\Priorities.tsx",
                            "data-component-line": "231",
                            "data-component-file": "Priorities.tsx",
                            "data-component-name": "PriorityListItem",
                            "data-component-content": "%7B%7D",
                            priority: c,
                            onValidate: h,
                            onAction: (u) => console.log("Action for", u),
                          },
                          c.id,
                        ),
                      ),
                    })
                : t.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\Priorities.tsx:241:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Priorities.tsx",
                    "data-component-line": "241",
                    "data-component-file": "Priorities.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22py-12%22%7D",
                    className: "py-12",
                    children: t.jsx(Wt, {
                      "data-lov-id": "src\\pages\\app\\Priorities.tsx:242:14",
                      "data-lov-name": "EmptyState",
                      "data-component-path": "src\\pages\\app\\Priorities.tsx",
                      "data-component-line": "242",
                      "data-component-file": "Priorities.tsx",
                      "data-component-name": "EmptyState",
                      "data-component-content": "%7B%7D",
                      icon: z,
                      title: e("priorities.empty.title"),
                      description: e("priorities.empty.description"),
                      actionLabel: e("priorities.empty.cta"),
                      onAction: () => console.log("Generate Diagnostic"),
                    }),
                  }),
            ],
          }),
        }),
        s &&
          t.jsx(ve, {
            "data-lov-id": "src\\pages\\app\\Priorities.tsx:255:8",
            "data-lov-name": "PriorityValidationModal",
            "data-component-path": "src\\pages\\app\\Priorities.tsx",
            "data-component-line": "255",
            "data-component-file": "Priorities.tsx",
            "data-component-name": "PriorityValidationModal",
            "data-component-content": "%7B%7D",
            priority: s,
            isOpen: i,
            onClose: () => r(!1),
            onValidate: j,
          }),
      ],
    });
  };
export { Le as default };
