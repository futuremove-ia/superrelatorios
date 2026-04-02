const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Index-BAM0eIZp.js",
      "assets/sheet-eGNyEqyO.js",
      "assets/index-DM8yqzt6.js",
      "assets/vendor-Bp-AcFIh.js",
      "assets/index-Dsfa9Guj.js",
      "assets/utils-BYPr0Dmq.js",
      "assets/router-Db_Yswnp.js",
      "assets/BrandName-Cd_ApWHQ.js",
      "assets/LogoIcon-DLQkJ9DI.js",
      "assets/dropdown-menu-QFPALamZ.js",
      "assets/index-CKeeGB76.js",
      "assets/index-BwzYsyB4.js",
      "assets/card-DEQcRzjn.js",
      "assets/paper-CpOWksn7.js",
      "assets/ControlPanel-Cw3llJx-.js",
      "assets/useReports-D9iQcD4L.js",
      "assets/useQuery-CUbIaUAb.js",
      "assets/useMutation-CPK7jKck.js",
      "assets/supabaseReportsService-DqxY2XWY.js",
      "assets/useCurrentOrganization-qxH_0hip.js",
      "assets/badge-DQqwMB41.js",
      "assets/skeleton-B9cwtxN4.js",
      "assets/tabs-Cn6uPRT7.js",
      "assets/progress-BBoJfiZm.js",
      "assets/ReportsList-20YymPxq.js",
      "assets/input-BTdCt8gt.js",
      "assets/select-CuHe0xdE.js",
      "assets/index-Bxi3BZuB.js",
      "assets/ReportBuilder-BbgKXmgD.js",
      "assets/fileParserService-C2ncapS-.js",
      "assets/alert-4bci8o7z.js",
      "assets/label-BHpRHfN1.js",
      "assets/textarea-B41S52CR.js",
      "assets/mockReports-3cW05Ka2.js",
      "assets/DiagnosticSection-CX8JKyAg.js",
      "assets/PieChart-Dtv7QXz8.js",
      "assets/PriorityCard-C4mY_utM.js",
      "assets/ReportDetail-BynScP3f.js",
      "assets/Folders-BxBWapxI.js",
      "assets/FolderDetail-fvTzsEMu.js",
      "assets/Profile-DvXVFArI.js",
      "assets/avatar-CT_Bll1v.js",
      "assets/Settings-aWn9wIGw.js",
      "assets/switch-CW0HtF08.js",
      "assets/separator-Cgk7dBpt.js",
      "assets/Priorities-C_I4As-z.js",
      "assets/kpi-card-LDS_wAn7.js",
      "assets/dialog-g9IgJpzp.js",
      "assets/slider-DhVZMo5V.js",
      "assets/supabaseBusinessService-Cj3rCVfl.js",
      "assets/ActionPlan-Bip1YilT.js",
      "assets/ConsolidatedDashboard-Atualizado-BzVRoqvm.js",
      "assets/MetricsDashboard-Otimizado-CHqiUn-U.js",
      "assets/useMetricsLibrary-B3hXl6tS.js",
      "assets/OrganizationManager-BU4toMVR.js",
      "assets/TemplateManager-D8m-F4fs.js",
      "assets/DecisionPanel-CAB8Vbns.js",
      "assets/ActionableCard-DGNYnXDR.js",
      "assets/DomainTag-B-zk6gIL.js",
      "assets/MetricsConfig-DnS99BFc.js",
      "assets/table-BBuKC6rt.js",
      "assets/Analytics-lY0y7YRY.js",
      "assets/NotFound-CzE4uqFs.js",
      "assets/Login-BeJbrUaS.js",
      "assets/index-D95PfbY4.js",
      "assets/AuthCallback-D0S9zLwl.js",
      "assets/AppLayout-JR7SJEBp.js",
      "assets/index-DIPdp22R.js",
      "assets/Flows-Cq-ejqqK.js",
      "assets/Radar-Hcn8ad3Q.js",
      "assets/DocumentUploader-Cq_URVF2.js",
      "assets/Metrics-CqFiENML.js",
    ]),
) => i.map((i) => d[i]);
var Dl = Object.defineProperty;
var On = (t) => {
  throw TypeError(t);
};
var $l = (t, e, r) =>
  e in t
    ? Dl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var we = (t, e, r) => $l(t, typeof e != "symbol" ? e + "" : e, r),
  Hs = (t, e, r) => e.has(t) || On("Cannot " + r);
var C = (t, e, r) => (
    Hs(t, e, "read from private field"),
    r ? r.call(t) : e.get(t)
  ),
  G = (t, e, r) =>
    e.has(t)
      ? On("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  F = (t, e, r, s) => (
    Hs(t, e, "write to private field"),
    s ? s.call(t, r) : e.set(t, r),
    r
  ),
  oe = (t, e, r) => (Hs(t, e, "access private method"), r);
var Br = (t, e, r, s) => ({
  set _(i) {
    F(t, e, i, r);
  },
  get _() {
    return C(t, e, s);
  },
});
import {
  r as y,
  a as Cs,
  g as Xi,
  b as K,
  R as ha,
  v as Ml,
} from "./vendor-Bp-AcFIh.js";
import {
  u as tr,
  a as pa,
  b as Ul,
  N as Zi,
  B as Fl,
  R as ql,
  c as q,
} from "./router-Db_Yswnp.js";
import { X as Vl, T as zl, R as Bl } from "./utils-BYPr0Dmq.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = r(i);
    fetch(i.href, n);
  }
})();
var fa = { exports: {} },
  As = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hl = y,
  Gl = Symbol.for("react.element"),
  Wl = Symbol.for("react.fragment"),
  Kl = Object.prototype.hasOwnProperty,
  Yl = Hl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jl = { key: !0, ref: !0, __self: !0, __source: !0 };
function ma(t, e, r) {
  var s,
    i = {},
    n = null,
    o = null;
  (r !== void 0 && (n = "" + r),
    e.key !== void 0 && (n = "" + e.key),
    e.ref !== void 0 && (o = e.ref));
  for (s in e) Kl.call(e, s) && !Jl.hasOwnProperty(s) && (i[s] = e[s]);
  if (t && t.defaultProps)
    for (s in ((e = t.defaultProps), e)) i[s] === void 0 && (i[s] = e[s]);
  return {
    $$typeof: Gl,
    type: t,
    key: n,
    ref: o,
    props: i,
    _owner: Yl.current,
  };
}
As.Fragment = Wl;
As.jsx = ma;
As.jsxs = ma;
fa.exports = As;
var v = fa.exports,
  ga,
  Pn = Cs;
((ga = Pn.createRoot), Pn.hydrateRoot);
var Ql = typeof Element < "u",
  Xl = typeof Map == "function",
  Zl = typeof Set == "function",
  eu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function as(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    var r, s, i;
    if (Array.isArray(t)) {
      if (((r = t.length), r != e.length)) return !1;
      for (s = r; s-- !== 0; ) if (!as(t[s], e[s])) return !1;
      return !0;
    }
    var n;
    if (Xl && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1;
      for (n = t.entries(); !(s = n.next()).done; )
        if (!e.has(s.value[0])) return !1;
      for (n = t.entries(); !(s = n.next()).done; )
        if (!as(s.value[1], e.get(s.value[0]))) return !1;
      return !0;
    }
    if (Zl && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1;
      for (n = t.entries(); !(s = n.next()).done; )
        if (!e.has(s.value[0])) return !1;
      return !0;
    }
    if (eu && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((r = t.length), r != e.length)) return !1;
      for (s = r; s-- !== 0; ) if (t[s] !== e[s]) return !1;
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
    if (((i = Object.keys(t)), (r = i.length), r !== Object.keys(e).length))
      return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, i[s])) return !1;
    if (Ql && t instanceof Element) return !1;
    for (s = r; s-- !== 0; )
      if (
        !(
          (i[s] === "_owner" || i[s] === "__v" || i[s] === "__o") &&
          t.$$typeof
        ) &&
        !as(t[i[s]], e[i[s]])
      )
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var tu = function (e, r) {
  try {
    return as(e, r);
  } catch (s) {
    if ((s.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw s;
  }
};
const ru = Xi(tu);
var su = function (t, e, r, s, i, n, o, a) {
    if (!t) {
      var c;
      if (e === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var l = [r, s, i, n, o, a],
          u = 0;
        ((c = new Error(
          e.replace(/%s/g, function () {
            return l[u++];
          }),
        )),
          (c.name = "Invariant Violation"));
      }
      throw ((c.framesToPop = 1), c);
    }
  },
  iu = su;
const kn = Xi(iu);
var nu = function (e, r, s, i) {
  var n = s ? s.call(i, e, r) : void 0;
  if (n !== void 0) return !!n;
  if (e === r) return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r) return !1;
  var o = Object.keys(e),
    a = Object.keys(r);
  if (o.length !== a.length) return !1;
  for (
    var c = Object.prototype.hasOwnProperty.bind(r), l = 0;
    l < o.length;
    l++
  ) {
    var u = o[l];
    if (!c(u)) return !1;
    var d = e[u],
      p = r[u];
    if (
      ((n = s ? s.call(i, d, p, u) : void 0),
      n === !1 || (n === void 0 && d !== p))
    )
      return !1;
  }
  return !0;
};
const ou = Xi(nu);
var ya = ((t) => (
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
  ))(ya || {}),
  Gs = {
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
  In = Object.values(ya),
  Rs = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  va = Object.entries(Rs).reduce((t, [e, r]) => ((t[r] = e), t), {}),
  Te = "data-rh",
  Ut = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  Ft = (t, e) => {
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const s = t[r];
      if (Object.prototype.hasOwnProperty.call(s, e)) return s[e];
    }
    return null;
  },
  au = (t) => {
    let e = Ft(t, "title");
    const r = Ft(t, Ut.TITLE_TEMPLATE);
    if ((Array.isArray(e) && (e = e.join("")), r && e))
      return r.replace(/%s/g, () => e);
    const s = Ft(t, Ut.DEFAULT_TITLE);
    return e || s || void 0;
  },
  cu = (t) => Ft(t, Ut.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Ws = (t, e) =>
    e
      .filter((r) => typeof r[t] < "u")
      .map((r) => r[t])
      .reduce((r, s) => ({ ...r, ...s }), {}),
  lu = (t, e) =>
    e
      .filter((r) => typeof r.base < "u")
      .map((r) => r.base)
      .reverse()
      .reduce((r, s) => {
        if (!r.length) {
          const i = Object.keys(s);
          for (let n = 0; n < i.length; n += 1) {
            const a = i[n].toLowerCase();
            if (t.indexOf(a) !== -1 && s[a]) return r.concat(s);
          }
        }
        return r;
      }, []),
  uu = (t) => console && typeof console.warn == "function" && console.warn(t),
  cr = (t, e, r) => {
    const s = {};
    return r
      .filter((i) =>
        Array.isArray(i[t])
          ? !0
          : (typeof i[t] < "u" &&
              uu(
                `Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`,
              ),
            !1),
      )
      .map((i) => i[t])
      .reverse()
      .reduce((i, n) => {
        const o = {};
        n.filter((c) => {
          let l;
          const u = Object.keys(c);
          for (let p = 0; p < u.length; p += 1) {
            const h = u[p],
              f = h.toLowerCase();
            (e.indexOf(f) !== -1 &&
              !(l === "rel" && c[l].toLowerCase() === "canonical") &&
              !(f === "rel" && c[f].toLowerCase() === "stylesheet") &&
              (l = f),
              e.indexOf(h) !== -1 &&
                (h === "innerHTML" || h === "cssText" || h === "itemprop") &&
                (l = h));
          }
          if (!l || !c[l]) return !1;
          const d = c[l].toLowerCase();
          return (
            s[l] || (s[l] = {}),
            o[l] || (o[l] = {}),
            s[l][d] ? !1 : ((o[l][d] = !0), !0)
          );
        })
          .reverse()
          .forEach((c) => i.push(c));
        const a = Object.keys(o);
        for (let c = 0; c < a.length; c += 1) {
          const l = a[c],
            u = { ...s[l], ...o[l] };
          s[l] = u;
        }
        return i;
      }, [])
      .reverse();
  },
  du = (t, e) => {
    if (Array.isArray(t) && t.length) {
      for (let r = 0; r < t.length; r += 1) if (t[r][e]) return !0;
    }
    return !1;
  },
  hu = (t) => ({
    baseTag: lu(["href"], t),
    bodyAttributes: Ws("bodyAttributes", t),
    defer: Ft(t, Ut.DEFER),
    encode: Ft(t, Ut.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Ws("htmlAttributes", t),
    linkTags: cr("link", ["rel", "href"], t),
    metaTags: cr(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      t,
    ),
    noscriptTags: cr("noscript", ["innerHTML"], t),
    onChangeClientState: cu(t),
    scriptTags: cr("script", ["src", "innerHTML"], t),
    styleTags: cr("style", ["cssText"], t),
    title: au(t),
    titleAttributes: Ws("titleAttributes", t),
    prioritizeSeoTags: du(t, Ut.PRIORITIZE_SEO_TAGS),
  }),
  _a = (t) => (Array.isArray(t) ? t.join("") : t),
  pu = (t, e) => {
    const r = Object.keys(t);
    for (let s = 0; s < r.length; s += 1)
      if (e[r[s]] && e[r[s]].includes(t[r[s]])) return !0;
    return !1;
  },
  Ks = (t, e) =>
    Array.isArray(t)
      ? t.reduce(
          (r, s) => (pu(s, e) ? r.priority.push(s) : r.default.push(s), r),
          { priority: [], default: [] },
        )
      : { default: t, priority: [] },
  Ln = (t, e) => ({ ...t, [e]: void 0 }),
  fu = ["noscript", "script", "style"],
  _i = (t, e = !0) =>
    e === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  ba = (t) =>
    Object.keys(t).reduce((e, r) => {
      const s = typeof t[r] < "u" ? `${r}="${t[r]}"` : `${r}`;
      return e ? `${e} ${s}` : s;
    }, ""),
  mu = (t, e, r, s) => {
    const i = ba(r),
      n = _a(e);
    return i
      ? `<${t} ${Te}="true" ${i}>${_i(n, s)}</${t}>`
      : `<${t} ${Te}="true">${_i(n, s)}</${t}>`;
  },
  gu = (t, e, r = !0) =>
    e.reduce((s, i) => {
      const n = i,
        o = Object.keys(n)
          .filter((l) => !(l === "innerHTML" || l === "cssText"))
          .reduce((l, u) => {
            const d = typeof n[u] > "u" ? u : `${u}="${_i(n[u], r)}"`;
            return l ? `${l} ${d}` : d;
          }, ""),
        a = n.innerHTML || n.cssText || "",
        c = fu.indexOf(t) === -1;
      return `${s}<${t} ${Te}="true" ${o}${c ? "/>" : `>${a}</${t}>`}`;
    }, ""),
  wa = (t, e = {}) =>
    Object.keys(t).reduce((r, s) => {
      const i = Rs[s];
      return ((r[i || s] = t[s]), r);
    }, e),
  yu = (t, e, r) => {
    const s = { key: e, [Te]: !0 },
      i = wa(r, s);
    return [K.createElement("title", i, e)];
  },
  cs = (t, e) =>
    e.map((r, s) => {
      const i = { key: s, [Te]: !0 };
      return (
        Object.keys(r).forEach((n) => {
          const a = Rs[n] || n;
          if (a === "innerHTML" || a === "cssText") {
            const c = r.innerHTML || r.cssText;
            i.dangerouslySetInnerHTML = { __html: c };
          } else i[a] = r[n];
        }),
        K.createElement(t, i)
      );
    }),
  _e = (t, e, r = !0) => {
    switch (t) {
      case "title":
        return {
          toComponent: () => yu(t, e.title, e.titleAttributes),
          toString: () => mu(t, e.title, e.titleAttributes, r),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => wa(e), toString: () => ba(e) };
      default:
        return { toComponent: () => cs(t, e), toString: () => gu(t, e, r) };
    }
  },
  vu = ({ metaTags: t, linkTags: e, scriptTags: r, encode: s }) => {
    const i = Ks(t, Gs.meta),
      n = Ks(e, Gs.link),
      o = Ks(r, Gs.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...cs("meta", i.priority),
          ...cs("link", n.priority),
          ...cs("script", o.priority),
        ],
        toString: () =>
          `${_e("meta", i.priority, s)} ${_e("link", n.priority, s)} ${_e("script", o.priority, s)}`,
      },
      metaTags: i.default,
      linkTags: n.default,
      scriptTags: o.default,
    };
  },
  _u = (t) => {
    const {
      baseTag: e,
      bodyAttributes: r,
      encode: s = !0,
      htmlAttributes: i,
      noscriptTags: n,
      styleTags: o,
      title: a = "",
      titleAttributes: c,
      prioritizeSeoTags: l,
    } = t;
    let { linkTags: u, metaTags: d, scriptTags: p } = t,
      h = { toComponent: () => [], toString: () => "" };
    return (
      l &&
        ({
          priorityMethods: h,
          linkTags: u,
          metaTags: d,
          scriptTags: p,
        } = vu(t)),
      {
        priority: h,
        base: _e("base", e, s),
        bodyAttributes: _e("bodyAttributes", r, s),
        htmlAttributes: _e("htmlAttributes", i, s),
        link: _e("link", u, s),
        meta: _e("meta", d, s),
        noscript: _e("noscript", n, s),
        script: _e("script", p, s),
        style: _e("style", o, s),
        title: _e("title", { title: a, titleAttributes: c }, s),
      }
    );
  },
  bi = _u,
  Hr = [],
  en = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  wi = class {
    constructor(t, e) {
      we(this, "instances", []);
      we(this, "canUseDOM", en);
      we(this, "context");
      we(this, "value", {
        setHelmet: (t) => {
          this.context.helmet = t;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Hr : this.instances),
          add: (t) => {
            (this.canUseDOM ? Hr : this.instances).push(t);
          },
          remove: (t) => {
            const e = (this.canUseDOM ? Hr : this.instances).indexOf(t);
            (this.canUseDOM ? Hr : this.instances).splice(e, 1);
          },
        },
      });
      ((this.context = t),
        (this.canUseDOM = e || !1),
        e ||
          (t.helmet = bi({
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
  bu = parseInt(K.version.split(".")[0], 10),
  Ei = bu >= 19,
  wu = {},
  Ea = K.createContext(wu),
  vt,
  Sa =
    ((vt = class extends y.Component {
      constructor(r) {
        super(r);
        we(this, "helmetData");
        Ei
          ? (this.helmetData = null)
          : (this.helmetData = new wi(this.props.context || {}, vt.canUseDOM));
      }
      render() {
        return Ei
          ? K.createElement(K.Fragment, null, this.props.children)
          : K.createElement(
              Ea.Provider,
              { value: this.helmetData.value },
              this.props.children,
            );
      }
    }),
    we(vt, "canUseDOM", en),
    vt),
  Rt = (t, e) => {
    const r = document.head || document.querySelector("head"),
      s = r.querySelectorAll(`${t}[${Te}]`),
      i = [].slice.call(s),
      n = [];
    let o;
    return (
      e &&
        e.length &&
        e.forEach((a) => {
          const c = document.createElement(t);
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l))
              if (l === "innerHTML") c.innerHTML = a.innerHTML;
              else if (l === "cssText") {
                const u = a.cssText;
                c.appendChild(document.createTextNode(u));
              } else {
                const u = l,
                  d = typeof a[u] > "u" ? "" : a[u];
                c.setAttribute(l, d);
              }
          (c.setAttribute(Te, "true"),
            i.some((l, u) => ((o = u), c.isEqualNode(l)))
              ? i.splice(o, 1)
              : n.push(c));
        }),
      i.forEach((a) => {
        var c;
        return (c = a.parentNode) == null ? void 0 : c.removeChild(a);
      }),
      n.forEach((a) => r.appendChild(a)),
      { oldTags: i, newTags: n }
    );
  },
  Si = (t, e) => {
    const r = document.getElementsByTagName(t)[0];
    if (!r) return;
    const s = r.getAttribute(Te),
      i = s ? s.split(",") : [],
      n = [...i],
      o = Object.keys(e);
    for (const a of o) {
      const c = e[a] || "";
      (r.getAttribute(a) !== c && r.setAttribute(a, c),
        i.indexOf(a) === -1 && i.push(a));
      const l = n.indexOf(a);
      l !== -1 && n.splice(l, 1);
    }
    for (let a = n.length - 1; a >= 0; a -= 1) r.removeAttribute(n[a]);
    i.length === n.length
      ? r.removeAttribute(Te)
      : r.getAttribute(Te) !== o.join(",") && r.setAttribute(Te, o.join(","));
  },
  Eu = (t, e) => {
    (typeof t < "u" && document.title !== t && (document.title = _a(t)),
      Si("title", e));
  },
  jn = (t, e) => {
    const {
      baseTag: r,
      bodyAttributes: s,
      htmlAttributes: i,
      linkTags: n,
      metaTags: o,
      noscriptTags: a,
      onChangeClientState: c,
      scriptTags: l,
      styleTags: u,
      title: d,
      titleAttributes: p,
    } = t;
    (Si("body", s), Si("html", i), Eu(d, p));
    const h = {
        baseTag: Rt("base", r),
        linkTags: Rt("link", n),
        metaTags: Rt("meta", o),
        noscriptTags: Rt("noscript", a),
        scriptTags: Rt("script", l),
        styleTags: Rt("style", u),
      },
      f = {},
      m = {};
    (Object.keys(h).forEach((g) => {
      const { newTags: _, oldTags: b } = h[g];
      (_.length && (f[g] = _), b.length && (m[g] = h[g].oldTags));
    }),
      e && e(),
      c(t, f, m));
  },
  lr = null,
  Su = (t) => {
    (lr && cancelAnimationFrame(lr),
      t.defer
        ? (lr = requestAnimationFrame(() => {
            jn(t, () => {
              lr = null;
            });
          }))
        : (jn(t), (lr = null)));
  },
  xu = Su,
  Nn = class extends y.Component {
    constructor() {
      super(...arguments);
      we(this, "rendered", !1);
    }
    shouldComponentUpdate(e) {
      return !ou(e, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: e } = this.props.context;
      (e.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: e, setHelmet: r } = this.props.context;
      let s = null;
      const i = hu(
        e.get().map((n) => {
          const { context: o, ...a } = n.props;
          return a;
        }),
      );
      (Sa.canUseDOM ? xu(i) : bi && (s = bi(i)), r(s));
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
  ls = [],
  Dn = (t) => {
    const e = {};
    for (const r of Object.keys(t)) e[va[r] || r] = t[r];
    return e;
  },
  ut = (t) => {
    const e = {};
    for (const r of Object.keys(t)) {
      const s = Rs[r];
      e[s || r] = t[r];
    }
    return e;
  },
  $n = (t, e) => {
    if (!en) return;
    const r = document.getElementsByTagName(t)[0];
    if (!r) return;
    const s = "data-rh-managed",
      i = r.getAttribute(s),
      n = i ? i.split(",") : [],
      o = Object.keys(e);
    for (const a of n) o.includes(a) || r.removeAttribute(a);
    for (const a of o) {
      const c = e[a];
      c == null || c === !1
        ? r.removeAttribute(a)
        : c === !0
          ? r.setAttribute(a, "")
          : r.setAttribute(a, String(c));
    }
    o.length > 0 ? r.setAttribute(s, o.join(",")) : r.removeAttribute(s);
  },
  Ys = () => {
    const t = {},
      e = {};
    for (const r of ls) {
      const { htmlAttributes: s, bodyAttributes: i } = r.props;
      (s && Object.assign(t, Dn(s)), i && Object.assign(e, Dn(i)));
    }
    ($n("html", t), $n("body", e));
  },
  Cu = class extends y.Component {
    componentDidMount() {
      (ls.push(this), Ys());
    }
    componentDidUpdate() {
      Ys();
    }
    componentWillUnmount() {
      const t = ls.indexOf(this);
      (t !== -1 && ls.splice(t, 1), Ys());
    }
    resolveTitle() {
      const { title: t, titleTemplate: e, defaultTitle: r } = this.props;
      return t && e
        ? e.replace(/%s/g, () => (Array.isArray(t) ? t.join("") : t))
        : t || r || void 0;
    }
    renderTitle() {
      const t = this.resolveTitle();
      if (t === void 0) return null;
      const e = this.props.titleAttributes || {};
      return K.createElement("title", ut(e), t);
    }
    renderBase() {
      const { base: t } = this.props;
      return t ? K.createElement("base", ut(t)) : null;
    }
    renderMeta() {
      const { meta: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, r) => K.createElement("meta", { key: r, ...ut(e) }));
    }
    renderLink() {
      const { link: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, r) => K.createElement("link", { key: r, ...ut(e) }));
    }
    renderScript() {
      const { script: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, r) => {
            const { innerHTML: s, ...i } = e,
              n = ut(i);
            return (
              s && (n.dangerouslySetInnerHTML = { __html: s }),
              K.createElement("script", { key: r, ...n })
            );
          });
    }
    renderStyle() {
      const { style: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, r) => {
            const { cssText: s, ...i } = e,
              n = ut(i);
            return (
              s && (n.dangerouslySetInnerHTML = { __html: s }),
              K.createElement("style", { key: r, ...n })
            );
          });
    }
    renderNoscript() {
      const { noscript: t } = this.props;
      return !t || !Array.isArray(t)
        ? null
        : t.map((e, r) => {
            const { innerHTML: s, ...i } = e,
              n = ut(i);
            return (
              s && (n.dangerouslySetInnerHTML = { __html: s }),
              K.createElement("noscript", { key: r, ...n })
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
  vi,
  Au =
    ((vi = class extends y.Component {
      shouldComponentUpdate(t) {
        return !ru(Ln(this.props, "helmetData"), Ln(t, "helmetData"));
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
      flattenArrayTypeChildren(t, e, r, s) {
        return {
          ...e,
          [t.type]: [
            ...(e[t.type] || []),
            { ...r, ...this.mapNestedChildrenToProps(t, s) },
          ],
        };
      }
      mapObjectTypeChildren(t, e, r, s) {
        switch (t.type) {
          case "title":
            return { ...e, [t.type]: s, titleAttributes: { ...r } };
          case "body":
            return { ...e, bodyAttributes: { ...r } };
          case "html":
            return { ...e, htmlAttributes: { ...r } };
          default:
            return { ...e, [t.type]: { ...r } };
        }
      }
      mapArrayTypeChildrenToProps(t, e) {
        let r = { ...e };
        return (
          Object.keys(t).forEach((s) => {
            r = { ...r, [s]: t[s] };
          }),
          r
        );
      }
      warnOnInvalidChildren(t, e) {
        return (
          kn(
            In.some((r) => t.type === r),
            typeof t.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${In.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`,
          ),
          kn(
            !e ||
              typeof e == "string" ||
              (Array.isArray(e) && !e.some((r) => typeof r != "string")),
            `Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(t, e) {
        let r = {};
        return (
          K.Children.forEach(t, (s) => {
            if (!s || !s.props) return;
            const { children: i, ...n } = s.props,
              o = Object.keys(n).reduce(
                (c, l) => ((c[va[l] || l] = n[l]), c),
                {},
              );
            let { type: a } = s;
            switch (
              (typeof a == "symbol"
                ? (a = a.toString())
                : this.warnOnInvalidChildren(s, i),
              a)
            ) {
              case "Symbol(react.fragment)":
                e = this.mapChildrenToProps(i, e);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                r = this.flattenArrayTypeChildren(s, r, o, i);
                break;
              default:
                e = this.mapObjectTypeChildren(s, e, o, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(r, e)
        );
      }
      render() {
        const { children: t, ...e } = this.props;
        let r = { ...e },
          { helmetData: s } = e;
        if (
          (t && (r = this.mapChildrenToProps(t, r)), s && !(s instanceof wi))
        ) {
          const i = s;
          ((s = new wi(i.context, !0)), delete r.helmetData);
        }
        return Ei
          ? K.createElement(Cu, { ...r })
          : s
            ? K.createElement(Nn, { ...r, context: s.value })
            : K.createElement(Ea.Consumer, null, (i) =>
                K.createElement(Nn, { ...r, context: i }),
              );
      }
    }),
    we(vi, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    vi);
const Ru = "modulepreload",
  Tu = function (t) {
    return "/" + t;
  },
  Mn = {},
  Y = function (e, r, s) {
    let i = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(
        r.map((c) => {
          if (((c = Tu(c)), c in Mn)) return;
          Mn[c] = !0;
          const l = c.endsWith(".css"),
            u = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${u}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = l ? "stylesheet" : Ru),
            l || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            l)
          )
            return new Promise((p, h) => {
              (d.addEventListener("load", p),
                d.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function n(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && n(a.reason);
      return e().catch(n);
    });
  };
var Ts = class {
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
  Os = typeof window > "u" || "Deno" in globalThis;
function Se() {}
function Ou(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Pu(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function ku(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function xi(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Iu(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Un(t, e) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: i,
    predicate: n,
    queryKey: o,
    stale: a,
  } = t;
  if (o) {
    if (s) {
      if (e.queryHash !== tn(o, e.options)) return !1;
    } else if (!Cr(e.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const c = e.isActive();
    if ((r === "active" && !c) || (r === "inactive" && c)) return !1;
  }
  return !(
    (typeof a == "boolean" && e.isStale() !== a) ||
    (i && i !== e.state.fetchStatus) ||
    (n && !n(e))
  );
}
function Fn(t, e) {
  const { exact: r, status: s, predicate: i, mutationKey: n } = t;
  if (n) {
    if (!e.options.mutationKey) return !1;
    if (r) {
      if (xr(e.options.mutationKey) !== xr(n)) return !1;
    } else if (!Cr(e.options.mutationKey, n)) return !1;
  }
  return !((s && e.state.status !== s) || (i && !i(e)));
}
function tn(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || xr)(t);
}
function xr(t) {
  return JSON.stringify(t, (e, r) =>
    Ci(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, i) => ((s[i] = r[i]), s), {})
      : r,
  );
}
function Cr(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
      ? !1
      : t && e && typeof t == "object" && typeof e == "object"
        ? Object.keys(e).every((r) => Cr(t[r], e[r]))
        : !1;
}
function xa(t, e) {
  if (t === e) return t;
  const r = qn(t) && qn(e);
  if (r || (Ci(t) && Ci(e))) {
    const s = r ? t : Object.keys(t),
      i = s.length,
      n = r ? e : Object.keys(e),
      o = n.length,
      a = r ? [] : {},
      c = new Set(s);
    let l = 0;
    for (let u = 0; u < o; u++) {
      const d = r ? u : n[u];
      ((!r && c.has(d)) || r) && t[d] === void 0 && e[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = xa(t[d], e[d])), a[d] === t[d] && t[d] !== void 0 && l++);
    }
    return i === o && l === i ? t : a;
  }
  return e;
}
function ub(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const r in t) if (t[r] !== e[r]) return !1;
  return !0;
}
function qn(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ci(t) {
  if (!Vn(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(
    !Vn(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function Vn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Lu(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function ju(t, e, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(t, e)
    : r.structuralSharing !== !1
      ? xa(t, e)
      : e;
}
function Nu(t, e, r = 0) {
  const s = [...t, e];
  return r && s.length > r ? s.slice(1) : s;
}
function Du(t, e, r = 0) {
  const s = [e, ...t];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var rn = Symbol();
function Ca(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === rn
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function db(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var _t,
  tt,
  Bt,
  ia,
  $u =
    ((ia = class extends Ts {
      constructor() {
        super();
        G(this, _t);
        G(this, tt);
        G(this, Bt);
        F(this, Bt, (e) => {
          if (!Os && window.addEventListener) {
            const r = () => e();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, tt) || this.setEventListener(C(this, Bt));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = C(this, tt)) == null || e.call(this), F(this, tt, void 0));
      }
      setEventListener(e) {
        var r;
        (F(this, Bt, e),
          (r = C(this, tt)) == null || r.call(this),
          F(
            this,
            tt,
            e((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            }),
          ));
      }
      setFocused(e) {
        C(this, _t) !== e && (F(this, _t, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((r) => {
          r(e);
        });
      }
      isFocused() {
        var e;
        return typeof C(this, _t) == "boolean"
          ? C(this, _t)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (_t = new WeakMap()),
    (tt = new WeakMap()),
    (Bt = new WeakMap()),
    ia),
  Aa = new $u(),
  Ht,
  rt,
  Gt,
  na,
  Mu =
    ((na = class extends Ts {
      constructor() {
        super();
        G(this, Ht, !0);
        G(this, rt);
        G(this, Gt);
        F(this, Gt, (e) => {
          if (!Os && window.addEventListener) {
            const r = () => e(!0),
              s = () => e(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", r),
                  window.removeEventListener("offline", s));
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, rt) || this.setEventListener(C(this, Gt));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = C(this, rt)) == null || e.call(this), F(this, rt, void 0));
      }
      setEventListener(e) {
        var r;
        (F(this, Gt, e),
          (r = C(this, rt)) == null || r.call(this),
          F(this, rt, e(this.setOnline.bind(this))));
      }
      setOnline(e) {
        C(this, Ht) !== e &&
          (F(this, Ht, e),
          this.listeners.forEach((s) => {
            s(e);
          }));
      }
      isOnline() {
        return C(this, Ht);
      }
    }),
    (Ht = new WeakMap()),
    (rt = new WeakMap()),
    (Gt = new WeakMap()),
    na),
  ps = new Mu();
function Uu() {
  let t, e;
  const r = new Promise((i, n) => {
    ((t = i), (e = n));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function s(i) {
    (Object.assign(r, i), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (i) => {
      (s({ status: "fulfilled", value: i }), t(i));
    }),
    (r.reject = (i) => {
      (s({ status: "rejected", reason: i }), e(i));
    }),
    r
  );
}
function Fu(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Ra(t) {
  return (t ?? "online") === "online" ? ps.isOnline() : !0;
}
var Ta = class extends Error {
  constructor(t) {
    (super("CancelledError"),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent));
  }
};
function Js(t) {
  return t instanceof Ta;
}
function Oa(t) {
  let e = !1,
    r = 0,
    s = !1,
    i;
  const n = Uu(),
    o = (m) => {
      var g;
      s || (p(new Ta(m)), (g = t.abort) == null || g.call(t));
    },
    a = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    l = () =>
      Aa.isFocused() &&
      (t.networkMode === "always" || ps.isOnline()) &&
      t.canRun(),
    u = () => Ra(t.networkMode) && t.canRun(),
    d = (m) => {
      var g;
      s ||
        ((s = !0),
        (g = t.onSuccess) == null || g.call(t, m),
        i == null || i(),
        n.resolve(m));
    },
    p = (m) => {
      var g;
      s ||
        ((s = !0),
        (g = t.onError) == null || g.call(t, m),
        i == null || i(),
        n.reject(m));
    },
    h = () =>
      new Promise((m) => {
        var g;
        ((i = (_) => {
          (s || l()) && m(_);
        }),
          (g = t.onPause) == null || g.call(t));
      }).then(() => {
        var m;
        ((i = void 0), s || (m = t.onContinue) == null || m.call(t));
      }),
    f = () => {
      if (s) return;
      let m;
      const g = r === 0 ? t.initialPromise : void 0;
      try {
        m = g ?? t.fn();
      } catch (_) {
        m = Promise.reject(_);
      }
      Promise.resolve(m)
        .then(d)
        .catch((_) => {
          var A;
          if (s) return;
          const b = t.retry ?? (Os ? 0 : 3),
            w = t.retryDelay ?? Fu,
            E = typeof w == "function" ? w(r, _) : w,
            S =
              b === !0 ||
              (typeof b == "number" && r < b) ||
              (typeof b == "function" && b(r, _));
          if (e || !S) {
            p(_);
            return;
          }
          (r++,
            (A = t.onFail) == null || A.call(t, r, _),
            Lu(E)
              .then(() => (l() ? void 0 : h()))
              .then(() => {
                e ? p(_) : f();
              }));
        });
    };
  return {
    promise: n,
    cancel: o,
    continue: () => (i == null || i(), n),
    cancelRetry: a,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? f() : h().then(f), n),
  };
}
var qu = (t) => setTimeout(t, 0);
function Vu() {
  let t = [],
    e = 0,
    r = (a) => {
      a();
    },
    s = (a) => {
      a();
    },
    i = qu;
  const n = (a) => {
      e
        ? t.push(a)
        : i(() => {
            r(a);
          });
    },
    o = () => {
      const a = t;
      ((t = []),
        a.length &&
          i(() => {
            s(() => {
              a.forEach((c) => {
                r(c);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let c;
      e++;
      try {
        c = a();
      } finally {
        (e--, e || o());
      }
      return c;
    },
    batchCalls:
      (a) =>
      (...c) => {
        n(() => {
          a(...c);
        });
      },
    schedule: n,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      s = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var ue = Vu(),
  bt,
  oa,
  Pa =
    ((oa = class {
      constructor() {
        G(this, bt);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Pu(this.gcTime) &&
            F(
              this,
              bt,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(t) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          t ?? (Os ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        C(this, bt) && (clearTimeout(C(this, bt)), F(this, bt, void 0));
      }
    }),
    (bt = new WeakMap()),
    oa),
  Wt,
  wt,
  be,
  Et,
  ae,
  $r,
  St,
  Ce,
  ze,
  aa,
  zu =
    ((aa = class extends Pa {
      constructor(e) {
        super();
        G(this, Ce);
        G(this, Wt);
        G(this, wt);
        G(this, be);
        G(this, Et);
        G(this, ae);
        G(this, $r);
        G(this, St);
        (F(this, St, !1),
          F(this, $r, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          F(this, Et, e.client),
          F(this, be, C(this, Et).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          F(this, Wt, Hu(this.options)),
          (this.state = e.state ?? C(this, Wt)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = C(this, ae)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        ((this.options = { ...C(this, $r), ...e }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          C(this, be).remove(this);
      }
      setData(e, r) {
        const s = ju(this.state.data, e, this.options);
        return (
          oe(this, Ce, ze).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          s
        );
      }
      setState(e, r) {
        oe(this, Ce, ze).call(this, {
          type: "setState",
          state: e,
          setStateOptions: r,
        });
      }
      cancel(e) {
        var s, i;
        const r = (s = C(this, ae)) == null ? void 0 : s.promise;
        return (
          (i = C(this, ae)) == null || i.cancel(e),
          r ? r.then(Se).catch(Se) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(C(this, Wt)));
      }
      isActive() {
        return this.observers.some((e) => Iu(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === rn ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => xi(e.options.staleTime, this) === "static",
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
              : !ku(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var r;
        const e = this.observers.find((s) => s.shouldFetchOnWindowFocus());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (r = C(this, ae)) == null || r.continue());
      }
      onOnline() {
        var r;
        const e = this.observers.find((s) => s.shouldFetchOnReconnect());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (r = C(this, ae)) == null || r.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          C(this, be).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((r) => r !== e)),
          this.observers.length ||
            (C(this, ae) &&
              (C(this, St)
                ? C(this, ae).cancel({ revert: !0 })
                : C(this, ae).cancelRetry()),
            this.scheduleGc()),
          C(this, be).notify({
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
          oe(this, Ce, ze).call(this, { type: "invalidate" });
      }
      fetch(e, r) {
        var l, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (C(this, ae))
            return (C(this, ae).continueRetry(), C(this, ae).promise);
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const p = this.observers.find((h) => h.options.queryFn);
          p && this.setOptions(p.options);
        }
        const s = new AbortController(),
          i = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (F(this, St, !0), s.signal),
            });
          },
          n = () => {
            const p = Ca(this.options, r),
              f = (() => {
                const m = {
                  client: C(this, Et),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (i(m), m);
              })();
            return (
              F(this, St, !1),
              this.options.persister ? this.options.persister(p, f, this) : p(f)
            );
          },
          a = (() => {
            const p = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: C(this, Et),
              state: this.state,
              fetchFn: n,
            };
            return (i(p), p);
          })();
        ((l = this.options.behavior) == null || l.onFetch(a, this),
          F(this, wt, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
            oe(this, Ce, ze).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const c = (p) => {
          var h, f, m, g;
          ((Js(p) && p.silent) ||
            oe(this, Ce, ze).call(this, { type: "error", error: p }),
            Js(p) ||
              ((f = (h = C(this, be).config).onError) == null ||
                f.call(h, p, this),
              (g = (m = C(this, be).config).onSettled) == null ||
                g.call(m, this.state.data, p, this)),
            this.scheduleGc());
        };
        return (
          F(
            this,
            ae,
            Oa({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (p) => {
                var h, f, m, g;
                if (p === void 0) {
                  c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (_) {
                  c(_);
                  return;
                }
                ((f = (h = C(this, be).config).onSuccess) == null ||
                  f.call(h, p, this),
                  (g = (m = C(this, be).config).onSettled) == null ||
                    g.call(m, p, this.state.error, this),
                  this.scheduleGc());
              },
              onError: c,
              onFail: (p, h) => {
                oe(this, Ce, ze).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: h,
                });
              },
              onPause: () => {
                oe(this, Ce, ze).call(this, { type: "pause" });
              },
              onContinue: () => {
                oe(this, Ce, ze).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          C(this, ae).start()
        );
      }
    }),
    (Wt = new WeakMap()),
    (wt = new WeakMap()),
    (be = new WeakMap()),
    (Et = new WeakMap()),
    (ae = new WeakMap()),
    ($r = new WeakMap()),
    (St = new WeakMap()),
    (Ce = new WeakSet()),
    (ze = function (e) {
      const r = (s) => {
        switch (e.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Bu(s.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            return (
              F(this, wt, void 0),
              {
                ...s,
                data: e.data,
                dataUpdateCount: s.dataUpdateCount + 1,
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
            const i = e.error;
            return Js(i) && i.revert && C(this, wt)
              ? { ...C(this, wt), fetchStatus: "idle" }
              : {
                  ...s,
                  error: i,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...e.state };
        }
      };
      ((this.state = r(this.state)),
        ue.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            C(this, be).notify({ query: this, type: "updated", action: e }));
        }));
    }),
    aa);
function Bu(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ra(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function Hu(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    r = e !== void 0,
    s = r
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (s ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ie,
  ca,
  Gu =
    ((ca = class extends Ts {
      constructor(e = {}) {
        super();
        G(this, Ie);
        ((this.config = e), F(this, Ie, new Map()));
      }
      build(e, r, s) {
        const i = r.queryKey,
          n = r.queryHash ?? tn(i, r);
        let o = this.get(n);
        return (
          o ||
            ((o = new zu({
              client: e,
              queryKey: i,
              queryHash: n,
              options: e.defaultQueryOptions(r),
              state: s,
              defaultOptions: e.getQueryDefaults(i),
            })),
            this.add(o)),
          o
        );
      }
      add(e) {
        C(this, Ie).has(e.queryHash) ||
          (C(this, Ie).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const r = C(this, Ie).get(e.queryHash);
        r &&
          (e.destroy(),
          r === e && C(this, Ie).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        ue.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return C(this, Ie).get(e);
      }
      getAll() {
        return [...C(this, Ie).values()];
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((s) => Un(r, s));
      }
      findAll(e = {}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter((s) => Un(e, s)) : r;
      }
      notify(e) {
        ue.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      onFocus() {
        ue.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        ue.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (Ie = new WeakMap()),
    ca),
  Le,
  le,
  xt,
  je,
  Xe,
  la,
  Wu =
    ((la = class extends Pa {
      constructor(e) {
        super();
        G(this, je);
        G(this, Le);
        G(this, le);
        G(this, xt);
        ((this.mutationId = e.mutationId),
          F(this, le, e.mutationCache),
          F(this, Le, []),
          (this.state = e.state || Ku()),
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
        C(this, Le).includes(e) ||
          (C(this, Le).push(e),
          this.clearGcTimeout(),
          C(this, le).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        (F(
          this,
          Le,
          C(this, Le).filter((r) => r !== e),
        ),
          this.scheduleGc(),
          C(this, le).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          }));
      }
      optionalRemove() {
        C(this, Le).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : C(this, le).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = C(this, xt)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var n, o, a, c, l, u, d, p, h, f, m, g, _, b, w, E, S, A, x, L;
        const r = () => {
          oe(this, je, Xe).call(this, { type: "continue" });
        };
        F(
          this,
          xt,
          Oa({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, I) => {
              oe(this, je, Xe).call(this, {
                type: "failed",
                failureCount: T,
                error: I,
              });
            },
            onPause: () => {
              oe(this, je, Xe).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, le).canRun(this),
          }),
        );
        const s = this.state.status === "pending",
          i = !C(this, xt).canStart();
        try {
          if (s) r();
          else {
            (oe(this, je, Xe).call(this, {
              type: "pending",
              variables: e,
              isPaused: i,
            }),
              await ((o = (n = C(this, le).config).onMutate) == null
                ? void 0
                : o.call(n, e, this)));
            const I = await ((c = (a = this.options).onMutate) == null
              ? void 0
              : c.call(a, e));
            I !== this.state.context &&
              oe(this, je, Xe).call(this, {
                type: "pending",
                context: I,
                variables: e,
                isPaused: i,
              });
          }
          const T = await C(this, xt).start();
          return (
            await ((u = (l = C(this, le).config).onSuccess) == null
              ? void 0
              : u.call(l, T, e, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null
              ? void 0
              : p.call(d, T, e, this.state.context)),
            await ((f = (h = C(this, le).config).onSettled) == null
              ? void 0
              : f.call(
                  h,
                  T,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((g = (m = this.options).onSettled) == null
              ? void 0
              : g.call(m, T, null, e, this.state.context)),
            oe(this, je, Xe).call(this, { type: "success", data: T }),
            T
          );
        } catch (T) {
          try {
            throw (
              await ((b = (_ = C(this, le).config).onError) == null
                ? void 0
                : b.call(_, T, e, this.state.context, this)),
              await ((E = (w = this.options).onError) == null
                ? void 0
                : E.call(w, T, e, this.state.context)),
              await ((A = (S = C(this, le).config).onSettled) == null
                ? void 0
                : A.call(
                    S,
                    void 0,
                    T,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((L = (x = this.options).onSettled) == null
                ? void 0
                : L.call(x, void 0, T, e, this.state.context)),
              T
            );
          } finally {
            oe(this, je, Xe).call(this, { type: "error", error: T });
          }
        } finally {
          C(this, le).runNext(this);
        }
      }
    }),
    (Le = new WeakMap()),
    (le = new WeakMap()),
    (xt = new WeakMap()),
    (je = new WeakSet()),
    (Xe = function (e) {
      const r = (s) => {
        switch (e.type) {
          case "failed":
            return {
              ...s,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
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
              ...s,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: e.error,
              failureCount: s.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = r(this.state)),
        ue.batch(() => {
          (C(this, Le).forEach((s) => {
            s.onMutationUpdate(e);
          }),
            C(this, le).notify({ mutation: this, type: "updated", action: e }));
        }));
    }),
    la);
function Ku() {
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
  Ae,
  Mr,
  ua,
  Yu =
    ((ua = class extends Ts {
      constructor(e = {}) {
        super();
        G(this, Ge);
        G(this, Ae);
        G(this, Mr);
        ((this.config = e),
          F(this, Ge, new Set()),
          F(this, Ae, new Map()),
          F(this, Mr, 0));
      }
      build(e, r, s) {
        const i = new Wu({
          mutationCache: this,
          mutationId: ++Br(this, Mr)._,
          options: e.defaultMutationOptions(r),
          state: s,
        });
        return (this.add(i), i);
      }
      add(e) {
        C(this, Ge).add(e);
        const r = Gr(e);
        if (typeof r == "string") {
          const s = C(this, Ae).get(r);
          s ? s.push(e) : C(this, Ae).set(r, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if (C(this, Ge).delete(e)) {
          const r = Gr(e);
          if (typeof r == "string") {
            const s = C(this, Ae).get(r);
            if (s)
              if (s.length > 1) {
                const i = s.indexOf(e);
                i !== -1 && s.splice(i, 1);
              } else s[0] === e && C(this, Ae).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const r = Gr(e);
        if (typeof r == "string") {
          const s = C(this, Ae).get(r),
            i =
              s == null ? void 0 : s.find((n) => n.state.status === "pending");
          return !i || i === e;
        } else return !0;
      }
      runNext(e) {
        var s;
        const r = Gr(e);
        if (typeof r == "string") {
          const i =
            (s = C(this, Ae).get(r)) == null
              ? void 0
              : s.find((n) => n !== e && n.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ue.batch(() => {
          (C(this, Ge).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            C(this, Ge).clear(),
            C(this, Ae).clear());
        });
      }
      getAll() {
        return Array.from(C(this, Ge));
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((s) => Fn(r, s));
      }
      findAll(e = {}) {
        return this.getAll().filter((r) => Fn(e, r));
      }
      notify(e) {
        ue.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((r) => r.state.isPaused);
        return ue.batch(() =>
          Promise.all(e.map((r) => r.continue().catch(Se))),
        );
      }
    }),
    (Ge = new WeakMap()),
    (Ae = new WeakMap()),
    (Mr = new WeakMap()),
    ua);
function Gr(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
function zn(t) {
  return {
    onFetch: (e, r) => {
      var u, d, p, h, f;
      const s = e.options,
        i =
          (p =
            (d = (u = e.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : p.direction,
        n = ((h = e.state.data) == null ? void 0 : h.pages) || [],
        o = ((f = e.state.data) == null ? void 0 : f.pageParams) || [];
      let a = { pages: [], pageParams: [] },
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
          _ = Ca(e.options, e.fetchOptions),
          b = async (w, E, S) => {
            if (m) return Promise.reject();
            if (E == null && w.pages.length) return Promise.resolve(w);
            const x = (() => {
                const B = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: E,
                  direction: S ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return (g(B), B);
              })(),
              L = await _(x),
              { maxPages: T } = e.options,
              I = S ? Du : Nu;
            return {
              pages: I(w.pages, L, T),
              pageParams: I(w.pageParams, E, T),
            };
          };
        if (i && n.length) {
          const w = i === "backward",
            E = w ? Ju : Bn,
            S = { pages: n, pageParams: o },
            A = E(s, S);
          a = await b(S, A, w);
        } else {
          const w = t ?? n.length;
          do {
            const E = c === 0 ? (o[0] ?? s.initialPageParam) : Bn(s, a);
            if (c > 0 && E == null) break;
            ((a = await b(a, E)), c++);
          } while (c < w);
        }
        return a;
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
                  r,
                );
          })
        : (e.fetchFn = l);
    },
  };
}
function Bn(t, { pages: e, pageParams: r }) {
  const s = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[s], e, r[s], r) : void 0;
}
function Ju(t, { pages: e, pageParams: r }) {
  var s;
  return e.length > 0
    ? (s = t.getPreviousPageParam) == null
      ? void 0
      : s.call(t, e[0], e, r[0], r)
    : void 0;
}
var X,
  st,
  it,
  Kt,
  Yt,
  nt,
  Jt,
  Qt,
  da,
  Qu =
    ((da = class {
      constructor(t = {}) {
        G(this, X);
        G(this, st);
        G(this, it);
        G(this, Kt);
        G(this, Yt);
        G(this, nt);
        G(this, Jt);
        G(this, Qt);
        (F(this, X, t.queryCache || new Gu()),
          F(this, st, t.mutationCache || new Yu()),
          F(this, it, t.defaultOptions || {}),
          F(this, Kt, new Map()),
          F(this, Yt, new Map()),
          F(this, nt, 0));
      }
      mount() {
        (Br(this, nt)._++,
          C(this, nt) === 1 &&
            (F(
              this,
              Jt,
              Aa.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), C(this, X).onFocus());
              }),
            ),
            F(
              this,
              Qt,
              ps.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), C(this, X).onOnline());
              }),
            )));
      }
      unmount() {
        var t, e;
        (Br(this, nt)._--,
          C(this, nt) === 0 &&
            ((t = C(this, Jt)) == null || t.call(this),
            F(this, Jt, void 0),
            (e = C(this, Qt)) == null || e.call(this),
            F(this, Qt, void 0)));
      }
      isFetching(t) {
        return C(this, X).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return C(this, st).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = C(this, X).get(e.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          r = C(this, X).build(this, e),
          s = r.state.data;
        return s === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              r.isStaleByTime(xi(e.staleTime, r)) &&
              this.prefetchQuery(e),
            Promise.resolve(s));
      }
      getQueriesData(t) {
        return C(this, X)
          .findAll(t)
          .map(({ queryKey: e, state: r }) => {
            const s = r.data;
            return [e, s];
          });
      }
      setQueryData(t, e, r) {
        const s = this.defaultQueryOptions({ queryKey: t }),
          i = C(this, X).get(s.queryHash),
          n = i == null ? void 0 : i.state.data,
          o = Ou(e, n);
        if (o !== void 0)
          return C(this, X)
            .build(this, s)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(t, e, r) {
        return ue.batch(() =>
          C(this, X)
            .findAll(t)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, e, r)]),
        );
      }
      getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = C(this, X).get(e.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(t) {
        const e = C(this, X);
        ue.batch(() => {
          e.findAll(t).forEach((r) => {
            e.remove(r);
          });
        });
      }
      resetQueries(t, e) {
        const r = C(this, X);
        return ue.batch(
          () => (
            r.findAll(t).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries({ type: "active", ...t }, e)
          ),
        );
      }
      cancelQueries(t, e = {}) {
        const r = { revert: !0, ...e },
          s = ue.batch(() =>
            C(this, X)
              .findAll(t)
              .map((i) => i.cancel(r)),
          );
        return Promise.all(s).then(Se).catch(Se);
      }
      invalidateQueries(t, e = {}) {
        return ue.batch(
          () => (
            C(this, X)
              .findAll(t)
              .forEach((r) => {
                r.invalidate();
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
        const r = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          s = ue.batch(() =>
            C(this, X)
              .findAll(t)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let n = i.fetch(void 0, r);
                return (
                  r.throwOnError || (n = n.catch(Se)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : n
                );
              }),
          );
        return Promise.all(s).then(Se);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = C(this, X).build(this, e);
        return r.isStaleByTime(xi(e.staleTime, r))
          ? r.fetch(e)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(Se).catch(Se);
      }
      fetchInfiniteQuery(t) {
        return ((t.behavior = zn(t.pages)), this.fetchQuery(t));
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Se).catch(Se);
      }
      ensureInfiniteQueryData(t) {
        return ((t.behavior = zn(t.pages)), this.ensureQueryData(t));
      }
      resumePausedMutations() {
        return ps.isOnline()
          ? C(this, st).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return C(this, X);
      }
      getMutationCache() {
        return C(this, st);
      }
      getDefaultOptions() {
        return C(this, it);
      }
      setDefaultOptions(t) {
        F(this, it, t);
      }
      setQueryDefaults(t, e) {
        C(this, Kt).set(xr(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...C(this, Kt).values()],
          r = {};
        return (
          e.forEach((s) => {
            Cr(t, s.queryKey) && Object.assign(r, s.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(t, e) {
        C(this, Yt).set(xr(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...C(this, Yt).values()],
          r = {};
        return (
          e.forEach((s) => {
            Cr(t, s.mutationKey) && Object.assign(r, s.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...C(this, it).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = tn(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === rn && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...C(this, it).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        (C(this, X).clear(), C(this, st).clear());
      }
    }),
    (X = new WeakMap()),
    (st = new WeakMap()),
    (it = new WeakMap()),
    (Kt = new WeakMap()),
    (Yt = new WeakMap()),
    (nt = new WeakMap()),
    (Jt = new WeakMap()),
    (Qt = new WeakMap()),
    da),
  ka = y.createContext(void 0),
  hb = (t) => {
    const e = y.useContext(ka);
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  Xu = ({ client: t, children: e }) => (
    y.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    v.jsx(ka.Provider, { value: t, children: e })
  );
function He(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (i) {
    if ((t == null || t(i), r === !1 || !i.defaultPrevented))
      return e == null ? void 0 : e(i);
  };
}
function Hn(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Ia(...t) {
  return (e) => {
    let r = !1;
    const s = t.map((i) => {
      const n = Hn(i, e);
      return (!r && typeof n == "function" && (r = !0), n);
    });
    if (r)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const n = s[i];
          typeof n == "function" ? n() : Hn(t[i], null);
        }
      };
  };
}
function de(...t) {
  return y.useCallback(Ia(...t), t);
}
function pb(t, e) {
  const r = y.createContext(e),
    s = (n) => {
      const { children: o, ...a } = n,
        c = y.useMemo(() => a, Object.values(a));
      return v.jsx(r.Provider, { value: c, children: o });
    };
  s.displayName = t + "Provider";
  function i(n) {
    const o = y.useContext(r);
    if (o) return o;
    if (e !== void 0) return e;
    throw new Error(`\`${n}\` must be used within \`${t}\``);
  }
  return [s, i];
}
function Ps(t, e = []) {
  let r = [];
  function s(n, o) {
    const a = y.createContext(o),
      c = r.length;
    r = [...r, o];
    const l = (d) => {
      var _;
      const { scope: p, children: h, ...f } = d,
        m = ((_ = p == null ? void 0 : p[t]) == null ? void 0 : _[c]) || a,
        g = y.useMemo(() => f, Object.values(f));
      return v.jsx(m.Provider, { value: g, children: h });
    };
    l.displayName = n + "Provider";
    function u(d, p) {
      var m;
      const h = ((m = p == null ? void 0 : p[t]) == null ? void 0 : m[c]) || a,
        f = y.useContext(h);
      if (f) return f;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${n}\``);
    }
    return [l, u];
  }
  const i = () => {
    const n = r.map((o) => y.createContext(o));
    return function (a) {
      const c = (a == null ? void 0 : a[t]) || n;
      return y.useMemo(() => ({ [`__scope${t}`]: { ...a, [t]: c } }), [a, c]);
    };
  };
  return ((i.scopeName = t), [s, Zu(i, ...e)]);
}
function Zu(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const s = t.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (n) {
      const o = s.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(n)[`__scope${l}`];
        return { ...a, ...d };
      }, {});
      return y.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = e.scopeName), r);
}
function fs(t) {
  const e = ed(t),
    r = y.forwardRef((s, i) => {
      const { children: n, ...o } = s,
        a = y.Children.toArray(n),
        c = a.find(rd);
      if (c) {
        const l = c.props.children,
          u = a.map((d) =>
            d === c
              ? y.Children.count(l) > 1
                ? y.Children.only(null)
                : y.isValidElement(l)
                  ? l.props.children
                  : null
              : d,
          );
        return v.jsx(e, {
          ...o,
          ref: i,
          children: y.isValidElement(l) ? y.cloneElement(l, void 0, u) : null,
        });
      }
      return v.jsx(e, { ...o, ref: i, children: n });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
var fb = fs("Slot");
function ed(t) {
  const e = y.forwardRef((r, s) => {
    const { children: i, ...n } = r;
    if (y.isValidElement(i)) {
      const o = id(i),
        a = sd(n, i.props);
      return (
        i.type !== y.Fragment && (a.ref = s ? Ia(s, o) : o),
        y.cloneElement(i, a)
      );
    }
    return y.Children.count(i) > 1 ? y.Children.only(null) : null;
  });
  return ((e.displayName = `${t}.SlotClone`), e);
}
var La = Symbol("radix.slottable");
function td(t) {
  const e = ({ children: r }) => v.jsx(v.Fragment, { children: r });
  return ((e.displayName = `${t}.Slottable`), (e.__radixId = La), e);
}
function rd(t) {
  return (
    y.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === La
  );
}
function sd(t, e) {
  const r = { ...e };
  for (const s in e) {
    const i = t[s],
      n = e[s];
    /^on[A-Z]/.test(s)
      ? i && n
        ? (r[s] = (...a) => {
            const c = n(...a);
            return (i(...a), c);
          })
        : i && (r[s] = i)
      : s === "style"
        ? (r[s] = { ...i, ...n })
        : s === "className" && (r[s] = [i, n].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function id(t) {
  var s, i;
  let e =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    r = e && "isReactWarning" in e && e.isReactWarning;
  return r
    ? t.ref
    : ((e =
        (i = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : i.get),
      (r = e && "isReactWarning" in e && e.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var nd = [
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
  ce = nd.reduce((t, e) => {
    const r = fs(`Primitive.${e}`),
      s = y.forwardRef((i, n) => {
        const { asChild: o, ...a } = i,
          c = o ? r : e;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(c, { ...a, ref: n })
        );
      });
    return ((s.displayName = `Primitive.${e}`), { ...t, [e]: s });
  }, {});
function sn(t, e) {
  t && Cs.flushSync(() => t.dispatchEvent(e));
}
function Me(t) {
  const e = y.useRef(t);
  return (
    y.useEffect(() => {
      e.current = t;
    }),
    y.useMemo(
      () =>
        (...r) => {
          var s;
          return (s = e.current) == null ? void 0 : s.call(e, ...r);
        },
      [],
    )
  );
}
function ja(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Me(t);
  y.useEffect(() => {
    const s = (i) => {
      i.key === "Escape" && r(i);
    };
    return (
      e.addEventListener("keydown", s, { capture: !0 }),
      () => e.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [r, e]);
}
var od = "DismissableLayer",
  Ai = "dismissableLayer.update",
  ad = "dismissableLayer.pointerDownOutside",
  cd = "dismissableLayer.focusOutside",
  Gn,
  Na = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Da = y.forwardRef((t, e) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: n,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = t,
      l = y.useContext(Na),
      [u, d] = y.useState(null),
      p =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = y.useState({}),
      f = de(e, (x) => d(x)),
      m = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = m.indexOf(g),
      b = u ? m.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      E = b >= _,
      S = dd((x) => {
        const L = x.target,
          T = [...l.branches].some((I) => I.contains(L));
        !E ||
          T ||
          (i == null || i(x),
          o == null || o(x),
          x.defaultPrevented || a == null || a());
      }, p),
      A = hd((x) => {
        const L = x.target;
        [...l.branches].some((I) => I.contains(L)) ||
          (n == null || n(x),
          o == null || o(x),
          x.defaultPrevented || a == null || a());
      }, p);
    return (
      ja((x) => {
        b === l.layers.size - 1 &&
          (s == null || s(x),
          !x.defaultPrevented && a && (x.preventDefault(), a()));
      }, p),
      y.useEffect(() => {
        if (u)
          return (
            r &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Gn = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Wn(),
            () => {
              r &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = Gn);
            }
          );
      }, [u, p, r, l]),
      y.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Wn());
        },
        [u, l],
      ),
      y.useEffect(() => {
        const x = () => h({});
        return (
          document.addEventListener(Ai, x),
          () => document.removeEventListener(Ai, x)
        );
      }, []),
      v.jsx(ce.div, {
        ...c,
        ref: f,
        style: {
          pointerEvents: w ? (E ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: He(t.onFocusCapture, A.onFocusCapture),
        onBlurCapture: He(t.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: He(
          t.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
Da.displayName = od;
var ld = "DismissableLayerBranch",
  ud = y.forwardRef((t, e) => {
    const r = y.useContext(Na),
      s = y.useRef(null),
      i = de(e, s);
    return (
      y.useEffect(() => {
        const n = s.current;
        if (n)
          return (
            r.branches.add(n),
            () => {
              r.branches.delete(n);
            }
          );
      }, [r.branches]),
      v.jsx(ce.div, { ...t, ref: i })
    );
  });
ud.displayName = ld;
function dd(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Me(t),
    s = y.useRef(!1),
    i = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const n = (a) => {
          if (a.target && !s.current) {
            let c = function () {
              $a(ad, r, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (e.removeEventListener("click", i.current),
                (i.current = c),
                e.addEventListener("click", i.current, { once: !0 }))
              : c();
          } else e.removeEventListener("click", i.current);
          s.current = !1;
        },
        o = window.setTimeout(() => {
          e.addEventListener("pointerdown", n);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          e.removeEventListener("pointerdown", n),
          e.removeEventListener("click", i.current));
      };
    }, [e, r]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function hd(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Me(t),
    s = y.useRef(!1);
  return (
    y.useEffect(() => {
      const i = (n) => {
        n.target &&
          !s.current &&
          $a(cd, r, { originalEvent: n }, { discrete: !1 });
      };
      return (
        e.addEventListener("focusin", i),
        () => e.removeEventListener("focusin", i)
      );
    }, [e, r]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function Wn() {
  const t = new CustomEvent(Ai);
  document.dispatchEvent(t);
}
function $a(t, e, r, { discrete: s }) {
  const i = r.originalEvent.target,
    n = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  (e && i.addEventListener(t, e, { once: !0 }),
    s ? sn(i, n) : i.dispatchEvent(n));
}
var Oe =
    globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  pd = ha[" useId ".trim().toString()] || (() => {}),
  fd = 0;
function md(t) {
  const [e, r] = y.useState(pd());
  return (
    Oe(() => {
      t || r((s) => s ?? String(fd++));
    }, [t]),
    t || (e ? `radix-${e}` : "")
  );
}
const gd = ["top", "right", "bottom", "left"],
  ot = Math.min,
  fe = Math.max,
  ms = Math.round,
  Wr = Math.floor,
  $e = (t) => ({ x: t, y: t }),
  yd = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vd = { start: "end", end: "start" };
function Ri(t, e, r) {
  return fe(t, ot(e, r));
}
function We(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ke(t) {
  return t.split("-")[0];
}
function rr(t) {
  return t.split("-")[1];
}
function nn(t) {
  return t === "x" ? "y" : "x";
}
function on(t) {
  return t === "y" ? "height" : "width";
}
const _d = new Set(["top", "bottom"]);
function Ne(t) {
  return _d.has(Ke(t)) ? "y" : "x";
}
function an(t) {
  return nn(Ne(t));
}
function bd(t, e, r) {
  r === void 0 && (r = !1);
  const s = rr(t),
    i = an(t),
    n = on(i);
  let o =
    i === "x"
      ? s === (r ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
        ? "bottom"
        : "top";
  return (e.reference[n] > e.floating[n] && (o = gs(o)), [o, gs(o)]);
}
function wd(t) {
  const e = gs(t);
  return [Ti(t), e, Ti(e)];
}
function Ti(t) {
  return t.replace(/start|end/g, (e) => vd[e]);
}
const Kn = ["left", "right"],
  Yn = ["right", "left"],
  Ed = ["top", "bottom"],
  Sd = ["bottom", "top"];
function xd(t, e, r) {
  switch (t) {
    case "top":
    case "bottom":
      return r ? (e ? Yn : Kn) : e ? Kn : Yn;
    case "left":
    case "right":
      return e ? Ed : Sd;
    default:
      return [];
  }
}
function Cd(t, e, r, s) {
  const i = rr(t);
  let n = xd(Ke(t), r === "start", s);
  return (
    i && ((n = n.map((o) => o + "-" + i)), e && (n = n.concat(n.map(Ti)))),
    n
  );
}
function gs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => yd[e]);
}
function Ad(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Ma(t) {
  return typeof t != "number"
    ? Ad(t)
    : { top: t, right: t, bottom: t, left: t };
}
function ys(t) {
  const { x: e, y: r, width: s, height: i } = t;
  return {
    width: s,
    height: i,
    top: r,
    left: e,
    right: e + s,
    bottom: r + i,
    x: e,
    y: r,
  };
}
function Jn(t, e, r) {
  let { reference: s, floating: i } = t;
  const n = Ne(e),
    o = an(e),
    a = on(o),
    c = Ke(e),
    l = n === "y",
    u = s.x + s.width / 2 - i.width / 2,
    d = s.y + s.height / 2 - i.height / 2,
    p = s[a] / 2 - i[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = { x: u, y: s.y - i.height };
      break;
    case "bottom":
      h = { x: u, y: s.y + s.height };
      break;
    case "right":
      h = { x: s.x + s.width, y: d };
      break;
    case "left":
      h = { x: s.x - i.width, y: d };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (rr(e)) {
    case "start":
      h[o] -= p * (r && l ? -1 : 1);
      break;
    case "end":
      h[o] += p * (r && l ? -1 : 1);
      break;
  }
  return h;
}
const Rd = async (t, e, r) => {
  const {
      placement: s = "bottom",
      strategy: i = "absolute",
      middleware: n = [],
      platform: o,
    } = r,
    a = n.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let l = await o.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: u, y: d } = Jn(l, s, c),
    p = s,
    h = {},
    f = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: g, fn: _ } = a[m],
      {
        x: b,
        y: w,
        data: E,
        reset: S,
      } = await _({
        x: u,
        y: d,
        initialPlacement: s,
        placement: p,
        strategy: i,
        middlewareData: h,
        rects: l,
        platform: o,
        elements: { reference: t, floating: e },
      });
    ((u = b ?? u),
      (d = w ?? d),
      (h = { ...h, [g]: { ...h[g], ...E } }),
      S &&
        f <= 50 &&
        (f++,
        typeof S == "object" &&
          (S.placement && (p = S.placement),
          S.rects &&
            (l =
              S.rects === !0
                ? await o.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i,
                  })
                : S.rects),
          ({ x: u, y: d } = Jn(l, p, c))),
        (m = -1)));
  }
  return { x: u, y: d, placement: p, strategy: i, middlewareData: h };
};
async function Ar(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: n, rects: o, elements: a, strategy: c } = t,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: p = !1,
      padding: h = 0,
    } = We(e, t),
    f = Ma(h),
    g = a[p ? (d === "floating" ? "reference" : "floating") : d],
    _ = ys(
      await n.getClippingRect({
        element:
          (r = await (n.isElement == null ? void 0 : n.isElement(g))) == null ||
          r
            ? g
            : g.contextElement ||
              (await (n.getDocumentElement == null
                ? void 0
                : n.getDocumentElement(a.floating))),
        boundary: l,
        rootBoundary: u,
        strategy: c,
      }),
    ),
    b =
      d === "floating"
        ? { x: s, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    w = await (n.getOffsetParent == null
      ? void 0
      : n.getOffsetParent(a.floating)),
    E = (await (n.isElement == null ? void 0 : n.isElement(w)))
      ? (await (n.getScale == null ? void 0 : n.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = ys(
      n.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: b,
            offsetParent: w,
            strategy: c,
          })
        : b,
    );
  return {
    top: (_.top - S.top + f.top) / E.y,
    bottom: (S.bottom - _.bottom + f.bottom) / E.y,
    left: (_.left - S.left + f.left) / E.x,
    right: (S.right - _.right + f.right) / E.x,
  };
}
const Td = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: r,
          y: s,
          placement: i,
          rects: n,
          platform: o,
          elements: a,
          middlewareData: c,
        } = e,
        { element: l, padding: u = 0 } = We(t, e) || {};
      if (l == null) return {};
      const d = Ma(u),
        p = { x: r, y: s },
        h = an(i),
        f = on(h),
        m = await o.getDimensions(l),
        g = h === "y",
        _ = g ? "top" : "left",
        b = g ? "bottom" : "right",
        w = g ? "clientHeight" : "clientWidth",
        E = n.reference[f] + n.reference[h] - p[h] - n.floating[f],
        S = p[h] - n.reference[h],
        A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
      let x = A ? A[w] : 0;
      (!x || !(await (o.isElement == null ? void 0 : o.isElement(A)))) &&
        (x = a.floating[w] || n.floating[f]);
      const L = E / 2 - S / 2,
        T = x / 2 - m[f] / 2 - 1,
        I = ot(d[_], T),
        B = ot(d[b], T),
        O = I,
        P = x - m[f] - B,
        R = x / 2 - m[f] / 2 + L,
        $ = Ri(O, R, P),
        M =
          !c.arrow &&
          rr(i) != null &&
          R !== $ &&
          n.reference[f] / 2 - (R < O ? I : B) - m[f] / 2 < 0,
        V = M ? (R < O ? R - O : R - P) : 0;
      return {
        [h]: p[h] + V,
        data: {
          [h]: $,
          centerOffset: R - $ - V,
          ...(M && { alignmentOffset: V }),
        },
        reset: M,
      };
    },
  }),
  Od = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var r, s;
          const {
              placement: i,
              middlewareData: n,
              rects: o,
              initialPlacement: a,
              platform: c,
              elements: l,
            } = e,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: p,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: f = "none",
              flipAlignment: m = !0,
              ...g
            } = We(t, e);
          if ((r = n.arrow) != null && r.alignmentOffset) return {};
          const _ = Ke(i),
            b = Ne(a),
            w = Ke(a) === a,
            E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            S = p || (w || !m ? [gs(a)] : wd(a)),
            A = f !== "none";
          !p && A && S.push(...Cd(a, m, f, E));
          const x = [a, ...S],
            L = await Ar(e, g),
            T = [];
          let I = ((s = n.flip) == null ? void 0 : s.overflows) || [];
          if ((u && T.push(L[_]), d)) {
            const R = bd(i, o, E);
            T.push(L[R[0]], L[R[1]]);
          }
          if (
            ((I = [...I, { placement: i, overflows: T }]),
            !T.every((R) => R <= 0))
          ) {
            var B, O;
            const R = (((B = n.flip) == null ? void 0 : B.index) || 0) + 1,
              $ = x[R];
            if (
              $ &&
              (!(d === "alignment" ? b !== Ne($) : !1) ||
                I.every((N) => N.overflows[0] > 0 && Ne(N.placement) === b))
            )
              return {
                data: { index: R, overflows: I },
                reset: { placement: $ },
              };
            let M =
              (O = I.filter((V) => V.overflows[0] <= 0).sort(
                (V, N) => V.overflows[1] - N.overflows[1],
              )[0]) == null
                ? void 0
                : O.placement;
            if (!M)
              switch (h) {
                case "bestFit": {
                  var P;
                  const V =
                    (P = I.filter((N) => {
                      if (A) {
                        const H = Ne(N.placement);
                        return H === b || H === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((H) => H > 0)
                          .reduce((H, re) => H + re, 0),
                      ])
                      .sort((N, H) => N[1] - H[1])[0]) == null
                      ? void 0
                      : P[0];
                  V && (M = V);
                  break;
                }
                case "initialPlacement":
                  M = a;
                  break;
              }
            if (i !== M) return { reset: { placement: M } };
          }
          return {};
        },
      }
    );
  };
function Qn(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function Xn(t) {
  return gd.some((e) => t[e] >= 0);
}
const Pd = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(e) {
          const { rects: r } = e,
            { strategy: s = "referenceHidden", ...i } = We(t, e);
          switch (s) {
            case "referenceHidden": {
              const n = await Ar(e, { ...i, elementContext: "reference" }),
                o = Qn(n, r.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Xn(o) },
              };
            }
            case "escaped": {
              const n = await Ar(e, { ...i, altBoundary: !0 }),
                o = Qn(n, r.floating);
              return { data: { escapedOffsets: o, escaped: Xn(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ua = new Set(["left", "top"]);
async function kd(t, e) {
  const { placement: r, platform: s, elements: i } = t,
    n = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)),
    o = Ke(r),
    a = rr(r),
    c = Ne(r) === "y",
    l = Ua.has(o) ? -1 : 1,
    u = n && c ? -1 : 1,
    d = We(e, t);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: f,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof f == "number" && (h = a === "end" ? f * -1 : f),
    c ? { x: h * u, y: p * l } : { x: p * l, y: h * u }
  );
}
const Id = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var r, s;
          const { x: i, y: n, placement: o, middlewareData: a } = e,
            c = await kd(e, t);
          return o === ((r = a.offset) == null ? void 0 : r.placement) &&
            (s = a.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: i + c.x, y: n + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  Ld = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: r, y: s, placement: i } = e,
            {
              mainAxis: n = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (g) => {
                  let { x: _, y: b } = g;
                  return { x: _, y: b };
                },
              },
              ...c
            } = We(t, e),
            l = { x: r, y: s },
            u = await Ar(e, c),
            d = Ne(Ke(i)),
            p = nn(d);
          let h = l[p],
            f = l[d];
          if (n) {
            const g = p === "y" ? "top" : "left",
              _ = p === "y" ? "bottom" : "right",
              b = h + u[g],
              w = h - u[_];
            h = Ri(b, h, w);
          }
          if (o) {
            const g = d === "y" ? "top" : "left",
              _ = d === "y" ? "bottom" : "right",
              b = f + u[g],
              w = f - u[_];
            f = Ri(b, f, w);
          }
          const m = a.fn({ ...e, [p]: h, [d]: f });
          return {
            ...m,
            data: { x: m.x - r, y: m.y - s, enabled: { [p]: n, [d]: o } },
          };
        },
      }
    );
  },
  jd = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(e) {
          const { x: r, y: s, placement: i, rects: n, middlewareData: o } = e,
            { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = We(t, e),
            u = { x: r, y: s },
            d = Ne(i),
            p = nn(d);
          let h = u[p],
            f = u[d];
          const m = We(a, e),
            g =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (c) {
            const w = p === "y" ? "height" : "width",
              E = n.reference[p] - n.floating[w] + g.mainAxis,
              S = n.reference[p] + n.reference[w] - g.mainAxis;
            h < E ? (h = E) : h > S && (h = S);
          }
          if (l) {
            var _, b;
            const w = p === "y" ? "width" : "height",
              E = Ua.has(Ke(i)),
              S =
                n.reference[d] -
                n.floating[w] +
                ((E && ((_ = o.offset) == null ? void 0 : _[d])) || 0) +
                (E ? 0 : g.crossAxis),
              A =
                n.reference[d] +
                n.reference[w] +
                (E ? 0 : ((b = o.offset) == null ? void 0 : b[d]) || 0) -
                (E ? g.crossAxis : 0);
            f < S ? (f = S) : f > A && (f = A);
          }
          return { [p]: h, [d]: f };
        },
      }
    );
  },
  Nd = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          var r, s;
          const { placement: i, rects: n, platform: o, elements: a } = e,
            { apply: c = () => {}, ...l } = We(t, e),
            u = await Ar(e, l),
            d = Ke(i),
            p = rr(i),
            h = Ne(i) === "y",
            { width: f, height: m } = n.floating;
          let g, _;
          d === "top" || d === "bottom"
            ? ((g = d),
              (_ =
                p ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((_ = d), (g = p === "end" ? "top" : "bottom"));
          const b = m - u.top - u.bottom,
            w = f - u.left - u.right,
            E = ot(m - u[g], b),
            S = ot(f - u[_], w),
            A = !e.middlewareData.shift;
          let x = E,
            L = S;
          if (
            ((r = e.middlewareData.shift) != null && r.enabled.x && (L = w),
            (s = e.middlewareData.shift) != null && s.enabled.y && (x = b),
            A && !p)
          ) {
            const I = fe(u.left, 0),
              B = fe(u.right, 0),
              O = fe(u.top, 0),
              P = fe(u.bottom, 0);
            h
              ? (L = f - 2 * (I !== 0 || B !== 0 ? I + B : fe(u.left, u.right)))
              : (x =
                  m - 2 * (O !== 0 || P !== 0 ? O + P : fe(u.top, u.bottom)));
          }
          await c({ ...e, availableWidth: L, availableHeight: x });
          const T = await o.getDimensions(a.floating);
          return f !== T.width || m !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ks() {
  return typeof window < "u";
}
function sr(t) {
  return Fa(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ye(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function Fe(t) {
  var e;
  return (e = (Fa(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Fa(t) {
  return ks() ? t instanceof Node || t instanceof ye(t).Node : !1;
}
function Pe(t) {
  return ks() ? t instanceof Element || t instanceof ye(t).Element : !1;
}
function Ue(t) {
  return ks() ? t instanceof HTMLElement || t instanceof ye(t).HTMLElement : !1;
}
function Zn(t) {
  return !ks() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof ye(t).ShadowRoot;
}
const Dd = new Set(["inline", "contents"]);
function Ur(t) {
  const { overflow: e, overflowX: r, overflowY: s, display: i } = ke(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + r) && !Dd.has(i);
}
const $d = new Set(["table", "td", "th"]);
function Md(t) {
  return $d.has(sr(t));
}
const Ud = [":popover-open", ":modal"];
function Is(t) {
  return Ud.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Fd = ["transform", "translate", "scale", "rotate", "perspective"],
  qd = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Vd = ["paint", "layout", "strict", "content"];
function cn(t) {
  const e = ln(),
    r = Pe(t) ? ke(t) : t;
  return (
    Fd.some((s) => (r[s] ? r[s] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!e && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!e && (r.filter ? r.filter !== "none" : !1)) ||
    qd.some((s) => (r.willChange || "").includes(s)) ||
    Vd.some((s) => (r.contain || "").includes(s))
  );
}
function zd(t) {
  let e = at(t);
  for (; Ue(e) && !Xt(e); ) {
    if (cn(e)) return e;
    if (Is(e)) return null;
    e = at(e);
  }
  return null;
}
function ln() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Bd = new Set(["html", "body", "#document"]);
function Xt(t) {
  return Bd.has(sr(t));
}
function ke(t) {
  return ye(t).getComputedStyle(t);
}
function Ls(t) {
  return Pe(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function at(t) {
  if (sr(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Zn(t) && t.host) || Fe(t);
  return Zn(e) ? e.host : e;
}
function qa(t) {
  const e = at(t);
  return Xt(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : Ue(e) && Ur(e)
      ? e
      : qa(e);
}
function Rr(t, e, r) {
  var s;
  (e === void 0 && (e = []), r === void 0 && (r = !0));
  const i = qa(t),
    n = i === ((s = t.ownerDocument) == null ? void 0 : s.body),
    o = ye(i);
  if (n) {
    const a = Oi(o);
    return e.concat(
      o,
      o.visualViewport || [],
      Ur(i) ? i : [],
      a && r ? Rr(a) : [],
    );
  }
  return e.concat(i, Rr(i, [], r));
}
function Oi(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Va(t) {
  const e = ke(t);
  let r = parseFloat(e.width) || 0,
    s = parseFloat(e.height) || 0;
  const i = Ue(t),
    n = i ? t.offsetWidth : r,
    o = i ? t.offsetHeight : s,
    a = ms(r) !== n || ms(s) !== o;
  return (a && ((r = n), (s = o)), { width: r, height: s, $: a });
}
function un(t) {
  return Pe(t) ? t : t.contextElement;
}
function qt(t) {
  const e = un(t);
  if (!Ue(e)) return $e(1);
  const r = e.getBoundingClientRect(),
    { width: s, height: i, $: n } = Va(e);
  let o = (n ? ms(r.width) : r.width) / s,
    a = (n ? ms(r.height) : r.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const Hd = $e(0);
function za(t) {
  const e = ye(t);
  return !ln() || !e.visualViewport
    ? Hd
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Gd(t, e, r) {
  return (e === void 0 && (e = !1), !r || (e && r !== ye(t)) ? !1 : e);
}
function Ct(t, e, r, s) {
  (e === void 0 && (e = !1), r === void 0 && (r = !1));
  const i = t.getBoundingClientRect(),
    n = un(t);
  let o = $e(1);
  e && (s ? Pe(s) && (o = qt(s)) : (o = qt(t)));
  const a = Gd(n, r, s) ? za(n) : $e(0);
  let c = (i.left + a.x) / o.x,
    l = (i.top + a.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (n) {
    const p = ye(n),
      h = s && Pe(s) ? ye(s) : s;
    let f = p,
      m = Oi(f);
    for (; m && s && h !== f; ) {
      const g = qt(m),
        _ = m.getBoundingClientRect(),
        b = ke(m),
        w = _.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x,
        E = _.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      ((c *= g.x),
        (l *= g.y),
        (u *= g.x),
        (d *= g.y),
        (c += w),
        (l += E),
        (f = ye(m)),
        (m = Oi(f)));
    }
  }
  return ys({ width: u, height: d, x: c, y: l });
}
function dn(t, e) {
  const r = Ls(t).scrollLeft;
  return e ? e.left + r : Ct(Fe(t)).left + r;
}
function Ba(t, e, r) {
  r === void 0 && (r = !1);
  const s = t.getBoundingClientRect(),
    i = s.left + e.scrollLeft - (r ? 0 : dn(t, s)),
    n = s.top + e.scrollTop;
  return { x: i, y: n };
}
function Wd(t) {
  let { elements: e, rect: r, offsetParent: s, strategy: i } = t;
  const n = i === "fixed",
    o = Fe(s),
    a = e ? Is(e.floating) : !1;
  if (s === o || (a && n)) return r;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = $e(1);
  const u = $e(0),
    d = Ue(s);
  if (
    (d || (!d && !n)) &&
    ((sr(s) !== "body" || Ur(o)) && (c = Ls(s)), Ue(s))
  ) {
    const h = Ct(s);
    ((l = qt(s)), (u.x = h.x + s.clientLeft), (u.y = h.y + s.clientTop));
  }
  const p = o && !d && !n ? Ba(o, c, !0) : $e(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + p.y,
  };
}
function Kd(t) {
  return Array.from(t.getClientRects());
}
function Yd(t) {
  const e = Fe(t),
    r = Ls(t),
    s = t.ownerDocument.body,
    i = fe(e.scrollWidth, e.clientWidth, s.scrollWidth, s.clientWidth),
    n = fe(e.scrollHeight, e.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -r.scrollLeft + dn(t);
  const a = -r.scrollTop;
  return (
    ke(s).direction === "rtl" && (o += fe(e.clientWidth, s.clientWidth) - i),
    { width: i, height: n, x: o, y: a }
  );
}
function Jd(t, e) {
  const r = ye(t),
    s = Fe(t),
    i = r.visualViewport;
  let n = s.clientWidth,
    o = s.clientHeight,
    a = 0,
    c = 0;
  if (i) {
    ((n = i.width), (o = i.height));
    const l = ln();
    (!l || (l && e === "fixed")) && ((a = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: n, height: o, x: a, y: c };
}
const Qd = new Set(["absolute", "fixed"]);
function Xd(t, e) {
  const r = Ct(t, !0, e === "fixed"),
    s = r.top + t.clientTop,
    i = r.left + t.clientLeft,
    n = Ue(t) ? qt(t) : $e(1),
    o = t.clientWidth * n.x,
    a = t.clientHeight * n.y,
    c = i * n.x,
    l = s * n.y;
  return { width: o, height: a, x: c, y: l };
}
function eo(t, e, r) {
  let s;
  if (e === "viewport") s = Jd(t, r);
  else if (e === "document") s = Yd(Fe(t));
  else if (Pe(e)) s = Xd(e, r);
  else {
    const i = za(t);
    s = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return ys(s);
}
function Ha(t, e) {
  const r = at(t);
  return r === e || !Pe(r) || Xt(r)
    ? !1
    : ke(r).position === "fixed" || Ha(r, e);
}
function Zd(t, e) {
  const r = e.get(t);
  if (r) return r;
  let s = Rr(t, [], !1).filter((a) => Pe(a) && sr(a) !== "body"),
    i = null;
  const n = ke(t).position === "fixed";
  let o = n ? at(t) : t;
  for (; Pe(o) && !Xt(o); ) {
    const a = ke(o),
      c = cn(o);
    (!c && a.position === "fixed" && (i = null),
      (
        n
          ? !c && !i
          : (!c && a.position === "static" && !!i && Qd.has(i.position)) ||
            (Ur(o) && !c && Ha(t, o))
      )
        ? (s = s.filter((u) => u !== o))
        : (i = a),
      (o = at(o)));
  }
  return (e.set(t, s), s);
}
function eh(t) {
  let { element: e, boundary: r, rootBoundary: s, strategy: i } = t;
  const o = [
      ...(r === "clippingAncestors"
        ? Is(e)
          ? []
          : Zd(e, this._c)
        : [].concat(r)),
      s,
    ],
    a = o[0],
    c = o.reduce(
      (l, u) => {
        const d = eo(e, u, i);
        return (
          (l.top = fe(d.top, l.top)),
          (l.right = ot(d.right, l.right)),
          (l.bottom = ot(d.bottom, l.bottom)),
          (l.left = fe(d.left, l.left)),
          l
        );
      },
      eo(e, a, i),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function th(t) {
  const { width: e, height: r } = Va(t);
  return { width: e, height: r };
}
function rh(t, e, r) {
  const s = Ue(e),
    i = Fe(e),
    n = r === "fixed",
    o = Ct(t, !0, n, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = $e(0);
  function l() {
    c.x = dn(i);
  }
  if (s || (!s && !n))
    if (((sr(e) !== "body" || Ur(i)) && (a = Ls(e)), s)) {
      const h = Ct(e, !0, n, e);
      ((c.x = h.x + e.clientLeft), (c.y = h.y + e.clientTop));
    } else i && l();
  n && !s && i && l();
  const u = i && !s && !n ? Ba(i, a) : $e(0),
    d = o.left + a.scrollLeft - c.x - u.x,
    p = o.top + a.scrollTop - c.y - u.y;
  return { x: d, y: p, width: o.width, height: o.height };
}
function Qs(t) {
  return ke(t).position === "static";
}
function to(t, e) {
  if (!Ue(t) || ke(t).position === "fixed") return null;
  if (e) return e(t);
  let r = t.offsetParent;
  return (Fe(t) === r && (r = r.ownerDocument.body), r);
}
function Ga(t, e) {
  const r = ye(t);
  if (Is(t)) return r;
  if (!Ue(t)) {
    let i = at(t);
    for (; i && !Xt(i); ) {
      if (Pe(i) && !Qs(i)) return i;
      i = at(i);
    }
    return r;
  }
  let s = to(t, e);
  for (; s && Md(s) && Qs(s); ) s = to(s, e);
  return s && Xt(s) && Qs(s) && !cn(s) ? r : s || zd(t) || r;
}
const sh = async function (t) {
  const e = this.getOffsetParent || Ga,
    r = this.getDimensions,
    s = await r(t.floating);
  return {
    reference: rh(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function ih(t) {
  return ke(t).direction === "rtl";
}
const nh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wd,
  getDocumentElement: Fe,
  getClippingRect: eh,
  getOffsetParent: Ga,
  getElementRects: sh,
  getClientRects: Kd,
  getDimensions: th,
  getScale: qt,
  isElement: Pe,
  isRTL: ih,
};
function Wa(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function oh(t, e) {
  let r = null,
    s;
  const i = Fe(t);
  function n() {
    var a;
    (clearTimeout(s), (a = r) == null || a.disconnect(), (r = null));
  }
  function o(a, c) {
    (a === void 0 && (a = !1), c === void 0 && (c = 1), n());
    const l = t.getBoundingClientRect(),
      { left: u, top: d, width: p, height: h } = l;
    if ((a || e(), !p || !h)) return;
    const f = Wr(d),
      m = Wr(i.clientWidth - (u + p)),
      g = Wr(i.clientHeight - (d + h)),
      _ = Wr(u),
      w = {
        rootMargin: -f + "px " + -m + "px " + -g + "px " + -_ + "px",
        threshold: fe(0, ot(1, c)) || 1,
      };
    let E = !0;
    function S(A) {
      const x = A[0].intersectionRatio;
      if (x !== c) {
        if (!E) return o();
        x
          ? o(!1, x)
          : (s = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (x === 1 && !Wa(l, t.getBoundingClientRect()) && o(), (E = !1));
    }
    try {
      r = new IntersectionObserver(S, { ...w, root: i.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, w);
    }
    r.observe(t);
  }
  return (o(!0), n);
}
function ah(t, e, r, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: n = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = s,
    l = un(t),
    u = i || n ? [...(l ? Rr(l) : []), ...Rr(e)] : [];
  u.forEach((_) => {
    (i && _.addEventListener("scroll", r, { passive: !0 }),
      n && _.addEventListener("resize", r));
  });
  const d = l && a ? oh(l, r) : null;
  let p = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((_) => {
      let [b] = _;
      (b &&
        b.target === l &&
        h &&
        (h.unobserve(e),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var w;
          (w = h) == null || w.observe(e);
        }))),
        r());
    })),
    l && !c && h.observe(l),
    h.observe(e));
  let f,
    m = c ? Ct(t) : null;
  c && g();
  function g() {
    const _ = Ct(t);
    (m && !Wa(m, _) && r(), (m = _), (f = requestAnimationFrame(g)));
  }
  return (
    r(),
    () => {
      var _;
      (u.forEach((b) => {
        (i && b.removeEventListener("scroll", r),
          n && b.removeEventListener("resize", r));
      }),
        d == null || d(),
        (_ = h) == null || _.disconnect(),
        (h = null),
        c && cancelAnimationFrame(f));
    }
  );
}
const ch = Id,
  lh = Ld,
  uh = Od,
  dh = Nd,
  hh = Pd,
  ro = Td,
  ph = jd,
  fh = (t, e, r) => {
    const s = new Map(),
      i = { platform: nh, ...r },
      n = { ...i.platform, _c: s };
    return Rd(t, e, { ...i, platform: n });
  };
var mh = typeof document < "u",
  gh = function () {},
  us = mh ? y.useLayoutEffect : gh;
function vs(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == "function" && t.toString() === e.toString()) return !0;
  let r, s, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((r = t.length), r !== e.length)) return !1;
      for (s = r; s-- !== 0; ) if (!vs(t[s], e[s])) return !1;
      return !0;
    }
    if (((i = Object.keys(t)), (r = i.length), r !== Object.keys(e).length))
      return !1;
    for (s = r; s-- !== 0; ) if (!{}.hasOwnProperty.call(e, i[s])) return !1;
    for (s = r; s-- !== 0; ) {
      const n = i[s];
      if (!(n === "_owner" && t.$$typeof) && !vs(t[n], e[n])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Ka(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function so(t, e) {
  const r = Ka(t);
  return Math.round(e * r) / r;
}
function Xs(t) {
  const e = y.useRef(t);
  return (
    us(() => {
      e.current = t;
    }),
    e
  );
}
function yh(t) {
  t === void 0 && (t = {});
  const {
      placement: e = "bottom",
      strategy: r = "absolute",
      middleware: s = [],
      platform: i,
      elements: { reference: n, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: l,
    } = t,
    [u, d] = y.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, h] = y.useState(s);
  vs(p, s) || h(s);
  const [f, m] = y.useState(null),
    [g, _] = y.useState(null),
    b = y.useCallback((N) => {
      N !== A.current && ((A.current = N), m(N));
    }, []),
    w = y.useCallback((N) => {
      N !== x.current && ((x.current = N), _(N));
    }, []),
    E = n || f,
    S = o || g,
    A = y.useRef(null),
    x = y.useRef(null),
    L = y.useRef(u),
    T = c != null,
    I = Xs(c),
    B = Xs(i),
    O = Xs(l),
    P = y.useCallback(() => {
      if (!A.current || !x.current) return;
      const N = { placement: e, strategy: r, middleware: p };
      (B.current && (N.platform = B.current),
        fh(A.current, x.current, N).then((H) => {
          const re = { ...H, isPositioned: O.current !== !1 };
          R.current &&
            !vs(L.current, re) &&
            ((L.current = re),
            Cs.flushSync(() => {
              d(re);
            }));
        }));
    }, [p, e, r, B, O]);
  us(() => {
    l === !1 &&
      L.current.isPositioned &&
      ((L.current.isPositioned = !1), d((N) => ({ ...N, isPositioned: !1 })));
  }, [l]);
  const R = y.useRef(!1);
  (us(
    () => (
      (R.current = !0),
      () => {
        R.current = !1;
      }
    ),
    [],
  ),
    us(() => {
      if ((E && (A.current = E), S && (x.current = S), E && S)) {
        if (I.current) return I.current(E, S, P);
        P();
      }
    }, [E, S, P, I, T]));
  const $ = y.useMemo(
      () => ({ reference: A, floating: x, setReference: b, setFloating: w }),
      [b, w],
    ),
    M = y.useMemo(() => ({ reference: E, floating: S }), [E, S]),
    V = y.useMemo(() => {
      const N = { position: r, left: 0, top: 0 };
      if (!M.floating) return N;
      const H = so(M.floating, u.x),
        re = so(M.floating, u.y);
      return a
        ? {
            ...N,
            transform: "translate(" + H + "px, " + re + "px)",
            ...(Ka(M.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: H, top: re };
    }, [r, a, M.floating, u.x, u.y]);
  return y.useMemo(
    () => ({ ...u, update: P, refs: $, elements: M, floatingStyles: V }),
    [u, P, $, M, V],
  );
}
const vh = (t) => {
    function e(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(r) {
        const { element: s, padding: i } = typeof t == "function" ? t(r) : t;
        return s && e(s)
          ? s.current != null
            ? ro({ element: s.current, padding: i }).fn(r)
            : {}
          : s
            ? ro({ element: s, padding: i }).fn(r)
            : {};
      },
    };
  },
  _h = (t, e) => ({ ...ch(t), options: [t, e] }),
  bh = (t, e) => ({ ...lh(t), options: [t, e] }),
  wh = (t, e) => ({ ...ph(t), options: [t, e] }),
  Eh = (t, e) => ({ ...uh(t), options: [t, e] }),
  Sh = (t, e) => ({ ...dh(t), options: [t, e] }),
  xh = (t, e) => ({ ...hh(t), options: [t, e] }),
  Ch = (t, e) => ({ ...vh(t), options: [t, e] });
var Ah = "Arrow",
  Ya = y.forwardRef((t, e) => {
    const { children: r, width: s = 10, height: i = 5, ...n } = t;
    return v.jsx(ce.svg, {
      ...n,
      ref: e,
      width: s,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ya.displayName = Ah;
var Rh = Ya;
function Th(t) {
  const [e, r] = y.useState(void 0);
  return (
    Oe(() => {
      if (t) {
        r({ width: t.offsetWidth, height: t.offsetHeight });
        const s = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const n = i[0];
          let o, a;
          if ("borderBoxSize" in n) {
            const c = n.borderBoxSize,
              l = Array.isArray(c) ? c[0] : c;
            ((o = l.inlineSize), (a = l.blockSize));
          } else ((o = t.offsetWidth), (a = t.offsetHeight));
          r({ width: o, height: a });
        });
        return (s.observe(t, { box: "border-box" }), () => s.unobserve(t));
      } else r(void 0);
    }, [t]),
    e
  );
}
var hn = "Popper",
  [Ja, Qa] = Ps(hn),
  [Oh, Xa] = Ja(hn),
  Za = (t) => {
    const { __scopePopper: e, children: r } = t,
      [s, i] = y.useState(null);
    return v.jsx(Oh, { scope: e, anchor: s, onAnchorChange: i, children: r });
  };
Za.displayName = hn;
var ec = "PopperAnchor",
  tc = y.forwardRef((t, e) => {
    const { __scopePopper: r, virtualRef: s, ...i } = t,
      n = Xa(ec, r),
      o = y.useRef(null),
      a = de(e, o);
    return (
      y.useEffect(() => {
        n.onAnchorChange((s == null ? void 0 : s.current) || o.current);
      }),
      s ? null : v.jsx(ce.div, { ...i, ref: a })
    );
  });
tc.displayName = ec;
var pn = "PopperContent",
  [Ph, kh] = Ja(pn),
  rc = y.forwardRef((t, e) => {
    var En, Sn, xn, Cn, An, Rn;
    const {
        __scopePopper: r,
        side: s = "bottom",
        sideOffset: i = 0,
        align: n = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: p = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: f,
        ...m
      } = t,
      g = Xa(pn, r),
      [_, b] = y.useState(null),
      w = de(e, (ar) => b(ar)),
      [E, S] = y.useState(null),
      A = Th(E),
      x = (A == null ? void 0 : A.width) ?? 0,
      L = (A == null ? void 0 : A.height) ?? 0,
      T = s + (n !== "center" ? "-" + n : ""),
      I =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      B = Array.isArray(l) ? l : [l],
      O = B.length > 0,
      P = { padding: I, boundary: B.filter(Lh), altBoundary: O },
      {
        refs: R,
        floatingStyles: $,
        placement: M,
        isPositioned: V,
        middlewareData: N,
      } = yh({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...ar) =>
          ah(...ar, { animationFrame: h === "always" }),
        elements: { reference: g.anchor },
        middleware: [
          _h({ mainAxis: i + L, alignmentAxis: o }),
          c &&
            bh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? wh() : void 0,
              ...P,
            }),
          c && Eh({ ...P }),
          Sh({
            ...P,
            apply: ({
              elements: ar,
              rects: Tn,
              availableWidth: Il,
              availableHeight: Ll,
            }) => {
              const { width: jl, height: Nl } = Tn.reference,
                zr = ar.floating.style;
              (zr.setProperty("--radix-popper-available-width", `${Il}px`),
                zr.setProperty("--radix-popper-available-height", `${Ll}px`),
                zr.setProperty("--radix-popper-anchor-width", `${jl}px`),
                zr.setProperty("--radix-popper-anchor-height", `${Nl}px`));
            },
          }),
          E && Ch({ element: E, padding: a }),
          jh({ arrowWidth: x, arrowHeight: L }),
          p && xh({ strategy: "referenceHidden", ...P }),
        ],
      }),
      [H, re] = nc(M),
      W = Me(f);
    Oe(() => {
      V && (W == null || W());
    }, [V, W]);
    const he = (En = N.arrow) == null ? void 0 : En.x,
      ve = (Sn = N.arrow) == null ? void 0 : Sn.y,
      lt = ((xn = N.arrow) == null ? void 0 : xn.centerOffset) !== 0,
      [Vr, kl] = y.useState();
    return (
      Oe(() => {
        _ && kl(window.getComputedStyle(_).zIndex);
      }, [_]),
      v.jsx("div", {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: V ? $.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Vr,
          "--radix-popper-transform-origin": [
            (Cn = N.transformOrigin) == null ? void 0 : Cn.x,
            (An = N.transformOrigin) == null ? void 0 : An.y,
          ].join(" "),
          ...(((Rn = N.hide) == null ? void 0 : Rn.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: v.jsx(Ph, {
          scope: r,
          placedSide: H,
          onArrowChange: S,
          arrowX: he,
          arrowY: ve,
          shouldHideArrow: lt,
          children: v.jsx(ce.div, {
            "data-side": H,
            "data-align": re,
            ...m,
            ref: w,
            style: { ...m.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
rc.displayName = pn;
var sc = "PopperArrow",
  Ih = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ic = y.forwardRef(function (e, r) {
    const { __scopePopper: s, ...i } = e,
      n = kh(sc, s),
      o = Ih[n.placedSide];
    return v.jsx("span", {
      ref: n.onArrowChange,
      style: {
        position: "absolute",
        left: n.arrowX,
        top: n.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[n.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[n.placedSide],
        visibility: n.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(Rh, {
        ...i,
        ref: r,
        style: { ...i.style, display: "block" },
      }),
    });
  });
ic.displayName = sc;
function Lh(t) {
  return t !== null;
}
var jh = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var g, _, b;
    const { placement: r, rects: s, middlewareData: i } = e,
      o = ((g = i.arrow) == null ? void 0 : g.centerOffset) !== 0,
      a = o ? 0 : t.arrowWidth,
      c = o ? 0 : t.arrowHeight,
      [l, u] = nc(r),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      p = (((_ = i.arrow) == null ? void 0 : _.x) ?? 0) + a / 2,
      h = (((b = i.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let f = "",
      m = "";
    return (
      l === "bottom"
        ? ((f = o ? d : `${p}px`), (m = `${-c}px`))
        : l === "top"
          ? ((f = o ? d : `${p}px`), (m = `${s.floating.height + c}px`))
          : l === "right"
            ? ((f = `${-c}px`), (m = o ? d : `${h}px`))
            : l === "left" &&
              ((f = `${s.floating.width + c}px`), (m = o ? d : `${h}px`)),
      { data: { x: f, y: m } }
    );
  },
});
function nc(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
var Nh = Za,
  Dh = tc,
  $h = rc,
  Mh = ic,
  Uh = "Portal",
  oc = y.forwardRef((t, e) => {
    var a;
    const { container: r, ...s } = t,
      [i, n] = y.useState(!1);
    Oe(() => n(!0), []);
    const o =
      r ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Ml.createPortal(v.jsx(ce.div, { ...s, ref: e }), o) : null;
  });
oc.displayName = Uh;
function Fh(t, e) {
  return y.useReducer((r, s) => e[r][s] ?? r, t);
}
var ac = (t) => {
  const { present: e, children: r } = t,
    s = qh(e),
    i =
      typeof r == "function" ? r({ present: s.isPresent }) : y.Children.only(r),
    n = de(s.ref, Vh(i));
  return typeof r == "function" || s.isPresent
    ? y.cloneElement(i, { ref: n })
    : null;
};
ac.displayName = "Presence";
function qh(t) {
  const [e, r] = y.useState(),
    s = y.useRef(null),
    i = y.useRef(t),
    n = y.useRef("none"),
    o = t ? "mounted" : "unmounted",
    [a, c] = Fh(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const l = Kr(s.current);
      n.current = a === "mounted" ? l : "none";
    }, [a]),
    Oe(() => {
      const l = s.current,
        u = i.current;
      if (u !== t) {
        const p = n.current,
          h = Kr(l);
        (t
          ? c("MOUNT")
          : h === "none" || (l == null ? void 0 : l.display) === "none"
            ? c("UNMOUNT")
            : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = t));
      }
    }, [t, c]),
    Oe(() => {
      if (e) {
        let l;
        const u = e.ownerDocument.defaultView ?? window,
          d = (h) => {
            const m = Kr(s.current).includes(h.animationName);
            if (h.target === e && m && (c("ANIMATION_END"), !i.current)) {
              const g = e.style.animationFillMode;
              ((e.style.animationFillMode = "forwards"),
                (l = u.setTimeout(() => {
                  e.style.animationFillMode === "forwards" &&
                    (e.style.animationFillMode = g);
                })));
            }
          },
          p = (h) => {
            h.target === e && (n.current = Kr(s.current));
          };
        return (
          e.addEventListener("animationstart", p),
          e.addEventListener("animationcancel", d),
          e.addEventListener("animationend", d),
          () => {
            (u.clearTimeout(l),
              e.removeEventListener("animationstart", p),
              e.removeEventListener("animationcancel", d),
              e.removeEventListener("animationend", d));
          }
        );
      } else c("ANIMATION_END");
    }, [e, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: y.useCallback((l) => {
        ((s.current = l ? getComputedStyle(l) : null), r(l));
      }, []),
    }
  );
}
function Kr(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function Vh(t) {
  var s, i;
  let e =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    r = e && "isReactWarning" in e && e.isReactWarning;
  return r
    ? t.ref
    : ((e =
        (i = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : i.get),
      (r = e && "isReactWarning" in e && e.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var zh = ha[" useInsertionEffect ".trim().toString()] || Oe;
function cc({ prop: t, defaultProp: e, onChange: r = () => {}, caller: s }) {
  const [i, n, o] = Bh({ defaultProp: e, onChange: r }),
    a = t !== void 0,
    c = a ? t : i;
  {
    const u = y.useRef(t !== void 0);
    y.useEffect(() => {
      const d = u.current;
      (d !== a &&
        console.warn(
          `${s} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (u.current = a));
    }, [a, s]);
  }
  const l = y.useCallback(
    (u) => {
      var d;
      if (a) {
        const p = Hh(u) ? u(t) : u;
        p !== t && ((d = o.current) == null || d.call(o, p));
      } else n(u);
    },
    [a, t, n, o],
  );
  return [c, l];
}
function Bh({ defaultProp: t, onChange: e }) {
  const [r, s] = y.useState(t),
    i = y.useRef(r),
    n = y.useRef(e);
  return (
    zh(() => {
      n.current = e;
    }, [e]),
    y.useEffect(() => {
      var o;
      i.current !== r &&
        ((o = n.current) == null || o.call(n, r), (i.current = r));
    }, [r, i]),
    [r, s, n]
  );
}
function Hh(t) {
  return typeof t == "function";
}
var Gh = Object.freeze({
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
  Wh = "VisuallyHidden",
  js = y.forwardRef((t, e) =>
    v.jsx(ce.span, { ...t, ref: e, style: { ...Gh, ...t.style } }),
  );
js.displayName = Wh;
var Kh = js,
  [Ns, mb] = Ps("Tooltip", [Qa]),
  Ds = Qa(),
  lc = "TooltipProvider",
  Yh = 700,
  Pi = "tooltip.open",
  [Jh, fn] = Ns(lc),
  uc = (t) => {
    const {
        __scopeTooltip: e,
        delayDuration: r = Yh,
        skipDelayDuration: s = 300,
        disableHoverableContent: i = !1,
        children: n,
      } = t,
      o = y.useRef(!0),
      a = y.useRef(!1),
      c = y.useRef(0);
    return (
      y.useEffect(() => {
        const l = c.current;
        return () => window.clearTimeout(l);
      }, []),
      v.jsx(Jh, {
        scope: e,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: y.useCallback(() => {
          (window.clearTimeout(c.current), (o.current = !1));
        }, []),
        onClose: y.useCallback(() => {
          (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), s)));
        }, [s]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback((l) => {
          a.current = l;
        }, []),
        disableHoverableContent: i,
        children: n,
      })
    );
  };
uc.displayName = lc;
var Tr = "Tooltip",
  [Qh, $s] = Ns(Tr),
  dc = (t) => {
    const {
        __scopeTooltip: e,
        children: r,
        open: s,
        defaultOpen: i,
        onOpenChange: n,
        disableHoverableContent: o,
        delayDuration: a,
      } = t,
      c = fn(Tr, t.__scopeTooltip),
      l = Ds(e),
      [u, d] = y.useState(null),
      p = md(),
      h = y.useRef(0),
      f = o ?? c.disableHoverableContent,
      m = a ?? c.delayDuration,
      g = y.useRef(!1),
      [_, b] = cc({
        prop: s,
        defaultProp: i ?? !1,
        onChange: (x) => {
          (x
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Pi)))
            : c.onClose(),
            n == null || n(x));
        },
        caller: Tr,
      }),
      w = y.useMemo(
        () => (_ ? (g.current ? "delayed-open" : "instant-open") : "closed"),
        [_],
      ),
      E = y.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = 0),
          (g.current = !1),
          b(!0));
      }, [b]),
      S = y.useCallback(() => {
        (window.clearTimeout(h.current), (h.current = 0), b(!1));
      }, [b]),
      A = y.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            ((g.current = !0), b(!0), (h.current = 0));
          }, m)));
      }, [m, b]);
    return (
      y.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      v.jsx(Nh, {
        ...l,
        children: v.jsx(Qh, {
          scope: e,
          contentId: p,
          open: _,
          stateAttribute: w,
          trigger: u,
          onTriggerChange: d,
          onTriggerEnter: y.useCallback(() => {
            c.isOpenDelayedRef.current ? A() : E();
          }, [c.isOpenDelayedRef, A, E]),
          onTriggerLeave: y.useCallback(() => {
            f ? S() : (window.clearTimeout(h.current), (h.current = 0));
          }, [S, f]),
          onOpen: E,
          onClose: S,
          disableHoverableContent: f,
          children: r,
        }),
      })
    );
  };
dc.displayName = Tr;
var ki = "TooltipTrigger",
  hc = y.forwardRef((t, e) => {
    const { __scopeTooltip: r, ...s } = t,
      i = $s(ki, r),
      n = fn(ki, r),
      o = Ds(r),
      a = y.useRef(null),
      c = de(e, a, i.onTriggerChange),
      l = y.useRef(!1),
      u = y.useRef(!1),
      d = y.useCallback(() => (l.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      v.jsx(Dh, {
        asChild: !0,
        ...o,
        children: v.jsx(ce.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...s,
          ref: c,
          onPointerMove: He(t.onPointerMove, (p) => {
            p.pointerType !== "touch" &&
              !u.current &&
              !n.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (u.current = !0));
          }),
          onPointerLeave: He(t.onPointerLeave, () => {
            (i.onTriggerLeave(), (u.current = !1));
          }),
          onPointerDown: He(t.onPointerDown, () => {
            (i.open && i.onClose(),
              (l.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: He(t.onFocus, () => {
            l.current || i.onOpen();
          }),
          onBlur: He(t.onBlur, i.onClose),
          onClick: He(t.onClick, i.onClose),
        }),
      })
    );
  });
hc.displayName = ki;
var Xh = "TooltipPortal",
  [gb, Zh] = Ns(Xh, { forceMount: void 0 }),
  Zt = "TooltipContent",
  pc = y.forwardRef((t, e) => {
    const r = Zh(Zt, t.__scopeTooltip),
      { forceMount: s = r.forceMount, side: i = "top", ...n } = t,
      o = $s(Zt, t.__scopeTooltip);
    return v.jsx(ac, {
      present: s || o.open,
      children: o.disableHoverableContent
        ? v.jsx(fc, { side: i, ...n, ref: e })
        : v.jsx(ep, { side: i, ...n, ref: e }),
    });
  }),
  ep = y.forwardRef((t, e) => {
    const r = $s(Zt, t.__scopeTooltip),
      s = fn(Zt, t.__scopeTooltip),
      i = y.useRef(null),
      n = de(e, i),
      [o, a] = y.useState(null),
      { trigger: c, onClose: l } = r,
      u = i.current,
      { onPointerInTransitChange: d } = s,
      p = y.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      h = y.useCallback(
        (f, m) => {
          const g = f.currentTarget,
            _ = { x: f.clientX, y: f.clientY },
            b = np(_, g.getBoundingClientRect()),
            w = op(_, b),
            E = ap(m.getBoundingClientRect()),
            S = lp([...w, ...E]);
          (a(S), d(!0));
        },
        [d],
      );
    return (
      y.useEffect(() => () => p(), [p]),
      y.useEffect(() => {
        if (c && u) {
          const f = (g) => h(g, u),
            m = (g) => h(g, c);
          return (
            c.addEventListener("pointerleave", f),
            u.addEventListener("pointerleave", m),
            () => {
              (c.removeEventListener("pointerleave", f),
                u.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [c, u, h, p]),
      y.useEffect(() => {
        if (o) {
          const f = (m) => {
            const g = m.target,
              _ = { x: m.clientX, y: m.clientY },
              b =
                (c == null ? void 0 : c.contains(g)) ||
                (u == null ? void 0 : u.contains(g)),
              w = !cp(_, o);
            b ? p() : w && (p(), l());
          };
          return (
            document.addEventListener("pointermove", f),
            () => document.removeEventListener("pointermove", f)
          );
        }
      }, [c, u, o, l, p]),
      v.jsx(fc, { ...t, ref: n })
    );
  }),
  [tp, rp] = Ns(Tr, { isInside: !1 }),
  sp = td("TooltipContent"),
  fc = y.forwardRef((t, e) => {
    const {
        __scopeTooltip: r,
        children: s,
        "aria-label": i,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        ...a
      } = t,
      c = $s(Zt, r),
      l = Ds(r),
      { onClose: u } = c;
    return (
      y.useEffect(
        () => (
          document.addEventListener(Pi, u),
          () => document.removeEventListener(Pi, u)
        ),
        [u],
      ),
      y.useEffect(() => {
        if (c.trigger) {
          const d = (p) => {
            const h = p.target;
            h != null && h.contains(c.trigger) && u();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [c.trigger, u]),
      v.jsx(Da, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: v.jsxs($h, {
          "data-state": c.stateAttribute,
          ...l,
          ...a,
          ref: e,
          style: {
            ...a.style,
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
            v.jsx(sp, { children: s }),
            v.jsx(tp, {
              scope: r,
              isInside: !0,
              children: v.jsx(Kh, {
                id: c.contentId,
                role: "tooltip",
                children: i || s,
              }),
            }),
          ],
        }),
      })
    );
  });
pc.displayName = Zt;
var mc = "TooltipArrow",
  ip = y.forwardRef((t, e) => {
    const { __scopeTooltip: r, ...s } = t,
      i = Ds(r);
    return rp(mc, r).isInside ? null : v.jsx(Mh, { ...i, ...s, ref: e });
  });
ip.displayName = mc;
function np(t, e) {
  const r = Math.abs(e.top - t.y),
    s = Math.abs(e.bottom - t.y),
    i = Math.abs(e.right - t.x),
    n = Math.abs(e.left - t.x);
  switch (Math.min(r, s, i, n)) {
    case n:
      return "left";
    case i:
      return "right";
    case r:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function op(t, e, r = 5) {
  const s = [];
  switch (e) {
    case "top":
      s.push({ x: t.x - r, y: t.y + r }, { x: t.x + r, y: t.y + r });
      break;
    case "bottom":
      s.push({ x: t.x - r, y: t.y - r }, { x: t.x + r, y: t.y - r });
      break;
    case "left":
      s.push({ x: t.x + r, y: t.y - r }, { x: t.x + r, y: t.y + r });
      break;
    case "right":
      s.push({ x: t.x - r, y: t.y - r }, { x: t.x - r, y: t.y + r });
      break;
  }
  return s;
}
function ap(t) {
  const { top: e, right: r, bottom: s, left: i } = t;
  return [
    { x: i, y: e },
    { x: r, y: e },
    { x: r, y: s },
    { x: i, y: s },
  ];
}
function cp(t, e) {
  const { x: r, y: s } = t;
  let i = !1;
  for (let n = 0, o = e.length - 1; n < e.length; o = n++) {
    const a = e[n],
      c = e[o],
      l = a.x,
      u = a.y,
      d = c.x,
      p = c.y;
    u > s != p > s && r < ((d - l) * (s - u)) / (p - u) + l && (i = !i);
  }
  return i;
}
function lp(t) {
  const e = t.slice();
  return (
    e.sort((r, s) =>
      r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0,
    ),
    up(e)
  );
}
function up(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    for (; e.length >= 2; ) {
      const n = e[e.length - 1],
        o = e[e.length - 2];
      if ((n.x - o.x) * (i.y - o.y) >= (n.y - o.y) * (i.x - o.x)) e.pop();
      else break;
    }
    e.push(i);
  }
  e.pop();
  const r = [];
  for (let s = t.length - 1; s >= 0; s--) {
    const i = t[s];
    for (; r.length >= 2; ) {
      const n = r[r.length - 1],
        o = r[r.length - 2];
      if ((n.x - o.x) * (i.y - o.y) >= (n.y - o.y) * (i.x - o.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return (
    r.pop(),
    e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y
      ? e
      : e.concat(r)
  );
}
var dp = uc,
  hp = dc,
  pp = hc,
  gc = pc;
function yc(t) {
  var e,
    r,
    s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var i = t.length;
      for (e = 0; e < i; e++)
        t[e] && (r = yc(t[e])) && (s && (s += " "), (s += r));
    } else for (r in t) t[r] && (s && (s += " "), (s += r));
  return s;
}
function vc() {
  for (var t, e, r = 0, s = "", i = arguments.length; r < i; r++)
    (t = arguments[r]) && (e = yc(t)) && (s && (s += " "), (s += e));
  return s;
}
const mn = "-",
  fp = (t) => {
    const e = gp(t),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: s } = t;
    return {
      getClassGroupId: (o) => {
        const a = o.split(mn);
        return (a[0] === "" && a.length !== 1 && a.shift(), _c(a, e) || mp(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const c = r[o] || [];
        return a && s[o] ? [...c, ...s[o]] : c;
      },
    };
  },
  _c = (t, e) => {
    var o;
    if (t.length === 0) return e.classGroupId;
    const r = t[0],
      s = e.nextPart.get(r),
      i = s ? _c(t.slice(1), s) : void 0;
    if (i) return i;
    if (e.validators.length === 0) return;
    const n = t.join(mn);
    return (o = e.validators.find(({ validator: a }) => a(n))) == null
      ? void 0
      : o.classGroupId;
  },
  io = /^\[(.+)\]$/,
  mp = (t) => {
    if (io.test(t)) {
      const e = io.exec(t)[1],
        r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  gp = (t) => {
    const { theme: e, prefix: r } = t,
      s = { nextPart: new Map(), validators: [] };
    return (
      vp(Object.entries(t.classGroups), r).forEach(([n, o]) => {
        Ii(o, s, n, e);
      }),
      s
    );
  },
  Ii = (t, e, r, s) => {
    t.forEach((i) => {
      if (typeof i == "string") {
        const n = i === "" ? e : no(e, i);
        n.classGroupId = r;
        return;
      }
      if (typeof i == "function") {
        if (yp(i)) {
          Ii(i(s), e, r, s);
          return;
        }
        e.validators.push({ validator: i, classGroupId: r });
        return;
      }
      Object.entries(i).forEach(([n, o]) => {
        Ii(o, no(e, n), r, s);
      });
    });
  },
  no = (t, e) => {
    let r = t;
    return (
      e.split(mn).forEach((s) => {
        (r.nextPart.has(s) ||
          r.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(s)));
      }),
      r
    );
  },
  yp = (t) => t.isThemeGetter,
  vp = (t, e) =>
    e
      ? t.map(([r, s]) => {
          const i = s.map((n) =>
            typeof n == "string"
              ? e + n
              : typeof n == "object"
                ? Object.fromEntries(
                    Object.entries(n).map(([o, a]) => [e + o, a]),
                  )
                : n,
          );
          return [r, i];
        })
      : t,
  _p = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      r = new Map(),
      s = new Map();
    const i = (n, o) => {
      (r.set(n, o), e++, e > t && ((e = 0), (s = r), (r = new Map())));
    };
    return {
      get(n) {
        let o = r.get(n);
        if (o !== void 0) return o;
        if ((o = s.get(n)) !== void 0) return (i(n, o), o);
      },
      set(n, o) {
        r.has(n) ? r.set(n, o) : i(n, o);
      },
    };
  },
  bc = "!",
  bp = (t) => {
    const { separator: e, experimentalParseClassName: r } = t,
      s = e.length === 1,
      i = e[0],
      n = e.length,
      o = (a) => {
        const c = [];
        let l = 0,
          u = 0,
          d;
        for (let g = 0; g < a.length; g++) {
          let _ = a[g];
          if (l === 0) {
            if (_ === i && (s || a.slice(g, g + n) === e)) {
              (c.push(a.slice(u, g)), (u = g + n));
              continue;
            }
            if (_ === "/") {
              d = g;
              continue;
            }
          }
          _ === "[" ? l++ : _ === "]" && l--;
        }
        const p = c.length === 0 ? a : a.substring(u),
          h = p.startsWith(bc),
          f = h ? p.substring(1) : p,
          m = d && d > u ? d - u : void 0;
        return {
          modifiers: c,
          hasImportantModifier: h,
          baseClassName: f,
          maybePostfixModifierPosition: m,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: o }) : o;
  },
  wp = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let r = [];
    return (
      t.forEach((s) => {
        s[0] === "[" ? (e.push(...r.sort(), s), (r = [])) : r.push(s);
      }),
      e.push(...r.sort()),
      e
    );
  },
  Ep = (t) => ({ cache: _p(t.cacheSize), parseClassName: bp(t), ...fp(t) }),
  Sp = /\s+/,
  xp = (t, e) => {
    const {
        parseClassName: r,
        getClassGroupId: s,
        getConflictingClassGroupIds: i,
      } = e,
      n = [],
      o = t.trim().split(Sp);
    let a = "";
    for (let c = o.length - 1; c >= 0; c -= 1) {
      const l = o[c],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: p,
          maybePostfixModifierPosition: h,
        } = r(l);
      let f = !!h,
        m = s(f ? p.substring(0, h) : p);
      if (!m) {
        if (!f) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((m = s(p)), !m)) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        f = !1;
      }
      const g = wp(u).join(":"),
        _ = d ? g + bc : g,
        b = _ + m;
      if (n.includes(b)) continue;
      n.push(b);
      const w = i(m, f);
      for (let E = 0; E < w.length; ++E) {
        const S = w[E];
        n.push(_ + S);
      }
      a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Cp() {
  let t = 0,
    e,
    r,
    s = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = wc(e)) && (s && (s += " "), (s += r));
  return s;
}
const wc = (t) => {
  if (typeof t == "string") return t;
  let e,
    r = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (e = wc(t[s])) && (r && (r += " "), (r += e));
  return r;
};
function Ap(t, ...e) {
  let r,
    s,
    i,
    n = o;
  function o(c) {
    const l = e.reduce((u, d) => d(u), t());
    return ((r = Ep(l)), (s = r.cache.get), (i = r.cache.set), (n = a), a(c));
  }
  function a(c) {
    const l = s(c);
    if (l) return l;
    const u = xp(c, r);
    return (i(c, u), u);
  }
  return function () {
    return n(Cp.apply(null, arguments));
  };
}
const Q = (t) => {
    const e = (r) => r[t] || [];
    return ((e.isThemeGetter = !0), e);
  },
  Ec = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Rp = /^\d+\/\d+$/,
  Tp = new Set(["px", "full", "screen"]),
  Op = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Pp =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  kp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Ip = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Lp =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  qe = (t) => Vt(t) || Tp.has(t) || Rp.test(t),
  Je = (t) => ir(t, "length", qp),
  Vt = (t) => !!t && !Number.isNaN(Number(t)),
  Zs = (t) => ir(t, "number", Vt),
  ur = (t) => !!t && Number.isInteger(Number(t)),
  jp = (t) => t.endsWith("%") && Vt(t.slice(0, -1)),
  z = (t) => Ec.test(t),
  Qe = (t) => Op.test(t),
  Np = new Set(["length", "size", "percentage"]),
  Dp = (t) => ir(t, Np, Sc),
  $p = (t) => ir(t, "position", Sc),
  Mp = new Set(["image", "url"]),
  Up = (t) => ir(t, Mp, zp),
  Fp = (t) => ir(t, "", Vp),
  dr = () => !0,
  ir = (t, e, r) => {
    const s = Ec.exec(t);
    return s
      ? s[1]
        ? typeof e == "string"
          ? s[1] === e
          : e.has(s[1])
        : r(s[2])
      : !1;
  },
  qp = (t) => Pp.test(t) && !kp.test(t),
  Sc = () => !1,
  Vp = (t) => Ip.test(t),
  zp = (t) => Lp.test(t),
  Bp = () => {
    const t = Q("colors"),
      e = Q("spacing"),
      r = Q("blur"),
      s = Q("brightness"),
      i = Q("borderColor"),
      n = Q("borderRadius"),
      o = Q("borderSpacing"),
      a = Q("borderWidth"),
      c = Q("contrast"),
      l = Q("grayscale"),
      u = Q("hueRotate"),
      d = Q("invert"),
      p = Q("gap"),
      h = Q("gradientColorStops"),
      f = Q("gradientColorStopPositions"),
      m = Q("inset"),
      g = Q("margin"),
      _ = Q("opacity"),
      b = Q("padding"),
      w = Q("saturate"),
      E = Q("scale"),
      S = Q("sepia"),
      A = Q("skew"),
      x = Q("space"),
      L = Q("translate"),
      T = () => ["auto", "contain", "none"],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", z, e],
      O = () => [z, e],
      P = () => ["", qe, Je],
      R = () => ["auto", Vt, z],
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
      V = () => [
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
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      H = () => ["", "0", z],
      re = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [Vt, z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [dr],
        spacing: [qe, Je],
        blur: ["none", "", Qe, z],
        brightness: W(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Qe, z],
        borderSpacing: O(),
        borderWidth: P(),
        contrast: W(),
        grayscale: H(),
        hueRotate: W(),
        invert: H(),
        gap: O(),
        gradientColorStops: [t],
        gradientColorStopPositions: [jp, Je],
        inset: B(),
        margin: B(),
        opacity: W(),
        padding: O(),
        saturate: W(),
        scale: W(),
        sepia: H(),
        skew: W(),
        space: O(),
        translate: O(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [Qe] }],
        "break-after": [{ "break-after": re() }],
        "break-before": [{ "break-before": re() }],
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
        "object-position": [{ object: [...$(), z] }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: T() }],
        "overscroll-x": [{ "overscroll-x": T() }],
        "overscroll-y": [{ "overscroll-y": T() }],
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
        z: [{ z: ["auto", ur, z] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: H() }],
        shrink: [{ shrink: H() }],
        order: [{ order: ["first", "last", "none", ur, z] }],
        "grid-cols": [{ "grid-cols": [dr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ur, z] }, z] }],
        "col-start": [{ "col-start": R() }],
        "col-end": [{ "col-end": R() }],
        "grid-rows": [{ "grid-rows": [dr] }],
        "row-start-end": [{ row: ["auto", { span: [ur, z] }, z] }],
        "row-start": [{ "row-start": R() }],
        "row-end": [{ "row-end": R() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [p] }],
        "gap-x": [{ "gap-x": [p] }],
        "gap-y": [{ "gap-y": [p] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        "space-x": [{ "space-x": [x] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [x] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, e] }],
        "min-w": [{ "min-w": [z, e, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              z,
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
        h: [{ h: [z, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [z, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [z, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [z, e, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Qe, Je] }],
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
              Zs,
            ],
          },
        ],
        "font-family": [{ font: [dr] }],
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
              z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Vt, Zs] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              qe,
              z,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [_] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [_] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...M(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", qe, Je] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", qe, z] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: O() }],
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
              z,
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
        content: [{ content: ["none", z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [_] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...$(), $p] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Dp] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Up,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [f] }],
        "gradient-via-pos": [{ via: [f] }],
        "gradient-to-pos": [{ to: [f] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [n] }],
        "rounded-s": [{ "rounded-s": [n] }],
        "rounded-e": [{ "rounded-e": [n] }],
        "rounded-t": [{ "rounded-t": [n] }],
        "rounded-r": [{ "rounded-r": [n] }],
        "rounded-b": [{ "rounded-b": [n] }],
        "rounded-l": [{ "rounded-l": [n] }],
        "rounded-ss": [{ "rounded-ss": [n] }],
        "rounded-se": [{ "rounded-se": [n] }],
        "rounded-ee": [{ "rounded-ee": [n] }],
        "rounded-es": [{ "rounded-es": [n] }],
        "rounded-tl": [{ "rounded-tl": [n] }],
        "rounded-tr": [{ "rounded-tr": [n] }],
        "rounded-br": [{ "rounded-br": [n] }],
        "rounded-bl": [{ "rounded-bl": [n] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [_] }],
        "border-style": [{ border: [...M(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [_] }],
        "divide-style": [{ divide: M() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...M()] }],
        "outline-offset": [{ "outline-offset": [qe, z] }],
        "outline-w": [{ outline: [qe, Je] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [_] }],
        "ring-offset-w": [{ "ring-offset": [qe, Je] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Qe, Fp] }],
        "shadow-color": [{ shadow: [dr] }],
        opacity: [{ opacity: [_] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Qe, z] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [_] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
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
              z,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [ur, z] }],
        "translate-x": [{ "translate-x": [L] }],
        "translate-y": [{ "translate-y": [L] }],
        "skew-x": [{ "skew-x": [A] }],
        "skew-y": [{ "skew-y": [A] }],
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
              z,
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
              z,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": O() }],
        "scroll-mx": [{ "scroll-mx": O() }],
        "scroll-my": [{ "scroll-my": O() }],
        "scroll-ms": [{ "scroll-ms": O() }],
        "scroll-me": [{ "scroll-me": O() }],
        "scroll-mt": [{ "scroll-mt": O() }],
        "scroll-mr": [{ "scroll-mr": O() }],
        "scroll-mb": [{ "scroll-mb": O() }],
        "scroll-ml": [{ "scroll-ml": O() }],
        "scroll-p": [{ "scroll-p": O() }],
        "scroll-px": [{ "scroll-px": O() }],
        "scroll-py": [{ "scroll-py": O() }],
        "scroll-ps": [{ "scroll-ps": O() }],
        "scroll-pe": [{ "scroll-pe": O() }],
        "scroll-pt": [{ "scroll-pt": O() }],
        "scroll-pr": [{ "scroll-pr": O() }],
        "scroll-pb": [{ "scroll-pb": O() }],
        "scroll-pl": [{ "scroll-pl": O() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", z] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [qe, Je, Zs] }],
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
  Hp = Ap(Bp);
function ct(...t) {
  return Hp(vc(t));
}
const Gp = dp,
  yb = hp,
  vb = pp,
  Wp = y.forwardRef(({ className: t, sideOffset: e = 4, ...r }, s) =>
    v.jsx(gc, {
      ref: s,
      sideOffset: e,
      className: ct(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t,
      ),
      ...r,
    }),
  );
Wp.displayName = gc.displayName;
const Kp = 1,
  Yp = 1e6;
let ei = 0;
function Jp() {
  return ((ei = (ei + 1) % Number.MAX_SAFE_INTEGER), ei.toString());
}
const ti = new Map(),
  oo = (t) => {
    if (ti.has(t)) return;
    const e = setTimeout(() => {
      (ti.delete(t), vr({ type: "REMOVE_TOAST", toastId: t }));
    }, Yp);
    ti.set(t, e);
  },
  Qp = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [e.toast, ...t.toasts].slice(0, Kp) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((r) =>
            r.id === e.toast.id ? { ...r, ...e.toast } : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = e;
        return (
          r
            ? oo(r)
            : t.toasts.forEach((s) => {
                oo(s.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((s) =>
              s.id === r || r === void 0 ? { ...s, open: !1 } : s,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return e.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((r) => r.id !== e.toastId) };
    }
  },
  ds = [];
let hs = { toasts: [] };
function vr(t) {
  ((hs = Qp(hs, t)),
    ds.forEach((e) => {
      e(hs);
    }));
}
function Xp({ ...t }) {
  const e = Jp(),
    r = (i) => vr({ type: "UPDATE_TOAST", toast: { ...i, id: e } }),
    s = () => vr({ type: "DISMISS_TOAST", toastId: e });
  return (
    vr({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: e,
        open: !0,
        onOpenChange: (i) => {
          i || s();
        },
      },
    }),
    { id: e, dismiss: s, update: r }
  );
}
function Zp() {
  const [t, e] = y.useState(hs);
  return (
    y.useEffect(
      () => (
        ds.push(e),
        () => {
          const r = ds.indexOf(e);
          r > -1 && ds.splice(r, 1);
        }
      ),
      [t],
    ),
    {
      ...t,
      toast: Xp,
      dismiss: (r) => vr({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
function me(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (i) {
    if ((t == null || t(i), r === !1 || !i.defaultPrevented))
      return e == null ? void 0 : e(i);
  };
}
function ef(t) {
  const e = t + "CollectionProvider",
    [r, s] = Ps(e),
    [i, n] = r(e, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (m) => {
      const { scope: g, children: _ } = m,
        b = K.useRef(null),
        w = K.useRef(new Map()).current;
      return v.jsx(i, { scope: g, itemMap: w, collectionRef: b, children: _ });
    };
  o.displayName = e;
  const a = t + "CollectionSlot",
    c = fs(a),
    l = K.forwardRef((m, g) => {
      const { scope: _, children: b } = m,
        w = n(a, _),
        E = de(g, w.collectionRef);
      return v.jsx(c, { ref: E, children: b });
    });
  l.displayName = a;
  const u = t + "CollectionItemSlot",
    d = "data-radix-collection-item",
    p = fs(u),
    h = K.forwardRef((m, g) => {
      const { scope: _, children: b, ...w } = m,
        E = K.useRef(null),
        S = de(g, E),
        A = n(u, _);
      return (
        K.useEffect(
          () => (
            A.itemMap.set(E, { ref: E, ...w }),
            () => void A.itemMap.delete(E)
          ),
        ),
        v.jsx(p, { [d]: "", ref: S, children: b })
      );
    });
  h.displayName = u;
  function f(m) {
    const g = n(t + "CollectionConsumer", m);
    return K.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (A, x) => w.indexOf(A.ref.current) - w.indexOf(x.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: h }, f, s];
}
var tf = "DismissableLayer",
  Li = "dismissableLayer.update",
  rf = "dismissableLayer.pointerDownOutside",
  sf = "dismissableLayer.focusOutside",
  ao,
  xc = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Cc = y.forwardRef((t, e) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: n,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = t,
      l = y.useContext(xc),
      [u, d] = y.useState(null),
      p =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = y.useState({}),
      f = de(e, (x) => d(x)),
      m = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = m.indexOf(g),
      b = u ? m.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      E = b >= _,
      S = of((x) => {
        const L = x.target,
          T = [...l.branches].some((I) => I.contains(L));
        !E ||
          T ||
          (i == null || i(x),
          o == null || o(x),
          x.defaultPrevented || a == null || a());
      }, p),
      A = af((x) => {
        const L = x.target;
        [...l.branches].some((I) => I.contains(L)) ||
          (n == null || n(x),
          o == null || o(x),
          x.defaultPrevented || a == null || a());
      }, p);
    return (
      ja((x) => {
        b === l.layers.size - 1 &&
          (s == null || s(x),
          !x.defaultPrevented && a && (x.preventDefault(), a()));
      }, p),
      y.useEffect(() => {
        if (u)
          return (
            r &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ao = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            co(),
            () => {
              r &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = ao);
            }
          );
      }, [u, p, r, l]),
      y.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            co());
        },
        [u, l],
      ),
      y.useEffect(() => {
        const x = () => h({});
        return (
          document.addEventListener(Li, x),
          () => document.removeEventListener(Li, x)
        );
      }, []),
      v.jsx(ce.div, {
        ...c,
        ref: f,
        style: {
          pointerEvents: w ? (E ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: me(t.onFocusCapture, A.onFocusCapture),
        onBlurCapture: me(t.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: me(
          t.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
Cc.displayName = tf;
var nf = "DismissableLayerBranch",
  Ac = y.forwardRef((t, e) => {
    const r = y.useContext(xc),
      s = y.useRef(null),
      i = de(e, s);
    return (
      y.useEffect(() => {
        const n = s.current;
        if (n)
          return (
            r.branches.add(n),
            () => {
              r.branches.delete(n);
            }
          );
      }, [r.branches]),
      v.jsx(ce.div, { ...t, ref: i })
    );
  });
Ac.displayName = nf;
function of(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Me(t),
    s = y.useRef(!1),
    i = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const n = (a) => {
          if (a.target && !s.current) {
            let c = function () {
              Rc(rf, r, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (e.removeEventListener("click", i.current),
                (i.current = c),
                e.addEventListener("click", i.current, { once: !0 }))
              : c();
          } else e.removeEventListener("click", i.current);
          s.current = !1;
        },
        o = window.setTimeout(() => {
          e.addEventListener("pointerdown", n);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          e.removeEventListener("pointerdown", n),
          e.removeEventListener("click", i.current));
      };
    }, [e, r]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function af(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Me(t),
    s = y.useRef(!1);
  return (
    y.useEffect(() => {
      const i = (n) => {
        n.target &&
          !s.current &&
          Rc(sf, r, { originalEvent: n }, { discrete: !1 });
      };
      return (
        e.addEventListener("focusin", i),
        () => e.removeEventListener("focusin", i)
      );
    }, [e, r]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function co() {
  const t = new CustomEvent(Li);
  document.dispatchEvent(t);
}
function Rc(t, e, r, { discrete: s }) {
  const i = r.originalEvent.target,
    n = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  (e && i.addEventListener(t, e, { once: !0 }),
    s ? sn(i, n) : i.dispatchEvent(n));
}
var cf = Cc,
  lf = Ac;
function uf(t, e) {
  return y.useReducer((r, s) => e[r][s] ?? r, t);
}
var Tc = (t) => {
  const { present: e, children: r } = t,
    s = df(e),
    i =
      typeof r == "function" ? r({ present: s.isPresent }) : y.Children.only(r),
    n = de(s.ref, hf(i));
  return typeof r == "function" || s.isPresent
    ? y.cloneElement(i, { ref: n })
    : null;
};
Tc.displayName = "Presence";
function df(t) {
  const [e, r] = y.useState(),
    s = y.useRef(null),
    i = y.useRef(t),
    n = y.useRef("none"),
    o = t ? "mounted" : "unmounted",
    [a, c] = uf(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const l = Yr(s.current);
      n.current = a === "mounted" ? l : "none";
    }, [a]),
    Oe(() => {
      const l = s.current,
        u = i.current;
      if (u !== t) {
        const p = n.current,
          h = Yr(l);
        (t
          ? c("MOUNT")
          : h === "none" || (l == null ? void 0 : l.display) === "none"
            ? c("UNMOUNT")
            : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = t));
      }
    }, [t, c]),
    Oe(() => {
      if (e) {
        let l;
        const u = e.ownerDocument.defaultView ?? window,
          d = (h) => {
            const m = Yr(s.current).includes(CSS.escape(h.animationName));
            if (h.target === e && m && (c("ANIMATION_END"), !i.current)) {
              const g = e.style.animationFillMode;
              ((e.style.animationFillMode = "forwards"),
                (l = u.setTimeout(() => {
                  e.style.animationFillMode === "forwards" &&
                    (e.style.animationFillMode = g);
                })));
            }
          },
          p = (h) => {
            h.target === e && (n.current = Yr(s.current));
          };
        return (
          e.addEventListener("animationstart", p),
          e.addEventListener("animationcancel", d),
          e.addEventListener("animationend", d),
          () => {
            (u.clearTimeout(l),
              e.removeEventListener("animationstart", p),
              e.removeEventListener("animationcancel", d),
              e.removeEventListener("animationend", d));
          }
        );
      } else c("ANIMATION_END");
    }, [e, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: y.useCallback((l) => {
        ((s.current = l ? getComputedStyle(l) : null), r(l));
      }, []),
    }
  );
}
function Yr(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function hf(t) {
  var s, i;
  let e =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    r = e && "isReactWarning" in e && e.isReactWarning;
  return r
    ? t.ref
    : ((e =
        (i = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : i.get),
      (r = e && "isReactWarning" in e && e.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var gn = "ToastProvider",
  [yn, pf, ff] = ef("Toast"),
  [Oc, _b] = Ps("Toast", [ff]),
  [mf, Ms] = Oc(gn),
  Pc = (t) => {
    const {
        __scopeToast: e,
        label: r = "Notification",
        duration: s = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: n = 50,
        children: o,
      } = t,
      [a, c] = y.useState(null),
      [l, u] = y.useState(0),
      d = y.useRef(!1),
      p = y.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${gn}\`. Expected non-empty \`string\`.`,
        ),
      v.jsx(yn.Provider, {
        scope: e,
        children: v.jsx(mf, {
          scope: e,
          label: r,
          duration: s,
          swipeDirection: i,
          swipeThreshold: n,
          toastCount: l,
          viewport: a,
          onViewportChange: c,
          onToastAdd: y.useCallback(() => u((h) => h + 1), []),
          onToastRemove: y.useCallback(() => u((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: p,
          children: o,
        }),
      })
    );
  };
Pc.displayName = gn;
var kc = "ToastViewport",
  gf = ["F8"],
  ji = "toast.viewportPause",
  Ni = "toast.viewportResume",
  Ic = y.forwardRef((t, e) => {
    const {
        __scopeToast: r,
        hotkey: s = gf,
        label: i = "Notifications ({hotkey})",
        ...n
      } = t,
      o = Ms(kc, r),
      a = pf(r),
      c = y.useRef(null),
      l = y.useRef(null),
      u = y.useRef(null),
      d = y.useRef(null),
      p = de(e, d, o.onViewportChange),
      h = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      f = o.toastCount > 0;
    (y.useEffect(() => {
      const g = (_) => {
        var w;
        s.length !== 0 &&
          s.every((E) => _[E] || _.code === E) &&
          ((w = d.current) == null || w.focus());
      };
      return (
        document.addEventListener("keydown", g),
        () => document.removeEventListener("keydown", g)
      );
    }, [s]),
      y.useEffect(() => {
        const g = c.current,
          _ = d.current;
        if (f && g && _) {
          const b = () => {
              if (!o.isClosePausedRef.current) {
                const A = new CustomEvent(ji);
                (_.dispatchEvent(A), (o.isClosePausedRef.current = !0));
              }
            },
            w = () => {
              if (o.isClosePausedRef.current) {
                const A = new CustomEvent(Ni);
                (_.dispatchEvent(A), (o.isClosePausedRef.current = !1));
              }
            },
            E = (A) => {
              !g.contains(A.relatedTarget) && w();
            },
            S = () => {
              g.contains(document.activeElement) || w();
            };
          return (
            g.addEventListener("focusin", b),
            g.addEventListener("focusout", E),
            g.addEventListener("pointermove", b),
            g.addEventListener("pointerleave", S),
            window.addEventListener("blur", b),
            window.addEventListener("focus", w),
            () => {
              (g.removeEventListener("focusin", b),
                g.removeEventListener("focusout", E),
                g.removeEventListener("pointermove", b),
                g.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", b),
                window.removeEventListener("focus", w));
            }
          );
        }
      }, [f, o.isClosePausedRef]));
    const m = y.useCallback(
      ({ tabbingDirection: g }) => {
        const b = a().map((w) => {
          const E = w.ref.current,
            S = [E, ...Of(E)];
          return g === "forwards" ? S : S.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [a],
    );
    return (
      y.useEffect(() => {
        const g = d.current;
        if (g) {
          const _ = (b) => {
            var S, A, x;
            const w = b.altKey || b.ctrlKey || b.metaKey;
            if (b.key === "Tab" && !w) {
              const L = document.activeElement,
                T = b.shiftKey;
              if (b.target === g && T) {
                (S = l.current) == null || S.focus();
                return;
              }
              const O = m({ tabbingDirection: T ? "backwards" : "forwards" }),
                P = O.findIndex((R) => R === L);
              ri(O.slice(P + 1))
                ? b.preventDefault()
                : T
                  ? (A = l.current) == null || A.focus()
                  : (x = u.current) == null || x.focus();
            }
          };
          return (
            g.addEventListener("keydown", _),
            () => g.removeEventListener("keydown", _)
          );
        }
      }, [a, m]),
      v.jsxs(lf, {
        ref: c,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: f ? void 0 : "none" },
        children: [
          f &&
            v.jsx(Di, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "forwards" });
                ri(g);
              },
            }),
          v.jsx(yn.Slot, {
            scope: r,
            children: v.jsx(ce.ol, { tabIndex: -1, ...n, ref: p }),
          }),
          f &&
            v.jsx(Di, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "backwards" });
                ri(g);
              },
            }),
        ],
      })
    );
  });
Ic.displayName = kc;
var Lc = "ToastFocusProxy",
  Di = y.forwardRef((t, e) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: s, ...i } = t,
      n = Ms(Lc, r);
    return v.jsx(js, {
      tabIndex: 0,
      ...i,
      ref: e,
      style: { position: "fixed" },
      onFocus: (o) => {
        var l;
        const a = o.relatedTarget;
        !((l = n.viewport) != null && l.contains(a)) && s();
      },
    });
  });
Di.displayName = Lc;
var Fr = "Toast",
  yf = "toast.swipeStart",
  vf = "toast.swipeMove",
  _f = "toast.swipeCancel",
  bf = "toast.swipeEnd",
  jc = y.forwardRef((t, e) => {
    const { forceMount: r, open: s, defaultOpen: i, onOpenChange: n, ...o } = t,
      [a, c] = cc({ prop: s, defaultProp: i ?? !0, onChange: n, caller: Fr });
    return v.jsx(Tc, {
      present: r || a,
      children: v.jsx(Sf, {
        open: a,
        ...o,
        ref: e,
        onClose: () => c(!1),
        onPause: Me(t.onPause),
        onResume: Me(t.onResume),
        onSwipeStart: me(t.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: me(t.onSwipeMove, (l) => {
          const { x: u, y: d } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "move"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${u}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
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
          const { x: u, y: d } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "end"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${u}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
jc.displayName = Fr;
var [wf, Ef] = Oc(Fr, { onClose() {} }),
  Sf = y.forwardRef((t, e) => {
    const {
        __scopeToast: r,
        type: s = "foreground",
        duration: i,
        open: n,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: p,
        onSwipeEnd: h,
        ...f
      } = t,
      m = Ms(Fr, r),
      [g, _] = y.useState(null),
      b = de(e, (R) => _(R)),
      w = y.useRef(null),
      E = y.useRef(null),
      S = i || m.duration,
      A = y.useRef(0),
      x = y.useRef(S),
      L = y.useRef(0),
      { onToastAdd: T, onToastRemove: I } = m,
      B = Me(() => {
        var $;
        ((g == null ? void 0 : g.contains(document.activeElement)) &&
          (($ = m.viewport) == null || $.focus()),
          o());
      }),
      O = y.useCallback(
        (R) => {
          !R ||
            R === 1 / 0 ||
            (window.clearTimeout(L.current),
            (A.current = new Date().getTime()),
            (L.current = window.setTimeout(B, R)));
        },
        [B],
      );
    (y.useEffect(() => {
      const R = m.viewport;
      if (R) {
        const $ = () => {
            (O(x.current), l == null || l());
          },
          M = () => {
            const V = new Date().getTime() - A.current;
            ((x.current = x.current - V),
              window.clearTimeout(L.current),
              c == null || c());
          };
        return (
          R.addEventListener(ji, M),
          R.addEventListener(Ni, $),
          () => {
            (R.removeEventListener(ji, M), R.removeEventListener(Ni, $));
          }
        );
      }
    }, [m.viewport, S, c, l, O]),
      y.useEffect(() => {
        n && !m.isClosePausedRef.current && O(S);
      }, [n, S, m.isClosePausedRef, O]),
      y.useEffect(() => (T(), () => I()), [T, I]));
    const P = y.useMemo(() => (g ? qc(g) : null), [g]);
    return m.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            P &&
              v.jsx(xf, {
                __scopeToast: r,
                role: "status",
                "aria-live": s === "foreground" ? "assertive" : "polite",
                children: P,
              }),
            v.jsx(wf, {
              scope: r,
              onClose: B,
              children: Cs.createPortal(
                v.jsx(yn.ItemSlot, {
                  scope: r,
                  children: v.jsx(cf, {
                    asChild: !0,
                    onEscapeKeyDown: me(a, () => {
                      (m.isFocusedToastEscapeKeyDownRef.current || B(),
                        (m.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: v.jsx(ce.li, {
                      tabIndex: 0,
                      "data-state": n ? "open" : "closed",
                      "data-swipe-direction": m.swipeDirection,
                      ...f,
                      ref: b,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...t.style,
                      },
                      onKeyDown: me(t.onKeyDown, (R) => {
                        R.key === "Escape" &&
                          (a == null || a(R.nativeEvent),
                          R.nativeEvent.defaultPrevented ||
                            ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            B()));
                      }),
                      onPointerDown: me(t.onPointerDown, (R) => {
                        R.button === 0 &&
                          (w.current = { x: R.clientX, y: R.clientY });
                      }),
                      onPointerMove: me(t.onPointerMove, (R) => {
                        if (!w.current) return;
                        const $ = R.clientX - w.current.x,
                          M = R.clientY - w.current.y,
                          V = !!E.current,
                          N = ["left", "right"].includes(m.swipeDirection),
                          H = ["left", "up"].includes(m.swipeDirection)
                            ? Math.min
                            : Math.max,
                          re = N ? H(0, $) : 0,
                          W = N ? 0 : H(0, M),
                          he = R.pointerType === "touch" ? 10 : 2,
                          ve = { x: re, y: W },
                          lt = { originalEvent: R, delta: ve };
                        V
                          ? ((E.current = ve), Jr(vf, d, lt, { discrete: !1 }))
                          : lo(ve, m.swipeDirection, he)
                            ? ((E.current = ve),
                              Jr(yf, u, lt, { discrete: !1 }),
                              R.target.setPointerCapture(R.pointerId))
                            : (Math.abs($) > he || Math.abs(M) > he) &&
                              (w.current = null);
                      }),
                      onPointerUp: me(t.onPointerUp, (R) => {
                        const $ = E.current,
                          M = R.target;
                        if (
                          (M.hasPointerCapture(R.pointerId) &&
                            M.releasePointerCapture(R.pointerId),
                          (E.current = null),
                          (w.current = null),
                          $)
                        ) {
                          const V = R.currentTarget,
                            N = { originalEvent: R, delta: $ };
                          (lo($, m.swipeDirection, m.swipeThreshold)
                            ? Jr(bf, h, N, { discrete: !0 })
                            : Jr(_f, p, N, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (H) => H.preventDefault(),
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
  xf = (t) => {
    const { __scopeToast: e, children: r, ...s } = t,
      i = Ms(Fr, e),
      [n, o] = y.useState(!1),
      [a, c] = y.useState(!1);
    return (
      Rf(() => o(!0)),
      y.useEffect(() => {
        const l = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      a
        ? null
        : v.jsx(oc, {
            asChild: !0,
            children: v.jsx(js, {
              ...s,
              children:
                n && v.jsxs(v.Fragment, { children: [i.label, " ", r] }),
            }),
          })
    );
  },
  Cf = "ToastTitle",
  Nc = y.forwardRef((t, e) => {
    const { __scopeToast: r, ...s } = t;
    return v.jsx(ce.div, { ...s, ref: e });
  });
Nc.displayName = Cf;
var Af = "ToastDescription",
  Dc = y.forwardRef((t, e) => {
    const { __scopeToast: r, ...s } = t;
    return v.jsx(ce.div, { ...s, ref: e });
  });
Dc.displayName = Af;
var $c = "ToastAction",
  Mc = y.forwardRef((t, e) => {
    const { altText: r, ...s } = t;
    return r.trim()
      ? v.jsx(Fc, {
          altText: r,
          asChild: !0,
          children: v.jsx(vn, { ...s, ref: e }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${$c}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Mc.displayName = $c;
var Uc = "ToastClose",
  vn = y.forwardRef((t, e) => {
    const { __scopeToast: r, ...s } = t,
      i = Ef(Uc, r);
    return v.jsx(Fc, {
      asChild: !0,
      children: v.jsx(ce.button, {
        type: "button",
        ...s,
        ref: e,
        onClick: me(t.onClick, i.onClose),
      }),
    });
  });
vn.displayName = Uc;
var Fc = y.forwardRef((t, e) => {
  const { __scopeToast: r, altText: s, ...i } = t;
  return v.jsx(ce.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": s || void 0,
    ...i,
    ref: e,
  });
});
function qc(t) {
  const e = [];
  return (
    Array.from(t.childNodes).forEach((s) => {
      if (
        (s.nodeType === s.TEXT_NODE && s.textContent && e.push(s.textContent),
        Tf(s))
      ) {
        const i = s.ariaHidden || s.hidden || s.style.display === "none",
          n = s.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (n) {
            const o = s.dataset.radixToastAnnounceAlt;
            o && e.push(o);
          } else e.push(...qc(s));
      }
    }),
    e
  );
}
function Jr(t, e, r, { discrete: s }) {
  const i = r.originalEvent.currentTarget,
    n = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: r });
  (e && i.addEventListener(t, e, { once: !0 }),
    s ? sn(i, n) : i.dispatchEvent(n));
}
var lo = (t, e, r = 0) => {
  const s = Math.abs(t.x),
    i = Math.abs(t.y),
    n = s > i;
  return e === "left" || e === "right" ? n && s > r : !n && i > r;
};
function Rf(t = () => {}) {
  const e = Me(t);
  Oe(() => {
    let r = 0,
      s = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (s = window.requestAnimationFrame(e)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(s));
      }
    );
  }, [e]);
}
function Tf(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Of(t) {
  const e = [],
    r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const i = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || i
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function ri(t) {
  const e = document.activeElement;
  return t.some((r) =>
    r === e ? !0 : (r.focus(), document.activeElement !== e),
  );
}
var Pf = Pc,
  Vc = Ic,
  zc = jc,
  Bc = Nc,
  Hc = Dc,
  Gc = Mc,
  Wc = vn;
const uo = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  ho = vc,
  Kc = (t, e) => (r) => {
    var s;
    if ((e == null ? void 0 : e.variants) == null)
      return ho(
        t,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: i, defaultVariants: n } = e,
      o = Object.keys(i).map((l) => {
        const u = r == null ? void 0 : r[l],
          d = n == null ? void 0 : n[l];
        if (u === null) return null;
        const p = uo(u) || uo(d);
        return i[l][p];
      }),
      a =
        r &&
        Object.entries(r).reduce((l, u) => {
          let [d, p] = u;
          return (p === void 0 || (l[d] = p), l);
        }, {}),
      c =
        e == null || (s = e.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((l, u) => {
              let { class: d, className: p, ...h } = u;
              return Object.entries(h).every((f) => {
                let [m, g] = f;
                return Array.isArray(g)
                  ? g.includes({ ...n, ...a }[m])
                  : { ...n, ...a }[m] === g;
              })
                ? [...l, d, p]
                : l;
            }, []);
    return ho(
      t,
      o,
      c,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  },
  kf = Pf,
  Yc = y.forwardRef(({ className: t, ...e }, r) =>
    v.jsx(Vc, {
      ref: r,
      className: ct(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t,
      ),
      ...e,
    }),
  );
Yc.displayName = Vc.displayName;
const If = Kc(
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
  Jc = y.forwardRef(({ className: t, variant: e, ...r }, s) =>
    v.jsx(zc, { ref: s, className: ct(If({ variant: e }), t), ...r }),
  );
Jc.displayName = zc.displayName;
const Lf = y.forwardRef(({ className: t, ...e }, r) =>
  v.jsx(Gc, {
    ref: r,
    className: ct(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t,
    ),
    ...e,
  }),
);
Lf.displayName = Gc.displayName;
const Qc = y.forwardRef(({ className: t, ...e }, r) =>
  v.jsx(Wc, {
    ref: r,
    className: ct(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t,
    ),
    "toast-close": "",
    ...e,
    children: v.jsx(Vl, { className: "h-4 w-4" }),
  }),
);
Qc.displayName = Wc.displayName;
const Xc = y.forwardRef(({ className: t, ...e }, r) =>
  v.jsx(Bc, { ref: r, className: ct("text-sm font-semibold", t), ...e }),
);
Xc.displayName = Bc.displayName;
const Zc = y.forwardRef(({ className: t, ...e }, r) =>
  v.jsx(Hc, { ref: r, className: ct("text-sm opacity-90", t), ...e }),
);
Zc.displayName = Hc.displayName;
function jf() {
  const { toasts: t } = Zp();
  return v.jsxs(kf, {
    children: [
      t.map(function ({ id: e, title: r, description: s, action: i, ...n }) {
        return v.jsxs(
          Jc,
          {
            ...n,
            children: [
              v.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && v.jsx(Xc, { children: r }),
                  s && v.jsx(Zc, { children: s }),
                ],
              }),
              i,
              v.jsx(Qc, {}),
            ],
          },
          e,
        );
      }),
      v.jsx(Yc, {}),
    ],
  });
}
var po = function () {
  return (
    (po =
      Object.assign ||
      function (e) {
        for (var r, s = 1, i = arguments.length; s < i; s++) {
          r = arguments[s];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    po.apply(this, arguments)
  );
};
function Us(t, e) {
  var r = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      e.indexOf(s) < 0 &&
      (r[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(t); i < s.length; i++)
      e.indexOf(s[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[i]) &&
        (r[s[i]] = t[s[i]]);
  return r;
}
function Nf(t, e, r, s) {
  function i(n) {
    return n instanceof r
      ? n
      : new r(function (o) {
          o(n);
        });
  }
  return new (r || (r = Promise))(function (n, o) {
    function a(u) {
      try {
        l(s.next(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      try {
        l(s.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      u.done ? n(u.value) : i(u.value).then(a, c);
    }
    l((s = s.apply(t, e || [])).next());
  });
}
function bb(t, e, r) {
  if (r || arguments.length === 2)
    for (var s = 0, i = e.length, n; s < i; s++)
      (n || !(s in e)) &&
        (n || (n = Array.prototype.slice.call(e, 0, s)), (n[s] = e[s]));
  return t.concat(n || Array.prototype.slice.call(e));
}
const Df = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
class _n extends Error {
  constructor(e, r = "FunctionsError", s) {
    (super(e), (this.name = r), (this.context = s));
  }
}
class $f extends _n {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e,
    );
  }
}
class fo extends _n {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class mo extends _n {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e,
    );
  }
}
var $i;
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
})($i || ($i = {}));
class Mf {
  constructor(e, { headers: r = {}, customFetch: s, region: i = $i.Any } = {}) {
    ((this.url = e),
      (this.headers = r),
      (this.region = i),
      (this.fetch = Df(s)));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return Nf(this, arguments, void 0, function* (r, s = {}) {
      var i;
      let n, o;
      try {
        const { headers: a, method: c, body: l, signal: u, timeout: d } = s;
        let p = {},
          { region: h } = s;
        h || (h = this.region);
        const f = new URL(`${this.url}/${r}`);
        h &&
          h !== "any" &&
          ((p["x-region"] = h), f.searchParams.set("forceFunctionRegion", h));
        let m;
        l &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && l instanceof Blob) || l instanceof ArrayBuffer
            ? ((p["Content-Type"] = "application/octet-stream"), (m = l))
            : typeof l == "string"
              ? ((p["Content-Type"] = "text/plain"), (m = l))
              : typeof FormData < "u" && l instanceof FormData
                ? (m = l)
                : ((p["Content-Type"] = "application/json"),
                  (m = JSON.stringify(l)))
          : l &&
              typeof l != "string" &&
              !(typeof Blob < "u" && l instanceof Blob) &&
              !(l instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && l instanceof FormData)
            ? (m = JSON.stringify(l))
            : (m = l);
        let g = u;
        d &&
          ((o = new AbortController()),
          (n = setTimeout(() => o.abort(), d)),
          u
            ? ((g = o.signal), u.addEventListener("abort", () => o.abort()))
            : (g = o.signal));
        const _ = yield this.fetch(f.toString(), {
            method: c || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, p), this.headers),
              a,
            ),
            body: m,
            signal: g,
          }).catch((S) => {
            throw new $f(S);
          }),
          b = _.headers.get("x-relay-error");
        if (b && b === "true") throw new fo(_);
        if (!_.ok) throw new mo(_);
        let w = (
            (i = _.headers.get("Content-Type")) !== null && i !== void 0
              ? i
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          E;
        return (
          w === "application/json"
            ? (E = yield _.json())
            : w === "application/octet-stream" || w === "application/pdf"
              ? (E = yield _.blob())
              : w === "text/event-stream"
                ? (E = _)
                : w === "multipart/form-data"
                  ? (E = yield _.formData())
                  : (E = yield _.text()),
          { data: E, error: null, response: _ }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof mo || a instanceof fo ? a.context : void 0,
        };
      } finally {
        n && clearTimeout(n);
      }
    });
  }
}
var Uf = class extends Error {
    constructor(t) {
      (super(t.message),
        (this.name = "PostgrestError"),
        (this.details = t.details),
        (this.hint = t.hint),
        (this.code = t.code));
    }
  },
  Ff = class {
    constructor(t) {
      var e, r, s;
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
          (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1),
        (this.urlLengthLimit =
          (s = t.urlLengthLimit) !== null && s !== void 0 ? s : 8e3),
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
      var r = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const s = this.fetch;
      let i = s(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (n) => {
        let o = null,
          a = null,
          c = null,
          l = n.status,
          u = n.statusText;
        if (n.ok) {
          var d, p;
          if (r.method !== "HEAD") {
            var h;
            const _ = await n.text();
            _ === "" ||
              (r.headers.get("Accept") === "text/csv" ||
              (r.headers.get("Accept") &&
                !((h = r.headers.get("Accept")) === null || h === void 0) &&
                h.includes("application/vnd.pgrst.plan+text"))
                ? (a = _)
                : (a = JSON.parse(_)));
          }
          const m =
              (d = r.headers.get("Prefer")) === null || d === void 0
                ? void 0
                : d.match(/count=(exact|planned|estimated)/),
            g =
              (p = n.headers.get("content-range")) === null || p === void 0
                ? void 0
                : p.split("/");
          (m && g && g.length > 1 && (c = parseInt(g[1])),
            r.isMaybeSingle &&
              r.method === "GET" &&
              Array.isArray(a) &&
              (a.length > 1
                ? ((o = {
                    code: "PGRST116",
                    details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (a = null),
                  (c = null),
                  (l = 406),
                  (u = "Not Acceptable"))
                : a.length === 1
                  ? (a = a[0])
                  : (a = null)));
        } else {
          var f;
          const m = await n.text();
          try {
            ((o = JSON.parse(m)),
              Array.isArray(o) &&
                n.status === 404 &&
                ((a = []), (o = null), (l = 200), (u = "OK")));
          } catch {
            n.status === 404 && m === ""
              ? ((l = 204), (u = "No Content"))
              : (o = { message: m });
          }
          if (
            (o &&
              r.isMaybeSingle &&
              !(o == null || (f = o.details) === null || f === void 0) &&
              f.includes("0 rows") &&
              ((o = null), (l = 200), (u = "OK")),
            o && r.shouldThrowOnError)
          )
            throw new Uf(o);
        }
        return { error: o, data: a, count: c, status: l, statusText: u };
      });
      return (
        this.shouldThrowOnError ||
          (i = i.catch((n) => {
            var o;
            let a = "",
              c = "",
              l = "";
            const u = n == null ? void 0 : n.cause;
            if (u) {
              var d, p, h, f;
              const _ =
                  (d = u == null ? void 0 : u.message) !== null && d !== void 0
                    ? d
                    : "",
                b =
                  (p = u == null ? void 0 : u.code) !== null && p !== void 0
                    ? p
                    : "";
              ((a = `${(h = n == null ? void 0 : n.name) !== null && h !== void 0 ? h : "FetchError"}: ${n == null ? void 0 : n.message}`),
                (a += `

Caused by: ${(f = u == null ? void 0 : u.name) !== null && f !== void 0 ? f : "Error"}: ${_}`),
                b && (a += ` (${b})`),
                u != null &&
                  u.stack &&
                  (a += `
${u.stack}`));
            } else {
              var m;
              a =
                (m = n == null ? void 0 : n.stack) !== null && m !== void 0
                  ? m
                  : "";
            }
            const g = this.url.toString().length;
            return (
              (n == null ? void 0 : n.name) === "AbortError" ||
              (n == null ? void 0 : n.code) === "ABORT_ERR"
                ? ((l = ""),
                  (c = "Request was aborted (timeout or manual cancellation)"),
                  g > this.urlLengthLimit &&
                    (c += `. Note: Your request URL is ${g} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((u == null ? void 0 : u.name) === "HeadersOverflowError" ||
                    (u == null ? void 0 : u.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((l = ""),
                  (c = "HTTP headers exceeded server limits (typically 16KB)"),
                  g > this.urlLengthLimit &&
                    (c += `. Your request URL is ${g} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${(o = n == null ? void 0 : n.name) !== null && o !== void 0 ? o : "FetchError"}: ${n == null ? void 0 : n.message}`,
                  details: a,
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
        i.then(t, e)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  qf = class extends Ff {
    select(t) {
      let e = !1;
      const r = (t ?? "*")
        .split("")
        .map((s) => (/\s/.test(s) && !e ? "" : (s === '"' && (e = !e), s)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      t,
      {
        ascending: e = !0,
        nullsFirst: r,
        foreignTable: s,
        referencedTable: i = s,
      } = {},
    ) {
      const n = i ? `${i}.order` : "order",
        o = this.url.searchParams.get(n);
      return (
        this.url.searchParams.set(
          n,
          `${o ? `${o},` : ""}${t}.${e ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(t, { foreignTable: e, referencedTable: r = e } = {}) {
      const s = typeof r > "u" ? "limit" : `${r}.limit`;
      return (this.url.searchParams.set(s, `${t}`), this);
    }
    range(t, e, { foreignTable: r, referencedTable: s = r } = {}) {
      const i = typeof s > "u" ? "offset" : `${s}.offset`,
        n = typeof s > "u" ? "limit" : `${s}.limit`;
      return (
        this.url.searchParams.set(i, `${t}`),
        this.url.searchParams.set(n, `${e - t + 1}`),
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
      settings: r = !1,
      buffers: s = !1,
      wal: i = !1,
      format: n = "text",
    } = {}) {
      var o;
      const a = [
          t ? "analyze" : null,
          e ? "verbose" : null,
          r ? "settings" : null,
          s ? "buffers" : null,
          i ? "wal" : null,
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
          `application/vnd.pgrst.plan+${n}; for="${c}"; options=${a};`,
        ),
        n === "json" ? this : this
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
const go = new RegExp("[,()]");
var Nt = class extends qf {
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
      const r = Array.from(new Set(e))
        .map((s) => (typeof s == "string" && go.test(s) ? `"${s}"` : `${s}`))
        .join(",");
      return (this.url.searchParams.append(t, `in.(${r})`), this);
    }
    notIn(t, e) {
      const r = Array.from(new Set(e))
        .map((s) => (typeof s == "string" && go.test(s) ? `"${s}"` : `${s}`))
        .join(",");
      return (this.url.searchParams.append(t, `not.in.(${r})`), this);
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
    textSearch(t, e, { config: r, type: s } = {}) {
      let i = "";
      s === "plain"
        ? (i = "pl")
        : s === "phrase"
          ? (i = "ph")
          : s === "websearch" && (i = "w");
      const n = r === void 0 ? "" : `(${r})`;
      return (this.url.searchParams.append(t, `${i}fts${n}.${e}`), this);
    }
    match(t) {
      return (
        Object.entries(t).forEach(([e, r]) => {
          this.url.searchParams.append(e, `eq.${r}`);
        }),
        this
      );
    }
    not(t, e, r) {
      return (this.url.searchParams.append(t, `not.${e}.${r}`), this);
    }
    or(t, { foreignTable: e, referencedTable: r = e } = {}) {
      const s = r ? `${r}.or` : "or";
      return (this.url.searchParams.append(s, `(${t})`), this);
    }
    filter(t, e, r) {
      return (this.url.searchParams.append(t, `${e}.${r}`), this);
    }
  },
  Vf = class {
    constructor(
      t,
      { headers: e = {}, schema: r, fetch: s, urlLengthLimit: i = 8e3 },
    ) {
      ((this.url = t),
        (this.headers = new Headers(e)),
        (this.schema = r),
        (this.fetch = s),
        (this.urlLengthLimit = i));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(t, e) {
      const { head: r = !1, count: s } = e ?? {},
        i = r ? "HEAD" : "GET";
      let n = !1;
      const o = (t ?? "*")
          .split("")
          .map((l) => (/\s/.test(l) && !n ? "" : (l === '"' && (n = !n), l)))
          .join(""),
        { url: a, headers: c } = this.cloneRequestState();
      return (
        a.searchParams.set("select", o),
        s && c.append("Prefer", `count=${s}`),
        new Nt({
          method: i,
          url: a,
          headers: c,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(t, { count: e, defaultToNull: r = !0 } = {}) {
      var s;
      const i = "POST",
        { url: n, headers: o } = this.cloneRequestState();
      if (
        (e && o.append("Prefer", `count=${e}`),
        r || o.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const a = t.reduce((c, l) => c.concat(Object.keys(l)), []);
        if (a.length > 0) {
          const c = [...new Set(a)].map((l) => `"${l}"`);
          n.searchParams.set("columns", c.join(","));
        }
      }
      return new Nt({
        method: i,
        url: n,
        headers: o,
        schema: this.schema,
        body: t,
        fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      t,
      {
        onConflict: e,
        ignoreDuplicates: r = !1,
        count: s,
        defaultToNull: i = !0,
      } = {},
    ) {
      var n;
      const o = "POST",
        { url: a, headers: c } = this.cloneRequestState();
      if (
        (c.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && a.searchParams.set("on_conflict", e),
        s && c.append("Prefer", `count=${s}`),
        i || c.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const l = t.reduce((u, d) => u.concat(Object.keys(d)), []);
        if (l.length > 0) {
          const u = [...new Set(l)].map((d) => `"${d}"`);
          a.searchParams.set("columns", u.join(","));
        }
      }
      return new Nt({
        method: o,
        url: a,
        headers: c,
        schema: this.schema,
        body: t,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(t, { count: e } = {}) {
      var r;
      const s = "PATCH",
        { url: i, headers: n } = this.cloneRequestState();
      return (
        e && n.append("Prefer", `count=${e}`),
        new Nt({
          method: s,
          url: i,
          headers: n,
          schema: this.schema,
          body: t,
          fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: t } = {}) {
      var e;
      const r = "DELETE",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        t && i.append("Prefer", `count=${t}`),
        new Nt({
          method: r,
          url: s,
          headers: i,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function Or(t) {
  "@babel/helpers - typeof";
  return (
    (Or =
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
    Or(t)
  );
}
function zf(t, e) {
  if (Or(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e || "default");
    if (Or(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Bf(t) {
  var e = zf(t, "string");
  return Or(e) == "symbol" ? e : e + "";
}
function Hf(t, e, r) {
  return (
    (e = Bf(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function yo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    (e &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, s));
  }
  return r;
}
function Qr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? yo(Object(r), !0).forEach(function (s) {
          Hf(t, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : yo(Object(r)).forEach(function (s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return t;
}
var Gf = class el {
  constructor(
    e,
    {
      headers: r = {},
      schema: s,
      fetch: i,
      timeout: n,
      urlLengthLimit: o = 8e3,
    } = {},
  ) {
    ((this.url = e),
      (this.headers = new Headers(r)),
      (this.schemaName = s),
      (this.urlLengthLimit = o));
    const a = i ?? globalThis.fetch;
    n !== void 0 && n > 0
      ? (this.fetch = (c, l) => {
          const u = new AbortController(),
            d = setTimeout(() => u.abort(), n),
            p = l == null ? void 0 : l.signal;
          if (p) {
            if (p.aborted) return (clearTimeout(d), a(c, l));
            const h = () => {
              (clearTimeout(d), u.abort());
            };
            return (
              p.addEventListener("abort", h, { once: !0 }),
              a(c, Qr(Qr({}, l), {}, { signal: u.signal })).finally(() => {
                (clearTimeout(d), p.removeEventListener("abort", h));
              })
            );
          }
          return a(c, Qr(Qr({}, l), {}, { signal: u.signal })).finally(() =>
            clearTimeout(d),
          );
        })
      : (this.fetch = a);
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new Vf(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(e) {
    return new el(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(e, r = {}, { head: s = !1, get: i = !1, count: n } = {}) {
    var o;
    let a;
    const c = new URL(`${this.url}/rpc/${e}`);
    let l;
    const u = (h) =>
        h !== null && typeof h == "object" && (!Array.isArray(h) || h.some(u)),
      d = s && Object.values(r).some(u);
    d
      ? ((a = "POST"), (l = r))
      : s || i
        ? ((a = s ? "HEAD" : "GET"),
          Object.entries(r)
            .filter(([h, f]) => f !== void 0)
            .map(([h, f]) => [
              h,
              Array.isArray(f) ? `{${f.join(",")}}` : `${f}`,
            ])
            .forEach(([h, f]) => {
              c.searchParams.append(h, f);
            }))
        : ((a = "POST"), (l = r));
    const p = new Headers(this.headers);
    return (
      d
        ? p.set("Prefer", n ? `count=${n},return=minimal` : "return=minimal")
        : n && p.set("Prefer", `count=${n}`),
      new Nt({
        method: a,
        url: c,
        headers: p,
        schema: this.schemaName,
        body: l,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class Wf {
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
    const r = globalThis.process;
    if (r) {
      const s = r.versions;
      if (s && s.node) {
        const i = s.node,
          n = parseInt(i.replace(/^v/, "").split(".")[0]);
        return n >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${n} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${n} detected without native WebSocket support.`,
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
    let r = e.error || "WebSocket not supported in this environment.";
    throw (
      e.workaround &&
        (r += `

Suggested solution: ${e.workaround}`),
      new Error(r)
    );
  }
  static createWebSocket(e, r) {
    const s = this.getWebSocketConstructor();
    return new s(e, r);
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
const Kf = "2.99.2",
  Yf = `realtime-js/${Kf}`,
  Jf = "1.0.0",
  tl = "2.0.0",
  vo = tl,
  Mi = 1e4,
  Qf = 1e3,
  Xf = 100;
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
var Ui;
(function (t) {
  t.websocket = "websocket";
})(Ui || (Ui = {}));
var mt;
(function (t) {
  ((t.Connecting = "connecting"),
    (t.Open = "open"),
    (t.Closing = "closing"),
    (t.Closed = "closed"));
})(mt || (mt = {}));
class Zf {
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
  encode(e, r) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return r(this._binaryEncodeUserBroadcastPush(e));
    let s = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return r(JSON.stringify(s));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var r;
    return this._isArrayBuffer(
      (r = e.payload) === null || r === void 0 ? void 0 : r.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var r, s;
    const i =
      (s = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
        null && s !== void 0
        ? s
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(e) {
    var r, s;
    const i =
        (s = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && s !== void 0
          ? s
          : {},
      o = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, r, s) {
    var i, n;
    const o = e.topic,
      a = (i = e.ref) !== null && i !== void 0 ? i : "",
      c = (n = e.join_ref) !== null && n !== void 0 ? n : "",
      l = e.payload.event,
      u = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      d = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
    if (c.length > 255)
      throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (l.length > 255)
      throw new Error(`userEvent length ${l.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
    const p =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        c.length +
        a.length +
        o.length +
        l.length +
        d.length,
      h = new ArrayBuffer(this.HEADER_LENGTH + p);
    let f = new DataView(h),
      m = 0;
    (f.setUint8(m++, this.KINDS.userBroadcastPush),
      f.setUint8(m++, c.length),
      f.setUint8(m++, a.length),
      f.setUint8(m++, o.length),
      f.setUint8(m++, l.length),
      f.setUint8(m++, d.length),
      f.setUint8(m++, r),
      Array.from(c, (_) => f.setUint8(m++, _.charCodeAt(0))),
      Array.from(a, (_) => f.setUint8(m++, _.charCodeAt(0))),
      Array.from(o, (_) => f.setUint8(m++, _.charCodeAt(0))),
      Array.from(l, (_) => f.setUint8(m++, _.charCodeAt(0))),
      Array.from(d, (_) => f.setUint8(m++, _.charCodeAt(0))));
    var g = new Uint8Array(h.byteLength + s.byteLength);
    return (
      g.set(new Uint8Array(h), 0),
      g.set(new Uint8Array(s), h.byteLength),
      g.buffer
    );
  }
  decode(e, r) {
    if (this._isArrayBuffer(e)) {
      let s = this._binaryDecode(e);
      return r(s);
    }
    if (typeof e == "string") {
      const s = JSON.parse(e),
        [i, n, o, a, c] = s;
      return r({ join_ref: i, ref: n, topic: o, event: a, payload: c });
    }
    return r({});
  }
  _binaryDecode(e) {
    const r = new DataView(e),
      s = r.getUint8(0),
      i = new TextDecoder();
    switch (s) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, r, i);
    }
  }
  _decodeUserBroadcast(e, r, s) {
    const i = r.getUint8(1),
      n = r.getUint8(2),
      o = r.getUint8(3),
      a = r.getUint8(4);
    let c = this.HEADER_LENGTH + 4;
    const l = s.decode(e.slice(c, c + i));
    c = c + i;
    const u = s.decode(e.slice(c, c + n));
    c = c + n;
    const d = s.decode(e.slice(c, c + o));
    c = c + o;
    const p = e.slice(c, e.byteLength),
      h = a === this.JSON_ENCODING ? JSON.parse(s.decode(p)) : p,
      f = { type: this.BROADCAST_EVENT, event: u, payload: h };
    return (
      o > 0 && (f.meta = JSON.parse(d)),
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
    var r;
    return (
      e instanceof ArrayBuffer ||
      ((r = e == null ? void 0 : e.constructor) === null || r === void 0
        ? void 0
        : r.name) === "ArrayBuffer"
    );
  }
  _pick(e, r) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([s]) => r.includes(s)));
  }
}
class rl {
  constructor(e, r) {
    ((this.callback = e),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = r));
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
const _o = (t, e, r = {}) => {
    var s;
    const i = (s = r.skipTypes) !== null && s !== void 0 ? s : [];
    return e
      ? Object.keys(e).reduce((n, o) => ((n[o] = em(o, t, e, i)), n), {})
      : {};
  },
  em = (t, e, r, s) => {
    const i = e.find((a) => a.name === t),
      n = i == null ? void 0 : i.type,
      o = r[t];
    return n && !s.includes(n) ? sl(n, o) : Fi(o);
  },
  sl = (t, e) => {
    if (t.charAt(0) === "_") {
      const r = t.slice(1, t.length);
      return im(e, r);
    }
    switch (t) {
      case J.bool:
        return tm(e);
      case J.float4:
      case J.float8:
      case J.int2:
      case J.int4:
      case J.int8:
      case J.numeric:
      case J.oid:
        return rm(e);
      case J.json:
      case J.jsonb:
        return sm(e);
      case J.timestamp:
        return nm(e);
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
        return Fi(e);
      default:
        return Fi(e);
    }
  },
  Fi = (t) => t,
  tm = (t) => {
    switch (t) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return t;
    }
  },
  rm = (t) => {
    if (typeof t == "string") {
      const e = parseFloat(t);
      if (!Number.isNaN(e)) return e;
    }
    return t;
  },
  sm = (t) => {
    if (typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    return t;
  },
  im = (t, e) => {
    if (typeof t != "string") return t;
    const r = t.length - 1,
      s = t[r];
    if (t[0] === "{" && s === "}") {
      let n;
      const o = t.slice(1, r);
      try {
        n = JSON.parse("[" + o + "]");
      } catch {
        n = o ? o.split(",") : [];
      }
      return n.map((a) => sl(e, a));
    }
    return t;
  },
  nm = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
  il = (t) => {
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
class si {
  constructor(e, r, s = {}, i = Mi) {
    ((this.channel = e),
      (this.event = r),
      (this.payload = s),
      (this.timeout = i),
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
  receive(e, r) {
    var s;
    return (
      this._hasReceived(e) &&
        r(
          (s = this.receivedResp) === null || s === void 0
            ? void 0
            : s.response,
        ),
      this.recHooks.push({ status: e, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const e = (r) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r));
    };
    (this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(e, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: r });
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
  _matchReceive({ status: e, response: r }) {
    this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(r));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var bo;
(function (t) {
  ((t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave"));
})(bo || (bo = {}));
class _r {
  constructor(e, r) {
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
    const s = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(s.state, {}, (i) => {
      const { onJoin: n, onLeave: o, onSync: a } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = _r.syncState(this.state, i, n, o)),
        this.pendingDiffs.forEach((c) => {
          this.state = _r.syncDiff(this.state, c, n, o);
        }),
        (this.pendingDiffs = []),
        a());
    }),
      this.channel._on(s.diff, {}, (i) => {
        const { onJoin: n, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = _r.syncDiff(this.state, i, n, o)), a());
      }),
      this.onJoin((i, n, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: i,
          currentPresences: n,
          newPresences: o,
        });
      }),
      this.onLeave((i, n, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: i,
          currentPresences: n,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(e, r, s, i) {
    const n = this.cloneDeep(e),
      o = this.transformState(r),
      a = {},
      c = {};
    return (
      this.map(n, (l, u) => {
        o[l] || (c[l] = u);
      }),
      this.map(o, (l, u) => {
        const d = n[l];
        if (d) {
          const p = u.map((g) => g.presence_ref),
            h = d.map((g) => g.presence_ref),
            f = u.filter((g) => h.indexOf(g.presence_ref) < 0),
            m = d.filter((g) => p.indexOf(g.presence_ref) < 0);
          (f.length > 0 && (a[l] = f), m.length > 0 && (c[l] = m));
        } else a[l] = u;
      }),
      this.syncDiff(n, { joins: a, leaves: c }, s, i)
    );
  }
  static syncDiff(e, r, s, i) {
    const { joins: n, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      s || (s = () => {}),
      i || (i = () => {}),
      this.map(n, (a, c) => {
        var l;
        const u = (l = e[a]) !== null && l !== void 0 ? l : [];
        if (((e[a] = this.cloneDeep(c)), u.length > 0)) {
          const d = e[a].map((h) => h.presence_ref),
            p = u.filter((h) => d.indexOf(h.presence_ref) < 0);
          e[a].unshift(...p);
        }
        s(a, u, c);
      }),
      this.map(o, (a, c) => {
        let l = e[a];
        if (!l) return;
        const u = c.map((d) => d.presence_ref);
        ((l = l.filter((d) => u.indexOf(d.presence_ref) < 0)),
          (e[a] = l),
          i(a, l, c),
          l.length === 0 && delete e[a]);
      }),
      e
    );
  }
  static map(e, r) {
    return Object.getOwnPropertyNames(e).map((s) => r(s, e[s]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((r, s) => {
        const i = e[s];
        return (
          "metas" in i
            ? (r[s] = i.metas.map(
                (n) => (
                  (n.presence_ref = n.phx_ref),
                  delete n.phx_ref,
                  delete n.phx_ref_prev,
                  n
                ),
              ))
            : (r[s] = i),
          r
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
var wo;
(function (t) {
  ((t.ALL = "*"),
    (t.INSERT = "INSERT"),
    (t.UPDATE = "UPDATE"),
    (t.DELETE = "DELETE"));
})(wo || (wo = {}));
var br;
(function (t) {
  ((t.BROADCAST = "broadcast"),
    (t.PRESENCE = "presence"),
    (t.POSTGRES_CHANGES = "postgres_changes"),
    (t.SYSTEM = "system"));
})(br || (br = {}));
var Be;
(function (t) {
  ((t.SUBSCRIBED = "SUBSCRIBED"),
    (t.TIMED_OUT = "TIMED_OUT"),
    (t.CLOSED = "CLOSED"),
    (t.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(Be || (Be = {}));
class Mt {
  constructor(e, r = { config: {} }, s) {
    var i, n;
    if (
      ((this.topic = e),
      (this.params = r),
      (this.socket = s),
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
        r.config,
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new si(this, Re.join, this.params, this.timeout)),
      (this.rejoinTimer = new rl(
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
      this._on(Re.reply, {}, (o, a) => {
        this._trigger(this._replyEventName(a), o);
      }),
      (this.presence = new _r(this)),
      (this.broadcastEndpointURL = il(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (n =
            (i = this.params.config) === null || i === void 0
              ? void 0
              : i.broadcast) === null || n === void 0
        ) &&
        n.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(e, r = this.timeout) {
    var s, i, n;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == te.closed)
    ) {
      const {
          config: { broadcast: o, presence: a, private: c },
        } = this.params,
        l =
          (i =
            (s = this.bindings.postgres_changes) === null || s === void 0
              ? void 0
              : s.map((h) => h.filter)) !== null && i !== void 0
            ? i
            : [],
        u =
          (!!this.bindings[br.PRESENCE] &&
            this.bindings[br.PRESENCE].length > 0) ||
          ((n = this.params.config.presence) === null || n === void 0
            ? void 0
            : n.enabled) === !0,
        d = {},
        p = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, a), { enabled: u }),
          postgres_changes: l,
          private: c,
        };
      (this.socket.accessTokenValue &&
        (d.access_token = this.socket.accessTokenValue),
        this._onError((h) => (e == null ? void 0 : e(Be.CHANNEL_ERROR, h))),
        this._onClose(() => (e == null ? void 0 : e(Be.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: p }, d)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", async ({ postgres_changes: h }) => {
            var f;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              h === void 0)
            ) {
              e == null || e(Be.SUBSCRIBED);
              return;
            } else {
              const m = this.bindings.postgres_changes,
                g =
                  (f = m == null ? void 0 : m.length) !== null && f !== void 0
                    ? f
                    : 0,
                _ = [];
              for (let b = 0; b < g; b++) {
                const w = m[b],
                  {
                    filter: { event: E, schema: S, table: A, filter: x },
                  } = w,
                  L = h && h[b];
                if (
                  L &&
                  L.event === E &&
                  Mt.isFilterValueEqual(L.schema, S) &&
                  Mt.isFilterValueEqual(L.table, A) &&
                  Mt.isFilterValueEqual(L.filter, x)
                )
                  _.push(Object.assign(Object.assign({}, w), { id: L.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = te.errored),
                    e == null ||
                      e(
                        Be.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes",
                        ),
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = _), e && e(Be.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (h) => {
            ((this.state = te.errored),
              e == null ||
                e(
                  Be.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(h).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            e == null || e(Be.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: e },
      r.timeout || this.timeout,
    );
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, r, s) {
    return (
      this.state === te.joined &&
        e === br.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`,
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(e, r, s)
    );
  }
  async httpSend(e, r, s = {}) {
    var i;
    if (r == null) return Promise.reject("Payload is required for httpSend()");
    const n = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (n.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: n,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: e,
              payload: r,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (i = s.timeout) !== null && i !== void 0 ? i : this.timeout,
      );
    if (a.status === 202) return { success: !0 };
    let c = a.statusText;
    try {
      const l = await a.json();
      c = l.error || l.message || c;
    } catch {}
    return Promise.reject(new Error(c));
  }
  async send(e, r = {}) {
    var s, i;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: n, payload: o } = e,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const c = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: n,
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
          (s = r.timeout) !== null && s !== void 0 ? s : this.timeout,
        );
        return (
          await ((i = l.body) === null || i === void 0 ? void 0 : i.cancel()),
          l.ok ? "ok" : "error"
        );
      } catch (l) {
        return l.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((n) => {
        var o, a, c;
        const l = this._push(e.type, e, r.timeout || this.timeout);
        (e.type === "broadcast" &&
          !(
            !(
              (c =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || c === void 0
            ) && c.ack
          ) &&
          n("ok"),
          l.receive("ok", () => n("ok")),
          l.receive("error", () => n("error")),
          l.receive("timeout", () => n("timed out")));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = te.leaving;
    const r = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Re.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let s = null;
    return new Promise((i) => {
      ((s = new si(this, Re.leave, {}, e)),
        s
          .receive("ok", () => {
            (r(), i("ok"));
          })
          .receive("timeout", () => {
            (r(), i("timed out"));
          })
          .receive("error", () => {
            i("error");
          }),
        s.send(),
        this._canPush() || s.trigger("ok", {}));
    }).finally(() => {
      s == null || s.destroy();
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
  async _fetchWithTimeout(e, r, s) {
    const i = new AbortController(),
      n = setTimeout(() => i.abort(), s),
      o = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, r), { signal: i.signal }),
      );
    return (clearTimeout(n), o);
  }
  _push(e, r, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new si(this, e, r, s);
    return (this._canPush() ? i.send() : this._addToPushBuffer(i), i);
  }
  _addToPushBuffer(e) {
    if (
      (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Xf)
    ) {
      const r = this.pushBuffer.shift();
      r &&
        (r.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${r.event}`,
          r.payload,
        ));
    }
  }
  _onMessage(e, r, s) {
    return r;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, r, s) {
    var i, n;
    const o = e.toLocaleLowerCase(),
      { close: a, error: c, leave: l, join: u } = Re;
    if (s && [a, c, l, u].indexOf(o) >= 0 && s !== this._joinRef()) return;
    let p = this._onMessage(o, r, s);
    if (r && !p)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((h) => {
            var f, m, g;
            return (
              ((f = h.filter) === null || f === void 0 ? void 0 : f.event) ===
                "*" ||
              ((g =
                (m = h.filter) === null || m === void 0 ? void 0 : m.event) ===
                null || g === void 0
                ? void 0
                : g.toLocaleLowerCase()) === o
            );
          })
          .map((h) => h.callback(p, s))
      : (n = this.bindings[o]) === null ||
        n === void 0 ||
        n
          .filter((h) => {
            var f, m, g, _, b, w;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in h) {
                const E = h.id,
                  S =
                    (f = h.filter) === null || f === void 0 ? void 0 : f.event;
                return (
                  E &&
                  ((m = r.ids) === null || m === void 0
                    ? void 0
                    : m.includes(E)) &&
                  (S === "*" ||
                    (S == null ? void 0 : S.toLocaleLowerCase()) ===
                      ((g = r.data) === null || g === void 0
                        ? void 0
                        : g.type.toLocaleLowerCase()))
                );
              } else {
                const E =
                  (b =
                    (_ = h == null ? void 0 : h.filter) === null || _ === void 0
                      ? void 0
                      : _.event) === null || b === void 0
                    ? void 0
                    : b.toLocaleLowerCase();
                return (
                  E === "*" ||
                  E ===
                    ((w = r == null ? void 0 : r.event) === null || w === void 0
                      ? void 0
                      : w.toLocaleLowerCase())
                );
              }
            else return h.type.toLocaleLowerCase() === o;
          })
          .map((h) => {
            if (typeof p == "object" && "ids" in p) {
              const f = p.data,
                {
                  schema: m,
                  table: g,
                  commit_timestamp: _,
                  type: b,
                  errors: w,
                } = f;
              p = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: m,
                    table: g,
                    commit_timestamp: _,
                    eventType: b,
                    new: {},
                    old: {},
                    errors: w,
                  },
                ),
                this._getPayloadRecords(f),
              );
            }
            h.callback(p, s);
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
  _on(e, r, s) {
    const i = e.toLocaleLowerCase(),
      n = { type: i, filter: r, callback: s };
    return (
      this.bindings[i] ? this.bindings[i].push(n) : (this.bindings[i] = [n]),
      this
    );
  }
  _off(e, r) {
    const s = e.toLocaleLowerCase();
    return (
      this.bindings[s] &&
        (this.bindings[s] = this.bindings[s].filter((i) => {
          var n;
          return !(
            ((n = i.type) === null || n === void 0
              ? void 0
              : n.toLocaleLowerCase()) === s && Mt.isEqual(i.filter, r)
          );
        })),
      this
    );
  }
  static isEqual(e, r) {
    if (Object.keys(e).length !== Object.keys(r).length) return !1;
    for (const s in e) if (e[s] !== r[s]) return !1;
    return !0;
  }
  static isFilterValueEqual(e, r) {
    return (e ?? void 0) === (r ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(e) {
    this._on(Re.close, {}, e);
  }
  _onError(e) {
    this._on(Re.error, {}, (r) => e(r));
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
    const r = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (r.new = _o(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (r.old = _o(e.columns, e.old_record)),
      r
    );
  }
}
const ii = () => {},
  Xr = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  om = [1e3, 2e3, 5e3, 1e4],
  am = 1e4,
  cm = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class lm {
  constructor(e, r) {
    var s;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = Mi),
      (this.transport = null),
      (this.heartbeatIntervalMs = Xr.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = ii),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = vo),
      (this.logger = ii),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new Zf()),
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
      (this._resolveFetch = (i) =>
        i ? (...n) => i(...n) : (...n) => fetch(...n)),
      !(
        !((s = r == null ? void 0 : r.params) === null || s === void 0) &&
        s.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = r.params.apikey),
      (this.endPoint = `${e}/${Ui.websocket}`),
      (this.httpEndpoint = il(e)),
      this._initializeOptions(r),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)));
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
          this.conn = Wf.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const r = e.message;
          throw r.includes("Node.js")
            ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${r}`);
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
  disconnect(e, r) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const s = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(s), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (e ? this.conn.close(e, r ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const r = await e.unsubscribe();
    return (this.channels.length === 0 && this.disconnect(), r);
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return ((this.channels = []), this.disconnect(), e);
  }
  log(e, r, s) {
    this.logger(e, r, s);
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
  channel(e, r = { config: {} }) {
    const s = `realtime:${e}`,
      i = this.getChannels().find((n) => n.topic === s);
    if (i) return i;
    {
      const n = new Mt(`realtime:${e}`, r, this);
      return (this.channels.push(n), n);
    }
  }
  push(e) {
    const { topic: r, event: s, payload: i, ref: n } = e,
      o = () => {
        this.encode(e, (a) => {
          var c;
          (c = this.conn) === null || c === void 0 || c.send(a);
        });
      };
    (this.log("push", `${r} ${s} (${n})`, i),
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
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
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
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      ((this._wasManualDisconnect = !1),
        (e = this.conn) === null ||
          e === void 0 ||
          e.close(Qf, "heartbeat timeout"),
        setTimeout(() => {
          var r;
          this.isConnected() ||
            (r = this.reconnectTimer) === null ||
            r === void 0 ||
            r.scheduleTimeout();
        }, Xr.HEARTBEAT_TIMEOUT_FALLBACK));
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
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
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
    let r = this.channels.find(
      (s) => s.topic === e && (s._isJoined() || s._isJoining()),
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      r.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((r) => r.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, (r) => {
      if (
        r.topic === "phoenix" &&
        r.event === "phx_reply" &&
        r.ref &&
        r.ref === this.pendingHeartbeatRef
      ) {
        const l = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", l);
        } catch (u) {
          this.log("error", "error in heartbeat callback", u);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: s, event: i, payload: n, ref: o } = r,
        a = o ? `(${o})` : "",
        c = n.status || "";
      (this.log("receive", `${c} ${s} ${i} ${a}`.trim(), n),
        this.channels
          .filter((l) => l._isMember(s))
          .forEach((l) => l._trigger(i, n, o)),
        this._triggerStateCallbacks("message", r));
    });
  }
  _clearTimer(e) {
    var r;
    e === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : e === "reconnect" &&
        ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
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
            (this.channels.forEach((r) => {
              r.updateJoinPayload({ access_token: this.accessTokenValue });
            }),
            (this.sendBuffer = []),
            this.channels.forEach((r) => {
              r._isJoining() && ((r.joinPush.sent = !1), r.joinPush.send());
            })),
            this.flushSendBuffer());
        })
        .catch((r) => {
          (this.log("error", "error waiting for auth on connect", r),
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
      (this.workerRef.onerror = (r) => {
        (this.log("worker", "worker error", r.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
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
    var r;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", e),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (r = this.reconnectTimer) === null ||
        r === void 0 ||
        r.scheduleTimeout(),
      this._triggerStateCallbacks("close", e));
  }
  _onConnError(e) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${e}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", e));
    try {
      this.heartbeatCallback("error");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Re.error));
  }
  _appendParams(e, r) {
    if (Object.keys(r).length === 0) return e;
    const s = e.match(/\?/) ? "&" : "?",
      i = new URLSearchParams(r);
    return `${e}${s}${i}`;
  }
  _workerObjectUrl(e) {
    let r;
    if (e) r = e;
    else {
      const s = new Blob([cm], { type: "application/javascript" });
      r = URL.createObjectURL(s);
    }
    return r;
  }
  _setConnectionState(e, r = !1) {
    ((this._connectionState = e),
      e === "connecting"
        ? (this._wasManualDisconnect = !1)
        : e === "disconnecting" && (this._wasManualDisconnect = r));
  }
  async _performAuth(e = null) {
    let r,
      s = !1;
    if (e) ((r = e), (s = !0));
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (i) {
        (this.log("error", "Error fetching access token from callback", i),
          (r = this.accessTokenValue));
      }
    else r = this.accessTokenValue;
    (s
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((i) => {
          const n = { access_token: r, version: Yf };
          (r && i.updateJoinPayload(n),
            i.joinedOnce &&
              i._isJoined() &&
              i._push(Re.access_token, { access_token: r }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((r) => {
        this.log("error", `Error setting auth in ${e}`, r);
      });
  }
  _triggerStateCallbacks(e, r) {
    try {
      this.stateChangeCallbacks[e].forEach((s) => {
        try {
          s(r);
        } catch (i) {
          this.log("error", `error in ${e} callback`, i);
        }
      });
    } catch (s) {
      this.log("error", `error triggering ${e} callbacks`, s);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new rl(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, Xr.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var r, s, i, n, o, a, c, l, u, d, p, h;
    switch (
      ((this.transport =
        (r = e == null ? void 0 : e.transport) !== null && r !== void 0
          ? r
          : null),
      (this.timeout =
        (s = e == null ? void 0 : e.timeout) !== null && s !== void 0 ? s : Mi),
      (this.heartbeatIntervalMs =
        (i = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        i !== void 0
          ? i
          : Xr.HEARTBEAT_INTERVAL),
      (this.worker =
        (n = e == null ? void 0 : e.worker) !== null && n !== void 0 ? n : !1),
      (this.accessToken =
        (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0
          ? o
          : null),
      (this.heartbeatCallback =
        (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0
          ? a
          : ii),
      (this.vsn =
        (c = e == null ? void 0 : e.vsn) !== null && c !== void 0 ? c : vo),
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
          : (f) => om[f - 1] || am),
      this.vsn)
    ) {
      case Jf:
        ((this.encode =
          (u = e == null ? void 0 : e.encode) !== null && u !== void 0
            ? u
            : (f, m) => m(JSON.stringify(f))),
          (this.decode =
            (d = e == null ? void 0 : e.decode) !== null && d !== void 0
              ? d
              : (f, m) => m(JSON.parse(f))));
        break;
      case tl:
        ((this.encode =
          (p = e == null ? void 0 : e.encode) !== null && p !== void 0
            ? p
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (h = e == null ? void 0 : e.decode) !== null && h !== void 0
              ? h
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
var Pr = class extends Error {
  constructor(t, e) {
    var r;
    (super(t),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((r = e.icebergType) == null ? void 0 : r.includes("CommitState")) ===
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
function um(t, e, r) {
  const s = new URL(e, t);
  if (r)
    for (const [i, n] of Object.entries(r))
      n !== void 0 && s.searchParams.set(i, n);
  return s.toString();
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
function hm(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: r, path: s, query: i, body: n, headers: o }) {
      const a = um(t.baseUrl, s, i),
        c = await dm(t.auth),
        l = await e(a, {
          method: r,
          headers: {
            ...(n ? { "Content-Type": "application/json" } : {}),
            ...c,
            ...o,
          },
          body: n ? JSON.stringify(n) : void 0,
        }),
        u = await l.text(),
        d = (l.headers.get("content-type") || "").includes("application/json"),
        p = d && u ? JSON.parse(u) : u;
      if (!l.ok) {
        const h = d ? p : void 0,
          f = h == null ? void 0 : h.error;
        throw new Pr(
          (f == null ? void 0 : f.message) ??
            `Request failed with status ${l.status}`,
          {
            status: l.status,
            icebergType: f == null ? void 0 : f.type,
            icebergCode: f == null ? void 0 : f.code,
            details: h,
          },
        );
      }
      return { status: l.status, headers: l.headers, data: p };
    },
  };
}
function Zr(t) {
  return t.join("");
}
var pm = class {
  constructor(t, e = "") {
    ((this.client = t), (this.prefix = e));
  }
  async listNamespaces(t) {
    const e = t ? { parent: Zr(t.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((s) => ({ namespace: s }));
  }
  async createNamespace(t, e) {
    const r = {
      namespace: t.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: r,
      })
    ).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Zr(t.namespace)}`,
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Zr(t.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(t) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Zr(t.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof Pr && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (r) {
      if (r instanceof Pr && r.status === 409) return;
      throw r;
    }
  }
};
function Tt(t) {
  return t.join("");
}
var fm = class {
    constructor(t, e = "", r) {
      ((this.client = t), (this.prefix = e), (this.accessDelegation = r));
    }
    async listTables(t) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(t, e) {
      const r = {};
      return (
        this.accessDelegation &&
          (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables`,
            body: e,
            headers: r,
          })
        ).data.metadata
      );
    }
    async updateTable(t, e) {
      const r = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,
        body: e,
      });
      return {
        "metadata-location": r.data["metadata-location"],
        metadata: r.data.metadata,
      };
    }
    async dropTable(t, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,
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
            path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,
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
            path: `${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,
            headers: e,
          }),
          !0
        );
      } catch (r) {
        if (r instanceof Pr && r.status === 404) return !1;
        throw r;
      }
    }
    async createTableIfNotExists(t, e) {
      try {
        return await this.createTable(t, e);
      } catch (r) {
        if (r instanceof Pr && r.status === 409)
          return await this.loadTable({ namespace: t.namespace, name: e.name });
        throw r;
      }
    }
  },
  mm = class {
    constructor(t) {
      var s;
      let e = "v1";
      t.catalogName && (e += `/${t.catalogName}`);
      const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
      ((this.client = hm({ baseUrl: r, auth: t.auth, fetchImpl: t.fetch })),
        (this.accessDelegation =
          (s = t.accessDelegation) == null ? void 0 : s.join(",")),
        (this.namespaceOps = new pm(this.client, e)),
        (this.tableOps = new fm(this.client, e, this.accessDelegation)));
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
  Fs = class extends Error {
    constructor(t, e = "storage", r, s) {
      (super(t),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = r),
        (this.statusCode = s));
    }
  };
function qs(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var gr = class extends Fs {
    constructor(t, e, r, s = "storage") {
      (super(t, s, e, r),
        (this.name =
          s === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = r));
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
  nl = class extends Fs {
    constructor(t, e, r = "storage") {
      (super(t, r),
        (this.name =
          r === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e));
    }
  };
const gm = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  ym = (t) => {
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
  qi = (t) => {
    if (Array.isArray(t)) return t.map((r) => qi(r));
    if (typeof t == "function" || t !== Object(t)) return t;
    const e = {};
    return (
      Object.entries(t).forEach(([r, s]) => {
        const i = r.replace(/([-_][a-z])/gi, (n) =>
          n.toUpperCase().replace(/[-_]/g, ""),
        );
        e[i] = qi(s);
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
function kr(t) {
  "@babel/helpers - typeof";
  return (
    (kr =
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
    kr(t)
  );
}
function _m(t, e) {
  if (kr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e || "default");
    if (kr(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function bm(t) {
  var e = _m(t, "string");
  return kr(e) == "symbol" ? e : e + "";
}
function wm(t, e, r) {
  return (
    (e = bm(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Eo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    (e &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, s));
  }
  return r;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Eo(Object(r), !0).forEach(function (s) {
          wm(t, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Eo(Object(r)).forEach(function (s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return t;
}
const So = (t) => {
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
  Em = async (t, e, r, s) => {
    if (
      t &&
      typeof t == "object" &&
      "status" in t &&
      "ok" in t &&
      typeof t.status == "number"
    ) {
      const i = t,
        n = i.status || 500;
      if (typeof i.json == "function")
        i.json()
          .then((o) => {
            const a =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              n + "";
            e(new gr(So(o), n, a, s));
          })
          .catch(() => {
            if (s === "vectors") {
              const o = n + "";
              e(new gr(i.statusText || `HTTP ${n} error`, n, o, s));
            } else {
              const o = n + "";
              e(new gr(i.statusText || `HTTP ${n} error`, n, o, s));
            }
          });
      else {
        const o = n + "";
        e(new gr(i.statusText || `HTTP ${n} error`, n, o, s));
      }
    } else e(new nl(So(t), t, s));
  },
  Sm = (t, e, r, s) => {
    const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET" || t === "HEAD" || !s
      ? D(D({}, i), r)
      : (ym(s)
          ? ((i.headers = D(
              { "Content-Type": "application/json" },
              e == null ? void 0 : e.headers,
            )),
            (i.body = JSON.stringify(s)))
          : (i.body = s),
        e != null && e.duplex && (i.duplex = e.duplex),
        D(D({}, i), r));
  };
async function hr(t, e, r, s, i, n, o) {
  return new Promise((a, c) => {
    t(r, Sm(e, s, i, n))
      .then((l) => {
        if (!l.ok) throw l;
        if (s != null && s.noResolveJson) return l;
        if (o === "vectors") {
          const u = l.headers.get("content-type");
          if (l.headers.get("content-length") === "0" || l.status === 204)
            return {};
          if (!u || !u.includes("application/json")) return {};
        }
        return l.json();
      })
      .then((l) => a(l))
      .catch((l) => Em(l, c, s, o));
  });
}
function ol(t = "storage") {
  return {
    get: async (e, r, s, i) => hr(e, "GET", r, s, i, void 0, t),
    post: async (e, r, s, i, n) => hr(e, "POST", r, i, n, s, t),
    put: async (e, r, s, i, n) => hr(e, "PUT", r, i, n, s, t),
    head: async (e, r, s, i) =>
      hr(e, "HEAD", r, D(D({}, s), {}, { noResolveJson: !0 }), i, void 0, t),
    remove: async (e, r, s, i, n) => hr(e, "DELETE", r, i, n, s, t),
  };
}
const xm = ol("storage"),
  { get: Ir, post: xe, put: Vi, head: Cm, remove: bn } = xm,
  ge = ol("vectors");
var nr = class {
    constructor(t, e = {}, r, s = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = t),
        (this.headers = e),
        (this.fetch = gm(r)),
        (this.namespace = s));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(t, e) {
      return ((this.headers = D(D({}, this.headers), {}, { [t]: e })), this);
    }
    async handleOperation(t) {
      var e = this;
      try {
        return { data: await t(), error: null };
      } catch (r) {
        if (e.shouldThrowOnError) throw r;
        if (qs(r)) return { data: null, error: r };
        throw r;
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
        if (qs(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
let al;
al = Symbol.toStringTag;
var Rm = class {
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
      if (qs(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const Tm = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  xo = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var Om = class extends nr {
  constructor(t, e = {}, r, s) {
    (super(t, e, s, "storage"), (this.bucketId = r));
  }
  async uploadOrUpdate(t, e, r, s) {
    var i = this;
    return i.handleOperation(async () => {
      let n;
      const o = D(D({}, xo), s);
      let a = D(
        D({}, i.headers),
        t === "POST" && { "x-upsert": String(o.upsert) },
      );
      const c = o.metadata;
      (typeof Blob < "u" && r instanceof Blob
        ? ((n = new FormData()),
          n.append("cacheControl", o.cacheControl),
          c && n.append("metadata", i.encodeMetadata(c)),
          n.append("", r))
        : typeof FormData < "u" && r instanceof FormData
          ? ((n = r),
            n.has("cacheControl") || n.append("cacheControl", o.cacheControl),
            c &&
              !n.has("metadata") &&
              n.append("metadata", i.encodeMetadata(c)))
          : ((n = r),
            (a["cache-control"] = `max-age=${o.cacheControl}`),
            (a["content-type"] = o.contentType),
            c && (a["x-metadata"] = i.toBase64(i.encodeMetadata(c))),
            ((typeof ReadableStream < "u" && n instanceof ReadableStream) ||
              (n &&
                typeof n == "object" &&
                "pipe" in n &&
                typeof n.pipe == "function")) &&
              !o.duplex &&
              (o.duplex = "half")),
        s != null && s.headers && (a = D(D({}, a), s.headers)));
      const l = i._removeEmptyFolders(e),
        u = i._getFinalPath(l),
        d = await (t == "PUT" ? Vi : xe)(
          i.fetch,
          `${i.url}/object/${u}`,
          n,
          D({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {}),
        );
      return { path: l, id: d.Id, fullPath: d.Key };
    });
  }
  async upload(t, e, r) {
    return this.uploadOrUpdate("POST", t, e, r);
  }
  async uploadToSignedUrl(t, e, r, s) {
    var i = this;
    const n = i._removeEmptyFolders(t),
      o = i._getFinalPath(n),
      a = new URL(i.url + `/object/upload/sign/${o}`);
    return (
      a.searchParams.set("token", e),
      i.handleOperation(async () => {
        let c;
        const l = D({ upsert: xo.upsert }, s),
          u = D(D({}, i.headers), { "x-upsert": String(l.upsert) });
        return (
          typeof Blob < "u" && r instanceof Blob
            ? ((c = new FormData()),
              c.append("cacheControl", l.cacheControl),
              c.append("", r))
            : typeof FormData < "u" && r instanceof FormData
              ? ((c = r), c.append("cacheControl", l.cacheControl))
              : ((c = r),
                (u["cache-control"] = `max-age=${l.cacheControl}`),
                (u["content-type"] = l.contentType)),
          {
            path: n,
            fullPath: (await Vi(i.fetch, a.toString(), c, { headers: u })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(t);
      const i = D({}, r.headers);
      e != null && e.upsert && (i["x-upsert"] = "true");
      const n = await xe(
          r.fetch,
          `${r.url}/object/upload/sign/${s}`,
          {},
          { headers: i },
        ),
        o = new URL(r.url + n.url),
        a = o.searchParams.get("token");
      if (!a) throw new Fs("No token returned by API");
      return { signedUrl: o.toString(), path: t, token: a };
    });
  }
  async update(t, e, r) {
    return this.uploadOrUpdate("PUT", t, e, r);
  }
  async move(t, e, r) {
    var s = this;
    return s.handleOperation(
      async () =>
        await xe(
          s.fetch,
          `${s.url}/object/move`,
          {
            bucketId: s.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: s.headers },
        ),
    );
  }
  async copy(t, e, r) {
    var s = this;
    return s.handleOperation(async () => ({
      path: (
        await xe(
          s.fetch,
          `${s.url}/object/copy`,
          {
            bucketId: s.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: s.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(t, e, r) {
    var s = this;
    return s.handleOperation(async () => {
      let i = s._getFinalPath(t);
      const n =
        typeof (r == null ? void 0 : r.transform) == "object" &&
        r.transform !== null &&
        Object.keys(r.transform).length > 0;
      let o = await xe(
        s.fetch,
        `${s.url}/object/sign/${i}`,
        D({ expiresIn: e }, n ? { transform: r.transform } : {}),
        { headers: s.headers },
      );
      const a =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "",
        c =
          n && o.signedURL.includes("/object/sign/")
            ? o.signedURL.replace("/object/sign/", "/render/image/sign/")
            : o.signedURL;
      return { signedUrl: encodeURI(`${s.url}${c}${a}`) };
    });
  }
  async createSignedUrls(t, e, r) {
    var s = this;
    return s.handleOperation(async () => {
      const i = await xe(
          s.fetch,
          `${s.url}/object/sign/${s.bucketId}`,
          { expiresIn: e, paths: t },
          { headers: s.headers },
        ),
        n =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
      return i.map((o) =>
        D(
          D({}, o),
          {},
          {
            signedUrl: o.signedURL
              ? encodeURI(`${s.url}${o.signedURL}${n}`)
              : null,
          },
        ),
      );
    });
  }
  download(t, e, r) {
    const s =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      i = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      ),
      n = i ? `?${i}` : "",
      o = this._getFinalPath(t),
      a = () =>
        Ir(
          this.fetch,
          `${this.url}/${s}/${o}${n}`,
          { headers: this.headers, noResolveJson: !0 },
          r,
        );
    return new Rm(a, this.shouldThrowOnError);
  }
  async info(t) {
    var e = this;
    const r = e._getFinalPath(t);
    return e.handleOperation(async () =>
      qi(
        await Ir(e.fetch, `${e.url}/object/info/${r}`, { headers: e.headers }),
      ),
    );
  }
  async exists(t) {
    var e = this;
    const r = e._getFinalPath(t);
    try {
      return (
        await Cm(e.fetch, `${e.url}/object/${r}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (i) {
      if (e.shouldThrowOnError) throw i;
      if (qs(i)) {
        var s;
        const n =
          i instanceof gr
            ? i.status
            : i instanceof nl
              ? (s = i.originalError) === null || s === void 0
                ? void 0
                : s.status
              : void 0;
        if (n !== void 0 && [400, 404].includes(n))
          return { data: !1, error: i };
      }
      throw i;
    }
  }
  getPublicUrl(t, e) {
    const r = this._getFinalPath(t),
      s = [],
      i =
        e != null && e.download
          ? `download=${e.download === !0 ? "" : e.download}`
          : "";
    i !== "" && s.push(i);
    const n =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image"
          : "object",
      o = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      );
    o !== "" && s.push(o);
    let a = s.join("&");
    return (
      a !== "" && (a = `?${a}`),
      { data: { publicUrl: encodeURI(`${this.url}/${n}/public/${r}${a}`) } }
    );
  }
  async remove(t) {
    var e = this;
    return e.handleOperation(
      async () =>
        await bn(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: t },
          { headers: e.headers },
        ),
    );
  }
  async list(t, e, r) {
    var s = this;
    return s.handleOperation(async () => {
      const i = D(D(D({}, Tm), e), {}, { prefix: t || "" });
      return await xe(
        s.fetch,
        `${s.url}/object/list/${s.bucketId}`,
        i,
        { headers: s.headers },
        r,
      );
    });
  }
  async listV2(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      const s = D({}, t);
      return await xe(
        r.fetch,
        `${r.url}/object/list-v2/${r.bucketId}`,
        s,
        { headers: r.headers },
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
const Pm = "2.99.2",
  qr = { "X-Client-Info": `storage-js/${Pm}` };
var km = class extends nr {
    constructor(t, e = {}, r, s) {
      const i = new URL(t);
      s != null &&
        s.useNewHostname &&
        /supabase\.(co|in|red)$/.test(i.hostname) &&
        !i.hostname.includes("storage.supabase.") &&
        (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
      const n = i.href.replace(/\/$/, ""),
        o = D(D({}, qr), e);
      super(n, o, r, "storage");
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const r = e.listBucketOptionsToQueryString(t);
        return await Ir(e.fetch, `${e.url}/bucket${r}`, { headers: e.headers });
      });
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ir(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }),
      );
    }
    async createBucket(t, e = { public: !1 }) {
      var r = this;
      return r.handleOperation(
        async () =>
          await xe(
            r.fetch,
            `${r.url}/bucket`,
            {
              id: t,
              name: t,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
      );
    }
    async updateBucket(t, e) {
      var r = this;
      return r.handleOperation(
        async () =>
          await Vi(
            r.fetch,
            `${r.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
      );
    }
    async emptyBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await xe(
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
          await bn(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
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
  Im = class extends nr {
    constructor(t, e = {}, r) {
      const s = t.replace(/\/$/, ""),
        i = D(D({}, qr), e);
      super(s, i, r, "storage");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await xe(
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
        const r = new URLSearchParams();
        ((t == null ? void 0 : t.limit) !== void 0 &&
          r.set("limit", t.limit.toString()),
          (t == null ? void 0 : t.offset) !== void 0 &&
            r.set("offset", t.offset.toString()),
          t != null && t.sortColumn && r.set("sortColumn", t.sortColumn),
          t != null && t.sortOrder && r.set("sortOrder", t.sortOrder),
          t != null && t.search && r.set("search", t.search));
        const s = r.toString(),
          i = s ? `${e.url}/bucket?${s}` : `${e.url}/bucket`;
        return await Ir(e.fetch, i, { headers: e.headers });
      });
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await bn(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
      );
    }
    from(t) {
      var e = this;
      if (!vm(t))
        throw new Fs(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const r = new mm({
          baseUrl: this.url,
          catalogName: t,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        s = this.shouldThrowOnError;
      return new Proxy(r, {
        get(i, n) {
          const o = i[n];
          return typeof o != "function"
            ? o
            : async (...a) => {
                try {
                  return { data: await o.apply(i, a), error: null };
                } catch (c) {
                  if (s) throw c;
                  return { data: null, error: c };
                }
              };
        },
      });
    }
  },
  Lm = class extends nr {
    constructor(t, e = {}, r) {
      const s = t.replace(/\/$/, ""),
        i = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
      super(s, i, r, "vectors");
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
      var r = this;
      return r.handleOperation(
        async () =>
          await ge.post(
            r.fetch,
            `${r.url}/GetIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: r.headers },
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
      var r = this;
      return r.handleOperation(
        async () =>
          (await ge.post(
            r.fetch,
            `${r.url}/DeleteIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: r.headers },
          )) || {},
      );
    }
  },
  jm = class extends nr {
    constructor(t, e = {}, r) {
      const s = t.replace(/\/$/, ""),
        i = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
      super(s, i, r, "vectors");
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
  Nm = class extends nr {
    constructor(t, e = {}, r) {
      const s = t.replace(/\/$/, ""),
        i = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
      super(s, i, r, "vectors");
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
  Dm = class extends Nm {
    constructor(t, e = {}) {
      super(t, e.headers || {}, e.fetch);
    }
    from(t) {
      return new $m(this.url, this.headers, t, this.fetch);
    }
    async createBucket(t) {
      var e = () => super.createBucket,
        r = this;
      return e().call(r, t);
    }
    async getBucket(t) {
      var e = () => super.getBucket,
        r = this;
      return e().call(r, t);
    }
    async listBuckets(t = {}) {
      var e = () => super.listBuckets,
        r = this;
      return e().call(r, t);
    }
    async deleteBucket(t) {
      var e = () => super.deleteBucket,
        r = this;
      return e().call(r, t);
    }
  },
  $m = class extends Lm {
    constructor(t, e, r, s) {
      (super(t, e, s), (this.vectorBucketName = r));
    }
    async createIndex(t) {
      var e = () => super.createIndex,
        r = this;
      return e().call(
        r,
        D(D({}, t), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async listIndexes(t = {}) {
      var e = () => super.listIndexes,
        r = this;
      return e().call(
        r,
        D(D({}, t), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async getIndex(t) {
      var e = () => super.getIndex,
        r = this;
      return e().call(r, r.vectorBucketName, t);
    }
    async deleteIndex(t) {
      var e = () => super.deleteIndex,
        r = this;
      return e().call(r, r.vectorBucketName, t);
    }
    index(t) {
      return new Mm(
        this.url,
        this.headers,
        this.vectorBucketName,
        t,
        this.fetch,
      );
    }
  },
  Mm = class extends jm {
    constructor(t, e, r, s, i) {
      (super(t, e, i), (this.vectorBucketName = r), (this.indexName = s));
    }
    async putVectors(t) {
      var e = () => super.putVectors,
        r = this;
      return e().call(
        r,
        D(
          D({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async getVectors(t) {
      var e = () => super.getVectors,
        r = this;
      return e().call(
        r,
        D(
          D({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async listVectors(t = {}) {
      var e = () => super.listVectors,
        r = this;
      return e().call(
        r,
        D(
          D({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async queryVectors(t) {
      var e = () => super.queryVectors,
        r = this;
      return e().call(
        r,
        D(
          D({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async deleteVectors(t) {
      var e = () => super.deleteVectors,
        r = this;
      return e().call(
        r,
        D(
          D({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
  },
  Um = class extends km {
    constructor(t, e = {}, r, s) {
      super(t, e, r, s);
    }
    from(t) {
      return new Om(this.url, this.headers, t, this.fetch);
    }
    get vectors() {
      return new Dm(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new Im(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const cl = "2.99.2",
  Dt = 30 * 1e3,
  zi = 3,
  ni = zi * Dt,
  Fm = "http://localhost:9999",
  qm = "supabase.auth.token",
  Vm = { "X-Client-Info": `gotrue-js/${cl}` },
  Bi = "X-Supabase-Api-Version",
  ll = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  zm = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Bm = 10 * 60 * 1e3;
class Lr extends Error {
  constructor(e, r, s) {
    (super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = s));
  }
}
function k(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Hm extends Lr {
  constructor(e, r, s) {
    (super(e, r, s),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = s));
  }
}
function Gm(t) {
  return k(t) && t.name === "AuthApiError";
}
class gt extends Lr {
  constructor(e, r) {
    (super(e), (this.name = "AuthUnknownError"), (this.originalError = r));
  }
}
class Ye extends Lr {
  constructor(e, r, s, i) {
    (super(e, s, i), (this.name = r), (this.status = s));
  }
}
class pe extends Ye {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function oi(t) {
  return k(t) && t.name === "AuthSessionMissingError";
}
class Ot extends Ye {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class es extends Ye {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ts extends Ye {
  constructor(e, r = null) {
    (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r));
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
function Wm(t) {
  return k(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Co extends Ye {
  constructor(e, r = null) {
    (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r));
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
class Km extends Ye {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Hi extends Ye {
  constructor(e, r) {
    super(e, "AuthRetryableFetchError", r, void 0);
  }
}
function ai(t) {
  return k(t) && t.name === "AuthRetryableFetchError";
}
class Ao extends Ye {
  constructor(e, r, s) {
    (super(e, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = s));
  }
}
class Gi extends Ye {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const _s =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  Ro = ` 	
\r=`.split(""),
  Ym = (() => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1) t[e] = -1;
    for (let e = 0; e < Ro.length; e += 1) t[Ro[e].charCodeAt(0)] = -2;
    for (let e = 0; e < _s.length; e += 1) t[_s[e].charCodeAt(0)] = e;
    return t;
  })();
function To(t, e, r) {
  if (t !== null)
    for (e.queue = (e.queue << 8) | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const s = (e.queue >> (e.queuedBits - 6)) & 63;
      (r(_s[s]), (e.queuedBits -= 6));
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;
    ) {
      const s = (e.queue >> (e.queuedBits - 6)) & 63;
      (r(_s[s]), (e.queuedBits -= 6));
    }
}
function ul(t, e, r) {
  const s = Ym[t];
  if (s > -1)
    for (e.queue = (e.queue << 6) | s, e.queuedBits += 6; e.queuedBits >= 8; )
      (r((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
  else {
    if (s === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Oo(t) {
  const e = [],
    r = (o) => {
      e.push(String.fromCodePoint(o));
    },
    s = { utf8seq: 0, codepoint: 0 },
    i = { queue: 0, queuedBits: 0 },
    n = (o) => {
      Xm(o, s, r);
    };
  for (let o = 0; o < t.length; o += 1) ul(t.charCodeAt(o), i, n);
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
function Qm(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    let s = t.charCodeAt(r);
    if (s > 55295 && s <= 56319) {
      const i = ((s - 55296) * 1024) & 65535;
      ((s = (((t.charCodeAt(r + 1) - 56320) & 65535) | i) + 65536), (r += 1));
    }
    Jm(s, e);
  }
}
function Xm(t, e, r) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      r(t);
      return;
    }
    for (let s = 1; s < 6; s += 1)
      if (!((t >> (7 - s)) & 1)) {
        e.utf8seq = s;
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
      e.utf8seq === 0 && r(e.codepoint));
  }
}
function zt(t) {
  const e = [],
    r = { queue: 0, queuedBits: 0 },
    s = (i) => {
      e.push(i);
    };
  for (let i = 0; i < t.length; i += 1) ul(t.charCodeAt(i), r, s);
  return new Uint8Array(e);
}
function Zm(t) {
  const e = [];
  return (Qm(t, (r) => e.push(r)), new Uint8Array(e));
}
function yt(t) {
  const e = [],
    r = { queue: 0, queuedBits: 0 },
    s = (i) => {
      e.push(i);
    };
  return (t.forEach((i) => To(i, r, s)), To(null, r, s), e.join(""));
}
function eg(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function tg() {
  return Symbol("auth-callback");
}
const ie = () => typeof window < "u" && typeof document < "u",
  dt = { tested: !1, writable: !1 },
  dl = () => {
    if (!ie()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (dt.tested) return dt.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        (dt.tested = !0),
        (dt.writable = !0));
    } catch {
      ((dt.tested = !0), (dt.writable = !1));
    }
    return dt.writable;
  };
function rg(t) {
  const e = {},
    r = new URL(t);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((i, n) => {
        e[n] = i;
      });
    } catch {}
  return (
    r.searchParams.forEach((s, i) => {
      e[i] = s;
    }),
    e
  );
}
const hl = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  sg = (t) =>
    typeof t == "object" &&
    t !== null &&
    "status" in t &&
    "ok" in t &&
    "json" in t &&
    typeof t.json == "function",
  $t = async (t, e, r) => {
    await t.setItem(e, JSON.stringify(r));
  },
  ht = async (t, e) => {
    const r = await t.getItem(e);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  se = async (t, e) => {
    await t.removeItem(e);
  };
class Vs {
  constructor() {
    this.promise = new Vs.promiseConstructor((e, r) => {
      ((this.resolve = e), (this.reject = r));
    });
  }
}
Vs.promiseConstructor = Promise;
function rs(t) {
  const e = t.split(".");
  if (e.length !== 3) throw new Gi("Invalid JWT structure");
  for (let s = 0; s < e.length; s++)
    if (!zm.test(e[s])) throw new Gi("JWT not in base64url format");
  return {
    header: JSON.parse(Oo(e[0])),
    payload: JSON.parse(Oo(e[1])),
    signature: zt(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function ig(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function ng(t, e) {
  return new Promise((s, i) => {
    (async () => {
      for (let n = 0; n < 1 / 0; n++)
        try {
          const o = await t(n);
          if (!e(n, null, o)) {
            s(o);
            return;
          }
        } catch (o) {
          if (!e(n, o)) {
            i(o);
            return;
          }
        }
    })();
  });
}
function og(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function ag() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      s = r.length;
    let i = "";
    for (let n = 0; n < 56; n++) i += r.charAt(Math.floor(Math.random() * s));
    return i;
  }
  return (crypto.getRandomValues(e), Array.from(e, og).join(""));
}
async function cg(t) {
  const r = new TextEncoder().encode(t),
    s = await crypto.subtle.digest("SHA-256", r),
    i = new Uint8Array(s);
  return Array.from(i)
    .map((n) => String.fromCharCode(n))
    .join("");
}
async function lg(t) {
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
  const r = await cg(t);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Pt(t, e, r = !1) {
  const s = ag();
  let i = s;
  (r && (i += "/PASSWORD_RECOVERY"), await $t(t, `${e}-code-verifier`, i));
  const n = await lg(s);
  return [n, s === n ? "plain" : "s256"];
}
const ug = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function dg(t) {
  const e = t.headers.get(Bi);
  if (!e || !e.match(ug)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function hg(t) {
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
const fg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function kt(t) {
  if (!fg.test(t))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function ci() {
  const t = {};
  return new Proxy(t, {
    get: (e, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const s = r.toString();
        if (
          s === "Symbol(Symbol.toPrimitive)" ||
          s === "Symbol(Symbol.toStringTag)" ||
          s === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (e, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (e, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function mg(t, e) {
  return new Proxy(t, {
    get: (r, s, i) => {
      if (s === "__isInsecureUserWarningProxy") return !0;
      if (typeof s == "symbol") {
        const n = s.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)" ||
          n === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(r, s, i);
      }
      return (
        !e.value &&
          typeof s == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (e.value = !0)),
        Reflect.get(r, s, i)
      );
    },
  });
}
function Po(t) {
  return JSON.parse(JSON.stringify(t));
}
const ft = (t) =>
    t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
  gg = [502, 503, 504];
async function ko(t) {
  var e;
  if (!sg(t)) throw new Hi(ft(t), 0);
  if (gg.includes(t.status)) throw new Hi(ft(t), t.status);
  let r;
  try {
    r = await t.json();
  } catch (n) {
    throw new gt(ft(n), n);
  }
  let s;
  const i = dg(t);
  if (
    (i &&
    i.getTime() >= ll["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (s = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (s = r.error_code),
    s)
  ) {
    if (s === "weak_password")
      throw new Ao(
        ft(r),
        t.status,
        ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          [],
      );
    if (s === "session_not_found") throw new pe();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((n, o) => n && typeof o == "string", !0)
  )
    throw new Ao(ft(r), t.status, r.weak_password.reasons);
  throw new Hm(ft(r), t.status || 500, s);
}
const yg = (t, e, r, s) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET"
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers,
      )),
      (i.body = JSON.stringify(s)),
      Object.assign(Object.assign({}, i), r));
};
async function j(t, e, r, s) {
  var i;
  const n = Object.assign({}, s == null ? void 0 : s.headers);
  (n[Bi] || (n[Bi] = ll["2024-01-01"].name),
    s != null && s.jwt && (n.Authorization = `Bearer ${s.jwt}`));
  const o =
    (i = s == null ? void 0 : s.query) !== null && i !== void 0 ? i : {};
  s != null && s.redirectTo && (o.redirect_to = s.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    c = await vg(
      t,
      e,
      r + a,
      { headers: n, noResolveJson: s == null ? void 0 : s.noResolveJson },
      {},
      s == null ? void 0 : s.body,
    );
  return s != null && s.xform
    ? s == null
      ? void 0
      : s.xform(c)
    : { data: Object.assign({}, c), error: null };
}
async function vg(t, e, r, s, i, n) {
  const o = yg(e, s, i, n);
  let a;
  try {
    a = await t(r, Object.assign({}, o));
  } catch (c) {
    throw (console.error(c), new Hi(ft(c), 0));
  }
  if ((a.ok || (await ko(a)), s != null && s.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (c) {
    await ko(c);
  }
}
function Ee(t) {
  var e;
  let r = null;
  wg(t) &&
    ((r = Object.assign({}, t)),
    t.expires_at || (r.expires_at = eg(t.expires_in)));
  const s = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: r, user: s }, error: null };
}
function Io(t) {
  const e = Ee(t);
  return (
    !e.error &&
      t.weak_password &&
      typeof t.weak_password == "object" &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.message &&
      typeof t.weak_password.message == "string" &&
      t.weak_password.reasons.reduce((r, s) => r && typeof s == "string", !0) &&
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
function _g(t) {
  return { data: t, error: null };
}
function bg(t) {
  const {
      action_link: e,
      email_otp: r,
      hashed_token: s,
      redirect_to: i,
      verification_type: n,
    } = t,
    o = Us(t, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: e,
      email_otp: r,
      hashed_token: s,
      redirect_to: i,
      verification_type: n,
    },
    c = Object.assign({}, o);
  return { data: { properties: a, user: c }, error: null };
}
function Lo(t) {
  return t;
}
function wg(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const li = ["global", "local", "others"];
class Eg {
  constructor({ url: e = "", headers: r = {}, fetch: s }) {
    ((this.url = e),
      (this.headers = r),
      (this.fetch = hl(s)),
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
  async signOut(e, r = li[0]) {
    if (li.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${li.join(", ")}`,
      );
    try {
      return (
        await j(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (s) {
      if (k(s)) return { data: null, error: s };
      throw s;
    }
  }
  async inviteUserByEmail(e, r = {}) {
    try {
      return await j(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: et,
      });
    } catch (s) {
      if (k(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async generateLink(e) {
    try {
      const { options: r } = e,
        s = Us(e, ["options"]),
        i = Object.assign(Object.assign({}, s), r);
      return (
        "newEmail" in s &&
          ((i.new_email = s == null ? void 0 : s.newEmail), delete i.newEmail),
        await j(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: bg,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (k(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(e) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: et,
      });
    } catch (r) {
      if (k(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(e) {
    var r, s, i, n, o, a, c;
    try {
      const l = { nextPage: null, lastPage: 0, total: 0 },
        u = await j(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (s =
                (r = e == null ? void 0 : e.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && s !== void 0
                ? s
                : "",
            per_page:
              (n =
                (i = e == null ? void 0 : e.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && n !== void 0
                ? n
                : "",
          },
          xform: Lo,
        });
      if (u.error) throw u.error;
      const d = await u.json(),
        p =
          (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (c =
            (a = u.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        h.length > 0 &&
          (h.forEach((f) => {
            const m = parseInt(f.split(";")[0].split("=")[1].substring(0, 1)),
              g = JSON.parse(f.split(";")[1].split("=")[1]);
            l[`${g}Page`] = m;
          }),
          (l.total = parseInt(p))),
        { data: Object.assign(Object.assign({}, d), l), error: null }
      );
    } catch (l) {
      if (k(l)) return { data: { users: [] }, error: l };
      throw l;
    }
  }
  async getUserById(e) {
    kt(e);
    try {
      return await j(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: et,
      });
    } catch (r) {
      if (k(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(e, r) {
    kt(e);
    try {
      return await j(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: r,
        headers: this.headers,
        xform: et,
      });
    } catch (s) {
      if (k(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async deleteUser(e, r = !1) {
    kt(e);
    try {
      return await j(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: et,
      });
    } catch (s) {
      if (k(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(e) {
    kt(e.userId);
    try {
      const { data: r, error: s } = await j(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        },
      );
      return { data: r, error: s };
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(e) {
    (kt(e.userId), kt(e.id));
    try {
      return {
        data: await j(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listOAuthClients(e) {
    var r, s, i, n, o, a, c;
    try {
      const l = { nextPage: null, lastPage: 0, total: 0 },
        u = await j(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (s =
                (r = e == null ? void 0 : e.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && s !== void 0
                ? s
                : "",
            per_page:
              (n =
                (i = e == null ? void 0 : e.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && n !== void 0
                ? n
                : "",
          },
          xform: Lo,
        });
      if (u.error) throw u.error;
      const d = await u.json(),
        p =
          (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (c =
            (a = u.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        h.length > 0 &&
          (h.forEach((f) => {
            const m = parseInt(f.split(";")[0].split("=")[1].substring(0, 1)),
              g = JSON.parse(f.split(";")[1].split("=")[1]);
            l[`${g}Page`] = m;
          }),
          (l.total = parseInt(p))),
        { data: Object.assign(Object.assign({}, d), l), error: null }
      );
    } catch (l) {
      if (k(l)) return { data: { clients: [] }, error: l };
      throw l;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await j(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateOAuthClient(e, r) {
    try {
      return await j(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: r,
          headers: this.headers,
          xform: (s) => ({ data: s, error: null }),
        },
      );
    } catch (s) {
      if (k(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await j(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await j(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listCustomProviders(e) {
    try {
      const r = {};
      return (
        e != null && e.type && (r.type = e.type),
        await j(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: r,
          xform: (s) => {
            var i;
            return {
              data: {
                providers:
                  (i = s == null ? void 0 : s.providers) !== null &&
                  i !== void 0
                    ? i
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (r) {
      if (k(r)) return { data: { providers: [] }, error: r };
      throw r;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await j(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await j(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${e}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateCustomProvider(e, r) {
    try {
      return await j(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${e}`,
        {
          body: r,
          headers: this.headers,
          xform: (s) => ({ data: s, error: null }),
        },
      );
    } catch (s) {
      if (k(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      return (
        await j(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${e}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (r) {
      if (k(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function jo(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, r) => {
      t[e] = r;
    },
    removeItem: (e) => {
      delete t[e];
    },
  };
}
const Ve = {
  debug: !!(
    globalThis &&
    dl() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class pl extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
}
class Sg extends pl {}
async function xg(t, e, r) {
  Ve.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const s = new globalThis.AbortController();
  (e > 0 &&
    setTimeout(() => {
      (s.abort(),
        Ve.debug &&
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
        : { mode: "exclusive", signal: s.signal },
      async (i) => {
        if (i) {
          Ve.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              t,
              i.name,
            );
          try {
            return await r();
          } finally {
            Ve.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                t,
                i.name,
              );
          }
        } else {
          if (e === 0)
            throw (
              Ve.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  t,
                ),
              new Sg(
                `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`,
              )
            );
          if (Ve.debug)
            try {
              const n = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(n, null, "  "),
              );
            } catch (n) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                n,
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
            ),
            await r()
          );
        }
      },
    );
  } catch (i) {
    if ((i == null ? void 0 : i.name) === "AbortError" && e > 0)
      return (
        Ve.debug &&
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
            async (n) => {
              if (n) {
                Ve.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                    t,
                    n.name,
                  );
                try {
                  return await r();
                } finally {
                  Ve.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released (stolen)",
                      t,
                      n.name,
                    );
                }
              } else
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                  ),
                  await r()
                );
            },
          ),
        )
      );
    throw i;
  }
}
function Cg() {
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
function fl(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function Ag(t) {
  return parseInt(t, 16);
}
function Rg(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (s) => s.toString(16).padStart(2, "0")).join("");
}
function Tg(t) {
  var e;
  const {
    chainId: r,
    domain: s,
    expirationTime: i,
    issuedAt: n = new Date(),
    nonce: o,
    notBefore: a,
    requestId: c,
    resources: l,
    scheme: u,
    uri: d,
    version: p,
  } = t;
  {
    if (!Number.isInteger(r))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`,
      );
    if (!s)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`,
      );
    if (!d)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (p !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${p}`,
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
  const h = fl(t.address),
    f = u ? `${u}://${s}` : s,
    m = t.statement
      ? `${t.statement}
`
      : "",
    g = `${f} wants you to sign in with your Ethereum account:
${h}

${m}`;
  let _ = `URI: ${d}
Version: ${p}
Chain ID: ${r}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${n.toISOString()}`;
  if (
    (i &&
      (_ += `
Expiration Time: ${i.toISOString()}`),
    a &&
      (_ += `
Not Before: ${a.toISOString()}`),
    c &&
      (_ += `
Request ID: ${c}`),
    l)
  ) {
    let b = `
Resources:`;
    for (const w of l) {
      if (!w || typeof w != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`,
        );
      b += `
- ${w}`;
    }
    _ += b;
  }
  return `${g}
${_}`;
}
class ee extends Error {
  constructor({ message: e, code: r, cause: s, name: i }) {
    var n;
    (super(e, { cause: s }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (n = i ?? (s instanceof Error ? s.name : void 0)) !== null &&
        n !== void 0
          ? n
          : "Unknown Error"),
      (this.code = r));
  }
}
class bs extends ee {
  constructor(e, r) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = r));
  }
}
function Og({ error: t, options: e }) {
  var r, s, i;
  const { publicKey: n } = e;
  if (!n) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ee({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else if (t.name === "ConstraintError") {
    if (
      ((r = n.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.requireResidentKey) === !0
    )
      return new ee({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t,
      });
    if (
      e.mediation === "conditional" &&
      ((s = n.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new ee({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t,
      });
    if (
      ((i = n.authenticatorSelection) === null || i === void 0
        ? void 0
        : i.userVerification) === "required"
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
      return n.pubKeyCredParams.filter((a) => a.type === "public-key")
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
      if (ml(o)) {
        if (n.rp.id !== o)
          return new ee({
            message: `The RP ID "${n.rp.id}" is invalid for this domain`,
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
      if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64)
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
function Pg({ error: t, options: e }) {
  const { publicKey: r } = e;
  if (!r) throw Error("options was missing required publicKey property");
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
      const s = window.location.hostname;
      if (ml(s)) {
        if (r.rpId !== s)
          return new ee({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
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
class kg {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      ((r.name = "AbortError"), this.controller.abort(r));
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
const Ig = new kg();
function Lg(t) {
  if (!t) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  const { challenge: e, user: r, excludeCredentials: s } = t,
    i = Us(t, ["challenge", "user", "excludeCredentials"]),
    n = zt(e).buffer,
    o = Object.assign(Object.assign({}, r), { id: zt(r.id).buffer }),
    a = Object.assign(Object.assign({}, i), { challenge: n, user: o });
  if (s && s.length > 0) {
    a.excludeCredentials = new Array(s.length);
    for (let c = 0; c < s.length; c++) {
      const l = s[c];
      a.excludeCredentials[c] = Object.assign(Object.assign({}, l), {
        id: zt(l.id).buffer,
        type: l.type || "public-key",
        transports: l.transports,
      });
    }
  }
  return a;
}
function jg(t) {
  if (!t) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: r } = t,
    s = Us(t, ["challenge", "allowCredentials"]),
    i = zt(e).buffer,
    n = Object.assign(Object.assign({}, s), { challenge: i });
  if (r && r.length > 0) {
    n.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      n.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: zt(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return n;
}
function Ng(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const r = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: yt(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: yt(new Uint8Array(t.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    authenticatorAttachment:
      (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function Dg(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const r = t,
    s = t.getClientExtensionResults(),
    i = t.response;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      authenticatorData: yt(new Uint8Array(i.authenticatorData)),
      clientDataJSON: yt(new Uint8Array(i.clientDataJSON)),
      signature: yt(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? yt(new Uint8Array(i.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: s,
    authenticatorAttachment:
      (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function ml(t) {
  return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t);
}
function No() {
  var t, e;
  return !!(
    ie() &&
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
async function $g(t) {
  try {
    const e = await navigator.credentials.create(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new bs("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new bs("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Og({ error: e, options: t }) };
  }
}
async function Mg(t) {
  try {
    const e = await navigator.credentials.get(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new bs("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new bs("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Pg({ error: e, options: t }) };
  }
}
const Ug = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  Fg = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function ws(...t) {
  const e = (i) => i !== null && typeof i == "object" && !Array.isArray(i),
    r = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i),
    s = {};
  for (const i of t)
    if (i)
      for (const n in i) {
        const o = i[n];
        if (o !== void 0)
          if (Array.isArray(o)) s[n] = o;
          else if (r(o)) s[n] = o;
          else if (e(o)) {
            const a = s[n];
            e(a) ? (s[n] = ws(a, o)) : (s[n] = ws(o));
          } else s[n] = o;
      }
  return s;
}
function qg(t, e) {
  return ws(Ug, t, e || {});
}
function Vg(t, e) {
  return ws(Fg, t, e || {});
}
class zg {
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
    { factorId: e, webauthn: r, friendlyName: s, signal: i },
    n,
  ) {
    var o;
    try {
      const { data: a, error: c } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: r,
      });
      if (!a) return { data: null, error: c };
      const l = i ?? Ig.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: u } = a.webauthn.credential_options.publicKey;
        if (!u.name) {
          const d = s;
          if (d) u.name = `${u.id}:${d}`;
          else {
            const h = (await this.client.getUser()).data.user,
              f =
                ((o = h == null ? void 0 : h.user_metadata) === null ||
                o === void 0
                  ? void 0
                  : o.name) ||
                (h == null ? void 0 : h.email) ||
                (h == null ? void 0 : h.id) ||
                "User";
            u.name = `${u.id}:${f}`;
          }
        }
        u.displayName || (u.displayName = u.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const u = qg(
              a.webauthn.credential_options.publicKey,
              n == null ? void 0 : n.create,
            ),
            { data: d, error: p } = await $g({ publicKey: u, signal: l });
          return d
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: d },
                },
                error: null,
              }
            : { data: null, error: p };
        }
        case "request": {
          const u = Vg(
              a.webauthn.credential_options.publicKey,
              n == null ? void 0 : n.request,
            ),
            { data: d, error: p } = await Mg(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: u,
                signal: l,
              }),
            );
          return d
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: d },
                },
                error: null,
              }
            : { data: null, error: p };
        }
      }
    } catch (a) {
      return k(a)
        ? { data: null, error: a }
        : { data: null, error: new gt("Unexpected error in challenge", a) };
    }
  }
  async _verify({ challengeId: e, factorId: r, webauthn: s }) {
    return this.client.mfa.verify({ factorId: r, challengeId: e, webauthn: s });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: s = typeof window < "u" ? [window.location.origin] : void 0,
        signal: i,
      } = {},
    },
    n,
  ) {
    if (!r)
      return {
        data: null,
        error: new Lr("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!No())
        return {
          data: null,
          error: new gt("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this.challenge(
        { factorId: e, webauthn: { rpId: r, rpOrigins: s }, signal: i },
        { request: n },
      );
      if (!o) return { data: null, error: a };
      const { webauthn: c } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: c.type,
          rpId: r,
          rpOrigins: s,
          credential_response: c.credential_response,
        },
      });
    } catch (o) {
      return k(o)
        ? { data: null, error: o }
        : { data: null, error: new gt("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: s = typeof window < "u" ? [window.location.origin] : void 0,
        signal: i,
      } = {},
    },
    n,
  ) {
    if (!r)
      return {
        data: null,
        error: new Lr("rpId is required for WebAuthn registration"),
      };
    try {
      if (!No())
        return {
          data: null,
          error: new gt("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this._enroll({ friendlyName: e });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((u) => {
              var d;
              return (d = u.data) === null || d === void 0
                ? void 0
                : d.all.find(
                    (p) =>
                      p.factor_type === "webauthn" &&
                      p.friendly_name === e &&
                      p.status !== "unverified",
                  );
            })
            .then((u) =>
              u
                ? this.client.mfa.unenroll({
                    factorId: u == null ? void 0 : u.id,
                  })
                : void 0,
            ),
          { data: null, error: a }
        );
      const { data: c, error: l } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: r, rpOrigins: s },
          signal: i,
        },
        { create: n },
      );
      return c
        ? this._verify({
            factorId: o.id,
            challengeId: c.challengeId,
            webauthn: {
              rpId: r,
              rpOrigins: s,
              type: c.webauthn.type,
              credential_response: c.webauthn.credential_response,
            },
          })
        : { data: null, error: l };
    } catch (o) {
      return k(o)
        ? { data: null, error: o }
        : { data: null, error: new gt("Unexpected error in register", o) };
    }
  }
}
Cg();
const Bg = {
  url: Fm,
  storageKey: qm,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Vm,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
};
async function Do(t, e, r) {
  return await r();
}
const It = {};
class jr {
  get jwks() {
    var e, r;
    return (r =
      (e = It[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(e) {
    It[this.storageKey] = Object.assign(
      Object.assign({}, It[this.storageKey]),
      { jwks: e },
    );
  }
  get jwks_cached_at() {
    var e, r;
    return (r =
      (e = It[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    It[this.storageKey] = Object.assign(
      Object.assign({}, It[this.storageKey]),
      { cachedAt: e },
    );
  }
  constructor(e) {
    var r, s, i;
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
    const n = Object.assign(Object.assign({}, Bg), e);
    if (
      ((this.storageKey = n.storageKey),
      (this.instanceID =
        (r = jr.nextInstanceID[this.storageKey]) !== null && r !== void 0
          ? r
          : 0),
      (jr.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!n.debug),
      typeof n.debug == "function" && (this.logger = n.debug),
      this.instanceID > 0 && ie())
    ) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(o), this.logDebugMessages && console.trace(o));
    }
    if (
      ((this.persistSession = n.persistSession),
      (this.autoRefreshToken = n.autoRefreshToken),
      (this.admin = new Eg({ url: n.url, headers: n.headers, fetch: n.fetch })),
      (this.url = n.url),
      (this.headers = n.headers),
      (this.fetch = hl(n.fetch)),
      (this.lock = n.lock || Do),
      (this.detectSessionInUrl = n.detectSessionInUrl),
      (this.flowType = n.flowType),
      (this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader),
      (this.throwOnError = n.throwOnError),
      (this.lockAcquireTimeout = n.lockAcquireTimeout),
      n.lock
        ? (this.lock = n.lock)
        : this.persistSession &&
            ie() &&
            !(
              (s = globalThis == null ? void 0 : globalThis.navigator) ===
                null || s === void 0
            ) &&
            s.locks
          ? (this.lock = xg)
          : (this.lock = Do),
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
        webauthn: new zg(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (n.storage
            ? (this.storage = n.storage)
            : dl()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = jo(this.memoryStorage))),
          n.userStorage && (this.userStorage = n.userStorage))
        : ((this.memoryStorage = {}), (this.storage = jo(this.memoryStorage))),
      ie() &&
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
      (i = this.broadcastChannel) === null ||
        i === void 0 ||
        i.addEventListener("message", async (o) => {
          this._debug(
            "received broadcast notification from other tab or client",
            o,
          );
          try {
            await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
          } catch (a) {
            this._debug("#broadcastChannel", "error", a);
          }
        });
    }
    n.skipAutoInitialize ||
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${cl}) ${new Date().toISOString()}`;
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
      let r = {},
        s = "none";
      if (
        (ie() &&
          ((r = rg(window.location.href)),
          this._isImplicitGrantCallback(r)
            ? (s = "implicit")
            : (await this._isPKCECallback(r)) && (s = "pkce")),
        ie() && this.detectSessionInUrl && s !== "none")
      ) {
        const { data: i, error: n } = await this._getSessionFromURL(r, s);
        if (n) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              n,
            ),
            Wm(n))
          ) {
            const c =
              (e = n.details) === null || e === void 0 ? void 0 : e.code;
            if (
              c === "identity_already_exists" ||
              c === "identity_not_found" ||
              c === "single_identity_not_deletable"
            )
              return { error: n };
          }
          return { error: n };
        }
        const { session: o, redirectType: a } = i;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            a,
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (r) {
      return k(r)
        ? this._returnResult({ error: r })
        : this._returnResult({
            error: new gt("Unexpected error during initialization", r),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(e) {
    var r, s, i;
    try {
      const n = await j(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (s =
                (r = e == null ? void 0 : e.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && s !== void 0
                ? s
                : {},
            gotrue_meta_security: {
              captcha_token:
                (i = e == null ? void 0 : e.options) === null || i === void 0
                  ? void 0
                  : i.captchaToken,
            },
          },
          xform: Ee,
        }),
        { data: o, error: a } = n;
      if (a || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const c = o.session,
        l = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", c)),
        this._returnResult({ data: { user: l, session: c }, error: null })
      );
    } catch (n) {
      if (k(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signUp(e) {
    var r, s, i;
    try {
      let n;
      if ("email" in e) {
        const { email: u, password: d, options: p } = e;
        let h = null,
          f = null;
        (this.flowType === "pkce" &&
          ([h, f] = await Pt(this.storage, this.storageKey)),
          (n = await j(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: p == null ? void 0 : p.emailRedirectTo,
            body: {
              email: u,
              password: d,
              data:
                (r = p == null ? void 0 : p.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: p == null ? void 0 : p.captchaToken,
              },
              code_challenge: h,
              code_challenge_method: f,
            },
            xform: Ee,
          })));
      } else if ("phone" in e) {
        const { phone: u, password: d, options: p } = e;
        n = await j(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data:
              (s = p == null ? void 0 : p.data) !== null && s !== void 0
                ? s
                : {},
            channel:
              (i = p == null ? void 0 : p.channel) !== null && i !== void 0
                ? i
                : "sms",
            gotrue_meta_security: {
              captcha_token: p == null ? void 0 : p.captchaToken,
            },
          },
          xform: Ee,
        });
      } else
        throw new es(
          "You must provide either an email or phone number and a password",
        );
      const { data: o, error: a } = n;
      if (a || !o)
        return (
          await se(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const c = o.session,
        l = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", c)),
        this._returnResult({ data: { user: l, session: c }, error: null })
      );
    } catch (n) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(n)))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithPassword(e) {
    try {
      let r;
      if ("email" in e) {
        const { email: n, password: o, options: a } = e;
        r = await j(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: n,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Io,
          },
        );
      } else if ("phone" in e) {
        const { phone: n, password: o, options: a } = e;
        r = await j(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: n,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Io,
          },
        );
      } else
        throw new es(
          "You must provide either an email or phone number and a password",
        );
      const { data: s, error: i } = r;
      if (i)
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      if (!s || !s.session || !s.user) {
        const n = new Ot();
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      }
      return (
        s.session &&
          (await this._saveSession(s.session),
          await this._notifyAllSubscribers("SIGNED_IN", s.session)),
        this._returnResult({
          data: Object.assign(
            { user: s.user, session: s.session },
            s.weak_password ? { weakPassword: s.weak_password } : null,
          ),
          error: i,
        })
      );
    } catch (r) {
      if (k(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOAuth(e) {
    var r, s, i, n;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams:
        (i = e.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect:
        (n = e.options) === null || n === void 0
          ? void 0
          : n.skipBrowserRedirect,
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
    const { chain: r } = e;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(e) {
    var r, s, i, n, o, a, c, l, u, d, p;
    let h, f;
    if ("message" in e) ((h = e.message), (f = e.signature));
    else {
      const { chain: m, wallet: g, statement: _, options: b } = e;
      let w;
      if (ie())
        if (typeof g == "object") w = g;
        else {
          const T = window;
          if (
            "ethereum" in T &&
            typeof T.ethereum == "object" &&
            "request" in T.ethereum &&
            typeof T.ethereum.request == "function"
          )
            w = T.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof g != "object" || !(b != null && b.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        w = g;
      }
      const E = new URL(
          (r = b == null ? void 0 : b.url) !== null && r !== void 0
            ? r
            : window.location.href,
        ),
        S = await w
          .request({ method: "eth_requestAccounts" })
          .then((T) => T)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!S || S.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const A = fl(S[0]);
      let x =
        (s = b == null ? void 0 : b.signInWithEthereum) === null || s === void 0
          ? void 0
          : s.chainId;
      if (!x) {
        const T = await w.request({ method: "eth_chainId" });
        x = Ag(T);
      }
      const L = {
        domain: E.host,
        address: A,
        statement: _,
        uri: E.href,
        version: "1",
        chainId: x,
        nonce:
          (i = b == null ? void 0 : b.signInWithEthereum) === null ||
          i === void 0
            ? void 0
            : i.nonce,
        issuedAt:
          (o =
            (n = b == null ? void 0 : b.signInWithEthereum) === null ||
            n === void 0
              ? void 0
              : n.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (a = b == null ? void 0 : b.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (c = b == null ? void 0 : b.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.notBefore,
        requestId:
          (l = b == null ? void 0 : b.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.requestId,
        resources:
          (u = b == null ? void 0 : b.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.resources,
      };
      ((h = Tg(L)),
        (f = await w.request({ method: "personal_sign", params: [Rg(h), A] })));
    }
    try {
      const { data: m, error: g } = await j(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: h, signature: f },
            !((d = e.options) === null || d === void 0) && d.captchaToken
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
          xform: Ee,
        },
      );
      if (g) throw g;
      if (!m || !m.session || !m.user) {
        const _ = new Ot();
        return this._returnResult({
          data: { user: null, session: null },
          error: _,
        });
      }
      return (
        m.session &&
          (await this._saveSession(m.session),
          await this._notifyAllSubscribers("SIGNED_IN", m.session)),
        this._returnResult({ data: Object.assign({}, m), error: g })
      );
    } catch (m) {
      if (k(m))
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      throw m;
    }
  }
  async signInWithSolana(e) {
    var r, s, i, n, o, a, c, l, u, d, p, h;
    let f, m;
    if ("message" in e) ((f = e.message), (m = e.signature));
    else {
      const { chain: g, wallet: _, statement: b, options: w } = e;
      let E;
      if (ie())
        if (typeof _ == "object") E = _;
        else {
          const A = window;
          if (
            "solana" in A &&
            typeof A.solana == "object" &&
            (("signIn" in A.solana && typeof A.solana.signIn == "function") ||
              ("signMessage" in A.solana &&
                typeof A.solana.signMessage == "function"))
          )
            E = A.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof _ != "object" || !(w != null && w.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        E = _;
      }
      const S = new URL(
        (r = w == null ? void 0 : w.url) !== null && r !== void 0
          ? r
          : window.location.href,
      );
      if ("signIn" in E && E.signIn) {
        const A = await E.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                w == null ? void 0 : w.signInWithSolana,
              ),
              { version: "1", domain: S.host, uri: S.href },
            ),
            b ? { statement: b } : null,
          ),
        );
        let x;
        if (Array.isArray(A) && A[0] && typeof A[0] == "object") x = A[0];
        else if (
          A &&
          typeof A == "object" &&
          "signedMessage" in A &&
          "signature" in A
        )
          x = A;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in x &&
          "signature" in x &&
          (typeof x.signedMessage == "string" ||
            x.signedMessage instanceof Uint8Array) &&
          x.signature instanceof Uint8Array
        )
          ((f =
            typeof x.signedMessage == "string"
              ? x.signedMessage
              : new TextDecoder().decode(x.signedMessage)),
            (m = x.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in E) ||
          typeof E.signMessage != "function" ||
          !("publicKey" in E) ||
          typeof E != "object" ||
          !E.publicKey ||
          !("toBase58" in E.publicKey) ||
          typeof E.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        f = [
          `${S.host} wants you to sign in with your Solana account:`,
          E.publicKey.toBase58(),
          ...(b ? ["", b, ""] : [""]),
          "Version: 1",
          `URI: ${S.href}`,
          `Issued At: ${(i = (s = w == null ? void 0 : w.signInWithSolana) === null || s === void 0 ? void 0 : s.issuedAt) !== null && i !== void 0 ? i : new Date().toISOString()}`,
          ...(!(
            (n = w == null ? void 0 : w.signInWithSolana) === null ||
            n === void 0
          ) && n.notBefore
            ? [`Not Before: ${w.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = w == null ? void 0 : w.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${w.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = w == null ? void 0 : w.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
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
            (d =
              (u = w == null ? void 0 : w.signInWithSolana) === null ||
              u === void 0
                ? void 0
                : u.resources) === null || d === void 0
          ) && d.length
            ? [
                "Resources",
                ...w.signInWithSolana.resources.map((x) => `- ${x}`),
              ]
            : []),
        ].join(`
`);
        const A = await E.signMessage(new TextEncoder().encode(f), "utf8");
        if (!A || !(A instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        m = A;
      }
    }
    try {
      const { data: g, error: _ } = await j(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: f, signature: yt(m) },
            !((p = e.options) === null || p === void 0) && p.captchaToken
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
          xform: Ee,
        },
      );
      if (_) throw _;
      if (!g || !g.session || !g.user) {
        const b = new Ot();
        return this._returnResult({
          data: { user: null, session: null },
          error: b,
        });
      }
      return (
        g.session &&
          (await this._saveSession(g.session),
          await this._notifyAllSubscribers("SIGNED_IN", g.session)),
        this._returnResult({ data: Object.assign({}, g), error: _ })
      );
    } catch (g) {
      if (k(g))
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      throw g;
    }
  }
  async _exchangeCodeForSession(e) {
    const r = await ht(this.storage, `${this.storageKey}-code-verifier`),
      [s, i] = (r ?? "").split("/");
    try {
      if (!s && this.flowType === "pkce") throw new Km();
      const { data: n, error: o } = await j(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: s },
          xform: Ee,
        },
      );
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!n || !n.session || !n.user) {
        const a = new Ot();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        n.session &&
          (await this._saveSession(n.session),
          await this._notifyAllSubscribers("SIGNED_IN", n.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, n), {
            redirectType: i ?? null,
          }),
          error: o,
        })
      );
    } catch (n) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(n)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
          options: r,
          provider: s,
          token: i,
          access_token: n,
          nonce: o,
        } = e,
        a = await j(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: s,
              id_token: i,
              access_token: n,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Ee,
          },
        ),
        { data: c, error: l } = a;
      if (l)
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      if (!c || !c.session || !c.user) {
        const u = new Ot();
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      }
      return (
        c.session &&
          (await this._saveSession(c.session),
          await this._notifyAllSubscribers("SIGNED_IN", c.session)),
        this._returnResult({ data: c, error: l })
      );
    } catch (r) {
      if (k(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOtp(e) {
    var r, s, i, n, o;
    try {
      if ("email" in e) {
        const { email: a, options: c } = e;
        let l = null,
          u = null;
        this.flowType === "pkce" &&
          ([l, u] = await Pt(this.storage, this.storageKey));
        const { error: d } = await j(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (r = c == null ? void 0 : c.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (s = c == null ? void 0 : c.shouldCreateUser) !== null &&
              s !== void 0
                ? s
                : !0,
            gotrue_meta_security: {
              captcha_token: c == null ? void 0 : c.captchaToken,
            },
            code_challenge: l,
            code_challenge_method: u,
          },
          redirectTo: c == null ? void 0 : c.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      if ("phone" in e) {
        const { phone: a, options: c } = e,
          { data: l, error: u } = await j(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (i = c == null ? void 0 : c.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (n = c == null ? void 0 : c.shouldCreateUser) !== null &&
                  n !== void 0
                    ? n
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
          error: u,
        });
      }
      throw new es("You must provide either an email or phone number.");
    } catch (a) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(e) {
    var r, s;
    try {
      let i, n;
      "options" in e &&
        ((i = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (n =
          (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken));
      const { data: o, error: a } = await j(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: n },
          }),
          redirectTo: i,
          xform: Ee,
        },
      );
      if (a) throw a;
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
    } catch (i) {
      if (k(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithSSO(e) {
    var r, s, i, n, o;
    try {
      let a = null,
        c = null;
      this.flowType === "pkce" &&
        ([a, c] = await Pt(this.storage, this.storageKey));
      const l = await j(this.fetch, "POST", `${this.url}/sso`, {
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
                  (s =
                    (r = e.options) === null || r === void 0
                      ? void 0
                      : r.redirectTo) !== null && s !== void 0
                    ? s
                    : void 0,
              },
            ),
            !((i = e == null ? void 0 : e.options) === null || i === void 0) &&
              i.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: e.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: c,
          },
        ),
        headers: this.headers,
        xform: _g,
      });
      return (
        !((n = l.data) === null || n === void 0) &&
          n.url &&
          ie() &&
          !(
            !((o = e.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(l.data.url),
        this._returnResult(l)
      );
    } catch (a) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
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
          data: { session: r },
          error: s,
        } = e;
        if (s) throw s;
        if (!r) throw new pe();
        const { error: i } = await j(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      });
    } catch (e) {
      if (k(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in e) {
        const { email: s, type: i, options: n } = e,
          { error: o } = await j(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: s,
              type: i,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in e) {
        const { phone: s, type: i, options: n } = e,
          { data: o, error: a } = await j(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: s,
              type: i,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        });
      }
      throw new es(
        "You must provide either an email or phone number and a type",
      );
    } catch (r) {
      if (k(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (r) => r),
      )
    );
  }
  async _acquireLock(e, r) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await s, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await i;
              } catch {}
            })(),
          ),
          i
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
          const s = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await s;
                } catch {}
              })(),
            ),
              await s;
            this.pendingInLock.length;
          ) {
            const i = [...this.pendingInLock];
            (await Promise.all(i), this.pendingInLock.splice(0, i.length));
          }
          return await s;
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
      const r = await this.__loadSession();
      return await e(r);
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
      const r = await ht(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (e = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const s = e.expires_at ? e.expires_at * 1e3 - Date.now() < ni : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${s ? "" : " not"} expired`,
          "expires_at",
          e.expires_at,
        ),
        !s)
      ) {
        if (this.userStorage) {
          const o = await ht(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (e.user = o.user) : (e.user = ci());
        }
        if (
          this.storage.isServer &&
          e.user &&
          !e.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          ((e.user = mg(e.user, o)),
            o.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: e }, error: null };
      }
      const { data: i, error: n } = await this._callRefreshToken(
        e.refresh_token,
      );
      return n
        ? this._returnResult({ data: { session: null }, error: n })
        : this._returnResult({ data: { session: i }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) return await this._getUser(e);
    await this.initializePromise;
    const r = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (r.data.user && (this.suppressGetSessionWarning = !0), r);
  }
  async _getUser(e) {
    try {
      return e
        ? await j(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: et,
          })
        : await this._useSession(async (r) => {
            var s, i, n;
            const { data: o, error: a } = r;
            if (a) throw a;
            return !(
              !((s = o.session) === null || s === void 0) && s.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new pe() }
              : await j(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (n =
                      (i = o.session) === null || i === void 0
                        ? void 0
                        : i.access_token) !== null && n !== void 0
                      ? n
                      : void 0,
                  xform: et,
                });
          });
    } catch (r) {
      if (k(r))
        return (
          oi(r) &&
            (await this._removeSession(),
            await se(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: r })
        );
      throw r;
    }
  }
  async updateUser(e, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(e, r),
      )
    );
  }
  async _updateUser(e, r = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: i, error: n } = s;
        if (n) throw n;
        if (!i.session) throw new pe();
        const o = i.session;
        let a = null,
          c = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([a, c] = await Pt(this.storage, this.storageKey));
        const { data: l, error: u } = await j(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, e), {
              code_challenge: a,
              code_challenge_method: c,
            }),
            jwt: o.access_token,
            xform: et,
          },
        );
        if (u) throw u;
        return (
          (o.user = l.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (s) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(s)))
        return this._returnResult({ data: { user: null }, error: s });
      throw s;
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
      if (!e.access_token || !e.refresh_token) throw new pe();
      const r = Date.now() / 1e3;
      let s = r,
        i = !0,
        n = null;
      const { payload: o } = rs(e.access_token);
      if ((o.exp && ((s = o.exp), (i = s <= r)), i)) {
        const { data: a, error: c } = await this._callRefreshToken(
          e.refresh_token,
        );
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        n = a;
      } else {
        const { data: a, error: c } = await this._getUser(e.access_token);
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        ((n = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: s - r,
          expires_at: s,
        }),
          await this._saveSession(n),
          await this._notifyAllSubscribers("SIGNED_IN", n));
      }
      return this._returnResult({
        data: { user: n.user, session: n },
        error: null,
      });
    } catch (r) {
      if (k(r))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
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
      return await this._useSession(async (r) => {
        var s;
        if (!e) {
          const { data: o, error: a } = r;
          if (a) throw a;
          e = (s = o.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new pe();
        const { data: i, error: n } = await this._callRefreshToken(
          e.refresh_token,
        );
        return n
          ? this._returnResult({
              data: { user: null, session: null },
              error: n,
            })
          : i
            ? this._returnResult({
                data: { user: i.user, session: i },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (r) {
      if (k(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async _getSessionFromURL(e, r) {
    try {
      if (!ie()) throw new ts("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ts(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          },
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Co("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ts("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new Co("No code detected.");
        const { data: b, error: w } = await this._exchangeCodeForSession(
          e.code,
        );
        if (w) throw w;
        const E = new URL(window.location.href);
        return (
          E.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", E.toString()),
          { data: { session: b.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: s,
        provider_refresh_token: i,
        access_token: n,
        refresh_token: o,
        expires_in: a,
        expires_at: c,
        token_type: l,
      } = e;
      if (!n || !a || !o || !l) throw new ts("No session defined in URL");
      const u = Math.round(Date.now() / 1e3),
        d = parseInt(a);
      let p = u + d;
      c && (p = parseInt(c));
      const h = p - u;
      h * 1e3 <= Dt &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${d}s`,
        );
      const f = p - d;
      u - f >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            f,
            p,
            u,
          )
        : u - f < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            f,
            p,
            u,
          );
      const { data: m, error: g } = await this._getUser(n);
      if (g) throw g;
      const _ = {
        provider_token: s,
        provider_refresh_token: i,
        access_token: n,
        expires_in: d,
        expires_at: p,
        refresh_token: o,
        token_type: l,
        user: m.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: _, redirectType: e.type },
          error: null,
        })
      );
    } catch (s) {
      if (k(s))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: s,
        });
      throw s;
    }
  }
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), e)
      : !!(e.access_token || e.error_description);
  }
  async _isPKCECallback(e) {
    const r = await ht(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && r);
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
    return await this._useSession(async (r) => {
      var s;
      const { data: i, error: n } = r;
      if (n && !oi(n)) return this._returnResult({ error: n });
      const o =
        (s = i.session) === null || s === void 0 ? void 0 : s.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (
          a &&
          !(
            (Gm(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)) ||
            oi(a)
          )
        )
          return this._returnResult({ error: a });
      }
      return (
        e !== "others" &&
          (await this._removeSession(),
          await se(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const r = tg(),
      s = {
        id: r,
        callback: e,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r,
          ),
            this.stateChangeEmitters.delete(r));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, s),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: s } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (r) => {
      var s, i;
      try {
        const {
          data: { session: n },
          error: o,
        } = r;
        if (o) throw o;
        (await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", n)),
          this._debug("INITIAL_SESSION", "callback id", e, "session", n));
      } catch (n) {
        (await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", e, "error", n),
          console.error(n));
      }
    });
  }
  async resetPasswordForEmail(e, r = {}) {
    let s = null,
      i = null;
    this.flowType === "pkce" &&
      ([s, i] = await Pt(this.storage, this.storageKey, !0));
    try {
      return await j(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: s,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (n) {
      if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(n)))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: r, error: s } = await this.getUser();
      if (s) throw s;
      return this._returnResult({
        data: {
          identities: (e = r.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var r;
    try {
      const { data: s, error: i } = await this._useSession(async (n) => {
        var o, a, c, l, u;
        const { data: d, error: p } = n;
        if (p) throw p;
        const h = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await j(this.fetch, "GET", h, {
          headers: this.headers,
          jwt:
            (u =
              (l = d.session) === null || l === void 0
                ? void 0
                : l.access_token) !== null && u !== void 0
              ? u
              : void 0,
        });
      });
      if (i) throw i;
      return (
        ie() &&
          !(
            !((r = e.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(s == null ? void 0 : s.url),
        this._returnResult({
          data: { provider: e.provider, url: s == null ? void 0 : s.url },
          error: null,
        })
      );
    } catch (s) {
      if (k(s))
        return this._returnResult({
          data: { provider: e.provider, url: null },
          error: s,
        });
      throw s;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (r) => {
      var s;
      try {
        const {
          error: i,
          data: { session: n },
        } = r;
        if (i) throw i;
        const {
            options: o,
            provider: a,
            token: c,
            access_token: l,
            nonce: u,
          } = e,
          d = await j(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (s = n == null ? void 0 : n.access_token) !== null &&
                s !== void 0
                  ? s
                  : void 0,
              body: {
                provider: a,
                id_token: c,
                access_token: l,
                nonce: u,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Ee,
            },
          ),
          { data: p, error: h } = d;
        return h
          ? this._returnResult({
              data: { user: null, session: null },
              error: h,
            })
          : !p || !p.session || !p.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Ot(),
              })
            : (p.session &&
                (await this._saveSession(p.session),
                await this._notifyAllSubscribers("USER_UPDATED", p.session)),
              this._returnResult({ data: p, error: h }));
      } catch (i) {
        if ((await se(this.storage, `${this.storageKey}-code-verifier`), k(i)))
          return this._returnResult({
            data: { user: null, session: null },
            error: i,
          });
        throw i;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (r) => {
        var s, i;
        const { data: n, error: o } = r;
        if (o) throw o;
        return await j(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (s = n.session) === null || s === void 0
                  ? void 0
                  : s.access_token) !== null && i !== void 0
                ? i
                : void 0,
          },
        );
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _refreshAccessToken(e) {
    const r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const s = Date.now();
      return await ng(
        async (i) => (
          i > 0 && (await ig(200 * Math.pow(2, i - 1))),
          this._debug(r, "refreshing attempt", i),
          await j(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: Ee },
          )
        ),
        (i, n) => {
          const o = 200 * Math.pow(2, i);
          return n && ai(n) && Date.now() + o - s < Dt;
        },
      );
    } catch (s) {
      if ((this._debug(r, "error", s), k(s)))
        return this._returnResult({
          data: { session: null, user: null },
          error: s,
        });
      throw s;
    } finally {
      this._debug(r, "end");
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
  async _handleProviderSignIn(e, r) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        r,
        "url",
        s,
      ),
      ie() && !r.skipBrowserRedirect && window.location.assign(s),
      { data: { provider: e, url: s }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, r;
    const s = "#_recoverAndRefresh()";
    this._debug(s, "begin");
    try {
      const i = await ht(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let o = await ht(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: i.user }),
          await $t(this.userStorage, this.storageKey + "-user", o)),
          (i.user =
            (e = o == null ? void 0 : o.user) !== null && e !== void 0
              ? e
              : ci()));
      } else if (i && !i.user && !i.user) {
        const o = await ht(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((i.user = o.user),
            await se(this.storage, this.storageKey + "-user"),
            await $t(this.storage, this.storageKey, i))
          : (i.user = ci());
      }
      if (
        (this._debug(s, "session from storage", i), !this._isValidSession(i))
      ) {
        (this._debug(s, "session is not valid"),
          i !== null && (await this._removeSession()));
        return;
      }
      const n =
        ((r = i.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        ni;
      if (
        (this._debug(
          s,
          `session has${n ? "" : " not"} expired with margin of ${ni}s`,
        ),
        n)
      ) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: o } = await this._callRefreshToken(i.refresh_token);
          o &&
            (console.error(o),
            ai(o) ||
              (this._debug(
                s,
                "refresh failed with a non-retryable error, removing the session",
                o,
              ),
              await this._removeSession()));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(i.access_token);
          !a && o != null && o.user
            ? ((i.user = o.user),
              await this._saveSession(i),
              await this._notifyAllSubscribers("SIGNED_IN", i))
            : this._debug(
                s,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (o) {
          (console.error("Error getting user data:", o),
            this._debug(
              s,
              "error getting user data, skipping SIGNED_IN notification",
              o,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      (this._debug(s, "error", i), console.error(i));
      return;
    } finally {
      this._debug(s, "end");
    }
  }
  async _callRefreshToken(e) {
    var r, s;
    if (!e) throw new pe();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new Vs();
      const { data: n, error: o } = await this._refreshAccessToken(e);
      if (o) throw o;
      if (!n.session) throw new pe();
      (await this._saveSession(n.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", n.session));
      const a = { data: n.session, error: null };
      return (this.refreshingDeferred.resolve(a), a);
    } catch (n) {
      if ((this._debug(i, "error", n), k(n))) {
        const o = { data: null, error: n };
        return (
          ai(n) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(o),
          o
        );
      }
      throw (
        (s = this.refreshingDeferred) === null || s === void 0 || s.reject(n),
        n
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(i, "end"));
    }
  }
  async _notifyAllSubscribers(e, r, s = !0) {
    const i = `#_notifyAllSubscribers(${e})`;
    this._debug(i, "begin", r, `broadcast = ${s}`);
    try {
      this.broadcastChannel &&
        s &&
        this.broadcastChannel.postMessage({ event: e, session: r });
      const n = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(e, r);
          } catch (c) {
            n.push(c);
          }
        });
      if ((await Promise.all(o), n.length > 0)) {
        for (let a = 0; a < n.length; a += 1) console.error(n[a]);
        throw n[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  async _saveSession(e) {
    (this._debug("#_saveSession()", e),
      (this.suppressGetSessionWarning = !0),
      await se(this.storage, `${this.storageKey}-code-verifier`));
    const r = Object.assign({}, e),
      s = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !s &&
        r.user &&
        (await $t(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const i = Object.assign({}, r);
      delete i.user;
      const n = Po(i);
      await $t(this.storage, this.storageKey, n);
    } else {
      const i = Po(r);
      await $t(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await se(this.storage, this.storageKey),
      await se(this.storage, this.storageKey + "-code-verifier"),
      await se(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await se(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        ie() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const e = setInterval(() => this._autoRefreshTokenTick(), Dt);
    ((this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e));
    const r = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), e && clearInterval(e));
    const r = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), r && clearTimeout(r));
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
            return await this._useSession(async (r) => {
              const {
                data: { session: s },
              } = r;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((s.expires_at * 1e3 - e) / Dt);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${i} ticks, a tick lasts ${Dt}ms, refresh threshold is ${zi} ticks`,
              ),
                i <= zi && (await this._callRefreshToken(s.refresh_token)));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof pl)
        this._debug("auto refresh token tick lock not available");
      else throw e;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !ie() || !(window != null && window.addEventListener))
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
    const r = `#_onVisibilityChanged(${e})`;
    (this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          e ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
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
  async _getUrlForProvider(e, r, s) {
    const i = [`provider=${encodeURIComponent(r)}`];
    if (
      (s != null &&
        s.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
      s != null && s.scopes && i.push(`scopes=${encodeURIComponent(s.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [n, o] = await Pt(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(n)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      i.push(a.toString());
    }
    if (s != null && s.queryParams) {
      const n = new URLSearchParams(s.queryParams);
      i.push(n.toString());
    }
    return (
      s != null &&
        s.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
      `${e}?${i.join("&")}`
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (r) => {
        var s;
        const { data: i, error: n } = r;
        return n
          ? this._returnResult({ data: null, error: n })
          : await j(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (s = i == null ? void 0 : i.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            });
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (r) => {
        var s, i;
        const { data: n, error: o } = r;
        if (o) return this._returnResult({ data: null, error: o });
        const a = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
                ? { issuer: e.issuer }
                : {},
          ),
          { data: c, error: l } = await j(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (s = n == null ? void 0 : n.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            },
          );
        return l
          ? this._returnResult({ data: null, error: l })
          : (e.factorType === "totp" &&
              c.type === "totp" &&
              !((i = c == null ? void 0 : c.totp) === null || i === void 0) &&
              i.qr_code &&
              (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
            this._returnResult({ data: c, error: null }));
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: i, error: n } = r;
          if (n) return this._returnResult({ data: null, error: n });
          const o = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? Ng(e.webauthn.credential_response)
                          : Dg(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code },
            ),
            { data: a, error: c } = await j(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (s = i == null ? void 0 : i.session) === null || s === void 0
                    ? void 0
                    : s.access_token,
              },
            );
          return c
            ? this._returnResult({ data: null, error: c })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: c }));
        });
      } catch (r) {
        if (k(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: i, error: n } = r;
          if (n) return this._returnResult({ data: null, error: n });
          const o = await j(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (s = i == null ? void 0 : i.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            },
          );
          if (o.error) return o;
          const { data: a } = o;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: Lg(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: jg(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (k(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challengeAndVerify(e) {
    const { data: r, error: s } = await this._challenge({
      factorId: e.factorId,
    });
    return s
      ? this._returnResult({ data: null, error: s })
      : await this._verify({
          factorId: e.factorId,
          challengeId: r.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: r },
      error: s,
    } = await this.getUser();
    if (s) return { data: null, error: s };
    const i = { all: [], phone: [], totp: [], webauthn: [] };
    for (const n of (e = r == null ? void 0 : r.factors) !== null &&
    e !== void 0
      ? e
      : [])
      (i.all.push(n), n.status === "verified" && i[n.factor_type].push(n));
    return { data: i, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var r, s, i, n;
    if (e)
      try {
        const { payload: h } = rs(e);
        let f = null;
        h.aal && (f = h.aal);
        let m = f;
        const {
          data: { user: g },
          error: _,
        } = await this.getUser(e);
        if (_) return this._returnResult({ data: null, error: _ });
        ((s =
          (r = g == null ? void 0 : g.factors) === null || r === void 0
            ? void 0
            : r.filter((E) => E.status === "verified")) !== null && s !== void 0
          ? s
          : []
        ).length > 0 && (m = "aal2");
        const w = h.amr || [];
        return {
          data: {
            currentLevel: f,
            nextLevel: m,
            currentAuthenticationMethods: w,
          },
          error: null,
        };
      } catch (h) {
        if (k(h)) return this._returnResult({ data: null, error: h });
        throw h;
      }
    const {
      data: { session: o },
      error: a,
    } = await this.getSession();
    if (a) return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: c } = rs(o.access_token);
    let l = null;
    c.aal && (l = c.aal);
    let u = l;
    ((n =
      (i = o.user.factors) === null || i === void 0
        ? void 0
        : i.filter((h) => h.status === "verified")) !== null && n !== void 0
      ? n
      : []
    ).length > 0 && (u = "aal2");
    const p = c.amr || [];
    return {
      data: { currentLevel: l, nextLevel: u, currentAuthenticationMethods: p },
      error: null,
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        return i
          ? this._returnResult({ data: null, error: i })
          : s
            ? await j(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${e}`,
                {
                  headers: this.headers,
                  jwt: s.access_token,
                  xform: (n) => ({ data: n, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new pe() });
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _approveAuthorization(e, r) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: i },
          error: n,
        } = s;
        if (n) return this._returnResult({ data: null, error: n });
        if (!i) return this._returnResult({ data: null, error: new pe() });
        const o = await j(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: i.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            ie() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (s) {
      if (k(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _denyAuthorization(e, r) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: i },
          error: n,
        } = s;
        if (n) return this._returnResult({ data: null, error: n });
        if (!i) return this._returnResult({ data: null, error: new pe() });
        const o = await j(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: i.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            ie() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (s) {
      if (k(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: r },
          error: s,
        } = e;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? await j(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                xform: (i) => ({ data: i, error: null }),
              })
            : this._returnResult({ data: null, error: new pe() });
      });
    } catch (e) {
      if (k(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        return i
          ? this._returnResult({ data: null, error: i })
          : s
            ? (await j(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: s.access_token,
                query: { client_id: e.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new pe() });
      });
    } catch (r) {
      if (k(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(e, r = { keys: [] }) {
    let s = r.keys.find((a) => a.kid === e);
    if (s) return s;
    const i = Date.now();
    if (
      ((s = this.jwks.keys.find((a) => a.kid === e)),
      s && this.jwks_cached_at + Bm > i)
    )
      return s;
    const { data: n, error: o } = await j(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (o) throw o;
    return !n.keys ||
      n.keys.length === 0 ||
      ((this.jwks = n),
      (this.jwks_cached_at = i),
      (s = n.keys.find((a) => a.kid === e)),
      !s)
      ? null
      : s;
  }
  async getClaims(e, r = {}) {
    try {
      let s = e;
      if (!s) {
        const { data: h, error: f } = await this.getSession();
        if (f || !h.session)
          return this._returnResult({ data: null, error: f });
        s = h.session.access_token;
      }
      const {
        header: i,
        payload: n,
        signature: o,
        raw: { header: a, payload: c },
      } = rs(s);
      (r != null && r.allowExpired) || hg(n.exp);
      const l =
        !i.alg ||
        i.alg.startsWith("HS") ||
        !i.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              i.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                  ? void 0
                  : r.jwks,
            );
      if (!l) {
        const { error: h } = await this.getUser(s);
        if (h) throw h;
        return { data: { claims: n, header: i, signature: o }, error: null };
      }
      const u = pg(i.alg),
        d = await crypto.subtle.importKey("jwk", l, u, !0, ["verify"]);
      if (!(await crypto.subtle.verify(u, d, o, Zm(`${a}.${c}`))))
        throw new Gi("Invalid JWT signature");
      return { data: { claims: n, header: i, signature: o }, error: null };
    } catch (s) {
      if (k(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
}
jr.nextInstanceID = {};
const Hg = jr,
  Gg = "2.99.2";
let yr = "";
typeof Deno < "u"
  ? (yr = "deno")
  : typeof document < "u"
    ? (yr = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (yr = "react-native")
      : (yr = "node");
const Wg = { "X-Client-Info": `supabase-js-${yr}/${Gg}` },
  Kg = { headers: Wg },
  Yg = { schema: "public" },
  Jg = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  Qg = {};
function Nr(t) {
  "@babel/helpers - typeof";
  return (
    (Nr =
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
    Nr(t)
  );
}
function Xg(t, e) {
  if (Nr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e || "default");
    if (Nr(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Zg(t) {
  var e = Xg(t, "string");
  return Nr(e) == "symbol" ? e : e + "";
}
function ey(t, e, r) {
  return (
    (e = Zg(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function $o(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    (e &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, s));
  }
  return r;
}
function Z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $o(Object(r), !0).forEach(function (s) {
          ey(t, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : $o(Object(r)).forEach(function (s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return t;
}
const ty = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  ry = () => Headers,
  sy = (t, e, r) => {
    const s = ty(r),
      i = ry();
    return async (n, o) => {
      var a;
      const c = (a = await e()) !== null && a !== void 0 ? a : t;
      let l = new i(o == null ? void 0 : o.headers);
      return (
        l.has("apikey") || l.set("apikey", t),
        l.has("Authorization") || l.set("Authorization", `Bearer ${c}`),
        s(n, Z(Z({}, o), {}, { headers: l }))
      );
    };
  };
function iy(t) {
  return t.endsWith("/") ? t : t + "/";
}
function ny(t, e) {
  var r, s;
  const { db: i, auth: n, realtime: o, global: a } = t,
    { db: c, auth: l, realtime: u, global: d } = e,
    p = {
      db: Z(Z({}, c), i),
      auth: Z(Z({}, l), n),
      realtime: Z(Z({}, u), o),
      storage: {},
      global: Z(
        Z(Z({}, d), a),
        {},
        {
          headers: Z(
            Z(
              {},
              (r = d == null ? void 0 : d.headers) !== null && r !== void 0
                ? r
                : {},
            ),
            (s = a == null ? void 0 : a.headers) !== null && s !== void 0
              ? s
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    t.accessToken ? (p.accessToken = t.accessToken) : delete p.accessToken,
    p
  );
}
function oy(t) {
  const e = t == null ? void 0 : t.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(iy(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var ay = class extends Hg {
    constructor(t) {
      super(t);
    }
  },
  cy = class {
    constructor(t, e, r) {
      var s, i;
      ((this.supabaseUrl = t), (this.supabaseKey = e));
      const n = oy(t);
      if (!e) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", n)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", n)),
        (this.storageUrl = new URL("storage/v1", n)),
        (this.functionsUrl = new URL("functions/v1", n)));
      const o = `sb-${n.hostname.split(".")[0]}-auth-token`,
        a = {
          db: Yg,
          realtime: Qg,
          auth: Z(Z({}, Jg), {}, { storageKey: o }),
          global: Kg,
        },
        c = ny(r ?? {}, a);
      if (
        ((this.storageKey =
          (s = c.auth.storageKey) !== null && s !== void 0 ? s : ""),
        (this.headers =
          (i = c.global.headers) !== null && i !== void 0 ? i : {}),
        c.accessToken)
      )
        ((this.accessToken = c.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (u, d) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`,
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
      ((this.fetch = sy(e, this._getAccessToken.bind(this), c.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Z(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            c.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((u) => this.realtime.setAuth(u))
            .catch((u) =>
              console.warn("Failed to set initial Realtime auth token:", u),
            ),
        (this.rest = new Gf(new URL("rest/v1", n).href, {
          headers: this.headers,
          schema: c.db.schema,
          fetch: this.fetch,
          timeout: c.db.timeout,
          urlLengthLimit: c.db.urlLengthLimit,
        })),
        (this.storage = new Um(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          r == null ? void 0 : r.storage,
        )),
        c.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new Mf(this.functionsUrl.href, {
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
    rpc(t, e = {}, r = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(t, e, r);
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
        r;
      if (t.accessToken) return await t.accessToken();
      const { data: s } = await t.auth.getSession();
      return (e =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && e !== void 0
        ? e
        : t.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: r,
        storage: s,
        userStorage: i,
        storageKey: n,
        flowType: o,
        lock: a,
        debug: c,
        throwOnError: l,
      },
      u,
      d,
    ) {
      const p = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new ay({
        url: this.authUrl.href,
        headers: Z(Z({}, p), u),
        storageKey: n,
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: r,
        storage: s,
        userStorage: i,
        flowType: o,
        lock: a,
        debug: c,
        throwOnError: l,
        fetch: d,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (h) => h.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(t) {
      return new lm(
        this.realtimeUrl.href,
        Z(
          Z({}, t),
          {},
          {
            params: Z(
              Z({}, { apikey: this.supabaseKey }),
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
    _handleTokenChanged(t, e, r) {
      (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
        : t === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const ly = (t, e, r) => new cy(t, e, r);
function uy() {
  if (typeof window < "u") return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const r = e.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
uy() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
const dy = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_SUPABASE_ANON_KEY: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
    VITE_SUPABASE_URL: "https://jmekjpytugnetkzphxno.supabase.co",
  },
  Mo = (t, e = !0) => {
    const r = dy[t];
    return (
      r ||
      (e && console.error(`Missing required environment variable: ${t}`), "")
    );
  },
  hy = {
    supabase: {
      url: Mo("VITE_SUPABASE_URL"),
      anonKey: Mo("VITE_SUPABASE_ANON_KEY"),
    },
    gemini: { apiKey: "" },
    isDev: !1,
    isProd: !0,
  },
  { url: Wi, anonKey: gl } = hy.supabase;
(!Wi || !gl || Wi === "COLE_SUA_URL_AQUI") &&
  console.warn(
    "Supabase URL ou Anon Key não configurados no arquivo .env.local",
  );
const ui = ly(Wi || "", gl || "", {
    auth: {
      detectSessionInUrl: !0,
      flowType: "pkce",
      persistSession: !0,
      autoRefreshToken: !0,
    },
  }),
  yl = y.createContext({
    session: null,
    user: null,
    loading: !0,
    signOut: async () => {},
    isDemoMode: !1,
  }),
  py = ({ children: t }) => {
    const [e, r] = y.useState(null),
      [s, i] = y.useState(null),
      [n, o] = y.useState(!0),
      [a, c] = y.useState(!1);
    y.useEffect(() => {
      if (window.location.pathname === "/auth/callback") {
        o(!1);
        return;
      }
      (async () => {
        try {
          const {
            data: { session: h },
            error: f,
          } = await ui.auth.getSession();
          if (f) throw f;
          (r(h), i((h == null ? void 0 : h.user) ?? null));
        } catch (h) {
          (console.error("Erro ao inicializar sessão:", h), c(!0));
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
          i(f);
        } finally {
          o(!1);
        }
      })();
      const {
        data: { subscription: p },
      } = ui.auth.onAuthStateChange((h, f) => {
        (r(f), i((f == null ? void 0 : f.user) ?? null));
      });
      return () => p.unsubscribe();
    }, []);
    const l = async () => {
      if (a) {
        (i(null), r(null));
        return;
      }
      try {
        await ui.auth.signOut();
      } catch (u) {
        console.error("Erro ao fazer signOut:", u);
      }
    };
    return v.jsx(yl.Provider, {
      value: { session: e, user: s, loading: n, signOut: l, isDemoMode: a },
      children: t,
    });
  },
  fy = () => {
    const t = y.useContext(yl);
    if (!t) throw new Error("useAuth must be used within an AuthProvider");
    return t;
  },
  U = (t) => typeof t == "string",
  pr = () => {
    let t, e;
    const r = new Promise((s, i) => {
      ((t = s), (e = i));
    });
    return ((r.resolve = t), (r.reject = e), r);
  },
  Uo = (t) => (t == null ? "" : "" + t),
  my = (t, e, r) => {
    t.forEach((s) => {
      e[s] && (r[s] = e[s]);
    });
  },
  gy = /###/g,
  Fo = (t) => (t && t.indexOf("###") > -1 ? t.replace(gy, ".") : t),
  qo = (t) => !t || U(t),
  wr = (t, e, r) => {
    const s = U(e) ? e.split(".") : e;
    let i = 0;
    for (; i < s.length - 1; ) {
      if (qo(t)) return {};
      const n = Fo(s[i]);
      (!t[n] && r && (t[n] = new r()),
        Object.prototype.hasOwnProperty.call(t, n) ? (t = t[n]) : (t = {}),
        ++i);
    }
    return qo(t) ? {} : { obj: t, k: Fo(s[i]) };
  },
  Vo = (t, e, r) => {
    const { obj: s, k: i } = wr(t, e, Object);
    if (s !== void 0 || e.length === 1) {
      s[i] = r;
      return;
    }
    let n = e[e.length - 1],
      o = e.slice(0, e.length - 1),
      a = wr(t, o, Object);
    for (; a.obj === void 0 && o.length; )
      ((n = `${o[o.length - 1]}.${n}`),
        (o = o.slice(0, o.length - 1)),
        (a = wr(t, o, Object)),
        a != null &&
          a.obj &&
          typeof a.obj[`${a.k}.${n}`] < "u" &&
          (a.obj = void 0));
    a.obj[`${a.k}.${n}`] = r;
  },
  yy = (t, e, r, s) => {
    const { obj: i, k: n } = wr(t, e, Object);
    ((i[n] = i[n] || []), i[n].push(r));
  },
  Es = (t, e) => {
    const { obj: r, k: s } = wr(t, e);
    if (r && Object.prototype.hasOwnProperty.call(r, s)) return r[s];
  },
  vy = (t, e, r) => {
    const s = Es(t, r);
    return s !== void 0 ? s : Es(e, r);
  },
  vl = (t, e, r) => {
    for (const s in e)
      s !== "__proto__" &&
        s !== "constructor" &&
        (s in t
          ? U(t[s]) ||
            t[s] instanceof String ||
            U(e[s]) ||
            e[s] instanceof String
            ? r && (t[s] = e[s])
            : vl(t[s], e[s], r)
          : (t[s] = e[s]));
    return t;
  },
  pt = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _y = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const by = (t) => (U(t) ? t.replace(/[&<>"'\/]/g, (e) => _y[e]) : t);
class wy {
  constructor(e) {
    ((this.capacity = e),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(e) {
    const r = this.regExpMap.get(e);
    if (r !== void 0) return r;
    const s = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, s),
      this.regExpQueue.push(e),
      s
    );
  }
}
const Ey = [" ", ",", "?", "!", ";"],
  Sy = new wy(20),
  xy = (t, e, r) => {
    ((e = e || ""), (r = r || ""));
    const s = Ey.filter((o) => e.indexOf(o) < 0 && r.indexOf(o) < 0);
    if (s.length === 0) return !0;
    const i = Sy.getRegExp(
      `(${s.map((o) => (o === "?" ? "\\?" : o)).join("|")})`,
    );
    let n = !i.test(t);
    if (!n) {
      const o = t.indexOf(r);
      o > 0 && !i.test(t.substring(0, o)) && (n = !0);
    }
    return n;
  },
  Ki = (t, e, r = ".") => {
    if (!t) return;
    if (t[e]) return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
    const s = e.split(r);
    let i = t;
    for (let n = 0; n < s.length; ) {
      if (!i || typeof i != "object") return;
      let o,
        a = "";
      for (let c = n; c < s.length; ++c)
        if ((c !== n && (a += r), (a += s[c]), (o = i[a]), o !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof o) > -1 &&
            c < s.length - 1
          )
            continue;
          n += c - n + 1;
          break;
        }
      i = o;
    }
    return i;
  },
  Dr = (t) => (t == null ? void 0 : t.replace(/_/g, "-")),
  Cy = {
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
      var r, s;
      (s =
        (r = console == null ? void 0 : console[t]) == null
          ? void 0
          : r.apply) == null || s.call(r, console, e);
    },
  };
class Ss {
  constructor(e, r = {}) {
    this.init(e, r);
  }
  init(e, r = {}) {
    ((this.prefix = r.prefix || "i18next:"),
      (this.logger = e || Cy),
      (this.options = r),
      (this.debug = r.debug));
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
  forward(e, r, s, i) {
    return i && !this.debug
      ? null
      : (U(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[r](e));
  }
  create(e) {
    return new Ss(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new Ss(this.logger, e)
    );
  }
}
var De = new Ss();
class zs {
  constructor() {
    this.observers = {};
  }
  on(e, r) {
    return (
      e.split(" ").forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const i = this.observers[s].get(r) || 0;
        this.observers[s].set(r, i + 1);
      }),
      this
    );
  }
  off(e, r) {
    if (this.observers[e]) {
      if (!r) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(r);
    }
  }
  emit(e, ...r) {
    (this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach(([i, n]) => {
        for (let o = 0; o < n; o++) i(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([i, n]) => {
          for (let o = 0; o < n; o++) i.apply(i, [e, ...r]);
        }));
  }
}
class zo extends zs {
  constructor(e, r = { ns: ["translation"], defaultNS: "translation" }) {
    (super(),
      (this.data = e || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const r = this.options.ns.indexOf(e);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(e, r, s, i = {}) {
    var l, u;
    const n =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      o =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1
      ? (a = e.split("."))
      : ((a = [e, r]),
        s &&
          (Array.isArray(s)
            ? a.push(...s)
            : U(s) && n
              ? a.push(...s.split(n))
              : a.push(s)));
    const c = Es(this.data, a);
    return (
      !c &&
        !r &&
        !s &&
        e.indexOf(".") > -1 &&
        ((e = a[0]), (r = a[1]), (s = a.slice(2).join("."))),
      c || !o || !U(s)
        ? c
        : Ki(
            (u = (l = this.data) == null ? void 0 : l[e]) == null
              ? void 0
              : u[r],
            s,
            n,
          )
    );
  }
  addResource(e, r, s, i, n = { silent: !1 }) {
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = [e, r];
    (s && (a = a.concat(o ? s.split(o) : s)),
      e.indexOf(".") > -1 && ((a = e.split(".")), (i = r), (r = a[1])),
      this.addNamespaces(r),
      Vo(this.data, a, i),
      n.silent || this.emit("added", e, r, s, i));
  }
  addResources(e, r, s, i = { silent: !1 }) {
    for (const n in s)
      (U(s[n]) || Array.isArray(s[n])) &&
        this.addResource(e, r, n, s[n], { silent: !0 });
    i.silent || this.emit("added", e, r, s);
  }
  addResourceBundle(e, r, s, i, n, o = { silent: !1, skipCopy: !1 }) {
    let a = [e, r];
    (e.indexOf(".") > -1 && ((a = e.split(".")), (i = s), (s = r), (r = a[1])),
      this.addNamespaces(r));
    let c = Es(this.data, a) || {};
    (o.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      i ? vl(c, s, n) : (c = { ...c, ...s }),
      Vo(this.data, a, c),
      o.silent || this.emit("added", e, r, s));
  }
  removeResourceBundle(e, r) {
    (this.hasResourceBundle(e, r) && delete this.data[e][r],
      this.removeNamespaces(r),
      this.emit("removed", e, r));
  }
  hasResourceBundle(e, r) {
    return this.getResource(e, r) !== void 0;
  }
  getResourceBundle(e, r) {
    return (r || (r = this.options.defaultNS), this.getResource(e, r));
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const r = this.getDataByLanguage(e);
    return !!((r && Object.keys(r)) || []).find(
      (i) => r[i] && Object.keys(r[i]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var _l = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, r, s, i) {
    return (
      t.forEach((n) => {
        var o;
        e =
          ((o = this.processors[n]) == null ? void 0 : o.process(e, r, s, i)) ??
          e;
      }),
      e
    );
  },
};
const bl = Symbol("i18next/PATH_KEY");
function Ay() {
  const t = [],
    e = Object.create(null);
  let r;
  return (
    (e.get = (s, i) => {
      var n;
      return (
        (n = r == null ? void 0 : r.revoke) == null || n.call(r),
        i === bl ? t : (t.push(i), (r = Proxy.revocable(s, e)), r.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), e).proxy
  );
}
function Er(t, e) {
  const { [bl]: r } = t(Ay()),
    s = (e == null ? void 0 : e.keySeparator) ?? ".",
    i = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (r.length > 1 && i) {
    const n = e == null ? void 0 : e.ns;
    if ((n ? (Array.isArray(n) ? n : [n]) : []).includes(r[0]))
      return `${r[0]}${i}${r.slice(1).join(s)}`;
  }
  return r.join(s);
}
const Bo = {},
  di = (t) => !U(t) && typeof t != "boolean" && typeof t != "number";
class xs extends zs {
  constructor(e, r = {}) {
    (super(),
      my(
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
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = De.create("translator")));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, r = { interpolation: {} }) {
    const s = { ...r };
    if (e == null) return !1;
    const i = this.resolve(e, s);
    if ((i == null ? void 0 : i.res) === void 0) return !1;
    const n = di(i.res);
    return !(s.returnObjects === !1 && n);
  }
  extractFromKey(e, r) {
    let s = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let n = r.ns || this.options.defaultNS || [];
    const o = s && e.indexOf(s) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !xy(e, s, i);
    if (o && !a) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0) return { key: e, namespaces: U(n) ? [n] : n };
      const l = e.split(s);
      ((s !== i || (s === i && this.options.ns.indexOf(l[0]) > -1)) &&
        (n = l.shift()),
        (e = l.join(i)));
    }
    return { key: e, namespaces: U(n) ? [n] : n };
  }
  translate(e, r, s) {
    let i = typeof r == "object" ? { ...r } : r;
    if (
      (typeof i != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (i = this.options.overloadTranslationOptionHandler(arguments)),
      typeof i == "object" && (i = { ...i }),
      i || (i = {}),
      e == null)
    )
      return "";
    (typeof e == "function" && (e = Er(e, { ...this.options, ...i })),
      Array.isArray(e) || (e = [String(e)]),
      (e = e.map((P) =>
        typeof P == "function" ? Er(P, { ...this.options, ...i }) : String(P),
      )));
    const n =
        i.returnDetails !== void 0
          ? i.returnDetails
          : this.options.returnDetails,
      o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      { key: a, namespaces: c } = this.extractFromKey(e[e.length - 1], i),
      l = c[c.length - 1];
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const d = i.lng || this.language,
      p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return p
        ? n
          ? {
              res: `${l}${u}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: d,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(i),
            }
          : `${l}${u}${a}`
        : n
          ? {
              res: a,
              usedKey: a,
              exactUsedKey: a,
              usedLng: d,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(i),
            }
          : a;
    const h = this.resolve(e, i);
    let f = h == null ? void 0 : h.res;
    const m = (h == null ? void 0 : h.usedKey) || a,
      g = (h == null ? void 0 : h.exactUsedKey) || a,
      _ = ["[object Number]", "[object Function]", "[object RegExp]"],
      b = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
      E = i.count !== void 0 && !U(i.count),
      S = xs.hasDefaultValue(i),
      A = E ? this.pluralResolver.getSuffix(d, i.count, i) : "",
      x =
        i.ordinal && E
          ? this.pluralResolver.getSuffix(d, i.count, { ordinal: !1 })
          : "",
      L = E && !i.ordinal && i.count === 0,
      T =
        (L && i[`defaultValue${this.options.pluralSeparator}zero`]) ||
        i[`defaultValue${A}`] ||
        i[`defaultValue${x}`] ||
        i.defaultValue;
    let I = f;
    w && !f && S && (I = T);
    const B = di(I),
      O = Object.prototype.toString.apply(I);
    if (w && I && B && _.indexOf(O) < 0 && !(U(b) && Array.isArray(I))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const P = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, I, { ...i, ns: c })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return n
          ? ((h.res = P), (h.usedParams = this.getUsedParamsDetails(i)), h)
          : P;
      }
      if (o) {
        const P = Array.isArray(I),
          R = P ? [] : {},
          $ = P ? g : m;
        for (const M in I)
          if (Object.prototype.hasOwnProperty.call(I, M)) {
            const V = `${$}${o}${M}`;
            (S && !f
              ? (R[M] = this.translate(V, {
                  ...i,
                  defaultValue: di(T) ? T[M] : void 0,
                  joinArrays: !1,
                  ns: c,
                }))
              : (R[M] = this.translate(V, { ...i, joinArrays: !1, ns: c })),
              R[M] === V && (R[M] = I[M]));
          }
        f = R;
      }
    } else if (w && U(b) && Array.isArray(f))
      ((f = f.join(b)), f && (f = this.extendTranslation(f, e, i, s)));
    else {
      let P = !1,
        R = !1;
      (!this.isValidLookup(f) && S && ((P = !0), (f = T)),
        this.isValidLookup(f) || ((R = !0), (f = a)));
      const M =
          (i.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          R
            ? void 0
            : f,
        V = S && T !== f && this.options.updateMissing;
      if (R || P || V) {
        if (
          (this.logger.log(V ? "updateKey" : "missingKey", d, l, a, V ? T : f),
          o)
        ) {
          const W = this.resolve(a, { ...i, keySeparator: !1 });
          W &&
            W.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let N = [];
        const H = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          i.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && H && H[0])
          for (let W = 0; W < H.length; W++) N.push(H[W]);
        else
          this.options.saveMissingTo === "all"
            ? (N = this.languageUtils.toResolveHierarchy(
                i.lng || this.language,
              ))
            : N.push(i.lng || this.language);
        const re = (W, he, ve) => {
          var Vr;
          const lt = S && ve !== f ? ve : M;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(W, l, he, lt, V, i)
            : (Vr = this.backendConnector) != null &&
              Vr.saveMissing &&
              this.backendConnector.saveMissing(W, l, he, lt, V, i),
            this.emit("missingKey", W, l, he, f));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? N.forEach((W) => {
                const he = this.pluralResolver.getSuffixes(W, i);
                (L &&
                  i[`defaultValue${this.options.pluralSeparator}zero`] &&
                  he.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  he.push(`${this.options.pluralSeparator}zero`),
                  he.forEach((ve) => {
                    re([W], a + ve, i[`defaultValue${ve}`] || T);
                  }));
              })
            : re(N, a, T));
      }
      ((f = this.extendTranslation(f, e, i, h, s)),
        R &&
          f === a &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${l}${u}${a}`),
        (R || P) &&
          this.options.parseMissingKeyHandler &&
          (f = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${l}${u}${a}` : a,
            P ? f : void 0,
            i,
          )));
    }
    return n
      ? ((h.res = f), (h.usedParams = this.getUsedParamsDetails(i)), h)
      : f;
  }
  extendTranslation(e, r, s, i, n) {
    var c, l;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const u =
        U(e) &&
        (((l = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : l.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const h = e.match(this.interpolator.nestingRegexp);
        d = h && h.length;
      }
      let p = s.replace && !U(s.replace) ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (e = this.interpolator.interpolate(
          e,
          p,
          s.lng || this.language || i.usedLng,
          s,
        )),
        u)
      ) {
        const h = e.match(this.interpolator.nestingRegexp),
          f = h && h.length;
        d < f && (s.nest = !1);
      }
      (!s.lng && i && i.res && (s.lng = this.language || i.usedLng),
        s.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            (...h) =>
              (n == null ? void 0 : n[0]) === h[0] && !s.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${h[0]} in key: ${r[0]}`,
                  ),
                  null)
                : this.translate(...h, r),
            s,
          )),
        s.interpolation && this.interpolator.reset());
    }
    const o = s.postProcess || this.options.postProcess,
      a = U(o) ? [o] : o;
    return (
      e != null &&
        a != null &&
        a.length &&
        s.applyPostProcessor !== !1 &&
        (e = _l.handle(
          a,
          e,
          r,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this,
        )),
      e
    );
  }
  resolve(e, r = {}) {
    let s, i, n, o, a;
    return (
      U(e) && (e = [e]),
      Array.isArray(e) &&
        (e = e.map((c) =>
          typeof c == "function" ? Er(c, { ...this.options, ...r }) : c,
        )),
      e.forEach((c) => {
        if (this.isValidLookup(s)) return;
        const l = this.extractFromKey(c, r),
          u = l.key;
        i = u;
        let d = l.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const p = r.count !== void 0 && !U(r.count),
          h = p && !r.ordinal && r.count === 0,
          f =
            r.context !== void 0 &&
            (U(r.context) || typeof r.context == "number") &&
            r.context !== "",
          m = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng,
              );
        d.forEach((g) => {
          var _, b;
          this.isValidLookup(s) ||
            ((a = g),
            !Bo[`${m[0]}-${g}`] &&
              (_ = this.utils) != null &&
              _.hasLoadedNamespace &&
              !((b = this.utils) != null && b.hasLoadedNamespace(a)) &&
              ((Bo[`${m[0]}-${g}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            m.forEach((w) => {
              var A;
              if (this.isValidLookup(s)) return;
              o = w;
              const E = [u];
              if ((A = this.i18nFormat) != null && A.addLookupKeys)
                this.i18nFormat.addLookupKeys(E, u, w, g, r);
              else {
                let x;
                p && (x = this.pluralResolver.getSuffix(w, r.count, r));
                const L = `${this.options.pluralSeparator}zero`,
                  T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (p &&
                    (r.ordinal &&
                      x.indexOf(T) === 0 &&
                      E.push(u + x.replace(T, this.options.pluralSeparator)),
                    E.push(u + x),
                    h && E.push(u + L)),
                  f)
                ) {
                  const I = `${u}${this.options.contextSeparator || "_"}${r.context}`;
                  (E.push(I),
                    p &&
                      (r.ordinal &&
                        x.indexOf(T) === 0 &&
                        E.push(I + x.replace(T, this.options.pluralSeparator)),
                      E.push(I + x),
                      h && E.push(I + L)));
                }
              }
              let S;
              for (; (S = E.pop()); )
                this.isValidLookup(s) ||
                  ((n = S), (s = this.getResource(w, g, S, r)));
            }));
        });
      }),
      { res: s, usedKey: i, exactUsedKey: n, usedLng: o, usedNS: a }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, r, s, i = {}) {
    var n;
    return (n = this.i18nFormat) != null && n.getResource
      ? this.i18nFormat.getResource(e, r, s, i)
      : this.resourceStore.getResource(e, r, s, i);
  }
  getUsedParamsDetails(e = {}) {
    const r = [
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
      s = e.replace && !U(e.replace);
    let i = s ? e.replace : e;
    if (
      (s && typeof e.count < "u" && (i.count = e.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !s)
    ) {
      i = { ...i };
      for (const n of r) delete i[n];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const r = "defaultValue";
    for (const s in e)
      if (
        Object.prototype.hasOwnProperty.call(e, s) &&
        r === s.substring(0, r.length) &&
        e[s] !== void 0
      )
        return !0;
    return !1;
  }
}
class Ho {
  constructor(e) {
    ((this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = De.create("languageUtils")));
  }
  getScriptPartFromCode(e) {
    if (((e = Dr(e)), !e || e.indexOf("-") < 0)) return null;
    const r = e.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = Dr(e)), !e || e.indexOf("-") < 0)) return e;
    const r = e.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(e) {
    if (U(e) && e.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? e.toLowerCase() : e)
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
    let r;
    return (
      e.forEach((s) => {
        if (r) return;
        const i = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (r = i);
      }),
      !r &&
        this.options.supportedLngs &&
        e.forEach((s) => {
          if (r) return;
          const i = this.getScriptPartFromCode(s);
          if (this.isSupportedCode(i)) return (r = i);
          const n = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(n)) return (r = n);
          r = this.options.supportedLngs.find((o) => {
            if (o === n) return o;
            if (
              !(o.indexOf("-") < 0 && n.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                n.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === n) ||
                (o.indexOf(n) === 0 && n.length > 1))
            )
              return o;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(e, r) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(r)),
      U(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!r) return e.default || [];
    let s = e[r];
    return (
      s || (s = e[this.getScriptPartFromCode(r)]),
      s || (s = e[this.formatLanguageCode(r)]),
      s || (s = e[this.getLanguagePartFromCode(r)]),
      s || (s = e.default),
      s || []
    );
  }
  toResolveHierarchy(e, r) {
    const s = this.getFallbackCodes(
        (r === !1 ? [] : r) || this.options.fallbackLng || [],
        e,
      ),
      i = [],
      n = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? i.push(o)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${o}`,
              ));
      };
    return (
      U(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            n(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            n(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            n(this.getLanguagePartFromCode(e)))
        : U(e) && n(this.formatLanguageCode(e)),
      s.forEach((o) => {
        i.indexOf(o) < 0 && n(this.formatLanguageCode(o));
      }),
      i
    );
  }
}
const Go = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Wo = {
    select: (t) => (t === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class Ry {
  constructor(e, r = {}) {
    ((this.languageUtils = e),
      (this.options = r),
      (this.logger = De.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, r = {}) {
    const s = Dr(e === "dev" ? "en" : e),
      i = r.ordinal ? "ordinal" : "cardinal",
      n = JSON.stringify({ cleanedCode: s, type: i });
    if (n in this.pluralRulesCache) return this.pluralRulesCache[n];
    let o;
    try {
      o = new Intl.PluralRules(s, { type: i });
    } catch {
      if (typeof Intl > "u")
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          Wo
        );
      if (!e.match(/-|_/)) return Wo;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(c, r);
    }
    return ((this.pluralRulesCache[n] = o), o);
  }
  needsPlural(e, r = {}) {
    let s = this.getRule(e, r);
    return (
      s || (s = this.getRule("dev", r)),
      (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(e, r, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${r}${i}`);
  }
  getSuffixes(e, r = {}) {
    let s = this.getRule(e, r);
    return (
      s || (s = this.getRule("dev", r)),
      s
        ? s
            .resolvedOptions()
            .pluralCategories.sort((i, n) => Go[i] - Go[n])
            .map(
              (i) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`,
            )
        : []
    );
  }
  getSuffix(e, r, s = {}) {
    const i = this.getRule(e, s);
    return i
      ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${e}`),
        this.getSuffix("dev", r, s));
  }
}
const Ko = (t, e, r, s = ".", i = !0) => {
    let n = vy(t, e, r);
    return (
      !n && i && U(r) && ((n = Ki(t, r, s)), n === void 0 && (n = Ki(e, r, s))),
      n
    );
  },
  hi = (t) => t.replace(/\$/g, "$$$$");
class Yo {
  constructor(e = {}) {
    var r;
    ((this.logger = De.create("interpolator")),
      (this.options = e),
      (this.format =
        ((r = e == null ? void 0 : e.interpolation) == null
          ? void 0
          : r.format) || ((s) => s)),
      this.init(e));
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: n,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: p,
      nestingPrefixEscaped: h,
      nestingSuffix: f,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: _,
      alwaysFormat: b,
    } = e.interpolation;
    ((this.escape = r !== void 0 ? r : by),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = n ? pt(n) : o || "{{"),
      (this.suffix = a ? pt(a) : c || "}}"),
      (this.formatSeparator = l || ","),
      (this.unescapePrefix = u ? "" : d || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
      (this.nestingPrefix = p ? pt(p) : h || pt("$t(")),
      (this.nestingSuffix = f ? pt(f) : m || pt(")")),
      (this.nestingOptionsSeparator = g || ","),
      (this.maxReplaces = _ || 1e3),
      (this.alwaysFormat = b !== void 0 ? b : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (r, s) =>
      (r == null ? void 0 : r.source) === s
        ? ((r.lastIndex = 0), r)
        : new RegExp(s, "g");
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
  interpolate(e, r, s, i) {
    var h;
    let n, o, a;
    const c =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      l = (f) => {
        if (f.indexOf(this.formatSeparator) < 0) {
          const b = Ko(
            r,
            c,
            f,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(b, void 0, s, { ...i, ...r, interpolationkey: f })
            : b;
        }
        const m = f.split(this.formatSeparator),
          g = m.shift().trim(),
          _ = m.join(this.formatSeparator).trim();
        return this.format(
          Ko(
            r,
            c,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          _,
          s,
          { ...i, ...r, interpolationkey: g },
        );
      };
    this.resetRegExp();
    const u =
        (i == null ? void 0 : i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      d =
        ((h = i == null ? void 0 : i.interpolation) == null
          ? void 0
          : h.skipOnVariables) !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (f) => hi(f) },
        {
          regex: this.regexp,
          safeValue: (f) => (this.escapeValue ? hi(this.escape(f)) : hi(f)),
        },
      ].forEach((f) => {
        for (a = 0; (n = f.regex.exec(e)); ) {
          const m = n[1].trim();
          if (((o = l(m)), o === void 0))
            if (typeof u == "function") {
              const _ = u(e, n, i);
              o = U(_) ? _ : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, m)) o = "";
            else if (d) {
              o = n[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${m} for interpolating ${e}`,
              ),
                (o = ""));
          else !U(o) && !this.useRawValueToEscape && (o = Uo(o));
          const g = f.safeValue(o);
          if (
            ((e = e.replace(n[0], g)),
            d
              ? ((f.regex.lastIndex += o.length),
                (f.regex.lastIndex -= n[0].length))
              : (f.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, r, s = {}) {
    let i, n, o;
    const a = (c, l) => {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0) return c;
      const d = c.split(new RegExp(`${pt(u)}[ ]*{`));
      let p = `{${d[1]}`;
      ((c = d[0]), (p = this.interpolate(p, o)));
      const h = p.match(/'/g),
        f = p.match(/"/g);
      ((((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !f) ||
        ((f == null ? void 0 : f.length) ?? 0) % 2 !== 0) &&
        (p = p.replace(/'/g, '"'));
      try {
        ((o = JSON.parse(p)), l && (o = { ...l, ...o }));
      } catch (m) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${c}`,
            m,
          ),
          `${c}${u}${p}`
        );
      }
      return (
        o.defaultValue &&
          o.defaultValue.indexOf(this.prefix) > -1 &&
          delete o.defaultValue,
        c
      );
    };
    for (; (i = this.nestingRegexp.exec(e)); ) {
      let c = [];
      ((o = { ...s }),
        (o = o.replace && !U(o.replace) ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue);
      const l = /{.*}/.test(i[1])
        ? i[1].lastIndexOf("}") + 1
        : i[1].indexOf(this.formatSeparator);
      if (
        (l !== -1 &&
          ((c = i[1]
            .slice(l)
            .split(this.formatSeparator)
            .map((u) => u.trim())
            .filter(Boolean)),
          (i[1] = i[1].slice(0, l))),
        (n = r(a.call(this, i[1].trim(), o), o)),
        n && i[0] === e && !U(n))
      )
        return n;
      (U(n) || (n = Uo(n)),
        n ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
          (n = "")),
        c.length &&
          (n = c.reduce(
            (u, d) =>
              this.format(u, d, s.lng, { ...s, interpolationkey: i[1].trim() }),
            n.trim(),
          )),
        (e = e.replace(i[0], n)),
        (this.regexp.lastIndex = 0));
    }
    return e;
  }
}
const Ty = (t) => {
    let e = t.toLowerCase().trim();
    const r = {};
    if (t.indexOf("(") > -1) {
      const s = t.split("(");
      e = s[0].toLowerCase().trim();
      const i = s[1].substring(0, s[1].length - 1);
      e === "currency" && i.indexOf(":") < 0
        ? r.currency || (r.currency = i.trim())
        : e === "relativetime" && i.indexOf(":") < 0
          ? r.range || (r.range = i.trim())
          : i.split(";").forEach((o) => {
              if (o) {
                const [a, ...c] = o.split(":"),
                  l = c
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  u = a.trim();
                (r[u] || (r[u] = l),
                  l === "false" && (r[u] = !1),
                  l === "true" && (r[u] = !0),
                  isNaN(l) || (r[u] = parseInt(l, 10)));
              }
            });
    }
    return { formatName: e, formatOptions: r };
  },
  Jo = (t) => {
    const e = {};
    return (r, s, i) => {
      let n = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (n = { ...n, [i.interpolationkey]: void 0 });
      const o = s + JSON.stringify(n);
      let a = e[o];
      return (a || ((a = t(Dr(s), i)), (e[o] = a)), a(r));
    };
  },
  Oy = (t) => (e, r, s) => t(Dr(r), s)(e);
class Py {
  constructor(e = {}) {
    ((this.logger = De.create("formatter")), (this.options = e), this.init(e));
  }
  init(e, r = { interpolation: {} }) {
    this.formatSeparator = r.interpolation.formatSeparator || ",";
    const s = r.cacheInBuiltFormats ? Jo : Oy;
    this.formats = {
      number: s((i, n) => {
        const o = new Intl.NumberFormat(i, { ...n });
        return (a) => o.format(a);
      }),
      currency: s((i, n) => {
        const o = new Intl.NumberFormat(i, { ...n, style: "currency" });
        return (a) => o.format(a);
      }),
      datetime: s((i, n) => {
        const o = new Intl.DateTimeFormat(i, { ...n });
        return (a) => o.format(a);
      }),
      relativetime: s((i, n) => {
        const o = new Intl.RelativeTimeFormat(i, { ...n });
        return (a) => o.format(a, n.range || "day");
      }),
      list: s((i, n) => {
        const o = new Intl.ListFormat(i, { ...n });
        return (a) => o.format(a);
      }),
    };
  }
  add(e, r) {
    this.formats[e.toLowerCase().trim()] = r;
  }
  addCached(e, r) {
    this.formats[e.toLowerCase().trim()] = Jo(r);
  }
  format(e, r, s, i = {}) {
    const n = r.split(this.formatSeparator);
    if (
      n.length > 1 &&
      n[0].indexOf("(") > 1 &&
      n[0].indexOf(")") < 0 &&
      n.find((a) => a.indexOf(")") > -1)
    ) {
      const a = n.findIndex((c) => c.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, a)].join(this.formatSeparator);
    }
    return n.reduce((a, c) => {
      var d;
      const { formatName: l, formatOptions: u } = Ty(c);
      if (this.formats[l]) {
        let p = a;
        try {
          const h =
              ((d = i == null ? void 0 : i.formatParams) == null
                ? void 0
                : d[i.interpolationkey]) || {},
            f = h.locale || h.lng || i.locale || i.lng || s;
          p = this.formats[l](a, f, { ...u, ...i, ...h });
        } catch (h) {
          this.logger.warn(h);
        }
        return p;
      } else this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, e);
  }
}
const ky = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Iy extends zs {
  constructor(e, r, s, i = {}) {
    var n, o;
    (super(),
      (this.backend = e),
      (this.store = r),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = i),
      (this.logger = De.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (o = (n = this.backend) == null ? void 0 : n.init) == null ||
        o.call(n, s, i.backend, i));
  }
  queueLoad(e, r, s, i) {
    const n = {},
      o = {},
      a = {},
      c = {};
    return (
      e.forEach((l) => {
        let u = !0;
        (r.forEach((d) => {
          const p = `${l}|${d}`;
          !s.reload && this.store.hasResourceBundle(l, d)
            ? (this.state[p] = 2)
            : this.state[p] < 0 ||
              (this.state[p] === 1
                ? o[p] === void 0 && (o[p] = !0)
                : ((this.state[p] = 1),
                  (u = !1),
                  o[p] === void 0 && (o[p] = !0),
                  n[p] === void 0 && (n[p] = !0),
                  c[d] === void 0 && (c[d] = !0)));
        }),
          u || (a[l] = !0));
      }),
      (Object.keys(n).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(n),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(c),
      }
    );
  }
  loaded(e, r, s) {
    const i = e.split("|"),
      n = i[0],
      o = i[1];
    (r && this.emit("failedLoading", n, o, r),
      !r &&
        s &&
        this.store.addResourceBundle(n, o, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = r ? -1 : 2),
      r && s && (this.state[e] = 0));
    const a = {};
    (this.queue.forEach((c) => {
      (yy(c.loaded, [n], o),
        ky(c, e),
        r && c.errors.push(r),
        c.pendingCount === 0 &&
          !c.done &&
          (Object.keys(c.loaded).forEach((l) => {
            a[l] || (a[l] = {});
            const u = c.loaded[l];
            u.length &&
              u.forEach((d) => {
                a[l][d] === void 0 && (a[l][d] = !0);
              });
          }),
          (c.done = !0),
          c.errors.length ? c.callback(c.errors) : c.callback()));
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((c) => !c.done)));
  }
  read(e, r, s, i = 0, n = this.retryTimeout, o) {
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: r,
        fcName: s,
        tried: i,
        wait: n,
        callback: o,
      });
      return;
    }
    this.readingCalls++;
    const a = (l, u) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (l && u && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, r, s, i + 1, n * 2, o);
          }, n);
          return;
        }
        o(l, u);
      },
      c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(e, r);
        l && typeof l.then == "function"
          ? l.then((u) => a(null, u)).catch(a)
          : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return c(e, r, a);
  }
  prepareLoading(e, r, s = {}, i) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        i && i()
      );
    (U(e) && (e = this.languageUtils.toResolveHierarchy(e)), U(r) && (r = [r]));
    const n = this.queueLoad(e, r, s, i);
    if (!n.toLoad.length) return (n.pending.length || i(), null);
    n.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, r, s) {
    this.prepareLoading(e, r, {}, s);
  }
  reload(e, r, s) {
    this.prepareLoading(e, r, { reload: !0 }, s);
  }
  loadOne(e, r = "") {
    const s = e.split("|"),
      i = s[0],
      n = s[1];
    this.read(i, n, "read", void 0, void 0, (o, a) => {
      (o &&
        this.logger.warn(
          `${r}loading namespace ${n} for language ${i} failed`,
          o,
        ),
        !o &&
          a &&
          this.logger.log(`${r}loaded namespace ${n} for language ${i}`, a),
        this.loaded(e, o, a));
    });
  }
  saveMissing(e, r, s, i, n, o = {}, a = () => {}) {
    var c, l, u, d, p;
    if (
      (l = (c = this.services) == null ? void 0 : c.utils) != null &&
      l.hasLoadedNamespace &&
      !(
        (d = (u = this.services) == null ? void 0 : u.utils) != null &&
        d.hasLoadedNamespace(r)
      )
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${r}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(s == null || s === "")) {
      if ((p = this.backend) != null && p.create) {
        const h = { ...o, isUpdate: n },
          f = this.backend.create.bind(this.backend);
        if (f.length < 6)
          try {
            let m;
            (f.length === 5 ? (m = f(e, r, s, i, h)) : (m = f(e, r, s, i)),
              m && typeof m.then == "function"
                ? m.then((g) => a(null, g)).catch(a)
                : a(null, m));
          } catch (m) {
            a(m);
          }
        else f(e, r, s, i, a, h);
      }
      !e || !e[0] || this.store.addResource(e[0], r, s, i);
    }
  }
}
const pi = () => ({
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
        U(t[1]) && (e.defaultValue = t[1]),
        U(t[2]) && (e.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((s) => {
          e[s] = r[s];
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
  Qo = (t) => {
    var e, r;
    return (
      U(t.ns) && (t.ns = [t.ns]),
      U(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
      U(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
      ((r = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null
        ? void 0
        : r.call(e, "cimode")) < 0 &&
        (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
      typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate),
      t
    );
  },
  ss = () => {},
  Ly = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((r) => {
      typeof t[r] == "function" && (t[r] = t[r].bind(t));
    });
  },
  wl = "__i18next_supportNoticeShown",
  jy = () => typeof globalThis < "u" && !!globalThis[wl],
  Ny = () => {
    typeof globalThis < "u" && (globalThis[wl] = !0);
  },
  Dy = (t) => {
    var e, r, s, i, n, o, a, c, l, u, d, p, h;
    return !!(
      ((s =
        (r =
          (e = t == null ? void 0 : t.modules) == null ? void 0 : e.backend) ==
        null
          ? void 0
          : r.name) == null
        ? void 0
        : s.indexOf("Locize")) > 0 ||
      ((a =
        (o =
          (n =
            (i = t == null ? void 0 : t.modules) == null
              ? void 0
              : i.backend) == null
            ? void 0
            : n.constructor) == null
          ? void 0
          : o.name) == null
        ? void 0
        : a.indexOf("Locize")) > 0 ||
      ((l =
        (c = t == null ? void 0 : t.options) == null ? void 0 : c.backend) !=
        null &&
        l.backends &&
        t.options.backend.backends.some((f) => {
          var m, g, _;
          return (
            ((m = f == null ? void 0 : f.name) == null
              ? void 0
              : m.indexOf("Locize")) > 0 ||
            ((_ =
              (g = f == null ? void 0 : f.constructor) == null
                ? void 0
                : g.name) == null
              ? void 0
              : _.indexOf("Locize")) > 0
          );
        })) ||
      ((d =
        (u = t == null ? void 0 : t.options) == null ? void 0 : u.backend) !=
        null &&
        d.projectId) ||
      ((h =
        (p = t == null ? void 0 : t.options) == null ? void 0 : p.backend) !=
        null &&
        h.backendOptions &&
        t.options.backend.backendOptions.some((f) =>
          f == null ? void 0 : f.projectId,
        ))
    );
  };
class Sr extends zs {
  constructor(e = {}, r) {
    if (
      (super(),
      (this.options = Qo(e)),
      (this.services = {}),
      (this.logger = De),
      (this.modules = { external: [] }),
      Ly(this),
      r && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(e, r), this);
      setTimeout(() => {
        this.init(e, r);
      }, 0);
    }
  }
  init(e = {}, r) {
    ((this.isInitializing = !0),
      typeof e == "function" && ((r = e), (e = {})),
      e.defaultNS == null &&
        e.ns &&
        (U(e.ns)
          ? (e.defaultNS = e.ns)
          : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0])));
    const s = pi();
    ((this.options = { ...s, ...this.options, ...Qo(e) }),
      (this.options.interpolation = {
        ...s.interpolation,
        ...this.options.interpolation,
      }),
      e.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = e.keySeparator),
      e.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = e.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          s.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !Dy(this) &&
        !jy() &&
        (typeof console < "u" &&
          typeof console.info < "u" &&
          console.info(
            "🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙",
          ),
        Ny()));
    const i = (l) => (l ? (typeof l == "function" ? new l() : l) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? De.init(i(this.modules.logger), this.options)
        : De.init(null, this.options);
      let l;
      this.modules.formatter ? (l = this.modules.formatter) : (l = Py);
      const u = new Ho(this.options);
      this.store = new zo(this.options.resources, this.options);
      const d = this.services;
      ((d.logger = De),
        (d.resourceStore = this.store),
        (d.languageUtils = u),
        (d.pluralResolver = new Ry(u, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== s.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        l &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((d.formatter = i(l)),
          d.formatter.init && d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter,
          ))),
        (d.interpolator = new Yo(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Iy(
          i(this.modules.backend),
          d.resourceStore,
          d,
          this.options,
        )),
        d.backendConnector.on("*", (h, ...f) => {
          this.emit(h, ...f);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = i(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = i(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new xs(this.services, this.options)),
        this.translator.on("*", (h, ...f) => {
          this.emit(h, ...f);
        }),
        this.modules.external.forEach((h) => {
          h.init && h.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ss),
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
        this[l] = (...u) => this.store[l](...u);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((l) => {
        this[l] = (...u) => (this.store[l](...u), this);
      }));
    const a = pr(),
      c = () => {
        const l = (u, d) => {
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
            a.resolve(d),
            r(u, d));
        };
        if (this.languages && !this.isInitialized)
          return l(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, l);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? c()
        : setTimeout(c, 0),
      a
    );
  }
  loadResources(e, r = ss) {
    var n, o;
    let s = r;
    const i = U(e) ? e : this.language;
    if (
      (typeof e == "function" && (s = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (i == null ? void 0 : i.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const a = [],
        c = (l) => {
          if (!l || l === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(l).forEach((d) => {
            d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
          });
        };
      (i
        ? c(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((u) => c(u)),
        (o = (n = this.options.preload) == null ? void 0 : n.forEach) == null ||
          o.call(n, (l) => c(l)),
        this.services.backendConnector.load(a, this.options.ns, (l) => {
          (!l &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(l));
        }));
    } else s(null);
  }
  reloadResources(e, r, s) {
    const i = pr();
    return (
      typeof e == "function" && ((s = e), (e = void 0)),
      typeof r == "function" && ((s = r), (r = void 0)),
      e || (e = this.languages),
      r || (r = this.options.ns),
      s || (s = ss),
      this.services.backendConnector.reload(e, r, (n) => {
        (i.resolve(), s(n));
      }),
      i
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
      e.type === "postProcessor" && _l.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const s = this.languages[r];
        if (
          !(["cimode", "dev"].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(e) < 0 &&
        this.store.hasLanguageSomeTranslations(e) &&
        ((this.resolvedLanguage = e), this.languages.unshift(e));
    }
  }
  changeLanguage(e, r) {
    this.isLanguageChangingTo = e;
    const s = pr();
    this.emit("languageChanging", e);
    const i = (a) => {
        ((this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a));
      },
      n = (a, c) => {
        (c
          ? this.isLanguageChangingTo === e &&
            (i(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", c),
            this.logger.log("languageChanged", c))
          : (this.isLanguageChangingTo = void 0),
          s.resolve((...l) => this.t(...l)),
          r && r(a, (...l) => this.t(...l)));
      },
      o = (a) => {
        var u, d;
        !e && !a && this.services.languageDetector && (a = []);
        const c = U(a) ? a : a && a[0],
          l = this.store.hasLanguageSomeTranslations(c)
            ? c
            : this.services.languageUtils.getBestMatchFromCodes(U(a) ? [a] : a);
        (l &&
          (this.language || i(l),
          this.translator.language || this.translator.changeLanguage(l),
          (d =
            (u = this.services.languageDetector) == null
              ? void 0
              : u.cacheUserLanguage) == null || d.call(u, l)),
          this.loadResources(l, (p) => {
            n(p, l);
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
      s
    );
  }
  getFixedT(e, r, s) {
    const i = (n, o, ...a) => {
      let c;
      (typeof o != "object"
        ? (c = this.options.overloadTranslationOptionHandler([n, o].concat(a)))
        : (c = { ...o }),
        (c.lng = c.lng || i.lng),
        (c.lngs = c.lngs || i.lngs),
        (c.ns = c.ns || i.ns),
        c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || i.keyPrefix));
      const l = this.options.keySeparator || ".";
      let u;
      return (
        c.keyPrefix && Array.isArray(n)
          ? (u = n.map(
              (d) => (
                typeof d == "function" &&
                  (d = Er(d, { ...this.options, ...o })),
                `${c.keyPrefix}${l}${d}`
              ),
            ))
          : (typeof n == "function" && (n = Er(n, { ...this.options, ...o })),
            (u = c.keyPrefix ? `${c.keyPrefix}${l}${n}` : n)),
        this.t(u, c)
      );
    };
    return (
      U(e) ? (i.lng = e) : (i.lngs = e),
      (i.ns = r),
      (i.keyPrefix = s),
      i
    );
  }
  t(...e) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...e);
  }
  exists(...e) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, r = {}) {
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
    const s = r.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (a, c) => {
      const l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (r.precheck) {
      const a = r.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(s, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(s, e) && (!i || o(n, e)))
    );
  }
  loadNamespaces(e, r) {
    const s = pr();
    return this.options.ns
      ? (U(e) && (e = [e]),
        e.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          (s.resolve(), r && r(i));
        }),
        s)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(e, r) {
    const s = pr();
    U(e) && (e = [e]);
    const i = this.options.preload || [],
      n = e.filter(
        (o) =>
          i.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o),
      );
    return n.length
      ? ((this.options.preload = i.concat(n)),
        this.loadResources((o) => {
          (s.resolve(), r && r(o));
        }),
        s)
      : (r && r(), Promise.resolve());
  }
  dir(e) {
    var i, n;
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (((i = this.languages) == null ? void 0 : i.length) > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    try {
      const o = new Intl.Locale(e);
      if (o && o.getTextInfo) {
        const a = o.getTextInfo();
        if (a && a.direction) return a.direction;
      }
    } catch {}
    const r = [
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
      s =
        ((n = this.services) == null ? void 0 : n.languageUtils) ||
        new Ho(pi());
    return e.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : r.indexOf(s.getLanguagePartFromCode(e)) > -1 ||
          e.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(e = {}, r) {
    const s = new Sr(e, r);
    return ((s.createInstance = Sr.createInstance), s);
  }
  cloneInstance(e = {}, r = ss) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = { ...this.options, ...e, isClone: !0 },
      n = new Sr(i);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) &&
        (n.logger = n.logger.clone(e)),
      ["store", "services", "language"].forEach((a) => {
        n[a] = this[a];
      }),
      (n.services = { ...this.services }),
      (n.services.utils = { hasLoadedNamespace: n.hasLoadedNamespace.bind(n) }),
      s)
    ) {
      const a = Object.keys(this.store.data).reduce(
        (c, l) => (
          (c[l] = { ...this.store.data[l] }),
          (c[l] = Object.keys(c[l]).reduce(
            (u, d) => ((u[d] = { ...c[l][d] }), u),
            c[l],
          )),
          c
        ),
        {},
      );
      ((n.store = new zo(a, i)), (n.services.resourceStore = n.store));
    }
    if (e.interpolation) {
      const c = {
          ...pi().interpolation,
          ...this.options.interpolation,
          ...e.interpolation,
        },
        l = { ...i, interpolation: c };
      n.services.interpolator = new Yo(l);
    }
    return (
      (n.translator = new xs(n.services, i)),
      n.translator.on("*", (a, ...c) => {
        n.emit(a, ...c);
      }),
      n.init(i, r),
      (n.translator.options = i),
      (n.translator.backendConnector.services.utils = {
        hasLoadedNamespace: n.hasLoadedNamespace.bind(n),
      }),
      n
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
const ne = Sr.createInstance();
ne.createInstance;
ne.dir;
ne.init;
ne.loadResources;
ne.reloadResources;
ne.use;
ne.changeLanguage;
ne.getFixedT;
ne.t;
ne.exists;
ne.setDefaultNamespace;
ne.hasLoadedNamespace;
ne.loadNamespaces;
ne.loadLanguages;
const $y = (t, e, r, s) => {
    var n, o, a, c;
    const i = [r, { code: e, ...(s || {}) }];
    if (
      (o = (n = t == null ? void 0 : t.services) == null ? void 0 : n.logger) !=
        null &&
      o.forward
    )
      return t.services.logger.forward(i, "warn", "react-i18next::", !0);
    (At(i[0]) && (i[0] = `react-i18next:: ${i[0]}`),
      (c = (a = t == null ? void 0 : t.services) == null ? void 0 : a.logger) !=
        null && c.warn
        ? t.services.logger.warn(...i)
        : console != null && console.warn && console.warn(...i));
  },
  Xo = {},
  El = (t, e, r, s) => {
    (At(r) && Xo[r]) || (At(r) && (Xo[r] = new Date()), $y(t, e, r, s));
  },
  Sl = (t, e) => () => {
    if (t.isInitialized) e();
    else {
      const r = () => {
        (setTimeout(() => {
          t.off("initialized", r);
        }, 0),
          e());
      };
      t.on("initialized", r);
    }
  },
  Yi = (t, e, r) => {
    t.loadNamespaces(e, Sl(t, r));
  },
  Zo = (t, e, r, s) => {
    if (
      (At(r) && (r = [r]),
      t.options.preload && t.options.preload.indexOf(e) > -1)
    )
      return Yi(t, r, s);
    (r.forEach((i) => {
      t.options.ns.indexOf(i) < 0 && t.options.ns.push(i);
    }),
      t.loadLanguages(e, Sl(t, s)));
  },
  My = (t, e, r = {}) =>
    !e.languages || !e.languages.length
      ? (El(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: e.languages,
        }),
        !0)
      : e.hasLoadedNamespace(t, {
          lng: r.lng,
          precheck: (s, i) => {
            if (
              r.bindI18n &&
              r.bindI18n.indexOf("languageChanging") > -1 &&
              s.services.backendConnector.backend &&
              s.isLanguageChangingTo &&
              !i(s.isLanguageChangingTo, t)
            )
              return !1;
          },
        }),
  At = (t) => typeof t == "string",
  Uy = (t) => typeof t == "object" && t !== null,
  Fy =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  qy = {
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
  Vy = (t) => qy[t],
  zy = (t) => t.replace(Fy, Vy);
let Ji = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: zy,
  transDefaultProps: void 0,
};
const By = (t = {}) => {
    Ji = { ...Ji, ...t };
  },
  Hy = () => Ji;
let xl;
const Gy = (t) => {
    xl = t;
  },
  Wy = () => xl,
  Ky = {
    type: "3rdParty",
    init(t) {
      (By(t.options.react), Gy(t));
    },
  },
  Yy = y.createContext();
class Jy {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var Cl = { exports: {} },
  Al = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er = y;
function Qy(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Xy = typeof Object.is == "function" ? Object.is : Qy,
  Zy = er.useState,
  ev = er.useEffect,
  tv = er.useLayoutEffect,
  rv = er.useDebugValue;
function sv(t, e) {
  var r = e(),
    s = Zy({ inst: { value: r, getSnapshot: e } }),
    i = s[0].inst,
    n = s[1];
  return (
    tv(
      function () {
        ((i.value = r), (i.getSnapshot = e), fi(i) && n({ inst: i }));
      },
      [t, r, e],
    ),
    ev(
      function () {
        return (
          fi(i) && n({ inst: i }),
          t(function () {
            fi(i) && n({ inst: i });
          })
        );
      },
      [t],
    ),
    rv(r),
    r
  );
}
function fi(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var r = e();
    return !Xy(t, r);
  } catch {
    return !0;
  }
}
function iv(t, e) {
  return e();
}
var nv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? iv
    : sv;
Al.useSyncExternalStore =
  er.useSyncExternalStore !== void 0 ? er.useSyncExternalStore : nv;
Cl.exports = Al;
var ov = Cl.exports;
const av = (t, e) => {
    if (At(e)) return e;
    if (Uy(e) && At(e.defaultValue)) return e.defaultValue;
    if (typeof t == "function") return "";
    if (Array.isArray(t)) {
      const r = t[t.length - 1];
      return typeof r == "function" ? "" : r;
    }
    return t;
  },
  cv = { t: av, ready: !1 },
  lv = () => () => {},
  or = (t, e = {}) => {
    var T, I, B;
    const { i18n: r } = e,
      { i18n: s, defaultNS: i } = y.useContext(Yy) || {},
      n = r || s || Wy();
    (n && !n.reportNamespaces && (n.reportNamespaces = new Jy()),
      n ||
        El(
          n,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        ));
    const o = y.useMemo(() => {
        var O;
        return {
          ...Hy(),
          ...((O = n == null ? void 0 : n.options) == null ? void 0 : O.react),
          ...e,
        };
      }, [n, e]),
      { useSuspense: a, keyPrefix: c } = o,
      l =
        i ||
        ((T = n == null ? void 0 : n.options) == null ? void 0 : T.defaultNS),
      u = At(l) ? [l] : l || ["translation"],
      d = y.useMemo(() => u, u);
    (B =
      (I = n == null ? void 0 : n.reportNamespaces) == null
        ? void 0
        : I.addUsedNamespaces) == null || B.call(I, d);
    const p = y.useRef(0),
      h = y.useCallback(
        (O) => {
          if (!n) return lv;
          const { bindI18n: P, bindI18nStore: R } = o,
            $ = () => {
              ((p.current += 1), O());
            };
          return (
            P && n.on(P, $),
            R && n.store.on(R, $),
            () => {
              (P && P.split(" ").forEach((M) => n.off(M, $)),
                R && R.split(" ").forEach((M) => n.store.off(M, $)));
            }
          );
        },
        [n, o],
      ),
      f = y.useRef(),
      m = y.useCallback(() => {
        if (!n) return cv;
        const O =
            !!(n.isInitialized || n.initializedStoreOnce) &&
            d.every((N) => My(N, n, o)),
          P = e.lng || n.language,
          R = p.current,
          $ = f.current;
        if (
          $ &&
          $.ready === O &&
          $.lng === P &&
          $.keyPrefix === c &&
          $.revision === R
        )
          return $;
        const V = {
          t: n.getFixedT(P, o.nsMode === "fallback" ? d : d[0], c),
          ready: O,
          lng: P,
          keyPrefix: c,
          revision: R,
        };
        return ((f.current = V), V);
      }, [n, d, c, o, e.lng]),
      [g, _] = y.useState(0),
      { t: b, ready: w } = ov.useSyncExternalStore(h, m, m);
    y.useEffect(() => {
      if (n && !w && !a) {
        const O = () => _((P) => P + 1);
        e.lng ? Zo(n, e.lng, d, O) : Yi(n, d, O);
      }
    }, [n, e.lng, d, w, a, g]);
    const E = n || {},
      S = y.useRef(null),
      A = y.useRef(),
      x = (O) => {
        const P = Object.getOwnPropertyDescriptors(O);
        P.__original && delete P.__original;
        const R = Object.create(Object.getPrototypeOf(O), P);
        if (!Object.prototype.hasOwnProperty.call(R, "__original"))
          try {
            Object.defineProperty(R, "__original", {
              value: O,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return R;
      },
      L = y.useMemo(() => {
        const O = E,
          P = O == null ? void 0 : O.language;
        let R = O;
        O &&
          (S.current && S.current.__original === O
            ? A.current !== P
              ? ((R = x(O)), (S.current = R), (A.current = P))
              : (R = S.current)
            : ((R = x(O)), (S.current = R), (A.current = P)));
        const $ = [b, R, w];
        return (($.t = b), ($.i18n = R), ($.ready = w), $);
      }, [b, E, w, E.resolvedLanguage, E.language, E.languages]);
    if (n && a && !w)
      throw new Promise((O) => {
        const P = () => O();
        e.lng ? Zo(n, e.lng, d, P) : Yi(n, d, P);
      });
    return L;
  },
  { slice: uv, forEach: dv } = [];
function hv(t) {
  return (
    dv.call(uv.call(arguments, 1), (e) => {
      if (e) for (const r in e) t[r] === void 0 && (t[r] = e[r]);
    }),
    t
  );
}
function pv(t) {
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
      ].some((r) => r.test(t));
}
const ea = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  fv = function (t, e) {
    const s =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      i = encodeURIComponent(e);
    let n = `${t}=${i}`;
    if (s.maxAge > 0) {
      const o = s.maxAge - 0;
      if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
      n += `; Max-Age=${Math.floor(o)}`;
    }
    if (s.domain) {
      if (!ea.test(s.domain)) throw new TypeError("option domain is invalid");
      n += `; Domain=${s.domain}`;
    }
    if (s.path) {
      if (!ea.test(s.path)) throw new TypeError("option path is invalid");
      n += `; Path=${s.path}`;
    }
    if (s.expires) {
      if (typeof s.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      n += `; Expires=${s.expires.toUTCString()}`;
    }
    if (
      (s.httpOnly && (n += "; HttpOnly"),
      s.secure && (n += "; Secure"),
      s.sameSite)
    )
      switch (
        typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite
      ) {
        case !0:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return (s.partitioned && (n += "; Partitioned"), n);
  },
  ta = {
    create(t, e, r, s) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (r &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)),
        s && (i.domain = s),
        (document.cookie = fv(t, e, i)));
    },
    read(t) {
      const e = `${t}=`,
        r = document.cookie.split(";");
      for (let s = 0; s < r.length; s++) {
        let i = r[s];
        for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
      }
      return null;
    },
    remove(t, e) {
      this.create(t, "", -1, e);
    },
  };
var mv = {
    name: "cookie",
    lookup(t) {
      let { lookupCookie: e } = t;
      if (e && typeof document < "u") return ta.read(e) || void 0;
    },
    cacheUserLanguage(t, e) {
      let {
        lookupCookie: r,
        cookieMinutes: s,
        cookieDomain: i,
        cookieOptions: n,
      } = e;
      r && typeof document < "u" && ta.create(r, t, s, i, n);
    },
  },
  gv = {
    name: "querystring",
    lookup(t) {
      var s;
      let { lookupQuerystring: e } = t,
        r;
      if (typeof window < "u") {
        let { search: i } = window.location;
        !window.location.search &&
          ((s = window.location.hash) == null ? void 0 : s.indexOf("?")) > -1 &&
          (i = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        const o = i.substring(1).split("&");
        for (let a = 0; a < o.length; a++) {
          const c = o[a].indexOf("=");
          c > 0 && o[a].substring(0, c) === e && (r = o[a].substring(c + 1));
        }
      }
      return r;
    },
  },
  yv = {
    name: "hash",
    lookup(t) {
      var i;
      let { lookupHash: e, lookupFromHashIndex: r } = t,
        s;
      if (typeof window < "u") {
        const { hash: n } = window.location;
        if (n && n.length > 2) {
          const o = n.substring(1);
          if (e) {
            const a = o.split("&");
            for (let c = 0; c < a.length; c++) {
              const l = a[c].indexOf("=");
              l > 0 &&
                a[c].substring(0, l) === e &&
                (s = a[c].substring(l + 1));
            }
          }
          if (s) return s;
          if (!s && r > -1) {
            const a = n.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(a)
              ? (i = a[typeof r == "number" ? r : 0]) == null
                ? void 0
                : i.replace("/", "")
              : void 0;
          }
        }
      }
      return s;
    },
  };
let Lt = null;
const ra = () => {
  if (Lt !== null) return Lt;
  try {
    if (((Lt = typeof window < "u" && window.localStorage !== null), !Lt))
      return !1;
    const t = "i18next.translate.boo";
    (window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t));
  } catch {
    Lt = !1;
  }
  return Lt;
};
var vv = {
  name: "localStorage",
  lookup(t) {
    let { lookupLocalStorage: e } = t;
    if (e && ra()) return window.localStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(t, e) {
    let { lookupLocalStorage: r } = e;
    r && ra() && window.localStorage.setItem(r, t);
  },
};
let jt = null;
const sa = () => {
  if (jt !== null) return jt;
  try {
    if (((jt = typeof window < "u" && window.sessionStorage !== null), !jt))
      return !1;
    const t = "i18next.translate.boo";
    (window.sessionStorage.setItem(t, "foo"),
      window.sessionStorage.removeItem(t));
  } catch {
    jt = !1;
  }
  return jt;
};
var _v = {
    name: "sessionStorage",
    lookup(t) {
      let { lookupSessionStorage: e } = t;
      if (e && sa()) return window.sessionStorage.getItem(e) || void 0;
    },
    cacheUserLanguage(t, e) {
      let { lookupSessionStorage: r } = e;
      r && sa() && window.sessionStorage.setItem(r, t);
    },
  },
  bv = {
    name: "navigator",
    lookup(t) {
      const e = [];
      if (typeof navigator < "u") {
        const { languages: r, userLanguage: s, language: i } = navigator;
        if (r) for (let n = 0; n < r.length; n++) e.push(r[n]);
        (s && e.push(s), i && e.push(i));
      }
      return e.length > 0 ? e : void 0;
    },
  },
  wv = {
    name: "htmlTag",
    lookup(t) {
      let { htmlTag: e } = t,
        r;
      const s = e || (typeof document < "u" ? document.documentElement : null);
      return (
        s &&
          typeof s.getAttribute == "function" &&
          (r = s.getAttribute("lang")),
        r
      );
    },
  },
  Ev = {
    name: "path",
    lookup(t) {
      var i;
      let { lookupFromPathIndex: e } = t;
      if (typeof window > "u") return;
      const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(r)
        ? (i = r[typeof e == "number" ? e : 0]) == null
          ? void 0
          : i.replace("/", "")
        : void 0;
    },
  },
  Sv = {
    name: "subdomain",
    lookup(t) {
      var i, n;
      let { lookupFromSubdomainIndex: e } = t;
      const r = typeof e == "number" ? e + 1 : 1,
        s =
          typeof window < "u" &&
          ((n = (i = window.location) == null ? void 0 : i.hostname) == null
            ? void 0
            : n.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
              ));
      if (s) return s[r];
    },
  };
let Rl = !1;
try {
  (document.cookie, (Rl = !0));
} catch {}
const Tl = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
Rl || Tl.splice(1, 1);
const xv = () => ({
  order: Tl,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (t) => t,
});
class Ol {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = "languageDetector"), (this.detectors = {}), this.init(e, r));
  }
  init() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = e),
      (this.options = hv(r, this.options || {}, xv())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = s),
      this.addDetector(mv),
      this.addDetector(gv),
      this.addDetector(vv),
      this.addDetector(_v),
      this.addDetector(bv),
      this.addDetector(wv),
      this.addDetector(Ev),
      this.addDetector(Sv),
      this.addDetector(yv));
  }
  addDetector(e) {
    return ((this.detectors[e.name] = e), this);
  }
  detect() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      r = [];
    return (
      e.forEach((s) => {
        if (this.detectors[s]) {
          let i = this.detectors[s].lookup(this.options);
          (i && typeof i == "string" && (i = [i]), i && (r = r.concat(i)));
        }
      }),
      (r = r
        .filter((s) => s != null && !pv(s))
        .map((s) => this.options.convertDetectedLanguage(s))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? r
        : r.length > 0
          ? r[0]
          : null
    );
  }
  cacheUserLanguage(e) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    r &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(e) > -1) ||
        r.forEach((s) => {
          this.detectors[s] &&
            this.detectors[s].cacheUserLanguage(e, this.options);
        }));
  }
}
Ol.type = "languageDetector";
const Cv = {
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
  Av = { super: "Super", reports: "Relatórios" },
  Rv = {
    overview: "Início",
    radar: "Radar",
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
  Tv = {
    dashboard: "Painel de Controle",
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
  Ov = { placeholder: "Buscar relatórios, métricas..." },
  Pv = {
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
  kv = {
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
  Iv = {
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
  Lv = {
    not_found_title: "Página não encontrada",
    not_found_desc:
      "A página que você está procurando não existe ou foi movida.",
    return_home: "Voltar para o início",
  },
  jv = {
    title: "Painel de Controle",
    subtitle: "Monitoramento de Sobrevivência, Estabilidade e Crescimento.",
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
  Nv = {
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
  Dv = {
    index_title: "SuperRelatórios - Transforme Dados em Decisões",
    index_desc:
      "Gere relatórios inteligentes em minutos. A plataforma de BI feita para PMEs que buscam crescimento real.",
  },
  $v = {
    bi: Cv,
    brand: Av,
    nav: Rv,
    routes: Tv,
    search: Ov,
    landing: Pv,
    decision_panel: kv,
    common: Iv,
    errors: Lv,
    dashboard: jv,
    auth: Nv,
    seo: Dv,
  },
  Mv = {
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
  Uv = { super: "Super", reports: "Reports" },
  Fv = {
    overview: "Home",
    radar: "Radar",
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
  qv = {
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
  Vv = { placeholder: "Search reports, metrics..." },
  zv = {
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
  Bv = {
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
  Hv = {
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
  Gv = {
    not_found_title: "Page not found",
    not_found_desc:
      "The page you are looking for does not exist or has been moved.",
    return_home: "Return to home",
  },
  Wv = {
    title: "Control Panel",
    subtitle: "Monitoring Survival, Stability and Growth.",
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
  Kv = {
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
  Yv = {
    index_title: "SuperRelatórios - Transform Data into Decisions",
    index_desc:
      "Generate intelligent reports in minutes. The BI platform built for SMEs seeking real growth.",
  },
  Jv = {
    bi: Mv,
    brand: Uv,
    nav: Fv,
    routes: qv,
    search: Vv,
    landing: zv,
    decision_panel: Bv,
    common: Hv,
    errors: Gv,
    dashboard: Wv,
    auth: Kv,
    seo: Yv,
  },
  Qv = {
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
  Xv = { super: "Súper", reports: "Reportes" },
  Zv = {
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
  e_ = {
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
  t_ = {
    overview: "Inicio",
    radar: "Radar",
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
  r_ = {
    dashboard: "Panel de Control",
    reports: "Reportes",
    reports_new: "Nuevo Reporte",
    metrics: "Indicadores",
    metrics_config: "Configurar Métricas",
    decision_panel: "Panel de Decisión",
    analytics: "Analytics",
    consolidated: "Consolidado",
    priorities: "Prioridades",
    action_plan: "Plan de Acción",
    data: "Mis Datos",
    profile: "Perfil",
    settings: "Configuraciones",
  },
  s_ = {
    title: "Panel de Control",
    subtitle: "Monitoreo de Supervivencia, Estabilidad y Crecimiento.",
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
  i_ = {
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
  n_ = {
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
  o_ = {
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
  a_ = {
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
  c_ = {
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
  l_ = {
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
  u_ = {
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
  d_ = {
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
  h_ = {
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
  p_ = {
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
  f_ = {
    index_title:
      "SúperReportes | El Generador de Reportes Profesionales con IA",
    index_desc:
      "Genere reportes profesionales con análisis de consultor en minutos. La plataforma nº1 para Pymes que no quieren perder tiempo con planillas manuales.",
  },
  m_ = {
    not_found_title: "Página no encontrada",
    not_found_desc:
      "¡Oops! Parece que ha seguido un enlace que no existe o la página ha sido movida.",
    return_home: "Volver al Inicio",
  },
  g_ = {
    system: "Preparando su entorno...",
    data: "Organizando información...",
    standard: "Cargando...",
  },
  y_ = {
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
  v_ = {
    bi: Qv,
    brand: Xv,
    common: Zv,
    landing: e_,
    nav: t_,
    routes: r_,
    dashboard: s_,
    auth: i_,
    builder: n_,
    reports: o_,
    report_detail: a_,
    folders: c_,
    profile: l_,
    settings: u_,
    data_hub: d_,
    priorities: h_,
    action_plan: p_,
    seo: f_,
    errors: m_,
    loading_state: g_,
    decision_panel: y_,
  },
  __ = {
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
  b_ = { strategy: __ },
  w_ = {
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
  E_ = {
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
  S_ = { strategy: w_, common: E_ },
  x_ = {
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
  C_ = {
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
  A_ = { strategy: x_, common: C_ },
  R_ = {
    "pt-BR": { translation: { ...$v, ...b_ } },
    "en-US": { translation: { ...Jv, ...S_ } },
    "es-ES": { translation: { ...v_, ...A_ } },
  };
ne.use(Ol)
  .use(Ky)
  .init({
    resources: R_,
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US", "es-ES"],
    interpolation: { escapeValue: !1 },
  });
const Bs = {
    "pt-BR": {
      "/": "/pt-BR",
      "/flows": "/pt-BR/flows",
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
      "/flows": "/en-US/flows",
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
      "/flows": "/es-ES/flows",
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
  fr = (t, e) => {
    const r = e || ne.language,
      s = Bs[r];
    if (!s) return t;
    if (s[t]) return s[t];
    for (const [i, n] of Object.entries(s))
      if (i.includes(":") && t.startsWith(i.split(":")[0])) {
        const o = t.replace(i.split(":")[0], "");
        return n.replace(":id", o);
      }
    return t;
  },
  mr = (t) => {
    for (const [e, r] of Object.entries(Bs))
      for (const [s, i] of Object.entries(r)) {
        if (t === i) return s;
        if (i.includes(":") && t.startsWith(i.split(":")[0])) {
          const n = t.replace(i.split(":")[0], "");
          return s.replace(":id", n);
        }
      }
    return t;
  },
  T_ = (t) => {
    for (const [e, r] of Object.entries(Bs))
      for (const s of Object.values(r)) {
        const i = s;
        if (t === i || (i.includes(":") && t.startsWith(i.split(":")[0])))
          return e;
      }
    return ne.language;
  },
  wn = () => {
    const t = tr(),
      e = pa(),
      { i18n: r } = or(),
      [s, i] = y.useState(!1),
      n = () => {
        const p = localStorage.getItem("preferred-language");
        if (p && ["pt-BR", "en-US", "es-ES"].includes(p)) return p;
        const h = navigator.language;
        return h.startsWith("pt")
          ? "pt-BR"
          : h.startsWith("es")
            ? "es-ES"
            : h.startsWith("en")
              ? "en-US"
              : "pt-BR";
      },
      o = (p, h) => {
        const f = fr(p, r.language);
        h != null && h.replace ? e(f, { replace: !0 }) : e(f);
      },
      a = () => {
        const p = t.pathname;
        if (p === "/" || p === "") return !0;
        const h = n();
        if (T_(p) !== h) {
          const m = mr(p),
            g = fr(m, h);
          if (g !== p)
            return (
              i(!0),
              localStorage.setItem("preferred-language", h),
              r.changeLanguage(h),
              e(g, { replace: !0 }),
              !0
            );
        }
        return !1;
      },
      c = (p) => {
        const h = t.pathname,
          f = mr(h),
          m = fr(f, p);
        (localStorage.setItem("preferred-language", p),
          r.changeLanguage(p),
          e(m, { replace: !0 }));
      },
      l = () => {
        const p = t.pathname;
        return mr(p);
      },
      u = () => {
        const p = mr(t.pathname),
          h = {};
        for (const f of ["pt-BR", "en-US", "es-ES"]) h[f] = fr(p, f);
        return h;
      },
      d = (p, h) => {
        const f = h || r.language,
          m = Bs[f];
        return m ? Object.values(m).includes(p) : !1;
      };
    return (
      y.useEffect(() => {
        const p = n();
        (p !== r.language && r.changeLanguage(p),
          a() &&
            (i(!1),
            localStorage.setItem("preferred-language", p),
            e(fr(mr(t.pathname), p), { replace: !0 })));
      }, []),
      {
        navigateLocalized: o,
        changeLanguage: c,
        getCanonicalUrl: l,
        getAlternateUrls: u,
        isRouteAvailable: d,
        detectPreferredLanguage: n,
        checkRedirect: a,
        isRedirecting: s,
        currentLanguage: r.language,
        currentPath: t.pathname,
      }
    );
  },
  O_ = ({
    title: t,
    description: e,
    keywords: r,
    image: s,
    type: i = "website",
    siteName: n = "SuperRelatórios",
    locale: o,
  }) => {
    (tr(), or());
    const {
        getCanonicalUrl: a,
        getAlternateUrls: c,
        currentLanguage: l,
      } = wn(),
      u = {
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
      d = u[l] || u["pt-BR"],
      p = a(),
      h = c(),
      f = t || d.defaultTitle,
      m = e || d.defaultDescription,
      g = r || d.defaultKeywords,
      _ = s || "https://superrelatorios.vercel.app/og-image.jpg",
      b = o || l;
    return (
      y.useEffect(() => {
        const w = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: f,
            description: m,
            url: p,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
            author: {
              "@type": "Organization",
              name: d.siteName,
              url: "https://superrelatorios.vercel.app",
            },
            inLanguage: l,
            isAccessibleForFree: !0,
          },
          E = document.querySelector('script[type="application/ld+json"]');
        E && E.remove();
        const S = document.createElement("script");
        return (
          (S.type = "application/ld+json"),
          (S.textContent = JSON.stringify(w)),
          document.head.appendChild(S),
          () => {
            const A = document.querySelector(
              'script[type="application/ld+json"]',
            );
            A && A.remove();
          }
        );
      }, [f, m, p, l]),
      v.jsxs(Au, {
        children: [
          v.jsx("title", { children: f }),
          v.jsx("meta", { name: "description", content: m }),
          v.jsx("meta", { name: "keywords", content: g }),
          v.jsx("meta", { name: "author", content: d.siteName }),
          v.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          v.jsx("meta", { name: "robots", content: "index, follow" }),
          v.jsx("link", { rel: "canonical", href: p }),
          Object.entries(h).map(([w, E]) =>
            v.jsx("link", { rel: "alternate", hrefLang: w, href: E }, w),
          ),
          v.jsx("link", {
            rel: "alternate",
            hrefLang: "x-default",
            href: h["en-US"] || p,
          }),
          v.jsx("meta", { property: "og:type", content: i }),
          v.jsx("meta", { property: "og:title", content: f }),
          v.jsx("meta", { property: "og:description", content: m }),
          v.jsx("meta", { property: "og:image", content: _ }),
          v.jsx("meta", { property: "og:url", content: p }),
          v.jsx("meta", { property: "og:site_name", content: d.siteName }),
          v.jsx("meta", {
            property: "og:locale",
            content: b.replace("-", "_"),
          }),
          v.jsx("meta", {
            property: "twitter:card",
            content: "summary_large_image",
          }),
          v.jsx("meta", { property: "twitter:title", content: f }),
          v.jsx("meta", { property: "twitter:description", content: m }),
          v.jsx("meta", { property: "twitter:image", content: _ }),
          v.jsx("meta", { name: "theme-color", content: "#3b82f6" }),
          v.jsx("meta", {
            name: "msapplication-TileColor",
            content: "#3b82f6",
          }),
          v.jsx("meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          }),
          v.jsx("meta", {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          }),
          v.jsx("meta", {
            name: "apple-mobile-web-app-title",
            content: d.siteName,
          }),
          v.jsx("html", { lang: l }),
          v.jsx("meta", { name: "geo.region", content: "BR" }),
          v.jsx("meta", { name: "geo.placename", content: "Brazil" }),
          v.jsx("meta", {
            httpEquiv: "Content-Type",
            content: "text/html; charset=UTF-8",
          }),
          v.jsx("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
          v.jsx("meta", {
            httpEquiv: "X-Content-Type-Options",
            content: "nosniff",
          }),
          v.jsx("meta", { httpEquiv: "X-Frame-Options", content: "DENY" }),
          v.jsx("meta", {
            httpEquiv: "X-XSS-Protection",
            content: "1; mode=block",
          }),
          v.jsx("meta", {
            httpEquiv: "Referrer-Policy",
            content: "strict-origin-when-cross-origin",
          }),
          v.jsx("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          v.jsx("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
          }),
        ],
      })
    );
  },
  P_ = ({ children: t }) => {
    const e = tr(),
      r = pa(),
      { i18n: s } = or(),
      { detectPreferredLanguage: i } = wn(),
      [n, o] = y.useState(!1);
    return (
      y.useEffect(() => {
        const a = e.pathname.split("/").filter(Boolean),
          c = ["pt-BR", "en-US", "es-ES"];
        if (
          e.pathname === "/" ||
          e.pathname === "" ||
          (a.length > 0 && !c.includes(a[0]))
        ) {
          const d = `/${i()}${e.pathname === "/" ? "" : e.pathname}${e.search}`;
          if (d !== e.pathname + e.search) {
            r(d, { replace: !0 });
            return;
          }
        }
        const l = a[0];
        (c.includes(l) && s.language !== l && s.changeLanguage(l),
          (document.documentElement.lang = s.language),
          n || o(!0));
      }, [e.pathname, s, n, r, i]),
      v.jsxs(v.Fragment, { children: [v.jsx(O_, {}), t] })
    );
  },
  Pl = () => {
    const { t } = or();
    return v.jsx("div", {
      className:
        "flex items-center justify-center min-h-screen w-full bg-background/50 backdrop-blur-sm z-50",
      children: v.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          v.jsx("div", {
            className:
              "w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin",
          }),
          v.jsx("p", {
            className:
              "text-sm font-medium text-muted-foreground animate-pulse",
            children: t("loading_state.system"),
          }),
        ],
      }),
    });
  },
  k_ = Kc(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
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
  Qi = y.forwardRef(
    ({ className: t, variant: e, size: r, asChild: s, ...i }, n) =>
      v.jsx("button", {
        className: ct(k_({ variant: e, size: r, className: t })),
        ref: n,
        ...i,
      }),
  );
Qi.displayName = "Button";
const I_ = ({ error: t, resetError: e }) => {
  const { t: r } = or();
  return v.jsxs("div", {
    className:
      "min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-fade-in",
    children: [
      v.jsx("div", {
        className: "bg-destructive/10 p-4 rounded-full mb-6",
        children: v.jsx(zl, { className: "h-12 w-12 text-destructive" }),
      }),
      v.jsx("h2", {
        className: "text-2xl font-bold mb-2 text-foreground",
        children: r("error.title", { defaultValue: "Algo deu errado" }),
      }),
      v.jsx("p", {
        className: "text-muted-foreground mb-8 max-w-md",
        children: r("error.description", {
          defaultValue:
            "Ocorreu um erro inesperado. Nossa equipe já foi notificada. Por favor, tente recarregar a página.",
        }),
      }),
      !1,
      v.jsxs("div", {
        className: "flex gap-4",
        children: [
          v.jsxs(Qi, {
            onClick: e,
            size: "lg",
            children: [
              v.jsx(Bl, { className: "mr-2 h-4 w-4" }),
              r("error.try_again", { defaultValue: "Tentar Novamente" }),
            ],
          }),
          v.jsx(Qi, {
            variant: "outline",
            size: "lg",
            onClick: () => (window.location.href = "/"),
            children: r("error.go_home", { defaultValue: "Voltar ao Início" }),
          }),
        ],
      }),
    ],
  });
};
class L_ extends y.Component {
  constructor() {
    super(...arguments);
    we(this, "state", { hasError: !1, error: null, errorInfo: null });
    we(this, "resetError", () => {
      this.setState({ hasError: !1, error: null, errorInfo: null });
    });
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r, errorInfo: null };
  }
  componentDidCatch(r, s) {
    (console.error(
      "Um erro não tratado foi capturado pelo Error Boundary:",
      r,
      s,
    ),
      this.setState({ errorInfo: s }));
  }
  render() {
    return this.state.hasError
      ? this.props.fallback
        ? this.props.fallback
        : v.jsx(I_, { error: this.state.error, resetError: this.resetError })
      : this.props.children;
  }
}
const j_ = ({ children: t }) => {
    const { locale: e } = Ul(),
      r = tr(),
      { i18n: s } = or(),
      { currentLanguage: i } = wn(),
      n = ["pt-BR", "en-US", "es-ES"];
    if (
      (y.useEffect(() => {
        e && n.includes(e) && s.language !== e && s.changeLanguage(e);
      }, [e, s]),
      e && !n.includes(e))
    ) {
      const o = r.pathname.replace(`/${e}`, `/${i}`);
      return v.jsx(Zi, { to: o + r.search, replace: !0 });
    }
    return v.jsx(v.Fragment, { children: t });
  },
  mi = y.lazy(() =>
    Y(
      () => import("./Index-BAM0eIZp.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    ),
  ),
  N_ = y.lazy(() =>
    Y(
      () => import("./ControlPanel-Cw3llJx-.js"),
      __vite__mapDeps([
        14, 15, 16, 3, 17, 18, 19, 12, 20, 21, 22, 11, 10, 23, 6, 5,
      ]),
    ),
  ),
  D_ = y.lazy(() =>
    Y(
      () => import("./ReportsList-20YymPxq.js"),
      __vite__mapDeps([
        24, 3, 16, 6, 12, 25, 20, 9, 10, 4, 11, 5, 26, 27, 18, 19,
      ]),
    ),
  ),
  gi = y.lazy(() =>
    Y(
      () => import("./ReportBuilder-BbgKXmgD.js"),
      __vite__mapDeps([
        28, 3, 6, 12, 29, 15, 16, 17, 18, 19, 30, 20, 5, 25, 31, 32, 33, 26, 27,
        10, 4, 34, 35, 36,
      ]),
    ),
  ),
  $_ = y.lazy(() =>
    Y(
      () => import("./ReportDetail-BynScP3f.js"),
      __vite__mapDeps([
        37, 3, 6, 12, 20, 9, 10, 4, 11, 5, 13, 18, 7, 34, 35, 36, 22,
      ]),
    ),
  ),
  M_ = y.lazy(() =>
    Y(
      () => import("./Folders-BxBWapxI.js"),
      __vite__mapDeps([38, 3, 6, 12, 25, 20, 9, 10, 4, 11, 5]),
    ),
  ),
  U_ = y.lazy(() =>
    Y(
      () => import("./FolderDetail-fvTzsEMu.js"),
      __vite__mapDeps([39, 3, 12, 25, 20, 9, 10, 4, 11, 5, 33, 6]),
    ),
  ),
  F_ = y.lazy(() =>
    Y(
      () => import("./Profile-DvXVFArI.js"),
      __vite__mapDeps([40, 3, 12, 25, 31, 41, 5, 6]),
    ),
  ),
  q_ = y.lazy(() =>
    Y(
      () => import("./Settings-aWn9wIGw.js"),
      __vite__mapDeps([
        42, 3, 12, 25, 31, 43, 27, 26, 10, 4, 5, 41, 20, 44, 22, 11, 6,
      ]),
    ),
  ),
  V_ = y.lazy(() =>
    Y(
      () => import("./Priorities-C_I4As-z.js"),
      __vite__mapDeps([
        45, 3, 16, 20, 46, 12, 5, 25, 22, 11, 10, 36, 47, 2, 4, 48, 27, 31, 49,
        19, 6,
      ]),
    ),
  ),
  z_ = y.lazy(() =>
    Y(
      () => import("./ActionPlan-Bip1YilT.js"),
      __vite__mapDeps([50, 3, 16, 12, 20, 49, 19, 5, 6]),
    ),
  ),
  B_ = y.lazy(() =>
    Y(
      () => import("./ConsolidatedDashboard-Atualizado-BzVRoqvm.js"),
      __vite__mapDeps([51, 3, 12, 20, 46, 5, 22, 11, 10, 23, 26, 27, 4, 30, 6]),
    ),
  ),
  H_ = y.lazy(() =>
    Y(
      () => import("./MetricsDashboard-Otimizado-CHqiUn-U.js"),
      __vite__mapDeps([
        52, 3, 12, 20, 46, 5, 23, 26, 27, 10, 4, 25, 21, 30, 53, 16, 35, 6,
      ]),
    ),
  ),
  G_ = y.lazy(() =>
    Y(
      () => import("./OrganizationManager-BU4toMVR.js"),
      __vite__mapDeps([
        54, 3, 12, 20, 25, 31, 32, 26, 27, 10, 4, 5, 47, 2, 22, 11, 6,
      ]),
    ),
  ),
  W_ = y.lazy(() =>
    Y(
      () => import("./TemplateManager-D8m-F4fs.js"),
      __vite__mapDeps([55, 3, 12, 20, 25, 31, 32, 26, 27, 10, 4, 5, 47, 2, 6]),
    ),
  ),
  yi = y.lazy(() =>
    Y(
      () => import("./DecisionPanel-CAB8Vbns.js"),
      __vite__mapDeps([56, 3, 12, 20, 22, 11, 10, 30, 26, 27, 4, 5, 6, 57, 58]),
    ),
  ),
  K_ = y.lazy(() =>
    Y(
      () => import("./MetricsConfig-DnS99BFc.js"),
      __vite__mapDeps([
        59, 3, 12, 20, 25, 31, 32, 26, 27, 10, 4, 5, 43, 47, 2, 60, 21, 53, 16,
        6,
      ]),
    ),
  ),
  Y_ = y.lazy(() =>
    Y(
      () => import("./Analytics-lY0y7YRY.js"),
      __vite__mapDeps([61, 3, 12, 20, 26, 27, 10, 4, 5, 58, 6]),
    ),
  ),
  J_ = y.lazy(() =>
    Y(() => import("./NotFound-CzE4uqFs.js"), __vite__mapDeps([62, 6, 3, 5])),
  ),
  is = y.lazy(() =>
    Y(
      () => import("./Login-BeJbrUaS.js"),
      __vite__mapDeps([63, 3, 6, 25, 31, 12, 44, 64, 8, 7, 5]),
    ),
  ),
  Q_ = y.lazy(() =>
    Y(
      () => import("./AuthCallback-D0S9zLwl.js"),
      __vite__mapDeps([65, 3, 6, 5]),
    ),
  ),
  X_ = y.lazy(() =>
    Y(
      () => import("./AppLayout-JR7SJEBp.js"),
      __vite__mapDeps([66, 3, 6, 25, 1, 2, 4, 5, 9, 10, 11, 41, 7, 8]),
    ),
  ),
  ns = y.lazy(() =>
    Y(
      () => import("./index-DIPdp22R.js"),
      __vite__mapDeps([
        67, 3, 6, 10, 27, 1, 2, 4, 5, 12, 20, 44, 22, 11, 25, 31, 43, 48, 23,
        30, 47, 9, 26, 32, 41, 60, 21, 64,
      ]),
    ),
  ),
  os = y.lazy(() =>
    Y(
      () => import("./Flows-Cq-ejqqK.js"),
      __vite__mapDeps([68, 12, 3, 20, 6, 5]),
    ),
  ),
  Z_ = y.lazy(() =>
    Y(
      () => import("./Radar-Hcn8ad3Q.js"),
      __vite__mapDeps([69, 3, 12, 22, 11, 10, 20, 57, 58, 5, 6]),
    ),
  ),
  eb = y.lazy(() =>
    Y(
      () => import("./DocumentUploader-Cq_URVF2.js"),
      __vite__mapDeps([70, 3, 17, 29, 23, 5, 12, 19, 16, 6]),
    ),
  ),
  tb = y.lazy(() =>
    Y(
      () => import("./Metrics-CqFiENML.js"),
      __vite__mapDeps([71, 12, 3, 20, 5, 16, 19, 21, 6]),
    ),
  ),
  rb = new Qu({
    defaultOptions: {
      queries: { staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, retry: 2 },
    },
  }),
  sb = () => {
    const t = tr();
    return (
      y.useEffect(() => {
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
  ib = ({ children: t }) => {
    const { session: e, loading: r } = fy(),
      s = tr();
    if (r) return v.jsx(Pl, {});
    if (!e) {
      const i = s.pathname + s.search;
      return v.jsx(Zi, {
        to: `/login?redirect=${encodeURIComponent(i)}`,
        replace: !0,
      });
    }
    return v.jsx(v.Fragment, { children: t });
  },
  nb = () =>
    v.jsx(L_, {
      children: v.jsx(Xu, {
        client: rb,
        children: v.jsx(py, {
          children: v.jsxs(Gp, {
            children: [
              v.jsx(jf, {}),
              v.jsx(Fl, {
                children: v.jsxs(P_, {
                  children: [
                    v.jsx(sb, {}),
                    v.jsx(y.Suspense, {
                      fallback: v.jsx(Pl, {}),
                      children: v.jsxs(ql, {
                        children: [
                          v.jsx(q, {
                            path: "/",
                            element: v.jsx(Zi, { to: "/pt-BR", replace: !0 }),
                          }),
                          v.jsx(q, {
                            path: "/auth/callback",
                            element: v.jsx(Q_, {}),
                          }),
                          v.jsx(q, { path: "/pt-BR", element: v.jsx(mi, {}) }),
                          v.jsx(q, { path: "/en-US", element: v.jsx(mi, {}) }),
                          v.jsx(q, { path: "/es-ES", element: v.jsx(mi, {}) }),
                          v.jsx(q, {
                            path: "/pt-BR/login",
                            element: v.jsx(is, {}),
                          }),
                          v.jsx(q, {
                            path: "/en-US/login",
                            element: v.jsx(is, {}),
                          }),
                          v.jsx(q, {
                            path: "/es-ES/login",
                            element: v.jsx(is, {}),
                          }),
                          v.jsx(q, { path: "/login", element: v.jsx(is, {}) }),
                          v.jsx(q, {
                            path: "/design-system/*",
                            element: v.jsx(ns, {}),
                          }),
                          v.jsx(q, {
                            path: "/pt-BR/design-system/*",
                            element: v.jsx(ns, {}),
                          }),
                          v.jsx(q, {
                            path: "/en-US/design-system/*",
                            element: v.jsx(ns, {}),
                          }),
                          v.jsx(q, {
                            path: "/es-ES/design-system/*",
                            element: v.jsx(ns, {}),
                          }),
                          v.jsx(q, { path: "/flows", element: v.jsx(os, {}) }),
                          v.jsx(q, {
                            path: "/pt-BR/flows",
                            element: v.jsx(os, {}),
                          }),
                          v.jsx(q, {
                            path: "/en-US/flows",
                            element: v.jsx(os, {}),
                          }),
                          v.jsx(q, {
                            path: "/es-ES/flows",
                            element: v.jsx(os, {}),
                          }),
                          v.jsxs(q, {
                            path: "/:locale/app",
                            element: v.jsx(ib, {
                              children: v.jsx(j_, { children: v.jsx(X_, {}) }),
                            }),
                            children: [
                              v.jsx(q, { index: !0, element: v.jsx(N_, {}) }),
                              v.jsx(q, {
                                path: "reports",
                                element: v.jsx(D_, {}),
                              }),
                              v.jsx(q, {
                                path: "reports/new",
                                element: v.jsx(gi, {}),
                              }),
                              v.jsx(q, {
                                path: "novo-relatorio",
                                element: v.jsx(gi, {}),
                              }),
                              v.jsx(q, {
                                path: "new-report",
                                element: v.jsx(gi, {}),
                              }),
                              v.jsx(q, {
                                path: "reports/:id",
                                element: v.jsx($_, {}),
                              }),
                              v.jsx(q, {
                                path: "folders",
                                element: v.jsx(M_, {}),
                              }),
                              v.jsx(q, {
                                path: "folders/:id",
                                element: v.jsx(U_, {}),
                              }),
                              v.jsx(q, {
                                path: "metrics",
                                element: v.jsx(H_, {}),
                              }),
                              v.jsx(q, {
                                path: "metrics/config",
                                element: v.jsx(K_, {}),
                              }),
                              v.jsx(q, {
                                path: "analytics",
                                element: v.jsx(Y_, {}),
                              }),
                              v.jsx(q, {
                                path: "decision-panel",
                                element: v.jsx(yi, {}),
                              }),
                              v.jsx(q, {
                                path: "radar",
                                element: v.jsx(Z_, {}),
                              }),
                              v.jsx(q, {
                                path: "documentos",
                                element: v.jsx(eb, {}),
                              }),
                              v.jsx(q, {
                                path: "metricas",
                                element: v.jsx(tb, {}),
                              }),
                              v.jsx(q, {
                                path: "painel-decisao",
                                element: v.jsx(yi, {}),
                              }),
                              v.jsx(q, {
                                path: "panel-decision",
                                element: v.jsx(yi, {}),
                              }),
                              v.jsx(q, {
                                path: "consolidated",
                                element: v.jsx(B_, {}),
                              }),
                              v.jsx(q, {
                                path: "organization",
                                element: v.jsx(G_, {}),
                              }),
                              v.jsx(q, {
                                path: "templates",
                                element: v.jsx(W_, {}),
                              }),
                              v.jsx(q, {
                                path: "action-plan",
                                element: v.jsx(z_, {}),
                              }),
                              v.jsx(q, {
                                path: "prioridades",
                                element: v.jsx(V_, {}),
                              }),
                              v.jsx(q, {
                                path: "profile",
                                element: v.jsx(F_, {}),
                              }),
                              v.jsx(q, {
                                path: "settings",
                                element: v.jsx(q_, {}),
                              }),
                            ],
                          }),
                          v.jsx(q, { path: "*", element: v.jsx(J_, {}) }),
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
ga(document.getElementById("root")).render(
  v.jsx(Sa, { children: v.jsx(nb, {}) }),
);
export {
  Se as $,
  Dh as A,
  Qi as B,
  $h as C,
  Da as D,
  oc as E,
  fs as F,
  Kc as G,
  Au as H,
  td as I,
  Ia as J,
  sn as K,
  ov as L,
  pb as M,
  Us as N,
  bb as O,
  Pl as P,
  Y as Q,
  Nh as R,
  fb as S,
  Gp as T,
  Ts as U,
  Gh as V,
  ub as W,
  xr as X,
  Ku as Y,
  ue as Z,
  po as _,
  wn as a,
  db as a0,
  ly as a1,
  Uu as a2,
  Iu as a3,
  xi as a4,
  Os as a5,
  Pu as a6,
  ku as a7,
  Aa as a8,
  Bu as a9,
  ju as aa,
  fy as b,
  ct as c,
  Zp as d,
  hb as e,
  vc as f,
  yb as g,
  vb as h,
  Wp as i,
  v as j,
  Ps as k,
  de as l,
  ce as m,
  ac as n,
  He as o,
  Me as p,
  Oe as q,
  Th as r,
  ui as s,
  cc as t,
  or as u,
  k_ as v,
  md as w,
  ef as x,
  Qa as y,
  Mh as z,
};
