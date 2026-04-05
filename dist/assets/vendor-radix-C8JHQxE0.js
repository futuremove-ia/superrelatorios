import {
  r as c,
  a as an,
  R as Or,
  v as El,
  b as V,
} from "./vendor-react-Ju9LKgAZ.js";
var jr = { exports: {} },
  sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pl = c,
  Al = Symbol.for("react.element"),
  _l = Symbol.for("react.fragment"),
  Tl = Object.prototype.hasOwnProperty,
  Il = Pl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ml = { key: !0, ref: !0, __self: !0, __source: !0 };
function kr(e, t, n) {
  var o,
    r = {},
    a = null,
    s = null;
  (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (o in t) Tl.call(t, o) && !Ml.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: Al,
    type: e,
    key: a,
    ref: s,
    props: r,
    _owner: Il.current,
  };
}
sn.Fragment = _l;
sn.jsx = kr;
sn.jsxs = kr;
jr.exports = sn;
var p = jr.exports;
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e == null || e(r), n === !1 || !r.defaultPrevented))
      return t == null ? void 0 : t(r);
  };
}
function rr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function cn(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const a = rr(r, t);
      return (!n && typeof a == "function" && (n = !0), a);
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const a = o[r];
          typeof a == "function" ? a() : rr(e[r], null);
        }
      };
  };
}
function D(...e) {
  return c.useCallback(cn(...e), e);
}
function Nl(e, t) {
  const n = c.createContext(t),
    o = (a) => {
      const { children: s, ...i } = a,
        l = c.useMemo(() => i, Object.values(i));
      return p.jsx(n.Provider, { value: l, children: s });
    };
  o.displayName = e + "Provider";
  function r(a) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function X(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = c.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var w;
      const { scope: v, children: h, ...g } = f,
        m = ((w = v == null ? void 0 : v[e]) == null ? void 0 : w[l]) || i,
        x = c.useMemo(() => g, Object.values(g));
      return p.jsx(m.Provider, { value: x, children: h });
    };
    u.displayName = a + "Provider";
    function d(f, v) {
      var m;
      const h = ((m = v == null ? void 0 : v[e]) == null ? void 0 : m[l]) || i,
        g = c.useContext(h);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const r = () => {
    const a = n.map((s) => c.createContext(s));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return ((r.scopeName = e), [o, Dl(r, ...t)]);
}
function Dl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Ne(e) {
  const t = Ol(e),
    n = c.forwardRef((o, r) => {
      const { children: a, ...s } = o,
        i = c.Children.toArray(a),
        l = i.find(jl);
      if (l) {
        const u = l.props.children,
          d = i.map((f) =>
            f === l
              ? c.Children.count(u) > 1
                ? c.Children.only(null)
                : c.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return p.jsx(t, {
          ...s,
          ref: r,
          children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null,
        });
      }
      return p.jsx(t, { ...s, ref: r, children: a });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var Wm = Ne("Slot");
function Ol(e) {
  const t = c.forwardRef((n, o) => {
    const { children: r, ...a } = n;
    if (c.isValidElement(r)) {
      const s = Ll(r),
        i = kl(a, r.props);
      return (
        r.type !== c.Fragment && (i.ref = o ? cn(o, s) : s),
        c.cloneElement(r, i)
      );
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Lr = Symbol("radix.slottable");
function Fr(e) {
  const t = ({ children: n }) => p.jsx(p.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Lr), t);
}
function jl(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Lr
  );
}
function kl(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      a = t[o];
    /^on[A-Z]/.test(o)
      ? r && a
        ? (n[o] = (...i) => {
            const l = a(...i);
            return (r(...i), l);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...a })
        : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ll(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Fl = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  P = Fl.reduce((e, t) => {
    const n = Ne(`Primitive.${t}`),
      o = c.forwardRef((r, a) => {
        const { asChild: s, ...i } = r,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(l, { ...i, ref: a })
        );
      });
    return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
  }, {});
function $r(e, t) {
  e && an.flushSync(() => e.dispatchEvent(t));
}
function ee(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) => {
          var o;
          return (o = t.current) == null ? void 0 : o.call(t, ...n);
        },
      [],
    )
  );
}
function $l(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return (
      t.addEventListener("keydown", o, { capture: !0 }),
      () => t.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, t]);
}
var Bl = "DismissableLayer",
  Qn = "dismissableLayer.update",
  Hl = "dismissableLayer.pointerDownOutside",
  Vl = "dismissableLayer.focusOutside",
  ar,
  Br = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ge = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: a,
        onInteractOutside: s,
        onDismiss: i,
        ...l
      } = e,
      u = c.useContext(Br),
      [d, f] = c.useState(null),
      v =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = c.useState({}),
      g = D(t, (E) => f(E)),
      m = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      w = m.indexOf(x),
      b = d ? m.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = b >= w,
      S = Ul((E) => {
        const T = E.target,
          I = [...u.branches].some((M) => M.contains(T));
        !C ||
          I ||
          (r == null || r(E),
          s == null || s(E),
          E.defaultPrevented || i == null || i());
      }, v),
      A = Kl((E) => {
        const T = E.target;
        [...u.branches].some((M) => M.contains(T)) ||
          (a == null || a(E),
          s == null || s(E),
          E.defaultPrevented || i == null || i());
      }, v);
    return (
      $l((E) => {
        b === u.layers.size - 1 &&
          (o == null || o(E),
          !E.defaultPrevented && i && (E.preventDefault(), i()));
      }, v),
      c.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ar = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            sr(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = ar);
            }
          );
      }, [d, v, n, u]),
      c.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            sr());
        },
        [d, u],
      ),
      c.useEffect(() => {
        const E = () => h({});
        return (
          document.addEventListener(Qn, E),
          () => document.removeEventListener(Qn, E)
        );
      }, []),
      p.jsx(P.div, {
        ...l,
        ref: g,
        style: {
          pointerEvents: y ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: R(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: R(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: R(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Ge.displayName = Bl;
var Wl = "DismissableLayerBranch",
  Gl = c.forwardRef((e, t) => {
    const n = c.useContext(Br),
      o = c.useRef(null),
      r = D(t, o);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      p.jsx(P.div, { ...e, ref: r })
    );
  });
Gl.displayName = Wl;
function Ul(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e),
    o = c.useRef(!1),
    r = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const a = (i) => {
          if (i.target && !o.current) {
            let l = function () {
              Hr(Hl, n, u, { discrete: !0 });
            };
            const u = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", r.current),
                (r.current = l),
                t.addEventListener("click", r.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", r.current);
          o.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", r.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Kl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e),
    o = c.useRef(!1);
  return (
    c.useEffect(() => {
      const r = (a) => {
        a.target &&
          !o.current &&
          Hr(Vl, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function sr() {
  const e = new CustomEvent(Qn);
  document.dispatchEvent(e);
}
function Hr(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && r.addEventListener(e, t, { once: !0 }),
    o ? $r(r, a) : r.dispatchEvent(a));
}
var q =
    globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  zl = Or[" useId ".trim().toString()] || (() => {}),
  Yl = 0;
function oe(e) {
  const [t, n] = c.useState(zl());
  return (
    q(() => {
      e || n((o) => o ?? String(Yl++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Xl = ["top", "right", "bottom", "left"],
  De = Math.min,
  se = Math.max,
  Gt = Math.round,
  jt = Math.floor,
  we = (e) => ({ x: e, y: e }),
  ql = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Zl = { start: "end", end: "start" };
function Jn(e, t, n) {
  return se(e, De(t, n));
}
function Pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function rt(e) {
  return e.split("-")[1];
}
function go(e) {
  return e === "x" ? "y" : "x";
}
function xo(e) {
  return e === "y" ? "height" : "width";
}
const Ql = new Set(["top", "bottom"]);
function xe(e) {
  return Ql.has(Ae(e)) ? "y" : "x";
}
function wo(e) {
  return go(xe(e));
}
function Jl(e, t, n) {
  n === void 0 && (n = !1);
  const o = rt(e),
    r = wo(e),
    a = xo(r);
  let s =
    r === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return (t.reference[a] > t.floating[a] && (s = Ut(s)), [s, Ut(s)]);
}
function eu(e) {
  const t = Ut(e);
  return [eo(e), t, eo(t)];
}
function eo(e) {
  return e.replace(/start|end/g, (t) => Zl[t]);
}
const ir = ["left", "right"],
  cr = ["right", "left"],
  tu = ["top", "bottom"],
  nu = ["bottom", "top"];
function ou(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? cr : ir) : t ? ir : cr;
    case "left":
    case "right":
      return t ? tu : nu;
    default:
      return [];
  }
}
function ru(e, t, n, o) {
  const r = rt(e);
  let a = ou(Ae(e), n === "start", o);
  return (
    r && ((a = a.map((s) => s + "-" + r)), t && (a = a.concat(a.map(eo)))),
    a
  );
}
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ql[t]);
}
function au(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Vr(e) {
  return typeof e != "number"
    ? au(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Kt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n,
  };
}
function lr(e, t, n) {
  let { reference: o, floating: r } = e;
  const a = xe(t),
    s = wo(t),
    i = xo(s),
    l = Ae(t),
    u = a === "y",
    d = o.x + o.width / 2 - r.width / 2,
    f = o.y + o.height / 2 - r.height / 2,
    v = o[i] / 2 - r[i] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: d, y: o.y - r.height };
      break;
    case "bottom":
      h = { x: d, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: f };
      break;
    case "left":
      h = { x: o.x - r.width, y: f };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (rt(t)) {
    case "start":
      h[s] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += v * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const su = async (e, t, n) => {
  const {
      placement: o = "bottom",
      strategy: r = "absolute",
      middleware: a = [],
      platform: s,
    } = n,
    i = a.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: d, y: f } = lr(u, o, l),
    v = o,
    h = {},
    g = 0;
  for (let m = 0; m < i.length; m++) {
    const { name: x, fn: w } = i[m],
      {
        x: b,
        y,
        data: C,
        reset: S,
      } = await w({
        x: d,
        y: f,
        initialPlacement: o,
        placement: v,
        strategy: r,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((d = b ?? d),
      (f = y ?? f),
      (h = { ...h, [x]: { ...h[x], ...C } }),
      S &&
        g <= 50 &&
        (g++,
        typeof S == "object" &&
          (S.placement && (v = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : S.rects),
          ({ x: d, y: f } = lr(u, v, l))),
        (m = -1)));
  }
  return { x: d, y: f, placement: v, strategy: r, middlewareData: h };
};
async function vt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: a, rects: s, elements: i, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: v = !1,
      padding: h = 0,
    } = Pe(t, e),
    g = Vr(h),
    x = i[v ? (f === "floating" ? "reference" : "floating") : f],
    w = Kt(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(i.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    b =
      f === "floating"
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(i.floating)),
    C = (await (a.isElement == null ? void 0 : a.isElement(y)))
      ? (await (a.getScale == null ? void 0 : a.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Kt(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: b,
            offsetParent: y,
            strategy: l,
          })
        : b,
    );
  return {
    top: (w.top - S.top + g.top) / C.y,
    bottom: (S.bottom - w.bottom + g.bottom) / C.y,
    left: (w.left - S.left + g.left) / C.x,
    right: (S.right - w.right + g.right) / C.x,
  };
}
const iu = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: a,
          platform: s,
          elements: i,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = Pe(e, t) || {};
      if (u == null) return {};
      const f = Vr(d),
        v = { x: n, y: o },
        h = wo(r),
        g = xo(h),
        m = await s.getDimensions(u),
        x = h === "y",
        w = x ? "top" : "left",
        b = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        C = a.reference[g] + a.reference[h] - v[h] - a.floating[g],
        S = v[h] - a.reference[h],
        A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let E = A ? A[y] : 0;
      (!E || !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
        (E = i.floating[y] || a.floating[g]);
      const T = C / 2 - S / 2,
        I = E / 2 - m[g] / 2 - 1,
        M = De(f[w], I),
        O = De(f[b], I),
        L = M,
        F = E - m[g] - O,
        $ = E / 2 - m[g] / 2 + T,
        H = Jn(L, $, F),
        k =
          !l.arrow &&
          rt(r) != null &&
          $ !== H &&
          a.reference[g] / 2 - ($ < L ? M : O) - m[g] / 2 < 0,
        B = k ? ($ < L ? $ - L : $ - F) : 0;
      return {
        [h]: v[h] + B,
        data: {
          [h]: H,
          centerOffset: $ - H - B,
          ...(k && { alignmentOffset: B }),
        },
        reset: k,
      };
    },
  }),
  cu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: a,
              rects: s,
              initialPlacement: i,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: v,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: m = !0,
              ...x
            } = Pe(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const w = Ae(r),
            b = xe(i),
            y = Ae(i) === i,
            C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = v || (y || !m ? [Ut(i)] : eu(i)),
            A = g !== "none";
          !v && A && S.push(...ru(i, m, g, C));
          const E = [i, ...S],
            T = await vt(t, x),
            I = [];
          let M = ((o = a.flip) == null ? void 0 : o.overflows) || [];
          if ((d && I.push(T[w]), f)) {
            const $ = Jl(r, s, C);
            I.push(T[$[0]], T[$[1]]);
          }
          if (
            ((M = [...M, { placement: r, overflows: I }]),
            !I.every(($) => $ <= 0))
          ) {
            var O, L;
            const $ = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1,
              H = E[$];
            if (
              H &&
              (!(f === "alignment" ? b !== xe(H) : !1) ||
                M.every((N) => N.overflows[0] > 0 && xe(N.placement) === b))
            )
              return {
                data: { index: $, overflows: M },
                reset: { placement: H },
              };
            let k =
              (L = M.filter((B) => B.overflows[0] <= 0).sort(
                (B, N) => B.overflows[1] - N.overflows[1],
              )[0]) == null
                ? void 0
                : L.placement;
            if (!k)
              switch (h) {
                case "bestFit": {
                  var F;
                  const B =
                    (F = M.filter((N) => {
                      if (A) {
                        const _ = xe(N.placement);
                        return _ === b || _ === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((_) => _ > 0)
                          .reduce((_, z) => _ + z, 0),
                      ])
                      .sort((N, _) => N[1] - _[1])[0]) == null
                      ? void 0
                      : F[0];
                  B && (k = B);
                  break;
                }
                case "initialPlacement":
                  k = i;
                  break;
              }
            if (r !== k) return { reset: { placement: k } };
          }
          return {};
        },
      }
    );
  };
function ur(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function dr(e) {
  return Xl.some((t) => e[t] >= 0);
}
const lu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = "referenceHidden", ...r } = Pe(e, t);
          switch (o) {
            case "referenceHidden": {
              const a = await vt(t, { ...r, elementContext: "reference" }),
                s = ur(a, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: dr(s) },
              };
            }
            case "escaped": {
              const a = await vt(t, { ...r, altBoundary: !0 }),
                s = ur(a, n.floating);
              return { data: { escapedOffsets: s, escaped: dr(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Wr = new Set(["left", "top"]);
async function uu(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = Ae(n),
    i = rt(n),
    l = xe(n) === "y",
    u = Wr.has(s) ? -1 : 1,
    d = a && l ? -1 : 1,
    f = Pe(t, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: g,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    i && typeof g == "number" && (h = i === "end" ? g * -1 : g),
    l ? { x: h * d, y: v * u } : { x: v * u, y: h * d }
  );
}
const du = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: a, placement: s, middlewareData: i } = t,
            l = await uu(t, e);
          return s === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + l.x, y: a + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  fu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: a = !0,
              crossAxis: s = !1,
              limiter: i = {
                fn: (x) => {
                  let { x: w, y: b } = x;
                  return { x: w, y: b };
                },
              },
              ...l
            } = Pe(e, t),
            u = { x: n, y: o },
            d = await vt(t, l),
            f = xe(Ae(r)),
            v = go(f);
          let h = u[v],
            g = u[f];
          if (a) {
            const x = v === "y" ? "top" : "left",
              w = v === "y" ? "bottom" : "right",
              b = h + d[x],
              y = h - d[w];
            h = Jn(b, h, y);
          }
          if (s) {
            const x = f === "y" ? "top" : "left",
              w = f === "y" ? "bottom" : "right",
              b = g + d[x],
              y = g - d[w];
            g = Jn(b, g, y);
          }
          const m = i.fn({ ...t, [v]: h, [f]: g });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - o, enabled: { [v]: a, [f]: s } },
          };
        },
      }
    );
  },
  pu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: a, middlewareData: s } = t,
            { offset: i = 0, mainAxis: l = !0, crossAxis: u = !0 } = Pe(e, t),
            d = { x: n, y: o },
            f = xe(r),
            v = go(f);
          let h = d[v],
            g = d[f];
          const m = Pe(i, t),
            x =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const y = v === "y" ? "height" : "width",
              C = a.reference[v] - a.floating[y] + x.mainAxis,
              S = a.reference[v] + a.reference[y] - x.mainAxis;
            h < C ? (h = C) : h > S && (h = S);
          }
          if (u) {
            var w, b;
            const y = v === "y" ? "width" : "height",
              C = Wr.has(Ae(r)),
              S =
                a.reference[f] -
                a.floating[y] +
                ((C && ((w = s.offset) == null ? void 0 : w[f])) || 0) +
                (C ? 0 : x.crossAxis),
              A =
                a.reference[f] +
                a.reference[y] +
                (C ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) -
                (C ? x.crossAxis : 0);
            g < S ? (g = S) : g > A && (g = A);
          }
          return { [v]: h, [f]: g };
        },
      }
    );
  },
  vu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: a, platform: s, elements: i } = t,
            { apply: l = () => {}, ...u } = Pe(e, t),
            d = await vt(t, u),
            f = Ae(r),
            v = rt(r),
            h = xe(r) === "y",
            { width: g, height: m } = a.floating;
          let x, w;
          f === "top" || f === "bottom"
            ? ((x = f),
              (w =
                v ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((w = f), (x = v === "end" ? "top" : "bottom"));
          const b = m - d.top - d.bottom,
            y = g - d.left - d.right,
            C = De(m - d[x], b),
            S = De(g - d[w], y),
            A = !t.middlewareData.shift;
          let E = C,
            T = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y),
            (o = t.middlewareData.shift) != null && o.enabled.y && (E = b),
            A && !v)
          ) {
            const M = se(d.left, 0),
              O = se(d.right, 0),
              L = se(d.top, 0),
              F = se(d.bottom, 0);
            h
              ? (T = g - 2 * (M !== 0 || O !== 0 ? M + O : se(d.left, d.right)))
              : (E =
                  m - 2 * (L !== 0 || F !== 0 ? L + F : se(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: E });
          const I = await s.getDimensions(i.floating);
          return g !== I.width || m !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ln() {
  return typeof window < "u";
}
function at(e) {
  return Gr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ye(e) {
  var t;
  return (t = (Gr(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gr(e) {
  return ln() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function fe(e) {
  return ln() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function be(e) {
  return ln() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function fr(e) {
  return !ln() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
const hu = new Set(["inline", "contents"]);
function bt(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !hu.has(r);
}
const mu = new Set(["table", "td", "th"]);
function gu(e) {
  return mu.has(at(e));
}
const xu = [":popover-open", ":modal"];
function un(e) {
  return xu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const wu = ["transform", "translate", "scale", "rotate", "perspective"],
  bu = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  yu = ["paint", "layout", "strict", "content"];
function bo(e) {
  const t = yo(),
    n = fe(e) ? pe(e) : e;
  return (
    wu.some((o) => (n[o] ? n[o] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    bu.some((o) => (n.willChange || "").includes(o)) ||
    yu.some((o) => (n.contain || "").includes(o))
  );
}
function Cu(e) {
  let t = Oe(e);
  for (; be(t) && !Je(t); ) {
    if (bo(t)) return t;
    if (un(t)) return null;
    t = Oe(t);
  }
  return null;
}
function yo() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Su = new Set(["html", "body", "#document"]);
function Je(e) {
  return Su.has(at(e));
}
function pe(e) {
  return ie(e).getComputedStyle(e);
}
function dn(e) {
  return fe(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Oe(e) {
  if (at(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (fr(e) && e.host) || ye(e);
  return fr(t) ? t.host : t;
}
function Ur(e) {
  const t = Oe(e);
  return Je(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : be(t) && bt(t)
      ? t
      : Ur(t);
}
function ht(e, t, n) {
  var o;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const r = Ur(e),
    a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = ie(r);
  if (a) {
    const i = to(s);
    return t.concat(
      s,
      s.visualViewport || [],
      bt(r) ? r : [],
      i && n ? ht(i) : [],
    );
  }
  return t.concat(r, ht(r, [], n));
}
function to(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kr(e) {
  const t = pe(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = be(e),
    a = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    i = Gt(n) !== a || Gt(o) !== s;
  return (i && ((n = a), (o = s)), { width: n, height: o, $: i });
}
function Co(e) {
  return fe(e) ? e : e.contextElement;
}
function qe(e) {
  const t = Co(e);
  if (!be(t)) return we(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: a } = Kr(t);
  let s = (a ? Gt(n.width) : n.width) / o,
    i = (a ? Gt(n.height) : n.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: s, y: i }
  );
}
const Ru = we(0);
function zr(e) {
  const t = ie(e);
  return !yo() || !t.visualViewport
    ? Ru
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Eu(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ie(e)) ? !1 : t);
}
function Be(e, t, n, o) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const r = e.getBoundingClientRect(),
    a = Co(e);
  let s = we(1);
  t && (o ? fe(o) && (s = qe(o)) : (s = qe(e)));
  const i = Eu(a, n, o) ? zr(a) : we(0);
  let l = (r.left + i.x) / s.x,
    u = (r.top + i.y) / s.y,
    d = r.width / s.x,
    f = r.height / s.y;
  if (a) {
    const v = ie(a),
      h = o && fe(o) ? ie(o) : o;
    let g = v,
      m = to(g);
    for (; m && o && h !== g; ) {
      const x = qe(m),
        w = m.getBoundingClientRect(),
        b = pe(m),
        y = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * x.x,
        C = w.top + (m.clientTop + parseFloat(b.paddingTop)) * x.y;
      ((l *= x.x),
        (u *= x.y),
        (d *= x.x),
        (f *= x.y),
        (l += y),
        (u += C),
        (g = ie(m)),
        (m = to(g)));
    }
  }
  return Kt({ width: d, height: f, x: l, y: u });
}
function So(e, t) {
  const n = dn(e).scrollLeft;
  return t ? t.left + n : Be(ye(e)).left + n;
}
function Yr(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    r = o.left + t.scrollLeft - (n ? 0 : So(e, o)),
    a = o.top + t.scrollTop;
  return { x: r, y: a };
}
function Pu(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const a = r === "fixed",
    s = ye(o),
    i = t ? un(t.floating) : !1;
  if (o === s || (i && a)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = we(1);
  const d = we(0),
    f = be(o);
  if (
    (f || (!f && !a)) &&
    ((at(o) !== "body" || bt(s)) && (l = dn(o)), be(o))
  ) {
    const h = Be(o);
    ((u = qe(o)), (d.x = h.x + o.clientLeft), (d.y = h.y + o.clientTop));
  }
  const v = s && !f && !a ? Yr(s, l, !0) : we(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + v.y,
  };
}
function Au(e) {
  return Array.from(e.getClientRects());
}
function _u(e) {
  const t = ye(e),
    n = dn(e),
    o = e.ownerDocument.body,
    r = se(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    a = se(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + So(e);
  const i = -n.scrollTop;
  return (
    pe(o).direction === "rtl" && (s += se(t.clientWidth, o.clientWidth) - r),
    { width: r, height: a, x: s, y: i }
  );
}
function Tu(e, t) {
  const n = ie(e),
    o = ye(e),
    r = n.visualViewport;
  let a = o.clientWidth,
    s = o.clientHeight,
    i = 0,
    l = 0;
  if (r) {
    ((a = r.width), (s = r.height));
    const u = yo();
    (!u || (u && t === "fixed")) && ((i = r.offsetLeft), (l = r.offsetTop));
  }
  return { width: a, height: s, x: i, y: l };
}
const Iu = new Set(["absolute", "fixed"]);
function Mu(e, t) {
  const n = Be(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    a = be(e) ? qe(e) : we(1),
    s = e.clientWidth * a.x,
    i = e.clientHeight * a.y,
    l = r * a.x,
    u = o * a.y;
  return { width: s, height: i, x: l, y: u };
}
function pr(e, t, n) {
  let o;
  if (t === "viewport") o = Tu(e, n);
  else if (t === "document") o = _u(ye(e));
  else if (fe(t)) o = Mu(t, n);
  else {
    const r = zr(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return Kt(o);
}
function Xr(e, t) {
  const n = Oe(e);
  return n === t || !fe(n) || Je(n)
    ? !1
    : pe(n).position === "fixed" || Xr(n, t);
}
function Nu(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = ht(e, [], !1).filter((i) => fe(i) && at(i) !== "body"),
    r = null;
  const a = pe(e).position === "fixed";
  let s = a ? Oe(e) : e;
  for (; fe(s) && !Je(s); ) {
    const i = pe(s),
      l = bo(s);
    (!l && i.position === "fixed" && (r = null),
      (
        a
          ? !l && !r
          : (!l && i.position === "static" && !!r && Iu.has(r.position)) ||
            (bt(s) && !l && Xr(e, s))
      )
        ? (o = o.filter((d) => d !== s))
        : (r = i),
      (s = Oe(s)));
  }
  return (t.set(e, o), o);
}
function Du(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? un(t)
          ? []
          : Nu(t, this._c)
        : [].concat(n)),
      o,
    ],
    i = s[0],
    l = s.reduce(
      (u, d) => {
        const f = pr(t, d, r);
        return (
          (u.top = se(f.top, u.top)),
          (u.right = De(f.right, u.right)),
          (u.bottom = De(f.bottom, u.bottom)),
          (u.left = se(f.left, u.left)),
          u
        );
      },
      pr(t, i, r),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Ou(e) {
  const { width: t, height: n } = Kr(e);
  return { width: t, height: n };
}
function ju(e, t, n) {
  const o = be(t),
    r = ye(t),
    a = n === "fixed",
    s = Be(e, !0, a, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = we(0);
  function u() {
    l.x = So(r);
  }
  if (o || (!o && !a))
    if (((at(t) !== "body" || bt(r)) && (i = dn(t)), o)) {
      const h = Be(t, !0, a, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else r && u();
  a && !o && r && u();
  const d = r && !o && !a ? Yr(r, i) : we(0),
    f = s.left + i.scrollLeft - l.x - d.x,
    v = s.top + i.scrollTop - l.y - d.y;
  return { x: f, y: v, width: s.width, height: s.height };
}
function Bn(e) {
  return pe(e).position === "static";
}
function vr(e, t) {
  if (!be(e) || pe(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ye(e) === n && (n = n.ownerDocument.body), n);
}
function qr(e, t) {
  const n = ie(e);
  if (un(e)) return n;
  if (!be(e)) {
    let r = Oe(e);
    for (; r && !Je(r); ) {
      if (fe(r) && !Bn(r)) return r;
      r = Oe(r);
    }
    return n;
  }
  let o = vr(e, t);
  for (; o && gu(o) && Bn(o); ) o = vr(o, t);
  return o && Je(o) && Bn(o) && !bo(o) ? n : o || Cu(e) || n;
}
const ku = async function (e) {
  const t = this.getOffsetParent || qr,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: ju(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Lu(e) {
  return pe(e).direction === "rtl";
}
const Fu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pu,
  getDocumentElement: ye,
  getClippingRect: Du,
  getOffsetParent: qr,
  getElementRects: ku,
  getClientRects: Au,
  getDimensions: Ou,
  getScale: qe,
  isElement: fe,
  isRTL: Lu,
};
function Zr(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function $u(e, t) {
  let n = null,
    o;
  const r = ye(e);
  function a() {
    var i;
    (clearTimeout(o), (i = n) == null || i.disconnect(), (n = null));
  }
  function s(i, l) {
    (i === void 0 && (i = !1), l === void 0 && (l = 1), a());
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: v, height: h } = u;
    if ((i || t(), !v || !h)) return;
    const g = jt(f),
      m = jt(r.clientWidth - (d + v)),
      x = jt(r.clientHeight - (f + h)),
      w = jt(d),
      y = {
        rootMargin: -g + "px " + -m + "px " + -x + "px " + -w + "px",
        threshold: se(0, De(1, l)) || 1,
      };
    let C = !0;
    function S(A) {
      const E = A[0].intersectionRatio;
      if (E !== l) {
        if (!C) return s();
        E
          ? s(!1, E)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (E === 1 && !Zr(u, e.getBoundingClientRect()) && s(), (C = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...y, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return (s(!0), a);
}
function Bu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: a = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = o,
    u = Co(e),
    d = r || a ? [...(u ? ht(u) : []), ...ht(t)] : [];
  d.forEach((w) => {
    (r && w.addEventListener("scroll", n, { passive: !0 }),
      a && w.addEventListener("resize", n));
  });
  const f = u && i ? $u(u, n) : null;
  let v = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((w) => {
      let [b] = w;
      (b &&
        b.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n());
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let g,
    m = l ? Be(e) : null;
  l && x();
  function x() {
    const w = Be(e);
    (m && !Zr(m, w) && n(), (m = w), (g = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var w;
      (d.forEach((b) => {
        (r && b.removeEventListener("scroll", n),
          a && b.removeEventListener("resize", n));
      }),
        f == null || f(),
        (w = h) == null || w.disconnect(),
        (h = null),
        l && cancelAnimationFrame(g));
    }
  );
}
const Hu = du,
  Vu = fu,
  Wu = cu,
  Gu = vu,
  Uu = lu,
  hr = iu,
  Ku = pu,
  zu = (e, t, n) => {
    const o = new Map(),
      r = { platform: Fu, ...n },
      a = { ...r.platform, _c: o };
    return su(e, t, { ...r, platform: a });
  };
var Yu = typeof document < "u",
  Xu = function () {},
  Ht = Yu ? c.useLayoutEffect : Xu;
function zt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!zt(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !zt(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Qr(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mr(e, t) {
  const n = Qr(e);
  return Math.round(t * n) / n;
}
function Hn(e) {
  const t = c.useRef(e);
  return (
    Ht(() => {
      t.current = e;
    }),
    t
  );
}
function qu(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: r,
      elements: { reference: a, floating: s } = {},
      transform: i = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [v, h] = c.useState(o);
  zt(v, o) || h(o);
  const [g, m] = c.useState(null),
    [x, w] = c.useState(null),
    b = c.useCallback((N) => {
      N !== A.current && ((A.current = N), m(N));
    }, []),
    y = c.useCallback((N) => {
      N !== E.current && ((E.current = N), w(N));
    }, []),
    C = a || g,
    S = s || x,
    A = c.useRef(null),
    E = c.useRef(null),
    T = c.useRef(d),
    I = l != null,
    M = Hn(l),
    O = Hn(r),
    L = Hn(u),
    F = c.useCallback(() => {
      if (!A.current || !E.current) return;
      const N = { placement: t, strategy: n, middleware: v };
      (O.current && (N.platform = O.current),
        zu(A.current, E.current, N).then((_) => {
          const z = { ..._, isPositioned: L.current !== !1 };
          $.current &&
            !zt(T.current, z) &&
            ((T.current = z),
            an.flushSync(() => {
              f(z);
            }));
        }));
    }, [v, t, n, O, L]);
  Ht(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const $ = c.useRef(!1);
  (Ht(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    [],
  ),
    Ht(() => {
      if ((C && (A.current = C), S && (E.current = S), C && S)) {
        if (M.current) return M.current(C, S, F);
        F();
      }
    }, [C, S, F, M, I]));
  const H = c.useMemo(
      () => ({ reference: A, floating: E, setReference: b, setFloating: y }),
      [b, y],
    ),
    k = c.useMemo(() => ({ reference: C, floating: S }), [C, S]),
    B = c.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!k.floating) return N;
      const _ = mr(k.floating, d.x),
        z = mr(k.floating, d.y);
      return i
        ? {
            ...N,
            transform: "translate(" + _ + "px, " + z + "px)",
            ...(Qr(k.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: _, top: z };
    }, [n, i, k.floating, d.x, d.y]);
  return c.useMemo(
    () => ({ ...d, update: F, refs: H, elements: k, floatingStyles: B }),
    [d, F, H, k, B],
  );
}
const Zu = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? hr({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? hr({ element: o, padding: r }).fn(n)
            : {};
      },
    };
  },
  Qu = (e, t) => ({ ...Hu(e), options: [e, t] }),
  Ju = (e, t) => ({ ...Vu(e), options: [e, t] }),
  ed = (e, t) => ({ ...Ku(e), options: [e, t] }),
  td = (e, t) => ({ ...Wu(e), options: [e, t] }),
  nd = (e, t) => ({ ...Gu(e), options: [e, t] }),
  od = (e, t) => ({ ...Uu(e), options: [e, t] }),
  rd = (e, t) => ({ ...Zu(e), options: [e, t] });
var ad = "Arrow",
  Jr = c.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...a } = e;
    return p.jsx(P.svg, {
      ...a,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Jr.displayName = ad;
var sd = Jr;
function yt(e) {
  const [t, n] = c.useState(void 0);
  return (
    q(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return;
          const a = r[0];
          let s, i;
          if ("borderBoxSize" in a) {
            const l = a.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((s = u.inlineSize), (i = u.blockSize));
          } else ((s = e.offsetWidth), (i = e.offsetHeight));
          n({ width: s, height: i });
        });
        return (o.observe(e, { box: "border-box" }), () => o.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Ro = "Popper",
  [ea, Ce] = X(Ro),
  [id, ta] = ea(Ro),
  na = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = c.useState(null);
    return p.jsx(id, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
na.displayName = Ro;
var oa = "PopperAnchor",
  ra = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      a = ta(oa, n),
      s = c.useRef(null),
      i = D(t, s);
    return (
      c.useEffect(() => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current);
      }),
      o ? null : p.jsx(P.div, { ...r, ref: i })
    );
  });
ra.displayName = oa;
var Eo = "PopperContent",
  [cd, ld] = ea(Eo),
  aa = c.forwardRef((e, t) => {
    var j, G, Y, W, U, K;
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: a = "center",
        alignOffset: s = 0,
        arrowPadding: i = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: v = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: g,
        ...m
      } = e,
      x = ta(Eo, n),
      [w, b] = c.useState(null),
      y = D(t, (ae) => b(ae)),
      [C, S] = c.useState(null),
      A = yt(C),
      E = (A == null ? void 0 : A.width) ?? 0,
      T = (A == null ? void 0 : A.height) ?? 0,
      I = o + (a !== "center" ? "-" + a : ""),
      M =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      O = Array.isArray(u) ? u : [u],
      L = O.length > 0,
      F = { padding: M, boundary: O.filter(dd), altBoundary: L },
      {
        refs: $,
        floatingStyles: H,
        placement: k,
        isPositioned: B,
        middlewareData: N,
      } = qu({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...ae) =>
          Bu(...ae, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          Qu({ mainAxis: r + T, alignmentAxis: s }),
          l &&
            Ju({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? ed() : void 0,
              ...F,
            }),
          l && td({ ...F }),
          nd({
            ...F,
            apply: ({
              elements: ae,
              rects: me,
              availableWidth: lt,
              availableHeight: ut,
            }) => {
              const { width: dt, height: Rl } = me.reference,
                Ot = ae.floating.style;
              (Ot.setProperty("--radix-popper-available-width", `${lt}px`),
                Ot.setProperty("--radix-popper-available-height", `${ut}px`),
                Ot.setProperty("--radix-popper-anchor-width", `${dt}px`),
                Ot.setProperty("--radix-popper-anchor-height", `${Rl}px`));
            },
          }),
          C && rd({ element: C, padding: i }),
          fd({ arrowWidth: E, arrowHeight: T }),
          v && od({ strategy: "referenceHidden", ...F }),
        ],
      }),
      [_, z] = ca(k),
      Z = ee(g);
    q(() => {
      B && (Z == null || Z());
    }, [B, Z]);
    const ne = (j = N.arrow) == null ? void 0 : j.x,
      Re = (G = N.arrow) == null ? void 0 : G.y,
      ce = ((Y = N.arrow) == null ? void 0 : Y.centerOffset) !== 0,
      [Ee, re] = c.useState();
    return (
      q(() => {
        w && re(window.getComputedStyle(w).zIndex);
      }, [w]),
      p.jsx("div", {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: B ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ee,
          "--radix-popper-transform-origin": [
            (W = N.transformOrigin) == null ? void 0 : W.x,
            (U = N.transformOrigin) == null ? void 0 : U.y,
          ].join(" "),
          ...(((K = N.hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(cd, {
          scope: n,
          placedSide: _,
          onArrowChange: S,
          arrowX: ne,
          arrowY: Re,
          shouldHideArrow: ce,
          children: p.jsx(P.div, {
            "data-side": _,
            "data-align": z,
            ...m,
            ref: y,
            style: { ...m.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
aa.displayName = Eo;
var sa = "PopperArrow",
  ud = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ia = c.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      a = ld(sa, o),
      s = ud[a.placedSide];
    return p.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(sd, {
        ...r,
        ref: n,
        style: { ...r.style, display: "block" },
      }),
    });
  });
ia.displayName = sa;
function dd(e) {
  return e !== null;
}
var fd = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, w, b;
    const { placement: n, rects: o, middlewareData: r } = t,
      s = ((x = r.arrow) == null ? void 0 : x.centerOffset) !== 0,
      i = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, d] = ca(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      v = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2,
      h = (((b = r.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let g = "",
      m = "";
    return (
      u === "bottom"
        ? ((g = s ? f : `${v}px`), (m = `${-l}px`))
        : u === "top"
          ? ((g = s ? f : `${v}px`), (m = `${o.floating.height + l}px`))
          : u === "right"
            ? ((g = `${-l}px`), (m = s ? f : `${h}px`))
            : u === "left" &&
              ((g = `${o.floating.width + l}px`), (m = s ? f : `${h}px`)),
      { data: { x: g, y: m } }
    );
  },
});
function ca(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ct = na,
  st = ra,
  St = aa,
  Rt = ia,
  pd = "Portal",
  Et = c.forwardRef((e, t) => {
    var i;
    const { container: n, ...o } = e,
      [r, a] = c.useState(!1);
    q(() => a(!0), []);
    const s =
      n ||
      (r &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return s ? El.createPortal(p.jsx(P.div, { ...o, ref: t }), s) : null;
  });
Et.displayName = pd;
function vd(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Q = (e) => {
  const { present: t, children: n } = e,
    o = hd(t),
    r =
      typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n),
    a = D(o.ref, md(r));
  return typeof n == "function" || o.isPresent
    ? c.cloneElement(r, { ref: a })
    : null;
};
Q.displayName = "Presence";
function hd(e) {
  const [t, n] = c.useState(),
    o = c.useRef(null),
    r = c.useRef(e),
    a = c.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [i, l] = vd(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const u = kt(o.current);
      a.current = i === "mounted" ? u : "none";
    }, [i]),
    q(() => {
      const u = o.current,
        d = r.current;
      if (d !== e) {
        const v = a.current,
          h = kt(u);
        (e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(d && v !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (r.current = e));
      }
    }, [e, l]),
    q(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const m = kt(o.current).includes(h.animationName);
            if (h.target === t && m && (l("ANIMATION_END"), !r.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          v = (h) => {
            h.target === t && (a.current = kt(o.current));
          };
        return (
          t.addEventListener("animationstart", v),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (d.clearTimeout(u),
              t.removeEventListener("animationstart", v),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: c.useCallback((u) => {
        ((o.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function kt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function md(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var gd = Or[" useInsertionEffect ".trim().toString()] || q;
function J({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
  const [r, a, s] = xd({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      (f !== i &&
        console.warn(
          `${o} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = i));
    }, [i, o]);
  }
  const u = c.useCallback(
    (d) => {
      var f;
      if (i) {
        const v = wd(d) ? d(e) : d;
        v !== e && ((f = s.current) == null || f.call(s, v));
      } else a(d);
    },
    [i, e, a, s],
  );
  return [l, u];
}
function xd({ defaultProp: e, onChange: t }) {
  const [n, o] = c.useState(e),
    r = c.useRef(n),
    a = c.useRef(t);
  return (
    gd(() => {
      a.current = t;
    }, [t]),
    c.useEffect(() => {
      var s;
      r.current !== n &&
        ((s = a.current) == null || s.call(a, n), (r.current = n));
    }, [n, r]),
    [n, o, a]
  );
}
function wd(e) {
  return typeof e == "function";
}
var la = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  bd = "VisuallyHidden",
  ua = c.forwardRef((e, t) =>
    p.jsx(P.span, { ...e, ref: t, style: { ...la, ...e.style } }),
  );
ua.displayName = bd;
var yd = ua,
  [fn, Gm] = X("Tooltip", [Ce]),
  pn = Ce(),
  da = "TooltipProvider",
  Cd = 700,
  no = "tooltip.open",
  [Sd, Po] = fn(da),
  fa = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Cd,
        skipDelayDuration: o = 300,
        disableHoverableContent: r = !1,
        children: a,
      } = e,
      s = c.useRef(!0),
      i = c.useRef(!1),
      l = c.useRef(0);
    return (
      c.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      p.jsx(Sd, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: c.useCallback(() => {
          (window.clearTimeout(l.current), (s.current = !1));
        }, []),
        onClose: c.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), o)));
        }, [o]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: c.useCallback((u) => {
          i.current = u;
        }, []),
        disableHoverableContent: r,
        children: a,
      })
    );
  };
fa.displayName = da;
var mt = "Tooltip",
  [Rd, vn] = fn(mt),
  pa = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        disableHoverableContent: s,
        delayDuration: i,
      } = e,
      l = Po(mt, e.__scopeTooltip),
      u = pn(t),
      [d, f] = c.useState(null),
      v = oe(),
      h = c.useRef(0),
      g = s ?? l.disableHoverableContent,
      m = i ?? l.delayDuration,
      x = c.useRef(!1),
      [w, b] = J({
        prop: o,
        defaultProp: r ?? !1,
        onChange: (E) => {
          (E
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(no)))
            : l.onClose(),
            a == null || a(E));
        },
        caller: mt,
      }),
      y = c.useMemo(
        () => (w ? (x.current ? "delayed-open" : "instant-open") : "closed"),
        [w],
      ),
      C = c.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = 0),
          (x.current = !1),
          b(!0));
      }, [b]),
      S = c.useCallback(() => {
        (window.clearTimeout(h.current), (h.current = 0), b(!1));
      }, [b]),
      A = c.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            ((x.current = !0), b(!0), (h.current = 0));
          }, m)));
      }, [m, b]);
    return (
      c.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      p.jsx(Ct, {
        ...u,
        children: p.jsx(Rd, {
          scope: t,
          contentId: v,
          open: w,
          stateAttribute: y,
          trigger: d,
          onTriggerChange: f,
          onTriggerEnter: c.useCallback(() => {
            l.isOpenDelayedRef.current ? A() : C();
          }, [l.isOpenDelayedRef, A, C]),
          onTriggerLeave: c.useCallback(() => {
            g ? S() : (window.clearTimeout(h.current), (h.current = 0));
          }, [S, g]),
          onOpen: C,
          onClose: S,
          disableHoverableContent: g,
          children: n,
        }),
      })
    );
  };
pa.displayName = mt;
var oo = "TooltipTrigger",
  va = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = vn(oo, n),
      a = Po(oo, n),
      s = pn(n),
      i = c.useRef(null),
      l = D(t, i, r.onTriggerChange),
      u = c.useRef(!1),
      d = c.useRef(!1),
      f = c.useCallback(() => (u.current = !1), []);
    return (
      c.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      p.jsx(st, {
        asChild: !0,
        ...s,
        children: p.jsx(P.button, {
          "aria-describedby": r.open ? r.contentId : void 0,
          "data-state": r.stateAttribute,
          ...o,
          ref: l,
          onPointerMove: R(e.onPointerMove, (v) => {
            v.pointerType !== "touch" &&
              !d.current &&
              !a.isPointerInTransitRef.current &&
              (r.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: R(e.onPointerLeave, () => {
            (r.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: R(e.onPointerDown, () => {
            (r.open && r.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: R(e.onFocus, () => {
            u.current || r.onOpen();
          }),
          onBlur: R(e.onBlur, r.onClose),
          onClick: R(e.onClick, r.onClose),
        }),
      })
    );
  });
va.displayName = oo;
var Ed = "TooltipPortal",
  [Um, Pd] = fn(Ed, { forceMount: void 0 }),
  et = "TooltipContent",
  ha = c.forwardRef((e, t) => {
    const n = Pd(et, e.__scopeTooltip),
      { forceMount: o = n.forceMount, side: r = "top", ...a } = e,
      s = vn(et, e.__scopeTooltip);
    return p.jsx(Q, {
      present: o || s.open,
      children: s.disableHoverableContent
        ? p.jsx(ma, { side: r, ...a, ref: t })
        : p.jsx(Ad, { side: r, ...a, ref: t }),
    });
  }),
  Ad = c.forwardRef((e, t) => {
    const n = vn(et, e.__scopeTooltip),
      o = Po(et, e.__scopeTooltip),
      r = c.useRef(null),
      a = D(t, r),
      [s, i] = c.useState(null),
      { trigger: l, onClose: u } = n,
      d = r.current,
      { onPointerInTransitChange: f } = o,
      v = c.useCallback(() => {
        (i(null), f(!1));
      }, [f]),
      h = c.useCallback(
        (g, m) => {
          const x = g.currentTarget,
            w = { x: g.clientX, y: g.clientY },
            b = Nd(w, x.getBoundingClientRect()),
            y = Dd(w, b),
            C = Od(m.getBoundingClientRect()),
            S = kd([...y, ...C]);
          (i(S), f(!0));
        },
        [f],
      );
    return (
      c.useEffect(() => () => v(), [v]),
      c.useEffect(() => {
        if (l && d) {
          const g = (x) => h(x, d),
            m = (x) => h(x, l);
          return (
            l.addEventListener("pointerleave", g),
            d.addEventListener("pointerleave", m),
            () => {
              (l.removeEventListener("pointerleave", g),
                d.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [l, d, h, v]),
      c.useEffect(() => {
        if (s) {
          const g = (m) => {
            const x = m.target,
              w = { x: m.clientX, y: m.clientY },
              b =
                (l == null ? void 0 : l.contains(x)) ||
                (d == null ? void 0 : d.contains(x)),
              y = !jd(w, s);
            b ? v() : y && (v(), u());
          };
          return (
            document.addEventListener("pointermove", g),
            () => document.removeEventListener("pointermove", g)
          );
        }
      }, [l, d, s, u, v]),
      p.jsx(ma, { ...e, ref: a })
    );
  }),
  [_d, Td] = fn(mt, { isInside: !1 }),
  Id = Fr("TooltipContent"),
  ma = c.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: o,
        "aria-label": r,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        ...i
      } = e,
      l = vn(et, n),
      u = pn(n),
      { onClose: d } = l;
    return (
      c.useEffect(
        () => (
          document.addEventListener(no, d),
          () => document.removeEventListener(no, d)
        ),
        [d],
      ),
      c.useEffect(() => {
        if (l.trigger) {
          const f = (v) => {
            const h = v.target;
            h != null && h.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      p.jsx(Ge, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: p.jsxs(St, {
          "data-state": l.stateAttribute,
          ...u,
          ...i,
          ref: t,
          style: {
            ...i.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            p.jsx(Id, { children: o }),
            p.jsx(_d, {
              scope: n,
              isInside: !0,
              children: p.jsx(yd, {
                id: l.contentId,
                role: "tooltip",
                children: r || o,
              }),
            }),
          ],
        }),
      })
    );
  });
ha.displayName = et;
var ga = "TooltipArrow",
  Md = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = pn(n);
    return Td(ga, n).isInside ? null : p.jsx(Rt, { ...r, ...o, ref: t });
  });
Md.displayName = ga;
function Nd(e, t) {
  const n = Math.abs(t.top - e.y),
    o = Math.abs(t.bottom - e.y),
    r = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, a)) {
    case a:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Dd(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      o.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return o;
}
function Od(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o },
  ];
}
function jd(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a],
      l = t[s],
      u = i.x,
      d = i.y,
      f = l.x,
      v = l.y;
    d > o != v > o && n < ((f - u) * (o - d)) / (v - d) + u && (r = !r);
  }
  return r;
}
function kd(e) {
  const t = e.slice();
  return (
    t.sort((n, o) =>
      n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0,
    ),
    Ld(t)
  );
}
function Ld(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1],
        s = t[t.length - 2];
      if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1],
        s = n[n.length - 2];
      if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Km = fa,
  zm = pa,
  Ym = va,
  Xm = ha;
function Pt(e) {
  const t = e + "CollectionProvider",
    [n, o] = X(t),
    [r, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: x, children: w } = m,
        b = V.useRef(null),
        y = V.useRef(new Map()).current;
      return p.jsx(r, { scope: x, itemMap: y, collectionRef: b, children: w });
    };
  s.displayName = t;
  const i = e + "CollectionSlot",
    l = Ne(i),
    u = V.forwardRef((m, x) => {
      const { scope: w, children: b } = m,
        y = a(i, w),
        C = D(x, y.collectionRef);
      return p.jsx(l, { ref: C, children: b });
    });
  u.displayName = i;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    v = Ne(d),
    h = V.forwardRef((m, x) => {
      const { scope: w, children: b, ...y } = m,
        C = V.useRef(null),
        S = D(x, C),
        A = a(d, w);
      return (
        V.useEffect(
          () => (
            A.itemMap.set(C, { ref: C, ...y }),
            () => void A.itemMap.delete(C)
          ),
        ),
        p.jsx(v, { [f]: "", ref: S, children: b })
      );
    });
  h.displayName = d;
  function g(m) {
    const x = a(e + "CollectionConsumer", m);
    return V.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (A, E) => y.indexOf(A.ref.current) - y.indexOf(E.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, g, o];
}
var ge = function () {
  return (
    (ge =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
          n = arguments[o];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    ge.apply(this, arguments)
  );
};
function xa(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function qm(e, t, n, o) {
  function r(a) {
    return a instanceof n
      ? a
      : new n(function (s) {
          s(a);
        });
  }
  return new (n || (n = Promise))(function (a, s) {
    function i(d) {
      try {
        u(o.next(d));
      } catch (f) {
        s(f);
      }
    }
    function l(d) {
      try {
        u(o.throw(d));
      } catch (f) {
        s(f);
      }
    }
    function u(d) {
      d.done ? a(d.value) : r(d.value).then(i, l);
    }
    u((o = o.apply(e, t || [])).next());
  });
}
function Fd(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, a; o < r; o++)
      (a || !(o in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, o)), (a[o] = t[o]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var wa = { exports: {} },
  ba = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tt = c;
function $d(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bd = typeof Object.is == "function" ? Object.is : $d,
  Hd = tt.useState,
  Vd = tt.useEffect,
  Wd = tt.useLayoutEffect,
  Gd = tt.useDebugValue;
function Ud(e, t) {
  var n = t(),
    o = Hd({ inst: { value: n, getSnapshot: t } }),
    r = o[0].inst,
    a = o[1];
  return (
    Wd(
      function () {
        ((r.value = n), (r.getSnapshot = t), Vn(r) && a({ inst: r }));
      },
      [e, n, t],
    ),
    Vd(
      function () {
        return (
          Vn(r) && a({ inst: r }),
          e(function () {
            Vn(r) && a({ inst: r });
          })
        );
      },
      [e],
    ),
    Gd(n),
    n
  );
}
function Vn(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bd(e, n);
  } catch {
    return !0;
  }
}
function Kd(e, t) {
  return t();
}
var zd =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Kd
    : Ud;
ba.useSyncExternalStore =
  tt.useSyncExternalStore !== void 0 ? tt.useSyncExternalStore : zd;
wa.exports = ba;
var Yd = wa.exports,
  Wn = "focusScope.autoFocusOnMount",
  Gn = "focusScope.autoFocusOnUnmount",
  gr = { bubbles: !1, cancelable: !0 },
  Xd = "FocusScope",
  At = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: r,
        onUnmountAutoFocus: a,
        ...s
      } = e,
      [i, l] = c.useState(null),
      u = ee(r),
      d = ee(a),
      f = c.useRef(null),
      v = D(t, (m) => l(m)),
      h = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (c.useEffect(() => {
      if (o) {
        let m = function (y) {
            if (h.paused || !i) return;
            const C = y.target;
            i.contains(C) ? (f.current = C) : Ie(f.current, { select: !0 });
          },
          x = function (y) {
            if (h.paused || !i) return;
            const C = y.relatedTarget;
            C !== null && (i.contains(C) || Ie(f.current, { select: !0 }));
          },
          w = function (y) {
            if (document.activeElement === document.body)
              for (const S of y) S.removedNodes.length > 0 && Ie(i);
          };
        (document.addEventListener("focusin", m),
          document.addEventListener("focusout", x));
        const b = new MutationObserver(w);
        return (
          i && b.observe(i, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", x),
              b.disconnect());
          }
        );
      }
    }, [o, i, h.paused]),
      c.useEffect(() => {
        if (i) {
          wr.add(h);
          const m = document.activeElement;
          if (!i.contains(m)) {
            const w = new CustomEvent(Wn, gr);
            (i.addEventListener(Wn, u),
              i.dispatchEvent(w),
              w.defaultPrevented ||
                (qd(tf(ya(i)), { select: !0 }),
                document.activeElement === m && Ie(i)));
          }
          return () => {
            (i.removeEventListener(Wn, u),
              setTimeout(() => {
                const w = new CustomEvent(Gn, gr);
                (i.addEventListener(Gn, d),
                  i.dispatchEvent(w),
                  w.defaultPrevented || Ie(m ?? document.body, { select: !0 }),
                  i.removeEventListener(Gn, d),
                  wr.remove(h));
              }, 0));
          };
        }
      }, [i, u, d, h]));
    const g = c.useCallback(
      (m) => {
        if ((!n && !o) || h.paused) return;
        const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          w = document.activeElement;
        if (x && w) {
          const b = m.currentTarget,
            [y, C] = Zd(b);
          y && C
            ? !m.shiftKey && w === C
              ? (m.preventDefault(), n && Ie(y, { select: !0 }))
              : m.shiftKey &&
                w === y &&
                (m.preventDefault(), n && Ie(C, { select: !0 }))
            : w === b && m.preventDefault();
        }
      },
      [n, o, h.paused],
    );
    return p.jsx(P.div, { tabIndex: -1, ...s, ref: v, onKeyDown: g });
  });
At.displayName = Xd;
function qd(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((Ie(o, { select: t }), document.activeElement !== n)) return;
}
function Zd(e) {
  const t = ya(e),
    n = xr(t, e),
    o = xr(t.reverse(), e);
  return [n, o];
}
function ya(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xr(e, t) {
  for (const n of e) if (!Qd(n, { upTo: t })) return n;
}
function Qd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Jd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ie(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Jd(e) && t && e.select());
  }
}
var wr = ef();
function ef() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = br(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = br(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function br(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return (o !== -1 && n.splice(o, 1), n);
}
function tf(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Un = 0;
function hn() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? yr()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? yr()),
      Un++,
      () => {
        (Un === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Un--);
      }
    );
  }, []);
}
function yr() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Vt = "right-scroll-bar-position",
  Wt = "width-before-scroll-bar",
  nf = "with-scroll-bars-hidden",
  of = "--removed-body-scroll-bar-size";
function Kn(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function rf(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && ((n.value = o), n.callback(o, r));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var af = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  Cr = new WeakMap();
function sf(e, t) {
  var n = rf(null, function (o) {
    return e.forEach(function (r) {
      return Kn(r, o);
    });
  });
  return (
    af(
      function () {
        var o = Cr.get(n);
        if (o) {
          var r = new Set(o),
            a = new Set(e),
            s = n.current;
          (r.forEach(function (i) {
            a.has(i) || Kn(i, null);
          }),
            a.forEach(function (i) {
              r.has(i) || Kn(i, s);
            }));
        }
        Cr.set(n, e);
      },
      [e],
    ),
    n
  );
}
function cf(e) {
  return e;
}
function lf(e, t) {
  t === void 0 && (t = cf);
  var n = [],
    o = !1,
    r = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var s = t(a, o);
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (o = !0; n.length; ) {
          var s = n;
          ((n = []), s.forEach(a));
        }
        n = {
          push: function (i) {
            return a(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        o = !0;
        var s = [];
        if (n.length) {
          var i = n;
          ((n = []), i.forEach(a), (s = n));
        }
        var l = function () {
            var d = s;
            ((s = []), d.forEach(a));
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        (u(),
          (n = {
            push: function (d) {
              (s.push(d), u());
            },
            filter: function (d) {
              return ((s = s.filter(d)), n);
            },
          }));
      },
    };
  return r;
}
function uf(e) {
  e === void 0 && (e = {});
  var t = lf(null);
  return ((t.options = ge({ async: !0, ssr: !1 }, e)), t);
}
var Ca = function (e) {
  var t = e.sideCar,
    n = xa(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return c.createElement(o, ge({}, n));
};
Ca.isSideCarExport = !0;
function df(e, t) {
  return (e.useMedium(t), Ca);
}
var Sa = uf(),
  zn = function () {},
  mn = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      o = c.useState({
        onScrollCapture: zn,
        onWheelCapture: zn,
        onTouchMoveCapture: zn,
      }),
      r = o[0],
      a = o[1],
      s = e.forwardProps,
      i = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      v = e.sideCar,
      h = e.noRelative,
      g = e.noIsolation,
      m = e.inert,
      x = e.allowPinchZoom,
      w = e.as,
      b = w === void 0 ? "div" : w,
      y = e.gapMode,
      C = xa(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = v,
      A = sf([n, t]),
      E = ge(ge({}, C), r);
    return c.createElement(
      c.Fragment,
      null,
      d &&
        c.createElement(S, {
          sideCar: Sa,
          removeScrollBar: u,
          shards: f,
          noRelative: h,
          noIsolation: g,
          inert: m,
          setCallbacks: a,
          allowPinchZoom: !!x,
          lockRef: n,
          gapMode: y,
        }),
      s
        ? c.cloneElement(c.Children.only(i), ge(ge({}, E), { ref: A }))
        : c.createElement(b, ge({}, E, { className: l, ref: A }), i),
    );
  });
mn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
mn.classNames = { fullWidth: Wt, zeroRight: Vt };
var ff = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function pf() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ff();
  return (t && e.setAttribute("nonce", t), e);
}
function vf(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function hf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var mf = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = pf()) && (vf(t, n), hf(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  gf = function () {
    var e = mf();
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Ra = function () {
    var e = gf(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic;
        return (e(o, r), null);
      };
    return t;
  },
  xf = { left: 0, top: 0, right: 0, gap: 0 },
  Yn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  wf = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Yn(n), Yn(o), Yn(r)];
  },
  bf = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return xf;
    var t = wf(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    };
  },
  yf = Ra(),
  Ze = "data-scroll-locked",
  Cf = function (e, t, n, o) {
    var r = e.left,
      a = e.top,
      s = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          nf,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Ze,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  r,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Vt,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          Wt,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Vt, " .")
        .concat(
          Vt,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Wt, " .")
        .concat(
          Wt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Ze,
          `] {
    `,
        )
        .concat(of, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  Sr = function () {
    var e = parseInt(document.body.getAttribute(Ze) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Sf = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(Ze, (Sr() + 1).toString()),
        function () {
          var e = Sr() - 1;
          e <= 0
            ? document.body.removeAttribute(Ze)
            : document.body.setAttribute(Ze, e.toString());
        }
      );
    }, []);
  },
  Rf = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? "margin" : o;
    Sf();
    var a = c.useMemo(
      function () {
        return bf(r);
      },
      [r],
    );
    return c.createElement(yf, { styles: Cf(a, !t, r, n ? "" : "!important") });
  },
  ro = !1;
if (typeof window < "u")
  try {
    var Lt = Object.defineProperty({}, "passive", {
      get: function () {
        return ((ro = !0), !0);
      },
    });
    (window.addEventListener("test", Lt, Lt),
      window.removeEventListener("test", Lt, Lt));
  } catch {
    ro = !1;
  }
var ze = ro ? { passive: !1 } : !1,
  Ef = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ea = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Ef(e) && n[t] === "visible")
    );
  },
  Pf = function (e) {
    return Ea(e, "overflowY");
  },
  Af = function (e) {
    return Ea(e, "overflowX");
  },
  Rr = function (e, t) {
    var n = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var r = Pa(e, o);
      if (r) {
        var a = Aa(e, o),
          s = a[1],
          i = a[2];
        if (s > i) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  _f = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  Tf = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  Pa = function (e, t) {
    return e === "v" ? Pf(t) : Af(t);
  },
  Aa = function (e, t) {
    return e === "v" ? _f(t) : Tf(t);
  },
  If = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Mf = function (e, t, n, o, r) {
    var a = If(e, window.getComputedStyle(t).direction),
      s = a * o,
      i = n.target,
      l = t.contains(i),
      u = !1,
      d = s > 0,
      f = 0,
      v = 0;
    do {
      if (!i) break;
      var h = Aa(e, i),
        g = h[0],
        m = h[1],
        x = h[2],
        w = m - x - a * g;
      (g || w) && Pa(e, i) && ((f += w), (v += g));
      var b = i.parentNode;
      i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!l && i !== document.body) || (l && (t.contains(i) || t === i)));
    return (
      ((d && (Math.abs(f) < 1 || !r)) || (!d && (Math.abs(v) < 1 || !r))) &&
        (u = !0),
      u
    );
  },
  Ft = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Er = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Pr = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Nf = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Df = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Of = 0,
  Ye = [];
function jf(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    o = c.useRef(),
    r = c.useState(Of++)[0],
    a = c.useState(Ra)[0],
    s = c.useRef(e);
  (c.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(r));
          var m = Fd([e.lockRef.current], (e.shards || []).map(Pr), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(r));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(r)),
                m.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(r));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var i = c.useCallback(function (m, x) {
      if (
        ("touches" in m && m.touches.length === 2) ||
        (m.type === "wheel" && m.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var w = Ft(m),
        b = n.current,
        y = "deltaX" in m ? m.deltaX : b[0] - w[0],
        C = "deltaY" in m ? m.deltaY : b[1] - w[1],
        S,
        A = m.target,
        E = Math.abs(y) > Math.abs(C) ? "h" : "v";
      if ("touches" in m && E === "h" && A.type === "range") return !1;
      var T = Rr(E, A);
      if (!T) return !0;
      if ((T ? (S = E) : ((S = E === "v" ? "h" : "v"), (T = Rr(E, A))), !T))
        return !1;
      if (
        (!o.current && "changedTouches" in m && (y || C) && (o.current = S), !S)
      )
        return !0;
      var I = o.current || S;
      return Mf(I, x, m, I === "h" ? y : C, !0);
    }, []),
    l = c.useCallback(function (m) {
      var x = m;
      if (!(!Ye.length || Ye[Ye.length - 1] !== a)) {
        var w = "deltaY" in x ? Er(x) : Ft(x),
          b = t.current.filter(function (S) {
            return (
              S.name === x.type &&
              (S.target === x.target || x.target === S.shadowParent) &&
              Nf(S.delta, w)
            );
          })[0];
        if (b && b.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!b) {
          var y = (s.current.shards || [])
              .map(Pr)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(x.target);
              }),
            C = y.length > 0 ? i(x, y[0]) : !s.current.noIsolation;
          C && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (m, x, w, b) {
      var y = { name: m, delta: x, target: w, should: b, shadowParent: kf(w) };
      (t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== y;
          });
        }, 1));
    }, []),
    d = c.useCallback(function (m) {
      ((n.current = Ft(m)), (o.current = void 0));
    }, []),
    f = c.useCallback(function (m) {
      u(m.type, Er(m), m.target, i(m, e.lockRef.current));
    }, []),
    v = c.useCallback(function (m) {
      u(m.type, Ft(m), m.target, i(m, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      Ye.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", l, ze),
      document.addEventListener("touchmove", l, ze),
      document.addEventListener("touchstart", d, ze),
      function () {
        ((Ye = Ye.filter(function (m) {
          return m !== a;
        })),
          document.removeEventListener("wheel", l, ze),
          document.removeEventListener("touchmove", l, ze),
          document.removeEventListener("touchstart", d, ze));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(a, { styles: Df(r) }) : null,
    h
      ? c.createElement(Rf, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function kf(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const Lf = df(Sa, jf);
var _t = c.forwardRef(function (e, t) {
  return c.createElement(mn, ge({}, e, { ref: t, sideCar: Lf }));
});
_t.classNames = mn.classNames;
var Ff = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Xe = new WeakMap(),
  $t = new WeakMap(),
  Bt = {},
  Xn = 0,
  _a = function (e) {
    return e && (e.host || _a(e.parentNode));
  },
  $f = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = _a(n);
        return o && e.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Bf = function (e, t, n, o) {
    var r = $f(t, Array.isArray(e) ? e : [e]);
    Bt[n] || (Bt[n] = new WeakMap());
    var a = Bt[n],
      s = [],
      i = new Set(),
      l = new Set(r),
      u = function (f) {
        !f || i.has(f) || (i.add(f), u(f.parentNode));
      };
    r.forEach(u);
    var d = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (v) {
          if (i.has(v)) d(v);
          else
            try {
              var h = v.getAttribute(o),
                g = h !== null && h !== "false",
                m = (Xe.get(v) || 0) + 1,
                x = (a.get(v) || 0) + 1;
              (Xe.set(v, m),
                a.set(v, x),
                s.push(v),
                m === 1 && g && $t.set(v, !0),
                x === 1 && v.setAttribute(n, "true"),
                g || v.setAttribute(o, "true"));
            } catch (w) {
              console.error("aria-hidden: cannot operate on ", v, w);
            }
        });
    };
    return (
      d(t),
      i.clear(),
      Xn++,
      function () {
        (s.forEach(function (f) {
          var v = Xe.get(f) - 1,
            h = a.get(f) - 1;
          (Xe.set(f, v),
            a.set(f, h),
            v || ($t.has(f) || f.removeAttribute(o), $t.delete(f)),
            h || f.removeAttribute(n));
        }),
          Xn--,
          Xn ||
            ((Xe = new WeakMap()),
            (Xe = new WeakMap()),
            ($t = new WeakMap()),
            (Bt = {})));
      }
    );
  },
  gn = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Ff(e);
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
        Bf(o, r, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  xn = "Dialog",
  [Ta, Ia] = X(xn),
  [Hf, ve] = Ta(xn),
  Ma = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        modal: s = !0,
      } = e,
      i = c.useRef(null),
      l = c.useRef(null),
      [u, d] = J({ prop: o, defaultProp: r ?? !1, onChange: a, caller: xn });
    return p.jsx(Hf, {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: oe(),
      titleId: oe(),
      descriptionId: oe(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n,
    });
  };
Ma.displayName = xn;
var Na = "DialogTrigger",
  Da = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Na, n),
      a = D(t, r.triggerRef);
    return p.jsx(P.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": r.open,
      "aria-controls": r.contentId,
      "data-state": To(r.open),
      ...o,
      ref: a,
      onClick: R(e.onClick, r.onOpenToggle),
    });
  });
Da.displayName = Na;
var Ao = "DialogPortal",
  [Vf, Oa] = Ta(Ao, { forceMount: void 0 }),
  ja = (e) => {
    const { __scopeDialog: t, forceMount: n, children: o, container: r } = e,
      a = ve(Ao, t);
    return p.jsx(Vf, {
      scope: t,
      forceMount: n,
      children: c.Children.map(o, (s) =>
        p.jsx(Q, {
          present: n || a.open,
          children: p.jsx(Et, { asChild: !0, container: r, children: s }),
        }),
      ),
    });
  };
ja.displayName = Ao;
var Yt = "DialogOverlay",
  ka = c.forwardRef((e, t) => {
    const n = Oa(Yt, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ve(Yt, e.__scopeDialog);
    return a.modal
      ? p.jsx(Q, {
          present: o || a.open,
          children: p.jsx(Gf, { ...r, ref: t }),
        })
      : null;
  });
ka.displayName = Yt;
var Wf = Ne("DialogOverlay.RemoveScroll"),
  Gf = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Yt, n);
    return p.jsx(_t, {
      as: Wf,
      allowPinchZoom: !0,
      shards: [r.contentRef],
      children: p.jsx(P.div, {
        "data-state": To(r.open),
        ...o,
        ref: t,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  He = "DialogContent",
  La = c.forwardRef((e, t) => {
    const n = Oa(He, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ve(He, e.__scopeDialog);
    return p.jsx(Q, {
      present: o || a.open,
      children: a.modal
        ? p.jsx(Uf, { ...r, ref: t })
        : p.jsx(Kf, { ...r, ref: t }),
    });
  });
La.displayName = He;
var Uf = c.forwardRef((e, t) => {
    const n = ve(He, e.__scopeDialog),
      o = c.useRef(null),
      r = D(t, n.contentRef, o);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a) return gn(a);
      }, []),
      p.jsx(Fa, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: R(e.onCloseAutoFocus, (a) => {
          var s;
          (a.preventDefault(), (s = n.triggerRef.current) == null || s.focus());
        }),
        onPointerDownOutside: R(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent,
            i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: R(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  Kf = c.forwardRef((e, t) => {
    const n = ve(He, e.__scopeDialog),
      o = c.useRef(!1),
      r = c.useRef(!1);
    return p.jsx(Fa, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var s, i;
        ((s = e.onCloseAutoFocus) == null || s.call(e, a),
          a.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            a.preventDefault()),
          (o.current = !1),
          (r.current = !1));
      },
      onInteractOutside: (a) => {
        var l, u;
        ((l = e.onInteractOutside) == null || l.call(e, a),
          a.defaultPrevented ||
            ((o.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (r.current = !0)));
        const s = a.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            r.current &&
            a.preventDefault());
      },
    });
  }),
  Fa = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: a,
        ...s
      } = e,
      i = ve(He, n),
      l = c.useRef(null),
      u = D(t, l);
    return (
      hn(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(At, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: a,
            children: p.jsx(Ge, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": To(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Yf, { titleId: i.titleId }),
              p.jsx(qf, { contentRef: l, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  _o = "DialogTitle",
  $a = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(_o, n);
    return p.jsx(P.h2, { id: r.titleId, ...o, ref: t });
  });
$a.displayName = _o;
var Ba = "DialogDescription",
  Ha = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Ba, n);
    return p.jsx(P.p, { id: r.descriptionId, ...o, ref: t });
  });
Ha.displayName = Ba;
var Va = "DialogClose",
  Wa = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Va, n);
    return p.jsx(P.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: R(e.onClick, () => r.onOpenChange(!1)),
    });
  });
Wa.displayName = Va;
function To(e) {
  return e ? "open" : "closed";
}
var Ga = "DialogTitleWarning",
  [zf, Ua] = Nl(Ga, { contentName: He, titleName: _o, docsSlug: "dialog" }),
  Yf = ({ titleId: e }) => {
    const t = Ua(Ga),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      c.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Xf = "DialogDescriptionWarning",
  qf = ({ contentRef: e, descriptionId: t }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ua(Xf).contentName}}.`;
    return (
      c.useEffect(() => {
        var a;
        const r =
          (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
        t && r && (document.getElementById(t) || console.warn(o));
      }, [o, e, t]),
      null
    );
  },
  Zf = Ma,
  Qf = Da,
  Jf = ja,
  ep = ka,
  tp = La,
  np = $a,
  op = Ha,
  Ka = Wa,
  rp = c.createContext(void 0);
function _e(e) {
  const t = c.useContext(rp);
  return e || t || "ltr";
}
var qn = "rovingFocusGroup.onEntryFocus",
  ap = { bubbles: !1, cancelable: !0 },
  Tt = "RovingFocusGroup",
  [ao, za, sp] = Pt(Tt),
  [ip, je] = X(Tt, [sp]),
  [cp, lp] = ip(Tt),
  Ya = c.forwardRef((e, t) =>
    p.jsx(ao.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(ao.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(up, { ...e, ref: t }),
      }),
    }),
  );
Ya.displayName = Tt;
var up = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: a,
        currentTabStopId: s,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      v = c.useRef(null),
      h = D(t, v),
      g = _e(a),
      [m, x] = J({ prop: s, defaultProp: i ?? null, onChange: l, caller: Tt }),
      [w, b] = c.useState(!1),
      y = ee(u),
      C = za(n),
      S = c.useRef(!1),
      [A, E] = c.useState(0);
    return (
      c.useEffect(() => {
        const T = v.current;
        if (T)
          return (
            T.addEventListener(qn, y),
            () => T.removeEventListener(qn, y)
          );
      }, [y]),
      p.jsx(cp, {
        scope: n,
        orientation: o,
        dir: g,
        loop: r,
        currentTabStopId: m,
        onItemFocus: c.useCallback((T) => x(T), [x]),
        onItemShiftTab: c.useCallback(() => b(!0), []),
        onFocusableItemAdd: c.useCallback(() => E((T) => T + 1), []),
        onFocusableItemRemove: c.useCallback(() => E((T) => T - 1), []),
        children: p.jsx(P.div, {
          tabIndex: w || A === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: R(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: R(e.onFocus, (T) => {
            const I = !S.current;
            if (T.target === T.currentTarget && I && !w) {
              const M = new CustomEvent(qn, ap);
              if ((T.currentTarget.dispatchEvent(M), !M.defaultPrevented)) {
                const O = C().filter((k) => k.focusable),
                  L = O.find((k) => k.active),
                  F = O.find((k) => k.id === m),
                  H = [L, F, ...O].filter(Boolean).map((k) => k.ref.current);
                Za(H, d);
              }
            }
            S.current = !1;
          }),
          onBlur: R(e.onBlur, () => b(!1)),
        }),
      })
    );
  }),
  Xa = "RovingFocusGroupItem",
  qa = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: a,
        children: s,
        ...i
      } = e,
      l = oe(),
      u = a || l,
      d = lp(Xa, n),
      f = d.currentTabStopId === u,
      v = za(n),
      {
        onFocusableItemAdd: h,
        onFocusableItemRemove: g,
        currentTabStopId: m,
      } = d;
    return (
      c.useEffect(() => {
        if (o) return (h(), () => g());
      }, [o, h, g]),
      p.jsx(ao.ItemSlot, {
        scope: n,
        id: u,
        focusable: o,
        active: r,
        children: p.jsx(P.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": d.orientation,
          ...i,
          ref: t,
          onMouseDown: R(e.onMouseDown, (x) => {
            o ? d.onItemFocus(u) : x.preventDefault();
          }),
          onFocus: R(e.onFocus, () => d.onItemFocus(u)),
          onKeyDown: R(e.onKeyDown, (x) => {
            if (x.key === "Tab" && x.shiftKey) {
              d.onItemShiftTab();
              return;
            }
            if (x.target !== x.currentTarget) return;
            const w = pp(x, d.orientation, d.dir);
            if (w !== void 0) {
              if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
              x.preventDefault();
              let y = v()
                .filter((C) => C.focusable)
                .map((C) => C.ref.current);
              if (w === "last") y.reverse();
              else if (w === "prev" || w === "next") {
                w === "prev" && y.reverse();
                const C = y.indexOf(x.currentTarget);
                y = d.loop ? vp(y, C + 1) : y.slice(C + 1);
              }
              setTimeout(() => Za(y));
            }
          }),
          children:
            typeof s == "function"
              ? s({ isCurrentTabStop: f, hasTabStop: m != null })
              : s,
        }),
      })
    );
  });
qa.displayName = Xa;
var dp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function fp(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function pp(e, t, n) {
  const o = fp(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return dp[o];
}
function Za(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (
      o === n ||
      (o.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function vp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var wn = Ya,
  bn = qa,
  so = ["Enter", " "],
  hp = ["ArrowDown", "PageUp", "Home"],
  Qa = ["ArrowUp", "PageDown", "End"],
  mp = [...hp, ...Qa],
  gp = { ltr: [...so, "ArrowRight"], rtl: [...so, "ArrowLeft"] },
  xp = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  It = "Menu",
  [gt, wp, bp] = Pt(It),
  [Ue, Ja] = X(It, [bp, Ce, je]),
  yn = Ce(),
  es = je(),
  [yp, Ke] = Ue(It),
  [Cp, Mt] = Ue(It),
  ts = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: o,
        dir: r,
        onOpenChange: a,
        modal: s = !0,
      } = e,
      i = yn(t),
      [l, u] = c.useState(null),
      d = c.useRef(!1),
      f = ee(a),
      v = _e(r);
    return (
      c.useEffect(() => {
        const h = () => {
            ((d.current = !0),
              document.addEventListener("pointerdown", g, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", g, {
                capture: !0,
                once: !0,
              }));
          },
          g = () => (d.current = !1);
        return (
          document.addEventListener("keydown", h, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", h, { capture: !0 }),
              document.removeEventListener("pointerdown", g, { capture: !0 }),
              document.removeEventListener("pointermove", g, { capture: !0 }));
          }
        );
      }, []),
      p.jsx(Ct, {
        ...i,
        children: p.jsx(yp, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: p.jsx(Cp, {
            scope: t,
            onClose: c.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: v,
            modal: s,
            children: o,
          }),
        }),
      })
    );
  };
ts.displayName = It;
var Sp = "MenuAnchor",
  Io = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = yn(n);
    return p.jsx(st, { ...r, ...o, ref: t });
  });
Io.displayName = Sp;
var Mo = "MenuPortal",
  [Rp, ns] = Ue(Mo, { forceMount: void 0 }),
  os = (e) => {
    const { __scopeMenu: t, forceMount: n, children: o, container: r } = e,
      a = Ke(Mo, t);
    return p.jsx(Rp, {
      scope: t,
      forceMount: n,
      children: p.jsx(Q, {
        present: n || a.open,
        children: p.jsx(Et, { asChild: !0, container: r, children: o }),
      }),
    });
  };
os.displayName = Mo;
var le = "MenuContent",
  [Ep, No] = Ue(le),
  rs = c.forwardRef((e, t) => {
    const n = ns(le, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      a = Ke(le, e.__scopeMenu),
      s = Mt(le, e.__scopeMenu);
    return p.jsx(gt.Provider, {
      scope: e.__scopeMenu,
      children: p.jsx(Q, {
        present: o || a.open,
        children: p.jsx(gt.Slot, {
          scope: e.__scopeMenu,
          children: s.modal
            ? p.jsx(Pp, { ...r, ref: t })
            : p.jsx(Ap, { ...r, ref: t }),
        }),
      }),
    });
  }),
  Pp = c.forwardRef((e, t) => {
    const n = Ke(le, e.__scopeMenu),
      o = c.useRef(null),
      r = D(t, o);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a) return gn(a);
      }, []),
      p.jsx(Do, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: R(e.onFocusOutside, (a) => a.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Ap = c.forwardRef((e, t) => {
    const n = Ke(le, e.__scopeMenu);
    return p.jsx(Do, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  _p = Ne("MenuContent.ScrollLock"),
  Do = c.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: o = !1,
        trapFocus: r,
        onOpenAutoFocus: a,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: i,
        onEntryFocus: l,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: f,
        onInteractOutside: v,
        onDismiss: h,
        disableOutsideScroll: g,
        ...m
      } = e,
      x = Ke(le, n),
      w = Mt(le, n),
      b = yn(n),
      y = es(n),
      C = wp(n),
      [S, A] = c.useState(null),
      E = c.useRef(null),
      T = D(t, E, x.onContentChange),
      I = c.useRef(0),
      M = c.useRef(""),
      O = c.useRef(0),
      L = c.useRef(null),
      F = c.useRef("right"),
      $ = c.useRef(0),
      H = g ? _t : c.Fragment,
      k = g ? { as: _p, allowPinchZoom: !0 } : void 0,
      B = (_) => {
        var j, G;
        const z = M.current + _,
          Z = C().filter((Y) => !Y.disabled),
          ne = document.activeElement,
          Re =
            (j = Z.find((Y) => Y.ref.current === ne)) == null
              ? void 0
              : j.textValue,
          ce = Z.map((Y) => Y.textValue),
          Ee = Bp(ce, z, Re),
          re =
            (G = Z.find((Y) => Y.textValue === Ee)) == null
              ? void 0
              : G.ref.current;
        ((function Y(W) {
          ((M.current = W),
            window.clearTimeout(I.current),
            W !== "" && (I.current = window.setTimeout(() => Y(""), 1e3)));
        })(z),
          re && setTimeout(() => re.focus()));
      };
    (c.useEffect(() => () => window.clearTimeout(I.current), []), hn());
    const N = c.useCallback((_) => {
      var Z, ne;
      return (
        F.current === ((Z = L.current) == null ? void 0 : Z.side) &&
        Vp(_, (ne = L.current) == null ? void 0 : ne.area)
      );
    }, []);
    return p.jsx(Ep, {
      scope: n,
      searchRef: M,
      onItemEnter: c.useCallback(
        (_) => {
          N(_) && _.preventDefault();
        },
        [N],
      ),
      onItemLeave: c.useCallback(
        (_) => {
          var z;
          N(_) || ((z = E.current) == null || z.focus(), A(null));
        },
        [N],
      ),
      onTriggerLeave: c.useCallback(
        (_) => {
          N(_) && _.preventDefault();
        },
        [N],
      ),
      pointerGraceTimerRef: O,
      onPointerGraceIntentChange: c.useCallback((_) => {
        L.current = _;
      }, []),
      children: p.jsx(H, {
        ...k,
        children: p.jsx(At, {
          asChild: !0,
          trapped: r,
          onMountAutoFocus: R(a, (_) => {
            var z;
            (_.preventDefault(),
              (z = E.current) == null || z.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: s,
          children: p.jsx(Ge, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: v,
            onDismiss: h,
            children: p.jsx(wn, {
              asChild: !0,
              ...y,
              dir: w.dir,
              orientation: "vertical",
              loop: o,
              currentTabStopId: S,
              onCurrentTabStopIdChange: A,
              onEntryFocus: R(l, (_) => {
                w.isUsingKeyboardRef.current || _.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: p.jsx(St, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": bs(x.open),
                "data-radix-menu-content": "",
                dir: w.dir,
                ...b,
                ...m,
                ref: T,
                style: { outline: "none", ...m.style },
                onKeyDown: R(m.onKeyDown, (_) => {
                  const Z =
                      _.target.closest("[data-radix-menu-content]") ===
                      _.currentTarget,
                    ne = _.ctrlKey || _.altKey || _.metaKey,
                    Re = _.key.length === 1;
                  Z &&
                    (_.key === "Tab" && _.preventDefault(),
                    !ne && Re && B(_.key));
                  const ce = E.current;
                  if (_.target !== ce || !mp.includes(_.key)) return;
                  _.preventDefault();
                  const re = C()
                    .filter((j) => !j.disabled)
                    .map((j) => j.ref.current);
                  (Qa.includes(_.key) && re.reverse(), Fp(re));
                }),
                onBlur: R(e.onBlur, (_) => {
                  _.currentTarget.contains(_.target) ||
                    (window.clearTimeout(I.current), (M.current = ""));
                }),
                onPointerMove: R(
                  e.onPointerMove,
                  xt((_) => {
                    const z = _.target,
                      Z = $.current !== _.clientX;
                    if (_.currentTarget.contains(z) && Z) {
                      const ne = _.clientX > $.current ? "right" : "left";
                      ((F.current = ne), ($.current = _.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
rs.displayName = le;
var Tp = "MenuGroup",
  Oo = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, { role: "group", ...o, ref: t });
  });
Oo.displayName = Tp;
var Ip = "MenuLabel",
  as = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, { ...o, ref: t });
  });
as.displayName = Ip;
var Xt = "MenuItem",
  Ar = "menu.itemSelect",
  Cn = c.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e,
      a = c.useRef(null),
      s = Mt(Xt, e.__scopeMenu),
      i = No(Xt, e.__scopeMenu),
      l = D(t, a),
      u = c.useRef(!1),
      d = () => {
        const f = a.current;
        if (!n && f) {
          const v = new CustomEvent(Ar, { bubbles: !0, cancelable: !0 });
          (f.addEventListener(Ar, (h) => (o == null ? void 0 : o(h)), {
            once: !0,
          }),
            $r(f, v),
            v.defaultPrevented ? (u.current = !1) : s.onClose());
        }
      };
    return p.jsx(ss, {
      ...r,
      ref: l,
      disabled: n,
      onClick: R(e.onClick, d),
      onPointerDown: (f) => {
        var v;
        ((v = e.onPointerDown) == null || v.call(e, f), (u.current = !0));
      },
      onPointerUp: R(e.onPointerUp, (f) => {
        var v;
        u.current || (v = f.currentTarget) == null || v.click();
      }),
      onKeyDown: R(e.onKeyDown, (f) => {
        const v = i.searchRef.current !== "";
        n ||
          (v && f.key === " ") ||
          (so.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Cn.displayName = Xt;
var ss = c.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...a } = e,
      s = No(Xt, n),
      i = es(n),
      l = c.useRef(null),
      u = D(t, l),
      [d, f] = c.useState(!1),
      [v, h] = c.useState("");
    return (
      c.useEffect(() => {
        const g = l.current;
        g && h((g.textContent ?? "").trim());
      }, [a.children]),
      p.jsx(gt.ItemSlot, {
        scope: n,
        disabled: o,
        textValue: r ?? v,
        children: p.jsx(bn, {
          asChild: !0,
          ...i,
          focusable: !o,
          children: p.jsx(P.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: R(
              e.onPointerMove,
              xt((g) => {
                o
                  ? s.onItemLeave(g)
                  : (s.onItemEnter(g),
                    g.defaultPrevented ||
                      g.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: R(
              e.onPointerLeave,
              xt((g) => s.onItemLeave(g)),
            ),
            onFocus: R(e.onFocus, () => f(!0)),
            onBlur: R(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  Mp = "MenuCheckboxItem",
  is = c.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return p.jsx(fs, {
      scope: e.__scopeMenu,
      checked: n,
      children: p.jsx(Cn, {
        role: "menuitemcheckbox",
        "aria-checked": qt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": ko(n),
        onSelect: R(
          r.onSelect,
          () => (o == null ? void 0 : o(qt(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
is.displayName = Mp;
var cs = "MenuRadioGroup",
  [Np, Dp] = Ue(cs, { value: void 0, onValueChange: () => {} }),
  ls = c.forwardRef((e, t) => {
    const { value: n, onValueChange: o, ...r } = e,
      a = ee(o);
    return p.jsx(Np, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: a,
      children: p.jsx(Oo, { ...r, ref: t }),
    });
  });
ls.displayName = cs;
var us = "MenuRadioItem",
  ds = c.forwardRef((e, t) => {
    const { value: n, ...o } = e,
      r = Dp(us, e.__scopeMenu),
      a = n === r.value;
    return p.jsx(fs, {
      scope: e.__scopeMenu,
      checked: a,
      children: p.jsx(Cn, {
        role: "menuitemradio",
        "aria-checked": a,
        ...o,
        ref: t,
        "data-state": ko(a),
        onSelect: R(
          o.onSelect,
          () => {
            var s;
            return (s = r.onValueChange) == null ? void 0 : s.call(r, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
ds.displayName = us;
var jo = "MenuItemIndicator",
  [fs, Op] = Ue(jo, { checked: !1 }),
  ps = c.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e,
      a = Op(jo, n);
    return p.jsx(Q, {
      present: o || qt(a.checked) || a.checked === !0,
      children: p.jsx(P.span, { ...r, ref: t, "data-state": ko(a.checked) }),
    });
  });
ps.displayName = jo;
var jp = "MenuSeparator",
  vs = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...o,
      ref: t,
    });
  });
vs.displayName = jp;
var kp = "MenuArrow",
  hs = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = yn(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
hs.displayName = kp;
var Lp = "MenuSub",
  [Zm, ms] = Ue(Lp),
  ft = "MenuSubTrigger",
  gs = c.forwardRef((e, t) => {
    const n = Ke(ft, e.__scopeMenu),
      o = Mt(ft, e.__scopeMenu),
      r = ms(ft, e.__scopeMenu),
      a = No(ft, e.__scopeMenu),
      s = c.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a,
      u = { __scopeMenu: e.__scopeMenu },
      d = c.useCallback(() => {
        (s.current && window.clearTimeout(s.current), (s.current = null));
      }, []);
    return (
      c.useEffect(() => d, [d]),
      c.useEffect(() => {
        const f = i.current;
        return () => {
          (window.clearTimeout(f), l(null));
        };
      }, [i, l]),
      p.jsx(Io, {
        asChild: !0,
        ...u,
        children: p.jsx(ss, {
          id: r.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": r.contentId,
          "data-state": bs(n.open),
          ...e,
          ref: cn(t, r.onTriggerChange),
          onClick: (f) => {
            var v;
            ((v = e.onClick) == null || v.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: R(
            e.onPointerMove,
            xt((f) => {
              (a.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (a.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), d());
                  }, 100))));
            }),
          ),
          onPointerLeave: R(
            e.onPointerLeave,
            xt((f) => {
              var h, g;
              d();
              const v =
                (h = n.content) == null ? void 0 : h.getBoundingClientRect();
              if (v) {
                const m = (g = n.content) == null ? void 0 : g.dataset.side,
                  x = m === "right",
                  w = x ? -5 : 5,
                  b = v[x ? "left" : "right"],
                  y = v[x ? "right" : "left"];
                (a.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + w, y: f.clientY },
                    { x: b, y: v.top },
                    { x: y, y: v.top },
                    { x: y, y: v.bottom },
                    { x: b, y: v.bottom },
                  ],
                  side: m,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(
                    () => a.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((a.onTriggerLeave(f), f.defaultPrevented)) return;
                a.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: R(e.onKeyDown, (f) => {
            var h;
            const v = a.searchRef.current !== "";
            e.disabled ||
              (v && f.key === " ") ||
              (gp[o.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (h = n.content) == null || h.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
gs.displayName = ft;
var xs = "MenuSubContent",
  ws = c.forwardRef((e, t) => {
    const n = ns(le, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      a = Ke(le, e.__scopeMenu),
      s = Mt(le, e.__scopeMenu),
      i = ms(xs, e.__scopeMenu),
      l = c.useRef(null),
      u = D(t, l);
    return p.jsx(gt.Provider, {
      scope: e.__scopeMenu,
      children: p.jsx(Q, {
        present: o || a.open,
        children: p.jsx(gt.Slot, {
          scope: e.__scopeMenu,
          children: p.jsx(Do, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...r,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              var f;
              (s.isUsingKeyboardRef.current &&
                ((f = l.current) == null || f.focus()),
                d.preventDefault());
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: R(e.onFocusOutside, (d) => {
              d.target !== i.trigger && a.onOpenChange(!1);
            }),
            onEscapeKeyDown: R(e.onEscapeKeyDown, (d) => {
              (s.onClose(), d.preventDefault());
            }),
            onKeyDown: R(e.onKeyDown, (d) => {
              var h;
              const f = d.currentTarget.contains(d.target),
                v = xp[s.dir].includes(d.key);
              f &&
                v &&
                (a.onOpenChange(!1),
                (h = i.trigger) == null || h.focus(),
                d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
ws.displayName = xs;
function bs(e) {
  return e ? "open" : "closed";
}
function qt(e) {
  return e === "indeterminate";
}
function ko(e) {
  return qt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Fp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function $p(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Bp(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let s = $p(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) => u.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
function Hp(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a],
      l = t[s],
      u = i.x,
      d = i.y,
      f = l.x,
      v = l.y;
    d > o != v > o && n < ((f - u) * (o - d)) / (v - d) + u && (r = !r);
  }
  return r;
}
function Vp(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Hp(n, t);
}
function xt(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Wp = ts,
  Gp = Io,
  Up = os,
  Kp = rs,
  zp = Oo,
  Yp = as,
  Xp = Cn,
  qp = is,
  Zp = ls,
  Qp = ds,
  Jp = ps,
  ev = vs,
  tv = hs,
  nv = gs,
  ov = ws,
  Sn = "DropdownMenu",
  [rv, Qm] = X(Sn, [Ja]),
  te = Ja(),
  [av, ys] = rv(Sn),
  Cs = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: o,
        open: r,
        defaultOpen: a,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      l = te(t),
      u = c.useRef(null),
      [d, f] = J({ prop: r, defaultProp: a ?? !1, onChange: s, caller: Sn });
    return p.jsx(av, {
      scope: t,
      triggerId: oe(),
      triggerRef: u,
      contentId: oe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((v) => !v), [f]),
      modal: i,
      children: p.jsx(Wp, {
        ...l,
        open: d,
        onOpenChange: f,
        dir: o,
        modal: i,
        children: n,
      }),
    });
  };
Cs.displayName = Sn;
var Ss = "DropdownMenuTrigger",
  Rs = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e,
      a = ys(Ss, n),
      s = te(n);
    return p.jsx(Gp, {
      asChild: !0,
      ...s,
      children: p.jsx(P.button, {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: cn(t, a.triggerRef),
        onPointerDown: R(e.onPointerDown, (i) => {
          !o &&
            i.button === 0 &&
            i.ctrlKey === !1 &&
            (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: R(e.onKeyDown, (i) => {
          o ||
            (["Enter", " "].includes(i.key) && a.onOpenToggle(),
            i.key === "ArrowDown" && a.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        }),
      }),
    });
  });
Rs.displayName = Ss;
var sv = "DropdownMenuPortal",
  Es = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = te(t);
    return p.jsx(Up, { ...o, ...n });
  };
Es.displayName = sv;
var Ps = "DropdownMenuContent",
  As = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ys(Ps, n),
      a = te(n),
      s = c.useRef(!1);
    return p.jsx(Kp, {
      id: r.contentId,
      "aria-labelledby": r.triggerId,
      ...a,
      ...o,
      ref: t,
      onCloseAutoFocus: R(e.onCloseAutoFocus, (i) => {
        var l;
        (s.current || (l = r.triggerRef.current) == null || l.focus(),
          (s.current = !1),
          i.preventDefault());
      }),
      onInteractOutside: R(e.onInteractOutside, (i) => {
        const l = i.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          d = l.button === 2 || u;
        (!r.modal || d) && (s.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
As.displayName = Ps;
var iv = "DropdownMenuGroup",
  _s = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(zp, { ...r, ...o, ref: t });
  });
_s.displayName = iv;
var cv = "DropdownMenuLabel",
  Ts = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Yp, { ...r, ...o, ref: t });
  });
Ts.displayName = cv;
var lv = "DropdownMenuItem",
  Is = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Xp, { ...r, ...o, ref: t });
  });
Is.displayName = lv;
var uv = "DropdownMenuCheckboxItem",
  Ms = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(qp, { ...r, ...o, ref: t });
  });
Ms.displayName = uv;
var dv = "DropdownMenuRadioGroup",
  fv = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Zp, { ...r, ...o, ref: t });
  });
fv.displayName = dv;
var pv = "DropdownMenuRadioItem",
  Ns = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Qp, { ...r, ...o, ref: t });
  });
Ns.displayName = pv;
var vv = "DropdownMenuItemIndicator",
  Ds = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Jp, { ...r, ...o, ref: t });
  });
Ds.displayName = vv;
var hv = "DropdownMenuSeparator",
  Os = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(ev, { ...r, ...o, ref: t });
  });
Os.displayName = hv;
var mv = "DropdownMenuArrow",
  gv = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(tv, { ...r, ...o, ref: t });
  });
gv.displayName = mv;
var xv = "DropdownMenuSubTrigger",
  js = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(nv, { ...r, ...o, ref: t });
  });
js.displayName = xv;
var wv = "DropdownMenuSubContent",
  ks = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(ov, {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
ks.displayName = wv;
var Jm = Cs,
  eg = Rs,
  tg = Es,
  ng = As,
  og = _s,
  rg = Ts,
  ag = Is,
  sg = Ms,
  ig = Ns,
  cg = Ds,
  lg = Os,
  ug = js,
  dg = ks,
  Rn = "Tabs",
  [bv, fg] = X(Rn, [je]),
  Ls = je(),
  [yv, Lo] = bv(Rn),
  Fs = c.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: o,
        onValueChange: r,
        defaultValue: a,
        orientation: s = "horizontal",
        dir: i,
        activationMode: l = "automatic",
        ...u
      } = e,
      d = _e(i),
      [f, v] = J({ prop: o, onChange: r, defaultProp: a ?? "", caller: Rn });
    return p.jsx(yv, {
      scope: n,
      baseId: oe(),
      value: f,
      onValueChange: v,
      orientation: s,
      dir: d,
      activationMode: l,
      children: p.jsx(P.div, { dir: d, "data-orientation": s, ...u, ref: t }),
    });
  });
Fs.displayName = Rn;
var $s = "TabsList",
  Bs = c.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e,
      a = Lo($s, n),
      s = Ls(n);
    return p.jsx(wn, {
      asChild: !0,
      ...s,
      orientation: a.orientation,
      dir: a.dir,
      loop: o,
      children: p.jsx(P.div, {
        role: "tablist",
        "aria-orientation": a.orientation,
        ...r,
        ref: t,
      }),
    });
  });
Bs.displayName = $s;
var Hs = "TabsTrigger",
  Vs = c.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...a } = e,
      s = Lo(Hs, n),
      i = Ls(n),
      l = Us(s.baseId, o),
      u = Ks(s.baseId, o),
      d = o === s.value;
    return p.jsx(bn, {
      asChild: !0,
      ...i,
      focusable: !r,
      active: d,
      children: p.jsx(P.button, {
        type: "button",
        role: "tab",
        "aria-selected": d,
        "aria-controls": u,
        "data-state": d ? "active" : "inactive",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        id: l,
        ...a,
        ref: t,
        onMouseDown: R(e.onMouseDown, (f) => {
          !r && f.button === 0 && f.ctrlKey === !1
            ? s.onValueChange(o)
            : f.preventDefault();
        }),
        onKeyDown: R(e.onKeyDown, (f) => {
          [" ", "Enter"].includes(f.key) && s.onValueChange(o);
        }),
        onFocus: R(e.onFocus, () => {
          const f = s.activationMode !== "manual";
          !d && !r && f && s.onValueChange(o);
        }),
      }),
    });
  });
Vs.displayName = Hs;
var Ws = "TabsContent",
  Gs = c.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: a, ...s } = e,
      i = Lo(Ws, n),
      l = Us(i.baseId, o),
      u = Ks(i.baseId, o),
      d = o === i.value,
      f = c.useRef(d);
    return (
      c.useEffect(() => {
        const v = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(v);
      }, []),
      p.jsx(Q, {
        present: r || d,
        children: ({ present: v }) =>
          p.jsx(P.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": i.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !v,
            id: u,
            tabIndex: 0,
            ...s,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: v && a,
          }),
      })
    );
  });
Gs.displayName = Ws;
function Us(e, t) {
  return `${e}-trigger-${t}`;
}
function Ks(e, t) {
  return `${e}-content-${t}`;
}
var pg = Fs,
  vg = Bs,
  hg = Vs,
  mg = Gs,
  Fo = "Progress",
  $o = 100,
  [Cv, gg] = X(Fo),
  [Sv, Rv] = Cv(Fo),
  zs = c.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: a = Ev,
      ...s
    } = e;
    (r || r === 0) && !_r(r) && console.error(Pv(`${r}`, "Progress"));
    const i = _r(r) ? r : $o;
    o !== null && !Tr(o, i) && console.error(Av(`${o}`, "Progress"));
    const l = Tr(o, i) ? o : null,
      u = Zt(l) ? a(l, i) : void 0;
    return p.jsx(Sv, {
      scope: n,
      value: l,
      max: i,
      children: p.jsx(P.div, {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Zt(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": qs(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t,
      }),
    });
  });
zs.displayName = Fo;
var Ys = "ProgressIndicator",
  Xs = c.forwardRef((e, t) => {
    const { __scopeProgress: n, ...o } = e,
      r = Rv(Ys, n);
    return p.jsx(P.div, {
      "data-state": qs(r.value, r.max),
      "data-value": r.value ?? void 0,
      "data-max": r.max,
      ...o,
      ref: t,
    });
  });
Xs.displayName = Ys;
function Ev(e, t) {
  return `${Math.round((e / t) * 100)}%`;
}
function qs(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Zt(e) {
  return typeof e == "number";
}
function _r(e) {
  return Zt(e) && !isNaN(e) && e > 0;
}
function Tr(e, t) {
  return Zt(e) && !isNaN(e) && e <= t && e >= 0;
}
function Pv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$o}\`.`;
}
function Av(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$o} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var xg = zs,
  wg = Xs;
function wt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Nt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var _v = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Tv = [" ", "Enter"],
  Ve = "Select",
  [En, Pn, Iv] = Pt(Ve),
  [it, bg] = X(Ve, [Iv, Ce]),
  An = Ce(),
  [Mv, ke] = it(Ve),
  [Nv, Dv] = it(Ve),
  Zs = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        value: s,
        defaultValue: i,
        onValueChange: l,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: v,
        required: h,
        form: g,
      } = e,
      m = An(t),
      [x, w] = c.useState(null),
      [b, y] = c.useState(null),
      [C, S] = c.useState(!1),
      A = _e(u),
      [E, T] = J({ prop: o, defaultProp: r ?? !1, onChange: a, caller: Ve }),
      [I, M] = J({ prop: s, defaultProp: i, onChange: l, caller: Ve }),
      O = c.useRef(null),
      L = x ? g || !!x.closest("form") : !0,
      [F, $] = c.useState(new Set()),
      H = Array.from(F)
        .map((k) => k.props.value)
        .join(";");
    return p.jsx(Ct, {
      ...m,
      children: p.jsxs(Mv, {
        required: h,
        scope: t,
        trigger: x,
        onTriggerChange: w,
        valueNode: b,
        onValueNodeChange: y,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: S,
        contentId: oe(),
        value: I,
        onValueChange: M,
        open: E,
        onOpenChange: T,
        dir: A,
        triggerPointerDownPosRef: O,
        disabled: v,
        children: [
          p.jsx(En.Provider, {
            scope: t,
            children: p.jsx(Nv, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: c.useCallback((k) => {
                $((B) => new Set(B).add(k));
              }, []),
              onNativeOptionRemove: c.useCallback((k) => {
                $((B) => {
                  const N = new Set(B);
                  return (N.delete(k), N);
                });
              }, []),
              children: n,
            }),
          }),
          L
            ? p.jsxs(
                yi,
                {
                  "aria-hidden": !0,
                  required: h,
                  tabIndex: -1,
                  name: d,
                  autoComplete: f,
                  value: I,
                  onChange: (k) => M(k.target.value),
                  disabled: v,
                  form: g,
                  children: [
                    I === void 0 ? p.jsx("option", { value: "" }) : null,
                    Array.from(F),
                  ],
                },
                H,
              )
            : null,
        ],
      }),
    });
  };
Zs.displayName = Ve;
var Qs = "SelectTrigger",
  Js = c.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e,
      a = An(n),
      s = ke(Qs, n),
      i = s.disabled || o,
      l = D(t, s.onTriggerChange),
      u = Pn(n),
      d = c.useRef("touch"),
      [f, v, h] = Si((m) => {
        const x = u().filter((y) => !y.disabled),
          w = x.find((y) => y.value === s.value),
          b = Ri(x, m, w);
        b !== void 0 && s.onValueChange(b.value);
      }),
      g = (m) => {
        (i || (s.onOpenChange(!0), h()),
          m &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            }));
      };
    return p.jsx(st, {
      asChild: !0,
      ...a,
      children: p.jsx(P.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Ci(s.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: R(r.onClick, (m) => {
          (m.currentTarget.focus(), d.current !== "mouse" && g(m));
        }),
        onPointerDown: R(r.onPointerDown, (m) => {
          d.current = m.pointerType;
          const x = m.target;
          (x.hasPointerCapture(m.pointerId) &&
            x.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              m.pointerType === "mouse" &&
              (g(m), m.preventDefault()));
        }),
        onKeyDown: R(r.onKeyDown, (m) => {
          const x = f.current !== "";
          (!(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            v(m.key),
            !(x && m.key === " ") &&
              _v.includes(m.key) &&
              (g(), m.preventDefault()));
        }),
      }),
    });
  });
Js.displayName = Qs;
var ei = "SelectValue",
  ti = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: r,
        children: a,
        placeholder: s = "",
        ...i
      } = e,
      l = ke(ei, n),
      { onValueNodeHasChildrenChange: u } = l,
      d = a !== void 0,
      f = D(t, l.onValueNodeChange);
    return (
      q(() => {
        u(d);
      }, [u, d]),
      p.jsx(P.span, {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Ci(l.value) ? p.jsx(p.Fragment, { children: s }) : a,
      })
    );
  });
ti.displayName = ei;
var Ov = "SelectIcon",
  ni = c.forwardRef((e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return p.jsx(P.span, {
      "aria-hidden": !0,
      ...r,
      ref: t,
      children: o || "▼",
    });
  });
ni.displayName = Ov;
var jv = "SelectPortal",
  oi = (e) => p.jsx(Et, { asChild: !0, ...e });
oi.displayName = jv;
var We = "SelectContent",
  ri = c.forwardRef((e, t) => {
    const n = ke(We, e.__scopeSelect),
      [o, r] = c.useState();
    if (
      (q(() => {
        r(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const a = o;
      return a
        ? an.createPortal(
            p.jsx(ai, {
              scope: e.__scopeSelect,
              children: p.jsx(En.Slot, {
                scope: e.__scopeSelect,
                children: p.jsx("div", { children: e.children }),
              }),
            }),
            a,
          )
        : null;
    }
    return p.jsx(si, { ...e, ref: t });
  });
ri.displayName = We;
var de = 10,
  [ai, Le] = it(We),
  kv = "SelectContentImpl",
  Lv = Ne("SelectContent.RemoveScroll"),
  si = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: r,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        side: i,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: v,
        collisionPadding: h,
        sticky: g,
        hideWhenDetached: m,
        avoidCollisions: x,
        ...w
      } = e,
      b = ke(We, n),
      [y, C] = c.useState(null),
      [S, A] = c.useState(null),
      E = D(t, (j) => C(j)),
      [T, I] = c.useState(null),
      [M, O] = c.useState(null),
      L = Pn(n),
      [F, $] = c.useState(!1),
      H = c.useRef(!1);
    (c.useEffect(() => {
      if (y) return gn(y);
    }, [y]),
      hn());
    const k = c.useCallback(
        (j) => {
          const [G, ...Y] = L().map((K) => K.ref.current),
            [W] = Y.slice(-1),
            U = document.activeElement;
          for (const K of j)
            if (
              K === U ||
              (K == null || K.scrollIntoView({ block: "nearest" }),
              K === G && S && (S.scrollTop = 0),
              K === W && S && (S.scrollTop = S.scrollHeight),
              K == null || K.focus(),
              document.activeElement !== U)
            )
              return;
        },
        [L, S],
      ),
      B = c.useCallback(() => k([T, y]), [k, T, y]);
    c.useEffect(() => {
      F && B();
    }, [F, B]);
    const { onOpenChange: N, triggerPointerDownPosRef: _ } = b;
    (c.useEffect(() => {
      if (y) {
        let j = { x: 0, y: 0 };
        const G = (W) => {
            var U, K;
            j = {
              x: Math.abs(
                Math.round(W.pageX) -
                  (((U = _.current) == null ? void 0 : U.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(W.pageY) -
                  (((K = _.current) == null ? void 0 : K.y) ?? 0),
              ),
            };
          },
          Y = (W) => {
            (j.x <= 10 && j.y <= 10
              ? W.preventDefault()
              : y.contains(W.target) || N(!1),
              document.removeEventListener("pointermove", G),
              (_.current = null));
          };
        return (
          _.current !== null &&
            (document.addEventListener("pointermove", G),
            document.addEventListener("pointerup", Y, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", G),
              document.removeEventListener("pointerup", Y, { capture: !0 }));
          }
        );
      }
    }, [y, N, _]),
      c.useEffect(() => {
        const j = () => N(!1);
        return (
          window.addEventListener("blur", j),
          window.addEventListener("resize", j),
          () => {
            (window.removeEventListener("blur", j),
              window.removeEventListener("resize", j));
          }
        );
      }, [N]));
    const [z, Z] = Si((j) => {
        const G = L().filter((U) => !U.disabled),
          Y = G.find((U) => U.ref.current === document.activeElement),
          W = Ri(G, j, Y);
        W && setTimeout(() => W.ref.current.focus());
      }),
      ne = c.useCallback(
        (j, G, Y) => {
          const W = !H.current && !Y;
          ((b.value !== void 0 && b.value === G) || W) &&
            (I(j), W && (H.current = !0));
        },
        [b.value],
      ),
      Re = c.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      ce = c.useCallback(
        (j, G, Y) => {
          const W = !H.current && !Y;
          ((b.value !== void 0 && b.value === G) || W) && O(j);
        },
        [b.value],
      ),
      Ee = o === "popper" ? io : ii,
      re =
        Ee === io
          ? {
              side: i,
              sideOffset: l,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: v,
              collisionPadding: h,
              sticky: g,
              hideWhenDetached: m,
              avoidCollisions: x,
            }
          : {};
    return p.jsx(ai, {
      scope: n,
      content: y,
      viewport: S,
      onViewportChange: A,
      itemRefCallback: ne,
      selectedItem: T,
      onItemLeave: Re,
      itemTextRefCallback: ce,
      focusSelectedItem: B,
      selectedItemText: M,
      position: o,
      isPositioned: F,
      searchRef: z,
      children: p.jsx(_t, {
        as: Lv,
        allowPinchZoom: !0,
        children: p.jsx(At, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (j) => {
            j.preventDefault();
          },
          onUnmountAutoFocus: R(r, (j) => {
            var G;
            ((G = b.trigger) == null || G.focus({ preventScroll: !0 }),
              j.preventDefault());
          }),
          children: p.jsx(Ge, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: (j) => j.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: p.jsx(Ee, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (j) => j.preventDefault(),
              ...w,
              ...re,
              onPlaced: () => $(!0),
              ref: E,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...w.style,
              },
              onKeyDown: R(w.onKeyDown, (j) => {
                const G = j.ctrlKey || j.altKey || j.metaKey;
                if (
                  (j.key === "Tab" && j.preventDefault(),
                  !G && j.key.length === 1 && Z(j.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key))
                ) {
                  let W = L()
                    .filter((U) => !U.disabled)
                    .map((U) => U.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(j.key) &&
                      (W = W.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(j.key))
                  ) {
                    const U = j.target,
                      K = W.indexOf(U);
                    W = W.slice(K + 1);
                  }
                  (setTimeout(() => k(W)), j.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
si.displayName = kv;
var Fv = "SelectItemAlignedPosition",
  ii = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...r } = e,
      a = ke(We, n),
      s = Le(We, n),
      [i, l] = c.useState(null),
      [u, d] = c.useState(null),
      f = D(t, (E) => d(E)),
      v = Pn(n),
      h = c.useRef(!1),
      g = c.useRef(!0),
      {
        viewport: m,
        selectedItem: x,
        selectedItemText: w,
        focusSelectedItem: b,
      } = s,
      y = c.useCallback(() => {
        if (a.trigger && a.valueNode && i && u && m && x && w) {
          const E = a.trigger.getBoundingClientRect(),
            T = u.getBoundingClientRect(),
            I = a.valueNode.getBoundingClientRect(),
            M = w.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const U = M.left - T.left,
              K = I.left - U,
              ae = E.left - K,
              me = E.width + ae,
              lt = Math.max(me, T.width),
              ut = window.innerWidth - de,
              dt = wt(K, [de, Math.max(de, ut - lt)]);
            ((i.style.minWidth = me + "px"), (i.style.left = dt + "px"));
          } else {
            const U = T.right - M.right,
              K = window.innerWidth - I.right - U,
              ae = window.innerWidth - E.right - K,
              me = E.width + ae,
              lt = Math.max(me, T.width),
              ut = window.innerWidth - de,
              dt = wt(K, [de, Math.max(de, ut - lt)]);
            ((i.style.minWidth = me + "px"), (i.style.right = dt + "px"));
          }
          const O = v(),
            L = window.innerHeight - de * 2,
            F = m.scrollHeight,
            $ = window.getComputedStyle(u),
            H = parseInt($.borderTopWidth, 10),
            k = parseInt($.paddingTop, 10),
            B = parseInt($.borderBottomWidth, 10),
            N = parseInt($.paddingBottom, 10),
            _ = H + k + F + N + B,
            z = Math.min(x.offsetHeight * 5, _),
            Z = window.getComputedStyle(m),
            ne = parseInt(Z.paddingTop, 10),
            Re = parseInt(Z.paddingBottom, 10),
            ce = E.top + E.height / 2 - de,
            Ee = L - ce,
            re = x.offsetHeight / 2,
            j = x.offsetTop + re,
            G = H + k + j,
            Y = _ - G;
          if (G <= ce) {
            const U = O.length > 0 && x === O[O.length - 1].ref.current;
            i.style.bottom = "0px";
            const K = u.clientHeight - m.offsetTop - m.offsetHeight,
              ae = Math.max(Ee, re + (U ? Re : 0) + K + B),
              me = G + ae;
            i.style.height = me + "px";
          } else {
            const U = O.length > 0 && x === O[0].ref.current;
            i.style.top = "0px";
            const ae = Math.max(ce, H + m.offsetTop + (U ? ne : 0) + re) + Y;
            ((i.style.height = ae + "px"),
              (m.scrollTop = G - ce + m.offsetTop));
          }
          ((i.style.margin = `${de}px 0`),
            (i.style.minHeight = z + "px"),
            (i.style.maxHeight = L + "px"),
            o == null || o(),
            requestAnimationFrame(() => (h.current = !0)));
        }
      }, [v, a.trigger, a.valueNode, i, u, m, x, w, a.dir, o]);
    q(() => y(), [y]);
    const [C, S] = c.useState();
    q(() => {
      u && S(window.getComputedStyle(u).zIndex);
    }, [u]);
    const A = c.useCallback(
      (E) => {
        E && g.current === !0 && (y(), b == null || b(), (g.current = !1));
      },
      [y, b],
    );
    return p.jsx(Bv, {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: A,
      children: p.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: p.jsx(P.div, {
          ...r,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
        }),
      }),
    });
  });
ii.displayName = Fv;
var $v = "SelectPopperPosition",
  io = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: r = de,
        ...a
      } = e,
      s = An(n);
    return p.jsx(St, {
      ...s,
      ...a,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
io.displayName = $v;
var [Bv, Bo] = it(We, {}),
  co = "SelectViewport",
  ci = c.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e,
      a = Le(co, n),
      s = Bo(co, n),
      i = D(t, a.onViewportChange),
      l = c.useRef(0);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        p.jsx(En.Slot, {
          scope: n,
          children: p.jsx(P.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...r,
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...r.style,
            },
            onScroll: R(r.onScroll, (u) => {
              const d = u.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: v } = s;
              if (v != null && v.current && f) {
                const h = Math.abs(l.current - d.scrollTop);
                if (h > 0) {
                  const g = window.innerHeight - de * 2,
                    m = parseFloat(f.style.minHeight),
                    x = parseFloat(f.style.height),
                    w = Math.max(m, x);
                  if (w < g) {
                    const b = w + h,
                      y = Math.min(g, b),
                      C = b - y;
                    ((f.style.height = y + "px"),
                      f.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (f.style.justifyContent = "flex-end")));
                  }
                }
              }
              l.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
ci.displayName = co;
var li = "SelectGroup",
  [Hv, Vv] = it(li),
  Wv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = oe();
    return p.jsx(Hv, {
      scope: n,
      id: r,
      children: p.jsx(P.div, {
        role: "group",
        "aria-labelledby": r,
        ...o,
        ref: t,
      }),
    });
  });
Wv.displayName = li;
var ui = "SelectLabel",
  di = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Vv(ui, n);
    return p.jsx(P.div, { id: r.id, ...o, ref: t });
  });
di.displayName = ui;
var Qt = "SelectItem",
  [Gv, fi] = it(Qt),
  pi = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: r = !1,
        textValue: a,
        ...s
      } = e,
      i = ke(Qt, n),
      l = Le(Qt, n),
      u = i.value === o,
      [d, f] = c.useState(a ?? ""),
      [v, h] = c.useState(!1),
      g = D(t, (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, o, r);
      }),
      m = oe(),
      x = c.useRef("touch"),
      w = () => {
        r || (i.onValueChange(o), i.onOpenChange(!1));
      };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return p.jsx(Gv, {
      scope: n,
      value: o,
      disabled: r,
      textId: m,
      isSelected: u,
      onItemTextChange: c.useCallback((b) => {
        f((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
      }, []),
      children: p.jsx(En.ItemSlot, {
        scope: n,
        value: o,
        disabled: r,
        textValue: d,
        children: p.jsx(P.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": v ? "" : void 0,
          "aria-selected": u && v,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          tabIndex: r ? void 0 : -1,
          ...s,
          ref: g,
          onFocus: R(s.onFocus, () => h(!0)),
          onBlur: R(s.onBlur, () => h(!1)),
          onClick: R(s.onClick, () => {
            x.current !== "mouse" && w();
          }),
          onPointerUp: R(s.onPointerUp, () => {
            x.current === "mouse" && w();
          }),
          onPointerDown: R(s.onPointerDown, (b) => {
            x.current = b.pointerType;
          }),
          onPointerMove: R(s.onPointerMove, (b) => {
            var y;
            ((x.current = b.pointerType),
              r
                ? (y = l.onItemLeave) == null || y.call(l)
                : x.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: R(s.onPointerLeave, (b) => {
            var y;
            b.currentTarget === document.activeElement &&
              ((y = l.onItemLeave) == null || y.call(l));
          }),
          onKeyDown: R(s.onKeyDown, (b) => {
            var C;
            (((C = l.searchRef) == null ? void 0 : C.current) !== "" &&
              b.key === " ") ||
              (Tv.includes(b.key) && w(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
pi.displayName = Qt;
var pt = "SelectItemText",
  vi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...a } = e,
      s = ke(pt, n),
      i = Le(pt, n),
      l = fi(pt, n),
      u = Dv(pt, n),
      [d, f] = c.useState(null),
      v = D(
        t,
        (w) => f(w),
        l.onItemTextChange,
        (w) => {
          var b;
          return (b = i.itemTextRefCallback) == null
            ? void 0
            : b.call(i, w, l.value, l.disabled);
        },
      ),
      h = d == null ? void 0 : d.textContent,
      g = c.useMemo(
        () =>
          p.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: h },
            l.value,
          ),
        [l.disabled, l.value, h],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: x } = u;
    return (
      q(() => (m(g), () => x(g)), [m, x, g]),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(P.span, { id: l.textId, ...a, ref: v }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? an.createPortal(a.children, s.valueNode)
            : null,
        ],
      })
    );
  });
vi.displayName = pt;
var hi = "SelectItemIndicator",
  mi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return fi(hi, n).isSelected
      ? p.jsx(P.span, { "aria-hidden": !0, ...o, ref: t })
      : null;
  });
mi.displayName = hi;
var lo = "SelectScrollUpButton",
  gi = c.forwardRef((e, t) => {
    const n = Le(lo, e.__scopeSelect),
      o = Bo(lo, e.__scopeSelect),
      [r, a] = c.useState(!1),
      s = D(t, o.onScrollButtonChange);
    return (
      q(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = l.scrollTop > 0;
            a(u);
          };
          const l = n.viewport;
          return (
            i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? p.jsx(wi, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = n;
              i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
gi.displayName = lo;
var uo = "SelectScrollDownButton",
  xi = c.forwardRef((e, t) => {
    const n = Le(uo, e.__scopeSelect),
      o = Bo(uo, e.__scopeSelect),
      [r, a] = c.useState(!1),
      s = D(t, o.onScrollButtonChange);
    return (
      q(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = l.scrollHeight - l.clientHeight,
              d = Math.ceil(l.scrollTop) < u;
            a(d);
          };
          const l = n.viewport;
          return (
            i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? p.jsx(wi, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = n;
              i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
xi.displayName = uo;
var wi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
      a = Le("SelectScrollButton", n),
      s = c.useRef(null),
      i = Pn(n),
      l = c.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      c.useEffect(() => () => l(), [l]),
      q(() => {
        var d;
        const u = i().find((f) => f.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [i]),
      p.jsx(P.div, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        style: { flexShrink: 0, ...r.style },
        onPointerDown: R(r.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(o, 50));
        }),
        onPointerMove: R(r.onPointerMove, () => {
          var u;
          ((u = a.onItemLeave) == null || u.call(a),
            s.current === null && (s.current = window.setInterval(o, 50)));
        }),
        onPointerLeave: R(r.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  Uv = "SelectSeparator",
  bi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return p.jsx(P.div, { "aria-hidden": !0, ...o, ref: t });
  });
bi.displayName = Uv;
var fo = "SelectArrow",
  Kv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = An(n),
      a = ke(fo, n),
      s = Le(fo, n);
    return a.open && s.position === "popper"
      ? p.jsx(Rt, { ...r, ...o, ref: t })
      : null;
  });
Kv.displayName = fo;
var zv = "SelectBubbleInput",
  yi = c.forwardRef(({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = c.useRef(null),
      a = D(o, r),
      s = Nt(t);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (!i) return;
        const l = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== t && d) {
          const f = new Event("change", { bubbles: !0 });
          (d.call(i, t), i.dispatchEvent(f));
        }
      }, [s, t]),
      p.jsx(P.select, {
        ...n,
        style: { ...la, ...n.style },
        ref: a,
        defaultValue: t,
      })
    );
  });
yi.displayName = zv;
function Ci(e) {
  return e === "" || e === void 0;
}
function Si(e) {
  const t = ee(e),
    n = c.useRef(""),
    o = c.useRef(0),
    r = c.useCallback(
      (s) => {
        const i = n.current + s;
        (t(i),
          (function l(u) {
            ((n.current = u),
              window.clearTimeout(o.current),
              u !== "" && (o.current = window.setTimeout(() => l(""), 1e3)));
          })(i));
      },
      [t],
    ),
    a = c.useCallback(() => {
      ((n.current = ""), window.clearTimeout(o.current));
    }, []);
  return (
    c.useEffect(() => () => window.clearTimeout(o.current), []),
    [n, r, a]
  );
}
function Ri(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let s = Yv(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) =>
    u.textValue.toLowerCase().startsWith(r.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function Yv(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var yg = Zs,
  Cg = Js,
  Sg = ti,
  Rg = ni,
  Eg = oi,
  Pg = ri,
  Ag = ci,
  _g = di,
  Tg = pi,
  Ig = vi,
  Mg = mi,
  Ng = gi,
  Dg = xi,
  Og = bi,
  Xv = "Label",
  Ei = c.forwardRef((e, t) =>
    p.jsx(P.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var r;
        n.target.closest("button, input, select, textarea") ||
          ((r = e.onMouseDown) == null || r.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
Ei.displayName = Xv;
var jg = Ei;
function qv() {
  return Yd.useSyncExternalStore(
    Zv,
    () => !0,
    () => !1,
  );
}
function Zv() {
  return () => {};
}
var Ho = "Avatar",
  [Qv, kg] = X(Ho),
  [Jv, Pi] = Qv(Ho),
  Ai = c.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...o } = e,
      [r, a] = c.useState("idle");
    return p.jsx(Jv, {
      scope: n,
      imageLoadingStatus: r,
      onImageLoadingStatusChange: a,
      children: p.jsx(P.span, { ...o, ref: t }),
    });
  });
Ai.displayName = Ho;
var _i = "AvatarImage",
  Ti = c.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: o,
        onLoadingStatusChange: r = () => {},
        ...a
      } = e,
      s = Pi(_i, n),
      i = eh(o, a),
      l = ee((u) => {
        (r(u), s.onImageLoadingStatusChange(u));
      });
    return (
      q(() => {
        i !== "idle" && l(i);
      }, [i, l]),
      i === "loaded" ? p.jsx(P.img, { ...a, ref: t, src: o }) : null
    );
  });
Ti.displayName = _i;
var Ii = "AvatarFallback",
  Mi = c.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: o, ...r } = e,
      a = Pi(Ii, n),
      [s, i] = c.useState(o === void 0);
    return (
      c.useEffect(() => {
        if (o !== void 0) {
          const l = window.setTimeout(() => i(!0), o);
          return () => window.clearTimeout(l);
        }
      }, [o]),
      s && a.imageLoadingStatus !== "loaded"
        ? p.jsx(P.span, { ...r, ref: t })
        : null
    );
  });
Mi.displayName = Ii;
function Ir(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t),
        e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function eh(e, { referrerPolicy: t, crossOrigin: n }) {
  const o = qv(),
    r = c.useRef(null),
    a = o ? (r.current || (r.current = new window.Image()), r.current) : null,
    [s, i] = c.useState(() => Ir(a, e));
  return (
    q(() => {
      i(Ir(a, e));
    }, [a, e]),
    q(() => {
      const l = (f) => () => {
        i(f);
      };
      if (!a) return;
      const u = l("loaded"),
        d = l("error");
      return (
        a.addEventListener("load", u),
        a.addEventListener("error", d),
        t && (a.referrerPolicy = t),
        typeof n == "string" && (a.crossOrigin = n),
        () => {
          (a.removeEventListener("load", u), a.removeEventListener("error", d));
        }
      );
    }, [a, n, t]),
    s
  );
}
var Lg = Ai,
  Fg = Ti,
  $g = Mi,
  _n = "Switch",
  [th, Bg] = X(_n),
  [nh, oh] = th(_n),
  Ni = c.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: o,
        checked: r,
        defaultChecked: a,
        required: s,
        disabled: i,
        value: l = "on",
        onCheckedChange: u,
        form: d,
        ...f
      } = e,
      [v, h] = c.useState(null),
      g = D(t, (y) => h(y)),
      m = c.useRef(!1),
      x = v ? d || !!v.closest("form") : !0,
      [w, b] = J({ prop: r, defaultProp: a ?? !1, onChange: u, caller: _n });
    return p.jsxs(nh, {
      scope: n,
      checked: w,
      disabled: i,
      children: [
        p.jsx(P.button, {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": ki(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: g,
          onClick: R(e.onClick, (y) => {
            (b((C) => !C),
              x &&
                ((m.current = y.isPropagationStopped()),
                m.current || y.stopPropagation()));
          }),
        }),
        x &&
          p.jsx(ji, {
            control: v,
            bubbles: !m.current,
            name: o,
            value: l,
            checked: w,
            required: s,
            disabled: i,
            form: d,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Ni.displayName = _n;
var Di = "SwitchThumb",
  Oi = c.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...o } = e,
      r = oh(Di, n);
    return p.jsx(P.span, {
      "data-state": ki(r.checked),
      "data-disabled": r.disabled ? "" : void 0,
      ...o,
      ref: t,
    });
  });
Oi.displayName = Di;
var rh = "SwitchBubbleInput",
  ji = c.forwardRef(
    (
      { __scopeSwitch: e, control: t, checked: n, bubbles: o = !0, ...r },
      a,
    ) => {
      const s = c.useRef(null),
        i = D(s, a),
        l = Nt(n),
        u = yt(t);
      return (
        c.useEffect(() => {
          const d = s.current;
          if (!d) return;
          const f = window.HTMLInputElement.prototype,
            h = Object.getOwnPropertyDescriptor(f, "checked").set;
          if (l !== n && h) {
            const g = new Event("click", { bubbles: o });
            (h.call(d, n), d.dispatchEvent(g));
          }
        }, [l, n, o]),
        p.jsx("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: n,
          ...r,
          tabIndex: -1,
          ref: i,
          style: {
            ...r.style,
            ...u,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
ji.displayName = rh;
function ki(e) {
  return e ? "checked" : "unchecked";
}
var Hg = Ni,
  Vg = Oi,
  ah = "Separator",
  Mr = "horizontal",
  sh = ["horizontal", "vertical"],
  Li = c.forwardRef((e, t) => {
    const { decorative: n, orientation: o = Mr, ...r } = e,
      a = ih(o) ? o : Mr,
      i = n
        ? { role: "none" }
        : {
            "aria-orientation": a === "vertical" ? a : void 0,
            role: "separator",
          };
    return p.jsx(P.div, { "data-orientation": a, ...i, ...r, ref: t });
  });
Li.displayName = ah;
function ih(e) {
  return sh.includes(e);
}
var Wg = Li,
  Fi = ["PageUp", "PageDown"],
  $i = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Bi = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  ct = "Slider",
  [po, ch, lh] = Pt(ct),
  [Hi, Gg] = X(ct, [lh]),
  [uh, Tn] = Hi(ct),
  Vi = c.forwardRef((e, t) => {
    const {
        name: n,
        min: o = 0,
        max: r = 100,
        step: a = 1,
        orientation: s = "horizontal",
        disabled: i = !1,
        minStepsBetweenThumbs: l = 0,
        defaultValue: u = [o],
        value: d,
        onValueChange: f = () => {},
        onValueCommit: v = () => {},
        inverted: h = !1,
        form: g,
        ...m
      } = e,
      x = c.useRef(new Set()),
      w = c.useRef(0),
      y = s === "horizontal" ? dh : fh,
      [C = [], S] = J({
        prop: d,
        defaultProp: u,
        onChange: (O) => {
          var F;
          ((F = [...x.current][w.current]) == null || F.focus(), f(O));
        },
      }),
      A = c.useRef(C);
    function E(O) {
      const L = gh(C, O);
      M(O, L);
    }
    function T(O) {
      M(O, w.current);
    }
    function I() {
      const O = A.current[w.current];
      C[w.current] !== O && v(C);
    }
    function M(O, L, { commit: F } = { commit: !1 }) {
      const $ = yh(a),
        H = Ch(Math.round((O - o) / a) * a + o, $),
        k = wt(H, [o, r]);
      S((B = []) => {
        const N = hh(B, k, L);
        if (bh(N, l * a)) {
          w.current = N.indexOf(k);
          const _ = String(N) !== String(B);
          return (_ && F && v(N), _ ? N : B);
        } else return B;
      });
    }
    return p.jsx(uh, {
      scope: e.__scopeSlider,
      name: n,
      disabled: i,
      min: o,
      max: r,
      valueIndexToChangeRef: w,
      thumbs: x.current,
      values: C,
      orientation: s,
      form: g,
      children: p.jsx(po.Provider, {
        scope: e.__scopeSlider,
        children: p.jsx(po.Slot, {
          scope: e.__scopeSlider,
          children: p.jsx(y, {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...m,
            ref: t,
            onPointerDown: R(m.onPointerDown, () => {
              i || (A.current = C);
            }),
            min: o,
            max: r,
            inverted: h,
            onSlideStart: i ? void 0 : E,
            onSlideMove: i ? void 0 : T,
            onSlideEnd: i ? void 0 : I,
            onHomeKeyDown: () => !i && M(o, 0, { commit: !0 }),
            onEndKeyDown: () => !i && M(r, C.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: O, direction: L }) => {
              if (!i) {
                const H =
                    Fi.includes(O.key) || (O.shiftKey && $i.includes(O.key))
                      ? 10
                      : 1,
                  k = w.current,
                  B = C[k],
                  N = a * H * L;
                M(B + N, k, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
Vi.displayName = ct;
var [Wi, Gi] = Hi(ct, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  dh = c.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        dir: r,
        inverted: a,
        onSlideStart: s,
        onSlideMove: i,
        onSlideEnd: l,
        onStepKeyDown: u,
        ...d
      } = e,
      [f, v] = c.useState(null),
      h = D(t, (y) => v(y)),
      g = c.useRef(void 0),
      m = _e(r),
      x = m === "ltr",
      w = (x && !a) || (!x && a);
    function b(y) {
      const C = g.current || f.getBoundingClientRect(),
        S = [0, C.width],
        E = Vo(S, w ? [n, o] : [o, n]);
      return ((g.current = C), E(y - C.left));
    }
    return p.jsx(Wi, {
      scope: e.__scopeSlider,
      startEdge: w ? "left" : "right",
      endEdge: w ? "right" : "left",
      direction: w ? 1 : -1,
      size: "width",
      children: p.jsx(Ui, {
        dir: m,
        "data-orientation": "horizontal",
        ...d,
        ref: h,
        style: {
          ...d.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (y) => {
          const C = b(y.clientX);
          s == null || s(C);
        },
        onSlideMove: (y) => {
          const C = b(y.clientX);
          i == null || i(C);
        },
        onSlideEnd: () => {
          ((g.current = void 0), l == null || l());
        },
        onStepKeyDown: (y) => {
          const S = Bi[w ? "from-left" : "from-right"].includes(y.key);
          u == null || u({ event: y, direction: S ? -1 : 1 });
        },
      }),
    });
  }),
  fh = c.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        inverted: r,
        onSlideStart: a,
        onSlideMove: s,
        onSlideEnd: i,
        onStepKeyDown: l,
        ...u
      } = e,
      d = c.useRef(null),
      f = D(t, d),
      v = c.useRef(void 0),
      h = !r;
    function g(m) {
      const x = v.current || d.current.getBoundingClientRect(),
        w = [0, x.height],
        y = Vo(w, h ? [o, n] : [n, o]);
      return ((v.current = x), y(m - x.top));
    }
    return p.jsx(Wi, {
      scope: e.__scopeSlider,
      startEdge: h ? "bottom" : "top",
      endEdge: h ? "top" : "bottom",
      size: "height",
      direction: h ? 1 : -1,
      children: p.jsx(Ui, {
        "data-orientation": "vertical",
        ...u,
        ref: f,
        style: {
          ...u.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (m) => {
          const x = g(m.clientY);
          a == null || a(x);
        },
        onSlideMove: (m) => {
          const x = g(m.clientY);
          s == null || s(x);
        },
        onSlideEnd: () => {
          ((v.current = void 0), i == null || i());
        },
        onStepKeyDown: (m) => {
          const w = Bi[h ? "from-bottom" : "from-top"].includes(m.key);
          l == null || l({ event: m, direction: w ? -1 : 1 });
        },
      }),
    });
  }),
  Ui = c.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: o,
        onSlideMove: r,
        onSlideEnd: a,
        onHomeKeyDown: s,
        onEndKeyDown: i,
        onStepKeyDown: l,
        ...u
      } = e,
      d = Tn(ct, n);
    return p.jsx(P.span, {
      ...u,
      ref: t,
      onKeyDown: R(e.onKeyDown, (f) => {
        f.key === "Home"
          ? (s(f), f.preventDefault())
          : f.key === "End"
            ? (i(f), f.preventDefault())
            : Fi.concat($i).includes(f.key) && (l(f), f.preventDefault());
      }),
      onPointerDown: R(e.onPointerDown, (f) => {
        const v = f.target;
        (v.setPointerCapture(f.pointerId),
          f.preventDefault(),
          d.thumbs.has(v) ? v.focus() : o(f));
      }),
      onPointerMove: R(e.onPointerMove, (f) => {
        f.target.hasPointerCapture(f.pointerId) && r(f);
      }),
      onPointerUp: R(e.onPointerUp, (f) => {
        const v = f.target;
        v.hasPointerCapture(f.pointerId) &&
          (v.releasePointerCapture(f.pointerId), a(f));
      }),
    });
  }),
  Ki = "SliderTrack",
  zi = c.forwardRef((e, t) => {
    const { __scopeSlider: n, ...o } = e,
      r = Tn(Ki, n);
    return p.jsx(P.span, {
      "data-disabled": r.disabled ? "" : void 0,
      "data-orientation": r.orientation,
      ...o,
      ref: t,
    });
  });
zi.displayName = Ki;
var vo = "SliderRange",
  Yi = c.forwardRef((e, t) => {
    const { __scopeSlider: n, ...o } = e,
      r = Tn(vo, n),
      a = Gi(vo, n),
      s = c.useRef(null),
      i = D(t, s),
      l = r.values.length,
      u = r.values.map((v) => Zi(v, r.min, r.max)),
      d = l > 1 ? Math.min(...u) : 0,
      f = 100 - Math.max(...u);
    return p.jsx(P.span, {
      "data-orientation": r.orientation,
      "data-disabled": r.disabled ? "" : void 0,
      ...o,
      ref: i,
      style: { ...e.style, [a.startEdge]: d + "%", [a.endEdge]: f + "%" },
    });
  });
Yi.displayName = vo;
var ho = "SliderThumb",
  Xi = c.forwardRef((e, t) => {
    const n = ch(e.__scopeSlider),
      [o, r] = c.useState(null),
      a = D(t, (i) => r(i)),
      s = c.useMemo(
        () => (o ? n().findIndex((i) => i.ref.current === o) : -1),
        [n, o],
      );
    return p.jsx(ph, { ...e, ref: a, index: s });
  }),
  ph = c.forwardRef((e, t) => {
    const { __scopeSlider: n, index: o, name: r, ...a } = e,
      s = Tn(ho, n),
      i = Gi(ho, n),
      [l, u] = c.useState(null),
      d = D(t, (b) => u(b)),
      f = l ? s.form || !!l.closest("form") : !0,
      v = yt(l),
      h = s.values[o],
      g = h === void 0 ? 0 : Zi(h, s.min, s.max),
      m = mh(o, s.values.length),
      x = v == null ? void 0 : v[i.size],
      w = x ? xh(x, g, i.direction) : 0;
    return (
      c.useEffect(() => {
        if (l)
          return (
            s.thumbs.add(l),
            () => {
              s.thumbs.delete(l);
            }
          );
      }, [l, s.thumbs]),
      p.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${g}% + ${w}px)`,
        },
        children: [
          p.jsx(po.ItemSlot, {
            scope: e.__scopeSlider,
            children: p.jsx(P.span, {
              role: "slider",
              "aria-label": e["aria-label"] || m,
              "aria-valuemin": s.min,
              "aria-valuenow": h,
              "aria-valuemax": s.max,
              "aria-orientation": s.orientation,
              "data-orientation": s.orientation,
              "data-disabled": s.disabled ? "" : void 0,
              tabIndex: s.disabled ? void 0 : 0,
              ...a,
              ref: d,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: R(e.onFocus, () => {
                s.valueIndexToChangeRef.current = o;
              }),
            }),
          }),
          f &&
            p.jsx(
              qi,
              {
                name:
                  r ??
                  (s.name
                    ? s.name + (s.values.length > 1 ? "[]" : "")
                    : void 0),
                form: s.form,
                value: h,
              },
              o,
            ),
        ],
      })
    );
  });
Xi.displayName = ho;
var vh = "RadioBubbleInput",
  qi = c.forwardRef(({ __scopeSlider: e, value: t, ...n }, o) => {
    const r = c.useRef(null),
      a = D(r, o),
      s = Nt(t);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (!i) return;
        const l = window.HTMLInputElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== t && d) {
          const f = new Event("input", { bubbles: !0 });
          (d.call(i, t), i.dispatchEvent(f));
        }
      }, [s, t]),
      p.jsx(P.input, {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t,
      })
    );
  });
qi.displayName = vh;
function hh(e = [], t, n) {
  const o = [...e];
  return ((o[n] = t), o.sort((r, a) => r - a));
}
function Zi(e, t, n) {
  const a = (100 / (n - t)) * (e - t);
  return wt(a, [0, 100]);
}
function mh(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
      ? ["Minimum", "Maximum"][e]
      : void 0;
}
function gh(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)),
    o = Math.min(...n);
  return n.indexOf(o);
}
function xh(e, t, n) {
  const o = e / 2,
    a = Vo([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function wh(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function bh(e, t) {
  if (t > 0) {
    const n = wh(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Vo(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function yh(e) {
  return (String(e).split(".")[1] || "").length;
}
function Ch(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Ug = Vi,
  Kg = zi,
  zg = Yi,
  Yg = Xi;
function Sh(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Wo = "ScrollArea",
  [Qi, Xg] = X(Wo),
  [Rh, ue] = Qi(Wo),
  Ji = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: o = "hover",
        dir: r,
        scrollHideDelay: a = 600,
        ...s
      } = e,
      [i, l] = c.useState(null),
      [u, d] = c.useState(null),
      [f, v] = c.useState(null),
      [h, g] = c.useState(null),
      [m, x] = c.useState(null),
      [w, b] = c.useState(0),
      [y, C] = c.useState(0),
      [S, A] = c.useState(!1),
      [E, T] = c.useState(!1),
      I = D(t, (O) => l(O)),
      M = _e(r);
    return p.jsx(Rh, {
      scope: n,
      type: o,
      dir: M,
      scrollHideDelay: a,
      scrollArea: i,
      viewport: u,
      onViewportChange: d,
      content: f,
      onContentChange: v,
      scrollbarX: h,
      onScrollbarXChange: g,
      scrollbarXEnabled: S,
      onScrollbarXEnabledChange: A,
      scrollbarY: m,
      onScrollbarYChange: x,
      scrollbarYEnabled: E,
      onScrollbarYEnabledChange: T,
      onCornerWidthChange: b,
      onCornerHeightChange: C,
      children: p.jsx(P.div, {
        dir: M,
        ...s,
        ref: I,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": w + "px",
          "--radix-scroll-area-corner-height": y + "px",
          ...e.style,
        },
      }),
    });
  });
Ji.displayName = Wo;
var ec = "ScrollAreaViewport",
  tc = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...a } = e,
      s = ue(ec, n),
      i = c.useRef(null),
      l = D(t, i, s.onViewportChange);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        p.jsx(P.div, {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: p.jsx("div", {
            ref: s.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: o,
          }),
        }),
      ],
    });
  });
tc.displayName = ec;
var Se = "ScrollAreaScrollbar",
  Eh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(Se, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = r,
      i = e.orientation === "horizontal";
    return (
      c.useEffect(
        () => (
          i ? a(!0) : s(!0),
          () => {
            i ? a(!1) : s(!1);
          }
        ),
        [i, a, s],
      ),
      r.type === "hover"
        ? p.jsx(Ph, { ...o, ref: t, forceMount: n })
        : r.type === "scroll"
          ? p.jsx(Ah, { ...o, ref: t, forceMount: n })
          : r.type === "auto"
            ? p.jsx(nc, { ...o, ref: t, forceMount: n })
            : r.type === "always"
              ? p.jsx(Go, { ...o, ref: t })
              : null
    );
  });
Eh.displayName = Se;
var Ph = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(Se, e.__scopeScrollArea),
      [a, s] = c.useState(!1);
    return (
      c.useEffect(() => {
        const i = r.scrollArea;
        let l = 0;
        if (i) {
          const u = () => {
              (window.clearTimeout(l), s(!0));
            },
            d = () => {
              l = window.setTimeout(() => s(!1), r.scrollHideDelay);
            };
          return (
            i.addEventListener("pointerenter", u),
            i.addEventListener("pointerleave", d),
            () => {
              (window.clearTimeout(l),
                i.removeEventListener("pointerenter", u),
                i.removeEventListener("pointerleave", d));
            }
          );
        }
      }, [r.scrollArea, r.scrollHideDelay]),
      p.jsx(Q, {
        present: n || a,
        children: p.jsx(nc, {
          "data-state": a ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  Ah = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(Se, e.__scopeScrollArea),
      a = e.orientation === "horizontal",
      s = Mn(() => l("SCROLL_END"), 100),
      [i, l] = Sh("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      c.useEffect(() => {
        if (i === "idle") {
          const u = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [i, r.scrollHideDelay, l]),
      c.useEffect(() => {
        const u = r.viewport,
          d = a ? "scrollLeft" : "scrollTop";
        if (u) {
          let f = u[d];
          const v = () => {
            const h = u[d];
            (f !== h && (l("SCROLL"), s()), (f = h));
          };
          return (
            u.addEventListener("scroll", v),
            () => u.removeEventListener("scroll", v)
          );
        }
      }, [r.viewport, a, l, s]),
      p.jsx(Q, {
        present: n || i !== "hidden",
        children: p.jsx(Go, {
          "data-state": i === "hidden" ? "hidden" : "visible",
          ...o,
          ref: t,
          onPointerEnter: R(e.onPointerEnter, () => l("POINTER_ENTER")),
          onPointerLeave: R(e.onPointerLeave, () => l("POINTER_LEAVE")),
        }),
      })
    );
  }),
  nc = c.forwardRef((e, t) => {
    const n = ue(Se, e.__scopeScrollArea),
      { forceMount: o, ...r } = e,
      [a, s] = c.useState(!1),
      i = e.orientation === "horizontal",
      l = Mn(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            d = n.viewport.offsetHeight < n.viewport.scrollHeight;
          s(i ? u : d);
        }
      }, 10);
    return (
      nt(n.viewport, l),
      nt(n.content, l),
      p.jsx(Q, {
        present: o || a,
        children: p.jsx(Go, {
          "data-state": a ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  Go = c.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...o } = e,
      r = ue(Se, e.__scopeScrollArea),
      a = c.useRef(null),
      s = c.useRef(0),
      [i, l] = c.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = sc(i.viewport, i.content),
      d = {
        ...o,
        sizes: i,
        onSizesChange: l,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (v) => (a.current = v),
        onThumbPointerUp: () => (s.current = 0),
        onThumbPointerDown: (v) => (s.current = v),
      };
    function f(v, h) {
      return Oh(v, s.current, i, h);
    }
    return n === "horizontal"
      ? p.jsx(_h, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (r.viewport && a.current) {
              const v = r.viewport.scrollLeft,
                h = Nr(v, i, r.dir);
              a.current.style.transform = `translate3d(${h}px, 0, 0)`;
            }
          },
          onWheelScroll: (v) => {
            r.viewport && (r.viewport.scrollLeft = v);
          },
          onDragScroll: (v) => {
            r.viewport && (r.viewport.scrollLeft = f(v, r.dir));
          },
        })
      : n === "vertical"
        ? p.jsx(Th, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (r.viewport && a.current) {
                const v = r.viewport.scrollTop,
                  h = Nr(v, i);
                a.current.style.transform = `translate3d(0, ${h}px, 0)`;
              }
            },
            onWheelScroll: (v) => {
              r.viewport && (r.viewport.scrollTop = v);
            },
            onDragScroll: (v) => {
              r.viewport && (r.viewport.scrollTop = f(v));
            },
          })
        : null;
  }),
  _h = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: o, ...r } = e,
      a = ue(Se, e.__scopeScrollArea),
      [s, i] = c.useState(),
      l = c.useRef(null),
      u = D(t, l, a.onScrollbarXChange);
    return (
      c.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      p.jsx(rc, {
        "data-orientation": "horizontal",
        ...r,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": In(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (a.viewport) {
            const v = a.viewport.scrollLeft + d.deltaX;
            (e.onWheelScroll(v), cc(v, f) && d.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            s &&
            o({
              content: a.viewport.scrollWidth,
              viewport: a.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: en(s.paddingLeft),
                paddingEnd: en(s.paddingRight),
              },
            });
        },
      })
    );
  }),
  Th = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: o, ...r } = e,
      a = ue(Se, e.__scopeScrollArea),
      [s, i] = c.useState(),
      l = c.useRef(null),
      u = D(t, l, a.onScrollbarYChange);
    return (
      c.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      p.jsx(rc, {
        "data-orientation": "vertical",
        ...r,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: a.dir === "ltr" ? 0 : void 0,
          left: a.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": In(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (a.viewport) {
            const v = a.viewport.scrollTop + d.deltaY;
            (e.onWheelScroll(v), cc(v, f) && d.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            s &&
            o({
              content: a.viewport.scrollHeight,
              viewport: a.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: en(s.paddingTop),
                paddingEnd: en(s.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [Ih, oc] = Qi(Se),
  rc = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: o,
        hasThumb: r,
        onThumbChange: a,
        onThumbPointerUp: s,
        onThumbPointerDown: i,
        onThumbPositionChange: l,
        onDragScroll: u,
        onWheelScroll: d,
        onResize: f,
        ...v
      } = e,
      h = ue(Se, n),
      [g, m] = c.useState(null),
      x = D(t, (I) => m(I)),
      w = c.useRef(null),
      b = c.useRef(""),
      y = h.viewport,
      C = o.content - o.viewport,
      S = ee(d),
      A = ee(l),
      E = Mn(f, 10);
    function T(I) {
      if (w.current) {
        const M = I.clientX - w.current.left,
          O = I.clientY - w.current.top;
        u({ x: M, y: O });
      }
    }
    return (
      c.useEffect(() => {
        const I = (M) => {
          const O = M.target;
          (g == null ? void 0 : g.contains(O)) && S(M, C);
        };
        return (
          document.addEventListener("wheel", I, { passive: !1 }),
          () => document.removeEventListener("wheel", I, { passive: !1 })
        );
      }, [y, g, C, S]),
      c.useEffect(A, [o, A]),
      nt(g, E),
      nt(h.content, E),
      p.jsx(Ih, {
        scope: n,
        scrollbar: g,
        hasThumb: r,
        onThumbChange: ee(a),
        onThumbPointerUp: ee(s),
        onThumbPositionChange: A,
        onThumbPointerDown: ee(i),
        children: p.jsx(P.div, {
          ...v,
          ref: x,
          style: { position: "absolute", ...v.style },
          onPointerDown: R(e.onPointerDown, (I) => {
            I.button === 0 &&
              (I.target.setPointerCapture(I.pointerId),
              (w.current = g.getBoundingClientRect()),
              (b.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              h.viewport && (h.viewport.style.scrollBehavior = "auto"),
              T(I));
          }),
          onPointerMove: R(e.onPointerMove, T),
          onPointerUp: R(e.onPointerUp, (I) => {
            const M = I.target;
            (M.hasPointerCapture(I.pointerId) &&
              M.releasePointerCapture(I.pointerId),
              (document.body.style.webkitUserSelect = b.current),
              h.viewport && (h.viewport.style.scrollBehavior = ""),
              (w.current = null));
          }),
        }),
      })
    );
  }),
  Jt = "ScrollAreaThumb",
  Mh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = oc(Jt, e.__scopeScrollArea);
    return p.jsx(Q, {
      present: n || r.hasThumb,
      children: p.jsx(Nh, { ref: t, ...o }),
    });
  }),
  Nh = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e,
      a = ue(Jt, n),
      s = oc(Jt, n),
      { onThumbPositionChange: i } = s,
      l = D(t, (f) => s.onThumbChange(f)),
      u = c.useRef(void 0),
      d = Mn(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      c.useEffect(() => {
        const f = a.viewport;
        if (f) {
          const v = () => {
            if ((d(), !u.current)) {
              const h = jh(f, i);
              ((u.current = h), i());
            }
          };
          return (
            i(),
            f.addEventListener("scroll", v),
            () => f.removeEventListener("scroll", v)
          );
        }
      }, [a.viewport, d, i]),
      p.jsx(P.div, {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o,
        },
        onPointerDownCapture: R(e.onPointerDownCapture, (f) => {
          const h = f.target.getBoundingClientRect(),
            g = f.clientX - h.left,
            m = f.clientY - h.top;
          s.onThumbPointerDown({ x: g, y: m });
        }),
        onPointerUp: R(e.onPointerUp, s.onThumbPointerUp),
      })
    );
  });
Mh.displayName = Jt;
var Uo = "ScrollAreaCorner",
  ac = c.forwardRef((e, t) => {
    const n = ue(Uo, e.__scopeScrollArea),
      o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? p.jsx(Dh, { ...e, ref: t }) : null;
  });
ac.displayName = Uo;
var Dh = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e,
    r = ue(Uo, n),
    [a, s] = c.useState(0),
    [i, l] = c.useState(0),
    u = !!(a && i);
  return (
    nt(r.scrollbarX, () => {
      var f;
      const d = ((f = r.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
      (r.onCornerHeightChange(d), l(d));
    }),
    nt(r.scrollbarY, () => {
      var f;
      const d = ((f = r.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
      (r.onCornerWidthChange(d), s(d));
    }),
    u
      ? p.jsx(P.div, {
          ...o,
          ref: t,
          style: {
            width: a,
            height: i,
            position: "absolute",
            right: r.dir === "ltr" ? 0 : void 0,
            left: r.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function en(e) {
  return e ? parseInt(e, 10) : 0;
}
function sc(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function In(e) {
  const t = sc(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Oh(e, t, n, o = "ltr") {
  const r = In(n),
    a = r / 2,
    s = t || a,
    i = r - s,
    l = n.scrollbar.paddingStart + s,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - i,
    d = n.content - n.viewport,
    f = o === "ltr" ? [0, d] : [d * -1, 0];
  return ic([l, u], f)(e);
}
function Nr(e, t, n = "ltr") {
  const o = In(t),
    r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - r,
    s = t.content - t.viewport,
    i = a - o,
    l = n === "ltr" ? [0, s] : [s * -1, 0],
    u = wt(e, l);
  return ic([0, s], [0, i])(u);
}
function ic(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function cc(e, t) {
  return e > 0 && e < t;
}
var jh = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    o = 0;
  return (
    (function r() {
      const a = { left: e.scrollLeft, top: e.scrollTop },
        s = n.left !== a.left,
        i = n.top !== a.top;
      ((s || i) && t(), (n = a), (o = window.requestAnimationFrame(r)));
    })(),
    () => window.cancelAnimationFrame(o)
  );
};
function Mn(e, t) {
  const n = ee(e),
    o = c.useRef(0);
  return (
    c.useEffect(() => () => window.clearTimeout(o.current), []),
    c.useCallback(() => {
      (window.clearTimeout(o.current), (o.current = window.setTimeout(n, t)));
    }, [n, t])
  );
}
function nt(e, t) {
  const n = ee(t);
  q(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        (cancelAnimationFrame(o), (o = window.requestAnimationFrame(n)));
      });
      return (
        r.observe(e),
        () => {
          (window.cancelAnimationFrame(o), r.unobserve(e));
        }
      );
    }
  }, [e, n]);
}
var qg = Ji,
  Zg = tc,
  Qg = ac,
  Nn = "Checkbox",
  [kh, Jg] = X(Nn),
  [Lh, Ko] = kh(Nn);
function Fh(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: o,
      defaultChecked: r,
      disabled: a,
      form: s,
      name: i,
      onCheckedChange: l,
      required: u,
      value: d = "on",
      internal_do_not_use_render: f,
    } = e,
    [v, h] = J({ prop: n, defaultProp: r ?? !1, onChange: l, caller: Nn }),
    [g, m] = c.useState(null),
    [x, w] = c.useState(null),
    b = c.useRef(!1),
    y = g ? !!s || !!g.closest("form") : !0,
    C = {
      checked: v,
      disabled: a,
      setChecked: h,
      control: g,
      setControl: m,
      name: i,
      form: s,
      value: d,
      hasConsumerStoppedPropagationRef: b,
      required: u,
      defaultChecked: Me(r) ? !1 : r,
      isFormControl: y,
      bubbleInput: x,
      setBubbleInput: w,
    };
  return p.jsx(Lh, { scope: t, ...C, children: Hh(f) ? f(C) : o });
}
var lc = "CheckboxTrigger",
  uc = c.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, r) => {
      const {
          control: a,
          value: s,
          disabled: i,
          checked: l,
          required: u,
          setControl: d,
          setChecked: f,
          hasConsumerStoppedPropagationRef: v,
          isFormControl: h,
          bubbleInput: g,
        } = Ko(lc, e),
        m = D(r, d),
        x = c.useRef(l);
      return (
        c.useEffect(() => {
          const w = a == null ? void 0 : a.form;
          if (w) {
            const b = () => f(x.current);
            return (
              w.addEventListener("reset", b),
              () => w.removeEventListener("reset", b)
            );
          }
        }, [a, f]),
        p.jsx(P.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Me(l) ? "mixed" : l,
          "aria-required": u,
          "data-state": vc(l),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...o,
          ref: m,
          onKeyDown: R(t, (w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onClick: R(n, (w) => {
            (f((b) => (Me(b) ? !0 : !b)),
              g &&
                h &&
                ((v.current = w.isPropagationStopped()),
                v.current || w.stopPropagation()));
          }),
        })
      );
    },
  );
uc.displayName = lc;
var $h = c.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: o,
    checked: r,
    defaultChecked: a,
    required: s,
    disabled: i,
    value: l,
    onCheckedChange: u,
    form: d,
    ...f
  } = e;
  return p.jsx(Fh, {
    __scopeCheckbox: n,
    checked: r,
    defaultChecked: a,
    disabled: i,
    required: s,
    onCheckedChange: u,
    name: o,
    form: d,
    value: l,
    internal_do_not_use_render: ({ isFormControl: v }) =>
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(uc, { ...f, ref: t, __scopeCheckbox: n }),
          v && p.jsx(pc, { __scopeCheckbox: n }),
        ],
      }),
  });
});
$h.displayName = Nn;
var dc = "CheckboxIndicator",
  Bh = c.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e,
      a = Ko(dc, n);
    return p.jsx(Q, {
      present: o || Me(a.checked) || a.checked === !0,
      children: p.jsx(P.span, {
        "data-state": vc(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Bh.displayName = dc;
var fc = "CheckboxBubbleInput",
  pc = c.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: o,
        hasConsumerStoppedPropagationRef: r,
        checked: a,
        defaultChecked: s,
        required: i,
        disabled: l,
        name: u,
        value: d,
        form: f,
        bubbleInput: v,
        setBubbleInput: h,
      } = Ko(fc, e),
      g = D(n, h),
      m = Nt(a),
      x = yt(o);
    c.useEffect(() => {
      const b = v;
      if (!b) return;
      const y = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(y, "checked").set,
        A = !r.current;
      if (m !== a && S) {
        const E = new Event("click", { bubbles: A });
        ((b.indeterminate = Me(a)),
          S.call(b, Me(a) ? !1 : a),
          b.dispatchEvent(E));
      }
    }, [v, m, a, r]);
    const w = c.useRef(Me(a) ? !1 : a);
    return p.jsx(P.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: s ?? w.current,
      required: i,
      disabled: l,
      name: u,
      value: d,
      form: f,
      ...t,
      tabIndex: -1,
      ref: g,
      style: {
        ...t.style,
        ...x,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
pc.displayName = fc;
function Hh(e) {
  return typeof e == "function";
}
function Me(e) {
  return e === "indeterminate";
}
function vc(e) {
  return Me(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Dn = "Collapsible",
  [Vh, hc] = X(Dn),
  [Wh, zo] = Vh(Dn),
  mc = c.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: o,
        defaultOpen: r,
        disabled: a,
        onOpenChange: s,
        ...i
      } = e,
      [l, u] = J({ prop: o, defaultProp: r ?? !1, onChange: s, caller: Dn });
    return p.jsx(Wh, {
      scope: n,
      disabled: a,
      contentId: oe(),
      open: l,
      onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
      children: p.jsx(P.div, {
        "data-state": Xo(l),
        "data-disabled": a ? "" : void 0,
        ...i,
        ref: t,
      }),
    });
  });
mc.displayName = Dn;
var gc = "CollapsibleTrigger",
  xc = c.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...o } = e,
      r = zo(gc, n);
    return p.jsx(P.button, {
      type: "button",
      "aria-controls": r.contentId,
      "aria-expanded": r.open || !1,
      "data-state": Xo(r.open),
      "data-disabled": r.disabled ? "" : void 0,
      disabled: r.disabled,
      ...o,
      ref: t,
      onClick: R(e.onClick, r.onOpenToggle),
    });
  });
xc.displayName = gc;
var Yo = "CollapsibleContent",
  wc = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = zo(Yo, e.__scopeCollapsible);
    return p.jsx(Q, {
      present: n || r.open,
      children: ({ present: a }) => p.jsx(Gh, { ...o, ref: t, present: a }),
    });
  });
wc.displayName = Yo;
var Gh = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...a } = e,
    s = zo(Yo, n),
    [i, l] = c.useState(o),
    u = c.useRef(null),
    d = D(t, u),
    f = c.useRef(0),
    v = f.current,
    h = c.useRef(0),
    g = h.current,
    m = s.open || i,
    x = c.useRef(m),
    w = c.useRef(void 0);
  return (
    c.useEffect(() => {
      const b = requestAnimationFrame(() => (x.current = !1));
      return () => cancelAnimationFrame(b);
    }, []),
    q(() => {
      const b = u.current;
      if (b) {
        ((w.current = w.current || {
          transitionDuration: b.style.transitionDuration,
          animationName: b.style.animationName,
        }),
          (b.style.transitionDuration = "0s"),
          (b.style.animationName = "none"));
        const y = b.getBoundingClientRect();
        ((f.current = y.height),
          (h.current = y.width),
          x.current ||
            ((b.style.transitionDuration = w.current.transitionDuration),
            (b.style.animationName = w.current.animationName)),
          l(o));
      }
    }, [s.open, o]),
    p.jsx(P.div, {
      "data-state": Xo(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !m,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": v ? `${v}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style,
      },
      children: m && r,
    })
  );
});
function Xo(e) {
  return e ? "open" : "closed";
}
var Uh = mc,
  Kh = xc,
  zh = wc,
  he = "Accordion",
  Yh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [qo, Xh, qh] = Pt(he),
  [On, ex] = X(he, [qh, hc]),
  Zo = hc(),
  bc = V.forwardRef((e, t) => {
    const { type: n, ...o } = e,
      r = o,
      a = o;
    return p.jsx(qo.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? p.jsx(em, { ...a, ref: t })
          : p.jsx(Jh, { ...r, ref: t }),
    });
  });
bc.displayName = he;
var [yc, Zh] = On(he),
  [Cc, Qh] = On(he, { collapsible: !1 }),
  Jh = V.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        collapsible: a = !1,
        ...s
      } = e,
      [i, l] = J({ prop: n, defaultProp: o ?? "", onChange: r, caller: he });
    return p.jsx(yc, {
      scope: e.__scopeAccordion,
      value: V.useMemo(() => (i ? [i] : []), [i]),
      onItemOpen: l,
      onItemClose: V.useCallback(() => a && l(""), [a, l]),
      children: p.jsx(Cc, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: p.jsx(Sc, { ...s, ref: t }),
      }),
    });
  }),
  em = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...a } = e,
      [s, i] = J({ prop: n, defaultProp: o ?? [], onChange: r, caller: he }),
      l = V.useCallback((d) => i((f = []) => [...f, d]), [i]),
      u = V.useCallback((d) => i((f = []) => f.filter((v) => v !== d)), [i]);
    return p.jsx(yc, {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: u,
      children: p.jsx(Cc, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: p.jsx(Sc, { ...a, ref: t }),
      }),
    });
  }),
  [tm, jn] = On(he),
  Sc = V.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: r,
        orientation: a = "vertical",
        ...s
      } = e,
      i = V.useRef(null),
      l = D(i, t),
      u = Xh(n),
      f = _e(r) === "ltr",
      v = R(e.onKeyDown, (h) => {
        var T;
        if (!Yh.includes(h.key)) return;
        const g = h.target,
          m = u().filter((I) => {
            var M;
            return !((M = I.ref.current) != null && M.disabled);
          }),
          x = m.findIndex((I) => I.ref.current === g),
          w = m.length;
        if (x === -1) return;
        h.preventDefault();
        let b = x;
        const y = 0,
          C = w - 1,
          S = () => {
            ((b = x + 1), b > C && (b = y));
          },
          A = () => {
            ((b = x - 1), b < y && (b = C));
          };
        switch (h.key) {
          case "Home":
            b = y;
            break;
          case "End":
            b = C;
            break;
          case "ArrowRight":
            a === "horizontal" && (f ? S() : A());
            break;
          case "ArrowDown":
            a === "vertical" && S();
            break;
          case "ArrowLeft":
            a === "horizontal" && (f ? A() : S());
            break;
          case "ArrowUp":
            a === "vertical" && A();
            break;
        }
        const E = b % w;
        (T = m[E].ref.current) == null || T.focus();
      });
    return p.jsx(tm, {
      scope: n,
      disabled: o,
      direction: r,
      orientation: a,
      children: p.jsx(qo.Slot, {
        scope: n,
        children: p.jsx(P.div, {
          ...s,
          "data-orientation": a,
          ref: l,
          onKeyDown: o ? void 0 : v,
        }),
      }),
    });
  }),
  tn = "AccordionItem",
  [nm, Qo] = On(tn),
  Rc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: o, ...r } = e,
      a = jn(tn, n),
      s = Zh(tn, n),
      i = Zo(n),
      l = oe(),
      u = (o && s.value.includes(o)) || !1,
      d = a.disabled || e.disabled;
    return p.jsx(nm, {
      scope: n,
      open: u,
      disabled: d,
      triggerId: l,
      children: p.jsx(Uh, {
        "data-orientation": a.orientation,
        "data-state": Ic(u),
        ...i,
        ...r,
        ref: t,
        disabled: d,
        open: u,
        onOpenChange: (f) => {
          f ? s.onItemOpen(o) : s.onItemClose(o);
        },
      }),
    });
  });
Rc.displayName = tn;
var Ec = "AccordionHeader",
  Pc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = jn(he, n),
      a = Qo(Ec, n);
    return p.jsx(P.h3, {
      "data-orientation": r.orientation,
      "data-state": Ic(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      ...o,
      ref: t,
    });
  });
Pc.displayName = Ec;
var mo = "AccordionTrigger",
  Ac = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = jn(he, n),
      a = Qo(mo, n),
      s = Qh(mo, n),
      i = Zo(n);
    return p.jsx(qo.ItemSlot, {
      scope: n,
      children: p.jsx(Kh, {
        "aria-disabled": (a.open && !s.collapsible) || void 0,
        "data-orientation": r.orientation,
        id: a.triggerId,
        ...i,
        ...o,
        ref: t,
      }),
    });
  });
Ac.displayName = mo;
var _c = "AccordionContent",
  Tc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = jn(he, n),
      a = Qo(_c, n),
      s = Zo(n);
    return p.jsx(zh, {
      role: "region",
      "aria-labelledby": a.triggerId,
      "data-orientation": r.orientation,
      ...s,
      ...o,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
Tc.displayName = _c;
function Ic(e) {
  return e ? "open" : "closed";
}
var tx = bc,
  nx = Rc,
  ox = Pc,
  rx = Ac,
  ax = Tc,
  kn = "Popover",
  [Mc, sx] = X(kn, [Ce]),
  Dt = Ce(),
  [om, Fe] = Mc(kn),
  Nc = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        modal: s = !1,
      } = e,
      i = Dt(t),
      l = c.useRef(null),
      [u, d] = c.useState(!1),
      [f, v] = J({ prop: o, defaultProp: r ?? !1, onChange: a, caller: kn });
    return p.jsx(Ct, {
      ...i,
      children: p.jsx(om, {
        scope: t,
        contentId: oe(),
        triggerRef: l,
        open: f,
        onOpenChange: v,
        onOpenToggle: c.useCallback(() => v((h) => !h), [v]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: c.useCallback(() => d(!0), []),
        onCustomAnchorRemove: c.useCallback(() => d(!1), []),
        modal: s,
        children: n,
      }),
    });
  };
Nc.displayName = kn;
var Dc = "PopoverAnchor",
  rm = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe(Dc, n),
      a = Dt(n),
      { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = r;
    return (
      c.useEffect(() => (s(), () => i()), [s, i]),
      p.jsx(st, { ...a, ...o, ref: t })
    );
  });
rm.displayName = Dc;
var Oc = "PopoverTrigger",
  jc = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe(Oc, n),
      a = Dt(n),
      s = D(t, r.triggerRef),
      i = p.jsx(P.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Bc(r.open),
        ...o,
        ref: s,
        onClick: R(e.onClick, r.onOpenToggle),
      });
    return r.hasCustomAnchor
      ? i
      : p.jsx(st, { asChild: !0, ...a, children: i });
  });
jc.displayName = Oc;
var Jo = "PopoverPortal",
  [am, sm] = Mc(Jo, { forceMount: void 0 }),
  kc = (e) => {
    const { __scopePopover: t, forceMount: n, children: o, container: r } = e,
      a = Fe(Jo, t);
    return p.jsx(am, {
      scope: t,
      forceMount: n,
      children: p.jsx(Q, {
        present: n || a.open,
        children: p.jsx(Et, { asChild: !0, container: r, children: o }),
      }),
    });
  };
kc.displayName = Jo;
var ot = "PopoverContent",
  Lc = c.forwardRef((e, t) => {
    const n = sm(ot, e.__scopePopover),
      { forceMount: o = n.forceMount, ...r } = e,
      a = Fe(ot, e.__scopePopover);
    return p.jsx(Q, {
      present: o || a.open,
      children: a.modal
        ? p.jsx(cm, { ...r, ref: t })
        : p.jsx(lm, { ...r, ref: t }),
    });
  });
Lc.displayName = ot;
var im = Ne("PopoverContent.RemoveScroll"),
  cm = c.forwardRef((e, t) => {
    const n = Fe(ot, e.__scopePopover),
      o = c.useRef(null),
      r = D(t, o),
      a = c.useRef(!1);
    return (
      c.useEffect(() => {
        const s = o.current;
        if (s) return gn(s);
      }, []),
      p.jsx(_t, {
        as: im,
        allowPinchZoom: !0,
        children: p.jsx(Fc, {
          ...e,
          ref: r,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: R(e.onCloseAutoFocus, (s) => {
            var i;
            (s.preventDefault(),
              a.current || (i = n.triggerRef.current) == null || i.focus());
          }),
          onPointerDownOutside: R(
            e.onPointerDownOutside,
            (s) => {
              const i = s.detail.originalEvent,
                l = i.button === 0 && i.ctrlKey === !0,
                u = i.button === 2 || l;
              a.current = u;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: R(e.onFocusOutside, (s) => s.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  lm = c.forwardRef((e, t) => {
    const n = Fe(ot, e.__scopePopover),
      o = c.useRef(!1),
      r = c.useRef(!1);
    return p.jsx(Fc, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var s, i;
        ((s = e.onCloseAutoFocus) == null || s.call(e, a),
          a.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            a.preventDefault()),
          (o.current = !1),
          (r.current = !1));
      },
      onInteractOutside: (a) => {
        var l, u;
        ((l = e.onInteractOutside) == null || l.call(e, a),
          a.defaultPrevented ||
            ((o.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (r.current = !0)));
        const s = a.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            r.current &&
            a.preventDefault());
      },
    });
  }),
  Fc = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: s,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: d,
        ...f
      } = e,
      v = Fe(ot, n),
      h = Dt(n);
    return (
      hn(),
      p.jsx(At, {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: a,
        children: p.jsx(Ge, {
          asChild: !0,
          disableOutsidePointerEvents: s,
          onInteractOutside: d,
          onEscapeKeyDown: i,
          onPointerDownOutside: l,
          onFocusOutside: u,
          onDismiss: () => v.onOpenChange(!1),
          children: p.jsx(St, {
            "data-state": Bc(v.open),
            role: "dialog",
            id: v.contentId,
            ...h,
            ...f,
            ref: t,
            style: {
              ...f.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  $c = "PopoverClose",
  um = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe($c, n);
    return p.jsx(P.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: R(e.onClick, () => r.onOpenChange(!1)),
    });
  });
um.displayName = $c;
var dm = "PopoverArrow",
  fm = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Dt(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
fm.displayName = dm;
function Bc(e) {
  return e ? "open" : "closed";
}
var ix = Nc,
  cx = jc,
  lx = kc,
  ux = Lc,
  er = "Radio",
  [pm, Hc] = X(er),
  [vm, hm] = pm(er),
  Vc = c.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: o,
        checked: r = !1,
        required: a,
        disabled: s,
        value: i = "on",
        onCheck: l,
        form: u,
        ...d
      } = e,
      [f, v] = c.useState(null),
      h = D(t, (x) => v(x)),
      g = c.useRef(!1),
      m = f ? u || !!f.closest("form") : !0;
    return p.jsxs(vm, {
      scope: n,
      checked: r,
      disabled: s,
      children: [
        p.jsx(P.button, {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": Kc(r),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...d,
          ref: h,
          onClick: R(e.onClick, (x) => {
            (r || l == null || l(),
              m &&
                ((g.current = x.isPropagationStopped()),
                g.current || x.stopPropagation()));
          }),
        }),
        m &&
          p.jsx(Uc, {
            control: f,
            bubbles: !g.current,
            name: o,
            value: i,
            checked: r,
            required: a,
            disabled: s,
            form: u,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Vc.displayName = er;
var Wc = "RadioIndicator",
  Gc = c.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e,
      a = hm(Wc, n);
    return p.jsx(Q, {
      present: o || a.checked,
      children: p.jsx(P.span, {
        "data-state": Kc(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t,
      }),
    });
  });
Gc.displayName = Wc;
var mm = "RadioBubbleInput",
  Uc = c.forwardRef(
    ({ __scopeRadio: e, control: t, checked: n, bubbles: o = !0, ...r }, a) => {
      const s = c.useRef(null),
        i = D(s, a),
        l = Nt(n),
        u = yt(t);
      return (
        c.useEffect(() => {
          const d = s.current;
          if (!d) return;
          const f = window.HTMLInputElement.prototype,
            h = Object.getOwnPropertyDescriptor(f, "checked").set;
          if (l !== n && h) {
            const g = new Event("click", { bubbles: o });
            (h.call(d, n), d.dispatchEvent(g));
          }
        }, [l, n, o]),
        p.jsx(P.input, {
          type: "radio",
          "aria-hidden": !0,
          defaultChecked: n,
          ...r,
          tabIndex: -1,
          ref: i,
          style: {
            ...r.style,
            ...u,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
Uc.displayName = mm;
function Kc(e) {
  return e ? "checked" : "unchecked";
}
var gm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Ln = "RadioGroup",
  [xm, dx] = X(Ln, [je, Hc]),
  zc = je(),
  Yc = Hc(),
  [wm, bm] = xm(Ln),
  Xc = c.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: o,
        defaultValue: r,
        value: a,
        required: s = !1,
        disabled: i = !1,
        orientation: l,
        dir: u,
        loop: d = !0,
        onValueChange: f,
        ...v
      } = e,
      h = zc(n),
      g = _e(u),
      [m, x] = J({ prop: a, defaultProp: r ?? null, onChange: f, caller: Ln });
    return p.jsx(wm, {
      scope: n,
      name: o,
      required: s,
      disabled: i,
      value: m,
      onValueChange: x,
      children: p.jsx(wn, {
        asChild: !0,
        ...h,
        orientation: l,
        dir: g,
        loop: d,
        children: p.jsx(P.div, {
          role: "radiogroup",
          "aria-required": s,
          "aria-orientation": l,
          "data-disabled": i ? "" : void 0,
          dir: g,
          ...v,
          ref: t,
        }),
      }),
    });
  });
Xc.displayName = Ln;
var qc = "RadioGroupItem",
  Zc = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e,
      a = bm(qc, n),
      s = a.disabled || o,
      i = zc(n),
      l = Yc(n),
      u = c.useRef(null),
      d = D(t, u),
      f = a.value === r.value,
      v = c.useRef(!1);
    return (
      c.useEffect(() => {
        const h = (m) => {
            gm.includes(m.key) && (v.current = !0);
          },
          g = () => (v.current = !1);
        return (
          document.addEventListener("keydown", h),
          document.addEventListener("keyup", g),
          () => {
            (document.removeEventListener("keydown", h),
              document.removeEventListener("keyup", g));
          }
        );
      }, []),
      p.jsx(bn, {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: p.jsx(Vc, {
          disabled: s,
          required: a.required,
          checked: f,
          ...l,
          ...r,
          name: a.name,
          ref: d,
          onCheck: () => a.onValueChange(r.value),
          onKeyDown: R((h) => {
            h.key === "Enter" && h.preventDefault();
          }),
          onFocus: R(r.onFocus, () => {
            var h;
            v.current && ((h = u.current) == null || h.click());
          }),
        }),
      })
    );
  });
Zc.displayName = qc;
var ym = "RadioGroupIndicator",
  Qc = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...o } = e,
      r = Yc(n);
    return p.jsx(Gc, { ...r, ...o, ref: t });
  });
Qc.displayName = ym;
var fx = Xc,
  px = Zc,
  vx = Qc,
  Jc = "Toggle",
  tr = c.forwardRef((e, t) => {
    const { pressed: n, defaultPressed: o, onPressedChange: r, ...a } = e,
      [s, i] = J({ prop: n, onChange: r, defaultProp: o ?? !1, caller: Jc });
    return p.jsx(P.button, {
      type: "button",
      "aria-pressed": s,
      "data-state": s ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: R(e.onClick, () => {
        e.disabled || i(!s);
      }),
    });
  });
tr.displayName = Jc;
var hx = tr,
  $e = "ToggleGroup",
  [el, mx] = X($e, [je]),
  tl = je(),
  nr = V.forwardRef((e, t) => {
    const { type: n, ...o } = e;
    if (n === "single") {
      const r = o;
      return p.jsx(Cm, { ...r, ref: t });
    }
    if (n === "multiple") {
      const r = o;
      return p.jsx(Sm, { ...r, ref: t });
    }
    throw new Error(`Missing prop \`type\` expected on \`${$e}\``);
  });
nr.displayName = $e;
var [nl, ol] = el($e),
  Cm = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...a } = e,
      [s, i] = J({ prop: n, defaultProp: o ?? "", onChange: r, caller: $e });
    return p.jsx(nl, {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: V.useMemo(() => (s ? [s] : []), [s]),
      onItemActivate: i,
      onItemDeactivate: V.useCallback(() => i(""), [i]),
      children: p.jsx(rl, { ...a, ref: t }),
    });
  }),
  Sm = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...a } = e,
      [s, i] = J({ prop: n, defaultProp: o ?? [], onChange: r, caller: $e }),
      l = V.useCallback((d) => i((f = []) => [...f, d]), [i]),
      u = V.useCallback((d) => i((f = []) => f.filter((v) => v !== d)), [i]);
    return p.jsx(nl, {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: l,
      onItemDeactivate: u,
      children: p.jsx(rl, { ...a, ref: t }),
    });
  });
nr.displayName = $e;
var [Rm, Em] = el($e),
  rl = V.forwardRef((e, t) => {
    const {
        __scopeToggleGroup: n,
        disabled: o = !1,
        rovingFocus: r = !0,
        orientation: a,
        dir: s,
        loop: i = !0,
        ...l
      } = e,
      u = tl(n),
      d = _e(s),
      f = { role: "group", dir: d, ...l };
    return p.jsx(Rm, {
      scope: n,
      rovingFocus: r,
      disabled: o,
      children: r
        ? p.jsx(wn, {
            asChild: !0,
            ...u,
            orientation: a,
            dir: d,
            loop: i,
            children: p.jsx(P.div, { ...f, ref: t }),
          })
        : p.jsx(P.div, { ...f, ref: t }),
    });
  }),
  nn = "ToggleGroupItem",
  al = V.forwardRef((e, t) => {
    const n = ol(nn, e.__scopeToggleGroup),
      o = Em(nn, e.__scopeToggleGroup),
      r = tl(e.__scopeToggleGroup),
      a = n.value.includes(e.value),
      s = o.disabled || e.disabled,
      i = { ...e, pressed: a, disabled: s },
      l = V.useRef(null);
    return o.rovingFocus
      ? p.jsx(bn, {
          asChild: !0,
          ...r,
          focusable: !s,
          active: a,
          ref: l,
          children: p.jsx(Dr, { ...i, ref: t }),
        })
      : p.jsx(Dr, { ...i, ref: t });
  });
al.displayName = nn;
var Dr = V.forwardRef((e, t) => {
    const { __scopeToggleGroup: n, value: o, ...r } = e,
      a = ol(nn, n),
      s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 },
      i = a.type === "single" ? s : void 0;
    return p.jsx(tr, {
      ...i,
      ...r,
      ref: t,
      onPressedChange: (l) => {
        l ? a.onItemActivate(o) : a.onItemDeactivate(o);
      },
    });
  }),
  gx = nr,
  xx = al,
  Zn,
  Fn = "HoverCard",
  [sl, wx] = X(Fn, [Ce]),
  $n = Ce(),
  [Pm, or] = sl(Fn),
  il = (e) => {
    const {
        __scopeHoverCard: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        openDelay: s = 700,
        closeDelay: i = 300,
      } = e,
      l = $n(t),
      u = c.useRef(0),
      d = c.useRef(0),
      f = c.useRef(!1),
      v = c.useRef(!1),
      [h, g] = J({ prop: o, defaultProp: r ?? !1, onChange: a, caller: Fn }),
      m = c.useCallback(() => {
        (clearTimeout(d.current),
          (u.current = window.setTimeout(() => g(!0), s)));
      }, [s, g]),
      x = c.useCallback(() => {
        (clearTimeout(u.current),
          !f.current &&
            !v.current &&
            (d.current = window.setTimeout(() => g(!1), i)));
      }, [i, g]),
      w = c.useCallback(() => g(!1), [g]);
    return (
      c.useEffect(
        () => () => {
          (clearTimeout(u.current), clearTimeout(d.current));
        },
        [],
      ),
      p.jsx(Pm, {
        scope: t,
        open: h,
        onOpenChange: g,
        onOpen: m,
        onClose: x,
        onDismiss: w,
        hasSelectionRef: f,
        isPointerDownOnContentRef: v,
        children: p.jsx(Ct, { ...l, children: n }),
      })
    );
  };
il.displayName = Fn;
var cl = "HoverCardTrigger",
  ll = c.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...o } = e,
      r = or(cl, n),
      a = $n(n);
    return p.jsx(st, {
      asChild: !0,
      ...a,
      children: p.jsx(P.a, {
        "data-state": r.open ? "open" : "closed",
        ...o,
        ref: t,
        onPointerEnter: R(e.onPointerEnter, rn(r.onOpen)),
        onPointerLeave: R(e.onPointerLeave, rn(r.onClose)),
        onFocus: R(e.onFocus, r.onOpen),
        onBlur: R(e.onBlur, r.onClose),
        onTouchStart: R(e.onTouchStart, (s) => s.preventDefault()),
      }),
    });
  });
ll.displayName = cl;
var Am = "HoverCardPortal",
  [bx, _m] = sl(Am, { forceMount: void 0 }),
  on = "HoverCardContent",
  ul = c.forwardRef((e, t) => {
    const n = _m(on, e.__scopeHoverCard),
      { forceMount: o = n.forceMount, ...r } = e,
      a = or(on, e.__scopeHoverCard);
    return p.jsx(Q, {
      present: o || a.open,
      children: p.jsx(Tm, {
        "data-state": a.open ? "open" : "closed",
        ...r,
        onPointerEnter: R(e.onPointerEnter, rn(a.onOpen)),
        onPointerLeave: R(e.onPointerLeave, rn(a.onClose)),
        ref: t,
      }),
    });
  });
ul.displayName = on;
var Tm = c.forwardRef((e, t) => {
    const {
        __scopeHoverCard: n,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: a,
        onInteractOutside: s,
        ...i
      } = e,
      l = or(on, n),
      u = $n(n),
      d = c.useRef(null),
      f = D(t, d),
      [v, h] = c.useState(!1);
    return (
      c.useEffect(() => {
        if (v) {
          const g = document.body;
          return (
            (Zn = g.style.userSelect || g.style.webkitUserSelect),
            (g.style.userSelect = "none"),
            (g.style.webkitUserSelect = "none"),
            () => {
              ((g.style.userSelect = Zn), (g.style.webkitUserSelect = Zn));
            }
          );
        }
      }, [v]),
      c.useEffect(() => {
        if (d.current) {
          const g = () => {
            (h(!1),
              (l.isPointerDownOnContentRef.current = !1),
              setTimeout(() => {
                var x;
                ((x = document.getSelection()) == null
                  ? void 0
                  : x.toString()) !== "" && (l.hasSelectionRef.current = !0);
              }));
          };
          return (
            document.addEventListener("pointerup", g),
            () => {
              (document.removeEventListener("pointerup", g),
                (l.hasSelectionRef.current = !1),
                (l.isPointerDownOnContentRef.current = !1));
            }
          );
        }
      }, [l.isPointerDownOnContentRef, l.hasSelectionRef]),
      c.useEffect(() => {
        d.current &&
          Nm(d.current).forEach((m) => m.setAttribute("tabindex", "-1"));
      }),
      p.jsx(Ge, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onInteractOutside: s,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: R(a, (g) => {
          g.preventDefault();
        }),
        onDismiss: l.onDismiss,
        children: p.jsx(St, {
          ...u,
          ...i,
          onPointerDown: R(i.onPointerDown, (g) => {
            (g.currentTarget.contains(g.target) && h(!0),
              (l.hasSelectionRef.current = !1),
              (l.isPointerDownOnContentRef.current = !0));
          }),
          ref: f,
          style: {
            ...i.style,
            userSelect: v ? "text" : void 0,
            WebkitUserSelect: v ? "text" : void 0,
            "--radix-hover-card-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        }),
      })
    );
  }),
  Im = "HoverCardArrow",
  Mm = c.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...o } = e,
      r = $n(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
Mm.displayName = Im;
function rn(e) {
  return (t) => (t.pointerType === "touch" ? void 0 : e());
}
function Nm(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) =>
        o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var yx = il,
  Cx = ll,
  Sx = ul,
  dl = "AlertDialog",
  [Dm, Rx] = X(dl, [Ia]),
  Te = Ia(),
  fl = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      o = Te(t);
    return p.jsx(Zf, { ...o, ...n, modal: !0 });
  };
fl.displayName = dl;
var Om = "AlertDialogTrigger",
  pl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = Te(n);
    return p.jsx(Qf, { ...r, ...o, ref: t });
  });
pl.displayName = Om;
var jm = "AlertDialogPortal",
  vl = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      o = Te(t);
    return p.jsx(Jf, { ...o, ...n });
  };
vl.displayName = jm;
var km = "AlertDialogOverlay",
  hl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = Te(n);
    return p.jsx(ep, { ...r, ...o, ref: t });
  });
hl.displayName = km;
var Qe = "AlertDialogContent",
  [Lm, Fm] = Dm(Qe),
  $m = Fr("AlertDialogContent"),
  ml = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e,
      a = Te(n),
      s = c.useRef(null),
      i = D(t, s),
      l = c.useRef(null);
    return p.jsx(zf, {
      contentName: Qe,
      titleName: gl,
      docsSlug: "alert-dialog",
      children: p.jsx(Lm, {
        scope: n,
        cancelRef: l,
        children: p.jsxs(tp, {
          role: "alertdialog",
          ...a,
          ...r,
          ref: i,
          onOpenAutoFocus: R(r.onOpenAutoFocus, (u) => {
            var d;
            (u.preventDefault(),
              (d = l.current) == null || d.focus({ preventScroll: !0 }));
          }),
          onPointerDownOutside: (u) => u.preventDefault(),
          onInteractOutside: (u) => u.preventDefault(),
          children: [p.jsx($m, { children: o }), p.jsx(Hm, { contentRef: s })],
        }),
      }),
    });
  });
ml.displayName = Qe;
var gl = "AlertDialogTitle",
  xl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = Te(n);
    return p.jsx(np, { ...r, ...o, ref: t });
  });
xl.displayName = gl;
var wl = "AlertDialogDescription",
  bl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = Te(n);
    return p.jsx(op, { ...r, ...o, ref: t });
  });
bl.displayName = wl;
var Bm = "AlertDialogAction",
  yl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = Te(n);
    return p.jsx(Ka, { ...r, ...o, ref: t });
  });
yl.displayName = Bm;
var Cl = "AlertDialogCancel",
  Sl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      { cancelRef: r } = Fm(Cl, n),
      a = Te(n),
      s = D(t, r);
    return p.jsx(Ka, { ...a, ...o, ref: s });
  });
Sl.displayName = Cl;
var Hm = ({ contentRef: e }) => {
    const t = `\`${Qe}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Qe}\` by passing a \`${wl}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Qe}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      c.useEffect(() => {
        var o;
        document.getElementById(
          (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby"),
        ) || console.warn(t);
      }, [t, e]),
      null
    );
  },
  Ex = fl,
  Px = pl,
  Ax = vl,
  _x = hl,
  Tx = ml,
  Ix = yl,
  Mx = Sl,
  Nx = xl,
  Dx = bl;
export {
  Mx as $,
  lx as A,
  ux as B,
  Xm as C,
  ix as D,
  cx as E,
  fx as F,
  px as G,
  ox as H,
  nx as I,
  vx as J,
  hx as K,
  gx as L,
  xx as M,
  Sx as N,
  yx as O,
  Km as P,
  Cx as Q,
  zm as R,
  Eh as S,
  Ym as T,
  _x as U,
  ua as V,
  Tx as W,
  Nx as X,
  Dx as Y,
  Ix as Z,
  qm as _,
  xa as a,
  Ax as a0,
  Ex as a1,
  Px as a2,
  ep as a3,
  tp as a4,
  Qf as a5,
  Ka as a6,
  np as a7,
  op as a8,
  Zf as a9,
  ng as aA,
  ag as aB,
  sg as aC,
  cg as aD,
  ig as aE,
  rg as aF,
  lg as aG,
  Jm as aH,
  eg as aI,
  og as aJ,
  Lg as aK,
  Fg as aL,
  $g as aM,
  vg as aN,
  hg as aO,
  mg as aP,
  pg as aQ,
  xg as aR,
  wg as aS,
  Jf as aa,
  Ug as ab,
  Kg as ac,
  zg as ad,
  Yg as ae,
  Hg as af,
  Vg as ag,
  Cg as ah,
  Rg as ai,
  Ng as aj,
  Dg as ak,
  Eg as al,
  Pg as am,
  Ag as an,
  _g as ao,
  Tg as ap,
  Mg as aq,
  Ig as ar,
  Og as as,
  yg as at,
  Sg as au,
  Wg as av,
  jg as aw,
  ug as ax,
  dg as ay,
  tg as az,
  $l as b,
  P as c,
  ee as d,
  $r as e,
  q as f,
  Pt as g,
  X as h,
  J as i,
  p as j,
  Et as k,
  qg as l,
  Zg as m,
  Qg as n,
  Mh as o,
  $h as p,
  Bh as q,
  Wm as r,
  Yd as s,
  rx as t,
  D as u,
  ax as v,
  tx as w,
  Uh as x,
  xc as y,
  wc as z,
};
