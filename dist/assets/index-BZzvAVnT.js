const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Index-CWrudiRn.js",
      "assets/sheet-BaoXq4Bv.js",
      "assets/index-lGW99eWD.js",
      "assets/vendor-BgR6OOld.js",
      "assets/index-DaXQxPyL.js",
      "assets/utils-C25gojUd.js",
      "assets/router-D2JcpG7e.js",
      "assets/BrandName-3XvNqLPU.js",
      "assets/LogoIcon-DLwUl9vD.js",
      "assets/dropdown-menu-DR3vwdOX.js",
      "assets/index-CIr2Jy9Y.js",
      "assets/index-DUaPDS5r.js",
      "assets/card-DCmFy9yX.js",
      "assets/paper-SMOssrFO.js",
      "assets/Dashboard-Atualizado-D1MX2DfH.js",
      "assets/useReports-z4fPyFcR.js",
      "assets/useQuery-fq0IAKu-.js",
      "assets/mockReports-3cW05Ka2.js",
      "assets/badge-DMGJasfj.js",
      "assets/skeleton-CjN6GZmr.js",
      "assets/kpi-card-CWRTA62G.js",
      "assets/tabs-C6dO4E1n.js",
      "assets/ReportsList-C6qR2I7Y.js",
      "assets/input-BnDZujQi.js",
      "assets/select-BPvc3et1.js",
      "assets/index-Cda9Zv0V.js",
      "assets/AISidebar-Nt5highz.js",
      "assets/ReportBuilder-BG14jAPg.js",
      "assets/alert-D4BI-VHt.js",
      "assets/label-DNWlrZfM.js",
      "assets/textarea-BnFcy4sU.js",
      "assets/DiagnosticSection-DZ2La2mX.js",
      "assets/PieChart-B46FBJBd.js",
      "assets/PriorityCard-BWrVvT5h.js",
      "assets/ReportDetail-TpyDypmx.js",
      "assets/Folders-CS1kRXY0.js",
      "assets/FolderDetail-CJoSBHvX.js",
      "assets/Profile-BgSmaTYZ.js",
      "assets/avatar-BJFpRB7u.js",
      "assets/Settings-C6NnKVRz.js",
      "assets/switch-Dz0YrQNx.js",
      "assets/separator-qS5yNAIC.js",
      "assets/Priorities-4cSL1qfN.js",
      "assets/dialog-CVqcLEoi.js",
      "assets/mockBusiness-BBPynaQW.js",
      "assets/ActionPlan-Bg0s0qfa.js",
      "assets/ConsolidatedDashboard-Atualizado-BD6DCMlI.js",
      "assets/progress-Bi2Hl20I.js",
      "assets/MetricsDashboard-Otimizado-BgeeGMu9.js",
      "assets/useMetricsLibrary-B2_jC9cv.js",
      "assets/useCrossDomainAnalytics-DL7eraVZ.js",
      "assets/OrganizationManager-CFmn231i.js",
      "assets/TemplateManager-B8rlBMnF.js",
      "assets/DecisionPanel-DlOUpRrJ.js",
      "assets/MetricsConfig-mb5RO1YV.js",
      "assets/AdvancedAnalytics-ZwELAGNH.js",
      "assets/NotFound-xETN24bW.js",
      "assets/Login-CioL209q.js",
      "assets/AuthCallback-CFOXOFmH.js",
      "assets/AppLayout-ByQZLbbD.js",
    ]),
) => i.map((i) => d[i]);
var Ll = Object.defineProperty;
var Ra = (t) => {
  throw TypeError(t);
};
var jl = (t, e, n) =>
  e in t
    ? Ll(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var we = (t, e, n) => jl(t, typeof e != "symbol" ? e + "" : e, n),
  zr = (t, e, n) => e.has(t) || Ra("Cannot " + n);
var A = (t, e, n) => (
    zr(t, e, "read from private field"),
    n ? n.call(t) : e.get(t)
  ),
  H = (t, e, n) =>
    e.has(t)
      ? Ra("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, n),
  F = (t, e, n, r) => (
    zr(t, e, "write to private field"),
    r ? r.call(t, n) : e.set(t, n),
    n
  ),
  oe = (t, e, n) => (zr(t, e, "access private method"), n);
var Hn = (t, e, n, r) => ({
  set _(s) {
    F(t, e, s, n);
  },
  get _() {
    return A(t, e, r);
  },
});
import {
  r as v,
  a as Sr,
  g as Qs,
  b as K,
  R as di,
  v as Nl,
} from "./vendor-BgR6OOld.js";
import {
  u as tn,
  a as ui,
  b as $l,
  N as Xs,
  B as Ml,
  R as Bl,
  c as G,
} from "./router-D2JcpG7e.js";
import { X as Fl, T as Ul, R as ql } from "./utils-C25gojUd.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a);
  }
})();
var pi = { exports: {} },
  Ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vl = v,
  zl = Symbol.for("react.element"),
  Hl = Symbol.for("react.fragment"),
  Gl = Object.prototype.hasOwnProperty,
  Wl = Vl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kl = { key: !0, ref: !0, __self: !0, __source: !0 };
function hi(t, e, n) {
  var r,
    s = {},
    a = null,
    o = null;
  (n !== void 0 && (a = "" + n),
    e.key !== void 0 && (a = "" + e.key),
    e.ref !== void 0 && (o = e.ref));
  for (r in e) Gl.call(e, r) && !Kl.hasOwnProperty(r) && (s[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
  return {
    $$typeof: zl,
    type: t,
    key: a,
    ref: o,
    props: s,
    _owner: Wl.current,
  };
}
Ar.Fragment = Hl;
Ar.jsx = hi;
Ar.jsxs = hi;
pi.exports = Ar;
var y = pi.exports,
  fi,
  Oa = Sr;
((fi = Oa.createRoot), Oa.hydrateRoot);
var Jl = typeof Element < "u",
  Yl = typeof Map == "function",
  Ql = typeof Set == "function",
  Xl = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function or(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    var n, r, s;
    if (Array.isArray(t)) {
      if (((n = t.length), n != e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!or(t[r], e[r])) return !1;
      return !0;
    }
    var a;
    if (Yl && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(r = a.next()).done; )
        if (!e.has(r.value[0])) return !1;
      for (a = t.entries(); !(r = a.next()).done; )
        if (!or(r.value[1], e.get(r.value[0]))) return !1;
      return !0;
    }
    if (Ql && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(r = a.next()).done; )
        if (!e.has(r.value[0])) return !1;
      return !0;
    }
    if (Xl && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((n = t.length), n != e.length)) return !1;
      for (r = n; r-- !== 0; ) if (t[r] !== e[r]) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (
      t.valueOf !== Object.prototype.valueOf &&
      typeof t.valueOf == "function" &&
      typeof e.valueOf == "function"
    )
      return t.valueOf() === e.valueOf();
    if (
      t.toString !== Object.prototype.toString &&
      typeof t.toString == "function" &&
      typeof e.toString == "function"
    )
      return t.toString() === e.toString();
    if (((s = Object.keys(t)), (n = s.length), n !== Object.keys(e).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[r])) return !1;
    if (Jl && t instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (s[r] === "_owner" || s[r] === "__v" || s[r] === "__o") &&
          t.$$typeof
        ) &&
        !or(t[s[r]], e[s[r]])
      )
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var Zl = function (e, n) {
  try {
    return or(e, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw r;
  }
};
const ed = Qs(Zl);
var td = function (t, e, n, r, s, a, o, i) {
    if (!t) {
      var c;
      if (e === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var l = [n, r, s, a, o, i],
          d = 0;
        ((c = new Error(
          e.replace(/%s/g, function () {
            return l[d++];
          }),
        )),
          (c.name = "Invariant Violation"));
      }
      throw ((c.framesToPop = 1), c);
    }
  },
  nd = td;
const Ta = Qs(nd);
var rd = function (e, n, r, s) {
  var a = r ? r.call(s, e, n) : void 0;
  if (a !== void 0) return !!a;
  if (e === n) return !0;
  if (typeof e != "object" || !e || typeof n != "object" || !n) return !1;
  var o = Object.keys(e),
    i = Object.keys(n);
  if (o.length !== i.length) return !1;
  for (
    var c = Object.prototype.hasOwnProperty.bind(n), l = 0;
    l < o.length;
    l++
  ) {
    var d = o[l];
    if (!c(d)) return !1;
    var u = e[d],
      h = n[d];
    if (
      ((a = r ? r.call(s, u, h, d) : void 0),
      a === !1 || (a === void 0 && u !== h))
    )
      return !1;
  }
  return !0;
};
const sd = Qs(rd);
var mi = ((t) => (
    (t.BASE = "base"),
    (t.BODY = "body"),
    (t.HEAD = "head"),
    (t.HTML = "html"),
    (t.LINK = "link"),
    (t.META = "meta"),
    (t.NOSCRIPT = "noscript"),
    (t.SCRIPT = "script"),
    (t.STYLE = "style"),
    (t.TITLE = "title"),
    (t.FRAGMENT = "Symbol(react.fragment)"),
    t
  ))(mi || {}),
  Hr = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Pa = Object.values(mi),
  Cr = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  gi = Object.entries(Cr).reduce((t, [e, n]) => ((t[n] = e), t), {}),
  Oe = "data-rh",
  Bt = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  Ft = (t, e) => {
    for (let n = t.length - 1; n >= 0; n -= 1) {
      const r = t[n];
      if (Object.prototype.hasOwnProperty.call(r, e)) return r[e];
    }
    return null;
  },
  ad = (t) => {
    let e = Ft(t, "title");
    const n = Ft(t, Bt.TITLE_TEMPLATE);
    if ((Array.isArray(e) && (e = e.join("")), n && e))
      return n.replace(/%s/g, () => e);
    const r = Ft(t, Bt.DEFAULT_TITLE);
    return e || r || void 0;
  },
  od = (t) => Ft(t, Bt.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Gr = (t, e) =>
    e
      .filter((n) => typeof n[t] < "u")
      .map((n) => n[t])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  id = (t, e) =>
    e
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const s = Object.keys(r);
          for (let a = 0; a < s.length; a += 1) {
            const i = s[a].toLowerCase();
            if (t.indexOf(i) !== -1 && r[i]) return n.concat(r);
          }
        }
        return n;
      }, []),
  cd = (t) => console && typeof console.warn == "function" && console.warn(t),
  ln = (t, e, n) => {
    const r = {};
    return n
      .filter((s) =>
        Array.isArray(s[t])
          ? !0
          : (typeof s[t] < "u" &&
              cd(
                `Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`,
              ),
            !1),
      )
      .map((s) => s[t])
      .reverse()
      .reduce((s, a) => {
        const o = {};
        a.filter((c) => {
          let l;
          const d = Object.keys(c);
          for (let h = 0; h < d.length; h += 1) {
            const p = d[h],
              f = p.toLowerCase();
            (e.indexOf(f) !== -1 &&
              !(l === "rel" && c[l].toLowerCase() === "canonical") &&
              !(f === "rel" && c[f].toLowerCase() === "stylesheet") &&
              (l = f),
              e.indexOf(p) !== -1 &&
                (p === "innerHTML" || p === "cssText" || p === "itemprop") &&
                (l = p));
          }
          if (!l || !c[l]) return !1;
          const u = c[l].toLowerCase();
          return (
            r[l] || (r[l] = {}),
            o[l] || (o[l] = {}),
            r[l][u] ? !1 : ((o[l][u] = !0), !0)
          );
        })
          .reverse()
          .forEach((c) => s.push(c));
        const i = Object.keys(o);
        for (let c = 0; c < i.length; c += 1) {
          const l = i[c],
            d = { ...r[l], ...o[l] };
          r[l] = d;
        }
        return s;
      }, [])
      .reverse();
  },
  ld = (t, e) => {
    if (Array.isArray(t) && t.length) {
      for (let n = 0; n < t.length; n += 1) if (t[n][e]) return !0;
    }
    return !1;
  },
  dd = (t) => ({
    baseTag: id(["href"], t),
    bodyAttributes: Gr("bodyAttributes", t),
    defer: Ft(t, Bt.DEFER),
    encode: Ft(t, Bt.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Gr("htmlAttributes", t),
    linkTags: ln("link", ["rel", "href"], t),
    metaTags: ln(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      t,
    ),
    noscriptTags: ln("noscript", ["innerHTML"], t),
    onChangeClientState: od(t),
    scriptTags: ln("script", ["src", "innerHTML"], t),
    styleTags: ln("style", ["cssText"], t),
    title: ad(t),
    titleAttributes: Gr("titleAttributes", t),
    prioritizeSeoTags: ld(t, Bt.PRIORITIZE_SEO_TAGS),
  }),
  vi = (t) => (Array.isArray(t) ? t.join("") : t),
  ud = (t, e) => {
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (e[n[r]] && e[n[r]].includes(t[n[r]])) return !0;
    return !1;
  },
  Wr = (t, e) =>
    Array.isArray(t)
      ? t.reduce(
          (n, r) => (ud(r, e) ? n.priority.push(r) : n.default.push(r), n),
          { priority: [], default: [] },
        )
      : { default: t, priority: [] },
  Ia = (t, e) => ({ ...t, [e]: void 0 }),
  pd = ["noscript", "script", "style"],
  ys = (t, e = !0) =>
    e === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  yi = (t) =>
    Object.keys(t).reduce((e, n) => {
      const r = typeof t[n] < "u" ? `${n}="${t[n]}"` : `${n}`;
      return e ? `${e} ${r}` : r;
    }, ""),
  hd = (t, e, n, r) => {
    const s = yi(n),
      a = vi(e);
    return s
      ? `<${t} ${Oe}="true" ${s}>${ys(a, r)}</${t}>`
      : `<${t} ${Oe}="true">${ys(a, r)}</${t}>`;
  },
  fd = (t, e, n = !0) =>
    e.reduce((r, s) => {
      const a = s,
        o = Object.keys(a)
          .filter((l) => !(l === "innerHTML" || l === "cssText"))
          .reduce((l, d) => {
            const u = typeof a[d] > "u" ? d : `${d}="${ys(a[d], n)}"`;
            return l ? `${l} ${u}` : u;
          }, ""),
        i = a.innerHTML || a.cssText || "",
        c = pd.indexOf(t) === -1;
      return `${r}<${t} ${Oe}="true" ${o}${c ? "/>" : `>${i}</${t}>`}`;
    }, ""),
  bi = (t, e = {}) =>
    Object.keys(t).reduce((n, r) => {
      const s = Cr[r];
      return ((n[s || r] = t[r]), n);
    }, e),
  md = (t, e, n) => {
    const r = { key: e, [Oe]: !0 },
      s = bi(n, r);
    return [K.createElement("title", s, e)];
  },
  ir = (t, e) =>
    e.map((n, r) => {
      const s = { key: r, [Oe]: !0 };
      return (
        Object.keys(n).forEach((a) => {
          const i = Cr[a] || a;
          if (i === "innerHTML" || i === "cssText") {
            const c = n.innerHTML || n.cssText;
            s.dangerouslySetInnerHTML = { __html: c };
          } else s[i] = n[a];
        }),
        K.createElement(t, s)
      );
    }),
  be = (t, e, n = !0) => {
    switch (t) {
      case "title":
        return {
          toComponent: () => md(t, e.title, e.titleAttributes),
          toString: () => hd(t, e.title, e.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => bi(e), toString: () => yi(e) };
      default:
        return { toComponent: () => ir(t, e), toString: () => fd(t, e, n) };
    }
  },
  gd = ({ metaTags: t, linkTags: e, scriptTags: n, encode: r }) => {
    const s = Wr(t, Hr.meta),
      a = Wr(e, Hr.link),
      o = Wr(n, Hr.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ir("meta", s.priority),
          ...ir("link", a.priority),
          ...ir("script", o.priority),
        ],
        toString: () =>
          `${be("meta", s.priority, r)} ${be("link", a.priority, r)} ${be("script", o.priority, r)}`,
      },
      metaTags: s.default,
      linkTags: a.default,
      scriptTags: o.default,
    };
  },
  vd = (t) => {
    const {
      baseTag: e,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: s,
      noscriptTags: a,
      styleTags: o,
      title: i = "",
      titleAttributes: c,
      prioritizeSeoTags: l,
    } = t;
    let { linkTags: d, metaTags: u, scriptTags: h } = t,
      p = { toComponent: () => [], toString: () => "" };
    return (
      l &&
        ({
          priorityMethods: p,
          linkTags: d,
          metaTags: u,
          scriptTags: h,
        } = gd(t)),
      {
        priority: p,
        base: be("base", e, r),
        bodyAttributes: be("bodyAttributes", n, r),
        htmlAttributes: be("htmlAttributes", s, r),
        link: be("link", d, r),
        meta: be("meta", u, r),
        noscript: be("noscript", a, r),
        script: be("script", h, r),
        style: be("style", o, r),
        title: be("title", { title: i, titleAttributes: c }, r),
      }
    );
  },
  bs = vd,
  Gn = [],
  Zs = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  _s = class {
    constructor(t, e) {
      we(this, "instances", []);
      we(this, "canUseDOM", Zs);
      we(this, "context");
      we(this, "value", {
        setHelmet: (t) => {
          this.context.helmet = t;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Gn : this.instances),
          add: (t) => {
            (this.canUseDOM ? Gn : this.instances).push(t);
          },
          remove: (t) => {
            const e = (this.canUseDOM ? Gn : this.instances).indexOf(t);
            (this.canUseDOM ? Gn : this.instances).splice(e, 1);
          },
        },
      });
      ((this.context = t),
        (this.canUseDOM = e || !1),
        e ||
          (t.helmet = bs({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          })));
    }
  },
  yd = parseInt(K.version.split(".")[0], 10),
  ws = yd >= 19,
  bd = {},
  _i = K.createContext(bd),
  yt,
  wi =
    ((yt = class extends v.Component {
      constructor(n) {
        super(n);
        we(this, "helmetData");
        ws
          ? (this.helmetData = null)
          : (this.helmetData = new _s(this.props.context || {}, yt.canUseDOM));
      }
      render() {
        return ws
          ? K.createElement(K.Fragment, null, this.props.children)
          : K.createElement(
              _i.Provider,
              { value: this.helmetData.value },
              this.props.children,
            );
      }
    }),
    we(yt, "canUseDOM", Zs),
    yt),
  Rt = (t, e) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${t}[${Oe}]`),
      s = [].slice.call(r),
      a = [];
    let o;
    return (
      e &&
        e.length &&
        e.forEach((i) => {
          const c = document.createElement(t);
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l))
              if (l === "innerHTML") c.innerHTML = i.innerHTML;
              else if (l === "cssText") {
                const d = i.cssText;
                c.appendChild(document.createTextNode(d));
              } else {
                const d = l,
                  u = typeof i[d] > "u" ? "" : i[d];
                c.setAttribute(l, u);
              }
          (c.setAttribute(Oe, "true"),
            s.some((l, d) => ((o = d), c.isEqualNode(l)))
              ? s.splice(o, 1)
              : a.push(c));
        }),
      s.forEach((i) => {
        var c;
        return (c = i.parentNode) == null ? void 0 : c.removeChild(i);
      }),
      a.forEach((i) => n.appendChild(i)),
      { oldTags: s, newTags: a }
    );
  },
  xs = (t, e) => {
    const n = document.getElementsByTagName(t)[0];
    if (!n) return;
    const r = n.getAttribute(Oe),
      s = r ? r.split(",") : [],
      a = [...s],
      o = Object.keys(e);
    for (const i of o) {
      const c = e[i] || "";
      (n.getAttribute(i) !== c && n.setAttribute(i, c),
        s.indexOf(i) === -1 && s.push(i));
      const l = a.indexOf(i);
      l !== -1 && a.splice(l, 1);
    }
    for (let i = a.length - 1; i >= 0; i -= 1) n.removeAttribute(a[i]);
    s.length === a.length
      ? n.removeAttribute(Oe)
      : n.getAttribute(Oe) !== o.join(",") && n.setAttribute(Oe, o.join(","));
  },
  _d = (t, e) => {
    (typeof t < "u" && document.title !== t && (document.title = vi(t)),
      xs("title", e));
  },
  ka = (t, e) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: s,
      linkTags: a,
      metaTags: o,
      noscriptTags: i,
      onChangeClientState: c,
      scriptTags: l,
      styleTags: d,
      title: u,
      titleAttributes: h,
    } = t;
    (xs("body", r), xs("html", s), _d(u, h));
    const p = {
        baseTag: Rt("base", n),
        linkTags: Rt("link", a),
        metaTags: Rt("meta", o),
        noscriptTags: Rt("noscript", i),
        scriptTags: Rt("script", l),
        styleTags: Rt("style", d),
      },
      f = {},
      m = {};
    (Object.keys(p).forEach((g) => {
      const { newTags: b, oldTags: _ } = p[g];
      (b.length && (f[g] = b), _.length && (m[g] = p[g].oldTags));
    }),
      e && e(),
      c(t, f, m));
  },
  dn = null,
  wd = (t) => {
    (dn && cancelAnimationFrame(dn),
      t.defer
        ? (dn = requestAnimationFrame(() => {
            ka(t, () => {
              dn = null;
            });
          }))
        : (ka(t), (dn = null)));
  },
  xd = wd,
  Da = class extends v.Component {
    constructor() {
      super(...arguments);
      we(this, "rendered", !1);
    }
    shouldComponentUpdate(e) {
      return !sd(e, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: e } = this.props.context;
      (e.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: e, setHelmet: n } = this.props.context;
      let r = null;
      const s = dd(
        e.get().map((a) => {
          const { context: o, ...i } = a.props;
          return i;
        }),
      );
      (wi.canUseDOM ? xd(s) : bs && (r = bs(s)), n(r));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: e } = this.props.context;
      (e.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  cr = [],
  La = (t) => {
    const e = {};
    for (const n of Object.keys(t)) e[gi[n] || n] = t[n];
    return e;
  },
  dt = (t) => {
    const e = {};
    for (const n of Object.keys(t)) {
      const r = Cr[n];
      e[r || n] = t[n];
    }
    return e;
  },
  ja = (t, e) => {
    if (!Zs) return;
    const n = document.getElementsByTagName(t)[0];
    if (!n) return;
    const r = "data-rh-managed",
      s = n.getAttribute(r),
      a = s ? s.split(",") : [],
      o = Object.keys(e);
    for (const i of a) o.includes(i) || n.removeAttribute(i);
    for (const i of o) {
      const c = e[i];
      c == null || c === !1
        ? n.removeAttribute(i)
        : c === !0
          ? n.setAttribute(i, "")
          : n.setAttribute(i, String(c));
    }
    o.length > 0 ? n.setAttribute(r, o.join(",")) : n.removeAttribute(r);
  },
  Kr = () => {
    const t = {},
      e = {};
    for (const n of cr) {
      const { htmlAttributes: r, bodyAttributes: s } = n.props;
      (r && Object.assign(t, La(r)), s && Object.assign(e, La(s)));
    }
    (ja("html", t), ja("body", e));
  },
  Ed = class extends v.Component {
    componentDidMount() {
      (cr.push(this), Kr());
    }
    componentDidUpdate() {
      Kr();
    }
    componentWillUnmount() {
      const t = cr.indexOf(this);
      (t !== -1 && cr.splice(t, 1), Kr());
    }
    resolveTitle() {
      const { title: t, titleTemplate: e, defaultTitle: n } = this.props;
      return t && e
        ? e.replace(/%s/g, () => (Array.isArray(t) ? t.join("") : t))
        : t || n || void 0;
    }
    renderTitle() {
      const t = this.resolveTitle();
      if (t === void 0) return null;
      const e = this.props.titleAttributes || {};
      return K.createElement("title", dt(e), t);
    }
    renderBase() {
      const { base: t } = this.props;
      return t ? K.createElement("base", dt(t)) : null;
    }
    renderMeta() {
      const { meta: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, n) => K.createElement("meta", { key: n, ...dt(e) }));
    }
    renderLink() {
      const { link: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, n) => K.createElement("link", { key: n, ...dt(e) }));
    }
    renderScript() {
      const { script: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, n) => {
            const { innerHTML: r, ...s } = e,
              a = dt(s);
            return (
              r && (a.dangerouslySetInnerHTML = { __html: r }),
              K.createElement("script", { key: n, ...a })
            );
          });
    }
    renderStyle() {
      const { style: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, n) => {
            const { cssText: r, ...s } = e,
              a = dt(s);
            return (
              r && (a.dangerouslySetInnerHTML = { __html: r }),
              K.createElement("style", { key: n, ...a })
            );
          });
    }
    renderNoscript() {
      const { noscript: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, n) => {
            const { innerHTML: r, ...s } = e,
              a = dt(s);
            return (
              r && (a.dangerouslySetInnerHTML = { __html: r }),
              K.createElement("noscript", { key: n, ...a })
            );
          });
    }
    render() {
      return K.createElement(
        K.Fragment,
        null,
        this.renderTitle(),
        this.renderBase(),
        this.renderMeta(),
        this.renderLink(),
        this.renderScript(),
        this.renderStyle(),
        this.renderNoscript(),
      );
    }
  },
  vs,
  Sd =
    ((vs = class extends v.Component {
      shouldComponentUpdate(t) {
        return !ed(Ia(this.props, "helmetData"), Ia(t, "helmetData"));
      }
      mapNestedChildrenToProps(t, e) {
        if (!e) return null;
        switch (t.type) {
          case "script":
          case "noscript":
            return { innerHTML: e };
          case "style":
            return { cssText: e };
          default:
            throw new Error(
              `<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(t, e, n, r) {
        return {
          ...e,
          [t.type]: [
            ...(e[t.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(t, r) },
          ],
        };
      }
      mapObjectTypeChildren(t, e, n, r) {
        switch (t.type) {
          case "title":
            return { ...e, [t.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...e, bodyAttributes: { ...n } };
          case "html":
            return { ...e, htmlAttributes: { ...n } };
          default:
            return { ...e, [t.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(t, e) {
        let n = { ...e };
        return (
          Object.keys(t).forEach((r) => {
            n = { ...n, [r]: t[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(t, e) {
        return (
          Ta(
            Pa.some((n) => t.type === n),
            typeof t.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Pa.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`,
          ),
          Ta(
            !e ||
              typeof e == "string" ||
              (Array.isArray(e) && !e.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(t, e) {
        let n = {};
        return (
          K.Children.forEach(t, (r) => {
            if (!r || !r.props) return;
            const { children: s, ...a } = r.props,
              o = Object.keys(a).reduce(
                (c, l) => ((c[gi[l] || l] = a[l]), c),
                {},
              );
            let { type: i } = r;
            switch (
              (typeof i == "symbol"
                ? (i = i.toString())
                : this.warnOnInvalidChildren(r, s),
              i)
            ) {
              case "Symbol(react.fragment)":
                e = this.mapChildrenToProps(s, e);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, o, s);
                break;
              default:
                e = this.mapObjectTypeChildren(r, e, o, s);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, e)
        );
      }
      render() {
        const { children: t, ...e } = this.props;
        let n = { ...e },
          { helmetData: r } = e;
        if (
          (t && (n = this.mapChildrenToProps(t, n)), r && !(r instanceof _s))
        ) {
          const s = r;
          ((r = new _s(s.context, !0)), delete n.helmetData);
        }
        return ws
          ? K.createElement(Ed, { ...n })
          : r
            ? K.createElement(Da, { ...n, context: r.value })
            : K.createElement(_i.Consumer, null, (s) =>
                K.createElement(Da, { ...n, context: s }),
              );
      }
    }),
    we(vs, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    vs);
const Ad = "modulepreload",
  Cd = function (t) {
    return "/" + t;
  },
  Na = {},
  Z = function (e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = Cd(c)), c in Na)) return;
          Na[c] = !0;
          const l = c.endsWith(".css"),
            d = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = l ? "stylesheet" : Ad),
            l || (u.as = "script"),
            (u.crossOrigin = ""),
            (u.href = c),
            i && u.setAttribute("nonce", i),
            document.head.appendChild(u),
            l)
          )
            return new Promise((h, p) => {
              (u.addEventListener("load", h),
                u.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function a(o) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
        throw o;
    }
    return s.then((o) => {
      for (const i of o || []) i.status === "rejected" && a(i.reason);
      return e().catch(a);
    });
  };
var Rr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(t), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Or = typeof window > "u" || "Deno" in globalThis;
function Ee() {}
function Rd(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Od(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Td(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Es(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Pd(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function $a(t, e) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: a,
    queryKey: o,
    stale: i,
  } = t;
  if (o) {
    if (r) {
      if (e.queryHash !== ea(o, e.options)) return !1;
    } else if (!Cn(e.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const c = e.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof i == "boolean" && e.isStale() !== i) ||
    (s && s !== e.state.fetchStatus) ||
    (a && !a(e))
  );
}
function Ma(t, e) {
  const { exact: n, status: r, predicate: s, mutationKey: a } = t;
  if (a) {
    if (!e.options.mutationKey) return !1;
    if (n) {
      if (An(e.options.mutationKey) !== An(a)) return !1;
    } else if (!Cn(e.options.mutationKey, a)) return !1;
  }
  return !((r && e.state.status !== r) || (s && !s(e)));
}
function ea(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || An)(t);
}
function An(t) {
  return JSON.stringify(t, (e, n) =>
    Ss(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function Cn(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
      ? !1
      : t && e && typeof t == "object" && typeof e == "object"
        ? Object.keys(e).every((n) => Cn(t[n], e[n]))
        : !1;
}
function xi(t, e) {
  if (t === e) return t;
  const n = Ba(t) && Ba(e);
  if (n || (Ss(t) && Ss(e))) {
    const r = n ? t : Object.keys(t),
      s = r.length,
      a = n ? e : Object.keys(e),
      o = a.length,
      i = n ? [] : {},
      c = new Set(r);
    let l = 0;
    for (let d = 0; d < o; d++) {
      const u = n ? d : a[d];
      ((!n && c.has(u)) || n) && t[u] === void 0 && e[u] === void 0
        ? ((i[u] = void 0), l++)
        : ((i[u] = xi(t[u], e[u])), i[u] === t[u] && t[u] !== void 0 && l++);
    }
    return s === o && l === s ? t : i;
  }
  return e;
}
function a_(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (t[n] !== e[n]) return !1;
  return !0;
}
function Ba(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ss(t) {
  if (!Fa(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const n = e.prototype;
  return !(
    !Fa(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function Fa(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Id(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function kd(t, e, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(t, e)
    : n.structuralSharing !== !1
      ? xi(t, e)
      : e;
}
function Dd(t, e, n = 0) {
  const r = [...t, e];
  return n && r.length > n ? r.slice(1) : r;
}
function Ld(t, e, n = 0) {
  const r = [e, ...t];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ta = Symbol();
function Ei(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === ta
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function o_(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var bt,
  tt,
  zt,
  ni,
  jd =
    ((ni = class extends Rr {
      constructor() {
        super();
        H(this, bt);
        H(this, tt);
        H(this, zt);
        F(this, zt, (e) => {
          if (!Or && window.addEventListener) {
            const n = () => e();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, tt) || this.setEventListener(A(this, zt));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = A(this, tt)) == null || e.call(this), F(this, tt, void 0));
      }
      setEventListener(e) {
        var n;
        (F(this, zt, e),
          (n = A(this, tt)) == null || n.call(this),
          F(
            this,
            tt,
            e((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(e) {
        A(this, bt) !== e && (F(this, bt, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((n) => {
          n(e);
        });
      }
      isFocused() {
        var e;
        return typeof A(this, bt) == "boolean"
          ? A(this, bt)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (bt = new WeakMap()),
    (tt = new WeakMap()),
    (zt = new WeakMap()),
    ni),
  Si = new jd(),
  Ht,
  nt,
  Gt,
  ri,
  Nd =
    ((ri = class extends Rr {
      constructor() {
        super();
        H(this, Ht, !0);
        H(this, nt);
        H(this, Gt);
        F(this, Gt, (e) => {
          if (!Or && window.addEventListener) {
            const n = () => e(!0),
              r = () => e(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, nt) || this.setEventListener(A(this, Gt));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = A(this, nt)) == null || e.call(this), F(this, nt, void 0));
      }
      setEventListener(e) {
        var n;
        (F(this, Gt, e),
          (n = A(this, nt)) == null || n.call(this),
          F(this, nt, e(this.setOnline.bind(this))));
      }
      setOnline(e) {
        A(this, Ht) !== e &&
          (F(this, Ht, e),
          this.listeners.forEach((r) => {
            r(e);
          }));
      }
      isOnline() {
        return A(this, Ht);
      }
    }),
    (Ht = new WeakMap()),
    (nt = new WeakMap()),
    (Gt = new WeakMap()),
    ri),
  pr = new Nd();
function $d() {
  let t, e;
  const n = new Promise((s, a) => {
    ((t = s), (e = a));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), t(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), e(s));
    }),
    n
  );
}
function Md(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Ai(t) {
  return (t ?? "online") === "online" ? pr.isOnline() : !0;
}
var Ci = class extends Error {
  constructor(t) {
    (super("CancelledError"),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent));
  }
};
function Jr(t) {
  return t instanceof Ci;
}
function Ri(t) {
  let e = !1,
    n = 0,
    r = !1,
    s;
  const a = $d(),
    o = (m) => {
      var g;
      r || (h(new Ci(m)), (g = t.abort) == null || g.call(t));
    },
    i = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    l = () =>
      Si.isFocused() &&
      (t.networkMode === "always" || pr.isOnline()) &&
      t.canRun(),
    d = () => Ai(t.networkMode) && t.canRun(),
    u = (m) => {
      var g;
      r ||
        ((r = !0),
        (g = t.onSuccess) == null || g.call(t, m),
        s == null || s(),
        a.resolve(m));
    },
    h = (m) => {
      var g;
      r ||
        ((r = !0),
        (g = t.onError) == null || g.call(t, m),
        s == null || s(),
        a.reject(m));
    },
    p = () =>
      new Promise((m) => {
        var g;
        ((s = (b) => {
          (r || l()) && m(b);
        }),
          (g = t.onPause) == null || g.call(t));
      }).then(() => {
        var m;
        ((s = void 0), r || (m = t.onContinue) == null || m.call(t));
      }),
    f = () => {
      if (r) return;
      let m;
      const g = n === 0 ? t.initialPromise : void 0;
      try {
        m = g ?? t.fn();
      } catch (b) {
        m = Promise.reject(b);
      }
      Promise.resolve(m)
        .then(u)
        .catch((b) => {
          var C;
          if (r) return;
          const _ = t.retry ?? (Or ? 0 : 3),
            w = t.retryDelay ?? Md,
            x = typeof w == "function" ? w(n, b) : w,
            E =
              _ === !0 ||
              (typeof _ == "number" && n < _) ||
              (typeof _ == "function" && _(n, b));
          if (e || !E) {
            h(b);
            return;
          }
          (n++,
            (C = t.onFail) == null || C.call(t, n, b),
            Id(x)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                e ? h(b) : f();
              }));
        });
    };
  return {
    promise: a,
    cancel: o,
    continue: () => (s == null || s(), a),
    cancelRetry: i,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? f() : p().then(f), a),
  };
}
var Bd = (t) => setTimeout(t, 0);
function Fd() {
  let t = [],
    e = 0,
    n = (i) => {
      i();
    },
    r = (i) => {
      i();
    },
    s = Bd;
  const a = (i) => {
      e
        ? t.push(i)
        : s(() => {
            n(i);
          });
    },
    o = () => {
      const i = t;
      ((t = []),
        i.length &&
          s(() => {
            r(() => {
              i.forEach((c) => {
                n(c);
              });
            });
          }));
    };
  return {
    batch: (i) => {
      let c;
      e++;
      try {
        c = i();
      } finally {
        (e--, e || o());
      }
      return c;
    },
    batchCalls:
      (i) =>
      (...c) => {
        a(() => {
          i(...c);
        });
      },
    schedule: a,
    setNotifyFunction: (i) => {
      n = i;
    },
    setBatchNotifyFunction: (i) => {
      r = i;
    },
    setScheduler: (i) => {
      s = i;
    },
  };
}
var de = Fd(),
  _t,
  si,
  Oi =
    ((si = class {
      constructor() {
        H(this, _t);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Od(this.gcTime) &&
            F(
              this,
              _t,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(t) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          t ?? (Or ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        A(this, _t) && (clearTimeout(A(this, _t)), F(this, _t, void 0));
      }
    }),
    (_t = new WeakMap()),
    si),
  Wt,
  wt,
  _e,
  xt,
  ie,
  Mn,
  Et,
  Ae,
  Ve,
  ai,
  Ud =
    ((ai = class extends Oi {
      constructor(e) {
        super();
        H(this, Ae);
        H(this, Wt);
        H(this, wt);
        H(this, _e);
        H(this, xt);
        H(this, ie);
        H(this, Mn);
        H(this, Et);
        (F(this, Et, !1),
          F(this, Mn, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          F(this, xt, e.client),
          F(this, _e, A(this, xt).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          F(this, Wt, Vd(this.options)),
          (this.state = e.state ?? A(this, Wt)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = A(this, ie)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        ((this.options = { ...A(this, Mn), ...e }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          A(this, _e).remove(this);
      }
      setData(e, n) {
        const r = kd(this.state.data, e, this.options);
        return (
          oe(this, Ae, Ve).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(e, n) {
        oe(this, Ae, Ve).call(this, {
          type: "setState",
          state: e,
          setStateOptions: n,
        });
      }
      cancel(e) {
        var r, s;
        const n = (r = A(this, ie)) == null ? void 0 : r.promise;
        return (
          (s = A(this, ie)) == null || s.cancel(e),
          n ? n.then(Ee).catch(Ee) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(A(this, Wt)));
      }
      isActive() {
        return this.observers.some((e) => Pd(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ta ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => Es(e.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return this.state.data === void 0
          ? !0
          : e === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !Td(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var n;
        const e = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (n = A(this, ie)) == null || n.continue());
      }
      onOnline() {
        var n;
        const e = this.observers.find((r) => r.shouldFetchOnReconnect());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (n = A(this, ie)) == null || n.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          A(this, _e).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((n) => n !== e)),
          this.observers.length ||
            (A(this, ie) &&
              (A(this, Et)
                ? A(this, ie).cancel({ revert: !0 })
                : A(this, ie).cancelRetry()),
            this.scheduleGc()),
          A(this, _e).notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          oe(this, Ae, Ve).call(this, { type: "invalidate" });
      }
      fetch(e, n) {
        var l, d, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (A(this, ie))
            return (A(this, ie).continueRetry(), A(this, ie).promise);
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const h = this.observers.find((p) => p.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          s = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (F(this, Et, !0), r.signal),
            });
          },
          a = () => {
            const h = Ei(this.options, n),
              f = (() => {
                const m = {
                  client: A(this, xt),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(m), m);
              })();
            return (
              F(this, Et, !1),
              this.options.persister ? this.options.persister(h, f, this) : h(f)
            );
          },
          i = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: A(this, xt),
              state: this.state,
              fetchFn: a,
            };
            return (s(h), h);
          })();
        ((l = this.options.behavior) == null || l.onFetch(i, this),
          F(this, wt, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = i.fetchOptions) == null ? void 0 : d.meta)) &&
            oe(this, Ae, Ve).call(this, {
              type: "fetch",
              meta: (u = i.fetchOptions) == null ? void 0 : u.meta,
            }));
        const c = (h) => {
          var p, f, m, g;
          ((Jr(h) && h.silent) ||
            oe(this, Ae, Ve).call(this, { type: "error", error: h }),
            Jr(h) ||
              ((f = (p = A(this, _e).config).onError) == null ||
                f.call(p, h, this),
              (g = (m = A(this, _e).config).onSettled) == null ||
                g.call(m, this.state.data, h, this)),
            this.scheduleGc());
        };
        return (
          F(
            this,
            ie,
            Ri({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: i.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var p, f, m, g;
                if (h === void 0) {
                  c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (b) {
                  c(b);
                  return;
                }
                ((f = (p = A(this, _e).config).onSuccess) == null ||
                  f.call(p, h, this),
                  (g = (m = A(this, _e).config).onSettled) == null ||
                    g.call(m, h, this.state.error, this),
                  this.scheduleGc());
              },
              onError: c,
              onFail: (h, p) => {
                oe(this, Ae, Ve).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: p,
                });
              },
              onPause: () => {
                oe(this, Ae, Ve).call(this, { type: "pause" });
              },
              onContinue: () => {
                oe(this, Ae, Ve).call(this, { type: "continue" });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            }),
          ),
          A(this, ie).start()
        );
      }
    }),
    (Wt = new WeakMap()),
    (wt = new WeakMap()),
    (_e = new WeakMap()),
    (xt = new WeakMap()),
    (ie = new WeakMap()),
    (Mn = new WeakMap()),
    (Et = new WeakMap()),
    (Ae = new WeakSet()),
    (Ve = function (e) {
      const n = (r) => {
        switch (e.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...qd(r.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            return (
              F(this, wt, void 0),
              {
                ...r,
                data: e.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = e.error;
            return Jr(s) && s.revert && A(this, wt)
              ? { ...A(this, wt), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...e.state };
        }
      };
      ((this.state = n(this.state)),
        de.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            A(this, _e).notify({ query: this, type: "updated", action: e }));
        }));
    }),
    ai);
function qd(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ai(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function Vd(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    n = e !== void 0,
    r = n
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var ke,
  oi,
  zd =
    ((oi = class extends Rr {
      constructor(e = {}) {
        super();
        H(this, ke);
        ((this.config = e), F(this, ke, new Map()));
      }
      build(e, n, r) {
        const s = n.queryKey,
          a = n.queryHash ?? ea(s, n);
        let o = this.get(a);
        return (
          o ||
            ((o = new Ud({
              client: e,
              queryKey: s,
              queryHash: a,
              options: e.defaultQueryOptions(n),
              state: r,
              defaultOptions: e.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(e) {
        A(this, ke).has(e.queryHash) ||
          (A(this, ke).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const n = A(this, ke).get(e.queryHash);
        n &&
          (e.destroy(),
          n === e && A(this, ke).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        de.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return A(this, ke).get(e);
      }
      getAll() {
        return [...A(this, ke).values()];
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((r) => $a(n, r));
      }
      findAll(e = {}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter((r) => $a(e, r)) : n;
      }
      notify(e) {
        de.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      onFocus() {
        de.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        de.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (ke = new WeakMap()),
    oi),
  De,
  le,
  St,
  Le,
  Xe,
  ii,
  Hd =
    ((ii = class extends Oi {
      constructor(e) {
        super();
        H(this, Le);
        H(this, De);
        H(this, le);
        H(this, St);
        ((this.mutationId = e.mutationId),
          F(this, le, e.mutationCache),
          F(this, De, []),
          (this.state = e.state || Gd()),
          this.setOptions(e.options),
          this.scheduleGc());
      }
      setOptions(e) {
        ((this.options = e), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        A(this, De).includes(e) ||
          (A(this, De).push(e),
          this.clearGcTimeout(),
          A(this, le).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        (F(
          this,
          De,
          A(this, De).filter((n) => n !== e),
        ),
          this.scheduleGc(),
          A(this, le).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          }));
      }
      optionalRemove() {
        A(this, De).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : A(this, le).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = A(this, St)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var a, o, i, c, l, d, u, h, p, f, m, g, b, _, w, x, E, C, S, D;
        const n = () => {
          oe(this, Le, Xe).call(this, { type: "continue" });
        };
        F(
          this,
          St,
          Ri({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, k) => {
              oe(this, Le, Xe).call(this, {
                type: "failed",
                failureCount: O,
                error: k,
              });
            },
            onPause: () => {
              oe(this, Le, Xe).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, le).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          s = !A(this, St).canStart();
        try {
          if (r) n();
          else {
            (oe(this, Le, Xe).call(this, {
              type: "pending",
              variables: e,
              isPaused: s,
            }),
              await ((o = (a = A(this, le).config).onMutate) == null
                ? void 0
                : o.call(a, e, this)));
            const k = await ((c = (i = this.options).onMutate) == null
              ? void 0
              : c.call(i, e));
            k !== this.state.context &&
              oe(this, Le, Xe).call(this, {
                type: "pending",
                context: k,
                variables: e,
                isPaused: s,
              });
          }
          const O = await A(this, St).start();
          return (
            await ((d = (l = A(this, le).config).onSuccess) == null
              ? void 0
              : d.call(l, O, e, this.state.context, this)),
            await ((h = (u = this.options).onSuccess) == null
              ? void 0
              : h.call(u, O, e, this.state.context)),
            await ((f = (p = A(this, le).config).onSettled) == null
              ? void 0
              : f.call(
                  p,
                  O,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((g = (m = this.options).onSettled) == null
              ? void 0
              : g.call(m, O, null, e, this.state.context)),
            oe(this, Le, Xe).call(this, { type: "success", data: O }),
            O
          );
        } catch (O) {
          try {
            throw (
              await ((_ = (b = A(this, le).config).onError) == null
                ? void 0
                : _.call(b, O, e, this.state.context, this)),
              await ((x = (w = this.options).onError) == null
                ? void 0
                : x.call(w, O, e, this.state.context)),
              await ((C = (E = A(this, le).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    O,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((D = (S = this.options).onSettled) == null
                ? void 0
                : D.call(S, void 0, O, e, this.state.context)),
              O
            );
          } finally {
            oe(this, Le, Xe).call(this, { type: "error", error: O });
          }
        } finally {
          A(this, le).runNext(this);
        }
      }
    }),
    (De = new WeakMap()),
    (le = new WeakMap()),
    (St = new WeakMap()),
    (Le = new WeakSet()),
    (Xe = function (e) {
      const n = (r) => {
        switch (e.type) {
          case "failed":
            return {
              ...r,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: e.error,
              failureCount: r.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        de.batch(() => {
          (A(this, De).forEach((r) => {
            r.onMutationUpdate(e);
          }),
            A(this, le).notify({ mutation: this, type: "updated", action: e }));
        }));
    }),
    ii);
function Gd() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ge,
  Ce,
  Bn,
  ci,
  Wd =
    ((ci = class extends Rr {
      constructor(e = {}) {
        super();
        H(this, Ge);
        H(this, Ce);
        H(this, Bn);
        ((this.config = e),
          F(this, Ge, new Set()),
          F(this, Ce, new Map()),
          F(this, Bn, 0));
      }
      build(e, n, r) {
        const s = new Hd({
          mutationCache: this,
          mutationId: ++Hn(this, Bn)._,
          options: e.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(e) {
        A(this, Ge).add(e);
        const n = Wn(e);
        if (typeof n == "string") {
          const r = A(this, Ce).get(n);
          r ? r.push(e) : A(this, Ce).set(n, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if (A(this, Ge).delete(e)) {
          const n = Wn(e);
          if (typeof n == "string") {
            const r = A(this, Ce).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(e);
                s !== -1 && r.splice(s, 1);
              } else r[0] === e && A(this, Ce).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const n = Wn(e);
        if (typeof n == "string") {
          const r = A(this, Ce).get(n),
            s =
              r == null ? void 0 : r.find((a) => a.state.status === "pending");
          return !s || s === e;
        } else return !0;
      }
      runNext(e) {
        var r;
        const n = Wn(e);
        if (typeof n == "string") {
          const s =
            (r = A(this, Ce).get(n)) == null
              ? void 0
              : r.find((a) => a !== e && a.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        de.batch(() => {
          (A(this, Ge).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            A(this, Ge).clear(),
            A(this, Ce).clear());
        });
      }
      getAll() {
        return Array.from(A(this, Ge));
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((r) => Ma(n, r));
      }
      findAll(e = {}) {
        return this.getAll().filter((n) => Ma(e, n));
      }
      notify(e) {
        de.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((n) => n.state.isPaused);
        return de.batch(() =>
          Promise.all(e.map((n) => n.continue().catch(Ee))),
        );
      }
    }),
    (Ge = new WeakMap()),
    (Ce = new WeakMap()),
    (Bn = new WeakMap()),
    ci);
function Wn(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
function Ua(t) {
  return {
    onFetch: (e, n) => {
      var d, u, h, p, f;
      const r = e.options,
        s =
          (h =
            (u = (d = e.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : u.fetchMore) == null
            ? void 0
            : h.direction,
        a = ((p = e.state.data) == null ? void 0 : p.pages) || [],
        o = ((f = e.state.data) == null ? void 0 : f.pageParams) || [];
      let i = { pages: [], pageParams: [] },
        c = 0;
      const l = async () => {
        let m = !1;
        const g = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (m = !0)
                  : e.signal.addEventListener("abort", () => {
                      m = !0;
                    }),
                e.signal
              ),
            });
          },
          b = Ei(e.options, e.fetchOptions),
          _ = async (w, x, E) => {
            if (m) return Promise.reject();
            if (x == null && w.pages.length) return Promise.resolve(w);
            const S = (() => {
                const V = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: x,
                  direction: E ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return (g(V), V);
              })(),
              D = await b(S),
              { maxPages: O } = e.options,
              k = E ? Ld : Dd;
            return {
              pages: k(w.pages, D, O),
              pageParams: k(w.pageParams, x, O),
            };
          };
        if (s && a.length) {
          const w = s === "backward",
            x = w ? Kd : qa,
            E = { pages: a, pageParams: o },
            C = x(r, E);
          i = await _(E, C, w);
        } else {
          const w = t ?? a.length;
          do {
            const x = c === 0 ? (o[0] ?? r.initialPageParam) : qa(r, i);
            if (c > 0 && x == null) break;
            ((i = await _(i, x)), c++);
          } while (c < w);
        }
        return i;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var m, g;
            return (g = (m = e.options).persister) == null
              ? void 0
              : g.call(
                  m,
                  l,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  n,
                );
          })
        : (e.fetchFn = l);
    },
  };
}
function qa(t, { pages: e, pageParams: n }) {
  const r = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[r], e, n[r], n) : void 0;
}
function Kd(t, { pages: e, pageParams: n }) {
  var r;
  return e.length > 0
    ? (r = t.getPreviousPageParam) == null
      ? void 0
      : r.call(t, e[0], e, n[0], n)
    : void 0;
}
var Q,
  rt,
  st,
  Kt,
  Jt,
  at,
  Yt,
  Qt,
  li,
  Jd =
    ((li = class {
      constructor(t = {}) {
        H(this, Q);
        H(this, rt);
        H(this, st);
        H(this, Kt);
        H(this, Jt);
        H(this, at);
        H(this, Yt);
        H(this, Qt);
        (F(this, Q, t.queryCache || new zd()),
          F(this, rt, t.mutationCache || new Wd()),
          F(this, st, t.defaultOptions || {}),
          F(this, Kt, new Map()),
          F(this, Jt, new Map()),
          F(this, at, 0));
      }
      mount() {
        (Hn(this, at)._++,
          A(this, at) === 1 &&
            (F(
              this,
              Yt,
              Si.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), A(this, Q).onFocus());
              }),
            ),
            F(
              this,
              Qt,
              pr.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), A(this, Q).onOnline());
              }),
            )));
      }
      unmount() {
        var t, e;
        (Hn(this, at)._--,
          A(this, at) === 0 &&
            ((t = A(this, Yt)) == null || t.call(this),
            F(this, Yt, void 0),
            (e = A(this, Qt)) == null || e.call(this),
            F(this, Qt, void 0)));
      }
      isFetching(t) {
        return A(this, Q).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return A(this, rt).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = A(this, Q).get(e.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          n = A(this, Q).build(this, e),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              n.isStaleByTime(Es(e.staleTime, n)) &&
              this.prefetchQuery(e),
            Promise.resolve(r));
      }
      getQueriesData(t) {
        return A(this, Q)
          .findAll(t)
          .map(({ queryKey: e, state: n }) => {
            const r = n.data;
            return [e, r];
          });
      }
      setQueryData(t, e, n) {
        const r = this.defaultQueryOptions({ queryKey: t }),
          s = A(this, Q).get(r.queryHash),
          a = s == null ? void 0 : s.state.data,
          o = Rd(e, a);
        if (o !== void 0)
          return A(this, Q)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(t, e, n) {
        return de.batch(() =>
          A(this, Q)
            .findAll(t)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, e, n)]),
        );
      }
      getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = A(this, Q).get(e.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(t) {
        const e = A(this, Q);
        de.batch(() => {
          e.findAll(t).forEach((n) => {
            e.remove(n);
          });
        });
      }
      resetQueries(t, e) {
        const n = A(this, Q);
        return de.batch(
          () => (
            n.findAll(t).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...t }, e)
          ),
        );
      }
      cancelQueries(t, e = {}) {
        const n = { revert: !0, ...e },
          r = de.batch(() =>
            A(this, Q)
              .findAll(t)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(Ee).catch(Ee);
      }
      invalidateQueries(t, e = {}) {
        return de.batch(
          () => (
            A(this, Q)
              .findAll(t)
              .forEach((n) => {
                n.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      "active",
                  },
                  e,
                )
          ),
        );
      }
      refetchQueries(t, e = {}) {
        const n = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          r = de.batch(() =>
            A(this, Q)
              .findAll(t)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let a = s.fetch(void 0, n);
                return (
                  n.throwOnError || (a = a.catch(Ee)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : a
                );
              }),
          );
        return Promise.all(r).then(Ee);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = A(this, Q).build(this, e);
        return n.isStaleByTime(Es(e.staleTime, n))
          ? n.fetch(e)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(Ee).catch(Ee);
      }
      fetchInfiniteQuery(t) {
        return ((t.behavior = Ua(t.pages)), this.fetchQuery(t));
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ee).catch(Ee);
      }
      ensureInfiniteQueryData(t) {
        return ((t.behavior = Ua(t.pages)), this.ensureQueryData(t));
      }
      resumePausedMutations() {
        return pr.isOnline()
          ? A(this, rt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return A(this, Q);
      }
      getMutationCache() {
        return A(this, rt);
      }
      getDefaultOptions() {
        return A(this, st);
      }
      setDefaultOptions(t) {
        F(this, st, t);
      }
      setQueryDefaults(t, e) {
        A(this, Kt).set(An(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...A(this, Kt).values()],
          n = {};
        return (
          e.forEach((r) => {
            Cn(t, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(t, e) {
        A(this, Jt).set(An(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...A(this, Jt).values()],
          n = {};
        return (
          e.forEach((r) => {
            Cn(t, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...A(this, st).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = ea(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === ta && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...A(this, st).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        (A(this, Q).clear(), A(this, rt).clear());
      }
    }),
    (Q = new WeakMap()),
    (rt = new WeakMap()),
    (st = new WeakMap()),
    (Kt = new WeakMap()),
    (Jt = new WeakMap()),
    (at = new WeakMap()),
    (Yt = new WeakMap()),
    (Qt = new WeakMap()),
    li),
  Ti = v.createContext(void 0),
  i_ = (t) => {
    const e = v.useContext(Ti);
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  Yd = ({ client: t, children: e }) => (
    v.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    y.jsx(Ti.Provider, { value: t, children: e })
  );
function He(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((t == null || t(s), n === !1 || !s.defaultPrevented))
      return e == null ? void 0 : e(s);
  };
}
function Va(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Pi(...t) {
  return (e) => {
    let n = !1;
    const r = t.map((s) => {
      const a = Va(s, e);
      return (!n && typeof a == "function" && (n = !0), a);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const a = r[s];
          typeof a == "function" ? a() : Va(t[s], null);
        }
      };
  };
}
function ue(...t) {
  return v.useCallback(Pi(...t), t);
}
function c_(t, e) {
  const n = v.createContext(e),
    r = (a) => {
      const { children: o, ...i } = a,
        c = v.useMemo(() => i, Object.values(i));
      return y.jsx(n.Provider, { value: c, children: o });
    };
  r.displayName = t + "Provider";
  function s(a) {
    const o = v.useContext(n);
    if (o) return o;
    if (e !== void 0) return e;
    throw new Error(`\`${a}\` must be used within \`${t}\``);
  }
  return [r, s];
}
function Tr(t, e = []) {
  let n = [];
  function r(a, o) {
    const i = v.createContext(o),
      c = n.length;
    n = [...n, o];
    const l = (u) => {
      var b;
      const { scope: h, children: p, ...f } = u,
        m = ((b = h == null ? void 0 : h[t]) == null ? void 0 : b[c]) || i,
        g = v.useMemo(() => f, Object.values(f));
      return y.jsx(m.Provider, { value: g, children: p });
    };
    l.displayName = a + "Provider";
    function d(u, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[t]) == null ? void 0 : m[c]) || i,
        f = v.useContext(p);
      if (f) return f;
      if (o !== void 0) return o;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const s = () => {
    const a = n.map((o) => v.createContext(o));
    return function (i) {
      const c = (i == null ? void 0 : i[t]) || a;
      return v.useMemo(() => ({ [`__scope${t}`]: { ...i, [t]: c } }), [i, c]);
    };
  };
  return ((s.scopeName = t), [r, Qd(s, ...e)]);
}
function Qd(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const r = t.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (a) {
      const o = r.reduce((i, { useScope: c, scopeName: l }) => {
        const u = c(a)[`__scope${l}`];
        return { ...i, ...u };
      }, {});
      return v.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = e.scopeName), n);
}
function hr(t) {
  const e = Zd(t),
    n = v.forwardRef((r, s) => {
      const { children: a, ...o } = r,
        i = v.Children.toArray(a),
        c = i.find(tu);
      if (c) {
        const l = c.props.children,
          d = i.map((u) =>
            u === c
              ? v.Children.count(l) > 1
                ? v.Children.only(null)
                : v.isValidElement(l)
                  ? l.props.children
                  : null
              : u,
          );
        return y.jsx(e, {
          ...o,
          ref: s,
          children: v.isValidElement(l) ? v.cloneElement(l, void 0, d) : null,
        });
      }
      return y.jsx(e, { ...o, ref: s, children: a });
    });
  return ((n.displayName = `${t}.Slot`), n);
}
var Xd = hr("Slot");
function Zd(t) {
  const e = v.forwardRef((n, r) => {
    const { children: s, ...a } = n;
    if (v.isValidElement(s)) {
      const o = ru(s),
        i = nu(a, s.props);
      return (
        s.type !== v.Fragment && (i.ref = r ? Pi(r, o) : o),
        v.cloneElement(s, i)
      );
    }
    return v.Children.count(s) > 1 ? v.Children.only(null) : null;
  });
  return ((e.displayName = `${t}.SlotClone`), e);
}
var Ii = Symbol("radix.slottable");
function eu(t) {
  const e = ({ children: n }) => y.jsx(y.Fragment, { children: n });
  return ((e.displayName = `${t}.Slottable`), (e.__radixId = Ii), e);
}
function tu(t) {
  return (
    v.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === Ii
  );
}
function nu(t, e) {
  const n = { ...e };
  for (const r in e) {
    const s = t[r],
      a = e[r];
    /^on[A-Z]/.test(r)
      ? s && a
        ? (n[r] = (...i) => {
            const c = a(...i);
            return (s(...i), c);
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...a })
        : r === "className" && (n[r] = [s, a].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function ru(t) {
  var r, s;
  let e =
      (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : r.get,
    n = e && "isReactWarning" in e && e.isReactWarning;
  return n
    ? t.ref
    : ((e =
        (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : s.get),
      (n = e && "isReactWarning" in e && e.isReactWarning),
      n ? t.props.ref : t.props.ref || t.ref);
}
var su = [
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
  ce = su.reduce((t, e) => {
    const n = hr(`Primitive.${e}`),
      r = v.forwardRef((s, a) => {
        const { asChild: o, ...i } = s,
          c = o ? n : e;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y.jsx(c, { ...i, ref: a })
        );
      });
    return ((r.displayName = `Primitive.${e}`), { ...t, [e]: r });
  }, {});
function na(t, e) {
  t && Sr.flushSync(() => t.dispatchEvent(e));
}
function Me(t) {
  const e = v.useRef(t);
  return (
    v.useEffect(() => {
      e.current = t;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = e.current) == null ? void 0 : r.call(e, ...n);
        },
      [],
    )
  );
}
function ki(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(t);
  v.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      e.addEventListener("keydown", r, { capture: !0 }),
      () => e.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, e]);
}
var au = "DismissableLayer",
  As = "dismissableLayer.update",
  ou = "dismissableLayer.pointerDownOutside",
  iu = "dismissableLayer.focusOutside",
  za,
  Di = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Li = v.forwardRef((t, e) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: a,
        onInteractOutside: o,
        onDismiss: i,
        ...c
      } = t,
      l = v.useContext(Di),
      [d, u] = v.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = v.useState({}),
      f = ue(e, (S) => u(S)),
      m = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = m.indexOf(g),
      _ = d ? m.indexOf(d) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = _ >= b,
      E = du((S) => {
        const D = S.target,
          O = [...l.branches].some((k) => k.contains(D));
        !x ||
          O ||
          (s == null || s(S),
          o == null || o(S),
          S.defaultPrevented || i == null || i());
      }, h),
      C = uu((S) => {
        const D = S.target;
        [...l.branches].some((k) => k.contains(D)) ||
          (a == null || a(S),
          o == null || o(S),
          S.defaultPrevented || i == null || i());
      }, h);
    return (
      ki((S) => {
        _ === l.layers.size - 1 &&
          (r == null || r(S),
          !S.defaultPrevented && i && (S.preventDefault(), i()));
      }, h),
      v.useEffect(() => {
        if (d)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((za = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(d)),
            l.layers.add(d),
            Ha(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = za);
            }
          );
      }, [d, h, n, l]),
      v.useEffect(
        () => () => {
          d &&
            (l.layers.delete(d),
            l.layersWithOutsidePointerEventsDisabled.delete(d),
            Ha());
        },
        [d, l],
      ),
      v.useEffect(() => {
        const S = () => p({});
        return (
          document.addEventListener(As, S),
          () => document.removeEventListener(As, S)
        );
      }, []),
      y.jsx(ce.div, {
        ...c,
        ref: f,
        style: {
          pointerEvents: w ? (x ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: He(t.onFocusCapture, C.onFocusCapture),
        onBlurCapture: He(t.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: He(
          t.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
Li.displayName = au;
var cu = "DismissableLayerBranch",
  lu = v.forwardRef((t, e) => {
    const n = v.useContext(Di),
      r = v.useRef(null),
      s = ue(e, r);
    return (
      v.useEffect(() => {
        const a = r.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      y.jsx(ce.div, { ...t, ref: s })
    );
  });
lu.displayName = cu;
function du(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(t),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const a = (i) => {
          if (i.target && !r.current) {
            let c = function () {
              ji(ou, n, l, { discrete: !0 });
            };
            const l = { originalEvent: i };
            i.pointerType === "touch"
              ? (e.removeEventListener("click", s.current),
                (s.current = c),
                e.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else e.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          e.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          e.removeEventListener("pointerdown", a),
          e.removeEventListener("click", s.current));
      };
    }, [e, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function uu(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(t),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (a) => {
        a.target &&
          !r.current &&
          ji(iu, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        e.addEventListener("focusin", s),
        () => e.removeEventListener("focusin", s)
      );
    }, [e, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ha() {
  const t = new CustomEvent(As);
  document.dispatchEvent(t);
}
function ji(t, e, n, { discrete: r }) {
  const s = n.originalEvent.target,
    a = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  (e && s.addEventListener(t, e, { once: !0 }),
    r ? na(s, a) : s.dispatchEvent(a));
}
var Te =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  pu = di[" useId ".trim().toString()] || (() => {}),
  hu = 0;
function fu(t) {
  const [e, n] = v.useState(pu());
  return (
    Te(() => {
      t || n((r) => r ?? String(hu++));
    }, [t]),
    t || (e ? `radix-${e}` : "")
  );
}
const mu = ["top", "right", "bottom", "left"],
  ot = Math.min,
  fe = Math.max,
  fr = Math.round,
  Kn = Math.floor,
  $e = (t) => ({ x: t, y: t }),
  gu = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vu = { start: "end", end: "start" };
function Cs(t, e, n) {
  return fe(t, ot(e, n));
}
function We(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ke(t) {
  return t.split("-")[0];
}
function nn(t) {
  return t.split("-")[1];
}
function ra(t) {
  return t === "x" ? "y" : "x";
}
function sa(t) {
  return t === "y" ? "height" : "width";
}
const yu = new Set(["top", "bottom"]);
function je(t) {
  return yu.has(Ke(t)) ? "y" : "x";
}
function aa(t) {
  return ra(je(t));
}
function bu(t, e, n) {
  n === void 0 && (n = !1);
  const r = nn(t),
    s = aa(t),
    a = sa(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (e.reference[a] > e.floating[a] && (o = mr(o)), [o, mr(o)]);
}
function _u(t) {
  const e = mr(t);
  return [Rs(t), e, Rs(e)];
}
function Rs(t) {
  return t.replace(/start|end/g, (e) => vu[e]);
}
const Ga = ["left", "right"],
  Wa = ["right", "left"],
  wu = ["top", "bottom"],
  xu = ["bottom", "top"];
function Eu(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? (e ? Wa : Ga) : e ? Ga : Wa;
    case "left":
    case "right":
      return e ? wu : xu;
    default:
      return [];
  }
}
function Su(t, e, n, r) {
  const s = nn(t);
  let a = Eu(Ke(t), n === "start", r);
  return (
    s && ((a = a.map((o) => o + "-" + s)), e && (a = a.concat(a.map(Rs)))),
    a
  );
}
function mr(t) {
  return t.replace(/left|right|bottom|top/g, (e) => gu[e]);
}
function Au(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Ni(t) {
  return typeof t != "number"
    ? Au(t)
    : { top: t, right: t, bottom: t, left: t };
}
function gr(t) {
  const { x: e, y: n, width: r, height: s } = t;
  return {
    width: r,
    height: s,
    top: n,
    left: e,
    right: e + r,
    bottom: n + s,
    x: e,
    y: n,
  };
}
function Ka(t, e, n) {
  let { reference: r, floating: s } = t;
  const a = je(e),
    o = aa(e),
    i = sa(o),
    c = Ke(e),
    l = a === "y",
    d = r.x + r.width / 2 - s.width / 2,
    u = r.y + r.height / 2 - s.height / 2,
    h = r[i] / 2 - s[i] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: d, y: r.y - s.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: u };
      break;
    case "left":
      p = { x: r.x - s.width, y: u };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (nn(e)) {
    case "start":
      p[o] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Cu = async (t, e, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: a = [],
      platform: o,
    } = n,
    i = a.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let l = await o.getElementRects({ reference: t, floating: e, strategy: s }),
    { x: d, y: u } = Ka(l, r, c),
    h = r,
    p = {},
    f = 0;
  for (let m = 0; m < i.length; m++) {
    const { name: g, fn: b } = i[m],
      {
        x: _,
        y: w,
        data: x,
        reset: E,
      } = await b({
        x: d,
        y: u,
        initialPlacement: r,
        placement: h,
        strategy: s,
        middlewareData: p,
        rects: l,
        platform: o,
        elements: { reference: t, floating: e },
      });
    ((d = _ ?? d),
      (u = w ?? u),
      (p = { ...p, [g]: { ...p[g], ...x } }),
      E &&
        f <= 50 &&
        (f++,
        typeof E == "object" &&
          (E.placement && (h = E.placement),
          E.rects &&
            (l =
              E.rects === !0
                ? await o.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: s,
                  })
                : E.rects),
          ({ x: d, y: u } = Ka(l, h, c))),
        (m = -1)));
  }
  return { x: d, y: u, placement: h, strategy: s, middlewareData: p };
};
async function Rn(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: r, y: s, platform: a, rects: o, elements: i, strategy: c } = t,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: u = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = We(e, t),
    f = Ni(p),
    g = i[h ? (u === "floating" ? "reference" : "floating") : u],
    b = gr(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null ||
          n
            ? g
            : g.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(i.floating))),
        boundary: l,
        rootBoundary: d,
        strategy: c,
      }),
    ),
    _ =
      u === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    w = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(i.floating)),
    x = (await (a.isElement == null ? void 0 : a.isElement(w)))
      ? (await (a.getScale == null ? void 0 : a.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = gr(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: _,
            offsetParent: w,
            strategy: c,
          })
        : _,
    );
  return {
    top: (b.top - E.top + f.top) / x.y,
    bottom: (E.bottom - b.bottom + f.bottom) / x.y,
    left: (b.left - E.left + f.left) / x.x,
    right: (E.right - b.right + f.right) / x.x,
  };
}
const Ru = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: a,
          platform: o,
          elements: i,
          middlewareData: c,
        } = e,
        { element: l, padding: d = 0 } = We(t, e) || {};
      if (l == null) return {};
      const u = Ni(d),
        h = { x: n, y: r },
        p = aa(s),
        f = sa(p),
        m = await o.getDimensions(l),
        g = p === "y",
        b = g ? "top" : "left",
        _ = g ? "bottom" : "right",
        w = g ? "clientHeight" : "clientWidth",
        x = a.reference[f] + a.reference[p] - h[p] - a.floating[f],
        E = h[p] - a.reference[p],
        C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
      let S = C ? C[w] : 0;
      (!S || !(await (o.isElement == null ? void 0 : o.isElement(C)))) &&
        (S = i.floating[w] || a.floating[f]);
      const D = x / 2 - E / 2,
        O = S / 2 - m[f] / 2 - 1,
        k = ot(u[b], O),
        V = ot(u[_], O),
        T = k,
        P = S - m[f] - V,
        R = S / 2 - m[f] / 2 + D,
        $ = Cs(T, R, P),
        M =
          !c.arrow &&
          nn(s) != null &&
          R !== $ &&
          a.reference[f] / 2 - (R < T ? k : V) - m[f] / 2 < 0,
        U = M ? (R < T ? R - T : R - P) : 0;
      return {
        [p]: h[p] + U,
        data: {
          [p]: $,
          centerOffset: R - $ - U,
          ...(M && { alignmentOffset: U }),
        },
        reset: M,
      };
    },
  }),
  Ou = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n, r;
          const {
              placement: s,
              middlewareData: a,
              rects: o,
              initialPlacement: i,
              platform: c,
              elements: l,
            } = e,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: f = "none",
              flipAlignment: m = !0,
              ...g
            } = We(t, e);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const b = Ke(s),
            _ = je(i),
            w = Ke(i) === i,
            x = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            E = h || (w || !m ? [mr(i)] : _u(i)),
            C = f !== "none";
          !h && C && E.push(...Su(i, m, f, x));
          const S = [i, ...E],
            D = await Rn(e, g),
            O = [];
          let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(D[b]), u)) {
            const R = bu(s, o, x);
            O.push(D[R[0]], D[R[1]]);
          }
          if (
            ((k = [...k, { placement: s, overflows: O }]),
            !O.every((R) => R <= 0))
          ) {
            var V, T;
            const R = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1,
              $ = S[R];
            if (
              $ &&
              (!(u === "alignment" ? _ !== je($) : !1) ||
                k.every((j) => j.overflows[0] > 0 && je(j.placement) === _))
            )
              return {
                data: { index: R, overflows: k },
                reset: { placement: $ },
              };
            let M =
              (T = k
                .filter((U) => U.overflows[0] <= 0)
                .sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null
                ? void 0
                : T.placement;
            if (!M)
              switch (p) {
                case "bestFit": {
                  var P;
                  const U =
                    (P = k
                      .filter((j) => {
                        if (C) {
                          const z = je(j.placement);
                          return z === _ || z === "y";
                        }
                        return !0;
                      })
                      .map((j) => [
                        j.placement,
                        j.overflows
                          .filter((z) => z > 0)
                          .reduce((z, ne) => z + ne, 0),
                      ])
                      .sort((j, z) => j[1] - z[1])[0]) == null
                      ? void 0
                      : P[0];
                  U && (M = U);
                  break;
                }
                case "initialPlacement":
                  M = i;
                  break;
              }
            if (s !== M) return { reset: { placement: M } };
          }
          return {};
        },
      }
    );
  };
function Ja(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function Ya(t) {
  return mu.some((e) => t[e] >= 0);
}
const Tu = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(e) {
          const { rects: n } = e,
            { strategy: r = "referenceHidden", ...s } = We(t, e);
          switch (r) {
            case "referenceHidden": {
              const a = await Rn(e, { ...s, elementContext: "reference" }),
                o = Ja(a, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Ya(o) },
              };
            }
            case "escaped": {
              const a = await Rn(e, { ...s, altBoundary: !0 }),
                o = Ja(a, n.floating);
              return { data: { escapedOffsets: o, escaped: Ya(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  $i = new Set(["left", "top"]);
async function Pu(t, e) {
  const { placement: n, platform: r, elements: s } = t,
    a = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Ke(n),
    i = nn(n),
    c = je(n) === "y",
    l = $i.has(o) ? -1 : 1,
    d = a && c ? -1 : 1,
    u = We(e, t);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: f,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis,
      };
  return (
    i && typeof f == "number" && (p = i === "end" ? f * -1 : f),
    c ? { x: p * d, y: h * l } : { x: h * l, y: p * d }
  );
}
const Iu = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var n, r;
          const { x: s, y: a, placement: o, middlewareData: i } = e,
            c = await Pu(e, t);
          return o === ((n = i.offset) == null ? void 0 : n.placement) &&
            (r = i.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + c.x, y: a + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  ku = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: r, placement: s } = e,
            {
              mainAxis: a = !0,
              crossAxis: o = !1,
              limiter: i = {
                fn: (g) => {
                  let { x: b, y: _ } = g;
                  return { x: b, y: _ };
                },
              },
              ...c
            } = We(t, e),
            l = { x: n, y: r },
            d = await Rn(e, c),
            u = je(Ke(s)),
            h = ra(u);
          let p = l[h],
            f = l[u];
          if (a) {
            const g = h === "y" ? "top" : "left",
              b = h === "y" ? "bottom" : "right",
              _ = p + d[g],
              w = p - d[b];
            p = Cs(_, p, w);
          }
          if (o) {
            const g = u === "y" ? "top" : "left",
              b = u === "y" ? "bottom" : "right",
              _ = f + d[g],
              w = f - d[b];
            f = Cs(_, f, w);
          }
          const m = i.fn({ ...e, [h]: p, [u]: f });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - r, enabled: { [h]: a, [u]: o } },
          };
        },
      }
    );
  },
  Du = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(e) {
          const { x: n, y: r, placement: s, rects: a, middlewareData: o } = e,
            { offset: i = 0, mainAxis: c = !0, crossAxis: l = !0 } = We(t, e),
            d = { x: n, y: r },
            u = je(s),
            h = ra(u);
          let p = d[h],
            f = d[u];
          const m = We(i, e),
            g =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (c) {
            const w = h === "y" ? "height" : "width",
              x = a.reference[h] - a.floating[w] + g.mainAxis,
              E = a.reference[h] + a.reference[w] - g.mainAxis;
            p < x ? (p = x) : p > E && (p = E);
          }
          if (l) {
            var b, _;
            const w = h === "y" ? "width" : "height",
              x = $i.has(Ke(s)),
              E =
                a.reference[u] -
                a.floating[w] +
                ((x && ((b = o.offset) == null ? void 0 : b[u])) || 0) +
                (x ? 0 : g.crossAxis),
              C =
                a.reference[u] +
                a.reference[w] +
                (x ? 0 : ((_ = o.offset) == null ? void 0 : _[u]) || 0) -
                (x ? g.crossAxis : 0);
            f < E ? (f = E) : f > C && (f = C);
          }
          return { [h]: p, [u]: f };
        },
      }
    );
  },
  Lu = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          var n, r;
          const { placement: s, rects: a, platform: o, elements: i } = e,
            { apply: c = () => {}, ...l } = We(t, e),
            d = await Rn(e, l),
            u = Ke(s),
            h = nn(s),
            p = je(s) === "y",
            { width: f, height: m } = a.floating;
          let g, b;
          u === "top" || u === "bottom"
            ? ((g = u),
              (b =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((b = u), (g = h === "end" ? "top" : "bottom"));
          const _ = m - d.top - d.bottom,
            w = f - d.left - d.right,
            x = ot(m - d[g], _),
            E = ot(f - d[b], w),
            C = !e.middlewareData.shift;
          let S = x,
            D = E;
          if (
            ((n = e.middlewareData.shift) != null && n.enabled.x && (D = w),
            (r = e.middlewareData.shift) != null && r.enabled.y && (S = _),
            C && !h)
          ) {
            const k = fe(d.left, 0),
              V = fe(d.right, 0),
              T = fe(d.top, 0),
              P = fe(d.bottom, 0);
            p
              ? (D = f - 2 * (k !== 0 || V !== 0 ? k + V : fe(d.left, d.right)))
              : (S =
                  m - 2 * (T !== 0 || P !== 0 ? T + P : fe(d.top, d.bottom)));
          }
          await c({ ...e, availableWidth: D, availableHeight: S });
          const O = await o.getDimensions(i.floating);
          return f !== O.width || m !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pr() {
  return typeof window < "u";
}
function rn(t) {
  return Mi(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ve(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function Fe(t) {
  var e;
  return (e = (Mi(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Mi(t) {
  return Pr() ? t instanceof Node || t instanceof ve(t).Node : !1;
}
function Pe(t) {
  return Pr() ? t instanceof Element || t instanceof ve(t).Element : !1;
}
function Be(t) {
  return Pr() ? t instanceof HTMLElement || t instanceof ve(t).HTMLElement : !1;
}
function Qa(t) {
  return !Pr() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof ve(t).ShadowRoot;
}
const ju = new Set(["inline", "contents"]);
function Fn(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: s } = Ie(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !ju.has(s);
}
const Nu = new Set(["table", "td", "th"]);
function $u(t) {
  return Nu.has(rn(t));
}
const Mu = [":popover-open", ":modal"];
function Ir(t) {
  return Mu.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Bu = ["transform", "translate", "scale", "rotate", "perspective"],
  Fu = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Uu = ["paint", "layout", "strict", "content"];
function oa(t) {
  const e = ia(),
    n = Pe(t) ? Ie(t) : t;
  return (
    Bu.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!e && (n.filter ? n.filter !== "none" : !1)) ||
    Fu.some((r) => (n.willChange || "").includes(r)) ||
    Uu.some((r) => (n.contain || "").includes(r))
  );
}
function qu(t) {
  let e = it(t);
  for (; Be(e) && !Xt(e); ) {
    if (oa(e)) return e;
    if (Ir(e)) return null;
    e = it(e);
  }
  return null;
}
function ia() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Vu = new Set(["html", "body", "#document"]);
function Xt(t) {
  return Vu.has(rn(t));
}
function Ie(t) {
  return ve(t).getComputedStyle(t);
}
function kr(t) {
  return Pe(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function it(t) {
  if (rn(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Qa(t) && t.host) || Fe(t);
  return Qa(e) ? e.host : e;
}
function Bi(t) {
  const e = it(t);
  return Xt(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : Be(e) && Fn(e)
      ? e
      : Bi(e);
}
function On(t, e, n) {
  var r;
  (e === void 0 && (e = []), n === void 0 && (n = !0));
  const s = Bi(t),
    a = s === ((r = t.ownerDocument) == null ? void 0 : r.body),
    o = ve(s);
  if (a) {
    const i = Os(o);
    return e.concat(
      o,
      o.visualViewport || [],
      Fn(s) ? s : [],
      i && n ? On(i) : [],
    );
  }
  return e.concat(s, On(s, [], n));
}
function Os(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Fi(t) {
  const e = Ie(t);
  let n = parseFloat(e.width) || 0,
    r = parseFloat(e.height) || 0;
  const s = Be(t),
    a = s ? t.offsetWidth : n,
    o = s ? t.offsetHeight : r,
    i = fr(n) !== a || fr(r) !== o;
  return (i && ((n = a), (r = o)), { width: n, height: r, $: i });
}
function ca(t) {
  return Pe(t) ? t : t.contextElement;
}
function Ut(t) {
  const e = ca(t);
  if (!Be(e)) return $e(1);
  const n = e.getBoundingClientRect(),
    { width: r, height: s, $: a } = Fi(e);
  let o = (a ? fr(n.width) : n.width) / r,
    i = (a ? fr(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: o, y: i }
  );
}
const zu = $e(0);
function Ui(t) {
  const e = ve(t);
  return !ia() || !e.visualViewport
    ? zu
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Hu(t, e, n) {
  return (e === void 0 && (e = !1), !n || (e && n !== ve(t)) ? !1 : e);
}
function At(t, e, n, r) {
  (e === void 0 && (e = !1), n === void 0 && (n = !1));
  const s = t.getBoundingClientRect(),
    a = ca(t);
  let o = $e(1);
  e && (r ? Pe(r) && (o = Ut(r)) : (o = Ut(t)));
  const i = Hu(a, n, r) ? Ui(a) : $e(0);
  let c = (s.left + i.x) / o.x,
    l = (s.top + i.y) / o.y,
    d = s.width / o.x,
    u = s.height / o.y;
  if (a) {
    const h = ve(a),
      p = r && Pe(r) ? ve(r) : r;
    let f = h,
      m = Os(f);
    for (; m && r && p !== f; ) {
      const g = Ut(m),
        b = m.getBoundingClientRect(),
        _ = Ie(m),
        w = b.left + (m.clientLeft + parseFloat(_.paddingLeft)) * g.x,
        x = b.top + (m.clientTop + parseFloat(_.paddingTop)) * g.y;
      ((c *= g.x),
        (l *= g.y),
        (d *= g.x),
        (u *= g.y),
        (c += w),
        (l += x),
        (f = ve(m)),
        (m = Os(f)));
    }
  }
  return gr({ width: d, height: u, x: c, y: l });
}
function la(t, e) {
  const n = kr(t).scrollLeft;
  return e ? e.left + n : At(Fe(t)).left + n;
}
function qi(t, e, n) {
  n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(),
    s = r.left + e.scrollLeft - (n ? 0 : la(t, r)),
    a = r.top + e.scrollTop;
  return { x: s, y: a };
}
function Gu(t) {
  let { elements: e, rect: n, offsetParent: r, strategy: s } = t;
  const a = s === "fixed",
    o = Fe(r),
    i = e ? Ir(e.floating) : !1;
  if (r === o || (i && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = $e(1);
  const d = $e(0),
    u = Be(r);
  if (
    (u || (!u && !a)) &&
    ((rn(r) !== "body" || Fn(o)) && (c = kr(r)), Be(r))
  ) {
    const p = At(r);
    ((l = Ut(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop));
  }
  const h = o && !u && !a ? qi(o, c, !0) : $e(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + h.y,
  };
}
function Wu(t) {
  return Array.from(t.getClientRects());
}
function Ku(t) {
  const e = Fe(t),
    n = kr(t),
    r = t.ownerDocument.body,
    s = fe(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
    a = fe(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + la(t);
  const i = -n.scrollTop;
  return (
    Ie(r).direction === "rtl" && (o += fe(e.clientWidth, r.clientWidth) - s),
    { width: s, height: a, x: o, y: i }
  );
}
function Ju(t, e) {
  const n = ve(t),
    r = Fe(t),
    s = n.visualViewport;
  let a = r.clientWidth,
    o = r.clientHeight,
    i = 0,
    c = 0;
  if (s) {
    ((a = s.width), (o = s.height));
    const l = ia();
    (!l || (l && e === "fixed")) && ((i = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: a, height: o, x: i, y: c };
}
const Yu = new Set(["absolute", "fixed"]);
function Qu(t, e) {
  const n = At(t, !0, e === "fixed"),
    r = n.top + t.clientTop,
    s = n.left + t.clientLeft,
    a = Be(t) ? Ut(t) : $e(1),
    o = t.clientWidth * a.x,
    i = t.clientHeight * a.y,
    c = s * a.x,
    l = r * a.y;
  return { width: o, height: i, x: c, y: l };
}
function Xa(t, e, n) {
  let r;
  if (e === "viewport") r = Ju(t, n);
  else if (e === "document") r = Ku(Fe(t));
  else if (Pe(e)) r = Qu(e, n);
  else {
    const s = Ui(t);
    r = { x: e.x - s.x, y: e.y - s.y, width: e.width, height: e.height };
  }
  return gr(r);
}
function Vi(t, e) {
  const n = it(t);
  return n === e || !Pe(n) || Xt(n)
    ? !1
    : Ie(n).position === "fixed" || Vi(n, e);
}
function Xu(t, e) {
  const n = e.get(t);
  if (n) return n;
  let r = On(t, [], !1).filter((i) => Pe(i) && rn(i) !== "body"),
    s = null;
  const a = Ie(t).position === "fixed";
  let o = a ? it(t) : t;
  for (; Pe(o) && !Xt(o); ) {
    const i = Ie(o),
      c = oa(o);
    (!c && i.position === "fixed" && (s = null),
      (
        a
          ? !c && !s
          : (!c && i.position === "static" && !!s && Yu.has(s.position)) ||
            (Fn(o) && !c && Vi(t, o))
      )
        ? (r = r.filter((d) => d !== o))
        : (s = i),
      (o = it(o)));
  }
  return (e.set(t, r), r);
}
function Zu(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: s } = t;
  const o = [
      ...(n === "clippingAncestors"
        ? Ir(e)
          ? []
          : Xu(e, this._c)
        : [].concat(n)),
      r,
    ],
    i = o[0],
    c = o.reduce(
      (l, d) => {
        const u = Xa(e, d, s);
        return (
          (l.top = fe(u.top, l.top)),
          (l.right = ot(u.right, l.right)),
          (l.bottom = ot(u.bottom, l.bottom)),
          (l.left = fe(u.left, l.left)),
          l
        );
      },
      Xa(e, i, s),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function ep(t) {
  const { width: e, height: n } = Fi(t);
  return { width: e, height: n };
}
function tp(t, e, n) {
  const r = Be(e),
    s = Fe(e),
    a = n === "fixed",
    o = At(t, !0, a, e);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const c = $e(0);
  function l() {
    c.x = la(s);
  }
  if (r || (!r && !a))
    if (((rn(e) !== "body" || Fn(s)) && (i = kr(e)), r)) {
      const p = At(e, !0, a, e);
      ((c.x = p.x + e.clientLeft), (c.y = p.y + e.clientTop));
    } else s && l();
  a && !r && s && l();
  const d = s && !r && !a ? qi(s, i) : $e(0),
    u = o.left + i.scrollLeft - c.x - d.x,
    h = o.top + i.scrollTop - c.y - d.y;
  return { x: u, y: h, width: o.width, height: o.height };
}
function Yr(t) {
  return Ie(t).position === "static";
}
function Za(t, e) {
  if (!Be(t) || Ie(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return (Fe(t) === n && (n = n.ownerDocument.body), n);
}
function zi(t, e) {
  const n = ve(t);
  if (Ir(t)) return n;
  if (!Be(t)) {
    let s = it(t);
    for (; s && !Xt(s); ) {
      if (Pe(s) && !Yr(s)) return s;
      s = it(s);
    }
    return n;
  }
  let r = Za(t, e);
  for (; r && $u(r) && Yr(r); ) r = Za(r, e);
  return r && Xt(r) && Yr(r) && !oa(r) ? n : r || qu(t) || n;
}
const np = async function (t) {
  const e = this.getOffsetParent || zi,
    n = this.getDimensions,
    r = await n(t.floating);
  return {
    reference: tp(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function rp(t) {
  return Ie(t).direction === "rtl";
}
const sp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gu,
  getDocumentElement: Fe,
  getClippingRect: Zu,
  getOffsetParent: zi,
  getElementRects: np,
  getClientRects: Wu,
  getDimensions: ep,
  getScale: Ut,
  isElement: Pe,
  isRTL: rp,
};
function Hi(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function ap(t, e) {
  let n = null,
    r;
  const s = Fe(t);
  function a() {
    var i;
    (clearTimeout(r), (i = n) == null || i.disconnect(), (n = null));
  }
  function o(i, c) {
    (i === void 0 && (i = !1), c === void 0 && (c = 1), a());
    const l = t.getBoundingClientRect(),
      { left: d, top: u, width: h, height: p } = l;
    if ((i || e(), !h || !p)) return;
    const f = Kn(u),
      m = Kn(s.clientWidth - (d + h)),
      g = Kn(s.clientHeight - (u + p)),
      b = Kn(d),
      w = {
        rootMargin: -f + "px " + -m + "px " + -g + "px " + -b + "px",
        threshold: fe(0, ot(1, c)) || 1,
      };
    let x = !0;
    function E(C) {
      const S = C[0].intersectionRatio;
      if (S !== c) {
        if (!x) return o();
        S
          ? o(!1, S)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (S === 1 && !Hi(l, t.getBoundingClientRect()) && o(), (x = !1));
    }
    try {
      n = new IntersectionObserver(E, { ...w, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, w);
    }
    n.observe(t);
  }
  return (o(!0), a);
}
function op(t, e, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    l = ca(t),
    d = s || a ? [...(l ? On(l) : []), ...On(e)] : [];
  d.forEach((b) => {
    (s && b.addEventListener("scroll", n, { passive: !0 }),
      a && b.addEventListener("resize", n));
  });
  const u = l && i ? ap(l, n) : null;
  let h = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((b) => {
      let [_] = b;
      (_ &&
        _.target === l &&
        p &&
        (p.unobserve(e),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var w;
          (w = p) == null || w.observe(e);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    p.observe(e));
  let f,
    m = c ? At(t) : null;
  c && g();
  function g() {
    const b = At(t);
    (m && !Hi(m, b) && n(), (m = b), (f = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var b;
      (d.forEach((_) => {
        (s && _.removeEventListener("scroll", n),
          a && _.removeEventListener("resize", n));
      }),
        u == null || u(),
        (b = p) == null || b.disconnect(),
        (p = null),
        c && cancelAnimationFrame(f));
    }
  );
}
const ip = Iu,
  cp = ku,
  lp = Ou,
  dp = Lu,
  up = Tu,
  eo = Ru,
  pp = Du,
  hp = (t, e, n) => {
    const r = new Map(),
      s = { platform: sp, ...n },
      a = { ...s.platform, _c: r };
    return Cu(t, e, { ...s, platform: a });
  };
var fp = typeof document < "u",
  mp = function () {},
  lr = fp ? v.useLayoutEffect : mp;
function vr(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == "function" && t.toString() === e.toString()) return !0;
  let n, r, s;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!vr(t[r], e[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(t)), (n = s.length), n !== Object.keys(e).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(e, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const a = s[r];
      if (!(a === "_owner" && t.$$typeof) && !vr(t[a], e[a])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Gi(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function to(t, e) {
  const n = Gi(t);
  return Math.round(e * n) / n;
}
function Qr(t) {
  const e = v.useRef(t);
  return (
    lr(() => {
      e.current = t;
    }),
    e
  );
}
function gp(t) {
  t === void 0 && (t = {});
  const {
      placement: e = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: a, floating: o } = {},
      transform: i = !0,
      whileElementsMounted: c,
      open: l,
    } = t,
    [d, u] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = v.useState(r);
  vr(h, r) || p(r);
  const [f, m] = v.useState(null),
    [g, b] = v.useState(null),
    _ = v.useCallback((j) => {
      j !== C.current && ((C.current = j), m(j));
    }, []),
    w = v.useCallback((j) => {
      j !== S.current && ((S.current = j), b(j));
    }, []),
    x = a || f,
    E = o || g,
    C = v.useRef(null),
    S = v.useRef(null),
    D = v.useRef(d),
    O = c != null,
    k = Qr(c),
    V = Qr(s),
    T = Qr(l),
    P = v.useCallback(() => {
      if (!C.current || !S.current) return;
      const j = { placement: e, strategy: n, middleware: h };
      (V.current && (j.platform = V.current),
        hp(C.current, S.current, j).then((z) => {
          const ne = { ...z, isPositioned: T.current !== !1 };
          R.current &&
            !vr(D.current, ne) &&
            ((D.current = ne),
            Sr.flushSync(() => {
              u(ne);
            }));
        }));
    }, [h, e, n, V, T]);
  lr(() => {
    l === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1), u((j) => ({ ...j, isPositioned: !1 })));
  }, [l]);
  const R = v.useRef(!1);
  (lr(
    () => (
      (R.current = !0),
      () => {
        R.current = !1;
      }
    ),
    [],
  ),
    lr(() => {
      if ((x && (C.current = x), E && (S.current = E), x && E)) {
        if (k.current) return k.current(x, E, P);
        P();
      }
    }, [x, E, P, k, O]));
  const $ = v.useMemo(
      () => ({ reference: C, floating: S, setReference: _, setFloating: w }),
      [_, w],
    ),
    M = v.useMemo(() => ({ reference: x, floating: E }), [x, E]),
    U = v.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!M.floating) return j;
      const z = to(M.floating, d.x),
        ne = to(M.floating, d.y);
      return i
        ? {
            ...j,
            transform: "translate(" + z + "px, " + ne + "px)",
            ...(Gi(M.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: z, top: ne };
    }, [n, i, M.floating, d.x, d.y]);
  return v.useMemo(
    () => ({ ...d, update: P, refs: $, elements: M, floatingStyles: U }),
    [d, P, $, M, U],
  );
}
const vp = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(n) {
        const { element: r, padding: s } = typeof t == "function" ? t(n) : t;
        return r && e(r)
          ? r.current != null
            ? eo({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? eo({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  yp = (t, e) => ({ ...ip(t), options: [t, e] }),
  bp = (t, e) => ({ ...cp(t), options: [t, e] }),
  _p = (t, e) => ({ ...pp(t), options: [t, e] }),
  wp = (t, e) => ({ ...lp(t), options: [t, e] }),
  xp = (t, e) => ({ ...dp(t), options: [t, e] }),
  Ep = (t, e) => ({ ...up(t), options: [t, e] }),
  Sp = (t, e) => ({ ...vp(t), options: [t, e] });
var Ap = "Arrow",
  Wi = v.forwardRef((t, e) => {
    const { children: n, width: r = 10, height: s = 5, ...a } = t;
    return y.jsx(ce.svg, {
      ...a,
      ref: e,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Wi.displayName = Ap;
var Cp = Wi;
function Rp(t) {
  const [e, n] = v.useState(void 0);
  return (
    Te(() => {
      if (t) {
        n({ width: t.offsetWidth, height: t.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const a = s[0];
          let o, i;
          if ("borderBoxSize" in a) {
            const c = a.borderBoxSize,
              l = Array.isArray(c) ? c[0] : c;
            ((o = l.inlineSize), (i = l.blockSize));
          } else ((o = t.offsetWidth), (i = t.offsetHeight));
          n({ width: o, height: i });
        });
        return (r.observe(t, { box: "border-box" }), () => r.unobserve(t));
      } else n(void 0);
    }, [t]),
    e
  );
}
var da = "Popper",
  [Ki, Ji] = Tr(da),
  [Op, Yi] = Ki(da),
  Qi = (t) => {
    const { __scopePopper: e, children: n } = t,
      [r, s] = v.useState(null);
    return y.jsx(Op, { scope: e, anchor: r, onAnchorChange: s, children: n });
  };
Qi.displayName = da;
var Xi = "PopperAnchor",
  Zi = v.forwardRef((t, e) => {
    const { __scopePopper: n, virtualRef: r, ...s } = t,
      a = Yi(Xi, n),
      o = v.useRef(null),
      i = ue(e, o);
    return (
      v.useEffect(() => {
        a.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : y.jsx(ce.div, { ...s, ref: i })
    );
  });
Zi.displayName = Xi;
var ua = "PopperContent",
  [Tp, Pp] = Ki(ua),
  ec = v.forwardRef((t, e) => {
    var _a, wa, xa, Ea, Sa, Aa;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: a = "center",
        alignOffset: o = 0,
        arrowPadding: i = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: d = 0,
        sticky: u = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: f,
        ...m
      } = t,
      g = Yi(ua, n),
      [b, _] = v.useState(null),
      w = ue(e, (cn) => _(cn)),
      [x, E] = v.useState(null),
      C = Rp(x),
      S = (C == null ? void 0 : C.width) ?? 0,
      D = (C == null ? void 0 : C.height) ?? 0,
      O = r + (a !== "center" ? "-" + a : ""),
      k =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      V = Array.isArray(l) ? l : [l],
      T = V.length > 0,
      P = { padding: k, boundary: V.filter(kp), altBoundary: T },
      {
        refs: R,
        floatingStyles: $,
        placement: M,
        isPositioned: U,
        middlewareData: j,
      } = gp({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...cn) =>
          op(...cn, { animationFrame: p === "always" }),
        elements: { reference: g.anchor },
        middleware: [
          yp({ mainAxis: s + D, alignmentAxis: o }),
          c &&
            bp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: u === "partial" ? _p() : void 0,
              ...P,
            }),
          c && wp({ ...P }),
          xp({
            ...P,
            apply: ({
              elements: cn,
              rects: Ca,
              availableWidth: Pl,
              availableHeight: Il,
            }) => {
              const { width: kl, height: Dl } = Ca.reference,
                zn = cn.floating.style;
              (zn.setProperty("--radix-popper-available-width", `${Pl}px`),
                zn.setProperty("--radix-popper-available-height", `${Il}px`),
                zn.setProperty("--radix-popper-anchor-width", `${kl}px`),
                zn.setProperty("--radix-popper-anchor-height", `${Dl}px`));
            },
          }),
          x && Sp({ element: x, padding: i }),
          Dp({ arrowWidth: S, arrowHeight: D }),
          h && Ep({ strategy: "referenceHidden", ...P }),
        ],
      }),
      [z, ne] = rc(M),
      W = Me(f);
    Te(() => {
      U && (W == null || W());
    }, [U, W]);
    const pe = (_a = j.arrow) == null ? void 0 : _a.x,
      ye = (wa = j.arrow) == null ? void 0 : wa.y,
      lt = ((xa = j.arrow) == null ? void 0 : xa.centerOffset) !== 0,
      [Vn, Tl] = v.useState();
    return (
      Te(() => {
        b && Tl(window.getComputedStyle(b).zIndex);
      }, [b]),
      y.jsx("div", {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: U ? $.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Vn,
          "--radix-popper-transform-origin": [
            (Ea = j.transformOrigin) == null ? void 0 : Ea.x,
            (Sa = j.transformOrigin) == null ? void 0 : Sa.y,
          ].join(" "),
          ...(((Aa = j.hide) == null ? void 0 : Aa.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: y.jsx(Tp, {
          scope: n,
          placedSide: z,
          onArrowChange: E,
          arrowX: pe,
          arrowY: ye,
          shouldHideArrow: lt,
          children: y.jsx(ce.div, {
            "data-side": z,
            "data-align": ne,
            ...m,
            ref: w,
            style: { ...m.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ec.displayName = ua;
var tc = "PopperArrow",
  Ip = { top: "bottom", right: "left", bottom: "top", left: "right" },
  nc = v.forwardRef(function (e, n) {
    const { __scopePopper: r, ...s } = e,
      a = Pp(tc, r),
      o = Ip[a.placedSide];
    return y.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [o]: 0,
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
      children: y.jsx(Cp, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
nc.displayName = tc;
function kp(t) {
  return t !== null;
}
var Dp = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var g, b, _;
    const { placement: n, rects: r, middlewareData: s } = e,
      o = ((g = s.arrow) == null ? void 0 : g.centerOffset) !== 0,
      i = o ? 0 : t.arrowWidth,
      c = o ? 0 : t.arrowHeight,
      [l, d] = rc(n),
      u = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((b = s.arrow) == null ? void 0 : b.x) ?? 0) + i / 2,
      p = (((_ = s.arrow) == null ? void 0 : _.y) ?? 0) + c / 2;
    let f = "",
      m = "";
    return (
      l === "bottom"
        ? ((f = o ? u : `${h}px`), (m = `${-c}px`))
        : l === "top"
          ? ((f = o ? u : `${h}px`), (m = `${r.floating.height + c}px`))
          : l === "right"
            ? ((f = `${-c}px`), (m = o ? u : `${p}px`))
            : l === "left" &&
              ((f = `${r.floating.width + c}px`), (m = o ? u : `${p}px`)),
      { data: { x: f, y: m } }
    );
  },
});
function rc(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var Lp = Qi,
  jp = Zi,
  Np = ec,
  $p = nc,
  Mp = "Portal",
  sc = v.forwardRef((t, e) => {
    var i;
    const { container: n, ...r } = t,
      [s, a] = v.useState(!1);
    Te(() => a(!0), []);
    const o =
      n ||
      (s &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return o ? Nl.createPortal(y.jsx(ce.div, { ...r, ref: e }), o) : null;
  });
sc.displayName = Mp;
function Bp(t, e) {
  return v.useReducer((n, r) => e[n][r] ?? n, t);
}
var ac = (t) => {
  const { present: e, children: n } = t,
    r = Fp(e),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    a = ue(r.ref, Up(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: a })
    : null;
};
ac.displayName = "Presence";
function Fp(t) {
  const [e, n] = v.useState(),
    r = v.useRef(null),
    s = v.useRef(t),
    a = v.useRef("none"),
    o = t ? "mounted" : "unmounted",
    [i, c] = Bp(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const l = Jn(r.current);
      a.current = i === "mounted" ? l : "none";
    }, [i]),
    Te(() => {
      const l = r.current,
        d = s.current;
      if (d !== t) {
        const h = a.current,
          p = Jn(l);
        (t
          ? c("MOUNT")
          : p === "none" || (l == null ? void 0 : l.display) === "none"
            ? c("UNMOUNT")
            : c(d && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = t));
      }
    }, [t, c]),
    Te(() => {
      if (e) {
        let l;
        const d = e.ownerDocument.defaultView ?? window,
          u = (p) => {
            const m = Jn(r.current).includes(p.animationName);
            if (p.target === e && m && (c("ANIMATION_END"), !s.current)) {
              const g = e.style.animationFillMode;
              ((e.style.animationFillMode = "forwards"),
                (l = d.setTimeout(() => {
                  e.style.animationFillMode === "forwards" &&
                    (e.style.animationFillMode = g);
                })));
            }
          },
          h = (p) => {
            p.target === e && (a.current = Jn(r.current));
          };
        return (
          e.addEventListener("animationstart", h),
          e.addEventListener("animationcancel", u),
          e.addEventListener("animationend", u),
          () => {
            (d.clearTimeout(l),
              e.removeEventListener("animationstart", h),
              e.removeEventListener("animationcancel", u),
              e.removeEventListener("animationend", u));
          }
        );
      } else c("ANIMATION_END");
    }, [e, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: v.useCallback((l) => {
        ((r.current = l ? getComputedStyle(l) : null), n(l));
      }, []),
    }
  );
}
function Jn(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function Up(t) {
  var r, s;
  let e =
      (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : r.get,
    n = e && "isReactWarning" in e && e.isReactWarning;
  return n
    ? t.ref
    : ((e =
        (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : s.get),
      (n = e && "isReactWarning" in e && e.isReactWarning),
      n ? t.props.ref : t.props.ref || t.ref);
}
var qp = di[" useInsertionEffect ".trim().toString()] || Te;
function oc({ prop: t, defaultProp: e, onChange: n = () => {}, caller: r }) {
  const [s, a, o] = Vp({ defaultProp: e, onChange: n }),
    i = t !== void 0,
    c = i ? t : s;
  {
    const d = v.useRef(t !== void 0);
    v.useEffect(() => {
      const u = d.current;
      (u !== i &&
        console.warn(
          `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = i));
    }, [i, r]);
  }
  const l = v.useCallback(
    (d) => {
      var u;
      if (i) {
        const h = zp(d) ? d(t) : d;
        h !== t && ((u = o.current) == null || u.call(o, h));
      } else a(d);
    },
    [i, t, a, o],
  );
  return [c, l];
}
function Vp({ defaultProp: t, onChange: e }) {
  const [n, r] = v.useState(t),
    s = v.useRef(n),
    a = v.useRef(e);
  return (
    qp(() => {
      a.current = e;
    }, [e]),
    v.useEffect(() => {
      var o;
      s.current !== n &&
        ((o = a.current) == null || o.call(a, n), (s.current = n));
    }, [n, s]),
    [n, r, a]
  );
}
function zp(t) {
  return typeof t == "function";
}
var Hp = Object.freeze({
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
  Gp = "VisuallyHidden",
  Dr = v.forwardRef((t, e) =>
    y.jsx(ce.span, { ...t, ref: e, style: { ...Hp, ...t.style } }),
  );
Dr.displayName = Gp;
var Wp = Dr,
  [Lr, l_] = Tr("Tooltip", [Ji]),
  jr = Ji(),
  ic = "TooltipProvider",
  Kp = 700,
  Ts = "tooltip.open",
  [Jp, pa] = Lr(ic),
  cc = (t) => {
    const {
        __scopeTooltip: e,
        delayDuration: n = Kp,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: a,
      } = t,
      o = v.useRef(!0),
      i = v.useRef(!1),
      c = v.useRef(0);
    return (
      v.useEffect(() => {
        const l = c.current;
        return () => window.clearTimeout(l);
      }, []),
      y.jsx(Jp, {
        scope: e,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          (window.clearTimeout(c.current), (o.current = !1));
        }, []),
        onClose: v.useCallback(() => {
          (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: v.useCallback((l) => {
          i.current = l;
        }, []),
        disableHoverableContent: s,
        children: a,
      })
    );
  };
cc.displayName = ic;
var Tn = "Tooltip",
  [Yp, Nr] = Lr(Tn),
  lc = (t) => {
    const {
        __scopeTooltip: e,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: i,
      } = t,
      c = pa(Tn, t.__scopeTooltip),
      l = jr(e),
      [d, u] = v.useState(null),
      h = fu(),
      p = v.useRef(0),
      f = o ?? c.disableHoverableContent,
      m = i ?? c.delayDuration,
      g = v.useRef(!1),
      [b, _] = oc({
        prop: r,
        defaultProp: s ?? !1,
        onChange: (S) => {
          (S
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ts)))
            : c.onClose(),
            a == null || a(S));
        },
        caller: Tn,
      }),
      w = v.useMemo(
        () => (b ? (g.current ? "delayed-open" : "instant-open") : "closed"),
        [b],
      ),
      x = v.useCallback(() => {
        (window.clearTimeout(p.current),
          (p.current = 0),
          (g.current = !1),
          _(!0));
      }, [_]),
      E = v.useCallback(() => {
        (window.clearTimeout(p.current), (p.current = 0), _(!1));
      }, [_]),
      C = v.useCallback(() => {
        (window.clearTimeout(p.current),
          (p.current = window.setTimeout(() => {
            ((g.current = !0), _(!0), (p.current = 0));
          }, m)));
      }, [m, _]);
    return (
      v.useEffect(
        () => () => {
          p.current && (window.clearTimeout(p.current), (p.current = 0));
        },
        [],
      ),
      y.jsx(Lp, {
        ...l,
        children: y.jsx(Yp, {
          scope: e,
          contentId: h,
          open: b,
          stateAttribute: w,
          trigger: d,
          onTriggerChange: u,
          onTriggerEnter: v.useCallback(() => {
            c.isOpenDelayedRef.current ? C() : x();
          }, [c.isOpenDelayedRef, C, x]),
          onTriggerLeave: v.useCallback(() => {
            f ? E() : (window.clearTimeout(p.current), (p.current = 0));
          }, [E, f]),
          onOpen: x,
          onClose: E,
          disableHoverableContent: f,
          children: n,
        }),
      })
    );
  };
lc.displayName = Tn;
var Ps = "TooltipTrigger",
  dc = v.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...r } = t,
      s = Nr(Ps, n),
      a = pa(Ps, n),
      o = jr(n),
      i = v.useRef(null),
      c = ue(e, i, s.onTriggerChange),
      l = v.useRef(!1),
      d = v.useRef(!1),
      u = v.useCallback(() => (l.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", u),
        [u],
      ),
      y.jsx(jp, {
        asChild: !0,
        ...o,
        children: y.jsx(ce.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: c,
          onPointerMove: He(t.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !a.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: He(t.onPointerLeave, () => {
            (s.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: He(t.onPointerDown, () => {
            (s.open && s.onClose(),
              (l.current = !0),
              document.addEventListener("pointerup", u, { once: !0 }));
          }),
          onFocus: He(t.onFocus, () => {
            l.current || s.onOpen();
          }),
          onBlur: He(t.onBlur, s.onClose),
          onClick: He(t.onClick, s.onClose),
        }),
      })
    );
  });
dc.displayName = Ps;
var Qp = "TooltipPortal",
  [d_, Xp] = Lr(Qp, { forceMount: void 0 }),
  Zt = "TooltipContent",
  uc = v.forwardRef((t, e) => {
    const n = Xp(Zt, t.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...a } = t,
      o = Nr(Zt, t.__scopeTooltip);
    return y.jsx(ac, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? y.jsx(pc, { side: s, ...a, ref: e })
        : y.jsx(Zp, { side: s, ...a, ref: e }),
    });
  }),
  Zp = v.forwardRef((t, e) => {
    const n = Nr(Zt, t.__scopeTooltip),
      r = pa(Zt, t.__scopeTooltip),
      s = v.useRef(null),
      a = ue(e, s),
      [o, i] = v.useState(null),
      { trigger: c, onClose: l } = n,
      d = s.current,
      { onPointerInTransitChange: u } = r,
      h = v.useCallback(() => {
        (i(null), u(!1));
      }, [u]),
      p = v.useCallback(
        (f, m) => {
          const g = f.currentTarget,
            b = { x: f.clientX, y: f.clientY },
            _ = sh(b, g.getBoundingClientRect()),
            w = ah(b, _),
            x = oh(m.getBoundingClientRect()),
            E = ch([...w, ...x]);
          (i(E), u(!0));
        },
        [u],
      );
    return (
      v.useEffect(() => () => h(), [h]),
      v.useEffect(() => {
        if (c && d) {
          const f = (g) => p(g, d),
            m = (g) => p(g, c);
          return (
            c.addEventListener("pointerleave", f),
            d.addEventListener("pointerleave", m),
            () => {
              (c.removeEventListener("pointerleave", f),
                d.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [c, d, p, h]),
      v.useEffect(() => {
        if (o) {
          const f = (m) => {
            const g = m.target,
              b = { x: m.clientX, y: m.clientY },
              _ =
                (c == null ? void 0 : c.contains(g)) ||
                (d == null ? void 0 : d.contains(g)),
              w = !ih(b, o);
            _ ? h() : w && (h(), l());
          };
          return (
            document.addEventListener("pointermove", f),
            () => document.removeEventListener("pointermove", f)
          );
        }
      }, [c, d, o, l, h]),
      y.jsx(pc, { ...t, ref: a })
    );
  }),
  [eh, th] = Lr(Tn, { isInside: !1 }),
  nh = eu("TooltipContent"),
  pc = v.forwardRef((t, e) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        ...i
      } = t,
      c = Nr(Zt, n),
      l = jr(n),
      { onClose: d } = c;
    return (
      v.useEffect(
        () => (
          document.addEventListener(Ts, d),
          () => document.removeEventListener(Ts, d)
        ),
        [d],
      ),
      v.useEffect(() => {
        if (c.trigger) {
          const u = (h) => {
            const p = h.target;
            p != null && p.contains(c.trigger) && d();
          };
          return (
            window.addEventListener("scroll", u, { capture: !0 }),
            () => window.removeEventListener("scroll", u, { capture: !0 })
          );
        }
      }, [c.trigger, d]),
      y.jsx(Li, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: y.jsxs(Np, {
          "data-state": c.stateAttribute,
          ...l,
          ...i,
          ref: e,
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
            y.jsx(nh, { children: r }),
            y.jsx(eh, {
              scope: n,
              isInside: !0,
              children: y.jsx(Wp, {
                id: c.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
uc.displayName = Zt;
var hc = "TooltipArrow",
  rh = v.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...r } = t,
      s = jr(n);
    return th(hc, n).isInside ? null : y.jsx($p, { ...s, ...r, ref: e });
  });
rh.displayName = hc;
function sh(t, e) {
  const n = Math.abs(e.top - t.y),
    r = Math.abs(e.bottom - t.y),
    s = Math.abs(e.right - t.x),
    a = Math.abs(e.left - t.x);
  switch (Math.min(n, r, s, a)) {
    case a:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ah(t, e, n = 5) {
  const r = [];
  switch (e) {
    case "top":
      r.push({ x: t.x - n, y: t.y + n }, { x: t.x + n, y: t.y + n });
      break;
    case "bottom":
      r.push({ x: t.x - n, y: t.y - n }, { x: t.x + n, y: t.y - n });
      break;
    case "left":
      r.push({ x: t.x + n, y: t.y - n }, { x: t.x + n, y: t.y + n });
      break;
    case "right":
      r.push({ x: t.x - n, y: t.y - n }, { x: t.x - n, y: t.y + n });
      break;
  }
  return r;
}
function oh(t) {
  const { top: e, right: n, bottom: r, left: s } = t;
  return [
    { x: s, y: e },
    { x: n, y: e },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function ih(t, e) {
  const { x: n, y: r } = t;
  let s = !1;
  for (let a = 0, o = e.length - 1; a < e.length; o = a++) {
    const i = e[a],
      c = e[o],
      l = i.x,
      d = i.y,
      u = c.x,
      h = c.y;
    d > r != h > r && n < ((u - l) * (r - d)) / (h - d) + l && (s = !s);
  }
  return s;
}
function ch(t) {
  const e = t.slice();
  return (
    e.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    lh(e)
  );
}
function lh(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    for (; e.length >= 2; ) {
      const a = e[e.length - 1],
        o = e[e.length - 2];
      if ((a.x - o.x) * (s.y - o.y) >= (a.y - o.y) * (s.x - o.x)) e.pop();
      else break;
    }
    e.push(s);
  }
  e.pop();
  const n = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const s = t[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1],
        o = n[n.length - 2];
      if ((a.x - o.x) * (s.y - o.y) >= (a.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y
      ? e
      : e.concat(n)
  );
}
var dh = cc,
  uh = lc,
  ph = dc,
  fc = uc;
function mc(t) {
  var e,
    n,
    r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (n = mc(t[e])) && (r && (r += " "), (r += n));
    } else for (n in t) t[n] && (r && (r += " "), (r += n));
  return r;
}
function gc() {
  for (var t, e, n = 0, r = "", s = arguments.length; n < s; n++)
    (t = arguments[n]) && (e = mc(t)) && (r && (r += " "), (r += e));
  return r;
}
const ha = "-",
  hh = (t) => {
    const e = mh(t),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = t;
    return {
      getClassGroupId: (o) => {
        const i = o.split(ha);
        return (i[0] === "" && i.length !== 1 && i.shift(), vc(i, e) || fh(o));
      },
      getConflictingClassGroupIds: (o, i) => {
        const c = n[o] || [];
        return i && r[o] ? [...c, ...r[o]] : c;
      },
    };
  },
  vc = (t, e) => {
    var o;
    if (t.length === 0) return e.classGroupId;
    const n = t[0],
      r = e.nextPart.get(n),
      s = r ? vc(t.slice(1), r) : void 0;
    if (s) return s;
    if (e.validators.length === 0) return;
    const a = t.join(ha);
    return (o = e.validators.find(({ validator: i }) => i(a))) == null
      ? void 0
      : o.classGroupId;
  },
  no = /^\[(.+)\]$/,
  fh = (t) => {
    if (no.test(t)) {
      const e = no.exec(t)[1],
        n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  mh = (t) => {
    const { theme: e, prefix: n } = t,
      r = { nextPart: new Map(), validators: [] };
    return (
      vh(Object.entries(t.classGroups), n).forEach(([a, o]) => {
        Is(o, r, a, e);
      }),
      r
    );
  },
  Is = (t, e, n, r) => {
    t.forEach((s) => {
      if (typeof s == "string") {
        const a = s === "" ? e : ro(e, s);
        a.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (gh(s)) {
          Is(s(r), e, n, r);
          return;
        }
        e.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([a, o]) => {
        Is(o, ro(e, a), n, r);
      });
    });
  },
  ro = (t, e) => {
    let n = t;
    return (
      e.split(ha).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  gh = (t) => t.isThemeGetter,
  vh = (t, e) =>
    e
      ? t.map(([n, r]) => {
          const s = r.map((a) =>
            typeof a == "string"
              ? e + a
              : typeof a == "object"
                ? Object.fromEntries(
                    Object.entries(a).map(([o, i]) => [e + o, i]),
                  )
                : a,
          );
          return [n, s];
        })
      : t,
  yh = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      n = new Map(),
      r = new Map();
    const s = (a, o) => {
      (n.set(a, o), e++, e > t && ((e = 0), (r = n), (n = new Map())));
    };
    return {
      get(a) {
        let o = n.get(a);
        if (o !== void 0) return o;
        if ((o = r.get(a)) !== void 0) return (s(a, o), o);
      },
      set(a, o) {
        n.has(a) ? n.set(a, o) : s(a, o);
      },
    };
  },
  yc = "!",
  bh = (t) => {
    const { separator: e, experimentalParseClassName: n } = t,
      r = e.length === 1,
      s = e[0],
      a = e.length,
      o = (i) => {
        const c = [];
        let l = 0,
          d = 0,
          u;
        for (let g = 0; g < i.length; g++) {
          let b = i[g];
          if (l === 0) {
            if (b === s && (r || i.slice(g, g + a) === e)) {
              (c.push(i.slice(d, g)), (d = g + a));
              continue;
            }
            if (b === "/") {
              u = g;
              continue;
            }
          }
          b === "[" ? l++ : b === "]" && l--;
        }
        const h = c.length === 0 ? i : i.substring(d),
          p = h.startsWith(yc),
          f = p ? h.substring(1) : h,
          m = u && u > d ? u - d : void 0;
        return {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: f,
          maybePostfixModifierPosition: m,
        };
      };
    return n ? (i) => n({ className: i, parseClassName: o }) : o;
  },
  _h = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return (
      t.forEach((r) => {
        r[0] === "[" ? (e.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      e.push(...n.sort()),
      e
    );
  },
  wh = (t) => ({ cache: yh(t.cacheSize), parseClassName: bh(t), ...hh(t) }),
  xh = /\s+/,
  Eh = (t, e) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = e,
      a = [],
      o = t.trim().split(xh);
    let i = "";
    for (let c = o.length - 1; c >= 0; c -= 1) {
      const l = o[c],
        {
          modifiers: d,
          hasImportantModifier: u,
          baseClassName: h,
          maybePostfixModifierPosition: p,
        } = n(l);
      let f = !!p,
        m = r(f ? h.substring(0, p) : h);
      if (!m) {
        if (!f) {
          i = l + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((m = r(h)), !m)) {
          i = l + (i.length > 0 ? " " + i : i);
          continue;
        }
        f = !1;
      }
      const g = _h(d).join(":"),
        b = u ? g + yc : g,
        _ = b + m;
      if (a.includes(_)) continue;
      a.push(_);
      const w = s(m, f);
      for (let x = 0; x < w.length; ++x) {
        const E = w[x];
        a.push(b + E);
      }
      i = l + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function Sh() {
  let t = 0,
    e,
    n,
    r = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (n = bc(e)) && (r && (r += " "), (r += n));
  return r;
}
const bc = (t) => {
  if (typeof t == "string") return t;
  let e,
    n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = bc(t[r])) && (n && (n += " "), (n += e));
  return n;
};
function Ah(t, ...e) {
  let n,
    r,
    s,
    a = o;
  function o(c) {
    const l = e.reduce((d, u) => u(d), t());
    return ((n = wh(l)), (r = n.cache.get), (s = n.cache.set), (a = i), i(c));
  }
  function i(c) {
    const l = r(c);
    if (l) return l;
    const d = Eh(c, n);
    return (s(c, d), d);
  }
  return function () {
    return a(Sh.apply(null, arguments));
  };
}
const Y = (t) => {
    const e = (n) => n[t] || [];
    return ((e.isThemeGetter = !0), e);
  },
  _c = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ch = /^\d+\/\d+$/,
  Rh = new Set(["px", "full", "screen"]),
  Oh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Th =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ph = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Ih = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  kh =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ue = (t) => qt(t) || Rh.has(t) || Ch.test(t),
  Ye = (t) => sn(t, "length", Fh),
  qt = (t) => !!t && !Number.isNaN(Number(t)),
  Xr = (t) => sn(t, "number", qt),
  un = (t) => !!t && Number.isInteger(Number(t)),
  Dh = (t) => t.endsWith("%") && qt(t.slice(0, -1)),
  q = (t) => _c.test(t),
  Qe = (t) => Oh.test(t),
  Lh = new Set(["length", "size", "percentage"]),
  jh = (t) => sn(t, Lh, wc),
  Nh = (t) => sn(t, "position", wc),
  $h = new Set(["image", "url"]),
  Mh = (t) => sn(t, $h, qh),
  Bh = (t) => sn(t, "", Uh),
  pn = () => !0,
  sn = (t, e, n) => {
    const r = _c.exec(t);
    return r
      ? r[1]
        ? typeof e == "string"
          ? r[1] === e
          : e.has(r[1])
        : n(r[2])
      : !1;
  },
  Fh = (t) => Th.test(t) && !Ph.test(t),
  wc = () => !1,
  Uh = (t) => Ih.test(t),
  qh = (t) => kh.test(t),
  Vh = () => {
    const t = Y("colors"),
      e = Y("spacing"),
      n = Y("blur"),
      r = Y("brightness"),
      s = Y("borderColor"),
      a = Y("borderRadius"),
      o = Y("borderSpacing"),
      i = Y("borderWidth"),
      c = Y("contrast"),
      l = Y("grayscale"),
      d = Y("hueRotate"),
      u = Y("invert"),
      h = Y("gap"),
      p = Y("gradientColorStops"),
      f = Y("gradientColorStopPositions"),
      m = Y("inset"),
      g = Y("margin"),
      b = Y("opacity"),
      _ = Y("padding"),
      w = Y("saturate"),
      x = Y("scale"),
      E = Y("sepia"),
      C = Y("skew"),
      S = Y("space"),
      D = Y("translate"),
      O = () => ["auto", "contain", "none"],
      k = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", q, e],
      T = () => [q, e],
      P = () => ["", Ue, Ye],
      R = () => ["auto", qt, q],
      $ = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      M = () => ["solid", "dashed", "dotted", "double", "none"],
      U = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      z = () => ["", "0", q],
      ne = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [qt, q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [pn],
        spacing: [Ue, Ye],
        blur: ["none", "", Qe, q],
        brightness: W(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Qe, q],
        borderSpacing: T(),
        borderWidth: P(),
        contrast: W(),
        grayscale: z(),
        hueRotate: W(),
        invert: z(),
        gap: T(),
        gradientColorStops: [t],
        gradientColorStopPositions: [Dh, Ye],
        inset: V(),
        margin: V(),
        opacity: W(),
        padding: T(),
        saturate: W(),
        scale: W(),
        sepia: z(),
        skew: W(),
        space: T(),
        translate: T(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", q] }],
        container: ["container"],
        columns: [{ columns: [Qe] }],
        "break-after": [{ "break-after": ne() }],
        "break-before": [{ "break-before": ne() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...$(), q] }],
        overflow: [{ overflow: k() }],
        "overflow-x": [{ "overflow-x": k() }],
        "overflow-y": [{ "overflow-y": k() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [m] }],
        "inset-x": [{ "inset-x": [m] }],
        "inset-y": [{ "inset-y": [m] }],
        start: [{ start: [m] }],
        end: [{ end: [m] }],
        top: [{ top: [m] }],
        right: [{ right: [m] }],
        bottom: [{ bottom: [m] }],
        left: [{ left: [m] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", un, q] }],
        basis: [{ basis: V() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", q] }],
        grow: [{ grow: z() }],
        shrink: [{ shrink: z() }],
        order: [{ order: ["first", "last", "none", un, q] }],
        "grid-cols": [{ "grid-cols": [pn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", un, q] }, q] }],
        "col-start": [{ "col-start": R() }],
        "col-end": [{ "col-end": R() }],
        "grid-rows": [{ "grid-rows": [pn] }],
        "row-start-end": [{ row: ["auto", { span: [un, q] }, q] }],
        "row-start": [{ "row-start": R() }],
        "row-end": [{ "row-end": R() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [_] }],
        px: [{ px: [_] }],
        py: [{ py: [_] }],
        ps: [{ ps: [_] }],
        pe: [{ pe: [_] }],
        pt: [{ pt: [_] }],
        pr: [{ pr: [_] }],
        pb: [{ pb: [_] }],
        pl: [{ pl: [_] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        "space-x": [{ "space-x": [S] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [S] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, e] }],
        "min-w": [{ "min-w": [q, e, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              q,
              e,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Qe] },
              Qe,
            ],
          },
        ],
        h: [{ h: [q, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [q, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [q, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [q, e, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Qe, Ye] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Xr,
            ],
          },
        ],
        "font-family": [{ font: [pn] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", qt, Xr] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ue,
              q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [b] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [b] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...M(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ue, Ye] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ue, q] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: T() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...$(), Nh] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", jh] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Mh,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [f] }],
        "gradient-via-pos": [{ via: [f] }],
        "gradient-to-pos": [{ to: [f] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [i] }],
        "border-w-x": [{ "border-x": [i] }],
        "border-w-y": [{ "border-y": [i] }],
        "border-w-s": [{ "border-s": [i] }],
        "border-w-e": [{ "border-e": [i] }],
        "border-w-t": [{ "border-t": [i] }],
        "border-w-r": [{ "border-r": [i] }],
        "border-w-b": [{ "border-b": [i] }],
        "border-w-l": [{ "border-l": [i] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...M(), "hidden"] }],
        "divide-x": [{ "divide-x": [i] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [i] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: M() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...M()] }],
        "outline-offset": [{ "outline-offset": [Ue, q] }],
        "outline-w": [{ outline: [Ue, Ye] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [Ue, Ye] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Qe, Bh] }],
        "shadow-color": [{ shadow: [pn] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": U() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Qe, q] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [u] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [u] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              q,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [un, q] }],
        "translate-x": [{ "translate-x": [D] }],
        "translate-y": [{ "translate-y": [D] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              q,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              q,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": T() }],
        "scroll-mx": [{ "scroll-mx": T() }],
        "scroll-my": [{ "scroll-my": T() }],
        "scroll-ms": [{ "scroll-ms": T() }],
        "scroll-me": [{ "scroll-me": T() }],
        "scroll-mt": [{ "scroll-mt": T() }],
        "scroll-mr": [{ "scroll-mr": T() }],
        "scroll-mb": [{ "scroll-mb": T() }],
        "scroll-ml": [{ "scroll-ml": T() }],
        "scroll-p": [{ "scroll-p": T() }],
        "scroll-px": [{ "scroll-px": T() }],
        "scroll-py": [{ "scroll-py": T() }],
        "scroll-ps": [{ "scroll-ps": T() }],
        "scroll-pe": [{ "scroll-pe": T() }],
        "scroll-pt": [{ "scroll-pt": T() }],
        "scroll-pr": [{ "scroll-pr": T() }],
        "scroll-pb": [{ "scroll-pb": T() }],
        "scroll-pl": [{ "scroll-pl": T() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", q] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [Ue, Ye, Xr] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  zh = Ah(Vh);
function ct(...t) {
  return zh(gc(t));
}
const Hh = dh,
  u_ = uh,
  p_ = ph,
  Gh = v.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) =>
    y.jsx(fc, {
      "data-lov-id": "src\\components\\ui\\tooltip.tsx:16:2",
      "data-lov-name": "TooltipPrimitive.Content",
      "data-component-path": "src\\components\\ui\\tooltip.tsx",
      "data-component-line": "16",
      "data-component-file": "tooltip.tsx",
      "data-component-name": "TooltipPrimitive.Content",
      "data-component-content": "%7B%7D",
      ref: r,
      sideOffset: e,
      className: ct(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t,
      ),
      ...n,
    }),
  );
Gh.displayName = fc.displayName;
const Wh = 1,
  Kh = 1e6;
let Zr = 0;
function Jh() {
  return ((Zr = (Zr + 1) % Number.MAX_SAFE_INTEGER), Zr.toString());
}
const es = new Map(),
  so = (t) => {
    if (es.has(t)) return;
    const e = setTimeout(() => {
      (es.delete(t), bn({ type: "REMOVE_TOAST", toastId: t }));
    }, Kh);
    es.set(t, e);
  },
  Yh = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [e.toast, ...t.toasts].slice(0, Wh) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((n) =>
            n.id === e.toast.id ? { ...n, ...e.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = e;
        return (
          n
            ? so(n)
            : t.toasts.forEach((r) => {
                so(r.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return e.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((n) => n.id !== e.toastId) };
    }
  },
  dr = [];
let ur = { toasts: [] };
function bn(t) {
  ((ur = Yh(ur, t)),
    dr.forEach((e) => {
      e(ur);
    }));
}
function Qh({ ...t }) {
  const e = Jh(),
    n = (s) => bn({ type: "UPDATE_TOAST", toast: { ...s, id: e } }),
    r = () => bn({ type: "DISMISS_TOAST", toastId: e });
  return (
    bn({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: e,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: e, dismiss: r, update: n }
  );
}
function Xh() {
  const [t, e] = v.useState(ur);
  return (
    v.useEffect(
      () => (
        dr.push(e),
        () => {
          const n = dr.indexOf(e);
          n > -1 && dr.splice(n, 1);
        }
      ),
      [t],
    ),
    {
      ...t,
      toast: Qh,
      dismiss: (n) => bn({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function me(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((t == null || t(s), n === !1 || !s.defaultPrevented))
      return e == null ? void 0 : e(s);
  };
}
function Zh(t) {
  const e = t + "CollectionProvider",
    [n, r] = Tr(e),
    [s, a] = n(e, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (m) => {
      const { scope: g, children: b } = m,
        _ = K.useRef(null),
        w = K.useRef(new Map()).current;
      return y.jsx(s, { scope: g, itemMap: w, collectionRef: _, children: b });
    };
  o.displayName = e;
  const i = t + "CollectionSlot",
    c = hr(i),
    l = K.forwardRef((m, g) => {
      const { scope: b, children: _ } = m,
        w = a(i, b),
        x = ue(g, w.collectionRef);
      return y.jsx(c, { ref: x, children: _ });
    });
  l.displayName = i;
  const d = t + "CollectionItemSlot",
    u = "data-radix-collection-item",
    h = hr(d),
    p = K.forwardRef((m, g) => {
      const { scope: b, children: _, ...w } = m,
        x = K.useRef(null),
        E = ue(g, x),
        C = a(d, b);
      return (
        K.useEffect(
          () => (
            C.itemMap.set(x, { ref: x, ...w }),
            () => void C.itemMap.delete(x)
          ),
        ),
        y.jsx(h, { [u]: "", ref: E, children: _ })
      );
    });
  p.displayName = d;
  function f(m) {
    const g = a(t + "CollectionConsumer", m);
    return K.useCallback(() => {
      const _ = g.collectionRef.current;
      if (!_) return [];
      const w = Array.from(_.querySelectorAll(`[${u}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, S) => w.indexOf(C.ref.current) - w.indexOf(S.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: p }, f, r];
}
var ef = "DismissableLayer",
  ks = "dismissableLayer.update",
  tf = "dismissableLayer.pointerDownOutside",
  nf = "dismissableLayer.focusOutside",
  ao,
  xc = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ec = v.forwardRef((t, e) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: a,
        onInteractOutside: o,
        onDismiss: i,
        ...c
      } = t,
      l = v.useContext(xc),
      [d, u] = v.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = v.useState({}),
      f = ue(e, (S) => u(S)),
      m = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = m.indexOf(g),
      _ = d ? m.indexOf(d) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = _ >= b,
      E = sf((S) => {
        const D = S.target,
          O = [...l.branches].some((k) => k.contains(D));
        !x ||
          O ||
          (s == null || s(S),
          o == null || o(S),
          S.defaultPrevented || i == null || i());
      }, h),
      C = af((S) => {
        const D = S.target;
        [...l.branches].some((k) => k.contains(D)) ||
          (a == null || a(S),
          o == null || o(S),
          S.defaultPrevented || i == null || i());
      }, h);
    return (
      ki((S) => {
        _ === l.layers.size - 1 &&
          (r == null || r(S),
          !S.defaultPrevented && i && (S.preventDefault(), i()));
      }, h),
      v.useEffect(() => {
        if (d)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ao = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(d)),
            l.layers.add(d),
            oo(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = ao);
            }
          );
      }, [d, h, n, l]),
      v.useEffect(
        () => () => {
          d &&
            (l.layers.delete(d),
            l.layersWithOutsidePointerEventsDisabled.delete(d),
            oo());
        },
        [d, l],
      ),
      v.useEffect(() => {
        const S = () => p({});
        return (
          document.addEventListener(ks, S),
          () => document.removeEventListener(ks, S)
        );
      }, []),
      y.jsx(ce.div, {
        ...c,
        ref: f,
        style: {
          pointerEvents: w ? (x ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: me(t.onFocusCapture, C.onFocusCapture),
        onBlurCapture: me(t.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: me(
          t.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
Ec.displayName = ef;
var rf = "DismissableLayerBranch",
  Sc = v.forwardRef((t, e) => {
    const n = v.useContext(xc),
      r = v.useRef(null),
      s = ue(e, r);
    return (
      v.useEffect(() => {
        const a = r.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      y.jsx(ce.div, { ...t, ref: s })
    );
  });
Sc.displayName = rf;
function sf(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(t),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const a = (i) => {
          if (i.target && !r.current) {
            let c = function () {
              Ac(tf, n, l, { discrete: !0 });
            };
            const l = { originalEvent: i };
            i.pointerType === "touch"
              ? (e.removeEventListener("click", s.current),
                (s.current = c),
                e.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else e.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          e.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          e.removeEventListener("pointerdown", a),
          e.removeEventListener("click", s.current));
      };
    }, [e, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function af(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(t),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (a) => {
        a.target &&
          !r.current &&
          Ac(nf, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        e.addEventListener("focusin", s),
        () => e.removeEventListener("focusin", s)
      );
    }, [e, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function oo() {
  const t = new CustomEvent(ks);
  document.dispatchEvent(t);
}
function Ac(t, e, n, { discrete: r }) {
  const s = n.originalEvent.target,
    a = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  (e && s.addEventListener(t, e, { once: !0 }),
    r ? na(s, a) : s.dispatchEvent(a));
}
var of = Ec,
  cf = Sc;
function lf(t, e) {
  return v.useReducer((n, r) => e[n][r] ?? n, t);
}
var Cc = (t) => {
  const { present: e, children: n } = t,
    r = df(e),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    a = ue(r.ref, uf(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: a })
    : null;
};
Cc.displayName = "Presence";
function df(t) {
  const [e, n] = v.useState(),
    r = v.useRef(null),
    s = v.useRef(t),
    a = v.useRef("none"),
    o = t ? "mounted" : "unmounted",
    [i, c] = lf(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const l = Yn(r.current);
      a.current = i === "mounted" ? l : "none";
    }, [i]),
    Te(() => {
      const l = r.current,
        d = s.current;
      if (d !== t) {
        const h = a.current,
          p = Yn(l);
        (t
          ? c("MOUNT")
          : p === "none" || (l == null ? void 0 : l.display) === "none"
            ? c("UNMOUNT")
            : c(d && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = t));
      }
    }, [t, c]),
    Te(() => {
      if (e) {
        let l;
        const d = e.ownerDocument.defaultView ?? window,
          u = (p) => {
            const m = Yn(r.current).includes(CSS.escape(p.animationName));
            if (p.target === e && m && (c("ANIMATION_END"), !s.current)) {
              const g = e.style.animationFillMode;
              ((e.style.animationFillMode = "forwards"),
                (l = d.setTimeout(() => {
                  e.style.animationFillMode === "forwards" &&
                    (e.style.animationFillMode = g);
                })));
            }
          },
          h = (p) => {
            p.target === e && (a.current = Yn(r.current));
          };
        return (
          e.addEventListener("animationstart", h),
          e.addEventListener("animationcancel", u),
          e.addEventListener("animationend", u),
          () => {
            (d.clearTimeout(l),
              e.removeEventListener("animationstart", h),
              e.removeEventListener("animationcancel", u),
              e.removeEventListener("animationend", u));
          }
        );
      } else c("ANIMATION_END");
    }, [e, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: v.useCallback((l) => {
        ((r.current = l ? getComputedStyle(l) : null), n(l));
      }, []),
    }
  );
}
function Yn(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function uf(t) {
  var r, s;
  let e =
      (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : r.get,
    n = e && "isReactWarning" in e && e.isReactWarning;
  return n
    ? t.ref
    : ((e =
        (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : s.get),
      (n = e && "isReactWarning" in e && e.isReactWarning),
      n ? t.props.ref : t.props.ref || t.ref);
}
var fa = "ToastProvider",
  [ma, pf, hf] = Zh("Toast"),
  [Rc, h_] = Tr("Toast", [hf]),
  [ff, $r] = Rc(fa),
  Oc = (t) => {
    const {
        __scopeToast: e,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: a = 50,
        children: o,
      } = t,
      [i, c] = v.useState(null),
      [l, d] = v.useState(0),
      u = v.useRef(!1),
      h = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${fa}\`. Expected non-empty \`string\`.`,
        ),
      y.jsx(ma.Provider, {
        scope: e,
        children: y.jsx(ff, {
          scope: e,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: a,
          toastCount: l,
          viewport: i,
          onViewportChange: c,
          onToastAdd: v.useCallback(() => d((p) => p + 1), []),
          onToastRemove: v.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: u,
          isClosePausedRef: h,
          children: o,
        }),
      })
    );
  };
Oc.displayName = fa;
var Tc = "ToastViewport",
  mf = ["F8"],
  Ds = "toast.viewportPause",
  Ls = "toast.viewportResume",
  Pc = v.forwardRef((t, e) => {
    const {
        __scopeToast: n,
        hotkey: r = mf,
        label: s = "Notifications ({hotkey})",
        ...a
      } = t,
      o = $r(Tc, n),
      i = pf(n),
      c = v.useRef(null),
      l = v.useRef(null),
      d = v.useRef(null),
      u = v.useRef(null),
      h = ue(e, u, o.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      f = o.toastCount > 0;
    (v.useEffect(() => {
      const g = (b) => {
        var w;
        r.length !== 0 &&
          r.every((x) => b[x] || b.code === x) &&
          ((w = u.current) == null || w.focus());
      };
      return (
        document.addEventListener("keydown", g),
        () => document.removeEventListener("keydown", g)
      );
    }, [r]),
      v.useEffect(() => {
        const g = c.current,
          b = u.current;
        if (f && g && b) {
          const _ = () => {
              if (!o.isClosePausedRef.current) {
                const C = new CustomEvent(Ds);
                (b.dispatchEvent(C), (o.isClosePausedRef.current = !0));
              }
            },
            w = () => {
              if (o.isClosePausedRef.current) {
                const C = new CustomEvent(Ls);
                (b.dispatchEvent(C), (o.isClosePausedRef.current = !1));
              }
            },
            x = (C) => {
              !g.contains(C.relatedTarget) && w();
            },
            E = () => {
              g.contains(document.activeElement) || w();
            };
          return (
            g.addEventListener("focusin", _),
            g.addEventListener("focusout", x),
            g.addEventListener("pointermove", _),
            g.addEventListener("pointerleave", E),
            window.addEventListener("blur", _),
            window.addEventListener("focus", w),
            () => {
              (g.removeEventListener("focusin", _),
                g.removeEventListener("focusout", x),
                g.removeEventListener("pointermove", _),
                g.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", _),
                window.removeEventListener("focus", w));
            }
          );
        }
      }, [f, o.isClosePausedRef]));
    const m = v.useCallback(
      ({ tabbingDirection: g }) => {
        const _ = i().map((w) => {
          const x = w.ref.current,
            E = [x, ...Of(x)];
          return g === "forwards" ? E : E.reverse();
        });
        return (g === "forwards" ? _.reverse() : _).flat();
      },
      [i],
    );
    return (
      v.useEffect(() => {
        const g = u.current;
        if (g) {
          const b = (_) => {
            var E, C, S;
            const w = _.altKey || _.ctrlKey || _.metaKey;
            if (_.key === "Tab" && !w) {
              const D = document.activeElement,
                O = _.shiftKey;
              if (_.target === g && O) {
                (E = l.current) == null || E.focus();
                return;
              }
              const T = m({ tabbingDirection: O ? "backwards" : "forwards" }),
                P = T.findIndex((R) => R === D);
              ts(T.slice(P + 1))
                ? _.preventDefault()
                : O
                  ? (C = l.current) == null || C.focus()
                  : (S = d.current) == null || S.focus();
            }
          };
          return (
            g.addEventListener("keydown", b),
            () => g.removeEventListener("keydown", b)
          );
        }
      }, [i, m]),
      y.jsxs(cf, {
        ref: c,
        role: "region",
        "aria-label": s.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: f ? void 0 : "none" },
        children: [
          f &&
            y.jsx(js, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "forwards" });
                ts(g);
              },
            }),
          y.jsx(ma.Slot, {
            scope: n,
            children: y.jsx(ce.ol, { tabIndex: -1, ...a, ref: h }),
          }),
          f &&
            y.jsx(js, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "backwards" });
                ts(g);
              },
            }),
        ],
      })
    );
  });
Pc.displayName = Tc;
var Ic = "ToastFocusProxy",
  js = v.forwardRef((t, e) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = t,
      a = $r(Ic, n);
    return y.jsx(Dr, {
      tabIndex: 0,
      ...s,
      ref: e,
      style: { position: "fixed" },
      onFocus: (o) => {
        var l;
        const i = o.relatedTarget;
        !((l = a.viewport) != null && l.contains(i)) && r();
      },
    });
  });
js.displayName = Ic;
var Un = "Toast",
  gf = "toast.swipeStart",
  vf = "toast.swipeMove",
  yf = "toast.swipeCancel",
  bf = "toast.swipeEnd",
  kc = v.forwardRef((t, e) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: a, ...o } = t,
      [i, c] = oc({ prop: r, defaultProp: s ?? !0, onChange: a, caller: Un });
    return y.jsx(Cc, {
      present: n || i,
      children: y.jsx(xf, {
        open: i,
        ...o,
        ref: e,
        onClose: () => c(!1),
        onPause: Me(t.onPause),
        onResume: Me(t.onResume),
        onSwipeStart: me(t.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: me(t.onSwipeMove, (l) => {
          const { x: d, y: u } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "move"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${u}px`,
            ));
        }),
        onSwipeCancel: me(t.onSwipeCancel, (l) => {
          (l.currentTarget.setAttribute("data-swipe", "cancel"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: me(t.onSwipeEnd, (l) => {
          const { x: d, y: u } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "end"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${u}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
kc.displayName = Un;
var [_f, wf] = Rc(Un, { onClose() {} }),
  xf = v.forwardRef((t, e) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: a,
        onClose: o,
        onEscapeKeyDown: i,
        onPause: c,
        onResume: l,
        onSwipeStart: d,
        onSwipeMove: u,
        onSwipeCancel: h,
        onSwipeEnd: p,
        ...f
      } = t,
      m = $r(Un, n),
      [g, b] = v.useState(null),
      _ = ue(e, (R) => b(R)),
      w = v.useRef(null),
      x = v.useRef(null),
      E = s || m.duration,
      C = v.useRef(0),
      S = v.useRef(E),
      D = v.useRef(0),
      { onToastAdd: O, onToastRemove: k } = m,
      V = Me(() => {
        var $;
        ((g == null ? void 0 : g.contains(document.activeElement)) &&
          (($ = m.viewport) == null || $.focus()),
          o());
      }),
      T = v.useCallback(
        (R) => {
          !R ||
            R === 1 / 0 ||
            (window.clearTimeout(D.current),
            (C.current = new Date().getTime()),
            (D.current = window.setTimeout(V, R)));
        },
        [V],
      );
    (v.useEffect(() => {
      const R = m.viewport;
      if (R) {
        const $ = () => {
            (T(S.current), l == null || l());
          },
          M = () => {
            const U = new Date().getTime() - C.current;
            ((S.current = S.current - U),
              window.clearTimeout(D.current),
              c == null || c());
          };
        return (
          R.addEventListener(Ds, M),
          R.addEventListener(Ls, $),
          () => {
            (R.removeEventListener(Ds, M), R.removeEventListener(Ls, $));
          }
        );
      }
    }, [m.viewport, E, c, l, T]),
      v.useEffect(() => {
        a && !m.isClosePausedRef.current && T(E);
      }, [a, E, m.isClosePausedRef, T]),
      v.useEffect(() => (O(), () => k()), [O, k]));
    const P = v.useMemo(() => (g ? Bc(g) : null), [g]);
    return m.viewport
      ? y.jsxs(y.Fragment, {
          children: [
            P &&
              y.jsx(Ef, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: P,
              }),
            y.jsx(_f, {
              scope: n,
              onClose: V,
              children: Sr.createPortal(
                y.jsx(ma.ItemSlot, {
                  scope: n,
                  children: y.jsx(of, {
                    asChild: !0,
                    onEscapeKeyDown: me(i, () => {
                      (m.isFocusedToastEscapeKeyDownRef.current || V(),
                        (m.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: y.jsx(ce.li, {
                      tabIndex: 0,
                      "data-state": a ? "open" : "closed",
                      "data-swipe-direction": m.swipeDirection,
                      ...f,
                      ref: _,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...t.style,
                      },
                      onKeyDown: me(t.onKeyDown, (R) => {
                        R.key === "Escape" &&
                          (i == null || i(R.nativeEvent),
                          R.nativeEvent.defaultPrevented ||
                            ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            V()));
                      }),
                      onPointerDown: me(t.onPointerDown, (R) => {
                        R.button === 0 &&
                          (w.current = { x: R.clientX, y: R.clientY });
                      }),
                      onPointerMove: me(t.onPointerMove, (R) => {
                        if (!w.current) return;
                        const $ = R.clientX - w.current.x,
                          M = R.clientY - w.current.y,
                          U = !!x.current,
                          j = ["left", "right"].includes(m.swipeDirection),
                          z = ["left", "up"].includes(m.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ne = j ? z(0, $) : 0,
                          W = j ? 0 : z(0, M),
                          pe = R.pointerType === "touch" ? 10 : 2,
                          ye = { x: ne, y: W },
                          lt = { originalEvent: R, delta: ye };
                        U
                          ? ((x.current = ye), Qn(vf, u, lt, { discrete: !1 }))
                          : io(ye, m.swipeDirection, pe)
                            ? ((x.current = ye),
                              Qn(gf, d, lt, { discrete: !1 }),
                              R.target.setPointerCapture(R.pointerId))
                            : (Math.abs($) > pe || Math.abs(M) > pe) &&
                              (w.current = null);
                      }),
                      onPointerUp: me(t.onPointerUp, (R) => {
                        const $ = x.current,
                          M = R.target;
                        if (
                          (M.hasPointerCapture(R.pointerId) &&
                            M.releasePointerCapture(R.pointerId),
                          (x.current = null),
                          (w.current = null),
                          $)
                        ) {
                          const U = R.currentTarget,
                            j = { originalEvent: R, delta: $ };
                          (io($, m.swipeDirection, m.swipeThreshold)
                            ? Qn(bf, p, j, { discrete: !0 })
                            : Qn(yf, h, j, { discrete: !0 }),
                            U.addEventListener(
                              "click",
                              (z) => z.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                m.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Ef = (t) => {
    const { __scopeToast: e, children: n, ...r } = t,
      s = $r(Un, e),
      [a, o] = v.useState(!1),
      [i, c] = v.useState(!1);
    return (
      Cf(() => o(!0)),
      v.useEffect(() => {
        const l = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      i
        ? null
        : y.jsx(sc, {
            asChild: !0,
            children: y.jsx(Dr, {
              ...r,
              children:
                a && y.jsxs(y.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  Sf = "ToastTitle",
  Dc = v.forwardRef((t, e) => {
    const { __scopeToast: n, ...r } = t;
    return y.jsx(ce.div, { ...r, ref: e });
  });
Dc.displayName = Sf;
var Af = "ToastDescription",
  Lc = v.forwardRef((t, e) => {
    const { __scopeToast: n, ...r } = t;
    return y.jsx(ce.div, { ...r, ref: e });
  });
Lc.displayName = Af;
var jc = "ToastAction",
  Nc = v.forwardRef((t, e) => {
    const { altText: n, ...r } = t;
    return n.trim()
      ? y.jsx(Mc, {
          altText: n,
          asChild: !0,
          children: y.jsx(ga, { ...r, ref: e }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${jc}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Nc.displayName = jc;
var $c = "ToastClose",
  ga = v.forwardRef((t, e) => {
    const { __scopeToast: n, ...r } = t,
      s = wf($c, n);
    return y.jsx(Mc, {
      asChild: !0,
      children: y.jsx(ce.button, {
        type: "button",
        ...r,
        ref: e,
        onClick: me(t.onClick, s.onClose),
      }),
    });
  });
ga.displayName = $c;
var Mc = v.forwardRef((t, e) => {
  const { __scopeToast: n, altText: r, ...s } = t;
  return y.jsx(ce.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: e,
  });
});
function Bc(t) {
  const e = [];
  return (
    Array.from(t.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && e.push(r.textContent),
        Rf(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          a = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (a) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && e.push(o);
          } else e.push(...Bc(r));
      }
    }),
    e
  );
}
function Qn(t, e, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    a = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: n });
  (e && s.addEventListener(t, e, { once: !0 }),
    r ? na(s, a) : s.dispatchEvent(a));
}
var io = (t, e, n = 0) => {
  const r = Math.abs(t.x),
    s = Math.abs(t.y),
    a = r > s;
  return e === "left" || e === "right" ? a && r > n : !a && s > n;
};
function Cf(t = () => {}) {
  const e = Me(t);
  Te(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(e)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [e]);
}
function Rf(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Of(t) {
  const e = [],
    n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
function ts(t) {
  const e = document.activeElement;
  return t.some((n) =>
    n === e ? !0 : (n.focus(), document.activeElement !== e),
  );
}
var Tf = Oc,
  Fc = Pc,
  Uc = kc,
  qc = Dc,
  Vc = Lc,
  zc = Nc,
  Hc = ga;
const co = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  lo = gc,
  Gc = (t, e) => (n) => {
    var r;
    if ((e == null ? void 0 : e.variants) == null)
      return lo(
        t,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: a } = e,
      o = Object.keys(s).map((l) => {
        const d = n == null ? void 0 : n[l],
          u = a == null ? void 0 : a[l];
        if (d === null) return null;
        const h = co(d) || co(u);
        return s[l][h];
      }),
      i =
        n &&
        Object.entries(n).reduce((l, d) => {
          let [u, h] = d;
          return (h === void 0 || (l[u] = h), l);
        }, {}),
      c =
        e == null || (r = e.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((l, d) => {
              let { class: u, className: h, ...p } = d;
              return Object.entries(p).every((f) => {
                let [m, g] = f;
                return Array.isArray(g)
                  ? g.includes({ ...a, ...i }[m])
                  : { ...a, ...i }[m] === g;
              })
                ? [...l, u, h]
                : l;
            }, []);
    return lo(
      t,
      o,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  Pf = Tf,
  Wc = v.forwardRef(({ className: t, ...e }, n) =>
    y.jsx(Fc, {
      "data-lov-id": "src\\components\\ui\\toast.tsx:14:2",
      "data-lov-name": "ToastPrimitives.Viewport",
      "data-component-path": "src\\components\\ui\\toast.tsx",
      "data-component-line": "14",
      "data-component-file": "toast.tsx",
      "data-component-name": "ToastPrimitives.Viewport",
      "data-component-content": "%7B%7D",
      ref: n,
      className: ct(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t,
      ),
      ...e,
    }),
  );
Wc.displayName = Fc.displayName;
const If = Gc(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Kc = v.forwardRef(({ className: t, variant: e, ...n }, r) =>
    y.jsx(Uc, {
      "data-lov-id": "src\\components\\ui\\toast.tsx:47:4",
      "data-lov-name": "ToastPrimitives.Root",
      "data-component-path": "src\\components\\ui\\toast.tsx",
      "data-component-line": "47",
      "data-component-file": "toast.tsx",
      "data-component-name": "ToastPrimitives.Root",
      "data-component-content": "%7B%7D",
      ref: r,
      className: ct(If({ variant: e }), t),
      ...n,
    }),
  );
Kc.displayName = Uc.displayName;
const kf = v.forwardRef(({ className: t, ...e }, n) =>
  y.jsx(zc, {
    "data-lov-id": "src\\components\\ui\\toast.tsx:60:2",
    "data-lov-name": "ToastPrimitives.Action",
    "data-component-path": "src\\components\\ui\\toast.tsx",
    "data-component-line": "60",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Action",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ct(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t,
    ),
    ...e,
  }),
);
kf.displayName = zc.displayName;
const Jc = v.forwardRef(({ className: t, ...e }, n) =>
  y.jsx(Hc, {
    "data-lov-id": "src\\components\\ui\\toast.tsx:75:2",
    "data-lov-name": "ToastPrimitives.Close",
    "data-component-path": "src\\components\\ui\\toast.tsx",
    "data-component-line": "75",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Close",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ct(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t,
    ),
    "toast-close": "",
    ...e,
    children: y.jsx(Fl, {
      "data-lov-id": "src\\components\\ui\\toast.tsx:84:4",
      "data-lov-name": "X",
      "data-component-path": "src\\components\\ui\\toast.tsx",
      "data-component-line": "84",
      "data-component-file": "toast.tsx",
      "data-component-name": "X",
      "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
      className: "h-4 w-4",
    }),
  }),
);
Jc.displayName = Hc.displayName;
const Yc = v.forwardRef(({ className: t, ...e }, n) =>
  y.jsx(qc, {
    "data-lov-id": "src\\components\\ui\\toast.tsx:93:2",
    "data-lov-name": "ToastPrimitives.Title",
    "data-component-path": "src\\components\\ui\\toast.tsx",
    "data-component-line": "93",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Title",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ct("text-sm font-semibold", t),
    ...e,
  }),
);
Yc.displayName = qc.displayName;
const Qc = v.forwardRef(({ className: t, ...e }, n) =>
  y.jsx(Vc, {
    "data-lov-id": "src\\components\\ui\\toast.tsx:105:2",
    "data-lov-name": "ToastPrimitives.Description",
    "data-component-path": "src\\components\\ui\\toast.tsx",
    "data-component-line": "105",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Description",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ct("text-sm opacity-90", t),
    ...e,
  }),
);
Qc.displayName = Vc.displayName;
function Df() {
  const { toasts: t } = Xh();
  return y.jsxs(Pf, {
    "data-lov-id": "src\\components\\ui\\toaster.tsx:15:4",
    "data-lov-name": "ToastProvider",
    "data-component-path": "src\\components\\ui\\toaster.tsx",
    "data-component-line": "15",
    "data-component-file": "toaster.tsx",
    "data-component-name": "ToastProvider",
    "data-component-content": "%7B%7D",
    children: [
      t.map(function ({ id: e, title: n, description: r, action: s, ...a }) {
        return y.jsxs(
          Kc,
          {
            "data-lov-id": "src\\components\\ui\\toaster.tsx:18:10",
            "data-lov-name": "Toast",
            "data-component-path": "src\\components\\ui\\toaster.tsx",
            "data-component-line": "18",
            "data-component-file": "toaster.tsx",
            "data-component-name": "Toast",
            "data-component-content": "%7B%7D",
            ...a,
            children: [
              y.jsxs("div", {
                "data-lov-id": "src\\components\\ui\\toaster.tsx:19:12",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ui\\toaster.tsx",
                "data-component-line": "19",
                "data-component-file": "toaster.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                className: "grid gap-1",
                children: [
                  n &&
                    y.jsx(Yc, {
                      "data-lov-id": "src\\components\\ui\\toaster.tsx:20:24",
                      "data-lov-name": "ToastTitle",
                      "data-component-path": "src\\components\\ui\\toaster.tsx",
                      "data-component-line": "20",
                      "data-component-file": "toaster.tsx",
                      "data-component-name": "ToastTitle",
                      "data-component-content": "%7B%7D",
                      children: n,
                    }),
                  r &&
                    y.jsx(Qc, {
                      "data-lov-id": "src\\components\\ui\\toaster.tsx:22:16",
                      "data-lov-name": "ToastDescription",
                      "data-component-path": "src\\components\\ui\\toaster.tsx",
                      "data-component-line": "22",
                      "data-component-file": "toaster.tsx",
                      "data-component-name": "ToastDescription",
                      "data-component-content": "%7B%7D",
                      children: r,
                    }),
                ],
              }),
              s,
              y.jsx(Jc, {
                "data-lov-id": "src\\components\\ui\\toaster.tsx:26:12",
                "data-lov-name": "ToastClose",
                "data-component-path": "src\\components\\ui\\toaster.tsx",
                "data-component-line": "26",
                "data-component-file": "toaster.tsx",
                "data-component-name": "ToastClose",
                "data-component-content": "%7B%7D",
              }),
            ],
          },
          e,
        );
      }),
      y.jsx(Wc, {
        "data-lov-id": "src\\components\\ui\\toaster.tsx:30:6",
        "data-lov-name": "ToastViewport",
        "data-component-path": "src\\components\\ui\\toaster.tsx",
        "data-component-line": "30",
        "data-component-file": "toaster.tsx",
        "data-component-name": "ToastViewport",
        "data-component-content": "%7B%7D",
      }),
    ],
  });
}
var uo = function () {
  return (
    (uo =
      Object.assign ||
      function (e) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }),
    uo.apply(this, arguments)
  );
};
function Mr(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
        (n[r[s]] = t[r[s]]);
  return n;
}
function Lf(t, e, n, r) {
  function s(a) {
    return a instanceof n
      ? a
      : new n(function (o) {
          o(a);
        });
  }
  return new (n || (n = Promise))(function (a, o) {
    function i(d) {
      try {
        l(r.next(d));
      } catch (u) {
        o(u);
      }
    }
    function c(d) {
      try {
        l(r.throw(d));
      } catch (u) {
        o(u);
      }
    }
    function l(d) {
      d.done ? a(d.value) : s(d.value).then(i, c);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function f_(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = e.length, a; r < s; r++)
      (a || !(r in e)) &&
        (a || (a = Array.prototype.slice.call(e, 0, r)), (a[r] = e[r]));
  return t.concat(a || Array.prototype.slice.call(e));
}
const jf = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
class va extends Error {
  constructor(e, n = "FunctionsError", r) {
    (super(e), (this.name = n), (this.context = r));
  }
}
class Nf extends va {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e,
    );
  }
}
class po extends va {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class ho extends va {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e,
    );
  }
}
var Ns;
(function (t) {
  ((t.Any = "any"),
    (t.ApNortheast1 = "ap-northeast-1"),
    (t.ApNortheast2 = "ap-northeast-2"),
    (t.ApSouth1 = "ap-south-1"),
    (t.ApSoutheast1 = "ap-southeast-1"),
    (t.ApSoutheast2 = "ap-southeast-2"),
    (t.CaCentral1 = "ca-central-1"),
    (t.EuCentral1 = "eu-central-1"),
    (t.EuWest1 = "eu-west-1"),
    (t.EuWest2 = "eu-west-2"),
    (t.EuWest3 = "eu-west-3"),
    (t.SaEast1 = "sa-east-1"),
    (t.UsEast1 = "us-east-1"),
    (t.UsWest1 = "us-west-1"),
    (t.UsWest2 = "us-west-2"));
})(Ns || (Ns = {}));
class $f {
  constructor(e, { headers: n = {}, customFetch: r, region: s = Ns.Any } = {}) {
    ((this.url = e),
      (this.headers = n),
      (this.region = s),
      (this.fetch = jf(r)));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return Lf(this, arguments, void 0, function* (n, r = {}) {
      var s;
      let a, o;
      try {
        const { headers: i, method: c, body: l, signal: d, timeout: u } = r;
        let h = {},
          { region: p } = r;
        p || (p = this.region);
        const f = new URL(`${this.url}/${n}`);
        p &&
          p !== "any" &&
          ((h["x-region"] = p), f.searchParams.set("forceFunctionRegion", p));
        let m;
        l &&
        ((i && !Object.prototype.hasOwnProperty.call(i, "Content-Type")) || !i)
          ? (typeof Blob < "u" && l instanceof Blob) || l instanceof ArrayBuffer
            ? ((h["Content-Type"] = "application/octet-stream"), (m = l))
            : typeof l == "string"
              ? ((h["Content-Type"] = "text/plain"), (m = l))
              : typeof FormData < "u" && l instanceof FormData
                ? (m = l)
                : ((h["Content-Type"] = "application/json"),
                  (m = JSON.stringify(l)))
          : l &&
              typeof l != "string" &&
              !(typeof Blob < "u" && l instanceof Blob) &&
              !(l instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && l instanceof FormData)
            ? (m = JSON.stringify(l))
            : (m = l);
        let g = d;
        u &&
          ((o = new AbortController()),
          (a = setTimeout(() => o.abort(), u)),
          d
            ? ((g = o.signal), d.addEventListener("abort", () => o.abort()))
            : (g = o.signal));
        const b = yield this.fetch(f.toString(), {
            method: c || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, h), this.headers),
              i,
            ),
            body: m,
            signal: g,
          }).catch((E) => {
            throw new Nf(E);
          }),
          _ = b.headers.get("x-relay-error");
        if (_ && _ === "true") throw new po(b);
        if (!b.ok) throw new ho(b);
        let w = (
            (s = b.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          x;
        return (
          w === "application/json"
            ? (x = yield b.json())
            : w === "application/octet-stream" || w === "application/pdf"
              ? (x = yield b.blob())
              : w === "text/event-stream"
                ? (x = b)
                : w === "multipart/form-data"
                  ? (x = yield b.formData())
                  : (x = yield b.text()),
          { data: x, error: null, response: b }
        );
      } catch (i) {
        return {
          data: null,
          error: i,
          response: i instanceof ho || i instanceof po ? i.context : void 0,
        };
      } finally {
        a && clearTimeout(a);
      }
    });
  }
}
var Mf = class extends Error {
    constructor(t) {
      (super(t.message),
        (this.name = "PostgrestError"),
        (this.details = t.details),
        (this.hint = t.hint),
        (this.code = t.code));
    }
  },
  Bf = class {
    constructor(t) {
      var e, n, r;
      ((this.shouldThrowOnError = !1),
        (this.method = t.method),
        (this.url = t.url),
        (this.headers = new Headers(t.headers)),
        (this.schema = t.schema),
        (this.body = t.body),
        (this.shouldThrowOnError =
          (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
        (this.signal = t.signal),
        (this.isMaybeSingle =
          (n = t.isMaybeSingle) !== null && n !== void 0 ? n : !1),
        (this.urlLengthLimit =
          (r = t.urlLengthLimit) !== null && r !== void 0 ? r : 8e3),
        t.fetch ? (this.fetch = t.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(t, e) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(t, e),
        this
      );
    }
    then(t, e) {
      var n = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const r = this.fetch;
      let s = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (a) => {
        let o = null,
          i = null,
          c = null,
          l = a.status,
          d = a.statusText;
        if (a.ok) {
          var u, h;
          if (n.method !== "HEAD") {
            var p;
            const b = await a.text();
            b === "" ||
              (n.headers.get("Accept") === "text/csv" ||
              (n.headers.get("Accept") &&
                !((p = n.headers.get("Accept")) === null || p === void 0) &&
                p.includes("application/vnd.pgrst.plan+text"))
                ? (i = b)
                : (i = JSON.parse(b)));
          }
          const m =
              (u = n.headers.get("Prefer")) === null || u === void 0
                ? void 0
                : u.match(/count=(exact|planned|estimated)/),
            g =
              (h = a.headers.get("content-range")) === null || h === void 0
                ? void 0
                : h.split("/");
          (m && g && g.length > 1 && (c = parseInt(g[1])),
            n.isMaybeSingle &&
              n.method === "GET" &&
              Array.isArray(i) &&
              (i.length > 1
                ? ((o = {
                    code: "PGRST116",
                    details: `Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (i = null),
                  (c = null),
                  (l = 406),
                  (d = "Not Acceptable"))
                : i.length === 1
                  ? (i = i[0])
                  : (i = null)));
        } else {
          var f;
          const m = await a.text();
          try {
            ((o = JSON.parse(m)),
              Array.isArray(o) &&
                a.status === 404 &&
                ((i = []), (o = null), (l = 200), (d = "OK")));
          } catch {
            a.status === 404 && m === ""
              ? ((l = 204), (d = "No Content"))
              : (o = { message: m });
          }
          if (
            (o &&
              n.isMaybeSingle &&
              !(o == null || (f = o.details) === null || f === void 0) &&
              f.includes("0 rows") &&
              ((o = null), (l = 200), (d = "OK")),
            o && n.shouldThrowOnError)
          )
            throw new Mf(o);
        }
        return { error: o, data: i, count: c, status: l, statusText: d };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((a) => {
            var o;
            let i = "",
              c = "",
              l = "";
            const d = a == null ? void 0 : a.cause;
            if (d) {
              var u, h, p, f;
              const b =
                  (u = d == null ? void 0 : d.message) !== null && u !== void 0
                    ? u
                    : "",
                _ =
                  (h = d == null ? void 0 : d.code) !== null && h !== void 0
                    ? h
                    : "";
              ((i = `${(p = a == null ? void 0 : a.name) !== null && p !== void 0 ? p : "FetchError"}: ${a == null ? void 0 : a.message}`),
                (i += `

Caused by: ${(f = d == null ? void 0 : d.name) !== null && f !== void 0 ? f : "Error"}: ${b}`),
                _ && (i += ` (${_})`),
                d != null &&
                  d.stack &&
                  (i += `
${d.stack}`));
            } else {
              var m;
              i =
                (m = a == null ? void 0 : a.stack) !== null && m !== void 0
                  ? m
                  : "";
            }
            const g = this.url.toString().length;
            return (
              (a == null ? void 0 : a.name) === "AbortError" ||
              (a == null ? void 0 : a.code) === "ABORT_ERR"
                ? ((l = ""),
                  (c = "Request was aborted (timeout or manual cancellation)"),
                  g > this.urlLengthLimit &&
                    (c += `. Note: Your request URL is ${g} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((d == null ? void 0 : d.name) === "HeadersOverflowError" ||
                    (d == null ? void 0 : d.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((l = ""),
                  (c = "HTTP headers exceeded server limits (typically 16KB)"),
                  g > this.urlLengthLimit &&
                    (c += `. Your request URL is ${g} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${(o = a == null ? void 0 : a.name) !== null && o !== void 0 ? o : "FetchError"}: ${a == null ? void 0 : a.message}`,
                  details: i,
                  hint: c,
                  code: l,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        s.then(t, e)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  Ff = class extends Bf {
    select(t) {
      let e = !1;
      const n = (t ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !e ? "" : (r === '"' && (e = !e), r)))
        .join("");
      return (
        this.url.searchParams.set("select", n),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      t,
      {
        ascending: e = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: s = r,
      } = {},
    ) {
      const a = s ? `${s}.order` : "order",
        o = this.url.searchParams.get(a);
      return (
        this.url.searchParams.set(
          a,
          `${o ? `${o},` : ""}${t}.${e ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(t, { foreignTable: e, referencedTable: n = e } = {}) {
      const r = typeof n > "u" ? "limit" : `${n}.limit`;
      return (this.url.searchParams.set(r, `${t}`), this);
    }
    range(t, e, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = typeof r > "u" ? "offset" : `${r}.offset`,
        a = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(s, `${t}`),
        this.url.searchParams.set(a, `${e - t + 1}`),
        this
      );
    }
    abortSignal(t) {
      return ((this.signal = t), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: t = !1,
      verbose: e = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: s = !1,
      format: a = "text",
    } = {}) {
      var o;
      const i = [
          t ? "analyze" : null,
          e ? "verbose" : null,
          n ? "settings" : null,
          r ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        c =
          (o = this.headers.get("Accept")) !== null && o !== void 0
            ? o
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${a}; for="${c}"; options=${i};`,
        ),
        a === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(t) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${t}`),
        this
      );
    }
  };
const fo = new RegExp("[,()]");
var jt = class extends Ff {
    eq(t, e) {
      return (this.url.searchParams.append(t, `eq.${e}`), this);
    }
    neq(t, e) {
      return (this.url.searchParams.append(t, `neq.${e}`), this);
    }
    gt(t, e) {
      return (this.url.searchParams.append(t, `gt.${e}`), this);
    }
    gte(t, e) {
      return (this.url.searchParams.append(t, `gte.${e}`), this);
    }
    lt(t, e) {
      return (this.url.searchParams.append(t, `lt.${e}`), this);
    }
    lte(t, e) {
      return (this.url.searchParams.append(t, `lte.${e}`), this);
    }
    like(t, e) {
      return (this.url.searchParams.append(t, `like.${e}`), this);
    }
    likeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(all).{${e.join(",")}}`),
        this
      );
    }
    likeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(any).{${e.join(",")}}`),
        this
      );
    }
    ilike(t, e) {
      return (this.url.searchParams.append(t, `ilike.${e}`), this);
    }
    ilikeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`),
        this
      );
    }
    regexMatch(t, e) {
      return (this.url.searchParams.append(t, `match.${e}`), this);
    }
    regexIMatch(t, e) {
      return (this.url.searchParams.append(t, `imatch.${e}`), this);
    }
    is(t, e) {
      return (this.url.searchParams.append(t, `is.${e}`), this);
    }
    isDistinct(t, e) {
      return (this.url.searchParams.append(t, `isdistinct.${e}`), this);
    }
    in(t, e) {
      const n = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && fo.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(t, `in.(${n})`), this);
    }
    notIn(t, e) {
      const n = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && fo.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(t, `not.in.(${n})`), this);
    }
    contains(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cs.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`)
            : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`),
        this
      );
    }
    containedBy(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cd.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`)
            : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`),
        this
      );
    }
    rangeGt(t, e) {
      return (this.url.searchParams.append(t, `sr.${e}`), this);
    }
    rangeGte(t, e) {
      return (this.url.searchParams.append(t, `nxl.${e}`), this);
    }
    rangeLt(t, e) {
      return (this.url.searchParams.append(t, `sl.${e}`), this);
    }
    rangeLte(t, e) {
      return (this.url.searchParams.append(t, `nxr.${e}`), this);
    }
    rangeAdjacent(t, e) {
      return (this.url.searchParams.append(t, `adj.${e}`), this);
    }
    overlaps(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `ov.${e}`)
          : this.url.searchParams.append(t, `ov.{${e.join(",")}}`),
        this
      );
    }
    textSearch(t, e, { config: n, type: r } = {}) {
      let s = "";
      r === "plain"
        ? (s = "pl")
        : r === "phrase"
          ? (s = "ph")
          : r === "websearch" && (s = "w");
      const a = n === void 0 ? "" : `(${n})`;
      return (this.url.searchParams.append(t, `${s}fts${a}.${e}`), this);
    }
    match(t) {
      return (
        Object.entries(t).forEach(([e, n]) => {
          this.url.searchParams.append(e, `eq.${n}`);
        }),
        this
      );
    }
    not(t, e, n) {
      return (this.url.searchParams.append(t, `not.${e}.${n}`), this);
    }
    or(t, { foreignTable: e, referencedTable: n = e } = {}) {
      const r = n ? `${n}.or` : "or";
      return (this.url.searchParams.append(r, `(${t})`), this);
    }
    filter(t, e, n) {
      return (this.url.searchParams.append(t, `${e}.${n}`), this);
    }
  },
  Uf = class {
    constructor(
      t,
      { headers: e = {}, schema: n, fetch: r, urlLengthLimit: s = 8e3 },
    ) {
      ((this.url = t),
        (this.headers = new Headers(e)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = s));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(t, e) {
      const { head: n = !1, count: r } = e ?? {},
        s = n ? "HEAD" : "GET";
      let a = !1;
      const o = (t ?? "*")
          .split("")
          .map((l) => (/\s/.test(l) && !a ? "" : (l === '"' && (a = !a), l)))
          .join(""),
        { url: i, headers: c } = this.cloneRequestState();
      return (
        i.searchParams.set("select", o),
        r && c.append("Prefer", `count=${r}`),
        new jt({
          method: s,
          url: i,
          headers: c,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(t, { count: e, defaultToNull: n = !0 } = {}) {
      var r;
      const s = "POST",
        { url: a, headers: o } = this.cloneRequestState();
      if (
        (e && o.append("Prefer", `count=${e}`),
        n || o.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const i = t.reduce((c, l) => c.concat(Object.keys(l)), []);
        if (i.length > 0) {
          const c = [...new Set(i)].map((l) => `"${l}"`);
          a.searchParams.set("columns", c.join(","));
        }
      }
      return new jt({
        method: s,
        url: a,
        headers: o,
        schema: this.schema,
        body: t,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      t,
      {
        onConflict: e,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: s = !0,
      } = {},
    ) {
      var a;
      const o = "POST",
        { url: i, headers: c } = this.cloneRequestState();
      if (
        (c.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && i.searchParams.set("on_conflict", e),
        r && c.append("Prefer", `count=${r}`),
        s || c.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const l = t.reduce((d, u) => d.concat(Object.keys(u)), []);
        if (l.length > 0) {
          const d = [...new Set(l)].map((u) => `"${u}"`);
          i.searchParams.set("columns", d.join(","));
        }
      }
      return new jt({
        method: o,
        url: i,
        headers: c,
        schema: this.schema,
        body: t,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(t, { count: e } = {}) {
      var n;
      const r = "PATCH",
        { url: s, headers: a } = this.cloneRequestState();
      return (
        e && a.append("Prefer", `count=${e}`),
        new jt({
          method: r,
          url: s,
          headers: a,
          schema: this.schema,
          body: t,
          fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: t } = {}) {
      var e;
      const n = "DELETE",
        { url: r, headers: s } = this.cloneRequestState();
      return (
        t && s.append("Prefer", `count=${t}`),
        new jt({
          method: n,
          url: r,
          headers: s,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function Pn(t) {
  "@babel/helpers - typeof";
  return (
    (Pn =
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
    Pn(t)
  );
}
function qf(t, e) {
  if (Pn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Pn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Vf(t) {
  var e = qf(t, "string");
  return Pn(e) == "symbol" ? e : e + "";
}
function zf(t, e, n) {
  return (
    (e = Vf(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function mo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Xn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? mo(Object(n), !0).forEach(function (r) {
          zf(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : mo(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
var Hf = class Xc {
  constructor(
    e,
    {
      headers: n = {},
      schema: r,
      fetch: s,
      timeout: a,
      urlLengthLimit: o = 8e3,
    } = {},
  ) {
    ((this.url = e),
      (this.headers = new Headers(n)),
      (this.schemaName = r),
      (this.urlLengthLimit = o));
    const i = s ?? globalThis.fetch;
    a !== void 0 && a > 0
      ? (this.fetch = (c, l) => {
          const d = new AbortController(),
            u = setTimeout(() => d.abort(), a),
            h = l == null ? void 0 : l.signal;
          if (h) {
            if (h.aborted) return (clearTimeout(u), i(c, l));
            const p = () => {
              (clearTimeout(u), d.abort());
            };
            return (
              h.addEventListener("abort", p, { once: !0 }),
              i(c, Xn(Xn({}, l), {}, { signal: d.signal })).finally(() => {
                (clearTimeout(u), h.removeEventListener("abort", p));
              })
            );
          }
          return i(c, Xn(Xn({}, l), {}, { signal: d.signal })).finally(() =>
            clearTimeout(u),
          );
        })
      : (this.fetch = i);
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new Uf(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(e) {
    return new Xc(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(e, n = {}, { head: r = !1, get: s = !1, count: a } = {}) {
    var o;
    let i;
    const c = new URL(`${this.url}/rpc/${e}`);
    let l;
    const d = (p) =>
        p !== null && typeof p == "object" && (!Array.isArray(p) || p.some(d)),
      u = r && Object.values(n).some(d);
    u
      ? ((i = "POST"), (l = n))
      : r || s
        ? ((i = r ? "HEAD" : "GET"),
          Object.entries(n)
            .filter(([p, f]) => f !== void 0)
            .map(([p, f]) => [
              p,
              Array.isArray(f) ? `{${f.join(",")}}` : `${f}`,
            ])
            .forEach(([p, f]) => {
              c.searchParams.append(p, f);
            }))
        : ((i = "POST"), (l = n));
    const h = new Headers(this.headers);
    return (
      u
        ? h.set("Prefer", a ? `count=${a},return=minimal` : "return=minimal")
        : a && h.set("Prefer", `count=${a}`),
      new jt({
        method: i,
        url: c,
        headers: h,
        schema: this.schemaName,
        body: l,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class Gf {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((e = navigator.userAgent) === null || e === void 0) &&
        e.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const n = globalThis.process;
    if (n) {
      const r = n.versions;
      if (r && r.node) {
        const s = r.node,
          a = parseInt(s.replace(/^v/, "").split(".")[0]);
        return a >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${a} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${a} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor) return e.constructor;
    let n = e.error || "WebSocket not supported in this environment.";
    throw (
      e.workaround &&
        (n += `

Suggested solution: ${e.workaround}`),
      new Error(n)
    );
  }
  static createWebSocket(e, n) {
    const r = this.getWebSocketConstructor();
    return new r(e, n);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const Wf = "2.99.2",
  Kf = `realtime-js/${Wf}`,
  Jf = "1.0.0",
  Zc = "2.0.0",
  go = Zc,
  $s = 1e4,
  Yf = 1e3,
  Qf = 100;
var Ze;
(function (t) {
  ((t[(t.connecting = 0)] = "connecting"),
    (t[(t.open = 1)] = "open"),
    (t[(t.closing = 2)] = "closing"),
    (t[(t.closed = 3)] = "closed"));
})(Ze || (Ze = {}));
var te;
(function (t) {
  ((t.closed = "closed"),
    (t.errored = "errored"),
    (t.joined = "joined"),
    (t.joining = "joining"),
    (t.leaving = "leaving"));
})(te || (te = {}));
var Re;
(function (t) {
  ((t.close = "phx_close"),
    (t.error = "phx_error"),
    (t.join = "phx_join"),
    (t.reply = "phx_reply"),
    (t.leave = "phx_leave"),
    (t.access_token = "access_token"));
})(Re || (Re = {}));
var Ms;
(function (t) {
  t.websocket = "websocket";
})(Ms || (Ms = {}));
var mt;
(function (t) {
  ((t.Connecting = "connecting"),
    (t.Open = "open"),
    (t.Closing = "closing"),
    (t.Closed = "closed"));
})(mt || (mt = {}));
class Xf {
  constructor(e) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = e ?? []));
  }
  encode(e, n) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return n(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return n(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var n;
    return this._isArrayBuffer(
      (n = e.payload) === null || n === void 0 ? void 0 : n.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var n, r;
    const s =
      (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(e) {
    var n, r;
    const s =
        (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !==
          null && r !== void 0
          ? r
          : {},
      o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, n, r) {
    var s, a;
    const o = e.topic,
      i = (s = e.ref) !== null && s !== void 0 ? s : "",
      c = (a = e.join_ref) !== null && a !== void 0 ? a : "",
      l = e.payload.event,
      d = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      u = Object.keys(d).length === 0 ? "" : JSON.stringify(d);
    if (c.length > 255)
      throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);
    if (i.length > 255)
      throw new Error(`ref length ${i.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (l.length > 255)
      throw new Error(`userEvent length ${l.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`metadata length ${u.length} exceeds maximum of 255`);
    const h =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        c.length +
        i.length +
        o.length +
        l.length +
        u.length,
      p = new ArrayBuffer(this.HEADER_LENGTH + h);
    let f = new DataView(p),
      m = 0;
    (f.setUint8(m++, this.KINDS.userBroadcastPush),
      f.setUint8(m++, c.length),
      f.setUint8(m++, i.length),
      f.setUint8(m++, o.length),
      f.setUint8(m++, l.length),
      f.setUint8(m++, u.length),
      f.setUint8(m++, n),
      Array.from(c, (b) => f.setUint8(m++, b.charCodeAt(0))),
      Array.from(i, (b) => f.setUint8(m++, b.charCodeAt(0))),
      Array.from(o, (b) => f.setUint8(m++, b.charCodeAt(0))),
      Array.from(l, (b) => f.setUint8(m++, b.charCodeAt(0))),
      Array.from(u, (b) => f.setUint8(m++, b.charCodeAt(0))));
    var g = new Uint8Array(p.byteLength + r.byteLength);
    return (
      g.set(new Uint8Array(p), 0),
      g.set(new Uint8Array(r), p.byteLength),
      g.buffer
    );
  }
  decode(e, n) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return n(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e),
        [s, a, o, i, c] = r;
      return n({ join_ref: s, ref: a, topic: o, event: i, payload: c });
    }
    return n({});
  }
  _binaryDecode(e) {
    const n = new DataView(e),
      r = n.getUint8(0),
      s = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, n, s);
    }
  }
  _decodeUserBroadcast(e, n, r) {
    const s = n.getUint8(1),
      a = n.getUint8(2),
      o = n.getUint8(3),
      i = n.getUint8(4);
    let c = this.HEADER_LENGTH + 4;
    const l = r.decode(e.slice(c, c + s));
    c = c + s;
    const d = r.decode(e.slice(c, c + a));
    c = c + a;
    const u = r.decode(e.slice(c, c + o));
    c = c + o;
    const h = e.slice(c, e.byteLength),
      p = i === this.JSON_ENCODING ? JSON.parse(r.decode(h)) : h,
      f = { type: this.BROADCAST_EVENT, event: d, payload: p };
    return (
      o > 0 && (f.meta = JSON.parse(u)),
      {
        join_ref: null,
        ref: null,
        topic: l,
        event: this.BROADCAST_EVENT,
        payload: f,
      }
    );
  }
  _isArrayBuffer(e) {
    var n;
    return (
      e instanceof ArrayBuffer ||
      ((n = e == null ? void 0 : e.constructor) === null || n === void 0
        ? void 0
        : n.name) === "ArrayBuffer"
    );
  }
  _pick(e, n) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([r]) => n.includes(r)));
  }
}
class el {
  constructor(e, n) {
    ((this.callback = e),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = n));
  }
  reset() {
    ((this.tries = 0), clearTimeout(this.timer), (this.timer = void 0));
  }
  scheduleTimeout() {
    (clearTimeout(this.timer),
      (this.timer = setTimeout(
        () => {
          ((this.tries = this.tries + 1), this.callback());
        },
        this.timerCalc(this.tries + 1),
      )));
  }
}
var J;
(function (t) {
  ((t.abstime = "abstime"),
    (t.bool = "bool"),
    (t.date = "date"),
    (t.daterange = "daterange"),
    (t.float4 = "float4"),
    (t.float8 = "float8"),
    (t.int2 = "int2"),
    (t.int4 = "int4"),
    (t.int4range = "int4range"),
    (t.int8 = "int8"),
    (t.int8range = "int8range"),
    (t.json = "json"),
    (t.jsonb = "jsonb"),
    (t.money = "money"),
    (t.numeric = "numeric"),
    (t.oid = "oid"),
    (t.reltime = "reltime"),
    (t.text = "text"),
    (t.time = "time"),
    (t.timestamp = "timestamp"),
    (t.timestamptz = "timestamptz"),
    (t.timetz = "timetz"),
    (t.tsrange = "tsrange"),
    (t.tstzrange = "tstzrange"));
})(J || (J = {}));
const vo = (t, e, n = {}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return e
      ? Object.keys(e).reduce((a, o) => ((a[o] = Zf(o, t, e, s)), a), {})
      : {};
  },
  Zf = (t, e, n, r) => {
    const s = e.find((i) => i.name === t),
      a = s == null ? void 0 : s.type,
      o = n[t];
    return a && !r.includes(a) ? tl(a, o) : Bs(o);
  },
  tl = (t, e) => {
    if (t.charAt(0) === "_") {
      const n = t.slice(1, t.length);
      return rm(e, n);
    }
    switch (t) {
      case J.bool:
        return em(e);
      case J.float4:
      case J.float8:
      case J.int2:
      case J.int4:
      case J.int8:
      case J.numeric:
      case J.oid:
        return tm(e);
      case J.json:
      case J.jsonb:
        return nm(e);
      case J.timestamp:
        return sm(e);
      case J.abstime:
      case J.date:
      case J.daterange:
      case J.int4range:
      case J.int8range:
      case J.money:
      case J.reltime:
      case J.text:
      case J.time:
      case J.timestamptz:
      case J.timetz:
      case J.tsrange:
      case J.tstzrange:
        return Bs(e);
      default:
        return Bs(e);
    }
  },
  Bs = (t) => t,
  em = (t) => {
    switch (t) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return t;
    }
  },
  tm = (t) => {
    if (typeof t == "string") {
      const e = parseFloat(t);
      if (!Number.isNaN(e)) return e;
    }
    return t;
  },
  nm = (t) => {
    if (typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    return t;
  },
  rm = (t, e) => {
    if (typeof t != "string") return t;
    const n = t.length - 1,
      r = t[n];
    if (t[0] === "{" && r === "}") {
      let a;
      const o = t.slice(1, n);
      try {
        a = JSON.parse("[" + o + "]");
      } catch {
        a = o ? o.split(",") : [];
      }
      return a.map((i) => tl(e, i));
    }
    return t;
  },
  sm = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
  nl = (t) => {
    const e = new URL(t);
    return (
      (e.protocol = e.protocol.replace(/^ws/i, "http")),
      (e.pathname = e.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      e.pathname === "" || e.pathname === "/"
        ? (e.pathname = "/api/broadcast")
        : (e.pathname = e.pathname + "/api/broadcast"),
      e.href
    );
  };
class ns {
  constructor(e, n, r = {}, s = $s) {
    ((this.channel = e),
      (this.event = n),
      (this.payload = r),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null));
  }
  resend(e) {
    ((this.timeout = e),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send());
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, n) {
    var r;
    return (
      this._hasReceived(e) &&
        n(
          (r = this.receivedResp) === null || r === void 0
            ? void 0
            : r.response,
        ),
      this.recHooks.push({ status: e, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const e = (n) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n));
    };
    (this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(e, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: n });
  }
  destroy() {
    (this._cancelRefEvent(), this._cancelTimeout());
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    (clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0));
  }
  _matchReceive({ status: e, response: n }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(n));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var yo;
(function (t) {
  ((t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave"));
})(yo || (yo = {}));
class _n {
  constructor(e, n) {
    ((this.channel = e),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = {
        onJoin: () => {},
        onLeave: () => {},
        onSync: () => {},
      }));
    const r = (n == null ? void 0 : n.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(r.state, {}, (s) => {
      const { onJoin: a, onLeave: o, onSync: i } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = _n.syncState(this.state, s, a, o)),
        this.pendingDiffs.forEach((c) => {
          this.state = _n.syncDiff(this.state, c, a, o);
        }),
        (this.pendingDiffs = []),
        i());
    }),
      this.channel._on(r.diff, {}, (s) => {
        const { onJoin: a, onLeave: o, onSync: i } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = _n.syncDiff(this.state, s, a, o)), i());
      }),
      this.onJoin((s, a, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: a,
          newPresences: o,
        });
      }),
      this.onLeave((s, a, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: a,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(e, n, r, s) {
    const a = this.cloneDeep(e),
      o = this.transformState(n),
      i = {},
      c = {};
    return (
      this.map(a, (l, d) => {
        o[l] || (c[l] = d);
      }),
      this.map(o, (l, d) => {
        const u = a[l];
        if (u) {
          const h = d.map((g) => g.presence_ref),
            p = u.map((g) => g.presence_ref),
            f = d.filter((g) => p.indexOf(g.presence_ref) < 0),
            m = u.filter((g) => h.indexOf(g.presence_ref) < 0);
          (f.length > 0 && (i[l] = f), m.length > 0 && (c[l] = m));
        } else i[l] = d;
      }),
      this.syncDiff(a, { joins: i, leaves: c }, r, s)
    );
  }
  static syncDiff(e, n, r, s) {
    const { joins: a, leaves: o } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      s || (s = () => {}),
      this.map(a, (i, c) => {
        var l;
        const d = (l = e[i]) !== null && l !== void 0 ? l : [];
        if (((e[i] = this.cloneDeep(c)), d.length > 0)) {
          const u = e[i].map((p) => p.presence_ref),
            h = d.filter((p) => u.indexOf(p.presence_ref) < 0);
          e[i].unshift(...h);
        }
        r(i, d, c);
      }),
      this.map(o, (i, c) => {
        let l = e[i];
        if (!l) return;
        const d = c.map((u) => u.presence_ref);
        ((l = l.filter((u) => d.indexOf(u.presence_ref) < 0)),
          (e[i] = l),
          s(i, l, c),
          l.length === 0 && delete e[i]);
      }),
      e
    );
  }
  static map(e, n) {
    return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((n, r) => {
        const s = e[r];
        return (
          "metas" in s
            ? (n[r] = s.metas.map(
                (a) => (
                  (a.presence_ref = a.phx_ref),
                  delete a.phx_ref,
                  delete a.phx_ref_prev,
                  a
                ),
              ))
            : (n[r] = s),
          n
        );
      }, {})
    );
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var bo;
(function (t) {
  ((t.ALL = "*"),
    (t.INSERT = "INSERT"),
    (t.UPDATE = "UPDATE"),
    (t.DELETE = "DELETE"));
})(bo || (bo = {}));
var wn;
(function (t) {
  ((t.BROADCAST = "broadcast"),
    (t.PRESENCE = "presence"),
    (t.POSTGRES_CHANGES = "postgres_changes"),
    (t.SYSTEM = "system"));
})(wn || (wn = {}));
var ze;
(function (t) {
  ((t.SUBSCRIBED = "SUBSCRIBED"),
    (t.TIMED_OUT = "TIMED_OUT"),
    (t.CLOSED = "CLOSED"),
    (t.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(ze || (ze = {}));
class Mt {
  constructor(e, n = { config: {} }, r) {
    var s, a;
    if (
      ((this.topic = e),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = te.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = e.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        n.config,
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new ns(this, Re.join, this.params, this.timeout)),
      (this.rejoinTimer = new el(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs,
      )),
      this.joinPush.receive("ok", () => {
        ((this.state = te.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []));
      }),
      this._onClose(() => {
        (this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = te.closed),
          this.socket._remove(this));
      }),
      this._onError((o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = te.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout,
          ),
          (this.state = te.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = te.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Re.reply, {}, (o, i) => {
        this._trigger(this._replyEventName(i), o);
      }),
      (this.presence = new _n(this)),
      (this.broadcastEndpointURL = nl(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (a =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || a === void 0
        ) &&
        a.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(e, n = this.timeout) {
    var r, s, a;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == te.closed)
    ) {
      const {
          config: { broadcast: o, presence: i, private: c },
        } = this.params,
        l =
          (s =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((p) => p.filter)) !== null && s !== void 0
            ? s
            : [],
        d =
          (!!this.bindings[wn.PRESENCE] &&
            this.bindings[wn.PRESENCE].length > 0) ||
          ((a = this.params.config.presence) === null || a === void 0
            ? void 0
            : a.enabled) === !0,
        u = {},
        h = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, i), { enabled: d }),
          postgres_changes: l,
          private: c,
        };
      (this.socket.accessTokenValue &&
        (u.access_token = this.socket.accessTokenValue),
        this._onError((p) => (e == null ? void 0 : e(ze.CHANNEL_ERROR, p))),
        this._onClose(() => (e == null ? void 0 : e(ze.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: h }, u)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive("ok", async ({ postgres_changes: p }) => {
            var f;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              p === void 0)
            ) {
              e == null || e(ze.SUBSCRIBED);
              return;
            } else {
              const m = this.bindings.postgres_changes,
                g =
                  (f = m == null ? void 0 : m.length) !== null && f !== void 0
                    ? f
                    : 0,
                b = [];
              for (let _ = 0; _ < g; _++) {
                const w = m[_],
                  {
                    filter: { event: x, schema: E, table: C, filter: S },
                  } = w,
                  D = p && p[_];
                if (
                  D &&
                  D.event === x &&
                  Mt.isFilterValueEqual(D.schema, E) &&
                  Mt.isFilterValueEqual(D.table, C) &&
                  Mt.isFilterValueEqual(D.filter, S)
                )
                  b.push(Object.assign(Object.assign({}, w), { id: D.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = te.errored),
                    e == null ||
                      e(
                        ze.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes",
                        ),
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = b), e && e(ze.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (p) => {
            ((this.state = te.errored),
              e == null ||
                e(
                  ze.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(p).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            e == null || e(ze.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, n = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: e },
      n.timeout || this.timeout,
    );
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, n, r) {
    return (
      this.state === te.joined &&
        e === wn.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`,
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(e, n, r)
    );
  }
  async httpSend(e, n, r = {}) {
    var s;
    if (n == null) return Promise.reject("Payload is required for httpSend()");
    const a = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: e,
              payload: n,
              private: this.private,
            },
          ],
        }),
      },
      i = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (s = r.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (i.status === 202) return { success: !0 };
    let c = i.statusText;
    try {
      const l = await i.json();
      c = l.error || l.message || c;
    } catch {}
    return Promise.reject(new Error(c));
  }
  async send(e, n = {}) {
    var r, s;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: a, payload: o } = e,
        i = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const c = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: a,
              payload: o,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const l = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          c,
          (r = n.timeout) !== null && r !== void 0 ? r : this.timeout,
        );
        return (
          await ((s = l.body) === null || s === void 0 ? void 0 : s.cancel()),
          l.ok ? "ok" : "error"
        );
      } catch (l) {
        return l.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((a) => {
        var o, i, c;
        const l = this._push(e.type, e, n.timeout || this.timeout);
        (e.type === "broadcast" &&
          !(
            !(
              (c =
                (i =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || i === void 0
                  ? void 0
                  : i.broadcast) === null || c === void 0
            ) && c.ack
          ) &&
          a("ok"),
          l.receive("ok", () => a("ok")),
          l.receive("error", () => a("error")),
          l.receive("timeout", () => a("timed out")));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = te.leaving;
    const n = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Re.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((s) => {
      ((r = new ns(this, Re.leave, {}, e)),
        r
          .receive("ok", () => {
            (n(), s("ok"));
          })
          .receive("timeout", () => {
            (n(), s("timed out"));
          })
          .receive("error", () => {
            s("error");
          }),
        r.send(),
        this._canPush() || r.trigger("ok", {}));
    }).finally(() => {
      r == null || r.destroy();
    });
  }
  teardown() {
    (this.pushBuffer.forEach((e) => e.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = te.closed),
      (this.bindings = {}));
  }
  async _fetchWithTimeout(e, n, r) {
    const s = new AbortController(),
      a = setTimeout(() => s.abort(), r),
      o = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, n), { signal: s.signal }),
      );
    return (clearTimeout(a), o);
  }
  _push(e, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new ns(this, e, n, r);
    return (this._canPush() ? s.send() : this._addToPushBuffer(s), s);
  }
  _addToPushBuffer(e) {
    if (
      (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Qf)
    ) {
      const n = this.pushBuffer.shift();
      n &&
        (n.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${n.event}`,
          n.payload,
        ));
    }
  }
  _onMessage(e, n, r) {
    return n;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, n, r) {
    var s, a;
    const o = e.toLocaleLowerCase(),
      { close: i, error: c, leave: l, join: d } = Re;
    if (r && [i, c, l, d].indexOf(o) >= 0 && r !== this._joinRef()) return;
    let h = this._onMessage(o, n, r);
    if (n && !h)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((p) => {
            var f, m, g;
            return (
              ((f = p.filter) === null || f === void 0 ? void 0 : f.event) ===
                "*" ||
              ((g =
                (m = p.filter) === null || m === void 0 ? void 0 : m.event) ===
                null || g === void 0
                ? void 0
                : g.toLocaleLowerCase()) === o
            );
          })
          .map((p) => p.callback(h, r))
      : (a = this.bindings[o]) === null ||
        a === void 0 ||
        a
          .filter((p) => {
            var f, m, g, b, _, w;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in p) {
                const x = p.id,
                  E =
                    (f = p.filter) === null || f === void 0 ? void 0 : f.event;
                return (
                  x &&
                  ((m = n.ids) === null || m === void 0
                    ? void 0
                    : m.includes(x)) &&
                  (E === "*" ||
                    (E == null ? void 0 : E.toLocaleLowerCase()) ===
                      ((g = n.data) === null || g === void 0
                        ? void 0
                        : g.type.toLocaleLowerCase()))
                );
              } else {
                const x =
                  (_ =
                    (b = p == null ? void 0 : p.filter) === null || b === void 0
                      ? void 0
                      : b.event) === null || _ === void 0
                    ? void 0
                    : _.toLocaleLowerCase();
                return (
                  x === "*" ||
                  x ===
                    ((w = n == null ? void 0 : n.event) === null || w === void 0
                      ? void 0
                      : w.toLocaleLowerCase())
                );
              }
            else return p.type.toLocaleLowerCase() === o;
          })
          .map((p) => {
            if (typeof h == "object" && "ids" in h) {
              const f = h.data,
                {
                  schema: m,
                  table: g,
                  commit_timestamp: b,
                  type: _,
                  errors: w,
                } = f;
              h = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: m,
                    table: g,
                    commit_timestamp: b,
                    eventType: _,
                    new: {},
                    old: {},
                    errors: w,
                  },
                ),
                this._getPayloadRecords(f),
              );
            }
            p.callback(h, r);
          });
  }
  _isClosed() {
    return this.state === te.closed;
  }
  _isJoined() {
    return this.state === te.joined;
  }
  _isJoining() {
    return this.state === te.joining;
  }
  _isLeaving() {
    return this.state === te.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, n, r) {
    const s = e.toLocaleLowerCase(),
      a = { type: s, filter: n, callback: r };
    return (
      this.bindings[s] ? this.bindings[s].push(a) : (this.bindings[s] = [a]),
      this
    );
  }
  _off(e, n) {
    const r = e.toLocaleLowerCase();
    return (
      this.bindings[r] &&
        (this.bindings[r] = this.bindings[r].filter((s) => {
          var a;
          return !(
            ((a = s.type) === null || a === void 0
              ? void 0
              : a.toLocaleLowerCase()) === r && Mt.isEqual(s.filter, n)
          );
        })),
      this
    );
  }
  static isEqual(e, n) {
    if (Object.keys(e).length !== Object.keys(n).length) return !1;
    for (const r in e) if (e[r] !== n[r]) return !1;
    return !0;
  }
  static isFilterValueEqual(e, n) {
    return (e ?? void 0) === (n ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(e) {
    this._on(Re.close, {}, e);
  }
  _onError(e) {
    this._on(Re.error, {}, (n) => e(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = te.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const n = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (n.new = vo(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (n.old = vo(e.columns, e.old_record)),
      n
    );
  }
}
const rs = () => {},
  Zn = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  am = [1e3, 2e3, 5e3, 1e4],
  om = 1e4,
  im = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class cm {
  constructor(e, n) {
    var r;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = $s),
      (this.transport = null),
      (this.heartbeatIntervalMs = Zn.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = rs),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = go),
      (this.logger = rs),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new Xf()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (s) =>
        s ? (...a) => s(...a) : (...a) => fetch(...a)),
      !(
        !((r = n == null ? void 0 : n.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = n.params.apikey),
      (this.endPoint = `${e}/${Ms.websocket}`),
      (this.httpEndpoint = nl(e)),
      this._initializeOptions(n),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = Gf.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const n = e.message;
          throw n.includes("Node.js")
            ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${n}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn }),
    );
  }
  disconnect(e, n) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(r), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (e ? this.conn.close(e, n ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const n = await e.unsubscribe();
    return (this.channels.length === 0 && this.disconnect(), n);
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return ((this.channels = []), this.disconnect(), e);
  }
  log(e, n, r) {
    this.logger(e, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ze.connecting:
        return mt.Connecting;
      case Ze.open:
        return mt.Open;
      case Ze.closing:
        return mt.Closing;
      default:
        return mt.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === mt.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, n = { config: {} }) {
    const r = `realtime:${e}`,
      s = this.getChannels().find((a) => a.topic === r);
    if (s) return s;
    {
      const a = new Mt(`realtime:${e}`, n, this);
      return (this.channels.push(a), a);
    }
  }
  push(e) {
    const { topic: n, event: r, payload: s, ref: a } = e,
      o = () => {
        this.encode(e, (i) => {
          var c;
          (c = this.conn) === null || c === void 0 || c.send(i);
        });
      };
    (this.log("push", `${n} ${r} (${a})`, s),
      this.isConnected() ? o() : this.sendBuffer.push(o));
  }
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      ((this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection",
        ));
      try {
        this.heartbeatCallback("timeout");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      ((this._wasManualDisconnect = !1),
        (e = this.conn) === null ||
          e === void 0 ||
          e.close(Yf, "heartbeat timeout"),
        setTimeout(() => {
          var n;
          this.isConnected() ||
            (n = this.reconnectTimer) === null ||
            n === void 0 ||
            n.scheduleTimeout();
        }, Zn.HEARTBEAT_TIMEOUT_FALLBACK));
      return;
    }
    ((this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }));
    try {
      this.heartbeatCallback("sent");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
  }
  _makeRef() {
    let e = this.ref + 1;
    return (
      e === this.ref ? (this.ref = 0) : (this.ref = e),
      this.ref.toString()
    );
  }
  _leaveOpenTopic(e) {
    let n = this.channels.find(
      (r) => r.topic === e && (r._isJoined() || r._isJoining()),
    );
    n &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      n.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((n) => n.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, (n) => {
      if (
        n.topic === "phoenix" &&
        n.event === "phx_reply" &&
        n.ref &&
        n.ref === this.pendingHeartbeatRef
      ) {
        const l = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error", l);
        } catch (d) {
          this.log("error", "error in heartbeat callback", d);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: r, event: s, payload: a, ref: o } = n,
        i = o ? `(${o})` : "",
        c = a.status || "";
      (this.log("receive", `${c} ${r} ${s} ${i}`.trim(), a),
        this.channels
          .filter((l) => l._isMember(r))
          .forEach((l) => l._trigger(s, a, o)),
        this._triggerStateCallbacks("message", n));
    });
  }
  _clearTimer(e) {
    var n;
    e === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : e === "reconnect" &&
        ((n = this.reconnectTimer) === null || n === void 0 || n.reset());
  }
  _clearAllTimers() {
    (this._clearTimer("heartbeat"), this._clearTimer("reconnect"));
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (e) => this._onConnError(e)),
      (this.conn.onmessage = (e) => this._onConnMessage(e)),
      (this.conn.onclose = (e) => this._onConnClose(e)),
      this.conn.readyState === Ze.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Ze.open ||
        this.conn.readyState === Ze.connecting
      )
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      ((this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null));
    }
    (this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((e) => e.teardown()));
  }
  _onConnOpen() {
    (this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          (this.accessTokenValue &&
            (this.channels.forEach((n) => {
              n.updateJoinPayload({ access_token: this.accessTokenValue });
            }),
            (this.sendBuffer = []),
            this.channels.forEach((n) => {
              n._isJoining() && ((n.joinPush.sent = !1), n.joinPush.send());
            })),
            this.flushSendBuffer());
        })
        .catch((n) => {
          (this.log("error", "error waiting for auth on connect", n),
            this.flushSendBuffer());
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open"));
  }
  _startHeartbeat() {
    (this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs,
      )));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(e)),
      (this.workerRef.onerror = (n) => {
        (this.log("worker", "worker error", n.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (n) => {
        n.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(e) {
    var n;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", e),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (n = this.reconnectTimer) === null ||
        n === void 0 ||
        n.scheduleTimeout(),
      this._triggerStateCallbacks("close", e));
  }
  _onConnError(e) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${e}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", e));
    try {
      this.heartbeatCallback("error");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Re.error));
  }
  _appendParams(e, n) {
    if (Object.keys(n).length === 0) return e;
    const r = e.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(n);
    return `${e}${r}${s}`;
  }
  _workerObjectUrl(e) {
    let n;
    if (e) n = e;
    else {
      const r = new Blob([im], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
  _setConnectionState(e, n = !1) {
    ((this._connectionState = e),
      e === "connecting"
        ? (this._wasManualDisconnect = !1)
        : e === "disconnecting" && (this._wasManualDisconnect = n));
  }
  async _performAuth(e = null) {
    let n,
      r = !1;
    if (e) ((n = e), (r = !0));
    else if (this.accessToken)
      try {
        n = await this.accessToken();
      } catch (s) {
        (this.log("error", "Error fetching access token from callback", s),
          (n = this.accessTokenValue));
      }
    else n = this.accessTokenValue;
    (r
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != n &&
        ((this.accessTokenValue = n),
        this.channels.forEach((s) => {
          const a = { access_token: n, version: Kf };
          (n && s.updateJoinPayload(a),
            s.joinedOnce &&
              s._isJoined() &&
              s._push(Re.access_token, { access_token: n }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((n) => {
        this.log("error", `Error setting auth in ${e}`, n);
      });
  }
  _triggerStateCallbacks(e, n) {
    try {
      this.stateChangeCallbacks[e].forEach((r) => {
        try {
          r(n);
        } catch (s) {
          this.log("error", `error in ${e} callback`, s);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${e} callbacks`, r);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new el(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, Zn.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var n, r, s, a, o, i, c, l, d, u, h, p;
    switch (
      ((this.transport =
        (n = e == null ? void 0 : e.transport) !== null && n !== void 0
          ? n
          : null),
      (this.timeout =
        (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : $s),
      (this.heartbeatIntervalMs =
        (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        s !== void 0
          ? s
          : Zn.HEARTBEAT_INTERVAL),
      (this.worker =
        (a = e == null ? void 0 : e.worker) !== null && a !== void 0 ? a : !1),
      (this.accessToken =
        (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0
          ? o
          : null),
      (this.heartbeatCallback =
        (i = e == null ? void 0 : e.heartbeatCallback) !== null && i !== void 0
          ? i
          : rs),
      (this.vsn =
        (c = e == null ? void 0 : e.vsn) !== null && c !== void 0 ? c : go),
      e != null && e.params && (this.params = e.params),
      e != null && e.logger && (this.logger = e.logger),
      ((e != null && e.logLevel) || (e != null && e.log_level)) &&
        ((this.logLevel = e.logLevel || e.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0
          ? l
          : (f) => am[f - 1] || om),
      this.vsn)
    ) {
      case Jf:
        ((this.encode =
          (d = e == null ? void 0 : e.encode) !== null && d !== void 0
            ? d
            : (f, m) => m(JSON.stringify(f))),
          (this.decode =
            (u = e == null ? void 0 : e.decode) !== null && u !== void 0
              ? u
              : (f, m) => m(JSON.parse(f))));
        break;
      case Zc:
        ((this.encode =
          (h = e == null ? void 0 : e.encode) !== null && h !== void 0
            ? h
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (p = e == null ? void 0 : e.decode) !== null && p !== void 0
              ? p
              : this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
var In = class extends Error {
  constructor(t, e) {
    var n;
    (super(t),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((n = e.icebergType) == null ? void 0 : n.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function lm(t, e, n) {
  const r = new URL(e, t);
  if (n)
    for (const [s, a] of Object.entries(n))
      a !== void 0 && r.searchParams.set(s, a);
  return r.toString();
}
async function dm(t) {
  return !t || t.type === "none"
    ? {}
    : t.type === "bearer"
      ? { Authorization: `Bearer ${t.token}` }
      : t.type === "header"
        ? { [t.name]: t.value }
        : t.type === "custom"
          ? await t.getHeaders()
          : {};
}
function um(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: s, body: a, headers: o }) {
      const i = lm(t.baseUrl, r, s),
        c = await dm(t.auth),
        l = await e(i, {
          method: n,
          headers: {
            ...(a ? { "Content-Type": "application/json" } : {}),
            ...c,
            ...o,
          },
          body: a ? JSON.stringify(a) : void 0,
        }),
        d = await l.text(),
        u = (l.headers.get("content-type") || "").includes("application/json"),
        h = u && d ? JSON.parse(d) : d;
      if (!l.ok) {
        const p = u ? h : void 0,
          f = p == null ? void 0 : p.error;
        throw new In(
          (f == null ? void 0 : f.message) ??
            `Request failed with status ${l.status}`,
          {
            status: l.status,
            icebergType: f == null ? void 0 : f.type,
            icebergCode: f == null ? void 0 : f.code,
            details: p,
          },
        );
      }
      return { status: l.status, headers: l.headers, data: h };
    },
  };
}
function er(t) {
  return t.join("");
}
var pm = class {
  constructor(t, e = "") {
    ((this.client = t), (this.prefix = e));
  }
  async listNamespaces(t) {
    const e = t ? { parent: er(t.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(t, e) {
    const n = {
      namespace: t.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${er(t.namespace)}`,
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${er(t.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(t) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${er(t.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof In && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (n) {
      if (n instanceof In && n.status === 409) return;
      throw n;
    }
  }
};
function Ot(t) {
  return t.join("");
}
var hm = class {
    constructor(t, e = "", n) {
      ((this.client = t), (this.prefix = e), (this.accessDelegation = n));
    }
    async listTables(t) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(t, e) {
      const n = {};
      return (
        this.accessDelegation &&
          (n["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables`,
            body: e,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(t, e) {
      const n = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables/${t.name}`,
        body: e,
      });
      return {
        "metadata-location": n.data["metadata-location"],
        metadata: n.data.metadata,
      };
    }
    async dropTable(t, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables/${t.name}`,
        query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) },
      });
    }
    async loadTable(t) {
      const e = {};
      return (
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables/${t.name}`,
            headers: e,
          })
        ).data.metadata
      );
    }
    async tableExists(t) {
      const e = {};
      this.accessDelegation &&
        (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Ot(t.namespace)}/tables/${t.name}`,
            headers: e,
          }),
          !0
        );
      } catch (n) {
        if (n instanceof In && n.status === 404) return !1;
        throw n;
      }
    }
    async createTableIfNotExists(t, e) {
      try {
        return await this.createTable(t, e);
      } catch (n) {
        if (n instanceof In && n.status === 409)
          return await this.loadTable({ namespace: t.namespace, name: e.name });
        throw n;
      }
    }
  },
  fm = class {
    constructor(t) {
      var r;
      let e = "v1";
      t.catalogName && (e += `/${t.catalogName}`);
      const n = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
      ((this.client = um({ baseUrl: n, auth: t.auth, fetchImpl: t.fetch })),
        (this.accessDelegation =
          (r = t.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new pm(this.client, e)),
        (this.tableOps = new hm(this.client, e, this.accessDelegation)));
    }
    async listNamespaces(t) {
      return this.namespaceOps.listNamespaces(t);
    }
    async createNamespace(t, e) {
      return this.namespaceOps.createNamespace(t, e);
    }
    async dropNamespace(t) {
      await this.namespaceOps.dropNamespace(t);
    }
    async loadNamespaceMetadata(t) {
      return this.namespaceOps.loadNamespaceMetadata(t);
    }
    async listTables(t) {
      return this.tableOps.listTables(t);
    }
    async createTable(t, e) {
      return this.tableOps.createTable(t, e);
    }
    async updateTable(t, e) {
      return this.tableOps.updateTable(t, e);
    }
    async dropTable(t, e) {
      await this.tableOps.dropTable(t, e);
    }
    async loadTable(t) {
      return this.tableOps.loadTable(t);
    }
    async namespaceExists(t) {
      return this.namespaceOps.namespaceExists(t);
    }
    async tableExists(t) {
      return this.tableOps.tableExists(t);
    }
    async createNamespaceIfNotExists(t, e) {
      return this.namespaceOps.createNamespaceIfNotExists(t, e);
    }
    async createTableIfNotExists(t, e) {
      return this.tableOps.createTableIfNotExists(t, e);
    }
  },
  Br = class extends Error {
    constructor(t, e = "storage", n, r) {
      (super(t),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = n),
        (this.statusCode = r));
    }
  };
function Fr(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var vn = class extends Br {
    constructor(t, e, n, r = "storage") {
      (super(t, r, e, n),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  rl = class extends Br {
    constructor(t, e, n = "storage") {
      (super(t, n),
        (this.name =
          n === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e));
    }
  };
const mm = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  gm = (t) => {
    if (typeof t != "object" || t === null) return !1;
    const e = Object.getPrototypeOf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  Fs = (t) => {
    if (Array.isArray(t)) return t.map((n) => Fs(n));
    if (typeof t == "function" || t !== Object(t)) return t;
    const e = {};
    return (
      Object.entries(t).forEach(([n, r]) => {
        const s = n.replace(/([-_][a-z])/gi, (a) =>
          a.toUpperCase().replace(/[-_]/g, ""),
        );
        e[s] = Fs(r);
      }),
      e
    );
  },
  vm = (t) =>
    !t ||
    typeof t != "string" ||
    t.length === 0 ||
    t.length > 100 ||
    t.trim() !== t ||
    t.includes("/") ||
    t.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t);
function kn(t) {
  "@babel/helpers - typeof";
  return (
    (kn =
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
    kn(t)
  );
}
function ym(t, e) {
  if (kn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (kn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function bm(t) {
  var e = ym(t, "string");
  return kn(e) == "symbol" ? e : e + "";
}
function _m(t, e, n) {
  return (
    (e = bm(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function _o(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function N(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? _o(Object(n), !0).forEach(function (r) {
          _m(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : _o(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
const wo = (t) => {
    var e;
    return (
      t.msg ||
      t.message ||
      t.error_description ||
      (typeof t.error == "string"
        ? t.error
        : (e = t.error) === null || e === void 0
          ? void 0
          : e.message) ||
      JSON.stringify(t)
    );
  },
  wm = async (t, e, n, r) => {
    if (
      t &&
      typeof t == "object" &&
      "status" in t &&
      "ok" in t &&
      typeof t.status == "number"
    ) {
      const s = t,
        a = s.status || 500;
      if (typeof s.json == "function")
        s.json()
          .then((o) => {
            const i =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              a + "";
            e(new vn(wo(o), a, i, r));
          })
          .catch(() => {
            if (r === "vectors") {
              const o = a + "";
              e(new vn(s.statusText || `HTTP ${a} error`, a, o, r));
            } else {
              const o = a + "";
              e(new vn(s.statusText || `HTTP ${a} error`, a, o, r));
            }
          });
      else {
        const o = a + "";
        e(new vn(s.statusText || `HTTP ${a} error`, a, o, r));
      }
    } else e(new rl(wo(t), t, r));
  },
  xm = (t, e, n, r) => {
    const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET" || t === "HEAD" || !r
      ? N(N({}, s), n)
      : (gm(r)
          ? ((s.headers = N(
              { "Content-Type": "application/json" },
              e == null ? void 0 : e.headers,
            )),
            (s.body = JSON.stringify(r)))
          : (s.body = r),
        e != null && e.duplex && (s.duplex = e.duplex),
        N(N({}, s), n));
  };
async function hn(t, e, n, r, s, a, o) {
  return new Promise((i, c) => {
    t(n, xm(e, r, s, a))
      .then((l) => {
        if (!l.ok) throw l;
        if (r != null && r.noResolveJson) return l;
        if (o === "vectors") {
          const d = l.headers.get("content-type");
          if (l.headers.get("content-length") === "0" || l.status === 204)
            return {};
          if (!d || !d.includes("application/json")) return {};
        }
        return l.json();
      })
      .then((l) => i(l))
      .catch((l) => wm(l, c, r, o));
  });
}
function sl(t = "storage") {
  return {
    get: async (e, n, r, s) => hn(e, "GET", n, r, s, void 0, t),
    post: async (e, n, r, s, a) => hn(e, "POST", n, s, a, r, t),
    put: async (e, n, r, s, a) => hn(e, "PUT", n, s, a, r, t),
    head: async (e, n, r, s) =>
      hn(e, "HEAD", n, N(N({}, r), {}, { noResolveJson: !0 }), s, void 0, t),
    remove: async (e, n, r, s, a) => hn(e, "DELETE", n, s, a, r, t),
  };
}
const Em = sl("storage"),
  { get: Dn, post: Se, put: Us, head: Sm, remove: ya } = Em,
  ge = sl("vectors");
var an = class {
    constructor(t, e = {}, n, r = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = t),
        (this.headers = e),
        (this.fetch = mm(n)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(t, e) {
      return ((this.headers = N(N({}, this.headers), {}, { [t]: e })), this);
    }
    async handleOperation(t) {
      var e = this;
      try {
        return { data: await t(), error: null };
      } catch (n) {
        if (e.shouldThrowOnError) throw n;
        if (Fr(n)) return { data: null, error: n };
        throw n;
      }
    }
  },
  Am = class {
    constructor(t, e) {
      ((this.downloadFn = t), (this.shouldThrowOnError = e));
    }
    then(t, e) {
      return this.execute().then(t, e);
    }
    async execute() {
      var t = this;
      try {
        return { data: (await t.downloadFn()).body, error: null };
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (Fr(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
let al;
al = Symbol.toStringTag;
var Cm = class {
  constructor(t, e) {
    ((this.downloadFn = t),
      (this.shouldThrowOnError = e),
      (this[al] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new Am(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var t = this;
    try {
      return { data: await (await t.downloadFn()).blob(), error: null };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (Fr(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const Rm = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  xo = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var Om = class extends an {
  constructor(t, e = {}, n, r) {
    (super(t, e, r, "storage"), (this.bucketId = n));
  }
  async uploadOrUpdate(t, e, n, r) {
    var s = this;
    return s.handleOperation(async () => {
      let a;
      const o = N(N({}, xo), r);
      let i = N(
        N({}, s.headers),
        t === "POST" && { "x-upsert": String(o.upsert) },
      );
      const c = o.metadata;
      (typeof Blob < "u" && n instanceof Blob
        ? ((a = new FormData()),
          a.append("cacheControl", o.cacheControl),
          c && a.append("metadata", s.encodeMetadata(c)),
          a.append("", n))
        : typeof FormData < "u" && n instanceof FormData
          ? ((a = n),
            a.has("cacheControl") || a.append("cacheControl", o.cacheControl),
            c &&
              !a.has("metadata") &&
              a.append("metadata", s.encodeMetadata(c)))
          : ((a = n),
            (i["cache-control"] = `max-age=${o.cacheControl}`),
            (i["content-type"] = o.contentType),
            c && (i["x-metadata"] = s.toBase64(s.encodeMetadata(c))),
            ((typeof ReadableStream < "u" && a instanceof ReadableStream) ||
              (a &&
                typeof a == "object" &&
                "pipe" in a &&
                typeof a.pipe == "function")) &&
              !o.duplex &&
              (o.duplex = "half")),
        r != null && r.headers && (i = N(N({}, i), r.headers)));
      const l = s._removeEmptyFolders(e),
        d = s._getFinalPath(l),
        u = await (t == "PUT" ? Us : Se)(
          s.fetch,
          `${s.url}/object/${d}`,
          a,
          N({ headers: i }, o != null && o.duplex ? { duplex: o.duplex } : {}),
        );
      return { path: l, id: u.Id, fullPath: u.Key };
    });
  }
  async upload(t, e, n) {
    return this.uploadOrUpdate("POST", t, e, n);
  }
  async uploadToSignedUrl(t, e, n, r) {
    var s = this;
    const a = s._removeEmptyFolders(t),
      o = s._getFinalPath(a),
      i = new URL(s.url + `/object/upload/sign/${o}`);
    return (
      i.searchParams.set("token", e),
      s.handleOperation(async () => {
        let c;
        const l = N({ upsert: xo.upsert }, r),
          d = N(N({}, s.headers), { "x-upsert": String(l.upsert) });
        return (
          typeof Blob < "u" && n instanceof Blob
            ? ((c = new FormData()),
              c.append("cacheControl", l.cacheControl),
              c.append("", n))
            : typeof FormData < "u" && n instanceof FormData
              ? ((c = n), c.append("cacheControl", l.cacheControl))
              : ((c = n),
                (d["cache-control"] = `max-age=${l.cacheControl}`),
                (d["content-type"] = l.contentType)),
          {
            path: a,
            fullPath: (await Us(s.fetch, i.toString(), c, { headers: d })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(t);
      const s = N({}, n.headers);
      e != null && e.upsert && (s["x-upsert"] = "true");
      const a = await Se(
          n.fetch,
          `${n.url}/object/upload/sign/${r}`,
          {},
          { headers: s },
        ),
        o = new URL(n.url + a.url),
        i = o.searchParams.get("token");
      if (!i) throw new Br("No token returned by API");
      return { signedUrl: o.toString(), path: t, token: i };
    });
  }
  async update(t, e, n) {
    return this.uploadOrUpdate("PUT", t, e, n);
  }
  async move(t, e, n) {
    var r = this;
    return r.handleOperation(
      async () =>
        await Se(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        ),
    );
  }
  async copy(t, e, n) {
    var r = this;
    return r.handleOperation(async () => ({
      path: (
        await Se(
          r.fetch,
          `${r.url}/object/copy`,
          {
            bucketId: r.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(t);
      const a =
        typeof (n == null ? void 0 : n.transform) == "object" &&
        n.transform !== null &&
        Object.keys(n.transform).length > 0;
      let o = await Se(
        r.fetch,
        `${r.url}/object/sign/${s}`,
        N({ expiresIn: e }, a ? { transform: n.transform } : {}),
        { headers: r.headers },
      );
      const i =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "",
        c =
          a && o.signedURL.includes("/object/sign/")
            ? o.signedURL.replace("/object/sign/", "/render/image/sign/")
            : o.signedURL;
      return { signedUrl: encodeURI(`${r.url}${c}${i}`) };
    });
  }
  async createSignedUrls(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = await Se(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: e, paths: t },
          { headers: r.headers },
        ),
        a =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "";
      return s.map((o) =>
        N(
          N({}, o),
          {},
          {
            signedUrl: o.signedURL
              ? encodeURI(`${r.url}${o.signedURL}${a}`)
              : null,
          },
        ),
      );
    });
  }
  download(t, e, n) {
    const r =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      s = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      ),
      a = s ? `?${s}` : "",
      o = this._getFinalPath(t),
      i = () =>
        Dn(
          this.fetch,
          `${this.url}/${r}/${o}${a}`,
          { headers: this.headers, noResolveJson: !0 },
          n,
        );
    return new Cm(i, this.shouldThrowOnError);
  }
  async info(t) {
    var e = this;
    const n = e._getFinalPath(t);
    return e.handleOperation(async () =>
      Fs(
        await Dn(e.fetch, `${e.url}/object/info/${n}`, { headers: e.headers }),
      ),
    );
  }
  async exists(t) {
    var e = this;
    const n = e._getFinalPath(t);
    try {
      return (
        await Sm(e.fetch, `${e.url}/object/${n}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (s) {
      if (e.shouldThrowOnError) throw s;
      if (Fr(s)) {
        var r;
        const a =
          s instanceof vn
            ? s.status
            : s instanceof rl
              ? (r = s.originalError) === null || r === void 0
                ? void 0
                : r.status
              : void 0;
        if (a !== void 0 && [400, 404].includes(a))
          return { data: !1, error: s };
      }
      throw s;
    }
  }
  getPublicUrl(t, e) {
    const n = this._getFinalPath(t),
      r = [],
      s =
        e != null && e.download
          ? `download=${e.download === !0 ? "" : e.download}`
          : "";
    s !== "" && r.push(s);
    const a =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image"
          : "object",
      o = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      );
    o !== "" && r.push(o);
    let i = r.join("&");
    return (
      i !== "" && (i = `?${i}`),
      { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${n}${i}`) } }
    );
  }
  async remove(t) {
    var e = this;
    return e.handleOperation(
      async () =>
        await ya(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: t },
          { headers: e.headers },
        ),
    );
  }
  async list(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = N(N(N({}, Rm), e), {}, { prefix: t || "" });
      return await Se(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        s,
        { headers: r.headers },
        n,
      );
    });
  }
  async listV2(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      const r = N({}, t);
      return await Se(
        n.fetch,
        `${n.url}/object/list-v2/${n.bucketId}`,
        r,
        { headers: n.headers },
        e,
      );
    });
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const e = [];
    return (
      t.width && e.push(`width=${t.width}`),
      t.height && e.push(`height=${t.height}`),
      t.resize && e.push(`resize=${t.resize}`),
      t.format && e.push(`format=${t.format}`),
      t.quality && e.push(`quality=${t.quality}`),
      e.join("&")
    );
  }
};
const Tm = "2.99.2",
  qn = { "X-Client-Info": `storage-js/${Tm}` };
var Pm = class extends an {
    constructor(t, e = {}, n, r) {
      const s = new URL(t);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const a = s.href.replace(/\/$/, ""),
        o = N(N({}, qn), e);
      super(a, o, n, "storage");
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const n = e.listBucketOptionsToQueryString(t);
        return await Dn(e.fetch, `${e.url}/bucket${n}`, { headers: e.headers });
      });
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Dn(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }),
      );
    }
    async createBucket(t, e = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Se(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: t,
              name: t,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Us(
            n.fetch,
            `${n.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Se(
            e.fetch,
            `${e.url}/bucket/${t}/empty`,
            {},
            { headers: e.headers },
          ),
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ya(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
      );
    }
    listBucketOptionsToQueryString(t) {
      const e = {};
      return (
        t &&
          ("limit" in t && (e.limit = String(t.limit)),
          "offset" in t && (e.offset = String(t.offset)),
          t.search && (e.search = t.search),
          t.sortColumn && (e.sortColumn = t.sortColumn),
          t.sortOrder && (e.sortOrder = t.sortOrder)),
        Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
      );
    }
  },
  Im = class extends an {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = N(N({}, qn), e);
      super(r, s, n, "storage");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Se(
            e.fetch,
            `${e.url}/bucket`,
            { name: t },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const n = new URLSearchParams();
        ((t == null ? void 0 : t.limit) !== void 0 &&
          n.set("limit", t.limit.toString()),
          (t == null ? void 0 : t.offset) !== void 0 &&
            n.set("offset", t.offset.toString()),
          t != null && t.sortColumn && n.set("sortColumn", t.sortColumn),
          t != null && t.sortOrder && n.set("sortOrder", t.sortOrder),
          t != null && t.search && n.set("search", t.search));
        const r = n.toString(),
          s = r ? `${e.url}/bucket?${r}` : `${e.url}/bucket`;
        return await Dn(e.fetch, s, { headers: e.headers });
      });
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ya(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
      );
    }
    from(t) {
      var e = this;
      if (!vm(t))
        throw new Br(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const n = new fm({
          baseUrl: this.url,
          catalogName: t,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(s, a) {
          const o = s[a];
          return typeof o != "function"
            ? o
            : async (...i) => {
                try {
                  return { data: await o.apply(s, i), error: null };
                } catch (c) {
                  if (r) throw c;
                  return { data: null, error: c };
                }
              };
        },
      });
    }
  },
  km = class extends an {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = N(N({}, qn), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async createIndex(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await ge.post(e.fetch, `${e.url}/CreateIndex`, t, {
            headers: e.headers,
          })) || {},
      );
    }
    async getIndex(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          await ge.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ge.post(e.fetch, `${e.url}/ListIndexes`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteIndex(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await ge.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  Dm = class extends an {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = N(N({}, qn), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async putVectors(t) {
      var e = this;
      if (t.vectors.length < 1 || t.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await ge.post(e.fetch, `${e.url}/PutVectors`, t, {
            headers: e.headers,
          })) || {},
      );
    }
    async getVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ge.post(e.fetch, `${e.url}/GetVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async listVectors(t) {
      var e = this;
      if (t.segmentCount !== void 0) {
        if (t.segmentCount < 1 || t.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          t.segmentIndex !== void 0 &&
          (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${t.segmentCount - 1}`,
          );
      }
      return e.handleOperation(
        async () =>
          await ge.post(e.fetch, `${e.url}/ListVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async queryVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ge.post(e.fetch, `${e.url}/QueryVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteVectors(t) {
      var e = this;
      if (t.keys.length < 1 || t.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await ge.post(e.fetch, `${e.url}/DeleteVectors`, t, {
            headers: e.headers,
          })) || {},
      );
    }
  },
  Lm = class extends an {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = N(N({}, qn), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await ge.post(
            e.fetch,
            `${e.url}/CreateVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          )) || {},
      );
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ge.post(
            e.fetch,
            `${e.url}/GetVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(t = {}) {
      var e = this;
      return e.handleOperation(
        async () =>
          await ge.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await ge.post(
            e.fetch,
            `${e.url}/DeleteVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          )) || {},
      );
    }
  },
  jm = class extends Lm {
    constructor(t, e = {}) {
      super(t, e.headers || {}, e.fetch);
    }
    from(t) {
      return new Nm(this.url, this.headers, t, this.fetch);
    }
    async createBucket(t) {
      var e = () => super.createBucket,
        n = this;
      return e().call(n, t);
    }
    async getBucket(t) {
      var e = () => super.getBucket,
        n = this;
      return e().call(n, t);
    }
    async listBuckets(t = {}) {
      var e = () => super.listBuckets,
        n = this;
      return e().call(n, t);
    }
    async deleteBucket(t) {
      var e = () => super.deleteBucket,
        n = this;
      return e().call(n, t);
    }
  },
  Nm = class extends km {
    constructor(t, e, n, r) {
      (super(t, e, r), (this.vectorBucketName = n));
    }
    async createIndex(t) {
      var e = () => super.createIndex,
        n = this;
      return e().call(
        n,
        N(N({}, t), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(t = {}) {
      var e = () => super.listIndexes,
        n = this;
      return e().call(
        n,
        N(N({}, t), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(t) {
      var e = () => super.getIndex,
        n = this;
      return e().call(n, n.vectorBucketName, t);
    }
    async deleteIndex(t) {
      var e = () => super.deleteIndex,
        n = this;
      return e().call(n, n.vectorBucketName, t);
    }
    index(t) {
      return new $m(
        this.url,
        this.headers,
        this.vectorBucketName,
        t,
        this.fetch,
      );
    }
  },
  $m = class extends Dm {
    constructor(t, e, n, r, s) {
      (super(t, e, s), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(t) {
      var e = () => super.putVectors,
        n = this;
      return e().call(
        n,
        N(
          N({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(t) {
      var e = () => super.getVectors,
        n = this;
      return e().call(
        n,
        N(
          N({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(t = {}) {
      var e = () => super.listVectors,
        n = this;
      return e().call(
        n,
        N(
          N({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(t) {
      var e = () => super.queryVectors,
        n = this;
      return e().call(
        n,
        N(
          N({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(t) {
      var e = () => super.deleteVectors,
        n = this;
      return e().call(
        n,
        N(
          N({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  Mm = class extends Pm {
    constructor(t, e = {}, n, r) {
      super(t, e, n, r);
    }
    from(t) {
      return new Om(this.url, this.headers, t, this.fetch);
    }
    get vectors() {
      return new jm(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new Im(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const ol = "2.99.2",
  Nt = 30 * 1e3,
  qs = 3,
  ss = qs * Nt,
  Bm = "http://localhost:9999",
  Fm = "supabase.auth.token",
  Um = { "X-Client-Info": `gotrue-js/${ol}` },
  Vs = "X-Supabase-Api-Version",
  il = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  qm = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Vm = 10 * 60 * 1e3;
class Ln extends Error {
  constructor(e, n, r) {
    (super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n),
      (this.code = r));
  }
}
function I(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class zm extends Ln {
  constructor(e, n, r) {
    (super(e, n, r),
      (this.name = "AuthApiError"),
      (this.status = n),
      (this.code = r));
  }
}
function Hm(t) {
  return I(t) && t.name === "AuthApiError";
}
class gt extends Ln {
  constructor(e, n) {
    (super(e), (this.name = "AuthUnknownError"), (this.originalError = n));
  }
}
class Je extends Ln {
  constructor(e, n, r, s) {
    (super(e, r, s), (this.name = n), (this.status = r));
  }
}
class he extends Je {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function as(t) {
  return I(t) && t.name === "AuthSessionMissingError";
}
class Tt extends Je {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class tr extends Je {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class nr extends Je {
  constructor(e, n = null) {
    (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function Gm(t) {
  return I(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Eo extends Je {
  constructor(e, n = null) {
    (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Wm extends Je {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class zs extends Je {
  constructor(e, n) {
    super(e, "AuthRetryableFetchError", n, void 0);
  }
}
function os(t) {
  return I(t) && t.name === "AuthRetryableFetchError";
}
class So extends Je {
  constructor(e, n, r) {
    (super(e, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r));
  }
}
class Hs extends Je {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const yr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  Ao = ` 	
\r=`.split(""),
  Km = (() => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1) t[e] = -1;
    for (let e = 0; e < Ao.length; e += 1) t[Ao[e].charCodeAt(0)] = -2;
    for (let e = 0; e < yr.length; e += 1) t[yr[e].charCodeAt(0)] = e;
    return t;
  })();
function Co(t, e, n) {
  if (t !== null)
    for (e.queue = (e.queue << 8) | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (n(yr[r]), (e.queuedBits -= 6));
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;
    ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (n(yr[r]), (e.queuedBits -= 6));
    }
}
function cl(t, e, n) {
  const r = Km[t];
  if (r > -1)
    for (e.queue = (e.queue << 6) | r, e.queuedBits += 6; e.queuedBits >= 8; )
      (n((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Ro(t) {
  const e = [],
    n = (o) => {
      e.push(String.fromCodePoint(o));
    },
    r = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    a = (o) => {
      Qm(o, r, n);
    };
  for (let o = 0; o < t.length; o += 1) cl(t.charCodeAt(o), s, a);
  return e.join("");
}
function Jm(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    (e(192 | (t >> 6)), e(128 | (t & 63)));
    return;
  } else if (t <= 65535) {
    (e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63)));
    return;
  } else if (t <= 1114111) {
    (e(240 | (t >> 18)),
      e(128 | ((t >> 12) & 63)),
      e(128 | ((t >> 6) & 63)),
      e(128 | (t & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function Ym(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const s = ((r - 55296) * 1024) & 65535;
      ((r = (((t.charCodeAt(n + 1) - 56320) & 65535) | s) + 65536), (n += 1));
    }
    Jm(r, e);
  }
}
function Qm(t, e, n) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      n(t);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!((t >> (7 - r)) & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2) e.codepoint = t & 31;
    else if (e.utf8seq === 3) e.codepoint = t & 15;
    else if (e.utf8seq === 4) e.codepoint = t & 7;
    else throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127) throw new Error("Invalid UTF-8 sequence");
    ((e.codepoint = (e.codepoint << 6) | (t & 63)),
      (e.utf8seq -= 1),
      e.utf8seq === 0 && n(e.codepoint));
  }
}
function Vt(t) {
  const e = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      e.push(s);
    };
  for (let s = 0; s < t.length; s += 1) cl(t.charCodeAt(s), n, r);
  return new Uint8Array(e);
}
function Xm(t) {
  const e = [];
  return (Ym(t, (n) => e.push(n)), new Uint8Array(e));
}
function vt(t) {
  const e = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      e.push(s);
    };
  return (t.forEach((s) => Co(s, n, r)), Co(null, n, r), e.join(""));
}
function Zm(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function eg() {
  return Symbol("auth-callback");
}
const se = () => typeof window < "u" && typeof document < "u",
  ut = { tested: !1, writable: !1 },
  ll = () => {
    if (!se()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (ut.tested) return ut.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        (ut.tested = !0),
        (ut.writable = !0));
    } catch {
      ((ut.tested = !0), (ut.writable = !1));
    }
    return ut.writable;
  };
function tg(t) {
  const e = {},
    n = new URL(t);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((s, a) => {
        e[a] = s;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, s) => {
      e[s] = r;
    }),
    e
  );
}
const dl = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  ng = (t) =>
    typeof t == "object" &&
    t !== null &&
    "status" in t &&
    "ok" in t &&
    "json" in t &&
    typeof t.json == "function",
  $t = async (t, e, n) => {
    await t.setItem(e, JSON.stringify(n));
  },
  pt = async (t, e) => {
    const n = await t.getItem(e);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  re = async (t, e) => {
    await t.removeItem(e);
  };
class Ur {
  constructor() {
    this.promise = new Ur.promiseConstructor((e, n) => {
      ((this.resolve = e), (this.reject = n));
    });
  }
}
Ur.promiseConstructor = Promise;
function rr(t) {
  const e = t.split(".");
  if (e.length !== 3) throw new Hs("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!qm.test(e[r])) throw new Hs("JWT not in base64url format");
  return {
    header: JSON.parse(Ro(e[0])),
    payload: JSON.parse(Ro(e[1])),
    signature: Vt(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function rg(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function sg(t, e) {
  return new Promise((r, s) => {
    (async () => {
      for (let a = 0; a < 1 / 0; a++)
        try {
          const o = await t(a);
          if (!e(a, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!e(a, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function ag(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function og() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let s = "";
    for (let a = 0; a < 56; a++) s += n.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return (crypto.getRandomValues(e), Array.from(e, ag).join(""));
}
async function ig(t) {
  const n = new TextEncoder().encode(t),
    r = await crypto.subtle.digest("SHA-256", n),
    s = new Uint8Array(r);
  return Array.from(s)
    .map((a) => String.fromCharCode(a))
    .join("");
}
async function cg(t) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      t
    );
  const n = await ig(t);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Pt(t, e, n = !1) {
  const r = og();
  let s = r;
  (n && (s += "/PASSWORD_RECOVERY"), await $t(t, `${e}-code-verifier`, s));
  const a = await cg(r);
  return [a, r === a ? "plain" : "s256"];
}
const lg = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function dg(t) {
  const e = t.headers.get(Vs);
  if (!e || !e.match(lg)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function ug(t) {
  if (!t) throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e) throw new Error("JWT has expired");
}
function pg(t) {
  switch (t) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const hg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function It(t) {
  if (!hg.test(t))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function is() {
  const t = {};
  return new Proxy(t, {
    get: (e, n) => {
      if (n === "__isUserNotAvailableProxy") return !0;
      if (typeof n == "symbol") {
        const r = n.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (e, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (e, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function fg(t, e) {
  return new Proxy(t, {
    get: (n, r, s) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const a = r.toString();
        if (
          a === "Symbol(Symbol.toPrimitive)" ||
          a === "Symbol(Symbol.toStringTag)" ||
          a === "Symbol(util.inspect.custom)" ||
          a === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(n, r, s);
      }
      return (
        !e.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (e.value = !0)),
        Reflect.get(n, r, s)
      );
    },
  });
}
function Oo(t) {
  return JSON.parse(JSON.stringify(t));
}
const ft = (t) =>
    t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
  mg = [502, 503, 504];
async function To(t) {
  var e;
  if (!ng(t)) throw new zs(ft(t), 0);
  if (mg.includes(t.status)) throw new zs(ft(t), t.status);
  let n;
  try {
    n = await t.json();
  } catch (a) {
    throw new gt(ft(a), a);
  }
  let r;
  const s = dg(t);
  if (
    (s &&
    s.getTime() >= il["2024-01-01"].timestamp &&
    typeof n == "object" &&
    n &&
    typeof n.code == "string"
      ? (r = n.code)
      : typeof n == "object" &&
        n &&
        typeof n.error_code == "string" &&
        (r = n.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new So(
        ft(n),
        t.status,
        ((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          [],
      );
    if (r === "session_not_found") throw new he();
  } else if (
    typeof n == "object" &&
    n &&
    typeof n.weak_password == "object" &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((a, o) => a && typeof o == "string", !0)
  )
    throw new So(ft(n), t.status, n.weak_password.reasons);
  throw new zm(ft(n), t.status || 500, r);
}
const gg = (t, e, n, r) => {
  const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers,
      )),
      (s.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, s), n));
};
async function L(t, e, n, r) {
  var s;
  const a = Object.assign({}, r == null ? void 0 : r.headers);
  (a[Vs] || (a[Vs] = il["2024-01-01"].name),
    r != null && r.jwt && (a.Authorization = `Bearer ${r.jwt}`));
  const o =
    (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const i = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    c = await vg(
      t,
      e,
      n + i,
      { headers: a, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body,
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(c)
    : { data: Object.assign({}, c), error: null };
}
async function vg(t, e, n, r, s, a) {
  const o = gg(e, r, s, a);
  let i;
  try {
    i = await t(n, Object.assign({}, o));
  } catch (c) {
    throw (console.error(c), new zs(ft(c), 0));
  }
  if ((i.ok || (await To(i)), r != null && r.noResolveJson)) return i;
  try {
    return await i.json();
  } catch (c) {
    await To(c);
  }
}
function xe(t) {
  var e;
  let n = null;
  _g(t) &&
    ((n = Object.assign({}, t)),
    t.expires_at || (n.expires_at = Zm(t.expires_in)));
  const r = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: n, user: r }, error: null };
}
function Po(t) {
  const e = xe(t);
  return (
    !e.error &&
      t.weak_password &&
      typeof t.weak_password == "object" &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.message &&
      typeof t.weak_password.message == "string" &&
      t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
      (e.data.weak_password = t.weak_password),
    e
  );
}
function et(t) {
  var e;
  return {
    data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
    error: null,
  };
}
function yg(t) {
  return { data: t, error: null };
}
function bg(t) {
  const {
      action_link: e,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: a,
    } = t,
    o = Mr(t, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    i = {
      action_link: e,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: a,
    },
    c = Object.assign({}, o);
  return { data: { properties: i, user: c }, error: null };
}
function Io(t) {
  return t;
}
function _g(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const cs = ["global", "local", "others"];
class wg {
  constructor({ url: e = "", headers: n = {}, fetch: r }) {
    ((this.url = e),
      (this.headers = n),
      (this.fetch = dl(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      }));
  }
  async signOut(e, n = cs[0]) {
    if (cs.indexOf(n) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${cs.join(", ")}`,
      );
    try {
      return (
        await L(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(e, n = {}) {
    try {
      return await L(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: et,
      });
    } catch (r) {
      if (I(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(e) {
    try {
      const { options: n } = e,
        r = Mr(e, ["options"]),
        s = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
        await L(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: bg,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (I(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(e) {
    try {
      return await L(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: et,
      });
    } catch (n) {
      if (I(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(e) {
    var n, r, s, a, o, i, c;
    try {
      const l = { nextPage: null, lastPage: 0, total: 0 },
        d = await L(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = e == null ? void 0 : e.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (a =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && a !== void 0
                ? a
                : "",
          },
          xform: Io,
        });
      if (d.error) throw d.error;
      const u = await d.json(),
        h =
          (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        p =
          (c =
            (i = d.headers.get("link")) === null || i === void 0
              ? void 0
              : i.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        p.length > 0 &&
          (p.forEach((f) => {
            const m = parseInt(f.split(";")[0].split("=")[1].substring(0, 1)),
              g = JSON.parse(f.split(";")[1].split("=")[1]);
            l[`${g}Page`] = m;
          }),
          (l.total = parseInt(h))),
        { data: Object.assign(Object.assign({}, u), l), error: null }
      );
    } catch (l) {
      if (I(l)) return { data: { users: [] }, error: l };
      throw l;
    }
  }
  async getUserById(e) {
    It(e);
    try {
      return await L(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: et,
      });
    } catch (n) {
      if (I(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(e, n) {
    It(e);
    try {
      return await L(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: n,
        headers: this.headers,
        xform: et,
      });
    } catch (r) {
      if (I(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(e, n = !1) {
    It(e);
    try {
      return await L(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: et,
      });
    } catch (r) {
      if (I(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    It(e.userId);
    try {
      const { data: n, error: r } = await L(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: n, error: r };
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(e) {
    (It(e.userId), It(e.id));
    try {
      return {
        data: await L(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listOAuthClients(e) {
    var n, r, s, a, o, i, c;
    try {
      const l = { nextPage: null, lastPage: 0, total: 0 },
        d = await L(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = e == null ? void 0 : e.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (a =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && a !== void 0
                ? a
                : "",
          },
          xform: Io,
        });
      if (d.error) throw d.error;
      const u = await d.json(),
        h =
          (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        p =
          (c =
            (i = d.headers.get("link")) === null || i === void 0
              ? void 0
              : i.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        p.length > 0 &&
          (p.forEach((f) => {
            const m = parseInt(f.split(";")[0].split("=")[1].substring(0, 1)),
              g = JSON.parse(f.split(";")[1].split("=")[1]);
            l[`${g}Page`] = m;
          }),
          (l.total = parseInt(h))),
        { data: Object.assign(Object.assign({}, u), l), error: null }
      );
    } catch (l) {
      if (I(l)) return { data: { clients: [] }, error: l };
      throw l;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await L(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await L(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateOAuthClient(e, n) {
    try {
      return await L(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await L(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await L(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listCustomProviders(e) {
    try {
      const n = {};
      return (
        e != null && e.type && (n.type = e.type),
        await L(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: n,
          xform: (r) => {
            var s;
            return {
              data: {
                providers:
                  (s = r == null ? void 0 : r.providers) !== null &&
                  s !== void 0
                    ? s
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (n) {
      if (I(n)) return { data: { providers: [] }, error: n };
      throw n;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await L(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await L(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${e}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateCustomProvider(e, n) {
    try {
      return await L(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${e}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      return (
        await L(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${e}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
}
function ko(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, n) => {
      t[e] = n;
    },
    removeItem: (e) => {
      delete t[e];
    },
  };
}
const qe = {
  debug: !!(
    globalThis &&
    ll() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class ul extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
}
class xg extends ul {}
async function Eg(t, e, n) {
  qe.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const r = new globalThis.AbortController();
  (e > 0 &&
    setTimeout(() => {
      (r.abort(),
        qe.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            t,
          ));
    }, e),
    await Promise.resolve());
  try {
    return await globalThis.navigator.locks.request(
      t,
      e === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: r.signal },
      async (s) => {
        if (s) {
          qe.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              t,
              s.name,
            );
          try {
            return await n();
          } finally {
            qe.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                t,
                s.name,
              );
          }
        } else {
          if (e === 0)
            throw (
              qe.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  t,
                ),
              new xg(
                `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`,
              )
            );
          if (qe.debug)
            try {
              const a = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(a, null, "  "),
              );
            } catch (a) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                a,
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
            ),
            await n()
          );
        }
      },
    );
  } catch (s) {
    if ((s == null ? void 0 : s.name) === "AbortError" && e > 0)
      return (
        qe.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
            t,
          ),
        console.warn(
          `@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`,
        ),
        await Promise.resolve().then(() =>
          globalThis.navigator.locks.request(
            t,
            { mode: "exclusive", steal: !0 },
            async (a) => {
              if (a) {
                qe.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                    t,
                    a.name,
                  );
                try {
                  return await n();
                } finally {
                  qe.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released (stolen)",
                      t,
                      a.name,
                    );
                }
              } else
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                  ),
                  await n()
                );
            },
          ),
        )
      );
    throw s;
  }
}
function Sg() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function pl(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function Ag(t) {
  return parseInt(t, 16);
}
function Cg(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function Rg(t) {
  var e;
  const {
    chainId: n,
    domain: r,
    expirationTime: s,
    issuedAt: a = new Date(),
    nonce: o,
    notBefore: i,
    requestId: c,
    resources: l,
    scheme: d,
    uri: u,
    version: h,
  } = t;
  {
    if (!Number.isInteger(n))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`,
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`,
      );
    if (!u)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (h !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`,
      );
    if (
      !((e = t.statement) === null || e === void 0) &&
      e.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`,
      );
  }
  const p = pl(t.address),
    f = d ? `${d}://${r}` : r,
    m = t.statement
      ? `${t.statement}
`
      : "",
    g = `${f} wants you to sign in with your Ethereum account:
${p}

${m}`;
  let b = `URI: ${u}
Version: ${h}
Chain ID: ${n}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${a.toISOString()}`;
  if (
    (s &&
      (b += `
Expiration Time: ${s.toISOString()}`),
    i &&
      (b += `
Not Before: ${i.toISOString()}`),
    c &&
      (b += `
Request ID: ${c}`),
    l)
  ) {
    let _ = `
Resources:`;
    for (const w of l) {
      if (!w || typeof w != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`,
        );
      _ += `
- ${w}`;
    }
    b += _;
  }
  return `${g}
${b}`;
}
class ee extends Error {
  constructor({ message: e, code: n, cause: r, name: s }) {
    var a;
    (super(e, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (a = s ?? (r instanceof Error ? r.name : void 0)) !== null &&
        a !== void 0
          ? a
          : "Unknown Error"),
      (this.code = n));
  }
}
class br extends ee {
  constructor(e, n) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = n));
  }
}
function Og({ error: t, options: e }) {
  var n, r, s;
  const { publicKey: a } = e;
  if (!a) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ee({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else if (t.name === "ConstraintError") {
    if (
      ((n = a.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.requireResidentKey) === !0
    )
      return new ee({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t,
      });
    if (
      e.mediation === "conditional" &&
      ((r = a.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new ee({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t,
      });
    if (
      ((s = a.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new ee({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t,
      });
  } else {
    if (t.name === "InvalidStateError")
      return new ee({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t,
      });
    if (t.name === "NotAllowedError")
      return new ee({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "NotSupportedError")
      return a.pubKeyCredParams.filter((i) => i.type === "public-key")
        .length === 0
        ? new ee({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: t,
          })
        : new ee({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: t,
          });
    if (t.name === "SecurityError") {
      const o = window.location.hostname;
      if (hl(o)) {
        if (a.rp.id !== o)
          return new ee({
            message: `The RP ID "${a.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new ee({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "TypeError") {
      if (a.user.id.byteLength < 1 || a.user.id.byteLength > 64)
        return new ee({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new ee({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new ee({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
function Tg({ error: t, options: e }) {
  const { publicKey: n } = e;
  if (!n) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ee({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else {
    if (t.name === "NotAllowedError")
      return new ee({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "SecurityError") {
      const r = window.location.hostname;
      if (hl(r)) {
        if (n.rpId !== r)
          return new ee({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new ee({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new ee({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new ee({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
class Pg {
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      ((n.name = "AbortError"), this.controller.abort(n));
    }
    const e = new AbortController();
    return ((this.controller = e), e.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      ((e.name = "AbortError"),
        this.controller.abort(e),
        (this.controller = void 0));
    }
  }
}
const Ig = new Pg();
function kg(t) {
  if (!t) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  const { challenge: e, user: n, excludeCredentials: r } = t,
    s = Mr(t, ["challenge", "user", "excludeCredentials"]),
    a = Vt(e).buffer,
    o = Object.assign(Object.assign({}, n), { id: Vt(n.id).buffer }),
    i = Object.assign(Object.assign({}, s), { challenge: a, user: o });
  if (r && r.length > 0) {
    i.excludeCredentials = new Array(r.length);
    for (let c = 0; c < r.length; c++) {
      const l = r[c];
      i.excludeCredentials[c] = Object.assign(Object.assign({}, l), {
        id: Vt(l.id).buffer,
        type: l.type || "public-key",
        transports: l.transports,
      });
    }
  }
  return i;
}
function Dg(t) {
  if (!t) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: n } = t,
    r = Mr(t, ["challenge", "allowCredentials"]),
    s = Vt(e).buffer,
    a = Object.assign(Object.assign({}, r), { challenge: s });
  if (n && n.length > 0) {
    a.allowCredentials = new Array(n.length);
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      a.allowCredentials[o] = Object.assign(Object.assign({}, i), {
        id: Vt(i.id).buffer,
        type: i.type || "public-key",
        transports: i.transports,
      });
    }
  }
  return a;
}
function Lg(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const n = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: vt(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: vt(new Uint8Array(t.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    authenticatorAttachment:
      (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function jg(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const n = t,
    r = t.getClientExtensionResults(),
    s = t.response;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      authenticatorData: vt(new Uint8Array(s.authenticatorData)),
      clientDataJSON: vt(new Uint8Array(s.clientDataJSON)),
      signature: vt(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? vt(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function hl(t) {
  return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t);
}
function Do() {
  var t, e;
  return !!(
    se() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.create) == "function" &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.get) == "function"
  );
}
async function Ng(t) {
  try {
    const e = await navigator.credentials.create(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new br("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new br("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Og({ error: e, options: t }) };
  }
}
async function $g(t) {
  try {
    const e = await navigator.credentials.get(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new br("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new br("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Tg({ error: e, options: t }) };
  }
}
const Mg = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  Bg = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function _r(...t) {
  const e = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    n = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    r = {};
  for (const s of t)
    if (s)
      for (const a in s) {
        const o = s[a];
        if (o !== void 0)
          if (Array.isArray(o)) r[a] = o;
          else if (n(o)) r[a] = o;
          else if (e(o)) {
            const i = r[a];
            e(i) ? (r[a] = _r(i, o)) : (r[a] = _r(o));
          } else r[a] = o;
      }
  return r;
}
function Fg(t, e) {
  return _r(Mg, t, e || {});
}
function Ug(t, e) {
  return _r(Bg, t, e || {});
}
class qg {
  constructor(e) {
    ((this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: e, webauthn: n, friendlyName: r, signal: s },
    a,
  ) {
    var o;
    try {
      const { data: i, error: c } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: n,
      });
      if (!i) return { data: null, error: c };
      const l = s ?? Ig.createNewAbortSignal();
      if (i.webauthn.type === "create") {
        const { user: d } = i.webauthn.credential_options.publicKey;
        if (!d.name) {
          const u = r;
          if (u) d.name = `${d.id}:${u}`;
          else {
            const p = (await this.client.getUser()).data.user,
              f =
                ((o = p == null ? void 0 : p.user_metadata) === null ||
                o === void 0
                  ? void 0
                  : o.name) ||
                (p == null ? void 0 : p.email) ||
                (p == null ? void 0 : p.id) ||
                "User";
            d.name = `${d.id}:${f}`;
          }
        }
        d.displayName || (d.displayName = d.name);
      }
      switch (i.webauthn.type) {
        case "create": {
          const d = Fg(
              i.webauthn.credential_options.publicKey,
              a == null ? void 0 : a.create,
            ),
            { data: u, error: h } = await Ng({ publicKey: d, signal: l });
          return u
            ? {
                data: {
                  factorId: e,
                  challengeId: i.id,
                  webauthn: { type: i.webauthn.type, credential_response: u },
                },
                error: null,
              }
            : { data: null, error: h };
        }
        case "request": {
          const d = Ug(
              i.webauthn.credential_options.publicKey,
              a == null ? void 0 : a.request,
            ),
            { data: u, error: h } = await $g(
              Object.assign(Object.assign({}, i.webauthn.credential_options), {
                publicKey: d,
                signal: l,
              }),
            );
          return u
            ? {
                data: {
                  factorId: e,
                  challengeId: i.id,
                  webauthn: { type: i.webauthn.type, credential_response: u },
                },
                error: null,
              }
            : { data: null, error: h };
        }
      }
    } catch (i) {
      return I(i)
        ? { data: null, error: i }
        : { data: null, error: new gt("Unexpected error in challenge", i) };
    }
  }
  async _verify({ challengeId: e, factorId: n, webauthn: r }) {
    return this.client.mfa.verify({ factorId: n, challengeId: e, webauthn: r });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    a,
  ) {
    if (!n)
      return {
        data: null,
        error: new Ln("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Do())
        return {
          data: null,
          error: new gt("Browser does not support WebAuthn", null),
        };
      const { data: o, error: i } = await this.challenge(
        { factorId: e, webauthn: { rpId: n, rpOrigins: r }, signal: s },
        { request: a },
      );
      if (!o) return { data: null, error: i };
      const { webauthn: c } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: c.type,
          rpId: n,
          rpOrigins: r,
          credential_response: c.credential_response,
        },
      });
    } catch (o) {
      return I(o)
        ? { data: null, error: o }
        : { data: null, error: new gt("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    a,
  ) {
    if (!n)
      return {
        data: null,
        error: new Ln("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Do())
        return {
          data: null,
          error: new gt("Browser does not support WebAuthn", null),
        };
      const { data: o, error: i } = await this._enroll({ friendlyName: e });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((d) => {
              var u;
              return (u = d.data) === null || u === void 0
                ? void 0
                : u.all.find(
                    (h) =>
                      h.factor_type === "webauthn" &&
                      h.friendly_name === e &&
                      h.status !== "unverified",
                  );
            })
            .then((d) =>
              d
                ? this.client.mfa.unenroll({
                    factorId: d == null ? void 0 : d.id,
                  })
                : void 0,
            ),
          { data: null, error: i }
        );
      const { data: c, error: l } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: n, rpOrigins: r },
          signal: s,
        },
        { create: a },
      );
      return c
        ? this._verify({
            factorId: o.id,
            challengeId: c.challengeId,
            webauthn: {
              rpId: n,
              rpOrigins: r,
              type: c.webauthn.type,
              credential_response: c.webauthn.credential_response,
            },
          })
        : { data: null, error: l };
    } catch (o) {
      return I(o)
        ? { data: null, error: o }
        : { data: null, error: new gt("Unexpected error in register", o) };
    }
  }
}
Sg();
const Vg = {
  url: Bm,
  storageKey: Fm,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Um,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
};
async function Lo(t, e, n) {
  return await n();
}
const kt = {};
class jn {
  get jwks() {
    var e, n;
    return (n =
      (e = kt[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && n !== void 0
      ? n
      : { keys: [] };
  }
  set jwks(e) {
    kt[this.storageKey] = Object.assign(
      Object.assign({}, kt[this.storageKey]),
      { jwks: e },
    );
  }
  get jwks_cached_at() {
    var e, n;
    return (n =
      (e = kt[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && n !== void 0
      ? n
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    kt[this.storageKey] = Object.assign(
      Object.assign({}, kt[this.storageKey]),
      { cachedAt: e },
    );
  }
  constructor(e) {
    var n, r, s;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const a = Object.assign(Object.assign({}, Vg), e);
    if (
      ((this.storageKey = a.storageKey),
      (this.instanceID =
        (n = jn.nextInstanceID[this.storageKey]) !== null && n !== void 0
          ? n
          : 0),
      (jn.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!a.debug),
      typeof a.debug == "function" && (this.logger = a.debug),
      this.instanceID > 0 && se())
    ) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(o), this.logDebugMessages && console.trace(o));
    }
    if (
      ((this.persistSession = a.persistSession),
      (this.autoRefreshToken = a.autoRefreshToken),
      (this.admin = new wg({ url: a.url, headers: a.headers, fetch: a.fetch })),
      (this.url = a.url),
      (this.headers = a.headers),
      (this.fetch = dl(a.fetch)),
      (this.lock = a.lock || Lo),
      (this.detectSessionInUrl = a.detectSessionInUrl),
      (this.flowType = a.flowType),
      (this.hasCustomAuthorizationHeader = a.hasCustomAuthorizationHeader),
      (this.throwOnError = a.throwOnError),
      (this.lockAcquireTimeout = a.lockAcquireTimeout),
      a.lock
        ? (this.lock = a.lock)
        : this.persistSession &&
            se() &&
            !(
              (r = globalThis == null ? void 0 : globalThis.navigator) ===
                null || r === void 0
            ) &&
            r.locks
          ? (this.lock = Eg)
          : (this.lock = Lo),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new qg(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (a.storage
            ? (this.storage = a.storage)
            : ll()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = ko(this.memoryStorage))),
          a.userStorage && (this.userStorage = a.userStorage))
        : ((this.memoryStorage = {}), (this.storage = ko(this.memoryStorage))),
      se() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (o) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          o,
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (o) => {
          this._debug(
            "received broadcast notification from other tab or client",
            o,
          );
          try {
            await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
          } catch (i) {
            this._debug("#broadcastChannel", "error", i);
          }
        });
    }
    a.skipAutoInitialize ||
      this.initialize().catch((o) => {
        this._debug("#initialize()", "error", o);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${ol}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...e),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize(),
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var e;
    try {
      let n = {},
        r = "none";
      if (
        (se() &&
          ((n = tg(window.location.href)),
          this._isImplicitGrantCallback(n)
            ? (r = "implicit")
            : (await this._isPKCECallback(n)) && (r = "pkce")),
        se() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: s, error: a } = await this._getSessionFromURL(n, r);
        if (a) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              a,
            ),
            Gm(a))
          ) {
            const c =
              (e = a.details) === null || e === void 0 ? void 0 : e.code;
            if (
              c === "identity_already_exists" ||
              c === "identity_not_found" ||
              c === "single_identity_not_deletable"
            )
              return { error: a };
          }
          return { error: a };
        }
        const { session: o, redirectType: i } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            i,
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            i === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (n) {
      return I(n)
        ? this._returnResult({ error: n })
        : this._returnResult({
            error: new gt("Unexpected error during initialization", n),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(e) {
    var n, r, s;
    try {
      const a = await L(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = e == null ? void 0 : e.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = e == null ? void 0 : e.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: xe,
        }),
        { data: o, error: i } = a;
      if (i || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      const c = o.session,
        l = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", c)),
        this._returnResult({ data: { user: l, session: c }, error: null })
      );
    } catch (a) {
      if (I(a))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async signUp(e) {
    var n, r, s;
    try {
      let a;
      if ("email" in e) {
        const { email: d, password: u, options: h } = e;
        let p = null,
          f = null;
        (this.flowType === "pkce" &&
          ([p, f] = await Pt(this.storage, this.storageKey)),
          (a = await L(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: h == null ? void 0 : h.emailRedirectTo,
            body: {
              email: d,
              password: u,
              data:
                (n = h == null ? void 0 : h.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
              code_challenge: p,
              code_challenge_method: f,
            },
            xform: xe,
          })));
      } else if ("phone" in e) {
        const { phone: d, password: u, options: h } = e;
        a = await L(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: d,
            password: u,
            data:
              (r = h == null ? void 0 : h.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (s = h == null ? void 0 : h.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: h == null ? void 0 : h.captchaToken,
            },
          },
          xform: xe,
        });
      } else
        throw new tr(
          "You must provide either an email or phone number and a password",
        );
      const { data: o, error: i } = a;
      if (i || !o)
        return (
          await re(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: i })
        );
      const c = o.session,
        l = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", c)),
        this._returnResult({ data: { user: l, session: c }, error: null })
      );
    } catch (a) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async signInWithPassword(e) {
    try {
      let n;
      if ("email" in e) {
        const { email: a, password: o, options: i } = e;
        n = await L(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: a,
              password: o,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            xform: Po,
          },
        );
      } else if ("phone" in e) {
        const { phone: a, password: o, options: i } = e;
        n = await L(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: a,
              password: o,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            xform: Po,
          },
        );
      } else
        throw new tr(
          "You must provide either an email or phone number and a password",
        );
      const { data: r, error: s } = n;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!r || !r.session || !r.user) {
        const a = new Tt();
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      }
      return (
        r.session &&
          (await this._saveSession(r.session),
          await this._notifyAllSubscribers("SIGNED_IN", r.session)),
        this._returnResult({
          data: Object.assign(
            { user: r.user, session: r.session },
            r.weak_password ? { weakPassword: r.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOAuth(e) {
    var n, r, s, a;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (a = e.options) === null || a === void 0
          ? void 0
          : a.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(e) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(e),
      )
    );
  }
  async signInWithWeb3(e) {
    const { chain: n } = e;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(e) {
    var n, r, s, a, o, i, c, l, d, u, h;
    let p, f;
    if ("message" in e) ((p = e.message), (f = e.signature));
    else {
      const { chain: m, wallet: g, statement: b, options: _ } = e;
      let w;
      if (se())
        if (typeof g == "object") w = g;
        else {
          const O = window;
          if (
            "ethereum" in O &&
            typeof O.ethereum == "object" &&
            "request" in O.ethereum &&
            typeof O.ethereum.request == "function"
          )
            w = O.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof g != "object" || !(_ != null && _.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        w = g;
      }
      const x = new URL(
          (n = _ == null ? void 0 : _.url) !== null && n !== void 0
            ? n
            : window.location.href,
        ),
        E = await w
          .request({ method: "eth_requestAccounts" })
          .then((O) => O)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!E || E.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const C = pl(E[0]);
      let S =
        (r = _ == null ? void 0 : _.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!S) {
        const O = await w.request({ method: "eth_chainId" });
        S = Ag(O);
      }
      const D = {
        domain: x.host,
        address: C,
        statement: b,
        uri: x.href,
        version: "1",
        chainId: S,
        nonce:
          (s = _ == null ? void 0 : _.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (o =
            (a = _ == null ? void 0 : _.signInWithEthereum) === null ||
            a === void 0
              ? void 0
              : a.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (i = _ == null ? void 0 : _.signInWithEthereum) === null ||
          i === void 0
            ? void 0
            : i.expirationTime,
        notBefore:
          (c = _ == null ? void 0 : _.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.notBefore,
        requestId:
          (l = _ == null ? void 0 : _.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.requestId,
        resources:
          (d = _ == null ? void 0 : _.signInWithEthereum) === null ||
          d === void 0
            ? void 0
            : d.resources,
      };
      ((p = Rg(D)),
        (f = await w.request({ method: "personal_sign", params: [Cg(p), C] })));
    }
    try {
      const { data: m, error: g } = await L(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: p, signature: f },
            !((u = e.options) === null || u === void 0) && u.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (h = e.options) === null || h === void 0
                        ? void 0
                        : h.captchaToken,
                  },
                }
              : null,
          ),
          xform: xe,
        },
      );
      if (g) throw g;
      if (!m || !m.session || !m.user) {
        const b = new Tt();
        return this._returnResult({
          data: { user: null, session: null },
          error: b,
        });
      }
      return (
        m.session &&
          (await this._saveSession(m.session),
          await this._notifyAllSubscribers("SIGNED_IN", m.session)),
        this._returnResult({ data: Object.assign({}, m), error: g })
      );
    } catch (m) {
      if (I(m))
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      throw m;
    }
  }
  async signInWithSolana(e) {
    var n, r, s, a, o, i, c, l, d, u, h, p;
    let f, m;
    if ("message" in e) ((f = e.message), (m = e.signature));
    else {
      const { chain: g, wallet: b, statement: _, options: w } = e;
      let x;
      if (se())
        if (typeof b == "object") x = b;
        else {
          const C = window;
          if (
            "solana" in C &&
            typeof C.solana == "object" &&
            (("signIn" in C.solana && typeof C.solana.signIn == "function") ||
              ("signMessage" in C.solana &&
                typeof C.solana.signMessage == "function"))
          )
            x = C.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof b != "object" || !(w != null && w.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        x = b;
      }
      const E = new URL(
        (n = w == null ? void 0 : w.url) !== null && n !== void 0
          ? n
          : window.location.href,
      );
      if ("signIn" in x && x.signIn) {
        const C = await x.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                w == null ? void 0 : w.signInWithSolana,
              ),
              { version: "1", domain: E.host, uri: E.href },
            ),
            _ ? { statement: _ } : null,
          ),
        );
        let S;
        if (Array.isArray(C) && C[0] && typeof C[0] == "object") S = C[0];
        else if (
          C &&
          typeof C == "object" &&
          "signedMessage" in C &&
          "signature" in C
        )
          S = C;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in S &&
          "signature" in S &&
          (typeof S.signedMessage == "string" ||
            S.signedMessage instanceof Uint8Array) &&
          S.signature instanceof Uint8Array
        )
          ((f =
            typeof S.signedMessage == "string"
              ? S.signedMessage
              : new TextDecoder().decode(S.signedMessage)),
            (m = S.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in x) ||
          typeof x.signMessage != "function" ||
          !("publicKey" in x) ||
          typeof x != "object" ||
          !x.publicKey ||
          !("toBase58" in x.publicKey) ||
          typeof x.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        f = [
          `${E.host} wants you to sign in with your Solana account:`,
          x.publicKey.toBase58(),
          ...(_ ? ["", _, ""] : [""]),
          "Version: 1",
          `URI: ${E.href}`,
          `Issued At: ${(s = (r = w == null ? void 0 : w.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (a = w == null ? void 0 : w.signInWithSolana) === null ||
            a === void 0
          ) && a.notBefore
            ? [`Not Before: ${w.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = w == null ? void 0 : w.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${w.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (i = w == null ? void 0 : w.signInWithSolana) === null ||
            i === void 0
          ) && i.chainId
            ? [`Chain ID: ${w.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (c = w == null ? void 0 : w.signInWithSolana) === null ||
            c === void 0
          ) && c.nonce
            ? [`Nonce: ${w.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (l = w == null ? void 0 : w.signInWithSolana) === null ||
            l === void 0
          ) && l.requestId
            ? [`Request ID: ${w.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (u =
              (d = w == null ? void 0 : w.signInWithSolana) === null ||
              d === void 0
                ? void 0
                : d.resources) === null || u === void 0
          ) && u.length
            ? [
                "Resources",
                ...w.signInWithSolana.resources.map((S) => `- ${S}`),
              ]
            : []),
        ].join(`
`);
        const C = await x.signMessage(new TextEncoder().encode(f), "utf8");
        if (!C || !(C instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        m = C;
      }
    }
    try {
      const { data: g, error: b } = await L(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: f, signature: vt(m) },
            !((h = e.options) === null || h === void 0) && h.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (p = e.options) === null || p === void 0
                        ? void 0
                        : p.captchaToken,
                  },
                }
              : null,
          ),
          xform: xe,
        },
      );
      if (b) throw b;
      if (!g || !g.session || !g.user) {
        const _ = new Tt();
        return this._returnResult({
          data: { user: null, session: null },
          error: _,
        });
      }
      return (
        g.session &&
          (await this._saveSession(g.session),
          await this._notifyAllSubscribers("SIGNED_IN", g.session)),
        this._returnResult({ data: Object.assign({}, g), error: b })
      );
    } catch (g) {
      if (I(g))
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      throw g;
    }
  }
  async _exchangeCodeForSession(e) {
    const n = await pt(this.storage, `${this.storageKey}-code-verifier`),
      [r, s] = (n ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") throw new Wm();
      const { data: a, error: o } = await L(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: r },
          xform: xe,
        },
      );
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!a || !a.session || !a.user) {
        const i = new Tt();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      }
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", a.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, a), {
            redirectType: s ?? null,
          }),
          error: o,
        })
      );
    } catch (a) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(a)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      throw a;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
          options: n,
          provider: r,
          token: s,
          access_token: a,
          nonce: o,
        } = e,
        i = await L(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: s,
              access_token: a,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: xe,
          },
        ),
        { data: c, error: l } = i;
      if (l)
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      if (!c || !c.session || !c.user) {
        const d = new Tt();
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      return (
        c.session &&
          (await this._saveSession(c.session),
          await this._notifyAllSubscribers("SIGNED_IN", c.session)),
        this._returnResult({ data: c, error: l })
      );
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOtp(e) {
    var n, r, s, a, o;
    try {
      if ("email" in e) {
        const { email: i, options: c } = e;
        let l = null,
          d = null;
        this.flowType === "pkce" &&
          ([l, d] = await Pt(this.storage, this.storageKey));
        const { error: u } = await L(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: i,
            data:
              (n = c == null ? void 0 : c.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = c == null ? void 0 : c.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: c == null ? void 0 : c.captchaToken,
            },
            code_challenge: l,
            code_challenge_method: d,
          },
          redirectTo: c == null ? void 0 : c.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      }
      if ("phone" in e) {
        const { phone: i, options: c } = e,
          { data: l, error: d } = await L(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: i,
                data:
                  (s = c == null ? void 0 : c.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (a = c == null ? void 0 : c.shouldCreateUser) !== null &&
                  a !== void 0
                    ? a
                    : !0,
                gotrue_meta_security: {
                  captcha_token: c == null ? void 0 : c.captchaToken,
                },
                channel:
                  (o = c == null ? void 0 : c.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: l == null ? void 0 : l.message_id,
          },
          error: d,
        });
      }
      throw new tr("You must provide either an email or phone number.");
    } catch (i) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async verifyOtp(e) {
    var n, r;
    try {
      let s, a;
      "options" in e &&
        ((s = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (a =
          (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: o, error: i } = await L(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: a },
          }),
          redirectTo: s,
          xform: xe,
        },
      );
      if (i) throw i;
      if (!o) throw new Error("An error occurred on token verification.");
      const c = o.session,
        l = o.user;
      return (
        c != null &&
          c.access_token &&
          (await this._saveSession(c),
          await this._notifyAllSubscribers(
            e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            c,
          )),
        this._returnResult({ data: { user: l, session: c }, error: null })
      );
    } catch (s) {
      if (I(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(e) {
    var n, r, s, a, o;
    try {
      let i = null,
        c = null;
      this.flowType === "pkce" &&
        ([i, c] = await Pt(this.storage, this.storageKey));
      const l = await L(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in e ? { provider_id: e.providerId } : null,
                ),
                "domain" in e ? { domain: e.domain } : null,
              ),
              {
                redirect_to:
                  (r =
                    (n = e.options) === null || n === void 0
                      ? void 0
                      : n.redirectTo) !== null && r !== void 0
                    ? r
                    : void 0,
              },
            ),
            !((s = e == null ? void 0 : e.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: e.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: i,
            code_challenge_method: c,
          },
        ),
        headers: this.headers,
        xform: yg,
      });
      return (
        !((a = l.data) === null || a === void 0) &&
          a.url &&
          se() &&
          !(
            !((o = e.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(l.data.url),
        this._returnResult(l)
      );
    } catch (i) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate(),
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        if (r) throw r;
        if (!n) throw new he();
        const { error: s } = await L(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (e) {
      if (I(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    try {
      const n = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: s, options: a } = e,
          { error: o } = await L(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              email: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            redirectTo: a == null ? void 0 : a.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in e) {
        const { phone: r, type: s, options: a } = e,
          { data: o, error: i } = await L(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              phone: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: i,
        });
      }
      throw new tr(
        "You must provide either an email or phone number and a type",
      );
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (n) => n),
      )
    );
  }
  async _acquireLock(e, n) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })(),
            ),
              await r;
            this.pendingInLock.length;
          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await r;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await e(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let e = null;
      const n = await pt(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (e = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < ss : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          e.expires_at,
        ),
        !r)
      ) {
        if (this.userStorage) {
          const o = await pt(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (e.user = o.user) : (e.user = is());
        }
        if (
          this.storage.isServer &&
          e.user &&
          !e.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          ((e.user = fg(e.user, o)),
            o.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: e }, error: null };
      }
      const { data: s, error: a } = await this._callRefreshToken(
        e.refresh_token,
      );
      return a
        ? this._returnResult({ data: { session: null }, error: a })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) return await this._getUser(e);
    await this.initializePromise;
    const n = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (n.data.user && (this.suppressGetSessionWarning = !0), n);
  }
  async _getUser(e) {
    try {
      return e
        ? await L(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: et,
          })
        : await this._useSession(async (n) => {
            var r, s, a;
            const { data: o, error: i } = n;
            if (i) throw i;
            return !(
              !((r = o.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new he() }
              : await L(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (a =
                      (s = o.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && a !== void 0
                      ? a
                      : void 0,
                  xform: et,
                });
          });
    } catch (n) {
      if (I(n))
        return (
          as(n) &&
            (await this._removeSession(),
            await re(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: n })
        );
      throw n;
    }
  }
  async updateUser(e, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(e, n),
      )
    );
  }
  async _updateUser(e, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: s, error: a } = r;
        if (a) throw a;
        if (!s.session) throw new he();
        const o = s.session;
        let i = null,
          c = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([i, c] = await Pt(this.storage, this.storageKey));
        const { data: l, error: d } = await L(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, e), {
              code_challenge: i,
              code_challenge_method: c,
            }),
            jwt: o.access_token,
            xform: et,
          },
        );
        if (d) throw d;
        return (
          (o.user = l.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (r) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(r)))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  async setSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(e),
      )
    );
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) throw new he();
      const n = Date.now() / 1e3;
      let r = n,
        s = !0,
        a = null;
      const { payload: o } = rr(e.access_token);
      if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
        const { data: i, error: c } = await this._callRefreshToken(
          e.refresh_token,
        );
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        if (!i) return { data: { user: null, session: null }, error: null };
        a = i;
      } else {
        const { data: i, error: c } = await this._getUser(e.access_token);
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        ((a = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: i.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(a),
          await this._notifyAllSubscribers("SIGNED_IN", a));
      }
      return this._returnResult({
        data: { user: a.user, session: a },
        error: null,
      });
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    }
  }
  async refreshSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(e),
      )
    );
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!e) {
          const { data: o, error: i } = n;
          if (i) throw i;
          e = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new he();
        const { data: s, error: a } = await this._callRefreshToken(
          e.refresh_token,
        );
        return a
          ? this._returnResult({
              data: { user: null, session: null },
              error: a,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async _getSessionFromURL(e, n) {
    try {
      if (!se()) throw new nr("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new nr(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          },
        );
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Eo("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new nr("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new Eo("No code detected.");
        const { data: _, error: w } = await this._exchangeCodeForSession(
          e.code,
        );
        if (w) throw w;
        const x = new URL(window.location.href);
        return (
          x.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", x.toString()),
          { data: { session: _.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: s,
        access_token: a,
        refresh_token: o,
        expires_in: i,
        expires_at: c,
        token_type: l,
      } = e;
      if (!a || !i || !o || !l) throw new nr("No session defined in URL");
      const d = Math.round(Date.now() / 1e3),
        u = parseInt(i);
      let h = d + u;
      c && (h = parseInt(c));
      const p = h - d;
      p * 1e3 <= Nt &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${u}s`,
        );
      const f = h - u;
      d - f >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            f,
            h,
            d,
          )
        : d - f < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            f,
            h,
            d,
          );
      const { data: m, error: g } = await this._getUser(a);
      if (g) throw g;
      const b = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: a,
        expires_in: u,
        expires_at: h,
        refresh_token: o,
        token_type: l,
        user: m.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: b, redirectType: e.type },
          error: null,
        })
      );
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: r,
        });
      throw r;
    }
  }
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), e)
      : !!(e.access_token || e.error_description);
  }
  async _isPKCECallback(e) {
    const n = await pt(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && n);
  }
  async signOut(e = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(e),
      )
    );
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: s, error: a } = n;
      if (a && !as(a)) return this._returnResult({ error: a });
      const o =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: i } = await this.admin.signOut(o, e);
        if (
          i &&
          !(
            (Hm(i) &&
              (i.status === 404 || i.status === 401 || i.status === 403)) ||
            as(i)
          )
        )
          return this._returnResult({ error: i });
      }
      return (
        e !== "others" &&
          (await this._removeSession(),
          await re(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const n = eg(),
      r = {
        id: n,
        callback: e,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n,
          ),
            this.stateChangeEmitters.delete(n));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (n) => {
      var r, s;
      try {
        const {
          data: { session: a },
          error: o,
        } = n;
        if (o) throw o;
        (await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", a)),
          this._debug("INITIAL_SESSION", "callback id", e, "session", a));
      } catch (a) {
        (await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", e, "error", a),
          console.error(a));
      }
    });
  }
  async resetPasswordForEmail(e, n = {}) {
    let r = null,
      s = null;
    this.flowType === "pkce" &&
      ([r, s] = await Pt(this.storage, this.storageKey, !0));
    try {
      return await L(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (a) {
      if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (e = n.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var n;
    try {
      const { data: r, error: s } = await this._useSession(async (a) => {
        var o, i, c, l, d;
        const { data: u, error: h } = a;
        if (h) throw h;
        const p = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (i = e.options) === null || i === void 0 ? void 0 : i.scopes,
            queryParams:
              (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await L(this.fetch, "GET", p, {
          headers: this.headers,
          jwt:
            (d =
              (l = u.session) === null || l === void 0
                ? void 0
                : l.access_token) !== null && d !== void 0
              ? d
              : void 0,
        });
      });
      if (s) throw s;
      return (
        se() &&
          !(
            !((n = e.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        this._returnResult({
          data: { provider: e.provider, url: r == null ? void 0 : r.url },
          error: null,
        })
      );
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { provider: e.provider, url: null },
          error: r,
        });
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (n) => {
      var r;
      try {
        const {
          error: s,
          data: { session: a },
        } = n;
        if (s) throw s;
        const {
            options: o,
            provider: i,
            token: c,
            access_token: l,
            nonce: d,
          } = e,
          u = await L(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = a == null ? void 0 : a.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: i,
                id_token: c,
                access_token: l,
                nonce: d,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: xe,
            },
          ),
          { data: h, error: p } = u;
        return p
          ? this._returnResult({
              data: { user: null, session: null },
              error: p,
            })
          : !h || !h.session || !h.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Tt(),
              })
            : (h.session &&
                (await this._saveSession(h.session),
                await this._notifyAllSubscribers("USER_UPDATED", h.session)),
              this._returnResult({ data: h, error: p }));
      } catch (s) {
        if ((await re(this.storage, `${this.storageKey}-code-verifier`), I(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: a, error: o } = n;
        if (o) throw o;
        return await L(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (r = a.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _refreshAccessToken(e) {
    const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await sg(
        async (s) => (
          s > 0 && (await rg(200 * Math.pow(2, s - 1))),
          this._debug(n, "refreshing attempt", s),
          await L(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: xe },
          )
        ),
        (s, a) => {
          const o = 200 * Math.pow(2, s);
          return a && os(a) && Date.now() + o - r < Nt;
        },
      );
    } catch (r) {
      if ((this._debug(n, "error", r), I(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  async _handleProviderSignIn(e, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        n,
        "url",
        r,
      ),
      se() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: e, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const s = await pt(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await pt(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: s.user }),
          await $t(this.userStorage, this.storageKey + "-user", o)),
          (s.user =
            (e = o == null ? void 0 : o.user) !== null && e !== void 0
              ? e
              : is()));
      } else if (s && !s.user && !s.user) {
        const o = await pt(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((s.user = o.user),
            await re(this.storage, this.storageKey + "-user"),
            await $t(this.storage, this.storageKey, s))
          : (s.user = is());
      }
      if (
        (this._debug(r, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(r, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const a =
        ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 -
          Date.now() <
        ss;
      if (
        (this._debug(
          r,
          `session has${a ? "" : " not"} expired with margin of ${ss}s`,
        ),
        a)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o &&
            (console.error(o),
            os(o) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                o,
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: i } = await this._getUser(s.access_token);
          !i && o != null && o.user
            ? ((s.user = o.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (o) {
          (console.error("Error getting user data:", o),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              o,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(r, "error", s), console.error(s));
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var n, r;
    if (!e) throw new he();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Ur();
      const { data: a, error: o } = await this._refreshAccessToken(e);
      if (o) throw o;
      if (!a.session) throw new he();
      (await this._saveSession(a.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", a.session));
      const i = { data: a.session, error: null };
      return (this.refreshingDeferred.resolve(i), i);
    } catch (a) {
      if ((this._debug(s, "error", a), I(a))) {
        const o = { data: null, error: a };
        return (
          os(a) || (await this._removeSession()),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(o),
          o
        );
      }
      throw (
        (r = this.refreshingDeferred) === null || r === void 0 || r.reject(a),
        a
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(e, n, r = !0) {
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: e, session: n });
      const a = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (i) => {
          try {
            await i.callback(e, n);
          } catch (c) {
            a.push(c);
          }
        });
      if ((await Promise.all(o), a.length > 0)) {
        for (let i = 0; i < a.length; i += 1) console.error(a[i]);
        throw a[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(e) {
    (this._debug("#_saveSession()", e),
      (this.suppressGetSessionWarning = !0),
      await re(this.storage, `${this.storageKey}-code-verifier`));
    const n = Object.assign({}, e),
      r = n.user && n.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        n.user &&
        (await $t(this.userStorage, this.storageKey + "-user", {
          user: n.user,
        }));
      const s = Object.assign({}, n);
      delete s.user;
      const a = Oo(s);
      await $t(this.storage, this.storageKey, a);
    } else {
      const s = Oo(n);
      await $t(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await re(this.storage, this.storageKey),
      await re(this.storage, this.storageKey + "-code-verifier"),
      await re(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await re(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        se() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const e = setInterval(() => this._autoRefreshTokenTick(), Nt);
    ((this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e));
    const n = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = n),
      n && typeof n == "object" && typeof n.unref == "function"
        ? n.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(n));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), e && clearInterval(e));
    const n = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), n && clearTimeout(n));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((r.expires_at * 1e3 - e) / Nt);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${Nt}ms, refresh threshold is ${qs} ticks`,
              ),
                s <= qs && (await this._callRefreshToken(r.refresh_token)));
            });
          } catch (n) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              n,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof ul)
        this._debug("auto refresh token tick lock not available");
      else throw e;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !se() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const n = `#_onVisibilityChanged(${e})`;
    (this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          e ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  n,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(e, n, r) {
    const s = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [a, o] = await Pt(this.storage, this.storageKey),
        i = new URLSearchParams({
          code_challenge: `${encodeURIComponent(a)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(i.toString());
    }
    if (r != null && r.queryParams) {
      const a = new URLSearchParams(r.queryParams);
      s.push(a.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${e}?${s.join("&")}`
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: a } = n;
        return a
          ? this._returnResult({ data: null, error: a })
          : await L(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: a, error: o } = n;
        if (o) return this._returnResult({ data: null, error: o });
        const i = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
                ? { issuer: e.issuer }
                : {},
          ),
          { data: c, error: l } = await L(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: i,
              headers: this.headers,
              jwt:
                (r = a == null ? void 0 : a.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
        return l
          ? this._returnResult({ data: null, error: l })
          : (e.factorType === "totp" &&
              c.type === "totp" &&
              !((s = c == null ? void 0 : c.totp) === null || s === void 0) &&
              s.qr_code &&
              (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
            this._returnResult({ data: c, error: null }));
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: a } = n;
          if (a) return this._returnResult({ data: null, error: a });
          const o = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? Lg(e.webauthn.credential_response)
                          : jg(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code },
            ),
            { data: i, error: c } = await L(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (r = s == null ? void 0 : s.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
          return c
            ? this._returnResult({ data: null, error: c })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + i.expires_in },
                  i,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i),
              this._returnResult({ data: i, error: c }));
        });
      } catch (n) {
        if (I(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: a } = n;
          if (a) return this._returnResult({ data: null, error: a });
          const o = await L(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
          if (o.error) return o;
          const { data: i } = o;
          if (i.type !== "webauthn") return { data: i, error: null };
          switch (i.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, i), {
                  webauthn: Object.assign(Object.assign({}, i.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, i.webauthn.credential_options),
                      {
                        publicKey: kg(i.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, i), {
                  webauthn: Object.assign(Object.assign({}, i.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, i.webauthn.credential_options),
                      {
                        publicKey: Dg(i.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (n) {
        if (I(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challengeAndVerify(e) {
    const { data: n, error: r } = await this._challenge({
      factorId: e.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: e.factorId,
          challengeId: n.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: n },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const a of (e = n == null ? void 0 : n.factors) !== null &&
    e !== void 0
      ? e
      : [])
      (s.all.push(a), a.status === "verified" && s[a.factor_type].push(a));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var n, r, s, a;
    if (e)
      try {
        const { payload: p } = rr(e);
        let f = null;
        p.aal && (f = p.aal);
        let m = f;
        const {
          data: { user: g },
          error: b,
        } = await this.getUser(e);
        if (b) return this._returnResult({ data: null, error: b });
        ((r =
          (n = g == null ? void 0 : g.factors) === null || n === void 0
            ? void 0
            : n.filter((x) => x.status === "verified")) !== null && r !== void 0
          ? r
          : []
        ).length > 0 && (m = "aal2");
        const w = p.amr || [];
        return {
          data: {
            currentLevel: f,
            nextLevel: m,
            currentAuthenticationMethods: w,
          },
          error: null,
        };
      } catch (p) {
        if (I(p)) return this._returnResult({ data: null, error: p });
        throw p;
      }
    const {
      data: { session: o },
      error: i,
    } = await this.getSession();
    if (i) return this._returnResult({ data: null, error: i });
    if (!o)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: c } = rr(o.access_token);
    let l = null;
    c.aal && (l = c.aal);
    let d = l;
    ((a =
      (s = o.user.factors) === null || s === void 0
        ? void 0
        : s.filter((p) => p.status === "verified")) !== null && a !== void 0
      ? a
      : []
    ).length > 0 && (d = "aal2");
    const h = c.amr || [];
    return {
      data: { currentLevel: l, nextLevel: d, currentAuthenticationMethods: h },
      error: null,
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? await L(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${e}`,
                {
                  headers: this.headers,
                  jwt: r.access_token,
                  xform: (a) => ({ data: a, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new he() });
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _approveAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: a,
        } = r;
        if (a) return this._returnResult({ data: null, error: a });
        if (!s) return this._returnResult({ data: null, error: new he() });
        const o = await L(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (i) => ({ data: i, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            se() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: a,
        } = r;
        if (a) return this._returnResult({ data: null, error: a });
        if (!s) return this._returnResult({ data: null, error: new he() });
        const o = await L(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (i) => ({ data: i, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            se() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        return r
          ? this._returnResult({ data: null, error: r })
          : n
            ? await L(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new he() });
      });
    } catch (e) {
      if (I(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? (await L(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                query: { client_id: e.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new he() });
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async fetchJwk(e, n = { keys: [] }) {
    let r = n.keys.find((i) => i.kid === e);
    if (r) return r;
    const s = Date.now();
    if (
      ((r = this.jwks.keys.find((i) => i.kid === e)),
      r && this.jwks_cached_at + Vm > s)
    )
      return r;
    const { data: a, error: o } = await L(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (o) throw o;
    return !a.keys ||
      a.keys.length === 0 ||
      ((this.jwks = a),
      (this.jwks_cached_at = s),
      (r = a.keys.find((i) => i.kid === e)),
      !r)
      ? null
      : r;
  }
  async getClaims(e, n = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: p, error: f } = await this.getSession();
        if (f || !p.session)
          return this._returnResult({ data: null, error: f });
        r = p.session.access_token;
      }
      const {
        header: s,
        payload: a,
        signature: o,
        raw: { header: i, payload: c },
      } = rr(r);
      (n != null && n.allowExpired) || ug(a.exp);
      const l =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              n != null && n.keys
                ? { keys: n.keys }
                : n == null
                  ? void 0
                  : n.jwks,
            );
      if (!l) {
        const { error: p } = await this.getUser(r);
        if (p) throw p;
        return { data: { claims: a, header: s, signature: o }, error: null };
      }
      const d = pg(s.alg),
        u = await crypto.subtle.importKey("jwk", l, d, !0, ["verify"]);
      if (!(await crypto.subtle.verify(d, u, o, Xm(`${i}.${c}`))))
        throw new Hs("Invalid JWT signature");
      return { data: { claims: a, header: s, signature: o }, error: null };
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
jn.nextInstanceID = {};
const zg = jn,
  Hg = "2.99.2";
let yn = "";
typeof Deno < "u"
  ? (yn = "deno")
  : typeof document < "u"
    ? (yn = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (yn = "react-native")
      : (yn = "node");
const Gg = { "X-Client-Info": `supabase-js-${yn}/${Hg}` },
  Wg = { headers: Gg },
  Kg = { schema: "public" },
  Jg = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  Yg = {};
function Nn(t) {
  "@babel/helpers - typeof";
  return (
    (Nn =
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
    Nn(t)
  );
}
function Qg(t, e) {
  if (Nn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Xg(t) {
  var e = Qg(t, "string");
  return Nn(e) == "symbol" ? e : e + "";
}
function Zg(t, e, n) {
  return (
    (e = Xg(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function jo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? jo(Object(n), !0).forEach(function (r) {
          Zg(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : jo(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
const ev = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  tv = () => Headers,
  nv = (t, e, n) => {
    const r = ev(n),
      s = tv();
    return async (a, o) => {
      var i;
      const c = (i = await e()) !== null && i !== void 0 ? i : t;
      let l = new s(o == null ? void 0 : o.headers);
      return (
        l.has("apikey") || l.set("apikey", t),
        l.has("Authorization") || l.set("Authorization", `Bearer ${c}`),
        r(a, X(X({}, o), {}, { headers: l }))
      );
    };
  };
function rv(t) {
  return t.endsWith("/") ? t : t + "/";
}
function sv(t, e) {
  var n, r;
  const { db: s, auth: a, realtime: o, global: i } = t,
    { db: c, auth: l, realtime: d, global: u } = e,
    h = {
      db: X(X({}, c), s),
      auth: X(X({}, l), a),
      realtime: X(X({}, d), o),
      storage: {},
      global: X(
        X(X({}, u), i),
        {},
        {
          headers: X(
            X(
              {},
              (n = u == null ? void 0 : u.headers) !== null && n !== void 0
                ? n
                : {},
            ),
            (r = i == null ? void 0 : i.headers) !== null && r !== void 0
              ? r
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    t.accessToken ? (h.accessToken = t.accessToken) : delete h.accessToken,
    h
  );
}
function av(t) {
  const e = t == null ? void 0 : t.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(rv(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var ov = class extends zg {
    constructor(t) {
      super(t);
    }
  },
  iv = class {
    constructor(t, e, n) {
      var r, s;
      ((this.supabaseUrl = t), (this.supabaseKey = e));
      const a = av(t);
      if (!e) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", a)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", a)),
        (this.storageUrl = new URL("storage/v1", a)),
        (this.functionsUrl = new URL("functions/v1", a)));
      const o = `sb-${a.hostname.split(".")[0]}-auth-token`,
        i = {
          db: Kg,
          realtime: Yg,
          auth: X(X({}, Jg), {}, { storageKey: o }),
          global: Wg,
        },
        c = sv(n ?? {}, i);
      if (
        ((this.storageKey =
          (r = c.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (s = c.global.headers) !== null && s !== void 0 ? s : {}),
        c.accessToken)
      )
        ((this.accessToken = c.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (d, u) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`,
                );
              },
            },
          )));
      else {
        var l;
        this.auth = this._initSupabaseAuthClient(
          (l = c.auth) !== null && l !== void 0 ? l : {},
          this.headers,
          c.global.fetch,
        );
      }
      ((this.fetch = nv(e, this._getAccessToken.bind(this), c.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          X(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            c.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((d) => this.realtime.setAuth(d))
            .catch((d) =>
              console.warn("Failed to set initial Realtime auth token:", d),
            ),
        (this.rest = new Hf(new URL("rest/v1", a).href, {
          headers: this.headers,
          schema: c.db.schema,
          fetch: this.fetch,
          timeout: c.db.timeout,
          urlLengthLimit: c.db.urlLengthLimit,
        })),
        (this.storage = new Mm(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n == null ? void 0 : n.storage,
        )),
        c.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new $f(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(t) {
      return this.rest.from(t);
    }
    schema(t) {
      return this.rest.schema(t);
    }
    rpc(t, e = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(t, e, n);
    }
    channel(t, e = { config: {} }) {
      return this.realtime.channel(t, e);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(t) {
      return this.realtime.removeChannel(t);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var t = this,
        e,
        n;
      if (t.accessToken) return await t.accessToken();
      const { data: r } = await t.auth.getSession();
      return (e =
        (n = r.session) === null || n === void 0 ? void 0 : n.access_token) !==
        null && e !== void 0
        ? e
        : t.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        storageKey: a,
        flowType: o,
        lock: i,
        debug: c,
        throwOnError: l,
      },
      d,
      u,
    ) {
      const h = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new ov({
        url: this.authUrl.href,
        headers: X(X({}, h), d),
        storageKey: a,
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        flowType: o,
        lock: i,
        debug: c,
        throwOnError: l,
        fetch: u,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (p) => p.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(t) {
      return new cm(
        this.realtimeUrl.href,
        X(
          X({}, t),
          {},
          {
            params: X(
              X({}, { apikey: this.supabaseKey }),
              t == null ? void 0 : t.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t, e) => {
        this._handleTokenChanged(
          t,
          "CLIENT",
          e == null ? void 0 : e.access_token,
        );
      });
    }
    _handleTokenChanged(t, e, n) {
      (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : t === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const cv = (t, e, n) => new iv(t, e, n);
function lv() {
  if (typeof window < "u") return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const n = e.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 18 : !1;
}
lv() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
const dv = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "development",
    PROD: !0,
    SSR: !1,
    VITE_GEMINI_API_KEY: "yAIzaSyAJxe178zJjW9Ykt3yJvVQ4ZMIEQrv6Efc",
    VITE_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrenBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4",
    VITE_SUPABASE_URL: "https://jmekjpytugnetkzphxno.supabase.co",
  },
  No = (t, e = !0) => {
    const n = dv[t];
    return (
      n ||
      (e && console.error(`Missing required environment variable: ${t}`), "")
    );
  },
  uv = {
    supabase: {
      url: No("VITE_SUPABASE_URL"),
      anonKey: No("VITE_SUPABASE_ANON_KEY"),
    },
    gemini: { apiKey: "yAIzaSyAJxe178zJjW9Ykt3yJvVQ4ZMIEQrv6Efc" },
    isDev: !1,
    isProd: !0,
  },
  { url: Gs, anonKey: fl } = uv.supabase;
(!Gs || !fl || Gs === "COLE_SUA_URL_AQUI") &&
  console.warn(
    "Supabase URL ou Anon Key não configurados no arquivo .env.local",
  );
const ls = cv(Gs || "", fl || "", {
    auth: {
      detectSessionInUrl: !0,
      flowType: "pkce",
      persistSession: !0,
      autoRefreshToken: !0,
    },
  }),
  ml = v.createContext({
    session: null,
    user: null,
    loading: !0,
    signOut: async () => {},
    isDemoMode: !1,
  }),
  pv = ({ children: t }) => {
    const [e, n] = v.useState(null),
      [r, s] = v.useState(null),
      [a, o] = v.useState(!0),
      [i, c] = v.useState(!1);
    v.useEffect(() => {
      if (window.location.pathname === "/auth/callback") {
        o(!1);
        return;
      }
      (async () => {
        try {
          const {
            data: { session: p },
            error: f,
          } = await ls.auth.getSession();
          if (f) throw f;
          (n(p), s((p == null ? void 0 : p.user) ?? null));
        } catch (p) {
          (console.error("Erro ao inicializar sessão:", p), c(!0));
          const f = {
            id: "demo-user-id",
            email: "demo@superrelatorios.com",
            aud: "authenticated",
            created_at: new Date().toISOString(),
            user_metadata: { name: "Demo User" },
            app_metadata: {},
            phone: "",
            confirmed_at: new Date().toISOString(),
            email_confirmed_at: new Date().toISOString(),
            identities: [],
            factors: null,
            last_sign_in_at: new Date().toISOString(),
            role: "authenticated",
            updated_at: new Date().toISOString(),
          };
          s(f);
        } finally {
          o(!1);
        }
      })();
      const {
        data: { subscription: h },
      } = ls.auth.onAuthStateChange((p, f) => {
        (n(f), s((f == null ? void 0 : f.user) ?? null));
      });
      return () => h.unsubscribe();
    }, []);
    const l = async () => {
      if (i) {
        (s(null), n(null));
        return;
      }
      try {
        await ls.auth.signOut();
      } catch (d) {
        console.error("Erro ao fazer signOut:", d);
      }
    };
    return y.jsx(ml.Provider, {
      "data-lov-id": "src\\contexts\\AuthContext.tsx:127:4",
      "data-lov-name": "AuthContext.Provider",
      "data-component-path": "src\\contexts\\AuthContext.tsx",
      "data-component-line": "127",
      "data-component-file": "AuthContext.tsx",
      "data-component-name": "AuthContext.Provider",
      "data-component-content": "%7B%7D",
      value: { session: e, user: r, loading: a, signOut: l, isDemoMode: i },
      children: t,
    });
  },
  hv = () => {
    const t = v.useContext(ml);
    if (!t) throw new Error("useAuth must be used within an AuthProvider");
    return t;
  },
  B = (t) => typeof t == "string",
  fn = () => {
    let t, e;
    const n = new Promise((r, s) => {
      ((t = r), (e = s));
    });
    return ((n.resolve = t), (n.reject = e), n);
  },
  $o = (t) => (t == null ? "" : "" + t),
  fv = (t, e, n) => {
    t.forEach((r) => {
      e[r] && (n[r] = e[r]);
    });
  },
  mv = /###/g,
  Mo = (t) => (t && t.indexOf("###") > -1 ? t.replace(mv, ".") : t),
  Bo = (t) => !t || B(t),
  xn = (t, e, n) => {
    const r = B(e) ? e.split(".") : e;
    let s = 0;
    for (; s < r.length - 1; ) {
      if (Bo(t)) return {};
      const a = Mo(r[s]);
      (!t[a] && n && (t[a] = new n()),
        Object.prototype.hasOwnProperty.call(t, a) ? (t = t[a]) : (t = {}),
        ++s);
    }
    return Bo(t) ? {} : { obj: t, k: Mo(r[s]) };
  },
  Fo = (t, e, n) => {
    const { obj: r, k: s } = xn(t, e, Object);
    if (r !== void 0 || e.length === 1) {
      r[s] = n;
      return;
    }
    let a = e[e.length - 1],
      o = e.slice(0, e.length - 1),
      i = xn(t, o, Object);
    for (; i.obj === void 0 && o.length; )
      ((a = `${o[o.length - 1]}.${a}`),
        (o = o.slice(0, o.length - 1)),
        (i = xn(t, o, Object)),
        i != null &&
          i.obj &&
          typeof i.obj[`${i.k}.${a}`] < "u" &&
          (i.obj = void 0));
    i.obj[`${i.k}.${a}`] = n;
  },
  gv = (t, e, n, r) => {
    const { obj: s, k: a } = xn(t, e, Object);
    ((s[a] = s[a] || []), s[a].push(n));
  },
  wr = (t, e) => {
    const { obj: n, k: r } = xn(t, e);
    if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
  },
  vv = (t, e, n) => {
    const r = wr(t, n);
    return r !== void 0 ? r : wr(e, n);
  },
  gl = (t, e, n) => {
    for (const r in e)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in t
          ? B(t[r]) ||
            t[r] instanceof String ||
            B(e[r]) ||
            e[r] instanceof String
            ? n && (t[r] = e[r])
            : gl(t[r], e[r], n)
          : (t[r] = e[r]));
    return t;
  },
  ht = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var yv = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const bv = (t) => (B(t) ? t.replace(/[&<>"'\/]/g, (e) => yv[e]) : t);
class _v {
  constructor(e) {
    ((this.capacity = e),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0) return n;
    const r = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, r),
      this.regExpQueue.push(e),
      r
    );
  }
}
const wv = [" ", ",", "?", "!", ";"],
  xv = new _v(20),
  Ev = (t, e, n) => {
    ((e = e || ""), (n = n || ""));
    const r = wv.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
    if (r.length === 0) return !0;
    const s = xv.getRegExp(
      `(${r.map((o) => (o === "?" ? "\\?" : o)).join("|")})`,
    );
    let a = !s.test(t);
    if (!a) {
      const o = t.indexOf(n);
      o > 0 && !s.test(t.substring(0, o)) && (a = !0);
    }
    return a;
  },
  Ws = (t, e, n = ".") => {
    if (!t) return;
    if (t[e]) return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
    const r = e.split(n);
    let s = t;
    for (let a = 0; a < r.length; ) {
      if (!s || typeof s != "object") return;
      let o,
        i = "";
      for (let c = a; c < r.length; ++c)
        if ((c !== a && (i += n), (i += r[c]), (o = s[i]), o !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof o) > -1 &&
            c < r.length - 1
          )
            continue;
          a += c - a + 1;
          break;
        }
      s = o;
    }
    return s;
  },
  $n = (t) => (t == null ? void 0 : t.replace(/_/g, "-")),
  Sv = {
    type: "logger",
    log(t) {
      this.output("log", t);
    },
    warn(t) {
      this.output("warn", t);
    },
    error(t) {
      this.output("error", t);
    },
    output(t, e) {
      var n, r;
      (r =
        (n = console == null ? void 0 : console[t]) == null
          ? void 0
          : n.apply) == null || r.call(n, console, e);
    },
  };
class xr {
  constructor(e, n = {}) {
    this.init(e, n);
  }
  init(e, n = {}) {
    ((this.prefix = n.prefix || "i18next:"),
      (this.logger = e || Sv),
      (this.options = n),
      (this.debug = n.debug));
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, r, s) {
    return s && !this.debug
      ? null
      : (B(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new xr(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new xr(this.logger, e)
    );
  }
}
var Ne = new xr();
class qr {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return (
      e.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const s = this.observers[r].get(n) || 0;
        this.observers[r].set(n, s + 1);
      }),
      this
    );
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e, ...n) {
    (this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach(([s, a]) => {
        for (let o = 0; o < a; o++) s(...n);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([s, a]) => {
          for (let o = 0; o < a; o++) s.apply(s, [e, ...n]);
        }));
  }
}
class Uo extends qr {
  constructor(e, n = { ns: ["translation"], defaultNS: "translation" }) {
    (super(),
      (this.data = e || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, r, s = {}) {
    var l, d;
    const a =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      o =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let i;
    e.indexOf(".") > -1
      ? (i = e.split("."))
      : ((i = [e, n]),
        r &&
          (Array.isArray(r)
            ? i.push(...r)
            : B(r) && a
              ? i.push(...r.split(a))
              : i.push(r)));
    const c = wr(this.data, i);
    return (
      !c &&
        !n &&
        !r &&
        e.indexOf(".") > -1 &&
        ((e = i[0]), (n = i[1]), (r = i.slice(2).join("."))),
      c || !o || !B(r)
        ? c
        : Ws(
            (d = (l = this.data) == null ? void 0 : l[e]) == null
              ? void 0
              : d[n],
            r,
            a,
          )
    );
  }
  addResource(e, n, r, s, a = { silent: !1 }) {
    const o =
      a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let i = [e, n];
    (r && (i = i.concat(o ? r.split(o) : r)),
      e.indexOf(".") > -1 && ((i = e.split(".")), (s = n), (n = i[1])),
      this.addNamespaces(n),
      Fo(this.data, i, s),
      a.silent || this.emit("added", e, n, r, s));
  }
  addResources(e, n, r, s = { silent: !1 }) {
    for (const a in r)
      (B(r[a]) || Array.isArray(r[a])) &&
        this.addResource(e, n, a, r[a], { silent: !0 });
    s.silent || this.emit("added", e, n, r);
  }
  addResourceBundle(e, n, r, s, a, o = { silent: !1, skipCopy: !1 }) {
    let i = [e, n];
    (e.indexOf(".") > -1 && ((i = e.split(".")), (s = r), (r = n), (n = i[1])),
      this.addNamespaces(n));
    let c = wr(this.data, i) || {};
    (o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      s ? gl(c, r, a) : (c = { ...c, ...r }),
      Fo(this.data, i, c),
      o.silent || this.emit("added", e, n, r));
  }
  removeResourceBundle(e, n) {
    (this.hasResourceBundle(e, n) && delete this.data[e][n],
      this.removeNamespaces(n),
      this.emit("removed", e, n));
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return (n || (n = this.options.defaultNS), this.getResource(e, n));
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!((n && Object.keys(n)) || []).find(
      (s) => n[s] && Object.keys(n[s]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var vl = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, r, s) {
    return (
      t.forEach((a) => {
        var o;
        e =
          ((o = this.processors[a]) == null ? void 0 : o.process(e, n, r, s)) ??
          e;
      }),
      e
    );
  },
};
const yl = Symbol("i18next/PATH_KEY");
function Av() {
  const t = [],
    e = Object.create(null);
  let n;
  return (
    (e.get = (r, s) => {
      var a;
      return (
        (a = n == null ? void 0 : n.revoke) == null || a.call(n),
        s === yl ? t : (t.push(s), (n = Proxy.revocable(r, e)), n.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), e).proxy
  );
}
function En(t, e) {
  const { [yl]: n } = t(Av()),
    r = (e == null ? void 0 : e.keySeparator) ?? ".",
    s = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (n.length > 1 && s) {
    const a = e == null ? void 0 : e.ns;
    if ((a ? (Array.isArray(a) ? a : [a]) : []).includes(n[0]))
      return `${n[0]}${s}${n.slice(1).join(r)}`;
  }
  return n.join(r);
}
const qo = {},
  ds = (t) => !B(t) && typeof t != "boolean" && typeof t != "number";
class Er extends qr {
  constructor(e, n = {}) {
    (super(),
      fv(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Ne.create("translator")));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, n = { interpolation: {} }) {
    const r = { ...n };
    if (e == null) return !1;
    const s = this.resolve(e, r);
    if ((s == null ? void 0 : s.res) === void 0) return !1;
    const a = ds(s.res);
    return !(r.returnObjects === !1 && a);
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = n.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1,
      i =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !Ev(e, r, s);
    if (o && !i) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0) return { key: e, namespaces: B(a) ? [a] : a };
      const l = e.split(r);
      ((r !== s || (r === s && this.options.ns.indexOf(l[0]) > -1)) &&
        (a = l.shift()),
        (e = l.join(s)));
    }
    return { key: e, namespaces: B(a) ? [a] : a };
  }
  translate(e, n, r) {
    let s = typeof n == "object" ? { ...n } : n;
    if (
      (typeof s != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (s = this.options.overloadTranslationOptionHandler(arguments)),
      typeof s == "object" && (s = { ...s }),
      s || (s = {}),
      e == null)
    )
      return "";
    (typeof e == "function" && (e = En(e, { ...this.options, ...s })),
      Array.isArray(e) || (e = [String(e)]),
      (e = e.map((P) =>
        typeof P == "function" ? En(P, { ...this.options, ...s }) : String(P),
      )));
    const a =
        s.returnDetails !== void 0
          ? s.returnDetails
          : this.options.returnDetails,
      o =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      { key: i, namespaces: c } = this.extractFromKey(e[e.length - 1], s),
      l = c[c.length - 1];
    let d = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const u = s.lng || this.language,
      h = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode")
      return h
        ? a
          ? {
              res: `${l}${d}${i}`,
              usedKey: i,
              exactUsedKey: i,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(s),
            }
          : `${l}${d}${i}`
        : a
          ? {
              res: i,
              usedKey: i,
              exactUsedKey: i,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(s),
            }
          : i;
    const p = this.resolve(e, s);
    let f = p == null ? void 0 : p.res;
    const m = (p == null ? void 0 : p.usedKey) || i,
      g = (p == null ? void 0 : p.exactUsedKey) || i,
      b = ["[object Number]", "[object Function]", "[object RegExp]"],
      _ = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays,
      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
      x = s.count !== void 0 && !B(s.count),
      E = Er.hasDefaultValue(s),
      C = x ? this.pluralResolver.getSuffix(u, s.count, s) : "",
      S =
        s.ordinal && x
          ? this.pluralResolver.getSuffix(u, s.count, { ordinal: !1 })
          : "",
      D = x && !s.ordinal && s.count === 0,
      O =
        (D && s[`defaultValue${this.options.pluralSeparator}zero`]) ||
        s[`defaultValue${C}`] ||
        s[`defaultValue${S}`] ||
        s.defaultValue;
    let k = f;
    w && !f && E && (k = O);
    const V = ds(k),
      T = Object.prototype.toString.apply(k);
    if (w && k && V && b.indexOf(T) < 0 && !(B(_) && Array.isArray(k))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const P = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, k, { ...s, ns: c })
          : `key '${i} (${this.language})' returned an object instead of string.`;
        return a
          ? ((p.res = P), (p.usedParams = this.getUsedParamsDetails(s)), p)
          : P;
      }
      if (o) {
        const P = Array.isArray(k),
          R = P ? [] : {},
          $ = P ? g : m;
        for (const M in k)
          if (Object.prototype.hasOwnProperty.call(k, M)) {
            const U = `${$}${o}${M}`;
            (E && !f
              ? (R[M] = this.translate(U, {
                  ...s,
                  defaultValue: ds(O) ? O[M] : void 0,
                  joinArrays: !1,
                  ns: c,
                }))
              : (R[M] = this.translate(U, { ...s, joinArrays: !1, ns: c })),
              R[M] === U && (R[M] = k[M]));
          }
        f = R;
      }
    } else if (w && B(_) && Array.isArray(f))
      ((f = f.join(_)), f && (f = this.extendTranslation(f, e, s, r)));
    else {
      let P = !1,
        R = !1;
      (!this.isValidLookup(f) && E && ((P = !0), (f = O)),
        this.isValidLookup(f) || ((R = !0), (f = i)));
      const M =
          (s.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          R
            ? void 0
            : f,
        U = E && O !== f && this.options.updateMissing;
      if (R || P || U) {
        if (
          (this.logger.log(U ? "updateKey" : "missingKey", u, l, i, U ? O : f),
          o)
        ) {
          const W = this.resolve(i, { ...s, keySeparator: !1 });
          W &&
            W.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let j = [];
        const z = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          s.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && z && z[0])
          for (let W = 0; W < z.length; W++) j.push(z[W]);
        else
          this.options.saveMissingTo === "all"
            ? (j = this.languageUtils.toResolveHierarchy(
                s.lng || this.language,
              ))
            : j.push(s.lng || this.language);
        const ne = (W, pe, ye) => {
          var Vn;
          const lt = E && ye !== f ? ye : M;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(W, l, pe, lt, U, s)
            : (Vn = this.backendConnector) != null &&
              Vn.saveMissing &&
              this.backendConnector.saveMissing(W, l, pe, lt, U, s),
            this.emit("missingKey", W, l, pe, f));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && x
            ? j.forEach((W) => {
                const pe = this.pluralResolver.getSuffixes(W, s);
                (D &&
                  s[`defaultValue${this.options.pluralSeparator}zero`] &&
                  pe.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  pe.push(`${this.options.pluralSeparator}zero`),
                  pe.forEach((ye) => {
                    ne([W], i + ye, s[`defaultValue${ye}`] || O);
                  }));
              })
            : ne(j, i, O));
      }
      ((f = this.extendTranslation(f, e, s, p, r)),
        R &&
          f === i &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${l}${d}${i}`),
        (R || P) &&
          this.options.parseMissingKeyHandler &&
          (f = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${l}${d}${i}` : i,
            P ? f : void 0,
            s,
          )));
    }
    return a
      ? ((p.res = f), (p.usedParams = this.getUsedParamsDetails(s)), p)
      : f;
  }
  extendTranslation(e, n, r, s, a) {
    var c, l;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const d =
        B(e) &&
        (((l = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : l.skipOnVariables) !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let u;
      if (d) {
        const p = e.match(this.interpolator.nestingRegexp);
        u = p && p.length;
      }
      let h = r.replace && !B(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (h = { ...this.options.interpolation.defaultVariables, ...h }),
        (e = this.interpolator.interpolate(
          e,
          h,
          r.lng || this.language || s.usedLng,
          r,
        )),
        d)
      ) {
        const p = e.match(this.interpolator.nestingRegexp),
          f = p && p.length;
        u < f && (r.nest = !1);
      }
      (!r.lng && s && s.res && (r.lng = this.language || s.usedLng),
        r.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            (...p) =>
              (a == null ? void 0 : a[0]) === p[0] && !r.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`,
                  ),
                  null)
                : this.translate(...p, n),
            r,
          )),
        r.interpolation && this.interpolator.reset());
    }
    const o = r.postProcess || this.options.postProcess,
      i = B(o) ? [o] : o;
    return (
      e != null &&
        i != null &&
        i.length &&
        r.applyPostProcessor !== !1 &&
        (e = vl.handle(
          i,
          e,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      e
    );
  }
  resolve(e, n = {}) {
    let r, s, a, o, i;
    return (
      B(e) && (e = [e]),
      Array.isArray(e) &&
        (e = e.map((c) =>
          typeof c == "function" ? En(c, { ...this.options, ...n }) : c,
        )),
      e.forEach((c) => {
        if (this.isValidLookup(r)) return;
        const l = this.extractFromKey(c, n),
          d = l.key;
        s = d;
        let u = l.namespaces;
        this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
        const h = n.count !== void 0 && !B(n.count),
          p = h && !n.ordinal && n.count === 0,
          f =
            n.context !== void 0 &&
            (B(n.context) || typeof n.context == "number") &&
            n.context !== "",
          m = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        u.forEach((g) => {
          var b, _;
          this.isValidLookup(r) ||
            ((i = g),
            !qo[`${m[0]}-${g}`] &&
              (b = this.utils) != null &&
              b.hasLoadedNamespace &&
              !((_ = this.utils) != null && _.hasLoadedNamespace(i)) &&
              ((qo[`${m[0]}-${g}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            m.forEach((w) => {
              var C;
              if (this.isValidLookup(r)) return;
              o = w;
              const x = [d];
              if ((C = this.i18nFormat) != null && C.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, d, w, g, n);
              else {
                let S;
                h && (S = this.pluralResolver.getSuffix(w, n.count, n));
                const D = `${this.options.pluralSeparator}zero`,
                  O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (h &&
                    (n.ordinal &&
                      S.indexOf(O) === 0 &&
                      x.push(d + S.replace(O, this.options.pluralSeparator)),
                    x.push(d + S),
                    p && x.push(d + D)),
                  f)
                ) {
                  const k = `${d}${this.options.contextSeparator || "_"}${n.context}`;
                  (x.push(k),
                    h &&
                      (n.ordinal &&
                        S.indexOf(O) === 0 &&
                        x.push(k + S.replace(O, this.options.pluralSeparator)),
                      x.push(k + S),
                      p && x.push(k + D)));
                }
              }
              let E;
              for (; (E = x.pop()); )
                this.isValidLookup(r) ||
                  ((a = E), (r = this.getResource(w, g, E, n)));
            }));
        });
      }),
      { res: r, usedKey: s, exactUsedKey: a, usedLng: o, usedNS: i }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, n, r, s = {}) {
    var a;
    return (a = this.i18nFormat) != null && a.getResource
      ? this.i18nFormat.getResource(e, n, r, s)
      : this.resourceStore.getResource(e, n, r, s);
  }
  getUsedParamsDetails(e = {}) {
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = e.replace && !B(e.replace);
    let s = r ? e.replace : e;
    if (
      (r && typeof e.count < "u" && (s.count = e.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !r)
    ) {
      s = { ...s };
      for (const a of n) delete s[a];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const r in e)
      if (
        Object.prototype.hasOwnProperty.call(e, r) &&
        n === r.substring(0, n.length) &&
        e[r] !== void 0
      )
        return !0;
    return !1;
  }
}
class Vo {
  constructor(e) {
    ((this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ne.create("languageUtils")));
  }
  getScriptPartFromCode(e) {
    if (((e = $n(e)), !e || e.indexOf("-") < 0)) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = $n(e)), !e || e.indexOf("-") < 0)) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (B(e) && e.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? e.toLowerCase() : e)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return (
      e.forEach((r) => {
        if (n) return;
        const s = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
      }),
      !n &&
        this.options.supportedLngs &&
        e.forEach((r) => {
          if (n) return;
          const s = this.getScriptPartFromCode(r);
          if (this.isSupportedCode(s)) return (n = s);
          const a = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(a)) return (n = a);
          n = this.options.supportedLngs.find((o) => {
            if (o === a) return o;
            if (
              !(o.indexOf("-") < 0 && a.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                a.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === a) ||
                (o.indexOf(a) === 0 && a.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(n)),
      B(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!n) return e.default || [];
    let r = e[n];
    return (
      r || (r = e[this.getScriptPartFromCode(n)]),
      r || (r = e[this.formatLanguageCode(n)]),
      r || (r = e[this.getLanguagePartFromCode(n)]),
      r || (r = e.default),
      r || []
    );
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(
        (n === !1 ? [] : n) || this.options.fallbackLng || [],
        e,
      ),
      s = [],
      a = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? s.push(o)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${o}`,
              ));
      };
    return (
      B(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            a(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            a(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            a(this.getLanguagePartFromCode(e)))
        : B(e) && a(this.formatLanguageCode(e)),
      r.forEach((o) => {
        s.indexOf(o) < 0 && a(this.formatLanguageCode(o));
      }),
      s
    );
  }
}
const zo = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Ho = {
    select: (t) => (t === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class Cv {
  constructor(e, n = {}) {
    ((this.languageUtils = e),
      (this.options = n),
      (this.logger = Ne.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, n = {}) {
    const r = $n(e === "dev" ? "en" : e),
      s = n.ordinal ? "ordinal" : "cardinal",
      a = JSON.stringify({ cleanedCode: r, type: s });
    if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
    let o;
    try {
      o = new Intl.PluralRules(r, { type: s });
    } catch {
      if (typeof Intl > "u")
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          Ho
        );
      if (!e.match(/-|_/)) return Ho;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(c, n);
    }
    return ((this.pluralRulesCache[a] = o), o);
  }
  needsPlural(e, n = {}) {
    let r = this.getRule(e, n);
    return (
      r || (r = this.getRule("dev", n)),
      (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(e, n, r = {}) {
    return this.getSuffixes(e, r).map((s) => `${n}${s}`);
  }
  getSuffixes(e, n = {}) {
    let r = this.getRule(e, n);
    return (
      r || (r = this.getRule("dev", n)),
      r
        ? r
            .resolvedOptions()
            .pluralCategories.sort((s, a) => zo[s] - zo[a])
            .map(
              (s) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`,
            )
        : []
    );
  }
  getSuffix(e, n, r = {}) {
    const s = this.getRule(e, r);
    return s
      ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${e}`),
        this.getSuffix("dev", n, r));
  }
}
const Go = (t, e, n, r = ".", s = !0) => {
    let a = vv(t, e, n);
    return (
      !a && s && B(n) && ((a = Ws(t, n, r)), a === void 0 && (a = Ws(e, n, r))),
      a
    );
  },
  us = (t) => t.replace(/\$/g, "$$$$");
class Wo {
  constructor(e = {}) {
    var n;
    ((this.logger = Ne.create("interpolator")),
      (this.options = e),
      (this.format =
        ((n = e == null ? void 0 : e.interpolation) == null
          ? void 0
          : n.format) || ((r) => r)),
      this.init(e));
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: a,
      prefixEscaped: o,
      suffix: i,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: d,
      unescapePrefix: u,
      nestingPrefix: h,
      nestingPrefixEscaped: p,
      nestingSuffix: f,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: b,
      alwaysFormat: _,
    } = e.interpolation;
    ((this.escape = n !== void 0 ? n : bv),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = a ? ht(a) : o || "{{"),
      (this.suffix = i ? ht(i) : c || "}}"),
      (this.formatSeparator = l || ","),
      (this.unescapePrefix = d ? "" : u || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : d || ""),
      (this.nestingPrefix = h ? ht(h) : p || ht("$t(")),
      (this.nestingSuffix = f ? ht(f) : m || ht(")")),
      (this.nestingOptionsSeparator = g || ","),
      (this.maxReplaces = b || 1e3),
      (this.alwaysFormat = _ !== void 0 ? _ : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, r) =>
      (n == null ? void 0 : n.source) === r
        ? ((n.lastIndex = 0), n)
        : new RegExp(r, "g");
    ((this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      )));
  }
  interpolate(e, n, r, s) {
    var p;
    let a, o, i;
    const c =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      l = (f) => {
        if (f.indexOf(this.formatSeparator) < 0) {
          const _ = Go(
            n,
            c,
            f,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(_, void 0, r, { ...s, ...n, interpolationkey: f })
            : _;
        }
        const m = f.split(this.formatSeparator),
          g = m.shift().trim(),
          b = m.join(this.formatSeparator).trim();
        return this.format(
          Go(
            n,
            c,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          b,
          r,
          { ...s, ...n, interpolationkey: g },
        );
      };
    this.resetRegExp();
    const d =
        (s == null ? void 0 : s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      u =
        ((p = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : p.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (f) => us(f) },
        {
          regex: this.regexp,
          safeValue: (f) => (this.escapeValue ? us(this.escape(f)) : us(f)),
        },
      ].forEach((f) => {
        for (i = 0; (a = f.regex.exec(e)); ) {
          const m = a[1].trim();
          if (((o = l(m)), o === void 0))
            if (typeof d == "function") {
              const b = d(e, a, s);
              o = B(b) ? b : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, m)) o = "";
            else if (u) {
              o = a[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${m} for interpolating ${e}`,
              ),
                (o = ""));
          else !B(o) && !this.useRawValueToEscape && (o = $o(o));
          const g = f.safeValue(o);
          if (
            ((e = e.replace(a[0], g)),
            u
              ? ((f.regex.lastIndex += o.length),
                (f.regex.lastIndex -= a[0].length))
              : (f.regex.lastIndex = 0),
            i++,
            i >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, n, r = {}) {
    let s, a, o;
    const i = (c, l) => {
      const d = this.nestingOptionsSeparator;
      if (c.indexOf(d) < 0) return c;
      const u = c.split(new RegExp(`${ht(d)}[ ]*{`));
      let h = `{${u[1]}`;
      ((c = u[0]), (h = this.interpolate(h, o)));
      const p = h.match(/'/g),
        f = h.match(/"/g);
      ((((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !f) ||
        ((f == null ? void 0 : f.length) ?? 0) % 2 !== 0) &&
        (h = h.replace(/'/g, '"'));
      try {
        ((o = JSON.parse(h)), l && (o = { ...l, ...o }));
      } catch (m) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${c}`,
            m,
          ),
          `${c}${d}${h}`
        );
      }
      return (
        o.defaultValue &&
          o.defaultValue.indexOf(this.prefix) > -1 &&
          delete o.defaultValue,
        c
      );
    };
    for (; (s = this.nestingRegexp.exec(e)); ) {
      let c = [];
      ((o = { ...r }),
        (o = o.replace && !B(o.replace) ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue);
      const l = /{.*}/.test(s[1])
        ? s[1].lastIndexOf("}") + 1
        : s[1].indexOf(this.formatSeparator);
      if (
        (l !== -1 &&
          ((c = s[1]
            .slice(l)
            .split(this.formatSeparator)
            .map((d) => d.trim())
            .filter(Boolean)),
          (s[1] = s[1].slice(0, l))),
        (a = n(i.call(this, s[1].trim(), o), o)),
        a && s[0] === e && !B(a))
      )
        return a;
      (B(a) || (a = $o(a)),
        a ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),
          (a = "")),
        c.length &&
          (a = c.reduce(
            (d, u) =>
              this.format(d, u, r.lng, { ...r, interpolationkey: s[1].trim() }),
            a.trim(),
          )),
        (e = e.replace(s[0], a)),
        (this.regexp.lastIndex = 0));
    }
    return e;
  }
}
const Rv = (t) => {
    let e = t.toLowerCase().trim();
    const n = {};
    if (t.indexOf("(") > -1) {
      const r = t.split("(");
      e = r[0].toLowerCase().trim();
      const s = r[1].substring(0, r[1].length - 1);
      e === "currency" && s.indexOf(":") < 0
        ? n.currency || (n.currency = s.trim())
        : e === "relativetime" && s.indexOf(":") < 0
          ? n.range || (n.range = s.trim())
          : s.split(";").forEach((o) => {
              if (o) {
                const [i, ...c] = o.split(":"),
                  l = c
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  d = i.trim();
                (n[d] || (n[d] = l),
                  l === "false" && (n[d] = !1),
                  l === "true" && (n[d] = !0),
                  isNaN(l) || (n[d] = parseInt(l, 10)));
              }
            });
    }
    return { formatName: e, formatOptions: n };
  },
  Ko = (t) => {
    const e = {};
    return (n, r, s) => {
      let a = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (a = { ...a, [s.interpolationkey]: void 0 });
      const o = r + JSON.stringify(a);
      let i = e[o];
      return (i || ((i = t($n(r), s)), (e[o] = i)), i(n));
    };
  },
  Ov = (t) => (e, n, r) => t($n(n), r)(e);
class Tv {
  constructor(e = {}) {
    ((this.logger = Ne.create("formatter")), (this.options = e), this.init(e));
  }
  init(e, n = { interpolation: {} }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? Ko : Ov;
    this.formats = {
      number: r((s, a) => {
        const o = new Intl.NumberFormat(s, { ...a });
        return (i) => o.format(i);
      }),
      currency: r((s, a) => {
        const o = new Intl.NumberFormat(s, { ...a, style: "currency" });
        return (i) => o.format(i);
      }),
      datetime: r((s, a) => {
        const o = new Intl.DateTimeFormat(s, { ...a });
        return (i) => o.format(i);
      }),
      relativetime: r((s, a) => {
        const o = new Intl.RelativeTimeFormat(s, { ...a });
        return (i) => o.format(i, a.range || "day");
      }),
      list: r((s, a) => {
        const o = new Intl.ListFormat(s, { ...a });
        return (i) => o.format(i);
      }),
    };
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = Ko(n);
  }
  format(e, n, r, s = {}) {
    const a = n.split(this.formatSeparator);
    if (
      a.length > 1 &&
      a[0].indexOf("(") > 1 &&
      a[0].indexOf(")") < 0 &&
      a.find((i) => i.indexOf(")") > -1)
    ) {
      const i = a.findIndex((c) => c.indexOf(")") > -1);
      a[0] = [a[0], ...a.splice(1, i)].join(this.formatSeparator);
    }
    return a.reduce((i, c) => {
      var u;
      const { formatName: l, formatOptions: d } = Rv(c);
      if (this.formats[l]) {
        let h = i;
        try {
          const p =
              ((u = s == null ? void 0 : s.formatParams) == null
                ? void 0
                : u[s.interpolationkey]) || {},
            f = p.locale || p.lng || s.locale || s.lng || r;
          h = this.formats[l](i, f, { ...d, ...s, ...p });
        } catch (p) {
          this.logger.warn(p);
        }
        return h;
      } else this.logger.warn(`there was no format function for ${l}`);
      return i;
    }, e);
  }
}
const Pv = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Iv extends qr {
  constructor(e, n, r, s = {}) {
    var a, o;
    (super(),
      (this.backend = e),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = s),
      (this.logger = Ne.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (o = (a = this.backend) == null ? void 0 : a.init) == null ||
        o.call(a, r, s.backend, s));
  }
  queueLoad(e, n, r, s) {
    const a = {},
      o = {},
      i = {},
      c = {};
    return (
      e.forEach((l) => {
        let d = !0;
        (n.forEach((u) => {
          const h = `${l}|${u}`;
          !r.reload && this.store.hasResourceBundle(l, u)
            ? (this.state[h] = 2)
            : this.state[h] < 0 ||
              (this.state[h] === 1
                ? o[h] === void 0 && (o[h] = !0)
                : ((this.state[h] = 1),
                  (d = !1),
                  o[h] === void 0 && (o[h] = !0),
                  a[h] === void 0 && (a[h] = !0),
                  c[u] === void 0 && (c[u] = !0)));
        }),
          d || (i[l] = !0));
      }),
      (Object.keys(a).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(a),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(i),
        toLoadNamespaces: Object.keys(c),
      }
    );
  }
  loaded(e, n, r) {
    const s = e.split("|"),
      a = s[0],
      o = s[1];
    (n && this.emit("failedLoading", a, o, n),
      !n &&
        r &&
        this.store.addResourceBundle(a, o, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = n ? -1 : 2),
      n && r && (this.state[e] = 0));
    const i = {};
    (this.queue.forEach((c) => {
      (gv(c.loaded, [a], o),
        Pv(c, e),
        n && c.errors.push(n),
        c.pendingCount === 0 &&
          !c.done &&
          (Object.keys(c.loaded).forEach((l) => {
            i[l] || (i[l] = {});
            const d = c.loaded[l];
            d.length &&
              d.forEach((u) => {
                i[l][u] === void 0 && (i[l][u] = !0);
              });
          }),
          (c.done = !0),
          c.errors.length ? c.callback(c.errors) : c.callback()));
    }),
      this.emit("loaded", i),
      (this.queue = this.queue.filter((c) => !c.done)));
  }
  read(e, n, r, s = 0, a = this.retryTimeout, o) {
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: s,
        wait: a,
        callback: o,
      });
      return;
    }
    this.readingCalls++;
    const i = (l, d) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const u = this.waitingReads.shift();
          this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
        }
        if (l && d && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, r, s + 1, a * 2, o);
          }, a);
          return;
        }
        o(l, d);
      },
      c = this.backend[r].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(e, n);
        l && typeof l.then == "function"
          ? l.then((d) => i(null, d)).catch(i)
          : i(null, l);
      } catch (l) {
        i(l);
      }
      return;
    }
    return c(e, n, i);
  }
  prepareLoading(e, n, r = {}, s) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        s && s()
      );
    (B(e) && (e = this.languageUtils.toResolveHierarchy(e)), B(n) && (n = [n]));
    const a = this.queueLoad(e, n, r, s);
    if (!a.toLoad.length) return (a.pending.length || s(), null);
    a.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r);
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, { reload: !0 }, r);
  }
  loadOne(e, n = "") {
    const r = e.split("|"),
      s = r[0],
      a = r[1];
    this.read(s, a, "read", void 0, void 0, (o, i) => {
      (o &&
        this.logger.warn(
          `${n}loading namespace ${a} for language ${s} failed`,
          o,
        ),
        !o &&
          i &&
          this.logger.log(`${n}loaded namespace ${a} for language ${s}`, i),
        this.loaded(e, o, i));
    });
  }
  saveMissing(e, n, r, s, a, o = {}, i = () => {}) {
    var c, l, d, u, h;
    if (
      (l = (c = this.services) == null ? void 0 : c.utils) != null &&
      l.hasLoadedNamespace &&
      !(
        (u = (d = this.services) == null ? void 0 : d.utils) != null &&
        u.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if ((h = this.backend) != null && h.create) {
        const p = { ...o, isUpdate: a },
          f = this.backend.create.bind(this.backend);
        if (f.length < 6)
          try {
            let m;
            (f.length === 5 ? (m = f(e, n, r, s, p)) : (m = f(e, n, r, s)),
              m && typeof m.then == "function"
                ? m.then((g) => i(null, g)).catch(i)
                : i(null, m));
          } catch (m) {
            i(m);
          }
        else f(e, n, r, s, i, p);
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, s);
    }
  }
}
const ps = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (t) => {
      let e = {};
      if (
        (typeof t[1] == "object" && (e = t[1]),
        B(t[1]) && (e.defaultValue = t[1]),
        B(t[2]) && (e.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const n = t[3] || t[2];
        Object.keys(n).forEach((r) => {
          e[r] = n[r];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  Jo = (t) => {
    var e, n;
    return (
      B(t.ns) && (t.ns = [t.ns]),
      B(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
      B(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
      ((n = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null
        ? void 0
        : n.call(e, "cimode")) < 0 &&
        (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
      typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate),
      t
    );
  },
  sr = () => {},
  kv = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
      typeof t[n] == "function" && (t[n] = t[n].bind(t));
    });
  },
  bl = "__i18next_supportNoticeShown",
  Dv = () => typeof globalThis < "u" && !!globalThis[bl],
  Lv = () => {
    typeof globalThis < "u" && (globalThis[bl] = !0);
  },
  jv = (t) => {
    var e, n, r, s, a, o, i, c, l, d, u, h, p;
    return !!(
      ((r =
        (n =
          (e = t == null ? void 0 : t.modules) == null ? void 0 : e.backend) ==
        null
          ? void 0
          : n.name) == null
        ? void 0
        : r.indexOf("Locize")) > 0 ||
      ((i =
        (o =
          (a =
            (s = t == null ? void 0 : t.modules) == null
              ? void 0
              : s.backend) == null
            ? void 0
            : a.constructor) == null
          ? void 0
          : o.name) == null
        ? void 0
        : i.indexOf("Locize")) > 0 ||
      ((l =
        (c = t == null ? void 0 : t.options) == null ? void 0 : c.backend) !=
        null &&
        l.backends &&
        t.options.backend.backends.some((f) => {
          var m, g, b;
          return (
            ((m = f == null ? void 0 : f.name) == null
              ? void 0
              : m.indexOf("Locize")) > 0 ||
            ((b =
              (g = f == null ? void 0 : f.constructor) == null
                ? void 0
                : g.name) == null
              ? void 0
              : b.indexOf("Locize")) > 0
          );
        })) ||
      ((u =
        (d = t == null ? void 0 : t.options) == null ? void 0 : d.backend) !=
        null &&
        u.projectId) ||
      ((p =
        (h = t == null ? void 0 : t.options) == null ? void 0 : h.backend) !=
        null &&
        p.backendOptions &&
        t.options.backend.backendOptions.some((f) =>
          f == null ? void 0 : f.projectId,
        ))
    );
  };
class Sn extends qr {
  constructor(e = {}, n) {
    if (
      (super(),
      (this.options = Jo(e)),
      (this.services = {}),
      (this.logger = Ne),
      (this.modules = { external: [] }),
      kv(this),
      n && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(e, n), this);
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init(e = {}, n) {
    ((this.isInitializing = !0),
      typeof e == "function" && ((n = e), (e = {})),
      e.defaultNS == null &&
        e.ns &&
        (B(e.ns)
          ? (e.defaultNS = e.ns)
          : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0])));
    const r = ps();
    ((this.options = { ...r, ...this.options, ...Jo(e) }),
      (this.options.interpolation = {
        ...r.interpolation,
        ...this.options.interpolation,
      }),
      e.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = e.keySeparator),
      e.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = e.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          r.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !jv(this) &&
        !Dv() &&
        (typeof console < "u" &&
          typeof console.info < "u" &&
          console.info(
            "🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙",
          ),
        Lv()));
    const s = (l) => (l ? (typeof l == "function" ? new l() : l) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Ne.init(s(this.modules.logger), this.options)
        : Ne.init(null, this.options);
      let l;
      this.modules.formatter ? (l = this.modules.formatter) : (l = Tv);
      const d = new Vo(this.options);
      this.store = new Uo(this.options.resources, this.options);
      const u = this.services;
      ((u.logger = Ne),
        (u.resourceStore = this.store),
        (u.languageUtils = d),
        (u.pluralResolver = new Cv(d, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== r.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        l &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === r.interpolation.format) &&
          ((u.formatter = s(l)),
          u.formatter.init && u.formatter.init(u, this.options),
          (this.options.interpolation.format = u.formatter.format.bind(
            u.formatter,
          ))),
        (u.interpolator = new Wo(this.options)),
        (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (u.backendConnector = new Iv(
          s(this.modules.backend),
          u.resourceStore,
          u,
          this.options,
        )),
        u.backendConnector.on("*", (p, ...f) => {
          this.emit(p, ...f);
        }),
        this.modules.languageDetector &&
          ((u.languageDetector = s(this.modules.languageDetector)),
          u.languageDetector.init &&
            u.languageDetector.init(u, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((u.i18nFormat = s(this.modules.i18nFormat)),
          u.i18nFormat.init && u.i18nFormat.init(this)),
        (this.translator = new Er(this.services, this.options)),
        this.translator.on("*", (p, ...f) => {
          this.emit(p, ...f);
        }),
        this.modules.external.forEach((p) => {
          p.init && p.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = sr),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const l = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((l) => {
        this[l] = (...d) => this.store[l](...d);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((l) => {
        this[l] = (...d) => (this.store[l](...d), this);
      }));
    const i = fn(),
      c = () => {
        const l = (d, u) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            i.resolve(u),
            n(d, u));
        };
        if (this.languages && !this.isInitialized)
          return l(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, l);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? c()
        : setTimeout(c, 0),
      i
    );
  }
  loadResources(e, n = sr) {
    var a, o;
    let r = n;
    const s = B(e) ? e : this.language;
    if (
      (typeof e == "function" && (r = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (s == null ? void 0 : s.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        c = (l) => {
          if (!l || l === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
            u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
          });
        };
      (s
        ? c(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((d) => c(d)),
        (o = (a = this.options.preload) == null ? void 0 : a.forEach) == null ||
          o.call(a, (l) => c(l)),
        this.services.backendConnector.load(i, this.options.ns, (l) => {
          (!l &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(l));
        }));
    } else r(null);
  }
  reloadResources(e, n, r) {
    const s = fn();
    return (
      typeof e == "function" && ((r = e), (e = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      e || (e = this.languages),
      n || (n = this.options.ns),
      r || (r = sr),
      this.services.backendConnector.reload(e, n, (a) => {
        (s.resolve(), r(a));
      }),
      s
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && vl.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(e) < 0 &&
        this.store.hasLanguageSomeTranslations(e) &&
        ((this.resolvedLanguage = e), this.languages.unshift(e));
    }
  }
  changeLanguage(e, n) {
    this.isLanguageChangingTo = e;
    const r = fn();
    this.emit("languageChanging", e);
    const s = (i) => {
        ((this.language = i),
          (this.languages = this.services.languageUtils.toResolveHierarchy(i)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(i));
      },
      a = (i, c) => {
        (c
          ? this.isLanguageChangingTo === e &&
            (s(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", c),
            this.logger.log("languageChanged", c))
          : (this.isLanguageChangingTo = void 0),
          r.resolve((...l) => this.t(...l)),
          n && n(i, (...l) => this.t(...l)));
      },
      o = (i) => {
        var d, u;
        !e && !i && this.services.languageDetector && (i = []);
        const c = B(i) ? i : i && i[0],
          l = this.store.hasLanguageSomeTranslations(c)
            ? c
            : this.services.languageUtils.getBestMatchFromCodes(B(i) ? [i] : i);
        (l &&
          (this.language || s(l),
          this.translator.language || this.translator.changeLanguage(l),
          (u =
            (d = this.services.languageDetector) == null
              ? void 0
              : d.cacheUserLanguage) == null || u.call(d, l)),
          this.loadResources(l, (h) => {
            a(h, l);
          }));
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? o(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(o)
            : this.services.languageDetector.detect(o)
          : o(e),
      r
    );
  }
  getFixedT(e, n, r) {
    const s = (a, o, ...i) => {
      let c;
      (typeof o != "object"
        ? (c = this.options.overloadTranslationOptionHandler([a, o].concat(i)))
        : (c = { ...o }),
        (c.lng = c.lng || s.lng),
        (c.lngs = c.lngs || s.lngs),
        (c.ns = c.ns || s.ns),
        c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || r || s.keyPrefix));
      const l = this.options.keySeparator || ".";
      let d;
      return (
        c.keyPrefix && Array.isArray(a)
          ? (d = a.map(
              (u) => (
                typeof u == "function" &&
                  (u = En(u, { ...this.options, ...o })),
                `${c.keyPrefix}${l}${u}`
              ),
            ))
          : (typeof a == "function" && (a = En(a, { ...this.options, ...o })),
            (d = c.keyPrefix ? `${c.keyPrefix}${l}${a}` : a)),
        this.t(d, c)
      );
    };
    return (
      B(e) ? (s.lng = e) : (s.lngs = e),
      (s.ns = n),
      (s.keyPrefix = r),
      s
    );
  }
  t(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...e);
  }
  exists(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, n = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      a = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (i, c) => {
      const l = this.services.backendConnector.state[`${i}|${c}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (n.precheck) {
      const i = n.precheck(this, o);
      if (i !== void 0) return i;
    }
    return !!(
      this.hasResourceBundle(r, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, e) && (!s || o(a, e)))
    );
  }
  loadNamespaces(e, n) {
    const r = fn();
    return this.options.ns
      ? (B(e) && (e = [e]),
        e.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          (r.resolve(), n && n(s));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const r = fn();
    B(e) && (e = [e]);
    const s = this.options.preload || [],
      a = e.filter(
        (o) =>
          s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o),
      );
    return a.length
      ? ((this.options.preload = s.concat(a)),
        this.loadResources((o) => {
          (r.resolve(), n && n(o));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(e) {
    var s, a;
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (((s = this.languages) == null ? void 0 : s.length) > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    try {
      const o = new Intl.Locale(e);
      if (o && o.getTextInfo) {
        const i = o.getTextInfo();
        if (i && i.direction) return i.direction;
      }
    } catch {}
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r =
        ((a = this.services) == null ? void 0 : a.languageUtils) ||
        new Vo(ps());
    return e.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : n.indexOf(r.getLanguagePartFromCode(e)) > -1 ||
          e.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(e = {}, n) {
    const r = new Sn(e, n);
    return ((r.createInstance = Sn.createInstance), r);
  }
  cloneInstance(e = {}, n = sr) {
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const s = { ...this.options, ...e, isClone: !0 },
      a = new Sn(s);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) &&
        (a.logger = a.logger.clone(e)),
      ["store", "services", "language"].forEach((i) => {
        a[i] = this[i];
      }),
      (a.services = { ...this.services }),
      (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      r)
    ) {
      const i = Object.keys(this.store.data).reduce(
        (c, l) => (
          (c[l] = { ...this.store.data[l] }),
          (c[l] = Object.keys(c[l]).reduce(
            (d, u) => ((d[u] = { ...c[l][u] }), d),
            c[l],
          )),
          c
        ),
        {},
      );
      ((a.store = new Uo(i, s)), (a.services.resourceStore = a.store));
    }
    if (e.interpolation) {
      const c = {
          ...ps().interpolation,
          ...this.options.interpolation,
          ...e.interpolation,
        },
        l = { ...s, interpolation: c };
      a.services.interpolator = new Wo(l);
    }
    return (
      (a.translator = new Er(a.services, s)),
      a.translator.on("*", (i, ...c) => {
        a.emit(i, ...c);
      }),
      a.init(s, n),
      (a.translator.options = s),
      (a.translator.backendConnector.services.utils = {
        hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
      }),
      a
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ae = Sn.createInstance();
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
const Nv = (t, e, n, r) => {
    var a, o, i, c;
    const s = [n, { code: e, ...(r || {}) }];
    if (
      (o = (a = t == null ? void 0 : t.services) == null ? void 0 : a.logger) !=
        null &&
      o.forward
    )
      return t.services.logger.forward(s, "warn", "react-i18next::", !0);
    (Ct(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (c = (i = t == null ? void 0 : t.services) == null ? void 0 : i.logger) !=
        null && c.warn
        ? t.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s));
  },
  Yo = {},
  _l = (t, e, n, r) => {
    (Ct(n) && Yo[n]) || (Ct(n) && (Yo[n] = new Date()), Nv(t, e, n, r));
  },
  wl = (t, e) => () => {
    if (t.isInitialized) e();
    else {
      const n = () => {
        (setTimeout(() => {
          t.off("initialized", n);
        }, 0),
          e());
      };
      t.on("initialized", n);
    }
  },
  Ks = (t, e, n) => {
    t.loadNamespaces(e, wl(t, n));
  },
  Qo = (t, e, n, r) => {
    if (
      (Ct(n) && (n = [n]),
      t.options.preload && t.options.preload.indexOf(e) > -1)
    )
      return Ks(t, n, r);
    (n.forEach((s) => {
      t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
    }),
      t.loadLanguages(e, wl(t, r)));
  },
  $v = (t, e, n = {}) =>
    !e.languages || !e.languages.length
      ? (_l(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: e.languages,
        }),
        !0)
      : e.hasLoadedNamespace(t, {
          lng: n.lng,
          precheck: (r, s) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf("languageChanging") > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !s(r.isLanguageChangingTo, t)
            )
              return !1;
          },
        }),
  Ct = (t) => typeof t == "string",
  Mv = (t) => typeof t == "object" && t !== null,
  Bv =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Fv = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Uv = (t) => Fv[t],
  qv = (t) => t.replace(Bv, Uv);
let Js = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: qv,
  transDefaultProps: void 0,
};
const Vv = (t = {}) => {
    Js = { ...Js, ...t };
  },
  zv = () => Js;
let xl;
const Hv = (t) => {
    xl = t;
  },
  Gv = () => xl,
  Wv = {
    type: "3rdParty",
    init(t) {
      (Vv(t.options.react), Hv(t));
    },
  },
  Kv = v.createContext();
class Jv {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var El = { exports: {} },
  Sl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var en = v;
function Yv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Qv = typeof Object.is == "function" ? Object.is : Yv,
  Xv = en.useState,
  Zv = en.useEffect,
  ey = en.useLayoutEffect,
  ty = en.useDebugValue;
function ny(t, e) {
  var n = e(),
    r = Xv({ inst: { value: n, getSnapshot: e } }),
    s = r[0].inst,
    a = r[1];
  return (
    ey(
      function () {
        ((s.value = n), (s.getSnapshot = e), hs(s) && a({ inst: s }));
      },
      [t, n, e],
    ),
    Zv(
      function () {
        return (
          hs(s) && a({ inst: s }),
          t(function () {
            hs(s) && a({ inst: s });
          })
        );
      },
      [t],
    ),
    ty(n),
    n
  );
}
function hs(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Qv(t, n);
  } catch {
    return !0;
  }
}
function ry(t, e) {
  return e();
}
var sy =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ry
    : ny;
Sl.useSyncExternalStore =
  en.useSyncExternalStore !== void 0 ? en.useSyncExternalStore : sy;
El.exports = Sl;
var ay = El.exports;
const oy = (t, e) => {
    if (Ct(e)) return e;
    if (Mv(e) && Ct(e.defaultValue)) return e.defaultValue;
    if (typeof t == "function") return "";
    if (Array.isArray(t)) {
      const n = t[t.length - 1];
      return typeof n == "function" ? "" : n;
    }
    return t;
  },
  iy = { t: oy, ready: !1 },
  cy = () => () => {},
  on = (t, e = {}) => {
    var O, k, V;
    const { i18n: n } = e,
      { i18n: r, defaultNS: s } = v.useContext(Kv) || {},
      a = n || r || Gv();
    (a && !a.reportNamespaces && (a.reportNamespaces = new Jv()),
      a ||
        _l(
          a,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        ));
    const o = v.useMemo(() => {
        var T;
        return {
          ...zv(),
          ...((T = a == null ? void 0 : a.options) == null ? void 0 : T.react),
          ...e,
        };
      }, [a, e]),
      { useSuspense: i, keyPrefix: c } = o,
      l =
        s ||
        ((O = a == null ? void 0 : a.options) == null ? void 0 : O.defaultNS),
      d = Ct(l) ? [l] : l || ["translation"],
      u = v.useMemo(() => d, d);
    (V =
      (k = a == null ? void 0 : a.reportNamespaces) == null
        ? void 0
        : k.addUsedNamespaces) == null || V.call(k, u);
    const h = v.useRef(0),
      p = v.useCallback(
        (T) => {
          if (!a) return cy;
          const { bindI18n: P, bindI18nStore: R } = o,
            $ = () => {
              ((h.current += 1), T());
            };
          return (
            P && a.on(P, $),
            R && a.store.on(R, $),
            () => {
              (P && P.split(" ").forEach((M) => a.off(M, $)),
                R && R.split(" ").forEach((M) => a.store.off(M, $)));
            }
          );
        },
        [a, o],
      ),
      f = v.useRef(),
      m = v.useCallback(() => {
        if (!a) return iy;
        const T =
            !!(a.isInitialized || a.initializedStoreOnce) &&
            u.every((j) => $v(j, a, o)),
          P = e.lng || a.language,
          R = h.current,
          $ = f.current;
        if (
          $ &&
          $.ready === T &&
          $.lng === P &&
          $.keyPrefix === c &&
          $.revision === R
        )
          return $;
        const U = {
          t: a.getFixedT(P, o.nsMode === "fallback" ? u : u[0], c),
          ready: T,
          lng: P,
          keyPrefix: c,
          revision: R,
        };
        return ((f.current = U), U);
      }, [a, u, c, o, e.lng]),
      [g, b] = v.useState(0),
      { t: _, ready: w } = ay.useSyncExternalStore(p, m, m);
    v.useEffect(() => {
      if (a && !w && !i) {
        const T = () => b((P) => P + 1);
        e.lng ? Qo(a, e.lng, u, T) : Ks(a, u, T);
      }
    }, [a, e.lng, u, w, i, g]);
    const x = a || {},
      E = v.useRef(null),
      C = v.useRef(),
      S = (T) => {
        const P = Object.getOwnPropertyDescriptors(T);
        P.__original && delete P.__original;
        const R = Object.create(Object.getPrototypeOf(T), P);
        if (!Object.prototype.hasOwnProperty.call(R, "__original"))
          try {
            Object.defineProperty(R, "__original", {
              value: T,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return R;
      },
      D = v.useMemo(() => {
        const T = x,
          P = T == null ? void 0 : T.language;
        let R = T;
        T &&
          (E.current && E.current.__original === T
            ? C.current !== P
              ? ((R = S(T)), (E.current = R), (C.current = P))
              : (R = E.current)
            : ((R = S(T)), (E.current = R), (C.current = P)));
        const $ = [_, R, w];
        return (($.t = _), ($.i18n = R), ($.ready = w), $);
      }, [_, x, w, x.resolvedLanguage, x.language, x.languages]);
    if (a && i && !w)
      throw new Promise((T) => {
        const P = () => T();
        e.lng ? Qo(a, e.lng, u, P) : Ks(a, u, P);
      });
    return D;
  },
  { slice: ly, forEach: dy } = [];
function uy(t) {
  return (
    dy.call(ly.call(arguments, 1), (e) => {
      if (e) for (const n in e) t[n] === void 0 && (t[n] = e[n]);
    }),
    t
  );
}
function py(t) {
  return typeof t != "string"
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((n) => n.test(t));
}
const Xo = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  hy = function (t, e) {
    const r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      s = encodeURIComponent(e);
    let a = `${t}=${s}`;
    if (r.maxAge > 0) {
      const o = r.maxAge - 0;
      if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
      a += `; Max-Age=${Math.floor(o)}`;
    }
    if (r.domain) {
      if (!Xo.test(r.domain)) throw new TypeError("option domain is invalid");
      a += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!Xo.test(r.path)) throw new TypeError("option path is invalid");
      a += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      a += `; Expires=${r.expires.toUTCString()}`;
    }
    if (
      (r.httpOnly && (a += "; HttpOnly"),
      r.secure && (a += "; Secure"),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          a += "; SameSite=Strict";
          break;
        case "lax":
          a += "; SameSite=Lax";
          break;
        case "strict":
          a += "; SameSite=Strict";
          break;
        case "none":
          a += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return (r.partitioned && (a += "; Partitioned"), a);
  },
  Zo = {
    create(t, e, n, r) {
      let s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (n &&
        ((s.expires = new Date()),
        s.expires.setTime(s.expires.getTime() + n * 60 * 1e3)),
        r && (s.domain = r),
        (document.cookie = hy(t, e, s)));
    },
    read(t) {
      const e = `${t}=`,
        n = document.cookie.split(";");
      for (let r = 0; r < n.length; r++) {
        let s = n[r];
        for (; s.charAt(0) === " "; ) s = s.substring(1, s.length);
        if (s.indexOf(e) === 0) return s.substring(e.length, s.length);
      }
      return null;
    },
    remove(t, e) {
      this.create(t, "", -1, e);
    },
  };
var fy = {
    name: "cookie",
    lookup(t) {
      let { lookupCookie: e } = t;
      if (e && typeof document < "u") return Zo.read(e) || void 0;
    },
    cacheUserLanguage(t, e) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: s,
        cookieOptions: a,
      } = e;
      n && typeof document < "u" && Zo.create(n, t, r, s, a);
    },
  },
  my = {
    name: "querystring",
    lookup(t) {
      var r;
      let { lookupQuerystring: e } = t,
        n;
      if (typeof window < "u") {
        let { search: s } = window.location;
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 &&
          (s = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        const o = s.substring(1).split("&");
        for (let i = 0; i < o.length; i++) {
          const c = o[i].indexOf("=");
          c > 0 && o[i].substring(0, c) === e && (n = o[i].substring(c + 1));
        }
      }
      return n;
    },
  },
  gy = {
    name: "hash",
    lookup(t) {
      var s;
      let { lookupHash: e, lookupFromHashIndex: n } = t,
        r;
      if (typeof window < "u") {
        const { hash: a } = window.location;
        if (a && a.length > 2) {
          const o = a.substring(1);
          if (e) {
            const i = o.split("&");
            for (let c = 0; c < i.length; c++) {
              const l = i[c].indexOf("=");
              l > 0 &&
                i[c].substring(0, l) === e &&
                (r = i[c].substring(l + 1));
            }
          }
          if (r) return r;
          if (!r && n > -1) {
            const i = a.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(i)
              ? (s = i[typeof n == "number" ? n : 0]) == null
                ? void 0
                : s.replace("/", "")
              : void 0;
          }
        }
      }
      return r;
    },
  };
let Dt = null;
const ei = () => {
  if (Dt !== null) return Dt;
  try {
    if (((Dt = typeof window < "u" && window.localStorage !== null), !Dt))
      return !1;
    const t = "i18next.translate.boo";
    (window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t));
  } catch {
    Dt = !1;
  }
  return Dt;
};
var vy = {
  name: "localStorage",
  lookup(t) {
    let { lookupLocalStorage: e } = t;
    if (e && ei()) return window.localStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(t, e) {
    let { lookupLocalStorage: n } = e;
    n && ei() && window.localStorage.setItem(n, t);
  },
};
let Lt = null;
const ti = () => {
  if (Lt !== null) return Lt;
  try {
    if (((Lt = typeof window < "u" && window.sessionStorage !== null), !Lt))
      return !1;
    const t = "i18next.translate.boo";
    (window.sessionStorage.setItem(t, "foo"),
      window.sessionStorage.removeItem(t));
  } catch {
    Lt = !1;
  }
  return Lt;
};
var yy = {
    name: "sessionStorage",
    lookup(t) {
      let { lookupSessionStorage: e } = t;
      if (e && ti()) return window.sessionStorage.getItem(e) || void 0;
    },
    cacheUserLanguage(t, e) {
      let { lookupSessionStorage: n } = e;
      n && ti() && window.sessionStorage.setItem(n, t);
    },
  },
  by = {
    name: "navigator",
    lookup(t) {
      const e = [];
      if (typeof navigator < "u") {
        const { languages: n, userLanguage: r, language: s } = navigator;
        if (n) for (let a = 0; a < n.length; a++) e.push(n[a]);
        (r && e.push(r), s && e.push(s));
      }
      return e.length > 0 ? e : void 0;
    },
  },
  _y = {
    name: "htmlTag",
    lookup(t) {
      let { htmlTag: e } = t,
        n;
      const r = e || (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  wy = {
    name: "path",
    lookup(t) {
      var s;
      let { lookupFromPathIndex: e } = t;
      if (typeof window > "u") return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? (s = n[typeof e == "number" ? e : 0]) == null
          ? void 0
          : s.replace("/", "")
        : void 0;
    },
  },
  xy = {
    name: "subdomain",
    lookup(t) {
      var s, a;
      let { lookupFromSubdomainIndex: e } = t;
      const n = typeof e == "number" ? e + 1 : 1,
        r =
          typeof window < "u" &&
          ((a = (s = window.location) == null ? void 0 : s.hostname) == null
            ? void 0
            : a.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
              ));
      if (r) return r[n];
    },
  };
let Al = !1;
try {
  (document.cookie, (Al = !0));
} catch {}
const Cl = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
Al || Cl.splice(1, 1);
const Ey = () => ({
  order: Cl,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (t) => t,
});
class Rl {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = "languageDetector"), (this.detectors = {}), this.init(e, n));
  }
  init() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = e),
      (this.options = uy(n, this.options || {}, Ey())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(fy),
      this.addDetector(my),
      this.addDetector(vy),
      this.addDetector(yy),
      this.addDetector(by),
      this.addDetector(_y),
      this.addDetector(wy),
      this.addDetector(xy),
      this.addDetector(gy));
  }
  addDetector(e) {
    return ((this.detectors[e.name] = e), this);
  }
  detect() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      n = [];
    return (
      e.forEach((r) => {
        if (this.detectors[r]) {
          let s = this.detectors[r].lookup(this.options);
          (s && typeof s == "string" && (s = [s]), s && (n = n.concat(s)));
        }
      }),
      (n = n
        .filter((r) => r != null && !py(r))
        .map((r) => this.options.convertDetectedLanguage(r))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
          ? n[0]
          : null
    );
  }
  cacheUserLanguage(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    n &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(e) > -1) ||
        n.forEach((r) => {
          this.detectors[r] &&
            this.detectors[r].cacheUserLanguage(e, this.options);
        }));
  }
}
Rl.type = "languageDetector";
const Sy = {
    areas: {
      strategy: {
        name: "Estratégia",
        desc: "Visão de longo prazo e objetivos",
      },
      management: { name: "Gestão", desc: "Eficiência e governança" },
      finance: { name: "Financeiro", desc: "Fluxo de caixa e rentabilidade" },
      sales: { name: "Comercial", desc: "Funil e performance de vendas" },
      marketing: { name: "Marketing", desc: "Aquisição e canais" },
      operations: { name: "Operações", desc: "Processos e produtividade" },
      logistics: { name: "Logística", desc: "Cadeia de suprimentos e entrega" },
      customer_service: { name: "Atendimento", desc: "Suporte e satisfação" },
      hr: { name: "Recursos Humanos", desc: "Capital humano e retenção" },
    },
    metrics: {
      revenue: { name: "Receita", desc: "Receita bruta total do período" },
      gross_margin: {
        name: "Margem Bruta",
        desc: "Percentual de lucro sobre a venda",
      },
      ebitda: { name: "EBITDA", desc: "Lucro operacional antes de impostos" },
      cac: {
        name: "Custo de Aquisição (CAC)",
        desc: "Custo médio para atrair cada novo cliente",
      },
      ltv: {
        name: "Valor do Cliente (LTV)",
        desc: "Valor total que um cliente gera enquanto consome sua marca",
      },
      churn: {
        name: "Taxa de Cancelamento",
        desc: "Percentual de clientes que deixaram de comprar",
      },
      roas: {
        name: "Retorno sobre Anúncios (ROAS)",
        desc: "Retorno financeiro sobre o valor investido em anúncios",
      },
      cpa: {
        name: "Custo por Aquisição (CPA)",
        desc: "Custo médio por cada venda realizada via anúncios",
      },
      conversion_rate: {
        name: "Taxa de Conversão",
        desc: "Percentual de interessados que se tornam clientes",
      },
      turnover: {
        name: "Rotatividade",
        desc: "Taxa de substituição de funcionários na equipe",
      },
      enps: {
        name: "Satisfação da Equipe (eNPS)",
        desc: "Nível de lealdade e satisfação dos colaboradores",
      },
    },
  },
  Ay = { super: "Super", reports: "Relatórios" },
  Cy = {
    overview: "Visão Geral",
    metrics: "Indicadores",
    decision_panel: "Painel de Decisão",
    analytics: "Analytics",
    consolidated: "Consolidado",
    priorities: "Prioridades",
    action_plan: "Plano de Ação",
    reports: "Relatórios",
    new_report: "Novo Relatório",
    data: "Meus Dados",
    profile: "Perfil",
    settings: "Configurações",
    logout: "Sair",
    notifications: "Notificações",
    user_menu: "Menu do Usuário",
    open_menu: "Abrir Menu",
    main_navigation: "Navegação Principal",
    details: "Detalhes",
    metrics_config: "Configurar Métricas",
  },
  Ry = {
    dashboard: "Visão Geral",
    reports: "Relatórios",
    reports_new: "Novo Relatório",
    metrics: "Indicadores",
    metrics_config: "Configurar Métricas",
    decision_panel: "Painel de Decisão",
    analytics: "Analytics",
    consolidated: "Consolidado",
    priorities: "Prioridades",
    action_plan: "Plano de Ação",
    data: "Meus Dados",
    profile: "Perfil",
    settings: "Configurações",
  },
  Oy = { placeholder: "Buscar relatórios, métricas..." },
  Ty = {
    nav_links: {
      features: "Recursos",
      how_it_works: "Como Funciona",
      pricing: "Preços",
      cta: "Criar Relatório Grátis",
    },
    hero: {
      title: "Transforme seus dados em decisões estratégicas em minutos",
      subtitle:
        "Gere relatórios profissionais em 3 cliques, com inteligência de negócios que ajuda você a crescer.",
      badge: "Análise de nível consultoria, a uma fração do preço.",
      cta_main: "Criar Meu Primeiro Relatório",
      cta_sec: "Ver Demo",
      features: {
        clicks: "3 cliques do upload ao relatório",
        insights: "Indicadores de Performance Claros",
        security: "Segurança total para seus dados",
      },
    },
    trust_section: {
      title: "Transparência e Confiança",
      subtitle:
        "Como uma plataforma focada em crescimento, priorizamos sigilo total e suporte dedicado para sua empresa.",
      items: {
        privacy: {
          title: "Privacidade & Controle",
          desc: "Seus dados nunca saem do seu controle. Processamento seguro e exclusão automática após a análise.",
          tag: "100% seguro",
        },
        support: {
          title: "Suporte Estratégico",
          desc: "Acompanhamos seu primeiro relatório para garantir que a inteligência gerada seja prática e útil.",
          tag: "Suporte incluso",
        },
        roadmap: {
          title: "Evolução com Você",
          desc: "Nossa trajetória é transparente: você sugere melhorias e nós construímos com base no seu retorno real.",
          tag: "Foco no usuário",
        },
      },
    },
    examples: {
      title: "Veja o nível das análises geradas",
      subtitle:
        "Cada relatório é único, adaptado aos seus dados e contexto empresarial. Veja o que você recebe em segundos.",
      main: {
        title: "Relatório Estratégico",
        subtitle: "Análise de Performance e Saúde do Negócio",
        cta: "Gerar Relatório Modelo",
        sections: {
          summary: {
            title: "Resumo Executivo",
            desc: "Visão geral da empresa com métricas vitais e direcionamentos estratégicos claros.",
          },
          highlights: {
            title: "Pontos de Destaque",
            desc: `• 23% de crescimento em vendas
• 15% de redução em custos operacionais
• Sólido aumento na satisfação do cliente`,
          },
          analysis: {
            title: "Análise de Tendência",
            desc: "Gráficos de performance com comparativos mensais e correlações entre indicadores.",
          },
          risks: {
            title: "Riscos e Oportunidades",
            desc: "Identificação proativa de gargalos e chances de crescimento baseadas em padrões reais.",
          },
          insights: {
            title: "Insights da IA",
            desc: "Recomendações específicas para otimizar seus resultados e reduzir desperdícios.",
          },
          checklist: {
            title: "Plano de Ação",
            desc: "Lista de tarefas práticas organizadas por prioridade e impacto esperado no lucro.",
          },
        },
      },
      others: {
        sales: {
          title: "Vendas Mensais",
          desc: "Performance comercial com insights práticos",
        },
        clients: {
          title: "Análise de Clientes",
          desc: "Segmentação e comportamento de compra detalhado",
        },
        financial: {
          title: "Gestão Financeira",
          desc: "Análise de fluxo e margens para diretoria",
        },
        view: "Ver Exemplo",
      },
      footer_cta: "Criar Meu Relatório Agora",
      footer_hint: "Primeira análise grátis • Sem cartão de crédito",
    },
    features_section: {
      title: "Por que escolher o {{brand}}?",
      subtitle:
        "Inteligência Artificial desenvolvida especificamente para PMEs que precisam de análises profissionais, cenários e projeções sem complicação.",
      items: {
        context: {
          title: "Inteligência que entende seu negócio",
          desc: "Nossa IA não apenas lê dados, ela entende o contexto do seu setor e gera diagnósticos em minutos.",
        },
        decisions: {
          title: "Decisões baseadas em fatos",
          desc: "Pare de decidir no 'feeling'. Receba projeções e insights que antes eram restritos a consultorias caras.",
        },
        privacy: {
          title: "Privacidade de Nível Bancário",
          desc: "Seus dados estratégicos são tratados com sigilo absoluto, criptografia total e proteção de dados.",
        },
      },
    },
    how_it_works: {
      title: "Como Funciona",
      subtitle:
        "Uma solução simples e poderosa, pensada para a velocidade que o seu dia a dia exige.",
      steps: {
        upload: {
          title: "Envie seus dados",
          desc: "Carregue sua planilha (.xlsx ou .csv) ou simplesmente cole seu texto. Nossa IA organiza tudo.",
        },
        target: {
          title: "Escolha o objetivo",
          desc: "Resumo Gerencial, Análise Financeira ou Plano de Ação — você escolhe o foco da análise.",
        },
        receive: {
          title: "Receba o relatório",
          desc: "Visualize instantaneamente, compartilhe o link ou exporte para PDF com um clique.",
        },
      },
      quick_start: {
        title: "Comece Agora com um Modelo",
        cta: "Criar Agora",
        exec: {
          title: "Resumo de Gestão",
          desc: "Para uma visão 360º rápida da saúde atual da sua empresa.",
        },
        sales: {
          title: "Análise de Vendas",
          desc: "Para entender quem compra, quando compra e como vender ainda mais.",
        },
        full: {
          title: "Diagnóstico Profundo",
          desc: "Nossa IA analisa cada detalhe e entrega recomendações estratégicas.",
        },
      },
    },
    cta: {
      title: "Pronto para levar seu negócio ao próximo nível?",
      subtitle:
        "Junte-se a milhares de empresas que já transformam dados brutos em inteligência competitiva.",
      button: "Começar Gratuitamente",
      features: {
        no_card: "Sem cartão de crédito",
        cancel_anytime: "Cancele quando quiser",
        fast_setup: "Rápido na aplicação",
      },
    },
    benefits: {
      title: "Inteligência estratégica para o seu dia a dia",
      subtitle:
        "Elimine o trabalho manual e foque no que realmente importa: a estratégia do seu negócio.",
      items: {
        speed: {
          title: "Resultados em minutos",
          desc: "O que levava horas agora leva minutos. Foque seu time no que realmente traz resultado.",
        },
        action: {
          title: "Análises e Próximos Passos",
          desc: "Métricas com olhar nos dados, e insights focados em ação estratégica e apoio à decisão.",
        },
        design: {
          title: "Pronto para enviar",
          desc: "Layout profissional, limpo e elegante — causa impacto positivo em clientes e investidores.",
        },
        viz: {
          title: "Visualizações Automáticas",
          desc: "Gráficos, tabelas e indicadores visuais gerados instantaneamente para facilitar o entendimento.",
        },
        narrative: {
          title: "Narrativa Adaptada",
          desc: "O sistema adapta o tom de voz e o vocabulário de acordo com seu setor e contexto empresarial.",
        },
        security: {
          title: "Seus Dados, Sua Propriedade",
          desc: "Segurança total com criptografia de ponta. Seus dados são usados apenas para sua análise.",
        },
      },
    },
    footer: {
      mission:
        "Relatórios inteligentes com IA para PMEs que buscam crescer através de dados e projeções automatizadas.",
      sections: {
        product: {
          title: "Produto",
          features: "Recursos",
          how_it_works: "Como Funciona",
          pricing: "Preços",
          integrations: "Integrações",
        },
        support: {
          title: "Suporte",
          help: "Central de Ajuda",
          docs: "Documentação",
          status: "Status",
          contact: "Contato",
        },
        legal: {
          title: "Legal",
          privacy: "Privacidade",
          terms: "Termos",
          security: "Segurança",
          cookies: "Cookies",
        },
      },
      copyright: "© {{year}} {{brand}}. Todos os direitos reservados.",
    },
    pricing: {
      title: "Planos simples e transparentes",
      subtitle:
        "Escolha por volume de relatórios e colaboração. Comece grátis e evolua quando fizer sentido para seu negócio.",
      recommended: "Recomendado",
      plans: {
        free: {
          name: "Gratuito",
          desc: "Comece já",
          period: "/sempre",
          cta: "Criar Relatório Grátis",
          features: [
            "2 relatórios/mês",
            "Modelos básicos",
            "Exportação para PDF",
          ],
        },
        pro: {
          name: "Profissional",
          desc: "Mais popular",
          period: "/mês",
          cta: "Experimentar Agora",
          features: [
            "20 relatórios/mês",
            "Modelos premium",
            "Compartilhamento por link",
            "Narrativas avançadas",
          ],
        },
        business: {
          name: "Empresarial",
          desc: "Para times",
          period: "/mês",
          cta: "Falar com Vendas",
          features: [
            "Relatórios ilimitados",
            "Área de equipe",
            "Políticas de acesso",
            "Segurança avançada",
          ],
        },
      },
    },
    showcase: {
      title: "Exemplos de Relatórios",
      subtitle:
        "Veja como seus dados ganham vida com análises profissionais prontas para compartilhar.",
      portrait: {
        title: "Formato Retrato (A4)",
        header: "RELATÓRIO EXECUTIVO",
        analysis: "Análise de Vendas Q4",
        summary: "Resumo Gerencial",
        summary_text:
          "Crescimento de 23% nas vendas comparado ao último trimestre, com destaque para...",
        metrics: "Principais Indicadores",
        revenue: "Receita: R$ 2.4M",
        growth: "Crescimento: +23%",
        dist: "Distribuição por Região",
        southeast: "Sudeste",
        south: "Sul",
        northeast: "Nordeste",
        generated: "Gerado automaticamente",
      },
      landscape: {
        title: "Formato Paisagem (Painel)",
        header: "RELATÓRIO ANALÍTICO",
        subtitle: "Performance Mensal",
        generated_on: "Gerado em: {{date}}",
        period: "Período: {{period}}",
        kpi_title: "Indicadores Chave",
        rev_total: "Receita Total",
        new_clients: "Novos Clientes",
        trend_title: "Tendência de Vendas",
        ai_title: "Recomendações IA",
        opportunity: "Oportunidade",
        opp_text: "Expandir campanha região Sul (+15% potencial)",
        attention: "Atenção",
        att_text: "Queda na retenção de clientes detectada",
        ai_footer: "Dados processados por IA estratégica",
        page_info: "Página {{current}} de {{total}}",
      },
      cta: "Criar Meu Relatório Agora",
    },
  },
  Py = {
    title: "Painel de Decisão",
    subtitle: "Análise inteligente para tomada de decisão estratégica",
    period: {
      current: "Atual",
      last_month: "Último Mês",
      quarter: "Trimestre",
    },
    actions: { filters: "Filtros", export: "Exportar", refresh: "Atualizar" },
    alert: {
      critical_detected: "Situação Crítica Detectada:",
      analyze_now: "Analisar agora",
    },
    tabs: {
      overview: "Visão Geral",
      situation: "Situação",
      recommendations: "Recomendações",
      actions: "Plano de Ação",
    },
    situation: {
      priority_title: "Situação Prioritária",
      metrics_title: "Métricas Impactadas",
      technical_context: "Contexto Técnico",
      actionable_translation: "Tradução Acionável",
      detailed_analysis: "Análise Detalhada da Situação",
      metrics_analysis: "Análise de Métricas",
      crossed_impact: "Impacto Cruzado",
    },
    kpi: {
      recommendations: "Recomendações",
      recommendations_subtitle: "Soluções identificadas",
      average_confidence: "Confiança Média",
      average_confidence_subtitle: "Baseada em dados",
      expected_impact: "Impacto Esperado",
      expected_impact_subtitle: "Recuperação em 90 dias",
    },
    recommendations: {
      title: "Recomendações Estratégicas",
      filter: "Filtrar",
      export: "Exportar",
      view_details: "Ver Detalhes",
      implement: "Implementar",
      expected_impact: "Impacto Esperado",
      timeframe: "Prazo",
      confidence: "Confiança",
      actions_title: "Ações Recomendadas",
      responsible: "Responsável",
      deadline: "Prazo",
    },
    action_plan: {
      title: "Plano de Ação Consolidado",
      export_plan: "Exportar Plano",
      summary_title: "Resumo do Plano de Ação",
      immediate_actions: "Ações Imediatas",
      immediate_actions_desc: "Próximos 15 dias",
      medium_term_actions: "Ações de Médio Prazo",
      medium_term_actions_desc: "Próximos 60 dias",
      expected_impact: "Impacto Esperado",
      expected_impact_desc: "Recuperação em 90 dias",
      implementation_timeline: "Timeline de Implementação",
      start_implementation: "Iniciar Implementação",
      view_details: "Ver Detalhes",
    },
  },
  Iy = {
    public: "Público",
    loading: "Carregando...",
    processing: "Processando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    edit: "Editar",
    delete: "Excluir",
    view: "Visualizar",
    open: "Abrir",
    close: "Fechar",
    share: "Compartilhar",
    download: "Baixar",
    upload: "Enviar",
    search: "Buscar",
    filter: "Filtrar",
    export: "Exportar",
    import: "Importar",
    refresh: "Atualizar",
    next: "Próximo",
    previous: "Anterior",
    back: "Voltar",
    continue: "Continuar",
    finish: "Finalizar",
    submit: "Enviar",
    confirm: "Confirmar",
    yes: "Sim",
    no: "Não",
    ok: "OK",
    done: "Concluído",
    pending: "Pendente",
    active: "Ativo",
    inactive: "Inativo",
    enabled: "Habilitado",
    disabled: "Desabilitado",
    required: "Obrigatório",
    optional: "Opcional",
    all: "Todos",
    none: "Nenhum",
    month: "Mês",
    quarter: "Trimestre",
    year: "Ano",
    current: "Atual",
    last_month: "Último Mês",
    details: "Detalhes",
    settings: "Configurações",
    profile: "Perfil",
    logout: "Sair",
    login: "Entrar",
    signup: "Cadastrar",
    or: "ou",
    and: "e",
    from: "de",
    to: "para",
    at: "em",
    by: "por",
    with: "com",
    without: "sem",
    please: "Por favor",
    thank_you: "Obrigado",
  },
  ky = {
    not_found_title: "Página não encontrada",
    not_found_desc:
      "A página que você está procurando não existe ou foi movida.",
    return_home: "Voltar para o início",
  },
  Dy = {
    title: "Painel Principal",
    subtitle: "Visão geral das métricas e performance",
    period: { month: "Mês", quarter: "Trimestre", year: "Ano" },
    summary: {
      title: "Resumo Executivo",
      description:
        "Performance geral em alta com 82/100 no score de saúde. Receita cresceu 18% e todos os domínios operacionais estão no caminho certo.",
      view_details: "Ver detalhes",
    },
    tabs: {
      overview: "Visão Geral",
      domains: "Por Domínio",
      trends: "Tendências",
      insights: "Insights",
    },
    sections: {
      metrics_by_domain: "Métricas por Domínio",
      trends_analysis: "Análise de Tendências",
      strategic_insights: "Insights Estratégicos",
      view_details_by_domain: "Ver Detalhes por Domínio",
      decision_panel: "Painel de Decisão",
      view_details: "Ver Detalhes",
      period: "Período",
      view_complete_analytics: "Ver Analytics Completo",
    },
    settings: {
      profile: {
        change_photo: "Alterar Foto",
        first_name: "Nome",
        last_name: "Sobrenome",
        email: "E-mail",
        company: "Empresa",
        role: "Cargo",
      },
    },
    profile: {
      fields: { email_hint: "Para alterar seu e-mail, contate o suporte" },
      actions: { revert_changes: "Reverter Mudanças" },
    },
    wizard: {
      validating: "Validando...",
      finish: "Concluir",
      next: "Próximo",
      previous: "Anterior",
    },
    validation: { required: "Obrigatório", invalid_format: "Formato inválido" },
  },
  Ly = {
    login_title: "Entrar na sua conta",
    signup_title: "Criar sua conta gratuitamente",
    google_button: "Entrar com Google",
    separator: "ou",
    email_label: "E-mail profissional",
    email_placeholder: "seu@email.com",
    password_label: "Senha",
    password_placeholder: "Digite sua senha",
    submit_login: "Entrar",
    submit_signup: "Criar conta",
    switch_to_login: "Já tem uma conta? Entrar",
    switch_to_signup: "Não tem uma conta? Criar conta",
    forgot_password: "Esqueceu sua senha?",
    terms_prefix: "Ao criar uma conta, você concorda com nossos",
    terms_link: "Termos de Serviço",
    and: "e",
    privacy_link: "Política de Privacidade",
  },
  jy = {
    index_title: "SuperRelatórios - Transforme Dados em Decisões",
    index_desc:
      "Gere relatórios inteligentes em minutos. A plataforma de BI feita para PMEs que buscam crescimento real.",
  },
  Ny = {
    bi: Sy,
    brand: Ay,
    nav: Cy,
    routes: Ry,
    search: Oy,
    landing: Ty,
    decision_panel: Py,
    common: Iy,
    errors: ky,
    dashboard: Dy,
    auth: Ly,
    seo: jy,
  },
  $y = {
    areas: {
      strategy: { name: "Strategy", desc: "Long-term vision and objectives" },
      management: { name: "Management", desc: "Efficiency and governance" },
      finance: { name: "Finance", desc: "Cash flow and profitability" },
      sales: { name: "Sales", desc: "Funnel and sales performance" },
      marketing: { name: "Marketing", desc: "Acquisition and channels" },
      operations: { name: "Operations", desc: "Processes and productivity" },
      logistics: { name: "Logistics", desc: "Supply chain and delivery" },
      customer_service: {
        name: "Customer Service",
        desc: "Support and satisfaction",
      },
      hr: { name: "HR", desc: "Human capital and retention" },
    },
    metrics: {
      revenue: { name: "Revenue", desc: "Total gross revenue for the period" },
      gross_margin: {
        name: "Gross Margin",
        desc: "Profit percentage on sales",
      },
      ebitda: { name: "EBITDA", desc: "Operating profit before taxes" },
      cac: { name: "CAC", desc: "Customer Acquisition Cost" },
      ltv: { name: "LTV", desc: "Customer Lifetime Value" },
      churn: { name: "Churn", desc: "Customer cancellation rate" },
      roas: { name: "ROAS", desc: "Return on Advertising Spend" },
      cpa: { name: "CPA", desc: "Cost per acquisition" },
      conversion_rate: {
        name: "Conversion Rate",
        desc: "Leads to sales conversion",
      },
      turnover: { name: "Turnover", desc: "Employee turnover rate" },
      enps: { name: "eNPS", desc: "Employee loyalty and satisfaction level" },
    },
  },
  My = { super: "Super", reports: "Reports" },
  By = {
    overview: "Overview",
    metrics: "Metrics",
    decision_panel: "Decision Panel",
    analytics: "Analytics",
    consolidated: "Consolidated",
    priorities: "Priorities",
    action_plan: "Action Plan",
    reports: "Reports",
    new_report: "New Report",
    data: "My Data",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    notifications: "Notifications",
    user_menu: "User Menu",
    open_menu: "Open Menu",
    main_navigation: "Main Navigation",
    details: "Details",
    metrics_config: "Configure Metrics",
  },
  Fy = {
    dashboard: "Overview",
    reports: "Reports",
    reports_new: "New Report",
    metrics: "Metrics",
    metrics_config: "Configure Metrics",
    decision_panel: "Decision Panel",
    analytics: "Analytics",
    consolidated: "Consolidated",
    priorities: "Priorities",
    action_plan: "Action Plan",
    data: "My Data",
    profile: "Profile",
    settings: "Settings",
  },
  Uy = { placeholder: "Search reports, metrics..." },
  qy = {
    nav_links: {
      features: "Features",
      how_it_works: "How it Works",
      pricing: "Pricing",
      cta: "Create Free Report",
    },
    hero: {
      title: "Transform your data into strategic decisions in minutes",
      subtitle:
        "Generate professional reports in 3 clicks, with business intelligence that helps you grow.",
      badge: "Consultancy-level analysis, at a fraction of price.",
      cta_main: "Create My First Report",
      cta_sec: "See Demo",
      features: {
        clicks: "3 clicks from upload to report",
        insights: "Clear Performance Indicators",
        security: "Total security for your data",
      },
    },
    trust_section: {
      title: "Transparency and Trust",
      subtitle:
        "As a growth-focused platform, we prioritize total confidentiality and dedicated support for your company.",
      items: {
        privacy: {
          title: "Privacy & Control",
          desc: "Your data never leaves your control. Secure processing and automatic deletion after analysis.",
          tag: "100% secure",
        },
        support: {
          title: "Strategic Support",
          desc: "We accompany your first report to ensure the generated intelligence is practical and useful.",
          tag: "Support included",
        },
        roadmap: {
          title: "Evolution with You",
          desc: "Our roadmap is open: you suggest improvements and we build based on your real feedback.",
          tag: "User-focused",
        },
      },
    },
    examples: {
      title: "See the level of generated analysis",
      subtitle:
        "Each report is unique, adapted to your data and business context. See what you receive in seconds.",
      main: {
        title: "Strategic Report",
        subtitle: "Performance and Business Health Analysis",
        cta: "Generate Sample Report",
        sections: {
          summary: {
            title: "Executive Summary",
            desc: "General company overview with vital metrics and clear strategic directions.",
          },
          highlights: {
            title: "Strengths",
            desc: `• 23% growth in sales
• 15% reduction in operational costs
• Solid increase in customer satisfaction`,
          },
          analysis: {
            title: "Trend Analysis",
            desc: "Performance charts with monthly comparisons and correlations between indicators.",
          },
          risks: {
            title: "Risks and Opportunities",
            desc: "Proactive identification of bottlenecks and growth opportunities based on real patterns.",
          },
          insights: {
            title: "AI Insights",
            desc: "Specific recommendations to optimize your results and reduce waste.",
          },
          checklist: {
            title: "Action Plan",
            desc: "List of practical tasks organized by priority and expected impact on profit.",
          },
        },
      },
      others: {
        sales: {
          title: "Monthly Sales",
          desc: "Commercial performance with practical insights",
        },
        clients: {
          title: "Customer Analysis",
          desc: "Detailed segmentation and buying behavior",
        },
        financial: {
          title: "Financial Management",
          desc: "Flow and margin analysis for management",
        },
        view: "View Example",
      },
      footer_cta: "Create My Report Now",
      footer_hint: "First analysis free • No credit card required",
    },
    features_section: {
      title: "Why choose {{brand}}?",
      subtitle:
        "Artificial Intelligence developed specifically for SMEs that need professional analysis, scenarios, and projections without complication.",
      items: {
        context: {
          title: "Intelligence that understands your business",
          desc: "Our AI doesn't just read data, it understands your industry context and generates diagnostics in minutes.",
        },
        decisions: {
          title: "Fact-based decisions",
          desc: "Stop deciding on 'feeling'. Receive projections and insights that were once restricted to expensive consultancies.",
        },
        privacy: {
          title: "Bank-Level Privacy",
          desc: "Your strategic data is treated with absolute confidentiality, full encryption, and data protection.",
        },
      },
    },
    how_it_works: {
      title: "How it Works",
      subtitle:
        "A simple and powerful solution, designed for the speed your daily life demands.",
      steps: {
        upload: {
          title: "Send your data",
          desc: "Upload your spreadsheet (.xlsx or .csv) or simply paste your text. Our AI organizes everything.",
        },
        target: {
          title: "Choose goal",
          desc: "Management Summary, Financial Analysis, or Action Plan — you choose the analysis focus.",
        },
        receive: {
          title: "Receive report",
          desc: "View instantly, share the link, or export to PDF with one click.",
        },
      },
      quick_start: {
        title: "Start Now with a Template",
        cta: "Create Now",
        exec: {
          title: "Management Summary",
          desc: "For a quick 360º view of your company's current health.",
        },
        sales: {
          title: "Sales Analysis",
          desc: "To understand who buys, when they buy, and how to sell even more.",
        },
        full: {
          title: "Deep Diagnostic",
          desc: "Our AI analyzes every detail and delivers strategic recommendations.",
        },
      },
    },
    cta: {
      title: "Ready to take your business to the next level?",
      subtitle:
        "Join thousands of companies that already transform raw data into competitive intelligence.",
      button: "Start for Free",
      features: {
        no_card: "No credit card required",
        cancel_anytime: "Cancel anytime",
        fast_setup: "Quick to implement",
      },
    },
    benefits: {
      title: "Strategic intelligence for your daily life",
      subtitle:
        "Eliminate manual work and focus on what really matters: your business strategy.",
      items: {
        speed: {
          title: "Results in minutes",
          desc: "What used to take hours now takes minutes. Focus your team on what really brings results.",
        },
        action: {
          title: "Analysis and Next Steps",
          desc: "Metrics with an eye on data, and insights focused on strategic action and decision support.",
        },
        design: {
          title: "Ready to send",
          desc: "Professional, clean, and elegant layout — makes a positive impact on clients and investors.",
        },
        viz: {
          title: "Automatic Visualizations",
          desc: "Charts, tables, and visual indicators generated instantly for easy understanding.",
        },
        narrative: {
          title: "Adapted Narrative",
          desc: "The system adapts tone of voice and vocabulary according to your sector and business context.",
        },
        security: {
          title: "Your Data, Your Property",
          desc: "Total security with end-to-end encryption. Your data is used only for your analysis.",
        },
      },
    },
    footer: {
      mission:
        "Intelligent AI reports for SMEs looking to grow through automated data and projections.",
      sections: {
        product: {
          title: "Product",
          features: "Features",
          how_it_works: "How it Works",
          pricing: "Pricing",
          integrations: "Integrations",
        },
        support: {
          title: "Support",
          help: "Help Center",
          docs: "Documentation",
          status: "Status",
          contact: "Contact",
        },
        legal: {
          title: "Legal",
          privacy: "Privacy",
          terms: "Terms",
          security: "Security",
          cookies: "Cookies",
        },
      },
      copyright: "© {{year}} {{brand}}. All rights reserved.",
    },
    pricing: {
      title: "Simple and transparent plans",
      subtitle:
        "Choose by report volume and collaboration. Start for free and evolve when it makes sense for your business.",
      recommended: "Recommended",
      plans: {
        free: {
          name: "Free",
          desc: "Get started",
          period: "/forever",
          cta: "Create Free Report",
          features: ["2 reports/month", "Basic templates", "Export to PDF"],
        },
        pro: {
          name: "Professional",
          desc: "Most popular",
          period: "/month",
          cta: "Try Now",
          features: [
            "20 reports/month",
            "Premium templates",
            "Link sharing",
            "Advanced narratives",
          ],
        },
        business: {
          name: "Business",
          desc: "For teams",
          period: "/month",
          cta: "Talk to Sales",
          features: [
            "Unlimited reports",
            "Team area",
            "Access policies",
            "Advanced security",
          ],
        },
      },
    },
    showcase: {
      title: "Report Examples",
      subtitle:
        "See how your data comes to life with professional analyses ready to share.",
      portrait: {
        title: "Portrait Format (A4)",
        header: "EXECUTIVE REPORT",
        analysis: "Q4 Sales Analysis",
        summary: "Management Summary",
        summary_text:
          "23% growth in sales compared to last quarter, with highlights for...",
        metrics: "Key Indicators",
        revenue: "Revenue: $2.4M",
        growth: "Growth: +23%",
        dist: "Distribution by Region",
        southeast: "Southeast",
        south: "South",
        northeast: "Northeast",
        generated: "Generated automatically",
      },
      landscape: {
        title: "Landscape Format (Dashboard)",
        header: "ANALYTICS REPORT",
        subtitle: "Monthly Performance",
        generated_on: "Generated on: {{date}}",
        period: "Period: {{period}}",
        kpi_title: "Key Indicators",
        rev_total: "Total Revenue",
        new_clients: "New Customers",
        trend_title: "Sales Trend",
        ai_title: "AI Recommendations",
        opportunity: "Opportunity",
        opp_text: "Expand campaign South region (+15% potential)",
        attention: "Attention",
        att_text: "Customer retention drop detected",
        ai_footer: "Data processed by strategic AI",
        page_info: "Page {{current}} of {{total}}",
      },
      cta: "Create My Report Now",
    },
  },
  Vy = {
    title: "Decision Panel",
    subtitle: "Intelligent analysis for strategic decision-making",
    period: {
      current: "Current",
      last_month: "Last Month",
      quarter: "Quarter",
    },
    actions: { filters: "Filters", export: "Export", refresh: "Refresh" },
    alert: {
      critical_detected: "Critical Situation Detected:",
      analyze_now: "Analyze now",
    },
    tabs: {
      overview: "Overview",
      situation: "Situation",
      recommendations: "Recommendations",
      actions: "Action Plan",
    },
    situation: {
      priority_title: "Priority Situation",
      metrics_title: "Impacted Metrics",
      technical_context: "Technical Context",
      actionable_translation: "Actionable Translation",
      detailed_analysis: "Detailed Situation Analysis",
      metrics_analysis: "Metrics Analysis",
      crossed_impact: "Crossed Impact",
    },
    kpi: {
      recommendations: "Recommendations",
      recommendations_subtitle: "Solutions identified",
      average_confidence: "Average Confidence",
      average_confidence_subtitle: "Based on data",
      expected_impact: "Expected Impact",
      expected_impact_subtitle: "Recovery in 90 days",
    },
    recommendations: {
      title: "Strategic Recommendations",
      filter: "Filter",
      export: "Export",
      view_details: "View Details",
      implement: "Implement",
      expected_impact: "Expected Impact",
      timeframe: "Timeframe",
      confidence: "Confidence",
      actions_title: "Recommended Actions",
      responsible: "Responsible",
      deadline: "Deadline",
    },
    action_plan: {
      title: "Consolidated Action Plan",
      export_plan: "Export Plan",
      summary_title: "Action Plan Summary",
      immediate_actions: "Immediate Actions",
      immediate_actions_desc: "Next 15 days",
      medium_term_actions: "Medium Term Actions",
      medium_term_actions_desc: "Next 60 days",
      expected_impact: "Expected Impact",
      expected_impact_desc: "Recovery in 90 days",
      implementation_timeline: "Implementation Timeline",
      start_implementation: "Start Implementation",
      view_details: "View Details",
    },
  },
  zy = {
    public: "Public",
    loading: "Loading...",
    processing: "Processing...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    open: "Open",
    close: "Close",
    share: "Share",
    download: "Download",
    upload: "Upload",
    search: "Search",
    filter: "Filter",
    export: "Export",
    import: "Import",
    refresh: "Refresh",
    next: "Next",
    previous: "Previous",
    back: "Back",
    continue: "Continue",
    finish: "Finish",
    submit: "Submit",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    ok: "OK",
    done: "Done",
    pending: "Pending",
    active: "Active",
    inactive: "Inactive",
    enabled: "Enabled",
    disabled: "Disabled",
    required: "Required",
    optional: "Optional",
    all: "All",
    none: "None",
    month: "Month",
    quarter: "Quarter",
    year: "Year",
    current: "Current",
    last_month: "Last Month",
    details: "Details",
    settings: "Settings",
    profile: "Profile",
    logout: "Logout",
    login: "Login",
    signup: "Sign Up",
    or: "or",
    and: "and",
    from: "from",
    to: "to",
    at: "at",
    by: "by",
    with: "with",
    without: "without",
    please: "Please",
    thank_you: "Thank you",
  },
  Hy = {
    not_found_title: "Page not found",
    not_found_desc:
      "The page you are looking for does not exist or has been moved.",
    return_home: "Return to home",
  },
  Gy = {
    title: "Main Dashboard",
    subtitle: "Overview of metrics and performance",
    period: { month: "Month", quarter: "Quarter", year: "Year" },
    summary: {
      title: "Executive Summary",
      description:
        "Overall performance up with 82/100 health score. Revenue grew 18% and all operational domains are on the right track.",
      view_details: "View details",
    },
    tabs: {
      overview: "Overview",
      domains: "By Domain",
      trends: "Trends",
      insights: "Insights",
    },
    sections: {
      metrics_by_domain: "Metrics by Domain",
      trends_analysis: "Trends Analysis",
      strategic_insights: "Strategic Insights",
      view_details_by_domain: "View Details by Domain",
      decision_panel: "Decision Panel",
      view_details: "View Details",
      period: "Period",
      view_complete_analytics: "View Complete Analytics",
    },
    settings: {
      profile: {
        change_photo: "Change Photo",
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        company: "Company",
        role: "Role",
      },
    },
    profile: {
      fields: { email_hint: "To change your email, contact support" },
      actions: { revert_changes: "Revert Changes" },
    },
    wizard: {
      validating: "Validating...",
      finish: "Finish",
      next: "Next",
      previous: "Previous",
    },
    validation: { required: "Required", invalid_format: "Invalid Format" },
  },
  Wy = {
    login_title: "Sign in to your account",
    signup_title: "Create your free account",
    google_button: "Sign in with Google",
    separator: "or",
    email_label: "Professional email",
    email_placeholder: "your@email.com",
    password_label: "Password",
    password_placeholder: "Enter your password",
    submit_login: "Sign in",
    submit_signup: "Create account",
    switch_to_login: "Already have an account? Sign in",
    switch_to_signup: "Don't have an account? Create account",
    forgot_password: "Forgot your password?",
    terms_prefix: "By creating an account, you agree to our",
    terms_link: "Terms of Service",
    and: "and",
    privacy_link: "Privacy Policy",
  },
  Ky = {
    index_title: "SuperRelatórios - Transform Data into Decisions",
    index_desc:
      "Generate intelligent reports in minutes. The BI platform built for SMEs seeking real growth.",
  },
  Jy = {
    bi: $y,
    brand: My,
    nav: By,
    routes: Fy,
    search: Uy,
    landing: qy,
    decision_panel: Vy,
    common: zy,
    errors: Hy,
    dashboard: Gy,
    auth: Wy,
    seo: Ky,
  },
  Yy = {
    areas: {
      strategy: {
        name: "Estrategia",
        desc: "Visión de largo plazo y objetivos",
      },
      management: { name: "Gestión", desc: "Eficiencia y gobernanza" },
      finance: { name: "Finanzas", desc: "Flujo de caja y rentabilidad" },
      sales: { name: "Comercial", desc: "Embudo y desempeño de ventas" },
      marketing: { name: "Marketing", desc: "Adquisición y canales" },
      operations: { name: "Operaciones", desc: "Procesos y productividad" },
      logistics: { name: "Logística", desc: "Cadena de suministro y entrega" },
      customer_service: {
        name: "Atención al Cliente",
        desc: "Soporte y satisfacción",
      },
      hr: { name: "Recursos Humanos", desc: "Capital humano y retención" },
    },
    metrics: {
      revenue: {
        name: "Ingresos",
        desc: "Ingresos brutos totales del período",
      },
      gross_margin: {
        name: "Margen Bruto",
        desc: "Porcentaje de beneficio sobre la venta",
      },
      ebitda: {
        name: "EBITDA",
        desc: "Beneficio operativo antes de impuestos",
      },
      cac: { name: "CAC", desc: "Costo de Adquisición de Cliente" },
      ltv: { name: "LTV", desc: "Valor de vida del cliente" },
      churn: {
        name: "Tasa de Cancelación",
        desc: "Porcentaje de clientes que dejaron de comprar",
      },
      roas: { name: "ROAS", desc: "Retorno sobre gasto publicitario" },
      cpa: { name: "CPA", desc: "Costo por adquisición" },
      conversion_rate: {
        name: "Tasa de Conversión",
        desc: "Conversión de prospectos en ventas",
      },
      turnover: { name: "Rotación", desc: "Tasa de rotación de empleados" },
      enps: {
        name: "eNPS",
        desc: "Nivel de lealtad y satisfacción de los colaboradores",
      },
    },
  },
  Qy = { super: "Súper", reports: "Reportes" },
  Xy = {
    public: "Público",
    loading: "Cargando...",
    processing: "Procesando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    view: "Visualizar",
    open: "Abrir",
    close: "Cerrar",
    share: "Compartir",
    download: "Descargar",
    upload: "Subir",
    search: "Buscar",
    filter: "Filtrar",
    export: "Exportar",
    import: "Importar",
    refresh: "Actualizar",
    next: "Siguiente",
    previous: "Anterior",
    back: "Volver",
    continue: "Continuar",
    finish: "Finalizar",
    submit: "Enviar",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No",
    ok: "OK",
    done: "Completado",
    pending: "Pendiente",
    active: "Activo",
    inactive: "Inactivo",
    enabled: "Habilitado",
    disabled: "Deshabilitado",
    required: "Obligatorio",
    optional: "Opcional",
    all: "Todos",
    none: "Ninguno",
    month: "Mes",
    quarter: "Trimestre",
    year: "Año",
    current: "Actual",
    last_month: "Último Mes",
    details: "Detalles",
    settings: "Configuraciones",
    profile: "Perfil",
    logout: "Cerrar Sesión",
    login: "Iniciar Sesión",
    signup: "Registrarse",
    or: "o",
    and: "y",
    from: "de",
    to: "para",
    at: "en",
    by: "por",
    with: "con",
    without: "sin",
    please: "Por favor",
    thank_you: "Gracias",
  },
  Zy = {
    hero: {
      title: "Transforme sus datos en decisiones estratégicas en minutos",
      subtitle:
        "Genere reportes profesionales en 3 clics, con inteligencia de negocio que le ayuda a crecer.",
      badge: "Análisis de nivel consultoría, por una fracción del precio.",
      cta_main: "Crear Mi Primer Reporte",
      cta_sec: "Ver Demostración",
      features: {
        clicks: "3 clics desde el envío al reporte",
        insights: "Indicadores de Resultado claros",
        security: "Seguridad total de sus datos",
      },
    },
    nav_links: {
      features: "Recursos",
      how_it_works: "Cómo Funciona",
      pricing: "Precios",
      cta: "Crear Reporte Gratis",
      aria_menu: "Abrir menú principal",
    },
    trust_section: {
      title: "Transparencia y Confianza",
      subtitle:
        "Como una plataforma enfocada en el crecimiento, priorizamos el secreto total y el soporte dedicado para su empresa.",
      items: {
        privacy: {
          title: "Privacidad & Control",
          desc: "Sus datos nunca salen de su control. Procesamiento seguro y eliminación automática tras el análisis.",
          tag: "100% seguro",
        },
        support: {
          title: "Soporte Estratégico",
          desc: "Acompañamos su primer reporte para garantizar que la inteligencia generada sea práctica y útil.",
          tag: "Soporte incluido",
        },
        roadmap: {
          title: "Evolución con Usted",
          desc: "Nuestra hoja de ruta é abierta: usted sugiere mejoras y nosotros construimos basados en sus comentarios reales.",
          tag: "Foco en el usuario",
        },
      },
    },
    examples: {
      title: "Vea el nivel de los análisis generados",
      subtitle:
        "Cada reporte es único, adaptado a sus datos y contexto empresarial. Vea lo que recibe en segundos.",
      main: {
        title: "Reporte Estratégico",
        subtitle: "Análisis de Performance y Salud del Negocio",
        cta: "Generar Reporte Modelo",
        sections: {
          summary: {
            title: "Resumen Ejecutivo",
            desc: "Visión general de la empresa con métricas vitales y direccionamientos estratégicos claros.",
          },
          highlights: {
            title: "Puntos Destacados",
            desc: `• Crecimiento del 23% en ventas
• Reducción del 15% en costos operativos
• Aumento sólido en la satisfacción del cliente`,
          },
          analysis: {
            title: "Análisis de Tendencia",
            desc: "Gráficos de performance con comparativos mensuales y correlaciones entre indicadores.",
          },
          risks: {
            title: "Riesgos y Oportunidades",
            desc: "Identificación proactiva de cuellos de botella y oportunidades de crecimiento basadas en patrones reales.",
          },
          insights: {
            title: "Insights de IA",
            desc: "Recomendaciones específicas para optimizar sus resultados y reducir desperdicios.",
          },
          checklist: {
            title: "Plan de Acción",
            desc: "Lista de tareas prácticas organizadas por prioridad e impacto esperado en el beneficio.",
          },
        },
      },
      others: {
        sales: {
          title: "Ventas Mensuales",
          desc: "Performance comercial con insights prácticos",
        },
        clients: {
          title: "Análisis de Clientes",
          desc: "Segmentación y comportamiento de compra detallado",
        },
        financial: {
          title: "Gestión Financiera",
          desc: "Análisis de flujo y márgenes para la dirección",
        },
        view: "Ver Ejemplo",
      },
      footer_cta: "Crear Mi Reporte Ahora",
      footer_hint: "Primer análisis gratis • Sin tarjeta de crédito",
    },
    features_section: {
      title: "¿Por qué elegir {{brand}}?",
      subtitle:
        "Inteligencia Artificial desarrollada específicamente para Pymes que necesitan análisis profesionales, escenarios y proyecciones sin complicaciones.",
      items: {
        context: {
          title: "Inteligencia que entiende su negocio",
          desc: "Nuestra IA no solo lee datos, entiende el contexto de su sector y genera diagnósticos en minutos.",
        },
        decisions: {
          title: "Decisiones basadas en hechos",
          desc: "Deje de decidir por 'feeling'. Reciba proyecciones e insights que antes estaban restringidos a consultorías caras.",
        },
        privacy: {
          title: "Privacidad de Nivel Bancario",
          desc: "Sus datos estratégicos se tratan con secreto absoluto, cifrado total y protección de datos.",
        },
      },
    },
    how_it_works: {
      title: "Cómo Funciona",
      subtitle:
        "Una solución simple y poderosa, pensada para la velocidad que su día a día exige.",
      steps: {
        upload: {
          title: "Envíe sus datos",
          desc: "Cargue su planilla (.xlsx o .csv) o simplemente pegue su texto. Nuestra IA organiza todo.",
        },
        target: {
          title: "Elija el objetivo",
          desc: "Resumen Gerencial, Análisis Financiero o Plan de Acción — usted elige el foco del análisis.",
        },
        receive: {
          title: "Reciba el reporte",
          desc: "Visualice al instante, comparta el enlace o exporte a PDF con un clic.",
        },
      },
      quick_start: {
        title: "Comience Ahora con un Modelo",
        cta: "Crear Ahora",
        exec: {
          title: "Resumen de Gestión",
          desc: "Para una visión 360º rápida de la salud actual de su empresa.",
        },
        sales: {
          title: "Análisis de Ventas",
          desc: "Para entender quién compra, cuándo compra y cómo vender aún más.",
        },
        full: {
          title: "Diagnóstico Profundo",
          desc: "Nuestra IA analiza cada detalle y entrega recomendaciones estratégicas.",
        },
      },
    },
    cta: {
      title: "¿Listo para llevar su negocio al siguiente nivel?",
      subtitle:
        "Únase a miles de empresas que ya transforman datos brutos en inteligencia competitiva.",
      button: "Comenzar Gratuitamente",
      features: {
        no_card: "Sin tarjeta de crédito",
        cancel_anytime: "Cancele cuando quiera",
        fast_setup: "Rápido en la aplicación",
      },
    },
    benefits: {
      title: "Inteligencia estratégica para su día a día",
      subtitle:
        "Elimine el trabajo manual y enfóquese en lo que realmente importa: la estrategia de su negocio.",
      items: {
        speed: {
          title: "Resultados en minutos",
          desc: "Lo que llevaba horas ahora lleva minutos. Enfoque a su equipo en lo que realmente trae resultados.",
        },
        action: {
          title: "Análisis y Próximos Pasos",
          desc: "Métricas con la mirada en los datos, e insights enfocados en la acción estratégica y apoyo a la decisión.",
        },
        design: {
          title: "Listo para enviar",
          desc: "Diseño profesional, limpio y elegante — causa un impacto positivo en clientes e inversores.",
        },
        viz: {
          title: "Visualizaciones Automáticas",
          desc: "Gráficos, tablas e indicadores visuales generados al instante para facilitar el entendimiento.",
        },
        narrative: {
          title: "Narrativa Adaptada",
          desc: "El sistema adapta el tono de voz y el vocabulario de acuerdo con su sector y contexto empresarial.",
        },
        security: {
          title: "Sus Datos, Su Propiedad",
          desc: "Seguridad total con cifrado de punta. Sus datos se usan solo para su análisis.",
        },
      },
    },
    footer: {
      mission:
        "Reportes inteligentes con IA para Pymes que buscan crecer a través de datos y proyecciones automatizadas.",
      sections: {
        product: {
          title: "Producto",
          features: "Recursos",
          how_it_works: "Cómo Funciona",
          pricing: "Precios",
          integrations: "Integraciones",
        },
        support: {
          title: "Soporte",
          help: "Centro de Ayuda",
          docs: "Documentación",
          status: "Estado",
          contact: "Contacto",
        },
        legal: {
          title: "Legal",
          privacy: "Privacidad",
          terms: "Términos",
          security: "Seguridad",
          cookies: "Cookies",
        },
      },
      copyright: "© {{year}} {{brand}}. Todos los derechos reservados.",
    },
    pricing: {
      title: "Planes simples y transparentes",
      subtitle:
        "Elija por volumen de reportes y colaboración. Comience gratis y evolucione cuando tenga sentido para su negocio.",
      recommended: "Recomendado",
      plans: {
        free: {
          name: "Gratuito",
          desc: "Comience ya",
          period: "/siempre",
          cta: "Crear Reporte Gratis",
          features: ["2 reportes/mes", "Modelos básicos", "Exportación a PDF"],
        },
        pro: {
          name: "Profesional",
          desc: "Más popular",
          period: "/mes",
          cta: "Probar Ahora",
          features: [
            "20 reportes/mes",
            "Modelos premium",
            "Compartir por enlace",
            "Narrativas avanzadas",
          ],
        },
        business: {
          name: "Empresarial",
          desc: "Para equipos",
          period: "/mes",
          cta: "Hablar con Ventas",
          features: [
            "Reportes ilimitados",
            "Área de equipo",
            "Políticas de acceso",
            "Seguridad avanzada",
          ],
        },
      },
    },
    showcase: {
      title: "Ejemplos de Reportes",
      subtitle:
        "Vea cómo sus datos cobran vida con análisis profesionales listos para compartir.",
      portrait: {
        title: "Formato Retrato (A4)",
        header: "REPORTE EJECUTIVO",
        analysis: "Análisis de Ventas Q4",
        summary: "Resumen Gerencial",
        summary_text:
          "Crecimiento del 23% en ventas comparado al último trimestre, destacando...",
        metrics: "Indicadores Principales",
        revenue: "Ingresos: $ 2.4M",
        growth: "Crecimiento: +23%",
        dist: "Distribución por Región",
        south: "Sur",
        southeast: "Sureste",
        northeast: "Noreste",
        generated: "Generado automáticamente",
      },
      landscape: {
        title: "Formato Paisaje (Panel)",
        header: "PANEL ANALÍTICO",
        subtitle: "Performance Mensual",
        generated_on: "Generado el: {{date}}",
        period: "Período: {{period}}",
        kpi_title: "Indicadores Clave",
        rev_total: "Ingresos Totales",
        new_clients: "Nuevos Clientes",
        trend_title: "Tendencia de Ventas",
        ai_title: "Recomendaciones IA",
        opportunity: "Oportunidad",
        opp_text: "Expandir campaña región Sur (+15% potencial)",
        attention: "Atención",
        att_text: "Caída en la retención de clientes detectada",
        ai_footer: "Datos procesados por IA estratégica",
        page_info: "Página {{current}} de {{total}}",
      },
      cta: "Crear Mi Reporte Ahora",
    },
  },
  eb = {
    dashboard: "Panel Principal",
    reports: "Mis Reportes",
    folders: "Mis Carpetas",
    new_report: "Crear Reporte",
    settings: "Mi Configuración",
    profile: "Mi Perfil",
    logout: "Cerrar Sesión de forma Segura",
    home: "Inicio",
    main_navigation: "Navegación Principal",
    open_menu: "Abrir Menú",
    user_menu: "Menú de Usuario",
    notifications: "Notificaciones",
  },
  tb = {
    title: "Panel Principal",
    subtitle: "Resumen de métricas y rendimiento",
    period: { month: "Mes", quarter: "Trimestre", year: "Año" },
    summary: {
      title: "Resumen Ejecutivo",
      description:
        "Rendimiento general en alza con 82/100 en el score de salud. Los ingresos crecieron 18% y todos los dominios operacionales están en el camino correcto.",
      view_details: "Ver detalles",
    },
    tabs: {
      overview: "Visión General",
      domains: "Por Dominio",
      trends: "Tendencias",
      insights: "Insights",
    },
    sections: {
      metrics_by_domain: "Métricas por Dominio",
      trends_analysis: "Análisis de Tendencias",
      strategic_insights: "Insights Estratégicos",
      view_details_by_domain: "Ver Detalles por Dominio",
      decision_panel: "Panel de Decisión",
      view_details: "Ver Detalles",
      period: "Período",
      view_complete_analytics: "Ver Analytics Completo",
    },
    settings: {
      profile: {
        change_photo: "Cambiar Foto",
        first_name: "Nombre",
        last_name: "Apellido",
        email: "Correo Electrónico",
        company: "Empresa",
        role: "Cargo",
      },
    },
    profile: {
      fields: { email_hint: "Para cambiar tu correo, contacta soporte" },
      actions: { revert_changes: "Revertir Cambios" },
    },
    wizard: {
      validating: "Validando...",
      finish: "Finalizar",
      next: "Siguiente",
      previous: "Anterior",
    },
    validation: { required: "Obligatorio", invalid_format: "Formato inválido" },
    errors: {
      not_found_title: "Página no encontrada",
      not_found_desc: "La página que buscas no existe o ha sido movida.",
      return_home: "Volver al inicio",
    },
    auth: {
      login_title: "Iniciar sesión en tu cuenta",
      signup_title: "Crear tu cuenta gratuita",
      google_button: "Iniciar sesión con Google",
      separator: "o",
      email_label: "Correo profesional",
      email_placeholder: "tu@correo.com",
      password_label: "Contraseña",
      password_placeholder: "Ingresa tu contraseña",
      submit_login: "Iniciar sesión",
      submit_signup: "Crear cuenta",
      switch_to_login: "¿Ya tienes una cuenta? Iniciar sesión",
      switch_to_signup: "¿No tienes una cuenta? Crear cuenta",
      forgot_password: "¿Olvidaste tu contraseña?",
      terms_prefix: "Al crear una cuenta, aceptas nuestros",
      terms_link: "Términos de Servicio",
      and: "y",
      privacy_link: "Política de Privacidad",
    },
  },
  nb = {
    login_title: "Entre en su cuenta",
    signup_title: "Cree su cuenta gratuitamente",
    email_label: "Correo Profesional",
    password_label: "Su Contraseña",
    email_placeholder: "nombre@empresa.com",
    password_placeholder: "••••••••",
    google_button: "Continuar con Google",
    separator: "o continúe con correo",
    submit_login: "Entrar ahora",
    submit_signup: "Crear mi cuenta gratis",
    switch_to_signup: "¿No tiene cuenta? Regístrese gratis",
    switch_to_login: "¿Ya tiene una cuenta? Entre aquí",
    terms_prefix: "Al continuar, usted acepta nuestros",
    terms_link: "Términos de Uso",
    privacy_link: "Política de Privacidad",
    and: "y",
    toast: {
      signup_success:
        "¡Registro realizado! Verifique su correo para confirmar.",
      login_success: "¡Bienvenido de nuevo! Qué bueno tenerle aquí.",
      error_generic:
        "¡Oops! Ocurrió un error en la autenticación. Inténtelo de nuevo.",
    },
  },
  rb = {
    steps: {
      summary: {
        data: { title: "Origen de Datos", desc: "Envíe o pegue sus datos" },
        model: {
          title: "Análisis Estratégico",
          desc: "La IA identifica patrones y sugiere el mejor enfoque",
        },
        blocks: {
          title: "Personalice sus Bloques",
          desc: "Reordene, elimine o edite las secciones que la IA sugirió para su informe.",
          add_block: "Añadir Nuevo Bloque",
          ai_hint_title: "Sugerencia de la IA",
          ai_hint_body:
            "Reorganizamos los bloques para contar una historia. Comenzar con el <strong>Resumen Ejecutivo</strong> ayuda a captar la atención del lector antes de entrar en los datos técnicos.",
          auto_mapping_title: "Auto-Mapeo",
          auto_mapping_body:
            "Cada bloque está conectado a sus datos originales. Si cambia un bloque, la IA recalcula los insights automáticamente.",
          loading_title: "Analizando sus datos con IA...",
          loading_desc:
            "Esto puede llevar algunos segundos mientras generamos los insights estratégicos.",
        },
        generation: {
          title: "Configuración Final",
          desc: "Estructura del documento",
        },
        final: { title: "Visualización Lista", desc: "Reporte profesional" },
      },
      data: {
        title: "Elija sus datos",
        desc: "Elija cómo prefiere enviarnos la información de su negocio.",
        sources: {
          upload: "Enviar Archivos",
          upload_desc: "Excel, CSV, PDF o Documentos",
          paste: "Pegar Datos",
          paste_desc: "Copiar y pegar texto directo",
          url: "Analizar Sitio",
          url_desc: "Extraer datos de un enlace",
        },
        dropzone: {
          title: "Arrastre sus archivos aquí o haga clic para elegir",
          hint: "Aceptamos planillas (.xlsx, .csv) y documentos",
          success: "¡Archivo cargado con éxito!",
        },
        example: "Descargar modelo de ejemplo",
        labels: {
          paste_area: "Pegue sus datos aquí",
          paste_placeholder: "Pegue aquí sus datos, texto, números, tablas...",
          chars: "caracteres",
          url_input: "Enlace de la página o sitio",
          url_placeholder: "https://ejemplo.com/reporte",
        },
      },
      template: {
        title: "Confirmación y Modelo",
        desc: "Nuestra inteligencia artificial analizó sus datos. Ahora, defina cuál será el enfoque de su análisis estratégico.",
        preview_title: "Datos Identificados",
        source_label: "Fuente:",
        size_label: "Volumen:",
        status_label: "Calidad:",
        status_val: "Listo para análisis",
        selection_title: "Enfoque del Reporte",
        sections_label: "Qué se analizará:",
      },
      generation: {
        title: "Detalles del Documento",
        desc: "Personalice el nombre y el objetivo para que la IA genere un análisis más preciso.",
        form: {
          title_label: "Título del Reporte",
          title_placeholder: "Ej: Ventas Mensuales - Enero 2024",
          cat_label: "Categoría / Área",
          cat_placeholder: "Elija el área estratégica",
          desc_label: "Objetivo del Análisis (Opcional)",
          desc_placeholder:
            "Describa en qué debe enfocarse este reporte o el problema que quiere resolver...",
        },
        structure: {
          title: "Estructura Inteligente",
          desc: "Su análisis contará con los siguientes módulos automáticos:",
        },
      },
      preview: {
        title: "Análisis Concluido",
        desc: "Revise el análisis generado antes de guardarlo en su cuenta.",
        ai_badge: "Informe Generado por IA",
        save_card_title: "¿Desea guardar este análisis?",
        save_card_desc:
          "Al guardarlo, este informe estará disponible en su historial para consulta y exportación.",
        save_button: "Guardar en mi cuenta",
        cta_initial: "Generar Informe con IA",
        cta_loading: "Analizando con IA...",
        ai_processing_desc:
          "Nuestra IA está cruzando sus datos con patrones de mercado para generar recomendaciones.",
        diagnostic_title: "Diagnóstico y Próximos Pasos",
        recommended_priority: "Prioridad Recomendada",
        recommended_priority_desc:
          "Basado en el diagnóstico anterior, la IA calculó que esta es la acción de mayor retorno inmediato para su negocio.",
        ai_engine: "SúperReportes IA — Gemini 1.5 Pro",
      },
    },
    title: "Asistente de Reportes",
    step_indicator: { prefix: "Etapa", value: "{{current}} de {{total}}" },
    sidebar: {
      summary_title: "Progreso de la Creación",
      ai_hint_title: "Dica Inteligente",
      consultant_hint: "Dica del Consultor",
      ai_suggestions: "Ayuda Estratégica",
      ai_hints: {
        step1:
          "Aceptamos varios formatos. Cuanto más limpios estén los datos, más preciso será el análisis.",
        step2:
          "Cada modelo se enfoca en métricas diferentes. Elija el que más se alinee con su momento.",
        step3:
          "Un título claro ayuda a usted y a su equipo a encontrar este reporte en el futuro.",
        step4:
          "Revise los puntos de atención y las recomendaciones generadas antes de finalizar.",
      },
      ai_will_do: {
        title: "Nuestro Proceso de IA",
        item1: "Normalización y limpieza de datos",
        item2: "Identificación de tendencias y fallas",
        item3: "Creación de indicadores de resultado",
        item4: "Redacción de recomendaciones prácticas",
      },
    },
    toasts: {
      data_required_title: "Datos necesarios",
      upload_required_desc: "Por favor, cargue un archivo para continuar.",
      text_required_desc: "Por favor, pegue sus datos para continuar.",
      url_required_desc:
        "Por favor, inserte un enlace válido (que comience con http o https).",
      select_template_title: "Elija el modelo",
      select_template_desc:
        "Seleccione uno de los modelos anteriores para orientar a la IA.",
      title_required_title: "Título obligatorio",
      title_required_desc: "Dé un nombre a su reporte para guardarlo.",
      analysis_completed_title: "¡Análisis Finalizado!",
      analysis_completed_desc:
        "Su inteligencia de negocio está lista para revisión.",
      save_success_title: "¡Reporte Guardado!",
      save_success_desc: "Su nuevo análisis ya está disponible en su panel.",
      file_uploaded_title: "¡Archivo Cargado!",
      file_uploaded_desc: "{{name}} fue procesado con éxito.",
      model_downloaded_title: "¡Modelo Descargado!",
      model_downloaded_desc:
        "Use el archivo como guía para sus próximos datos.",
    },
    errors: {
      ia_title: "Error en la IA",
      ia_unknown: "No pudimos procesar los datos ahora. Inténtelo de nuevo.",
      save_title: "Error al guardar",
      save_generic:
        "Hubo un problema técnico. Sus datos están seguros, inténtelo de nuevo.",
    },
  },
  sb = {
    title: "Mis Reportes",
    subtitle:
      "Gestione todos sus análisis y decisiones estratégicas en un solo lugar.",
    new_report_button: "Crear Nuevo Reporte",
    view_grid: "Visualizar en Cuadrícula",
    view_list: "Visualizar en Lista",
    table_desc: "Lista de reportes disponibles",
    filters: {
      search_placeholder: "Buscar por título o descripción...",
      status: "Filtrar por Estado",
      category: "Filtrar por Categoría",
      all: "Todos",
      draft: "Borrador",
      completed: "Finalizado",
      shared: "Compartido",
    },
    counter_one: "1 reporte encontrado",
    counter_other: "{{count}} reportes encontrados",
    empty: {
      title: "Su lista de reportes está vacía",
      filter_desc: "Intente ajustar los filtros para encontrar su análisis.",
      brand_new_desc:
        "¿Aún no ha creado ningún reporte? ¿Qué tal comenzar ahora y transformar sus datos en decisiones?",
      cta: "Crear mi Primer Reporte",
    },
    actions: {
      view: "Visualizar",
      share: "Compartir",
      download: "Descargar PDF",
      open: "Abrir Análisis",
    },
  },
  ab = {
    back_button: "Volver a la Lista",
    presentation_mode: "Modo Presentación",
    status: "Estado del Análisis",
    tabs: { report: "Reporte", sources: "Fuentes de Datos" },
    ai_section: {
      title: "Diagnóstico & Próximos Pasos",
      recommended_priority: "Prioridad Recomendada",
      priority_desc:
        "Basándose en el diagnóstico anterior, la IA calculó que esta es la acción de mayor retorno inmediato para su negocio.",
    },
    data_assets: {
      title: "Activos de Datos",
      description:
        "Archivos y enlaces originales que alimentaron este análisis.",
      download: "Descargar",
      open_link: "Abrir Enlace",
    },
    cards: {
      category: "Categoría del Reporte",
      created_at: "Generado el",
      updated_at: "Última Actualización",
      views: "Visualizaciones Totales",
    },
    content: {
      executive_summary: "Resumen de Gestión",
      executive_summary_desc:
        "Este reporte presenta un análisis detallado de los principales indicadores y métricas de performance, proporcionando insights valiosos para la toma de decisiones estratégicas.",
      highlights: "Puntos de Atención y Destacados",
      detailed_analysis: "Análisis Estratégico",
      detailed_analysis_placeholder:
        "Los datos presentados indican una performance consistente con las expectativas establecidas. Las métricas principales demuestran una tendencia positiva, sugiriendo eficacia en las estrategias implementadas.",
      ai_insight: "Conclusión Inteligente de la IA",
      ai_insight_placeholder:
        "Basándose en los datos proporcionados, se recomienda mantener el foco en las áreas de mayor performance y considerar estrategias de optimización para los indicadores con mayor potencial de crecimiento.",
      next_steps: "Plan de Acción Recomendado",
      next_steps_placeholder_1:
        "Profundizar el análisis de las métricas con mejor performance",
      next_steps_placeholder_2:
        "Implementar acciones correctivas para indicadores en declive",
      next_steps_placeholder_3:
        "Establecer cronograma para reevaluación en 30 días",
      generated_on: "Documento generado el {{date}}",
      verified: "Sistema Verificado",
    },
    sidebar: {
      info_title: "Información del Reporte",
      template: "Modelo Utilizado",
      description: "Descripción Original",
      quick_actions: "Acciones Rápidas",
      export_pdf: "Exportar a PDF",
    },
    notifications: {
      error_load: "Error al cargar el reporte",
      error_load_desc:
        "No pudimos cargar el reporte solicitado. Puede haber sido eliminado.",
      not_found: "Reporte no encontrado",
      link_copied: "¡Enlace copiado!",
      link_copied_desc: "Comparta este enlace con su equipo o clientes.",
      download_start: "Descarga iniciada",
      download_desc: "Su PDF se está generando y estará listo pronto.",
    },
  },
  ob = {
    title: "Mis Carpetas",
    subtitle:
      "Organice sus análisis y colabore con su equipo de forma simple y segura.",
    new_folder_button: "Crear Nueva Carpeta",
    table_desc: "Lista de carpetas organizadas",
    search_placeholder: "Buscar carpetas por nombre...",
    counter_one: "1 carpeta encontrada",
    counter_other: "{{count}} carpetas encontradas",
    empty: {
      title: "Ninguna carpeta por aquí",
      title_search: "Ninguna carpeta encontrada",
      desc: "Organice sus reportes creando carpetas temáticas para facilitar su día a día.",
      desc_search:
        "Intente ajustar el término de búsqueda para encontrar su carpeta.",
      cta: "Crear mi Primera Carpeta",
    },
    actions: {
      rename: "Renombrar Carpeta",
      delete: "Eliminar Carpeta",
      open: "Abrir Carpeta",
    },
    meta: {
      modified: "Modificado el",
      items: "reportes",
      updated_ago: "Actualizada hace {{time}}",
    },
  },
  ib = {
    title: "Su Perfil",
    subtitle: "Mantenga sus datos actualizados para una mejor experiencia.",
    fields: {
      full_name: "Nombre Completo",
      email: "Correo",
      email_hint: "El correo no puede ser alterado directamente.",
      save: "Guardar Cambios",
    },
    security: {
      title: "Seguridad de la Cuenta",
      desc: "La protección en dos pasos está desactivada.",
    },
    notifications: {
      title: "Notificaciones",
      desc: "Tiene {{count}} avisos recientes no leídos.",
    },
  },
  cb = {
    title: "Configuración de la Cuenta",
    sections: {
      profile: "Mi Perfil",
      notifications: "Notificaciones",
      appearance: "Visual e Idioma",
      security: "Seguridad",
      plan: "Plan y Suscripción",
    },
    profile: {
      title: "Información Personal",
      desc: "Actualice cómo aparece para su equipo y en los reportes.",
      photo: "Foto de Perfil",
      photo_desc: "JPG, PNG o GIF. Recomendado 400x400px.",
      change_photo: "Cambiar Foto",
      first_name: "Su Nombre",
      last_name: "Su Apellido",
      email: "Correo Profesional",
      company: "Nombre de la Empresa",
      role: "Su Cargo / Función",
      save_button: "Guardar Cambios de Perfil",
    },
    notifications: {
      title: "¿Cómo quiere ser avisado?",
      desc: "Elija los canales de comunicación más prácticos para usted.",
      email: "Notificaciones por Correo",
      email_desc: "Resúmenes semanales y actualizaciones de seguridad.",
      push: "Avisos en el Navegador",
      push_desc: "Alertas inmediatas cuando se genere un reporte.",
      reports: "Reportes Listos",
      reports_desc: "Reciba un aviso en cuanto la IA finalice su análisis.",
      marketing: "Consejos y Novedades",
      marketing_desc: "Nuevos modelos de reportes y consejos de gestión.",
      save_button: "Guardar Preferencias de Avisos",
    },
    security: {
      title: "Seguridad de la Cuenta",
      desc: "Proteja sus datos con capas extra de protección.",
      change_password: "Cambiar Contraseña de Acceso",
      last_change: "Último cambio: {{date}}",
      last_changeCode: "Último cambio: {{date}}",
      two_factor: "Autenticación en Dos Pasos",
      two_factor_desc: "Añade un código extra para entrar en la cuenta.",
      active_sessions: "Sesiones Activas",
      active_sessions_desc: "Gestione los dispositivos donde está conectado.",
      view_sessions: "Ver Todos los Dispositivos",
      save_button: "Guardar Configuración de Seguridad",
    },
    plan: {
      title: "Su Plan y Suscripción",
      desc: "Gestione su inversión en SúperReportes.",
      professional: "Plan Profesional",
      active_since: "Activo desde {{date}}",
      usage: {
        reports: "Análisis Creados",
        storage: "Espacio en la Nube",
        next_billing: "Próximo Cobro",
      },
      change_plan: "Cambiar de Plan",
      view_invoices: "Historial de Facturas",
      danger_zone: "Zona de Cancelación",
      danger_desc:
        "Al cancelar, perderá el acceso a los recursos de IA e historial ilimitado.",
      cancel_button: "Cancelar mi Suscripción",
    },
    appearance: {
      title: "Apariencia e Idioma",
      description: "Personalice la interfaz de SúperReportes",
      theme: "Tema",
      theme_light: "Claro",
      theme_dark: "Oscuro",
      theme_system: "Sistema",
      language: "Idioma",
      save_button: "Guardar Configuración",
      save_success_title: "Configuración guardada",
      save_success_desc:
        "Las configuraciones de apariencia se actualizaron con éxito.",
    },
  },
  lb = {
    title: "Mis Datos",
    subtitle:
      "Repositorio centralizado de archivos, URLs y fuentes de inteligencia para su negocio.",
    add_source: "Añadir Fuente",
    new_analysis: "Nuevo Análisis",
    search_placeholder: "Buscar por nombre, tipo o contenido...",
    tabs: {
      all: "Todos los Activos",
      files: "Archivos y Planillas",
      urls: "Enlaces y Sitios",
      text: "Textos y Notas",
    },
    stats: {
      files: "Archivos",
      urls: "Enlaces Conectados",
      text: "Textos Brutos",
      storage: "Almacenamiento Total",
    },
    table: {
      source: "Fuente de Datos",
      type: "Tipo",
      reports: "Reportes Vinculados",
      date: "Fecha de Ingesta",
      actions: "Acciones",
    },
    empty: {
      title: "Su central de datos está lista para ser alimentada",
      description:
        "Cargue planillas, pegue notas de reuniones o conecte enlaces. Nuestra IA usará estos activos para generar diagnósticos profundos.",
      cta: "Añadir Mi Primera Fuente",
    },
    actions: {
      generate: "Generar Nuevo Análisis",
      move: "Mover a Carpeta",
      delete: "Eliminar Permanentemente",
      download: "Descargar Original",
      open_link: "Acceder a Enlace Externo",
    },
  },
  db = {
    title: "Prioridades Asistidas",
    subtitle:
      "Acciones estratégicas sugeridas por la IA basadas en sus diagnósticos reales.",
    search_placeholder: "Buscar prioridades por título o descripción...",
    view_cards: "Tarjetas",
    view_list: "Lista",
    items_count: "ítems encontrados",
    filter: "Filtrar Prioridades",
    new_analysis: "Nuevo Diagnóstico",
    summary: {
      title: "Resumen de Enfoque",
      desc: "Donde su energía debe estar concentrada ahora",
      high: "Alta Prioridad",
      medium: "Prioridad Media",
      low: "Baja Prioridad",
      validated: "Validado para Ejecución",
    },
    levels: { high: "Alta", medium: "Media", low: "Baja" },
    list_title: "Sugerencias de Inteligencia Artificial",
    empty: {
      title: "Esperando nuevos datos para priorizar",
      description:
        "Genere un nuevo reporte o cargue datos recientes para que la IA identifique las próximas acciones de alto impacto.",
      cta: "Generar Diagnóstico IA",
    },
    card: {
      score: "Puntuación de Impacto",
      ai_suggested: "Sugerida por IA",
      validated: "Confirmado por usted",
      cta_validate: "Validar Importancia",
      cta_action: "Definir Próxima Acción",
    },
    validation_modal: {
      title: "Validación Estratégica",
      description:
        "Ajuste los criterios a continuación para que el sistema entienda la prioridad real según su momento de negocio.",
      why_important: "¿Por qué esta acción es prioritaria?",
      status_label: "Estado del Proceso",
      cta_cancel: "Cancelar",
      cta_confirm: "Validar y Mover a Ejecución",
      rice: {
        impact: "Impacto en el Beneficio",
        impact_tip: "¿Cuánto mueve esta acción los indicadores financieros?",
        urgency: "Urgencia",
        urgency_tip: "¿Qué tan crítico es hacer esto ahora?",
        confidence: "Confianza en el Resultado",
        confidence_tip:
          "¿Cuánto creemos que esta acción tendrá el efecto esperado?",
        effort: "Esfuerzo de Implementación",
        effort_tip: "Complejidad técnica y tiempo necesario del equipo.",
        final_score: "Puntuación Final Calculada",
        formula: "Fórmula RICE (Impacto x Urgencia x Confianza) / Esfuerzo",
      },
    },
    toast: {
      validated_title: "¡Prioridad Confirmada!",
      validated_desc: "Esta acción se ha movido a su Lista de Ejecución.",
    },
  },
  ub = {
    title: "Lista de Ejecución",
    subtitle:
      "Transformando diagnósticos y prioridades en resultados prácticos para su empresa.",
    view_impact: "Ver Impacto Real",
    new_diagnostic: "Nuevo Diagnóstico",
    active_cycle: "Ciclo de Crecimiento Activo",
    progress_label: "Progreso de Ejecución",
    completed_label: "Completados",
    high_impact_badge: "ALTO IMPACTO",
    metric_label: "Métrica Objetivo:",
    metric_value: "Tasa de Conversión",
    deadline_label: "Plazo Estimado:",
    deadline_value: "15 de Abril",
    add_manual: "Añadir tarea manual",
    empty: {
      title: "Su plan de acción espera su decisión",
      description:
        "Valide las prioridades sugeridas por la IA para transformarlas en tareas prácticas y empezar a ver el ROI en su negocio.",
      cta: "Ver Prioridades para Validar",
    },
    impact_card: {
      title: "Resumen del Impacto Esperado",
      desc: "Retorno estimado de las acciones de este ciclo",
      roi: "ROI Estimado",
      roi_value: "$ 14.200",
      time_saved: "Ahorro de Tiempo",
      time_saved_value: "12h",
      time_saved_unit: "/mes",
      cta_evolution: "Analizar Evolución del Negocio",
    },
    next_target: {
      title: "Próximo Objetivo Estratégico",
      desc: "Complete las tareas actuales para que la IA genere el próximo ciclo de crecimiento.",
      waiting: "Esperando Ejecución",
    },
    toast: {
      completed_title: "¡Acción Completada! 🎉",
      completed_desc:
        "El impacto ha sido registrado. ¿Desea validar el resultado con un nuevo diagnóstico?",
      cta_validate: "Validar Ahora",
    },
  },
  pb = {
    index_title:
      "SúperReportes | El Generador de Reportes Profesionales con IA",
    index_desc:
      "Genere reportes profesionales con análisis de consultor en minutos. La plataforma nº1 para Pymes que no quieren perder tiempo con planillas manuales.",
  },
  hb = {
    not_found_title: "Página no encontrada",
    not_found_desc:
      "¡Oops! Parece que ha seguido un enlace que no existe o la página ha sido movida.",
    return_home: "Volver al Inicio",
  },
  fb = {
    system: "Preparando su entorno...",
    data: "Organizando información...",
    standard: "Cargando...",
  },
  mb = {
    title: "Panel de Decisión",
    subtitle: "Análisis inteligente para la toma de decisiones estratégicas",
    period: {
      current: "Actual",
      last_month: "Último Mes",
      quarter: "Trimestre",
    },
    actions: { filters: "Filtros", export: "Exportar", refresh: "Actualizar" },
    alert: {
      critical_detected: "Situación Crítica Detectada:",
      analyze_now: "Analizar ahora",
    },
    tabs: {
      overview: "Visión General",
      situation: "Situación",
      recommendations: "Recomendaciones",
      actions: "Plan de Acción",
    },
    situation: {
      priority_title: "Situación Prioritaria",
      metrics_title: "Métricas Impactadas",
      technical_context: "Contexto Técnico",
      actionable_translation: "Traducción Accionable",
      detailed_analysis: "Análisis Detallado de la Situación",
      metrics_analysis: "Análisis de Métricas",
      crossed_impact: "Impacto Cruzado",
    },
    kpi: {
      recommendations: "Recomendaciones",
      recommendations_subtitle: "Soluciones identificadas",
      average_confidence: "Confianza Promedio",
      average_confidence_subtitle: "Basada en datos",
      expected_impact: "Impacto Esperado",
      expected_impact_subtitle: "Recuperación en 90 días",
    },
    recommendations: {
      title: "Recomendaciones Estratégicas",
      filter: "Filtrar",
      export: "Exportar",
      view_details: "Ver Detalles",
      implement: "Implementar",
      expected_impact: "Impacto Esperado",
      timeframe: "Plazo",
      confidence: "Confianza",
      actions_title: "Acciones Recomendadas",
      responsible: "Responsable",
      deadline: "Plazo",
    },
    action_plan: {
      title: "Plan de Acción Consolidado",
      export_plan: "Exportar Plan",
      summary_title: "Resumen del Plan de Acción",
      immediate_actions: "Acciones Inmediatas",
      immediate_actions_desc: "Próximos 15 días",
      medium_term_actions: "Acciones de Mediano Plazo",
      medium_term_actions_desc: "Próximos 60 días",
      expected_impact: "Impacto Esperado",
      expected_impact_desc: "Recuperación en 90 días",
      implementation_timeline: "Timeline de Implementación",
      start_implementation: "Iniciar Implementación",
      view_details: "Ver Detalles",
    },
  },
  gb = {
    bi: Yy,
    brand: Qy,
    common: Xy,
    landing: Zy,
    nav: eb,
    dashboard: tb,
    auth: nb,
    builder: rb,
    reports: sb,
    report_detail: ab,
    folders: ob,
    profile: ib,
    settings: cb,
    data_hub: lb,
    priorities: db,
    action_plan: ub,
    seo: pb,
    errors: hb,
    loading_state: fb,
    decision_panel: mb,
  },
  vb = {
    kpis: {
      NET_PROFIT: {
        title: "Lucro Líquido",
        unit: "R$",
        description:
          "Resultado final após todas as despesas e impostos. O que realmente sobra no bolso.",
      },
      NET_MARGIN: {
        title: "Margem Líquida",
        unit: "%",
        description:
          "Porcentagem de lucro sobre o faturamento total. Indicador de saúde financeira.",
      },
      CONTRIB_MARGIN: {
        title: "Margem de Contribuição",
        unit: "%",
        description:
          "Quanto sobra da venda para pagar os custos fixos. Poder de precificação.",
      },
      FIXED_COSTS: {
        title: "Custos Fixos",
        unit: "R$",
        description:
          "Total de despesas que não variam com a venda. Estrutura operacional.",
      },
      BREAK_EVEN: {
        title: "Ponto de Equilíbrio",
        unit: "R$",
        description:
          "Faturamento necessário para não ter prejuízo. Meta mínima de sobrevivência.",
      },
      CASH_FLOW: {
        title: "Fluxo de Caixa",
        unit: "R$",
        description:
          "Saldo disponível de entradas e saídas no período. Disponibilidade imediata.",
      },
      ACCOUNTS_RECEIVABLE: {
        title: "Contas a Receber",
        unit: "R$",
        description:
          "Total de valores pendentes de pagamento por clientes. Dinheiro a entrar.",
      },
      AVG_COLLECTION_PERIOD: {
        title: "Prazo Médio de Recebimento",
        unit: "Dias",
        description:
          "Tempo médio que a empresa leva para receber as vendas. Ciclo financeiro.",
      },
      SALES_CONVERSION: {
        title: "Taxa de Conversão",
        unit: "%",
        description:
          "Porcentagem de orçamentos que viraram vendas. Eficiência comercial.",
      },
      AVG_TICKET: {
        title: "Ticket Médio",
        unit: "R$",
        description: "Valor médio de cada venda realizada. Tamanho do negócio.",
      },
      CUSTOMER_ACQ_COST: {
        title: "Custo de Aquisição (CAC)",
        unit: "R$",
        description:
          "Investimento em marketing para atrair cada cliente. Eficiência de captação.",
      },
      CUSTOMER_LIFETIME_VALUE: {
        title: "Valor do Cliente (LTV)",
        unit: "R$",
        description:
          "Total que o cliente gasta na empresa enquanto é ativo. Valor do relacionamento.",
      },
      INVENTORY_TURNOVER: {
        title: "Giro de Estoque",
        unit: "x",
        description:
          "Quantas vezes o estoque foi renovado no período. Velocidade de vendas.",
      },
      EMPLOYEE_TURNOVER: {
        title: "Rotatividade de Equipe",
        unit: "%",
        description:
          "Percentual de funcionários que saíram ou foram trocados. Estabilidade organizacional.",
      },
      RECEIVABLES_DAYS: {
        title: "Prazo de Recebimento",
        unit: "Dias",
        description:
          "Tempo médio que você leva para receber dos clientes. Ciclo financeiro de entrada.",
      },
      PAYABLES_DAYS: {
        title: "Prazo de Pagamento",
        unit: "Dias",
        description:
          "Tempo médio que você tem para pagar fornecedores. Ciclo financeiro de saída.",
      },
      SALES_PIPELINE: {
        title: "Funil de Vendas",
        unit: "R$",
        description:
          "Valor total de negócios em negociação no momento. Pipeline de oportunidades.",
      },
      ROAS: {
        title: "Retorno sobre Anúncios",
        unit: "x",
        description:
          "Quantas vezes o valor investido em anúncios voltou em vendas. Eficiência de investimento.",
      },
      REVENUE_PER_EMP: {
        title: "Receita por Funcionário",
        unit: "R$",
        description:
          "Faturamento total dividido pelo número de colaboradores. Produtividade individual.",
      },
      LABOR_COST_PCT: {
        title: "Peso da Folha",
        unit: "%",
        description:
          "Quanto a folha de pagamento consome do faturamento. Peso da estrutura.",
      },
      REWORK_RATE: {
        title: "Taxa de Retrabalho",
        unit: "%",
        description:
          "Percentual de serviços ou produtos que precisaram de correção. Qualidade operacional.",
      },
      ORDER_CYCLE: {
        title: "Prazo de Entrega",
        unit: "Dias",
        description:
          "Tempo total do pedido até a entrega final ao cliente. Velocidade operacional.",
      },
      CAPACITY_USE: {
        title: "Uso da Capacidade",
        unit: "%",
        description:
          "Quanto da sua estrutura ou tempo da equipe está sendo usado. Otimização.",
      },
      DEAD_STOCK: {
        title: "Estoque Parado",
        unit: "R$",
        description:
          "Valor em produtos sem venda há mais de 90 dias. Capital imobilizado.",
      },
      NPS: {
        title: "Satisfação do Cliente",
        unit: "pts",
        description:
          "Nota de lealdade e recomendação dada pelos clientes. Índice promotor.",
      },
      REPURCHASE: {
        title: "Taxa de Recompra",
        unit: "%",
        description:
          "Percentual de clientes que voltaram a comprar. Retenção e fidelidade.",
      },
    },
    challenges: {
      LOW_PROFITABILITY: {
        title: "Baixa Lucratividade",
        short_description: "A empresa fatura, mas o lucro final é insuficiente",
        full_description:
          "A empresa fatura, mas o lucro final é insuficiente. Margens comprimidas e dificuldade de reinvestimento.",
        symptoms: {
          low_margin: "Margem líquida abaixo de 5%",
          insufficient_profit: "Lucro não cobre o esforço operacional",
          no_bonuses: "Dificuldade em pagar prêmios ou bonificações",
          price_pressure: "Preços pressionados pela concorrência",
        },
      },
      CASH_SHORTAGE: {
        title: "Falta de Caixa",
        short_description: "Dificuldade para pagar as contas do mês no prazo",
        full_description:
          "Dificuldade para pagar as contas do mês no prazo. Ciclo financeiro desfavorável.",
        symptoms: {
          negative_balance: "Saldo de caixa negativo frequentemente",
          late_suppliers: "Atraso no pagamento de fornecedores",
          loan_dependence: "Dependência de empréstimos para pagar folha",
          postdated_checks: "Cheques ou boletos pré-datados",
        },
      },
      HIGH_FIXED_COSTS: {
        title: "Custo Fixo Elevado",
        short_description: "A estrutura consome muito do faturamento",
        full_description:
          "A estrutura da empresa consome muito do faturamento. Pouca flexibilidade operacional.",
        symptoms: {
          high_fixed_ratio: "Custos fixos > 70% da receita",
          inflexible: "Dificuldade de reduzir despesas em crise",
          heavy_structure: "Alto comprometimento com aluguel/salários",
          oversized: "Estrutura pesada para o faturamento",
        },
      },
      LATE_RECEIVABLES: {
        title: "Atraso no Recebimento",
        short_description: "Prazo de recebimento muito longo ou inadimplência",
        full_description:
          "Prazo de recebimento muito longo ou inadimplência. Capital de giro comprometido.",
        symptoms: {
          long_period: "Prazo médio de recebimento > 45 dias",
          growing_delinquency: "Inadimplência crescente",
          systematic_delays: "Clientes atrasando pagamentos sistematicamente",
          factoring_need: "Necessidade de antecipar recebíveis",
        },
      },
      CUSTOMER_LOSS: {
        title: "Perda de Clientes",
        short_description:
          "Taxa alta de cancelamento ou não retorno de clientes",
        full_description:
          "Taxa alta de cancelamento ou não retorno de clientes. Fidelidade baixa.",
        symptoms: {
          high_churn: "Taxa de churn > 20% mensal",
          no_repeat: "Clientes não repetem compra",
          complaints: "Reclamações frequentes de atendimento",
          low_satisfaction: "Baixa satisfação medida",
        },
      },
      LOW_SALES_CONVERSION: {
        title: "Baixa Conversão de Vendas",
        short_description: "Muitos orçamentos enviados, mas poucos fechados",
        full_description:
          "Muitos orçamentos enviados, mas poucos fechados. Ineficiência comercial.",
        symptoms: {
          low_rate: "Taxa de conversão < 15%",
          no_return: "Muitos orçamentos sem retorno",
          price_rejection: "Preços rejeitados frequentemente",
          losing_competition: "Concorrência vencendo nos fechamentos",
        },
      },
      HIGH_ACQUISITION_COST: {
        title: "Custo de Venda Elevado",
        short_description: "O gasto para atrair um cliente é maior que o lucro",
        full_description:
          "O gasto para atrair um cliente é maior que o lucro. Marketing ineficiente.",
        symptoms: {
          high_cac: "CAC > 30% do ticket médio",
          no_roi: "Marketing não gera retorno",
          expensive_channels: "Canais de aquisição caros",
          paid_dependence: "Dependência de anúncios pagos",
        },
      },
      STOCK_STAGNATION: {
        title: "Estoque Parado",
        short_description: "Dinheiro imobilizado em produtos que não giram",
        full_description:
          "Dinheiro imobilizado em produtos que não giram. Capital travado.",
        symptoms: {
          low_turnover: "Giro de estoque < 2x ao ano",
          stagnant: "Produtos parados há mais de 6 meses",
          aggressive_discounts: "Descontos agressivos para liquidar",
          tied_capital: "Capital de giro comprometido com estoque",
        },
      },
      DELIVERY_DELAY: {
        title: "Atraso na Operação",
        short_description:
          "Lentidão na entrega de produtos ou execução de serviços",
        full_description:
          "Lentidão na entrega de produtos ou na execução de serviços. Clientes insatisfeitos com prazos e competitividade prejudicada.",
        symptoms: {
          late_delivery: "Prazo de entrega maior que o prometido",
          complaints: "Reclamações frequentes sobre atrasos",
          bottlenecks: "Gargalos no processo produtivo",
          idle_capacity: "Capacidade ociosa enquanto pedidos atrasam",
        },
      },
    },
    goals: {
      INCREASE_PROFIT: {
        title: "Aumentar o Lucro",
        description:
          "Elevar a porcentagem de lucro líquido sobre a receita. Focar na margem final.",
        success_criteria:
          "Aumentar NET_MARGIN em pelo menos 5 pontos percentuais e manter por 3 meses consecutivos.",
      },
      BALANCE_CASH_FLOW: {
        title: "Equilibrar o Caixa",
        description:
          "Garantir que as entradas superem as saídas mensalmente. Eliminar saldo negativo.",
        success_criteria:
          "Manter CASH_FLOW positivo por 3 meses consecutivos com margem de segurança de 20%.",
      },
      REDUCE_EXPENSES: {
        title: "Reduzir Despesas Fixas",
        description:
          "Otimizar custos operacionais sem perder a qualidade. Eficiência estrutural.",
        success_criteria:
          "Reduzir FIXED_COSTS em 10-15% sem impactar operações críticas.",
      },
      ACCELERATE_RECEIPTS: {
        title: "Antecipar Recebimentos",
        description:
          "Diminuir o prazo médio entre a venda e o dinheiro no caixa. Ciclo financeiro otimizado.",
        success_criteria:
          "Reduzir AVG_COLLECTION_PERIOD para menos de 30 dias.",
      },
      IMPROVE_CONVERSION: {
        title: "Melhorar Conversão de Vendas",
        description:
          "Aumentar a eficácia da equipe comercial nos fechamentos. Eficiência de vendas.",
        success_criteria: "Aumentar SALES_CONVERSION para pelo menos 25%.",
      },
      RETAIN_CUSTOMERS: {
        title: "Reter Clientes",
        description:
          "Aumentar a recorrência e o tempo de permanência do cliente. Fidelização.",
        success_criteria:
          "Reduzir EMPLOYEE_TURNOVER para menos de 10% mensal e aumentar LTV.",
      },
      OPTIMIZE_STOCK: {
        title: "Otimizar Estoque",
        description:
          "Ajustar o estoque para evitar faltas e excessos. Capital de giro liberado.",
        success_criteria:
          "Aumentar INVENTORY_TURNOVER para pelo menos 6x ao ano.",
      },
      FAST_OPERATION: {
        title: "Agilizar Operação",
        description:
          "Reduzir o tempo de entrega e aumentar o uso da capacidade. Eficiência operacional.",
        success_criteria:
          "Reduzir ORDER_CYCLE em 30% e manter CAPACITY_USE acima de 75% por 3 meses.",
      },
    },
    actions: {
      review_pricing: {
        title: "Revisar precificação de produtos principais",
        description:
          "Analisar margem de contribuição dos 20% de produtos que geram 80% da receita e ajustar preços.",
        impact: "Aumenta CONTRIB_MARGIN em 3-5%",
        complexity: "Médio",
        timeframe: "30 dias",
      },
      negotiate_suppliers: {
        title: "Renegociar prazos de pagamento com fornecedores",
        description:
          "Estender prazo de 30 para 45-60 dias com principais fornecedores.",
        impact: "Libera caixa imediato",
        complexity: "Médio",
        timeframe: "15 dias",
      },
      reduce_fixed_costs: {
        title: "Revisar contratos de aluguel e serviços",
        description:
          "Renegociar aluguel, internet, telefone, contabilidade para reduzir 10%.",
        impact: "Reduz FIXO mensal",
        complexity: "Médio",
        timeframe: "30 dias",
      },
      accelerate_collection: {
        title: "Exigir pagamento adiantado ou à vista",
        description:
          "Oferecer desconto de 5% para pagamento à vista no fechamento.",
        impact: "Reduz prazo de recebimento",
        complexity: "Baixo",
        timeframe: "14 dias",
      },
      implement_loyalty: {
        title: "Implementar programa de fidelidade",
        description:
          "Criar sistema de pontos ou descontos progressivos para compras recorrentes.",
        impact: "Aumenta retenção",
        complexity: "Médio",
        timeframe: "45 dias",
      },
      train_sales: {
        title: "Treinar equipe em técnicas de fechamento",
        description:
          "Capacitar vendedores em técnicas de negociação e superação de objeções.",
        impact: "Aumenta taxa de conversão",
        complexity: "Médio",
        timeframe: "30 dias",
      },
      referral_program: {
        title: "Focar em marketing de indicação",
        description:
          "Criar programa de indicação premiada para clientes atuais.",
        impact: "Reduz CAC em 50%",
        complexity: "Baixo",
        timeframe: "30 dias",
      },
      optimize_inventory: {
        title: "Implementar just-in-time com fornecedores",
        description:
          "Negociar entregas mais frequentes em menores quantidades.",
        impact: "Reduz estoque imobilizado",
        complexity: "Médio",
        timeframe: "60 dias",
      },
      map_bottlenecks: {
        title: "Mapear e eliminar gargalos do processo",
        description:
          "Analisar fluxo de trabalho e identificar pontos de espera/desperdício de tempo.",
        impact: "Reduz ORDER_CYCLE em 20%",
        complexity: "Médio",
        timeframe: "30 dias",
      },
      prioritize_orders: {
        title: "Implementar sistema de priorização de pedidos",
        description:
          "Criar filas por urgência/complexidade para otimizar sequência de trabalho.",
        impact: "Melhora alocação de CAPACITY_USE",
        complexity: "Baixo",
        timeframe: "14 dias",
      },
      standardize_procedures: {
        title: "Padronizar procedimentos operacionais",
        description:
          "Criar checklists e SOPs para reduzir variação e retrabalho.",
        impact: "Reduz REWORK_RATE e acelera entrega",
        complexity: "Médio",
        timeframe: "45 dias",
      },
    },
    ui: {
      no_strategic_focus: "Sem foco estratégico ativo",
      define_focus: "Definir Foco",
      challenge_detected: "Desafio Detectado",
      goal_progress: "Progresso do Objetivo",
      days_remaining: "Restam {{days}} dias",
      trend_vector: "Vetor de Tendência",
      suggested_action: "Ação Sugerida",
      implementation_complexity: "Complexidade de Implementação",
      expected_impact: "Impacto Esperado",
      time_to_result: "Tempo para Resultado",
      low: "Baixo",
      medium: "Médio",
      high: "Alto",
    },
    alerts: {
      stellar_progress: "🟢 Excelente: Crescimento acima do esperado",
      slow_progress: "🟡 Atenção: Progresso lento",
      stagnated: "⚪ Estagnado: Sem tração",
      declining_light: "🟠 Alerta: Declínio leve",
      critical_decline: "🔴 Crítico: Hemorragia",
      scale_tactic: "Escalar/Replicar tática",
      review_levers: "Revisar alavancas",
      provoke_change: "Provocar mudança",
      corrective_adjustment: "Ajuste corretivo",
      immediate_intervention: "Intervenção imediata",
    },
    benchmarks: {
      services: "Serviços",
      retail: "Varejo",
      saas: "SaaS/Tecnologia",
      industry: "Indústria",
      consulting: "Consultoria",
    },
    levers: {
      LEV_PRICE: {
        title: "Revisão de Precificação",
        description:
          "Ajustar preços para otimizar margem de contribuição. Envolve análise de custos, concorrência e elasticidade.",
        category: "Financeiro",
        impact: "Alto",
        timeframe: "30 dias",
      },
      LEV_FIXED_COST: {
        title: "Otimização de Despesas Fixas",
        description:
          "Reduzir custos operacionais sem afetar qualidade. Foco em eliminar desperdícios e renegociar contratos.",
        category: "Financeiro",
        impact: "Médio",
        timeframe: "21 dias",
      },
      LEV_CASH_CYCLE: {
        title: "Aceleração do Ciclo de Caixa",
        description:
          "Reduzir tempo entre venda e recebimento. Acelerar conversão de vendas em dinheiro disponível.",
        category: "Financeiro",
        impact: "Alto",
        timeframe: "14 dias",
      },
      LEV_DEBT_RECON: {
        title: "Saneamento de Dívidas",
        description:
          "Restruturar dívidas caras para linhas de crédito mais baratas ou capital de giro.",
        category: "Financeiro",
        impact: "Alto",
        timeframe: "45 dias",
      },
      LEV_CONVERSION: {
        title: "Eficiência Comercial",
        description:
          "Melhorar taxa de conversão de orçamentos em vendas através de técnicas de vendas e follow-up.",
        category: "Vendas",
        impact: "Alto",
        timeframe: "30 dias",
      },
      LEV_UPSELL: {
        title: "Aumento de Ticket Médio",
        description:
          "Aumentar valor médio de cada venda através de cross-sell, up-sell e bundling de produtos.",
        category: "Vendas",
        impact: "Médio",
        timeframe: "21 dias",
      },
      LEV_ACQ_EFF: {
        title: "Otimização de Verba de Marketing",
        description:
          "Melhorar eficiência do investimento em marketing para reduzir custo de aquisição de clientes.",
        category: "Vendas",
        impact: "Médio",
        timeframe: "30 dias",
      },
      LEV_WASTE: {
        title: "Combate ao Desperdício",
        description:
          "Eliminar retrabalho, desperdício de materiais e ineficiências no processo produtivo.",
        category: "Operações",
        impact: "Médio",
        timeframe: "45 dias",
      },
      LEV_STOCK_TURN: {
        title: "Giro de Ativos (Estoque)",
        description:
          "Acelerar rotação de estoque para liberar capital de giro e reduzir obsolescência.",
        category: "Operações",
        impact: "Médio",
        timeframe: "60 dias",
      },
      LEV_TEAM_PROD: {
        title: "Produtividade da Equipe",
        description:
          "Aumentar produção por colaborador através de metas claras, treinamento e eliminação de gargalos.",
        category: "Pessoas",
        impact: "Alto",
        timeframe: "90 dias",
      },
      LEV_RETENTION: {
        title: "Blindagem de Carteira",
        description:
          "Reduzir churn e aumentar recorrência de compra através de programas de fidelidade e reativação.",
        category: "Relacionamento",
        impact: "Alto",
        timeframe: "45 dias",
      },
    },
    progress_status: {
      HIGH_PROGRESS: "🟢 Aumentou Muito",
      LOW_PROGRESS: "🟡 Aumentou Pouco",
      STABLE: "⚪ Estável",
      LOW_DECLINE: "🟠 Diminuiu Pouco",
      HIGH_DECLINE: "🔴 Diminuiu Muito",
      INSUFFICIENT_DATA: "⚪ Dados Insuficientes",
      ALREADY_AT_TARGET: "✅ Já na Meta",
    },
    common: {
      strategic_focus: "Foco Estratégico",
      challenge: "Desafio",
      goal: "Objetivo",
      action: "Ação",
      lever: "Alavanca",
      metric: "Métrica",
      kpi: "KPI",
      progress: "Progresso",
      trend: "Tendência",
      analysis: "Análise",
      diagnosis: "Diagnóstico",
      recommendation: "Recomendação",
      implementation: "Implementação",
      execution: "Execução",
      monitoring: "Monitoramento",
      adjustment: "Ajuste",
      optimization: "Otimização",
    },
  },
  yb = { strategy: vb },
  bb = {
    kpis: {
      NET_PROFIT: {
        title: "Net Profit",
        unit: "$",
        description:
          "Final result after all expenses and taxes. What really stays in your pocket.",
      },
      NET_MARGIN: {
        title: "Net Margin",
        unit: "%",
        description:
          "Percentage of profit over total revenue. Financial health indicator.",
      },
      CONTRIB_MARGIN: {
        title: "Contribution Margin",
        unit: "%",
        description:
          "What remains from sales to pay fixed costs. Pricing power.",
      },
      FIXED_COSTS: {
        title: "Fixed Costs",
        unit: "$",
        description:
          "Total expenses that don't vary with sales. Operational structure.",
      },
      BREAK_EVEN: {
        title: "Break-Even Point",
        unit: "$",
        description: "Revenue needed to avoid losses. Minimum survival target.",
      },
      CASH_FLOW: {
        title: "Cash Flow",
        unit: "$",
        description:
          "Available balance of inflows and outflows. Immediate availability.",
      },
      ACCOUNTS_RECEIVABLE: {
        title: "Accounts Receivable",
        unit: "$",
        description: "Total pending payments from customers. Money to come in.",
      },
      AVG_COLLECTION_PERIOD: {
        title: "Average Collection Period",
        unit: "Days",
        description: "Average time to receive payments. Financial cycle.",
      },
      SALES_CONVERSION: {
        title: "Sales Conversion Rate",
        unit: "%",
        description:
          "Percentage of quotes that became sales. Commercial efficiency.",
      },
      AVG_TICKET: {
        title: "Average Ticket",
        unit: "$",
        description: "Average value of each sale. Business size.",
      },
      CUSTOMER_ACQ_COST: {
        title: "Customer Acquisition Cost (CAC)",
        unit: "$",
        description:
          "Marketing investment to attract each customer. Acquisition efficiency.",
      },
      CUSTOMER_LIFETIME_VALUE: {
        title: "Customer Lifetime Value (LTV)",
        unit: "$",
        description: "Total customer spends while active. Relationship value.",
      },
      INVENTORY_TURNOVER: {
        title: "Inventory Turnover",
        unit: "x",
        description: "How many times inventory was renewed. Sales velocity.",
      },
      EMPLOYEE_TURNOVER: {
        title: "Employee Turnover",
        unit: "%",
        description:
          "Percentage of employees who left or were replaced. Organizational stability.",
      },
      RECEIVABLES_DAYS: {
        title: "Collection Period",
        unit: "Days",
        description:
          "Average time to collect from customers. Cash inflow cycle.",
      },
      PAYABLES_DAYS: {
        title: "Payment Period",
        unit: "Days",
        description: "Average time to pay suppliers. Cash outflow cycle.",
      },
      SALES_PIPELINE: {
        title: "Sales Pipeline",
        unit: "$",
        description:
          "Total value of deals under negotiation. Opportunity pipeline.",
      },
      ROAS: {
        title: "Return on Ad Spend",
        unit: "x",
        description:
          "How many times ad investment returned in sales. Investment efficiency.",
      },
      REVENUE_PER_EMP: {
        title: "Revenue per Employee",
        unit: "$",
        description:
          "Total revenue divided by number of employees. Individual productivity.",
      },
      LABOR_COST_PCT: {
        title: "Payroll Burden",
        unit: "%",
        description: "How much payroll consumes of revenue. Structural weight.",
      },
      REWORK_RATE: {
        title: "Rework Rate",
        unit: "%",
        description:
          "Percentage of services/products needing correction. Operational quality.",
      },
      ORDER_CYCLE: {
        title: "Order Cycle Time",
        unit: "Days",
        description:
          "Total time from order to final delivery. Operational velocity.",
      },
      CAPACITY_USE: {
        title: "Capacity Utilization",
        unit: "%",
        description:
          "How much of your structure or team time is being used. Optimization.",
      },
      DEAD_STOCK: {
        title: "Dead Stock",
        unit: "$",
        description:
          "Value in products without sales for over 90 days. Immobilized capital.",
      },
      NPS: {
        title: "Net Promoter Score",
        unit: "pts",
        description:
          "Customer loyalty and recommendation score. Promoter index.",
      },
      REPURCHASE: {
        title: "Repurchase Rate",
        unit: "%",
        description:
          "Percentage of customers who bought again. Retention and loyalty.",
      },
    },
    challenges: {
      LOW_PROFITABILITY: {
        title: "Low Profitability",
        short_description: "Company bills but final profit is insufficient",
        full_description:
          "Company bills but final profit is insufficient. Compressed margins and difficulty reinvesting.",
        symptoms: {
          low_margin: "Net margin below 5%",
          insufficient_profit: "Profit doesn't cover operational effort",
          no_bonuses: "Difficulty paying bonuses",
          price_pressure: "Prices pressured by competition",
        },
      },
      CASH_SHORTAGE: {
        title: "Cash Shortage",
        short_description: "Difficulty paying month bills on time",
        full_description:
          "Difficulty paying month bills on time. Unfavorable financial cycle.",
        symptoms: {
          negative_balance: "Frequently negative cash balance",
          late_suppliers: "Late supplier payments",
          loan_dependence: "Loan dependence for payroll",
          postdated_checks: "Postdated checks or bills",
        },
      },
      HIGH_FIXED_COSTS: {
        title: "High Fixed Costs",
        short_description: "Structure consumes too much revenue",
        full_description:
          "Company structure consumes too much revenue. Little operational flexibility.",
        symptoms: {
          high_fixed_ratio: "Fixed costs > 70% of revenue",
          inflexible: "Difficulty reducing expenses in crisis",
          heavy_structure: "High rent/salary commitment",
          oversized: "Heavy structure for revenue",
        },
      },
      LATE_RECEIVABLES: {
        title: "Late Receivables",
        short_description: "Long collection period or delinquency",
        full_description:
          "Long collection period or delinquency. Working capital compromised.",
        symptoms: {
          long_period: "Average collection > 45 days",
          growing_delinquency: "Growing delinquency",
          systematic_delays: "Customers systematically delaying",
          factoring_need: "Need to factor receivables",
        },
      },
      CUSTOMER_LOSS: {
        title: "Customer Loss",
        short_description: "High cancellation or non-return rate",
        full_description: "High cancellation or non-return rate. Low loyalty.",
        symptoms: {
          high_churn: "Churn > 20% monthly",
          no_repeat: "Customers don't repeat purchases",
          complaints: "Frequent service complaints",
          low_satisfaction: "Low measured satisfaction",
        },
      },
      LOW_SALES_CONVERSION: {
        title: "Low Sales Conversion",
        short_description: "Many quotes sent, few closed",
        full_description:
          "Many quotes sent, few closed. Commercial inefficiency.",
        symptoms: {
          low_rate: "Conversion rate < 15%",
          no_return: "Many quotes without response",
          price_rejection: "Frequent price rejections",
          losing_competition: "Competition winning closings",
        },
      },
      HIGH_ACQUISITION_COST: {
        title: "High Acquisition Cost",
        short_description: "Cost to attract customer exceeds profit",
        full_description:
          "Cost to attract customer exceeds profit. Inefficient marketing.",
        symptoms: {
          high_cac: "CAC > 30% of average ticket",
          no_roi: "Marketing not generating return",
          expensive_channels: "Expensive acquisition channels",
          paid_dependence: "Paid ads dependence",
        },
      },
      STOCK_STAGNATION: {
        title: "Stock Stagnation",
        short_description: "Money tied in non-moving products",
        full_description: "Money tied in non-moving products. Capital locked.",
        symptoms: {
          low_turnover: "Inventory turnover < 2x/year",
          stagnant: "Products stagnant > 6 months",
          aggressive_discounts: "Aggressive discounts to liquidate",
          tied_capital: "Working capital tied in inventory",
        },
      },
      DELIVERY_DELAY: {
        title: "Delivery Delay",
        short_description: "Slow product delivery or service execution",
        full_description:
          "Slow delivery of products or execution of services. Customers dissatisfied with deadlines and competitiveness affected.",
        symptoms: {
          late_delivery: "Delivery time longer than promised",
          complaints: "Frequent complaints about delays",
          bottlenecks: "Bottlenecks in production process",
          idle_capacity: "Idle capacity while orders are delayed",
        },
      },
    },
    goals: {
      INCREASE_PROFIT: {
        title: "Increase Profit",
        description:
          "Raise net profit percentage over revenue. Focus on final margin.",
        success_criteria:
          "Increase NET_MARGIN by at least 5 percentage points for 3 consecutive months.",
      },
      BALANCE_CASH_FLOW: {
        title: "Balance Cash Flow",
        description:
          "Ensure inflows exceed outflows monthly. Eliminate negative balance.",
        success_criteria:
          "Maintain positive CASH_FLOW for 3 consecutive months with 20% safety margin.",
      },
      REDUCE_EXPENSES: {
        title: "Reduce Fixed Expenses",
        description:
          "Optimize operational costs without losing quality. Structural efficiency.",
        success_criteria:
          "Reduce FIXED_COSTS by 10-15% without impacting critical operations.",
      },
      ACCELERATE_RECEIPTS: {
        title: "Accelerate Receivables",
        description:
          "Reduce average time between sale and cash. Optimized financial cycle.",
        success_criteria: "Reduce AVG_COLLECTION_PERIOD to less than 30 days.",
      },
      IMPROVE_CONVERSION: {
        title: "Improve Sales Conversion",
        description:
          "Increase commercial team effectiveness in closings. Sales efficiency.",
        success_criteria: "Increase SALES_CONVERSION to at least 25%.",
      },
      RETAIN_CUSTOMERS: {
        title: "Retain Customers",
        description: "Increase recurrence and customer lifetime. Loyalty.",
        success_criteria:
          "Reduce EMPLOYEE_TURNOVER to less than 10% monthly and increase LTV.",
      },
      OPTIMIZE_STOCK: {
        title: "Optimize Stock",
        description:
          "Adjust inventory to avoid shortages and excess. Working capital freed.",
        success_criteria:
          "Increase INVENTORY_TURNOVER to at least 6x per year.",
      },
      FAST_OPERATION: {
        title: "Fast Operation",
        description:
          "Reduce delivery time and increase capacity utilization. Operational efficiency.",
        success_criteria:
          "Reduce ORDER_CYCLE by 30% and maintain CAPACITY_USE above 75% for 3 months.",
      },
    },
    actions: {
      review_pricing: {
        title: "Review pricing of main products",
        description:
          "Analyze contribution margin of top 20% products generating 80% revenue and adjust prices.",
        impact: "Increases CONTRIB_MARGIN by 3-5%",
        complexity: "Medium",
        timeframe: "30 days",
      },
      negotiate_suppliers: {
        title: "Renegotiate payment terms with suppliers",
        description: "Extend terms from 30 to 45-60 days with main suppliers.",
        impact: "Frees immediate cash",
        complexity: "Medium",
        timeframe: "15 days",
      },
      reduce_fixed_costs: {
        title: "Review rent and service contracts",
        description:
          "Renegotiate rent, internet, phone, accounting to reduce 10%.",
        impact: "Reduces monthly FIXED",
        complexity: "Medium",
        timeframe: "30 days",
      },
      accelerate_collection: {
        title: "Require upfront or cash payment",
        description: "Offer 5% discount for cash payment at closing.",
        impact: "Reduces collection period",
        complexity: "Low",
        timeframe: "14 days",
      },
      implement_loyalty: {
        title: "Implement loyalty program",
        description:
          "Create points or progressive discount system for repeat purchases.",
        impact: "Increases retention",
        complexity: "Medium",
        timeframe: "45 days",
      },
      train_sales: {
        title: "Train team in closing techniques",
        description:
          "Train salespeople in negotiation and objection handling techniques.",
        impact: "Increases conversion rate",
        complexity: "Medium",
        timeframe: "30 days",
      },
      referral_program: {
        title: "Focus on referral marketing",
        description: "Create referral reward program for current customers.",
        impact: "Reduces CAC by 50%",
        complexity: "Low",
        timeframe: "30 days",
      },
      optimize_inventory: {
        title: "Implement just-in-time with suppliers",
        description:
          "Negotiate more frequent deliveries in smaller quantities.",
        impact: "Reduces tied inventory",
        complexity: "Medium",
        timeframe: "60 days",
      },
      map_bottlenecks: {
        title: "Map and eliminate process bottlenecks",
        description: "Analyze workflow and identify waiting points/time waste.",
        impact: "Reduces ORDER_CYCLE by 20%",
        complexity: "Medium",
        timeframe: "30 days",
      },
      prioritize_orders: {
        title: "Implement order prioritization system",
        description:
          "Create queues by urgency/complexity to optimize work sequence.",
        impact: "Improves CAPACITY_USE allocation",
        complexity: "Low",
        timeframe: "14 days",
      },
      standardize_procedures: {
        title: "Standardize operational procedures",
        description:
          "Create checklists and SOPs to reduce variation and rework.",
        impact: "Reduces REWORK_RATE and speeds up delivery",
        complexity: "Medium",
        timeframe: "45 days",
      },
      ACT_AUDIT_MARGIN: {
        title: "Item Margin Audit",
        description:
          "List all products/services, calculate real margin for each, and identify 'loss leaders' hurting profitability.",
        effort: "8 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "30 days",
      },
      ACT_CUT_GHOST_SUBSCRIPTIONS: {
        title: "Cut 'Ghost Subscriptions'",
        description:
          "Review bank statements and cancel unused software, services and subscriptions.",
        effort: "4 hours",
        quick_win: !0,
        complexity: "Low",
        timeframe: "7 days",
      },
      ACT_CASH_PAYMENT_INCENTIVE: {
        title: "Cash Payment Incentive",
        description:
          "Create aggressive discount policy for early payment and reduce long installment options.",
        effort: "6 hours",
        quick_win: !0,
        complexity: "Low",
        timeframe: "14 days",
      },
      ACT_DEBT_SWAP: {
        title: "Swap Expensive Debt for Cheap",
        description:
          "Pay off high-cost debt (overdraft, credit card) with cheaper credit lines or working capital.",
        effort: "12 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "45 days",
      },
      ACT_OBJECTION_SCRIPT: {
        title: "Objection Handling Script",
        description:
          "Train salespeople to focus on 'Value delivered' instead of 'Low price' when customers resist.",
        effort: "16 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "30 days",
      },
      ACT_CROSS_SELL_OFFER: {
        title: "Complementary Offer (Cross-sell)",
        description:
          "Offer additional product/service at the moment of closing the main sale.",
        effort: "10 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "21 days",
      },
      ACT_MARKETING_AUDIT: {
        title: "Marketing Channels Audit",
        description:
          "Immediately turn off acquisition channels not generating return (ROAS < 2).",
        effort: "8 hours",
        quick_win: !0,
        complexity: "Low",
        timeframe: "14 days",
      },
      ACT_REWORK_MAP: {
        title: "Rework Mapping",
        description:
          "Identify where process stalls and errors that force redoing service or product.",
        effort: "12 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "45 days",
      },
      ACT_DEAD_STOCK_LIQUIDATION: {
        title: "Dead Stock Liquidation",
        description:
          "Run aggressive promotion to turn old inventory (> 90 days) into cash.",
        effort: "8 hours",
        quick_win: !0,
        complexity: "Low",
        timeframe: "30 days",
      },
      ACT_INDIVIDUAL_TARGETS: {
        title: "Individual Target Setting",
        description:
          "Make clear to each employee what their weekly delivery indicator is.",
        effort: "16 hours",
        quick_win: !1,
        complexity: "High",
        timeframe: "90 days",
      },
      ACT_REACTIVATION_CAMPAIGN: {
        title: "Reactivation Campaign",
        description:
          "Contact customers not buying for 60+ days with special return offer.",
        effort: "6 hours",
        quick_win: !0,
        complexity: "Low",
        timeframe: "14 days",
      },
      ACT_LOYALTY_PROGRAM: {
        title: "Simple Loyalty Program",
        description:
          "Create points or cashback system to encourage repeat purchases.",
        effort: "10 hours",
        quick_win: !1,
        complexity: "Medium",
        timeframe: "45 days",
      },
    },
    levers: {
      LEV_PRICE: {
        title: "Pricing Review",
        description:
          "Adjust prices to optimize contribution margin. Involves cost analysis, competition and elasticity.",
        category: "Finance",
        impact: "High",
        timeframe: "30 days",
      },
      LEV_FIXED_COST: {
        title: "Fixed Cost Optimization",
        description:
          "Reduce operating costs without affecting quality. Focus on eliminating waste and renegotiating contracts.",
        category: "Finance",
        impact: "Medium",
        timeframe: "21 days",
      },
      LEV_CASH_CYCLE: {
        title: "Cash Cycle Acceleration",
        description:
          "Reduce time between sale and collection. Accelerate conversion of sales into available cash.",
        category: "Finance",
        impact: "High",
        timeframe: "14 days",
      },
      LEV_DEBT_RECON: {
        title: "Debt Restructuring",
        description:
          "Restructure expensive debt into cheaper credit lines or working capital.",
        category: "Finance",
        impact: "High",
        timeframe: "45 days",
      },
      LEV_CONVERSION: {
        title: "Sales Efficiency",
        description:
          "Improve quote-to-sale conversion rate through sales techniques and follow-up.",
        category: "Sales",
        impact: "High",
        timeframe: "30 days",
      },
      LEV_UPSELL: {
        title: "Average Ticket Increase",
        description:
          "Increase average sale value through cross-sell, up-sell and product bundling.",
        category: "Sales",
        impact: "Medium",
        timeframe: "21 days",
      },
      LEV_ACQ_EFF: {
        title: "Marketing Budget Optimization",
        description:
          "Improve marketing investment efficiency to reduce customer acquisition cost.",
        category: "Sales",
        impact: "Medium",
        timeframe: "30 days",
      },
      LEV_WASTE: {
        title: "Waste Combat",
        description:
          "Eliminate rework, material waste and inefficiencies in production process.",
        category: "Operations",
        impact: "Medium",
        timeframe: "45 days",
      },
      LEV_STOCK_TURN: {
        title: "Asset Turnover (Inventory)",
        description:
          "Accelerate inventory rotation to free up working capital and reduce obsolescence.",
        category: "Operations",
        impact: "Medium",
        timeframe: "60 days",
      },
      LEV_TEAM_PROD: {
        title: "Team Productivity",
        description:
          "Increase output per employee through clear goals, training and bottleneck elimination.",
        category: "People",
        impact: "High",
        timeframe: "90 days",
      },
      LEV_RETENTION: {
        title: "Customer Base Protection",
        description:
          "Reduce churn and increase purchase recurrence through loyalty and reactivation programs.",
        category: "Relationship",
        impact: "High",
        timeframe: "45 days",
      },
    },
    progress_status: {
      HIGH_PROGRESS: " Increased a Lot",
      LOW_PROGRESS: " Increased a Little",
      STABLE: " Stable",
      LOW_DECLINE: " Decreased a Little",
      HIGH_DECLINE: " Decreased a Lot",
      INSUFFICIENT_DATA: " Insufficient Data",
      ALREADY_AT_TARGET: " Already at Target",
    },
    ui: {
      no_strategic_focus: "No active strategic focus",
      define_focus: "Define Focus",
      challenge_detected: "Challenge Detected",
      goal_progress: "Goal Progress",
      days_remaining: "{{days}} days remaining",
      trend_vector: "Trend Vector",
      suggested_action: "Suggested Action",
      implementation_complexity: "Implementation Complexity",
      expected_impact: "Expected Impact",
      time_to_result: "Time to Result",
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    alerts: {
      stellar_progress: "🟢 Excellent: Growth above expectations",
      slow_progress: "🟡 Attention: Slow progress",
      stagnated: "⚪ Stagnant: No traction",
      declining_light: "🟠 Alert: Light decline",
      critical_decline: "🔴 Critical: Hemorrhage",
      scale_tactic: "Scale/Replicate tactic",
      review_levers: "Review levers",
      provoke_change: "Provoke change",
      corrective_adjustment: "Corrective adjustment",
      immediate_intervention: "Immediate intervention",
    },
    benchmarks: {
      services: "Services",
      retail: "Retail",
      saas: "SaaS/Technology",
      industry: "Industry",
      consulting: "Consulting",
    },
  },
  _b = {
    strategic_focus: "Strategic Focus",
    challenge: "Challenge",
    goal: "Goal",
    action: "Action",
    lever: "Lever",
    metric: "Metric",
    kpi: "KPI",
    progress: "Progress",
    trend: "Trend",
    analysis: "Analysis",
    diagnosis: "Diagnosis",
    recommendation: "Recommendation",
    implementation: "Implementation",
    execution: "Execution",
    monitoring: "Monitoring",
    adjustment: "Adjustment",
    optimization: "Optimization",
  },
  wb = { strategy: bb, common: _b },
  xb = {
    kpis: {
      NET_PROFIT: {
        title: "Beneficio Neto",
        unit: "€",
        description:
          "Resultado final después de todos los gastos e impuestos. Lo que realmente queda en el bolsillo.",
      },
      NET_MARGIN: {
        title: "Margen Neto",
        unit: "%",
        description:
          "Porcentaje de beneficio sobre la facturación total. Indicador de salud financiera.",
      },
      CONTRIB_MARGIN: {
        title: "Margen de Contribución",
        unit: "%",
        description:
          "Lo que queda de la venta para pagar los costos fijos. Poder de precificación.",
      },
      FIXED_COSTS: {
        title: "Costos Fijos",
        unit: "€",
        description:
          "Total de gastos que no varían con las ventas. Estructura operacional.",
      },
      BREAK_EVEN: {
        title: "Punto de Equilibrio",
        unit: "€",
        description:
          "Facturación necesaria para no tener pérdidas. Meta mínima de supervivencia.",
      },
      CASH_FLOW: {
        title: "Flujo de Caja",
        unit: "€",
        description:
          "Saldo disponible de entradas y salidas en el período. Disponibilidad inmediata.",
      },
      ACCOUNTS_RECEIVABLE: {
        title: "Cuentas por Cobrar",
        unit: "€",
        description:
          "Total de valores pendientes de pago por clientes. Dinero por entrar.",
      },
      AVG_COLLECTION_PERIOD: {
        title: "Plazo Medio de Cobro",
        unit: "Días",
        description:
          "Tiempo promedio que la empresa tarda en cobrar las ventas. Ciclo financiero.",
      },
      SALES_CONVERSION: {
        title: "Tasa de Conversión",
        unit: "%",
        description:
          "Porcentaje de presupuestos que se convirtieron en ventas. Eficiencia comercial.",
      },
      AVG_TICKET: {
        title: "Ticket Medio",
        unit: "€",
        description:
          "Valor promedio de cada venta realizada. Tamaño del negocio.",
      },
      CUSTOMER_ACQ_COST: {
        title: "Costo de Adquisición (CAC)",
        unit: "€",
        description:
          "Inversión en marketing para atraer cada cliente. Eficiencia de captación.",
      },
      CUSTOMER_LIFETIME_VALUE: {
        title: "Valor del Cliente (LTV)",
        unit: "€",
        description:
          "Total que el cliente gasta en la empresa mientras está activo. Valor de la relación.",
      },
      INVENTORY_TURNOVER: {
        title: "Rotación de Inventario",
        unit: "x",
        description:
          "Cuántas veces se renovó el inventario en el período. Velocidad de ventas.",
      },
      EMPLOYEE_TURNOVER: {
        title: "Rotación de Empleados",
        unit: "%",
        description:
          "Porcentaje de empleados que se fueron o fueron reemplazados. Estabilidad organizacional.",
      },
      RECEIVABLES_DAYS: {
        title: "Plazo de Cobro",
        unit: "Días",
        description:
          "Tiempo promedio para cobrar a clientes. Ciclo de entrada de caja.",
      },
      PAYABLES_DAYS: {
        title: "Plazo de Pago",
        unit: "Días",
        description:
          "Tiempo promedio para pagar proveedores. Ciclo de salida de caja.",
      },
      SALES_PIPELINE: {
        title: "Embudo de Ventas",
        unit: "€",
        description:
          "Valor total de negocios en negociación. Pipeline de oportunidades.",
      },
      ROAS: {
        title: "Retorno sobre Anuncios",
        unit: "x",
        description:
          "Cuántas veces la inversión en anuncios retornó en ventas. Eficiencia de inversión.",
      },
      REVENUE_PER_EMP: {
        title: "Ingresos por Empleado",
        unit: "€",
        description:
          "Ingresos totales divididos por número de empleados. Productividad individual.",
      },
      LABOR_COST_PCT: {
        title: "Peso de la Nómina",
        unit: "%",
        description:
          "Cuánto consume la nómina de los ingresos. Peso de la estructura.",
      },
      REWORK_RATE: {
        title: "Tasa de Retrabajo",
        unit: "%",
        description:
          "Porcentaje de servicios/productos que necesitaron corrección. Calidad operacional.",
      },
      ORDER_CYCLE: {
        title: "Ciclo de Pedido",
        unit: "Días",
        description:
          "Tiempo total desde pedido hasta entrega final. Velocidad operacional.",
      },
      CAPACITY_USE: {
        title: "Uso de Capacidad",
        unit: "%",
        description:
          "Cuánto de su estructura o tiempo de equipo está siendo usado. Optimización.",
      },
      DEAD_STOCK: {
        title: "Stock Muerto",
        unit: "€",
        description:
          "Valor en productos sin venta por más de 90 días. Capital inmovilizado.",
      },
      NPS: {
        title: "Satisfacción del Cliente",
        unit: "pts",
        description:
          "Puntuación de lealtad y recomendación de clientes. Índice promotor.",
      },
      REPURCHASE: {
        title: "Tasa de Recompra",
        unit: "%",
        description:
          "Porcentaje de clientes que volvieron a comprar. Retención y lealtad.",
      },
    },
    challenges: {
      LOW_PROFITABILITY: {
        title: "Baja Rentabilidad",
        short_description:
          "La empresa factura, pero el beneficio final es insuficiente",
        full_description:
          "La empresa factura, pero el beneficio final es insuficiente. Márgenes comprimidos y dificultad para reinvertir.",
        symptoms: {
          low_margin: "Margen neto debajo del 5%",
          insufficient_profit: "El beneficio no cubre el esfuerzo operacional",
          no_bonuses: "Dificultad para pagar bonificaciones",
          price_pressure: "Precios presionados por la competencia",
        },
      },
      CASH_SHORTAGE: {
        title: "Falta de Caja",
        short_description: "Dificultad para pagar las cuentas del mes a tiempo",
        full_description:
          "Dificultad para pagar las cuentas del mes a tiempo. Ciclo financiero desfavorable.",
        symptoms: {
          negative_balance: "Saldo de caja negativo frecuentemente",
          late_suppliers: "Retraso en el pago a proveedores",
          loan_dependence: "Dependencia de préstamos para pagar nómina",
          postdated_checks: "Cheques o recibos postfechados",
        },
      },
      HIGH_FIXED_COSTS: {
        title: "Costo Fijo Elevado",
        short_description: "La estructura consume mucho de la facturación",
        full_description:
          "La estructura de la empresa consume mucho de la facturación. Poca flexibilidad operacional.",
        symptoms: {
          high_fixed_ratio: "Costos fijos > 70% de los ingresos",
          inflexible: "Dificultad para reducir gastos en crisis",
          heavy_structure: "Alto compromiso con alquiler/salarios",
          oversized: "Estructura pesada para la facturación",
        },
      },
      LATE_RECEIVABLES: {
        title: "Retraso en Cobros",
        short_description: "Plazo de cobro muy largo o morosidad",
        full_description:
          "Plazo de cobro muy largo o morosidad. Capital de trabajo comprometido.",
        symptoms: {
          long_period: "Plazo medio de cobro > 45 días",
          growing_delinquency: "Morosidad creciente",
          systematic_delays: "Clientes retrasando pagos sistemáticamente",
          factoring_need: "Necesidad de anticipar cobros",
        },
      },
      CUSTOMER_LOSS: {
        title: "Pérdida de Clientes",
        short_description: "Tasa alta de cancelación o no retorno de clientes",
        full_description:
          "Tasa alta de cancelación o no retorno de clientes. Baja fidelidad.",
        symptoms: {
          high_churn: "Tasa de churn > 20% mensual",
          no_repeat: "Clientes no repiten compras",
          complaints: "Reclamaciones frecuentes de atención",
          low_satisfaction: "Baja satisfacción medida",
        },
      },
      LOW_SALES_CONVERSION: {
        title: "Baja Conversión de Ventas",
        short_description: "Muchos presupuestos enviados, pocos cerrados",
        full_description:
          "Muchos presupuestos enviados, pocos cerrados. Ineficiencia comercial.",
        symptoms: {
          low_rate: "Tasa de conversión < 15%",
          no_return: "Muchos presupuestos sin respuesta",
          price_rejection: "Precios rechazados frecuentemente",
          losing_competition: "Competencia ganando en cierres",
        },
      },
      HIGH_ACQUISITION_COST: {
        title: "Costo de Venta Elevado",
        short_description:
          "El gasto para atraer un cliente es mayor que el beneficio",
        full_description:
          "El gasto para atraer un cliente es mayor que el beneficio. Marketing ineficiente.",
        symptoms: {
          high_cac: "CAC > 30% del ticket medio",
          no_roi: "Marketing no genera retorno",
          expensive_channels: "Canales de adquisición caros",
          paid_dependence: "Dependencia de anuncios pagados",
        },
      },
      STOCK_STAGNATION: {
        title: "Estancamiento de Stock",
        short_description: "Dinero inmovilizado en productos que no giran",
        full_description:
          "Dinero inmovilizado en productos que no giran. Capital bloqueado.",
        symptoms: {
          low_turnover: "Rotación de inventario < 2x al año",
          stagnant: "Productos parados > 6 meses",
          aggressive_discounts: "Descuentos agresivos para liquidar",
          tied_capital: "Capital de trabajo comprometido con stock",
        },
      },
      DELIVERY_DELAY: {
        title: "Retraso en Entrega",
        short_description:
          "Lentitud en entrega de productos o ejecución de servicios",
        full_description:
          "Lentitud en entrega de productos o ejecución de servicios. Clientes insatisfechos con plazos y competitividad afectada.",
        symptoms: {
          late_delivery: "Plazo de entrega mayor que el prometido",
          complaints: "Reclamaciones frecuentes sobre retrasos",
          bottlenecks: "Cuellos de botella en proceso productivo",
          idle_capacity: "Capacidad ociosa mientras pedidos se retrasan",
        },
      },
    },
    goals: {
      INCREASE_PROFIT: {
        title: "Aumentar el Beneficio",
        description:
          "Elevar el porcentaje de beneficio neto sobre los ingresos. Enfocarse en el margen final.",
        success_criteria:
          "Aumentar NET_MARGIN en al menos 5 puntos porcentuales y mantener por 3 meses consecutivos.",
      },
      BALANCE_CASH_FLOW: {
        title: "Equilibrar el Flujo de Caja",
        description:
          "Garantizar que las entradas superen las salidas mensualmente. Eliminar saldo negativo.",
        success_criteria:
          "Mantener CASH_FLOW positivo por 3 meses consecutivos con margen de seguridad del 20%.",
      },
      REDUCE_EXPENSES: {
        title: "Reducir Gastos Fijos",
        description:
          "Optimizar costos operacionales sin perder calidad. Eficiencia estructural.",
        success_criteria:
          "Reducir FIXED_COSTS en 10-15% sin impactar operaciones críticas.",
      },
      ACCELERATE_RECEIPTS: {
        title: "Anticipar Cobros",
        description:
          "Reducir el plazo medio entre la venta y el dinero en caja. Ciclo financiero optimizado.",
        success_criteria: "Reducir AVG_COLLECTION_PERIOD a menos de 30 días.",
      },
      IMPROVE_CONVERSION: {
        title: "Mejorar Conversión de Ventas",
        description:
          "Aumentar la eficacia del equipo comercial en los cierres. Eficiencia de ventas.",
        success_criteria: "Aumentar SALES_CONVERSION a al menos 25%.",
      },
      RETAIN_CUSTOMERS: {
        title: "Retener Clientes",
        description:
          "Aumentar la recurrencia y el tiempo de permanencia del cliente. Fidelización.",
        success_criteria:
          "Reducir EMPLOYEE_TURNOVER a menos de 10% mensual y aumentar LTV.",
      },
      OPTIMIZE_STOCK: {
        title: "Optimizar Stock",
        description:
          "Ajustar el stock para evitar faltas y excesos. Capital de trabajo liberado.",
        success_criteria: "Aumentar INVENTORY_TURNOVER a al menos 6x al año.",
      },
      FAST_OPERATION: {
        title: "Agilizar Operación",
        description:
          "Reducir el tiempo de entrega y aumentar el uso de la capacidad. Eficiencia operacional.",
        success_criteria:
          "Reducir ORDER_CYCLE en 30% y mantener CAPACITY_USE por encima de 75% por 3 meses.",
      },
    },
    actions: {
      review_pricing: {
        title: "Revisar precificación de productos principales",
        description:
          "Analizar margen de contribución del 20% de productos que generan 80% de ingresos y ajustar precios.",
        impact: "Aumenta CONTRIB_MARGIN en 3-5%",
        complexity: "Medio",
        timeframe: "30 días",
      },
      negotiate_suppliers: {
        title: "Renegociar plazos de pago con proveedores",
        description:
          "Extender plazo de 30 a 45-60 días con principales proveedores.",
        impact: "Libera caja inmediato",
        complexity: "Medio",
        timeframe: "15 días",
      },
      reduce_fixed_costs: {
        title: "Revisar contratos de alquiler y servicios",
        description:
          "Renegociar alquiler, internet, teléfono, contabilidad para reducir 10%.",
        impact: "Reduce FIJO mensual",
        complexity: "Medio",
        timeframe: "30 días",
      },
      accelerate_collection: {
        title: "Exigir pago anticipado o al contado",
        description:
          "Ofrecer descuento del 5% para pago al contado en el cierre.",
        impact: "Reduce plazo de cobro",
        complexity: "Bajo",
        timeframe: "14 días",
      },
      implement_loyalty: {
        title: "Implementar programa de fidelidad",
        description:
          "Crear sistema de puntos o descuentos progresivos para compras recurrentes.",
        impact: "Aumenta retención",
        complexity: "Medio",
        timeframe: "45 días",
      },
      train_sales: {
        title: "Entrenar equipo en técnicas de cierre",
        description:
          "Capacitar vendedores en técnicas de negociación y superación de objeciones.",
        impact: "Aumenta tasa de conversión",
        complexity: "Medio",
        timeframe: "30 días",
      },
      referral_program: {
        title: "Enfocarse en marketing de referidos",
        description:
          "Crear programa de referidos premiado para clientes actuales.",
        impact: "Reduce CAC en 50%",
        complexity: "Bajo",
        timeframe: "30 días",
      },
      optimize_inventory: {
        title: "Implementar just-in-time con proveedores",
        description: "Negociar entregas más frecuentes en menores cantidades.",
        impact: "Reduce stock inmovilizado",
        complexity: "Medio",
        timeframe: "60 días",
      },
      map_bottlenecks: {
        title: "Mapear y eliminar cuellos de botella",
        description:
          "Analizar flujo de trabajo e identificar puntos de espera/perdida de tiempo.",
        impact: "Reduce ORDER_CYCLE en 20%",
        complexity: "Medio",
        timeframe: "30 días",
      },
      prioritize_orders: {
        title: "Implementar sistema de priorización",
        description:
          "Crear colas por urgencia/complejidad para optimizar secuencia de trabajo.",
        impact: "Mejora asignación de CAPACITY_USE",
        complexity: "Bajo",
        timeframe: "14 días",
      },
      standardize_procedures: {
        title: "Estandarizar procedimientos operacionales",
        description:
          "Crear checklists y SOPs para reducir variación y retrabajo.",
        impact: "Reduce REWORK_RATE y acelera entrega",
        complexity: "Medio",
        timeframe: "45 días",
      },
      ACT_AUDIT_MARGIN: {
        title: "Auditoría de Margen por Item",
        description:
          "Listar todos los productos/servicios, calcular margen real de cada uno e identificar 'ítems mico' que dan pérdida.",
        effort: "8 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "30 días",
      },
      ACT_CUT_GHOST_SUBSCRIPTIONS: {
        title: "Corte de 'Suscripciones Fantasma'",
        description:
          "Revisar extractos bancarios y cancelar softwares, servicios y suscripciones no utilizados.",
        effort: "4 horas",
        quick_win: !0,
        complexity: "Bajo",
        timeframe: "7 días",
      },
      ACT_CASH_PAYMENT_INCENTIVE: {
        title: "Incentivo al Pago al Contado",
        description:
          "Crear política de descuento agresivo para cobro anticipado y reducir plazos largos.",
        effort: "6 horas",
        quick_win: !0,
        complexity: "Bajo",
        timeframe: "14 días",
      },
      ACT_DEBT_SWAP: {
        title: "Cambio de Deuda Cara por Barata",
        description:
          "Pagar deudas de alto costo (cheque especial, tarjeta) con líneas de crédito más baratas.",
        effort: "12 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "45 días",
      },
      ACT_OBJECTION_SCRIPT: {
        title: "Script de Manejo de Objeciones",
        description:
          "Entrenar vendedores para enfocarse en 'Valor entregado' en vez de 'Precio bajo' cuando el cliente resista.",
        effort: "16 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "30 días",
      },
      ACT_CROSS_SELL_OFFER: {
        title: "Oferta Complementaria (Cross-sell)",
        description:
          "Ofrecer producto/servicio adicional en el momento de cerrar la venta principal.",
        effort: "10 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "21 días",
      },
      ACT_MARKETING_AUDIT: {
        title: "Auditoría de Canales de Marketing",
        description:
          "Apagar inmediatamente canales de adquisición que no generan retorno (ROAS < 2).",
        effort: "8 horas",
        quick_win: !0,
        complexity: "Bajo",
        timeframe: "14 días",
      },
      ACT_REWORK_MAP: {
        title: "Mapeo de Retrabajo",
        description:
          "Identificar dónde el proceso se traba y los errores que obligan a rehacer el servicio o producto.",
        effort: "12 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "45 días",
      },
      ACT_DEAD_STOCK_LIQUIDATION: {
        title: "Liquidación de Stock Muerto",
        description:
          "Hacer promoción agresiva para convertir stock antiguo (> 90 días) en efectivo.",
        effort: "8 horas",
        quick_win: !0,
        complexity: "Bajo",
        timeframe: "30 días",
      },
      ACT_INDIVIDUAL_TARGETS: {
        title: "Definición de Metas Individuales",
        description:
          "Dejar claro a cada colaborador cuál es su indicador de entrega semanal.",
        effort: "16 horas",
        quick_win: !1,
        complexity: "Alto",
        timeframe: "90 días",
      },
      ACT_REACTIVATION_CAMPAIGN: {
        title: "Campaña de Reactivación",
        description:
          "Contactar clientes que no compran hace 60+ días con oferta especial de retorno.",
        effort: "6 horas",
        quick_win: !0,
        complexity: "Bajo",
        timeframe: "14 días",
      },
      ACT_LOYALTY_PROGRAM: {
        title: "Programa de Fidelización Simple",
        description:
          "Crear sistema de puntos o cashback para incentivar compras recurrentes.",
        effort: "10 horas",
        quick_win: !1,
        complexity: "Medio",
        timeframe: "45 días",
      },
    },
    levers: {
      LEV_PRICE: {
        title: "Revisión de Precificación",
        description:
          "Ajustar precios para optimizar margen de contribución. Involucra análisis de costos, competencia y elasticidad.",
        category: "Finanzas",
        impact: "Alto",
        timeframe: "30 días",
      },
      LEV_FIXED_COST: {
        title: "Optimización de Gastos Fijos",
        description:
          "Reducir costos operativos sin afectar calidad. Foco en eliminar desperdicios y renegociar contratos.",
        category: "Finanzas",
        impact: "Medio",
        timeframe: "21 días",
      },
      LEV_CASH_CYCLE: {
        title: "Aceleración del Ciclo de Caja",
        description:
          "Reducir tiempo entre venta y cobro. Acelerar conversión de ventas en dinero disponible.",
        category: "Finanzas",
        impact: "Alto",
        timeframe: "14 días",
      },
      LEV_DEBT_RECON: {
        title: "Saneamiento de Deudas",
        description:
          "Restructurar deudas caras a líneas de crédito más baratas o capital de trabajo.",
        category: "Finanzas",
        impact: "Alto",
        timeframe: "45 días",
      },
      LEV_CONVERSION: {
        title: "Eficiencia Comercial",
        description:
          "Mejorar tasa de conversión de presupuestos en ventas a través de técnicas de venta y seguimiento.",
        category: "Ventas",
        impact: "Alto",
        timeframe: "30 días",
      },
      LEV_UPSELL: {
        title: "Aumento de Ticket Medio",
        description:
          "Aumentar valor promedio de cada venta a través de cross-sell, up-sell y bundling.",
        category: "Ventas",
        impact: "Medio",
        timeframe: "21 días",
      },
      LEV_ACQ_EFF: {
        title: "Optimización de Verba de Marketing",
        description:
          "Mejorar eficiencia de inversión en marketing para reducir costo de adquisición.",
        category: "Ventas",
        impact: "Medio",
        timeframe: "30 días",
      },
      LEV_WASTE: {
        title: "Combate al Desperdicio",
        description:
          "Eliminar retrabajo, desperdicio de materiales e ineficiencias en proceso productivo.",
        category: "Operaciones",
        impact: "Medio",
        timeframe: "45 días",
      },
      LEV_STOCK_TURN: {
        title: "Rotación de Activos (Stock)",
        description:
          "Acelerar rotación de stock para liberar capital de trabajo y reducir obsolescencia.",
        category: "Operaciones",
        impact: "Medio",
        timeframe: "60 días",
      },
      LEV_TEAM_PROD: {
        title: "Productividad del Equipo",
        description:
          "Aumentar producción por colaborador a través de metas claras, entrenamiento y eliminación de cuellos de botella.",
        category: "Personas",
        impact: "Alto",
        timeframe: "90 días",
      },
      LEV_RETENTION: {
        title: "Blindaje de Cartera",
        description:
          "Reducir churn y aumentar recurrencia de compra a través de programas de fidelización y reactivación.",
        category: "Relacionamiento",
        impact: "Alto",
        timeframe: "45 días",
      },
    },
    progress_status: {
      HIGH_PROGRESS: "🟢 Aumentó Mucho",
      LOW_PROGRESS: "🟡 Aumentó Poco",
      STABLE: "⚪ Estable",
      LOW_DECLINE: "🟠 Disminuyó Poco",
      HIGH_DECLINE: "🔴 Disminuyó Mucho",
      INSUFFICIENT_DATA: "⚪ Datos Insuficientes",
      ALREADY_AT_TARGET: "✅ Ya en la Meta",
    },
    ui: {
      no_strategic_focus: "Sin foco estratégico activo",
      define_focus: "Definir Foco",
      challenge_detected: "Desafío Detectado",
      goal_progress: "Progreso del Objetivo",
      days_remaining: "Restan {{days}} días",
      trend_vector: "Vector de Tendencia",
      suggested_action: "Acción Sugerida",
      implementation_complexity: "Complejidad de Implementación",
      expected_impact: "Impacto Esperado",
      time_to_result: "Tiempo para Resultado",
      low: "Bajo",
      medium: "Medio",
      high: "Alto",
    },
    alerts: {
      stellar_progress: "🟢 Excelente: Crecimiento por encima de lo esperado",
      slow_progress: "🟡 Atención: Progreso lento",
      stagnated: "⚪ Estancado: Sin tracción",
      declining_light: "🟠 Alerta: Declive leve",
      critical_decline: "🔴 Crítico: Hemorragia",
      scale_tactic: "Escalar/Replicar táctica",
      review_levers: "Revisar palancas",
      provoke_change: "Provocar cambio",
      corrective_adjustment: "Ajuste correctivo",
      immediate_intervention: "Intervención inmediata",
    },
    benchmarks: {
      services: "Servicios",
      retail: "Retail",
      saas: "SaaS/Tecnología",
      industry: "Industria",
      consulting: "Consultoría",
    },
  },
  Eb = {
    strategic_focus: "Foco Estratégico",
    challenge: "Desafío",
    goal: "Objetivo",
    action: "Acción",
    lever: "Palanca",
    metric: "Métrica",
    kpi: "KPI",
    progress: "Progreso",
    trend: "Tendencia",
    analysis: "Análisis",
    diagnosis: "Diagnóstico",
    recommendation: "Recomendación",
    implementation: "Implementación",
    execution: "Ejecución",
    monitoring: "Monitoreo",
    adjustment: "Ajuste",
    optimization: "Optimización",
  },
  Sb = { strategy: xb, common: Eb },
  Ab = {
    "pt-BR": { translation: { ...Ny, ...yb } },
    "en-US": { translation: { ...Jy, ...wb } },
    "es-ES": { translation: { ...gb, ...Sb } },
  };
ae.use(Rl)
  .use(Wv)
  .init({
    resources: Ab,
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US", "es-ES"],
    interpolation: { escapeValue: !1 },
  });
const Vr = {
    "pt-BR": {
      "/": "/pt-BR",
      "/login": "/pt-BR/login",
      "/app": "/pt-BR/app",
      "/app/relatorios": "/pt-BR/app/reports",
      "/app/relatorios/novo": "/pt-BR/app/reports/new",
      "/app/relatorios/:id": "/pt-BR/app/reports/:id",
      "/app/metricas": "/pt-BR/app/metrics",
      "/app/metricas/configurar": "/pt-BR/app/metrics/config",
      "/app/painel-decisao": "/pt-BR/app/decision-panel",
      "/app/analytics": "/pt-BR/app/analytics",
      "/app/consolidado": "/pt-BR/app/consolidated",
      "/app/prioridades": "/pt-BR/app/priorities",
      "/app/plano-acao": "/pt-BR/app/action-plan",
      "/app/dados": "/pt-BR/app/folders",
      "/app/dados/:id": "/pt-BR/app/folders/:id",
      "/app/perfil": "/pt-BR/app/profile",
      "/app/configuracoes": "/pt-BR/app/settings",
      "/app/organizacao": "/pt-BR/app/organization",
      "/app/modelos": "/pt-BR/app/templates",
      "/app/login": "/pt-BR/login",
      "/app/cadastro": "/pt-BR/register",
      "/app/esqueci-senha": "/pt-BR/forgot-password",
    },
    "en-US": {
      "/": "/en-US",
      "/login": "/en-US/login",
      "/app": "/en-US/app",
      "/app/reports": "/en-US/app/reports",
      "/app/reports/new": "/en-US/app/reports/new",
      "/app/reports/:id": "/en-US/app/reports/:id",
      "/app/metrics": "/en-US/app/metrics",
      "/app/metrics/config": "/en-US/app/metrics/config",
      "/app/decision-panel": "/en-US/app/decision-panel",
      "/app/analytics": "/en-US/app/analytics",
      "/app/consolidated": "/en-US/app/consolidated",
      "/app/priorities": "/en-US/app/priorities",
      "/app/action-plan": "/en-US/app/action-plan",
      "/app/folders": "/en-US/app/folders",
      "/app/folders/:id": "/en-US/app/folders/:id",
      "/app/profile": "/en-US/app/profile",
      "/app/settings": "/en-US/app/settings",
      "/app/organization": "/en-US/app/organization",
      "/app/templates": "/en-US/app/templates",
      "/app/login": "/en-US/login",
      "/app/register": "/en-US/register",
      "/app/forgot-password": "/en-US/forgot-password",
    },
    "es-ES": {
      "/": "/es-ES",
      "/login": "/es-ES/login",
      "/app": "/es-ES/app",
      "/app/informes": "/es-ES/app/reports",
      "/app/informes/nuevo": "/es-ES/app/reports/new",
      "/app/informes/:id": "/es-ES/app/reports/:id",
      "/app/metricas": "/es-ES/app/metrics",
      "/app/metricas/configurar": "/es-ES/app/metrics/config",
      "/app/panel-decision": "/es-ES/app/decision-panel",
      "/app/analytics": "/es-ES/app/analytics",
      "/app/consolidado": "/es-ES/app/consolidated",
      "/app/prioridades": "/es-ES/app/priorities",
      "/app/plan-accion": "/es-ES/app/action-plan",
      "/app/carpetas": "/es-ES/app/folders",
      "/app/carpetas/:id": "/es-ES/app/folders/:id",
      "/app/perfil": "/es-ES/app/profile",
      "/app/configuracion": "/es-ES/app/settings",
      "/app/organizacion": "/es-ES/app/organization",
      "/app/plantillas": "/es-ES/app/templates",
      "/app/inicio-sesion": "/es-ES/login",
      "/app/registro": "/es-ES/register",
      "/app/olvide-contrasena": "/es-ES/forgot-password",
    },
  },
  mn = (t, e) => {
    const n = e || ae.language,
      r = Vr[n];
    if (!r) return t;
    if (r[t]) return r[t];
    for (const [s, a] of Object.entries(r))
      if (s.includes(":") && t.startsWith(s.split(":")[0])) {
        const o = t.replace(s.split(":")[0], "");
        return a.replace(":id", o);
      }
    return t;
  },
  gn = (t) => {
    for (const [e, n] of Object.entries(Vr))
      for (const [r, s] of Object.entries(n)) {
        if (t === s) return r;
        if (s.includes(":") && t.startsWith(s.split(":")[0])) {
          const a = t.replace(s.split(":")[0], "");
          return r.replace(":id", a);
        }
      }
    return t;
  },
  Cb = (t) => {
    for (const [e, n] of Object.entries(Vr))
      for (const r of Object.values(n)) {
        const s = r;
        if (t === s || (s.includes(":") && t.startsWith(s.split(":")[0])))
          return e;
      }
    return ae.language;
  },
  ba = () => {
    const t = tn(),
      e = ui(),
      { i18n: n } = on(),
      [r, s] = v.useState(!1),
      a = () => {
        const h = localStorage.getItem("preferred-language");
        if (h && ["pt-BR", "en-US", "es-ES"].includes(h)) return h;
        const p = navigator.language;
        return p.startsWith("pt")
          ? "pt-BR"
          : p.startsWith("es")
            ? "es-ES"
            : p.startsWith("en")
              ? "en-US"
              : "pt-BR";
      },
      o = (h, p) => {
        const f = mn(h, n.language);
        p != null && p.replace ? e(f, { replace: !0 }) : e(f);
      },
      i = () => {
        const h = t.pathname;
        if (h === "/" || h === "") return !0;
        const p = a();
        if (Cb(h) !== p) {
          const m = gn(h),
            g = mn(m, p);
          if (g !== h)
            return (
              s(!0),
              localStorage.setItem("preferred-language", p),
              n.changeLanguage(p),
              e(g, { replace: !0 }),
              !0
            );
        }
        return !1;
      },
      c = (h) => {
        const p = t.pathname,
          f = gn(p),
          m = mn(f, h);
        (localStorage.setItem("preferred-language", h),
          n.changeLanguage(h),
          e(m, { replace: !0 }));
      },
      l = () => {
        const h = t.pathname;
        return gn(h);
      },
      d = () => {
        const h = gn(t.pathname),
          p = {};
        for (const f of ["pt-BR", "en-US", "es-ES"]) p[f] = mn(h, f);
        return p;
      },
      u = (h, p) => {
        const f = p || n.language,
          m = Vr[f];
        return m ? Object.values(m).includes(h) : !1;
      };
    return (
      v.useEffect(() => {
        const h = a();
        (h !== n.language && n.changeLanguage(h),
          i() &&
            (s(!1),
            localStorage.setItem("preferred-language", h),
            e(mn(gn(t.pathname), h), { replace: !0 })));
      }, []),
      {
        navigateLocalized: o,
        changeLanguage: c,
        getCanonicalUrl: l,
        getAlternateUrls: d,
        isRouteAvailable: u,
        detectPreferredLanguage: a,
        checkRedirect: i,
        isRedirecting: r,
        currentLanguage: n.language,
        currentPath: t.pathname,
      }
    );
  },
  Rb = ({
    title: t,
    description: e,
    keywords: n,
    image: r,
    type: s = "website",
    siteName: a = "SuperRelatórios",
    locale: o,
  }) => {
    (tn(), on());
    const {
        getCanonicalUrl: i,
        getAlternateUrls: c,
        currentLanguage: l,
      } = ba(),
      d = {
        "pt-BR": {
          defaultTitle:
            "SuperRelatórios - Plataforma de Relatórios Inteligentes",
          defaultDescription:
            "Transforme dados em decisões inteligentes com relatórios automatizados para PMEs brasileiras. Dashboard, analytics e métricas em tempo real.",
          defaultKeywords:
            "relatórios, dashboard, analytics, PME, Brasil, métricas, business intelligence",
          siteName: "SuperRelatórios",
        },
        "en-US": {
          defaultTitle: "SuperRelatórios - Intelligent Reports Platform",
          defaultDescription:
            "Transform data into intelligent decisions with automated reports for SMEs. Real-time dashboards, analytics and metrics.",
          defaultKeywords:
            "reports, dashboard, analytics, SME, business intelligence, metrics",
          siteName: "SuperRelatórios",
        },
        "es-ES": {
          defaultTitle: "SuperRelatórios - Plataforma de Informes Inteligentes",
          defaultDescription:
            "Transforma datos en decisiones inteligentes con informes automatizados para PYMEs. Dashboards, analytics y métricas en tiempo real.",
          defaultKeywords:
            "informes, dashboard, analytics, PYME, business intelligence, métricas",
          siteName: "SuperRelatórios",
        },
      },
      u = d[l] || d["pt-BR"],
      h = i(),
      p = c(),
      f = t || u.defaultTitle,
      m = e || u.defaultDescription,
      g = n || u.defaultKeywords,
      b = r || "https://superrelatorios.vercel.app/og-image.jpg",
      _ = o || l;
    return (
      v.useEffect(() => {
        const w = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: f,
            description: m,
            url: h,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
            author: {
              "@type": "Organization",
              name: u.siteName,
              url: "https://superrelatorios.vercel.app",
            },
            inLanguage: l,
            isAccessibleForFree: !0,
          },
          x = document.querySelector('script[type="application/ld+json"]');
        x && x.remove();
        const E = document.createElement("script");
        return (
          (E.type = "application/ld+json"),
          (E.textContent = JSON.stringify(w)),
          document.head.appendChild(E),
          () => {
            const C = document.querySelector(
              'script[type="application/ld+json"]',
            );
            C && C.remove();
          }
        );
      }, [f, m, h, l]),
      y.jsxs(Sd, {
        "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:109:4",
        "data-lov-name": "Helmet",
        "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
        "data-component-line": "109",
        "data-component-file": "I18nSEO.tsx",
        "data-component-name": "Helmet",
        "data-component-content": "%7B%7D",
        children: [
          y.jsx("title", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:111:6",
            "data-lov-name": "title",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "111",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "title",
            "data-component-content": "%7B%7D",
            children: f,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:112:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "112",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "description",
            content: m,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:113:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "113",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "keywords",
            content: g,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:114:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "114",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "author",
            content: u.siteName,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:115:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "115",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:116:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "116",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "robots",
            content: "index, follow",
          }),
          y.jsx("link", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:119:6",
            "data-lov-name": "link",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "119",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "link",
            "data-component-content": "%7B%7D",
            rel: "canonical",
            href: h,
          }),
          Object.entries(p).map(([w, x]) =>
            y.jsx(
              "link",
              {
                "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:123:8",
                "data-lov-name": "link",
                "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
                "data-component-line": "123",
                "data-component-file": "I18nSEO.tsx",
                "data-component-name": "link",
                "data-component-content": "%7B%7D",
                rel: "alternate",
                hrefLang: w,
                href: x,
              },
              w,
            ),
          ),
          y.jsx("link", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:125:6",
            "data-lov-name": "link",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "125",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "link",
            "data-component-content": "%7B%7D",
            rel: "alternate",
            hrefLang: "x-default",
            href: p["en-US"] || h,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:128:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "128",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:type",
            content: s,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:129:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "129",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:title",
            content: f,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:130:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "130",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:description",
            content: m,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:131:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "131",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:image",
            content: b,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:132:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "132",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:url",
            content: h,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:133:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "133",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:site_name",
            content: u.siteName,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:134:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "134",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "og:locale",
            content: _.replace("-", "_"),
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:137:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "137",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "twitter:card",
            content: "summary_large_image",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:138:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "138",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "twitter:title",
            content: f,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:139:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "139",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "twitter:description",
            content: m,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:140:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "140",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            property: "twitter:image",
            content: b,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:143:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "143",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "theme-color",
            content: "#3b82f6",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:144:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "144",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "msapplication-TileColor",
            content: "#3b82f6",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:145:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "145",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:146:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "146",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:147:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "147",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "apple-mobile-web-app-title",
            content: u.siteName,
          }),
          y.jsx("html", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:150:6",
            "data-lov-name": "html",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "150",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "html",
            "data-component-content": "%7B%7D",
            lang: l,
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:151:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "151",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "geo.region",
            content: "BR",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:152:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "152",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            name: "geo.placename",
            content: "Brazil",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:155:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "155",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "Content-Type",
            content: "text/html; charset=UTF-8",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:156:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "156",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "X-UA-Compatible",
            content: "IE=edge",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:159:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "159",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "X-Content-Type-Options",
            content: "nosniff",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:160:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "160",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "X-Frame-Options",
            content: "DENY",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:161:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "161",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "X-XSS-Protection",
            content: "1; mode=block",
          }),
          y.jsx("meta", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:162:6",
            "data-lov-name": "meta",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "162",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "meta",
            "data-component-content": "%7B%7D",
            httpEquiv: "Referrer-Policy",
            content: "strict-origin-when-cross-origin",
          }),
          y.jsx("link", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:165:6",
            "data-lov-name": "link",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "165",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "link",
            "data-component-content": "%7B%7D",
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          y.jsx("link", {
            "data-lov-id": "src\\components\\SEO\\I18nSEO.tsx:166:6",
            "data-lov-name": "link",
            "data-component-path": "src\\components\\SEO\\I18nSEO.tsx",
            "data-component-line": "166",
            "data-component-file": "I18nSEO.tsx",
            "data-component-name": "link",
            "data-component-content": "%7B%7D",
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
          }),
        ],
      })
    );
  },
  Ob = ({ children: t }) => {
    const e = tn(),
      n = ui(),
      { i18n: r } = on(),
      { detectPreferredLanguage: s } = ba(),
      [a, o] = v.useState(!1);
    return (
      v.useEffect(() => {
        const i = e.pathname.split("/").filter(Boolean),
          c = ["pt-BR", "en-US", "es-ES"];
        if (
          e.pathname === "/" ||
          e.pathname === "" ||
          (i.length > 0 && !c.includes(i[0]))
        ) {
          const u = `/${s()}${e.pathname === "/" ? "" : e.pathname}${e.search}`;
          if (u !== e.pathname + e.search) {
            n(u, { replace: !0 });
            return;
          }
        }
        const l = i[0];
        (c.includes(l) && r.language !== l && r.changeLanguage(l),
          (document.documentElement.lang = r.language),
          a || o(!0));
      }, [e.pathname, r, a, n, s]),
      y.jsxs(y.Fragment, {
        children: [
          y.jsx(Rb, {
            "data-lov-id": "src\\components\\I18nRouter.tsx:64:6",
            "data-lov-name": "I18nSEO",
            "data-component-path": "src\\components\\I18nRouter.tsx",
            "data-component-line": "64",
            "data-component-file": "I18nRouter.tsx",
            "data-component-name": "I18nSEO",
            "data-component-content": "%7B%7D",
          }),
          t,
        ],
      })
    );
  },
  Ol = () => {
    const { t } = on();
    return y.jsx("div", {
      "data-lov-id": "src\\components\\layout\\PageLoader.tsx:8:4",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\layout\\PageLoader.tsx",
      "data-component-line": "8",
      "data-component-file": "PageLoader.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22flex%20items-center%20justify-center%20min-h-screen%20w-full%20bg-background%2F50%20backdrop-blur-sm%20z-50%22%7D",
      className:
        "flex items-center justify-center min-h-screen w-full bg-background/50 backdrop-blur-sm z-50",
      children: y.jsxs("div", {
        "data-lov-id": "src\\components\\layout\\PageLoader.tsx:9:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\layout\\PageLoader.tsx",
        "data-component-line": "9",
        "data-component-file": "PageLoader.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20flex-col%20items-center%20gap-4%22%7D",
        className: "flex flex-col items-center gap-4",
        children: [
          y.jsx("div", {
            "data-lov-id": "src\\components\\layout\\PageLoader.tsx:10:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\layout\\PageLoader.tsx",
            "data-component-line": "10",
            "data-component-file": "PageLoader.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22w-12%20h-12%20rounded-full%20border-4%20border-primary%20border-t-transparent%20animate-spin%22%7D",
            className:
              "w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin",
          }),
          y.jsx("p", {
            "data-lov-id": "src\\components\\layout\\PageLoader.tsx:11:8",
            "data-lov-name": "p",
            "data-component-path": "src\\components\\layout\\PageLoader.tsx",
            "data-component-line": "11",
            "data-component-file": "PageLoader.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%20animate-pulse%22%7D",
            className:
              "text-sm font-medium text-muted-foreground animate-pulse",
            children: t("loading_state.system"),
          }),
        ],
      }),
    });
  },
  Tb = Gc(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          accent:
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
          success:
            "bg-status-positive text-white hover:bg-status-positive/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
          warning:
            "bg-status-pending text-white hover:bg-status-pending/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Ys = v.forwardRef(
    ({ className: t, variant: e, size: n, asChild: r = !1, ...s }, a) => {
      const o = r ? Xd : "button";
      return y.jsx(o, {
        "data-lov-id": "src\\components\\ui\\button.tsx:49:6",
        "data-lov-name": "Comp",
        "data-component-path": "src\\components\\ui\\button.tsx",
        "data-component-line": "49",
        "data-component-file": "button.tsx",
        "data-component-name": "Comp",
        "data-component-content": "%7B%7D",
        className: ct(Tb({ variant: e, size: n, className: t })),
        ref: a,
        ...s,
      });
    },
  );
Ys.displayName = "Button";
const Pb = ({ error: t, resetError: e }) => {
  const { t: n } = on();
  return y.jsxs("div", {
    "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:28:4",
    "data-lov-name": "div",
    "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
    "data-component-line": "28",
    "data-component-file": "ErrorBoundary.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22min-h-%5B400px%5D%20flex%20flex-col%20items-center%20justify-center%20p-8%20text-center%20animate-fade-in%22%7D",
    className:
      "min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-fade-in",
    children: [
      y.jsx("div", {
        "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:29:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
        "data-component-line": "29",
        "data-component-file": "ErrorBoundary.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22bg-destructive%2F10%20p-4%20rounded-full%20mb-6%22%7D",
        className: "bg-destructive/10 p-4 rounded-full mb-6",
        children: y.jsx(Ul, {
          "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:30:8",
          "data-lov-name": "AlertTriangle",
          "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
          "data-component-line": "30",
          "data-component-file": "ErrorBoundary.tsx",
          "data-component-name": "AlertTriangle",
          "data-component-content":
            "%7B%22className%22%3A%22h-12%20w-12%20text-destructive%22%7D",
          className: "h-12 w-12 text-destructive",
        }),
      }),
      y.jsx("h2", {
        "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:33:6",
        "data-lov-name": "h2",
        "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
        "data-component-line": "33",
        "data-component-file": "ErrorBoundary.tsx",
        "data-component-name": "h2",
        "data-component-content":
          "%7B%22className%22%3A%22text-2xl%20font-bold%20mb-2%20text-foreground%22%7D",
        className: "text-2xl font-bold mb-2 text-foreground",
        children: n("error.title", { defaultValue: "Algo deu errado" }),
      }),
      y.jsx("p", {
        "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:37:6",
        "data-lov-name": "p",
        "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
        "data-component-line": "37",
        "data-component-file": "ErrorBoundary.tsx",
        "data-component-name": "p",
        "data-component-content":
          "%7B%22className%22%3A%22text-muted-foreground%20mb-8%20max-w-md%22%7D",
        className: "text-muted-foreground mb-8 max-w-md",
        children: n("error.description", {
          defaultValue:
            "Ocorreu um erro inesperado. Nossa equipe já foi notificada. Por favor, tente recarregar a página.",
        }),
      }),
      !1,
      y.jsxs("div", {
        "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:51:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
        "data-component-line": "51",
        "data-component-file": "ErrorBoundary.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22flex%20gap-4%22%7D",
        className: "flex gap-4",
        children: [
          y.jsxs(Ys, {
            "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:52:8",
            "data-lov-name": "Button",
            "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
            "data-component-line": "52",
            "data-component-file": "ErrorBoundary.tsx",
            "data-component-name": "Button",
            "data-component-content": "%7B%7D",
            onClick: e,
            size: "lg",
            children: [
              y.jsx(ql, {
                "data-lov-id":
                  "src\\components\\error\\ErrorBoundary.tsx:53:10",
                "data-lov-name": "RefreshCcw",
                "data-component-path":
                  "src\\components\\error\\ErrorBoundary.tsx",
                "data-component-line": "53",
                "data-component-file": "ErrorBoundary.tsx",
                "data-component-name": "RefreshCcw",
                "data-component-content":
                  "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                className: "mr-2 h-4 w-4",
              }),
              n("error.try_again", { defaultValue: "Tentar Novamente" }),
            ],
          }),
          y.jsx(Ys, {
            "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:56:8",
            "data-lov-name": "Button",
            "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
            "data-component-line": "56",
            "data-component-file": "ErrorBoundary.tsx",
            "data-component-name": "Button",
            "data-component-content": "%7B%7D",
            variant: "outline",
            size: "lg",
            onClick: () => (window.location.href = "/"),
            children: n("error.go_home", { defaultValue: "Voltar ao Início" }),
          }),
        ],
      }),
    ],
  });
};
class Ib extends v.Component {
  constructor() {
    super(...arguments);
    we(this, "state", { hasError: !1, error: null, errorInfo: null });
    we(this, "resetError", () => {
      this.setState({ hasError: !1, error: null, errorInfo: null });
    });
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0, error: n, errorInfo: null };
  }
  componentDidCatch(n, r) {
    (console.error(
      "Um erro não tratado foi capturado pelo Error Boundary:",
      n,
      r,
    ),
      this.setState({ errorInfo: r }));
  }
  render() {
    return this.state.hasError
      ? this.props.fallback
        ? this.props.fallback
        : y.jsx(Pb, {
            "data-lov-id": "src\\components\\error\\ErrorBoundary.tsx:102:8",
            "data-lov-name": "ErrorBoundaryFallback",
            "data-component-path": "src\\components\\error\\ErrorBoundary.tsx",
            "data-component-line": "102",
            "data-component-file": "ErrorBoundary.tsx",
            "data-component-name": "ErrorBoundaryFallback",
            "data-component-content": "%7B%7D",
            error: this.state.error,
            resetError: this.resetError,
          })
      : this.props.children;
  }
}
const kb = ({ children: t }) => {
    const { locale: e } = $l(),
      n = tn(),
      { i18n: r } = on(),
      { currentLanguage: s } = ba(),
      a = ["pt-BR", "en-US", "es-ES"];
    if (
      (v.useEffect(() => {
        e && a.includes(e) && r.language !== e && r.changeLanguage(e);
      }, [e, r]),
      e && !a.includes(e))
    ) {
      const o = n.pathname.replace(`/${e}`, `/${s}`);
      return y.jsx(Xs, {
        "data-lov-id": "src\\components\\navigation\\LocaleGuard.tsx:37:11",
        "data-lov-name": "Navigate",
        "data-component-path": "src\\components\\navigation\\LocaleGuard.tsx",
        "data-component-line": "37",
        "data-component-file": "LocaleGuard.tsx",
        "data-component-name": "Navigate",
        "data-component-content": "%7B%7D",
        to: o + n.search,
        replace: !0,
      });
    }
    return y.jsx(y.Fragment, { children: t });
  },
  fs = v.lazy(() =>
    Z(
      () => import("./Index-CWrudiRn.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    ),
  ),
  Db = v.lazy(() =>
    Z(
      () => import("./Dashboard-Atualizado-D1MX2DfH.js"),
      __vite__mapDeps([14, 15, 16, 3, 17, 12, 18, 19, 20, 5, 21, 11, 10, 6]),
    ),
  ),
  Lb = v.lazy(() =>
    Z(
      () => import("./ReportsList-C6qR2I7Y.js"),
      __vite__mapDeps([22, 3, 6, 12, 23, 18, 9, 10, 4, 11, 5, 24, 25, 26, 17]),
    ),
  ),
  ms = v.lazy(() =>
    Z(
      () => import("./ReportBuilder-BG14jAPg.js"),
      __vite__mapDeps([
        27, 3, 6, 12, 17, 15, 16, 26, 18, 5, 28, 23, 29, 30, 24, 25, 10, 4, 31,
        32, 33,
      ]),
    ),
  ),
  jb = v.lazy(() =>
    Z(
      () => import("./ReportDetail-TpyDypmx.js"),
      __vite__mapDeps([
        34, 3, 6, 12, 18, 9, 10, 4, 11, 5, 13, 17, 7, 31, 32, 33, 21,
      ]),
    ),
  ),
  Nb = v.lazy(() =>
    Z(
      () => import("./Folders-CS1kRXY0.js"),
      __vite__mapDeps([35, 3, 6, 12, 23, 18, 9, 10, 4, 11, 5, 26]),
    ),
  ),
  $b = v.lazy(() =>
    Z(
      () => import("./FolderDetail-CJoSBHvX.js"),
      __vite__mapDeps([36, 3, 12, 23, 18, 9, 10, 4, 11, 5, 26, 17, 6]),
    ),
  ),
  Mb = v.lazy(() =>
    Z(
      () => import("./Profile-BgSmaTYZ.js"),
      __vite__mapDeps([37, 3, 12, 23, 29, 38, 5, 6]),
    ),
  ),
  Bb = v.lazy(() =>
    Z(
      () => import("./Settings-C6NnKVRz.js"),
      __vite__mapDeps([39, 3, 12, 23, 29, 40, 25, 24, 10, 4, 5, 38, 18, 41, 6]),
    ),
  ),
  Fb = v.lazy(() =>
    Z(
      () => import("./Priorities-4cSL1qfN.js"),
      __vite__mapDeps([
        42, 3, 18, 20, 12, 5, 23, 21, 11, 10, 33, 43, 2, 4, 25, 29, 44, 6,
      ]),
    ),
  ),
  Ub = v.lazy(() =>
    Z(
      () => import("./ActionPlan-Bg0s0qfa.js"),
      __vite__mapDeps([45, 3, 12, 18, 44, 5, 6]),
    ),
  ),
  qb = v.lazy(() =>
    Z(
      () => import("./ConsolidatedDashboard-Atualizado-BD6DCMlI.js"),
      __vite__mapDeps([46, 3, 12, 18, 20, 5, 21, 11, 10, 47, 24, 25, 4, 28, 6]),
    ),
  ),
  Vb = v.lazy(() =>
    Z(
      () => import("./MetricsDashboard-Otimizado-BgeeGMu9.js"),
      __vite__mapDeps([
        48, 3, 12, 18, 20, 5, 47, 24, 25, 10, 4, 23, 19, 28, 49, 16, 50, 32, 6,
      ]),
    ),
  ),
  zb = v.lazy(() =>
    Z(
      () => import("./OrganizationManager-CFmn231i.js"),
      __vite__mapDeps([
        51, 3, 12, 18, 23, 29, 30, 24, 25, 10, 4, 5, 43, 2, 21, 11, 6,
      ]),
    ),
  ),
  Hb = v.lazy(() =>
    Z(
      () => import("./TemplateManager-B8rlBMnF.js"),
      __vite__mapDeps([52, 3, 12, 18, 23, 29, 30, 24, 25, 10, 4, 5, 43, 2, 6]),
    ),
  ),
  gs = v.lazy(() =>
    Z(
      () => import("./DecisionPanel-DlOUpRrJ.js"),
      __vite__mapDeps([
        53, 3, 12, 18, 20, 5, 21, 11, 10, 28, 24, 25, 4, 47, 41, 6,
      ]),
    ),
  ),
  Gb = v.lazy(() =>
    Z(
      () => import("./MetricsConfig-mb5RO1YV.js"),
      __vite__mapDeps([
        54, 3, 12, 18, 23, 29, 30, 24, 25, 10, 4, 5, 40, 43, 2, 19, 49, 16, 6,
      ]),
    ),
  ),
  Wb = v.lazy(() =>
    Z(
      () => import("./AdvancedAnalytics-ZwELAGNH.js"),
      __vite__mapDeps([
        55, 3, 12, 18, 20, 5, 21, 11, 10, 47, 24, 25, 4, 19, 28, 41, 50, 16, 6,
      ]),
    ),
  ),
  Kb = v.lazy(() =>
    Z(() => import("./NotFound-xETN24bW.js"), __vite__mapDeps([56, 6, 3, 5])),
  ),
  ar = v.lazy(() =>
    Z(
      () => import("./Login-CioL209q.js"),
      __vite__mapDeps([57, 3, 6, 23, 29, 12, 41, 8, 7, 5]),
    ),
  ),
  Jb = v.lazy(() =>
    Z(
      () => import("./AuthCallback-CFOXOFmH.js"),
      __vite__mapDeps([58, 3, 6, 5]),
    ),
  ),
  Yb = v.lazy(() =>
    Z(
      () => import("./AppLayout-ByQZLbbD.js"),
      __vite__mapDeps([59, 3, 6, 23, 1, 2, 4, 5, 9, 10, 11, 38, 7, 8]),
    ),
  ),
  Qb = new Jd({
    defaultOptions: {
      queries: { staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, retry: 2 },
    },
  }),
  Xb = () => {
    const t = tn();
    return (
      v.useEffect(() => {
        const e = window.dataLayer;
        e &&
          e.push({
            event: "virtual_page_view",
            pageUrl: t.pathname + t.search,
          });
      }, [t]),
      null
    );
  },
  Zb = ({ children: t }) => {
    const { session: e, loading: n } = hv(),
      r = tn();
    if (n)
      return y.jsx(Ol, {
        "data-lov-id": "src\\App.tsx:79:22",
        "data-lov-name": "PageLoader",
        "data-component-path": "src\\App.tsx",
        "data-component-line": "79",
        "data-component-file": "App.tsx",
        "data-component-name": "PageLoader",
        "data-component-content": "%7B%7D",
      });
    if (!e) {
      const s = r.pathname + r.search;
      return y.jsx(Xs, {
        "data-lov-id": "src\\App.tsx:84:6",
        "data-lov-name": "Navigate",
        "data-component-path": "src\\App.tsx",
        "data-component-line": "84",
        "data-component-file": "App.tsx",
        "data-component-name": "Navigate",
        "data-component-content": "%7B%7D",
        to: `/login?redirect=${encodeURIComponent(s)}`,
        replace: !0,
      });
    }
    return y.jsx(y.Fragment, { children: t });
  },
  e_ = () =>
    y.jsx(Ib, {
      "data-lov-id": "src\\App.tsx:95:2",
      "data-lov-name": "ErrorBoundary",
      "data-component-path": "src\\App.tsx",
      "data-component-line": "95",
      "data-component-file": "App.tsx",
      "data-component-name": "ErrorBoundary",
      "data-component-content": "%7B%7D",
      children: y.jsx(Yd, {
        "data-lov-id": "src\\App.tsx:96:4",
        "data-lov-name": "QueryClientProvider",
        "data-component-path": "src\\App.tsx",
        "data-component-line": "96",
        "data-component-file": "App.tsx",
        "data-component-name": "QueryClientProvider",
        "data-component-content": "%7B%7D",
        client: Qb,
        children: y.jsx(pv, {
          "data-lov-id": "src\\App.tsx:97:6",
          "data-lov-name": "AuthProvider",
          "data-component-path": "src\\App.tsx",
          "data-component-line": "97",
          "data-component-file": "App.tsx",
          "data-component-name": "AuthProvider",
          "data-component-content": "%7B%7D",
          children: y.jsxs(Hh, {
            "data-lov-id": "src\\App.tsx:98:8",
            "data-lov-name": "TooltipProvider",
            "data-component-path": "src\\App.tsx",
            "data-component-line": "98",
            "data-component-file": "App.tsx",
            "data-component-name": "TooltipProvider",
            "data-component-content": "%7B%7D",
            children: [
              y.jsx(Df, {
                "data-lov-id": "src\\App.tsx:99:10",
                "data-lov-name": "Toaster",
                "data-component-path": "src\\App.tsx",
                "data-component-line": "99",
                "data-component-file": "App.tsx",
                "data-component-name": "Toaster",
                "data-component-content": "%7B%7D",
              }),
              y.jsx(Ml, {
                "data-lov-id": "src\\App.tsx:100:10",
                "data-lov-name": "BrowserRouter",
                "data-component-path": "src\\App.tsx",
                "data-component-line": "100",
                "data-component-file": "App.tsx",
                "data-component-name": "BrowserRouter",
                "data-component-content": "%7B%7D",
                children: y.jsxs(Ob, {
                  "data-lov-id": "src\\App.tsx:101:12",
                  "data-lov-name": "I18nRouter",
                  "data-component-path": "src\\App.tsx",
                  "data-component-line": "101",
                  "data-component-file": "App.tsx",
                  "data-component-name": "I18nRouter",
                  "data-component-content": "%7B%7D",
                  children: [
                    y.jsx(Xb, {
                      "data-lov-id": "src\\App.tsx:102:14",
                      "data-lov-name": "RouteTracker",
                      "data-component-path": "src\\App.tsx",
                      "data-component-line": "102",
                      "data-component-file": "App.tsx",
                      "data-component-name": "RouteTracker",
                      "data-component-content": "%7B%7D",
                    }),
                    y.jsx(v.Suspense, {
                      "data-lov-id": "src\\App.tsx:103:14",
                      "data-lov-name": "Suspense",
                      "data-component-path": "src\\App.tsx",
                      "data-component-line": "103",
                      "data-component-file": "App.tsx",
                      "data-component-name": "Suspense",
                      "data-component-content": "%7B%7D",
                      fallback: y.jsx(Ol, {
                        "data-lov-id": "src\\App.tsx:103:34",
                        "data-lov-name": "PageLoader",
                        "data-component-path": "src\\App.tsx",
                        "data-component-line": "103",
                        "data-component-file": "App.tsx",
                        "data-component-name": "PageLoader",
                        "data-component-content": "%7B%7D",
                      }),
                      children: y.jsxs(Bl, {
                        "data-lov-id": "src\\App.tsx:104:16",
                        "data-lov-name": "Routes",
                        "data-component-path": "src\\App.tsx",
                        "data-component-line": "104",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Routes",
                        "data-component-content": "%7B%7D",
                        children: [
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:106:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "106",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/",
                            element: y.jsx(Xs, {
                              "data-lov-id": "src\\App.tsx:106:43",
                              "data-lov-name": "Navigate",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "106",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Navigate",
                              "data-component-content": "%7B%7D",
                              to: "/pt-BR",
                              replace: !0,
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:107:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "107",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/auth/callback",
                            element: y.jsx(Jb, {
                              "data-lov-id": "src\\App.tsx:107:56",
                              "data-lov-name": "AuthCallback",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "107",
                              "data-component-file": "App.tsx",
                              "data-component-name": "AuthCallback",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:110:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "110",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/pt-BR",
                            element: y.jsx(fs, {
                              "data-lov-id": "src\\App.tsx:110:48",
                              "data-lov-name": "Index",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "110",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Index",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:111:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "111",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/en-US",
                            element: y.jsx(fs, {
                              "data-lov-id": "src\\App.tsx:111:48",
                              "data-lov-name": "Index",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "111",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Index",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:112:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "112",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/es-ES",
                            element: y.jsx(fs, {
                              "data-lov-id": "src\\App.tsx:112:48",
                              "data-lov-name": "Index",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "112",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Index",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:113:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "113",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/pt-BR/login",
                            element: y.jsx(ar, {
                              "data-lov-id": "src\\App.tsx:113:54",
                              "data-lov-name": "Login",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "113",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Login",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:114:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "114",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/en-US/login",
                            element: y.jsx(ar, {
                              "data-lov-id": "src\\App.tsx:114:54",
                              "data-lov-name": "Login",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "114",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Login",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:115:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "115",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/es-ES/login",
                            element: y.jsx(ar, {
                              "data-lov-id": "src\\App.tsx:115:54",
                              "data-lov-name": "Login",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "115",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Login",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:116:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "116",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/login",
                            element: y.jsx(ar, {
                              "data-lov-id": "src\\App.tsx:116:48",
                              "data-lov-name": "Login",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "116",
                              "data-component-file": "App.tsx",
                              "data-component-name": "Login",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                          y.jsxs(G, {
                            "data-lov-id": "src\\App.tsx:118:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "118",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "/:locale/app",
                            element: y.jsx(Zb, {
                              "data-lov-id": "src\\App.tsx:121:22",
                              "data-lov-name": "ProtectedRoute",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "121",
                              "data-component-file": "App.tsx",
                              "data-component-name": "ProtectedRoute",
                              "data-component-content": "%7B%7D",
                              children: y.jsx(kb, {
                                "data-lov-id": "src\\App.tsx:122:24",
                                "data-lov-name": "LocaleGuard",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "122",
                                "data-component-file": "App.tsx",
                                "data-component-name": "LocaleGuard",
                                "data-component-content": "%7B%7D",
                                children: y.jsx(Yb, {
                                  "data-lov-id": "src\\App.tsx:123:26",
                                  "data-lov-name": "AppLayout",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "123",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "AppLayout",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                            }),
                            children: [
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:128:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "128",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                index: !0,
                                element: y.jsx(Db, {
                                  "data-lov-id": "src\\App.tsx:128:42",
                                  "data-lov-name": "Dashboard",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "128",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "Dashboard",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:129:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "129",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "reports",
                                element: y.jsx(Lb, {
                                  "data-lov-id": "src\\App.tsx:129:51",
                                  "data-lov-name": "ReportsList",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "129",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ReportsList",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:130:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "130",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "reports/new",
                                element: y.jsx(ms, {
                                  "data-lov-id": "src\\App.tsx:130:55",
                                  "data-lov-name": "ReportBuilder",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "130",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ReportBuilder",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:131:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "131",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "novo-relatorio",
                                element: y.jsx(ms, {
                                  "data-lov-id": "src\\App.tsx:131:58",
                                  "data-lov-name": "ReportBuilder",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "131",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ReportBuilder",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:132:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "132",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "new-report",
                                element: y.jsx(ms, {
                                  "data-lov-id": "src\\App.tsx:132:54",
                                  "data-lov-name": "ReportBuilder",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "132",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ReportBuilder",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:133:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "133",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "reports/:id",
                                element: y.jsx(jb, {
                                  "data-lov-id": "src\\App.tsx:133:55",
                                  "data-lov-name": "ReportDetail",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "133",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ReportDetail",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:134:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "134",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "folders",
                                element: y.jsx(Nb, {
                                  "data-lov-id": "src\\App.tsx:134:51",
                                  "data-lov-name": "Folders",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "134",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "Folders",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:135:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "135",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "folders/:id",
                                element: y.jsx($b, {
                                  "data-lov-id": "src\\App.tsx:135:55",
                                  "data-lov-name": "FolderDetail",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "135",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "FolderDetail",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:136:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "136",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "metrics",
                                element: y.jsx(Vb, {
                                  "data-lov-id": "src\\App.tsx:136:51",
                                  "data-lov-name": "MetricsDashboard",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "136",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "MetricsDashboard",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:137:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "137",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "metrics/config",
                                element: y.jsx(Gb, {
                                  "data-lov-id": "src\\App.tsx:137:58",
                                  "data-lov-name": "MetricsConfig",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "137",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "MetricsConfig",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:138:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "138",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "analytics",
                                element: y.jsx(Wb, {
                                  "data-lov-id": "src\\App.tsx:138:53",
                                  "data-lov-name": "AdvancedAnalytics",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "138",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "AdvancedAnalytics",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:139:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "139",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "decision-panel",
                                element: y.jsx(gs, {
                                  "data-lov-id": "src\\App.tsx:139:58",
                                  "data-lov-name": "DecisionPanel",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "139",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "DecisionPanel",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:140:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "140",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "painel-decisao",
                                element: y.jsx(gs, {
                                  "data-lov-id": "src\\App.tsx:140:58",
                                  "data-lov-name": "DecisionPanel",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "140",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "DecisionPanel",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:141:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "141",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "panel-decision",
                                element: y.jsx(gs, {
                                  "data-lov-id": "src\\App.tsx:141:58",
                                  "data-lov-name": "DecisionPanel",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "141",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "DecisionPanel",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:142:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "142",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "consolidated",
                                element: y.jsx(qb, {
                                  "data-lov-id": "src\\App.tsx:144:31",
                                  "data-lov-name": "ConsolidatedDashboard",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "144",
                                  "data-component-file": "App.tsx",
                                  "data-component-name":
                                    "ConsolidatedDashboard",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:146:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "146",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "organization",
                                element: y.jsx(zb, {
                                  "data-lov-id": "src\\App.tsx:148:31",
                                  "data-lov-name": "OrganizationManager",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "148",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "OrganizationManager",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:150:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "150",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "templates",
                                element: y.jsx(Hb, {
                                  "data-lov-id": "src\\App.tsx:150:53",
                                  "data-lov-name": "TemplateManager",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "150",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "TemplateManager",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:151:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "151",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "action-plan",
                                element: y.jsx(Ub, {
                                  "data-lov-id": "src\\App.tsx:151:55",
                                  "data-lov-name": "ActionPlan",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "151",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "ActionPlan",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:152:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "152",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "prioridades",
                                element: y.jsx(Fb, {
                                  "data-lov-id": "src\\App.tsx:152:55",
                                  "data-lov-name": "Priorities",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "152",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "Priorities",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:153:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "153",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "profile",
                                element: y.jsx(Mb, {
                                  "data-lov-id": "src\\App.tsx:153:51",
                                  "data-lov-name": "Profile",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "153",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "Profile",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                              y.jsx(G, {
                                "data-lov-id": "src\\App.tsx:154:20",
                                "data-lov-name": "Route",
                                "data-component-path": "src\\App.tsx",
                                "data-component-line": "154",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "settings",
                                element: y.jsx(Bb, {
                                  "data-lov-id": "src\\App.tsx:154:52",
                                  "data-lov-name": "Settings",
                                  "data-component-path": "src\\App.tsx",
                                  "data-component-line": "154",
                                  "data-component-file": "App.tsx",
                                  "data-component-name": "Settings",
                                  "data-component-content": "%7B%7D",
                                }),
                              }),
                            ],
                          }),
                          y.jsx(G, {
                            "data-lov-id": "src\\App.tsx:156:18",
                            "data-lov-name": "Route",
                            "data-component-path": "src\\App.tsx",
                            "data-component-line": "156",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Route",
                            "data-component-content": "%7B%7D",
                            path: "*",
                            element: y.jsx(Kb, {
                              "data-lov-id": "src\\App.tsx:156:43",
                              "data-lov-name": "NotFound",
                              "data-component-path": "src\\App.tsx",
                              "data-component-line": "156",
                              "data-component-file": "App.tsx",
                              "data-component-name": "NotFound",
                              "data-component-content": "%7B%7D",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
console.log("SuperRelatórios v1.0.0-alpha-hotfix-404-stable-v1");
fi(document.getElementById("root")).render(
  y.jsx(wi, {
    "data-lov-id": "src\\main.tsx:8:2",
    "data-lov-name": "HelmetProvider",
    "data-component-path": "src\\main.tsx",
    "data-component-line": "8",
    "data-component-file": "main.tsx",
    "data-component-name": "HelmetProvider",
    "data-component-content": "%7B%7D",
    children: y.jsx(e_, {
      "data-lov-id": "src\\main.tsx:9:4",
      "data-lov-name": "App",
      "data-component-path": "src\\main.tsx",
      "data-component-line": "9",
      "data-component-file": "main.tsx",
      "data-component-name": "App",
      "data-component-content": "%7B%7D",
    }),
  }),
);
export {
  Pi as $,
  ac as A,
  Ys as B,
  $d as C,
  Pd as D,
  Es as E,
  Or as F,
  Od as G,
  Sd as H,
  Td as I,
  Si as J,
  qd as K,
  kd as L,
  Ji as M,
  jp as N,
  Te as O,
  ce as P,
  Li as Q,
  Np as R,
  Rr as S,
  Hh as T,
  $p as U,
  Hp as V,
  Me as W,
  Lp as X,
  sc as Y,
  hr as Z,
  Ol as _,
  ba as a,
  na as a0,
  ay as a1,
  c_ as a2,
  uo as a3,
  Mr as a4,
  f_ as a5,
  hv as b,
  Xh as c,
  ct as d,
  a_ as e,
  i_ as f,
  Gd as g,
  An as h,
  Ee as i,
  y as j,
  o_ as k,
  gc as l,
  Zh as m,
  de as n,
  Tr as o,
  oc as p,
  He as q,
  ue as r,
  ls as s,
  Rp as t,
  on as u,
  u_ as v,
  p_ as w,
  Gh as x,
  Gc as y,
  fu as z,
};
