var be = Object.defineProperty;
var je = (e, a, r) =>
  a in e
    ? be(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[a] = r);
var re = (e, a, r) => je(e, typeof a != "symbol" ? a + "" : a, r);
import {
  G as k,
  J as I,
  K as T,
  M as ae,
  N as Ne,
  O as de,
  Q as Ae,
  R as we,
  U as q,
  j as t,
  C as B,
  p as $,
  V as Z,
  B as Ce,
  n as Oe,
  o as Pe,
  r as Ee,
  g as Se,
} from "./index-DRWQgA5q.js";
import { R as h, r as ue } from "./router-XBfdTQ0K.js";
import {
  aj as me,
  Y as Be,
  au as De,
  as as Le,
  a2 as Re,
  aB as _e,
  a6 as ke,
  W as Te,
  T as he,
  aC as Ie,
  aD as Me,
  aE as ze,
  aF as Fe,
} from "./utils-Er8ll4su.js";
import {
  L as K,
  m as W,
  C as X,
  A as Ke,
  i as ne,
  a as $e,
  G as Ve,
  g as se,
  b as ie,
  D as We,
  c as He,
  X as H,
  Y as G,
  f as Ge,
  B as pe,
  d as J,
  T as Y,
  e as xe,
  P as Ye,
  h as Ue,
  j as Xe,
  k as qe,
} from "./PieChart-CZGG4NxX.js";
import { B as Je } from "./badge-DD2chybY.js";
var Qe = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  Ze = ["key"],
  fe;
function M(e) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    M(e)
  );
}
function ve(e, a) {
  if (e == null) return {};
  var r = et(e, a),
    n,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      ((n = i[s]),
        !(a.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function et(e, a) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (a.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function R() {
  return (
    (R = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    R.apply(this, arguments)
  );
}
function oe(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (a &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function S(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? oe(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : oe(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tt(e, a) {
  if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function le(e, a) {
  for (var r = 0; r < a.length; r++) {
    var n = a[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ge(n.key), n));
  }
}
function rt(e, a, r) {
  return (
    a && le(e.prototype, a),
    r && le(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function at(e, a, r) {
  return (
    (a = U(a)),
    nt(
      e,
      ye() ? Reflect.construct(a, r || [], U(e).constructor) : a.apply(e, r),
    )
  );
}
function nt(e, a) {
  if (a && (M(a) === "object" || typeof a == "function")) return a;
  if (a !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return st(e);
}
function st(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ye() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ye = function () {
    return !!e;
  })();
}
function U(e) {
  return (
    (U = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    U(e)
  );
}
function it(e, a) {
  if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(a && a.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    a && Q(e, a));
}
function Q(e, a) {
  return (
    (Q = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, s) {
          return ((n.__proto__ = s), n);
        }),
    Q(e, a)
  );
}
function C(e, a, r) {
  return (
    (a = ge(a)),
    a in e
      ? Object.defineProperty(e, a, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[a] = r),
    e
  );
}
function ge(e) {
  var a = ot(e, "string");
  return M(a) == "symbol" ? a : a + "";
}
function ot(e, a) {
  if (M(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, a);
    if (M(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var D = (function (e) {
  function a() {
    var r;
    tt(this, a);
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return (
      (r = at(this, a, [].concat(s))),
      C(r, "state", { isAnimationFinished: !0 }),
      C(r, "id", we("recharts-area-")),
      C(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), q(o) && o());
      }),
      C(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), q(o) && o());
      }),
      r
    );
  }
  return (
    it(a, e),
    rt(
      a,
      [
        {
          key: "renderDots",
          value: function (n, s, i) {
            var o = this.props.isAnimationActive,
              l = this.state.isAnimationFinished;
            if (o && !l) return null;
            var c = this.props,
              d = c.dot,
              m = c.points,
              u = c.dataKey,
              p = k(this.props, !1),
              b = k(d, !0),
              j = m.map(function (v, w) {
                var y = S(
                  S(S({ key: "dot-".concat(w), r: 3 }, p), b),
                  {},
                  {
                    index: w,
                    cx: v.x,
                    cy: v.y,
                    dataKey: u,
                    value: v.value,
                    payload: v.payload,
                    points: m,
                  },
                );
                return a.renderDotItem(d, y);
              }),
              N = {
                clipPath: n
                  ? "url(#clipPath-".concat(s ? "" : "dots-").concat(i, ")")
                  : null,
              };
            return h.createElement(
              K,
              R({ className: "recharts-area-dots" }, N),
              j,
            );
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (n) {
            var s = this.props,
              i = s.baseLine,
              o = s.points,
              l = s.strokeWidth,
              c = o[0].x,
              d = o[o.length - 1].x,
              m = n * Math.abs(c - d),
              u = W(
                o.map(function (p) {
                  return p.y || 0;
                }),
              );
            return (
              I(i) && typeof i == "number"
                ? (u = Math.max(i, u))
                : i &&
                  Array.isArray(i) &&
                  i.length &&
                  (u = Math.max(
                    W(
                      i.map(function (p) {
                        return p.y || 0;
                      }),
                    ),
                    u,
                  )),
              I(u)
                ? h.createElement("rect", {
                    x: c < d ? c : c - m,
                    y: 0,
                    width: m,
                    height: Math.floor(
                      u + (l ? parseInt("".concat(l), 10) : 1),
                    ),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (n) {
            var s = this.props,
              i = s.baseLine,
              o = s.points,
              l = s.strokeWidth,
              c = o[0].y,
              d = o[o.length - 1].y,
              m = n * Math.abs(c - d),
              u = W(
                o.map(function (p) {
                  return p.x || 0;
                }),
              );
            return (
              I(i) && typeof i == "number"
                ? (u = Math.max(i, u))
                : i &&
                  Array.isArray(i) &&
                  i.length &&
                  (u = Math.max(
                    W(
                      i.map(function (p) {
                        return p.x || 0;
                      }),
                    ),
                    u,
                  )),
              I(u)
                ? h.createElement("rect", {
                    x: 0,
                    y: c < d ? c : c - m,
                    width: u + (l ? parseInt("".concat(l), 10) : 1),
                    height: Math.floor(m),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (n) {
            var s = this.props.layout;
            return s === "vertical"
              ? this.renderVerticalRect(n)
              : this.renderHorizontalRect(n);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (n, s, i, o) {
            var l = this.props,
              c = l.layout,
              d = l.type,
              m = l.stroke,
              u = l.connectNulls,
              p = l.isRange;
            l.ref;
            var b = ve(l, Qe);
            return h.createElement(
              K,
              { clipPath: i ? "url(#clipPath-".concat(o, ")") : null },
              h.createElement(
                X,
                R({}, k(b, !0), {
                  points: n,
                  connectNulls: u,
                  type: d,
                  baseLine: s,
                  layout: c,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              m !== "none" &&
                h.createElement(
                  X,
                  R({}, k(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: c,
                    type: d,
                    connectNulls: u,
                    fill: "none",
                    points: n,
                  }),
                ),
              m !== "none" &&
                p &&
                h.createElement(
                  X,
                  R({}, k(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: c,
                    type: d,
                    connectNulls: u,
                    fill: "none",
                    points: s,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (n, s) {
            var i = this,
              o = this.props,
              l = o.points,
              c = o.baseLine,
              d = o.isAnimationActive,
              m = o.animationBegin,
              u = o.animationDuration,
              p = o.animationEasing,
              b = o.animationId,
              j = this.state,
              N = j.prevPoints,
              v = j.prevBaseLine;
            return h.createElement(
              Ke,
              {
                begin: m,
                duration: u,
                isActive: d,
                easing: p,
                from: { t: 0 },
                to: { t: 1 },
                key: "area-".concat(b),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (w) {
                var y = w.t;
                if (N) {
                  var P = N.length / l.length,
                    x = l.map(function (A, _) {
                      var L = Math.floor(_ * P);
                      if (N[L]) {
                        var E = N[L],
                          z = T(E.x, A.x),
                          F = T(E.y, A.y);
                        return S(S({}, A), {}, { x: z(y), y: F(y) });
                      }
                      return A;
                    }),
                    f;
                  if (I(c) && typeof c == "number") {
                    var g = T(v, c);
                    f = g(y);
                  } else if (ae(c) || Ne(c)) {
                    var O = T(v, 0);
                    f = O(y);
                  } else
                    f = c.map(function (A, _) {
                      var L = Math.floor(_ * P);
                      if (v[L]) {
                        var E = v[L],
                          z = T(E.x, A.x),
                          F = T(E.y, A.y);
                        return S(S({}, A), {}, { x: z(y), y: F(y) });
                      }
                      return A;
                    });
                  return i.renderAreaStatically(x, f, n, s);
                }
                return h.createElement(
                  K,
                  null,
                  h.createElement(
                    "defs",
                    null,
                    h.createElement(
                      "clipPath",
                      { id: "animationClipPath-".concat(s) },
                      i.renderClipRect(y),
                    ),
                  ),
                  h.createElement(
                    K,
                    { clipPath: "url(#animationClipPath-".concat(s, ")") },
                    i.renderAreaStatically(l, c, n, s),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (n, s) {
            var i = this.props,
              o = i.points,
              l = i.baseLine,
              c = i.isAnimationActive,
              d = this.state,
              m = d.prevPoints,
              u = d.prevBaseLine,
              p = d.totalLength;
            return c &&
              o &&
              o.length &&
              ((!m && p > 0) || !ne(m, o) || !ne(u, l))
              ? this.renderAreaWithAnimation(n, s)
              : this.renderAreaStatically(o, l, n, s);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              s = this.props,
              i = s.hide,
              o = s.dot,
              l = s.points,
              c = s.className,
              d = s.top,
              m = s.left,
              u = s.xAxis,
              p = s.yAxis,
              b = s.width,
              j = s.height,
              N = s.isAnimationActive,
              v = s.id;
            if (i || !l || !l.length) return null;
            var w = this.state.isAnimationFinished,
              y = l.length === 1,
              P = de("recharts-area", c),
              x = u && u.allowDataOverflow,
              f = p && p.allowDataOverflow,
              g = x || f,
              O = ae(v) ? this.id : v,
              A =
                (n = k(o, !1)) !== null && n !== void 0
                  ? n
                  : { r: 3, strokeWidth: 2 },
              _ = A.r,
              L = _ === void 0 ? 3 : _,
              E = A.strokeWidth,
              z = E === void 0 ? 2 : E,
              F = Ae(o) ? o : {},
              ee = F.clipDot,
              te = ee === void 0 ? !0 : ee,
              V = L * 2 + z;
            return h.createElement(
              K,
              { className: P },
              x || f
                ? h.createElement(
                    "defs",
                    null,
                    h.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(O) },
                      h.createElement("rect", {
                        x: x ? m : m - b / 2,
                        y: f ? d : d - j / 2,
                        width: x ? b : b * 2,
                        height: f ? j : j * 2,
                      }),
                    ),
                    !te &&
                      h.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(O) },
                        h.createElement("rect", {
                          x: m - V / 2,
                          y: d - V / 2,
                          width: b + V,
                          height: j + V,
                        }),
                      ),
                  )
                : null,
              y ? null : this.renderArea(g, O),
              (o || y) && this.renderDots(g, te, O),
              (!N || w) && $e.renderCallByParent(this.props, l),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, s) {
            return n.animationId !== s.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  curBaseLine: n.baseLine,
                  prevPoints: s.curPoints,
                  prevBaseLine: s.curBaseLine,
                }
              : n.points !== s.curPoints || n.baseLine !== s.curBaseLine
                ? { curPoints: n.points, curBaseLine: n.baseLine }
                : null;
          },
        },
      ],
    )
  );
})(ue.PureComponent);
fe = D;
C(D, "displayName", "Area");
C(D, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Ve.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
});
C(D, "getBaseValue", function (e, a, r, n) {
  var s = e.layout,
    i = e.baseValue,
    o = a.props.baseValue,
    l = o ?? i;
  if (I(l) && typeof l == "number") return l;
  var c = s === "horizontal" ? n : r,
    d = c.scale.domain();
  if (c.type === "number") {
    var m = Math.max(d[0], d[1]),
      u = Math.min(d[0], d[1]);
    return l === "dataMin"
      ? u
      : l === "dataMax" || m < 0
        ? m
        : Math.max(Math.min(d[0], d[1]), 0);
  }
  return l === "dataMin" ? d[0] : l === "dataMax" ? d[1] : d[0];
});
C(D, "getComposedData", function (e) {
  var a = e.props,
    r = e.item,
    n = e.xAxis,
    s = e.yAxis,
    i = e.xAxisTicks,
    o = e.yAxisTicks,
    l = e.bandSize,
    c = e.dataKey,
    d = e.stackedData,
    m = e.dataStartIndex,
    u = e.displayedData,
    p = e.offset,
    b = a.layout,
    j = d && d.length,
    N = fe.getBaseValue(a, r, n, s),
    v = b === "horizontal",
    w = !1,
    y = u.map(function (x, f) {
      var g;
      j
        ? (g = d[m + f])
        : ((g = se(x, c)), Array.isArray(g) ? (w = !0) : (g = [N, g]));
      var O = g[1] == null || (j && se(x, c) == null);
      return v
        ? {
            x: ie({ axis: n, ticks: i, bandSize: l, entry: x, index: f }),
            y: O ? null : s.scale(g[1]),
            value: g,
            payload: x,
          }
        : {
            x: O ? null : n.scale(g[1]),
            y: ie({ axis: s, ticks: o, bandSize: l, entry: x, index: f }),
            value: g,
            payload: x,
          };
    }),
    P;
  return (
    j || w
      ? (P = y.map(function (x) {
          var f = Array.isArray(x.value) ? x.value[0] : null;
          return v
            ? { x: x.x, y: f != null && x.y != null ? s.scale(f) : null }
            : { x: f != null ? n.scale(f) : null, y: x.y };
        }))
      : (P = v ? s.scale(N) : n.scale(N)),
    S({ points: y, baseLine: P, layout: b, isRange: w }, p)
  );
});
C(D, "renderDotItem", function (e, a) {
  var r;
  if (h.isValidElement(e)) r = h.cloneElement(e, a);
  else if (q(e)) r = e(a);
  else {
    var n = de("recharts-area-dot", typeof e != "boolean" ? e.className : ""),
      s = a.key,
      i = ve(a, Ze);
    r = h.createElement(We, R({}, i, { key: s, className: n }));
  }
  return r;
});
var lt = He({
  chartName: "AreaChart",
  GraphicalChild: D,
  axisComponents: [
    { axisType: "xAxis", AxisComp: H },
    { axisType: "yAxis", AxisComp: G },
  ],
  formatAxisMap: Ge,
});
const ce = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"],
  ct = ({ block: e }) =>
    t.jsxs("div", {
      className:
        "py-6 border-b border-border/50 mb-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      children: [
        t.jsx("h1", {
          className: "text-3xl font-bold tracking-tight text-foreground",
          children: e.content.title,
        }),
        e.content.body &&
          t.jsx("p", {
            className: "mt-2 text-muted-foreground text-lg leading-relaxed",
            children: e.content.body,
          }),
      ],
    }),
  dt = ({ block: e }) => {
    var s;
    const a = e.content.data || [],
      r = ((s = e.content.settings) == null ? void 0 : s.columns) || 3,
      n = Array.isArray(a)
        ? a
        : Object.entries(a).map(([i, o]) => ({ label: i, value: o }));
    return t.jsx("div", {
      className: `grid grid-cols-1 md:grid-cols-${r} gap-4 my-6`,
      children: n.map((i, o) => {
        const l =
            i.trend === "up" || (typeof i.trend == "number" && i.trend > 0),
          c = i.trend === "down" || (typeof i.trend == "number" && i.trend < 0);
        return t.jsx(
          B,
          {
            className:
              "p-5 card-hover border-border/40 bg-muted/20 relative overflow-hidden group",
            children: t.jsxs("div", {
              className: "relative z-10",
              children: [
                t.jsx("p", {
                  className:
                    "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                  children: i.label,
                }),
                t.jsxs("div", {
                  className: "flex items-baseline gap-2",
                  children: [
                    t.jsx("span", {
                      className: "text-2xl font-bold text-foreground",
                      children: i.value,
                    }),
                    i.change &&
                      t.jsxs("span", {
                        className: $(
                          "flex items-center text-xs font-bold",
                          l
                            ? "text-emerald-500"
                            : c
                              ? "text-rose-500"
                              : "text-muted-foreground",
                        ),
                        children: [
                          l && t.jsx(Re, { className: "h-3 w-3 mr-0.5" }),
                          c && t.jsx(_e, { className: "h-3 w-3 mr-0.5" }),
                          i.change,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          },
          o,
        );
      }),
    });
  },
  ut = ({ block: e }) => {
    const a = e.content.data || [],
      r = e.content.settings.chartType || "area",
      n = e.content.settings.height || 300,
      s = "hsl(var(--primary))";
    return t.jsxs(B, {
      className: "my-8 border-border/40 overflow-hidden",
      children: [
        t.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            t.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: e.content.title,
            }),
            e.content.description &&
              t.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: e.content.description,
              }),
          ],
        }),
        t.jsx("div", {
          className: "p-4",
          style: { height: n },
          children: t.jsx(Z, {
            width: "100%",
            height: "100%",
            children:
              r === "bar"
                ? t.jsxs(pe, {
                    data: a,
                    children: [
                      t.jsx(J, {
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      t.jsx(H, {
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      t.jsx(G, {
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                        tickFormatter: (i) => `R$${i / 1e3}k`,
                      }),
                      t.jsx(Y, {
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                        itemStyle: { color: "hsl(var(--foreground))" },
                      }),
                      t.jsx(xe, {
                        dataKey: "value",
                        fill: s,
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  })
                : t.jsxs(lt, {
                    data: a,
                    children: [
                      t.jsx("defs", {
                        children: t.jsxs("linearGradient", {
                          id: "colorValue",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            t.jsx("stop", {
                              offset: "5%",
                              stopColor: s,
                              stopOpacity: 0.3,
                            }),
                            t.jsx("stop", {
                              offset: "95%",
                              stopColor: s,
                              stopOpacity: 0,
                            }),
                          ],
                        }),
                      }),
                      t.jsx(J, {
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      t.jsx(H, {
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      t.jsx(G, { fontSize: 12, tickLine: !1, axisLine: !1 }),
                      t.jsx(Y, {
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                      }),
                      t.jsx(D, {
                        type: "monotone",
                        dataKey: "value",
                        stroke: s,
                        fillOpacity: 1,
                        fill: "url(#colorValue)",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
          }),
        }),
      ],
    });
  },
  mt = ({ block: e }) => {
    const a = e.content.data || [];
    return t.jsxs("div", {
      className: "my-8 space-y-4",
      children: [
        t.jsxs("h3", {
          className: "text-xl font-bold flex items-center gap-2",
          children: [
            t.jsx(De, { className: "h-5 w-5 text-primary" }),
            e.content.title,
          ],
        }),
        t.jsx("div", {
          className: "grid grid-cols-1 gap-3",
          children: a.map((r, n) => {
            const s = typeof r == "string" ? r : r.task || r.description,
              i = r.priority || "medium";
            return t.jsxs(
              "div",
              {
                className:
                  "flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group",
                children: [
                  t.jsx("div", {
                    className: $(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all",
                      i === "high"
                        ? "bg-rose-100 text-rose-600"
                        : "bg-primary/10 text-primary",
                    ),
                    children: n + 1,
                  }),
                  t.jsxs("div", {
                    className: "flex-1",
                    children: [
                      t.jsx("p", { className: "text-foreground", children: s }),
                      r.priority &&
                        t.jsxs("span", {
                          className: $(
                            "text-[10px] uppercase font-bold tracking-tighter",
                            i === "high"
                              ? "text-rose-500"
                              : "text-muted-foreground",
                          ),
                          children: ["Prioridade: ", i],
                        }),
                    ],
                  }),
                ],
              },
              n,
            );
          }),
        }),
      ],
    });
  },
  ht = ({ block: e }) => {
    var r;
    const a =
      e.content.body ||
      ((r = e.content.data) == null ? void 0 : r.text) ||
      e.content.data ||
      "Aguardando processamento de inteligência artificial...";
    return t.jsxs(B, {
      className: "my-6 border-primary/20 bg-primary/5 overflow-hidden group",
      children: [
        t.jsx("div", {
          className: "h-1 w-full bg-gradient-to-r from-primary/50 to-primary",
        }),
        t.jsxs("div", {
          className: "p-5",
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-2 mb-3",
              children: [
                t.jsx("u", {
                  className:
                    "h-5 w-5 text-primary animate-pulse flex items-center justify-center",
                  children: t.jsx(Le, { className: "h-4 w-4" }),
                }),
                t.jsx("h3", {
                  className: "font-bold text-lg text-foreground",
                  children: e.content.title,
                }),
              ],
            }),
            t.jsx("div", {
              className:
                "text-muted-foreground leading-relaxed whitespace-pre-wrap",
              children: a,
            }),
          ],
        }),
      ],
    });
  },
  pt = ({ block: e }) => {
    const a = e.content.data || [],
      r = e.content.settings.height || 300;
    return t.jsxs(B, {
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        t.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            t.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: e.content.title,
            }),
            e.content.description &&
              t.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: e.content.description,
              }),
          ],
        }),
        t.jsx("div", {
          className: "p-4",
          style: { height: r },
          children: t.jsx(Z, {
            width: "100%",
            height: "100%",
            children: t.jsxs(Ye, {
              children: [
                t.jsx(Ue, {
                  data: a,
                  cx: "50%",
                  cy: "50%",
                  innerRadius: 60,
                  outerRadius: 80,
                  paddingAngle: 5,
                  dataKey: "value",
                  children: a.map((n, s) =>
                    t.jsx(Xe, { fill: ce[s % ce.length] }, `cell-${s}`),
                  ),
                }),
                t.jsx(Y, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                t.jsx(qe, { verticalAlign: "bottom", height: 36 }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  xt = ({ block: e }) => {
    const a = e.content.data || [],
      r = e.content.settings.height || 300;
    return t.jsxs(B, {
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        t.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            t.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: e.content.title,
            }),
            e.content.description &&
              t.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: e.content.description,
              }),
          ],
        }),
        t.jsx("div", {
          className: "p-4",
          style: { height: r },
          children: t.jsx(Z, {
            width: "100%",
            height: "100%",
            children: t.jsxs(pe, {
              data: a,
              layout: "vertical",
              margin: { left: 40 },
              children: [
                t.jsx(J, {
                  strokeDasharray: "3 3",
                  horizontal: !1,
                  stroke: "hsl(var(--muted))",
                }),
                t.jsx(H, {
                  type: "number",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                }),
                t.jsx(G, {
                  dataKey: "name",
                  type: "category",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                  width: 80,
                }),
                t.jsx(Y, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                t.jsx(xe, {
                  dataKey: "value",
                  fill: "hsl(var(--primary))",
                  radius: [0, 4, 4, 0],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  ft = ({ block: e }) => {
    const a = e.content.settings.variant || "info",
      r = {
        info: t.jsx(Ie, { className: "h-5 w-5 text-blue-500" }),
        warning: t.jsx(he, { className: "h-5 w-5 text-amber-500" }),
        success: t.jsx(Te, { className: "h-5 w-5 text-emerald-500" }),
        insight: t.jsx(ke, { className: "h-5 w-5 text-primary" }),
      },
      n = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900",
        insight: "bg-primary/5 border-primary/20 text-foreground",
      };
    return t.jsxs("div", {
      className: $(
        "p-4 rounded-xl border flex gap-3 my-6 animate-in fade-in zoom-in-95 duration-300",
        n[a],
      ),
      children: [
        t.jsx("div", { className: "mt-0.5", children: r[a] }),
        t.jsxs("div", {
          children: [
            t.jsx("h4", {
              className: "font-bold text-sm uppercase tracking-wider mb-1",
              children: e.content.title,
            }),
            t.jsx("p", {
              className: "text-sm leading-relaxed",
              children: e.content.body,
            }),
          ],
        }),
      ],
    });
  },
  vt = ({ block: e }) =>
    t.jsxs("div", {
      className:
        "my-8 prose prose-slate max-w-none prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed",
      children: [
        e.content.title &&
          t.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: e.content.title,
          }),
        t.jsx("div", {
          className: "whitespace-pre-wrap",
          children: e.content.body,
        }),
      ],
    }),
  yt = ({ block: e }) => {
    const a = e.content.data || [];
    return t.jsx(B, {
      className: "my-6 border-border/40",
      children: t.jsxs("div", {
        className: "p-6",
        children: [
          t.jsxs("h3", {
            className: "text-lg font-bold mb-6 flex items-center gap-2",
            children: [
              t.jsx(Be, { className: "h-5 w-5 text-primary" }),
              e.content.title,
            ],
          }),
          t.jsx("div", {
            className: "space-y-6",
            children: a.map((r, n) =>
              t.jsxs(
                "div",
                {
                  className: "space-y-2",
                  children: [
                    t.jsxs("div", {
                      className: "flex justify-between text-sm",
                      children: [
                        t.jsx("span", {
                          className: "font-medium",
                          children: r.label,
                        }),
                        t.jsxs("span", {
                          className: "text-muted-foreground",
                          children: [r.value, " vs ", r.benchmark, " (Meta)"],
                        }),
                      ],
                    }),
                    t.jsx("div", {
                      className:
                        "h-3 w-full bg-muted rounded-full overflow-hidden flex",
                      children: t.jsx("div", {
                        className: $(
                          "h-full transition-all duration-1000",
                          r.percent >= 100 ? "bg-emerald-500" : "bg-primary",
                        ),
                        style: { width: `${Math.min(r.percent, 100)}%` },
                      }),
                    }),
                  ],
                },
                n,
              ),
            ),
          }),
        ],
      }),
    });
  },
  gt = ({ block: e }) =>
    t.jsxs("div", {
      className:
        "p-8 border-2 border-dashed border-muted rounded-xl text-center my-4",
      children: [
        t.jsx(me, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
        t.jsxs("p", {
          className: "text-muted-foreground",
          children: ['Tipo de bloco "', e.type, '" em desenvolvimento.'],
        }),
      ],
    });
class bt extends ue.Component {
  constructor() {
    super(...arguments);
    re(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, n) {
    console.error("Uncaught error in Report Block:", r, n);
  }
  render() {
    return this.state.hasError
      ? t.jsxs(B, {
          className:
            "my-4 border-destructive/20 bg-destructive/5 p-6 text-center",
          children: [
            t.jsx(me, { className: "h-8 w-8 text-destructive mx-auto mb-2" }),
            t.jsx("h3", {
              className: "font-bold text-destructive mb-1",
              children: "Erro no Bloco",
            }),
            t.jsxs("p", {
              className: "text-sm text-muted-foreground mb-4",
              children: [
                'Não foi possível carregar o bloco "',
                this.props.blockTitle || "Dados",
                '".',
              ],
            }),
            t.jsxs(Ce, {
              variant: "outline",
              size: "sm",
              onClick: () => this.setState({ hasError: !1 }),
              className: "gap-2",
              children: [
                t.jsx(Me, { className: "h-4 w-4" }),
                "Tentar Novamente",
              ],
            }),
          ],
        })
      : this.props.children;
  }
}
const Pt = ({ blocks: e }) => {
    const a = (r) => {
      switch (r.type) {
        case "HERO":
          return t.jsx(ct, { block: r }, r.id);
        case "KPI_GRID":
          return t.jsx(dt, { block: r }, r.id);
        case "AI_INSIGHT":
          return t.jsx(ht, { block: r }, r.id);
        case "CHART":
          return t.jsx(ut, { block: r }, r.id);
        case "CHART_DONNUT":
          return t.jsx(pt, { block: r }, r.id);
        case "CHART_BAR_HORIZONTAL":
          return t.jsx(xt, { block: r }, r.id);
        case "ACTION_PLAN":
          return t.jsx(mt, { block: r }, r.id);
        case "CALLOUT":
          return t.jsx(ft, { block: r }, r.id);
        case "MARKDOWN":
          return t.jsx(vt, { block: r }, r.id);
        case "BENCHMARK_COMPARISON":
          return t.jsx(yt, { block: r }, r.id);
        default:
          return t.jsx(gt, { block: r }, r.id);
      }
    };
    return t.jsx("div", {
      className: "space-y-4",
      children: e.map((r) =>
        t.jsx(
          bt,
          {
            blockTitle: r.content.title,
            children: t.jsx("div", {
              className: "w-full transition-all duration-300",
              children: a(r),
            }),
          },
          r.id,
        ),
      ),
    });
  },
  Et = ({ diagnostic: e, onPrioritize: a }) =>
    t.jsxs(B, {
      className:
        "border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/20 to-transparent",
      children: [
        t.jsxs(Oe, {
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                t.jsxs(Je, {
                  variant: "destructive",
                  className: "flex items-center gap-1",
                  children: [
                    t.jsx(he, { className: "h-3 w-3" }),
                    "Alerta Crítico",
                  ],
                }),
                t.jsx("span", {
                  className: "text-xs text-muted-foreground",
                  children: "Diagnóstico gerado pela IA",
                }),
              ],
            }),
            t.jsx(Pe, { className: "text-xl", children: e.title }),
            t.jsx(Ee, {
              className: "text-sm font-medium",
              children: e.description,
            }),
          ],
        }),
        t.jsxs(Se, {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            t.jsx("div", {
              className: "space-y-4",
              children: t.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  t.jsx("div", {
                    className: "mt-1 p-1 bg-amber-100 rounded-full",
                    children: t.jsx(ze, {
                      className: "h-4 w-4 text-amber-600",
                    }),
                  }),
                  t.jsxs("div", {
                    children: [
                      t.jsx("h4", {
                        className: "text-sm font-semibold mb-1",
                        children: "Causas Prováveis",
                      }),
                      t.jsx("ul", {
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: e.causes.map((r, n) =>
                          t.jsx("li", { children: r }, n),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            t.jsx("div", {
              className: "space-y-4",
              children: t.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  t.jsx("div", {
                    className: "mt-1 p-1 bg-red-100 rounded-full",
                    children: t.jsx(Fe, { className: "h-4 w-4 text-red-600" }),
                  }),
                  t.jsxs("div", {
                    children: [
                      t.jsx("h4", {
                        className: "text-sm font-semibold mb-1",
                        children: "Implicações no Negócio",
                      }),
                      t.jsx("ul", {
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: e.implications.map((r, n) =>
                          t.jsx("li", { children: r }, n),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
export { Pt as D, Et as a };
