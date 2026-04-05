import {
  r as c,
  a as sn,
  R as Dr,
  v as yl,
  b as V,
} from "./vendor-react-DfYPWlel.js";
import { j as p, _ as Ie, a as Or, b as Sl } from "./vendor-data-DuuuwLk5.js";
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e == null || e(r), n === !1 || !r.defaultPrevented))
      return t == null ? void 0 : t(r);
  };
}
function or(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function an(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = or(r, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : or(e[r], null);
        }
      };
  };
}
function D(...e) {
  return c.useCallback(an(...e), e);
}
function Rl(e, t) {
  const n = c.createContext(t),
    o = (s) => {
      const { children: a, ...i } = s,
        l = c.useMemo(() => i, Object.values(i));
      return p.jsx(n.Provider, { value: l, children: a });
    };
  o.displayName = e + "Provider";
  function r(s) {
    const a = c.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function X(e, t = []) {
  let n = [];
  function o(s, a) {
    const i = c.createContext(a),
      l = n.length;
    n = [...n, a];
    const u = (f) => {
      var w;
      const { scope: v, children: h, ...g } = f,
        m = ((w = v == null ? void 0 : v[e]) == null ? void 0 : w[l]) || i,
        x = c.useMemo(() => g, Object.values(g));
      return p.jsx(m.Provider, { value: x, children: h });
    };
    u.displayName = s + "Provider";
    function d(f, v) {
      var m;
      const h = ((m = v == null ? void 0 : v[e]) == null ? void 0 : m[l]) || i,
        g = c.useContext(h);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const r = () => {
    const s = n.map((a) => c.createContext(a));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return ((r.scopeName = e), [o, El(r, ...t)]);
}
function El(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (s) {
      const a = o.reduce((i, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Ne(e) {
  const t = Pl(e),
    n = c.forwardRef((o, r) => {
      const { children: s, ...a } = o,
        i = c.Children.toArray(s),
        l = i.find(Al);
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
          ...a,
          ref: r,
          children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null,
        });
      }
      return p.jsx(t, { ...a, ref: r, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var jm = Ne("Slot");
function Pl(e) {
  const t = c.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (c.isValidElement(r)) {
      const a = Tl(r),
        i = _l(s, r.props);
      return (
        r.type !== c.Fragment && (i.ref = o ? an(o, a) : a),
        c.cloneElement(r, i)
      );
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var jr = Symbol("radix.slottable");
function kr(e) {
  const t = ({ children: n }) => p.jsx(p.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = jr), t);
}
function Al(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === jr
  );
}
function _l(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      s = t[o];
    /^on[A-Z]/.test(o)
      ? r && s
        ? (n[o] = (...i) => {
            const l = s(...i);
            return (r(...i), l);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...s })
        : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Tl(e) {
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
var Il = [
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
  P = Il.reduce((e, t) => {
    const n = Ne(`Primitive.${t}`),
      o = c.forwardRef((r, s) => {
        const { asChild: a, ...i } = r,
          l = a ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(l, { ...i, ref: s })
        );
      });
    return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
  }, {});
function Lr(e, t) {
  e && sn.flushSync(() => e.dispatchEvent(t));
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
function Ml(e, t = globalThis == null ? void 0 : globalThis.document) {
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
var Nl = "DismissableLayer",
  Zn = "dismissableLayer.update",
  Dl = "dismissableLayer.pointerDownOutside",
  Ol = "dismissableLayer.focusOutside",
  rr,
  Fr = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ge = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: i,
        ...l
      } = e,
      u = c.useContext(Fr),
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
      C = u.layersWithOutsidePointerEventsDisabled.size > 0,
      y = b >= w,
      S = Ll((E) => {
        const T = E.target,
          I = [...u.branches].some((M) => M.contains(T));
        !y ||
          I ||
          (r == null || r(E),
          a == null || a(E),
          E.defaultPrevented || i == null || i());
      }, v),
      A = Fl((E) => {
        const T = E.target;
        [...u.branches].some((M) => M.contains(T)) ||
          (s == null || s(E),
          a == null || a(E),
          E.defaultPrevented || i == null || i());
      }, v);
    return (
      Ml((E) => {
        b === u.layers.size - 1 &&
          (o == null || o(E),
          !E.defaultPrevented && i && (E.preventDefault(), i()));
      }, v),
      c.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((rr = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            sr(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = rr);
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
          document.addEventListener(Zn, E),
          () => document.removeEventListener(Zn, E)
        );
      }, []),
      p.jsx(P.div, {
        ...l,
        ref: g,
        style: {
          pointerEvents: C ? (y ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: R(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: R(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: R(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Ge.displayName = Nl;
var jl = "DismissableLayerBranch",
  kl = c.forwardRef((e, t) => {
    const n = c.useContext(Fr),
      o = c.useRef(null),
      r = D(t, o);
    return (
      c.useEffect(() => {
        const s = o.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      p.jsx(P.div, { ...e, ref: r })
    );
  });
kl.displayName = jl;
function Ll(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e),
    o = c.useRef(!1),
    r = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const s = (i) => {
          if (i.target && !o.current) {
            let l = function () {
              $r(Dl, n, u, { discrete: !0 });
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
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", r.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Fl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e),
    o = c.useRef(!1);
  return (
    c.useEffect(() => {
      const r = (s) => {
        s.target &&
          !o.current &&
          $r(Ol, n, { originalEvent: s }, { discrete: !1 });
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
  const e = new CustomEvent(Zn);
  document.dispatchEvent(e);
}
function $r(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && r.addEventListener(e, t, { once: !0 }),
    o ? Lr(r, s) : r.dispatchEvent(s));
}
var q =
    globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  $l = Dr[" useId ".trim().toString()] || (() => {}),
  Bl = 0;
function oe(e) {
  const [t, n] = c.useState($l());
  return (
    q(() => {
      n((o) => o ?? String(Bl++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Hl = ["top", "right", "bottom", "left"],
  De = Math.min,
  ae = Math.max,
  Gt = Math.round,
  jt = Math.floor,
  xe = (e) => ({ x: e, y: e }),
  Vl = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Wl = { start: "end", end: "start" };
function Qn(e, t, n) {
  return ae(e, De(t, n));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e) {
  return e.split("-")[0];
}
function rt(e) {
  return e.split("-")[1];
}
function mo(e) {
  return e === "x" ? "y" : "x";
}
function go(e) {
  return e === "y" ? "height" : "width";
}
const Gl = new Set(["top", "bottom"]);
function ge(e) {
  return Gl.has(Pe(e)) ? "y" : "x";
}
function xo(e) {
  return mo(ge(e));
}
function Ul(e, t, n) {
  n === void 0 && (n = !1);
  const o = rt(e),
    r = xo(e),
    s = go(r);
  let a =
    r === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (a = Ut(a)), [a, Ut(a)]);
}
function Kl(e) {
  const t = Ut(e);
  return [Jn(e), t, Jn(t)];
}
function Jn(e) {
  return e.replace(/start|end/g, (t) => Wl[t]);
}
const ar = ["left", "right"],
  ir = ["right", "left"],
  zl = ["top", "bottom"],
  Yl = ["bottom", "top"];
function Xl(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? ir : ar) : t ? ar : ir;
    case "left":
    case "right":
      return t ? zl : Yl;
    default:
      return [];
  }
}
function ql(e, t, n, o) {
  const r = rt(e);
  let s = Xl(Pe(e), n === "start", o);
  return (
    r && ((s = s.map((a) => a + "-" + r)), t && (s = s.concat(s.map(Jn)))),
    s
  );
}
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vl[t]);
}
function Zl(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Br(e) {
  return typeof e != "number"
    ? Zl(e)
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
function cr(e, t, n) {
  let { reference: o, floating: r } = e;
  const s = ge(t),
    a = xo(t),
    i = go(a),
    l = Pe(t),
    u = s === "y",
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
      h[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      h[a] += v * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Ql = async (e, t, n) => {
  const {
      placement: o = "bottom",
      strategy: r = "absolute",
      middleware: s = [],
      platform: a,
    } = n,
    i = s.filter(Boolean),
    l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: d, y: f } = cr(u, o, l),
    v = o,
    h = {},
    g = 0;
  for (let m = 0; m < i.length; m++) {
    const { name: x, fn: w } = i[m],
      {
        x: b,
        y: C,
        data: y,
        reset: S,
      } = await w({
        x: d,
        y: f,
        initialPlacement: o,
        placement: v,
        strategy: r,
        middlewareData: h,
        rects: u,
        platform: a,
        elements: { reference: e, floating: t },
      });
    ((d = b ?? d),
      (f = C ?? f),
      (h = { ...h, [x]: { ...h[x], ...y } }),
      S &&
        g <= 50 &&
        (g++,
        typeof S == "object" &&
          (S.placement && (v = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : S.rects),
          ({ x: d, y: f } = cr(u, v, l))),
        (m = -1)));
  }
  return { x: d, y: f, placement: v, strategy: r, middlewareData: h };
};
async function vt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: s, rects: a, elements: i, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: v = !1,
      padding: h = 0,
    } = Ee(t, e),
    g = Br(h),
    x = i[v ? (f === "floating" ? "reference" : "floating") : f],
    w = Kt(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(i.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    b =
      f === "floating"
        ? { x: o, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    C = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(i.floating)),
    y = (await (s.isElement == null ? void 0 : s.isElement(C)))
      ? (await (s.getScale == null ? void 0 : s.getScale(C))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Kt(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: b,
            offsetParent: C,
            strategy: l,
          })
        : b,
    );
  return {
    top: (w.top - S.top + g.top) / y.y,
    bottom: (S.bottom - w.bottom + g.bottom) / y.y,
    left: (w.left - S.left + g.left) / y.x,
    right: (S.right - w.right + g.right) / y.x,
  };
}
const Jl = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: s,
          platform: a,
          elements: i,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = Ee(e, t) || {};
      if (u == null) return {};
      const f = Br(d),
        v = { x: n, y: o },
        h = xo(r),
        g = go(h),
        m = await a.getDimensions(u),
        x = h === "y",
        w = x ? "top" : "left",
        b = x ? "bottom" : "right",
        C = x ? "clientHeight" : "clientWidth",
        y = s.reference[g] + s.reference[h] - v[h] - s.floating[g],
        S = v[h] - s.reference[h],
        A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
      let E = A ? A[C] : 0;
      (!E || !(await (a.isElement == null ? void 0 : a.isElement(A)))) &&
        (E = i.floating[C] || s.floating[g]);
      const T = y / 2 - S / 2,
        I = E / 2 - m[g] / 2 - 1,
        M = De(f[w], I),
        O = De(f[b], I),
        L = M,
        F = E - m[g] - O,
        $ = E / 2 - m[g] / 2 + T,
        H = Qn(L, $, F),
        k =
          !l.arrow &&
          rt(r) != null &&
          $ !== H &&
          s.reference[g] / 2 - ($ < L ? M : O) - m[g] / 2 < 0,
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
  eu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: s,
              rects: a,
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
            } = Ee(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const w = Pe(r),
            b = ge(i),
            C = Pe(i) === i,
            y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = v || (C || !m ? [Ut(i)] : Kl(i)),
            A = g !== "none";
          !v && A && S.push(...ql(i, m, g, y));
          const E = [i, ...S],
            T = await vt(t, x),
            I = [];
          let M = ((o = s.flip) == null ? void 0 : o.overflows) || [];
          if ((d && I.push(T[w]), f)) {
            const $ = Ul(r, a, y);
            I.push(T[$[0]], T[$[1]]);
          }
          if (
            ((M = [...M, { placement: r, overflows: I }]),
            !I.every(($) => $ <= 0))
          ) {
            var O, L;
            const $ = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1,
              H = E[$];
            if (
              H &&
              (!(f === "alignment" ? b !== ge(H) : !1) ||
                M.every((N) => N.overflows[0] > 0 && ge(N.placement) === b))
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
                        const _ = ge(N.placement);
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
function lr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ur(e) {
  return Hl.some((t) => e[t] >= 0);
}
const tu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = "referenceHidden", ...r } = Ee(e, t);
          switch (o) {
            case "referenceHidden": {
              const s = await vt(t, { ...r, elementContext: "reference" }),
                a = lr(s, n.reference);
              return {
                data: { referenceHiddenOffsets: a, referenceHidden: ur(a) },
              };
            }
            case "escaped": {
              const s = await vt(t, { ...r, altBoundary: !0 }),
                a = lr(s, n.floating);
              return { data: { escapedOffsets: a, escaped: ur(a) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Hr = new Set(["left", "top"]);
async function nu(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    a = Pe(n),
    i = rt(n),
    l = ge(n) === "y",
    u = Hr.has(a) ? -1 : 1,
    d = s && l ? -1 : 1,
    f = Ee(t, e);
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
const ou = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: s, placement: a, middlewareData: i } = t,
            l = await nu(t, e);
          return a === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + l.x, y: s + l.y, data: { ...l, placement: a } };
        },
      }
    );
  },
  ru = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: s = !0,
              crossAxis: a = !1,
              limiter: i = {
                fn: (x) => {
                  let { x: w, y: b } = x;
                  return { x: w, y: b };
                },
              },
              ...l
            } = Ee(e, t),
            u = { x: n, y: o },
            d = await vt(t, l),
            f = ge(Pe(r)),
            v = mo(f);
          let h = u[v],
            g = u[f];
          if (s) {
            const x = v === "y" ? "top" : "left",
              w = v === "y" ? "bottom" : "right",
              b = h + d[x],
              C = h - d[w];
            h = Qn(b, h, C);
          }
          if (a) {
            const x = f === "y" ? "top" : "left",
              w = f === "y" ? "bottom" : "right",
              b = g + d[x],
              C = g - d[w];
            g = Qn(b, g, C);
          }
          const m = i.fn({ ...t, [v]: h, [f]: g });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - o, enabled: { [v]: s, [f]: a } },
          };
        },
      }
    );
  },
  su = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: s, middlewareData: a } = t,
            { offset: i = 0, mainAxis: l = !0, crossAxis: u = !0 } = Ee(e, t),
            d = { x: n, y: o },
            f = ge(r),
            v = mo(f);
          let h = d[v],
            g = d[f];
          const m = Ee(i, t),
            x =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const C = v === "y" ? "height" : "width",
              y = s.reference[v] - s.floating[C] + x.mainAxis,
              S = s.reference[v] + s.reference[C] - x.mainAxis;
            h < y ? (h = y) : h > S && (h = S);
          }
          if (u) {
            var w, b;
            const C = v === "y" ? "width" : "height",
              y = Hr.has(Pe(r)),
              S =
                s.reference[f] -
                s.floating[C] +
                ((y && ((w = a.offset) == null ? void 0 : w[f])) || 0) +
                (y ? 0 : x.crossAxis),
              A =
                s.reference[f] +
                s.reference[C] +
                (y ? 0 : ((b = a.offset) == null ? void 0 : b[f]) || 0) -
                (y ? x.crossAxis : 0);
            g < S ? (g = S) : g > A && (g = A);
          }
          return { [v]: h, [f]: g };
        },
      }
    );
  },
  au = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: s, platform: a, elements: i } = t,
            { apply: l = () => {}, ...u } = Ee(e, t),
            d = await vt(t, u),
            f = Pe(r),
            v = rt(r),
            h = ge(r) === "y",
            { width: g, height: m } = s.floating;
          let x, w;
          f === "top" || f === "bottom"
            ? ((x = f),
              (w =
                v ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((w = f), (x = v === "end" ? "top" : "bottom"));
          const b = m - d.top - d.bottom,
            C = g - d.left - d.right,
            y = De(m - d[x], b),
            S = De(g - d[w], C),
            A = !t.middlewareData.shift;
          let E = y,
            T = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = C),
            (o = t.middlewareData.shift) != null && o.enabled.y && (E = b),
            A && !v)
          ) {
            const M = ae(d.left, 0),
              O = ae(d.right, 0),
              L = ae(d.top, 0),
              F = ae(d.bottom, 0);
            h
              ? (T = g - 2 * (M !== 0 || O !== 0 ? M + O : ae(d.left, d.right)))
              : (E =
                  m - 2 * (L !== 0 || F !== 0 ? L + F : ae(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: E });
          const I = await a.getDimensions(i.floating);
          return g !== I.width || m !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function cn() {
  return typeof window < "u";
}
function st(e) {
  return Vr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function be(e) {
  var t;
  return (t = (Vr(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Vr(e) {
  return cn() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function fe(e) {
  return cn() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function we(e) {
  return cn() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function dr(e) {
  return !cn() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
const iu = new Set(["inline", "contents"]);
function bt(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !iu.has(r);
}
const cu = new Set(["table", "td", "th"]);
function lu(e) {
  return cu.has(st(e));
}
const uu = [":popover-open", ":modal"];
function ln(e) {
  return uu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const du = ["transform", "translate", "scale", "rotate", "perspective"],
  fu = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  pu = ["paint", "layout", "strict", "content"];
function wo(e) {
  const t = bo(),
    n = fe(e) ? pe(e) : e;
  return (
    du.some((o) => (n[o] ? n[o] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    fu.some((o) => (n.willChange || "").includes(o)) ||
    pu.some((o) => (n.contain || "").includes(o))
  );
}
function vu(e) {
  let t = Oe(e);
  for (; we(t) && !Je(t); ) {
    if (wo(t)) return t;
    if (ln(t)) return null;
    t = Oe(t);
  }
  return null;
}
function bo() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const hu = new Set(["html", "body", "#document"]);
function Je(e) {
  return hu.has(st(e));
}
function pe(e) {
  return ie(e).getComputedStyle(e);
}
function un(e) {
  return fe(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Oe(e) {
  if (st(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (dr(e) && e.host) || be(e);
  return dr(t) ? t.host : t;
}
function Wr(e) {
  const t = Oe(e);
  return Je(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : we(t) && bt(t)
      ? t
      : Wr(t);
}
function ht(e, t, n) {
  var o;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const r = Wr(e),
    s = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    a = ie(r);
  if (s) {
    const i = eo(a);
    return t.concat(
      a,
      a.visualViewport || [],
      bt(r) ? r : [],
      i && n ? ht(i) : [],
    );
  }
  return t.concat(r, ht(r, [], n));
}
function eo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gr(e) {
  const t = pe(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = we(e),
    s = r ? e.offsetWidth : n,
    a = r ? e.offsetHeight : o,
    i = Gt(n) !== s || Gt(o) !== a;
  return (i && ((n = s), (o = a)), { width: n, height: o, $: i });
}
function Co(e) {
  return fe(e) ? e : e.contextElement;
}
function qe(e) {
  const t = Co(e);
  if (!we(t)) return xe(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: s } = Gr(t);
  let a = (s ? Gt(n.width) : n.width) / o,
    i = (s ? Gt(n.height) : n.height) / r;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: a, y: i }
  );
}
const mu = xe(0);
function Ur(e) {
  const t = ie(e);
  return !bo() || !t.visualViewport
    ? mu
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function gu(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ie(e)) ? !1 : t);
}
function Be(e, t, n, o) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const r = e.getBoundingClientRect(),
    s = Co(e);
  let a = xe(1);
  t && (o ? fe(o) && (a = qe(o)) : (a = qe(e)));
  const i = gu(s, n, o) ? Ur(s) : xe(0);
  let l = (r.left + i.x) / a.x,
    u = (r.top + i.y) / a.y,
    d = r.width / a.x,
    f = r.height / a.y;
  if (s) {
    const v = ie(s),
      h = o && fe(o) ? ie(o) : o;
    let g = v,
      m = eo(g);
    for (; m && o && h !== g; ) {
      const x = qe(m),
        w = m.getBoundingClientRect(),
        b = pe(m),
        C = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * x.x,
        y = w.top + (m.clientTop + parseFloat(b.paddingTop)) * x.y;
      ((l *= x.x),
        (u *= x.y),
        (d *= x.x),
        (f *= x.y),
        (l += C),
        (u += y),
        (g = ie(m)),
        (m = eo(g)));
    }
  }
  return Kt({ width: d, height: f, x: l, y: u });
}
function yo(e, t) {
  const n = un(e).scrollLeft;
  return t ? t.left + n : Be(be(e)).left + n;
}
function Kr(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    r = o.left + t.scrollLeft - (n ? 0 : yo(e, o)),
    s = o.top + t.scrollTop;
  return { x: r, y: s };
}
function xu(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const s = r === "fixed",
    a = be(o),
    i = t ? ln(t.floating) : !1;
  if (o === a || (i && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = xe(1);
  const d = xe(0),
    f = we(o);
  if (
    (f || (!f && !s)) &&
    ((st(o) !== "body" || bt(a)) && (l = un(o)), we(o))
  ) {
    const h = Be(o);
    ((u = qe(o)), (d.x = h.x + o.clientLeft), (d.y = h.y + o.clientTop));
  }
  const v = a && !f && !s ? Kr(a, l, !0) : xe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + v.y,
  };
}
function wu(e) {
  return Array.from(e.getClientRects());
}
function bu(e) {
  const t = be(e),
    n = un(e),
    o = e.ownerDocument.body,
    r = ae(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    s = ae(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + yo(e);
  const i = -n.scrollTop;
  return (
    pe(o).direction === "rtl" && (a += ae(t.clientWidth, o.clientWidth) - r),
    { width: r, height: s, x: a, y: i }
  );
}
function Cu(e, t) {
  const n = ie(e),
    o = be(e),
    r = n.visualViewport;
  let s = o.clientWidth,
    a = o.clientHeight,
    i = 0,
    l = 0;
  if (r) {
    ((s = r.width), (a = r.height));
    const u = bo();
    (!u || (u && t === "fixed")) && ((i = r.offsetLeft), (l = r.offsetTop));
  }
  return { width: s, height: a, x: i, y: l };
}
const yu = new Set(["absolute", "fixed"]);
function Su(e, t) {
  const n = Be(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    s = we(e) ? qe(e) : xe(1),
    a = e.clientWidth * s.x,
    i = e.clientHeight * s.y,
    l = r * s.x,
    u = o * s.y;
  return { width: a, height: i, x: l, y: u };
}
function fr(e, t, n) {
  let o;
  if (t === "viewport") o = Cu(e, n);
  else if (t === "document") o = bu(be(e));
  else if (fe(t)) o = Su(t, n);
  else {
    const r = Ur(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return Kt(o);
}
function zr(e, t) {
  const n = Oe(e);
  return n === t || !fe(n) || Je(n)
    ? !1
    : pe(n).position === "fixed" || zr(n, t);
}
function Ru(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = ht(e, [], !1).filter((i) => fe(i) && st(i) !== "body"),
    r = null;
  const s = pe(e).position === "fixed";
  let a = s ? Oe(e) : e;
  for (; fe(a) && !Je(a); ) {
    const i = pe(a),
      l = wo(a);
    (!l && i.position === "fixed" && (r = null),
      (
        s
          ? !l && !r
          : (!l && i.position === "static" && !!r && yu.has(r.position)) ||
            (bt(a) && !l && zr(e, a))
      )
        ? (o = o.filter((d) => d !== a))
        : (r = i),
      (a = Oe(a)));
  }
  return (t.set(e, o), o);
}
function Eu(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const a = [
      ...(n === "clippingAncestors"
        ? ln(t)
          ? []
          : Ru(t, this._c)
        : [].concat(n)),
      o,
    ],
    i = a[0],
    l = a.reduce(
      (u, d) => {
        const f = fr(t, d, r);
        return (
          (u.top = ae(f.top, u.top)),
          (u.right = De(f.right, u.right)),
          (u.bottom = De(f.bottom, u.bottom)),
          (u.left = ae(f.left, u.left)),
          u
        );
      },
      fr(t, i, r),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Pu(e) {
  const { width: t, height: n } = Gr(e);
  return { width: t, height: n };
}
function Au(e, t, n) {
  const o = we(t),
    r = be(t),
    s = n === "fixed",
    a = Be(e, !0, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = xe(0);
  function u() {
    l.x = yo(r);
  }
  if (o || (!o && !s))
    if (((st(t) !== "body" || bt(r)) && (i = un(t)), o)) {
      const h = Be(t, !0, s, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else r && u();
  s && !o && r && u();
  const d = r && !o && !s ? Kr(r, i) : xe(0),
    f = a.left + i.scrollLeft - l.x - d.x,
    v = a.top + i.scrollTop - l.y - d.y;
  return { x: f, y: v, width: a.width, height: a.height };
}
function $n(e) {
  return pe(e).position === "static";
}
function pr(e, t) {
  if (!we(e) || pe(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (be(e) === n && (n = n.ownerDocument.body), n);
}
function Yr(e, t) {
  const n = ie(e);
  if (ln(e)) return n;
  if (!we(e)) {
    let r = Oe(e);
    for (; r && !Je(r); ) {
      if (fe(r) && !$n(r)) return r;
      r = Oe(r);
    }
    return n;
  }
  let o = pr(e, t);
  for (; o && lu(o) && $n(o); ) o = pr(o, t);
  return o && Je(o) && $n(o) && !wo(o) ? n : o || vu(e) || n;
}
const _u = async function (e) {
  const t = this.getOffsetParent || Yr,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: Au(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Tu(e) {
  return pe(e).direction === "rtl";
}
const Iu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xu,
  getDocumentElement: be,
  getClippingRect: Eu,
  getOffsetParent: Yr,
  getElementRects: _u,
  getClientRects: wu,
  getDimensions: Pu,
  getScale: qe,
  isElement: fe,
  isRTL: Tu,
};
function Xr(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Mu(e, t) {
  let n = null,
    o;
  const r = be(e);
  function s() {
    var i;
    (clearTimeout(o), (i = n) == null || i.disconnect(), (n = null));
  }
  function a(i, l) {
    (i === void 0 && (i = !1), l === void 0 && (l = 1), s());
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: v, height: h } = u;
    if ((i || t(), !v || !h)) return;
    const g = jt(f),
      m = jt(r.clientWidth - (d + v)),
      x = jt(r.clientHeight - (f + h)),
      w = jt(d),
      C = {
        rootMargin: -g + "px " + -m + "px " + -x + "px " + -w + "px",
        threshold: ae(0, De(1, l)) || 1,
      };
    let y = !0;
    function S(A) {
      const E = A[0].intersectionRatio;
      if (E !== l) {
        if (!y) return a();
        E
          ? a(!1, E)
          : (o = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      (E === 1 && !Xr(u, e.getBoundingClientRect()) && a(), (y = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...C, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, C);
    }
    n.observe(e);
  }
  return (a(!0), s);
}
function Nu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: s = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = o,
    u = Co(e),
    d = r || s ? [...(u ? ht(u) : []), ...ht(t)] : [];
  d.forEach((w) => {
    (r && w.addEventListener("scroll", n, { passive: !0 }),
      s && w.addEventListener("resize", n));
  });
  const f = u && i ? Mu(u, n) : null;
  let v = -1,
    h = null;
  a &&
    ((h = new ResizeObserver((w) => {
      let [b] = w;
      (b &&
        b.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var C;
          (C = h) == null || C.observe(t);
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
    (m && !Xr(m, w) && n(), (m = w), (g = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var w;
      (d.forEach((b) => {
        (r && b.removeEventListener("scroll", n),
          s && b.removeEventListener("resize", n));
      }),
        f == null || f(),
        (w = h) == null || w.disconnect(),
        (h = null),
        l && cancelAnimationFrame(g));
    }
  );
}
const Du = ou,
  Ou = ru,
  ju = eu,
  ku = au,
  Lu = tu,
  vr = Jl,
  Fu = su,
  $u = (e, t, n) => {
    const o = new Map(),
      r = { platform: Iu, ...n },
      s = { ...r.platform, _c: o };
    return Ql(e, t, { ...r, platform: s });
  };
var Bu = typeof document < "u",
  Hu = function () {},
  Ht = Bu ? c.useLayoutEffect : Hu;
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
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !zt(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qr(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hr(e, t) {
  const n = qr(e);
  return Math.round(t * n) / n;
}
function Bn(e) {
  const t = c.useRef(e);
  return (
    Ht(() => {
      t.current = e;
    }),
    t
  );
}
function Vu(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: r,
      elements: { reference: s, floating: a } = {},
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
    C = c.useCallback((N) => {
      N !== E.current && ((E.current = N), w(N));
    }, []),
    y = s || g,
    S = a || x,
    A = c.useRef(null),
    E = c.useRef(null),
    T = c.useRef(d),
    I = l != null,
    M = Bn(l),
    O = Bn(r),
    L = Bn(u),
    F = c.useCallback(() => {
      if (!A.current || !E.current) return;
      const N = { placement: t, strategy: n, middleware: v };
      (O.current && (N.platform = O.current),
        $u(A.current, E.current, N).then((_) => {
          const z = { ..._, isPositioned: L.current !== !1 };
          $.current &&
            !zt(T.current, z) &&
            ((T.current = z),
            sn.flushSync(() => {
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
      if ((y && (A.current = y), S && (E.current = S), y && S)) {
        if (M.current) return M.current(y, S, F);
        F();
      }
    }, [y, S, F, M, I]));
  const H = c.useMemo(
      () => ({ reference: A, floating: E, setReference: b, setFloating: C }),
      [b, C],
    ),
    k = c.useMemo(() => ({ reference: y, floating: S }), [y, S]),
    B = c.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!k.floating) return N;
      const _ = hr(k.floating, d.x),
        z = hr(k.floating, d.y);
      return i
        ? {
            ...N,
            transform: "translate(" + _ + "px, " + z + "px)",
            ...(qr(k.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: _, top: z };
    }, [n, i, k.floating, d.x, d.y]);
  return c.useMemo(
    () => ({ ...d, update: F, refs: H, elements: k, floatingStyles: B }),
    [d, F, H, k, B],
  );
}
const Wu = (e) => {
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
            ? vr({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? vr({ element: o, padding: r }).fn(n)
            : {};
      },
    };
  },
  Gu = (e, t) => ({ ...Du(e), options: [e, t] }),
  Uu = (e, t) => ({ ...Ou(e), options: [e, t] }),
  Ku = (e, t) => ({ ...Fu(e), options: [e, t] }),
  zu = (e, t) => ({ ...ju(e), options: [e, t] }),
  Yu = (e, t) => ({ ...ku(e), options: [e, t] }),
  Xu = (e, t) => ({ ...Lu(e), options: [e, t] }),
  qu = (e, t) => ({ ...Wu(e), options: [e, t] });
var Zu = "Arrow",
  Zr = c.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...s } = e;
    return p.jsx(P.svg, {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Zr.displayName = Zu;
var Qu = Zr;
function Ct(e) {
  const [t, n] = c.useState(void 0);
  return (
    q(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return;
          const s = r[0];
          let a, i;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((a = u.inlineSize), (i = u.blockSize));
          } else ((a = e.offsetWidth), (i = e.offsetHeight));
          n({ width: a, height: i });
        });
        return (o.observe(e, { box: "border-box" }), () => o.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var So = "Popper",
  [Qr, Ce] = X(So),
  [Ju, Jr] = Qr(So),
  es = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = c.useState(null);
    return p.jsx(Ju, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
es.displayName = So;
var ts = "PopperAnchor",
  ns = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      s = Jr(ts, n),
      a = c.useRef(null),
      i = D(t, a);
    return (
      c.useEffect(() => {
        s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
      }),
      o ? null : p.jsx(P.div, { ...r, ref: i })
    );
  });
ns.displayName = ts;
var Ro = "PopperContent",
  [ed, td] = Qr(Ro),
  os = c.forwardRef((e, t) => {
    var j, G, Y, W, U, K;
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: s = "center",
        alignOffset: a = 0,
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
      x = Jr(Ro, n),
      [w, b] = c.useState(null),
      C = D(t, (se) => b(se)),
      [y, S] = c.useState(null),
      A = Ct(y),
      E = (A == null ? void 0 : A.width) ?? 0,
      T = (A == null ? void 0 : A.height) ?? 0,
      I = o + (s !== "center" ? "-" + s : ""),
      M =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      O = Array.isArray(u) ? u : [u],
      L = O.length > 0,
      F = { padding: M, boundary: O.filter(od), altBoundary: L },
      {
        refs: $,
        floatingStyles: H,
        placement: k,
        isPositioned: B,
        middlewareData: N,
      } = Vu({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...se) =>
          Nu(...se, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          Gu({ mainAxis: r + T, alignmentAxis: a }),
          l &&
            Uu({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? Ku() : void 0,
              ...F,
            }),
          l && zu({ ...F }),
          Yu({
            ...F,
            apply: ({
              elements: se,
              rects: me,
              availableWidth: lt,
              availableHeight: ut,
            }) => {
              const { width: dt, height: Cl } = me.reference,
                Ot = se.floating.style;
              (Ot.setProperty("--radix-popper-available-width", `${lt}px`),
                Ot.setProperty("--radix-popper-available-height", `${ut}px`),
                Ot.setProperty("--radix-popper-anchor-width", `${dt}px`),
                Ot.setProperty("--radix-popper-anchor-height", `${Cl}px`));
            },
          }),
          y && qu({ element: y, padding: i }),
          rd({ arrowWidth: E, arrowHeight: T }),
          v && Xu({ strategy: "referenceHidden", ...F }),
        ],
      }),
      [_, z] = as(k),
      Z = ee(g);
    q(() => {
      B && (Z == null || Z());
    }, [B, Z]);
    const ne = (j = N.arrow) == null ? void 0 : j.x,
      Se = (G = N.arrow) == null ? void 0 : G.y,
      ce = ((Y = N.arrow) == null ? void 0 : Y.centerOffset) !== 0,
      [Re, re] = c.useState();
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
          zIndex: Re,
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
        children: p.jsx(ed, {
          scope: n,
          placedSide: _,
          onArrowChange: S,
          arrowX: ne,
          arrowY: Se,
          shouldHideArrow: ce,
          children: p.jsx(P.div, {
            "data-side": _,
            "data-align": z,
            ...m,
            ref: C,
            style: { ...m.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
os.displayName = Ro;
var rs = "PopperArrow",
  nd = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ss = c.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      s = td(rs, o),
      a = nd[s.placedSide];
    return p.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(Qu, {
        ...r,
        ref: n,
        style: { ...r.style, display: "block" },
      }),
    });
  });
ss.displayName = rs;
function od(e) {
  return e !== null;
}
var rd = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, w, b;
    const { placement: n, rects: o, middlewareData: r } = t,
      a = ((x = r.arrow) == null ? void 0 : x.centerOffset) !== 0,
      i = a ? 0 : e.arrowWidth,
      l = a ? 0 : e.arrowHeight,
      [u, d] = as(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      v = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2,
      h = (((b = r.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let g = "",
      m = "";
    return (
      u === "bottom"
        ? ((g = a ? f : `${v}px`), (m = `${-l}px`))
        : u === "top"
          ? ((g = a ? f : `${v}px`), (m = `${o.floating.height + l}px`))
          : u === "right"
            ? ((g = `${-l}px`), (m = a ? f : `${h}px`))
            : u === "left" &&
              ((g = `${o.floating.width + l}px`), (m = a ? f : `${h}px`)),
      { data: { x: g, y: m } }
    );
  },
});
function as(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var yt = es,
  at = ns,
  St = os,
  Rt = ss,
  sd = "Portal",
  Et = c.forwardRef((e, t) => {
    var i;
    const { container: n, ...o } = e,
      [r, s] = c.useState(!1);
    q(() => s(!0), []);
    const a =
      n ||
      (r &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return a ? yl.createPortal(p.jsx(P.div, { ...o, ref: t }), a) : null;
  });
Et.displayName = sd;
function ad(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Q = (e) => {
  const { present: t, children: n } = e,
    o = id(t),
    r =
      typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n),
    s = D(o.ref, cd(r));
  return typeof n == "function" || o.isPresent
    ? c.cloneElement(r, { ref: s })
    : null;
};
Q.displayName = "Presence";
function id(e) {
  const [t, n] = c.useState(),
    o = c.useRef(null),
    r = c.useRef(e),
    s = c.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [i, l] = ad(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const u = kt(o.current);
      s.current = i === "mounted" ? u : "none";
    }, [i]),
    q(() => {
      const u = o.current,
        d = r.current;
      if (d !== e) {
        const v = s.current,
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
            h.target === t && (s.current = kt(o.current));
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
function cd(e) {
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
var ld = Dr[" useInsertionEffect ".trim().toString()] || q;
function J({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
  const [r, s, a] = ud({ defaultProp: t, onChange: n }),
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
        const v = dd(d) ? d(e) : d;
        v !== e && ((f = a.current) == null || f.call(a, v));
      } else s(d);
    },
    [i, e, s, a],
  );
  return [l, u];
}
function ud({ defaultProp: e, onChange: t }) {
  const [n, o] = c.useState(e),
    r = c.useRef(n),
    s = c.useRef(t);
  return (
    ld(() => {
      s.current = t;
    }, [t]),
    c.useEffect(() => {
      var a;
      r.current !== n &&
        ((a = s.current) == null || a.call(s, n), (r.current = n));
    }, [n, r]),
    [n, o, s]
  );
}
function dd(e) {
  return typeof e == "function";
}
var is = Object.freeze({
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
  fd = "VisuallyHidden",
  cs = c.forwardRef((e, t) =>
    p.jsx(P.span, { ...e, ref: t, style: { ...is, ...e.style } }),
  );
cs.displayName = fd;
var pd = cs,
  [dn] = X("Tooltip", [Ce]),
  fn = Ce(),
  ls = "TooltipProvider",
  vd = 700,
  to = "tooltip.open",
  [hd, Eo] = dn(ls),
  us = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = vd,
        skipDelayDuration: o = 300,
        disableHoverableContent: r = !1,
        children: s,
      } = e,
      a = c.useRef(!0),
      i = c.useRef(!1),
      l = c.useRef(0);
    return (
      c.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      p.jsx(hd, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: c.useCallback(() => {
          (window.clearTimeout(l.current), (a.current = !1));
        }, []),
        onClose: c.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (a.current = !0), o)));
        }, [o]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: c.useCallback((u) => {
          i.current = u;
        }, []),
        disableHoverableContent: r,
        children: s,
      })
    );
  };
us.displayName = ls;
var mt = "Tooltip",
  [md, pn] = dn(mt),
  ds = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: s,
        disableHoverableContent: a,
        delayDuration: i,
      } = e,
      l = Eo(mt, e.__scopeTooltip),
      u = fn(t),
      [d, f] = c.useState(null),
      v = oe(),
      h = c.useRef(0),
      g = a ?? l.disableHoverableContent,
      m = i ?? l.delayDuration,
      x = c.useRef(!1),
      [w, b] = J({
        prop: o,
        defaultProp: r ?? !1,
        onChange: (E) => {
          (E
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(to)))
            : l.onClose(),
            s == null || s(E));
        },
        caller: mt,
      }),
      C = c.useMemo(
        () => (w ? (x.current ? "delayed-open" : "instant-open") : "closed"),
        [w],
      ),
      y = c.useCallback(() => {
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
      p.jsx(yt, {
        ...u,
        children: p.jsx(md, {
          scope: t,
          contentId: v,
          open: w,
          stateAttribute: C,
          trigger: d,
          onTriggerChange: f,
          onTriggerEnter: c.useCallback(() => {
            l.isOpenDelayedRef.current ? A() : y();
          }, [l.isOpenDelayedRef, A, y]),
          onTriggerLeave: c.useCallback(() => {
            g ? S() : (window.clearTimeout(h.current), (h.current = 0));
          }, [S, g]),
          onOpen: y,
          onClose: S,
          disableHoverableContent: g,
          children: n,
        }),
      })
    );
  };
ds.displayName = mt;
var no = "TooltipTrigger",
  fs = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = pn(no, n),
      s = Eo(no, n),
      a = fn(n),
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
      p.jsx(at, {
        asChild: !0,
        ...a,
        children: p.jsx(P.button, {
          "aria-describedby": r.open ? r.contentId : void 0,
          "data-state": r.stateAttribute,
          ...o,
          ref: l,
          onPointerMove: R(e.onPointerMove, (v) => {
            v.pointerType !== "touch" &&
              !d.current &&
              !s.isPointerInTransitRef.current &&
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
fs.displayName = no;
var gd = "TooltipPortal",
  [km, xd] = dn(gd, { forceMount: void 0 }),
  et = "TooltipContent",
  ps = c.forwardRef((e, t) => {
    const n = xd(et, e.__scopeTooltip),
      { forceMount: o = n.forceMount, side: r = "top", ...s } = e,
      a = pn(et, e.__scopeTooltip);
    return p.jsx(Q, {
      present: o || a.open,
      children: a.disableHoverableContent
        ? p.jsx(vs, { side: r, ...s, ref: t })
        : p.jsx(wd, { side: r, ...s, ref: t }),
    });
  }),
  wd = c.forwardRef((e, t) => {
    const n = pn(et, e.__scopeTooltip),
      o = Eo(et, e.__scopeTooltip),
      r = c.useRef(null),
      s = D(t, r),
      [a, i] = c.useState(null),
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
            b = Rd(w, x.getBoundingClientRect()),
            C = Ed(w, b),
            y = Pd(m.getBoundingClientRect()),
            S = _d([...C, ...y]);
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
        if (a) {
          const g = (m) => {
            const x = m.target,
              w = { x: m.clientX, y: m.clientY },
              b =
                (l == null ? void 0 : l.contains(x)) ||
                (d == null ? void 0 : d.contains(x)),
              C = !Ad(w, a);
            b ? v() : C && (v(), u());
          };
          return (
            document.addEventListener("pointermove", g),
            () => document.removeEventListener("pointermove", g)
          );
        }
      }, [l, d, a, u, v]),
      p.jsx(vs, { ...e, ref: s })
    );
  }),
  [bd, Cd] = dn(mt, { isInside: !1 }),
  yd = kr("TooltipContent"),
  vs = c.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: o,
        "aria-label": r,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        ...i
      } = e,
      l = pn(et, n),
      u = fn(n),
      { onClose: d } = l;
    return (
      c.useEffect(
        () => (
          document.addEventListener(to, d),
          () => document.removeEventListener(to, d)
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
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
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
            p.jsx(yd, { children: o }),
            p.jsx(bd, {
              scope: n,
              isInside: !0,
              children: p.jsx(pd, {
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
ps.displayName = et;
var hs = "TooltipArrow",
  Sd = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = fn(n);
    return Cd(hs, n).isInside ? null : p.jsx(Rt, { ...r, ...o, ref: t });
  });
Sd.displayName = hs;
function Rd(e, t) {
  const n = Math.abs(t.top - e.y),
    o = Math.abs(t.bottom - e.y),
    r = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
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
function Ed(e, t, n = 5) {
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
function Pd(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o },
  ];
}
function Ad(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s],
      l = t[a],
      u = i.x,
      d = i.y,
      f = l.x,
      v = l.y;
    d > o != v > o && n < ((f - u) * (o - d)) / (v - d) + u && (r = !r);
  }
  return r;
}
function _d(e) {
  const t = e.slice();
  return (
    t.sort((n, o) =>
      n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0,
    ),
    Td(t)
  );
}
function Td(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) n.pop();
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
var Lm = us,
  Fm = ds,
  $m = fs,
  Bm = ps;
function Pt(e) {
  const t = e + "CollectionProvider",
    [n, o] = X(t),
    [r, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    a = (m) => {
      const { scope: x, children: w } = m,
        b = V.useRef(null),
        C = V.useRef(new Map()).current;
      return p.jsx(r, { scope: x, itemMap: C, collectionRef: b, children: w });
    };
  a.displayName = t;
  const i = e + "CollectionSlot",
    l = Ne(i),
    u = V.forwardRef((m, x) => {
      const { scope: w, children: b } = m,
        C = s(i, w),
        y = D(x, C.collectionRef);
      return p.jsx(l, { ref: y, children: b });
    });
  u.displayName = i;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    v = Ne(d),
    h = V.forwardRef((m, x) => {
      const { scope: w, children: b, ...C } = m,
        y = V.useRef(null),
        S = D(x, y),
        A = s(d, w);
      return (
        V.useEffect(
          () => (
            A.itemMap.set(y, { ref: y, ...C }),
            () => void A.itemMap.delete(y)
          ),
        ),
        p.jsx(v, { [f]: "", ref: S, children: b })
      );
    });
  h.displayName = d;
  function g(m) {
    const x = s(e + "CollectionConsumer", m);
    return V.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const C = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (A, E) => C.indexOf(A.ref.current) - C.indexOf(E.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: a, Slot: u, ItemSlot: h }, g, o];
}
var ms = { exports: {} },
  gs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tt = c;
function Id(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Md = typeof Object.is == "function" ? Object.is : Id,
  Nd = tt.useState,
  Dd = tt.useEffect,
  Od = tt.useLayoutEffect,
  jd = tt.useDebugValue;
function kd(e, t) {
  var n = t(),
    o = Nd({ inst: { value: n, getSnapshot: t } }),
    r = o[0].inst,
    s = o[1];
  return (
    Od(
      function () {
        ((r.value = n), (r.getSnapshot = t), Hn(r) && s({ inst: r }));
      },
      [e, n, t],
    ),
    Dd(
      function () {
        return (
          Hn(r) && s({ inst: r }),
          e(function () {
            Hn(r) && s({ inst: r });
          })
        );
      },
      [e],
    ),
    jd(n),
    n
  );
}
function Hn(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Md(e, n);
  } catch {
    return !0;
  }
}
function Ld(e, t) {
  return t();
}
var Fd =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Ld
    : kd;
gs.useSyncExternalStore =
  tt.useSyncExternalStore !== void 0 ? tt.useSyncExternalStore : Fd;
ms.exports = gs;
var $d = ms.exports,
  Vn = "focusScope.autoFocusOnMount",
  Wn = "focusScope.autoFocusOnUnmount",
  mr = { bubbles: !1, cancelable: !0 },
  Bd = "FocusScope",
  At = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: r,
        onUnmountAutoFocus: s,
        ...a
      } = e,
      [i, l] = c.useState(null),
      u = ee(r),
      d = ee(s),
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
        let m = function (C) {
            if (h.paused || !i) return;
            const y = C.target;
            i.contains(y) ? (f.current = y) : Te(f.current, { select: !0 });
          },
          x = function (C) {
            if (h.paused || !i) return;
            const y = C.relatedTarget;
            y !== null && (i.contains(y) || Te(f.current, { select: !0 }));
          },
          w = function (C) {
            if (document.activeElement === document.body)
              for (const S of C) S.removedNodes.length > 0 && Te(i);
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
          xr.add(h);
          const m = document.activeElement;
          if (!i.contains(m)) {
            const w = new CustomEvent(Vn, mr);
            (i.addEventListener(Vn, u),
              i.dispatchEvent(w),
              w.defaultPrevented ||
                (Hd(Kd(xs(i)), { select: !0 }),
                document.activeElement === m && Te(i)));
          }
          return () => {
            (i.removeEventListener(Vn, u),
              setTimeout(() => {
                const w = new CustomEvent(Wn, mr);
                (i.addEventListener(Wn, d),
                  i.dispatchEvent(w),
                  w.defaultPrevented || Te(m ?? document.body, { select: !0 }),
                  i.removeEventListener(Wn, d),
                  xr.remove(h));
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
            [C, y] = Vd(b);
          C && y
            ? !m.shiftKey && w === y
              ? (m.preventDefault(), n && Te(C, { select: !0 }))
              : m.shiftKey &&
                w === C &&
                (m.preventDefault(), n && Te(y, { select: !0 }))
            : w === b && m.preventDefault();
        }
      },
      [n, o, h.paused],
    );
    return p.jsx(P.div, { tabIndex: -1, ...a, ref: v, onKeyDown: g });
  });
At.displayName = Bd;
function Hd(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((Te(o, { select: t }), document.activeElement !== n)) return;
}
function Vd(e) {
  const t = xs(e),
    n = gr(t, e),
    o = gr(t.reverse(), e);
  return [n, o];
}
function xs(e) {
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
function gr(e, t) {
  for (const n of e) if (!Wd(n, { upTo: t })) return n;
}
function Wd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Gd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Te(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Gd(e) && t && e.select());
  }
}
var xr = Ud();
function Ud() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = wr(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = wr(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function wr(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return (o !== -1 && n.splice(o, 1), n);
}
function Kd(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Gn = 0;
function vn() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? br()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? br()),
      Gn++,
      () => {
        (Gn === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Gn--);
      }
    );
  }, []);
}
function br() {
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
  zd = "with-scroll-bars-hidden",
  Yd = "--removed-body-scroll-bar-size";
function Un(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function Xd(e, t) {
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
var qd = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  Cr = new WeakMap();
function Zd(e, t) {
  var n = Xd(null, function (o) {
    return e.forEach(function (r) {
      return Un(r, o);
    });
  });
  return (
    qd(
      function () {
        var o = Cr.get(n);
        if (o) {
          var r = new Set(o),
            s = new Set(e),
            a = n.current;
          (r.forEach(function (i) {
            s.has(i) || Un(i, null);
          }),
            s.forEach(function (i) {
              r.has(i) || Un(i, a);
            }));
        }
        Cr.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Qd(e) {
  return e;
}
function Jd(e, t) {
  t === void 0 && (t = Qd);
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
      useMedium: function (s) {
        var a = t(s, o);
        return (
          n.push(a),
          function () {
            n = n.filter(function (i) {
              return i !== a;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (o = !0; n.length; ) {
          var a = n;
          ((n = []), a.forEach(s));
        }
        n = {
          push: function (i) {
            return s(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        o = !0;
        var a = [];
        if (n.length) {
          var i = n;
          ((n = []), i.forEach(s), (a = n));
        }
        var l = function () {
            var d = a;
            ((a = []), d.forEach(s));
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        (u(),
          (n = {
            push: function (d) {
              (a.push(d), u());
            },
            filter: function (d) {
              return ((a = a.filter(d)), n);
            },
          }));
      },
    };
  return r;
}
function ef(e) {
  e === void 0 && (e = {});
  var t = Jd(null);
  return ((t.options = Ie({ async: !0, ssr: !1 }, e)), t);
}
var ws = function (e) {
  var t = e.sideCar,
    n = Or(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return c.createElement(o, Ie({}, n));
};
ws.isSideCarExport = !0;
function tf(e, t) {
  return (e.useMedium(t), ws);
}
var bs = ef(),
  Kn = function () {},
  hn = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      o = c.useState({
        onScrollCapture: Kn,
        onWheelCapture: Kn,
        onTouchMoveCapture: Kn,
      }),
      r = o[0],
      s = o[1],
      a = e.forwardProps,
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
      C = e.gapMode,
      y = Or(e, [
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
      A = Zd([n, t]),
      E = Ie(Ie({}, y), r);
    return c.createElement(
      c.Fragment,
      null,
      d &&
        c.createElement(S, {
          sideCar: bs,
          removeScrollBar: u,
          shards: f,
          noRelative: h,
          noIsolation: g,
          inert: m,
          setCallbacks: s,
          allowPinchZoom: !!x,
          lockRef: n,
          gapMode: C,
        }),
      a
        ? c.cloneElement(c.Children.only(i), Ie(Ie({}, E), { ref: A }))
        : c.createElement(b, Ie({}, E, { className: l, ref: A }), i),
    );
  });
hn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
hn.classNames = { fullWidth: Wt, zeroRight: Vt };
var nf = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function of() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = nf();
  return (t && e.setAttribute("nonce", t), e);
}
function rf(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function sf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var af = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = of()) && (rf(t, n), sf(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  cf = function () {
    var e = af();
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
  Cs = function () {
    var e = cf(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic;
        return (e(o, r), null);
      };
    return t;
  },
  lf = { left: 0, top: 0, right: 0, gap: 0 },
  zn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  uf = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [zn(n), zn(o), zn(r)];
  },
  df = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return lf;
    var t = uf(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    };
  },
  ff = Cs(),
  Ze = "data-scroll-locked",
  pf = function (e, t, n, o) {
    var r = e.left,
      s = e.top,
      a = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          zd,
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
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  a,
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
        .concat(Yd, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  yr = function () {
    var e = parseInt(document.body.getAttribute(Ze) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  vf = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(Ze, (yr() + 1).toString()),
        function () {
          var e = yr() - 1;
          e <= 0
            ? document.body.removeAttribute(Ze)
            : document.body.setAttribute(Ze, e.toString());
        }
      );
    }, []);
  },
  hf = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? "margin" : o;
    vf();
    var s = c.useMemo(
      function () {
        return df(r);
      },
      [r],
    );
    return c.createElement(ff, { styles: pf(s, !t, r, n ? "" : "!important") });
  },
  oo = !1;
if (typeof window < "u")
  try {
    var Lt = Object.defineProperty({}, "passive", {
      get: function () {
        return ((oo = !0), !0);
      },
    });
    (window.addEventListener("test", Lt, Lt),
      window.removeEventListener("test", Lt, Lt));
  } catch {
    oo = !1;
  }
var ze = oo ? { passive: !1 } : !1,
  mf = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ys = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !mf(e) && n[t] === "visible")
    );
  },
  gf = function (e) {
    return ys(e, "overflowY");
  },
  xf = function (e) {
    return ys(e, "overflowX");
  },
  Sr = function (e, t) {
    var n = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var r = Ss(e, o);
      if (r) {
        var s = Rs(e, o),
          a = s[1],
          i = s[2];
        if (a > i) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  wf = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  bf = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  Ss = function (e, t) {
    return e === "v" ? gf(t) : xf(t);
  },
  Rs = function (e, t) {
    return e === "v" ? wf(t) : bf(t);
  },
  Cf = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  yf = function (e, t, n, o, r) {
    var s = Cf(e, window.getComputedStyle(t).direction),
      a = s * o,
      i = n.target,
      l = t.contains(i),
      u = !1,
      d = a > 0,
      f = 0,
      v = 0;
    do {
      if (!i) break;
      var h = Rs(e, i),
        g = h[0],
        m = h[1],
        x = h[2],
        w = m - x - s * g;
      (g || w) && Ss(e, i) && ((f += w), (v += g));
      var b = i.parentNode;
      i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!l && i !== document.body) || (l && (t.contains(i) || t === i)));
    return (((d && Math.abs(f) < 1) || (!d && Math.abs(v) < 1)) && (u = !0), u);
  },
  Ft = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Rr = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Er = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Sf = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Rf = function (e) {
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
  Ef = 0,
  Ye = [];
function Pf(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    o = c.useRef(),
    r = c.useState(Ef++)[0],
    s = c.useState(Cs)[0],
    a = c.useRef(e);
  (c.useEffect(
    function () {
      a.current = e;
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(r));
          var m = Sl([e.lockRef.current], (e.shards || []).map(Er), !0).filter(
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
        return !a.current.allowPinchZoom;
      var w = Ft(m),
        b = n.current,
        C = "deltaX" in m ? m.deltaX : b[0] - w[0],
        y = "deltaY" in m ? m.deltaY : b[1] - w[1],
        S,
        A = m.target,
        E = Math.abs(C) > Math.abs(y) ? "h" : "v";
      if ("touches" in m && E === "h" && A.type === "range") return !1;
      var T = Sr(E, A);
      if (!T) return !0;
      if ((T ? (S = E) : ((S = E === "v" ? "h" : "v"), (T = Sr(E, A))), !T))
        return !1;
      if (
        (!o.current && "changedTouches" in m && (C || y) && (o.current = S), !S)
      )
        return !0;
      var I = o.current || S;
      return yf(I, x, m, I === "h" ? C : y);
    }, []),
    l = c.useCallback(function (m) {
      var x = m;
      if (!(!Ye.length || Ye[Ye.length - 1] !== s)) {
        var w = "deltaY" in x ? Rr(x) : Ft(x),
          b = t.current.filter(function (S) {
            return (
              S.name === x.type &&
              (S.target === x.target || x.target === S.shadowParent) &&
              Sf(S.delta, w)
            );
          })[0];
        if (b && b.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!b) {
          var C = (a.current.shards || [])
              .map(Er)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(x.target);
              }),
            y = C.length > 0 ? i(x, C[0]) : !a.current.noIsolation;
          y && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (m, x, w, b) {
      var C = { name: m, delta: x, target: w, should: b, shadowParent: Af(w) };
      (t.current.push(C),
        setTimeout(function () {
          t.current = t.current.filter(function (y) {
            return y !== C;
          });
        }, 1));
    }, []),
    d = c.useCallback(function (m) {
      ((n.current = Ft(m)), (o.current = void 0));
    }, []),
    f = c.useCallback(function (m) {
      u(m.type, Rr(m), m.target, i(m, e.lockRef.current));
    }, []),
    v = c.useCallback(function (m) {
      u(m.type, Ft(m), m.target, i(m, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      Ye.push(s),
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
          return m !== s;
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
    g ? c.createElement(s, { styles: Rf(r) }) : null,
    h
      ? c.createElement(hf, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Af(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const _f = tf(bs, Pf);
var _t = c.forwardRef(function (e, t) {
  return c.createElement(hn, Ie({}, e, { ref: t, sideCar: _f }));
});
_t.classNames = hn.classNames;
var Tf = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Xe = new WeakMap(),
  $t = new WeakMap(),
  Bt = {},
  Yn = 0,
  Es = function (e) {
    return e && (e.host || Es(e.parentNode));
  },
  If = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = Es(n);
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
  Mf = function (e, t, n, o) {
    var r = If(t, Array.isArray(e) ? e : [e]);
    Bt[n] || (Bt[n] = new WeakMap());
    var s = Bt[n],
      a = [],
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
                x = (s.get(v) || 0) + 1;
              (Xe.set(v, m),
                s.set(v, x),
                a.push(v),
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
      Yn++,
      function () {
        (a.forEach(function (f) {
          var v = Xe.get(f) - 1,
            h = s.get(f) - 1;
          (Xe.set(f, v),
            s.set(f, h),
            v || ($t.has(f) || f.removeAttribute(o), $t.delete(f)),
            h || f.removeAttribute(n));
        }),
          Yn--,
          Yn ||
            ((Xe = new WeakMap()),
            (Xe = new WeakMap()),
            ($t = new WeakMap()),
            (Bt = {})));
      }
    );
  },
  mn = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Tf(e);
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
        Mf(o, r, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  gn = "Dialog",
  [Ps, As] = X(gn),
  [Nf, ve] = Ps(gn),
  _s = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      i = c.useRef(null),
      l = c.useRef(null),
      [u, d] = J({ prop: o, defaultProp: r ?? !1, onChange: s, caller: gn });
    return p.jsx(Nf, {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: oe(),
      titleId: oe(),
      descriptionId: oe(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: n,
    });
  };
_s.displayName = gn;
var Ts = "DialogTrigger",
  Is = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Ts, n),
      s = D(t, r.triggerRef);
    return p.jsx(P.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": r.open,
      "aria-controls": r.contentId,
      "data-state": _o(r.open),
      ...o,
      ref: s,
      onClick: R(e.onClick, r.onOpenToggle),
    });
  });
Is.displayName = Ts;
var Po = "DialogPortal",
  [Df, Ms] = Ps(Po, { forceMount: void 0 }),
  Ns = (e) => {
    const { __scopeDialog: t, forceMount: n, children: o, container: r } = e,
      s = ve(Po, t);
    return p.jsx(Df, {
      scope: t,
      forceMount: n,
      children: c.Children.map(o, (a) =>
        p.jsx(Q, {
          present: n || s.open,
          children: p.jsx(Et, { asChild: !0, container: r, children: a }),
        }),
      ),
    });
  };
Ns.displayName = Po;
var Yt = "DialogOverlay",
  Ds = c.forwardRef((e, t) => {
    const n = Ms(Yt, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      s = ve(Yt, e.__scopeDialog);
    return s.modal
      ? p.jsx(Q, {
          present: o || s.open,
          children: p.jsx(jf, { ...r, ref: t }),
        })
      : null;
  });
Ds.displayName = Yt;
var Of = Ne("DialogOverlay.RemoveScroll"),
  jf = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Yt, n);
    return p.jsx(_t, {
      as: Of,
      allowPinchZoom: !0,
      shards: [r.contentRef],
      children: p.jsx(P.div, {
        "data-state": _o(r.open),
        ...o,
        ref: t,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  He = "DialogContent",
  Os = c.forwardRef((e, t) => {
    const n = Ms(He, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      s = ve(He, e.__scopeDialog);
    return p.jsx(Q, {
      present: o || s.open,
      children: s.modal
        ? p.jsx(kf, { ...r, ref: t })
        : p.jsx(Lf, { ...r, ref: t }),
    });
  });
Os.displayName = He;
var kf = c.forwardRef((e, t) => {
    const n = ve(He, e.__scopeDialog),
      o = c.useRef(null),
      r = D(t, n.contentRef, o);
    return (
      c.useEffect(() => {
        const s = o.current;
        if (s) return mn(s);
      }, []),
      p.jsx(js, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: R(e.onCloseAutoFocus, (s) => {
          var a;
          (s.preventDefault(), (a = n.triggerRef.current) == null || a.focus());
        }),
        onPointerDownOutside: R(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent,
            i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: R(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  Lf = c.forwardRef((e, t) => {
    const n = ve(He, e.__scopeDialog),
      o = c.useRef(!1),
      r = c.useRef(!1);
    return p.jsx(js, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var a, i;
        ((a = e.onCloseAutoFocus) == null || a.call(e, s),
          s.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
          (o.current = !1),
          (r.current = !1));
      },
      onInteractOutside: (s) => {
        var l, u;
        ((l = e.onInteractOutside) == null || l.call(e, s),
          s.defaultPrevented ||
            ((o.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (r.current = !0)));
        const a = s.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) &&
          s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            r.current &&
            s.preventDefault());
      },
    });
  }),
  js = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: s,
        ...a
      } = e,
      i = ve(He, n),
      l = c.useRef(null),
      u = D(t, l);
    return (
      vn(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(At, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            children: p.jsx(Ge, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": _o(i.open),
              ...a,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx($f, { titleId: i.titleId }),
              p.jsx(Hf, { contentRef: l, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ao = "DialogTitle",
  ks = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Ao, n);
    return p.jsx(P.h2, { id: r.titleId, ...o, ref: t });
  });
ks.displayName = Ao;
var Ls = "DialogDescription",
  Fs = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Ls, n);
    return p.jsx(P.p, { id: r.descriptionId, ...o, ref: t });
  });
Fs.displayName = Ls;
var $s = "DialogClose",
  Bs = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve($s, n);
    return p.jsx(P.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: R(e.onClick, () => r.onOpenChange(!1)),
    });
  });
Bs.displayName = $s;
function _o(e) {
  return e ? "open" : "closed";
}
var Hs = "DialogTitleWarning",
  [Ff, Vs] = Rl(Hs, { contentName: He, titleName: Ao, docsSlug: "dialog" }),
  $f = ({ titleId: e }) => {
    const t = Vs(Hs),
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
  Bf = "DialogDescriptionWarning",
  Hf = ({ contentRef: e, descriptionId: t }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Vs(Bf).contentName}}.`;
    return (
      c.useEffect(() => {
        var s;
        const r =
          (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && r && (document.getElementById(t) || console.warn(o));
      }, [o, e, t]),
      null
    );
  },
  Vf = _s,
  Wf = Is,
  Gf = Ns,
  Uf = Ds,
  Kf = Os,
  zf = ks,
  Yf = Fs,
  Ws = Bs,
  Xf = c.createContext(void 0);
function Ae(e) {
  const t = c.useContext(Xf);
  return e || t || "ltr";
}
var Xn = "rovingFocusGroup.onEntryFocus",
  qf = { bubbles: !1, cancelable: !0 },
  Tt = "RovingFocusGroup",
  [ro, Gs, Zf] = Pt(Tt),
  [Qf, je] = X(Tt, [Zf]),
  [Jf, ep] = Qf(Tt),
  Us = c.forwardRef((e, t) =>
    p.jsx(ro.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(ro.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(tp, { ...e, ref: t }),
      }),
    }),
  );
Us.displayName = Tt;
var tp = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: s,
        currentTabStopId: a,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      v = c.useRef(null),
      h = D(t, v),
      g = Ae(s),
      [m, x] = J({ prop: a, defaultProp: i ?? null, onChange: l, caller: Tt }),
      [w, b] = c.useState(!1),
      C = ee(u),
      y = Gs(n),
      S = c.useRef(!1),
      [A, E] = c.useState(0);
    return (
      c.useEffect(() => {
        const T = v.current;
        if (T)
          return (
            T.addEventListener(Xn, C),
            () => T.removeEventListener(Xn, C)
          );
      }, [C]),
      p.jsx(Jf, {
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
              const M = new CustomEvent(Xn, qf);
              if ((T.currentTarget.dispatchEvent(M), !M.defaultPrevented)) {
                const O = y().filter((k) => k.focusable),
                  L = O.find((k) => k.active),
                  F = O.find((k) => k.id === m),
                  H = [L, F, ...O].filter(Boolean).map((k) => k.ref.current);
                Ys(H, d);
              }
            }
            S.current = !1;
          }),
          onBlur: R(e.onBlur, () => b(!1)),
        }),
      })
    );
  }),
  Ks = "RovingFocusGroupItem",
  zs = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: s,
        children: a,
        ...i
      } = e,
      l = oe(),
      u = s || l,
      d = ep(Ks, n),
      f = d.currentTabStopId === u,
      v = Gs(n),
      {
        onFocusableItemAdd: h,
        onFocusableItemRemove: g,
        currentTabStopId: m,
      } = d;
    return (
      c.useEffect(() => {
        if (o) return (h(), () => g());
      }, [o, h, g]),
      p.jsx(ro.ItemSlot, {
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
            const w = rp(x, d.orientation, d.dir);
            if (w !== void 0) {
              if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
              x.preventDefault();
              let C = v()
                .filter((y) => y.focusable)
                .map((y) => y.ref.current);
              if (w === "last") C.reverse();
              else if (w === "prev" || w === "next") {
                w === "prev" && C.reverse();
                const y = C.indexOf(x.currentTarget);
                C = d.loop ? sp(C, y + 1) : C.slice(y + 1);
              }
              setTimeout(() => Ys(C));
            }
          }),
          children:
            typeof a == "function"
              ? a({ isCurrentTabStop: f, hasTabStop: m != null })
              : a,
        }),
      })
    );
  });
zs.displayName = Ks;
var np = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function op(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function rp(e, t, n) {
  const o = op(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return np[o];
}
function Ys(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (
      o === n ||
      (o.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function sp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var xn = Us,
  wn = zs,
  so = ["Enter", " "],
  ap = ["ArrowDown", "PageUp", "Home"],
  Xs = ["ArrowUp", "PageDown", "End"],
  ip = [...ap, ...Xs],
  cp = { ltr: [...so, "ArrowRight"], rtl: [...so, "ArrowLeft"] },
  lp = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  It = "Menu",
  [gt, up, dp] = Pt(It),
  [Ue, qs] = X(It, [dp, Ce, je]),
  bn = Ce(),
  Zs = je(),
  [fp, Ke] = Ue(It),
  [pp, Mt] = Ue(It),
  Qs = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: o,
        dir: r,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      i = bn(t),
      [l, u] = c.useState(null),
      d = c.useRef(!1),
      f = ee(s),
      v = Ae(r);
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
      p.jsx(yt, {
        ...i,
        children: p.jsx(fp, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: p.jsx(pp, {
            scope: t,
            onClose: c.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: v,
            modal: a,
            children: o,
          }),
        }),
      })
    );
  };
Qs.displayName = It;
var vp = "MenuAnchor",
  To = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = bn(n);
    return p.jsx(at, { ...r, ...o, ref: t });
  });
To.displayName = vp;
var Io = "MenuPortal",
  [hp, Js] = Ue(Io, { forceMount: void 0 }),
  ea = (e) => {
    const { __scopeMenu: t, forceMount: n, children: o, container: r } = e,
      s = Ke(Io, t);
    return p.jsx(hp, {
      scope: t,
      forceMount: n,
      children: p.jsx(Q, {
        present: n || s.open,
        children: p.jsx(Et, { asChild: !0, container: r, children: o }),
      }),
    });
  };
ea.displayName = Io;
var le = "MenuContent",
  [mp, Mo] = Ue(le),
  ta = c.forwardRef((e, t) => {
    const n = Js(le, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      s = Ke(le, e.__scopeMenu),
      a = Mt(le, e.__scopeMenu);
    return p.jsx(gt.Provider, {
      scope: e.__scopeMenu,
      children: p.jsx(Q, {
        present: o || s.open,
        children: p.jsx(gt.Slot, {
          scope: e.__scopeMenu,
          children: a.modal
            ? p.jsx(gp, { ...r, ref: t })
            : p.jsx(xp, { ...r, ref: t }),
        }),
      }),
    });
  }),
  gp = c.forwardRef((e, t) => {
    const n = Ke(le, e.__scopeMenu),
      o = c.useRef(null),
      r = D(t, o);
    return (
      c.useEffect(() => {
        const s = o.current;
        if (s) return mn(s);
      }, []),
      p.jsx(No, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: R(e.onFocusOutside, (s) => s.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  xp = c.forwardRef((e, t) => {
    const n = Ke(le, e.__scopeMenu);
    return p.jsx(No, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  wp = Ne("MenuContent.ScrollLock"),
  No = c.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: o = !1,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: a,
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
      b = bn(n),
      C = Zs(n),
      y = up(n),
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
      k = g ? { as: wp, allowPinchZoom: !0 } : void 0,
      B = (_) => {
        var j, G;
        const z = M.current + _,
          Z = y().filter((Y) => !Y.disabled),
          ne = document.activeElement,
          Se =
            (j = Z.find((Y) => Y.ref.current === ne)) == null
              ? void 0
              : j.textValue,
          ce = Z.map((Y) => Y.textValue),
          Re = Mp(ce, z, Se),
          re =
            (G = Z.find((Y) => Y.textValue === Re)) == null
              ? void 0
              : G.ref.current;
        ((function Y(W) {
          ((M.current = W),
            window.clearTimeout(I.current),
            W !== "" && (I.current = window.setTimeout(() => Y(""), 1e3)));
        })(z),
          re && setTimeout(() => re.focus()));
      };
    (c.useEffect(() => () => window.clearTimeout(I.current), []), vn());
    const N = c.useCallback((_) => {
      var Z, ne;
      return (
        F.current === ((Z = L.current) == null ? void 0 : Z.side) &&
        Dp(_, (ne = L.current) == null ? void 0 : ne.area)
      );
    }, []);
    return p.jsx(mp, {
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
          onMountAutoFocus: R(s, (_) => {
            var z;
            (_.preventDefault(),
              (z = E.current) == null || z.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: a,
          children: p.jsx(Ge, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: v,
            onDismiss: h,
            children: p.jsx(xn, {
              asChild: !0,
              ...C,
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
                "data-state": ga(x.open),
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
                    Se = _.key.length === 1;
                  Z &&
                    (_.key === "Tab" && _.preventDefault(),
                    !ne && Se && B(_.key));
                  const ce = E.current;
                  if (_.target !== ce || !ip.includes(_.key)) return;
                  _.preventDefault();
                  const re = y()
                    .filter((j) => !j.disabled)
                    .map((j) => j.ref.current);
                  (Xs.includes(_.key) && re.reverse(), Tp(re));
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
ta.displayName = le;
var bp = "MenuGroup",
  Do = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, { role: "group", ...o, ref: t });
  });
Do.displayName = bp;
var Cp = "MenuLabel",
  na = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, { ...o, ref: t });
  });
na.displayName = Cp;
var Xt = "MenuItem",
  Pr = "menu.itemSelect",
  Cn = c.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e,
      s = c.useRef(null),
      a = Mt(Xt, e.__scopeMenu),
      i = Mo(Xt, e.__scopeMenu),
      l = D(t, s),
      u = c.useRef(!1),
      d = () => {
        const f = s.current;
        if (!n && f) {
          const v = new CustomEvent(Pr, { bubbles: !0, cancelable: !0 });
          (f.addEventListener(Pr, (h) => (o == null ? void 0 : o(h)), {
            once: !0,
          }),
            Lr(f, v),
            v.defaultPrevented ? (u.current = !1) : a.onClose());
        }
      };
    return p.jsx(oa, {
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
var oa = c.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e,
      a = Mo(Xt, n),
      i = Zs(n),
      l = c.useRef(null),
      u = D(t, l),
      [d, f] = c.useState(!1),
      [v, h] = c.useState("");
    return (
      c.useEffect(() => {
        const g = l.current;
        g && h((g.textContent ?? "").trim());
      }, [s.children]),
      p.jsx(gt.ItemSlot, {
        scope: n,
        disabled: o,
        textValue: r ?? v,
        children: p.jsx(wn, {
          asChild: !0,
          ...i,
          focusable: !o,
          children: p.jsx(P.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: R(
              e.onPointerMove,
              xt((g) => {
                o
                  ? a.onItemLeave(g)
                  : (a.onItemEnter(g),
                    g.defaultPrevented ||
                      g.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: R(
              e.onPointerLeave,
              xt((g) => a.onItemLeave(g)),
            ),
            onFocus: R(e.onFocus, () => f(!0)),
            onBlur: R(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  yp = "MenuCheckboxItem",
  ra = c.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return p.jsx(la, {
      scope: e.__scopeMenu,
      checked: n,
      children: p.jsx(Cn, {
        role: "menuitemcheckbox",
        "aria-checked": qt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": jo(n),
        onSelect: R(
          r.onSelect,
          () => (o == null ? void 0 : o(qt(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
ra.displayName = yp;
var sa = "MenuRadioGroup",
  [Sp, Rp] = Ue(sa, { value: void 0, onValueChange: () => {} }),
  aa = c.forwardRef((e, t) => {
    const { value: n, onValueChange: o, ...r } = e,
      s = ee(o);
    return p.jsx(Sp, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: s,
      children: p.jsx(Do, { ...r, ref: t }),
    });
  });
aa.displayName = sa;
var ia = "MenuRadioItem",
  ca = c.forwardRef((e, t) => {
    const { value: n, ...o } = e,
      r = Rp(ia, e.__scopeMenu),
      s = n === r.value;
    return p.jsx(la, {
      scope: e.__scopeMenu,
      checked: s,
      children: p.jsx(Cn, {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": jo(s),
        onSelect: R(
          o.onSelect,
          () => {
            var a;
            return (a = r.onValueChange) == null ? void 0 : a.call(r, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
ca.displayName = ia;
var Oo = "MenuItemIndicator",
  [la, Ep] = Ue(Oo, { checked: !1 }),
  ua = c.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e,
      s = Ep(Oo, n);
    return p.jsx(Q, {
      present: o || qt(s.checked) || s.checked === !0,
      children: p.jsx(P.span, { ...r, ref: t, "data-state": jo(s.checked) }),
    });
  });
ua.displayName = Oo;
var Pp = "MenuSeparator",
  da = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return p.jsx(P.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...o,
      ref: t,
    });
  });
da.displayName = Pp;
var Ap = "MenuArrow",
  fa = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = bn(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
fa.displayName = Ap;
var _p = "MenuSub",
  [Hm, pa] = Ue(_p),
  ft = "MenuSubTrigger",
  va = c.forwardRef((e, t) => {
    const n = Ke(ft, e.__scopeMenu),
      o = Mt(ft, e.__scopeMenu),
      r = pa(ft, e.__scopeMenu),
      s = Mo(ft, e.__scopeMenu),
      a = c.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = s,
      u = { __scopeMenu: e.__scopeMenu },
      d = c.useCallback(() => {
        (a.current && window.clearTimeout(a.current), (a.current = null));
      }, []);
    return (
      c.useEffect(() => d, [d]),
      c.useEffect(() => {
        const f = i.current;
        return () => {
          (window.clearTimeout(f), l(null));
        };
      }, [i, l]),
      p.jsx(To, {
        asChild: !0,
        ...u,
        children: p.jsx(oa, {
          id: r.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": r.contentId,
          "data-state": ga(n.open),
          ...e,
          ref: an(t, r.onTriggerChange),
          onClick: (f) => {
            var v;
            ((v = e.onClick) == null || v.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: R(
            e.onPointerMove,
            xt((f) => {
              (s.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !a.current &&
                  (s.onPointerGraceIntentChange(null),
                  (a.current = window.setTimeout(() => {
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
                  C = v[x ? "right" : "left"];
                (s.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + w, y: f.clientY },
                    { x: b, y: v.top },
                    { x: C, y: v.top },
                    { x: C, y: v.bottom },
                    { x: b, y: v.bottom },
                  ],
                  side: m,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(
                    () => s.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((s.onTriggerLeave(f), f.defaultPrevented)) return;
                s.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: R(e.onKeyDown, (f) => {
            var h;
            const v = s.searchRef.current !== "";
            e.disabled ||
              (v && f.key === " ") ||
              (cp[o.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (h = n.content) == null || h.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
va.displayName = ft;
var ha = "MenuSubContent",
  ma = c.forwardRef((e, t) => {
    const n = Js(le, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      s = Ke(le, e.__scopeMenu),
      a = Mt(le, e.__scopeMenu),
      i = pa(ha, e.__scopeMenu),
      l = c.useRef(null),
      u = D(t, l);
    return p.jsx(gt.Provider, {
      scope: e.__scopeMenu,
      children: p.jsx(Q, {
        present: o || s.open,
        children: p.jsx(gt.Slot, {
          scope: e.__scopeMenu,
          children: p.jsx(No, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...r,
            ref: u,
            align: "start",
            side: a.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              var f;
              (a.isUsingKeyboardRef.current &&
                ((f = l.current) == null || f.focus()),
                d.preventDefault());
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: R(e.onFocusOutside, (d) => {
              d.target !== i.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: R(e.onEscapeKeyDown, (d) => {
              (a.onClose(), d.preventDefault());
            }),
            onKeyDown: R(e.onKeyDown, (d) => {
              var h;
              const f = d.currentTarget.contains(d.target),
                v = lp[a.dir].includes(d.key);
              f &&
                v &&
                (s.onOpenChange(!1),
                (h = i.trigger) == null || h.focus(),
                d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
ma.displayName = ha;
function ga(e) {
  return e ? "open" : "closed";
}
function qt(e) {
  return e === "indeterminate";
}
function jo(e) {
  return qt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Tp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ip(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Mp(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let a = Ip(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
function Np(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s],
      l = t[a],
      u = i.x,
      d = i.y,
      f = l.x,
      v = l.y;
    d > o != v > o && n < ((f - u) * (o - d)) / (v - d) + u && (r = !r);
  }
  return r;
}
function Dp(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Np(n, t);
}
function xt(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Op = Qs,
  jp = To,
  kp = ea,
  Lp = ta,
  Fp = Do,
  $p = na,
  Bp = Cn,
  Hp = ra,
  Vp = aa,
  Wp = ca,
  Gp = ua,
  Up = da,
  Kp = fa,
  zp = va,
  Yp = ma,
  yn = "DropdownMenu",
  [Xp] = X(yn, [qs]),
  te = qs(),
  [qp, xa] = Xp(yn),
  wa = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: o,
        open: r,
        defaultOpen: s,
        onOpenChange: a,
        modal: i = !0,
      } = e,
      l = te(t),
      u = c.useRef(null),
      [d, f] = J({ prop: r, defaultProp: s ?? !1, onChange: a, caller: yn });
    return p.jsx(qp, {
      scope: t,
      triggerId: oe(),
      triggerRef: u,
      contentId: oe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((v) => !v), [f]),
      modal: i,
      children: p.jsx(Op, {
        ...l,
        open: d,
        onOpenChange: f,
        dir: o,
        modal: i,
        children: n,
      }),
    });
  };
wa.displayName = yn;
var ba = "DropdownMenuTrigger",
  Ca = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e,
      s = xa(ba, n),
      a = te(n);
    return p.jsx(jp, {
      asChild: !0,
      ...a,
      children: p.jsx(P.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: an(t, s.triggerRef),
        onPointerDown: R(e.onPointerDown, (i) => {
          !o &&
            i.button === 0 &&
            i.ctrlKey === !1 &&
            (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: R(e.onKeyDown, (i) => {
          o ||
            (["Enter", " "].includes(i.key) && s.onOpenToggle(),
            i.key === "ArrowDown" && s.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        }),
      }),
    });
  });
Ca.displayName = ba;
var Zp = "DropdownMenuPortal",
  ya = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = te(t);
    return p.jsx(kp, { ...o, ...n });
  };
ya.displayName = Zp;
var Sa = "DropdownMenuContent",
  Ra = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = xa(Sa, n),
      s = te(n),
      a = c.useRef(!1);
    return p.jsx(Lp, {
      id: r.contentId,
      "aria-labelledby": r.triggerId,
      ...s,
      ...o,
      ref: t,
      onCloseAutoFocus: R(e.onCloseAutoFocus, (i) => {
        var l;
        (a.current || (l = r.triggerRef.current) == null || l.focus(),
          (a.current = !1),
          i.preventDefault());
      }),
      onInteractOutside: R(e.onInteractOutside, (i) => {
        const l = i.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          d = l.button === 2 || u;
        (!r.modal || d) && (a.current = !0);
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
Ra.displayName = Sa;
var Qp = "DropdownMenuGroup",
  Ea = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Fp, { ...r, ...o, ref: t });
  });
Ea.displayName = Qp;
var Jp = "DropdownMenuLabel",
  Pa = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx($p, { ...r, ...o, ref: t });
  });
Pa.displayName = Jp;
var ev = "DropdownMenuItem",
  Aa = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Bp, { ...r, ...o, ref: t });
  });
Aa.displayName = ev;
var tv = "DropdownMenuCheckboxItem",
  _a = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Hp, { ...r, ...o, ref: t });
  });
_a.displayName = tv;
var nv = "DropdownMenuRadioGroup",
  ov = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Vp, { ...r, ...o, ref: t });
  });
ov.displayName = nv;
var rv = "DropdownMenuRadioItem",
  Ta = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Wp, { ...r, ...o, ref: t });
  });
Ta.displayName = rv;
var sv = "DropdownMenuItemIndicator",
  Ia = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Gp, { ...r, ...o, ref: t });
  });
Ia.displayName = sv;
var av = "DropdownMenuSeparator",
  Ma = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Up, { ...r, ...o, ref: t });
  });
Ma.displayName = av;
var iv = "DropdownMenuArrow",
  cv = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Kp, { ...r, ...o, ref: t });
  });
cv.displayName = iv;
var lv = "DropdownMenuSubTrigger",
  Na = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(zp, { ...r, ...o, ref: t });
  });
Na.displayName = lv;
var uv = "DropdownMenuSubContent",
  Da = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = te(n);
    return p.jsx(Yp, {
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
Da.displayName = uv;
var Vm = wa,
  Wm = Ca,
  Gm = ya,
  Um = Ra,
  Km = Ea,
  zm = Pa,
  Ym = Aa,
  Xm = _a,
  qm = Ta,
  Zm = Ia,
  Qm = Ma,
  Jm = Na,
  eg = Da,
  Sn = "Tabs",
  [dv] = X(Sn, [je]),
  Oa = je(),
  [fv, ko] = dv(Sn),
  ja = c.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: o,
        onValueChange: r,
        defaultValue: s,
        orientation: a = "horizontal",
        dir: i,
        activationMode: l = "automatic",
        ...u
      } = e,
      d = Ae(i),
      [f, v] = J({ prop: o, onChange: r, defaultProp: s ?? "", caller: Sn });
    return p.jsx(fv, {
      scope: n,
      baseId: oe(),
      value: f,
      onValueChange: v,
      orientation: a,
      dir: d,
      activationMode: l,
      children: p.jsx(P.div, { dir: d, "data-orientation": a, ...u, ref: t }),
    });
  });
ja.displayName = Sn;
var ka = "TabsList",
  La = c.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e,
      s = ko(ka, n),
      a = Oa(n);
    return p.jsx(xn, {
      asChild: !0,
      ...a,
      orientation: s.orientation,
      dir: s.dir,
      loop: o,
      children: p.jsx(P.div, {
        role: "tablist",
        "aria-orientation": s.orientation,
        ...r,
        ref: t,
      }),
    });
  });
La.displayName = ka;
var Fa = "TabsTrigger",
  $a = c.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...s } = e,
      a = ko(Fa, n),
      i = Oa(n),
      l = Va(a.baseId, o),
      u = Wa(a.baseId, o),
      d = o === a.value;
    return p.jsx(wn, {
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
        ...s,
        ref: t,
        onMouseDown: R(e.onMouseDown, (f) => {
          !r && f.button === 0 && f.ctrlKey === !1
            ? a.onValueChange(o)
            : f.preventDefault();
        }),
        onKeyDown: R(e.onKeyDown, (f) => {
          [" ", "Enter"].includes(f.key) && a.onValueChange(o);
        }),
        onFocus: R(e.onFocus, () => {
          const f = a.activationMode !== "manual";
          !d && !r && f && a.onValueChange(o);
        }),
      }),
    });
  });
$a.displayName = Fa;
var Ba = "TabsContent",
  Ha = c.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: s, ...a } = e,
      i = ko(Ba, n),
      l = Va(i.baseId, o),
      u = Wa(i.baseId, o),
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
            ...a,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: v && s,
          }),
      })
    );
  });
Ha.displayName = Ba;
function Va(e, t) {
  return `${e}-trigger-${t}`;
}
function Wa(e, t) {
  return `${e}-content-${t}`;
}
var tg = ja,
  ng = La,
  og = $a,
  rg = Ha,
  Lo = "Progress",
  Fo = 100,
  [pv] = X(Lo),
  [vv, hv] = pv(Lo),
  Ga = c.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: s = mv,
      ...a
    } = e;
    (r || r === 0) && !Ar(r) && console.error(gv(`${r}`, "Progress"));
    const i = Ar(r) ? r : Fo;
    o !== null && !_r(o, i) && console.error(xv(`${o}`, "Progress"));
    const l = _r(o, i) ? o : null,
      u = Zt(l) ? s(l, i) : void 0;
    return p.jsx(vv, {
      scope: n,
      value: l,
      max: i,
      children: p.jsx(P.div, {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Zt(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": za(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...a,
        ref: t,
      }),
    });
  });
Ga.displayName = Lo;
var Ua = "ProgressIndicator",
  Ka = c.forwardRef((e, t) => {
    const { __scopeProgress: n, ...o } = e,
      r = hv(Ua, n);
    return p.jsx(P.div, {
      "data-state": za(r.value, r.max),
      "data-value": r.value ?? void 0,
      "data-max": r.max,
      ...o,
      ref: t,
    });
  });
Ka.displayName = Ua;
function mv(e, t) {
  return `${Math.round((e / t) * 100)}%`;
}
function za(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Zt(e) {
  return typeof e == "number";
}
function Ar(e) {
  return Zt(e) && !isNaN(e) && e > 0;
}
function _r(e, t) {
  return Zt(e) && !isNaN(e) && e <= t && e >= 0;
}
function gv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Fo}\`.`;
}
function xv(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Fo} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var sg = Ga,
  ag = Ka;
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
var wv = [" ", "Enter", "ArrowUp", "ArrowDown"],
  bv = [" ", "Enter"],
  Ve = "Select",
  [Rn, En, Cv] = Pt(Ve),
  [it] = X(Ve, [Cv, Ce]),
  Pn = Ce(),
  [yv, ke] = it(Ve),
  [Sv, Rv] = it(Ve),
  Ya = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: s,
        value: a,
        defaultValue: i,
        onValueChange: l,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: v,
        required: h,
        form: g,
      } = e,
      m = Pn(t),
      [x, w] = c.useState(null),
      [b, C] = c.useState(null),
      [y, S] = c.useState(!1),
      A = Ae(u),
      [E, T] = J({ prop: o, defaultProp: r ?? !1, onChange: s, caller: Ve }),
      [I, M] = J({ prop: a, defaultProp: i, onChange: l, caller: Ve }),
      O = c.useRef(null),
      L = x ? g || !!x.closest("form") : !0,
      [F, $] = c.useState(new Set()),
      H = Array.from(F)
        .map((k) => k.props.value)
        .join(";");
    return p.jsx(yt, {
      ...m,
      children: p.jsxs(yv, {
        required: h,
        scope: t,
        trigger: x,
        onTriggerChange: w,
        valueNode: b,
        onValueNodeChange: C,
        valueNodeHasChildren: y,
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
          p.jsx(Rn.Provider, {
            scope: t,
            children: p.jsx(Sv, {
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
                xi,
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
Ya.displayName = Ve;
var Xa = "SelectTrigger",
  qa = c.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e,
      s = Pn(n),
      a = ke(Xa, n),
      i = a.disabled || o,
      l = D(t, a.onTriggerChange),
      u = En(n),
      d = c.useRef("touch"),
      [f, v, h] = bi((m) => {
        const x = u().filter((C) => !C.disabled),
          w = x.find((C) => C.value === a.value),
          b = Ci(x, m, w);
        b !== void 0 && a.onValueChange(b.value);
      }),
      g = (m) => {
        (i || (a.onOpenChange(!0), h()),
          m &&
            (a.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            }));
      };
    return p.jsx(at, {
      asChild: !0,
      ...s,
      children: p.jsx(P.button, {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": wi(a.value) ? "" : void 0,
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
              wv.includes(m.key) &&
              (g(), m.preventDefault()));
        }),
      }),
    });
  });
qa.displayName = Xa;
var Za = "SelectValue",
  Qa = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: r,
        children: s,
        placeholder: a = "",
        ...i
      } = e,
      l = ke(Za, n),
      { onValueNodeHasChildrenChange: u } = l,
      d = s !== void 0,
      f = D(t, l.onValueNodeChange);
    return (
      q(() => {
        u(d);
      }, [u, d]),
      p.jsx(P.span, {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: wi(l.value) ? p.jsx(p.Fragment, { children: a }) : s,
      })
    );
  });
Qa.displayName = Za;
var Ev = "SelectIcon",
  Ja = c.forwardRef((e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return p.jsx(P.span, {
      "aria-hidden": !0,
      ...r,
      ref: t,
      children: o || "▼",
    });
  });
Ja.displayName = Ev;
var Pv = "SelectPortal",
  ei = (e) => p.jsx(Et, { asChild: !0, ...e });
ei.displayName = Pv;
var We = "SelectContent",
  ti = c.forwardRef((e, t) => {
    const n = ke(We, e.__scopeSelect),
      [o, r] = c.useState();
    if (
      (q(() => {
        r(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = o;
      return s
        ? sn.createPortal(
            p.jsx(ni, {
              scope: e.__scopeSelect,
              children: p.jsx(Rn.Slot, {
                scope: e.__scopeSelect,
                children: p.jsx("div", { children: e.children }),
              }),
            }),
            s,
          )
        : null;
    }
    return p.jsx(oi, { ...e, ref: t });
  });
ti.displayName = We;
var de = 10,
  [ni, Le] = it(We),
  Av = "SelectContentImpl",
  _v = Ne("SelectContent.RemoveScroll"),
  oi = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: r,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
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
      [C, y] = c.useState(null),
      [S, A] = c.useState(null),
      E = D(t, (j) => y(j)),
      [T, I] = c.useState(null),
      [M, O] = c.useState(null),
      L = En(n),
      [F, $] = c.useState(!1),
      H = c.useRef(!1);
    (c.useEffect(() => {
      if (C) return mn(C);
    }, [C]),
      vn());
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
      B = c.useCallback(() => k([T, C]), [k, T, C]);
    c.useEffect(() => {
      F && B();
    }, [F, B]);
    const { onOpenChange: N, triggerPointerDownPosRef: _ } = b;
    (c.useEffect(() => {
      if (C) {
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
              : C.contains(W.target) || N(!1),
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
    }, [C, N, _]),
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
    const [z, Z] = bi((j) => {
        const G = L().filter((U) => !U.disabled),
          Y = G.find((U) => U.ref.current === document.activeElement),
          W = Ci(G, j, Y);
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
      Se = c.useCallback(() => (C == null ? void 0 : C.focus()), [C]),
      ce = c.useCallback(
        (j, G, Y) => {
          const W = !H.current && !Y;
          ((b.value !== void 0 && b.value === G) || W) && O(j);
        },
        [b.value],
      ),
      Re = o === "popper" ? ao : ri,
      re =
        Re === ao
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
    return p.jsx(ni, {
      scope: n,
      content: C,
      viewport: S,
      onViewportChange: A,
      itemRefCallback: ne,
      selectedItem: T,
      onItemLeave: Se,
      itemTextRefCallback: ce,
      focusSelectedItem: B,
      selectedItemText: M,
      position: o,
      isPositioned: F,
      searchRef: z,
      children: p.jsx(_t, {
        as: _v,
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
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: (j) => j.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: p.jsx(Re, {
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
oi.displayName = Av;
var Tv = "SelectItemAlignedPosition",
  ri = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...r } = e,
      s = ke(We, n),
      a = Le(We, n),
      [i, l] = c.useState(null),
      [u, d] = c.useState(null),
      f = D(t, (E) => d(E)),
      v = En(n),
      h = c.useRef(!1),
      g = c.useRef(!0),
      {
        viewport: m,
        selectedItem: x,
        selectedItemText: w,
        focusSelectedItem: b,
      } = a,
      C = c.useCallback(() => {
        if (s.trigger && s.valueNode && i && u && m && x && w) {
          const E = s.trigger.getBoundingClientRect(),
            T = u.getBoundingClientRect(),
            I = s.valueNode.getBoundingClientRect(),
            M = w.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const U = M.left - T.left,
              K = I.left - U,
              se = E.left - K,
              me = E.width + se,
              lt = Math.max(me, T.width),
              ut = window.innerWidth - de,
              dt = wt(K, [de, Math.max(de, ut - lt)]);
            ((i.style.minWidth = me + "px"), (i.style.left = dt + "px"));
          } else {
            const U = T.right - M.right,
              K = window.innerWidth - I.right - U,
              se = window.innerWidth - E.right - K,
              me = E.width + se,
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
            Se = parseInt(Z.paddingBottom, 10),
            ce = E.top + E.height / 2 - de,
            Re = L - ce,
            re = x.offsetHeight / 2,
            j = x.offsetTop + re,
            G = H + k + j,
            Y = _ - G;
          if (G <= ce) {
            const U = O.length > 0 && x === O[O.length - 1].ref.current;
            i.style.bottom = "0px";
            const K = u.clientHeight - m.offsetTop - m.offsetHeight,
              se = Math.max(Re, re + (U ? Se : 0) + K + B),
              me = G + se;
            i.style.height = me + "px";
          } else {
            const U = O.length > 0 && x === O[0].ref.current;
            i.style.top = "0px";
            const se = Math.max(ce, H + m.offsetTop + (U ? ne : 0) + re) + Y;
            ((i.style.height = se + "px"),
              (m.scrollTop = G - ce + m.offsetTop));
          }
          ((i.style.margin = `${de}px 0`),
            (i.style.minHeight = z + "px"),
            (i.style.maxHeight = L + "px"),
            o == null || o(),
            requestAnimationFrame(() => (h.current = !0)));
        }
      }, [v, s.trigger, s.valueNode, i, u, m, x, w, s.dir, o]);
    q(() => C(), [C]);
    const [y, S] = c.useState();
    q(() => {
      u && S(window.getComputedStyle(u).zIndex);
    }, [u]);
    const A = c.useCallback(
      (E) => {
        E && g.current === !0 && (C(), b == null || b(), (g.current = !1));
      },
      [C, b],
    );
    return p.jsx(Mv, {
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
          zIndex: y,
        },
        children: p.jsx(P.div, {
          ...r,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
        }),
      }),
    });
  });
ri.displayName = Tv;
var Iv = "SelectPopperPosition",
  ao = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: r = de,
        ...s
      } = e,
      a = Pn(n);
    return p.jsx(St, {
      ...a,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        boxSizing: "border-box",
        ...s.style,
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
ao.displayName = Iv;
var [Mv, $o] = it(We, {}),
  io = "SelectViewport",
  si = c.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e,
      s = Le(io, n),
      a = $o(io, n),
      i = D(t, s.onViewportChange),
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
        p.jsx(Rn.Slot, {
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
                { contentWrapper: f, shouldExpandOnScrollRef: v } = a;
              if (v != null && v.current && f) {
                const h = Math.abs(l.current - d.scrollTop);
                if (h > 0) {
                  const g = window.innerHeight - de * 2,
                    m = parseFloat(f.style.minHeight),
                    x = parseFloat(f.style.height),
                    w = Math.max(m, x);
                  if (w < g) {
                    const b = w + h,
                      C = Math.min(g, b),
                      y = b - C;
                    ((f.style.height = C + "px"),
                      f.style.bottom === "0px" &&
                        ((d.scrollTop = y > 0 ? y : 0),
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
si.displayName = io;
var ai = "SelectGroup",
  [Nv, Dv] = it(ai),
  Ov = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = oe();
    return p.jsx(Nv, {
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
Ov.displayName = ai;
var ii = "SelectLabel",
  ci = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Dv(ii, n);
    return p.jsx(P.div, { id: r.id, ...o, ref: t });
  });
ci.displayName = ii;
var Qt = "SelectItem",
  [jv, li] = it(Qt),
  ui = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: r = !1,
        textValue: s,
        ...a
      } = e,
      i = ke(Qt, n),
      l = Le(Qt, n),
      u = i.value === o,
      [d, f] = c.useState(s ?? ""),
      [v, h] = c.useState(!1),
      g = D(t, (b) => {
        var C;
        return (C = l.itemRefCallback) == null ? void 0 : C.call(l, b, o, r);
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
    return p.jsx(jv, {
      scope: n,
      value: o,
      disabled: r,
      textId: m,
      isSelected: u,
      onItemTextChange: c.useCallback((b) => {
        f((C) => C || ((b == null ? void 0 : b.textContent) ?? "").trim());
      }, []),
      children: p.jsx(Rn.ItemSlot, {
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
          ...a,
          ref: g,
          onFocus: R(a.onFocus, () => h(!0)),
          onBlur: R(a.onBlur, () => h(!1)),
          onClick: R(a.onClick, () => {
            x.current !== "mouse" && w();
          }),
          onPointerUp: R(a.onPointerUp, () => {
            x.current === "mouse" && w();
          }),
          onPointerDown: R(a.onPointerDown, (b) => {
            x.current = b.pointerType;
          }),
          onPointerMove: R(a.onPointerMove, (b) => {
            var C;
            ((x.current = b.pointerType),
              r
                ? (C = l.onItemLeave) == null || C.call(l)
                : x.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: R(a.onPointerLeave, (b) => {
            var C;
            b.currentTarget === document.activeElement &&
              ((C = l.onItemLeave) == null || C.call(l));
          }),
          onKeyDown: R(a.onKeyDown, (b) => {
            var y;
            (((y = l.searchRef) == null ? void 0 : y.current) !== "" &&
              b.key === " ") ||
              (bv.includes(b.key) && w(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
ui.displayName = Qt;
var pt = "SelectItemText",
  di = c.forwardRef((e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e,
      a = ke(pt, n),
      i = Le(pt, n),
      l = li(pt, n),
      u = Rv(pt, n),
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
          p.jsx(P.span, { id: l.textId, ...s, ref: v }),
          l.isSelected && a.valueNode && !a.valueNodeHasChildren
            ? sn.createPortal(s.children, a.valueNode)
            : null,
        ],
      })
    );
  });
di.displayName = pt;
var fi = "SelectItemIndicator",
  pi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return li(fi, n).isSelected
      ? p.jsx(P.span, { "aria-hidden": !0, ...o, ref: t })
      : null;
  });
pi.displayName = fi;
var co = "SelectScrollUpButton",
  vi = c.forwardRef((e, t) => {
    const n = Le(co, e.__scopeSelect),
      o = $o(co, e.__scopeSelect),
      [r, s] = c.useState(!1),
      a = D(t, o.onScrollButtonChange);
    return (
      q(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = l.scrollTop > 0;
            s(u);
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
        ? p.jsx(mi, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = n;
              i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
vi.displayName = co;
var lo = "SelectScrollDownButton",
  hi = c.forwardRef((e, t) => {
    const n = Le(lo, e.__scopeSelect),
      o = $o(lo, e.__scopeSelect),
      [r, s] = c.useState(!1),
      a = D(t, o.onScrollButtonChange);
    return (
      q(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = l.scrollHeight - l.clientHeight,
              d = Math.ceil(l.scrollTop) < u;
            s(d);
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
        ? p.jsx(mi, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = n;
              i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
hi.displayName = lo;
var mi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
      s = Le("SelectScrollButton", n),
      a = c.useRef(null),
      i = En(n),
      l = c.useCallback(() => {
        a.current !== null &&
          (window.clearInterval(a.current), (a.current = null));
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
          a.current === null && (a.current = window.setInterval(o, 50));
        }),
        onPointerMove: R(r.onPointerMove, () => {
          var u;
          ((u = s.onItemLeave) == null || u.call(s),
            a.current === null && (a.current = window.setInterval(o, 50)));
        }),
        onPointerLeave: R(r.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  kv = "SelectSeparator",
  gi = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return p.jsx(P.div, { "aria-hidden": !0, ...o, ref: t });
  });
gi.displayName = kv;
var uo = "SelectArrow",
  Lv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Pn(n),
      s = ke(uo, n),
      a = Le(uo, n);
    return s.open && a.position === "popper"
      ? p.jsx(Rt, { ...r, ...o, ref: t })
      : null;
  });
Lv.displayName = uo;
var Fv = "SelectBubbleInput",
  xi = c.forwardRef(({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = c.useRef(null),
      s = D(o, r),
      a = Nt(t);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (!i) return;
        const l = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== t && d) {
          const f = new Event("change", { bubbles: !0 });
          (d.call(i, t), i.dispatchEvent(f));
        }
      }, [a, t]),
      p.jsx(P.select, {
        ...n,
        style: { ...is, ...n.style },
        ref: s,
        defaultValue: t,
      })
    );
  });
xi.displayName = Fv;
function wi(e) {
  return e === "" || e === void 0;
}
function bi(e) {
  const t = ee(e),
    n = c.useRef(""),
    o = c.useRef(0),
    r = c.useCallback(
      (a) => {
        const i = n.current + a;
        (t(i),
          (function l(u) {
            ((n.current = u),
              window.clearTimeout(o.current),
              u !== "" && (o.current = window.setTimeout(() => l(""), 1e3)));
          })(i));
      },
      [t],
    ),
    s = c.useCallback(() => {
      ((n.current = ""), window.clearTimeout(o.current));
    }, []);
  return (
    c.useEffect(() => () => window.clearTimeout(o.current), []),
    [n, r, s]
  );
}
function Ci(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let a = $v(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) =>
    u.textValue.toLowerCase().startsWith(r.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function $v(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var ig = Ya,
  cg = qa,
  lg = Qa,
  ug = Ja,
  dg = ei,
  fg = ti,
  pg = si,
  vg = ci,
  hg = ui,
  mg = di,
  gg = pi,
  xg = vi,
  wg = hi,
  bg = gi,
  Bv = "Label",
  yi = c.forwardRef((e, t) =>
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
yi.displayName = Bv;
var Cg = yi;
function Hv() {
  return $d.useSyncExternalStore(
    Vv,
    () => !0,
    () => !1,
  );
}
function Vv() {
  return () => {};
}
var Bo = "Avatar",
  [Wv] = X(Bo),
  [Gv, Si] = Wv(Bo),
  Ri = c.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...o } = e,
      [r, s] = c.useState("idle");
    return p.jsx(Gv, {
      scope: n,
      imageLoadingStatus: r,
      onImageLoadingStatusChange: s,
      children: p.jsx(P.span, { ...o, ref: t }),
    });
  });
Ri.displayName = Bo;
var Ei = "AvatarImage",
  Pi = c.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: o,
        onLoadingStatusChange: r = () => {},
        ...s
      } = e,
      a = Si(Ei, n),
      i = Uv(o, s),
      l = ee((u) => {
        (r(u), a.onImageLoadingStatusChange(u));
      });
    return (
      q(() => {
        i !== "idle" && l(i);
      }, [i, l]),
      i === "loaded" ? p.jsx(P.img, { ...s, ref: t, src: o }) : null
    );
  });
Pi.displayName = Ei;
var Ai = "AvatarFallback",
  _i = c.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: o, ...r } = e,
      s = Si(Ai, n),
      [a, i] = c.useState(o === void 0);
    return (
      c.useEffect(() => {
        if (o !== void 0) {
          const l = window.setTimeout(() => i(!0), o);
          return () => window.clearTimeout(l);
        }
      }, [o]),
      a && s.imageLoadingStatus !== "loaded"
        ? p.jsx(P.span, { ...r, ref: t })
        : null
    );
  });
_i.displayName = Ai;
function Tr(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t),
        e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function Uv(e, { referrerPolicy: t, crossOrigin: n }) {
  const o = Hv(),
    r = c.useRef(null),
    s = o ? (r.current || (r.current = new window.Image()), r.current) : null,
    [a, i] = c.useState(() => Tr(s, e));
  return (
    q(() => {
      i(Tr(s, e));
    }, [s, e]),
    q(() => {
      const l = (f) => () => {
        i(f);
      };
      if (!s) return;
      const u = l("loaded"),
        d = l("error");
      return (
        s.addEventListener("load", u),
        s.addEventListener("error", d),
        t && (s.referrerPolicy = t),
        typeof n == "string" && (s.crossOrigin = n),
        () => {
          (s.removeEventListener("load", u), s.removeEventListener("error", d));
        }
      );
    }, [s, n, t]),
    a
  );
}
var yg = Ri,
  Sg = Pi,
  Rg = _i,
  An = "Switch",
  [Kv] = X(An),
  [zv, Yv] = Kv(An),
  Ti = c.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: o,
        checked: r,
        defaultChecked: s,
        required: a,
        disabled: i,
        value: l = "on",
        onCheckedChange: u,
        form: d,
        ...f
      } = e,
      [v, h] = c.useState(null),
      g = D(t, (C) => h(C)),
      m = c.useRef(!1),
      x = v ? d || !!v.closest("form") : !0,
      [w, b] = J({ prop: r, defaultProp: s ?? !1, onChange: u, caller: An });
    return p.jsxs(zv, {
      scope: n,
      checked: w,
      disabled: i,
      children: [
        p.jsx(P.button, {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": Di(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: g,
          onClick: R(e.onClick, (C) => {
            (b((y) => !y),
              x &&
                ((m.current = C.isPropagationStopped()),
                m.current || C.stopPropagation()));
          }),
        }),
        x &&
          p.jsx(Ni, {
            control: v,
            bubbles: !m.current,
            name: o,
            value: l,
            checked: w,
            required: a,
            disabled: i,
            form: d,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Ti.displayName = An;
var Ii = "SwitchThumb",
  Mi = c.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...o } = e,
      r = Yv(Ii, n);
    return p.jsx(P.span, {
      "data-state": Di(r.checked),
      "data-disabled": r.disabled ? "" : void 0,
      ...o,
      ref: t,
    });
  });
Mi.displayName = Ii;
var Xv = "SwitchBubbleInput",
  Ni = c.forwardRef(
    (
      { __scopeSwitch: e, control: t, checked: n, bubbles: o = !0, ...r },
      s,
    ) => {
      const a = c.useRef(null),
        i = D(a, s),
        l = Nt(n),
        u = Ct(t);
      return (
        c.useEffect(() => {
          const d = a.current;
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
Ni.displayName = Xv;
function Di(e) {
  return e ? "checked" : "unchecked";
}
var Eg = Ti,
  Pg = Mi,
  qv = "Separator",
  Ir = "horizontal",
  Zv = ["horizontal", "vertical"],
  Oi = c.forwardRef((e, t) => {
    const { decorative: n, orientation: o = Ir, ...r } = e,
      s = Qv(o) ? o : Ir,
      i = n
        ? { role: "none" }
        : {
            "aria-orientation": s === "vertical" ? s : void 0,
            role: "separator",
          };
    return p.jsx(P.div, { "data-orientation": s, ...i, ...r, ref: t });
  });
Oi.displayName = qv;
function Qv(e) {
  return Zv.includes(e);
}
var Ag = Oi,
  ji = ["PageUp", "PageDown"],
  ki = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Li = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  ct = "Slider",
  [fo, Jv, eh] = Pt(ct),
  [Fi] = X(ct, [eh]),
  [th, _n] = Fi(ct),
  $i = c.forwardRef((e, t) => {
    const {
        name: n,
        min: o = 0,
        max: r = 100,
        step: s = 1,
        orientation: a = "horizontal",
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
      C = a === "horizontal" ? nh : oh,
      [y = [], S] = J({
        prop: d,
        defaultProp: u,
        onChange: (O) => {
          var F;
          ((F = [...x.current][w.current]) == null || F.focus(), f(O));
        },
      }),
      A = c.useRef(y);
    function E(O) {
      const L = ch(y, O);
      M(O, L);
    }
    function T(O) {
      M(O, w.current);
    }
    function I() {
      const O = A.current[w.current];
      y[w.current] !== O && v(y);
    }
    function M(O, L, { commit: F } = { commit: !1 }) {
      const $ = fh(s),
        H = ph(Math.round((O - o) / s) * s + o, $),
        k = wt(H, [o, r]);
      S((B = []) => {
        const N = ah(B, k, L);
        if (dh(N, l * s)) {
          w.current = N.indexOf(k);
          const _ = String(N) !== String(B);
          return (_ && F && v(N), _ ? N : B);
        } else return B;
      });
    }
    return p.jsx(th, {
      scope: e.__scopeSlider,
      name: n,
      disabled: i,
      min: o,
      max: r,
      valueIndexToChangeRef: w,
      thumbs: x.current,
      values: y,
      orientation: a,
      form: g,
      children: p.jsx(fo.Provider, {
        scope: e.__scopeSlider,
        children: p.jsx(fo.Slot, {
          scope: e.__scopeSlider,
          children: p.jsx(C, {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...m,
            ref: t,
            onPointerDown: R(m.onPointerDown, () => {
              i || (A.current = y);
            }),
            min: o,
            max: r,
            inverted: h,
            onSlideStart: i ? void 0 : E,
            onSlideMove: i ? void 0 : T,
            onSlideEnd: i ? void 0 : I,
            onHomeKeyDown: () => !i && M(o, 0, { commit: !0 }),
            onEndKeyDown: () => !i && M(r, y.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: O, direction: L }) => {
              if (!i) {
                const H =
                    ji.includes(O.key) || (O.shiftKey && ki.includes(O.key))
                      ? 10
                      : 1,
                  k = w.current,
                  B = y[k],
                  N = s * H * L;
                M(B + N, k, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
$i.displayName = ct;
var [Bi, Hi] = Fi(ct, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  nh = c.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        dir: r,
        inverted: s,
        onSlideStart: a,
        onSlideMove: i,
        onSlideEnd: l,
        onStepKeyDown: u,
        ...d
      } = e,
      [f, v] = c.useState(null),
      h = D(t, (C) => v(C)),
      g = c.useRef(void 0),
      m = Ae(r),
      x = m === "ltr",
      w = (x && !s) || (!x && s);
    function b(C) {
      const y = g.current || f.getBoundingClientRect(),
        S = [0, y.width],
        E = Ho(S, w ? [n, o] : [o, n]);
      return ((g.current = y), E(C - y.left));
    }
    return p.jsx(Bi, {
      scope: e.__scopeSlider,
      startEdge: w ? "left" : "right",
      endEdge: w ? "right" : "left",
      direction: w ? 1 : -1,
      size: "width",
      children: p.jsx(Vi, {
        dir: m,
        "data-orientation": "horizontal",
        ...d,
        ref: h,
        style: {
          ...d.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (C) => {
          const y = b(C.clientX);
          a == null || a(y);
        },
        onSlideMove: (C) => {
          const y = b(C.clientX);
          i == null || i(y);
        },
        onSlideEnd: () => {
          ((g.current = void 0), l == null || l());
        },
        onStepKeyDown: (C) => {
          const S = Li[w ? "from-left" : "from-right"].includes(C.key);
          u == null || u({ event: C, direction: S ? -1 : 1 });
        },
      }),
    });
  }),
  oh = c.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        inverted: r,
        onSlideStart: s,
        onSlideMove: a,
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
        C = Ho(w, h ? [o, n] : [n, o]);
      return ((v.current = x), C(m - x.top));
    }
    return p.jsx(Bi, {
      scope: e.__scopeSlider,
      startEdge: h ? "bottom" : "top",
      endEdge: h ? "top" : "bottom",
      size: "height",
      direction: h ? 1 : -1,
      children: p.jsx(Vi, {
        "data-orientation": "vertical",
        ...u,
        ref: f,
        style: {
          ...u.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (m) => {
          const x = g(m.clientY);
          s == null || s(x);
        },
        onSlideMove: (m) => {
          const x = g(m.clientY);
          a == null || a(x);
        },
        onSlideEnd: () => {
          ((v.current = void 0), i == null || i());
        },
        onStepKeyDown: (m) => {
          const w = Li[h ? "from-bottom" : "from-top"].includes(m.key);
          l == null || l({ event: m, direction: w ? -1 : 1 });
        },
      }),
    });
  }),
  Vi = c.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: o,
        onSlideMove: r,
        onSlideEnd: s,
        onHomeKeyDown: a,
        onEndKeyDown: i,
        onStepKeyDown: l,
        ...u
      } = e,
      d = _n(ct, n);
    return p.jsx(P.span, {
      ...u,
      ref: t,
      onKeyDown: R(e.onKeyDown, (f) => {
        f.key === "Home"
          ? (a(f), f.preventDefault())
          : f.key === "End"
            ? (i(f), f.preventDefault())
            : ji.concat(ki).includes(f.key) && (l(f), f.preventDefault());
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
          (v.releasePointerCapture(f.pointerId), s(f));
      }),
    });
  }),
  Wi = "SliderTrack",
  Gi = c.forwardRef((e, t) => {
    const { __scopeSlider: n, ...o } = e,
      r = _n(Wi, n);
    return p.jsx(P.span, {
      "data-disabled": r.disabled ? "" : void 0,
      "data-orientation": r.orientation,
      ...o,
      ref: t,
    });
  });
Gi.displayName = Wi;
var po = "SliderRange",
  Ui = c.forwardRef((e, t) => {
    const { __scopeSlider: n, ...o } = e,
      r = _n(po, n),
      s = Hi(po, n),
      a = c.useRef(null),
      i = D(t, a),
      l = r.values.length,
      u = r.values.map((v) => Yi(v, r.min, r.max)),
      d = l > 1 ? Math.min(...u) : 0,
      f = 100 - Math.max(...u);
    return p.jsx(P.span, {
      "data-orientation": r.orientation,
      "data-disabled": r.disabled ? "" : void 0,
      ...o,
      ref: i,
      style: { ...e.style, [s.startEdge]: d + "%", [s.endEdge]: f + "%" },
    });
  });
Ui.displayName = po;
var vo = "SliderThumb",
  Ki = c.forwardRef((e, t) => {
    const n = Jv(e.__scopeSlider),
      [o, r] = c.useState(null),
      s = D(t, (i) => r(i)),
      a = c.useMemo(
        () => (o ? n().findIndex((i) => i.ref.current === o) : -1),
        [n, o],
      );
    return p.jsx(rh, { ...e, ref: s, index: a });
  }),
  rh = c.forwardRef((e, t) => {
    const { __scopeSlider: n, index: o, name: r, ...s } = e,
      a = _n(vo, n),
      i = Hi(vo, n),
      [l, u] = c.useState(null),
      d = D(t, (b) => u(b)),
      f = l ? a.form || !!l.closest("form") : !0,
      v = Ct(l),
      h = a.values[o],
      g = h === void 0 ? 0 : Yi(h, a.min, a.max),
      m = ih(o, a.values.length),
      x = v == null ? void 0 : v[i.size],
      w = x ? lh(x, g, i.direction) : 0;
    return (
      c.useEffect(() => {
        if (l)
          return (
            a.thumbs.add(l),
            () => {
              a.thumbs.delete(l);
            }
          );
      }, [l, a.thumbs]),
      p.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${g}% + ${w}px)`,
        },
        children: [
          p.jsx(fo.ItemSlot, {
            scope: e.__scopeSlider,
            children: p.jsx(P.span, {
              role: "slider",
              "aria-label": e["aria-label"] || m,
              "aria-valuemin": a.min,
              "aria-valuenow": h,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...s,
              ref: d,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: R(e.onFocus, () => {
                a.valueIndexToChangeRef.current = o;
              }),
            }),
          }),
          f &&
            p.jsx(
              zi,
              {
                name:
                  r ??
                  (a.name
                    ? a.name + (a.values.length > 1 ? "[]" : "")
                    : void 0),
                form: a.form,
                value: h,
              },
              o,
            ),
        ],
      })
    );
  });
Ki.displayName = vo;
var sh = "RadioBubbleInput",
  zi = c.forwardRef(({ __scopeSlider: e, value: t, ...n }, o) => {
    const r = c.useRef(null),
      s = D(r, o),
      a = Nt(t);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (!i) return;
        const l = window.HTMLInputElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== t && d) {
          const f = new Event("input", { bubbles: !0 });
          (d.call(i, t), i.dispatchEvent(f));
        }
      }, [a, t]),
      p.jsx(P.input, {
        style: { display: "none" },
        ...n,
        ref: s,
        defaultValue: t,
      })
    );
  });
zi.displayName = sh;
function ah(e = [], t, n) {
  const o = [...e];
  return ((o[n] = t), o.sort((r, s) => r - s));
}
function Yi(e, t, n) {
  const s = (100 / (n - t)) * (e - t);
  return wt(s, [0, 100]);
}
function ih(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
      ? ["Minimum", "Maximum"][e]
      : void 0;
}
function ch(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)),
    o = Math.min(...n);
  return n.indexOf(o);
}
function lh(e, t, n) {
  const o = e / 2,
    s = Ho([0, 50], [0, o]);
  return (o - s(t) * n) * n;
}
function uh(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function dh(e, t) {
  if (t > 0) {
    const n = uh(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ho(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function fh(e) {
  return (String(e).split(".")[1] || "").length;
}
function ph(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var _g = $i,
  Tg = Gi,
  Ig = Ui,
  Mg = Ki;
function vh(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Vo = "ScrollArea",
  [Xi] = X(Vo),
  [hh, ue] = Xi(Vo),
  qi = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: o = "hover",
        dir: r,
        scrollHideDelay: s = 600,
        ...a
      } = e,
      [i, l] = c.useState(null),
      [u, d] = c.useState(null),
      [f, v] = c.useState(null),
      [h, g] = c.useState(null),
      [m, x] = c.useState(null),
      [w, b] = c.useState(0),
      [C, y] = c.useState(0),
      [S, A] = c.useState(!1),
      [E, T] = c.useState(!1),
      I = D(t, (O) => l(O)),
      M = Ae(r);
    return p.jsx(hh, {
      scope: n,
      type: o,
      dir: M,
      scrollHideDelay: s,
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
      onCornerHeightChange: y,
      children: p.jsx(P.div, {
        dir: M,
        ...a,
        ref: I,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": w + "px",
          "--radix-scroll-area-corner-height": C + "px",
          ...e.style,
        },
      }),
    });
  });
qi.displayName = Vo;
var Zi = "ScrollAreaViewport",
  Qi = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...s } = e,
      a = ue(Zi, n),
      i = c.useRef(null),
      l = D(t, i, a.onViewportChange);
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
          ...s,
          ref: l,
          style: {
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: p.jsx("div", {
            ref: a.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: o,
          }),
        }),
      ],
    });
  });
Qi.displayName = Zi;
var ye = "ScrollAreaScrollbar",
  mh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(ye, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = r,
      i = e.orientation === "horizontal";
    return (
      c.useEffect(
        () => (
          i ? s(!0) : a(!0),
          () => {
            i ? s(!1) : a(!1);
          }
        ),
        [i, s, a],
      ),
      r.type === "hover"
        ? p.jsx(gh, { ...o, ref: t, forceMount: n })
        : r.type === "scroll"
          ? p.jsx(xh, { ...o, ref: t, forceMount: n })
          : r.type === "auto"
            ? p.jsx(Ji, { ...o, ref: t, forceMount: n })
            : r.type === "always"
              ? p.jsx(Wo, { ...o, ref: t })
              : null
    );
  });
mh.displayName = ye;
var gh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(ye, e.__scopeScrollArea),
      [s, a] = c.useState(!1);
    return (
      c.useEffect(() => {
        const i = r.scrollArea;
        let l = 0;
        if (i) {
          const u = () => {
              (window.clearTimeout(l), a(!0));
            },
            d = () => {
              l = window.setTimeout(() => a(!1), r.scrollHideDelay);
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
        present: n || s,
        children: p.jsx(Ji, {
          "data-state": s ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  xh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ue(ye, e.__scopeScrollArea),
      s = e.orientation === "horizontal",
      a = In(() => l("SCROLL_END"), 100),
      [i, l] = vh("hidden", {
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
          d = s ? "scrollLeft" : "scrollTop";
        if (u) {
          let f = u[d];
          const v = () => {
            const h = u[d];
            (f !== h && (l("SCROLL"), a()), (f = h));
          };
          return (
            u.addEventListener("scroll", v),
            () => u.removeEventListener("scroll", v)
          );
        }
      }, [r.viewport, s, l, a]),
      p.jsx(Q, {
        present: n || i !== "hidden",
        children: p.jsx(Wo, {
          "data-state": i === "hidden" ? "hidden" : "visible",
          ...o,
          ref: t,
          onPointerEnter: R(e.onPointerEnter, () => l("POINTER_ENTER")),
          onPointerLeave: R(e.onPointerLeave, () => l("POINTER_LEAVE")),
        }),
      })
    );
  }),
  Ji = c.forwardRef((e, t) => {
    const n = ue(ye, e.__scopeScrollArea),
      { forceMount: o, ...r } = e,
      [s, a] = c.useState(!1),
      i = e.orientation === "horizontal",
      l = In(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            d = n.viewport.offsetHeight < n.viewport.scrollHeight;
          a(i ? u : d);
        }
      }, 10);
    return (
      nt(n.viewport, l),
      nt(n.content, l),
      p.jsx(Q, {
        present: o || s,
        children: p.jsx(Wo, {
          "data-state": s ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  Wo = c.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...o } = e,
      r = ue(ye, e.__scopeScrollArea),
      s = c.useRef(null),
      a = c.useRef(0),
      [i, l] = c.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = oc(i.viewport, i.content),
      d = {
        ...o,
        sizes: i,
        onSizesChange: l,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (v) => (s.current = v),
        onThumbPointerUp: () => (a.current = 0),
        onThumbPointerDown: (v) => (a.current = v),
      };
    function f(v, h) {
      return Eh(v, a.current, i, h);
    }
    return n === "horizontal"
      ? p.jsx(wh, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (r.viewport && s.current) {
              const v = r.viewport.scrollLeft,
                h = Mr(v, i, r.dir);
              s.current.style.transform = `translate3d(${h}px, 0, 0)`;
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
        ? p.jsx(bh, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (r.viewport && s.current) {
                const v = r.viewport.scrollTop,
                  h = Mr(v, i);
                s.current.style.transform = `translate3d(0, ${h}px, 0)`;
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
  wh = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: o, ...r } = e,
      s = ue(ye, e.__scopeScrollArea),
      [a, i] = c.useState(),
      l = c.useRef(null),
      u = D(t, l, s.onScrollbarXChange);
    return (
      c.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      p.jsx(tc, {
        "data-orientation": "horizontal",
        ...r,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Tn(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + d.deltaX;
            (e.onWheelScroll(v), sc(v, f) && d.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            s.viewport &&
            a &&
            o({
              content: s.viewport.scrollWidth,
              viewport: s.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: en(a.paddingLeft),
                paddingEnd: en(a.paddingRight),
              },
            });
        },
      })
    );
  }),
  bh = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: o, ...r } = e,
      s = ue(ye, e.__scopeScrollArea),
      [a, i] = c.useState(),
      l = c.useRef(null),
      u = D(t, l, s.onScrollbarYChange);
    return (
      c.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      p.jsx(tc, {
        "data-orientation": "vertical",
        ...r,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: s.dir === "ltr" ? 0 : void 0,
          left: s.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Tn(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + d.deltaY;
            (e.onWheelScroll(v), sc(v, f) && d.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            s.viewport &&
            a &&
            o({
              content: s.viewport.scrollHeight,
              viewport: s.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: en(a.paddingTop),
                paddingEnd: en(a.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [Ch, ec] = Xi(ye),
  tc = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: o,
        hasThumb: r,
        onThumbChange: s,
        onThumbPointerUp: a,
        onThumbPointerDown: i,
        onThumbPositionChange: l,
        onDragScroll: u,
        onWheelScroll: d,
        onResize: f,
        ...v
      } = e,
      h = ue(ye, n),
      [g, m] = c.useState(null),
      x = D(t, (I) => m(I)),
      w = c.useRef(null),
      b = c.useRef(""),
      C = h.viewport,
      y = o.content - o.viewport,
      S = ee(d),
      A = ee(l),
      E = In(f, 10);
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
          (g == null ? void 0 : g.contains(O)) && S(M, y);
        };
        return (
          document.addEventListener("wheel", I, { passive: !1 }),
          () => document.removeEventListener("wheel", I, { passive: !1 })
        );
      }, [C, g, y, S]),
      c.useEffect(A, [o, A]),
      nt(g, E),
      nt(h.content, E),
      p.jsx(Ch, {
        scope: n,
        scrollbar: g,
        hasThumb: r,
        onThumbChange: ee(s),
        onThumbPointerUp: ee(a),
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
  yh = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = ec(Jt, e.__scopeScrollArea);
    return p.jsx(Q, {
      present: n || r.hasThumb,
      children: p.jsx(Sh, { ref: t, ...o }),
    });
  }),
  Sh = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e,
      s = ue(Jt, n),
      a = ec(Jt, n),
      { onThumbPositionChange: i } = a,
      l = D(t, (f) => a.onThumbChange(f)),
      u = c.useRef(void 0),
      d = In(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      c.useEffect(() => {
        const f = s.viewport;
        if (f) {
          const v = () => {
            if ((d(), !u.current)) {
              const h = Ph(f, i);
              ((u.current = h), i());
            }
          };
          return (
            i(),
            f.addEventListener("scroll", v),
            () => f.removeEventListener("scroll", v)
          );
        }
      }, [s.viewport, d, i]),
      p.jsx(P.div, {
        "data-state": a.hasThumb ? "visible" : "hidden",
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
          a.onThumbPointerDown({ x: g, y: m });
        }),
        onPointerUp: R(e.onPointerUp, a.onThumbPointerUp),
      })
    );
  });
yh.displayName = Jt;
var Go = "ScrollAreaCorner",
  nc = c.forwardRef((e, t) => {
    const n = ue(Go, e.__scopeScrollArea),
      o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? p.jsx(Rh, { ...e, ref: t }) : null;
  });
nc.displayName = Go;
var Rh = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e,
    r = ue(Go, n),
    [s, a] = c.useState(0),
    [i, l] = c.useState(0),
    u = !!(s && i);
  return (
    nt(r.scrollbarX, () => {
      var f;
      const d = ((f = r.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
      (r.onCornerHeightChange(d), l(d));
    }),
    nt(r.scrollbarY, () => {
      var f;
      const d = ((f = r.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
      (r.onCornerWidthChange(d), a(d));
    }),
    u
      ? p.jsx(P.div, {
          ...o,
          ref: t,
          style: {
            width: s,
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
function oc(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Tn(e) {
  const t = oc(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Eh(e, t, n, o = "ltr") {
  const r = Tn(n),
    s = r / 2,
    a = t || s,
    i = r - a,
    l = n.scrollbar.paddingStart + a,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - i,
    d = n.content - n.viewport,
    f = o === "ltr" ? [0, d] : [d * -1, 0];
  return rc([l, u], f)(e);
}
function Mr(e, t, n = "ltr") {
  const o = Tn(t),
    r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - r,
    a = t.content - t.viewport,
    i = s - o,
    l = n === "ltr" ? [0, a] : [a * -1, 0],
    u = wt(e, l);
  return rc([0, a], [0, i])(u);
}
function rc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function sc(e, t) {
  return e > 0 && e < t;
}
var Ph = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    o = 0;
  return (
    (function r() {
      const s = { left: e.scrollLeft, top: e.scrollTop },
        a = n.left !== s.left,
        i = n.top !== s.top;
      ((a || i) && t(), (n = s), (o = window.requestAnimationFrame(r)));
    })(),
    () => window.cancelAnimationFrame(o)
  );
};
function In(e, t) {
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
var Ng = qi,
  Dg = Qi,
  Og = nc,
  Mn = "Checkbox",
  [Ah] = X(Mn),
  [_h, Uo] = Ah(Mn);
function Th(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: o,
      defaultChecked: r,
      disabled: s,
      form: a,
      name: i,
      onCheckedChange: l,
      required: u,
      value: d = "on",
      internal_do_not_use_render: f,
    } = e,
    [v, h] = J({ prop: n, defaultProp: r ?? !1, onChange: l, caller: Mn }),
    [g, m] = c.useState(null),
    [x, w] = c.useState(null),
    b = c.useRef(!1),
    C = g ? !!a || !!g.closest("form") : !0,
    y = {
      checked: v,
      disabled: s,
      setChecked: h,
      control: g,
      setControl: m,
      name: i,
      form: a,
      value: d,
      hasConsumerStoppedPropagationRef: b,
      required: u,
      defaultChecked: Me(r) ? !1 : r,
      isFormControl: C,
      bubbleInput: x,
      setBubbleInput: w,
    };
  return p.jsx(_h, { scope: t, ...y, children: Nh(f) ? f(y) : o });
}
var ac = "CheckboxTrigger",
  ic = c.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, r) => {
      const {
          control: s,
          value: a,
          disabled: i,
          checked: l,
          required: u,
          setControl: d,
          setChecked: f,
          hasConsumerStoppedPropagationRef: v,
          isFormControl: h,
          bubbleInput: g,
        } = Uo(ac, e),
        m = D(r, d),
        x = c.useRef(l);
      return (
        c.useEffect(() => {
          const w = s == null ? void 0 : s.form;
          if (w) {
            const b = () => f(x.current);
            return (
              w.addEventListener("reset", b),
              () => w.removeEventListener("reset", b)
            );
          }
        }, [s, f]),
        p.jsx(P.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Me(l) ? "mixed" : l,
          "aria-required": u,
          "data-state": dc(l),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
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
ic.displayName = ac;
var Ih = c.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: o,
    checked: r,
    defaultChecked: s,
    required: a,
    disabled: i,
    value: l,
    onCheckedChange: u,
    form: d,
    ...f
  } = e;
  return p.jsx(Th, {
    __scopeCheckbox: n,
    checked: r,
    defaultChecked: s,
    disabled: i,
    required: a,
    onCheckedChange: u,
    name: o,
    form: d,
    value: l,
    internal_do_not_use_render: ({ isFormControl: v }) =>
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(ic, { ...f, ref: t, __scopeCheckbox: n }),
          v && p.jsx(uc, { __scopeCheckbox: n }),
        ],
      }),
  });
});
Ih.displayName = Mn;
var cc = "CheckboxIndicator",
  Mh = c.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e,
      s = Uo(cc, n);
    return p.jsx(Q, {
      present: o || Me(s.checked) || s.checked === !0,
      children: p.jsx(P.span, {
        "data-state": dc(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Mh.displayName = cc;
var lc = "CheckboxBubbleInput",
  uc = c.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: o,
        hasConsumerStoppedPropagationRef: r,
        checked: s,
        defaultChecked: a,
        required: i,
        disabled: l,
        name: u,
        value: d,
        form: f,
        bubbleInput: v,
        setBubbleInput: h,
      } = Uo(lc, e),
      g = D(n, h),
      m = Nt(s),
      x = Ct(o);
    c.useEffect(() => {
      const b = v;
      if (!b) return;
      const C = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(C, "checked").set,
        A = !r.current;
      if (m !== s && S) {
        const E = new Event("click", { bubbles: A });
        ((b.indeterminate = Me(s)),
          S.call(b, Me(s) ? !1 : s),
          b.dispatchEvent(E));
      }
    }, [v, m, s, r]);
    const w = c.useRef(Me(s) ? !1 : s);
    return p.jsx(P.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: a ?? w.current,
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
uc.displayName = lc;
function Nh(e) {
  return typeof e == "function";
}
function Me(e) {
  return e === "indeterminate";
}
function dc(e) {
  return Me(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Nn = "Collapsible",
  [Dh, fc] = X(Nn),
  [Oh, Ko] = Dh(Nn),
  pc = c.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: o,
        defaultOpen: r,
        disabled: s,
        onOpenChange: a,
        ...i
      } = e,
      [l, u] = J({ prop: o, defaultProp: r ?? !1, onChange: a, caller: Nn });
    return p.jsx(Oh, {
      scope: n,
      disabled: s,
      contentId: oe(),
      open: l,
      onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
      children: p.jsx(P.div, {
        "data-state": Yo(l),
        "data-disabled": s ? "" : void 0,
        ...i,
        ref: t,
      }),
    });
  });
pc.displayName = Nn;
var vc = "CollapsibleTrigger",
  hc = c.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...o } = e,
      r = Ko(vc, n);
    return p.jsx(P.button, {
      type: "button",
      "aria-controls": r.contentId,
      "aria-expanded": r.open || !1,
      "data-state": Yo(r.open),
      "data-disabled": r.disabled ? "" : void 0,
      disabled: r.disabled,
      ...o,
      ref: t,
      onClick: R(e.onClick, r.onOpenToggle),
    });
  });
hc.displayName = vc;
var zo = "CollapsibleContent",
  mc = c.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = Ko(zo, e.__scopeCollapsible);
    return p.jsx(Q, {
      present: n || r.open,
      children: ({ present: s }) => p.jsx(jh, { ...o, ref: t, present: s }),
    });
  });
mc.displayName = zo;
var jh = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e,
    a = Ko(zo, n),
    [i, l] = c.useState(o),
    u = c.useRef(null),
    d = D(t, u),
    f = c.useRef(0),
    v = f.current,
    h = c.useRef(0),
    g = h.current,
    m = a.open || i,
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
        const C = b.getBoundingClientRect();
        ((f.current = C.height),
          (h.current = C.width),
          x.current ||
            ((b.style.transitionDuration = w.current.transitionDuration),
            (b.style.animationName = w.current.animationName)),
          l(o));
      }
    }, [a.open, o]),
    p.jsx(P.div, {
      "data-state": Yo(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
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
function Yo(e) {
  return e ? "open" : "closed";
}
var kh = pc,
  Lh = hc,
  Fh = mc,
  he = "Accordion",
  $h = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Xo, Bh, Hh] = Pt(he),
  [Dn] = X(he, [Hh, fc]),
  qo = fc(),
  gc = V.forwardRef((e, t) => {
    const { type: n, ...o } = e,
      r = o,
      s = o;
    return p.jsx(Xo.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? p.jsx(Uh, { ...s, ref: t })
          : p.jsx(Gh, { ...r, ref: t }),
    });
  });
gc.displayName = he;
var [xc, Vh] = Dn(he),
  [wc, Wh] = Dn(he, { collapsible: !1 }),
  Gh = V.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        collapsible: s = !1,
        ...a
      } = e,
      [i, l] = J({ prop: n, defaultProp: o ?? "", onChange: r, caller: he });
    return p.jsx(xc, {
      scope: e.__scopeAccordion,
      value: V.useMemo(() => (i ? [i] : []), [i]),
      onItemOpen: l,
      onItemClose: V.useCallback(() => s && l(""), [s, l]),
      children: p.jsx(wc, {
        scope: e.__scopeAccordion,
        collapsible: s,
        children: p.jsx(bc, { ...a, ref: t }),
      }),
    });
  }),
  Uh = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...s } = e,
      [a, i] = J({ prop: n, defaultProp: o ?? [], onChange: r, caller: he }),
      l = V.useCallback((d) => i((f = []) => [...f, d]), [i]),
      u = V.useCallback((d) => i((f = []) => f.filter((v) => v !== d)), [i]);
    return p.jsx(xc, {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: l,
      onItemClose: u,
      children: p.jsx(wc, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: p.jsx(bc, { ...s, ref: t }),
      }),
    });
  }),
  [Kh, On] = Dn(he),
  bc = V.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: r,
        orientation: s = "vertical",
        ...a
      } = e,
      i = V.useRef(null),
      l = D(i, t),
      u = Bh(n),
      f = Ae(r) === "ltr",
      v = R(e.onKeyDown, (h) => {
        var T;
        if (!$h.includes(h.key)) return;
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
        const C = 0,
          y = w - 1,
          S = () => {
            ((b = x + 1), b > y && (b = C));
          },
          A = () => {
            ((b = x - 1), b < C && (b = y));
          };
        switch (h.key) {
          case "Home":
            b = C;
            break;
          case "End":
            b = y;
            break;
          case "ArrowRight":
            s === "horizontal" && (f ? S() : A());
            break;
          case "ArrowDown":
            s === "vertical" && S();
            break;
          case "ArrowLeft":
            s === "horizontal" && (f ? A() : S());
            break;
          case "ArrowUp":
            s === "vertical" && A();
            break;
        }
        const E = b % w;
        (T = m[E].ref.current) == null || T.focus();
      });
    return p.jsx(Kh, {
      scope: n,
      disabled: o,
      direction: r,
      orientation: s,
      children: p.jsx(Xo.Slot, {
        scope: n,
        children: p.jsx(P.div, {
          ...a,
          "data-orientation": s,
          ref: l,
          onKeyDown: o ? void 0 : v,
        }),
      }),
    });
  }),
  tn = "AccordionItem",
  [zh, Zo] = Dn(tn),
  Cc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: o, ...r } = e,
      s = On(tn, n),
      a = Vh(tn, n),
      i = qo(n),
      l = oe(),
      u = (o && a.value.includes(o)) || !1,
      d = s.disabled || e.disabled;
    return p.jsx(zh, {
      scope: n,
      open: u,
      disabled: d,
      triggerId: l,
      children: p.jsx(kh, {
        "data-orientation": s.orientation,
        "data-state": Ac(u),
        ...i,
        ...r,
        ref: t,
        disabled: d,
        open: u,
        onOpenChange: (f) => {
          f ? a.onItemOpen(o) : a.onItemClose(o);
        },
      }),
    });
  });
Cc.displayName = tn;
var yc = "AccordionHeader",
  Sc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = On(he, n),
      s = Zo(yc, n);
    return p.jsx(P.h3, {
      "data-orientation": r.orientation,
      "data-state": Ac(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      ...o,
      ref: t,
    });
  });
Sc.displayName = yc;
var ho = "AccordionTrigger",
  Rc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = On(he, n),
      s = Zo(ho, n),
      a = Wh(ho, n),
      i = qo(n);
    return p.jsx(Xo.ItemSlot, {
      scope: n,
      children: p.jsx(Lh, {
        "aria-disabled": (s.open && !a.collapsible) || void 0,
        "data-orientation": r.orientation,
        id: s.triggerId,
        ...i,
        ...o,
        ref: t,
      }),
    });
  });
Rc.displayName = ho;
var Ec = "AccordionContent",
  Pc = V.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = On(he, n),
      s = Zo(Ec, n),
      a = qo(n);
    return p.jsx(Fh, {
      role: "region",
      "aria-labelledby": s.triggerId,
      "data-orientation": r.orientation,
      ...a,
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
Pc.displayName = Ec;
function Ac(e) {
  return e ? "open" : "closed";
}
var jg = gc,
  kg = Cc,
  Lg = Sc,
  Fg = Rc,
  $g = Pc,
  jn = "Popover",
  [_c] = X(jn, [Ce]),
  Dt = Ce(),
  [Yh, Fe] = _c(jn),
  Tc = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: s,
        modal: a = !1,
      } = e,
      i = Dt(t),
      l = c.useRef(null),
      [u, d] = c.useState(!1),
      [f, v] = J({ prop: o, defaultProp: r ?? !1, onChange: s, caller: jn });
    return p.jsx(yt, {
      ...i,
      children: p.jsx(Yh, {
        scope: t,
        contentId: oe(),
        triggerRef: l,
        open: f,
        onOpenChange: v,
        onOpenToggle: c.useCallback(() => v((h) => !h), [v]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: c.useCallback(() => d(!0), []),
        onCustomAnchorRemove: c.useCallback(() => d(!1), []),
        modal: a,
        children: n,
      }),
    });
  };
Tc.displayName = jn;
var Ic = "PopoverAnchor",
  Xh = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe(Ic, n),
      s = Dt(n),
      { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = r;
    return (
      c.useEffect(() => (a(), () => i()), [a, i]),
      p.jsx(at, { ...s, ...o, ref: t })
    );
  });
Xh.displayName = Ic;
var Mc = "PopoverTrigger",
  Nc = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe(Mc, n),
      s = Dt(n),
      a = D(t, r.triggerRef),
      i = p.jsx(P.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Lc(r.open),
        ...o,
        ref: a,
        onClick: R(e.onClick, r.onOpenToggle),
      });
    return r.hasCustomAnchor
      ? i
      : p.jsx(at, { asChild: !0, ...s, children: i });
  });
Nc.displayName = Mc;
var Qo = "PopoverPortal",
  [qh, Zh] = _c(Qo, { forceMount: void 0 }),
  Dc = (e) => {
    const { __scopePopover: t, forceMount: n, children: o, container: r } = e,
      s = Fe(Qo, t);
    return p.jsx(qh, {
      scope: t,
      forceMount: n,
      children: p.jsx(Q, {
        present: n || s.open,
        children: p.jsx(Et, { asChild: !0, container: r, children: o }),
      }),
    });
  };
Dc.displayName = Qo;
var ot = "PopoverContent",
  Oc = c.forwardRef((e, t) => {
    const n = Zh(ot, e.__scopePopover),
      { forceMount: o = n.forceMount, ...r } = e,
      s = Fe(ot, e.__scopePopover);
    return p.jsx(Q, {
      present: o || s.open,
      children: s.modal
        ? p.jsx(Jh, { ...r, ref: t })
        : p.jsx(em, { ...r, ref: t }),
    });
  });
Oc.displayName = ot;
var Qh = Ne("PopoverContent.RemoveScroll"),
  Jh = c.forwardRef((e, t) => {
    const n = Fe(ot, e.__scopePopover),
      o = c.useRef(null),
      r = D(t, o),
      s = c.useRef(!1);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a) return mn(a);
      }, []),
      p.jsx(_t, {
        as: Qh,
        allowPinchZoom: !0,
        children: p.jsx(jc, {
          ...e,
          ref: r,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: R(e.onCloseAutoFocus, (a) => {
            var i;
            (a.preventDefault(),
              s.current || (i = n.triggerRef.current) == null || i.focus());
          }),
          onPointerDownOutside: R(
            e.onPointerDownOutside,
            (a) => {
              const i = a.detail.originalEvent,
                l = i.button === 0 && i.ctrlKey === !0,
                u = i.button === 2 || l;
              s.current = u;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: R(e.onFocusOutside, (a) => a.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  em = c.forwardRef((e, t) => {
    const n = Fe(ot, e.__scopePopover),
      o = c.useRef(!1),
      r = c.useRef(!1);
    return p.jsx(jc, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var a, i;
        ((a = e.onCloseAutoFocus) == null || a.call(e, s),
          s.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
          (o.current = !1),
          (r.current = !1));
      },
      onInteractOutside: (s) => {
        var l, u;
        ((l = e.onInteractOutside) == null || l.call(e, s),
          s.defaultPrevented ||
            ((o.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (r.current = !0)));
        const a = s.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) &&
          s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            r.current &&
            s.preventDefault());
      },
    });
  }),
  jc = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: d,
        ...f
      } = e,
      v = Fe(ot, n),
      h = Dt(n);
    return (
      vn(),
      p.jsx(At, {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: s,
        children: p.jsx(Ge, {
          asChild: !0,
          disableOutsidePointerEvents: a,
          onInteractOutside: d,
          onEscapeKeyDown: i,
          onPointerDownOutside: l,
          onFocusOutside: u,
          onDismiss: () => v.onOpenChange(!1),
          children: p.jsx(St, {
            "data-state": Lc(v.open),
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
  kc = "PopoverClose",
  tm = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Fe(kc, n);
    return p.jsx(P.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: R(e.onClick, () => r.onOpenChange(!1)),
    });
  });
tm.displayName = kc;
var nm = "PopoverArrow",
  om = c.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      r = Dt(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
om.displayName = nm;
function Lc(e) {
  return e ? "open" : "closed";
}
var Bg = Tc,
  Hg = Nc,
  Vg = Dc,
  Wg = Oc,
  Jo = "Radio",
  [rm, Fc] = X(Jo),
  [sm, am] = rm(Jo),
  $c = c.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: o,
        checked: r = !1,
        required: s,
        disabled: a,
        value: i = "on",
        onCheck: l,
        form: u,
        ...d
      } = e,
      [f, v] = c.useState(null),
      h = D(t, (x) => v(x)),
      g = c.useRef(!1),
      m = f ? u || !!f.closest("form") : !0;
    return p.jsxs(sm, {
      scope: n,
      checked: r,
      disabled: a,
      children: [
        p.jsx(P.button, {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": Wc(r),
          "data-disabled": a ? "" : void 0,
          disabled: a,
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
          p.jsx(Vc, {
            control: f,
            bubbles: !g.current,
            name: o,
            value: i,
            checked: r,
            required: s,
            disabled: a,
            form: u,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
$c.displayName = Jo;
var Bc = "RadioIndicator",
  Hc = c.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e,
      s = am(Bc, n);
    return p.jsx(Q, {
      present: o || s.checked,
      children: p.jsx(P.span, {
        "data-state": Wc(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
      }),
    });
  });
Hc.displayName = Bc;
var im = "RadioBubbleInput",
  Vc = c.forwardRef(
    ({ __scopeRadio: e, control: t, checked: n, bubbles: o = !0, ...r }, s) => {
      const a = c.useRef(null),
        i = D(a, s),
        l = Nt(n),
        u = Ct(t);
      return (
        c.useEffect(() => {
          const d = a.current;
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
Vc.displayName = im;
function Wc(e) {
  return e ? "checked" : "unchecked";
}
var cm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  kn = "RadioGroup",
  [lm] = X(kn, [je, Fc]),
  Gc = je(),
  Uc = Fc(),
  [um, dm] = lm(kn),
  Kc = c.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: o,
        defaultValue: r,
        value: s,
        required: a = !1,
        disabled: i = !1,
        orientation: l,
        dir: u,
        loop: d = !0,
        onValueChange: f,
        ...v
      } = e,
      h = Gc(n),
      g = Ae(u),
      [m, x] = J({ prop: s, defaultProp: r ?? null, onChange: f, caller: kn });
    return p.jsx(um, {
      scope: n,
      name: o,
      required: a,
      disabled: i,
      value: m,
      onValueChange: x,
      children: p.jsx(xn, {
        asChild: !0,
        ...h,
        orientation: l,
        dir: g,
        loop: d,
        children: p.jsx(P.div, {
          role: "radiogroup",
          "aria-required": a,
          "aria-orientation": l,
          "data-disabled": i ? "" : void 0,
          dir: g,
          ...v,
          ref: t,
        }),
      }),
    });
  });
Kc.displayName = kn;
var zc = "RadioGroupItem",
  Yc = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e,
      s = dm(zc, n),
      a = s.disabled || o,
      i = Gc(n),
      l = Uc(n),
      u = c.useRef(null),
      d = D(t, u),
      f = s.value === r.value,
      v = c.useRef(!1);
    return (
      c.useEffect(() => {
        const h = (m) => {
            cm.includes(m.key) && (v.current = !0);
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
      p.jsx(wn, {
        asChild: !0,
        ...i,
        focusable: !a,
        active: f,
        children: p.jsx($c, {
          disabled: a,
          required: s.required,
          checked: f,
          ...l,
          ...r,
          name: s.name,
          ref: d,
          onCheck: () => s.onValueChange(r.value),
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
Yc.displayName = zc;
var fm = "RadioGroupIndicator",
  Xc = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...o } = e,
      r = Uc(n);
    return p.jsx(Hc, { ...r, ...o, ref: t });
  });
Xc.displayName = fm;
var Gg = Kc,
  Ug = Yc,
  Kg = Xc,
  qc = "Toggle",
  er = c.forwardRef((e, t) => {
    const { pressed: n, defaultPressed: o, onPressedChange: r, ...s } = e,
      [a, i] = J({ prop: n, onChange: r, defaultProp: o ?? !1, caller: qc });
    return p.jsx(P.button, {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...s,
      ref: t,
      onClick: R(e.onClick, () => {
        e.disabled || i(!a);
      }),
    });
  });
er.displayName = qc;
var zg = er,
  $e = "ToggleGroup",
  [Zc] = X($e, [je]),
  Qc = je(),
  tr = V.forwardRef((e, t) => {
    const { type: n, ...o } = e;
    if (n === "single") {
      const r = o;
      return p.jsx(pm, { ...r, ref: t });
    }
    if (n === "multiple") {
      const r = o;
      return p.jsx(vm, { ...r, ref: t });
    }
    throw new Error(`Missing prop \`type\` expected on \`${$e}\``);
  });
tr.displayName = $e;
var [Jc, el] = Zc($e),
  pm = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...s } = e,
      [a, i] = J({ prop: n, defaultProp: o ?? "", onChange: r, caller: $e });
    return p.jsx(Jc, {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: V.useMemo(() => (a ? [a] : []), [a]),
      onItemActivate: i,
      onItemDeactivate: V.useCallback(() => i(""), [i]),
      children: p.jsx(tl, { ...s, ref: t }),
    });
  }),
  vm = V.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...s } = e,
      [a, i] = J({ prop: n, defaultProp: o ?? [], onChange: r, caller: $e }),
      l = V.useCallback((d) => i((f = []) => [...f, d]), [i]),
      u = V.useCallback((d) => i((f = []) => f.filter((v) => v !== d)), [i]);
    return p.jsx(Jc, {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: l,
      onItemDeactivate: u,
      children: p.jsx(tl, { ...s, ref: t }),
    });
  });
tr.displayName = $e;
var [hm, mm] = Zc($e),
  tl = V.forwardRef((e, t) => {
    const {
        __scopeToggleGroup: n,
        disabled: o = !1,
        rovingFocus: r = !0,
        orientation: s,
        dir: a,
        loop: i = !0,
        ...l
      } = e,
      u = Qc(n),
      d = Ae(a),
      f = { role: "group", dir: d, ...l };
    return p.jsx(hm, {
      scope: n,
      rovingFocus: r,
      disabled: o,
      children: r
        ? p.jsx(xn, {
            asChild: !0,
            ...u,
            orientation: s,
            dir: d,
            loop: i,
            children: p.jsx(P.div, { ...f, ref: t }),
          })
        : p.jsx(P.div, { ...f, ref: t }),
    });
  }),
  nn = "ToggleGroupItem",
  nl = V.forwardRef((e, t) => {
    const n = el(nn, e.__scopeToggleGroup),
      o = mm(nn, e.__scopeToggleGroup),
      r = Qc(e.__scopeToggleGroup),
      s = n.value.includes(e.value),
      a = o.disabled || e.disabled,
      i = { ...e, pressed: s, disabled: a },
      l = V.useRef(null);
    return o.rovingFocus
      ? p.jsx(wn, {
          asChild: !0,
          ...r,
          focusable: !a,
          active: s,
          ref: l,
          children: p.jsx(Nr, { ...i, ref: t }),
        })
      : p.jsx(Nr, { ...i, ref: t });
  });
nl.displayName = nn;
var Nr = V.forwardRef((e, t) => {
    const { __scopeToggleGroup: n, value: o, ...r } = e,
      s = el(nn, n),
      a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 },
      i = s.type === "single" ? a : void 0;
    return p.jsx(er, {
      ...i,
      ...r,
      ref: t,
      onPressedChange: (l) => {
        l ? s.onItemActivate(o) : s.onItemDeactivate(o);
      },
    });
  }),
  Yg = tr,
  Xg = nl,
  qn,
  Ln = "HoverCard",
  [ol] = X(Ln, [Ce]),
  Fn = Ce(),
  [gm, nr] = ol(Ln),
  rl = (e) => {
    const {
        __scopeHoverCard: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: s,
        openDelay: a = 700,
        closeDelay: i = 300,
      } = e,
      l = Fn(t),
      u = c.useRef(0),
      d = c.useRef(0),
      f = c.useRef(!1),
      v = c.useRef(!1),
      [h, g] = J({ prop: o, defaultProp: r ?? !1, onChange: s, caller: Ln }),
      m = c.useCallback(() => {
        (clearTimeout(d.current),
          (u.current = window.setTimeout(() => g(!0), a)));
      }, [a, g]),
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
      p.jsx(gm, {
        scope: t,
        open: h,
        onOpenChange: g,
        onOpen: m,
        onClose: x,
        onDismiss: w,
        hasSelectionRef: f,
        isPointerDownOnContentRef: v,
        children: p.jsx(yt, { ...l, children: n }),
      })
    );
  };
rl.displayName = Ln;
var sl = "HoverCardTrigger",
  al = c.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...o } = e,
      r = nr(sl, n),
      s = Fn(n);
    return p.jsx(at, {
      asChild: !0,
      ...s,
      children: p.jsx(P.a, {
        "data-state": r.open ? "open" : "closed",
        ...o,
        ref: t,
        onPointerEnter: R(e.onPointerEnter, rn(r.onOpen)),
        onPointerLeave: R(e.onPointerLeave, rn(r.onClose)),
        onFocus: R(e.onFocus, r.onOpen),
        onBlur: R(e.onBlur, r.onClose),
        onTouchStart: R(e.onTouchStart, (a) => a.preventDefault()),
      }),
    });
  });
al.displayName = sl;
var xm = "HoverCardPortal",
  [qg, wm] = ol(xm, { forceMount: void 0 }),
  on = "HoverCardContent",
  il = c.forwardRef((e, t) => {
    const n = wm(on, e.__scopeHoverCard),
      { forceMount: o = n.forceMount, ...r } = e,
      s = nr(on, e.__scopeHoverCard);
    return p.jsx(Q, {
      present: o || s.open,
      children: p.jsx(bm, {
        "data-state": s.open ? "open" : "closed",
        ...r,
        onPointerEnter: R(e.onPointerEnter, rn(s.onOpen)),
        onPointerLeave: R(e.onPointerLeave, rn(s.onClose)),
        ref: t,
      }),
    });
  });
il.displayName = on;
var bm = c.forwardRef((e, t) => {
    const {
        __scopeHoverCard: n,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: s,
        onInteractOutside: a,
        ...i
      } = e,
      l = nr(on, n),
      u = Fn(n),
      d = c.useRef(null),
      f = D(t, d),
      [v, h] = c.useState(!1);
    return (
      c.useEffect(() => {
        if (v) {
          const g = document.body;
          return (
            (qn = g.style.userSelect || g.style.webkitUserSelect),
            (g.style.userSelect = "none"),
            (g.style.webkitUserSelect = "none"),
            () => {
              ((g.style.userSelect = qn), (g.style.webkitUserSelect = qn));
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
          Sm(d.current).forEach((m) => m.setAttribute("tabindex", "-1"));
      }),
      p.jsx(Ge, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onInteractOutside: a,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: R(s, (g) => {
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
  Cm = "HoverCardArrow",
  ym = c.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...o } = e,
      r = Fn(n);
    return p.jsx(Rt, { ...r, ...o, ref: t });
  });
ym.displayName = Cm;
function rn(e) {
  return (t) => (t.pointerType === "touch" ? void 0 : e());
}
function Sm(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) =>
        o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var Zg = rl,
  Qg = al,
  Jg = il,
  cl = "AlertDialog",
  [Rm] = X(cl, [As]),
  _e = As(),
  ll = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      o = _e(t);
    return p.jsx(Vf, { ...o, ...n, modal: !0 });
  };
ll.displayName = cl;
var Em = "AlertDialogTrigger",
  ul = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = _e(n);
    return p.jsx(Wf, { ...r, ...o, ref: t });
  });
ul.displayName = Em;
var Pm = "AlertDialogPortal",
  dl = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      o = _e(t);
    return p.jsx(Gf, { ...o, ...n });
  };
dl.displayName = Pm;
var Am = "AlertDialogOverlay",
  fl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = _e(n);
    return p.jsx(Uf, { ...r, ...o, ref: t });
  });
fl.displayName = Am;
var Qe = "AlertDialogContent",
  [_m, Tm] = Rm(Qe),
  Im = kr("AlertDialogContent"),
  pl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e,
      s = _e(n),
      a = c.useRef(null),
      i = D(t, a),
      l = c.useRef(null);
    return p.jsx(Ff, {
      contentName: Qe,
      titleName: vl,
      docsSlug: "alert-dialog",
      children: p.jsx(_m, {
        scope: n,
        cancelRef: l,
        children: p.jsxs(Kf, {
          role: "alertdialog",
          ...s,
          ...r,
          ref: i,
          onOpenAutoFocus: R(r.onOpenAutoFocus, (u) => {
            var d;
            (u.preventDefault(),
              (d = l.current) == null || d.focus({ preventScroll: !0 }));
          }),
          onPointerDownOutside: (u) => u.preventDefault(),
          onInteractOutside: (u) => u.preventDefault(),
          children: [p.jsx(Im, { children: o }), p.jsx(Nm, { contentRef: a })],
        }),
      }),
    });
  });
pl.displayName = Qe;
var vl = "AlertDialogTitle",
  hl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = _e(n);
    return p.jsx(zf, { ...r, ...o, ref: t });
  });
hl.displayName = vl;
var ml = "AlertDialogDescription",
  gl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = _e(n);
    return p.jsx(Yf, { ...r, ...o, ref: t });
  });
gl.displayName = ml;
var Mm = "AlertDialogAction",
  xl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      r = _e(n);
    return p.jsx(Ws, { ...r, ...o, ref: t });
  });
xl.displayName = Mm;
var wl = "AlertDialogCancel",
  bl = c.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...o } = e,
      { cancelRef: r } = Tm(wl, n),
      s = _e(n),
      a = D(t, r);
    return p.jsx(Ws, { ...s, ...o, ref: a });
  });
bl.displayName = wl;
var Nm = ({ contentRef: e }) => {
    const t = `\`${Qe}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Qe}\` by passing a \`${ml}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

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
  ex = ll,
  tx = ul,
  nx = dl,
  ox = fl,
  rx = pl,
  sx = xl,
  ax = bl,
  ix = hl,
  cx = gl;
export {
  Gf as $,
  zg as A,
  Yg as B,
  Bm as C,
  Xg as D,
  Zg as E,
  Qg as F,
  Jg as G,
  Lg as H,
  kg as I,
  ex as J,
  tx as K,
  nx as L,
  rx as M,
  ix as N,
  cx as O,
  Lm as P,
  ax as Q,
  Fm as R,
  jm as S,
  $m as T,
  sx as U,
  cs as V,
  ox as W,
  Wf as X,
  zf as Y,
  Yf as Z,
  Vf as _,
  P as a,
  Kf as a0,
  Uf as a1,
  _g as a2,
  Tg as a3,
  Ig as a4,
  Mg as a5,
  Eg as a6,
  Pg as a7,
  Ws as a8,
  ig as a9,
  Zm as aA,
  qm as aB,
  yg as aC,
  Sg as aD,
  Rg as aE,
  tg as aF,
  ng as aG,
  og as aH,
  rg as aI,
  sg as aJ,
  ag as aK,
  Ng as aL,
  Dg as aM,
  Og as aN,
  mh as aO,
  yh as aP,
  lg as aa,
  cg as ab,
  ug as ac,
  dg as ad,
  fg as ae,
  pg as af,
  hg as ag,
  gg as ah,
  mg as ai,
  xg as aj,
  wg as ak,
  vg as al,
  bg as am,
  Ag as an,
  Cg as ao,
  Vm as ap,
  Wm as aq,
  Gm as ar,
  Um as as,
  Ym as at,
  Qm as au,
  Km as av,
  zm as aw,
  Jm as ax,
  eg as ay,
  Xm as az,
  Ml as b,
  ee as c,
  Lr as d,
  q as e,
  J as f,
  Pt as g,
  X as h,
  Et as i,
  Ih as j,
  Mh as k,
  jg as l,
  Fg as m,
  $g as n,
  kh as o,
  hc as p,
  mc as q,
  Bg as r,
  $d as s,
  Hg as t,
  D as u,
  Vg as v,
  Wg as w,
  Gg as x,
  Ug as y,
  Kg as z,
};
