import { R as P, g as Ae, r as B } from "./router-XBfdTQ0K.js";
import {
  O as J,
  G,
  aa as oy,
  U as V,
  ab as _t,
  ac as Gt,
  ad as Uu,
  ae as $p,
  af as Tp,
  ag as Dr,
  ah as Ep,
  ai as jp,
  aj as at,
  ak as Rr,
  al as Kn,
  am as uy,
  an as cy,
  ao as Gn,
  ap as ly,
  aq as Mp,
  ar as sy,
  as as zu,
  at as Ip,
  au as fy,
  av as kp,
  J as R,
  aw as Cp,
  ax as Np,
  M as Q,
  ay as Oe,
  az as Fe,
  aA as Ie,
  N as qu,
  aB as py,
  R as Hn,
  aC as nn,
  aD as ke,
  aE as tt,
  aF as Je,
  aG as vi,
  aH as Ku,
  aI as Gc,
  aJ as yi,
  K as xt,
  aK as hy,
  aL as dy,
  aM as vy,
  aN as yy,
  aO as Ot,
  aP as hi,
  aQ as Hc,
  aR as Xc,
  aS as my,
  aT as gy,
  aU as Vc,
  aV as by,
  aW as xy,
} from "./index-DRWQgA5q.js";
var wy = [
  "children",
  "width",
  "height",
  "viewBox",
  "className",
  "style",
  "title",
  "desc",
];
function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
function Oy(e, t) {
  if (e == null) return {};
  var r = Ay(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Ay(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function bo(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    c = e.desc,
    l = Oy(e, wy),
    f = i || { width: r, height: n, x: 0, y: 0 },
    s = J("recharts-surface", a);
  return P.createElement(
    "svg",
    go({}, G(l, !0, "svg"), {
      className: s,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    P.createElement("title", null, u),
    P.createElement("desc", null, c),
    t,
  );
}
var Py = ["children", "className"];
function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xo.apply(this, arguments)
  );
}
function Sy(e, t) {
  if (e == null) return {};
  var r = _y(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function _y(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ne = P.forwardRef(function (e, t) {
  var r = e.children,
    n = e.className,
    i = Sy(e, Py),
    a = J("recharts-layer", n);
  return P.createElement("g", xo({ className: a }, G(i, !0), { ref: t }), r);
});
function $y(e, t, r) {
  var n = -1,
    i = e.length;
  (t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0));
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var Ty = $y,
  Ey = Ty;
function jy(e, t, r) {
  var n = e.length;
  return ((r = r === void 0 ? n : r), !t && r >= n ? e : Ey(e, t, r));
}
var My = jy,
  Iy = "\\ud800-\\udfff",
  ky = "\\u0300-\\u036f",
  Cy = "\\ufe20-\\ufe2f",
  Ny = "\\u20d0-\\u20ff",
  Dy = ky + Cy + Ny,
  Ry = "\\ufe0e\\ufe0f",
  By = "\\u200d",
  Ly = RegExp("[" + By + Iy + Dy + Ry + "]");
function Fy(e) {
  return Ly.test(e);
}
var Dp = Fy;
function Wy(e) {
  return e.split("");
}
var Uy = Wy,
  Rp = "\\ud800-\\udfff",
  zy = "\\u0300-\\u036f",
  qy = "\\ufe20-\\ufe2f",
  Ky = "\\u20d0-\\u20ff",
  Gy = zy + qy + Ky,
  Hy = "\\ufe0e\\ufe0f",
  Xy = "[" + Rp + "]",
  wo = "[" + Gy + "]",
  Oo = "\\ud83c[\\udffb-\\udfff]",
  Vy = "(?:" + wo + "|" + Oo + ")",
  Bp = "[^" + Rp + "]",
  Lp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Fp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Yy = "\\u200d",
  Wp = Vy + "?",
  Up = "[" + Hy + "]?",
  Zy = "(?:" + Yy + "(?:" + [Bp, Lp, Fp].join("|") + ")" + Up + Wp + ")*",
  Jy = Up + Wp + Zy,
  Qy = "(?:" + [Bp + wo + "?", wo, Lp, Fp, Xy].join("|") + ")",
  em = RegExp(Oo + "(?=" + Oo + ")|" + Qy + Jy, "g");
function tm(e) {
  return e.match(em) || [];
}
var rm = tm,
  nm = Uy,
  im = Dp,
  am = rm;
function om(e) {
  return im(e) ? am(e) : nm(e);
}
var um = om,
  cm = My,
  lm = Dp,
  sm = um,
  fm = oy;
function pm(e) {
  return function (t) {
    t = fm(t);
    var r = lm(t) ? sm(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? cm(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var hm = pm,
  dm = hm,
  vm = dm("toUpperCase"),
  ym = vm;
const da = Ae(ym);
function ue(e) {
  return function () {
    return e;
  };
}
const zp = Math.cos,
  mi = Math.sin,
  Qe = Math.sqrt,
  gi = Math.PI,
  va = 2 * gi,
  Ao = Math.PI,
  Po = 2 * Ao,
  Rt = 1e-6,
  mm = Po - Rt;
function qp(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function gm(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return qp;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class bm {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? qp : gm(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      c = n - t,
      l = i - r,
      f = o - t,
      s = u - r,
      p = f * f + s * s;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (p > Rt)
      if (!(Math.abs(s * c - l * f) > Rt) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let h = n - o,
          v = i - u,
          d = c * c + l * l,
          y = h * h + v * v,
          b = Math.sqrt(d),
          w = Math.sqrt(p),
          x = a * Math.tan((Ao - Math.acos((d + p - y) / (2 * b * w))) / 2),
          O = x / w,
          m = x / b;
        (Math.abs(O - 1) > Rt && this._append`L${t + O * f},${r + O * s}`,
          this
            ._append`A${a},${a},0,0,${+(s * h > f * v)},${(this._x1 = t + m * c)},${(this._y1 = r + m * l)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      c = n * Math.sin(i),
      l = t + u,
      f = r + c,
      s = 1 ^ o,
      p = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${l},${f}`
      : (Math.abs(this._x1 - l) > Rt || Math.abs(this._y1 - f) > Rt) &&
        this._append`L${l},${f}`,
      n &&
        (p < 0 && (p = (p % Po) + Po),
        p > mm
          ? this
              ._append`A${n},${n},0,1,${s},${t - u},${r - c}A${n},${n},0,1,${s},${(this._x1 = l)},${(this._y1 = f)}`
          : p > Rt &&
            this
              ._append`A${n},${n},0,${+(p >= Ao)},${s},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Gu(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new bm(t)
  );
}
function Hu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Kp(e) {
  this._context = e;
}
Kp.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function ya(e) {
  return new Kp(e);
}
function Gp(e) {
  return e[0];
}
function Hp(e) {
  return e[1];
}
function Xp(e, t) {
  var r = ue(!0),
    n = null,
    i = ya,
    a = null,
    o = Gu(u);
  ((e = typeof e == "function" ? e : e === void 0 ? Gp : ue(e)),
    (t = typeof t == "function" ? t : t === void 0 ? Hp : ue(t)));
  function u(c) {
    var l,
      f = (c = Hu(c)).length,
      s,
      p = !1,
      h;
    for (n == null && (a = i((h = o()))), l = 0; l <= f; ++l)
      (!(l < f && r((s = c[l]), l, c)) === p &&
        ((p = !p) ? a.lineStart() : a.lineEnd()),
        p && a.point(+e(s, l, c), +t(s, l, c)));
    if (h) return ((a = null), h + "" || null);
  }
  return (
    (u.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : ue(+c)), u)
        : e;
    }),
    (u.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : ue(+c)), u)
        : t;
    }),
    (u.defined = function (c) {
      return arguments.length
        ? ((r = typeof c == "function" ? c : ue(!!c)), u)
        : r;
    }),
    (u.curve = function (c) {
      return arguments.length ? ((i = c), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (c) {
      return arguments.length
        ? (c == null ? (n = a = null) : (a = i((n = c))), u)
        : n;
    }),
    u
  );
}
function ei(e, t, r) {
  var n = null,
    i = ue(!0),
    a = null,
    o = ya,
    u = null,
    c = Gu(l);
  ((e = typeof e == "function" ? e : e === void 0 ? Gp : ue(+e)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? Hp : ue(+r)));
  function l(s) {
    var p,
      h,
      v,
      d = (s = Hu(s)).length,
      y,
      b = !1,
      w,
      x = new Array(d),
      O = new Array(d);
    for (a == null && (u = o((w = c()))), p = 0; p <= d; ++p) {
      if (!(p < d && i((y = s[p]), p, s)) === b)
        if ((b = !b)) ((h = p), u.areaStart(), u.lineStart());
        else {
          for (u.lineEnd(), u.lineStart(), v = p - 1; v >= h; --v)
            u.point(x[v], O[v]);
          (u.lineEnd(), u.areaEnd());
        }
      b &&
        ((x[p] = +e(y, p, s)),
        (O[p] = +t(y, p, s)),
        u.point(n ? +n(y, p, s) : x[p], r ? +r(y, p, s) : O[p]));
    }
    if (w) return ((u = null), w + "" || null);
  }
  function f() {
    return Xp().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (s) {
      return arguments.length
        ? ((e = typeof s == "function" ? s : ue(+s)), (n = null), l)
        : e;
    }),
    (l.x0 = function (s) {
      return arguments.length
        ? ((e = typeof s == "function" ? s : ue(+s)), l)
        : e;
    }),
    (l.x1 = function (s) {
      return arguments.length
        ? ((n = s == null ? null : typeof s == "function" ? s : ue(+s)), l)
        : n;
    }),
    (l.y = function (s) {
      return arguments.length
        ? ((t = typeof s == "function" ? s : ue(+s)), (r = null), l)
        : t;
    }),
    (l.y0 = function (s) {
      return arguments.length
        ? ((t = typeof s == "function" ? s : ue(+s)), l)
        : t;
    }),
    (l.y1 = function (s) {
      return arguments.length
        ? ((r = s == null ? null : typeof s == "function" ? s : ue(+s)), l)
        : r;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (l.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (l.defined = function (s) {
      return arguments.length
        ? ((i = typeof s == "function" ? s : ue(!!s)), l)
        : i;
    }),
    (l.curve = function (s) {
      return arguments.length ? ((o = s), a != null && (u = o(a)), l) : o;
    }),
    (l.context = function (s) {
      return arguments.length
        ? (s == null ? (a = u = null) : (u = o((a = s))), l)
        : a;
    }),
    l
  );
}
class Vp {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function xm(e) {
  return new Vp(e, !0);
}
function wm(e) {
  return new Vp(e, !1);
}
const Xu = {
    draw(e, t) {
      const r = Qe(t / gi);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, va));
    },
  },
  Om = {
    draw(e, t) {
      const r = Qe(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  Yp = Qe(1 / 3),
  Am = Yp * 2,
  Pm = {
    draw(e, t) {
      const r = Qe(t / Am),
        n = r * Yp;
      (e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath());
    },
  },
  Sm = {
    draw(e, t) {
      const r = Qe(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  _m = 0.8908130915292852,
  Zp = mi(gi / 10) / mi((7 * gi) / 10),
  $m = mi(va / 10) * Zp,
  Tm = -zp(va / 10) * Zp,
  Em = {
    draw(e, t) {
      const r = Qe(t * _m),
        n = $m * r,
        i = Tm * r;
      (e.moveTo(0, -r), e.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (va * a) / 5,
          u = zp(o),
          c = mi(o);
        (e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i));
      }
      e.closePath();
    },
  },
  Ha = Qe(3),
  jm = {
    draw(e, t) {
      const r = -Qe(t / (Ha * 3));
      (e.moveTo(0, r * 2),
        e.lineTo(-Ha * r, -r),
        e.lineTo(Ha * r, -r),
        e.closePath());
    },
  },
  Ue = -0.5,
  ze = Qe(3) / 2,
  So = 1 / Qe(12),
  Mm = (So / 2 + 1) * 3,
  Im = {
    draw(e, t) {
      const r = Qe(t / Mm),
        n = r / 2,
        i = r * So,
        a = n,
        o = r * So + r,
        u = -a,
        c = o;
      (e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, c),
        e.lineTo(Ue * n - ze * i, ze * n + Ue * i),
        e.lineTo(Ue * a - ze * o, ze * a + Ue * o),
        e.lineTo(Ue * u - ze * c, ze * u + Ue * c),
        e.lineTo(Ue * n + ze * i, Ue * i - ze * n),
        e.lineTo(Ue * a + ze * o, Ue * o - ze * a),
        e.lineTo(Ue * u + ze * c, Ue * c - ze * u),
        e.closePath());
    },
  };
function km(e, t) {
  let r = null,
    n = Gu(i);
  ((e = typeof e == "function" ? e : ue(e || Xu)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t)));
  function i() {
    let a;
    if (
      (r || (r = a = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return ((r = null), a + "" || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ue(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : ue(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function bi() {}
function xi(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function Jp(e) {
  this._context = e;
}
Jp.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        xi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        xi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Cm(e) {
  return new Jp(e);
}
function Qp(e) {
  this._context = e;
}
Qp.prototype = {
  areaStart: bi,
  areaEnd: bi,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        xi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Nm(e) {
  return new Qp(e);
}
function eh(e) {
  this._context = e;
}
eh.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        xi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Dm(e) {
  return new eh(e);
}
function th(e) {
  this._context = e;
}
th.prototype = {
  areaStart: bi,
  areaEnd: bi,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function Rm(e) {
  return new th(e);
}
function Yc(e) {
  return e < 0 ? -1 : 1;
}
function Zc(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (
    (Yc(a) + Yc(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
  );
}
function Jc(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Xa(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function wi(e) {
  this._context = e;
}
wi.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Xa(this, this._t0, Jc(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Xa(this, Jc(this, (r = Zc(this, e, t))), r));
          break;
        default:
          Xa(this, this._t0, (r = Zc(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function rh(e) {
  this._context = new nh(e);
}
(rh.prototype = Object.create(wi.prototype)).point = function (e, t) {
  wi.prototype.point.call(this, t, e);
};
function nh(e) {
  this._context = e;
}
nh.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function Bm(e) {
  return new wi(e);
}
function Lm(e) {
  return new rh(e);
}
function ih(e) {
  this._context = e;
}
ih.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Qc(e), i = Qc(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function Qc(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Fm(e) {
  return new ih(e);
}
function ma(e, t) {
  ((this._context = e), (this._t = t));
}
ma.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function Wm(e) {
  return new ma(e, 0.5);
}
function Um(e) {
  return new ma(e, 0);
}
function zm(e) {
  return new ma(e, 1);
}
function pr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function _o(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function qm(e, t) {
  return e[t];
}
function Km(e) {
  const t = [];
  return ((t.key = e), t);
}
function Gm() {
  var e = ue([]),
    t = _o,
    r = pr,
    n = qm;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Km),
      u,
      c = o.length,
      l = -1,
      f;
    for (const s of a)
      for (u = 0, ++l; u < c; ++u)
        (o[u][l] = [0, +n(s, o[u].key, l, a)]).data = s;
    for (u = 0, f = Hu(t(o)); u < c; ++u) o[f[u]].index = u;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ue(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : ue(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? _o : typeof a == "function" ? a : ue(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? pr), i) : r;
    }),
    i
  );
}
function Hm(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    pr(e, t);
  }
}
function Xm(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    pr(e, t);
  }
}
function Vm(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, l = 0; u < o; ++u) {
        for (
          var f = e[t[u]],
            s = f[n][1] || 0,
            p = f[n - 1][1] || 0,
            h = (s - p) / 2,
            v = 0;
          v < u;
          ++v
        ) {
          var d = e[t[v]],
            y = d[n][1] || 0,
            b = d[n - 1][1] || 0;
          h += y - b;
        }
        ((c += s), (l += h * s));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), c && (r -= l / c));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), pr(e, t));
  }
}
function fn(e) {
  "@babel/helpers - typeof";
  return (
    (fn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fn(e)
  );
}
var Ym = ["type", "size", "sizeType"];
function $o() {
  return (
    ($o = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $o.apply(this, arguments)
  );
}
function el(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? el(Object(r), !0).forEach(function (n) {
          Zm(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : el(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zm(e, t, r) {
  return (
    (t = Jm(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Jm(e) {
  var t = Qm(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function Qm(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eg(e, t) {
  if (e == null) return {};
  var r = tg(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function tg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ah = {
    symbolCircle: Xu,
    symbolCross: Om,
    symbolDiamond: Pm,
    symbolSquare: Sm,
    symbolStar: Em,
    symbolTriangle: jm,
    symbolWye: Im,
  },
  rg = Math.PI / 180,
  ng = function (t) {
    var r = "symbol".concat(da(t));
    return ah[r] || Xu;
  },
  ig = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * rg;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  ag = function (t, r) {
    ah["symbol".concat(da(t))] = r;
  },
  Vu = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      c = eg(t, Ym),
      l = tl(tl({}, c), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var y = ng(n),
          b = km()
            .type(y)
            .size(ig(a, u, n));
        return b();
      },
      s = l.className,
      p = l.cx,
      h = l.cy,
      v = G(l, !0);
    return p === +p && h === +h && a === +a
      ? P.createElement(
          "path",
          $o({}, v, {
            className: J("recharts-symbols", s),
            transform: "translate(".concat(p, ", ").concat(h, ")"),
            d: f(),
          }),
        )
      : null;
  };
Vu.registerSymbol = ag;
function hr(e) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hr(e)
  );
}
function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
function rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rl(Object(r), !0).forEach(function (n) {
          pn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ug(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, uh(n.key), n));
  }
}
function lg(e, t, r) {
  return (
    t && cg(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function sg(e, t, r) {
  return (
    (t = Oi(t)),
    fg(
      e,
      oh() ? Reflect.construct(t, r || [], Oi(e).constructor) : t.apply(e, r),
    )
  );
}
function fg(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return pg(e);
}
function pg(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function oh() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (oh = function () {
    return !!e;
  })();
}
function Oi(e) {
  return (
    (Oi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Oi(e)
  );
}
function hg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Eo(e, t));
}
function Eo(e, t) {
  return (
    (Eo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Eo(e, t)
  );
}
function pn(e, t, r) {
  return (
    (t = uh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function uh(e) {
  var t = dg(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function dg(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qe = 32,
  Yu = (function (e) {
    function t() {
      return (ug(this, t), sg(this, t, arguments));
    }
    return (
      hg(t, e),
      lg(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = qe / 2,
              o = qe / 6,
              u = qe / 3,
              c = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return P.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: qe,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return P.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(qe, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return P.createElement("path", {
                stroke: "none",
                fill: c,
                d: "M0,"
                  .concat(qe / 8, "h")
                  .concat(qe, "v")
                  .concat((qe * 3) / 4, "h")
                  .concat(-qe, "z"),
                className: "recharts-legend-icon",
              });
            if (P.isValidElement(n.legendIcon)) {
              var l = og({}, n);
              return (delete l.legendIcon, P.cloneElement(n.legendIcon, l));
            }
            return P.createElement(Vu, {
              fill: c,
              cx: a,
              cy: a,
              size: qe,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              c = i.formatter,
              l = i.inactiveColor,
              f = { x: 0, y: 0, width: qe, height: qe },
              s = {
                display: u === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              p = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (h, v) {
              var d = h.formatter || c,
                y = J(
                  pn(
                    pn(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(v),
                      !0,
                    ),
                    "inactive",
                    h.inactive,
                  ),
                );
              if (h.type === "none") return null;
              var b = V(h.value) ? null : h.value;
              _t(
                !V(h.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var w = h.inactive ? l : h.color;
              return P.createElement(
                "li",
                To(
                  { className: y, style: s, key: "legend-item-".concat(v) },
                  Gt(n.props, h, v),
                ),
                P.createElement(
                  bo,
                  { width: o, height: o, viewBox: f, style: p },
                  n.renderIcon(h),
                ),
                P.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: w },
                  },
                  d ? d(b, h, v) : b,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return P.createElement(
              "ul",
              { className: "recharts-default-legend", style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(B.PureComponent);
pn(Yu, "displayName", "Legend");
pn(Yu, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var vg = Uu;
function yg() {
  ((this.__data__ = new vg()), (this.size = 0));
}
var mg = yg;
function gg(e) {
  var t = this.__data__,
    r = t.delete(e);
  return ((this.size = t.size), r);
}
var bg = gg;
function xg(e) {
  return this.__data__.get(e);
}
var wg = xg;
function Og(e) {
  return this.__data__.has(e);
}
var Ag = Og,
  Pg = Uu,
  Sg = Tp,
  _g = $p,
  $g = 200;
function Tg(e, t) {
  var r = this.__data__;
  if (r instanceof Pg) {
    var n = r.__data__;
    if (!Sg || n.length < $g - 1)
      return (n.push([e, t]), (this.size = ++r.size), this);
    r = this.__data__ = new _g(n);
  }
  return (r.set(e, t), (this.size = r.size), this);
}
var Eg = Tg,
  jg = Uu,
  Mg = mg,
  Ig = bg,
  kg = wg,
  Cg = Ag,
  Ng = Eg;
function Br(e) {
  var t = (this.__data__ = new jg(e));
  this.size = t.size;
}
Br.prototype.clear = Mg;
Br.prototype.delete = Ig;
Br.prototype.get = kg;
Br.prototype.has = Cg;
Br.prototype.set = Ng;
var ch = Br,
  Dg = "__lodash_hash_undefined__";
function Rg(e) {
  return (this.__data__.set(e, Dg), this);
}
var Bg = Rg;
function Lg(e) {
  return this.__data__.has(e);
}
var Fg = Lg,
  Wg = $p,
  Ug = Bg,
  zg = Fg;
function Ai(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new Wg(); ++t < r; ) this.add(e[t]);
}
Ai.prototype.add = Ai.prototype.push = Ug;
Ai.prototype.has = zg;
var lh = Ai;
function qg(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var sh = qg;
function Kg(e, t) {
  return e.has(t);
}
var fh = Kg,
  Gg = lh,
  Hg = sh,
  Xg = fh,
  Vg = 1,
  Yg = 2;
function Zg(e, t, r, n, i, a) {
  var o = r & Vg,
    u = e.length,
    c = t.length;
  if (u != c && !(o && c > u)) return !1;
  var l = a.get(e),
    f = a.get(t);
  if (l && f) return l == t && f == e;
  var s = -1,
    p = !0,
    h = r & Yg ? new Gg() : void 0;
  for (a.set(e, t), a.set(t, e); ++s < u; ) {
    var v = e[s],
      d = t[s];
    if (n) var y = o ? n(d, v, s, t, e, a) : n(v, d, s, e, t, a);
    if (y !== void 0) {
      if (y) continue;
      p = !1;
      break;
    }
    if (h) {
      if (
        !Hg(t, function (b, w) {
          if (!Xg(h, w) && (v === b || i(v, b, r, n, a))) return h.push(w);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(v === d || i(v, d, r, n, a))) {
      p = !1;
      break;
    }
  }
  return (a.delete(e), a.delete(t), p);
}
var ph = Zg,
  Jg = Dr,
  Qg = Jg.Uint8Array,
  eb = Qg;
function tb(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var rb = tb;
function nb(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Zu = nb,
  nl = Ep,
  il = eb,
  ib = jp,
  ab = ph,
  ob = rb,
  ub = Zu,
  cb = 1,
  lb = 2,
  sb = "[object Boolean]",
  fb = "[object Date]",
  pb = "[object Error]",
  hb = "[object Map]",
  db = "[object Number]",
  vb = "[object RegExp]",
  yb = "[object Set]",
  mb = "[object String]",
  gb = "[object Symbol]",
  bb = "[object ArrayBuffer]",
  xb = "[object DataView]",
  al = nl ? nl.prototype : void 0,
  Va = al ? al.valueOf : void 0;
function wb(e, t, r, n, i, a, o) {
  switch (r) {
    case xb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      ((e = e.buffer), (t = t.buffer));
    case bb:
      return !(e.byteLength != t.byteLength || !a(new il(e), new il(t)));
    case sb:
    case fb:
    case db:
      return ib(+e, +t);
    case pb:
      return e.name == t.name && e.message == t.message;
    case vb:
    case mb:
      return e == t + "";
    case hb:
      var u = ob;
    case yb:
      var c = n & cb;
      if ((u || (u = ub), e.size != t.size && !c)) return !1;
      var l = o.get(e);
      if (l) return l == t;
      ((n |= lb), o.set(e, t));
      var f = ab(u(e), u(t), n, i, a, o);
      return (o.delete(e), f);
    case gb:
      if (Va) return Va.call(e) == Va.call(t);
  }
  return !1;
}
var Ob = wb;
function Ab(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var hh = Ab,
  Pb = hh,
  Sb = at;
function _b(e, t, r) {
  var n = t(e);
  return Sb(e) ? n : Pb(n, r(e));
}
var $b = _b;
function Tb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var Eb = Tb;
function jb() {
  return [];
}
var Mb = jb,
  Ib = Eb,
  kb = Mb,
  Cb = Object.prototype,
  Nb = Cb.propertyIsEnumerable,
  ol = Object.getOwnPropertySymbols,
  Db = ol
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            Ib(ol(e), function (t) {
              return Nb.call(e, t);
            }));
      }
    : kb,
  Rb = Db;
function Bb(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var Lb = Bb,
  Fb = Kn,
  Wb = Rr,
  Ub = "[object Arguments]";
function zb(e) {
  return Wb(e) && Fb(e) == Ub;
}
var qb = zb,
  ul = qb,
  Kb = Rr,
  dh = Object.prototype,
  Gb = dh.hasOwnProperty,
  Hb = dh.propertyIsEnumerable,
  Xb = ul(
    (function () {
      return arguments;
    })(),
  )
    ? ul
    : function (e) {
        return Kb(e) && Gb.call(e, "callee") && !Hb.call(e, "callee");
      },
  Ju = Xb,
  Pi = { exports: {} };
function Vb() {
  return !1;
}
var Yb = Vb;
Pi.exports;
(function (e, t) {
  var r = Dr,
    n = Yb,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    c = u ? u.isBuffer : void 0,
    l = c || n;
  e.exports = l;
})(Pi, Pi.exports);
var vh = Pi.exports,
  Zb = 9007199254740991,
  Jb = /^(?:0|[1-9]\d*)$/;
function Qb(e, t) {
  var r = typeof e;
  return (
    (t = t ?? Zb),
    !!t &&
      (r == "number" || (r != "symbol" && Jb.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Qu = Qb,
  e0 = 9007199254740991;
function t0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= e0;
}
var ec = t0,
  r0 = Kn,
  n0 = ec,
  i0 = Rr,
  a0 = "[object Arguments]",
  o0 = "[object Array]",
  u0 = "[object Boolean]",
  c0 = "[object Date]",
  l0 = "[object Error]",
  s0 = "[object Function]",
  f0 = "[object Map]",
  p0 = "[object Number]",
  h0 = "[object Object]",
  d0 = "[object RegExp]",
  v0 = "[object Set]",
  y0 = "[object String]",
  m0 = "[object WeakMap]",
  g0 = "[object ArrayBuffer]",
  b0 = "[object DataView]",
  x0 = "[object Float32Array]",
  w0 = "[object Float64Array]",
  O0 = "[object Int8Array]",
  A0 = "[object Int16Array]",
  P0 = "[object Int32Array]",
  S0 = "[object Uint8Array]",
  _0 = "[object Uint8ClampedArray]",
  $0 = "[object Uint16Array]",
  T0 = "[object Uint32Array]",
  se = {};
se[x0] =
  se[w0] =
  se[O0] =
  se[A0] =
  se[P0] =
  se[S0] =
  se[_0] =
  se[$0] =
  se[T0] =
    !0;
se[a0] =
  se[o0] =
  se[g0] =
  se[u0] =
  se[b0] =
  se[c0] =
  se[l0] =
  se[s0] =
  se[f0] =
  se[p0] =
  se[h0] =
  se[d0] =
  se[v0] =
  se[y0] =
  se[m0] =
    !1;
function E0(e) {
  return i0(e) && n0(e.length) && !!se[r0(e)];
}
var j0 = E0;
function M0(e) {
  return function (t) {
    return e(t);
  };
}
var yh = M0,
  Si = { exports: {} };
Si.exports;
(function (e, t) {
  var r = uy,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var c = i && i.require && i.require("util").types;
        return c || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = u;
})(Si, Si.exports);
var I0 = Si.exports,
  k0 = j0,
  C0 = yh,
  cl = I0,
  ll = cl && cl.isTypedArray,
  N0 = ll ? C0(ll) : k0,
  mh = N0,
  D0 = Lb,
  R0 = Ju,
  B0 = at,
  L0 = vh,
  F0 = Qu,
  W0 = mh,
  U0 = Object.prototype,
  z0 = U0.hasOwnProperty;
function q0(e, t) {
  var r = B0(e),
    n = !r && R0(e),
    i = !r && !n && L0(e),
    a = !r && !n && !i && W0(e),
    o = r || n || i || a,
    u = o ? D0(e.length, String) : [],
    c = u.length;
  for (var l in e)
    (t || z0.call(e, l)) &&
      !(
        o &&
        (l == "length" ||
          (i && (l == "offset" || l == "parent")) ||
          (a && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
          F0(l, c))
      ) &&
      u.push(l);
  return u;
}
var K0 = q0,
  G0 = Object.prototype;
function H0(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || G0;
  return e === r;
}
var X0 = H0;
function V0(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var gh = V0,
  Y0 = gh,
  Z0 = Y0(Object.keys, Object),
  J0 = Z0,
  Q0 = X0,
  ex = J0,
  tx = Object.prototype,
  rx = tx.hasOwnProperty;
function nx(e) {
  if (!Q0(e)) return ex(e);
  var t = [];
  for (var r in Object(e)) rx.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ix = nx,
  ax = cy,
  ox = ec;
function ux(e) {
  return e != null && ox(e.length) && !ax(e);
}
var Xn = ux,
  cx = K0,
  lx = ix,
  sx = Xn;
function fx(e) {
  return sx(e) ? cx(e) : lx(e);
}
var ga = fx,
  px = $b,
  hx = Rb,
  dx = ga;
function vx(e) {
  return px(e, dx, hx);
}
var yx = vx,
  sl = yx,
  mx = 1,
  gx = Object.prototype,
  bx = gx.hasOwnProperty;
function xx(e, t, r, n, i, a) {
  var o = r & mx,
    u = sl(e),
    c = u.length,
    l = sl(t),
    f = l.length;
  if (c != f && !o) return !1;
  for (var s = c; s--; ) {
    var p = u[s];
    if (!(o ? p in t : bx.call(t, p))) return !1;
  }
  var h = a.get(e),
    v = a.get(t);
  if (h && v) return h == t && v == e;
  var d = !0;
  (a.set(e, t), a.set(t, e));
  for (var y = o; ++s < c; ) {
    p = u[s];
    var b = e[p],
      w = t[p];
    if (n) var x = o ? n(w, b, p, t, e, a) : n(b, w, p, e, t, a);
    if (!(x === void 0 ? b === w || i(b, w, r, n, a) : x)) {
      d = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (d && !y) {
    var O = e.constructor,
      m = t.constructor;
    O != m &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof O == "function" &&
        O instanceof O &&
        typeof m == "function" &&
        m instanceof m
      ) &&
      (d = !1);
  }
  return (a.delete(e), a.delete(t), d);
}
var wx = xx,
  Ox = Gn,
  Ax = Dr,
  Px = Ox(Ax, "DataView"),
  Sx = Px,
  _x = Gn,
  $x = Dr,
  Tx = _x($x, "Promise"),
  Ex = Tx,
  jx = Gn,
  Mx = Dr,
  Ix = jx(Mx, "Set"),
  bh = Ix,
  kx = Gn,
  Cx = Dr,
  Nx = kx(Cx, "WeakMap"),
  Dx = Nx,
  jo = Sx,
  Mo = Tp,
  Io = Ex,
  ko = bh,
  Co = Dx,
  xh = Kn,
  Lr = ly,
  fl = "[object Map]",
  Rx = "[object Object]",
  pl = "[object Promise]",
  hl = "[object Set]",
  dl = "[object WeakMap]",
  vl = "[object DataView]",
  Bx = Lr(jo),
  Lx = Lr(Mo),
  Fx = Lr(Io),
  Wx = Lr(ko),
  Ux = Lr(Co),
  Bt = xh;
((jo && Bt(new jo(new ArrayBuffer(1))) != vl) ||
  (Mo && Bt(new Mo()) != fl) ||
  (Io && Bt(Io.resolve()) != pl) ||
  (ko && Bt(new ko()) != hl) ||
  (Co && Bt(new Co()) != dl)) &&
  (Bt = function (e) {
    var t = xh(e),
      r = t == Rx ? e.constructor : void 0,
      n = r ? Lr(r) : "";
    if (n)
      switch (n) {
        case Bx:
          return vl;
        case Lx:
          return fl;
        case Fx:
          return pl;
        case Wx:
          return hl;
        case Ux:
          return dl;
      }
    return t;
  });
var zx = Bt,
  Ya = ch,
  qx = ph,
  Kx = Ob,
  Gx = wx,
  yl = zx,
  ml = at,
  gl = vh,
  Hx = mh,
  Xx = 1,
  bl = "[object Arguments]",
  xl = "[object Array]",
  ti = "[object Object]",
  Vx = Object.prototype,
  wl = Vx.hasOwnProperty;
function Yx(e, t, r, n, i, a) {
  var o = ml(e),
    u = ml(t),
    c = o ? xl : yl(e),
    l = u ? xl : yl(t);
  ((c = c == bl ? ti : c), (l = l == bl ? ti : l));
  var f = c == ti,
    s = l == ti,
    p = c == l;
  if (p && gl(e)) {
    if (!gl(t)) return !1;
    ((o = !0), (f = !1));
  }
  if (p && !f)
    return (
      a || (a = new Ya()),
      o || Hx(e) ? qx(e, t, r, n, i, a) : Kx(e, t, c, r, n, i, a)
    );
  if (!(r & Xx)) {
    var h = f && wl.call(e, "__wrapped__"),
      v = s && wl.call(t, "__wrapped__");
    if (h || v) {
      var d = h ? e.value() : e,
        y = v ? t.value() : t;
      return (a || (a = new Ya()), i(d, y, r, n, a));
    }
  }
  return p ? (a || (a = new Ya()), Gx(e, t, r, n, i, a)) : !1;
}
var Zx = Yx,
  Jx = Zx,
  Ol = Rr;
function wh(e, t, r, n, i) {
  return e === t
    ? !0
    : e == null || t == null || (!Ol(e) && !Ol(t))
      ? e !== e && t !== t
      : Jx(e, t, r, n, wh, i);
}
var tc = wh,
  Qx = ch,
  ew = tc,
  tw = 1,
  rw = 2;
function nw(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var c = u[0],
      l = e[c],
      f = u[1];
    if (o && u[2]) {
      if (l === void 0 && !(c in e)) return !1;
    } else {
      var s = new Qx();
      if (n) var p = n(l, f, c, e, t, s);
      if (!(p === void 0 ? ew(f, l, tw | rw, n, s) : p)) return !1;
    }
  }
  return !0;
}
var iw = nw,
  aw = Mp;
function ow(e) {
  return e === e && !aw(e);
}
var Oh = ow,
  uw = Oh,
  cw = ga;
function lw(e) {
  for (var t = cw(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, uw(i)];
  }
  return t;
}
var sw = lw;
function fw(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Ah = fw,
  pw = iw,
  hw = sw,
  dw = Ah;
function vw(e) {
  var t = hw(e);
  return t.length == 1 && t[0][2]
    ? dw(t[0][0], t[0][1])
    : function (r) {
        return r === e || pw(r, e, t);
      };
}
var yw = vw;
function mw(e, t) {
  return e != null && t in Object(e);
}
var gw = mw,
  bw = sy,
  xw = Ju,
  ww = at,
  Ow = Qu,
  Aw = ec,
  Pw = zu;
function Sw(e, t, r) {
  t = bw(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = Pw(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && Aw(i) && Ow(o, i) && (ww(e) || xw(e)));
}
var _w = Sw,
  $w = gw,
  Tw = _w;
function Ew(e, t) {
  return e != null && Tw(e, t, $w);
}
var jw = Ew,
  Mw = tc,
  Iw = fy,
  kw = jw,
  Cw = Ip,
  Nw = Oh,
  Dw = Ah,
  Rw = zu,
  Bw = 1,
  Lw = 2;
function Fw(e, t) {
  return Cw(e) && Nw(t)
    ? Dw(Rw(e), t)
    : function (r) {
        var n = Iw(r, e);
        return n === void 0 && n === t ? kw(r, e) : Mw(t, n, Bw | Lw);
      };
}
var Ww = Fw;
function Uw(e) {
  return e;
}
var Fr = Uw;
function zw(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var qw = zw,
  Kw = kp;
function Gw(e) {
  return function (t) {
    return Kw(t, e);
  };
}
var Hw = Gw,
  Xw = qw,
  Vw = Hw,
  Yw = Ip,
  Zw = zu;
function Jw(e) {
  return Yw(e) ? Xw(Zw(e)) : Vw(e);
}
var Qw = Jw,
  eO = yw,
  tO = Ww,
  rO = Fr,
  nO = at,
  iO = Qw;
function aO(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? rO
      : typeof e == "object"
        ? nO(e)
          ? tO(e[0], e[1])
          : eO(e)
        : iO(e);
}
var ot = aO;
function oO(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var Ph = oO;
function uO(e) {
  return e !== e;
}
var cO = uO;
function lO(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var sO = lO,
  fO = Ph,
  pO = cO,
  hO = sO;
function dO(e, t, r) {
  return t === t ? hO(e, t, r) : fO(e, pO, r);
}
var vO = dO,
  yO = vO;
function mO(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && yO(e, t, 0) > -1;
}
var gO = mO;
function bO(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n])) return !0;
  return !1;
}
var xO = bO;
function wO() {}
var OO = wO,
  Za = bh,
  AO = OO,
  PO = Zu,
  SO = 1 / 0,
  _O =
    Za && 1 / PO(new Za([, -0]))[1] == SO
      ? function (e) {
          return new Za(e);
        }
      : AO,
  $O = _O,
  TO = lh,
  EO = gO,
  jO = xO,
  MO = fh,
  IO = $O,
  kO = Zu,
  CO = 200;
function NO(e, t, r) {
  var n = -1,
    i = EO,
    a = e.length,
    o = !0,
    u = [],
    c = u;
  if (r) ((o = !1), (i = jO));
  else if (a >= CO) {
    var l = t ? null : IO(e);
    if (l) return kO(l);
    ((o = !1), (i = MO), (c = new TO()));
  } else c = t ? [] : u;
  e: for (; ++n < a; ) {
    var f = e[n],
      s = t ? t(f) : f;
    if (((f = r || f !== 0 ? f : 0), o && s === s)) {
      for (var p = c.length; p--; ) if (c[p] === s) continue e;
      (t && c.push(s), u.push(f));
    } else i(c, s, r) || (c !== u && c.push(s), u.push(f));
  }
  return u;
}
var DO = NO,
  RO = ot,
  BO = DO;
function LO(e, t) {
  return e && e.length ? BO(e, RO(t)) : [];
}
var FO = LO;
const Al = Ae(FO);
function Sh(e, t, r) {
  return t === !0 ? Al(e, r) : V(t) ? Al(e, t) : e;
}
function dr(e) {
  "@babel/helpers - typeof";
  return (
    (dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dr(e)
  );
}
var WO = ["ref"];
function Pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pl(Object(r), !0).forEach(function (n) {
          ba(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function UO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $h(n.key), n));
  }
}
function zO(e, t, r) {
  return (
    t && Sl(e.prototype, t),
    r && Sl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qO(e, t, r) {
  return (
    (t = _i(t)),
    KO(
      e,
      _h() ? Reflect.construct(t, r || [], _i(e).constructor) : t.apply(e, r),
    )
  );
}
function KO(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return GO(e);
}
function GO(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function _h() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (_h = function () {
    return !!e;
  })();
}
function _i(e) {
  return (
    (_i = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    _i(e)
  );
}
function HO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && No(e, t));
}
function No(e, t) {
  return (
    (No = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    No(e, t)
  );
}
function ba(e, t, r) {
  return (
    (t = $h(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $h(e) {
  var t = XO(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function XO(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function VO(e, t) {
  if (e == null) return {};
  var r = YO(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function YO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ZO(e) {
  return e.value;
}
function JO(e, t) {
  if (P.isValidElement(e)) return P.cloneElement(e, t);
  if (typeof e == "function") return P.createElement(e, t);
  t.ref;
  var r = VO(t, WO);
  return P.createElement(Yu, r);
}
var _l = 1,
  lr = (function (e) {
    function t() {
      var r;
      UO(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = qO(this, t, [].concat(i))),
        ba(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      HO(t, e),
      zO(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > _l ||
                    Math.abs(i.height - this.lastBoundingBox.height) > _l) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? ut({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                c = i.margin,
                l = i.chartWidth,
                f = i.chartHeight,
                s,
                p;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var h = this.getBBoxSnapshot();
                  s = { left: ((l || 0) - h.width) / 2 };
                } else
                  s =
                    o === "right"
                      ? { right: (c && c.right) || 0 }
                      : { left: (c && c.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var v = this.getBBoxSnapshot();
                  p = { top: ((f || 0) - v.height) / 2 };
                } else
                  p =
                    u === "bottom"
                      ? { bottom: (c && c.bottom) || 0 }
                      : { top: (c && c.top) || 0 };
              return ut(ut({}, s), p);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                c = i.wrapperStyle,
                l = i.payloadUniqBy,
                f = i.payload,
                s = ut(
                  ut(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: u || "auto",
                    },
                    this.getDefaultPosition(c),
                  ),
                  c,
                );
              return P.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: s,
                  ref: function (h) {
                    n.wrapperNode = h;
                  },
                },
                JO(a, ut(ut({}, this.props), {}, { payload: Sh(f, l, ZO) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = ut(ut({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && R(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(B.PureComponent);
ba(lr, "displayName", "Legend");
ba(lr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var $l = Ep,
  QO = Ju,
  e1 = at,
  Tl = $l ? $l.isConcatSpreadable : void 0;
function t1(e) {
  return e1(e) || QO(e) || !!(Tl && e && e[Tl]);
}
var r1 = t1,
  n1 = hh,
  i1 = r1;
function Th(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = i1), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u)
      ? t > 1
        ? Th(u, t - 1, r, n, i)
        : n1(i, u)
      : n || (i[i.length] = u);
  }
  return i;
}
var Eh = Th;
function a1(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var c = o[e ? u : ++i];
      if (r(a[c], c, a) === !1) break;
    }
    return t;
  };
}
var o1 = a1,
  u1 = o1,
  c1 = u1(),
  l1 = c1,
  s1 = l1,
  f1 = ga;
function p1(e, t) {
  return e && s1(e, t, f1);
}
var jh = p1,
  h1 = Xn;
function d1(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!h1(r)) return e(r, n);
    for (
      var i = r.length, a = t ? i : -1, o = Object(r);
      (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;
    );
    return r;
  };
}
var v1 = d1,
  y1 = jh,
  m1 = v1,
  g1 = m1(y1),
  rc = g1,
  b1 = rc,
  x1 = Xn;
function w1(e, t) {
  var r = -1,
    n = x1(e) ? Array(e.length) : [];
  return (
    b1(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var Mh = w1;
function O1(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var A1 = O1,
  El = Cp;
function P1(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = El(e),
      o = t !== void 0,
      u = t === null,
      c = t === t,
      l = El(t);
    if (
      (!u && !l && !a && e > t) ||
      (a && o && c && !u && !l) ||
      (n && o && c) ||
      (!r && c) ||
      !i
    )
      return 1;
    if (
      (!n && !a && !l && e < t) ||
      (l && r && i && !n && !a) ||
      (u && r && i) ||
      (!o && i) ||
      !c
    )
      return -1;
  }
  return 0;
}
var S1 = P1,
  _1 = S1;
function $1(e, t, r) {
  for (
    var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length;
    ++n < o;
  ) {
    var c = _1(i[n], a[n]);
    if (c) {
      if (n >= u) return c;
      var l = r[n];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var T1 = $1,
  Ja = Np,
  E1 = kp,
  j1 = ot,
  M1 = Mh,
  I1 = A1,
  k1 = yh,
  C1 = T1,
  N1 = Fr,
  D1 = at;
function R1(e, t, r) {
  t.length
    ? (t = Ja(t, function (a) {
        return D1(a)
          ? function (o) {
              return E1(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [N1]);
  var n = -1;
  t = Ja(t, k1(j1));
  var i = M1(e, function (a, o, u) {
    var c = Ja(t, function (l) {
      return l(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return I1(i, function (a, o) {
    return C1(a, o, r);
  });
}
var B1 = R1;
function L1(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var F1 = L1,
  W1 = F1,
  jl = Math.max;
function U1(e, t, r) {
  return (
    (t = jl(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, i = -1, a = jl(n.length - t, 0), o = Array(a);
        ++i < a;
      )
        o[i] = n[t + i];
      i = -1;
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
      return ((u[t] = r(o)), W1(e, this, u));
    }
  );
}
var z1 = U1;
function q1(e) {
  return function () {
    return e;
  };
}
var K1 = q1,
  G1 = Gn,
  H1 = (function () {
    try {
      var e = G1(Object, "defineProperty");
      return (e({}, "", {}), e);
    } catch {}
  })(),
  Ih = H1,
  X1 = K1,
  Ml = Ih,
  V1 = Fr,
  Y1 = Ml
    ? function (e, t) {
        return Ml(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: X1(t),
          writable: !0,
        });
      }
    : V1,
  Z1 = Y1,
  J1 = 800,
  Q1 = 16,
  eA = Date.now;
function tA(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = eA(),
      i = Q1 - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= J1) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var rA = tA,
  nA = Z1,
  iA = rA,
  aA = iA(nA),
  oA = aA,
  uA = Fr,
  cA = z1,
  lA = oA;
function sA(e, t) {
  return lA(cA(e, t, uA), e + "");
}
var fA = sA,
  pA = jp,
  hA = Xn,
  dA = Qu,
  vA = Mp;
function yA(e, t, r) {
  if (!vA(r)) return !1;
  var n = typeof t;
  return (n == "number" ? hA(r) && dA(t, r.length) : n == "string" && t in r)
    ? pA(r[t], e)
    : !1;
}
var xa = yA,
  mA = Eh,
  gA = B1,
  bA = fA,
  Il = xa,
  xA = bA(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && Il(e, t[0], t[1])
        ? (t = [])
        : r > 2 && Il(t[0], t[1], t[2]) && (t = [t[0]]),
      gA(e, mA(t, 1), [])
    );
  }),
  wA = xA;
const nc = Ae(wA);
function hn(e) {
  "@babel/helpers - typeof";
  return (
    (hn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hn(e)
  );
}
function Do() {
  return (
    (Do = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Do.apply(this, arguments)
  );
}
function OA(e, t) {
  return _A(e) || SA(e, t) || PA(e, t) || AA();
}
function AA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PA(e, t) {
  if (e) {
    if (typeof e == "string") return kl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kl(e, t);
  }
}
function kl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SA(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function _A(e) {
  if (Array.isArray(e)) return e;
}
function Cl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cl(Object(r), !0).forEach(function (n) {
          $A(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function $A(e, t, r) {
  return (
    (t = TA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TA(e) {
  var t = EA(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function EA(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jA(e) {
  return Array.isArray(e) && Oe(e[0]) && Oe(e[1]) ? e.join(" ~ ") : e;
}
var MA = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    c = t.labelStyle,
    l = c === void 0 ? {} : c,
    f = t.payload,
    s = t.formatter,
    p = t.itemSorter,
    h = t.wrapperClassName,
    v = t.labelClassName,
    d = t.label,
    y = t.labelFormatter,
    b = t.accessibilityLayer,
    w = b === void 0 ? !1 : b,
    x = function () {
      if (f && f.length) {
        var T = { padding: 0, margin: 0 },
          M = (p ? nc(f, p) : f).map(function (I, k) {
            if (I.type === "none") return null;
            var N = Qa(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: I.color || "#000",
                },
                u,
              ),
              D = I.formatter || s || jA,
              L = I.value,
              F = I.name,
              q = L,
              H = F;
            if (D && q != null && H != null) {
              var z = D(L, F, I, k, f);
              if (Array.isArray(z)) {
                var X = OA(z, 2);
                ((q = X[0]), (H = X[1]));
              } else q = z;
            }
            return P.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(k),
                style: N,
              },
              Oe(H)
                ? P.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    H,
                  )
                : null,
              Oe(H)
                ? P.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n,
                  )
                : null,
              P.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                q,
              ),
              P.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                I.unit || "",
              ),
            );
          });
        return P.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: T },
          M,
        );
      }
      return null;
    },
    O = Qa(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    m = Qa({ margin: 0 }, l),
    g = !Q(d),
    A = g ? d : "",
    S = J("recharts-default-tooltip", h),
    _ = J("recharts-tooltip-label", v);
  g && y && f !== void 0 && f !== null && (A = y(d, f));
  var E = w ? { role: "status", "aria-live": "assertive" } : {};
  return P.createElement(
    "div",
    Do({ className: S, style: O }, E),
    P.createElement(
      "p",
      { className: _, style: m },
      P.isValidElement(A) ? A : "".concat(A),
    ),
    x(),
  );
};
function dn(e) {
  "@babel/helpers - typeof";
  return (
    (dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dn(e)
  );
}
function ri(e, t, r) {
  return (
    (t = IA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function IA(e) {
  var t = kA(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function kA(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hr = "recharts-tooltip-wrapper",
  CA = { visibility: "hidden" };
function NA(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return J(
    Hr,
    ri(
      ri(
        ri(
          ri({}, "".concat(Hr, "-right"), R(r) && t && R(t.x) && r >= t.x),
          "".concat(Hr, "-left"),
          R(r) && t && R(t.x) && r < t.x,
        ),
        "".concat(Hr, "-bottom"),
        R(n) && t && R(t.y) && n >= t.y,
      ),
      "".concat(Hr, "-top"),
      R(n) && t && R(t.y) && n < t.y,
    ),
  );
}
function Nl(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    c = e.viewBox,
    l = e.viewBoxDimension;
  if (a && R(a[n])) return a[n];
  var f = r[n] - u - i,
    s = r[n] + i;
  if (t[n]) return o[n] ? f : s;
  if (o[n]) {
    var p = f,
      h = c[n];
    return p < h ? Math.max(s, c[n]) : Math.max(f, c[n]);
  }
  var v = s + u,
    d = c[n] + l;
  return v > d ? Math.max(f, c[n]) : Math.max(s, c[n]);
}
function DA(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function RA(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    c = e.viewBox,
    l,
    f,
    s;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = Nl({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (s = Nl({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (l = DA({ translateX: f, translateY: s, useTranslate3d: u })))
      : (l = CA),
    {
      cssProperties: l,
      cssClasses: NA({ translateX: f, translateY: s, coordinate: r }),
    }
  );
}
function vr(e) {
  "@babel/helpers - typeof";
  return (
    (vr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vr(e)
  );
}
function Dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dl(Object(r), !0).forEach(function (n) {
          Bo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function BA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ch(n.key), n));
  }
}
function FA(e, t, r) {
  return (
    t && LA(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function WA(e, t, r) {
  return (
    (t = $i(t)),
    UA(
      e,
      kh() ? Reflect.construct(t, r || [], $i(e).constructor) : t.apply(e, r),
    )
  );
}
function UA(e, t) {
  if (t && (vr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return zA(e);
}
function zA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function kh() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (kh = function () {
    return !!e;
  })();
}
function $i(e) {
  return (
    ($i = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $i(e)
  );
}
function qA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ro(e, t));
}
function Ro(e, t) {
  return (
    (Ro = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ro(e, t)
  );
}
function Bo(e, t, r) {
  return (
    (t = Ch(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ch(e) {
  var t = KA(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function KA(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Bl = 1,
  GA = (function (e) {
    function t() {
      var r;
      BA(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = WA(this, t, [].concat(i))),
        Bo(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Bo(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, c, l, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u =
                    (c = r.props.coordinate) === null || c === void 0
                      ? void 0
                      : c.x) !== null && u !== void 0
                    ? u
                    : 0,
                y:
                  (l =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && l !== void 0
                    ? l
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      qA(t, e),
      FA(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > Bl ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > Bl) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              c = i.animationEasing,
              l = i.children,
              f = i.coordinate,
              s = i.hasPayload,
              p = i.isAnimationActive,
              h = i.offset,
              v = i.position,
              d = i.reverseDirection,
              y = i.useTranslate3d,
              b = i.viewBox,
              w = i.wrapperStyle,
              x = RA({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: h,
                position: v,
                reverseDirection: d,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: y,
                viewBox: b,
              }),
              O = x.cssClasses,
              m = x.cssProperties,
              g = Rl(
                Rl(
                  {
                    transition:
                      p && a ? "transform ".concat(u, "ms ").concat(c) : void 0,
                  },
                  m,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && s ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                w,
              );
            return P.createElement(
              "div",
              {
                tabIndex: -1,
                className: O,
                style: g,
                ref: function (S) {
                  n.wrapperNode = S;
                },
              },
              l,
            );
          },
        },
      ])
    );
  })(B.PureComponent),
  HA = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  Wr = { isSsr: HA() };
function yr(e) {
  "@babel/helpers - typeof";
  return (
    (yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yr(e)
  );
}
function Ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ll(Object(r), !0).forEach(function (n) {
          ic(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ll(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function XA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dh(n.key), n));
  }
}
function YA(e, t, r) {
  return (
    t && VA(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ZA(e, t, r) {
  return (
    (t = Ti(t)),
    JA(
      e,
      Nh() ? Reflect.construct(t, r || [], Ti(e).constructor) : t.apply(e, r),
    )
  );
}
function JA(e, t) {
  if (t && (yr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return QA(e);
}
function QA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Nh() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Nh = function () {
    return !!e;
  })();
}
function Ti(e) {
  return (
    (Ti = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ti(e)
  );
}
function eP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Lo(e, t));
}
function Lo(e, t) {
  return (
    (Lo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Lo(e, t)
  );
}
function ic(e, t, r) {
  return (
    (t = Dh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dh(e) {
  var t = tP(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function tP(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rP(e) {
  return e.dataKey;
}
function nP(e, t) {
  return P.isValidElement(e)
    ? P.cloneElement(e, t)
    : typeof e == "function"
      ? P.createElement(e, t)
      : P.createElement(MA, t);
}
var ct = (function (e) {
  function t() {
    return (XA(this, t), ZA(this, t, arguments));
  }
  return (
    eP(t, e),
    YA(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            c = i.animationEasing,
            l = i.content,
            f = i.coordinate,
            s = i.filterNull,
            p = i.isAnimationActive,
            h = i.offset,
            v = i.payload,
            d = i.payloadUniqBy,
            y = i.position,
            b = i.reverseDirection,
            w = i.useTranslate3d,
            x = i.viewBox,
            O = i.wrapperStyle,
            m = v ?? [];
          s &&
            m.length &&
            (m = Sh(
              v.filter(function (A) {
                return (
                  A.value != null && (A.hide !== !0 || n.props.includeHidden)
                );
              }),
              d,
              rP,
            ));
          var g = m.length > 0;
          return P.createElement(
            GA,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: c,
              isAnimationActive: p,
              active: a,
              coordinate: f,
              hasPayload: g,
              offset: h,
              position: y,
              reverseDirection: b,
              useTranslate3d: w,
              viewBox: x,
              wrapperStyle: O,
            },
            nP(l, Fl(Fl({}, this.props), {}, { payload: m })),
          );
        },
      },
    ])
  );
})(B.PureComponent);
ic(ct, "displayName", "Tooltip");
ic(ct, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Wr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var ac = function (t) {
  return null;
};
ac.displayName = "Cell";
function vn(e) {
  "@babel/helpers - typeof";
  return (
    (vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vn(e)
  );
}
function Wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wl(Object(r), !0).forEach(function (n) {
          iP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function iP(e, t, r) {
  return (
    (t = aP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function aP(e) {
  var t = oP(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function oP(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tr = { widthCache: {}, cacheCount: 0 },
  uP = 2e3,
  cP = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  Ul = "recharts_measurement_span";
function lP(e) {
  var t = Fo({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var an = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || Wr.isSsr) return { width: 0, height: 0 };
    var n = lP(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (tr.widthCache[i]) return tr.widthCache[i];
    try {
      var a = document.getElementById(Ul);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", Ul),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = Fo(Fo({}, cP), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var u = a.getBoundingClientRect(),
        c = { width: u.width, height: u.height };
      return (
        (tr.widthCache[i] = c),
        ++tr.cacheCount > uP && ((tr.cacheCount = 0), (tr.widthCache = {})),
        c
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  sP = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function yn(e) {
  "@babel/helpers - typeof";
  return (
    (yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yn(e)
  );
}
function Ei(e, t) {
  return dP(e) || hP(e, t) || pP(e, t) || fP();
}
function fP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pP(e, t) {
  if (e) {
    if (typeof e == "string") return zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zl(e, t);
  }
}
function zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hP(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function dP(e) {
  if (Array.isArray(e)) return e;
}
function vP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, mP(n.key), n));
  }
}
function yP(e, t, r) {
  return (
    t && ql(e.prototype, t),
    r && ql(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mP(e) {
  var t = gP(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function gP(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Gl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  bP = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  xP = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  Rh = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  wP = Object.keys(Rh),
  ir = "NaN";
function OP(e, t) {
  return e * Rh[t];
}
var ni = (function () {
  function e(t, r) {
    (vP(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !bP.test(r) && ((this.num = NaN), (this.unit = "")),
      wP.includes(r) && ((this.num = OP(t, r)), (this.unit = "px")));
  }
  return yP(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = xP.exec(r)) !== null && n !== void 0 ? n : [],
            a = Ei(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();
function Bh(e) {
  if (e.includes(ir)) return ir;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = Kl.exec(t)) !== null && r !== void 0 ? r : [],
      i = Ei(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      c = ni.parse(a ?? ""),
      l = ni.parse(u ?? ""),
      f = o === "*" ? c.multiply(l) : c.divide(l);
    if (f.isNaN()) return ir;
    t = t.replace(Kl, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s,
      p = (s = Gl.exec(t)) !== null && s !== void 0 ? s : [],
      h = Ei(p, 4),
      v = h[1],
      d = h[2],
      y = h[3],
      b = ni.parse(v ?? ""),
      w = ni.parse(y ?? ""),
      x = d === "+" ? b.add(w) : b.subtract(w);
    if (x.isNaN()) return ir;
    t = t.replace(Gl, x.toString());
  }
  return t;
}
var Hl = /\(([^()]*)\)/;
function AP(e) {
  for (var t = e; t.includes("("); ) {
    var r = Hl.exec(t),
      n = Ei(r, 2),
      i = n[1];
    t = t.replace(Hl, Bh(i));
  }
  return t;
}
function PP(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = AP(t)), (t = Bh(t)), t);
}
function SP(e) {
  try {
    return PP(e);
  } catch {
    return ir;
  }
}
function eo(e) {
  var t = SP(e.slice(5, -1));
  return t === ir ? "" : t;
}
var _P = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  $P = ["dx", "dy", "angle", "className", "breakAll"];
function Wo() {
  return (
    (Wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wo.apply(this, arguments)
  );
}
function Xl(e, t) {
  if (e == null) return {};
  var r = TP(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function TP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vl(e, t) {
  return IP(e) || MP(e, t) || jP(e, t) || EP();
}
function EP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jP(e, t) {
  if (e) {
    if (typeof e == "string") return Yl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yl(e, t);
  }
}
function Yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MP(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function IP(e) {
  if (Array.isArray(e)) return e;
}
var Lh = /[ \f\n\r\t\v\u2028\u2029]+/,
  Fh = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      Q(r) || (n ? (a = r.toString().split("")) : (a = r.toString().split(Lh)));
      var o = a.map(function (c) {
          return { word: c, width: an(c, i).width };
        }),
        u = n ? 0 : an(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  kP = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      c = t.style,
      l = t.breakAll,
      f = R(o),
      s = u,
      p = function () {
        var k =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return k.reduce(function (N, D) {
          var L = D.word,
            F = D.width,
            q = N[N.length - 1];
          if (q && (i == null || a || q.width + F + n < Number(i)))
            (q.words.push(L), (q.width += F + n));
          else {
            var H = { words: [L], width: F };
            N.push(H);
          }
          return N;
        }, []);
      },
      h = p(r),
      v = function (k) {
        return k.reduce(function (N, D) {
          return N.width > D.width ? N : D;
        });
      };
    if (!f) return h;
    for (
      var d = "…",
        y = function (k) {
          var N = s.slice(0, k),
            D = Fh({
              breakAll: l,
              style: c,
              children: N + d,
            }).wordsWithComputedWidth,
            L = p(D),
            F = L.length > o || v(L).width > Number(i);
          return [F, L];
        },
        b = 0,
        w = s.length - 1,
        x = 0,
        O;
      b <= w && x <= s.length - 1;
    ) {
      var m = Math.floor((b + w) / 2),
        g = m - 1,
        A = y(g),
        S = Vl(A, 2),
        _ = S[0],
        E = S[1],
        $ = y(m),
        T = Vl($, 1),
        M = T[0];
      if ((!_ && !M && (b = m + 1), _ && M && (w = m - 1), !_ && M)) {
        O = E;
        break;
      }
      x++;
    }
    return O || h;
  },
  Zl = function (t) {
    var r = Q(t) ? [] : t.toString().split(Lh);
    return [{ words: r }];
  },
  CP = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !Wr.isSsr) {
      var c,
        l,
        f = Fh({ breakAll: o, children: i, style: a });
      if (f) {
        var s = f.wordsWithComputedWidth,
          p = f.spaceWidth;
        ((c = s), (l = p));
      } else return Zl(i);
      return kP(
        { breakAll: o, children: i, maxLines: u, style: a },
        c,
        l,
        r,
        n,
      );
    }
    return Zl(i);
  },
  Jl = "#808080",
  Ht = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      c = t.capHeight,
      l = c === void 0 ? "0.71em" : c,
      f = t.scaleToFit,
      s = f === void 0 ? !1 : f,
      p = t.textAnchor,
      h = p === void 0 ? "start" : p,
      v = t.verticalAnchor,
      d = v === void 0 ? "end" : v,
      y = t.fill,
      b = y === void 0 ? Jl : y,
      w = Xl(t, _P),
      x = B.useMemo(
        function () {
          return CP({
            breakAll: w.breakAll,
            children: w.children,
            maxLines: w.maxLines,
            scaleToFit: s,
            style: w.style,
            width: w.width,
          });
        },
        [w.breakAll, w.children, w.maxLines, s, w.style, w.width],
      ),
      O = w.dx,
      m = w.dy,
      g = w.angle,
      A = w.className,
      S = w.breakAll,
      _ = Xl(w, $P);
    if (!Oe(n) || !Oe(a)) return null;
    var E = n + (R(O) ? O : 0),
      $ = a + (R(m) ? m : 0),
      T;
    switch (d) {
      case "start":
        T = eo("calc(".concat(l, ")"));
        break;
      case "middle":
        T = eo(
          "calc("
            .concat((x.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(l, " / 2))"),
        );
        break;
      default:
        T = eo("calc(".concat(x.length - 1, " * -").concat(u, ")"));
        break;
    }
    var M = [];
    if (s) {
      var I = x[0].width,
        k = w.width;
      M.push("scale(".concat((R(k) ? k / I : 1) / I, ")"));
    }
    return (
      g && M.push("rotate(".concat(g, ", ").concat(E, ", ").concat($, ")")),
      M.length && (_.transform = M.join(" ")),
      P.createElement(
        "text",
        Wo({}, G(_, !0), {
          x: E,
          y: $,
          className: J("recharts-text", A),
          textAnchor: h,
          fill: b.includes("url") ? Jl : b,
        }),
        x.map(function (N, D) {
          var L = N.words.join(S ? "" : " ");
          return P.createElement(
            "tspan",
            { x: E, dy: D === 0 ? T : u, key: "".concat(L, "-").concat(D) },
            L,
          );
        }),
      )
    );
  };
function Pt(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function NP(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function oc(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = Pt), (r = (u, c) => Pt(e(u), c)), (n = (u, c) => e(u) - c))
    : ((t = e === Pt || e === NP ? e : DP), (r = e), (n = e));
  function i(u, c, l = 0, f = u.length) {
    if (l < f) {
      if (t(c, c) !== 0) return f;
      do {
        const s = (l + f) >>> 1;
        r(u[s], c) < 0 ? (l = s + 1) : (f = s);
      } while (l < f);
    }
    return l;
  }
  function a(u, c, l = 0, f = u.length) {
    if (l < f) {
      if (t(c, c) !== 0) return f;
      do {
        const s = (l + f) >>> 1;
        r(u[s], c) <= 0 ? (l = s + 1) : (f = s);
      } while (l < f);
    }
    return l;
  }
  function o(u, c, l = 0, f = u.length) {
    const s = i(u, c, l, f - 1);
    return s > l && n(u[s - 1], c) > -n(u[s], c) ? s - 1 : s;
  }
  return { left: i, center: o, right: a };
}
function DP() {
  return 0;
}
function Wh(e) {
  return e === null ? NaN : +e;
}
function* RP(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const BP = oc(Pt),
  Vn = BP.right;
oc(Wh).center;
class Ql extends Map {
  constructor(t, r = WP) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(es(this, t));
  }
  has(t) {
    return super.has(es(this, t));
  }
  set(t, r) {
    return super.set(LP(this, t), r);
  }
  delete(t) {
    return super.delete(FP(this, t));
  }
}
function es({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function LP({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function FP({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function WP(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function UP(e = Pt) {
  if (e === Pt) return Uh;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Uh(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const zP = Math.sqrt(50),
  qP = Math.sqrt(10),
  KP = Math.sqrt(2);
function ji(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= zP ? 10 : a >= qP ? 5 : a >= KP ? 2 : 1;
  let u, c, l;
  return (
    i < 0
      ? ((l = Math.pow(10, -i) / o),
        (u = Math.round(e * l)),
        (c = Math.round(t * l)),
        u / l < e && ++u,
        c / l > t && --c,
        (l = -l))
      : ((l = Math.pow(10, i) * o),
        (u = Math.round(e / l)),
        (c = Math.round(t / l)),
        u * l < e && ++u,
        c * l > t && --c),
    c < u && 0.5 <= r && r < 2 ? ji(e, t, r * 2) : [u, c, l]
  );
}
function Uo(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? ji(t, e, r) : ji(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    c = new Array(u);
  if (n)
    if (o < 0) for (let l = 0; l < u; ++l) c[l] = (a - l) / -o;
    else for (let l = 0; l < u; ++l) c[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < u; ++l) c[l] = (i + l) / -o;
  else for (let l = 0; l < u; ++l) c[l] = (i + l) * o;
  return c;
}
function zo(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), ji(e, t, r)[2]);
}
function qo(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? zo(t, e, r) : zo(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ts(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function rs(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function zh(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? Uh : UP(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1,
        l = t - r + 1,
        f = Math.log(c),
        s = 0.5 * Math.exp((2 * f) / 3),
        p = 0.5 * Math.sqrt((f * s * (c - s)) / c) * (l - c / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (l * s) / c + p)),
        v = Math.min(n, Math.floor(t + ((c - l) * s) / c + p));
      zh(e, t, h, v, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (Xr(e, r, t), i(e[n], a) > 0 && Xr(e, r, n); o < u; ) {
      for (Xr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    (i(e[r], a) === 0 ? Xr(e, r, u) : (++u, Xr(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1));
  }
  return e;
}
function Xr(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function GP(e, t, r) {
  if (((e = Float64Array.from(RP(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return rs(e);
    if (t >= 1) return ts(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = ts(zh(e, a).subarray(0, a + 1)),
      u = rs(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function HP(e, t, r = Wh) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function XP(e, t, r) {
  ((e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;
  )
    a[n] = e + n * r;
  return a;
}
function Xe(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const Ko = Symbol("implicit");
function uc() {
  var e = new Ql(),
    t = [],
    r = [],
    n = Ko;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Ko) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Ql()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return uc(t, r).unknown(n);
    }),
    Xe.apply(i, arguments),
    i
  );
}
function mn() {
  var e = uc().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    c = 0,
    l = 0,
    f = 0.5;
  delete e.unknown;
  function s() {
    var p = t().length,
      h = i < n,
      v = h ? i : n,
      d = h ? n : i;
    ((a = (d - v) / Math.max(1, p - c + l * 2)),
      u && (a = Math.floor(a)),
      (v += (d - v - a * (p - c)) * f),
      (o = a * (1 - c)),
      u && ((v = Math.round(v)), (o = Math.round(o))));
    var y = XP(p).map(function (b) {
      return v + a * b;
    });
    return r(h ? y.reverse() : y);
  }
  return (
    (e.domain = function (p) {
      return arguments.length ? (t(p), s()) : t();
    }),
    (e.range = function (p) {
      return arguments.length
        ? (([n, i] = p), (n = +n), (i = +i), s())
        : [n, i];
    }),
    (e.rangeRound = function (p) {
      return (([n, i] = p), (n = +n), (i = +i), (u = !0), s());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (p) {
      return arguments.length ? ((u = !!p), s()) : u;
    }),
    (e.padding = function (p) {
      return arguments.length ? ((c = Math.min(1, (l = +p))), s()) : c;
    }),
    (e.paddingInner = function (p) {
      return arguments.length ? ((c = Math.min(1, p)), s()) : c;
    }),
    (e.paddingOuter = function (p) {
      return arguments.length ? ((l = +p), s()) : l;
    }),
    (e.align = function (p) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, p))), s()) : f;
    }),
    (e.copy = function () {
      return mn(t(), [n, i]).round(u).paddingInner(c).paddingOuter(l).align(f);
    }),
    Xe.apply(s(), arguments)
  );
}
function qh(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return qh(t());
    }),
    e
  );
}
function on() {
  return qh(mn.apply(null, arguments).paddingInner(1));
}
function cc(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function Kh(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Yn() {}
var gn = 0.7,
  Mi = 1 / gn,
  sr = "\\s*([+-]?\\d+)\\s*",
  bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  VP = /^#([0-9a-f]{3,8})$/,
  YP = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`),
  ZP = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`),
  JP = new RegExp(`^rgba\\(${sr},${sr},${sr},${bn}\\)$`),
  QP = new RegExp(`^rgba\\(${rt},${rt},${rt},${bn}\\)$`),
  eS = new RegExp(`^hsl\\(${bn},${rt},${rt}\\)$`),
  tS = new RegExp(`^hsla\\(${bn},${rt},${rt},${bn}\\)$`),
  ns = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
cc(Yn, xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: is,
  formatHex: is,
  formatHex8: rS,
  formatHsl: nS,
  formatRgb: as,
  toString: as,
});
function is() {
  return this.rgb().formatHex();
}
function rS() {
  return this.rgb().formatHex8();
}
function nS() {
  return Gh(this).formatHsl();
}
function as() {
  return this.rgb().formatRgb();
}
function xn(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = VP.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? os(t)
          : r === 3
            ? new Re(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? ii(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? ii(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = YP.exec(e))
        ? new Re(t[1], t[2], t[3], 1)
        : (t = ZP.exec(e))
          ? new Re(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = JP.exec(e))
            ? ii(t[1], t[2], t[3], t[4])
            : (t = QP.exec(e))
              ? ii(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = eS.exec(e))
                ? ls(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = tS.exec(e))
                  ? ls(t[1], t[2] / 100, t[3] / 100, t[4])
                  : ns.hasOwnProperty(e)
                    ? os(ns[e])
                    : e === "transparent"
                      ? new Re(NaN, NaN, NaN, 0)
                      : null
  );
}
function os(e) {
  return new Re((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ii(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new Re(e, t, r, n));
}
function iS(e) {
  return (
    e instanceof Yn || (e = xn(e)),
    e ? ((e = e.rgb()), new Re(e.r, e.g, e.b, e.opacity)) : new Re()
  );
}
function Go(e, t, r, n) {
  return arguments.length === 1 ? iS(e) : new Re(e, t, r, n ?? 1);
}
function Re(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
cc(
  Re,
  Go,
  Kh(Yn, {
    brighter(e) {
      return (
        (e = e == null ? Mi : Math.pow(Mi, e)),
        new Re(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? gn : Math.pow(gn, e)),
        new Re(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Re(qt(this.r), qt(this.g), qt(this.b), Ii(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: us,
    formatHex: us,
    formatHex8: aS,
    formatRgb: cs,
    toString: cs,
  }),
);
function us() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function aS() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}${Wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cs() {
  const e = Ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qt(this.r)}, ${qt(this.g)}, ${qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wt(e) {
  return ((e = qt(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function ls(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Ze(e, t, r, n)
  );
}
function Gh(e) {
  if (e instanceof Ze) return new Ze(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Yn || (e = xn(e)), !e)) return new Ze();
  if (e instanceof Ze) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    c = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = c > 0 && c < 1 ? 0 : o),
    new Ze(o, u, c, e.opacity)
  );
}
function oS(e, t, r, n) {
  return arguments.length === 1 ? Gh(e) : new Ze(e, t, r, n ?? 1);
}
function Ze(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
cc(
  Ze,
  oS,
  Kh(Yn, {
    brighter(e) {
      return (
        (e = e == null ? Mi : Math.pow(Mi, e)),
        new Ze(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? gn : Math.pow(gn, e)),
        new Ze(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Re(
        to(e >= 240 ? e - 240 : e + 120, i, n),
        to(e, i, n),
        to(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new Ze(ss(this.h), ai(this.s), ai(this.l), Ii(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Ii(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${ss(this.h)}, ${ai(this.s) * 100}%, ${ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function ss(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function to(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const lc = (e) => () => e;
function uS(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function cS(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function lS(e) {
  return (e = +e) == 1
    ? Hh
    : function (t, r) {
        return r - t ? cS(t, r, e) : lc(isNaN(t) ? r : t);
      };
}
function Hh(e, t) {
  var r = t - e;
  return r ? uS(e, r) : lc(isNaN(e) ? t : e);
}
const fs = (function e(t) {
  var r = lS(t);
  function n(i, a) {
    var o = r((i = Go(i)).r, (a = Go(a)).r),
      u = r(i.g, a.g),
      c = r(i.b, a.b),
      l = Hh(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)),
        (i.g = u(f)),
        (i.b = c(f)),
        (i.opacity = l(f)),
        i + ""
      );
    };
  }
  return ((n.gamma = e), n);
})(1);
function sS(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function fS(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function pS(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Ur(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function hS(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function ki(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function dS(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = Ur(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Ho = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ro = new RegExp(Ho.source, "g");
function vS(e) {
  return function () {
    return e;
  };
}
function yS(e) {
  return function (t) {
    return e(t) + "";
  };
}
function mS(e, t) {
  var r = (Ho.lastIndex = ro.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    c = [];
  for (e = e + "", t = t + ""; (n = Ho.exec(e)) && (i = ro.exec(t)); )
    ((a = i.index) > r &&
      ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), c.push({ i: o, x: ki(n, i) })),
      (r = ro.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? c[0]
        ? yS(c[0].x)
        : vS(t)
      : ((t = c.length),
        function (l) {
          for (var f = 0, s; f < t; ++f) u[(s = c[f]).i] = s.x(l);
          return u.join("");
        })
  );
}
function Ur(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? lc(t)
    : (r === "number"
        ? ki
        : r === "string"
          ? (n = xn(t))
            ? ((t = n), fs)
            : mS
          : t instanceof xn
            ? fs
            : t instanceof Date
              ? hS
              : fS(t)
                ? sS
                : Array.isArray(t)
                  ? pS
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? dS
                    : ki)(e, t);
}
function sc(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function gS(e, t) {
  t === void 0 && ((t = e), (e = Ur));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;
  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function bS(e) {
  return function () {
    return e;
  };
}
function Ci(e) {
  return +e;
}
var ps = [0, 1];
function Ce(e) {
  return e;
}
function Xo(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : bS(isNaN(t) ? NaN : 0.5);
}
function xS(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function wS(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = Xo(i, n)), (a = r(o, a))) : ((n = Xo(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function OS(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;
  )
    ((i[o] = Xo(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (u) {
    var c = Vn(e, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function Zn(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function wa() {
  var e = ps,
    t = ps,
    r = Ur,
    n,
    i,
    a,
    o = Ce,
    u,
    c,
    l;
  function f() {
    var p = Math.min(e.length, t.length);
    return (
      o !== Ce && (o = xS(e[0], e[p - 1])),
      (u = p > 2 ? OS : wS),
      (c = l = null),
      s
    );
  }
  function s(p) {
    return p == null || isNaN((p = +p))
      ? a
      : (c || (c = u(e.map(n), t, r)))(n(o(p)));
  }
  return (
    (s.invert = function (p) {
      return o(i((l || (l = u(t, e.map(n), ki)))(p)));
    }),
    (s.domain = function (p) {
      return arguments.length ? ((e = Array.from(p, Ci)), f()) : e.slice();
    }),
    (s.range = function (p) {
      return arguments.length ? ((t = Array.from(p)), f()) : t.slice();
    }),
    (s.rangeRound = function (p) {
      return ((t = Array.from(p)), (r = sc), f());
    }),
    (s.clamp = function (p) {
      return arguments.length ? ((o = p ? !0 : Ce), f()) : o !== Ce;
    }),
    (s.interpolate = function (p) {
      return arguments.length ? ((r = p), f()) : r;
    }),
    (s.unknown = function (p) {
      return arguments.length ? ((a = p), s) : a;
    }),
    function (p, h) {
      return ((n = p), (i = h), f());
    }
  );
}
function fc() {
  return wa()(Ce, Ce);
}
function AS(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Ni(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function mr(e) {
  return ((e = Ni(Math.abs(e))), e ? e[1] : NaN);
}
function PS(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], c = 0;
      i > 0 &&
      u > 0 &&
      (c + u + 1 > n && (u = Math.max(1, n - c)),
      a.push(r.substring((i -= u), i + u)),
      !((c += u + 1) > n));
    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function SS(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var _S =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wn(e) {
  if (!(t = _S.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new pc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
wn.prototype = pc.prototype;
function pc(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
pc.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function $S(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Xh;
function TS(e, t) {
  var r = Ni(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (Xh = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Ni(e, Math.max(0, t + a - 1))[0];
}
function hs(e, t) {
  var r = Ni(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const ds = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: AS,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => hs(e * 100, t),
  r: hs,
  s: TS,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function vs(e) {
  return e;
}
var ys = Array.prototype.map,
  ms = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function ES(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? vs
        : PS(ys.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? vs : SS(ys.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    c = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(s) {
    s = wn(s);
    var p = s.fill,
      h = s.align,
      v = s.sign,
      d = s.symbol,
      y = s.zero,
      b = s.width,
      w = s.comma,
      x = s.precision,
      O = s.trim,
      m = s.type;
    (m === "n"
      ? ((w = !0), (m = "g"))
      : ds[m] || (x === void 0 && (x = 12), (O = !0), (m = "g")),
      (y || (p === "0" && h === "=")) && ((y = !0), (p = "0"), (h = "=")));
    var g =
        d === "$"
          ? r
          : d === "#" && /[boxX]/.test(m)
            ? "0" + m.toLowerCase()
            : "",
      A = d === "$" ? n : /[%p]/.test(m) ? o : "",
      S = ds[m],
      _ = /[defgprs%]/.test(m);
    x =
      x === void 0
        ? 6
        : /[gprs]/.test(m)
          ? Math.max(1, Math.min(21, x))
          : Math.max(0, Math.min(20, x));
    function E($) {
      var T = g,
        M = A,
        I,
        k,
        N;
      if (m === "c") ((M = S($) + M), ($ = ""));
      else {
        $ = +$;
        var D = $ < 0 || 1 / $ < 0;
        if (
          (($ = isNaN($) ? c : S(Math.abs($), x)),
          O && ($ = $S($)),
          D && +$ == 0 && v !== "+" && (D = !1),
          (T = (D ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + T),
          (M =
            (m === "s" ? ms[8 + Xh / 3] : "") +
            M +
            (D && v === "(" ? ")" : "")),
          _)
        ) {
          for (I = -1, k = $.length; ++I < k; )
            if (((N = $.charCodeAt(I)), 48 > N || N > 57)) {
              ((M = (N === 46 ? i + $.slice(I + 1) : $.slice(I)) + M),
                ($ = $.slice(0, I)));
              break;
            }
        }
      }
      w && !y && ($ = t($, 1 / 0));
      var L = T.length + $.length + M.length,
        F = L < b ? new Array(b - L + 1).join(p) : "";
      switch (
        (w && y && (($ = t(F + $, F.length ? b - M.length : 1 / 0)), (F = "")),
        h)
      ) {
        case "<":
          $ = T + $ + M + F;
          break;
        case "=":
          $ = T + F + $ + M;
          break;
        case "^":
          $ = F.slice(0, (L = F.length >> 1)) + T + $ + M + F.slice(L);
          break;
        default:
          $ = F + T + $ + M;
          break;
      }
      return a($);
    }
    return (
      (E.toString = function () {
        return s + "";
      }),
      E
    );
  }
  function f(s, p) {
    var h = l(((s = wn(s)), (s.type = "f"), s)),
      v = Math.max(-8, Math.min(8, Math.floor(mr(p) / 3))) * 3,
      d = Math.pow(10, -v),
      y = ms[8 + v / 3];
    return function (b) {
      return h(d * b) + y;
    };
  }
  return { format: l, formatPrefix: f };
}
var oi, hc, Vh;
jS({ thousands: ",", grouping: [3], currency: ["$", ""] });
function jS(e) {
  return ((oi = ES(e)), (hc = oi.format), (Vh = oi.formatPrefix), oi);
}
function MS(e) {
  return Math.max(0, -mr(Math.abs(e)));
}
function IS(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(mr(t) / 3))) * 3 - mr(Math.abs(e)),
  );
}
function kS(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, mr(t) - mr(e)) + 1
  );
}
function Yh(e, t, r, n) {
  var i = qo(e, t, r),
    a;
  switch (((n = wn(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = IS(i, o))) && (n.precision = a),
        Vh(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = kS(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = MS(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return hc(n);
}
function $t(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return Uo(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return Yh(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        c,
        l,
        f = 10;
      for (
        u < o && ((l = o), (o = u), (u = l), (l = i), (i = a), (a = l));
        f-- > 0;
      ) {
        if (((l = zo(o, u, r)), l === c)) return ((n[i] = o), (n[a] = u), t(n));
        if (l > 0) ((o = Math.floor(o / l) * l), (u = Math.ceil(u / l) * l));
        else if (l < 0)
          ((o = Math.ceil(o * l) / l), (u = Math.floor(u * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function Di() {
  var e = fc();
  return (
    (e.copy = function () {
      return Zn(e, Di());
    }),
    Xe.apply(e, arguments),
    $t(e)
  );
}
function Zh(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Ci)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Zh(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ci) : [0, 1]),
    $t(r)
  );
}
function Jh(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function gs(e) {
  return Math.log(e);
}
function bs(e) {
  return Math.exp(e);
}
function CS(e) {
  return -Math.log(-e);
}
function NS(e) {
  return -Math.exp(-e);
}
function DS(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function RS(e) {
  return e === 10 ? DS : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function BS(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function xs(e) {
  return (t, r) => -e(-t, r);
}
function dc(e) {
  const t = e(gs, bs),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = BS(n)),
      (a = RS(n)),
      r()[0] < 0 ? ((i = xs(i)), (a = xs(a)), e(CS, NS)) : e(gs, bs),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const c = r();
      let l = c[0],
        f = c[c.length - 1];
      const s = f < l;
      s && ([l, f] = [f, l]);
      let p = i(l),
        h = i(f),
        v,
        d;
      const y = u == null ? 10 : +u;
      let b = [];
      if (!(n % 1) && h - p < y) {
        if (((p = Math.floor(p)), (h = Math.ceil(h)), l > 0)) {
          for (; p <= h; ++p)
            for (v = 1; v < n; ++v)
              if (((d = p < 0 ? v / a(-p) : v * a(p)), !(d < l))) {
                if (d > f) break;
                b.push(d);
              }
        } else
          for (; p <= h; ++p)
            for (v = n - 1; v >= 1; --v)
              if (((d = p > 0 ? v / a(-p) : v * a(p)), !(d < l))) {
                if (d > f) break;
                b.push(d);
              }
        b.length * 2 < y && (b = Uo(l, f, y));
      } else b = Uo(p, h, Math.min(h - p, y)).map(a);
      return s ? b.reverse() : b;
    }),
    (t.tickFormat = (u, c) => {
      if (
        (u == null && (u = 10),
        c == null && (c = n === 10 ? "s" : ","),
        typeof c != "function" &&
          (!(n % 1) && (c = wn(c)).precision == null && (c.trim = !0),
          (c = hc(c))),
        u === 1 / 0)
      )
        return c;
      const l = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let s = f / a(Math.round(i(f)));
        return (s * n < n - 0.5 && (s *= n), s <= l ? c(f) : "");
      };
    }),
    (t.nice = () =>
      r(
        Jh(r(), {
          floor: (u) => a(Math.floor(i(u))),
          ceil: (u) => a(Math.ceil(i(u))),
        }),
      )),
    t
  );
}
function Qh() {
  const e = dc(wa()).domain([1, 10]);
  return (
    (e.copy = () => Zn(e, Qh()).base(e.base())),
    Xe.apply(e, arguments),
    e
  );
}
function ws(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Os(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function vc(e) {
  var t = 1,
    r = e(ws(t), Os(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(ws((t = +n)), Os(t)) : t;
    }),
    $t(r)
  );
}
function ed() {
  var e = vc(wa());
  return (
    (e.copy = function () {
      return Zn(e, ed()).constant(e.constant());
    }),
    Xe.apply(e, arguments)
  );
}
function As(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function LS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function FS(e) {
  return e < 0 ? -e * e : e * e;
}
function yc(e) {
  var t = e(Ce, Ce),
    r = 1;
  function n() {
    return r === 1 ? e(Ce, Ce) : r === 0.5 ? e(LS, FS) : e(As(r), As(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    $t(t)
  );
}
function mc() {
  var e = yc(wa());
  return (
    (e.copy = function () {
      return Zn(e, mc()).exponent(e.exponent());
    }),
    Xe.apply(e, arguments),
    e
  );
}
function WS() {
  return mc.apply(null, arguments).exponent(0.5);
}
function Ps(e) {
  return Math.sign(e) * e * e;
}
function US(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function td() {
  var e = fc(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = US(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(Ps(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, Ci)).map(Ps)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return td(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Xe.apply(i, arguments),
    $t(i)
  );
}
function rd() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = HP(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[Vn(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0
        ? [NaN, NaN]
        : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return (e.sort(Pt), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return rd().domain(e).range(t).unknown(n);
    }),
    Xe.apply(a, arguments)
  );
}
function nd() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(c) {
    return c != null && c <= c ? i[Vn(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; )
      n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (c) {
      return arguments.length
        ? (([e, t] = c), (e = +e), (t = +t), u())
        : [e, t];
    }),
    (o.range = function (c) {
      return arguments.length
        ? ((r = (i = Array.from(c)).length - 1), u())
        : i.slice();
    }),
    (o.invertExtent = function (c) {
      var l = i.indexOf(c);
      return l < 0
        ? [NaN, NaN]
        : l < 1
          ? [e, n[0]]
          : l >= r
            ? [n[r - 1], t]
            : [n[l - 1], n[l]];
    }),
    (o.unknown = function (c) {
      return (arguments.length && (a = c), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return nd().domain([e, t]).range(i).unknown(a);
    }),
    Xe.apply($t(o), arguments)
  );
}
function id() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[Vn(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return id().domain(e).range(t).unknown(r);
    }),
    Xe.apply(i, arguments)
  );
}
const no = new Date(),
  io = new Date();
function Pe(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)),
      a
    )),
    (i.range = (a, o, u) => {
      const c = [];
      if (
        ((a = i.ceil(a)),
        (u = u == null ? 1 : Math.floor(u)),
        !(a < o) || !(u > 0))
      )
        return c;
      let l;
      do (c.push((l = new Date(+a))), t(a, u), e(a));
      while (l < a && a < o);
      return c;
    }),
    (i.filter = (a) =>
      Pe(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        no.setTime(+a),
        io.setTime(+o),
        e(no),
        e(io),
        Math.floor(r(no, io))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const Ri = Pe(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Ri.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Pe(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Ri
);
Ri.range;
const st = 1e3,
  Ge = st * 60,
  ft = Ge * 60,
  dt = ft * 24,
  gc = dt * 7,
  Ss = dt * 30,
  ao = dt * 365,
  Ut = Pe(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * st);
    },
    (e, t) => (t - e) / st,
    (e) => e.getUTCSeconds(),
  );
Ut.range;
const bc = Pe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * st);
  },
  (e, t) => {
    e.setTime(+e + t * Ge);
  },
  (e, t) => (t - e) / Ge,
  (e) => e.getMinutes(),
);
bc.range;
const xc = Pe(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Ge);
  },
  (e, t) => (t - e) / Ge,
  (e) => e.getUTCMinutes(),
);
xc.range;
const wc = Pe(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * st - e.getMinutes() * Ge,
    );
  },
  (e, t) => {
    e.setTime(+e + t * ft);
  },
  (e, t) => (t - e) / ft,
  (e) => e.getHours(),
);
wc.range;
const Oc = Pe(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * ft);
  },
  (e, t) => (t - e) / ft,
  (e) => e.getUTCHours(),
);
Oc.range;
const Jn = Pe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ge) / dt,
  (e) => e.getDate() - 1,
);
Jn.range;
const Oa = Pe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dt,
  (e) => e.getUTCDate() - 1,
);
Oa.range;
const ad = Pe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dt,
  (e) => Math.floor(e / dt),
);
ad.range;
function Zt(e) {
  return Pe(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ge) / gc,
  );
}
const Aa = Zt(0),
  Bi = Zt(1),
  zS = Zt(2),
  qS = Zt(3),
  gr = Zt(4),
  KS = Zt(5),
  GS = Zt(6);
Aa.range;
Bi.range;
zS.range;
qS.range;
gr.range;
KS.range;
GS.range;
function Jt(e) {
  return Pe(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / gc,
  );
}
const Pa = Jt(0),
  Li = Jt(1),
  HS = Jt(2),
  XS = Jt(3),
  br = Jt(4),
  VS = Jt(5),
  YS = Jt(6);
Pa.range;
Li.range;
HS.range;
XS.range;
br.range;
VS.range;
YS.range;
const Ac = Pe(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Ac.range;
const Pc = Pe(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Pc.range;
const vt = Pe(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
vt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Pe(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
vt.range;
const yt = Pe(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
yt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Pe(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
yt.range;
function od(e, t, r, n, i, a) {
  const o = [
    [Ut, 1, st],
    [Ut, 5, 5 * st],
    [Ut, 15, 15 * st],
    [Ut, 30, 30 * st],
    [a, 1, Ge],
    [a, 5, 5 * Ge],
    [a, 15, 15 * Ge],
    [a, 30, 30 * Ge],
    [i, 1, ft],
    [i, 3, 3 * ft],
    [i, 6, 6 * ft],
    [i, 12, 12 * ft],
    [n, 1, dt],
    [n, 2, 2 * dt],
    [r, 1, gc],
    [t, 1, Ss],
    [t, 3, 3 * Ss],
    [e, 1, ao],
  ];
  function u(l, f, s) {
    const p = f < l;
    p && ([l, f] = [f, l]);
    const h = s && typeof s.range == "function" ? s : c(l, f, s),
      v = h ? h.range(l, +f + 1) : [];
    return p ? v.reverse() : v;
  }
  function c(l, f, s) {
    const p = Math.abs(f - l) / s,
      h = oc(([, , y]) => y).right(o, p);
    if (h === o.length) return e.every(qo(l / ao, f / ao, s));
    if (h === 0) return Ri.every(Math.max(qo(l, f, s), 1));
    const [v, d] = o[p / o[h - 1][2] < o[h][2] / p ? h - 1 : h];
    return v.every(d);
  }
  return [u, c];
}
const [ZS, JS] = od(yt, Pc, Pa, ad, Oc, xc),
  [QS, e_] = od(vt, Ac, Aa, Jn, wc, bc);
function oo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function uo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Vr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function t_(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    c = e.shortMonths,
    l = Yr(i),
    f = Zr(i),
    s = Yr(a),
    p = Zr(a),
    h = Yr(o),
    v = Zr(o),
    d = Yr(u),
    y = Zr(u),
    b = Yr(c),
    w = Zr(c),
    x = {
      a: D,
      A: L,
      b: F,
      B: q,
      c: null,
      d: Ms,
      e: Ms,
      f: P_,
      g: C_,
      G: D_,
      H: w_,
      I: O_,
      j: A_,
      L: ud,
      m: S_,
      M: __,
      p: H,
      q: z,
      Q: Cs,
      s: Ns,
      S: $_,
      u: T_,
      U: E_,
      V: j_,
      w: M_,
      W: I_,
      x: null,
      X: null,
      y: k_,
      Y: N_,
      Z: R_,
      "%": ks,
    },
    O = {
      a: X,
      A: le,
      b: ve,
      B: Be,
      c: null,
      d: Is,
      e: Is,
      f: W_,
      g: Z_,
      G: Q_,
      H: B_,
      I: L_,
      j: F_,
      L: ld,
      m: U_,
      M: z_,
      p: Mt,
      q: Ne,
      Q: Cs,
      s: Ns,
      S: q_,
      u: K_,
      U: G_,
      V: H_,
      w: X_,
      W: V_,
      x: null,
      X: null,
      y: Y_,
      Y: J_,
      Z: e$,
      "%": ks,
    },
    m = {
      a: E,
      A: $,
      b: T,
      B: M,
      c: I,
      d: Es,
      e: Es,
      f: m_,
      g: Ts,
      G: $s,
      H: js,
      I: js,
      j: h_,
      L: y_,
      m: p_,
      M: d_,
      p: _,
      q: f_,
      Q: b_,
      s: x_,
      S: v_,
      u: o_,
      U: u_,
      V: c_,
      w: a_,
      W: l_,
      x: k,
      X: N,
      y: Ts,
      Y: $s,
      Z: s_,
      "%": g_,
    };
  ((x.x = g(r, x)),
    (x.X = g(n, x)),
    (x.c = g(t, x)),
    (O.x = g(r, O)),
    (O.X = g(n, O)),
    (O.c = g(t, O)));
  function g(W, Y) {
    return function (Z) {
      var C = [],
        he = -1,
        ee = 0,
        ge = W.length,
        be,
        De,
        bt;
      for (Z instanceof Date || (Z = new Date(+Z)); ++he < ge; )
        W.charCodeAt(he) === 37 &&
          (C.push(W.slice(ee, he)),
          (De = _s[(be = W.charAt(++he))]) != null
            ? (be = W.charAt(++he))
            : (De = be === "e" ? " " : "0"),
          (bt = Y[be]) && (be = bt(Z, De)),
          C.push(be),
          (ee = he + 1));
      return (C.push(W.slice(ee, he)), C.join(""));
    };
  }
  function A(W, Y) {
    return function (Z) {
      var C = Vr(1900, void 0, 1),
        he = S(C, W, (Z += ""), 0),
        ee,
        ge;
      if (he != Z.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (
        (Y && !("Z" in C) && (C.Z = 0),
        "p" in C && (C.H = (C.H % 12) + C.p * 12),
        C.m === void 0 && (C.m = "q" in C ? C.q : 0),
        "V" in C)
      ) {
        if (C.V < 1 || C.V > 53) return null;
        ("w" in C || (C.w = 1),
          "Z" in C
            ? ((ee = uo(Vr(C.y, 0, 1))),
              (ge = ee.getUTCDay()),
              (ee = ge > 4 || ge === 0 ? Li.ceil(ee) : Li(ee)),
              (ee = Oa.offset(ee, (C.V - 1) * 7)),
              (C.y = ee.getUTCFullYear()),
              (C.m = ee.getUTCMonth()),
              (C.d = ee.getUTCDate() + ((C.w + 6) % 7)))
            : ((ee = oo(Vr(C.y, 0, 1))),
              (ge = ee.getDay()),
              (ee = ge > 4 || ge === 0 ? Bi.ceil(ee) : Bi(ee)),
              (ee = Jn.offset(ee, (C.V - 1) * 7)),
              (C.y = ee.getFullYear()),
              (C.m = ee.getMonth()),
              (C.d = ee.getDate() + ((C.w + 6) % 7))));
      } else
        ("W" in C || "U" in C) &&
          ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0),
          (ge =
            "Z" in C
              ? uo(Vr(C.y, 0, 1)).getUTCDay()
              : oo(Vr(C.y, 0, 1)).getDay()),
          (C.m = 0),
          (C.d =
            "W" in C
              ? ((C.w + 6) % 7) + C.W * 7 - ((ge + 5) % 7)
              : C.w + C.U * 7 - ((ge + 6) % 7)));
      return "Z" in C
        ? ((C.H += (C.Z / 100) | 0), (C.M += C.Z % 100), uo(C))
        : oo(C);
    };
  }
  function S(W, Y, Z, C) {
    for (var he = 0, ee = Y.length, ge = Z.length, be, De; he < ee; ) {
      if (C >= ge) return -1;
      if (((be = Y.charCodeAt(he++)), be === 37)) {
        if (
          ((be = Y.charAt(he++)),
          (De = m[be in _s ? Y.charAt(he++) : be]),
          !De || (C = De(W, Z, C)) < 0)
        )
          return -1;
      } else if (be != Z.charCodeAt(C++)) return -1;
    }
    return C;
  }
  function _(W, Y, Z) {
    var C = l.exec(Y.slice(Z));
    return C ? ((W.p = f.get(C[0].toLowerCase())), Z + C[0].length) : -1;
  }
  function E(W, Y, Z) {
    var C = h.exec(Y.slice(Z));
    return C ? ((W.w = v.get(C[0].toLowerCase())), Z + C[0].length) : -1;
  }
  function $(W, Y, Z) {
    var C = s.exec(Y.slice(Z));
    return C ? ((W.w = p.get(C[0].toLowerCase())), Z + C[0].length) : -1;
  }
  function T(W, Y, Z) {
    var C = b.exec(Y.slice(Z));
    return C ? ((W.m = w.get(C[0].toLowerCase())), Z + C[0].length) : -1;
  }
  function M(W, Y, Z) {
    var C = d.exec(Y.slice(Z));
    return C ? ((W.m = y.get(C[0].toLowerCase())), Z + C[0].length) : -1;
  }
  function I(W, Y, Z) {
    return S(W, t, Y, Z);
  }
  function k(W, Y, Z) {
    return S(W, r, Y, Z);
  }
  function N(W, Y, Z) {
    return S(W, n, Y, Z);
  }
  function D(W) {
    return o[W.getDay()];
  }
  function L(W) {
    return a[W.getDay()];
  }
  function F(W) {
    return c[W.getMonth()];
  }
  function q(W) {
    return u[W.getMonth()];
  }
  function H(W) {
    return i[+(W.getHours() >= 12)];
  }
  function z(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function X(W) {
    return o[W.getUTCDay()];
  }
  function le(W) {
    return a[W.getUTCDay()];
  }
  function ve(W) {
    return c[W.getUTCMonth()];
  }
  function Be(W) {
    return u[W.getUTCMonth()];
  }
  function Mt(W) {
    return i[+(W.getUTCHours() >= 12)];
  }
  function Ne(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return {
    format: function (W) {
      var Y = g((W += ""), x);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    parse: function (W) {
      var Y = A((W += ""), !1);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    utcFormat: function (W) {
      var Y = g((W += ""), O);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    utcParse: function (W) {
      var Y = A((W += ""), !0);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
  };
}
var _s = { "-": "", _: " ", 0: "0" },
  $e = /^\s*\d+/,
  r_ = /^%/,
  n_ = /[\\^$*+?|[\]().{}]/g;
function te(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function i_(e) {
  return e.replace(n_, "\\$&");
}
function Yr(e) {
  return new RegExp("^(?:" + e.map(i_).join("|") + ")", "i");
}
function Zr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function a_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function o_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function u_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function c_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function l_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function $s(e, t, r) {
  var n = $e.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function Ts(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function s_(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function f_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function p_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function Es(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function h_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function js(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function d_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function v_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function y_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function m_(e, t, r) {
  var n = $e.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function g_(e, t, r) {
  var n = r_.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function b_(e, t, r) {
  var n = $e.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function x_(e, t, r) {
  var n = $e.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function Ms(e, t) {
  return te(e.getDate(), t, 2);
}
function w_(e, t) {
  return te(e.getHours(), t, 2);
}
function O_(e, t) {
  return te(e.getHours() % 12 || 12, t, 2);
}
function A_(e, t) {
  return te(1 + Jn.count(vt(e), e), t, 3);
}
function ud(e, t) {
  return te(e.getMilliseconds(), t, 3);
}
function P_(e, t) {
  return ud(e, t) + "000";
}
function S_(e, t) {
  return te(e.getMonth() + 1, t, 2);
}
function __(e, t) {
  return te(e.getMinutes(), t, 2);
}
function $_(e, t) {
  return te(e.getSeconds(), t, 2);
}
function T_(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function E_(e, t) {
  return te(Aa.count(vt(e) - 1, e), t, 2);
}
function cd(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? gr(e) : gr.ceil(e);
}
function j_(e, t) {
  return ((e = cd(e)), te(gr.count(vt(e), e) + (vt(e).getDay() === 4), t, 2));
}
function M_(e) {
  return e.getDay();
}
function I_(e, t) {
  return te(Bi.count(vt(e) - 1, e), t, 2);
}
function k_(e, t) {
  return te(e.getFullYear() % 100, t, 2);
}
function C_(e, t) {
  return ((e = cd(e)), te(e.getFullYear() % 100, t, 2));
}
function N_(e, t) {
  return te(e.getFullYear() % 1e4, t, 4);
}
function D_(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? gr(e) : gr.ceil(e)),
    te(e.getFullYear() % 1e4, t, 4)
  );
}
function R_(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    te((t / 60) | 0, "0", 2) +
    te(t % 60, "0", 2)
  );
}
function Is(e, t) {
  return te(e.getUTCDate(), t, 2);
}
function B_(e, t) {
  return te(e.getUTCHours(), t, 2);
}
function L_(e, t) {
  return te(e.getUTCHours() % 12 || 12, t, 2);
}
function F_(e, t) {
  return te(1 + Oa.count(yt(e), e), t, 3);
}
function ld(e, t) {
  return te(e.getUTCMilliseconds(), t, 3);
}
function W_(e, t) {
  return ld(e, t) + "000";
}
function U_(e, t) {
  return te(e.getUTCMonth() + 1, t, 2);
}
function z_(e, t) {
  return te(e.getUTCMinutes(), t, 2);
}
function q_(e, t) {
  return te(e.getUTCSeconds(), t, 2);
}
function K_(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function G_(e, t) {
  return te(Pa.count(yt(e) - 1, e), t, 2);
}
function sd(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? br(e) : br.ceil(e);
}
function H_(e, t) {
  return (
    (e = sd(e)),
    te(br.count(yt(e), e) + (yt(e).getUTCDay() === 4), t, 2)
  );
}
function X_(e) {
  return e.getUTCDay();
}
function V_(e, t) {
  return te(Li.count(yt(e) - 1, e), t, 2);
}
function Y_(e, t) {
  return te(e.getUTCFullYear() % 100, t, 2);
}
function Z_(e, t) {
  return ((e = sd(e)), te(e.getUTCFullYear() % 100, t, 2));
}
function J_(e, t) {
  return te(e.getUTCFullYear() % 1e4, t, 4);
}
function Q_(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? br(e) : br.ceil(e)),
    te(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function e$() {
  return "+0000";
}
function ks() {
  return "%";
}
function Cs(e) {
  return +e;
}
function Ns(e) {
  return Math.floor(+e / 1e3);
}
var rr, fd, pd;
t$({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function t$(e) {
  return (
    (rr = t_(e)),
    (fd = rr.format),
    rr.parse,
    (pd = rr.utcFormat),
    rr.utcParse,
    rr
  );
}
function r$(e) {
  return new Date(e);
}
function n$(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Sc(e, t, r, n, i, a, o, u, c, l) {
  var f = fc(),
    s = f.invert,
    p = f.domain,
    h = l(".%L"),
    v = l(":%S"),
    d = l("%I:%M"),
    y = l("%I %p"),
    b = l("%a %d"),
    w = l("%b %d"),
    x = l("%B"),
    O = l("%Y");
  function m(g) {
    return (
      c(g) < g
        ? h
        : u(g) < g
          ? v
          : o(g) < g
            ? d
            : a(g) < g
              ? y
              : n(g) < g
                ? i(g) < g
                  ? b
                  : w
                : r(g) < g
                  ? x
                  : O
    )(g);
  }
  return (
    (f.invert = function (g) {
      return new Date(s(g));
    }),
    (f.domain = function (g) {
      return arguments.length ? p(Array.from(g, n$)) : p().map(r$);
    }),
    (f.ticks = function (g) {
      var A = p();
      return e(A[0], A[A.length - 1], g ?? 10);
    }),
    (f.tickFormat = function (g, A) {
      return A == null ? m : l(A);
    }),
    (f.nice = function (g) {
      var A = p();
      return (
        (!g || typeof g.range != "function") &&
          (g = t(A[0], A[A.length - 1], g ?? 10)),
        g ? p(Jh(A, g)) : f
      );
    }),
    (f.copy = function () {
      return Zn(f, Sc(e, t, r, n, i, a, o, u, c, l));
    }),
    f
  );
}
function i$() {
  return Xe.apply(
    Sc(QS, e_, vt, Ac, Aa, Jn, wc, bc, Ut, fd).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function a$() {
  return Xe.apply(
    Sc(ZS, JS, yt, Pc, Pa, Oa, Oc, xc, Ut, pd).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Sa() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Ce,
    u = !1,
    c;
  function l(s) {
    return s == null || isNaN((s = +s))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((s = (a(s) - r) * i), u ? Math.max(0, Math.min(1, s)) : s),
        );
  }
  ((l.domain = function (s) {
    return arguments.length
      ? (([e, t] = s),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        l)
      : [e, t];
  }),
    (l.clamp = function (s) {
      return arguments.length ? ((u = !!s), l) : u;
    }),
    (l.interpolator = function (s) {
      return arguments.length ? ((o = s), l) : o;
    }));
  function f(s) {
    return function (p) {
      var h, v;
      return arguments.length ? (([h, v] = p), (o = s(h, v)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = f(Ur)),
    (l.rangeRound = f(sc)),
    (l.unknown = function (s) {
      return arguments.length ? ((c = s), l) : c;
    }),
    function (s) {
      return (
        (a = s),
        (r = s(e)),
        (n = s(t)),
        (i = r === n ? 0 : 1 / (n - r)),
        l
      );
    }
  );
}
function Tt(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function hd() {
  var e = $t(Sa()(Ce));
  return (
    (e.copy = function () {
      return Tt(e, hd());
    }),
    gt.apply(e, arguments)
  );
}
function dd() {
  var e = dc(Sa()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Tt(e, dd()).base(e.base());
    }),
    gt.apply(e, arguments)
  );
}
function vd() {
  var e = vc(Sa());
  return (
    (e.copy = function () {
      return Tt(e, vd()).constant(e.constant());
    }),
    gt.apply(e, arguments)
  );
}
function _c() {
  var e = yc(Sa());
  return (
    (e.copy = function () {
      return Tt(e, _c()).exponent(e.exponent());
    }),
    gt.apply(e, arguments)
  );
}
function o$() {
  return _c.apply(null, arguments).exponent(0.5);
}
function yd() {
  var e = [],
    t = Ce;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Vn(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(Pt), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => GP(e, a / n));
    }),
    (r.copy = function () {
      return yd(t).domain(e);
    }),
    gt.apply(r, arguments)
  );
}
function _a() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    c,
    l = Ce,
    f,
    s = !1,
    p;
  function h(d) {
    return isNaN((d = +d))
      ? p
      : ((d = 0.5 + ((d = +f(d)) - a) * (n * d < n * a ? u : c)),
        l(s ? Math.max(0, Math.min(1, d)) : d));
  }
  ((h.domain = function (d) {
    return arguments.length
      ? (([e, t, r] = d),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        h)
      : [e, t, r];
  }),
    (h.clamp = function (d) {
      return arguments.length ? ((s = !!d), h) : s;
    }),
    (h.interpolator = function (d) {
      return arguments.length ? ((l = d), h) : l;
    }));
  function v(d) {
    return function (y) {
      var b, w, x;
      return arguments.length
        ? (([b, w, x] = y), (l = gS(d, [b, w, x])), h)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (h.range = v(Ur)),
    (h.rangeRound = v(sc)),
    (h.unknown = function (d) {
      return arguments.length ? ((p = d), h) : p;
    }),
    function (d) {
      return (
        (f = d),
        (i = d(e)),
        (a = d(t)),
        (o = d(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        h
      );
    }
  );
}
function md() {
  var e = $t(_a()(Ce));
  return (
    (e.copy = function () {
      return Tt(e, md());
    }),
    gt.apply(e, arguments)
  );
}
function gd() {
  var e = dc(_a()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Tt(e, gd()).base(e.base());
    }),
    gt.apply(e, arguments)
  );
}
function bd() {
  var e = vc(_a());
  return (
    (e.copy = function () {
      return Tt(e, bd()).constant(e.constant());
    }),
    gt.apply(e, arguments)
  );
}
function $c() {
  var e = yc(_a());
  return (
    (e.copy = function () {
      return Tt(e, $c()).exponent(e.exponent());
    }),
    gt.apply(e, arguments)
  );
}
function u$() {
  return $c.apply(null, arguments).exponent(0.5);
}
const Ds = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: mn,
      scaleDiverging: md,
      scaleDivergingLog: gd,
      scaleDivergingPow: $c,
      scaleDivergingSqrt: u$,
      scaleDivergingSymlog: bd,
      scaleIdentity: Zh,
      scaleImplicit: Ko,
      scaleLinear: Di,
      scaleLog: Qh,
      scaleOrdinal: uc,
      scalePoint: on,
      scalePow: mc,
      scaleQuantile: rd,
      scaleQuantize: nd,
      scaleRadial: td,
      scaleSequential: hd,
      scaleSequentialLog: dd,
      scaleSequentialPow: _c,
      scaleSequentialQuantile: yd,
      scaleSequentialSqrt: o$,
      scaleSequentialSymlog: vd,
      scaleSqrt: WS,
      scaleSymlog: ed,
      scaleThreshold: id,
      scaleTime: i$,
      scaleUtc: a$,
      tickFormat: Yh,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var c$ = Cp;
function l$(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (u === void 0 ? o === o && !c$(o) : r(o, u)))
      var u = o,
        c = a;
  }
  return c;
}
var $a = l$;
function s$(e, t) {
  return e > t;
}
var xd = s$,
  f$ = $a,
  p$ = xd,
  h$ = Fr;
function d$(e) {
  return e && e.length ? f$(e, h$, p$) : void 0;
}
var v$ = d$;
const Ta = Ae(v$);
function y$(e, t) {
  return e < t;
}
var wd = y$,
  m$ = $a,
  g$ = wd,
  b$ = Fr;
function x$(e) {
  return e && e.length ? m$(e, b$, g$) : void 0;
}
var w$ = x$;
const Ea = Ae(w$);
var O$ = Np,
  A$ = ot,
  P$ = Mh,
  S$ = at;
function _$(e, t) {
  var r = S$(e) ? O$ : P$;
  return r(e, A$(t));
}
var $$ = _$,
  T$ = Eh,
  E$ = $$;
function j$(e, t) {
  return T$(E$(e, t), 1);
}
var M$ = j$;
const I$ = Ae(M$);
var k$ = tc;
function C$(e, t) {
  return k$(e, t);
}
var N$ = C$;
const ja = Ae(N$);
var zr = 1e9,
  D$ = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Ec,
  pe = !0,
  He = "[DecimalError] ",
  Kt = He + "Invalid argument: ",
  Tc = He + "Exponent out of range: ",
  qr = Math.floor,
  Lt = Math.pow,
  R$ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  We,
  Se = 1e7,
  fe = 7,
  Od = 9007199254740991,
  Fi = qr(Od / fe),
  U = {};
U.absoluteValue = U.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
U.comparedTo = U.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
U.decimalPlaces = U.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * fe;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function (e) {
  return ht(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return ae(ht(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function (e) {
  return !this.cmp(e);
};
U.exponent = function () {
  return me(this);
};
U.greaterThan = U.gt = function (e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function (e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function () {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function () {
  return this.s < 0;
};
U.isPositive = U.ispos = function () {
  return this.s > 0;
};
U.isZero = function () {
  return this.s === 0;
};
U.lessThan = U.lt = function (e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function (e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(We))) throw Error(He + "NaN");
  if (r.s < 1) throw Error(He + (r.s ? "NaN" : "-Infinity"));
  return r.eq(We)
    ? new n(0)
    : ((pe = !1), (t = ht(On(r, a), On(e, a), a)), (pe = !0), ae(t, i));
};
U.minus = U.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? Sd(t, e) : Ad(t, ((e.s = -e.s), e))
  );
};
U.modulo = U.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(He + "NaN");
  return r.s
    ? ((pe = !1), (t = ht(r, e, 0, 1).times(e)), (pe = !0), r.minus(t))
    : ae(new n(r), i);
};
U.naturalExponential = U.exp = function () {
  return Pd(this);
};
U.naturalLogarithm = U.ln = function () {
  return On(this);
};
U.negated = U.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
U.plus = U.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? Ad(t, e) : Sd(t, ((e.s = -e.s), e))
  );
};
U.precision = U.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Kt + e);
  if (
    ((t = me(i) + 1), (n = i.d.length - 1), (r = n * fe + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new c(0);
    throw Error(He + "NaN");
  }
  for (
    e = me(u),
      pe = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = et(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = qr((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new c(t)))
        : (n = new c(i.toString())),
      r = c.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(ht(u, a, o + 2)).times(0.5)),
      et(a.d).slice(0, o) === (t = et(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((ae(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((pe = !0), ae(n, r));
};
U.times = U.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    c,
    l,
    f = this,
    s = f.constructor,
    p = f.d,
    h = (e = new s(e)).d;
  if (!f.s || !e.s) return new s(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      c = p.length,
      l = h.length,
      c < l && ((a = p), (p = h), (h = a), (o = c), (c = l), (l = o)),
      a = [],
      o = c + l,
      n = o;
    n--;
  )
    a.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      ((u = a[i] + h[n] * p[i - n - 1] + t),
        (a[i--] = (u % Se) | 0),
        (t = (u / Se) | 0));
    a[i] = ((a[i] + t) % Se) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (
    t ? ++r : a.shift(),
    (e.d = a),
    (e.e = r),
    pe ? ae(e, s.precision) : e
  );
};
U.toDecimalPlaces = U.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (it(e, 0, zr),
        t === void 0 ? (t = n.rounding) : it(t, 0, 8),
        ae(r, e + me(r) + 1, t))
  );
};
U.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Xt(n, !0))
      : (it(e, 0, zr),
        t === void 0 ? (t = i.rounding) : it(t, 0, 8),
        (n = ae(new i(n), e + 1, t)),
        (r = Xt(n, !0, e + 1))),
    r
  );
};
U.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Xt(i)
    : (it(e, 0, zr),
      t === void 0 ? (t = a.rounding) : it(t, 0, 8),
      (n = ae(new a(i), e + me(i) + 1, t)),
      (r = Xt(n.abs(), !1, e + me(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function () {
  var e = this,
    t = e.constructor;
  return ae(new t(e), me(e) + 1, t.rounding);
};
U.toNumber = function () {
  return +this;
};
U.toPower = U.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor,
    l = 12,
    f = +(e = new c(e));
  if (!e.s) return new c(We);
  if (((u = new c(u)), !u.s)) {
    if (e.s < 1) throw Error(He + "Infinity");
    return u;
  }
  if (u.eq(We)) return u;
  if (((n = c.precision), e.eq(We))) return ae(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= Od) {
      for (
        i = new c(We), t = Math.ceil(n / fe + 4), pe = !1;
        r % 2 && ((i = i.times(u)), Bs(i.d, t)), (r = qr(r / 2)), r !== 0;
      )
        ((u = u.times(u)), Bs(u.d, t));
      return ((pe = !0), e.s < 0 ? new c(We).div(i) : ae(i, n));
    }
  } else if (a < 0) throw Error(He + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (pe = !1),
    (i = e.times(On(u, n + l))),
    (pe = !0),
    (i = Pd(i)),
    (i.s = a),
    i
  );
};
U.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = me(i)), (n = Xt(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (it(e, 1, zr),
        t === void 0 ? (t = a.rounding) : it(t, 0, 8),
        (i = ae(new a(i), e, t)),
        (r = me(i)),
        (n = Xt(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
U.toSignificantDigits = U.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (it(e, 1, zr), t === void 0 ? (t = n.rounding) : it(t, 0, 8)),
    ae(new n(r), e, t)
  );
};
U.toString =
  U.valueOf =
  U.val =
  U.toJSON =
  U[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = me(e),
        r = e.constructor;
      return Xt(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function Ad(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    l,
    f = e.constructor,
    s = f.precision;
  if (!e.s || !t.s) return (t.s || (t = new f(e)), pe ? ae(t, s) : t);
  if (
    ((c = e.d),
    (l = t.d),
    (o = e.e),
    (i = t.e),
    (c = c.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = c), (a = -a), (u = l.length))
        : ((n = l), (i = o), (u = c.length)),
        o = Math.ceil(s / fe),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (
    u = c.length,
      a = l.length,
      u - a < 0 && ((a = u), (n = l), (l = c), (c = n)),
      r = 0;
    a;
  )
    ((r = ((c[--a] = c[a] + l[a] + r) / Se) | 0), (c[a] %= Se));
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
  return ((t.d = c), (t.e = i), pe ? ae(t, s) : t);
}
function it(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Kt + e);
}
function et(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = fe - n.length), r && (a += wt(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = fe - n.length), r && (a += wt(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var ht = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      ((a = n[u] * i + o), (n[u] = (a % Se) | 0), (o = (a / Se) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o) c = a > o ? 1 : -1;
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Se + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      c,
      l,
      f,
      s,
      p,
      h,
      v,
      d,
      y,
      b,
      w,
      x,
      O,
      m,
      g,
      A,
      S,
      _ = n.constructor,
      E = n.s == i.s ? 1 : -1,
      $ = n.d,
      T = i.d;
    if (!n.s) return new _(n);
    if (!i.s) throw Error(He + "Division by zero");
    for (
      c = n.e - i.e,
        A = T.length,
        m = $.length,
        h = new _(E),
        v = h.d = [],
        l = 0;
      T[l] == ($[l] || 0);
    )
      ++l;
    if (
      (T[l] > ($[l] || 0) && --c,
      a == null
        ? (w = a = _.precision)
        : o
          ? (w = a + (me(n) - me(i)) + 1)
          : (w = a),
      w < 0)
    )
      return new _(0);
    if (((w = (w / fe + 2) | 0), (l = 0), A == 1))
      for (f = 0, T = T[0], w++; (l < m || f) && w--; l++)
        ((x = f * Se + ($[l] || 0)), (v[l] = (x / T) | 0), (f = (x % T) | 0));
    else {
      for (
        f = (Se / (T[0] + 1)) | 0,
          f > 1 &&
            ((T = e(T, f)), ($ = e($, f)), (A = T.length), (m = $.length)),
          O = A,
          d = $.slice(0, A),
          y = d.length;
        y < A;
      )
        d[y++] = 0;
      ((S = T.slice()), S.unshift(0), (g = T[0]), T[1] >= Se / 2 && ++g);
      do
        ((f = 0),
          (u = t(T, d, A, y)),
          u < 0
            ? ((b = d[0]),
              A != y && (b = b * Se + (d[1] || 0)),
              (f = (b / g) | 0),
              f > 1
                ? (f >= Se && (f = Se - 1),
                  (s = e(T, f)),
                  (p = s.length),
                  (y = d.length),
                  (u = t(s, d, p, y)),
                  u == 1 && (f--, r(s, A < p ? S : T, p)))
                : (f == 0 && (u = f = 1), (s = T.slice())),
              (p = s.length),
              p < y && s.unshift(0),
              r(d, s, y),
              u == -1 &&
                ((y = d.length),
                (u = t(T, d, A, y)),
                u < 1 && (f++, r(d, A < y ? S : T, y))),
              (y = d.length))
            : u === 0 && (f++, (d = [0])),
          (v[l++] = f),
          u && d[0] ? (d[y++] = $[O] || 0) : ((d = [$[O]]), (y = 1)));
      while ((O++ < m || d[0] !== void 0) && w--);
    }
    return (v[0] || v.shift(), (h.e = c), ae(h, o ? a + me(h) + 1 : a));
  };
})();
function Pd(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c = 0,
    l = 0,
    f = e.constructor,
    s = f.precision;
  if (me(e) > 16) throw Error(Tc + me(e));
  if (!e.s) return new f(We);
  for (pe = !1, u = s, o = new f(0.03125); e.abs().gte(0.1); )
    ((e = e.times(o)), (l += 5));
  for (
    n = ((Math.log(Lt(2, l)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(We),
      f.precision = u;
    ;
  ) {
    if (
      ((i = ae(i.times(e), u)),
      (r = r.times(++c)),
      (o = a.plus(ht(i, r, u))),
      et(o.d).slice(0, u) === et(a.d).slice(0, u))
    ) {
      for (; l--; ) a = ae(a.times(a), u);
      return ((f.precision = s), t == null ? ((pe = !0), ae(a, s)) : a);
    }
    a = o;
  }
}
function me(e) {
  for (var t = e.e * fe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function co(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      (pe = !0),
      r && (e.precision = r),
      Error(He + "LN10 precision limit exceeded")
    );
  return ae(new e(e.LN10), t);
}
function wt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function On(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    l,
    f,
    s = 1,
    p = 10,
    h = e,
    v = h.d,
    d = h.constructor,
    y = d.precision;
  if (h.s < 1) throw Error(He + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(We)) return new d(0);
  if ((t == null ? ((pe = !1), (l = y)) : (l = t), h.eq(10)))
    return (t == null && (pe = !0), co(d, l));
  if (
    ((l += p),
    (d.precision = l),
    (r = et(v)),
    (n = r.charAt(0)),
    (a = me(h)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((h = h.times(e)), (r = et(h.d)), (n = r.charAt(0)), s++);
    ((a = me(h)),
      n > 1 ? ((h = new d("0." + r)), a++) : (h = new d(n + "." + r.slice(1))));
  } else
    return (
      (c = co(d, l + 2, y).times(a + "")),
      (h = On(new d(n + "." + r.slice(1)), l - p).plus(c)),
      (d.precision = y),
      t == null ? ((pe = !0), ae(h, y)) : h
    );
  for (
    u = o = h = ht(h.minus(We), h.plus(We), l), f = ae(h.times(h), l), i = 3;
    ;
  ) {
    if (
      ((o = ae(o.times(f), l)),
      (c = u.plus(ht(o, new d(i), l))),
      et(c.d).slice(0, l) === et(u.d).slice(0, l))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(co(d, l + 2, y).times(a + ""))),
        (u = ht(u, new d(s), l)),
        (d.precision = y),
        t == null ? ((pe = !0), ae(u, y)) : u
      );
    ((u = c), (i += 2));
  }
}
function Rs(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = qr(r / fe)),
      (e.d = []),
      (n = (r + 1) % fe),
      r < 0 && (n += fe),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= fe; n < i; )
        e.d.push(+t.slice(n, (n += fe)));
      ((t = t.slice(n)), (n = fe - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), pe && (e.e > Fi || e.e < -Fi))) throw Error(Tc + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function ae(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    c,
    l,
    f,
    s = e.d;
  for (o = 1, a = s[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += fe), (i = t), (l = s[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / fe)), (a = s.length), f >= a)) return e;
    for (l = a = s[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= fe), (i = n - fe + o));
  }
  if (
    (r !== void 0 &&
      ((a = Lt(10, o - i - 1)),
      (u = ((l / a) % 10) | 0),
      (c = t < 0 || s[f + 1] !== void 0 || l % a),
      (c =
        r < 4
          ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                c ||
                (r == 6 &&
                  ((n > 0 ? (i > 0 ? l / Lt(10, o - i) : 0) : s[f - 1]) % 10) &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !s[0])
  )
    return (
      c
        ? ((a = me(e)),
          (s.length = 1),
          (t = t - a - 1),
          (s[0] = Lt(10, (fe - (t % fe)) % fe)),
          (e.e = qr(-t / fe) || 0))
        : ((s.length = 1), (s[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((s.length = f), (a = 1), f--)
      : ((s.length = f + 1),
        (a = Lt(10, fe - n)),
        (s[f] = i > 0 ? (((l / Lt(10, o - i)) % Lt(10, i)) | 0) * a : 0)),
    c)
  )
    for (;;)
      if (f == 0) {
        (s[0] += a) == Se && ((s[0] = 1), ++e.e);
        break;
      } else {
        if (((s[f] += a), s[f] != Se)) break;
        ((s[f--] = 0), (a = 1));
      }
  for (n = s.length; s[--n] === 0; ) s.pop();
  if (pe && (e.e > Fi || e.e < -Fi)) throw Error(Tc + me(e));
  return e;
}
function Sd(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    l,
    f,
    s,
    p = e.constructor,
    h = p.precision;
  if (!e.s || !t.s)
    return (t.s ? (t.s = -t.s) : (t = new p(e)), pe ? ae(t, h) : t);
  if (
    ((c = e.d),
    (s = t.d),
    (n = t.e),
    (l = e.e),
    (c = c.slice()),
    (o = l - n),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((r = c), (o = -o), (u = s.length))
          : ((r = s), (n = l), (u = c.length)),
        i = Math.max(Math.ceil(h / fe), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = s.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (c[i] != s[i]) {
        f = c[i] < s[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((r = c), (c = s), (s = r), (t.s = -t.s)),
      u = c.length,
      i = s.length - u;
    i > 0;
    --i
  )
    c[u++] = 0;
  for (i = s.length; i > o; ) {
    if (c[--i] < s[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = Se - 1;
      (--c[a], (c[i] += Se));
    }
    c[i] -= s[i];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? ((t.d = c), (t.e = n), pe ? ae(t, h) : t) : new p(0);
}
function Xt(e, t, r) {
  var n,
    i = me(e),
    a = et(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + wt(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + wt(-i - 1) + a), r && (n = r - o) > 0 && (a += wt(n)))
        : i >= o
          ? ((a += wt(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + wt(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += wt(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Bs(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function _d(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Kt + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return Rs(o, a.toString());
    } else if (typeof a != "string") throw Error(Kt + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      R$.test(a))
    )
      Rs(o, a);
    else throw Error(Kt + a);
  }
  if (
    ((i.prototype = U),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = _d),
    (i.config = i.set = B$),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;
    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function B$(e) {
  if (!e || typeof e != "object") throw Error(He + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      zr,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (qr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Kt + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Kt + r + ": " + n);
  return this;
}
var Ec = _d(D$);
We = new Ec(1);
const ie = Ec;
function L$(e) {
  return z$(e) || U$(e) || W$(e) || F$();
}
function F$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W$(e, t) {
  if (e) {
    if (typeof e == "string") return Vo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vo(e, t);
  }
}
function U$(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function z$(e) {
  if (Array.isArray(e)) return Vo(e);
}
function Vo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var q$ = function (t) {
    return t;
  },
  $d = {},
  Td = function (t) {
    return t === $d;
  },
  Ls = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Td(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  K$ = function e(t, r) {
    return t === 1
      ? r
      : Ls(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== $d;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Ls(function () {
                  for (
                    var u = arguments.length, c = new Array(u), l = 0;
                    l < u;
                    l++
                  )
                    c[l] = arguments[l];
                  var f = i.map(function (s) {
                    return Td(s) ? c.shift() : s;
                  });
                  return r.apply(void 0, L$(f).concat(c));
                }),
              );
        });
  },
  Ma = function (t) {
    return K$(t.length, t);
  },
  Yo = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  G$ = Ma(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  H$ = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return q$;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, c) {
          return c(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  Zo = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  Ed = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, c) {
            return u === r[c];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function X$(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new ie(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function V$(e, t, r) {
  for (var n = new ie(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var Y$ = Ma(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  Z$ = Ma(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), (r - e) / n);
  }),
  J$ = Ma(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
  });
const Ia = {
  rangeStep: V$,
  getDigitCount: X$,
  interpolateNumber: Y$,
  uninterpolateNumber: Z$,
  uninterpolateTruncation: J$,
};
function Jo(e) {
  return tT(e) || eT(e) || jd(e) || Q$();
}
function Q$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eT(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function tT(e) {
  if (Array.isArray(e)) return Qo(e);
}
function An(e, t) {
  return iT(e) || nT(e, t) || jd(e, t) || rT();
}
function rT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jd(e, t) {
  if (e) {
    if (typeof e == "string") return Qo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qo(e, t);
  }
}
function Qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nT(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (c) {
      ((i = !0), (a = c));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function iT(e) {
  if (Array.isArray(e)) return e;
}
function Md(e) {
  var t = An(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function Id(e, t, r) {
  if (e.lte(0)) return new ie(0);
  var n = Ia.getDigitCount(e.toNumber()),
    i = new ie(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new ie(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    c = u.mul(i);
  return t ? c : new ie(Math.ceil(c));
}
function aT(e, t, r) {
  var n = 1,
    i = new ie(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new ie(10).pow(Ia.getDigitCount(e) - 1)),
        (i = new ie(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new ie(Math.floor(e)));
  } else
    e === 0
      ? (i = new ie(Math.floor((t - 1) / 2)))
      : r || (i = new ie(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = H$(
      G$(function (c) {
        return i.add(new ie(c - o).mul(n)).toNumber();
      }),
      Yo,
    );
  return u(0, t);
}
function kd(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new ie(0), tickMin: new ie(0), tickMax: new ie(0) };
  var a = Id(new ie(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new ie(0))
    : ((o = new ie(e).add(t).div(2)), (o = o.sub(new ie(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    c = Math.ceil(new ie(t).sub(o).div(a).toNumber()),
    l = u + c + 1;
  return l > r
    ? kd(e, t, r, n, i + 1)
    : (l < r && ((c = t > 0 ? c + (r - l) : c), (u = t > 0 ? u : u + (r - l))),
      {
        step: a,
        tickMin: o.sub(new ie(u).mul(a)),
        tickMax: o.add(new ie(c).mul(a)),
      });
}
function oT(e) {
  var t = An(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = Md([r, n]),
    c = An(u, 2),
    l = c[0],
    f = c[1];
  if (l === -1 / 0 || f === 1 / 0) {
    var s =
      f === 1 / 0
        ? [l].concat(
            Jo(
              Yo(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Jo(
              Yo(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? Zo(s) : s;
  }
  if (l === f) return aT(l, i, a);
  var p = kd(l, f, o, a),
    h = p.step,
    v = p.tickMin,
    d = p.tickMax,
    y = Ia.rangeStep(v, d.add(new ie(0.1).mul(h)), h);
  return r > n ? Zo(y) : y;
}
function uT(e, t) {
  var r = An(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Md([n, i]),
    u = An(o, 2),
    c = u[0],
    l = u[1];
  if (c === -1 / 0 || l === 1 / 0) return [n, i];
  if (c === l) return [c];
  var f = Math.max(t, 2),
    s = Id(new ie(l).sub(c).div(f - 1), a, 0),
    p = [].concat(
      Jo(Ia.rangeStep(new ie(c), new ie(l).sub(new ie(0.99).mul(s)), s)),
      [l],
    );
  return n > i ? Zo(p) : p;
}
var cT = Ed(oT),
  lT = Ed(uT),
  sT = "Invariant failed";
function Vt(e, t) {
  throw new Error(sT);
}
var fT = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function xr(e) {
  "@babel/helpers - typeof";
  return (
    (xr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xr(e)
  );
}
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function pT(e, t) {
  return yT(e) || vT(e, t) || dT(e, t) || hT();
}
function hT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dT(e, t) {
  if (e) {
    if (typeof e == "string") return Fs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fs(e, t);
  }
}
function Fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vT(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function yT(e) {
  if (Array.isArray(e)) return e;
}
function mT(e, t) {
  if (e == null) return {};
  var r = gT(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function gT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function bT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dd(n.key), n));
  }
}
function wT(e, t, r) {
  return (
    t && xT(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function OT(e, t, r) {
  return (
    (t = Ui(t)),
    AT(
      e,
      Cd() ? Reflect.construct(t, r || [], Ui(e).constructor) : t.apply(e, r),
    )
  );
}
function AT(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return PT(e);
}
function PT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Cd() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Cd = function () {
    return !!e;
  })();
}
function Ui(e) {
  return (
    (Ui = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ui(e)
  );
}
function ST(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && eu(e, t));
}
function eu(e, t) {
  return (
    (eu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    eu(e, t)
  );
}
function Nd(e, t, r) {
  return (
    (t = Dd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dd(e) {
  var t = _T(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function _T(e, t) {
  if (xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ka = (function (e) {
  function t() {
    return (bT(this, t), OT(this, t, arguments));
  }
  return (
    ST(t, e),
    wT(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            c = n.data,
            l = n.dataPointFormatter,
            f = n.xAxis,
            s = n.yAxis,
            p = mT(n, fT),
            h = G(p, !1);
          this.props.direction === "x" && f.type !== "number" && Vt();
          var v = c.map(function (d) {
            var y = l(d, u),
              b = y.x,
              w = y.y,
              x = y.value,
              O = y.errorVal;
            if (!O) return null;
            var m = [],
              g,
              A;
            if (Array.isArray(O)) {
              var S = pT(O, 2);
              ((g = S[0]), (A = S[1]));
            } else g = A = O;
            if (a === "vertical") {
              var _ = f.scale,
                E = w + i,
                $ = E + o,
                T = E - o,
                M = _(x - g),
                I = _(x + A);
              (m.push({ x1: I, y1: $, x2: I, y2: T }),
                m.push({ x1: M, y1: E, x2: I, y2: E }),
                m.push({ x1: M, y1: $, x2: M, y2: T }));
            } else if (a === "horizontal") {
              var k = s.scale,
                N = b + i,
                D = N - o,
                L = N + o,
                F = k(x - g),
                q = k(x + A);
              (m.push({ x1: D, y1: q, x2: L, y2: q }),
                m.push({ x1: N, y1: F, x2: N, y2: q }),
                m.push({ x1: D, y1: F, x2: L, y2: F }));
            }
            return P.createElement(
              ne,
              Wi(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    m.map(function (H) {
                      return ""
                        .concat(H.x1, "-")
                        .concat(H.x2, "-")
                        .concat(H.y1, "-")
                        .concat(H.y2);
                    }),
                  ),
                },
                h,
              ),
              m.map(function (H) {
                return P.createElement(
                  "line",
                  Wi({}, H, {
                    key: "line-"
                      .concat(H.x1, "-")
                      .concat(H.x2, "-")
                      .concat(H.y1, "-")
                      .concat(H.y2),
                  }),
                );
              }),
            );
          });
          return P.createElement(ne, { className: "recharts-errorBars" }, v);
        },
      },
    ])
  );
})(P.Component);
Nd(ka, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
Nd(ka, "displayName", "ErrorBar");
function Pn(e) {
  "@babel/helpers - typeof";
  return (
    (Pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pn(e)
  );
}
function Ws(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ws(Object(r), !0).forEach(function (n) {
          $T(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ws(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function $T(e, t, r) {
  return (
    (t = TT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TT(e) {
  var t = ET(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function ET(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rd = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Fe(r, lr);
  if (!o) return null;
  var u = lr.defaultProps,
    c = u !== void 0 ? Ct(Ct({}, u), o.props) : {},
    l;
  return (
    o.props && o.props.payload
      ? (l = o.props && o.props.payload)
      : a === "children"
        ? (l = (n || []).reduce(function (f, s) {
            var p = s.item,
              h = s.props,
              v = h.sectors || h.data || [];
            return f.concat(
              v.map(function (d) {
                return {
                  type: o.props.iconType || p.props.legendType,
                  value: d.name,
                  color: d.fill,
                  payload: d,
                };
              }),
            );
          }, []))
        : (l = (n || []).map(function (f) {
            var s = f.item,
              p = s.type.defaultProps,
              h = p !== void 0 ? Ct(Ct({}, p), s.props) : {},
              v = h.dataKey,
              d = h.name,
              y = h.legendType,
              b = h.hide;
            return {
              inactive: b,
              dataKey: v,
              type: c.iconType || y || "square",
              color: jc(s),
              value: d || v,
              payload: h,
            };
          })),
    Ct(Ct(Ct({}, c), lr.getWithHeight(o, i)), {}, { payload: l, item: o })
  );
};
function Sn(e) {
  "@babel/helpers - typeof";
  return (
    (Sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sn(e)
  );
}
function Us(e) {
  return kT(e) || IT(e) || MT(e) || jT();
}
function jT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MT(e, t) {
  if (e) {
    if (typeof e == "string") return tu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return tu(e, t);
  }
}
function IT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function kT(e) {
  if (Array.isArray(e)) return tu(e);
}
function tu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zs(Object(r), !0).forEach(function (n) {
          fr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function fr(e, t, r) {
  return (
    (t = CT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CT(e) {
  var t = NT(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function NT(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ee(e, t, r) {
  return Q(e) || Q(t) ? r : Oe(t) ? tt(e, t, r) : V(t) ? t(e) : r;
}
function un(e, t, r, n) {
  var i = I$(e, function (u) {
    return Ee(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return R(u) || parseFloat(u);
    });
    return a.length ? [Ea(a), Ta(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !Q(u);
      })
    : i;
  return o.map(function (u) {
    return Oe(u) || u instanceof Date ? u : "";
  });
}
var DT = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var c = a.range, l = 0; l < u; l++) {
        var f = l > 0 ? i[l - 1].coordinate : i[u - 1].coordinate,
          s = i[l].coordinate,
          p = l >= u - 1 ? i[0].coordinate : i[l + 1].coordinate,
          h = void 0;
        if (Ie(s - f) !== Ie(p - s)) {
          var v = [];
          if (Ie(p - s) === Ie(c[1] - c[0])) {
            h = p;
            var d = s + c[1] - c[0];
            ((v[0] = Math.min(d, (d + f) / 2)),
              (v[1] = Math.max(d, (d + f) / 2)));
          } else {
            h = f;
            var y = p + c[1] - c[0];
            ((v[0] = Math.min(s, (y + s) / 2)),
              (v[1] = Math.max(s, (y + s) / 2)));
          }
          var b = [Math.min(s, (h + s) / 2), Math.max(s, (h + s) / 2)];
          if ((t > b[0] && t <= b[1]) || (t >= v[0] && t <= v[1])) {
            o = i[l].index;
            break;
          }
        } else {
          var w = Math.min(f, p),
            x = Math.max(f, p);
          if (t > (w + s) / 2 && t <= (x + s) / 2) {
            o = i[l].index;
            break;
          }
        }
      }
    else
      for (var O = 0; O < u; O++)
        if (
          (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O > 0 &&
            O < u - 1 &&
            t > (n[O].coordinate + n[O - 1].coordinate) / 2 &&
            t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O === u - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2)
        ) {
          o = n[O].index;
          break;
        }
    return o;
  },
  jc = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      c;
    switch (i) {
      case "Line":
        c = o;
        break;
      case "Area":
      case "Radar":
        c = o && o !== "none" ? o : u;
        break;
      default:
        c = u;
        break;
    }
    return c;
  },
  RT = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), c = 0, l = u.length; c < l; c++)
      for (
        var f = a[u[c]].stackGroups, s = Object.keys(f), p = 0, h = s.length;
        p < h;
        p++
      ) {
        var v = f[s[p]],
          d = v.items,
          y = v.cateAxisId,
          b = d.filter(function (A) {
            return nn(A.type).indexOf("Bar") >= 0;
          });
        if (b && b.length) {
          var w = b[0].type.defaultProps,
            x = w !== void 0 ? de(de({}, w), b[0].props) : b[0].props,
            O = x.barSize,
            m = x[y];
          o[m] || (o[m] = []);
          var g = Q(O) ? r : O;
          o[m].push({
            item: b[0],
            stackList: b.slice(1),
            barSize: Q(g) ? void 0 : ke(g, n, 0),
          });
        }
      }
    return o;
  },
  BT = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      c = o.length;
    if (c < 1) return null;
    var l = ke(r, i, 0, !0),
      f,
      s = [];
    if (o[0].barSize === +o[0].barSize) {
      var p = !1,
        h = i / c,
        v = o.reduce(function (O, m) {
          return O + m.barSize || 0;
        }, 0);
      ((v += (c - 1) * l),
        v >= i && ((v -= (c - 1) * l), (l = 0)),
        v >= i && h > 0 && ((p = !0), (h *= 0.9), (v = c * h)));
      var d = ((i - v) / 2) >> 0,
        y = { offset: d - l, size: 0 };
      f = o.reduce(function (O, m) {
        var g = {
            item: m.item,
            position: {
              offset: y.offset + y.size + l,
              size: p ? h : m.barSize,
            },
          },
          A = [].concat(Us(O), [g]);
        return (
          (y = A[A.length - 1].position),
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              A.push({ item: S, position: y });
            }),
          A
        );
      }, s);
    } else {
      var b = ke(n, i, 0, !0);
      i - 2 * b - (c - 1) * l <= 0 && (l = 0);
      var w = (i - 2 * b - (c - 1) * l) / c;
      w > 1 && (w >>= 0);
      var x = u === +u ? Math.min(w, u) : w;
      f = o.reduce(function (O, m, g) {
        var A = [].concat(Us(O), [
          {
            item: m.item,
            position: { offset: b + (w + l) * g + (w - x) / 2, size: x },
          },
        ]);
        return (
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              A.push({ item: S, position: A[A.length - 1].position });
            }),
          A
        );
      }, s);
    }
    return f;
  },
  LT = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      c = o - (u.left || 0) - (u.right || 0),
      l = Rd({ children: a, legendWidth: c });
    if (l) {
      var f = i || {},
        s = f.width,
        p = f.height,
        h = l.align,
        v = l.verticalAlign,
        d = l.layout;
      if (
        (d === "vertical" || (d === "horizontal" && v === "middle")) &&
        h !== "center" &&
        R(t[h])
      )
        return de(de({}, t), {}, fr({}, h, t[h] + (s || 0)));
      if (
        (d === "horizontal" || (d === "vertical" && h === "center")) &&
        v !== "middle" &&
        R(t[v])
      )
        return de(de({}, t), {}, fr({}, v, t[v] + (p || 0)));
    }
    return t;
  },
  FT = function (t, r, n) {
    return Q(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  Bd = function (t, r, n, i, a) {
    var o = r.props.children,
      u = Je(o, ka).filter(function (l) {
        return FT(i, a, l.props.direction);
      });
    if (u && u.length) {
      var c = u.map(function (l) {
        return l.props.dataKey;
      });
      return t.reduce(
        function (l, f) {
          var s = Ee(f, n);
          if (Q(s)) return l;
          var p = Array.isArray(s) ? [Ea(s), Ta(s)] : [s, s],
            h = c.reduce(
              function (v, d) {
                var y = Ee(f, d, 0),
                  b = p[0] - Math.abs(Array.isArray(y) ? y[0] : y),
                  w = p[1] + Math.abs(Array.isArray(y) ? y[1] : y);
                return [Math.min(b, v[0]), Math.max(w, v[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(h[0], l[0]), Math.max(h[1], l[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  WT = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return Bd(t, u, n, a, i);
      })
      .filter(function (u) {
        return !Q(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, c) {
            return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  Ld = function (t, r, n, i, a) {
    var o = r.map(function (c) {
      var l = c.props.dataKey;
      return (n === "number" && l && Bd(t, c, l, i)) || un(t, l, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (c, l) {
          return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (c, l) {
      for (var f = 0, s = l.length; f < s; f++)
        u[l[f]] || ((u[l[f]] = !0), c.push(l[f]));
      return c;
    }, []);
  },
  Fd = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  Wd = function (t, r, n, i) {
    if (i)
      return t.map(function (c) {
        return c.coordinate;
      });
    var a,
      o,
      u = t.map(function (c) {
        return (
          c.coordinate === r && (a = !0),
          c.coordinate === n && (o = !0),
          c.coordinate
        );
      });
    return (a || u.push(r), o || u.push(n), u);
  },
  pt = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
    if (
      ((l =
        t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2
          ? Ie(u[0] - u[1]) * 2 * l
          : l),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (s) {
        var p = a ? a.indexOf(s) : s;
        return { coordinate: i(p) + l, value: s, offset: l };
      });
      return f.filter(function (s) {
        return !qu(s.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (s, p) {
          return { coordinate: i(s) + l, value: s, index: p, offset: l };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (s) {
            return { coordinate: i(s) + l, value: s, offset: l };
          })
        : i.domain().map(function (s, p) {
            return {
              coordinate: i(s) + l,
              value: a ? a[s] : s,
              index: p,
              offset: l,
            };
          });
  },
  lo = new WeakMap(),
  ui = function (t, r) {
    if (typeof r != "function") return t;
    lo.has(t) || lo.set(t, new WeakMap());
    var n = lo.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (t.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  Ud = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: mn(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
          ? { scale: Di(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: on(), realScaleType: "point" }
            : a === "category"
              ? { scale: mn(), realScaleType: "band" }
              : { scale: Di(), realScaleType: "linear" };
    if (py(i)) {
      var c = "scale".concat(da(i));
      return { scale: (Ds[c] || on)(), realScaleType: Ds[c] ? c : "point" };
    }
    return V(i) ? { scale: i } : { scale: on(), realScaleType: "point" };
  },
  qs = 1e-4,
  zd = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - qs,
        o = Math.max(i[0], i[1]) + qs,
        u = t(r[0]),
        c = t(r[n - 1]);
      (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  UT = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  zT = function (t, r) {
    if (!r || r.length !== 2 || !R(r[0]) || !R(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!R(t[0]) || t[0] < n) && (a[0] = n),
      (!R(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  qT = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var c = qu(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          c >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + c), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + c), (o = t[u][n][1]));
        }
  },
  KT = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = qu(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  GT = {
    sign: qT,
    expand: Hm,
    none: pr,
    silhouette: Xm,
    wiggle: Vm,
    positive: KT,
  },
  HT = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = GT[n],
      o = Gm()
        .keys(i)
        .value(function (u, c) {
          return +Ee(u, c, 0);
        })
        .order(_o)
        .offset(a);
    return o(t);
  },
  XT = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      c = {},
      l = u.reduce(function (s, p) {
        var h,
          v =
            (h = p.type) !== null && h !== void 0 && h.defaultProps
              ? de(de({}, p.type.defaultProps), p.props)
              : p.props,
          d = v.stackId,
          y = v.hide;
        if (y) return s;
        var b = v[n],
          w = s[b] || { hasStack: !1, stackGroups: {} };
        if (Oe(d)) {
          var x = w.stackGroups[d] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          (x.items.push(p), (w.hasStack = !0), (w.stackGroups[d] = x));
        } else
          w.stackGroups[Hn("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: i,
            items: [p],
          };
        return de(de({}, s), {}, fr({}, b, w));
      }, c),
      f = {};
    return Object.keys(l).reduce(function (s, p) {
      var h = l[p];
      if (h.hasStack) {
        var v = {};
        h.stackGroups = Object.keys(h.stackGroups).reduce(function (d, y) {
          var b = h.stackGroups[y];
          return de(
            de({}, d),
            {},
            fr({}, y, {
              numericAxisId: n,
              cateAxisId: i,
              items: b.items,
              stackedData: HT(t, b.items, a),
            }),
          );
        }, v);
      }
      return de(de({}, s), {}, fr({}, p, h));
    }, f);
  },
  qd = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      c = n || r.scale;
    if (c !== "auto" && c !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var l = t.domain();
      if (!l.length) return null;
      var f = cT(l, a, u);
      return (t.domain([Ea(f), Ta(f)]), { niceTicks: f });
    }
    if (a && i === "number") {
      var s = t.domain(),
        p = lT(s, a, u);
      return { niceTicks: p };
    }
    return null;
  };
function hR(e) {
  var t = e.axis,
    r = e.ticks,
    n = e.bandSize,
    i = e.entry,
    a = e.index,
    o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Q(i[t.dataKey])) {
      var u = vi(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = Ee(i, Q(o) ? t.dataKey : o);
  return Q(c) ? null : t.scale(c);
}
var Ks = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var c = Ee(o, r.dataKey, r.domain[u]);
    return Q(c) ? null : r.scale(c) - a / 2 + i;
  },
  VT = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  YT = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (Oe(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  ZT = function (t) {
    return t.reduce(
      function (r, n) {
        return [Ea(n.concat([r[0]]).filter(R)), Ta(n.concat([r[1]]).filter(R))];
      },
      [1 / 0, -1 / 0],
    );
  },
  Kd = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            c = u.reduce(
              function (l, f) {
                var s = ZT(f.slice(r, n + 1));
                return [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  Gs = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Hs = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  ru = function (t, r, n) {
    if (V(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (R(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (Gs.test(t[0])) {
      var a = +Gs.exec(t[0])[1];
      i[0] = r[0] - a;
    } else V(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (R(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (Hs.test(t[1])) {
      var o = +Hs.exec(t[1])[1];
      i[1] = r[1] + o;
    } else V(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  zi = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = nc(r, function (s) {
            return s.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          c = a.length;
        u < c;
        u++
      ) {
        var l = a[u],
          f = a[u - 1];
        o = Math.min((l.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  Xs = function (t, r, n) {
    return !t || !t.length || ja(t, tt(n, "type.defaultProps.domain")) ? r : t;
  },
  Gd = function (t, r) {
    var n = t.type.defaultProps
        ? de(de({}, t.type.defaultProps), t.props)
        : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      c = n.tooltipType,
      l = n.chartType,
      f = n.hide;
    return de(
      de({}, G(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: jc(t),
        value: Ee(r, i),
        type: c,
        payload: r,
        chartType: l,
        hide: f,
      },
    );
  };
function _n(e) {
  "@babel/helpers - typeof";
  return (
    (_n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _n(e)
  );
}
function Vs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vs(Object(r), !0).forEach(function (n) {
          Hd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Hd(e, t, r) {
  return (
    (t = JT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JT(e) {
  var t = QT(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function QT(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eE(e, t) {
  return iE(e) || nE(e, t) || rE(e, t) || tE();
}
function tE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rE(e, t) {
  if (e) {
    if (typeof e == "string") return Ys(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ys(e, t);
  }
}
function Ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nE(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function iE(e) {
  if (Array.isArray(e)) return e;
}
var qi = Math.PI / 180,
  aE = function (t) {
    return (t * 180) / Math.PI;
  },
  ce = function (t, r, n, i) {
    return { x: t + Math.cos(-qi * i) * n, y: r + Math.sin(-qi * i) * n };
  },
  Xd = function (t, r) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(t - (n.left || 0) - (n.right || 0)),
        Math.abs(r - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  oE = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      c = t.startAngle,
      l = t.endAngle,
      f = ke(t.cx, o, o / 2),
      s = ke(t.cy, u, u / 2),
      p = Xd(o, u, n),
      h = ke(t.innerRadius, p, 0),
      v = ke(t.outerRadius, p, p * 0.8),
      d = Object.keys(r);
    return d.reduce(function (y, b) {
      var w = r[b],
        x = w.domain,
        O = w.reversed,
        m;
      if (Q(w.range))
        (i === "angleAxis" ? (m = [c, l]) : i === "radiusAxis" && (m = [h, v]),
          O && (m = [m[1], m[0]]));
      else {
        m = w.range;
        var g = m,
          A = eE(g, 2);
        ((c = A[0]), (l = A[1]));
      }
      var S = Ud(w, a),
        _ = S.realScaleType,
        E = S.scale;
      (E.domain(x).range(m), zd(E));
      var $ = qd(E, lt(lt({}, w), {}, { realScaleType: _ })),
        T = lt(
          lt(lt({}, w), $),
          {},
          {
            range: m,
            radius: v,
            realScaleType: _,
            scale: E,
            cx: f,
            cy: s,
            innerRadius: h,
            outerRadius: v,
            startAngle: c,
            endAngle: l,
          },
        );
      return lt(lt({}, y), {}, Hd({}, b, T));
    }, {});
  },
  uE = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  cE = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = uE({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var c = (n - a) / u,
      l = Math.acos(c);
    return (
      i > o && (l = 2 * Math.PI - l),
      { radius: u, angle: aE(l), angleInRadian: l }
    );
  },
  lE = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  sE = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  Zs = function (t, r) {
    var n = t.x,
      i = t.y,
      a = cE({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      c = r.innerRadius,
      l = r.outerRadius;
    if (o < c || o > l) return !1;
    if (o === 0) return !0;
    var f = lE(r),
      s = f.startAngle,
      p = f.endAngle,
      h = u,
      v;
    if (s <= p) {
      for (; h > p; ) h -= 360;
      for (; h < s; ) h += 360;
      v = h >= s && h <= p;
    } else {
      for (; h > s; ) h -= 360;
      for (; h < p; ) h += 360;
      v = h >= p && h <= s;
    }
    return v ? lt(lt({}, r), {}, { radius: o, angle: sE(h, r) }) : null;
  },
  Vd = function (t) {
    return !B.isValidElement(t) && !V(t) && typeof t != "boolean"
      ? t.className
      : "";
  };
function $n(e) {
  "@babel/helpers - typeof";
  return (
    ($n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $n(e)
  );
}
var fE = ["offset"];
function pE(e) {
  return yE(e) || vE(e) || dE(e) || hE();
}
function hE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dE(e, t) {
  if (e) {
    if (typeof e == "string") return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nu(e, t);
  }
}
function vE(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function yE(e) {
  if (Array.isArray(e)) return nu(e);
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mE(e, t) {
  if (e == null) return {};
  var r = gE(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function gE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Js(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Js(Object(r), !0).forEach(function (n) {
          bE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Js(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bE(e, t, r) {
  return (
    (t = xE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xE(e) {
  var t = wE(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function wE(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tn() {
  return (
    (Tn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Tn.apply(this, arguments)
  );
}
var OE = function (t) {
    var r = t.value,
      n = t.formatter,
      i = Q(t.children) ? r : t.children;
    return V(n) ? n(i) : i;
  },
  AE = function (t, r) {
    var n = Ie(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  PE = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      c = a,
      l = c.cx,
      f = c.cy,
      s = c.innerRadius,
      p = c.outerRadius,
      h = c.startAngle,
      v = c.endAngle,
      d = c.clockWise,
      y = (s + p) / 2,
      b = AE(h, v),
      w = b >= 0 ? 1 : -1,
      x,
      O;
    (i === "insideStart"
      ? ((x = h + w * o), (O = d))
      : i === "insideEnd"
        ? ((x = v - w * o), (O = !d))
        : i === "end" && ((x = v + w * o), (O = d)),
      (O = b <= 0 ? O : !O));
    var m = ce(l, f, y, x),
      g = ce(l, f, y, x + (O ? 1 : -1) * 359),
      A = "M"
        .concat(m.x, ",")
        .concat(
          m.y,
          `
    A`,
        )
        .concat(y, ",")
        .concat(y, ",0,1,")
        .concat(
          O ? 0 : 1,
          `,
    `,
        )
        .concat(g.x, ",")
        .concat(g.y),
      S = Q(t.id) ? Hn("recharts-radial-line-") : t.id;
    return P.createElement(
      "text",
      Tn({}, n, {
        dominantBaseline: "central",
        className: J("recharts-radial-bar-label", u),
      }),
      P.createElement("defs", null, P.createElement("path", { id: S, d: A })),
      P.createElement("textPath", { xlinkHref: "#".concat(S) }, r),
    );
  },
  SE = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      c = a.innerRadius,
      l = a.outerRadius,
      f = a.startAngle,
      s = a.endAngle,
      p = (f + s) / 2;
    if (i === "outside") {
      var h = ce(o, u, l + n, p),
        v = h.x,
        d = h.y;
      return {
        x: v,
        y: d,
        textAnchor: v >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var y = (c + l) / 2,
      b = ce(o, u, y, p),
      w = b.x,
      x = b.y;
    return { x: w, y: x, textAnchor: "middle", verticalAnchor: "middle" };
  },
  _E = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      c = o.y,
      l = o.width,
      f = o.height,
      s = f >= 0 ? 1 : -1,
      p = s * i,
      h = s > 0 ? "end" : "start",
      v = s > 0 ? "start" : "end",
      d = l >= 0 ? 1 : -1,
      y = d * i,
      b = d > 0 ? "end" : "start",
      w = d > 0 ? "start" : "end";
    if (a === "top") {
      var x = {
        x: u + l / 2,
        y: c - s * i,
        textAnchor: "middle",
        verticalAnchor: h,
      };
      return we(we({}, x), n ? { height: Math.max(c - n.y, 0), width: l } : {});
    }
    if (a === "bottom") {
      var O = {
        x: u + l / 2,
        y: c + f + p,
        textAnchor: "middle",
        verticalAnchor: v,
      };
      return we(
        we({}, O),
        n ? { height: Math.max(n.y + n.height - (c + f), 0), width: l } : {},
      );
    }
    if (a === "left") {
      var m = {
        x: u - y,
        y: c + f / 2,
        textAnchor: b,
        verticalAnchor: "middle",
      };
      return we(
        we({}, m),
        n ? { width: Math.max(m.x - n.x, 0), height: f } : {},
      );
    }
    if (a === "right") {
      var g = {
        x: u + l + y,
        y: c + f / 2,
        textAnchor: w,
        verticalAnchor: "middle",
      };
      return we(
        we({}, g),
        n ? { width: Math.max(n.x + n.width - g.x, 0), height: f } : {},
      );
    }
    var A = n ? { width: l, height: f } : {};
    return a === "insideLeft"
      ? we(
          { x: u + y, y: c + f / 2, textAnchor: w, verticalAnchor: "middle" },
          A,
        )
      : a === "insideRight"
        ? we(
            {
              x: u + l - y,
              y: c + f / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            },
            A,
          )
        : a === "insideTop"
          ? we(
              {
                x: u + l / 2,
                y: c + p,
                textAnchor: "middle",
                verticalAnchor: v,
              },
              A,
            )
          : a === "insideBottom"
            ? we(
                {
                  x: u + l / 2,
                  y: c + f - p,
                  textAnchor: "middle",
                  verticalAnchor: h,
                },
                A,
              )
            : a === "insideTopLeft"
              ? we({ x: u + y, y: c + p, textAnchor: w, verticalAnchor: v }, A)
              : a === "insideTopRight"
                ? we(
                    {
                      x: u + l - y,
                      y: c + p,
                      textAnchor: b,
                      verticalAnchor: v,
                    },
                    A,
                  )
                : a === "insideBottomLeft"
                  ? we(
                      {
                        x: u + y,
                        y: c + f - p,
                        textAnchor: w,
                        verticalAnchor: h,
                      },
                      A,
                    )
                  : a === "insideBottomRight"
                    ? we(
                        {
                          x: u + l - y,
                          y: c + f - p,
                          textAnchor: b,
                          verticalAnchor: h,
                        },
                        A,
                      )
                    : Ku(a) && (R(a.x) || Gc(a.x)) && (R(a.y) || Gc(a.y))
                      ? we(
                          {
                            x: u + ke(a.x, l),
                            y: c + ke(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          A,
                        )
                      : we(
                          {
                            x: u + l / 2,
                            y: c + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          A,
                        );
  },
  $E = function (t) {
    return "cx" in t && R(t.cx);
  };
function _e(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = mE(e, fE),
    i = we({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    c = i.children,
    l = i.content,
    f = i.className,
    s = f === void 0 ? "" : f,
    p = i.textBreakAll;
  if (!a || (Q(u) && Q(c) && !B.isValidElement(l) && !V(l))) return null;
  if (B.isValidElement(l)) return B.cloneElement(l, i);
  var h;
  if (V(l)) {
    if (((h = B.createElement(l, i)), B.isValidElement(h))) return h;
  } else h = OE(i);
  var v = $E(a),
    d = G(i, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return PE(i, h, d);
  var y = v ? SE(i) : _E(i);
  return P.createElement(
    Ht,
    Tn({ className: J("recharts-label", s) }, d, y, { breakAll: p }),
    h,
  );
}
_e.displayName = "Label";
var Yd = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      c = t.radius,
      l = t.innerRadius,
      f = t.outerRadius,
      s = t.x,
      p = t.y,
      h = t.top,
      v = t.left,
      d = t.width,
      y = t.height,
      b = t.clockWise,
      w = t.labelViewBox;
    if (w) return w;
    if (R(d) && R(y)) {
      if (R(s) && R(p)) return { x: s, y: p, width: d, height: y };
      if (R(h) && R(v)) return { x: h, y: v, width: d, height: y };
    }
    return R(s) && R(p)
      ? { x: s, y: p, width: 0, height: 0 }
      : R(r) && R(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: l || 0,
            outerRadius: f || c || u || 0,
            clockWise: b,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  TE = function (t, r) {
    return t
      ? t === !0
        ? P.createElement(_e, { key: "label-implicit", viewBox: r })
        : Oe(t)
          ? P.createElement(_e, { key: "label-implicit", viewBox: r, value: t })
          : B.isValidElement(t)
            ? t.type === _e
              ? B.cloneElement(t, { key: "label-implicit", viewBox: r })
              : P.createElement(_e, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
            : V(t)
              ? P.createElement(_e, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
              : Ku(t)
                ? P.createElement(
                    _e,
                    Tn({ viewBox: r }, t, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  EE = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = Yd(t),
      o = Je(i, _e).map(function (c, l) {
        return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(l) });
      });
    if (!n) return o;
    var u = TE(t.label, r || a);
    return [u].concat(pE(o));
  };
_e.parseViewBox = Yd;
_e.renderCallByParent = EE;
function jE(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ME = jE;
const IE = Ae(ME);
function En(e) {
  "@babel/helpers - typeof";
  return (
    (En =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    En(e)
  );
}
var kE = ["valueAccessor"],
  CE = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function NE(e) {
  return LE(e) || BE(e) || RE(e) || DE();
}
function DE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RE(e, t) {
  if (e) {
    if (typeof e == "string") return iu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iu(e, t);
  }
}
function BE(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function LE(e) {
  if (Array.isArray(e)) return iu(e);
}
function iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
function Qs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qs(Object(r), !0).forEach(function (n) {
          FE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function FE(e, t, r) {
  return (
    (t = WE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function WE(e) {
  var t = UE(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function UE(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tf(e, t) {
  if (e == null) return {};
  var r = zE(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function zE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var qE = function (t) {
  return Array.isArray(t.value) ? IE(t.value) : t.value;
};
function St(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? qE : t,
    n = tf(e, kE),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    c = n.textBreakAll,
    l = tf(n, CE);
  return !i || !i.length
    ? null
    : P.createElement(
        ne,
        { className: "recharts-label-list" },
        i.map(function (f, s) {
          var p = Q(a) ? r(f, s) : Ee(f && f.payload, a),
            h = Q(u) ? {} : { id: "".concat(u, "-").concat(s) };
          return P.createElement(
            _e,
            Ki({}, G(f, !0), l, h, {
              parentViewBox: f.parentViewBox,
              value: p,
              textBreakAll: c,
              viewBox: _e.parseViewBox(
                Q(o) ? f : ef(ef({}, f), {}, { clockWise: o }),
              ),
              key: "label-".concat(s),
              index: s,
            }),
          );
        }),
      );
}
St.displayName = "LabelList";
function KE(e, t) {
  return e
    ? e === !0
      ? P.createElement(St, { key: "labelList-implicit", data: t })
      : P.isValidElement(e) || V(e)
        ? P.createElement(St, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : Ku(e)
          ? P.createElement(
              St,
              Ki({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function GE(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = Je(n, St).map(function (o, u) {
      return B.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = KE(e.label, t);
  return [a].concat(NE(i));
}
St.renderCallByParent = GE;
function jn(e) {
  "@babel/helpers - typeof";
  return (
    (jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jn(e)
  );
}
function au() {
  return (
    (au = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    au.apply(this, arguments)
  );
}
function rf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rf(Object(r), !0).forEach(function (n) {
          HE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function HE(e, t, r) {
  return (
    (t = XE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function XE(e) {
  var t = VE(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function VE(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YE = function (t, r) {
    var n = Ie(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  ci = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      c = t.cornerRadius,
      l = t.cornerIsExternal,
      f = c * (u ? 1 : -1) + i,
      s = Math.asin(c / f) / qi,
      p = l ? a : a + o * s,
      h = ce(r, n, f, p),
      v = ce(r, n, i, p),
      d = l ? a - o * s : a,
      y = ce(r, n, f * Math.cos(s * qi), d);
    return { center: h, circleTangency: v, lineTangency: y, theta: s };
  },
  Zd = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      c = YE(o, u),
      l = o + c,
      f = ce(r, n, a, o),
      s = ce(r, n, a, l),
      p = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(o > l),
          `,
    `,
        )
        .concat(s.x, ",")
        .concat(
          s.y,
          `
  `,
        );
    if (i > 0) {
      var h = ce(r, n, i, o),
        v = ce(r, n, i, l);
      p += "L "
        .concat(v.x, ",")
        .concat(
          v.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(o <= l),
          `,
            `,
        )
        .concat(h.x, ",")
        .concat(h.y, " Z");
    } else p += "L ".concat(r, ",").concat(n, " Z");
    return p;
  },
  ZE = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      c = t.cornerIsExternal,
      l = t.startAngle,
      f = t.endAngle,
      s = Ie(f - l),
      p = ci({
        cx: r,
        cy: n,
        radius: a,
        angle: l,
        sign: s,
        cornerRadius: o,
        cornerIsExternal: c,
      }),
      h = p.circleTangency,
      v = p.lineTangency,
      d = p.theta,
      y = ci({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -s,
        cornerRadius: o,
        cornerIsExternal: c,
      }),
      b = y.circleTangency,
      w = y.lineTangency,
      x = y.theta,
      O = c ? Math.abs(l - f) : Math.abs(l - f) - d - x;
    if (O < 0)
      return u
        ? "M "
            .concat(v.x, ",")
            .concat(
              v.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : Zd({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: l,
            endAngle: f,
          });
    var m = "M "
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(s < 0), ",")
      .concat(h.x, ",")
      .concat(
        h.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(O > 180), ",")
      .concat(+(s < 0), ",")
      .concat(b.x, ",")
      .concat(
        b.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(s < 0), ",")
      .concat(w.x, ",")
      .concat(
        w.y,
        `
  `,
      );
    if (i > 0) {
      var g = ci({
          cx: r,
          cy: n,
          radius: i,
          angle: l,
          sign: s,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: c,
        }),
        A = g.circleTangency,
        S = g.lineTangency,
        _ = g.theta,
        E = ci({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -s,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: c,
        }),
        $ = E.circleTangency,
        T = E.lineTangency,
        M = E.theta,
        I = c ? Math.abs(l - f) : Math.abs(l - f) - _ - M;
      if (I < 0 && o === 0)
        return "".concat(m, "L").concat(r, ",").concat(n, "Z");
      m += "L"
        .concat(T.x, ",")
        .concat(
          T.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(s < 0), ",")
        .concat($.x, ",")
        .concat(
          $.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(I > 180), ",")
        .concat(+(s > 0), ",")
        .concat(A.x, ",")
        .concat(
          A.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(s < 0), ",")
        .concat(S.x, ",")
        .concat(S.y, "Z");
    } else m += "L".concat(r, ",").concat(n, "Z");
    return m;
  },
  JE = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  Jd = function (t) {
    var r = nf(nf({}, JE), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      c = r.forceCornerRadius,
      l = r.cornerIsExternal,
      f = r.startAngle,
      s = r.endAngle,
      p = r.className;
    if (o < a || f === s) return null;
    var h = J("recharts-sector", p),
      v = o - a,
      d = ke(u, v, 0, !0),
      y;
    return (
      d > 0 && Math.abs(f - s) < 360
        ? (y = ZE({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(d, v / 2),
            forceCornerRadius: c,
            cornerIsExternal: l,
            startAngle: f,
            endAngle: s,
          }))
        : (y = Zd({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: s,
          })),
      P.createElement(
        "path",
        au({}, G(r, !0), { className: h, d: y, role: "img" }),
      )
    );
  };
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
function ou() {
  return (
    (ou = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ou.apply(this, arguments)
  );
}
function af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? af(Object(r), !0).forEach(function (n) {
          QE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function QE(e, t, r) {
  return (
    (t = ej(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ej(e) {
  var t = tj(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function tj(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var uf = {
    curveBasisClosed: Nm,
    curveBasisOpen: Dm,
    curveBasis: Cm,
    curveBumpX: xm,
    curveBumpY: wm,
    curveLinearClosed: Rm,
    curveLinear: ya,
    curveMonotoneX: Bm,
    curveMonotoneY: Lm,
    curveNatural: Fm,
    curveStep: Wm,
    curveStepAfter: zm,
    curveStepBefore: Um,
  },
  li = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Jr = function (t) {
    return t.x;
  },
  Qr = function (t) {
    return t.y;
  },
  rj = function (t, r) {
    if (V(t)) return t;
    var n = "curve".concat(da(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? uf["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : uf[n] || ya;
  },
  nj = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      c = t.connectNulls,
      l = c === void 0 ? !1 : c,
      f = rj(n, u),
      s = l
        ? a.filter(function (d) {
            return li(d);
          })
        : a,
      p;
    if (Array.isArray(o)) {
      var h = l
          ? o.filter(function (d) {
              return li(d);
            })
          : o,
        v = s.map(function (d, y) {
          return of(of({}, d), {}, { base: h[y] });
        });
      return (
        u === "vertical"
          ? (p = ei()
              .y(Qr)
              .x1(Jr)
              .x0(function (d) {
                return d.base.x;
              }))
          : (p = ei()
              .x(Jr)
              .y1(Qr)
              .y0(function (d) {
                return d.base.y;
              })),
        p.defined(li).curve(f),
        p(v)
      );
    }
    return (
      u === "vertical" && R(o)
        ? (p = ei().y(Qr).x1(Jr).x0(o))
        : R(o)
          ? (p = ei().x(Jr).y1(Qr).y0(o))
          : (p = Xp().x(Jr).y(Qr)),
      p.defined(li).curve(f),
      p(s)
    );
  },
  uu = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? nj(t) : i;
    return B.createElement(
      "path",
      ou({}, G(t, !1), yi(t), {
        className: J("recharts-curve", r),
        d: o,
        ref: a,
      }),
    );
  },
  Qd = { exports: {} },
  ij = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  aj = ij,
  oj = aj;
function ev() {}
function tv() {}
tv.resetWarningCache = ev;
var uj = function () {
  function e(n, i, a, o, u, c) {
    if (c !== oj) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((l.name = "Invariant Violation"), l);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: tv,
    resetWarningCache: ev,
  };
  return ((r.PropTypes = r), r);
};
Qd.exports = uj();
var cj = Qd.exports;
const re = Ae(cj);
var lj = Object.getOwnPropertyNames,
  sj = Object.getOwnPropertySymbols,
  fj = Object.prototype.hasOwnProperty;
function cf(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function si(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    (a.set(r, n), a.set(n, r));
    var c = e(r, n, i);
    return (a.delete(r), a.delete(n), c);
  };
}
function lf(e) {
  return lj(e).concat(sj(e));
}
var pj =
  Object.hasOwn ||
  function (e, t) {
    return fj.call(e, t);
  };
function Qt(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var hj = "__v",
  dj = "__o",
  vj = "_owner",
  sf = Object.getOwnPropertyDescriptor,
  ff = Object.keys;
function yj(e, t, r) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function mj(e, t) {
  return Qt(e.getTime(), t.getTime());
}
function gj(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function bj(e, t) {
  return e === t;
}
function pf(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var i = new Array(n), a = e.entries(), o, u, c = 0;
    (o = a.next()) && !o.done;
  ) {
    for (var l = t.entries(), f = !1, s = 0; (u = l.next()) && !u.done; ) {
      if (i[s]) {
        s++;
        continue;
      }
      var p = o.value,
        h = u.value;
      if (
        r.equals(p[0], h[0], c, s, e, t, r) &&
        r.equals(p[1], h[1], p[0], h[0], e, t, r)
      ) {
        f = i[s] = !0;
        break;
      }
      s++;
    }
    if (!f) return !1;
    c++;
  }
  return !0;
}
var xj = Qt;
function wj(e, t, r) {
  var n = ff(e),
    i = n.length;
  if (ff(t).length !== i) return !1;
  for (; i-- > 0; ) if (!rv(e, t, r, n[i])) return !1;
  return !0;
}
function en(e, t, r) {
  var n = lf(e),
    i = n.length;
  if (lf(t).length !== i) return !1;
  for (var a, o, u; i-- > 0; )
    if (
      ((a = n[i]),
      !rv(e, t, r, a) ||
        ((o = sf(e, a)),
        (u = sf(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function Oj(e, t) {
  return Qt(e.valueOf(), t.valueOf());
}
function Aj(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function hf(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var i = new Array(n), a = e.values(), o, u;
    (o = a.next()) && !o.done;
  ) {
    for (var c = t.values(), l = !1, f = 0; (u = c.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l) return !1;
  }
  return !0;
}
function Pj(e, t) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function Sj(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function rv(e, t, r, n) {
  return (n === vj || n === dj || n === hj) && (e.$$typeof || t.$$typeof)
    ? !0
    : pj(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var _j = "[object Arguments]",
  $j = "[object Boolean]",
  Tj = "[object Date]",
  Ej = "[object Error]",
  jj = "[object Map]",
  Mj = "[object Number]",
  Ij = "[object Object]",
  kj = "[object RegExp]",
  Cj = "[object Set]",
  Nj = "[object String]",
  Dj = "[object URL]",
  Rj = Array.isArray,
  df =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  vf = Object.assign,
  Bj = Object.prototype.toString.call.bind(Object.prototype.toString);
function Lj(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areErrorsEqual,
    i = e.areFunctionsEqual,
    a = e.areMapsEqual,
    o = e.areNumbersEqual,
    u = e.areObjectsEqual,
    c = e.arePrimitiveWrappersEqual,
    l = e.areRegExpsEqual,
    f = e.areSetsEqual,
    s = e.areTypedArraysEqual,
    p = e.areUrlsEqual;
  return function (v, d, y) {
    if (v === d) return !0;
    if (v == null || d == null) return !1;
    var b = typeof v;
    if (b !== typeof d) return !1;
    if (b !== "object")
      return b === "number" ? o(v, d, y) : b === "function" ? i(v, d, y) : !1;
    var w = v.constructor;
    if (w !== d.constructor) return !1;
    if (w === Object) return u(v, d, y);
    if (Rj(v)) return t(v, d, y);
    if (df != null && df(v)) return s(v, d, y);
    if (w === Date) return r(v, d, y);
    if (w === RegExp) return l(v, d, y);
    if (w === Map) return a(v, d, y);
    if (w === Set) return f(v, d, y);
    var x = Bj(v);
    return x === Tj
      ? r(v, d, y)
      : x === kj
        ? l(v, d, y)
        : x === jj
          ? a(v, d, y)
          : x === Cj
            ? f(v, d, y)
            : x === Ij
              ? typeof v.then != "function" &&
                typeof d.then != "function" &&
                u(v, d, y)
              : x === Dj
                ? p(v, d, y)
                : x === Ej
                  ? n(v, d, y)
                  : x === _j
                    ? u(v, d, y)
                    : x === $j || x === Mj || x === Nj
                      ? c(v, d, y)
                      : !1;
  };
}
function Fj(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    i = {
      areArraysEqual: n ? en : yj,
      areDatesEqual: mj,
      areErrorsEqual: gj,
      areFunctionsEqual: bj,
      areMapsEqual: n ? cf(pf, en) : pf,
      areNumbersEqual: xj,
      areObjectsEqual: n ? en : wj,
      arePrimitiveWrappersEqual: Oj,
      areRegExpsEqual: Aj,
      areSetsEqual: n ? cf(hf, en) : hf,
      areTypedArraysEqual: n ? en : Pj,
      areUrlsEqual: Sj,
    };
  if ((r && (i = vf({}, i, r(i))), t)) {
    var a = si(i.areArraysEqual),
      o = si(i.areMapsEqual),
      u = si(i.areObjectsEqual),
      c = si(i.areSetsEqual);
    i = vf({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: c,
    });
  }
  return i;
}
function Wj(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function Uj(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    i = e.equals,
    a = e.strict;
  if (n)
    return function (c, l) {
      var f = n(),
        s = f.cache,
        p = s === void 0 ? (t ? new WeakMap() : void 0) : s,
        h = f.meta;
      return r(c, l, { cache: p, equals: i, meta: h, strict: a });
    };
  if (t)
    return function (c, l) {
      return r(c, l, {
        cache: new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a,
      });
    };
  var o = { cache: void 0, equals: i, meta: void 0, strict: a };
  return function (c, l) {
    return r(c, l, o);
  };
}
var zj = Et();
Et({ strict: !0 });
Et({ circular: !0 });
Et({ circular: !0, strict: !0 });
Et({
  createInternalComparator: function () {
    return Qt;
  },
});
Et({
  strict: !0,
  createInternalComparator: function () {
    return Qt;
  },
});
Et({
  circular: !0,
  createInternalComparator: function () {
    return Qt;
  },
});
Et({
  circular: !0,
  createInternalComparator: function () {
    return Qt;
  },
  strict: !0,
});
function Et(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    u = Fj(e),
    c = Lj(u),
    l = n ? n(c) : Wj(c);
  return Uj({
    circular: r,
    comparator: c,
    createState: i,
    equals: l,
    strict: o,
  });
}
function qj(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function yf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : qj(i));
    };
  requestAnimationFrame(n);
}
function cu(e) {
  "@babel/helpers - typeof";
  return (
    (cu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cu(e)
  );
}
function Kj(e) {
  return Vj(e) || Xj(e) || Hj(e) || Gj();
}
function Gj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hj(e, t) {
  if (e) {
    if (typeof e == "string") return mf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mf(e, t);
  }
}
function mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xj(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Vj(e) {
  if (Array.isArray(e)) return e;
}
function Yj() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = Kj(o),
            c = u[0],
            l = u.slice(1);
          if (typeof c == "number") {
            yf(i.bind(null, l), c);
            return;
          }
          (i(c), yf(i.bind(null, l)));
          return;
        }
        (cu(a) === "object" && ((e = a), t(e)), typeof a == "function" && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function In(e) {
  "@babel/helpers - typeof";
  return (
    (In =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    In(e)
  );
}
function gf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gf(Object(r), !0).forEach(function (n) {
          nv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nv(e, t, r) {
  return (
    (t = Zj(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Zj(e) {
  var t = Jj(e, "string");
  return In(t) === "symbol" ? t : String(t);
}
function Jj(e, t) {
  if (In(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qj = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  eM = function (t) {
    return t;
  },
  tM = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  cn = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return bf(bf({}, n), {}, nv({}, i, t(i, r[i])));
    }, {});
  },
  xf = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(tM(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function rM(e, t) {
  return aM(e) || iM(e, t) || iv(e, t) || nM();
}
function nM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iM(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function aM(e) {
  if (Array.isArray(e)) return e;
}
function oM(e) {
  return lM(e) || cM(e) || iv(e) || uM();
}
function uM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iv(e, t) {
  if (e) {
    if (typeof e == "string") return lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lu(e, t);
  }
}
function cM(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lM(e) {
  if (Array.isArray(e)) return lu(e);
}
function lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Gi = 1e-4,
  av = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  ov = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  wf = function (t, r) {
    return function (n) {
      var i = av(t, r);
      return ov(i, n);
    };
  },
  sM = function (t, r) {
    return function (n) {
      var i = av(t, r),
        a = [].concat(
          oM(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return ov(a, n);
    };
  },
  Of = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          ((i = 0), (a = 0), (o = 1), (u = 1));
          break;
        case "ease":
          ((i = 0.25), (a = 0.1), (o = 0.25), (u = 1));
          break;
        case "ease-in":
          ((i = 0.42), (a = 0), (o = 1), (u = 1));
          break;
        case "ease-out":
          ((i = 0.42), (a = 0), (o = 0.58), (u = 1));
          break;
        case "ease-in-out":
          ((i = 0), (a = 0), (o = 0.58), (u = 1));
          break;
        default: {
          var c = r[0].split("(");
          if (
            c[0] === "cubic-bezier" &&
            c[1].split(")")[0].split(",").length === 4
          ) {
            var l = c[1]
                .split(")")[0]
                .split(",")
                .map(function (y) {
                  return parseFloat(y);
                }),
              f = rM(l, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]));
          }
        }
      }
    var s = wf(i, o),
      p = wf(a, u),
      h = sM(i, o),
      v = function (b) {
        return b > 1 ? 1 : b < 0 ? 0 : b;
      },
      d = function (b) {
        for (var w = b > 1 ? 1 : b, x = w, O = 0; O < 8; ++O) {
          var m = s(x) - w,
            g = h(x);
          if (Math.abs(m - w) < Gi || g < Gi) return p(x);
          x = v(x - m / g);
        }
        return p(x);
      };
    return ((d.isStepper = !1), d);
  },
  fM = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      c = function (f, s, p) {
        var h = -(f - s) * n,
          v = p * a,
          d = p + ((h - v) * u) / 1e3,
          y = (p * u) / 1e3 + f;
        return Math.abs(y - s) < Gi && Math.abs(d) < Gi ? [s, 0] : [y, d];
      };
    return ((c.isStepper = !0), (c.dt = u), c);
  },
  pM = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Of(i);
        case "spring":
          return fM();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Of(i);
      }
    return typeof i == "function" ? i : null;
  };
function kn(e) {
  "@babel/helpers - typeof";
  return (
    (kn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kn(e)
  );
}
function Af(e) {
  return vM(e) || dM(e) || uv(e) || hM();
}
function hM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dM(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function vM(e) {
  if (Array.isArray(e)) return fu(e);
}
function Pf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pf(Object(r), !0).forEach(function (n) {
          su(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function su(e, t, r) {
  return (
    (t = yM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function yM(e) {
  var t = mM(e, "string");
  return kn(t) === "symbol" ? t : String(t);
}
function mM(e, t) {
  if (kn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gM(e, t) {
  return wM(e) || xM(e, t) || uv(e, t) || bM();
}
function bM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uv(e, t) {
  if (e) {
    if (typeof e == "string") return fu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fu(e, t);
  }
}
function fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xM(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function wM(e) {
  if (Array.isArray(e)) return e;
}
var Hi = function (t, r, n) {
    return t + (r - t) * n;
  },
  pu = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  OM = function e(t, r, n) {
    var i = cn(function (a, o) {
      if (pu(o)) {
        var u = t(o.from, o.to, o.velocity),
          c = gM(u, 2),
          l = c[0],
          f = c[1];
        return Te(Te({}, o), {}, { from: l, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? cn(function (a, o) {
          return pu(o)
            ? Te(
                Te({}, o),
                {},
                {
                  velocity: Hi(o.velocity, i[a].velocity, n),
                  from: Hi(o.from, i[a].from, n),
                },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const AM = function (e, t, r, n, i) {
  var a = Qj(e, t),
    o = a.reduce(function (y, b) {
      return Te(Te({}, y), {}, su({}, b, [e[b], t[b]]));
    }, {}),
    u = a.reduce(function (y, b) {
      return Te(
        Te({}, y),
        {},
        su({}, b, { from: e[b], velocity: 0, to: t[b] }),
      );
    }, {}),
    c = -1,
    l,
    f,
    s = function () {
      return null;
    },
    p = function () {
      return cn(function (b, w) {
        return w.from;
      }, u);
    },
    h = function () {
      return !Object.values(u).filter(pu).length;
    },
    v = function (b) {
      l || (l = b);
      var w = b - l,
        x = w / r.dt;
      ((u = OM(r, u, x)),
        i(Te(Te(Te({}, e), t), p())),
        (l = b),
        h() || (c = requestAnimationFrame(s)));
    },
    d = function (b) {
      f || (f = b);
      var w = (b - f) / n,
        x = cn(function (m, g) {
          return Hi.apply(void 0, Af(g).concat([r(w)]));
        }, o);
      if ((i(Te(Te(Te({}, e), t), x)), w < 1)) c = requestAnimationFrame(s);
      else {
        var O = cn(function (m, g) {
          return Hi.apply(void 0, Af(g).concat([r(1)]));
        }, o);
        i(Te(Te(Te({}, e), t), O));
      }
    };
  return (
    (s = r.isStepper ? v : d),
    function () {
      return (
        requestAnimationFrame(s),
        function () {
          cancelAnimationFrame(c);
        }
      );
    }
  );
};
function wr(e) {
  "@babel/helpers - typeof";
  return (
    (wr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wr(e)
  );
}
var PM = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function SM(e, t) {
  if (e == null) return {};
  var r = _M(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function _M(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    ((i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
function so(e) {
  return jM(e) || EM(e) || TM(e) || $M();
}
function $M() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TM(e, t) {
  if (e) {
    if (typeof e == "string") return hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hu(e, t);
  }
}
function EM(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function jM(e) {
  if (Array.isArray(e)) return hu(e);
}
function hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sf(Object(r), !0).forEach(function (n) {
          rn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rn(e, t, r) {
  return (
    (t = cv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function MM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, cv(n.key), n));
  }
}
function kM(e, t, r) {
  return (
    t && IM(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function cv(e) {
  var t = CM(e, "string");
  return wr(t) === "symbol" ? t : String(t);
}
function CM(e, t) {
  if (wr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && du(e, t));
}
function du(e, t) {
  return (
    (du = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    du(e, t)
  );
}
function DM(e) {
  var t = RM();
  return function () {
    var n = Xi(e),
      i;
    if (t) {
      var a = Xi(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return vu(this, i);
  };
}
function vu(e, t) {
  if (t && (wr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return yu(e);
}
function yu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function RM() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Xi(e) {
  return (
    (Xi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Xi(e)
  );
}
var mt = (function (e) {
  NM(r, e);
  var t = DM(r);
  function r(n, i) {
    var a;
    (MM(this, r), (a = t.call(this, n, i)));
    var o = a.props,
      u = o.isActive,
      c = o.attributeName,
      l = o.from,
      f = o.to,
      s = o.steps,
      p = o.children,
      h = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(yu(a))),
      (a.changeStyle = a.changeStyle.bind(yu(a))),
      !u || h <= 0)
    )
      return (
        (a.state = { style: {} }),
        typeof p == "function" && (a.state = { style: f }),
        vu(a)
      );
    if (s && s.length) a.state = { style: s[0].style };
    else if (l) {
      if (typeof p == "function") return ((a.state = { style: l }), vu(a));
      a.state = { style: c ? rn({}, c, l) : l };
    } else a.state = { style: {} };
    return a;
  }
  return (
    kM(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            c = a.attributeName,
            l = a.shouldReAnimate,
            f = a.to,
            s = a.from,
            p = this.state.style;
          if (u) {
            if (!o) {
              var h = { style: c ? rn({}, c, f) : f };
              this.state &&
                p &&
                ((c && p[c] !== f) || (!c && p !== f)) &&
                this.setState(h);
              return;
            }
            if (!(zj(i.to, f) && i.canBegin && i.isActive)) {
              var v = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation());
              var d = v || l ? s : i.to;
              if (this.state && p) {
                var y = { style: c ? rn({}, c, d) : d };
                ((c && p[c] !== d) || (!c && p !== d)) && this.setState(y);
              }
              this.runAnimation(
                Ve(Ve({}, this.props), {}, { from: d, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            c = i.duration,
            l = i.easing,
            f = i.begin,
            s = i.onAnimationEnd,
            p = i.onAnimationStart,
            h = AM(o, u, pM(l), c, this.changeStyle),
            v = function () {
              a.stopJSAnimation = h();
            };
          this.manager.start([p, f, v, c, s]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            c = i.onAnimationStart,
            l = o[0],
            f = l.style,
            s = l.duration,
            p = s === void 0 ? 0 : s,
            h = function (d, y, b) {
              if (b === 0) return d;
              var w = y.duration,
                x = y.easing,
                O = x === void 0 ? "ease" : x,
                m = y.style,
                g = y.properties,
                A = y.onAnimationEnd,
                S = b > 0 ? o[b - 1] : y,
                _ = g || Object.keys(m);
              if (typeof O == "function" || O === "spring")
                return [].concat(so(d), [
                  a.runJSAnimation.bind(a, {
                    from: S.style,
                    to: m,
                    duration: w,
                    easing: O,
                  }),
                  w,
                ]);
              var E = xf(_, w, O),
                $ = Ve(Ve(Ve({}, S.style), m), {}, { transition: E });
              return [].concat(so(d), [$, w, A]).filter(eM);
            };
          return this.manager.start(
            [c].concat(so(o.reduce(h, [f, Math.max(p, u)])), [
              i.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = Yj());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            c = i.to,
            l = i.easing,
            f = i.onAnimationStart,
            s = i.onAnimationEnd,
            p = i.steps,
            h = i.children,
            v = this.manager;
          if (
            ((this.unSubscribe = v.subscribe(this.handleStyleChange)),
            typeof l == "function" || typeof h == "function" || l === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (p.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var d = u ? rn({}, u, c) : c,
            y = xf(Object.keys(d), o, l);
          v.start([f, a, Ve(Ve({}, d), {}, { transition: y }), o, s]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var u = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var c = SM(i, PM),
            l = B.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || l === 0 || o <= 0) return a;
          var s = function (h) {
            var v = h.props,
              d = v.style,
              y = d === void 0 ? {} : d,
              b = v.className,
              w = B.cloneElement(
                h,
                Ve(Ve({}, c), {}, { style: Ve(Ve({}, y), f), className: b }),
              );
            return w;
          };
          return l === 1
            ? s(B.Children.only(a))
            : P.createElement(
                "div",
                null,
                B.Children.map(a, function (p) {
                  return s(p);
                }),
              );
        },
      },
    ]),
    r
  );
})(B.PureComponent);
mt.displayName = "Animate";
mt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
mt.propTypes = {
  from: re.oneOfType([re.object, re.string]),
  to: re.oneOfType([re.object, re.string]),
  attributeName: re.string,
  duration: re.number,
  begin: re.number,
  easing: re.oneOfType([re.string, re.func]),
  steps: re.arrayOf(
    re.shape({
      duration: re.number.isRequired,
      style: re.object.isRequired,
      easing: re.oneOfType([
        re.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        re.func,
      ]),
      properties: re.arrayOf("string"),
      onAnimationEnd: re.func,
    }),
  ),
  children: re.oneOfType([re.node, re.func]),
  isActive: re.bool,
  canBegin: re.bool,
  onAnimationEnd: re.func,
  shouldReAnimate: re.bool,
  onAnimationStart: re.func,
  onAnimationReStart: re.func,
};
function Cn(e) {
  "@babel/helpers - typeof";
  return (
    (Cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cn(e)
  );
}
function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vi.apply(this, arguments)
  );
}
function BM(e, t) {
  return UM(e) || WM(e, t) || FM(e, t) || LM();
}
function LM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FM(e, t) {
  if (e) {
    if (typeof e == "string") return _f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _f(e, t);
  }
}
function _f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WM(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function UM(e) {
  if (Array.isArray(e)) return e;
}
function $f(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $f(Object(r), !0).forEach(function (n) {
          zM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function zM(e, t, r) {
  return (
    (t = qM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qM(e) {
  var t = KM(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function KM(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ef = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      c = n >= 0 ? 1 : -1,
      l = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var s = [0, 0, 0, 0], p = 0, h = 4; p < h; p++)
        s[p] = a[p] > o ? o : a[p];
      ((f = "M".concat(t, ",").concat(r + u * s[0])),
        s[0] > 0 &&
          (f += "A "
            .concat(s[0], ",")
            .concat(s[0], ",0,0,")
            .concat(l, ",")
            .concat(t + c * s[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - c * s[1], ",").concat(r)),
        s[1] > 0 &&
          (f += "A "
            .concat(s[1], ",")
            .concat(s[1], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * s[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * s[2])),
        s[2] > 0 &&
          (f += "A "
            .concat(s[2], ",")
            .concat(s[2], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n - c * s[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + c * s[3], ",").concat(r + i)),
        s[3] > 0 &&
          (f += "A "
            .concat(s[3], ",")
            .concat(s[3], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * s[3])),
        (f += "Z"));
    } else if (o > 0 && a === +a && a > 0) {
      var v = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * v,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + c * v, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - c * v, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + n, ",")
        .concat(
          r + u * v,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * v,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + n - c * v, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + c * v, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t, ",")
        .concat(r + i - u * v, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return f;
  },
  GM = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      c = r.height;
    if (Math.abs(u) > 0 && Math.abs(c) > 0) {
      var l = Math.min(a, a + u),
        f = Math.max(a, a + u),
        s = Math.min(o, o + c),
        p = Math.max(o, o + c);
      return n >= l && n <= f && i >= s && i <= p;
    }
    return !1;
  },
  HM = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Mc = function (t) {
    var r = Tf(Tf({}, HM), t),
      n = B.useRef(),
      i = B.useState(-1),
      a = BM(i, 2),
      o = a[0],
      u = a[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var O = n.current.getTotalLength();
          O && u(O);
        } catch {}
    }, []);
    var c = r.x,
      l = r.y,
      f = r.width,
      s = r.height,
      p = r.radius,
      h = r.className,
      v = r.animationEasing,
      d = r.animationDuration,
      y = r.animationBegin,
      b = r.isAnimationActive,
      w = r.isUpdateAnimationActive;
    if (c !== +c || l !== +l || f !== +f || s !== +s || f === 0 || s === 0)
      return null;
    var x = J("recharts-rectangle", h);
    return w
      ? P.createElement(
          mt,
          {
            canBegin: o > 0,
            from: { width: f, height: s, x: c, y: l },
            to: { width: f, height: s, x: c, y: l },
            duration: d,
            animationEasing: v,
            isActive: w,
          },
          function (O) {
            var m = O.width,
              g = O.height,
              A = O.x,
              S = O.y;
            return P.createElement(
              mt,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: y,
                duration: d,
                isActive: b,
                easing: v,
              },
              P.createElement(
                "path",
                Vi({}, G(r, !0), {
                  className: x,
                  d: Ef(A, S, m, g, p),
                  ref: n,
                }),
              ),
            );
          },
        )
      : P.createElement(
          "path",
          Vi({}, G(r, !0), { className: x, d: Ef(c, l, f, s, p) }),
        );
  },
  XM = ["points", "className", "baseLinePoints", "connectNulls"];
function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
function VM(e, t) {
  if (e == null) return {};
  var r = YM(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function YM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jf(e) {
  return eI(e) || QM(e) || JM(e) || ZM();
}
function ZM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JM(e, t) {
  if (e) {
    if (typeof e == "string") return mu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mu(e, t);
  }
}
function QM(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function eI(e) {
  if (Array.isArray(e)) return mu(e);
}
function mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Mf = function (t) {
    return t && t.x === +t.x && t.y === +t.y;
  },
  tI = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      r = [[]];
    return (
      t.forEach(function (n) {
        Mf(n)
          ? r[r.length - 1].push(n)
          : r[r.length - 1].length > 0 && r.push([]);
      }),
      Mf(t[0]) && r[r.length - 1].push(t[0]),
      r[r.length - 1].length <= 0 && (r = r.slice(0, -1)),
      r
    );
  },
  ln = function (t, r) {
    var n = tI(t);
    r &&
      (n = [
        n.reduce(function (a, o) {
          return [].concat(jf(a), jf(o));
        }, []),
      ]);
    var i = n
      .map(function (a) {
        return a.reduce(function (o, u, c) {
          return ""
            .concat(o)
            .concat(c === 0 ? "M" : "L")
            .concat(u.x, ",")
            .concat(u.y);
        }, "");
      })
      .join("");
    return n.length === 1 ? "".concat(i, "Z") : i;
  },
  rI = function (t, r, n) {
    var i = ln(t, n);
    return ""
      .concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L")
      .concat(ln(r.reverse(), n).slice(1));
  },
  nI = function (t) {
    var r = t.points,
      n = t.className,
      i = t.baseLinePoints,
      a = t.connectNulls,
      o = VM(t, XM);
    if (!r || !r.length) return null;
    var u = J("recharts-polygon", n);
    if (i && i.length) {
      var c = o.stroke && o.stroke !== "none",
        l = rI(r, i, a);
      return P.createElement(
        "g",
        { className: u },
        P.createElement(
          "path",
          ar({}, G(o, !0), {
            fill: l.slice(-1) === "Z" ? o.fill : "none",
            stroke: "none",
            d: l,
          }),
        ),
        c
          ? P.createElement(
              "path",
              ar({}, G(o, !0), { fill: "none", d: ln(r, a) }),
            )
          : null,
        c
          ? P.createElement(
              "path",
              ar({}, G(o, !0), { fill: "none", d: ln(i, a) }),
            )
          : null,
      );
    }
    var f = ln(r, a);
    return P.createElement(
      "path",
      ar({}, G(o, !0), {
        fill: f.slice(-1) === "Z" ? o.fill : "none",
        className: u,
        d: f,
      }),
    );
  };
function gu() {
  return (
    (gu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gu.apply(this, arguments)
  );
}
var Ic = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = J("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? B.createElement(
        "circle",
        gu({}, G(t, !1), yi(t), { className: o, cx: r, cy: n, r: i }),
      )
    : null;
};
function Nn(e) {
  "@babel/helpers - typeof";
  return (
    (Nn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nn(e)
  );
}
var iI = ["x", "y", "top", "left", "width", "height", "className"];
function bu() {
  return (
    (bu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    bu.apply(this, arguments)
  );
}
function If(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function aI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? If(Object(r), !0).forEach(function (n) {
          oI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : If(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function oI(e, t, r) {
  return (
    (t = uI(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function uI(e) {
  var t = cI(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function cI(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lI(e, t) {
  if (e == null) return {};
  var r = sI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function sI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var fI = function (t, r, n, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  pI = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      c = t.left,
      l = c === void 0 ? 0 : c,
      f = t.width,
      s = f === void 0 ? 0 : f,
      p = t.height,
      h = p === void 0 ? 0 : p,
      v = t.className,
      d = lI(t, iI),
      y = aI({ x: n, y: a, top: u, left: l, width: s, height: h }, d);
    return !R(n) || !R(a) || !R(s) || !R(h) || !R(u) || !R(l)
      ? null
      : P.createElement(
          "path",
          bu({}, G(y, !0), {
            className: J("recharts-cross", v),
            d: fI(n, a, s, h, u, l),
          }),
        );
  },
  hI = $a,
  dI = xd,
  vI = ot;
function yI(e, t) {
  return e && e.length ? hI(e, vI(t), dI) : void 0;
}
var mI = yI;
const gI = Ae(mI);
var bI = $a,
  xI = ot,
  wI = wd;
function OI(e, t) {
  return e && e.length ? bI(e, xI(t), wI) : void 0;
}
var AI = OI;
const PI = Ae(AI);
var SI = ["cx", "cy", "angle", "ticks", "axisLine"],
  _I = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Or(e) {
  "@babel/helpers - typeof";
  return (
    (Or =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Or(e)
  );
}
function sn() {
  return (
    (sn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    sn.apply(this, arguments)
  );
}
function kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kf(Object(r), !0).forEach(function (n) {
          Ca(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Cf(e, t) {
  if (e == null) return {};
  var r = $I(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function $I(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function TI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, sv(n.key), n));
  }
}
function EI(e, t, r) {
  return (
    t && Nf(e.prototype, t),
    r && Nf(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function jI(e, t, r) {
  return (
    (t = Yi(t)),
    MI(
      e,
      lv() ? Reflect.construct(t, r || [], Yi(e).constructor) : t.apply(e, r),
    )
  );
}
function MI(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return II(e);
}
function II(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (lv = function () {
    return !!e;
  })();
}
function Yi(e) {
  return (
    (Yi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Yi(e)
  );
}
function kI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && xu(e, t));
}
function xu(e, t) {
  return (
    (xu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    xu(e, t)
  );
}
function Ca(e, t, r) {
  return (
    (t = sv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sv(e) {
  var t = CI(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function CI(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Na = (function (e) {
  function t() {
    return (TI(this, t), jI(this, t, arguments));
  }
  return (
    kI(t, e),
    EI(
      t,
      [
        {
          key: "getTickValueCoord",
          value: function (n) {
            var i = n.coordinate,
              a = this.props,
              o = a.angle,
              u = a.cx,
              c = a.cy;
            return ce(u, c, i, o);
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props.orientation,
              i;
            switch (n) {
              case "left":
                i = "end";
                break;
              case "right":
                i = "start";
                break;
              default:
                i = "middle";
                break;
            }
            return i;
          },
        },
        {
          key: "getViewBox",
          value: function () {
            var n = this.props,
              i = n.cx,
              a = n.cy,
              o = n.angle,
              u = n.ticks,
              c = gI(u, function (f) {
                return f.coordinate || 0;
              }),
              l = PI(u, function (f) {
                return f.coordinate || 0;
              });
            return {
              cx: i,
              cy: a,
              startAngle: o,
              endAngle: o,
              innerRadius: l.coordinate || 0,
              outerRadius: c.coordinate || 0,
            };
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.cx,
              a = n.cy,
              o = n.angle,
              u = n.ticks,
              c = n.axisLine,
              l = Cf(n, SI),
              f = u.reduce(
                function (v, d) {
                  return [
                    Math.min(v[0], d.coordinate),
                    Math.max(v[1], d.coordinate),
                  ];
                },
                [1 / 0, -1 / 0],
              ),
              s = ce(i, a, f[0], o),
              p = ce(i, a, f[1], o),
              h = Nt(
                Nt(Nt({}, G(l, !1)), {}, { fill: "none" }, G(c, !1)),
                {},
                { x1: s.x, y1: s.y, x2: p.x, y2: p.y },
              );
            return P.createElement(
              "line",
              sn({ className: "recharts-polar-radius-axis-line" }, h),
            );
          },
        },
        {
          key: "renderTicks",
          value: function () {
            var n = this,
              i = this.props,
              a = i.ticks,
              o = i.tick,
              u = i.angle,
              c = i.tickFormatter,
              l = i.stroke,
              f = Cf(i, _I),
              s = this.getTickTextAnchor(),
              p = G(f, !1),
              h = G(o, !1),
              v = a.map(function (d, y) {
                var b = n.getTickValueCoord(d),
                  w = Nt(
                    Nt(
                      Nt(
                        Nt(
                          {
                            textAnchor: s,
                            transform: "rotate("
                              .concat(90 - u, ", ")
                              .concat(b.x, ", ")
                              .concat(b.y, ")"),
                          },
                          p,
                        ),
                        {},
                        { stroke: "none", fill: l },
                        h,
                      ),
                      {},
                      { index: y },
                      b,
                    ),
                    {},
                    { payload: d },
                  );
                return P.createElement(
                  ne,
                  sn(
                    {
                      className: J("recharts-polar-radius-axis-tick", Vd(o)),
                      key: "tick-".concat(d.coordinate),
                    },
                    Gt(n.props, d, y),
                  ),
                  t.renderTickItem(o, w, c ? c(d.value, y) : d.value),
                );
              });
            return P.createElement(
              ne,
              { className: "recharts-polar-radius-axis-ticks" },
              v,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.ticks,
              a = n.axisLine,
              o = n.tick;
            return !i || !i.length
              ? null
              : P.createElement(
                  ne,
                  {
                    className: J(
                      "recharts-polar-radius-axis",
                      this.props.className,
                    ),
                  },
                  a && this.renderAxisLine(),
                  o && this.renderTicks(),
                  _e.renderCallByParent(this.props, this.getViewBox()),
                );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o;
            return (
              P.isValidElement(n)
                ? (o = P.cloneElement(n, i))
                : V(n)
                  ? (o = n(i))
                  : (o = P.createElement(
                      Ht,
                      sn({}, i, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(B.PureComponent);
Ca(Na, "displayName", "PolarRadiusAxis");
Ca(Na, "axisType", "radiusAxis");
Ca(Na, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0,
});
function Ar(e) {
  "@babel/helpers - typeof";
  return (
    (Ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ar(e)
  );
}
function Ft() {
  return (
    (Ft = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ft.apply(this, arguments)
  );
}
function Df(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Df(Object(r), !0).forEach(function (n) {
          Da(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function NI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pv(n.key), n));
  }
}
function DI(e, t, r) {
  return (
    t && Rf(e.prototype, t),
    r && Rf(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function RI(e, t, r) {
  return (
    (t = Zi(t)),
    BI(
      e,
      fv() ? Reflect.construct(t, r || [], Zi(e).constructor) : t.apply(e, r),
    )
  );
}
function BI(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return LI(e);
}
function LI(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function fv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (fv = function () {
    return !!e;
  })();
}
function Zi(e) {
  return (
    (Zi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Zi(e)
  );
}
function FI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wu(e, t));
}
function wu(e, t) {
  return (
    (wu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wu(e, t)
  );
}
function Da(e, t, r) {
  return (
    (t = pv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pv(e) {
  var t = WI(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var UI = Math.PI / 180,
  Bf = 1e-5,
  Ra = (function (e) {
    function t() {
      return (NI(this, t), RI(this, t, arguments));
    }
    return (
      FI(t, e),
      DI(
        t,
        [
          {
            key: "getTickLineCoord",
            value: function (n) {
              var i = this.props,
                a = i.cx,
                o = i.cy,
                u = i.radius,
                c = i.orientation,
                l = i.tickSize,
                f = l || 8,
                s = ce(a, o, u, n.coordinate),
                p = ce(a, o, u + (c === "inner" ? -1 : 1) * f, n.coordinate);
              return { x1: s.x, y1: s.y, x2: p.x, y2: p.y };
            },
          },
          {
            key: "getTickTextAnchor",
            value: function (n) {
              var i = this.props.orientation,
                a = Math.cos(-n.coordinate * UI),
                o;
              return (
                a > Bf
                  ? (o = i === "outer" ? "start" : "end")
                  : a < -Bf
                    ? (o = i === "outer" ? "end" : "start")
                    : (o = "middle"),
                o
              );
            },
          },
          {
            key: "renderAxisLine",
            value: function () {
              var n = this.props,
                i = n.cx,
                a = n.cy,
                o = n.radius,
                u = n.axisLine,
                c = n.axisLineType,
                l = Dt(
                  Dt({}, G(this.props, !1)),
                  {},
                  { fill: "none" },
                  G(u, !1),
                );
              if (c === "circle")
                return P.createElement(
                  Ic,
                  Ft({ className: "recharts-polar-angle-axis-line" }, l, {
                    cx: i,
                    cy: a,
                    r: o,
                  }),
                );
              var f = this.props.ticks,
                s = f.map(function (p) {
                  return ce(i, a, o, p.coordinate);
                });
              return P.createElement(
                nI,
                Ft({ className: "recharts-polar-angle-axis-line" }, l, {
                  points: s,
                }),
              );
            },
          },
          {
            key: "renderTicks",
            value: function () {
              var n = this,
                i = this.props,
                a = i.ticks,
                o = i.tick,
                u = i.tickLine,
                c = i.tickFormatter,
                l = i.stroke,
                f = G(this.props, !1),
                s = G(o, !1),
                p = Dt(Dt({}, f), {}, { fill: "none" }, G(u, !1)),
                h = a.map(function (v, d) {
                  var y = n.getTickLineCoord(v),
                    b = n.getTickTextAnchor(v),
                    w = Dt(
                      Dt(
                        Dt({ textAnchor: b }, f),
                        {},
                        { stroke: "none", fill: l },
                        s,
                      ),
                      {},
                      { index: d, payload: v, x: y.x2, y: y.y2 },
                    );
                  return P.createElement(
                    ne,
                    Ft(
                      {
                        className: J("recharts-polar-angle-axis-tick", Vd(o)),
                        key: "tick-".concat(v.coordinate),
                      },
                      Gt(n.props, v, d),
                    ),
                    u &&
                      P.createElement(
                        "line",
                        Ft(
                          { className: "recharts-polar-angle-axis-tick-line" },
                          p,
                          y,
                        ),
                      ),
                    o && t.renderTickItem(o, w, c ? c(v.value, d) : v.value),
                  );
                });
              return P.createElement(
                ne,
                { className: "recharts-polar-angle-axis-ticks" },
                h,
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.ticks,
                a = n.radius,
                o = n.axisLine;
              return a <= 0 || !i || !i.length
                ? null
                : P.createElement(
                    ne,
                    {
                      className: J(
                        "recharts-polar-angle-axis",
                        this.props.className,
                      ),
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(),
                  );
            },
          },
        ],
        [
          {
            key: "renderTickItem",
            value: function (n, i, a) {
              var o;
              return (
                P.isValidElement(n)
                  ? (o = P.cloneElement(n, i))
                  : V(n)
                    ? (o = n(i))
                    : (o = P.createElement(
                        Ht,
                        Ft({}, i, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        a,
                      )),
                o
              );
            },
          },
        ],
      )
    );
  })(B.PureComponent);
Da(Ra, "displayName", "PolarAngleAxis");
Da(Ra, "axisType", "angleAxis");
Da(Ra, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0,
});
var zI = gh,
  qI = zI(Object.getPrototypeOf, Object),
  KI = qI,
  GI = Kn,
  HI = KI,
  XI = Rr,
  VI = "[object Object]",
  YI = Function.prototype,
  ZI = Object.prototype,
  hv = YI.toString,
  JI = ZI.hasOwnProperty,
  QI = hv.call(Object);
function ek(e) {
  if (!XI(e) || GI(e) != VI) return !1;
  var t = HI(e);
  if (t === null) return !0;
  var r = JI.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && hv.call(r) == QI;
}
var tk = ek;
const rk = Ae(tk);
var nk = Kn,
  ik = Rr,
  ak = "[object Boolean]";
function ok(e) {
  return e === !0 || e === !1 || (ik(e) && nk(e) == ak);
}
var uk = ok;
const ck = Ae(uk);
function Dn(e) {
  "@babel/helpers - typeof";
  return (
    (Dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dn(e)
  );
}
function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ji.apply(this, arguments)
  );
}
function lk(e, t) {
  return hk(e) || pk(e, t) || fk(e, t) || sk();
}
function sk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fk(e, t) {
  if (e) {
    if (typeof e == "string") return Lf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Lf(e, t);
  }
}
function Lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pk(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function hk(e) {
  if (Array.isArray(e)) return e;
}
function Ff(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ff(Object(r), !0).forEach(function (n) {
          dk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ff(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function dk(e, t, r) {
  return (
    (t = vk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vk(e) {
  var t = yk(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function yk(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Uf = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  mk = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  gk = function (t) {
    var r = Wf(Wf({}, mk), t),
      n = B.useRef(),
      i = B.useState(-1),
      a = lk(i, 2),
      o = a[0],
      u = a[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var x = n.current.getTotalLength();
          x && u(x);
        } catch {}
    }, []);
    var c = r.x,
      l = r.y,
      f = r.upperWidth,
      s = r.lowerWidth,
      p = r.height,
      h = r.className,
      v = r.animationEasing,
      d = r.animationDuration,
      y = r.animationBegin,
      b = r.isUpdateAnimationActive;
    if (
      c !== +c ||
      l !== +l ||
      f !== +f ||
      s !== +s ||
      p !== +p ||
      (f === 0 && s === 0) ||
      p === 0
    )
      return null;
    var w = J("recharts-trapezoid", h);
    return b
      ? P.createElement(
          mt,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: l },
            to: { upperWidth: f, lowerWidth: s, height: p, x: c, y: l },
            duration: d,
            animationEasing: v,
            isActive: b,
          },
          function (x) {
            var O = x.upperWidth,
              m = x.lowerWidth,
              g = x.height,
              A = x.x,
              S = x.y;
            return P.createElement(
              mt,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: y,
                duration: d,
                easing: v,
              },
              P.createElement(
                "path",
                Ji({}, G(r, !0), {
                  className: w,
                  d: Uf(A, S, O, m, g),
                  ref: n,
                }),
              ),
            );
          },
        )
      : P.createElement(
          "g",
          null,
          P.createElement(
            "path",
            Ji({}, G(r, !0), { className: w, d: Uf(c, l, f, s, p) }),
          ),
        );
  },
  bk = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function Rn(e) {
  "@babel/helpers - typeof";
  return (
    (Rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Rn(e)
  );
}
function xk(e, t) {
  if (e == null) return {};
  var r = wk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function wk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zf(Object(r), !0).forEach(function (n) {
          Ok(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ok(e, t, r) {
  return (
    (t = Ak(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ak(e) {
  var t = Pk(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function Pk(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sk(e, t) {
  return Qi(Qi({}, t), e);
}
function _k(e, t) {
  return e === "symbols";
}
function qf(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return P.createElement(Mc, r);
    case "trapezoid":
      return P.createElement(gk, r);
    case "sector":
      return P.createElement(Jd, r);
    case "symbols":
      if (_k(t)) return P.createElement(Vu, r);
      break;
    default:
      return null;
  }
}
function $k(e) {
  return B.isValidElement(e) ? e.props : e;
}
function dv(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? Sk : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    c = xk(e, bk),
    l;
  if (B.isValidElement(t)) l = B.cloneElement(t, Qi(Qi({}, c), $k(t)));
  else if (V(t)) l = t(c);
  else if (rk(t) && !ck(t)) {
    var f = i(t, c);
    l = P.createElement(qf, { shapeType: r, elementProps: f });
  } else {
    var s = c;
    l = P.createElement(qf, { shapeType: r, elementProps: s });
  }
  return u ? P.createElement(ne, { className: o }, l) : l;
}
function Ba(e, t) {
  return t != null && "trapezoids" in e.props;
}
function La(e, t) {
  return t != null && "sectors" in e.props;
}
function Bn(e, t) {
  return t != null && "points" in e.props;
}
function Tk(e, t) {
  var r,
    n,
    i =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return i && a;
}
function Ek(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function jk(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function Mk(e, t) {
  var r;
  return (Ba(e, t) ? (r = Tk) : La(e, t) ? (r = Ek) : Bn(e, t) && (r = jk), r);
}
function Ik(e, t) {
  var r;
  return (
    Ba(e, t)
      ? (r = "trapezoids")
      : La(e, t)
        ? (r = "sectors")
        : Bn(e, t) && (r = "points"),
    r
  );
}
function kk(e, t) {
  if (Ba(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (La(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Bn(e, t) ? t.payload : {};
}
function Ck(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = Ik(r, t),
    a = kk(r, t),
    o = n.filter(function (c, l) {
      var f = ja(a, c),
        s = r.props[i].filter(function (v) {
          var d = Mk(r, t);
          return d(v, t);
        }),
        p = r.props[i].indexOf(s[s.length - 1]),
        h = l === p;
      return f && h;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var di;
function Pr(e) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pr(e)
  );
}
function or() {
  return (
    (or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    or.apply(this, arguments)
  );
}
function Kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kf(Object(r), !0).forEach(function (n) {
          Ke(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Nk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yv(n.key), n));
  }
}
function Dk(e, t, r) {
  return (
    t && Gf(e.prototype, t),
    r && Gf(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Rk(e, t, r) {
  return (
    (t = ea(t)),
    Bk(
      e,
      vv() ? Reflect.construct(t, r || [], ea(e).constructor) : t.apply(e, r),
    )
  );
}
function Bk(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Lk(e);
}
function Lk(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (vv = function () {
    return !!e;
  })();
}
function ea(e) {
  return (
    (ea = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ea(e)
  );
}
function Fk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ou(e, t));
}
function Ou(e, t) {
  return (
    (Ou = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ou(e, t)
  );
}
function Ke(e, t, r) {
  return (
    (t = yv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function yv(e) {
  var t = Wk(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Wk(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var jt = (function (e) {
  function t(r) {
    var n;
    return (
      Nk(this, t),
      (n = Rk(this, t, [r])),
      Ke(n, "pieRef", null),
      Ke(n, "sectorRefs", []),
      Ke(n, "id", Hn("recharts-pie-")),
      Ke(n, "handleAnimationEnd", function () {
        var i = n.props.onAnimationEnd;
        (n.setState({ isAnimationFinished: !0 }), V(i) && i());
      }),
      Ke(n, "handleAnimationStart", function () {
        var i = n.props.onAnimationStart;
        (n.setState({ isAnimationFinished: !1 }), V(i) && i());
      }),
      (n.state = {
        isAnimationFinished: !r.isAnimationActive,
        prevIsAnimationActive: r.isAnimationActive,
        prevAnimationId: r.animationId,
        sectorToFocus: 0,
      }),
      n
    );
  }
  return (
    Fk(t, e),
    Dk(
      t,
      [
        {
          key: "isActiveIndex",
          value: function (n) {
            var i = this.props.activeIndex;
            return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
          },
        },
        {
          key: "hasActiveIndex",
          value: function () {
            var n = this.props.activeIndex;
            return Array.isArray(n) ? n.length !== 0 : n || n === 0;
          },
        },
        {
          key: "renderLabels",
          value: function (n) {
            var i = this.props.isAnimationActive;
            if (i && !this.state.isAnimationFinished) return null;
            var a = this.props,
              o = a.label,
              u = a.labelLine,
              c = a.dataKey,
              l = a.valueKey,
              f = G(this.props, !1),
              s = G(o, !1),
              p = G(u, !1),
              h = (o && o.offsetRadius) || 20,
              v = n.map(function (d, y) {
                var b = (d.startAngle + d.endAngle) / 2,
                  w = ce(d.cx, d.cy, d.outerRadius + h, b),
                  x = oe(
                    oe(oe(oe({}, f), d), {}, { stroke: "none" }, s),
                    {},
                    { index: y, textAnchor: t.getTextAnchor(w.x, d.cx) },
                    w,
                  ),
                  O = oe(
                    oe(
                      oe(oe({}, f), d),
                      {},
                      { fill: "none", stroke: d.fill },
                      p,
                    ),
                    {},
                    { index: y, points: [ce(d.cx, d.cy, d.outerRadius, b), w] },
                  ),
                  m = c;
                return (
                  Q(c) && Q(l) ? (m = "value") : Q(c) && (m = l),
                  P.createElement(
                    ne,
                    {
                      key: "label-"
                        .concat(d.startAngle, "-")
                        .concat(d.endAngle, "-")
                        .concat(d.midAngle, "-")
                        .concat(y),
                    },
                    u && t.renderLabelLineItem(u, O, "line"),
                    t.renderLabelItem(o, x, Ee(d, m)),
                  )
                );
              });
            return P.createElement(ne, { className: "recharts-pie-labels" }, v);
          },
        },
        {
          key: "renderSectorsStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.activeShape,
              u = a.blendStroke,
              c = a.inactiveShape;
            return n.map(function (l, f) {
              if (
                (l == null ? void 0 : l.startAngle) === 0 &&
                (l == null ? void 0 : l.endAngle) === 0 &&
                n.length !== 1
              )
                return null;
              var s = i.isActiveIndex(f),
                p = c && i.hasActiveIndex() ? c : null,
                h = s ? o : p,
                v = oe(
                  oe({}, l),
                  {},
                  { stroke: u ? l.fill : l.stroke, tabIndex: -1 },
                );
              return P.createElement(
                ne,
                or(
                  {
                    ref: function (y) {
                      y && !i.sectorRefs.includes(y) && i.sectorRefs.push(y);
                    },
                    tabIndex: -1,
                    className: "recharts-pie-sector",
                  },
                  Gt(i.props, l, f),
                  {
                    key: "sector-"
                      .concat(l == null ? void 0 : l.startAngle, "-")
                      .concat(l == null ? void 0 : l.endAngle, "-")
                      .concat(l.midAngle, "-")
                      .concat(f),
                  },
                ),
                P.createElement(
                  dv,
                  or({ option: h, isActive: s, shapeType: "sector" }, v),
                ),
              );
            });
          },
        },
        {
          key: "renderSectorsWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.sectors,
              o = i.isAnimationActive,
              u = i.animationBegin,
              c = i.animationDuration,
              l = i.animationEasing,
              f = i.animationId,
              s = this.state,
              p = s.prevSectors,
              h = s.prevIsAnimationActive;
            return P.createElement(
              mt,
              {
                begin: u,
                duration: c,
                isActive: o,
                easing: l,
                from: { t: 0 },
                to: { t: 1 },
                key: "pie-".concat(f, "-").concat(h),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd,
              },
              function (v) {
                var d = v.t,
                  y = [],
                  b = a && a[0],
                  w = b.startAngle;
                return (
                  a.forEach(function (x, O) {
                    var m = p && p[O],
                      g = O > 0 ? tt(x, "paddingAngle", 0) : 0;
                    if (m) {
                      var A = xt(
                          m.endAngle - m.startAngle,
                          x.endAngle - x.startAngle,
                        ),
                        S = oe(
                          oe({}, x),
                          {},
                          { startAngle: w + g, endAngle: w + A(d) + g },
                        );
                      (y.push(S), (w = S.endAngle));
                    } else {
                      var _ = x.endAngle,
                        E = x.startAngle,
                        $ = xt(0, _ - E),
                        T = $(d),
                        M = oe(
                          oe({}, x),
                          {},
                          { startAngle: w + g, endAngle: w + T + g },
                        );
                      (y.push(M), (w = M.endAngle));
                    }
                  }),
                  P.createElement(ne, null, n.renderSectorsStatically(y))
                );
              },
            );
          },
        },
        {
          key: "attachKeyboardHandlers",
          value: function (n) {
            var i = this;
            n.onkeydown = function (a) {
              if (!a.altKey)
                switch (a.key) {
                  case "ArrowLeft": {
                    var o = ++i.state.sectorToFocus % i.sectorRefs.length;
                    (i.sectorRefs[o].focus(), i.setState({ sectorToFocus: o }));
                    break;
                  }
                  case "ArrowRight": {
                    var u =
                      --i.state.sectorToFocus < 0
                        ? i.sectorRefs.length - 1
                        : i.state.sectorToFocus % i.sectorRefs.length;
                    (i.sectorRefs[u].focus(), i.setState({ sectorToFocus: u }));
                    break;
                  }
                  case "Escape": {
                    (i.sectorRefs[i.state.sectorToFocus].blur(),
                      i.setState({ sectorToFocus: 0 }));
                    break;
                  }
                }
            };
          },
        },
        {
          key: "renderSectors",
          value: function () {
            var n = this.props,
              i = n.sectors,
              a = n.isAnimationActive,
              o = this.state.prevSectors;
            return a && i && i.length && (!o || !ja(o, i))
              ? this.renderSectorsWithAnimation()
              : this.renderSectorsStatically(i);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.pieRef && this.attachKeyboardHandlers(this.pieRef);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.hide,
              o = i.sectors,
              u = i.className,
              c = i.label,
              l = i.cx,
              f = i.cy,
              s = i.innerRadius,
              p = i.outerRadius,
              h = i.isAnimationActive,
              v = this.state.isAnimationFinished;
            if (a || !o || !o.length || !R(l) || !R(f) || !R(s) || !R(p))
              return null;
            var d = J("recharts-pie", u);
            return P.createElement(
              ne,
              {
                tabIndex: this.props.rootTabIndex,
                className: d,
                ref: function (b) {
                  n.pieRef = b;
                },
              },
              this.renderSectors(),
              c && this.renderLabels(o),
              _e.renderCallByParent(this.props, null, !1),
              (!h || v) && St.renderCallByParent(this.props, o, !1),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return i.prevIsAnimationActive !== n.isAnimationActive
              ? {
                  prevIsAnimationActive: n.isAnimationActive,
                  prevAnimationId: n.animationId,
                  curSectors: n.sectors,
                  prevSectors: [],
                  isAnimationFinished: !0,
                }
              : n.isAnimationActive && n.animationId !== i.prevAnimationId
                ? {
                    prevAnimationId: n.animationId,
                    curSectors: n.sectors,
                    prevSectors: i.curSectors,
                    isAnimationFinished: !0,
                  }
                : n.sectors !== i.curSectors
                  ? { curSectors: n.sectors, isAnimationFinished: !0 }
                  : null;
          },
        },
        {
          key: "getTextAnchor",
          value: function (n, i) {
            return n > i ? "start" : n < i ? "end" : "middle";
          },
        },
        {
          key: "renderLabelLineItem",
          value: function (n, i, a) {
            if (P.isValidElement(n)) return P.cloneElement(n, i);
            if (V(n)) return n(i);
            var o = J(
              "recharts-pie-label-line",
              typeof n != "boolean" ? n.className : "",
            );
            return P.createElement(
              uu,
              or({}, i, { key: a, type: "linear", className: o }),
            );
          },
        },
        {
          key: "renderLabelItem",
          value: function (n, i, a) {
            if (P.isValidElement(n)) return P.cloneElement(n, i);
            var o = a;
            if (V(n) && ((o = n(i)), P.isValidElement(o))) return o;
            var u = J(
              "recharts-pie-label-text",
              typeof n != "boolean" && !V(n) ? n.className : "",
            );
            return P.createElement(
              Ht,
              or({}, i, { alignmentBaseline: "middle", className: u }),
              o,
            );
          },
        },
      ],
    )
  );
})(B.PureComponent);
di = jt;
Ke(jt, "displayName", "Pie");
Ke(jt, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Wr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0,
});
Ke(jt, "parseDeltaAngle", function (e, t) {
  var r = Ie(t - e),
    n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Ke(jt, "getRealPieData", function (e) {
  var t = e.data,
    r = e.children,
    n = G(e, !1),
    i = Je(r, ac);
  return t && t.length
    ? t.map(function (a, o) {
        return oe(oe(oe({ payload: a }, n), a), i && i[o] && i[o].props);
      })
    : i && i.length
      ? i.map(function (a) {
          return oe(oe({}, n), a.props);
        })
      : [];
});
Ke(jt, "parseCoordinateOfPie", function (e, t) {
  var r = t.top,
    n = t.left,
    i = t.width,
    a = t.height,
    o = Xd(i, a),
    u = n + ke(e.cx, i, i / 2),
    c = r + ke(e.cy, a, a / 2),
    l = ke(e.innerRadius, o, 0),
    f = ke(e.outerRadius, o, o * 0.8),
    s = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return { cx: u, cy: c, innerRadius: l, outerRadius: f, maxRadius: s };
});
Ke(jt, "getComposedData", function (e) {
  var t = e.item,
    r = e.offset,
    n =
      t.type.defaultProps !== void 0
        ? oe(oe({}, t.type.defaultProps), t.props)
        : t.props,
    i = di.getRealPieData(n);
  if (!i || !i.length) return null;
  var a = n.cornerRadius,
    o = n.startAngle,
    u = n.endAngle,
    c = n.paddingAngle,
    l = n.dataKey,
    f = n.nameKey,
    s = n.valueKey,
    p = n.tooltipType,
    h = Math.abs(n.minAngle),
    v = di.parseCoordinateOfPie(n, r),
    d = di.parseDeltaAngle(o, u),
    y = Math.abs(d),
    b = l;
  Q(l) && Q(s)
    ? (_t(
        !1,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      ),
      (b = "value"))
    : Q(l) &&
      (_t(
        !1,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      ),
      (b = s));
  var w = i.filter(function (S) {
      return Ee(S, b, 0) !== 0;
    }).length,
    x = (y >= 360 ? w : w - 1) * c,
    O = y - w * h - x,
    m = i.reduce(function (S, _) {
      var E = Ee(_, b, 0);
      return S + (R(E) ? E : 0);
    }, 0),
    g;
  if (m > 0) {
    var A;
    g = i.map(function (S, _) {
      var E = Ee(S, b, 0),
        $ = Ee(S, f, _),
        T = (R(E) ? E : 0) / m,
        M;
      _ ? (M = A.endAngle + Ie(d) * c * (E !== 0 ? 1 : 0)) : (M = o);
      var I = M + Ie(d) * ((E !== 0 ? h : 0) + T * O),
        k = (M + I) / 2,
        N = (v.innerRadius + v.outerRadius) / 2,
        D = [{ name: $, value: E, payload: S, dataKey: b, type: p }],
        L = ce(v.cx, v.cy, N, k);
      return (
        (A = oe(
          oe(
            oe(
              {
                percent: T,
                cornerRadius: a,
                name: $,
                tooltipPayload: D,
                midAngle: k,
                middleRadius: N,
                tooltipPosition: L,
              },
              S,
            ),
            v,
          ),
          {},
          {
            value: Ee(S, b),
            startAngle: M,
            endAngle: I,
            payload: S,
            paddingAngle: Ie(d) * c,
          },
        )),
        A
      );
    });
  }
  return oe(oe({}, v), {}, { sectors: g, data: i });
});
var Uk = Math.ceil,
  zk = Math.max;
function qk(e, t, r, n) {
  for (var i = -1, a = zk(Uk((t - e) / (r || 1)), 0), o = Array(a); a--; )
    ((o[n ? a : ++i] = e), (e += r));
  return o;
}
var Kk = qk,
  Gk = hy,
  Hf = 1 / 0,
  Hk = 17976931348623157e292;
function Xk(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = Gk(e)), e === Hf || e === -Hf)) {
    var t = e < 0 ? -1 : 1;
    return t * Hk;
  }
  return e === e ? e : 0;
}
var mv = Xk,
  Vk = Kk,
  Yk = xa,
  fo = mv;
function Zk(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && Yk(t, r, n) && (r = n = void 0),
      (t = fo(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = fo(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : fo(n)),
      Vk(t, r, n, e)
    );
  };
}
var Jk = Zk,
  Qk = Jk,
  e2 = Qk(),
  t2 = e2;
const ta = Ae(t2);
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
function Xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xf(Object(r), !0).forEach(function (n) {
          gv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gv(e, t, r) {
  return (
    (t = r2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function r2(e) {
  var t = n2(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function n2(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var i2 = ["Webkit", "Moz", "O", "ms"],
  a2 = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = i2.reduce(function (a, o) {
        return Vf(Vf({}, a), {}, gv({}, o + n, r));
      }, {});
    return ((i[t] = r), i);
  };
function Sr(e) {
  "@babel/helpers - typeof";
  return (
    (Sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sr(e)
  );
}
function ra() {
  return (
    (ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ra.apply(this, arguments)
  );
}
function Yf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yf(Object(r), !0).forEach(function (n) {
          Le(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function o2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xv(n.key), n));
  }
}
function u2(e, t, r) {
  return (
    t && Zf(e.prototype, t),
    r && Zf(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function c2(e, t, r) {
  return (
    (t = na(t)),
    l2(
      e,
      bv() ? Reflect.construct(t, r || [], na(e).constructor) : t.apply(e, r),
    )
  );
}
function l2(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return s2(e);
}
function s2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (bv = function () {
    return !!e;
  })();
}
function na(e) {
  return (
    (na = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    na(e)
  );
}
function f2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Au(e, t));
}
function Au(e, t) {
  return (
    (Au = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Au(e, t)
  );
}
function Le(e, t, r) {
  return (
    (t = xv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xv(e) {
  var t = p2(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function p2(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var h2 = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var c = r.length,
      l = on()
        .domain(ta(0, c))
        .range([a, a + o - u]),
      f = l.domain().map(function (s) {
        return l(s);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: l(n),
      endX: l(i),
      scale: l,
      scaleValues: f,
    };
  },
  Jf = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  _r = (function (e) {
    function t(r) {
      var n;
      return (
        o2(this, t),
        (n = c2(this, t, [r])),
        Le(n, "handleDrag", function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        Le(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        Le(n, "handleDragEnd", function () {
          (n.setState(
            { isTravellerMoving: !1, isSlideMoving: !1 },
            function () {
              var i = n.props,
                a = i.endIndex,
                o = i.onDragEnd,
                u = i.startIndex;
              o == null || o({ endIndex: a, startIndex: u });
            },
          ),
            n.detachDragEndListener());
        }),
        Le(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        Le(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        Le(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        Le(n, "handleSlideDragStart", function (i) {
          var a = Jf(i) ? i.changedTouches[0] : i;
          (n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      f2(t, e),
      u2(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              (this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                c = u.gap,
                l = u.data,
                f = l.length - 1,
                s = Math.min(i, a),
                p = Math.max(i, a),
                h = t.getIndexInRange(o, s),
                v = t.getIndexInRange(o, p);
              return {
                startIndex: h - (h % c),
                endIndex: v === f ? f : v - (v % c),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                c = Ee(a[n], u, n);
              return V(o) ? o(c, n) : c;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              (window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                c = this.props,
                l = c.x,
                f = c.width,
                s = c.travellerWidth,
                p = c.startIndex,
                h = c.endIndex,
                v = c.onChange,
                d = n.pageX - a;
              d > 0
                ? (d = Math.min(d, l + f - s - u, l + f - s - o))
                : d < 0 && (d = Math.max(d, l - o, l - u));
              var y = this.getIndex({ startX: o + d, endX: u + d });
              ((y.startIndex !== p || y.endIndex !== h) && v && v(y),
                this.setState({
                  startX: o + d,
                  endX: u + d,
                  slideMoveStartX: n.pageX,
                }));
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = Jf(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                c = i.startX,
                l = this.state[o],
                f = this.props,
                s = f.x,
                p = f.width,
                h = f.travellerWidth,
                v = f.onChange,
                d = f.gap,
                y = f.data,
                b = { startX: this.state.startX, endX: this.state.endX },
                w = n.pageX - a;
              (w > 0
                ? (w = Math.min(w, s + p - h - l))
                : w < 0 && (w = Math.max(w, s - l)),
                (b[o] = l + w));
              var x = this.getIndex(b),
                O = x.startIndex,
                m = x.endIndex,
                g = function () {
                  var S = y.length - 1;
                  return (
                    (o === "startX" && (u > c ? O % d === 0 : m % d === 0)) ||
                    (u < c && m === S) ||
                    (o === "endX" && (u > c ? m % d === 0 : O % d === 0)) ||
                    (u > c && m === S)
                  );
                };
              this.setState(
                Le(Le({}, o, l + w), "brushMoveStartX", n.pageX),
                function () {
                  v && g() && v(x);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                c = o.startX,
                l = o.endX,
                f = this.state[i],
                s = u.indexOf(f);
              if (s !== -1) {
                var p = s + n;
                if (!(p === -1 || p >= u.length)) {
                  var h = u[p];
                  (i === "startX" && h >= l) ||
                    (i === "endX" && h <= c) ||
                    this.setState(Le({}, i, h), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.fill,
                l = n.stroke;
              return P.createElement("rect", {
                stroke: l,
                fill: c,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.data,
                l = n.children,
                f = n.padding,
                s = B.Children.only(l);
              return s
                ? P.cloneElement(s, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: c,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                c = this.props,
                l = c.y,
                f = c.travellerWidth,
                s = c.height,
                p = c.traveller,
                h = c.ariaLabel,
                v = c.data,
                d = c.startIndex,
                y = c.endIndex,
                b = Math.max(n, this.props.x),
                w = po(
                  po({}, G(this.props, !1)),
                  {},
                  { x: b, y: l, width: f, height: s },
                ),
                x =
                  h ||
                  "Min value: "
                    .concat(
                      (a = v[d]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = v[y]) === null || o === void 0 ? void 0 : o.name,
                    );
              return P.createElement(
                ne,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": x,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (m) {
                    ["ArrowLeft", "ArrowRight"].includes(m.key) &&
                      (m.preventDefault(),
                      m.stopPropagation(),
                      u.handleTravellerMoveKeyboard(
                        m.key === "ArrowRight" ? 1 : -1,
                        i,
                      ));
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(p, w),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                c = a.stroke,
                l = a.travellerWidth,
                f = Math.min(n, i) + l,
                s = Math.max(Math.abs(i - n) - l, 0);
              return P.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: c,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: s,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                c = n.travellerWidth,
                l = n.stroke,
                f = this.state,
                s = f.startX,
                p = f.endX,
                h = 5,
                v = { pointerEvents: "none", fill: l };
              return P.createElement(
                ne,
                { className: "recharts-brush-texts" },
                P.createElement(
                  Ht,
                  ra(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(s, p) - h,
                      y: o + u / 2,
                    },
                    v,
                  ),
                  this.getTextOfTick(i),
                ),
                P.createElement(
                  Ht,
                  ra(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(s, p) + c + h,
                      y: o + u / 2,
                    },
                    v,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                c = n.y,
                l = n.width,
                f = n.height,
                s = n.alwaysShowText,
                p = this.state,
                h = p.startX,
                v = p.endX,
                d = p.isTextActive,
                y = p.isSlideMoving,
                b = p.isTravellerMoving,
                w = p.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !R(u) ||
                !R(c) ||
                !R(l) ||
                !R(f) ||
                l <= 0 ||
                f <= 0
              )
                return null;
              var x = J("recharts-brush", a),
                O = P.Children.count(o) === 1,
                m = a2("userSelect", "none");
              return P.createElement(
                ne,
                {
                  className: x,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: m,
                },
                this.renderBackground(),
                O && this.renderPanorama(),
                this.renderSlide(h, v),
                this.renderTravellerLayer(h, "startX"),
                this.renderTravellerLayer(v, "endX"),
                (d || y || b || w || s) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.stroke,
                l = Math.floor(a + u / 2) - 1;
              return P.createElement(
                P.Fragment,
                null,
                P.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: c,
                  stroke: "none",
                }),
                P.createElement("line", {
                  x1: i + 1,
                  y1: l,
                  x2: i + o - 1,
                  y2: l,
                  fill: "none",
                  stroke: "#fff",
                }),
                P.createElement("line", {
                  x1: i + 1,
                  y1: l + 2,
                  x2: i + o - 1,
                  y2: l + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                P.isValidElement(n)
                  ? (a = P.cloneElement(n, i))
                  : V(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                c = n.travellerWidth,
                l = n.updateId,
                f = n.startIndex,
                s = n.endIndex;
              if (a !== i.prevData || l !== i.prevUpdateId)
                return po(
                  {
                    prevData: a,
                    prevTravellerWidth: c,
                    prevUpdateId: l,
                    prevX: u,
                    prevWidth: o,
                  },
                  a && a.length
                    ? h2({
                        data: a,
                        width: o,
                        x: u,
                        travellerWidth: c,
                        startIndex: f,
                        endIndex: s,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  u !== i.prevX ||
                  c !== i.prevTravellerWidth)
              ) {
                i.scale.range([u, u + o - c]);
                var p = i.scale.domain().map(function (h) {
                  return i.scale(h);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: c,
                  prevUpdateId: l,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: p,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var c = Math.floor((o + u) / 2);
                n[c] > i ? (u = c) : (o = c);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(B.PureComponent);
Le(_r, "displayName", "Brush");
Le(_r, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var d2 = rc;
function v2(e, t) {
  var r;
  return (
    d2(e, function (n, i, a) {
      return ((r = t(n, i, a)), !r);
    }),
    !!r
  );
}
var y2 = v2,
  m2 = sh,
  g2 = ot,
  b2 = y2,
  x2 = at,
  w2 = xa;
function O2(e, t, r) {
  var n = x2(e) ? m2 : b2;
  return (r && w2(e, t, r) && (t = void 0), n(e, g2(t)));
}
var A2 = O2;
const P2 = Ae(A2);
var nt = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return (n && (i = "extendDomain"), i === r);
  },
  Qf = Ih;
function S2(e, t, r) {
  t == "__proto__" && Qf
    ? Qf(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var _2 = S2,
  $2 = _2,
  T2 = jh,
  E2 = ot;
function j2(e, t) {
  var r = {};
  return (
    (t = E2(t)),
    T2(e, function (n, i, a) {
      $2(r, i, t(n, i, a));
    }),
    r
  );
}
var M2 = j2;
const I2 = Ae(M2);
function k2(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var C2 = k2,
  N2 = rc;
function D2(e, t) {
  var r = !0;
  return (
    N2(e, function (n, i, a) {
      return ((r = !!t(n, i, a)), r);
    }),
    r
  );
}
var R2 = D2,
  B2 = C2,
  L2 = R2,
  F2 = ot,
  W2 = at,
  U2 = xa;
function z2(e, t, r) {
  var n = W2(e) ? B2 : L2;
  return (r && U2(e, t, r) && (t = void 0), n(e, F2(t)));
}
var q2 = z2;
const wv = Ae(q2);
var K2 = ["x", "y"];
function Fn(e) {
  "@babel/helpers - typeof";
  return (
    (Fn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fn(e)
  );
}
function Pu() {
  return (
    (Pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Pu.apply(this, arguments)
  );
}
function ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ep(Object(r), !0).forEach(function (n) {
          G2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ep(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G2(e, t, r) {
  return (
    (t = H2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function H2(e) {
  var t = X2(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function X2(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V2(e, t) {
  if (e == null) return {};
  var r = Y2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Y2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Z2(e, t) {
  var r = e.x,
    n = e.y,
    i = V2(e, K2),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    c = parseInt(u, 10),
    l = "".concat(t.height || i.height),
    f = parseInt(l, 10),
    s = "".concat(t.width || i.width),
    p = parseInt(s, 10);
  return tn(
    tn(tn(tn(tn({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: f, width: p, name: t.name, radius: t.radius },
  );
}
function tp(e) {
  return P.createElement(
    dv,
    Pu(
      {
        shapeType: "rectangle",
        propTransformer: Z2,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var J2 = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = R(n) || dy(n);
      return a ? t(n, i) : (a || Vt(), r);
    };
  },
  Q2 = ["value", "background"],
  Ov;
function $r(e) {
  "@babel/helpers - typeof";
  return (
    ($r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $r(e)
  );
}
function eC(e, t) {
  if (e == null) return {};
  var r = tC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function tC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ia.apply(this, arguments)
  );
}
function rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rp(Object(r), !0).forEach(function (n) {
          At(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function np(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Pv(n.key), n));
  }
}
function nC(e, t, r) {
  return (
    t && np(e.prototype, t),
    r && np(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function iC(e, t, r) {
  return (
    (t = aa(t)),
    aC(
      e,
      Av() ? Reflect.construct(t, r || [], aa(e).constructor) : t.apply(e, r),
    )
  );
}
function aC(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return oC(e);
}
function oC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Av() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Av = function () {
    return !!e;
  })();
}
function aa(e) {
  return (
    (aa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    aa(e)
  );
}
function uC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Su(e, t));
}
function Su(e, t) {
  return (
    (Su = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Su(e, t)
  );
}
function At(e, t, r) {
  return (
    (t = Pv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Pv(e) {
  var t = cC(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function cC(e, t) {
  if ($r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kr = (function (e) {
  function t() {
    var r;
    rC(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = iC(this, t, [].concat(i))),
      At(r, "state", { isAnimationFinished: !1 }),
      At(r, "id", Hn("recharts-bar-")),
      At(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      At(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    uC(t, e),
    nC(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              c = a.activeIndex,
              l = a.activeBar,
              f = G(this.props, !1);
            return (
              n &&
              n.map(function (s, p) {
                var h = p === c,
                  v = h ? l : o,
                  d = ye(
                    ye(ye({}, f), s),
                    {},
                    {
                      isActive: h,
                      option: v,
                      index: p,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return P.createElement(
                  ne,
                  ia(
                    { className: "recharts-bar-rectangle" },
                    Gt(i.props, s, p),
                    {
                      key: "rectangle-"
                        .concat(s == null ? void 0 : s.x, "-")
                        .concat(s == null ? void 0 : s.y, "-")
                        .concat(s == null ? void 0 : s.value, "-")
                        .concat(p),
                    },
                  ),
                  P.createElement(tp, d),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              c = i.animationBegin,
              l = i.animationDuration,
              f = i.animationEasing,
              s = i.animationId,
              p = this.state.prevData;
            return P.createElement(
              mt,
              {
                begin: c,
                duration: l,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(s),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (h) {
                var v = h.t,
                  d = a.map(function (y, b) {
                    var w = p && p[b];
                    if (w) {
                      var x = xt(w.x, y.x),
                        O = xt(w.y, y.y),
                        m = xt(w.width, y.width),
                        g = xt(w.height, y.height);
                      return ye(
                        ye({}, y),
                        {},
                        { x: x(v), y: O(v), width: m(v), height: g(v) },
                      );
                    }
                    if (o === "horizontal") {
                      var A = xt(0, y.height),
                        S = A(v);
                      return ye(
                        ye({}, y),
                        {},
                        { y: y.y + y.height - S, height: S },
                      );
                    }
                    var _ = xt(0, y.width),
                      E = _(v);
                    return ye(ye({}, y), {}, { width: E });
                  });
                return P.createElement(
                  ne,
                  null,
                  n.renderRectanglesStatically(d),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !ja(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              c = G(this.props.background, !1);
            return a.map(function (l, f) {
              l.value;
              var s = l.background,
                p = eC(l, Q2);
              if (!s) return null;
              var h = ye(
                ye(
                  ye(ye(ye({}, p), {}, { fill: "#eee" }, s), c),
                  Gt(n.props, l, f),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return P.createElement(
                tp,
                ia(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  h,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              c = a.yAxis,
              l = a.layout,
              f = a.children,
              s = Je(f, ka);
            if (!s) return null;
            var p = l === "vertical" ? o[0].height / 2 : o[0].width / 2,
              h = function (y, b) {
                var w = Array.isArray(y.value) ? y.value[1] : y.value;
                return { x: y.x, y: y.y, value: w, errorVal: Ee(y, b) };
              },
              v = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return P.createElement(
              ne,
              v,
              s.map(function (d) {
                return P.cloneElement(d, {
                  key: "error-bar-".concat(i, "-").concat(d.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: c,
                  layout: l,
                  offset: p,
                  dataPointFormatter: h,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              c = n.yAxis,
              l = n.left,
              f = n.top,
              s = n.width,
              p = n.height,
              h = n.isAnimationActive,
              v = n.background,
              d = n.id;
            if (i || !a || !a.length) return null;
            var y = this.state.isAnimationFinished,
              b = J("recharts-bar", o),
              w = u && u.allowDataOverflow,
              x = c && c.allowDataOverflow,
              O = w || x,
              m = Q(d) ? this.id : d;
            return P.createElement(
              ne,
              { className: b },
              w || x
                ? P.createElement(
                    "defs",
                    null,
                    P.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(m) },
                      P.createElement("rect", {
                        x: w ? l : l - s / 2,
                        y: x ? f : f - p / 2,
                        width: w ? s : s * 2,
                        height: x ? p : p * 2,
                      }),
                    ),
                  )
                : null,
              P.createElement(
                ne,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: O ? "url(#clipPath-".concat(m, ")") : null,
                },
                v ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(O, m),
              (!h || y) && St.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: i.curData,
                }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(B.PureComponent);
Ov = Kr;
At(Kr, "displayName", "Bar");
At(Kr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Wr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
At(Kr, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    c = e.yAxisTicks,
    l = e.stackedData,
    f = e.dataStartIndex,
    s = e.displayedData,
    p = e.offset,
    h = UT(n, r);
  if (!h) return null;
  var v = t.layout,
    d = r.type.defaultProps,
    y = d !== void 0 ? ye(ye({}, d), r.props) : r.props,
    b = y.dataKey,
    w = y.children,
    x = y.minPointSize,
    O = v === "horizontal" ? o : a,
    m = l ? O.scale.domain() : null,
    g = VT({ numericAxis: O }),
    A = Je(w, ac),
    S = s.map(function (_, E) {
      var $, T, M, I, k, N;
      l
        ? ($ = zT(l[f + E], m))
        : (($ = Ee(_, b)), Array.isArray($) || ($ = [g, $]));
      var D = J2(x, Ov.defaultProps.minPointSize)($[1], E);
      if (v === "horizontal") {
        var L,
          F = [o.scale($[0]), o.scale($[1])],
          q = F[0],
          H = F[1];
        ((T = Ks({
          axis: a,
          ticks: u,
          bandSize: i,
          offset: h.offset,
          entry: _,
          index: E,
        })),
          (M = (L = H ?? q) !== null && L !== void 0 ? L : void 0),
          (I = h.size));
        var z = q - H;
        if (
          ((k = Number.isNaN(z) ? 0 : z),
          (N = { x: T, y: o.y, width: I, height: o.height }),
          Math.abs(D) > 0 && Math.abs(k) < Math.abs(D))
        ) {
          var X = Ie(k || D) * (Math.abs(D) - Math.abs(k));
          ((M -= X), (k += X));
        }
      } else {
        var le = [a.scale($[0]), a.scale($[1])],
          ve = le[0],
          Be = le[1];
        if (
          ((T = ve),
          (M = Ks({
            axis: o,
            ticks: c,
            bandSize: i,
            offset: h.offset,
            entry: _,
            index: E,
          })),
          (I = Be - ve),
          (k = h.size),
          (N = { x: a.x, y: M, width: a.width, height: k }),
          Math.abs(D) > 0 && Math.abs(I) < Math.abs(D))
        ) {
          var Mt = Ie(I || D) * (Math.abs(D) - Math.abs(I));
          I += Mt;
        }
      }
      return ye(
        ye(
          ye({}, _),
          {},
          {
            x: T,
            y: M,
            width: I,
            height: k,
            value: l ? $ : $[1],
            payload: _,
            background: N,
          },
          A && A[E] && A[E].props,
        ),
        {},
        {
          tooltipPayload: [Gd(r, _)],
          tooltipPosition: { x: T + I / 2, y: M + k / 2 },
        },
      );
    });
  return ye({ data: S, layout: v }, p);
});
function Wn(e) {
  "@babel/helpers - typeof";
  return (
    (Wn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wn(e)
  );
}
function lC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ip(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Sv(n.key), n));
  }
}
function sC(e, t, r) {
  return (
    t && ip(e.prototype, t),
    r && ip(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ap(Object(r), !0).forEach(function (n) {
          Fa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ap(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Fa(e, t, r) {
  return (
    (t = Sv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Sv(e) {
  var t = fC(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function fC(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pC = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      c = t.layout,
      l = t.children,
      f = Object.keys(r),
      s = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      p = !!Fe(l, Kr);
    return f.reduce(function (h, v) {
      var d = r[v],
        y = d.orientation,
        b = d.domain,
        w = d.padding,
        x = w === void 0 ? {} : w,
        O = d.mirror,
        m = d.reversed,
        g = "".concat(y).concat(O ? "Mirror" : ""),
        A,
        S,
        _,
        E,
        $;
      if (
        d.type === "number" &&
        (d.padding === "gap" || d.padding === "no-gap")
      ) {
        var T = b[1] - b[0],
          M = 1 / 0,
          I = d.categoricalDomain.sort(vy);
        if (
          (I.forEach(function (le, ve) {
            ve > 0 && (M = Math.min((le || 0) - (I[ve - 1] || 0), M));
          }),
          Number.isFinite(M))
        ) {
          var k = M / T,
            N = d.layout === "vertical" ? n.height : n.width;
          if (
            (d.padding === "gap" && (A = (k * N) / 2), d.padding === "no-gap")
          ) {
            var D = ke(t.barCategoryGap, k * N),
              L = (k * N) / 2;
            A = L - D - ((L - D) / N) * D;
          }
        }
      }
      (i === "xAxis"
        ? (S = [
            n.left + (x.left || 0) + (A || 0),
            n.left + n.width - (x.right || 0) - (A || 0),
          ])
        : i === "yAxis"
          ? (S =
              c === "horizontal"
                ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)]
                : [
                    n.top + (x.top || 0) + (A || 0),
                    n.top + n.height - (x.bottom || 0) - (A || 0),
                  ])
          : (S = d.range),
        m && (S = [S[1], S[0]]));
      var F = Ud(d, a, p),
        q = F.scale,
        H = F.realScaleType;
      (q.domain(b).range(S), zd(q));
      var z = qd(q, Ye(Ye({}, d), {}, { realScaleType: H }));
      i === "xAxis"
        ? (($ = (y === "top" && !O) || (y === "bottom" && O)),
          (_ = n.left),
          (E = s[g] - $ * d.height))
        : i === "yAxis" &&
          (($ = (y === "left" && !O) || (y === "right" && O)),
          (_ = s[g] - $ * d.width),
          (E = n.top));
      var X = Ye(
        Ye(Ye({}, d), z),
        {},
        {
          realScaleType: H,
          x: _,
          y: E,
          scale: q,
          width: i === "xAxis" ? n.width : d.width,
          height: i === "yAxis" ? n.height : d.height,
        },
      );
      return (
        (X.bandSize = zi(X, z)),
        !d.hide && i === "xAxis"
          ? (s[g] += ($ ? -1 : 1) * X.height)
          : d.hide || (s[g] += ($ ? -1 : 1) * X.width),
        Ye(Ye({}, h), {}, Fa({}, v, X))
      );
    }, {});
  },
  _v = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  hC = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return _v({ x: r, y: n }, { x: i, y: a });
  },
  $v = (function () {
    function e(t) {
      (lC(this, e), (this.scale = t));
    }
    return sC(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var c = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + c;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Fa($v, "EPS", 1e-4);
var kc = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return Ye(Ye({}, n), {}, Fa({}, i, $v.create(t[i])));
  }, {});
  return Ye(
    Ye({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return I2(i, function (c, l) {
          return r[l].apply(c, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return wv(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function dC(e) {
  return ((e % 180) + 180) % 180;
}
var vC = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = dC(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(c);
  },
  yC = ot,
  mC = Xn,
  gC = ga;
function bC(e) {
  return function (t, r, n) {
    var i = Object(t);
    if (!mC(t)) {
      var a = yC(r);
      ((t = gC(t)),
        (r = function (u) {
          return a(i[u], u, i);
        }));
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var xC = bC,
  wC = mv;
function OC(e) {
  var t = wC(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var AC = OC,
  PC = Ph,
  SC = ot,
  _C = AC,
  $C = Math.max;
function TC(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var i = r == null ? 0 : _C(r);
  return (i < 0 && (i = $C(n + i, 0)), PC(e, SC(t), i));
}
var EC = TC,
  jC = xC,
  MC = EC,
  IC = jC(MC),
  kC = IC;
const CC = Ae(kC);
var NC = yy(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  Cc = B.createContext(void 0),
  Nc = B.createContext(void 0),
  Tv = B.createContext(void 0),
  Ev = B.createContext({}),
  jv = B.createContext(void 0),
  Mv = B.createContext(0),
  Iv = B.createContext(0),
  op = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      c = t.width,
      l = t.height,
      f = NC(a);
    return P.createElement(
      Cc.Provider,
      { value: n },
      P.createElement(
        Nc.Provider,
        { value: i },
        P.createElement(
          Ev.Provider,
          { value: a },
          P.createElement(
            Tv.Provider,
            { value: f },
            P.createElement(
              jv.Provider,
              { value: o },
              P.createElement(
                Mv.Provider,
                { value: l },
                P.createElement(Iv.Provider, { value: c }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  DC = function () {
    return B.useContext(jv);
  },
  kv = function (t) {
    var r = B.useContext(Cc);
    r == null && Vt();
    var n = r[t];
    return (n == null && Vt(), n);
  },
  RC = function () {
    var t = B.useContext(Cc);
    return Ot(t);
  },
  BC = function () {
    var t = B.useContext(Nc),
      r = CC(t, function (n) {
        return wv(n.domain, Number.isFinite);
      });
    return r || Ot(t);
  },
  Cv = function (t) {
    var r = B.useContext(Nc);
    r == null && Vt();
    var n = r[t];
    return (n == null && Vt(), n);
  },
  LC = function () {
    var t = B.useContext(Tv);
    return t;
  },
  FC = function () {
    return B.useContext(Ev);
  },
  Dc = function () {
    return B.useContext(Iv);
  },
  Rc = function () {
    return B.useContext(Mv);
  };
function Tr(e) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
function WC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dv(n.key), n));
  }
}
function zC(e, t, r) {
  return (
    t && UC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qC(e, t, r) {
  return (
    (t = oa(t)),
    KC(
      e,
      Nv() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r),
    )
  );
}
function KC(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return GC(e);
}
function GC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Nv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Nv = function () {
    return !!e;
  })();
}
function oa(e) {
  return (
    (oa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    oa(e)
  );
}
function HC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _u(e, t));
}
function _u(e, t) {
  return (
    (_u = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    _u(e, t)
  );
}
function up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function cp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? up(Object(r), !0).forEach(function (n) {
          Bc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : up(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Bc(e, t, r) {
  return (
    (t = Dv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dv(e) {
  var t = XC(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function XC(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function VC(e, t) {
  return QC(e) || JC(e, t) || ZC(e, t) || YC();
}
function YC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZC(e, t) {
  if (e) {
    if (typeof e == "string") return lp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lp(e, t);
  }
}
function lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JC(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function QC(e) {
  if (Array.isArray(e)) return e;
}
function $u() {
  return (
    ($u = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $u.apply(this, arguments)
  );
}
var eN = function (t, r) {
    var n;
    return (
      P.isValidElement(t)
        ? (n = P.cloneElement(t, r))
        : V(t)
          ? (n = t(r))
          : (n = P.createElement(
              "line",
              $u({}, r, { className: "recharts-reference-line-line" }),
            )),
      n
    );
  },
  tN = function (t, r, n, i, a, o, u, c, l) {
    var f = a.x,
      s = a.y,
      p = a.width,
      h = a.height;
    if (n) {
      var v = l.y,
        d = t.y.apply(v, { position: o });
      if (nt(l, "discard") && !t.y.isInRange(d)) return null;
      var y = [
        { x: f + p, y: d },
        { x: f, y: d },
      ];
      return c === "left" ? y.reverse() : y;
    }
    if (r) {
      var b = l.x,
        w = t.x.apply(b, { position: o });
      if (nt(l, "discard") && !t.x.isInRange(w)) return null;
      var x = [
        { x: w, y: s + h },
        { x: w, y: s },
      ];
      return u === "top" ? x.reverse() : x;
    }
    if (i) {
      var O = l.segment,
        m = O.map(function (g) {
          return t.apply(g, { position: o });
        });
      return nt(l, "discard") &&
        P2(m, function (g) {
          return !t.isInRange(g);
        })
        ? null
        : m;
    }
    return null;
  };
function rN(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    c = e.alwaysShow,
    l = DC(),
    f = kv(i),
    s = Cv(a),
    p = LC();
  if (!l || !p) return null;
  _t(
    c === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var h = kc({ x: f.scale, y: s.scale }),
    v = Oe(t),
    d = Oe(r),
    y = n && n.length === 2,
    b = tN(h, v, d, y, p, e.position, f.orientation, s.orientation, e);
  if (!b) return null;
  var w = VC(b, 2),
    x = w[0],
    O = x.x,
    m = x.y,
    g = w[1],
    A = g.x,
    S = g.y,
    _ = nt(e, "hidden") ? "url(#".concat(l, ")") : void 0,
    E = cp(cp({ clipPath: _ }, G(e, !0)), {}, { x1: O, y1: m, x2: A, y2: S });
  return P.createElement(
    ne,
    { className: J("recharts-reference-line", u) },
    eN(o, E),
    _e.renderCallByParent(e, hC({ x1: O, y1: m, x2: A, y2: S })),
  );
}
var Lc = (function (e) {
  function t() {
    return (WC(this, t), qC(this, t, arguments));
  }
  return (
    HC(t, e),
    zC(t, [
      {
        key: "render",
        value: function () {
          return P.createElement(rN, this.props);
        },
      },
    ])
  );
})(P.Component);
Bc(Lc, "displayName", "ReferenceLine");
Bc(Lc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function Tu() {
  return (
    (Tu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Tu.apply(this, arguments)
  );
}
function Er(e) {
  "@babel/helpers - typeof";
  return (
    (Er =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Er(e)
  );
}
function sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sp(Object(r), !0).forEach(function (n) {
          Wa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Bv(n.key), n));
  }
}
function aN(e, t, r) {
  return (
    t && iN(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function oN(e, t, r) {
  return (
    (t = ua(t)),
    uN(
      e,
      Rv() ? Reflect.construct(t, r || [], ua(e).constructor) : t.apply(e, r),
    )
  );
}
function uN(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return cN(e);
}
function cN(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Rv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Rv = function () {
    return !!e;
  })();
}
function ua(e) {
  return (
    (ua = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ua(e)
  );
}
function lN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Eu(e, t));
}
function Eu(e, t) {
  return (
    (Eu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Eu(e, t)
  );
}
function Wa(e, t, r) {
  return (
    (t = Bv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Bv(e) {
  var t = sN(e, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function sN(e, t) {
  if (Er(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fN = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = kc({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return nt(t, "discard") && !o.isInRange(u) ? null : u;
  },
  Ua = (function (e) {
    function t() {
      return (nN(this, t), oN(this, t, arguments));
    }
    return (
      lN(t, e),
      aN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              c = n.clipPathId,
              l = Oe(i),
              f = Oe(a);
            if (
              (_t(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !l || !f)
            )
              return null;
            var s = fN(this.props);
            if (!s) return null;
            var p = s.x,
              h = s.y,
              v = this.props,
              d = v.shape,
              y = v.className,
              b = nt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0,
              w = fp(
                fp({ clipPath: b }, G(this.props, !0)),
                {},
                { cx: p, cy: h },
              );
            return P.createElement(
              ne,
              { className: J("recharts-reference-dot", y) },
              t.renderDot(d, w),
              _e.renderCallByParent(this.props, {
                x: p - o,
                y: h - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(P.Component);
Wa(Ua, "displayName", "ReferenceDot");
Wa(Ua, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
Wa(Ua, "renderDot", function (e, t) {
  var r;
  return (
    P.isValidElement(e)
      ? (r = P.cloneElement(e, t))
      : V(e)
        ? (r = e(t))
        : (r = P.createElement(
            Ic,
            Tu({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
});
function ju() {
  return (
    (ju = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ju.apply(this, arguments)
  );
}
function jr(e) {
  "@babel/helpers - typeof";
  return (
    (jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jr(e)
  );
}
function pp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function hp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pp(Object(r), !0).forEach(function (n) {
          za(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function pN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Fv(n.key), n));
  }
}
function dN(e, t, r) {
  return (
    t && hN(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function vN(e, t, r) {
  return (
    (t = ca(t)),
    yN(
      e,
      Lv() ? Reflect.construct(t, r || [], ca(e).constructor) : t.apply(e, r),
    )
  );
}
function yN(e, t) {
  if (t && (jr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return mN(e);
}
function mN(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Lv = function () {
    return !!e;
  })();
}
function ca(e) {
  return (
    (ca = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ca(e)
  );
}
function gN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Mu(e, t));
}
function Mu(e, t) {
  return (
    (Mu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Mu(e, t)
  );
}
function za(e, t, r) {
  return (
    (t = Fv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Fv(e) {
  var t = bN(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function bN(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var xN = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      c = a.y1,
      l = a.y2,
      f = a.xAxis,
      s = a.yAxis;
    if (!f || !s) return null;
    var p = kc({ x: f.scale, y: s.scale }),
      h = {
        x: t ? p.x.apply(o, { position: "start" }) : p.x.rangeMin,
        y: n ? p.y.apply(c, { position: "start" }) : p.y.rangeMin,
      },
      v = {
        x: r ? p.x.apply(u, { position: "end" }) : p.x.rangeMax,
        y: i ? p.y.apply(l, { position: "end" }) : p.y.rangeMax,
      };
    return nt(a, "discard") && (!p.isInRange(h) || !p.isInRange(v))
      ? null
      : _v(h, v);
  },
  qa = (function (e) {
    function t() {
      return (pN(this, t), vN(this, t, arguments));
    }
    return (
      gN(t, e),
      dN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              c = n.className,
              l = n.alwaysShow,
              f = n.clipPathId;
            _t(
              l === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var s = Oe(i),
              p = Oe(a),
              h = Oe(o),
              v = Oe(u),
              d = this.props.shape;
            if (!s && !p && !h && !v && !d) return null;
            var y = xN(s, p, h, v, this.props);
            if (!y && !d) return null;
            var b = nt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return P.createElement(
              ne,
              { className: J("recharts-reference-area", c) },
              t.renderRect(d, hp(hp({ clipPath: b }, G(this.props, !0)), y)),
              _e.renderCallByParent(this.props, y),
            );
          },
        },
      ])
    );
  })(P.Component);
za(qa, "displayName", "ReferenceArea");
za(qa, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
za(qa, "renderRect", function (e, t) {
  var r;
  return (
    P.isValidElement(e)
      ? (r = P.cloneElement(e, t))
      : V(e)
        ? (r = e(t))
        : (r = P.createElement(
            Mc,
            ju({}, t, { className: "recharts-reference-area-rect" }),
          )),
    r
  );
});
function Wv(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function wN(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return vC(n, r);
}
function ON(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + u }
    : { start: n ? i + o : a + u, end: n ? i : a };
}
function la(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function AN(e, t) {
  return Wv(e, t + 1);
}
function PN(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      c = 0,
      l = 1,
      f = o,
      s = function () {
        var v = n == null ? void 0 : n[c];
        if (v === void 0) return { v: Wv(n, l) };
        var d = c,
          y,
          b = function () {
            return (y === void 0 && (y = r(v, d)), y);
          },
          w = v.coordinate,
          x = c === 0 || la(e, w, b, f, u);
        (x || ((c = 0), (f = o), (l += 1)),
          x && ((f = w + e * (b() / 2 + i)), (c += l)));
      },
      p;
    l <= a.length;
  )
    if (((p = s()), p)) return p.v;
  return [];
}
function Un(e) {
  "@babel/helpers - typeof";
  return (
    (Un =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Un(e)
  );
}
function dp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dp(Object(r), !0).forEach(function (n) {
          SN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function SN(e, t, r) {
  return (
    (t = _N(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _N(e) {
  var t = $N(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function $N(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TN(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      c = t.end,
      l = function (p) {
        var h = a[p],
          v,
          d = function () {
            return (v === void 0 && (v = r(h, p)), v);
          };
        if (p === o - 1) {
          var y = e * (h.coordinate + (e * d()) / 2 - c);
          a[p] = h = je(
            je({}, h),
            {},
            { tickCoord: y > 0 ? h.coordinate - y * e : h.coordinate },
          );
        } else a[p] = h = je(je({}, h), {}, { tickCoord: h.coordinate });
        var b = la(e, h.tickCoord, d, u, c);
        b &&
          ((c = h.tickCoord - e * (d() / 2 + i)),
          (a[p] = je(je({}, h), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    l(f);
  return a;
}
function EN(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    c = t.start,
    l = t.end;
  if (a) {
    var f = n[u - 1],
      s = r(f, u - 1),
      p = e * (f.coordinate + (e * s) / 2 - l);
    o[u - 1] = f = je(
      je({}, f),
      {},
      { tickCoord: p > 0 ? f.coordinate - p * e : f.coordinate },
    );
    var h = la(
      e,
      f.tickCoord,
      function () {
        return s;
      },
      c,
      l,
    );
    h &&
      ((l = f.tickCoord - e * (s / 2 + i)),
      (o[u - 1] = je(je({}, f), {}, { isShow: !0 })));
  }
  for (
    var v = a ? u - 1 : u,
      d = function (w) {
        var x = o[w],
          O,
          m = function () {
            return (O === void 0 && (O = r(x, w)), O);
          };
        if (w === 0) {
          var g = e * (x.coordinate - (e * m()) / 2 - c);
          o[w] = x = je(
            je({}, x),
            {},
            { tickCoord: g < 0 ? x.coordinate - g * e : x.coordinate },
          );
        } else o[w] = x = je(je({}, x), {}, { tickCoord: x.coordinate });
        var A = la(e, x.tickCoord, m, c, l);
        A &&
          ((c = x.tickCoord + e * (m() / 2 + i)),
          (o[w] = je(je({}, x), {}, { isShow: !0 })));
      },
      y = 0;
    y < v;
    y++
  )
    d(y);
  return o;
}
function Fc(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    c = e.interval,
    l = e.tickFormatter,
    f = e.unit,
    s = e.angle;
  if (!i || !i.length || !n) return [];
  if (R(c) || Wr.isSsr) return AN(i, typeof c == "number" && R(c) ? c : 0);
  var p = [],
    h = u === "top" || u === "bottom" ? "width" : "height",
    v =
      f && h === "width"
        ? an(f, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    d = function (x, O) {
      var m = V(l) ? l(x.value, O) : x.value;
      return h === "width"
        ? wN(an(m, { fontSize: t, letterSpacing: r }), v, s)
        : an(m, { fontSize: t, letterSpacing: r })[h];
    },
    y = i.length >= 2 ? Ie(i[1].coordinate - i[0].coordinate) : 1,
    b = ON(a, y, h);
  return c === "equidistantPreserveStart"
    ? PN(y, b, d, i, o)
    : (c === "preserveStart" || c === "preserveStartEnd"
        ? (p = EN(y, b, d, i, o, c === "preserveStartEnd"))
        : (p = TN(y, b, d, i, o)),
      p.filter(function (w) {
        return w.isShow;
      }));
}
var jN = ["viewBox"],
  MN = ["viewBox"],
  IN = ["ticks"];
function Mr(e) {
  "@babel/helpers - typeof";
  return (
    (Mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mr(e)
  );
}
function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
function vp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vp(Object(r), !0).forEach(function (n) {
          Wc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ho(e, t) {
  if (e == null) return {};
  var r = kN(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function kN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function CN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, zv(n.key), n));
  }
}
function NN(e, t, r) {
  return (
    t && yp(e.prototype, t),
    r && yp(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function DN(e, t, r) {
  return (
    (t = sa(t)),
    RN(
      e,
      Uv() ? Reflect.construct(t, r || [], sa(e).constructor) : t.apply(e, r),
    )
  );
}
function RN(e, t) {
  if (t && (Mr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return BN(e);
}
function BN(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Uv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Uv = function () {
    return !!e;
  })();
}
function sa(e) {
  return (
    (sa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    sa(e)
  );
}
function LN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Iu(e, t));
}
function Iu(e, t) {
  return (
    (Iu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Iu(e, t)
  );
}
function Wc(e, t, r) {
  return (
    (t = zv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function zv(e) {
  var t = FN(e, "string");
  return Mr(t) == "symbol" ? t : t + "";
}
function FN(e, t) {
  if (Mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gr = (function (e) {
  function t(r) {
    var n;
    return (
      CN(this, t),
      (n = DN(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    LN(t, e),
    NN(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = ho(n, jN),
              u = this.props,
              c = u.viewBox,
              l = ho(u, MN);
            return !hi(a, c) || !hi(o, l) || !hi(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              c = i.height,
              l = i.orientation,
              f = i.tickSize,
              s = i.mirror,
              p = i.tickMargin,
              h,
              v,
              d,
              y,
              b,
              w,
              x = s ? -1 : 1,
              O = n.tickSize || f,
              m = R(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (l) {
              case "top":
                ((h = v = n.coordinate),
                  (y = o + +!s * c),
                  (d = y - x * O),
                  (w = d - x * p),
                  (b = m));
                break;
              case "left":
                ((d = y = n.coordinate),
                  (v = a + +!s * u),
                  (h = v - x * O),
                  (b = h - x * p),
                  (w = m));
                break;
              case "right":
                ((d = y = n.coordinate),
                  (v = a + +s * u),
                  (h = v + x * O),
                  (b = h + x * p),
                  (w = m));
                break;
              default:
                ((h = v = n.coordinate),
                  (y = o + +s * c),
                  (d = y + x * O),
                  (w = d + x * p),
                  (b = m));
                break;
            }
            return {
              line: { x1: h, y1: d, x2: v, y2: y },
              tick: { x: b, y: w },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              c = n.orientation,
              l = n.mirror,
              f = n.axisLine,
              s = xe(
                xe(xe({}, G(this.props, !1)), G(f, !1)),
                {},
                { fill: "none" },
              );
            if (c === "top" || c === "bottom") {
              var p = +((c === "top" && !l) || (c === "bottom" && l));
              s = xe(
                xe({}, s),
                {},
                { x1: i, y1: a + p * u, x2: i + o, y2: a + p * u },
              );
            } else {
              var h = +((c === "left" && !l) || (c === "right" && l));
              s = xe(
                xe({}, s),
                {},
                { x1: i + h * o, y1: a, x2: i + h * o, y2: a + u },
              );
            }
            return P.createElement(
              "line",
              ur({}, s, {
                className: J(
                  "recharts-cartesian-axis-line",
                  tt(f, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              c = u.tickLine,
              l = u.stroke,
              f = u.tick,
              s = u.tickFormatter,
              p = u.unit,
              h = Fc(xe(xe({}, this.props), {}, { ticks: n }), i, a),
              v = this.getTickTextAnchor(),
              d = this.getTickVerticalAnchor(),
              y = G(this.props, !1),
              b = G(f, !1),
              w = xe(xe({}, y), {}, { fill: "none" }, G(c, !1)),
              x = h.map(function (O, m) {
                var g = o.getTickLineCoord(O),
                  A = g.line,
                  S = g.tick,
                  _ = xe(
                    xe(
                      xe(
                        xe({ textAnchor: v, verticalAnchor: d }, y),
                        {},
                        { stroke: "none", fill: l },
                        b,
                      ),
                      S,
                    ),
                    {},
                    {
                      index: m,
                      payload: O,
                      visibleTicksCount: h.length,
                      tickFormatter: s,
                    },
                  );
                return P.createElement(
                  ne,
                  ur(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(O.value, "-")
                        .concat(O.coordinate, "-")
                        .concat(O.tickCoord),
                    },
                    Gt(o.props, O, m),
                  ),
                  c &&
                    P.createElement(
                      "line",
                      ur({}, w, A, {
                        className: J(
                          "recharts-cartesian-axis-tick-line",
                          tt(c, "className"),
                        ),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      _,
                      "".concat(V(s) ? s(O.value, m) : O.value).concat(p || ""),
                    ),
                );
              });
            return P.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              x,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              c = i.ticksGenerator,
              l = i.className,
              f = i.hide;
            if (f) return null;
            var s = this.props,
              p = s.ticks,
              h = ho(s, IN),
              v = p;
            return (
              V(c) && (v = p && p.length > 0 ? c(this.props) : c(h)),
              o <= 0 || u <= 0 || !v || !v.length
                ? null
                : P.createElement(
                    ne,
                    {
                      className: J("recharts-cartesian-axis", l),
                      ref: function (y) {
                        n.layerReference = y;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(
                      v,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    _e.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o,
              u = J(i.className, "recharts-cartesian-axis-tick-value");
            return (
              P.isValidElement(n)
                ? (o = P.cloneElement(n, xe(xe({}, i), {}, { className: u })))
                : V(n)
                  ? (o = n(xe(xe({}, i), {}, { className: u })))
                  : (o = P.createElement(
                      Ht,
                      ur({}, i, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(B.Component);
Wc(Gr, "displayName", "CartesianAxis");
Wc(Gr, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var WN = ["x1", "y1", "x2", "y2", "key"],
  UN = ["offset"];
function Yt(e) {
  "@babel/helpers - typeof";
  return (
    (Yt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yt(e)
  );
}
function mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mp(Object(r), !0).forEach(function (n) {
          zN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function zN(e, t, r) {
  return (
    (t = qN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qN(e) {
  var t = KN(e, "string");
  return Yt(t) == "symbol" ? t : t + "";
}
function KN(e, t) {
  if (Yt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zt.apply(this, arguments)
  );
}
function gp(e, t) {
  if (e == null) return {};
  var r = GN(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function GN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var HN = function (t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity,
    i = t.x,
    a = t.y,
    o = t.width,
    u = t.height,
    c = t.ry;
  return P.createElement("rect", {
    x: i,
    y: a,
    ry: c,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg",
  });
};
function qv(e, t) {
  var r;
  if (P.isValidElement(e)) r = P.cloneElement(e, t);
  else if (V(e)) r = e(t);
  else {
    var n = t.x1,
      i = t.y1,
      a = t.x2,
      o = t.y2,
      u = t.key,
      c = gp(t, WN),
      l = G(c, !1);
    l.offset;
    var f = gp(l, UN);
    r = P.createElement(
      "line",
      zt({}, f, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: u }),
    );
  }
  return r;
}
function XN(e) {
  var t = e.x,
    r = e.width,
    n = e.horizontal,
    i = n === void 0 ? !0 : n,
    a = e.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, c) {
    var l = Me(
      Me({}, e),
      {},
      { x1: t, y1: u, x2: t + r, y2: u, key: "line-".concat(c), index: c },
    );
    return qv(i, l);
  });
  return P.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    o,
  );
}
function VN(e) {
  var t = e.y,
    r = e.height,
    n = e.vertical,
    i = n === void 0 ? !0 : n,
    a = e.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, c) {
    var l = Me(
      Me({}, e),
      {},
      { x1: u, y1: t, x2: u, y2: t + r, key: "line-".concat(c), index: c },
    );
    return qv(i, l);
  });
  return P.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    o,
  );
}
function YN(e) {
  var t = e.horizontalFill,
    r = e.fillOpacity,
    n = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    u = e.horizontalPoints,
    c = e.horizontal,
    l = c === void 0 ? !0 : c;
  if (!l || !t || !t.length) return null;
  var f = u
    .map(function (p) {
      return Math.round(p + i - i);
    })
    .sort(function (p, h) {
      return p - h;
    });
  i !== f[0] && f.unshift(0);
  var s = f.map(function (p, h) {
    var v = !f[h + 1],
      d = v ? i + o - p : f[h + 1] - p;
    if (d <= 0) return null;
    var y = h % t.length;
    return P.createElement("rect", {
      key: "react-".concat(h),
      y: p,
      x: n,
      height: d,
      width: a,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return P.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    s,
  );
}
function ZN(e) {
  var t = e.vertical,
    r = t === void 0 ? !0 : t,
    n = e.verticalFill,
    i = e.fillOpacity,
    a = e.x,
    o = e.y,
    u = e.width,
    c = e.height,
    l = e.verticalPoints;
  if (!r || !n || !n.length) return null;
  var f = l
    .map(function (p) {
      return Math.round(p + a - a);
    })
    .sort(function (p, h) {
      return p - h;
    });
  a !== f[0] && f.unshift(0);
  var s = f.map(function (p, h) {
    var v = !f[h + 1],
      d = v ? a + u - p : f[h + 1] - p;
    if (d <= 0) return null;
    var y = h % n.length;
    return P.createElement("rect", {
      key: "react-".concat(h),
      x: p,
      y: o,
      width: d,
      height: c,
      stroke: "none",
      fill: n[y],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return P.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    s,
  );
}
var JN = function (t, r) {
    var n = t.xAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return Wd(
      Fc(
        Me(
          Me(Me({}, Gr.defaultProps), n),
          {},
          { ticks: pt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.left,
      o.left + o.width,
      r,
    );
  },
  QN = function (t, r) {
    var n = t.yAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return Wd(
      Fc(
        Me(
          Me(Me({}, Gr.defaultProps), n),
          {},
          { ticks: pt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.top,
      o.top + o.height,
      r,
    );
  },
  nr = {
    horizontal: !0,
    vertical: !0,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function eD(e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = Dc(),
    c = Rc(),
    l = FC(),
    f = Me(
      Me({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : nr.stroke,
        fill: (r = e.fill) !== null && r !== void 0 ? r : nr.fill,
        horizontal:
          (n = e.horizontal) !== null && n !== void 0 ? n : nr.horizontal,
        horizontalFill:
          (i = e.horizontalFill) !== null && i !== void 0
            ? i
            : nr.horizontalFill,
        vertical: (a = e.vertical) !== null && a !== void 0 ? a : nr.vertical,
        verticalFill:
          (o = e.verticalFill) !== null && o !== void 0 ? o : nr.verticalFill,
        x: R(e.x) ? e.x : l.left,
        y: R(e.y) ? e.y : l.top,
        width: R(e.width) ? e.width : l.width,
        height: R(e.height) ? e.height : l.height,
      },
    ),
    s = f.x,
    p = f.y,
    h = f.width,
    v = f.height,
    d = f.syncWithTicks,
    y = f.horizontalValues,
    b = f.verticalValues,
    w = RC(),
    x = BC();
  if (
    !R(h) ||
    h <= 0 ||
    !R(v) ||
    v <= 0 ||
    !R(s) ||
    s !== +s ||
    !R(p) ||
    p !== +p
  )
    return null;
  var O = f.verticalCoordinatesGenerator || JN,
    m = f.horizontalCoordinatesGenerator || QN,
    g = f.horizontalPoints,
    A = f.verticalPoints;
  if ((!g || !g.length) && V(m)) {
    var S = y && y.length,
      _ = m(
        {
          yAxis: x ? Me(Me({}, x), {}, { ticks: S ? y : x.ticks }) : void 0,
          width: u,
          height: c,
          offset: l,
        },
        S ? !0 : d,
      );
    (_t(
      Array.isArray(_),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        Yt(_),
        "]",
      ),
    ),
      Array.isArray(_) && (g = _));
  }
  if ((!A || !A.length) && V(O)) {
    var E = b && b.length,
      $ = O(
        {
          xAxis: w ? Me(Me({}, w), {}, { ticks: E ? b : w.ticks }) : void 0,
          width: u,
          height: c,
          offset: l,
        },
        E ? !0 : d,
      );
    (_t(
      Array.isArray($),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        Yt($),
        "]",
      ),
    ),
      Array.isArray($) && (A = $));
  }
  return P.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    P.createElement(HN, {
      fill: f.fill,
      fillOpacity: f.fillOpacity,
      x: f.x,
      y: f.y,
      width: f.width,
      height: f.height,
      ry: f.ry,
    }),
    P.createElement(
      XN,
      zt({}, f, { offset: l, horizontalPoints: g, xAxis: w, yAxis: x }),
    ),
    P.createElement(
      VN,
      zt({}, f, { offset: l, verticalPoints: A, xAxis: w, yAxis: x }),
    ),
    P.createElement(YN, zt({}, f, { horizontalPoints: g })),
    P.createElement(ZN, zt({}, f, { verticalPoints: A })),
  );
}
eD.displayName = "CartesianGrid";
function Ir(e) {
  "@babel/helpers - typeof";
  return (
    (Ir =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ir(e)
  );
}
function tD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Hv(n.key), n));
  }
}
function nD(e, t, r) {
  return (
    t && rD(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function iD(e, t, r) {
  return (
    (t = fa(t)),
    aD(
      e,
      Kv() ? Reflect.construct(t, r || [], fa(e).constructor) : t.apply(e, r),
    )
  );
}
function aD(e, t) {
  if (t && (Ir(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return oD(e);
}
function oD(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Kv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Kv = function () {
    return !!e;
  })();
}
function fa(e) {
  return (
    (fa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fa(e)
  );
}
function uD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ku(e, t));
}
function ku(e, t) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ku(e, t)
  );
}
function Gv(e, t, r) {
  return (
    (t = Hv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Hv(e) {
  var t = cD(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function cD(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Cu() {
  return (
    (Cu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Cu.apply(this, arguments)
  );
}
function lD(e) {
  var t = e.xAxisId,
    r = Dc(),
    n = Rc(),
    i = kv(t);
  return i == null
    ? null
    : B.createElement(
        Gr,
        Cu({}, i, {
          className: J(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return pt(o, !0);
          },
        }),
      );
}
var Uc = (function (e) {
  function t() {
    return (tD(this, t), iD(this, t, arguments));
  }
  return (
    uD(t, e),
    nD(t, [
      {
        key: "render",
        value: function () {
          return B.createElement(lD, this.props);
        },
      },
    ])
  );
})(B.Component);
Gv(Uc, "displayName", "XAxis");
Gv(Uc, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function kr(e) {
  "@babel/helpers - typeof";
  return (
    (kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kr(e)
  );
}
function sD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Yv(n.key), n));
  }
}
function pD(e, t, r) {
  return (
    t && fD(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function hD(e, t, r) {
  return (
    (t = pa(t)),
    dD(
      e,
      Xv() ? Reflect.construct(t, r || [], pa(e).constructor) : t.apply(e, r),
    )
  );
}
function dD(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return vD(e);
}
function vD(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Xv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Xv = function () {
    return !!e;
  })();
}
function pa(e) {
  return (
    (pa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    pa(e)
  );
}
function yD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Nu(e, t));
}
function Nu(e, t) {
  return (
    (Nu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Nu(e, t)
  );
}
function Vv(e, t, r) {
  return (
    (t = Yv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yv(e) {
  var t = mD(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function mD(e, t) {
  if (kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Du() {
  return (
    (Du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Du.apply(this, arguments)
  );
}
var gD = function (t) {
    var r = t.yAxisId,
      n = Dc(),
      i = Rc(),
      a = Cv(r);
    return a == null
      ? null
      : B.createElement(
          Gr,
          Du({}, a, {
            className: J(
              "recharts-".concat(a.axisType, " ").concat(a.axisType),
              a.className,
            ),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (u) {
              return pt(u, !0);
            },
          }),
        );
  },
  zc = (function (e) {
    function t() {
      return (sD(this, t), hD(this, t, arguments));
    }
    return (
      yD(t, e),
      pD(t, [
        {
          key: "render",
          value: function () {
            return B.createElement(gD, this.props);
          },
        },
      ])
    );
  })(B.Component);
Vv(zc, "displayName", "YAxis");
Vv(zc, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function bp(e) {
  return OD(e) || wD(e) || xD(e) || bD();
}
function bD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xD(e, t) {
  if (e) {
    if (typeof e == "string") return Ru(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ru(e, t);
  }
}
function wD(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function OD(e) {
  if (Array.isArray(e)) return Ru(e);
}
function Ru(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Bu = function (t, r, n, i, a) {
    var o = Je(t, Lc),
      u = Je(t, Ua),
      c = [].concat(bp(o), bp(u)),
      l = Je(t, qa),
      f = "".concat(i, "Id"),
      s = i[0],
      p = r;
    if (
      (c.length &&
        (p = c.reduce(function (d, y) {
          if (
            y.props[f] === n &&
            nt(y.props, "extendDomain") &&
            R(y.props[s])
          ) {
            var b = y.props[s];
            return [Math.min(d[0], b), Math.max(d[1], b)];
          }
          return d;
        }, p)),
      l.length)
    ) {
      var h = "".concat(s, "1"),
        v = "".concat(s, "2");
      p = l.reduce(function (d, y) {
        if (
          y.props[f] === n &&
          nt(y.props, "extendDomain") &&
          R(y.props[h]) &&
          R(y.props[v])
        ) {
          var b = y.props[h],
            w = y.props[v];
          return [Math.min(d[0], b, w), Math.max(d[1], b, w)];
        }
        return d;
      }, p);
    }
    return (
      a &&
        a.length &&
        (p = a.reduce(function (d, y) {
          return R(y) ? [Math.min(d[0], y), Math.max(d[1], y)] : d;
        }, p)),
      p
    );
  },
  Zv = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(c, l, f) {
    ((this.fn = c), (this.context = l), (this.once = f || !1));
  }
  function a(c, l, f, s, p) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(f, s || c, p),
      v = r ? r + l : l;
    return (
      c._events[v]
        ? c._events[v].fn
          ? (c._events[v] = [c._events[v], h])
          : c._events[v].push(h)
        : ((c._events[v] = h), c._eventsCount++),
      c
    );
  }
  function o(c, l) {
    --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[l];
  }
  function u() {
    ((this._events = new n()), (this._eventsCount = 0));
  }
  ((u.prototype.eventNames = function () {
    var l = [],
      f,
      s;
    if (this._eventsCount === 0) return l;
    for (s in (f = this._events)) t.call(f, s) && l.push(r ? s.slice(1) : s);
    return Object.getOwnPropertySymbols
      ? l.concat(Object.getOwnPropertySymbols(f))
      : l;
  }),
    (u.prototype.listeners = function (l) {
      var f = r ? r + l : l,
        s = this._events[f];
      if (!s) return [];
      if (s.fn) return [s.fn];
      for (var p = 0, h = s.length, v = new Array(h); p < h; p++)
        v[p] = s[p].fn;
      return v;
    }),
    (u.prototype.listenerCount = function (l) {
      var f = r ? r + l : l,
        s = this._events[f];
      return s ? (s.fn ? 1 : s.length) : 0;
    }),
    (u.prototype.emit = function (l, f, s, p, h, v) {
      var d = r ? r + l : l;
      if (!this._events[d]) return !1;
      var y = this._events[d],
        b = arguments.length,
        w,
        x;
      if (y.fn) {
        switch ((y.once && this.removeListener(l, y.fn, void 0, !0), b)) {
          case 1:
            return (y.fn.call(y.context), !0);
          case 2:
            return (y.fn.call(y.context, f), !0);
          case 3:
            return (y.fn.call(y.context, f, s), !0);
          case 4:
            return (y.fn.call(y.context, f, s, p), !0);
          case 5:
            return (y.fn.call(y.context, f, s, p, h), !0);
          case 6:
            return (y.fn.call(y.context, f, s, p, h, v), !0);
        }
        for (x = 1, w = new Array(b - 1); x < b; x++) w[x - 1] = arguments[x];
        y.fn.apply(y.context, w);
      } else {
        var O = y.length,
          m;
        for (x = 0; x < O; x++)
          switch (
            (y[x].once && this.removeListener(l, y[x].fn, void 0, !0), b)
          ) {
            case 1:
              y[x].fn.call(y[x].context);
              break;
            case 2:
              y[x].fn.call(y[x].context, f);
              break;
            case 3:
              y[x].fn.call(y[x].context, f, s);
              break;
            case 4:
              y[x].fn.call(y[x].context, f, s, p);
              break;
            default:
              if (!w)
                for (m = 1, w = new Array(b - 1); m < b; m++)
                  w[m - 1] = arguments[m];
              y[x].fn.apply(y[x].context, w);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (l, f, s) {
      return a(this, l, f, s, !1);
    }),
    (u.prototype.once = function (l, f, s) {
      return a(this, l, f, s, !0);
    }),
    (u.prototype.removeListener = function (l, f, s, p) {
      var h = r ? r + l : l;
      if (!this._events[h]) return this;
      if (!f) return (o(this, h), this);
      var v = this._events[h];
      if (v.fn)
        v.fn === f && (!p || v.once) && (!s || v.context === s) && o(this, h);
      else {
        for (var d = 0, y = [], b = v.length; d < b; d++)
          (v[d].fn !== f || (p && !v[d].once) || (s && v[d].context !== s)) &&
            y.push(v[d]);
        y.length ? (this._events[h] = y.length === 1 ? y[0] : y) : o(this, h);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (l) {
      var f;
      return (
        l
          ? ((f = r ? r + l : l), this._events[f] && o(this, f))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u));
})(Zv);
var AD = Zv.exports;
const PD = Ae(AD);
var vo = new PD(),
  yo = "recharts.syncMouseEvents";
function zn(e) {
  "@babel/helpers - typeof";
  return (
    (zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zn(e)
  );
}
function SD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _D(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Jv(n.key), n));
  }
}
function $D(e, t, r) {
  return (
    t && _D(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mo(e, t, r) {
  return (
    (t = Jv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Jv(e) {
  var t = TD(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function TD(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ED = (function () {
  function e() {
    (SD(this, e),
      mo(this, "activeIndex", 0),
      mo(this, "coordinateList", []),
      mo(this, "layout", "horizontal"));
  }
  return $D(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          c = r.layout,
          l = c === void 0 ? null : c,
          f = r.offset,
          s = f === void 0 ? null : f,
          p = r.mouseHandlerCallback,
          h = p === void 0 ? null : p;
        ((this.coordinateList =
          (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = l ?? this.layout),
          (this.offset = s ?? this.offset),
          (this.mouseHandlerCallback = h ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse());
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            c = this.coordinateList[this.activeIndex].coordinate,
            l =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            s = a + c + l,
            p = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: s, pageY: p });
        }
      },
    },
  ]);
})();
function jD(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (n && i && R(n) && R(i)) return !0;
  }
  return !1;
}
function MD(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function Qv(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = ce(t, r, n, i),
    u = ce(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}
function ID(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical")
    ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        c = t.cy,
        l = t.innerRadius,
        f = t.outerRadius,
        s = t.angle,
        p = ce(u, c, l, s),
        h = ce(u, c, f, s);
      ((n = p.x), (i = p.y), (a = h.x), (o = h.y));
    } else return Qv(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function qn(e) {
  "@babel/helpers - typeof";
  return (
    (qn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qn(e)
  );
}
function xp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xp(Object(r), !0).forEach(function (n) {
          kD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function kD(e, t, r) {
  return (
    (t = CD(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CD(e) {
  var t = ND(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function ND(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DD(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    c = e.offset,
    l = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    s = e.layout,
    p = e.chartName,
    h =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !h || !a || !o || (p !== "ScatterChart" && i !== "axis"))
    return null;
  var v,
    d = uu;
  if (p === "ScatterChart") ((v = o), (d = pI));
  else if (p === "BarChart") ((v = MD(s, o, c, f)), (d = Mc));
  else if (s === "radial") {
    var y = Qv(o),
      b = y.cx,
      w = y.cy,
      x = y.radius,
      O = y.startAngle,
      m = y.endAngle;
    ((v = {
      cx: b,
      cy: w,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x,
    }),
      (d = Jd));
  } else ((v = { points: ID(s, o, c) }), (d = uu));
  var g = fi(
    fi(fi(fi({ stroke: "#ccc", pointerEvents: "none" }, c), v), G(h, !1)),
    {},
    {
      payload: u,
      payloadIndex: l,
      className: J("recharts-tooltip-cursor", h.className),
    },
  );
  return B.isValidElement(h) ? B.cloneElement(h, g) : B.createElement(d, g);
}
var RD = ["item"],
  BD = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function Cr(e) {
  "@babel/helpers - typeof";
  return (
    (Cr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cr(e)
  );
}
function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
function wp(e, t) {
  return WD(e) || FD(e, t) || ty(e, t) || LD();
}
function LD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FD(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((l = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function WD(e) {
  if (Array.isArray(e)) return e;
}
function Op(e, t) {
  if (e == null) return {};
  var r = UD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function UD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ry(n.key), n));
  }
}
function KD(e, t, r) {
  return (
    t && qD(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function GD(e, t, r) {
  return (
    (t = ha(t)),
    HD(
      e,
      ey() ? Reflect.construct(t, r || [], ha(e).constructor) : t.apply(e, r),
    )
  );
}
function HD(e, t) {
  if (t && (Cr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return XD(e);
}
function XD(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ey() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ey = function () {
    return !!e;
  })();
}
function ha(e) {
  return (
    (ha = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ha(e)
  );
}
function VD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Lu(e, t));
}
function Lu(e, t) {
  return (
    (Lu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Lu(e, t)
  );
}
function Nr(e) {
  return JD(e) || ZD(e) || ty(e) || YD();
}
function YD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ty(e, t) {
  if (e) {
    if (typeof e == "string") return Fu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fu(e, t);
  }
}
function ZD(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function JD(e) {
  if (Array.isArray(e)) return Fu(e);
}
function Fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ap(Object(r), !0).forEach(function (n) {
          K(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ap(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function K(e, t, r) {
  return (
    (t = ry(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ry(e) {
  var t = QD(e, "string");
  return Cr(t) == "symbol" ? t : t + "";
}
function QD(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eR = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  tR = { width: "100%", height: "100%" },
  ny = { x: 0, y: 0 };
function pi(e) {
  return e;
}
var rR = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
        ? t.y
        : r === "centric"
          ? t.angle
          : t.radius;
  },
  nR = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return j(
          j(j({}, i), ce(i.cx, i.cy, u, o)),
          {},
          { angle: o, radius: u },
        );
      }
      var c = a.coordinate,
        l = i.angle;
      return j(j(j({}, i), ce(i.cx, i.cy, c, l)), {}, { angle: l, radius: c });
    }
    return ny;
  },
  Ka = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, c) {
        var l = c.props.data;
        return l && l.length ? [].concat(Nr(u), Nr(l)) : u;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && R(i) && R(a)
        ? t.slice(i, a + 1)
        : [];
  };
function iy(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Wu = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = Ka(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (c, l) {
          var f,
            s = (f = l.props.data) !== null && f !== void 0 ? f : r;
          s &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var p;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var h = s === void 0 ? u : s;
            p = vi(h, o.dataKey, i);
          } else p = (s && s[n]) || u[n];
          return p ? [].concat(Nr(c), [Gd(l, p)]) : c;
        }, []);
  },
  Pp = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = rR(a, n),
      u = t.orderedTooltipTicks,
      c = t.tooltipAxis,
      l = t.tooltipTicks,
      f = DT(o, u, l, c);
    if (f >= 0 && l) {
      var s = l[f] && l[f].value,
        p = Wu(t, r, f, s),
        h = nR(n, u, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: s,
        activePayload: p,
        activeCoordinate: h,
      };
    }
    return null;
  },
  iR = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.layout,
      s = t.children,
      p = t.stackOffset,
      h = Fd(f, a);
    return n.reduce(function (v, d) {
      var y,
        b =
          d.type.defaultProps !== void 0
            ? j(j({}, d.type.defaultProps), d.props)
            : d.props,
        w = b.type,
        x = b.dataKey,
        O = b.allowDataOverflow,
        m = b.allowDuplicatedCategory,
        g = b.scale,
        A = b.ticks,
        S = b.includeHidden,
        _ = b[o];
      if (v[_]) return v;
      var E = Ka(t.data, {
          graphicalItems: i.filter(function (z) {
            var X,
              le =
                o in z.props
                  ? z.props[o]
                  : (X = z.type.defaultProps) === null || X === void 0
                    ? void 0
                    : X[o];
            return le === _;
          }),
          dataStartIndex: c,
          dataEndIndex: l,
        }),
        $ = E.length,
        T,
        M,
        I;
      jD(b.domain, O, w) &&
        ((T = ru(b.domain, null, O)),
        h && (w === "number" || g !== "auto") && (I = un(E, x, "category")));
      var k = iy(w);
      if (!T || T.length === 0) {
        var N,
          D = (N = b.domain) !== null && N !== void 0 ? N : k;
        if (x) {
          if (((T = un(E, x, w)), w === "category" && h)) {
            var L = gy(T);
            m && L
              ? ((M = T), (T = ta(0, $)))
              : m ||
                (T = Xs(D, T, d).reduce(function (z, X) {
                  return z.indexOf(X) >= 0 ? z : [].concat(Nr(z), [X]);
                }, []));
          } else if (w === "category")
            m
              ? (T = T.filter(function (z) {
                  return z !== "" && !Q(z);
                }))
              : (T = Xs(D, T, d).reduce(function (z, X) {
                  return z.indexOf(X) >= 0 || X === "" || Q(X)
                    ? z
                    : [].concat(Nr(z), [X]);
                }, []));
          else if (w === "number") {
            var F = WT(
              E,
              i.filter(function (z) {
                var X,
                  le,
                  ve =
                    o in z.props
                      ? z.props[o]
                      : (X = z.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X[o],
                  Be =
                    "hide" in z.props
                      ? z.props.hide
                      : (le = z.type.defaultProps) === null || le === void 0
                        ? void 0
                        : le.hide;
                return ve === _ && (S || !Be);
              }),
              x,
              a,
              f,
            );
            F && (T = F);
          }
          h && (w === "number" || g !== "auto") && (I = un(E, x, "category"));
        } else
          h
            ? (T = ta(0, $))
            : u && u[_] && u[_].hasStack && w === "number"
              ? (T = p === "expand" ? [0, 1] : Kd(u[_].stackGroups, c, l))
              : (T = Ld(
                  E,
                  i.filter(function (z) {
                    var X = o in z.props ? z.props[o] : z.type.defaultProps[o],
                      le =
                        "hide" in z.props
                          ? z.props.hide
                          : z.type.defaultProps.hide;
                    return X === _ && (S || !le);
                  }),
                  w,
                  f,
                  !0,
                ));
        if (w === "number") ((T = Bu(s, T, _, a, A)), D && (T = ru(D, T, O)));
        else if (w === "category" && D) {
          var q = D,
            H = T.every(function (z) {
              return q.indexOf(z) >= 0;
            });
          H && (T = q);
        }
      }
      return j(
        j({}, v),
        {},
        K(
          {},
          _,
          j(
            j({}, b),
            {},
            {
              axisType: a,
              domain: T,
              categoricalDomain: I,
              duplicateDomain: M,
              originalDomain: (y = b.domain) !== null && y !== void 0 ? y : k,
              isCategorical: h,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  aR = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.layout,
      s = t.children,
      p = Ka(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: l }),
      h = p.length,
      v = Fd(f, a),
      d = -1;
    return n.reduce(function (y, b) {
      var w =
          b.type.defaultProps !== void 0
            ? j(j({}, b.type.defaultProps), b.props)
            : b.props,
        x = w[o],
        O = iy("number");
      if (!y[x]) {
        d++;
        var m;
        return (
          v
            ? (m = ta(0, h))
            : u && u[x] && u[x].hasStack
              ? ((m = Kd(u[x].stackGroups, c, l)), (m = Bu(s, m, x, a)))
              : ((m = ru(
                  O,
                  Ld(
                    p,
                    n.filter(function (g) {
                      var A,
                        S,
                        _ =
                          o in g.props
                            ? g.props[o]
                            : (A = g.type.defaultProps) === null || A === void 0
                              ? void 0
                              : A[o],
                        E =
                          "hide" in g.props
                            ? g.props.hide
                            : (S = g.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S.hide;
                      return _ === x && !E;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (m = Bu(s, m, x, a))),
          j(
            j({}, y),
            {},
            K(
              {},
              x,
              j(
                j({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: tt(eR, "".concat(a, ".").concat(d % 2), null),
                  domain: m,
                  originalDomain: O,
                  isCategorical: v,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return y;
    }, {});
  },
  oR = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      c = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.children,
      s = "".concat(i, "Id"),
      p = Je(f, a),
      h = {};
    return (
      p && p.length
        ? (h = iR(t, {
            axes: p,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: l,
          }))
        : o &&
          o.length &&
          (h = aR(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: l,
          })),
      h
    );
  },
  uR = function (t) {
    var r = Ot(t),
      n = pt(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: nc(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: zi(r, n),
    };
  },
  Sp = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Fe(r, _r),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  cR = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = nn(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  _p = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  lR = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      c = u === void 0 ? {} : u,
      l = n.width,
      f = n.height,
      s = n.children,
      p = n.margin || {},
      h = Fe(s, _r),
      v = Fe(s, lr),
      d = Object.keys(c).reduce(
        function (m, g) {
          var A = c[g],
            S = A.orientation;
          return !A.mirror && !A.hide
            ? j(j({}, m), {}, K({}, S, m[S] + A.width))
            : m;
        },
        { left: p.left || 0, right: p.right || 0 },
      ),
      y = Object.keys(o).reduce(
        function (m, g) {
          var A = o[g],
            S = A.orientation;
          return !A.mirror && !A.hide
            ? j(j({}, m), {}, K({}, S, tt(m, "".concat(S)) + A.height))
            : m;
        },
        { top: p.top || 0, bottom: p.bottom || 0 },
      ),
      b = j(j({}, y), d),
      w = b.bottom;
    (h && (b.bottom += h.props.height || _r.defaultProps.height),
      v && r && (b = LT(b, i, n, r)));
    var x = l - b.left - b.right,
      O = f - b.top - b.bottom;
    return j(
      j({ brushBottom: w }, b),
      {},
      { width: Math.max(x, 0), height: Math.max(O, 0) },
    );
  },
  sR = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  ay = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      c = t.axisComponents,
      l = t.legendContent,
      f = t.formatAxisMap,
      s = t.defaultProps,
      p = function (b, w) {
        var x = w.graphicalItems,
          O = w.stackGroups,
          m = w.offset,
          g = w.updateId,
          A = w.dataStartIndex,
          S = w.dataEndIndex,
          _ = b.barSize,
          E = b.layout,
          $ = b.barGap,
          T = b.barCategoryGap,
          M = b.maxBarSize,
          I = _p(E),
          k = I.numericAxisName,
          N = I.cateAxisName,
          D = cR(x),
          L = [];
        return (
          x.forEach(function (F, q) {
            var H = Ka(b.data, {
                graphicalItems: [F],
                dataStartIndex: A,
                dataEndIndex: S,
              }),
              z =
                F.type.defaultProps !== void 0
                  ? j(j({}, F.type.defaultProps), F.props)
                  : F.props,
              X = z.dataKey,
              le = z.maxBarSize,
              ve = z["".concat(k, "Id")],
              Be = z["".concat(N, "Id")],
              Mt = {},
              Ne = c.reduce(function (It, kt) {
                var Ga = w["".concat(kt.axisType, "Map")],
                  qc = z["".concat(kt.axisType, "Id")];
                (Ga && Ga[qc]) || kt.axisType === "zAxis" || Vt();
                var Kc = Ga[qc];
                return j(
                  j({}, It),
                  {},
                  K(
                    K({}, kt.axisType, Kc),
                    "".concat(kt.axisType, "Ticks"),
                    pt(Kc),
                  ),
                );
              }, Mt),
              W = Ne[N],
              Y = Ne["".concat(N, "Ticks")],
              Z = O && O[ve] && O[ve].hasStack && YT(F, O[ve].stackGroups),
              C = nn(F.type).indexOf("Bar") >= 0,
              he = zi(W, Y),
              ee = [],
              ge =
                D && RT({ barSize: _, stackGroups: O, totalSize: sR(Ne, N) });
            if (C) {
              var be,
                De,
                bt = Q(le) ? M : le,
                er =
                  (be =
                    (De = zi(W, Y, !0)) !== null && De !== void 0 ? De : bt) !==
                    null && be !== void 0
                    ? be
                    : 0;
              ((ee = BT({
                barGap: $,
                barCategoryGap: T,
                bandSize: er !== he ? er : he,
                sizeList: ge[Be],
                maxBarSize: bt,
              })),
                er !== he &&
                  (ee = ee.map(function (It) {
                    return j(
                      j({}, It),
                      {},
                      {
                        position: j(
                          j({}, It.position),
                          {},
                          { offset: It.position.offset - er / 2 },
                        ),
                      },
                    );
                  })));
            }
            var Qn = F && F.type && F.type.getComposedData;
            Qn &&
              L.push({
                props: j(
                  j(
                    {},
                    Qn(
                      j(
                        j({}, Ne),
                        {},
                        {
                          displayedData: H,
                          props: b,
                          dataKey: X,
                          item: F,
                          bandSize: he,
                          barPosition: ee,
                          offset: m,
                          stackedData: Z,
                          layout: E,
                          dataStartIndex: A,
                          dataEndIndex: S,
                        },
                      ),
                    ),
                  ),
                  {},
                  K(
                    K(
                      K({ key: F.key || "item-".concat(q) }, k, Ne[k]),
                      N,
                      Ne[N],
                    ),
                    "animationId",
                    g,
                  ),
                ),
                childIndex: my(F, b.children),
                item: F,
              });
          }),
          L
        );
      },
      h = function (b, w) {
        var x = b.props,
          O = b.dataStartIndex,
          m = b.dataEndIndex,
          g = b.updateId;
        if (!Xc({ props: x })) return null;
        var A = x.children,
          S = x.layout,
          _ = x.stackOffset,
          E = x.data,
          $ = x.reverseStackOrder,
          T = _p(S),
          M = T.numericAxisName,
          I = T.cateAxisName,
          k = Je(A, n),
          N = XT(E, k, "".concat(M, "Id"), "".concat(I, "Id"), _, $),
          D = c.reduce(function (z, X) {
            var le = "".concat(X.axisType, "Map");
            return j(
              j({}, z),
              {},
              K(
                {},
                le,
                oR(
                  x,
                  j(
                    j({}, X),
                    {},
                    {
                      graphicalItems: k,
                      stackGroups: X.axisType === M && N,
                      dataStartIndex: O,
                      dataEndIndex: m,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          L = lR(
            j(j({}, D), {}, { props: x, graphicalItems: k }),
            w == null ? void 0 : w.legendBBox,
          );
        Object.keys(D).forEach(function (z) {
          D[z] = f(x, D[z], L, z.replace("Map", ""), r);
        });
        var F = D["".concat(I, "Map")],
          q = uR(F),
          H = p(
            x,
            j(
              j({}, D),
              {},
              {
                dataStartIndex: O,
                dataEndIndex: m,
                updateId: g,
                graphicalItems: k,
                stackGroups: N,
                offset: L,
              },
            ),
          );
        return j(
          j(
            {
              formattedGraphicalItems: H,
              graphicalItems: k,
              offset: L,
              stackGroups: N,
            },
            q,
          ),
          D,
        );
      },
      v = (function (y) {
        function b(w) {
          var x, O, m;
          return (
            zD(this, b),
            (m = GD(this, b, [w])),
            K(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            K(m, "accessibilityManager", new ED()),
            K(m, "handleLegendBBoxUpdate", function (g) {
              if (g) {
                var A = m.state,
                  S = A.dataStartIndex,
                  _ = A.dataEndIndex,
                  E = A.updateId;
                m.setState(
                  j(
                    { legendBBox: g },
                    h(
                      {
                        props: m.props,
                        dataStartIndex: S,
                        dataEndIndex: _,
                        updateId: E,
                      },
                      j(j({}, m.state), {}, { legendBBox: g }),
                    ),
                  ),
                );
              }
            }),
            K(m, "handleReceiveSyncEvent", function (g, A, S) {
              if (m.props.syncId === g) {
                if (
                  S === m.eventEmitterSymbol &&
                  typeof m.props.syncMethod != "function"
                )
                  return;
                m.applySyncEvent(A);
              }
            }),
            K(m, "handleBrushChange", function (g) {
              var A = g.startIndex,
                S = g.endIndex;
              if (A !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
                var _ = m.state.updateId;
                (m.setState(function () {
                  return j(
                    { dataStartIndex: A, dataEndIndex: S },
                    h(
                      {
                        props: m.props,
                        dataStartIndex: A,
                        dataEndIndex: S,
                        updateId: _,
                      },
                      m.state,
                    ),
                  );
                }),
                  m.triggerSyncEvent({ dataStartIndex: A, dataEndIndex: S }));
              }
            }),
            K(m, "handleMouseEnter", function (g) {
              var A = m.getMouseInfo(g);
              if (A) {
                var S = j(j({}, A), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var _ = m.props.onMouseEnter;
                V(_) && _(S, g);
              }
            }),
            K(m, "triggeredAfterMouseMove", function (g) {
              var A = m.getMouseInfo(g),
                S = A
                  ? j(j({}, A), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              (m.setState(S), m.triggerSyncEvent(S));
              var _ = m.props.onMouseMove;
              V(_) && _(S, g);
            }),
            K(m, "handleItemMouseEnter", function (g) {
              m.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: g,
                  activePayload: g.tooltipPayload,
                  activeCoordinate: g.tooltipPosition || { x: g.cx, y: g.cy },
                };
              });
            }),
            K(m, "handleItemMouseLeave", function () {
              m.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            K(m, "handleMouseMove", function (g) {
              (g.persist(), m.throttleTriggeredAfterMouseMove(g));
            }),
            K(m, "handleMouseLeave", function (g) {
              m.throttleTriggeredAfterMouseMove.cancel();
              var A = { isTooltipActive: !1 };
              (m.setState(A), m.triggerSyncEvent(A));
              var S = m.props.onMouseLeave;
              V(S) && S(A, g);
            }),
            K(m, "handleOuterEvent", function (g) {
              var A = by(g),
                S = tt(m.props, "".concat(A));
              if (A && V(S)) {
                var _, E;
                (/.*touch.*/i.test(A)
                  ? (E = m.getMouseInfo(g.changedTouches[0]))
                  : (E = m.getMouseInfo(g)),
                  S((_ = E) !== null && _ !== void 0 ? _ : {}, g));
              }
            }),
            K(m, "handleClick", function (g) {
              var A = m.getMouseInfo(g);
              if (A) {
                var S = j(j({}, A), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var _ = m.props.onClick;
                V(_) && _(S, g);
              }
            }),
            K(m, "handleMouseDown", function (g) {
              var A = m.props.onMouseDown;
              if (V(A)) {
                var S = m.getMouseInfo(g);
                A(S, g);
              }
            }),
            K(m, "handleMouseUp", function (g) {
              var A = m.props.onMouseUp;
              if (V(A)) {
                var S = m.getMouseInfo(g);
                A(S, g);
              }
            }),
            K(m, "handleTouchMove", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.throttleTriggeredAfterMouseMove(g.changedTouches[0]);
            }),
            K(m, "handleTouchStart", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.handleMouseDown(g.changedTouches[0]);
            }),
            K(m, "handleTouchEnd", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.handleMouseUp(g.changedTouches[0]);
            }),
            K(m, "handleDoubleClick", function (g) {
              var A = m.props.onDoubleClick;
              if (V(A)) {
                var S = m.getMouseInfo(g);
                A(S, g);
              }
            }),
            K(m, "handleContextMenu", function (g) {
              var A = m.props.onContextMenu;
              if (V(A)) {
                var S = m.getMouseInfo(g);
                A(S, g);
              }
            }),
            K(m, "triggerSyncEvent", function (g) {
              m.props.syncId !== void 0 &&
                vo.emit(yo, m.props.syncId, g, m.eventEmitterSymbol);
            }),
            K(m, "applySyncEvent", function (g) {
              var A = m.props,
                S = A.layout,
                _ = A.syncMethod,
                E = m.state.updateId,
                $ = g.dataStartIndex,
                T = g.dataEndIndex;
              if (g.dataStartIndex !== void 0 || g.dataEndIndex !== void 0)
                m.setState(
                  j(
                    { dataStartIndex: $, dataEndIndex: T },
                    h(
                      {
                        props: m.props,
                        dataStartIndex: $,
                        dataEndIndex: T,
                        updateId: E,
                      },
                      m.state,
                    ),
                  ),
                );
              else if (g.activeTooltipIndex !== void 0) {
                var M = g.chartX,
                  I = g.chartY,
                  k = g.activeTooltipIndex,
                  N = m.state,
                  D = N.offset,
                  L = N.tooltipTicks;
                if (!D) return;
                if (typeof _ == "function") k = _(L, g);
                else if (_ === "value") {
                  k = -1;
                  for (var F = 0; F < L.length; F++)
                    if (L[F].value === g.activeLabel) {
                      k = F;
                      break;
                    }
                }
                var q = j(j({}, D), {}, { x: D.left, y: D.top }),
                  H = Math.min(M, q.x + q.width),
                  z = Math.min(I, q.y + q.height),
                  X = L[k] && L[k].value,
                  le = Wu(m.state, m.props.data, k),
                  ve = L[k]
                    ? {
                        x: S === "horizontal" ? L[k].coordinate : H,
                        y: S === "horizontal" ? z : L[k].coordinate,
                      }
                    : ny;
                m.setState(
                  j(
                    j({}, g),
                    {},
                    {
                      activeLabel: X,
                      activeCoordinate: ve,
                      activePayload: le,
                      activeTooltipIndex: k,
                    },
                  ),
                );
              } else m.setState(g);
            }),
            K(m, "renderCursor", function (g) {
              var A,
                S = m.state,
                _ = S.isTooltipActive,
                E = S.activeCoordinate,
                $ = S.activePayload,
                T = S.offset,
                M = S.activeTooltipIndex,
                I = S.tooltipAxisBandSize,
                k = m.getTooltipEventType(),
                N = (A = g.props.active) !== null && A !== void 0 ? A : _,
                D = m.props.layout,
                L = g.key || "_recharts-cursor";
              return P.createElement(DD, {
                key: L,
                activeCoordinate: E,
                activePayload: $,
                activeTooltipIndex: M,
                chartName: r,
                element: g,
                isActive: N,
                layout: D,
                offset: T,
                tooltipAxisBandSize: I,
                tooltipEventType: k,
              });
            }),
            K(m, "renderPolarAxis", function (g, A, S) {
              var _ = tt(g, "type.axisType"),
                E = tt(m.state, "".concat(_, "Map")),
                $ = g.type.defaultProps,
                T = $ !== void 0 ? j(j({}, $), g.props) : g.props,
                M = E && E[T["".concat(_, "Id")]];
              return B.cloneElement(
                g,
                j(
                  j({}, M),
                  {},
                  {
                    className: J(_, M.className),
                    key: g.key || "".concat(A, "-").concat(S),
                    ticks: pt(M, !0),
                  },
                ),
              );
            }),
            K(m, "renderPolarGrid", function (g) {
              var A = g.props,
                S = A.radialLines,
                _ = A.polarAngles,
                E = A.polarRadius,
                $ = m.state,
                T = $.radiusAxisMap,
                M = $.angleAxisMap,
                I = Ot(T),
                k = Ot(M),
                N = k.cx,
                D = k.cy,
                L = k.innerRadius,
                F = k.outerRadius;
              return B.cloneElement(g, {
                polarAngles: Array.isArray(_)
                  ? _
                  : pt(k, !0).map(function (q) {
                      return q.coordinate;
                    }),
                polarRadius: Array.isArray(E)
                  ? E
                  : pt(I, !0).map(function (q) {
                      return q.coordinate;
                    }),
                cx: N,
                cy: D,
                innerRadius: L,
                outerRadius: F,
                key: g.key || "polar-grid",
                radialLines: S,
              });
            }),
            K(m, "renderLegend", function () {
              var g = m.state.formattedGraphicalItems,
                A = m.props,
                S = A.children,
                _ = A.width,
                E = A.height,
                $ = m.props.margin || {},
                T = _ - ($.left || 0) - ($.right || 0),
                M = Rd({
                  children: S,
                  formattedGraphicalItems: g,
                  legendWidth: T,
                  legendContent: l,
                });
              if (!M) return null;
              var I = M.item,
                k = Op(M, RD);
              return B.cloneElement(
                I,
                j(
                  j({}, k),
                  {},
                  {
                    chartWidth: _,
                    chartHeight: E,
                    margin: $,
                    onBBoxUpdate: m.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            K(m, "renderTooltip", function () {
              var g,
                A = m.props,
                S = A.children,
                _ = A.accessibilityLayer,
                E = Fe(S, ct);
              if (!E) return null;
              var $ = m.state,
                T = $.isTooltipActive,
                M = $.activeCoordinate,
                I = $.activePayload,
                k = $.activeLabel,
                N = $.offset,
                D = (g = E.props.active) !== null && g !== void 0 ? g : T;
              return B.cloneElement(E, {
                viewBox: j(j({}, N), {}, { x: N.left, y: N.top }),
                active: D,
                label: k,
                payload: D ? I : [],
                coordinate: M,
                accessibilityLayer: _,
              });
            }),
            K(m, "renderBrush", function (g) {
              var A = m.props,
                S = A.margin,
                _ = A.data,
                E = m.state,
                $ = E.offset,
                T = E.dataStartIndex,
                M = E.dataEndIndex,
                I = E.updateId;
              return B.cloneElement(g, {
                key: g.key || "_recharts-brush",
                onChange: ui(m.handleBrushChange, g.props.onChange),
                data: _,
                x: R(g.props.x) ? g.props.x : $.left,
                y: R(g.props.y)
                  ? g.props.y
                  : $.top + $.height + $.brushBottom - (S.bottom || 0),
                width: R(g.props.width) ? g.props.width : $.width,
                startIndex: T,
                endIndex: M,
                updateId: "brush-".concat(I),
              });
            }),
            K(m, "renderReferenceElement", function (g, A, S) {
              if (!g) return null;
              var _ = m,
                E = _.clipPathId,
                $ = m.state,
                T = $.xAxisMap,
                M = $.yAxisMap,
                I = $.offset,
                k = g.type.defaultProps || {},
                N = g.props,
                D = N.xAxisId,
                L = D === void 0 ? k.xAxisId : D,
                F = N.yAxisId,
                q = F === void 0 ? k.yAxisId : F;
              return B.cloneElement(g, {
                key: g.key || "".concat(A, "-").concat(S),
                xAxis: T[L],
                yAxis: M[q],
                viewBox: {
                  x: I.left,
                  y: I.top,
                  width: I.width,
                  height: I.height,
                },
                clipPathId: E,
              });
            }),
            K(m, "renderActivePoints", function (g) {
              var A = g.item,
                S = g.activePoint,
                _ = g.basePoint,
                E = g.childIndex,
                $ = g.isRange,
                T = [],
                M = A.props.key,
                I =
                  A.item.type.defaultProps !== void 0
                    ? j(j({}, A.item.type.defaultProps), A.item.props)
                    : A.item.props,
                k = I.activeDot,
                N = I.dataKey,
                D = j(
                  j(
                    {
                      index: E,
                      dataKey: N,
                      cx: S.x,
                      cy: S.y,
                      r: 4,
                      fill: jc(A.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: S.payload,
                      value: S.value,
                    },
                    G(k, !1),
                  ),
                  yi(k),
                );
              return (
                T.push(
                  b.renderActiveDot(
                    k,
                    D,
                    "".concat(M, "-activePoint-").concat(E),
                  ),
                ),
                _
                  ? T.push(
                      b.renderActiveDot(
                        k,
                        j(j({}, D), {}, { cx: _.x, cy: _.y }),
                        "".concat(M, "-basePoint-").concat(E),
                      ),
                    )
                  : $ && T.push(null),
                T
              );
            }),
            K(m, "renderGraphicChild", function (g, A, S) {
              var _ = m.filterFormatItem(g, A, S);
              if (!_) return null;
              var E = m.getTooltipEventType(),
                $ = m.state,
                T = $.isTooltipActive,
                M = $.tooltipAxis,
                I = $.activeTooltipIndex,
                k = $.activeLabel,
                N = m.props.children,
                D = Fe(N, ct),
                L = _.props,
                F = L.points,
                q = L.isRange,
                H = L.baseLine,
                z =
                  _.item.type.defaultProps !== void 0
                    ? j(j({}, _.item.type.defaultProps), _.item.props)
                    : _.item.props,
                X = z.activeDot,
                le = z.hide,
                ve = z.activeBar,
                Be = z.activeShape,
                Mt = !!(!le && T && D && (X || ve || Be)),
                Ne = {};
              E !== "axis" && D && D.props.trigger === "click"
                ? (Ne = {
                    onClick: ui(m.handleItemMouseEnter, g.props.onClick),
                  })
                : E !== "axis" &&
                  (Ne = {
                    onMouseLeave: ui(
                      m.handleItemMouseLeave,
                      g.props.onMouseLeave,
                    ),
                    onMouseEnter: ui(
                      m.handleItemMouseEnter,
                      g.props.onMouseEnter,
                    ),
                  });
              var W = B.cloneElement(g, j(j({}, _.props), Ne));
              function Y(kt) {
                return typeof M.dataKey == "function"
                  ? M.dataKey(kt.payload)
                  : null;
              }
              if (Mt)
                if (I >= 0) {
                  var Z, C;
                  if (M.dataKey && !M.allowDuplicatedCategory) {
                    var he =
                      typeof M.dataKey == "function"
                        ? Y
                        : "payload.".concat(M.dataKey.toString());
                    ((Z = vi(F, he, k)), (C = q && H && vi(H, he, k)));
                  } else
                    ((Z = F == null ? void 0 : F[I]), (C = q && H && H[I]));
                  if (Be || ve) {
                    var ee =
                      g.props.activeIndex !== void 0 ? g.props.activeIndex : I;
                    return [
                      B.cloneElement(
                        g,
                        j(j(j({}, _.props), Ne), {}, { activeIndex: ee }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!Q(Z))
                    return [W].concat(
                      Nr(
                        m.renderActivePoints({
                          item: _,
                          activePoint: Z,
                          basePoint: C,
                          childIndex: I,
                          isRange: q,
                        }),
                      ),
                    );
                } else {
                  var ge,
                    be =
                      (ge = m.getItemByXY(m.state.activeCoordinate)) !== null &&
                      ge !== void 0
                        ? ge
                        : { graphicalItem: W },
                    De = be.graphicalItem,
                    bt = De.item,
                    er = bt === void 0 ? g : bt,
                    Qn = De.childIndex,
                    It = j(j(j({}, _.props), Ne), {}, { activeIndex: Qn });
                  return [B.cloneElement(er, It), null, null];
                }
              return q ? [W, null, null] : [W, null];
            }),
            K(m, "renderCustomized", function (g, A, S) {
              return B.cloneElement(
                g,
                j(
                  j({ key: "recharts-customized-".concat(S) }, m.props),
                  m.state,
                ),
              );
            }),
            K(m, "renderMap", {
              CartesianGrid: { handler: pi, once: !0 },
              ReferenceArea: { handler: m.renderReferenceElement },
              ReferenceLine: { handler: pi },
              ReferenceDot: { handler: m.renderReferenceElement },
              XAxis: { handler: pi },
              YAxis: { handler: pi },
              Brush: { handler: m.renderBrush, once: !0 },
              Bar: { handler: m.renderGraphicChild },
              Line: { handler: m.renderGraphicChild },
              Area: { handler: m.renderGraphicChild },
              Radar: { handler: m.renderGraphicChild },
              RadialBar: { handler: m.renderGraphicChild },
              Scatter: { handler: m.renderGraphicChild },
              Pie: { handler: m.renderGraphicChild },
              Funnel: { handler: m.renderGraphicChild },
              Tooltip: { handler: m.renderCursor, once: !0 },
              PolarGrid: { handler: m.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: m.renderPolarAxis },
              PolarRadiusAxis: { handler: m.renderPolarAxis },
              Customized: { handler: m.renderCustomized },
            }),
            (m.clipPathId = "".concat(
              (x = w.id) !== null && x !== void 0 ? x : Hn("recharts"),
              "-clip",
            )),
            (m.throttleTriggeredAfterMouseMove = xy(
              m.triggeredAfterMouseMove,
              (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60,
            )),
            (m.state = {}),
            m
          );
        }
        return (
          VD(b, y),
          KD(b, [
            {
              key: "componentDidMount",
              value: function () {
                var x, O;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (x = this.props.margin.left) !== null && x !== void 0
                          ? x
                          : 0,
                      top:
                        (O = this.props.margin.top) !== null && O !== void 0
                          ? O
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var x = this.props,
                  O = x.children,
                  m = x.data,
                  g = x.height,
                  A = x.layout,
                  S = Fe(O, ct);
                if (S) {
                  var _ = S.props.defaultIndex;
                  if (
                    !(
                      typeof _ != "number" ||
                      _ < 0 ||
                      _ > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var E =
                        this.state.tooltipTicks[_] &&
                        this.state.tooltipTicks[_].value,
                      $ = Wu(this.state, m, _, E),
                      T = this.state.tooltipTicks[_].coordinate,
                      M = (this.state.offset.top + g) / 2,
                      I = A === "horizontal",
                      k = I ? { x: T, y: M } : { y: T, x: M },
                      N = this.state.formattedGraphicalItems.find(function (L) {
                        var F = L.item;
                        return F.type.name === "Scatter";
                      });
                    N &&
                      ((k = j(j({}, k), N.props.points[_].tooltipPosition)),
                      ($ = N.props.points[_].tooltipPayload));
                    var D = {
                      activeTooltipIndex: _,
                      isTooltipActive: !0,
                      activeLabel: E,
                      activePayload: $,
                      activeCoordinate: k,
                    };
                    (this.setState(D),
                      this.renderCursor(S),
                      this.accessibilityManager.setIndex(_));
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (x, O) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== O.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== x.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== x.margin)
                ) {
                  var m, g;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (m = this.props.margin.left) !== null && m !== void 0
                          ? m
                          : 0,
                      top:
                        (g = this.props.margin.top) !== null && g !== void 0
                          ? g
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (x) {
                Hc([Fe(x.children, ct)], [Fe(this.props.children, ct)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var x = Fe(this.props.children, ct);
                if (x && typeof x.props.shared == "boolean") {
                  var O = x.props.shared ? "axis" : "item";
                  return u.indexOf(O) >= 0 ? O : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (x) {
                if (!this.container) return null;
                var O = this.container,
                  m = O.getBoundingClientRect(),
                  g = sP(m),
                  A = {
                    chartX: Math.round(x.pageX - g.left),
                    chartY: Math.round(x.pageY - g.top),
                  },
                  S = m.width / O.offsetWidth || 1,
                  _ = this.inRange(A.chartX, A.chartY, S);
                if (!_) return null;
                var E = this.state,
                  $ = E.xAxisMap,
                  T = E.yAxisMap,
                  M = this.getTooltipEventType(),
                  I = Pp(this.state, this.props.data, this.props.layout, _);
                if (M !== "axis" && $ && T) {
                  var k = Ot($).scale,
                    N = Ot(T).scale,
                    D = k && k.invert ? k.invert(A.chartX) : null,
                    L = N && N.invert ? N.invert(A.chartY) : null;
                  return j(j({}, A), {}, { xValue: D, yValue: L }, I);
                }
                return I ? j(j({}, A), I) : null;
              },
            },
            {
              key: "inRange",
              value: function (x, O) {
                var m =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  g = this.props.layout,
                  A = x / m,
                  S = O / m;
                if (g === "horizontal" || g === "vertical") {
                  var _ = this.state.offset,
                    E =
                      A >= _.left &&
                      A <= _.left + _.width &&
                      S >= _.top &&
                      S <= _.top + _.height;
                  return E ? { x: A, y: S } : null;
                }
                var $ = this.state,
                  T = $.angleAxisMap,
                  M = $.radiusAxisMap;
                if (T && M) {
                  var I = Ot(T);
                  return Zs({ x: A, y: S }, I);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var x = this.props.children,
                  O = this.getTooltipEventType(),
                  m = Fe(x, ct),
                  g = {};
                m &&
                  O === "axis" &&
                  (m.props.trigger === "click"
                    ? (g = { onClick: this.handleClick })
                    : (g = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var A = yi(this.props, this.handleOuterEvent);
                return j(j({}, A), g);
              },
            },
            {
              key: "addListener",
              value: function () {
                vo.on(yo, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                vo.removeListener(yo, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (x, O, m) {
                for (
                  var g = this.state.formattedGraphicalItems,
                    A = 0,
                    S = g.length;
                  A < S;
                  A++
                ) {
                  var _ = g[A];
                  if (
                    _.item === x ||
                    _.props.key === x.key ||
                    (O === nn(_.item.type) && m === _.childIndex)
                  )
                    return _;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var x = this.clipPathId,
                  O = this.state.offset,
                  m = O.left,
                  g = O.top,
                  A = O.height,
                  S = O.width;
                return P.createElement(
                  "defs",
                  null,
                  P.createElement(
                    "clipPath",
                    { id: x },
                    P.createElement("rect", {
                      x: m,
                      y: g,
                      height: A,
                      width: S,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var x = this.state.xAxisMap;
                return x
                  ? Object.entries(x).reduce(function (O, m) {
                      var g = wp(m, 2),
                        A = g[0],
                        S = g[1];
                      return j(j({}, O), {}, K({}, A, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var x = this.state.yAxisMap;
                return x
                  ? Object.entries(x).reduce(function (O, m) {
                      var g = wp(m, 2),
                        A = g[0],
                        S = g[1];
                      return j(j({}, O), {}, K({}, A, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (x) {
                var O;
                return (O = this.state.xAxisMap) === null ||
                  O === void 0 ||
                  (O = O[x]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (x) {
                var O;
                return (O = this.state.yAxisMap) === null ||
                  O === void 0 ||
                  (O = O[x]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (x) {
                var O = this.state,
                  m = O.formattedGraphicalItems,
                  g = O.activeItem;
                if (m && m.length)
                  for (var A = 0, S = m.length; A < S; A++) {
                    var _ = m[A],
                      E = _.props,
                      $ = _.item,
                      T =
                        $.type.defaultProps !== void 0
                          ? j(j({}, $.type.defaultProps), $.props)
                          : $.props,
                      M = nn($.type);
                    if (M === "Bar") {
                      var I = (E.data || []).find(function (L) {
                        return GM(x, L);
                      });
                      if (I) return { graphicalItem: _, payload: I };
                    } else if (M === "RadialBar") {
                      var k = (E.data || []).find(function (L) {
                        return Zs(x, L);
                      });
                      if (k) return { graphicalItem: _, payload: k };
                    } else if (Ba(_, g) || La(_, g) || Bn(_, g)) {
                      var N = Ck({
                          graphicalItem: _,
                          activeTooltipItem: g,
                          itemData: T.data,
                        }),
                        D = T.activeIndex === void 0 ? N : T.activeIndex;
                      return {
                        graphicalItem: j(j({}, _), {}, { childIndex: D }),
                        payload: Bn(_, g) ? T.data[N] : _.props.data[N],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var x = this;
                if (!Xc(this)) return null;
                var O = this.props,
                  m = O.children,
                  g = O.className,
                  A = O.width,
                  S = O.height,
                  _ = O.style,
                  E = O.compact,
                  $ = O.title,
                  T = O.desc,
                  M = Op(O, BD),
                  I = G(M, !1);
                if (E)
                  return P.createElement(
                    op,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    P.createElement(
                      bo,
                      cr({}, I, { width: A, height: S, title: $, desc: T }),
                      this.renderClipPath(),
                      Vc(m, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var k, N;
                  ((I.tabIndex =
                    (k = this.props.tabIndex) !== null && k !== void 0 ? k : 0),
                    (I.role =
                      (N = this.props.role) !== null && N !== void 0
                        ? N
                        : "application"),
                    (I.onKeyDown = function (L) {
                      x.accessibilityManager.keyboardEvent(L);
                    }),
                    (I.onFocus = function () {
                      x.accessibilityManager.focus();
                    }));
                }
                var D = this.parseEventsOfWrapper();
                return P.createElement(
                  op,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  P.createElement(
                    "div",
                    cr(
                      {
                        className: J("recharts-wrapper", g),
                        style: j(
                          {
                            position: "relative",
                            cursor: "default",
                            width: A,
                            height: S,
                          },
                          _,
                        ),
                      },
                      D,
                      {
                        ref: function (F) {
                          x.container = F;
                        },
                      },
                    ),
                    P.createElement(
                      bo,
                      cr({}, I, {
                        width: A,
                        height: S,
                        title: $,
                        desc: T,
                        style: tR,
                      }),
                      this.renderClipPath(),
                      Vc(m, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(B.Component);
    (K(v, "displayName", r),
      K(
        v,
        "defaultProps",
        j(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          s,
        ),
      ),
      K(v, "getDerivedStateFromProps", function (y, b) {
        var w = y.dataKey,
          x = y.data,
          O = y.children,
          m = y.width,
          g = y.height,
          A = y.layout,
          S = y.stackOffset,
          _ = y.margin,
          E = b.dataStartIndex,
          $ = b.dataEndIndex;
        if (b.updateId === void 0) {
          var T = Sp(y);
          return j(
            j(
              j({}, T),
              {},
              { updateId: 0 },
              h(j(j({ props: y }, T), {}, { updateId: 0 }), b),
            ),
            {},
            {
              prevDataKey: w,
              prevData: x,
              prevWidth: m,
              prevHeight: g,
              prevLayout: A,
              prevStackOffset: S,
              prevMargin: _,
              prevChildren: O,
            },
          );
        }
        if (
          w !== b.prevDataKey ||
          x !== b.prevData ||
          m !== b.prevWidth ||
          g !== b.prevHeight ||
          A !== b.prevLayout ||
          S !== b.prevStackOffset ||
          !hi(_, b.prevMargin)
        ) {
          var M = Sp(y),
            I = {
              chartX: b.chartX,
              chartY: b.chartY,
              isTooltipActive: b.isTooltipActive,
            },
            k = j(j({}, Pp(b, x, A)), {}, { updateId: b.updateId + 1 }),
            N = j(j(j({}, M), I), k);
          return j(
            j(j({}, N), h(j({ props: y }, N), b)),
            {},
            {
              prevDataKey: w,
              prevData: x,
              prevWidth: m,
              prevHeight: g,
              prevLayout: A,
              prevStackOffset: S,
              prevMargin: _,
              prevChildren: O,
            },
          );
        }
        if (!Hc(O, b.prevChildren)) {
          var D,
            L,
            F,
            q,
            H = Fe(O, _r),
            z =
              H &&
              (D =
                (L = H.props) === null || L === void 0
                  ? void 0
                  : L.startIndex) !== null &&
              D !== void 0
                ? D
                : E,
            X =
              H &&
              (F =
                (q = H.props) === null || q === void 0
                  ? void 0
                  : q.endIndex) !== null &&
              F !== void 0
                ? F
                : $,
            le = z !== E || X !== $,
            ve = !Q(x),
            Be = ve && !le ? b.updateId : b.updateId + 1;
          return j(
            j(
              { updateId: Be },
              h(
                j(
                  j({ props: y }, b),
                  {},
                  { updateId: Be, dataStartIndex: z, dataEndIndex: X },
                ),
                b,
              ),
            ),
            {},
            { prevChildren: O, dataStartIndex: z, dataEndIndex: X },
          );
        }
        return null;
      }),
      K(v, "renderActiveDot", function (y, b, w) {
        var x;
        return (
          B.isValidElement(y)
            ? (x = B.cloneElement(y, b))
            : V(y)
              ? (x = y(b))
              : (x = P.createElement(Ic, b)),
          P.createElement(ne, { className: "recharts-active-dot", key: w }, x)
        );
      }));
    var d = B.forwardRef(function (b, w) {
      return P.createElement(v, cr({}, b, { ref: w }));
    });
    return ((d.displayName = v.displayName), d);
  },
  dR = ay({
    chartName: "BarChart",
    GraphicalChild: Kr,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: Uc },
      { axisType: "yAxis", AxisComp: zc },
    ],
    formatAxisMap: pC,
  }),
  vR = ay({
    chartName: "PieChart",
    GraphicalChild: jt,
    validateTooltipEventTypes: ["item"],
    defaultTooltipEventType: "item",
    legendContent: "children",
    axisComponents: [
      { axisType: "angleAxis", AxisComp: Ra },
      { axisType: "radiusAxis", AxisComp: Na },
    ],
    formatAxisMap: oE,
    defaultProps: {
      layout: "centric",
      startAngle: 0,
      endAngle: 360,
      cx: "50%",
      cy: "50%",
      innerRadius: 0,
      outerRadius: "80%",
    },
  });
export {
  mt as A,
  dR as B,
  uu as C,
  Ic as D,
  Wr as G,
  ne as L,
  vR as P,
  ct as T,
  Uc as X,
  zc as Y,
  St as a,
  hR as b,
  ay as c,
  eD as d,
  Kr as e,
  pC as f,
  Ee as g,
  jt as h,
  ja as i,
  ac as j,
  lr as k,
  Ta as m,
};
