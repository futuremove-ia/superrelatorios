var ut = Object.defineProperty;
var ft = (t, e, a) =>
  e in t
    ? ut(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (t[e] = a);
var at = (t, e, a) => ft(t, typeof e != "symbol" ? e + "" : e, a);
import { l as dt, j as o, d as K, B as gt } from "./index-BZzvAVnT.js";
import { C as S, b as Lt, c as Dt, d as At, a as Nt } from "./card-DCmFy9yX.js";
import {
  d as jt,
  $ as Ct,
  J as wt,
  H as St,
  b as Rt,
  N as mt,
  a0 as Pt,
  T as pt,
  a as Et,
  L as Ot,
  a1 as Tt,
  a2 as _t,
  a3 as It,
} from "./utils-C25gojUd.js";
import {
  G as Ft,
  f as T,
  L as H,
  m as G,
  i as I,
  C as U,
  A as zt,
  a as _,
  b as et,
  c as Mt,
  d as nt,
  h as Ht,
  e as Kt,
  g as rt,
  j as st,
  k as q,
  D as $t,
  u as Gt,
  l as Vt,
  X as V,
  Y as W,
  n as Wt,
  R as Q,
  B as xt,
  o as J,
  T as X,
  p as bt,
  P as Xt,
  q as Yt,
  r as Ut,
  s as qt,
} from "./PieChart-B46FBJBd.js";
import { b as x, r as vt } from "./vendor-BgR6OOld.js";
import { B as Jt } from "./badge-DMGJasfj.js";
var Zt = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  Qt = ["key"],
  kt;
function F(t) {
  "@babel/helpers - typeof";
  return (
    (F =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    F(t)
  );
}
function yt(t, e) {
  if (t == null) return {};
  var a = to(t, e),
    n,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      ((n = s[r]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (a[n] = t[n]));
  }
  return a;
}
function to(t, e) {
  if (t == null) return {};
  var a = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      a[n] = t[n];
    }
  return a;
}
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
          }
          return t;
        }),
    E.apply(this, arguments)
  );
}
function ct(t, e) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      a.push.apply(a, n));
  }
  return a;
}
function w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ct(Object(a), !0).forEach(function (n) {
          A(t, n, a[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
        : ct(Object(a)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(a, n));
          });
  }
  return t;
}
function oo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function it(t, e) {
  for (var a = 0; a < e.length; a++) {
    var n = e[a];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Bt(n.key), n));
  }
}
function ao(t, e, a) {
  return (
    e && it(t.prototype, e),
    a && it(t, a),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function eo(t, e, a) {
  return (
    (e = Y(e)),
    no(
      t,
      ht() ? Reflect.construct(e, a || [], Y(t).constructor) : e.apply(t, a),
    )
  );
}
function no(t, e) {
  if (e && (F(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return ro(t);
}
function ro(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function ht() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ht = function () {
    return !!t;
  })();
}
function Y(t) {
  return (
    (Y = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    Y(t)
  );
}
function so(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Z(t, e));
}
function Z(t, e) {
  return (
    (Z = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return ((n.__proto__ = r), n);
        }),
    Z(t, e)
  );
}
function A(t, e, a) {
  return (
    (e = Bt(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = a),
    t
  );
}
function Bt(t) {
  var e = co(t, "string");
  return F(e) == "symbol" ? e : e + "";
}
function co(t, e) {
  if (F(t) != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(t, e || "default");
    if (F(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var R = (function (t) {
  function e() {
    var a;
    oo(this, e);
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return (
      (a = eo(this, e, [].concat(r))),
      A(a, "state", { isAnimationFinished: !0 }),
      A(a, "id", Gt("recharts-area-")),
      A(a, "handleAnimationEnd", function () {
        var c = a.props.onAnimationEnd;
        (a.setState({ isAnimationFinished: !0 }), q(c) && c());
      }),
      A(a, "handleAnimationStart", function () {
        var c = a.props.onAnimationStart;
        (a.setState({ isAnimationFinished: !1 }), q(c) && c());
      }),
      a
    );
  }
  return (
    so(e, t),
    ao(
      e,
      [
        {
          key: "renderDots",
          value: function (n, r, s) {
            var c = this.props.isAnimationActive,
              i = this.state.isAnimationFinished;
            if (c && !i) return null;
            var l = this.props,
              d = l.dot,
              p = l.points,
              m = l.dataKey,
              b = T(this.props, !1),
              u = T(d, !0),
              f = p.map(function (y, D) {
                var h = w(
                  w(w({ key: "dot-".concat(D), r: 3 }, b), u),
                  {},
                  {
                    index: D,
                    cx: y.x,
                    cy: y.y,
                    dataKey: m,
                    value: y.value,
                    payload: y.payload,
                    points: p,
                  },
                );
                return e.renderDotItem(d, h);
              }),
              g = {
                clipPath: n
                  ? "url(#clipPath-".concat(r ? "" : "dots-").concat(s, ")")
                  : null,
              };
            return x.createElement(
              H,
              E({ className: "recharts-area-dots" }, g),
              f,
            );
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (n) {
            var r = this.props,
              s = r.baseLine,
              c = r.points,
              i = r.strokeWidth,
              l = c[0].x,
              d = c[c.length - 1].x,
              p = n * Math.abs(l - d),
              m = G(
                c.map(function (b) {
                  return b.y || 0;
                }),
              );
            return (
              I(s) && typeof s == "number"
                ? (m = Math.max(s, m))
                : s &&
                  Array.isArray(s) &&
                  s.length &&
                  (m = Math.max(
                    G(
                      s.map(function (b) {
                        return b.y || 0;
                      }),
                    ),
                    m,
                  )),
              I(m)
                ? x.createElement("rect", {
                    x: l < d ? l : l - p,
                    y: 0,
                    width: p,
                    height: Math.floor(
                      m + (i ? parseInt("".concat(i), 10) : 1),
                    ),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (n) {
            var r = this.props,
              s = r.baseLine,
              c = r.points,
              i = r.strokeWidth,
              l = c[0].y,
              d = c[c.length - 1].y,
              p = n * Math.abs(l - d),
              m = G(
                c.map(function (b) {
                  return b.x || 0;
                }),
              );
            return (
              I(s) && typeof s == "number"
                ? (m = Math.max(s, m))
                : s &&
                  Array.isArray(s) &&
                  s.length &&
                  (m = Math.max(
                    G(
                      s.map(function (b) {
                        return b.x || 0;
                      }),
                    ),
                    m,
                  )),
              I(m)
                ? x.createElement("rect", {
                    x: 0,
                    y: l < d ? l : l - p,
                    width: m + (i ? parseInt("".concat(i), 10) : 1),
                    height: Math.floor(p),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (n) {
            var r = this.props.layout;
            return r === "vertical"
              ? this.renderVerticalRect(n)
              : this.renderHorizontalRect(n);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (n, r, s, c) {
            var i = this.props,
              l = i.layout,
              d = i.type,
              p = i.stroke,
              m = i.connectNulls,
              b = i.isRange;
            i.ref;
            var u = yt(i, Zt);
            return x.createElement(
              H,
              { clipPath: s ? "url(#clipPath-".concat(c, ")") : null },
              x.createElement(
                U,
                E({}, T(u, !0), {
                  points: n,
                  connectNulls: m,
                  type: d,
                  baseLine: r,
                  layout: l,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              p !== "none" &&
                x.createElement(
                  U,
                  E({}, T(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: d,
                    connectNulls: m,
                    fill: "none",
                    points: n,
                  }),
                ),
              p !== "none" &&
                b &&
                x.createElement(
                  U,
                  E({}, T(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: d,
                    connectNulls: m,
                    fill: "none",
                    points: r,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (n, r) {
            var s = this,
              c = this.props,
              i = c.points,
              l = c.baseLine,
              d = c.isAnimationActive,
              p = c.animationBegin,
              m = c.animationDuration,
              b = c.animationEasing,
              u = c.animationId,
              f = this.state,
              g = f.prevPoints,
              y = f.prevBaseLine;
            return x.createElement(
              zt,
              {
                begin: p,
                duration: m,
                isActive: d,
                easing: b,
                from: { t: 0 },
                to: { t: 1 },
                key: "area-".concat(u),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (D) {
                var h = D.t;
                if (g) {
                  var j = g.length / i.length,
                    v = i.map(function (L, O) {
                      var P = Math.floor(O * j);
                      if (g[P]) {
                        var C = g[P],
                          z = _(C.x, L.x),
                          M = _(C.y, L.y);
                        return w(w({}, L), {}, { x: z(h), y: M(h) });
                      }
                      return L;
                    }),
                    k;
                  if (I(l) && typeof l == "number") {
                    var B = _(y, l);
                    k = B(h);
                  } else if (et(l) || Mt(l)) {
                    var N = _(y, 0);
                    k = N(h);
                  } else
                    k = l.map(function (L, O) {
                      var P = Math.floor(O * j);
                      if (y[P]) {
                        var C = y[P],
                          z = _(C.x, L.x),
                          M = _(C.y, L.y);
                        return w(w({}, L), {}, { x: z(h), y: M(h) });
                      }
                      return L;
                    });
                  return s.renderAreaStatically(v, k, n, r);
                }
                return x.createElement(
                  H,
                  null,
                  x.createElement(
                    "defs",
                    null,
                    x.createElement(
                      "clipPath",
                      { id: "animationClipPath-".concat(r) },
                      s.renderClipRect(h),
                    ),
                  ),
                  x.createElement(
                    H,
                    { clipPath: "url(#animationClipPath-".concat(r, ")") },
                    s.renderAreaStatically(i, l, n, r),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (n, r) {
            var s = this.props,
              c = s.points,
              i = s.baseLine,
              l = s.isAnimationActive,
              d = this.state,
              p = d.prevPoints,
              m = d.prevBaseLine,
              b = d.totalLength;
            return l &&
              c &&
              c.length &&
              ((!p && b > 0) || !nt(p, c) || !nt(m, i))
              ? this.renderAreaWithAnimation(n, r)
              : this.renderAreaStatically(c, i, n, r);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              r = this.props,
              s = r.hide,
              c = r.dot,
              i = r.points,
              l = r.className,
              d = r.top,
              p = r.left,
              m = r.xAxis,
              b = r.yAxis,
              u = r.width,
              f = r.height,
              g = r.isAnimationActive,
              y = r.id;
            if (s || !i || !i.length) return null;
            var D = this.state.isAnimationFinished,
              h = i.length === 1,
              j = dt("recharts-area", l),
              v = m && m.allowDataOverflow,
              k = b && b.allowDataOverflow,
              B = v || k,
              N = et(y) ? this.id : y,
              L =
                (n = T(c, !1)) !== null && n !== void 0
                  ? n
                  : { r: 3, strokeWidth: 2 },
              O = L.r,
              P = O === void 0 ? 3 : O,
              C = L.strokeWidth,
              z = C === void 0 ? 2 : C,
              M = Ht(c) ? c : {},
              tt = M.clipDot,
              ot = tt === void 0 ? !0 : tt,
              $ = P * 2 + z;
            return x.createElement(
              H,
              { className: j },
              v || k
                ? x.createElement(
                    "defs",
                    null,
                    x.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(N) },
                      x.createElement("rect", {
                        x: v ? p : p - u / 2,
                        y: k ? d : d - f / 2,
                        width: v ? u : u * 2,
                        height: k ? f : f * 2,
                      }),
                    ),
                    !ot &&
                      x.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(N) },
                        x.createElement("rect", {
                          x: p - $ / 2,
                          y: d - $ / 2,
                          width: u + $,
                          height: f + $,
                        }),
                      ),
                  )
                : null,
              h ? null : this.renderArea(B, N),
              (c || h) && this.renderDots(B, ot, N),
              (!g || D) && Kt.renderCallByParent(this.props, i),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, r) {
            return n.animationId !== r.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  curBaseLine: n.baseLine,
                  prevPoints: r.curPoints,
                  prevBaseLine: r.curBaseLine,
                }
              : n.points !== r.curPoints || n.baseLine !== r.curBaseLine
                ? { curPoints: n.points, curBaseLine: n.baseLine }
                : null;
          },
        },
      ],
    )
  );
})(vt.PureComponent);
kt = R;
A(R, "displayName", "Area");
A(R, "defaultProps", {
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
  isAnimationActive: !Ft.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
});
A(R, "getBaseValue", function (t, e, a, n) {
  var r = t.layout,
    s = t.baseValue,
    c = e.props.baseValue,
    i = c ?? s;
  if (I(i) && typeof i == "number") return i;
  var l = r === "horizontal" ? n : a,
    d = l.scale.domain();
  if (l.type === "number") {
    var p = Math.max(d[0], d[1]),
      m = Math.min(d[0], d[1]);
    return i === "dataMin"
      ? m
      : i === "dataMax" || p < 0
        ? p
        : Math.max(Math.min(d[0], d[1]), 0);
  }
  return i === "dataMin" ? d[0] : i === "dataMax" ? d[1] : d[0];
});
A(R, "getComposedData", function (t) {
  var e = t.props,
    a = t.item,
    n = t.xAxis,
    r = t.yAxis,
    s = t.xAxisTicks,
    c = t.yAxisTicks,
    i = t.bandSize,
    l = t.dataKey,
    d = t.stackedData,
    p = t.dataStartIndex,
    m = t.displayedData,
    b = t.offset,
    u = e.layout,
    f = d && d.length,
    g = kt.getBaseValue(e, a, n, r),
    y = u === "horizontal",
    D = !1,
    h = m.map(function (v, k) {
      var B;
      f
        ? (B = d[p + k])
        : ((B = rt(v, l)), Array.isArray(B) ? (D = !0) : (B = [g, B]));
      var N = B[1] == null || (f && rt(v, l) == null);
      return y
        ? {
            x: st({ axis: n, ticks: s, bandSize: i, entry: v, index: k }),
            y: N ? null : r.scale(B[1]),
            value: B,
            payload: v,
          }
        : {
            x: N ? null : n.scale(B[1]),
            y: st({ axis: r, ticks: c, bandSize: i, entry: v, index: k }),
            value: B,
            payload: v,
          };
    }),
    j;
  return (
    f || D
      ? (j = h.map(function (v) {
          var k = Array.isArray(v.value) ? v.value[0] : null;
          return y
            ? { x: v.x, y: k != null && v.y != null ? r.scale(k) : null }
            : { x: k != null ? n.scale(k) : null, y: v.y };
        }))
      : (j = y ? r.scale(g) : n.scale(g)),
    w({ points: h, baseLine: j, layout: u, isRange: D }, b)
  );
});
A(R, "renderDotItem", function (t, e) {
  var a;
  if (x.isValidElement(t)) a = x.cloneElement(t, e);
  else if (q(t)) a = t(e);
  else {
    var n = dt("recharts-area-dot", typeof t != "boolean" ? t.className : ""),
      r = e.key,
      s = yt(e, Qt);
    a = x.createElement($t, E({}, s, { key: r, className: n }));
  }
  return a;
});
var io = Vt({
  chartName: "AreaChart",
  GraphicalChild: R,
  axisComponents: [
    { axisType: "xAxis", AxisComp: V },
    { axisType: "yAxis", AxisComp: W },
  ],
  formatAxisMap: Wt,
});
const lt = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"],
  lo = ({ block: t }) =>
    o.jsxs("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:29:2",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "29",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22py-6%20border-b%20border-border%2F50%20mb-6%20transition-all%20animate-in%20fade-in%20slide-in-from-top-4%20duration-500%22%7D",
      className:
        "py-6 border-b border-border/50 mb-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      children: [
        o.jsx("h1", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:30:4",
          "data-lov-name": "h1",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "30",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "h1",
          "data-component-content":
            "%7B%22className%22%3A%22text-3xl%20font-bold%20tracking-tight%20text-foreground%22%7D",
          className: "text-3xl font-bold tracking-tight text-foreground",
          children: t.content.title,
        }),
        t.content.body &&
          o.jsx("p", {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:32:6",
            "data-lov-name": "p",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "32",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22className%22%3A%22mt-2%20text-muted-foreground%20text-lg%20leading-relaxed%22%7D",
            className: "mt-2 text-muted-foreground text-lg leading-relaxed",
            children: t.content.body,
          }),
      ],
    }),
  mo = ({ block: t }) => {
    var r;
    const e = t.content.data || [],
      a = ((r = t.content.settings) == null ? void 0 : r.columns) || 3,
      n = Array.isArray(e)
        ? e
        : Object.entries(e).map(([s, c]) => ({ label: s, value: c }));
    return o.jsx("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:50:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "50",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%7D",
      className: `grid grid-cols-1 md:grid-cols-${a} gap-4 my-6`,
      children: n.map((s, c) => {
        const i =
            s.trend === "up" || (typeof s.trend == "number" && s.trend > 0),
          l = s.trend === "down" || (typeof s.trend == "number" && s.trend < 0);
        return o.jsx(
          S,
          {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:56:10",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "56",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "Card",
            "data-component-content":
              "%7B%22className%22%3A%22p-5%20card-hover%20border-border%2F40%20bg-muted%2F20%20relative%20overflow-hidden%20group%22%7D",
            className:
              "p-5 card-hover border-border/40 bg-muted/20 relative overflow-hidden group",
            children: o.jsxs("div", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:57:12",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "57",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22relative%20z-10%22%7D",
              className: "relative z-10",
              children: [
                o.jsx("p", {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:58:14",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "58",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xs%20font-semibold%20text-muted-foreground%20uppercase%20tracking-wider%20mb-2%22%7D",
                  className:
                    "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                  children: s.label,
                }),
                o.jsxs("div", {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:59:14",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "59",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-baseline%20gap-2%22%7D",
                  className: "flex items-baseline gap-2",
                  children: [
                    o.jsx("span", {
                      "data-lov-id":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx:60:16",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                      "data-component-line": "60",
                      "data-component-file": "BlockLibrary.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-2xl%20font-bold%20text-foreground%22%7D",
                      className: "text-2xl font-bold text-foreground",
                      children: s.value,
                    }),
                    s.change &&
                      o.jsxs("span", {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:62:18",
                        "data-lov-name": "span",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "62",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        className: K(
                          "flex items-center text-xs font-bold",
                          i
                            ? "text-emerald-500"
                            : l
                              ? "text-rose-500"
                              : "text-muted-foreground",
                        ),
                        children: [
                          i &&
                            o.jsx(jt, {
                              "data-lov-id":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx:66:35",
                              "data-lov-name": "TrendingUp",
                              "data-component-path":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                              "data-component-line": "66",
                              "data-component-file": "BlockLibrary.tsx",
                              "data-component-name": "TrendingUp",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-3%20w-3%20mr-0.5%22%7D",
                              className: "h-3 w-3 mr-0.5",
                            }),
                          l &&
                            o.jsx(Ct, {
                              "data-lov-id":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx:67:35",
                              "data-lov-name": "TrendingDown",
                              "data-component-path":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                              "data-component-line": "67",
                              "data-component-file": "BlockLibrary.tsx",
                              "data-component-name": "TrendingDown",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-3%20w-3%20mr-0.5%22%7D",
                              className: "h-3 w-3 mr-0.5",
                            }),
                          s.change,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          },
          c,
        );
      }),
    });
  },
  po = ({ block: t }) => {
    const e = t.content.data || [],
      a = t.content.settings.chartType || "area",
      n = t.content.settings.height || 300,
      r = "hsl(var(--primary))";
    return o.jsxs(S, {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:88:4",
      "data-lov-name": "Card",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "88",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22my-8%20border-border%2F40%20overflow-hidden%22%7D",
      className: "my-8 border-border/40 overflow-hidden",
      children: [
        o.jsxs("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:89:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "89",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-6%20pb-2%22%7D",
          className: "p-6 pb-2",
          children: [
            o.jsx("h3", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:90:8",
              "data-lov-name": "h3",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "90",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%22%7D",
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              o.jsx("p", {
                "data-lov-id":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx:91:38",
                "data-lov-name": "p",
                "data-component-path":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                "data-component-line": "91",
                "data-component-file": "BlockLibrary.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:93:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "93",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          style: { height: n },
          children: o.jsx(Q, {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:94:8",
            "data-lov-name": "ResponsiveContainer",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "94",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "ResponsiveContainer",
            "data-component-content": "%7B%7D",
            width: "100%",
            height: "100%",
            children:
              a === "bar"
                ? o.jsxs(xt, {
                    "data-lov-id":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx:96:12",
                    "data-lov-name": "BarChart",
                    "data-component-path":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                    "data-component-line": "96",
                    "data-component-file": "BlockLibrary.tsx",
                    "data-component-name": "BarChart",
                    "data-component-content": "%7B%7D",
                    data: e,
                    children: [
                      o.jsx(J, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:97:14",
                        "data-lov-name": "CartesianGrid",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "97",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "CartesianGrid",
                        "data-component-content": "%7B%7D",
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      o.jsx(V, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:98:14",
                        "data-lov-name": "XAxis",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "98",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "XAxis",
                        "data-component-content": "%7B%7D",
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      o.jsx(W, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:99:14",
                        "data-lov-name": "YAxis",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "99",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "YAxis",
                        "data-component-content": "%7B%7D",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                        tickFormatter: (s) => `R$${s / 1e3}k`,
                      }),
                      o.jsx(X, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:100:14",
                        "data-lov-name": "Tooltip",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "100",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "Tooltip",
                        "data-component-content": "%7B%7D",
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                        itemStyle: { color: "hsl(var(--foreground))" },
                      }),
                      o.jsx(bt, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:104:14",
                        "data-lov-name": "Bar",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "104",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "Bar",
                        "data-component-content": "%7B%7D",
                        dataKey: "value",
                        fill: r,
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  })
                : o.jsxs(io, {
                    "data-lov-id":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx:107:12",
                    "data-lov-name": "AreaChart",
                    "data-component-path":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                    "data-component-line": "107",
                    "data-component-file": "BlockLibrary.tsx",
                    "data-component-name": "AreaChart",
                    "data-component-content": "%7B%7D",
                    data: e,
                    children: [
                      o.jsx("defs", {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:108:14",
                        "data-lov-name": "defs",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "108",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "defs",
                        "data-component-content": "%7B%7D",
                        children: o.jsxs("linearGradient", {
                          "data-lov-id":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx:109:16",
                          "data-lov-name": "linearGradient",
                          "data-component-path":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                          "data-component-line": "109",
                          "data-component-file": "BlockLibrary.tsx",
                          "data-component-name": "linearGradient",
                          "data-component-content": "%7B%7D",
                          id: "colorValue",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            o.jsx("stop", {
                              "data-lov-id":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx:110:18",
                              "data-lov-name": "stop",
                              "data-component-path":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                              "data-component-line": "110",
                              "data-component-file": "BlockLibrary.tsx",
                              "data-component-name": "stop",
                              "data-component-content": "%7B%7D",
                              offset: "5%",
                              stopColor: r,
                              stopOpacity: 0.3,
                            }),
                            o.jsx("stop", {
                              "data-lov-id":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx:111:18",
                              "data-lov-name": "stop",
                              "data-component-path":
                                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                              "data-component-line": "111",
                              "data-component-file": "BlockLibrary.tsx",
                              "data-component-name": "stop",
                              "data-component-content": "%7B%7D",
                              offset: "95%",
                              stopColor: r,
                              stopOpacity: 0,
                            }),
                          ],
                        }),
                      }),
                      o.jsx(J, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:114:14",
                        "data-lov-name": "CartesianGrid",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "114",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "CartesianGrid",
                        "data-component-content": "%7B%7D",
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      o.jsx(V, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:115:14",
                        "data-lov-name": "XAxis",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "115",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "XAxis",
                        "data-component-content": "%7B%7D",
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      o.jsx(W, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:116:14",
                        "data-lov-name": "YAxis",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "116",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "YAxis",
                        "data-component-content": "%7B%7D",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      o.jsx(X, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:117:14",
                        "data-lov-name": "Tooltip",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "117",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "Tooltip",
                        "data-component-content": "%7B%7D",
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                      }),
                      o.jsx(R, {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:120:14",
                        "data-lov-name": "Area",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "120",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "Area",
                        "data-component-content": "%7B%7D",
                        type: "monotone",
                        dataKey: "value",
                        stroke: r,
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
  xo = ({ block: t }) => {
    const e = t.content.data || [];
    return o.jsxs("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:134:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "134",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22my-8%20space-y-4%22%7D",
      className: "my-8 space-y-4",
      children: [
        o.jsxs("h3", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:135:6",
          "data-lov-name": "h3",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "135",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "h3",
          "data-component-content":
            "%7B%22className%22%3A%22text-xl%20font-bold%20flex%20items-center%20gap-2%22%7D",
          className: "text-xl font-bold flex items-center gap-2",
          children: [
            o.jsx(wt, {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:136:8",
              "data-lov-name": "CheckCircle2",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "136",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "CheckCircle2",
              "data-component-content":
                "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
              className: "h-5 w-5 text-primary",
            }),
            t.content.title,
          ],
        }),
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:139:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "139",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20gap-3%22%7D",
          className: "grid grid-cols-1 gap-3",
          children: e.map((a, n) => {
            const r = typeof a == "string" ? a : a.task || a.description,
              s = a.priority || "medium";
            return o.jsxs(
              "div",
              {
                "data-lov-id":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx:145:12",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                "data-component-line": "145",
                "data-component-file": "BlockLibrary.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-start%20gap-3%20p-4%20bg-muted%2F30%20rounded-xl%20border%20border-border%2F50%20hover%3Aborder-primary%2F30%20transition-colors%20group%22%7D",
                className:
                  "flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group",
                children: [
                  o.jsx("div", {
                    "data-lov-id":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx:146:14",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                    "data-component-line": "146",
                    "data-component-file": "BlockLibrary.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    className: K(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all",
                      s === "high"
                        ? "bg-rose-100 text-rose-600"
                        : "bg-primary/10 text-primary",
                    ),
                    children: n + 1,
                  }),
                  o.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx:152:14",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                    "data-component-line": "152",
                    "data-component-file": "BlockLibrary.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%22%7D",
                    className: "flex-1",
                    children: [
                      o.jsx("p", {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:153:16",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "153",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-foreground%22%7D",
                        className: "text-foreground",
                        children: r,
                      }),
                      a.priority &&
                        o.jsxs("span", {
                          "data-lov-id":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx:155:18",
                          "data-lov-name": "span",
                          "data-component-path":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                          "data-component-line": "155",
                          "data-component-file": "BlockLibrary.tsx",
                          "data-component-name": "span",
                          "data-component-content":
                            "%7B%22text%22%3A%22Prioridade%3A%22%7D",
                          className: K(
                            "text-[10px] uppercase font-bold tracking-tighter",
                            s === "high"
                              ? "text-rose-500"
                              : "text-muted-foreground",
                          ),
                          children: ["Prioridade: ", s],
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
  bo = ({ block: t }) => {
    var a;
    const e =
      t.content.body ||
      ((a = t.content.data) == null ? void 0 : a.text) ||
      t.content.data ||
      "Aguardando processamento de inteligência artificial...";
    return o.jsxs(S, {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:176:4",
      "data-lov-name": "Card",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "176",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22my-6%20border-primary%2F20%20bg-primary%2F5%20overflow-hidden%20group%22%7D",
      className: "my-6 border-primary/20 bg-primary/5 overflow-hidden group",
      children: [
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:177:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "177",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22h-1%20w-full%20bg-gradient-to-r%20from-primary%2F50%20to-primary%22%7D",
          className: "h-1 w-full bg-gradient-to-r from-primary/50 to-primary",
        }),
        o.jsxs("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:178:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "178",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-5%22%7D",
          className: "p-5",
          children: [
            o.jsxs("div", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:179:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "179",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-3%22%7D",
              className: "flex items-center gap-2 mb-3",
              children: [
                o.jsx("u", {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:180:10",
                  "data-lov-name": "u",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "180",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "u",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-5%20w-5%20text-primary%20animate-pulse%20flex%20items-center%20justify-center%22%7D",
                  className:
                    "h-5 w-5 text-primary animate-pulse flex items-center justify-center",
                  children: o.jsx(St, {
                    "data-lov-id":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx:181:12",
                    "data-lov-name": "Sparkles",
                    "data-component-path":
                      "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                    "data-component-line": "181",
                    "data-component-file": "BlockLibrary.tsx",
                    "data-component-name": "Sparkles",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                    className: "h-4 w-4",
                  }),
                }),
                o.jsx("h3", {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:183:10",
                  "data-lov-name": "h3",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "183",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "h3",
                  "data-component-content":
                    "%7B%22className%22%3A%22font-bold%20text-lg%20text-foreground%22%7D",
                  className: "font-bold text-lg text-foreground",
                  children: t.content.title,
                }),
              ],
            }),
            o.jsx("div", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:185:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "185",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%20leading-relaxed%20whitespace-pre-wrap%22%7D",
              className:
                "text-muted-foreground leading-relaxed whitespace-pre-wrap",
              children: e,
            }),
          ],
        }),
      ],
    });
  },
  vo = ({ block: t }) => {
    const e = t.content.data || [],
      a = t.content.settings.height || 300;
    return o.jsxs(S, {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:199:4",
      "data-lov-name": "Card",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "199",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22my-6%20border-border%2F40%20overflow-hidden%22%7D",
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        o.jsxs("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:200:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "200",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-6%20pb-2%22%7D",
          className: "p-6 pb-2",
          children: [
            o.jsx("h3", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:201:8",
              "data-lov-name": "h3",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "201",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%22%7D",
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              o.jsx("p", {
                "data-lov-id":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx:202:38",
                "data-lov-name": "p",
                "data-component-path":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                "data-component-line": "202",
                "data-component-file": "BlockLibrary.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:204:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "204",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          style: { height: a },
          children: o.jsx(Q, {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:205:8",
            "data-lov-name": "ResponsiveContainer",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "205",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "ResponsiveContainer",
            "data-component-content": "%7B%7D",
            width: "100%",
            height: "100%",
            children: o.jsxs(Xt, {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:206:10",
              "data-lov-name": "PieChart",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "206",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "PieChart",
              "data-component-content": "%7B%7D",
              children: [
                o.jsx(Yt, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:207:12",
                  "data-lov-name": "Pie",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "207",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "Pie",
                  "data-component-content": "%7B%7D",
                  data: e,
                  cx: "50%",
                  cy: "50%",
                  innerRadius: 60,
                  outerRadius: 80,
                  paddingAngle: 5,
                  dataKey: "value",
                  children: e.map((n, r) =>
                    o.jsx(
                      Ut,
                      {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:217:16",
                        "data-lov-name": "Cell",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "217",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "Cell",
                        "data-component-content": "%7B%7D",
                        fill: lt[r % lt.length],
                      },
                      `cell-${r}`,
                    ),
                  ),
                }),
                o.jsx(X, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:220:12",
                  "data-lov-name": "Tooltip",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "220",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "Tooltip",
                  "data-component-content": "%7B%7D",
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                o.jsx(qt, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:223:12",
                  "data-lov-name": "Legend",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "223",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "Legend",
                  "data-component-content": "%7B%7D",
                  verticalAlign: "bottom",
                  height: 36,
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  ko = ({ block: t }) => {
    const e = t.content.data || [],
      a = t.content.settings.height || 300;
    return o.jsxs(S, {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:238:4",
      "data-lov-name": "Card",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "238",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22my-6%20border-border%2F40%20overflow-hidden%22%7D",
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        o.jsxs("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:239:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "239",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-6%20pb-2%22%7D",
          className: "p-6 pb-2",
          children: [
            o.jsx("h3", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:240:8",
              "data-lov-name": "h3",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "240",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%22%7D",
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              o.jsx("p", {
                "data-lov-id":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx:241:38",
                "data-lov-name": "p",
                "data-component-path":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                "data-component-line": "241",
                "data-component-file": "BlockLibrary.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:243:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "243",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          style: { height: a },
          children: o.jsx(Q, {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:244:8",
            "data-lov-name": "ResponsiveContainer",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "244",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "ResponsiveContainer",
            "data-component-content": "%7B%7D",
            width: "100%",
            height: "100%",
            children: o.jsxs(xt, {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:245:10",
              "data-lov-name": "BarChart",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "245",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "BarChart",
              "data-component-content": "%7B%7D",
              data: e,
              layout: "vertical",
              margin: { left: 40 },
              children: [
                o.jsx(J, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:246:12",
                  "data-lov-name": "CartesianGrid",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "246",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "CartesianGrid",
                  "data-component-content": "%7B%7D",
                  strokeDasharray: "3 3",
                  horizontal: !1,
                  stroke: "hsl(var(--muted))",
                }),
                o.jsx(V, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:247:12",
                  "data-lov-name": "XAxis",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "247",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "XAxis",
                  "data-component-content": "%7B%7D",
                  type: "number",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                }),
                o.jsx(W, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:248:12",
                  "data-lov-name": "YAxis",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "248",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "YAxis",
                  "data-component-content": "%7B%7D",
                  dataKey: "name",
                  type: "category",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                  width: 80,
                }),
                o.jsx(X, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:249:12",
                  "data-lov-name": "Tooltip",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "249",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "Tooltip",
                  "data-component-content": "%7B%7D",
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                o.jsx(bt, {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:252:12",
                  "data-lov-name": "Bar",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "252",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "Bar",
                  "data-component-content": "%7B%7D",
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
  yo = ({ block: t }) => {
    const e = t.content.settings.variant || "info",
      a = {
        info: o.jsx(Pt, {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:265:10",
          "data-lov-name": "Info",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "265",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "Info",
          "data-component-content":
            "%7B%22className%22%3A%22h-5%20w-5%20text-blue-500%22%7D",
          className: "h-5 w-5 text-blue-500",
        }),
        warning: o.jsx(pt, {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:266:13",
          "data-lov-name": "AlertTriangle",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "266",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "AlertTriangle",
          "data-component-content":
            "%7B%22className%22%3A%22h-5%20w-5%20text-amber-500%22%7D",
          className: "h-5 w-5 text-amber-500",
        }),
        success: o.jsx(Et, {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:267:13",
          "data-lov-name": "CheckCircle",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "267",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "CheckCircle",
          "data-component-content":
            "%7B%22className%22%3A%22h-5%20w-5%20text-emerald-500%22%7D",
          className: "h-5 w-5 text-emerald-500",
        }),
        insight: o.jsx(Ot, {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:268:13",
          "data-lov-name": "Lightbulb",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "268",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "Lightbulb",
          "data-component-content":
            "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
          className: "h-5 w-5 text-primary",
        }),
      },
      n = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900",
        insight: "bg-primary/5 border-primary/20 text-foreground",
      };
    return o.jsxs("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:279:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "279",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%7D",
      className: K(
        "p-4 rounded-xl border flex gap-3 my-6 animate-in fade-in zoom-in-95 duration-300",
        n[e],
      ),
      children: [
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:283:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "283",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22mt-0.5%22%7D",
          className: "mt-0.5",
          children: a[e],
        }),
        o.jsxs("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:284:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "284",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          children: [
            o.jsx("h4", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:285:8",
              "data-lov-name": "h4",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "285",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "h4",
              "data-component-content":
                "%7B%22className%22%3A%22font-bold%20text-sm%20uppercase%20tracking-wider%20mb-1%22%7D",
              className: "font-bold text-sm uppercase tracking-wider mb-1",
              children: t.content.title,
            }),
            o.jsx("p", {
              "data-lov-id":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx:286:8",
              "data-lov-name": "p",
              "data-component-path":
                "src\\components\\reports\\blocks\\BlockLibrary.tsx",
              "data-component-line": "286",
              "data-component-file": "BlockLibrary.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-sm%20leading-relaxed%22%7D",
              className: "text-sm leading-relaxed",
              children: t.content.body,
            }),
          ],
        }),
      ],
    });
  },
  ho = ({ block: t }) =>
    o.jsxs("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:294:2",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "294",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22my-8%20prose%20prose-slate%20max-w-none%20prose-headings%3Afont-bold%20prose-p%3Atext-muted-foreground%20prose-p%3Aleading-relaxed%22%7D",
      className:
        "my-8 prose prose-slate max-w-none prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed",
      children: [
        t.content.title &&
          o.jsx("h2", {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:295:28",
            "data-lov-name": "h2",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "295",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "h2",
            "data-component-content":
              "%7B%22className%22%3A%22text-2xl%20font-bold%20mb-4%22%7D",
            className: "text-2xl font-bold mb-4",
            children: t.content.title,
          }),
        o.jsx("div", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:296:4",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "296",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22whitespace-pre-wrap%22%7D",
          className: "whitespace-pre-wrap",
          children: t.content.body,
        }),
      ],
    }),
  Bo = ({ block: t }) => {
    const e = t.content.data || [];
    return o.jsx(S, {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:305:4",
      "data-lov-name": "Card",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "305",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22my-6%20border-border%2F40%22%7D",
      className: "my-6 border-border/40",
      children: o.jsxs("div", {
        "data-lov-id":
          "src\\components\\reports\\blocks\\BlockLibrary.tsx:306:6",
        "data-lov-name": "div",
        "data-component-path":
          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
        "data-component-line": "306",
        "data-component-file": "BlockLibrary.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
        className: "p-6",
        children: [
          o.jsxs("h3", {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:307:8",
            "data-lov-name": "h3",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "307",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "h3",
            "data-component-content":
              "%7B%22className%22%3A%22text-lg%20font-bold%20mb-6%20flex%20items-center%20gap-2%22%7D",
            className: "text-lg font-bold mb-6 flex items-center gap-2",
            children: [
              o.jsx(Rt, {
                "data-lov-id":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx:308:10",
                "data-lov-name": "Target",
                "data-component-path":
                  "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                "data-component-line": "308",
                "data-component-file": "BlockLibrary.tsx",
                "data-component-name": "Target",
                "data-component-content":
                  "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                className: "h-5 w-5 text-primary",
              }),
              t.content.title,
            ],
          }),
          o.jsx("div", {
            "data-lov-id":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx:311:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\components\\reports\\blocks\\BlockLibrary.tsx",
            "data-component-line": "311",
            "data-component-file": "BlockLibrary.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: e.map((a, n) =>
              o.jsxs(
                "div",
                {
                  "data-lov-id":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx:313:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                  "data-component-line": "313",
                  "data-component-file": "BlockLibrary.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    o.jsxs("div", {
                      "data-lov-id":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx:314:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                      "data-component-line": "314",
                      "data-component-file": "BlockLibrary.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20justify-between%20text-sm%22%7D",
                      className: "flex justify-between text-sm",
                      children: [
                        o.jsx("span", {
                          "data-lov-id":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx:315:16",
                          "data-lov-name": "span",
                          "data-component-path":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                          "data-component-line": "315",
                          "data-component-file": "BlockLibrary.tsx",
                          "data-component-name": "span",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-medium%22%7D",
                          className: "font-medium",
                          children: a.label,
                        }),
                        o.jsxs("span", {
                          "data-lov-id":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx:316:16",
                          "data-lov-name": "span",
                          "data-component-path":
                            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                          "data-component-line": "316",
                          "data-component-file": "BlockLibrary.tsx",
                          "data-component-name": "span",
                          "data-component-content":
                            "%7B%22text%22%3A%22vs%20(Meta)%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                          className: "text-muted-foreground",
                          children: [a.value, " vs ", a.benchmark, " (Meta)"],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      "data-lov-id":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx:318:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                      "data-component-line": "318",
                      "data-component-file": "BlockLibrary.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-3%20w-full%20bg-muted%20rounded-full%20overflow-hidden%20flex%22%7D",
                      className:
                        "h-3 w-full bg-muted rounded-full overflow-hidden flex",
                      children: o.jsx("div", {
                        "data-lov-id":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx:319:16",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\reports\\blocks\\BlockLibrary.tsx",
                        "data-component-line": "319",
                        "data-component-file": "BlockLibrary.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        className: K(
                          "h-full transition-all duration-1000",
                          a.percent >= 100 ? "bg-emerald-500" : "bg-primary",
                        ),
                        style: { width: `${Math.min(a.percent, 100)}%` },
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
  uo = ({ block: t }) =>
    o.jsxs("div", {
      "data-lov-id": "src\\components\\reports\\blocks\\BlockLibrary.tsx:337:2",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\blocks\\BlockLibrary.tsx",
      "data-component-line": "337",
      "data-component-file": "BlockLibrary.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22p-8%20border-2%20border-dashed%20border-muted%20rounded-xl%20text-center%20my-4%22%7D",
      className:
        "p-8 border-2 border-dashed border-muted rounded-xl text-center my-4",
      children: [
        o.jsx(mt, {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:338:4",
          "data-lov-name": "AlertCircle",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "338",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "AlertCircle",
          "data-component-content":
            "%7B%22className%22%3A%22h-8%20w-8%20text-muted-foreground%20mx-auto%20mb-2%22%7D",
          className: "h-8 w-8 text-muted-foreground mx-auto mb-2",
        }),
        o.jsxs("p", {
          "data-lov-id":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx:339:4",
          "data-lov-name": "p",
          "data-component-path":
            "src\\components\\reports\\blocks\\BlockLibrary.tsx",
          "data-component-line": "339",
          "data-component-file": "BlockLibrary.tsx",
          "data-component-name": "p",
          "data-component-content":
            "%7B%22text%22%3A%22Tipo%20de%20bloco%20%5C%22%20%5C%22%20em%20desenvolvimento.%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
          className: "text-muted-foreground",
          children: ['Tipo de bloco "', t.type, '" em desenvolvimento.'],
        }),
      ],
    });
class fo extends vt.Component {
  constructor() {
    super(...arguments);
    at(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0 };
  }
  componentDidCatch(a, n) {
    console.error("Uncaught error in Report Block:", a, n);
  }
  render() {
    return this.state.hasError
      ? o.jsxs(S, {
          "data-lov-id":
            "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:36:8",
          "data-lov-name": "Card",
          "data-component-path":
            "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
          "data-component-line": "36",
          "data-component-file": "BlockErrorBoundary.tsx",
          "data-component-name": "Card",
          "data-component-content":
            "%7B%22className%22%3A%22my-4%20border-destructive%2F20%20bg-destructive%2F5%20p-6%20text-center%22%7D",
          className:
            "my-4 border-destructive/20 bg-destructive/5 p-6 text-center",
          children: [
            o.jsx(mt, {
              "data-lov-id":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:37:10",
              "data-lov-name": "AlertCircle",
              "data-component-path":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
              "data-component-line": "37",
              "data-component-file": "BlockErrorBoundary.tsx",
              "data-component-name": "AlertCircle",
              "data-component-content":
                "%7B%22className%22%3A%22h-8%20w-8%20text-destructive%20mx-auto%20mb-2%22%7D",
              className: "h-8 w-8 text-destructive mx-auto mb-2",
            }),
            o.jsx("h3", {
              "data-lov-id":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:38:10",
              "data-lov-name": "h3",
              "data-component-path":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
              "data-component-line": "38",
              "data-component-file": "BlockErrorBoundary.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22text%22%3A%22Erro%20no%20Bloco%22%2C%22className%22%3A%22font-bold%20text-destructive%20mb-1%22%7D",
              className: "font-bold text-destructive mb-1",
              children: "Erro no Bloco",
            }),
            o.jsxs("p", {
              "data-lov-id":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:39:10",
              "data-lov-name": "p",
              "data-component-path":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
              "data-component-line": "39",
              "data-component-file": "BlockErrorBoundary.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22text%22%3A%22N%C3%A3o%20foi%20poss%C3%ADvel%20carregar%20o%20bloco%20%5C%22%20%5C%22.%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%22%7D",
              className: "text-sm text-muted-foreground mb-4",
              children: [
                'Não foi possível carregar o bloco "',
                this.props.blockTitle || "Dados",
                '".',
              ],
            }),
            o.jsxs(gt, {
              "data-lov-id":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:42:10",
              "data-lov-name": "Button",
              "data-component-path":
                "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
              "data-component-line": "42",
              "data-component-file": "BlockErrorBoundary.tsx",
              "data-component-name": "Button",
              "data-component-content":
                "%7B%22text%22%3A%22Tentar%20Novamente%22%2C%22className%22%3A%22gap-2%22%7D",
              variant: "outline",
              size: "sm",
              onClick: () => this.setState({ hasError: !1 }),
              className: "gap-2",
              children: [
                o.jsx(Tt, {
                  "data-lov-id":
                    "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx:48:12",
                  "data-lov-name": "RefreshCw",
                  "data-component-path":
                    "src\\components\\reports\\renderer\\BlockErrorBoundary.tsx",
                  "data-component-line": "48",
                  "data-component-file": "BlockErrorBoundary.tsx",
                  "data-component-name": "RefreshCw",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                  className: "h-4 w-4",
                }),
                "Tentar Novamente",
              ],
            }),
          ],
        })
      : this.props.children;
  }
}
const wo = ({ blocks: t }) => {
    const e = (a) => {
      switch (a.type) {
        case "HERO":
          return o.jsx(
            lo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:30:15",
              "data-lov-name": "HeroBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "30",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "HeroBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "KPI_GRID":
          return o.jsx(
            mo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:32:15",
              "data-lov-name": "KPIBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "32",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "KPIBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "AI_INSIGHT":
          return o.jsx(
            bo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:34:15",
              "data-lov-name": "AIInsightBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "34",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "AIInsightBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "CHART":
          return o.jsx(
            po,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:36:15",
              "data-lov-name": "ChartBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "36",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "ChartBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "CHART_DONNUT":
          return o.jsx(
            vo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:38:15",
              "data-lov-name": "DonnutChartBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "38",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "DonnutChartBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "CHART_BAR_HORIZONTAL":
          return o.jsx(
            ko,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:40:15",
              "data-lov-name": "HorizontalBarChartBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "40",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "HorizontalBarChartBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "ACTION_PLAN":
          return o.jsx(
            xo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:42:15",
              "data-lov-name": "ActionPlanBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "42",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "ActionPlanBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "CALLOUT":
          return o.jsx(
            yo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:44:15",
              "data-lov-name": "CalloutBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "44",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "CalloutBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "MARKDOWN":
          return o.jsx(
            ho,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:46:15",
              "data-lov-name": "MarkdownBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "46",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "MarkdownBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        case "BENCHMARK_COMPARISON":
          return o.jsx(
            Bo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:48:15",
              "data-lov-name": "BenchmarkComparisonBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "48",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "BenchmarkComparisonBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
        default:
          return o.jsx(
            uo,
            {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:51:15",
              "data-lov-name": "FallbackBlock",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "51",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "FallbackBlock",
              "data-component-content": "%7B%7D",
              block: a,
            },
            a.id,
          );
      }
    };
    return o.jsx("div", {
      "data-lov-id":
        "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:56:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
      "data-component-line": "56",
      "data-component-file": "DynamicBlockRenderer.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
      className: "space-y-4",
      children: t.map((a) =>
        o.jsx(
          fo,
          {
            "data-lov-id":
              "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:58:8",
            "data-lov-name": "BlockErrorBoundary",
            "data-component-path":
              "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
            "data-component-line": "58",
            "data-component-file": "DynamicBlockRenderer.tsx",
            "data-component-name": "BlockErrorBoundary",
            "data-component-content": "%7B%7D",
            blockTitle: a.content.title,
            children: o.jsx("div", {
              "data-lov-id":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx:59:10",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\reports\\renderer\\DynamicBlockRenderer.tsx",
              "data-component-line": "59",
              "data-component-file": "DynamicBlockRenderer.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22w-full%20transition-all%20duration-300%22%7D",
              className: "w-full transition-all duration-300",
              children: e(a),
            }),
          },
          a.id,
        ),
      ),
    });
  },
  So = ({ diagnostic: t, onPrioritize: e }) =>
    o.jsxs(S, {
      "data-lov-id": "src\\components\\business\\DiagnosticSection.tsx:14:4",
      "data-lov-name": "Card",
      "data-component-path": "src\\components\\business\\DiagnosticSection.tsx",
      "data-component-line": "14",
      "data-component-file": "DiagnosticSection.tsx",
      "data-component-name": "Card",
      "data-component-content":
        "%7B%22className%22%3A%22border-l-4%20border-l-red-500%20bg-gradient-to-r%20from-red-50%2F20%20to-transparent%22%7D",
      className:
        "border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/20 to-transparent",
      children: [
        o.jsxs(Lt, {
          "data-lov-id":
            "src\\components\\business\\DiagnosticSection.tsx:15:6",
          "data-lov-name": "CardHeader",
          "data-component-path":
            "src\\components\\business\\DiagnosticSection.tsx",
          "data-component-line": "15",
          "data-component-file": "DiagnosticSection.tsx",
          "data-component-name": "CardHeader",
          "data-component-content": "%7B%7D",
          children: [
            o.jsxs("div", {
              "data-lov-id":
                "src\\components\\business\\DiagnosticSection.tsx:16:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\DiagnosticSection.tsx",
              "data-component-line": "16",
              "data-component-file": "DiagnosticSection.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
              className: "flex items-center gap-2 mb-2",
              children: [
                o.jsxs(Jt, {
                  "data-lov-id":
                    "src\\components\\business\\DiagnosticSection.tsx:17:10",
                  "data-lov-name": "Badge",
                  "data-component-path":
                    "src\\components\\business\\DiagnosticSection.tsx",
                  "data-component-line": "17",
                  "data-component-file": "DiagnosticSection.tsx",
                  "data-component-name": "Badge",
                  "data-component-content":
                    "%7B%22text%22%3A%22Alerta%20Cr%C3%ADtico%22%2C%22className%22%3A%22flex%20items-center%20gap-1%22%7D",
                  variant: "destructive",
                  className: "flex items-center gap-1",
                  children: [
                    o.jsx(pt, {
                      "data-lov-id":
                        "src\\components\\business\\DiagnosticSection.tsx:18:12",
                      "data-lov-name": "AlertTriangle",
                      "data-component-path":
                        "src\\components\\business\\DiagnosticSection.tsx",
                      "data-component-line": "18",
                      "data-component-file": "DiagnosticSection.tsx",
                      "data-component-name": "AlertTriangle",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                      className: "h-3 w-3",
                    }),
                    "Alerta Crítico",
                  ],
                }),
                o.jsx("span", {
                  "data-lov-id":
                    "src\\components\\business\\DiagnosticSection.tsx:21:10",
                  "data-lov-name": "span",
                  "data-component-path":
                    "src\\components\\business\\DiagnosticSection.tsx",
                  "data-component-line": "21",
                  "data-component-file": "DiagnosticSection.tsx",
                  "data-component-name": "span",
                  "data-component-content":
                    "%7B%22text%22%3A%22Diagn%C3%B3stico%20gerado%20pela%20IA%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                  className: "text-xs text-muted-foreground",
                  children: "Diagnóstico gerado pela IA",
                }),
              ],
            }),
            o.jsx(Dt, {
              "data-lov-id":
                "src\\components\\business\\DiagnosticSection.tsx:23:8",
              "data-lov-name": "CardTitle",
              "data-component-path":
                "src\\components\\business\\DiagnosticSection.tsx",
              "data-component-line": "23",
              "data-component-file": "DiagnosticSection.tsx",
              "data-component-name": "CardTitle",
              "data-component-content": "%7B%22className%22%3A%22text-xl%22%7D",
              className: "text-xl",
              children: t.title,
            }),
            o.jsx(At, {
              "data-lov-id":
                "src\\components\\business\\DiagnosticSection.tsx:24:8",
              "data-lov-name": "CardDescription",
              "data-component-path":
                "src\\components\\business\\DiagnosticSection.tsx",
              "data-component-line": "24",
              "data-component-file": "DiagnosticSection.tsx",
              "data-component-name": "CardDescription",
              "data-component-content":
                "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
              className: "text-sm font-medium",
              children: t.description,
            }),
          ],
        }),
        o.jsxs(Nt, {
          "data-lov-id":
            "src\\components\\business\\DiagnosticSection.tsx:28:6",
          "data-lov-name": "CardContent",
          "data-component-path":
            "src\\components\\business\\DiagnosticSection.tsx",
          "data-component-line": "28",
          "data-component-file": "DiagnosticSection.tsx",
          "data-component-name": "CardContent",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            o.jsx("div", {
              "data-lov-id":
                "src\\components\\business\\DiagnosticSection.tsx:29:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\DiagnosticSection.tsx",
              "data-component-line": "29",
              "data-component-file": "DiagnosticSection.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-4%22%7D",
              className: "space-y-4",
              children: o.jsxs("div", {
                "data-lov-id":
                  "src\\components\\business\\DiagnosticSection.tsx:30:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\DiagnosticSection.tsx",
                "data-component-line": "30",
                "data-component-file": "DiagnosticSection.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                className: "flex items-start gap-3",
                children: [
                  o.jsx("div", {
                    "data-lov-id":
                      "src\\components\\business\\DiagnosticSection.tsx:31:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\DiagnosticSection.tsx",
                    "data-component-line": "31",
                    "data-component-file": "DiagnosticSection.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22mt-1%20p-1%20bg-amber-100%20rounded-full%22%7D",
                    className: "mt-1 p-1 bg-amber-100 rounded-full",
                    children: o.jsx(_t, {
                      "data-lov-id":
                        "src\\components\\business\\DiagnosticSection.tsx:32:14",
                      "data-lov-name": "ArrowDownCircle",
                      "data-component-path":
                        "src\\components\\business\\DiagnosticSection.tsx",
                      "data-component-line": "32",
                      "data-component-file": "DiagnosticSection.tsx",
                      "data-component-name": "ArrowDownCircle",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20text-amber-600%22%7D",
                      className: "h-4 w-4 text-amber-600",
                    }),
                  }),
                  o.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\business\\DiagnosticSection.tsx:34:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\DiagnosticSection.tsx",
                    "data-component-line": "34",
                    "data-component-file": "DiagnosticSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      o.jsx("h4", {
                        "data-lov-id":
                          "src\\components\\business\\DiagnosticSection.tsx:35:14",
                        "data-lov-name": "h4",
                        "data-component-path":
                          "src\\components\\business\\DiagnosticSection.tsx",
                        "data-component-line": "35",
                        "data-component-file": "DiagnosticSection.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22text%22%3A%22Causas%20Prov%C3%A1veis%22%2C%22className%22%3A%22text-sm%20font-semibold%20mb-1%22%7D",
                        className: "text-sm font-semibold mb-1",
                        children: "Causas Prováveis",
                      }),
                      o.jsx("ul", {
                        "data-lov-id":
                          "src\\components\\business\\DiagnosticSection.tsx:36:14",
                        "data-lov-name": "ul",
                        "data-component-path":
                          "src\\components\\business\\DiagnosticSection.tsx",
                        "data-component-line": "36",
                        "data-component-file": "DiagnosticSection.tsx",
                        "data-component-name": "ul",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20list-disc%20list-inside%20space-y-1%22%7D",
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: t.causes.map((a, n) =>
                          o.jsx(
                            "li",
                            {
                              "data-lov-id":
                                "src\\components\\business\\DiagnosticSection.tsx:38:18",
                              "data-lov-name": "li",
                              "data-component-path":
                                "src\\components\\business\\DiagnosticSection.tsx",
                              "data-component-line": "38",
                              "data-component-file": "DiagnosticSection.tsx",
                              "data-component-name": "li",
                              "data-component-content": "%7B%7D",
                              children: a,
                            },
                            n,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            o.jsx("div", {
              "data-lov-id":
                "src\\components\\business\\DiagnosticSection.tsx:44:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\DiagnosticSection.tsx",
              "data-component-line": "44",
              "data-component-file": "DiagnosticSection.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-4%22%7D",
              className: "space-y-4",
              children: o.jsxs("div", {
                "data-lov-id":
                  "src\\components\\business\\DiagnosticSection.tsx:45:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\DiagnosticSection.tsx",
                "data-component-line": "45",
                "data-component-file": "DiagnosticSection.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                className: "flex items-start gap-3",
                children: [
                  o.jsx("div", {
                    "data-lov-id":
                      "src\\components\\business\\DiagnosticSection.tsx:46:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\DiagnosticSection.tsx",
                    "data-component-line": "46",
                    "data-component-file": "DiagnosticSection.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22mt-1%20p-1%20bg-red-100%20rounded-full%22%7D",
                    className: "mt-1 p-1 bg-red-100 rounded-full",
                    children: o.jsx(It, {
                      "data-lov-id":
                        "src\\components\\business\\DiagnosticSection.tsx:47:14",
                      "data-lov-name": "ArrowUpCircle",
                      "data-component-path":
                        "src\\components\\business\\DiagnosticSection.tsx",
                      "data-component-line": "47",
                      "data-component-file": "DiagnosticSection.tsx",
                      "data-component-name": "ArrowUpCircle",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20text-red-600%22%7D",
                      className: "h-4 w-4 text-red-600",
                    }),
                  }),
                  o.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\business\\DiagnosticSection.tsx:49:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\business\\DiagnosticSection.tsx",
                    "data-component-line": "49",
                    "data-component-file": "DiagnosticSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      o.jsx("h4", {
                        "data-lov-id":
                          "src\\components\\business\\DiagnosticSection.tsx:50:14",
                        "data-lov-name": "h4",
                        "data-component-path":
                          "src\\components\\business\\DiagnosticSection.tsx",
                        "data-component-line": "50",
                        "data-component-file": "DiagnosticSection.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22text%22%3A%22Implica%C3%A7%C3%B5es%20no%20Neg%C3%B3cio%22%2C%22className%22%3A%22text-sm%20font-semibold%20mb-1%22%7D",
                        className: "text-sm font-semibold mb-1",
                        children: "Implicações no Negócio",
                      }),
                      o.jsx("ul", {
                        "data-lov-id":
                          "src\\components\\business\\DiagnosticSection.tsx:51:14",
                        "data-lov-name": "ul",
                        "data-component-path":
                          "src\\components\\business\\DiagnosticSection.tsx",
                        "data-component-line": "51",
                        "data-component-file": "DiagnosticSection.tsx",
                        "data-component-name": "ul",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20list-disc%20list-inside%20space-y-1%22%7D",
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: t.implications.map((a, n) =>
                          o.jsx(
                            "li",
                            {
                              "data-lov-id":
                                "src\\components\\business\\DiagnosticSection.tsx:53:18",
                              "data-lov-name": "li",
                              "data-component-path":
                                "src\\components\\business\\DiagnosticSection.tsx",
                              "data-component-line": "53",
                              "data-component-file": "DiagnosticSection.tsx",
                              "data-component-name": "li",
                              "data-component-content": "%7B%7D",
                              children: a,
                            },
                            n,
                          ),
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
export { wo as D, So as a };
