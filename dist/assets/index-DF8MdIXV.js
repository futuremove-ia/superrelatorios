const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Index-BajN7kV3.js",
      "assets/vendor-radix-C8JHQxE0.js",
      "assets/vendor-react-Ju9LKgAZ.js",
      "assets/sheet-DOdT24WH.js",
      "assets/vendor-utils-BdCfJOxW.js",
      "assets/BrandName-sIh5L74l.js",
      "assets/LogoIcon-CsykDNA-.js",
      "assets/dropdown-menu-B3wKDJFI.js",
      "assets/card-BOBgEvG6.js",
      "assets/paper-BunoanzT.js",
      "assets/vendor-data-BixP7Wq-.js",
      "assets/ControlPanel-CML2fplz.js",
      "assets/useReports-DsZS_Uyb.js",
      "assets/supabaseReportsService-DuiPZd3J.js",
      "assets/useCurrentOrganization-CMbUnvon.js",
      "assets/badge-DMwHsW7P.js",
      "assets/skeleton-k6NrXxDS.js",
      "assets/tabs-CqiEkaFQ.js",
      "assets/progress-BlwfVCl3.js",
      "assets/ReportsList-XsHkvYLX.js",
      "assets/input-CBoaGjHY.js",
      "assets/select-CWpqlRas.js",
      "assets/ReportBuilder-CzCG8vll.js",
      "assets/fileParserService-LLD8jVCJ.js",
      "assets/alert-DvUceMvY.js",
      "assets/label-BtFA11dg.js",
      "assets/textarea-BfX2Fu9u.js",
      "assets/mockReports-3cW05Ka2.js",
      "assets/DiagnosticSection-UiAXIWaW.js",
      "assets/vendor-charts-mgiN6Ezj.js",
      "assets/PriorityCard-DUA37fg1.js",
      "assets/ReportDetail-C10KDm-o.js",
      "assets/Folders-DW9sgsHH.js",
      "assets/FolderDetail-BfavMdCV.js",
      "assets/Profile-CynxlXZ5.js",
      "assets/avatar-LAEdDH5I.js",
      "assets/Settings-0Gyxssjo.js",
      "assets/switch-CHFWp36K.js",
      "assets/separator-Y9icg9AZ.js",
      "assets/Priorities-Bo080nuA.js",
      "assets/kpi-card-qaMtAPCp.js",
      "assets/dialog-Bcw59Xyu.js",
      "assets/slider-BGwoJrLF.js",
      "assets/supabaseBusinessService-Bf4U-Xc0.js",
      "assets/ActionPlan-CozFo0XK.js",
      "assets/ConsolidatedDashboard-DJMyBrJ0.js",
      "assets/MetricsDashboard-CUtD2IKf.js",
      "assets/useMetricsLibrary-CJd3qt03.js",
      "assets/OrganizationManager-Bue7AaQS.js",
      "assets/TemplateManager-CS-0yAVY.js",
      "assets/DecisionPanel-B-AXd4JU.js",
      "assets/ActionableCard-Ba9NpiJk.js",
      "assets/DomainTag-BVQlWMxA.js",
      "assets/MetricsConfig-Bw2X7cfq.js",
      "assets/table-BS1hLIhW.js",
      "assets/Analytics-Bzu0_EzN.js",
      "assets/NotFound-IrKLjxDC.js",
      "assets/Login-CGscKklW.js",
      "assets/index-QXsUnd67.js",
      "assets/AuthCallback-C-Lyuw_d.js",
      "assets/AppLayout-oYgXkiOe.js",
      "assets/index-DKqB7exO.js",
      "assets/Flows-DfzAKfDu.js",
      "assets/Radar-CxnHL-lz.js",
      "assets/DocumentUploader-BiYDVZOM.js",
      "assets/Metrics-CwyxSsOy.js",
    ]),
) => i.map((i) => d[i]);
var Ja = Object.defineProperty;
var Za = (e, t, a) =>
  t in e
    ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (e[t] = a);
var q = (e, t, a) => Za(e, typeof t != "symbol" ? t + "" : t, a);
import {
  j as s,
  C as Kt,
  P as eo,
  R as to,
  T as ao,
  u as Ee,
  b as oo,
  c as J,
  d as de,
  e as Xt,
  f as tt,
  g as io,
  h as ro,
  V as Qt,
  i as so,
  k as no,
  s as co,
} from "./vendor-radix-C8JHQxE0.js";
import {
  a as Jt,
  g as vt,
  b as M,
  r as u,
  u as ue,
  d as Zt,
  e as lo,
  N as yt,
  B as uo,
  f as po,
  h as C,
} from "./vendor-react-Ju9LKgAZ.js";
import { c as mo, Q as fo, a as go } from "./vendor-data-BixP7Wq-.js";
import {
  c as ho,
  X as vo,
  a as ea,
  i as _t,
  T as yo,
  R as _o,
} from "./vendor-utils-BdCfJOxW.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = a(i);
    fetch(i.href, r);
  }
})();
var ta,
  wt = Jt;
((ta = wt.createRoot), wt.hydrateRoot);
var bo = typeof Element < "u",
  Eo = typeof Map == "function",
  Co = typeof Set == "function",
  xo = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Oe(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var a, o, i;
    if (Array.isArray(e)) {
      if (((a = e.length), a != t.length)) return !1;
      for (o = a; o-- !== 0; ) if (!Oe(e[o], t[o])) return !1;
      return !0;
    }
    var r;
    if (Eo && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (r = e.entries(); !(o = r.next()).done; )
        if (!t.has(o.value[0])) return !1;
      for (r = e.entries(); !(o = r.next()).done; )
        if (!Oe(o.value[1], t.get(o.value[0]))) return !1;
      return !0;
    }
    if (Co && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (r = e.entries(); !(o = r.next()).done; )
        if (!t.has(o.value[0])) return !1;
      return !0;
    }
    if (xo && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((a = e.length), a != t.length)) return !1;
      for (o = a; o-- !== 0; ) if (e[o] !== t[o]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (a = i.length), a !== Object.keys(t).length))
      return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[o])) return !1;
    if (bo && e instanceof Element) return !1;
    for (o = a; o-- !== 0; )
      if (
        !(
          (i[o] === "_owner" || i[o] === "__v" || i[o] === "__o") &&
          e.$$typeof
        ) &&
        !Oe(e[i[o]], t[i[o]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ao = function (t, a) {
  try {
    return Oe(t, a);
  } catch (o) {
    if ((o.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw o;
  }
};
const So = vt(Ao);
var Ro = function (e, t, a, o, i, r, c, n) {
    if (!e) {
      var d;
      if (t === void 0)
        d = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var l = [a, o, i, r, c, n],
          p = 0;
        ((d = new Error(
          t.replace(/%s/g, function () {
            return l[p++];
          }),
        )),
          (d.name = "Invariant Violation"));
      }
      throw ((d.framesToPop = 1), d);
    }
  },
  wo = Ro;
const Tt = vt(wo);
var To = function (t, a, o, i) {
  var r = o ? o.call(i, t, a) : void 0;
  if (r !== void 0) return !!r;
  if (t === a) return !0;
  if (typeof t != "object" || !t || typeof a != "object" || !a) return !1;
  var c = Object.keys(t),
    n = Object.keys(a);
  if (c.length !== n.length) return !1;
  for (
    var d = Object.prototype.hasOwnProperty.bind(a), l = 0;
    l < c.length;
    l++
  ) {
    var p = c[l];
    if (!d(p)) return !1;
    var m = t[p],
      f = a[p];
    if (
      ((r = o ? o.call(i, m, f, p) : void 0),
      r === !1 || (r === void 0 && m !== f))
    )
      return !1;
  }
  return !0;
};
const Po = vt(To);
var aa = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(aa || {}),
  Ve = {
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
  Pt = Object.values(aa),
  je = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  oa = Object.entries(je).reduce((e, [t, a]) => ((e[a] = t), e), {}),
  W = "data-rh",
  ne = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  ce = (e, t) => {
    for (let a = e.length - 1; a >= 0; a -= 1) {
      const o = e[a];
      if (Object.prototype.hasOwnProperty.call(o, t)) return o[t];
    }
    return null;
  },
  Io = (e) => {
    let t = ce(e, "title");
    const a = ce(e, ne.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), a && t))
      return a.replace(/%s/g, () => t);
    const o = ce(e, ne.DEFAULT_TITLE);
    return t || o || void 0;
  },
  Oo = (e) => ce(e, ne.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Ue = (e, t) =>
    t
      .filter((a) => typeof a[e] < "u")
      .map((a) => a[e])
      .reduce((a, o) => ({ ...a, ...o }), {}),
  Do = (e, t) =>
    t
      .filter((a) => typeof a.base < "u")
      .map((a) => a.base)
      .reverse()
      .reduce((a, o) => {
        if (!a.length) {
          const i = Object.keys(o);
          for (let r = 0; r < i.length; r += 1) {
            const n = i[r].toLowerCase();
            if (e.indexOf(n) !== -1 && o[n]) return a.concat(o);
          }
        }
        return a;
      }, []),
  Lo = (e) => console && typeof console.warn == "function" && console.warn(e),
  fe = (e, t, a) => {
    const o = {};
    return a
      .filter((i) =>
        Array.isArray(i[e])
          ? !0
          : (typeof i[e] < "u" &&
              Lo(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`,
              ),
            !1),
      )
      .map((i) => i[e])
      .reverse()
      .reduce((i, r) => {
        const c = {};
        r.filter((d) => {
          let l;
          const p = Object.keys(d);
          for (let f = 0; f < p.length; f += 1) {
            const g = p[f],
              y = g.toLowerCase();
            (t.indexOf(y) !== -1 &&
              !(l === "rel" && d[l].toLowerCase() === "canonical") &&
              !(y === "rel" && d[y].toLowerCase() === "stylesheet") &&
              (l = y),
              t.indexOf(g) !== -1 &&
                (g === "innerHTML" || g === "cssText" || g === "itemprop") &&
                (l = g));
          }
          if (!l || !d[l]) return !1;
          const m = d[l].toLowerCase();
          return (
            o[l] || (o[l] = {}),
            c[l] || (c[l] = {}),
            o[l][m] ? !1 : ((c[l][m] = !0), !0)
          );
        })
          .reverse()
          .forEach((d) => i.push(d));
        const n = Object.keys(c);
        for (let d = 0; d < n.length; d += 1) {
          const l = n[d],
            p = { ...o[l], ...c[l] };
          o[l] = p;
        }
        return i;
      }, [])
      .reverse();
  },
  No = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let a = 0; a < e.length; a += 1) if (e[a][t]) return !0;
    }
    return !1;
  },
  Mo = (e) => ({
    baseTag: Do(["href"], e),
    bodyAttributes: Ue("bodyAttributes", e),
    defer: ce(e, ne.DEFER),
    encode: ce(e, ne.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Ue("htmlAttributes", e),
    linkTags: fe("link", ["rel", "href"], e),
    metaTags: fe(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e,
    ),
    noscriptTags: fe("noscript", ["innerHTML"], e),
    onChangeClientState: Oo(e),
    scriptTags: fe("script", ["src", "innerHTML"], e),
    styleTags: fe("style", ["cssText"], e),
    title: Io(e),
    titleAttributes: Ue("titleAttributes", e),
    prioritizeSeoTags: No(e, ne.PRIORITIZE_SEO_TAGS),
  }),
  ia = (e) => (Array.isArray(e) ? e.join("") : e),
  jo = (e, t) => {
    const a = Object.keys(e);
    for (let o = 0; o < a.length; o += 1)
      if (t[a[o]] && t[a[o]].includes(e[a[o]])) return !0;
    return !1;
  },
  Be = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (a, o) => (jo(o, t) ? a.priority.push(o) : a.default.push(o), a),
          { priority: [], default: [] },
        )
      : { default: e, priority: [] },
  It = (e, t) => ({ ...e, [t]: void 0 }),
  ko = ["noscript", "script", "style"],
  at = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  ra = (e) =>
    Object.keys(e).reduce((t, a) => {
      const o = typeof e[a] < "u" ? `${a}="${e[a]}"` : `${a}`;
      return t ? `${t} ${o}` : o;
    }, ""),
  zo = (e, t, a, o) => {
    const i = ra(a),
      r = ia(t);
    return i
      ? `<${e} ${W}="true" ${i}>${at(r, o)}</${e}>`
      : `<${e} ${W}="true">${at(r, o)}</${e}>`;
  },
  qo = (e, t, a = !0) =>
    t.reduce((o, i) => {
      const r = i,
        c = Object.keys(r)
          .filter((l) => !(l === "innerHTML" || l === "cssText"))
          .reduce((l, p) => {
            const m = typeof r[p] > "u" ? p : `${p}="${at(r[p], a)}"`;
            return l ? `${l} ${m}` : m;
          }, ""),
        n = r.innerHTML || r.cssText || "",
        d = ko.indexOf(e) === -1;
      return `${o}<${e} ${W}="true" ${c}${d ? "/>" : `>${n}</${e}>`}`;
    }, ""),
  sa = (e, t = {}) =>
    Object.keys(e).reduce((a, o) => {
      const i = je[o];
      return ((a[i || o] = e[o]), a);
    }, t),
  Fo = (e, t, a) => {
    const o = { key: t, [W]: !0 },
      i = sa(a, o);
    return [M.createElement("title", i, t)];
  },
  De = (e, t) =>
    t.map((a, o) => {
      const i = { key: o, [W]: !0 };
      return (
        Object.keys(a).forEach((r) => {
          const n = je[r] || r;
          if (n === "innerHTML" || n === "cssText") {
            const d = a.innerHTML || a.cssText;
            i.dangerouslySetInnerHTML = { __html: d };
          } else i[n] = a[r];
        }),
        M.createElement(e, i)
      );
    }),
  B = (e, t, a = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => Fo(e, t.title, t.titleAttributes),
          toString: () => zo(e, t.title, t.titleAttributes, a),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => sa(t), toString: () => ra(t) };
      default:
        return { toComponent: () => De(e, t), toString: () => qo(e, t, a) };
    }
  },
  Vo = ({ metaTags: e, linkTags: t, scriptTags: a, encode: o }) => {
    const i = Be(e, Ve.meta),
      r = Be(t, Ve.link),
      c = Be(a, Ve.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...De("meta", i.priority),
          ...De("link", r.priority),
          ...De("script", c.priority),
        ],
        toString: () =>
          `${B("meta", i.priority, o)} ${B("link", r.priority, o)} ${B("script", c.priority, o)}`,
      },
      metaTags: i.default,
      linkTags: r.default,
      scriptTags: c.default,
    };
  },
  Uo = (e) => {
    const {
      baseTag: t,
      bodyAttributes: a,
      encode: o = !0,
      htmlAttributes: i,
      noscriptTags: r,
      styleTags: c,
      title: n = "",
      titleAttributes: d,
      prioritizeSeoTags: l,
    } = e;
    let { linkTags: p, metaTags: m, scriptTags: f } = e,
      g = { toComponent: () => [], toString: () => "" };
    return (
      l &&
        ({
          priorityMethods: g,
          linkTags: p,
          metaTags: m,
          scriptTags: f,
        } = Vo(e)),
      {
        priority: g,
        base: B("base", t, o),
        bodyAttributes: B("bodyAttributes", a, o),
        htmlAttributes: B("htmlAttributes", i, o),
        link: B("link", p, o),
        meta: B("meta", m, o),
        noscript: B("noscript", r, o),
        script: B("script", f, o),
        style: B("style", c, o),
        title: B("title", { title: n, titleAttributes: d }, o),
      }
    );
  },
  ot = Uo,
  Se = [],
  bt = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  it = class {
    constructor(e, t) {
      q(this, "instances", []);
      q(this, "canUseDOM", bt);
      q(this, "context");
      q(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Se : this.instances),
          add: (e) => {
            (this.canUseDOM ? Se : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? Se : this.instances).indexOf(e);
            (this.canUseDOM ? Se : this.instances).splice(t, 1);
          },
        },
      });
      ((this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = ot({
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
  Bo = parseInt(M.version.split(".")[0], 10),
  rt = Bo >= 19,
  Go = {},
  na = M.createContext(Go),
  ae,
  ca =
    ((ae = class extends u.Component {
      constructor(a) {
        super(a);
        q(this, "helmetData");
        rt
          ? (this.helmetData = null)
          : (this.helmetData = new it(this.props.context || {}, ae.canUseDOM));
      }
      render() {
        return rt
          ? M.createElement(M.Fragment, null, this.props.children)
          : M.createElement(
              na.Provider,
              { value: this.helmetData.value },
              this.props.children,
            );
      }
    }),
    q(ae, "canUseDOM", bt),
    ae),
  ie = (e, t) => {
    const a = document.head || document.querySelector("head"),
      o = a.querySelectorAll(`${e}[${W}]`),
      i = [].slice.call(o),
      r = [];
    let c;
    return (
      t &&
        t.length &&
        t.forEach((n) => {
          const d = document.createElement(e);
          for (const l in n)
            if (Object.prototype.hasOwnProperty.call(n, l))
              if (l === "innerHTML") d.innerHTML = n.innerHTML;
              else if (l === "cssText") {
                const p = n.cssText;
                d.appendChild(document.createTextNode(p));
              } else {
                const p = l,
                  m = typeof n[p] > "u" ? "" : n[p];
                d.setAttribute(l, m);
              }
          (d.setAttribute(W, "true"),
            i.some((l, p) => ((c = p), d.isEqualNode(l)))
              ? i.splice(c, 1)
              : r.push(d));
        }),
      i.forEach((n) => {
        var d;
        return (d = n.parentNode) == null ? void 0 : d.removeChild(n);
      }),
      r.forEach((n) => a.appendChild(n)),
      { oldTags: i, newTags: r }
    );
  },
  st = (e, t) => {
    const a = document.getElementsByTagName(e)[0];
    if (!a) return;
    const o = a.getAttribute(W),
      i = o ? o.split(",") : [],
      r = [...i],
      c = Object.keys(t);
    for (const n of c) {
      const d = t[n] || "";
      (a.getAttribute(n) !== d && a.setAttribute(n, d),
        i.indexOf(n) === -1 && i.push(n));
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    }
    for (let n = r.length - 1; n >= 0; n -= 1) a.removeAttribute(r[n]);
    i.length === r.length
      ? a.removeAttribute(W)
      : a.getAttribute(W) !== c.join(",") && a.setAttribute(W, c.join(","));
  },
  Ho = (e, t) => {
    (typeof e < "u" && document.title !== e && (document.title = ia(e)),
      st("title", t));
  },
  Ot = (e, t) => {
    const {
      baseTag: a,
      bodyAttributes: o,
      htmlAttributes: i,
      linkTags: r,
      metaTags: c,
      noscriptTags: n,
      onChangeClientState: d,
      scriptTags: l,
      styleTags: p,
      title: m,
      titleAttributes: f,
    } = e;
    (st("body", o), st("html", i), Ho(m, f));
    const g = {
        baseTag: ie("base", a),
        linkTags: ie("link", r),
        metaTags: ie("meta", c),
        noscriptTags: ie("noscript", n),
        scriptTags: ie("script", l),
        styleTags: ie("style", p),
      },
      y = {},
      v = {};
    (Object.keys(g).forEach((h) => {
      const { newTags: A, oldTags: E } = g[h];
      (A.length && (y[h] = A), E.length && (v[h] = g[h].oldTags));
    }),
      t && t(),
      d(e, y, v));
  },
  ge = null,
  $o = (e) => {
    (ge && cancelAnimationFrame(ge),
      e.defer
        ? (ge = requestAnimationFrame(() => {
            Ot(e, () => {
              ge = null;
            });
          }))
        : (Ot(e), (ge = null)));
  },
  Wo = $o,
  Dt = class extends u.Component {
    constructor() {
      super(...arguments);
      q(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !Po(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      (t.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: a } = this.props.context;
      let o = null;
      const i = Mo(
        t.get().map((r) => {
          const { context: c, ...n } = r.props;
          return n;
        }),
      );
      (ca.canUseDOM ? Wo(i) : ot && (o = ot(i)), a(o));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      (t.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  Le = [],
  Lt = (e) => {
    const t = {};
    for (const a of Object.keys(e)) t[oa[a] || a] = e[a];
    return t;
  },
  ee = (e) => {
    const t = {};
    for (const a of Object.keys(e)) {
      const o = je[a];
      t[o || a] = e[a];
    }
    return t;
  },
  Nt = (e, t) => {
    if (!bt) return;
    const a = document.getElementsByTagName(e)[0];
    if (!a) return;
    const o = "data-rh-managed",
      i = a.getAttribute(o),
      r = i ? i.split(",") : [],
      c = Object.keys(t);
    for (const n of r) c.includes(n) || a.removeAttribute(n);
    for (const n of c) {
      const d = t[n];
      d == null || d === !1
        ? a.removeAttribute(n)
        : d === !0
          ? a.setAttribute(n, "")
          : a.setAttribute(n, String(d));
    }
    c.length > 0 ? a.setAttribute(o, c.join(",")) : a.removeAttribute(o);
  },
  Ge = () => {
    const e = {},
      t = {};
    for (const a of Le) {
      const { htmlAttributes: o, bodyAttributes: i } = a.props;
      (o && Object.assign(e, Lt(o)), i && Object.assign(t, Lt(i)));
    }
    (Nt("html", e), Nt("body", t));
  },
  Yo = class extends u.Component {
    componentDidMount() {
      (Le.push(this), Ge());
    }
    componentDidUpdate() {
      Ge();
    }
    componentWillUnmount() {
      const e = Le.indexOf(this);
      (e !== -1 && Le.splice(e, 1), Ge());
    }
    resolveTitle() {
      const { title: e, titleTemplate: t, defaultTitle: a } = this.props;
      return e && t
        ? t.replace(/%s/g, () => (Array.isArray(e) ? e.join("") : e))
        : e || a || void 0;
    }
    renderTitle() {
      const e = this.resolveTitle();
      if (e === void 0) return null;
      const t = this.props.titleAttributes || {};
      return M.createElement("title", ee(t), e);
    }
    renderBase() {
      const { base: e } = this.props;
      return e ? M.createElement("base", ee(e)) : null;
    }
    renderMeta() {
      const { meta: e } = this.props;
      return !e || !Array.isArray(e)
        ? null
        : e.map((t, a) => M.createElement("meta", { key: a, ...ee(t) }));
    }
    renderLink() {
      const { link: e } = this.props;
      return !e || !Array.isArray(e)
        ? null
        : e.map((t, a) => M.createElement("link", { key: a, ...ee(t) }));
    }
    renderScript() {
      const { script: e } = this.props;
      return !e || !Array.isArray(e)
        ? null
        : e.map((t, a) => {
            const { innerHTML: o, ...i } = t,
              r = ee(i);
            return (
              o && (r.dangerouslySetInnerHTML = { __html: o }),
              M.createElement("script", { key: a, ...r })
            );
          });
    }
    renderStyle() {
      const { style: e } = this.props;
      return !e || !Array.isArray(e)
        ? null
        : e.map((t, a) => {
            const { cssText: o, ...i } = t,
              r = ee(i);
            return (
              o && (r.dangerouslySetInnerHTML = { __html: o }),
              M.createElement("style", { key: a, ...r })
            );
          });
    }
    renderNoscript() {
      const { noscript: e } = this.props;
      return !e || !Array.isArray(e)
        ? null
        : e.map((t, a) => {
            const { innerHTML: o, ...i } = t,
              r = ee(i);
            return (
              o && (r.dangerouslySetInnerHTML = { __html: o }),
              M.createElement("noscript", { key: a, ...r })
            );
          });
    }
    render() {
      return M.createElement(
        M.Fragment,
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
  et,
  Ko =
    ((et = class extends u.Component {
      shouldComponentUpdate(e) {
        return !So(It(this.props, "helmetData"), It(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(e, t, a, o) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...a, ...this.mapNestedChildrenToProps(e, o) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, a, o) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: o, titleAttributes: { ...a } };
          case "body":
            return { ...t, bodyAttributes: { ...a } };
          case "html":
            return { ...t, htmlAttributes: { ...a } };
          default:
            return { ...t, [e.type]: { ...a } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let a = { ...t };
        return (
          Object.keys(e).forEach((o) => {
            a = { ...a, [o]: e[o] };
          }),
          a
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Tt(
            Pt.some((a) => e.type === a),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Pt.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`,
          ),
          Tt(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((a) => typeof a != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let a = {};
        return (
          M.Children.forEach(e, (o) => {
            if (!o || !o.props) return;
            const { children: i, ...r } = o.props,
              c = Object.keys(r).reduce(
                (d, l) => ((d[oa[l] || l] = r[l]), d),
                {},
              );
            let { type: n } = o;
            switch (
              (typeof n == "symbol"
                ? (n = n.toString())
                : this.warnOnInvalidChildren(o, i),
              n)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                a = this.flattenArrayTypeChildren(o, a, c, i);
                break;
              default:
                t = this.mapObjectTypeChildren(o, t, c, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(a, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let a = { ...t },
          { helmetData: o } = t;
        if (
          (e && (a = this.mapChildrenToProps(e, a)), o && !(o instanceof it))
        ) {
          const i = o;
          ((o = new it(i.context, !0)), delete a.helmetData);
        }
        return rt
          ? M.createElement(Yo, { ...a })
          : o
            ? M.createElement(Dt, { ...a, context: o.value })
            : M.createElement(na.Consumer, null, (i) =>
                M.createElement(Dt, { ...a, context: i }),
              );
      }
    }),
    q(et, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    et);
const Xo = "modulepreload",
  Qo = function (e) {
    return "/" + e;
  },
  Mt = {},
  O = function (t, a, o) {
    let i = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const c = document.querySelector("meta[property=csp-nonce]"),
        n =
          (c == null ? void 0 : c.nonce) ||
          (c == null ? void 0 : c.getAttribute("nonce"));
      i = Promise.allSettled(
        a.map((d) => {
          if (((d = Qo(d)), d in Mt)) return;
          Mt[d] = !0;
          const l = d.endsWith(".css"),
            p = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${d}"]${p}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = l ? "stylesheet" : Xo),
            l || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = d),
            n && m.setAttribute("nonce", n),
            document.head.appendChild(m),
            l)
          )
            return new Promise((f, g) => {
              (m.addEventListener("load", f),
                m.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${d}`)),
                ));
            });
        }),
      );
    }
    function r(c) {
      const n = new Event("vite:preloadError", { cancelable: !0 });
      if (((n.payload = c), window.dispatchEvent(n), !n.defaultPrevented))
        throw c;
    }
    return i.then((c) => {
      for (const n of c || []) n.status === "rejected" && r(n.reason);
      return t().catch(r);
    });
  },
  Et = "-",
  Jo = (e) => {
    const t = ei(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (c) => {
        const n = c.split(Et);
        return (n[0] === "" && n.length !== 1 && n.shift(), la(n, t) || Zo(c));
      },
      getConflictingClassGroupIds: (c, n) => {
        const d = a[c] || [];
        return n && o[c] ? [...d, ...o[c]] : d;
      },
    };
  },
  la = (e, t) => {
    var c;
    if (e.length === 0) return t.classGroupId;
    const a = e[0],
      o = t.nextPart.get(a),
      i = o ? la(e.slice(1), o) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const r = e.join(Et);
    return (c = t.validators.find(({ validator: n }) => n(r))) == null
      ? void 0
      : c.classGroupId;
  },
  jt = /^\[(.+)\]$/,
  Zo = (e) => {
    if (jt.test(e)) {
      const t = jt.exec(e)[1],
        a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  ei = (e) => {
    const { theme: t, prefix: a } = e,
      o = { nextPart: new Map(), validators: [] };
    return (
      ai(Object.entries(e.classGroups), a).forEach(([r, c]) => {
        nt(c, o, r, t);
      }),
      o
    );
  },
  nt = (e, t, a, o) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const r = i === "" ? t : kt(t, i);
        r.classGroupId = a;
        return;
      }
      if (typeof i == "function") {
        if (ti(i)) {
          nt(i(o), t, a, o);
          return;
        }
        t.validators.push({ validator: i, classGroupId: a });
        return;
      }
      Object.entries(i).forEach(([r, c]) => {
        nt(c, kt(t, r), a, o);
      });
    });
  },
  kt = (e, t) => {
    let a = e;
    return (
      t.split(Et).forEach((o) => {
        (a.nextPart.has(o) ||
          a.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(o)));
      }),
      a
    );
  },
  ti = (e) => e.isThemeGetter,
  ai = (e, t) =>
    t
      ? e.map(([a, o]) => {
          const i = o.map((r) =>
            typeof r == "string"
              ? t + r
              : typeof r == "object"
                ? Object.fromEntries(
                    Object.entries(r).map(([c, n]) => [t + c, n]),
                  )
                : r,
          );
          return [a, i];
        })
      : e,
  oi = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      a = new Map(),
      o = new Map();
    const i = (r, c) => {
      (a.set(r, c), t++, t > e && ((t = 0), (o = a), (a = new Map())));
    };
    return {
      get(r) {
        let c = a.get(r);
        if (c !== void 0) return c;
        if ((c = o.get(r)) !== void 0) return (i(r, c), c);
      },
      set(r, c) {
        a.has(r) ? a.set(r, c) : i(r, c);
      },
    };
  },
  da = "!",
  ii = (e) => {
    const { separator: t, experimentalParseClassName: a } = e,
      o = t.length === 1,
      i = t[0],
      r = t.length,
      c = (n) => {
        const d = [];
        let l = 0,
          p = 0,
          m;
        for (let h = 0; h < n.length; h++) {
          let A = n[h];
          if (l === 0) {
            if (A === i && (o || n.slice(h, h + r) === t)) {
              (d.push(n.slice(p, h)), (p = h + r));
              continue;
            }
            if (A === "/") {
              m = h;
              continue;
            }
          }
          A === "[" ? l++ : A === "]" && l--;
        }
        const f = d.length === 0 ? n : n.substring(p),
          g = f.startsWith(da),
          y = g ? f.substring(1) : f,
          v = m && m > p ? m - p : void 0;
        return {
          modifiers: d,
          hasImportantModifier: g,
          baseClassName: y,
          maybePostfixModifierPosition: v,
        };
      };
    return a ? (n) => a({ className: n, parseClassName: c }) : c;
  },
  ri = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let a = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (t.push(...a.sort(), o), (a = [])) : a.push(o);
      }),
      t.push(...a.sort()),
      t
    );
  },
  si = (e) => ({ cache: oi(e.cacheSize), parseClassName: ii(e), ...Jo(e) }),
  ni = /\s+/,
  ci = (e, t) => {
    const {
        parseClassName: a,
        getClassGroupId: o,
        getConflictingClassGroupIds: i,
      } = t,
      r = [],
      c = e.trim().split(ni);
    let n = "";
    for (let d = c.length - 1; d >= 0; d -= 1) {
      const l = c[d],
        {
          modifiers: p,
          hasImportantModifier: m,
          baseClassName: f,
          maybePostfixModifierPosition: g,
        } = a(l);
      let y = !!g,
        v = o(y ? f.substring(0, g) : f);
      if (!v) {
        if (!y) {
          n = l + (n.length > 0 ? " " + n : n);
          continue;
        }
        if (((v = o(f)), !v)) {
          n = l + (n.length > 0 ? " " + n : n);
          continue;
        }
        y = !1;
      }
      const h = ri(p).join(":"),
        A = m ? h + da : h,
        E = A + v;
      if (r.includes(E)) continue;
      r.push(E);
      const S = i(v, y);
      for (let R = 0; R < S.length; ++R) {
        const P = S[R];
        r.push(A + P);
      }
      n = l + (n.length > 0 ? " " + n : n);
    }
    return n;
  };
function li() {
  let e = 0,
    t,
    a,
    o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = ua(t)) && (o && (o += " "), (o += a));
  return o;
}
const ua = (e) => {
  if (typeof e == "string") return e;
  let t,
    a = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ua(e[o])) && (a && (a += " "), (a += t));
  return a;
};
function di(e, ...t) {
  let a,
    o,
    i,
    r = c;
  function c(d) {
    const l = t.reduce((p, m) => m(p), e());
    return ((a = si(l)), (o = a.cache.get), (i = a.cache.set), (r = n), n(d));
  }
  function n(d) {
    const l = o(d);
    if (l) return l;
    const p = ci(d, a);
    return (i(d, p), p);
  }
  return function () {
    return r(li.apply(null, arguments));
  };
}
const N = (e) => {
    const t = (a) => a[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  pa = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ui = /^\d+\/\d+$/,
  pi = new Set(["px", "full", "screen"]),
  mi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fi =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  gi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  hi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  vi =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  K = (e) => le(e) || pi.has(e) || ui.test(e),
  X = (e) => pe(e, "length", Si),
  le = (e) => !!e && !Number.isNaN(Number(e)),
  He = (e) => pe(e, "number", le),
  he = (e) => !!e && Number.isInteger(Number(e)),
  yi = (e) => e.endsWith("%") && le(e.slice(0, -1)),
  x = (e) => pa.test(e),
  Q = (e) => mi.test(e),
  _i = new Set(["length", "size", "percentage"]),
  bi = (e) => pe(e, _i, ma),
  Ei = (e) => pe(e, "position", ma),
  Ci = new Set(["image", "url"]),
  xi = (e) => pe(e, Ci, wi),
  Ai = (e) => pe(e, "", Ri),
  ve = () => !0,
  pe = (e, t, a) => {
    const o = pa.exec(e);
    return o
      ? o[1]
        ? typeof t == "string"
          ? o[1] === t
          : t.has(o[1])
        : a(o[2])
      : !1;
  },
  Si = (e) => fi.test(e) && !gi.test(e),
  ma = () => !1,
  Ri = (e) => hi.test(e),
  wi = (e) => vi.test(e),
  Ti = () => {
    const e = N("colors"),
      t = N("spacing"),
      a = N("blur"),
      o = N("brightness"),
      i = N("borderColor"),
      r = N("borderRadius"),
      c = N("borderSpacing"),
      n = N("borderWidth"),
      d = N("contrast"),
      l = N("grayscale"),
      p = N("hueRotate"),
      m = N("invert"),
      f = N("gap"),
      g = N("gradientColorStops"),
      y = N("gradientColorStopPositions"),
      v = N("inset"),
      h = N("margin"),
      A = N("opacity"),
      E = N("padding"),
      S = N("saturate"),
      R = N("scale"),
      P = N("sepia"),
      L = N("skew"),
      T = N("space"),
      F = N("translate"),
      k = () => ["auto", "contain", "none"],
      z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", x, t],
      b = () => [x, t],
      I = () => ["", K, X],
      _ = () => ["auto", le, x],
      w = () => [
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
      j = () => ["solid", "dashed", "dotted", "double", "none"],
      G = () => [
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
      H = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Y = () => ["", "0", x],
      xe = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [le, x];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ve],
        spacing: [K, X],
        blur: ["none", "", Q, x],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Q, x],
        borderSpacing: b(),
        borderWidth: I(),
        contrast: $(),
        grayscale: Y(),
        hueRotate: $(),
        invert: Y(),
        gap: b(),
        gradientColorStops: [e],
        gradientColorStopPositions: [yi, X],
        inset: V(),
        margin: V(),
        opacity: $(),
        padding: b(),
        saturate: $(),
        scale: $(),
        sepia: Y(),
        skew: $(),
        space: b(),
        translate: b(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", x] }],
        container: ["container"],
        columns: [{ columns: [Q] }],
        "break-after": [{ "break-after": xe() }],
        "break-before": [{ "break-before": xe() }],
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
        "object-position": [{ object: [...w(), x] }],
        overflow: [{ overflow: z() }],
        "overflow-x": [{ "overflow-x": z() }],
        "overflow-y": [{ "overflow-y": z() }],
        overscroll: [{ overscroll: k() }],
        "overscroll-x": [{ "overscroll-x": k() }],
        "overscroll-y": [{ "overscroll-y": k() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", he, x] }],
        basis: [{ basis: V() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", x] }],
        grow: [{ grow: Y() }],
        shrink: [{ shrink: Y() }],
        order: [{ order: ["first", "last", "none", he, x] }],
        "grid-cols": [{ "grid-cols": [ve] }],
        "col-start-end": [{ col: ["auto", { span: ["full", he, x] }, x] }],
        "col-start": [{ "col-start": _() }],
        "col-end": [{ "col-end": _() }],
        "grid-rows": [{ "grid-rows": [ve] }],
        "row-start-end": [{ row: ["auto", { span: [he, x] }, x] }],
        "row-start": [{ "row-start": _() }],
        "row-end": [{ "row-end": _() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", x] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", x] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...H()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...H(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...H(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [E] }],
        px: [{ px: [E] }],
        py: [{ py: [E] }],
        ps: [{ ps: [E] }],
        pe: [{ pe: [E] }],
        pt: [{ pt: [E] }],
        pr: [{ pr: [E] }],
        pb: [{ pb: [E] }],
        pl: [{ pl: [E] }],
        m: [{ m: [h] }],
        mx: [{ mx: [h] }],
        my: [{ my: [h] }],
        ms: [{ ms: [h] }],
        me: [{ me: [h] }],
        mt: [{ mt: [h] }],
        mr: [{ mr: [h] }],
        mb: [{ mb: [h] }],
        ml: [{ ml: [h] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t] }],
        "min-w": [{ "min-w": [x, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              x,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Q] },
              Q,
            ],
          },
        ],
        h: [{ h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [x, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Q, X] }],
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
              He,
            ],
          },
        ],
        "font-family": [{ font: [ve] }],
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
              x,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", le, He] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              K,
              x,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", x] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", x] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...j(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", K, X] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", K, x] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: b() }],
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
              x,
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
        content: [{ content: ["none", x] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...w(), Ei] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", bi] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              xi,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [r] }],
        "rounded-s": [{ "rounded-s": [r] }],
        "rounded-e": [{ "rounded-e": [r] }],
        "rounded-t": [{ "rounded-t": [r] }],
        "rounded-r": [{ "rounded-r": [r] }],
        "rounded-b": [{ "rounded-b": [r] }],
        "rounded-l": [{ "rounded-l": [r] }],
        "rounded-ss": [{ "rounded-ss": [r] }],
        "rounded-se": [{ "rounded-se": [r] }],
        "rounded-ee": [{ "rounded-ee": [r] }],
        "rounded-es": [{ "rounded-es": [r] }],
        "rounded-tl": [{ "rounded-tl": [r] }],
        "rounded-tr": [{ "rounded-tr": [r] }],
        "rounded-br": [{ "rounded-br": [r] }],
        "rounded-bl": [{ "rounded-bl": [r] }],
        "border-w": [{ border: [n] }],
        "border-w-x": [{ "border-x": [n] }],
        "border-w-y": [{ "border-y": [n] }],
        "border-w-s": [{ "border-s": [n] }],
        "border-w-e": [{ "border-e": [n] }],
        "border-w-t": [{ "border-t": [n] }],
        "border-w-r": [{ "border-r": [n] }],
        "border-w-b": [{ "border-b": [n] }],
        "border-w-l": [{ "border-l": [n] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [...j(), "hidden"] }],
        "divide-x": [{ "divide-x": [n] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [n] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: j() }],
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
        "outline-style": [{ outline: ["", ...j()] }],
        "outline-offset": [{ "outline-offset": [K, x] }],
        "outline-w": [{ outline: [K, X] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [K, X] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Q, Ai] }],
        "shadow-color": [{ shadow: [ve] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [{ "mix-blend": [...G(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": G() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [a] }],
        brightness: [{ brightness: [o] }],
        contrast: [{ contrast: [d] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Q, x] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [m] }],
        saturate: [{ saturate: [S] }],
        sepia: [{ sepia: [P] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [a] }],
        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
        "backdrop-contrast": [{ "backdrop-contrast": [d] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [m] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [S] }],
        "backdrop-sepia": [{ "backdrop-sepia": [P] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [c] }],
        "border-spacing-x": [{ "border-spacing-x": [c] }],
        "border-spacing-y": [{ "border-spacing-y": [c] }],
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
              x,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", x] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", x] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [R] }],
        "scale-x": [{ "scale-x": [R] }],
        "scale-y": [{ "scale-y": [R] }],
        rotate: [{ rotate: [he, x] }],
        "translate-x": [{ "translate-x": [F] }],
        "translate-y": [{ "translate-y": [F] }],
        "skew-x": [{ "skew-x": [L] }],
        "skew-y": [{ "skew-y": [L] }],
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
              x,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
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
              x,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", x] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [K, X, He] }],
        stroke: [{ stroke: [e, "none"] }],
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
  Pi = di(Ti);
function Z(...e) {
  return Pi(ho(e));
}
const Ii = eo,
  Un = to,
  Bn = ao,
  Oi = u.forwardRef(({ className: e, sideOffset: t = 4, ...a }, o) =>
    s.jsx(Kt, {
      ref: o,
      sideOffset: t,
      className: Z(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...a,
    }),
  );
Oi.displayName = Kt.displayName;
const Di = 1,
  Li = 1e6;
let $e = 0;
function Ni() {
  return (($e = ($e + 1) % Number.MAX_SAFE_INTEGER), $e.toString());
}
const We = new Map(),
  zt = (e) => {
    if (We.has(e)) return;
    const t = setTimeout(() => {
      (We.delete(e), be({ type: "REMOVE_TOAST", toastId: e }));
    }, Li);
    We.set(e, t);
  },
  Mi = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Di) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((a) =>
            a.id === t.toast.id ? { ...a, ...t.toast } : a,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: a } = t;
        return (
          a
            ? zt(a)
            : e.toasts.forEach((o) => {
                zt(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === a || a === void 0 ? { ...o, open: !1 } : o,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== t.toastId) };
    }
  },
  Ne = [];
let Me = { toasts: [] };
function be(e) {
  ((Me = Mi(Me, e)),
    Ne.forEach((t) => {
      t(Me);
    }));
}
function ji({ ...e }) {
  const t = Ni(),
    a = (i) => be({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    o = () => be({ type: "DISMISS_TOAST", toastId: t });
  return (
    be({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || o();
        },
      },
    }),
    { id: t, dismiss: o, update: a }
  );
}
function ki() {
  const [e, t] = u.useState(Me);
  return (
    u.useEffect(
      () => (
        Ne.push(t),
        () => {
          const a = Ne.indexOf(t);
          a > -1 && Ne.splice(a, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: ji,
      dismiss: (a) => be({ type: "DISMISS_TOAST", toastId: a }),
    }
  );
}
function U(e, t, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), a === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
var zi = "DismissableLayer",
  ct = "dismissableLayer.update",
  qi = "dismissableLayer.pointerDownOutside",
  Fi = "dismissableLayer.focusOutside",
  qt,
  fa = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ga = u.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: a = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: r,
        onInteractOutside: c,
        onDismiss: n,
        ...d
      } = e,
      l = u.useContext(fa),
      [p, m] = u.useState(null),
      f =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = u.useState({}),
      y = Ee(t, (T) => m(T)),
      v = Array.from(l.layers),
      [h] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = v.indexOf(h),
      E = p ? v.indexOf(p) : -1,
      S = l.layersWithOutsidePointerEventsDisabled.size > 0,
      R = E >= A,
      P = Ui((T) => {
        const F = T.target,
          k = [...l.branches].some((z) => z.contains(F));
        !R ||
          k ||
          (i == null || i(T),
          c == null || c(T),
          T.defaultPrevented || n == null || n());
      }, f),
      L = Bi((T) => {
        const F = T.target;
        [...l.branches].some((z) => z.contains(F)) ||
          (r == null || r(T),
          c == null || c(T),
          T.defaultPrevented || n == null || n());
      }, f);
    return (
      oo((T) => {
        E === l.layers.size - 1 &&
          (o == null || o(T),
          !T.defaultPrevented && n && (T.preventDefault(), n()));
      }, f),
      u.useEffect(() => {
        if (p)
          return (
            a &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((qt = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(p)),
            l.layers.add(p),
            Ft(),
            () => {
              a &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = qt);
            }
          );
      }, [p, f, a, l]),
      u.useEffect(
        () => () => {
          p &&
            (l.layers.delete(p),
            l.layersWithOutsidePointerEventsDisabled.delete(p),
            Ft());
        },
        [p, l],
      ),
      u.useEffect(() => {
        const T = () => g({});
        return (
          document.addEventListener(ct, T),
          () => document.removeEventListener(ct, T)
        );
      }, []),
      s.jsx(J.div, {
        ...d,
        ref: y,
        style: {
          pointerEvents: S ? (R ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: U(e.onFocusCapture, L.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, L.onBlurCapture),
        onPointerDownCapture: U(e.onPointerDownCapture, P.onPointerDownCapture),
      })
    );
  });
ga.displayName = zi;
var Vi = "DismissableLayerBranch",
  ha = u.forwardRef((e, t) => {
    const a = u.useContext(fa),
      o = u.useRef(null),
      i = Ee(t, o);
    return (
      u.useEffect(() => {
        const r = o.current;
        if (r)
          return (
            a.branches.add(r),
            () => {
              a.branches.delete(r);
            }
          );
      }, [a.branches]),
      s.jsx(J.div, { ...e, ref: i })
    );
  });
ha.displayName = Vi;
function Ui(e, t = globalThis == null ? void 0 : globalThis.document) {
  const a = de(e),
    o = u.useRef(!1),
    i = u.useRef(() => {});
  return (
    u.useEffect(() => {
      const r = (n) => {
          if (n.target && !o.current) {
            let d = function () {
              va(qi, a, l, { discrete: !0 });
            };
            const l = { originalEvent: n };
            n.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = d),
                t.addEventListener("click", i.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", i.current);
          o.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", r);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", r),
          t.removeEventListener("click", i.current));
      };
    }, [t, a]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Bi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const a = de(e),
    o = u.useRef(!1);
  return (
    u.useEffect(() => {
      const i = (r) => {
        r.target &&
          !o.current &&
          va(Fi, a, { originalEvent: r }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, a]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function Ft() {
  const e = new CustomEvent(ct);
  document.dispatchEvent(e);
}
function va(e, t, a, { discrete: o }) {
  const i = a.originalEvent.target,
    r = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: a });
  (t && i.addEventListener(e, t, { once: !0 }),
    o ? Xt(i, r) : i.dispatchEvent(r));
}
var Gi = ga,
  Hi = ha;
function $i(e, t) {
  return u.useReducer((a, o) => t[a][o] ?? a, e);
}
var ya = (e) => {
  const { present: t, children: a } = e,
    o = Wi(t),
    i =
      typeof a == "function" ? a({ present: o.isPresent }) : u.Children.only(a),
    r = Ee(o.ref, Yi(i));
  return typeof a == "function" || o.isPresent
    ? u.cloneElement(i, { ref: r })
    : null;
};
ya.displayName = "Presence";
function Wi(e) {
  const [t, a] = u.useState(),
    o = u.useRef(null),
    i = u.useRef(e),
    r = u.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [n, d] = $i(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    u.useEffect(() => {
      const l = Re(o.current);
      r.current = n === "mounted" ? l : "none";
    }, [n]),
    tt(() => {
      const l = o.current,
        p = i.current;
      if (p !== e) {
        const f = r.current,
          g = Re(l);
        (e
          ? d("MOUNT")
          : g === "none" || (l == null ? void 0 : l.display) === "none"
            ? d("UNMOUNT")
            : d(p && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e));
      }
    }, [e, d]),
    tt(() => {
      if (t) {
        let l;
        const p = t.ownerDocument.defaultView ?? window,
          m = (g) => {
            const v = Re(o.current).includes(CSS.escape(g.animationName));
            if (g.target === t && v && (d("ANIMATION_END"), !i.current)) {
              const h = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (l = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = h);
                })));
            }
          },
          f = (g) => {
            g.target === t && (r.current = Re(o.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", m),
          t.addEventListener("animationend", m),
          () => {
            (p.clearTimeout(l),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", m),
              t.removeEventListener("animationend", m));
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(n),
      ref: u.useCallback((l) => {
        ((o.current = l ? getComputedStyle(l) : null), a(l));
      }, []),
    }
  );
}
function Re(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yi(e) {
  var o, i;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    a = t && "isReactWarning" in t && t.isReactWarning;
  return a
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (a = t && "isReactWarning" in t && t.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
var Ct = "ToastProvider",
  [xt, Ki, Xi] = io("Toast"),
  [_a, Gn] = ro("Toast", [Xi]),
  [Qi, ke] = _a(Ct),
  ba = (e) => {
    const {
        __scopeToast: t,
        label: a = "Notification",
        duration: o = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: r = 50,
        children: c,
      } = e,
      [n, d] = u.useState(null),
      [l, p] = u.useState(0),
      m = u.useRef(!1),
      f = u.useRef(!1);
    return (
      a.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ct}\`. Expected non-empty \`string\`.`,
        ),
      s.jsx(xt.Provider, {
        scope: t,
        children: s.jsx(Qi, {
          scope: t,
          label: a,
          duration: o,
          swipeDirection: i,
          swipeThreshold: r,
          toastCount: l,
          viewport: n,
          onViewportChange: d,
          onToastAdd: u.useCallback(() => p((g) => g + 1), []),
          onToastRemove: u.useCallback(() => p((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: m,
          isClosePausedRef: f,
          children: c,
        }),
      })
    );
  };
ba.displayName = Ct;
var Ea = "ToastViewport",
  Ji = ["F8"],
  lt = "toast.viewportPause",
  dt = "toast.viewportResume",
  Ca = u.forwardRef((e, t) => {
    const {
        __scopeToast: a,
        hotkey: o = Ji,
        label: i = "Notifications ({hotkey})",
        ...r
      } = e,
      c = ke(Ea, a),
      n = Ki(a),
      d = u.useRef(null),
      l = u.useRef(null),
      p = u.useRef(null),
      m = u.useRef(null),
      f = Ee(t, m, c.onViewportChange),
      g = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      y = c.toastCount > 0;
    (u.useEffect(() => {
      const h = (A) => {
        var S;
        o.length !== 0 &&
          o.every((R) => A[R] || A.code === R) &&
          ((S = m.current) == null || S.focus());
      };
      return (
        document.addEventListener("keydown", h),
        () => document.removeEventListener("keydown", h)
      );
    }, [o]),
      u.useEffect(() => {
        const h = d.current,
          A = m.current;
        if (y && h && A) {
          const E = () => {
              if (!c.isClosePausedRef.current) {
                const L = new CustomEvent(lt);
                (A.dispatchEvent(L), (c.isClosePausedRef.current = !0));
              }
            },
            S = () => {
              if (c.isClosePausedRef.current) {
                const L = new CustomEvent(dt);
                (A.dispatchEvent(L), (c.isClosePausedRef.current = !1));
              }
            },
            R = (L) => {
              !h.contains(L.relatedTarget) && S();
            },
            P = () => {
              h.contains(document.activeElement) || S();
            };
          return (
            h.addEventListener("focusin", E),
            h.addEventListener("focusout", R),
            h.addEventListener("pointermove", E),
            h.addEventListener("pointerleave", P),
            window.addEventListener("blur", E),
            window.addEventListener("focus", S),
            () => {
              (h.removeEventListener("focusin", E),
                h.removeEventListener("focusout", R),
                h.removeEventListener("pointermove", E),
                h.removeEventListener("pointerleave", P),
                window.removeEventListener("blur", E),
                window.removeEventListener("focus", S));
            }
          );
        }
      }, [y, c.isClosePausedRef]));
    const v = u.useCallback(
      ({ tabbingDirection: h }) => {
        const E = n().map((S) => {
          const R = S.ref.current,
            P = [R, ...ur(R)];
          return h === "forwards" ? P : P.reverse();
        });
        return (h === "forwards" ? E.reverse() : E).flat();
      },
      [n],
    );
    return (
      u.useEffect(() => {
        const h = m.current;
        if (h) {
          const A = (E) => {
            var P, L, T;
            const S = E.altKey || E.ctrlKey || E.metaKey;
            if (E.key === "Tab" && !S) {
              const F = document.activeElement,
                k = E.shiftKey;
              if (E.target === h && k) {
                (P = l.current) == null || P.focus();
                return;
              }
              const b = v({ tabbingDirection: k ? "backwards" : "forwards" }),
                I = b.findIndex((_) => _ === F);
              Ye(b.slice(I + 1))
                ? E.preventDefault()
                : k
                  ? (L = l.current) == null || L.focus()
                  : (T = p.current) == null || T.focus();
            }
          };
          return (
            h.addEventListener("keydown", A),
            () => h.removeEventListener("keydown", A)
          );
        }
      }, [n, v]),
      s.jsxs(Hi, {
        ref: d,
        role: "region",
        "aria-label": i.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y &&
            s.jsx(ut, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const h = v({ tabbingDirection: "forwards" });
                Ye(h);
              },
            }),
          s.jsx(xt.Slot, {
            scope: a,
            children: s.jsx(J.ol, { tabIndex: -1, ...r, ref: f }),
          }),
          y &&
            s.jsx(ut, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const h = v({ tabbingDirection: "backwards" });
                Ye(h);
              },
            }),
        ],
      })
    );
  });
Ca.displayName = Ea;
var xa = "ToastFocusProxy",
  ut = u.forwardRef((e, t) => {
    const { __scopeToast: a, onFocusFromOutsideViewport: o, ...i } = e,
      r = ke(xa, a);
    return s.jsx(Qt, {
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (c) => {
        var l;
        const n = c.relatedTarget;
        !((l = r.viewport) != null && l.contains(n)) && o();
      },
    });
  });
ut.displayName = xa;
var Ce = "Toast",
  Zi = "toast.swipeStart",
  er = "toast.swipeMove",
  tr = "toast.swipeCancel",
  ar = "toast.swipeEnd",
  Aa = u.forwardRef((e, t) => {
    const { forceMount: a, open: o, defaultOpen: i, onOpenChange: r, ...c } = e,
      [n, d] = so({ prop: o, defaultProp: i ?? !0, onChange: r, caller: Ce });
    return s.jsx(ya, {
      present: a || n,
      children: s.jsx(rr, {
        open: n,
        ...c,
        ref: t,
        onClose: () => d(!1),
        onPause: de(e.onPause),
        onResume: de(e.onResume),
        onSwipeStart: U(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: U(e.onSwipeMove, (l) => {
          const { x: p, y: m } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "move"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${p}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${m}px`,
            ));
        }),
        onSwipeCancel: U(e.onSwipeCancel, (l) => {
          (l.currentTarget.setAttribute("data-swipe", "cancel"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: U(e.onSwipeEnd, (l) => {
          const { x: p, y: m } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "end"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${p}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${m}px`,
            ),
            d(!1));
        }),
      }),
    });
  });
Aa.displayName = Ce;
var [or, ir] = _a(Ce, { onClose() {} }),
  rr = u.forwardRef((e, t) => {
    const {
        __scopeToast: a,
        type: o = "foreground",
        duration: i,
        open: r,
        onClose: c,
        onEscapeKeyDown: n,
        onPause: d,
        onResume: l,
        onSwipeStart: p,
        onSwipeMove: m,
        onSwipeCancel: f,
        onSwipeEnd: g,
        ...y
      } = e,
      v = ke(Ce, a),
      [h, A] = u.useState(null),
      E = Ee(t, (_) => A(_)),
      S = u.useRef(null),
      R = u.useRef(null),
      P = i || v.duration,
      L = u.useRef(0),
      T = u.useRef(P),
      F = u.useRef(0),
      { onToastAdd: k, onToastRemove: z } = v,
      V = de(() => {
        var w;
        ((h == null ? void 0 : h.contains(document.activeElement)) &&
          ((w = v.viewport) == null || w.focus()),
          c());
      }),
      b = u.useCallback(
        (_) => {
          !_ ||
            _ === 1 / 0 ||
            (window.clearTimeout(F.current),
            (L.current = new Date().getTime()),
            (F.current = window.setTimeout(V, _)));
        },
        [V],
      );
    (u.useEffect(() => {
      const _ = v.viewport;
      if (_) {
        const w = () => {
            (b(T.current), l == null || l());
          },
          j = () => {
            const G = new Date().getTime() - L.current;
            ((T.current = T.current - G),
              window.clearTimeout(F.current),
              d == null || d());
          };
        return (
          _.addEventListener(lt, j),
          _.addEventListener(dt, w),
          () => {
            (_.removeEventListener(lt, j), _.removeEventListener(dt, w));
          }
        );
      }
    }, [v.viewport, P, d, l, b]),
      u.useEffect(() => {
        r && !v.isClosePausedRef.current && b(P);
      }, [r, P, v.isClosePausedRef, b]),
      u.useEffect(() => (k(), () => z()), [k, z]));
    const I = u.useMemo(() => (h ? Oa(h) : null), [h]);
    return v.viewport
      ? s.jsxs(s.Fragment, {
          children: [
            I &&
              s.jsx(sr, {
                __scopeToast: a,
                role: "status",
                "aria-live": o === "foreground" ? "assertive" : "polite",
                children: I,
              }),
            s.jsx(or, {
              scope: a,
              onClose: V,
              children: Jt.createPortal(
                s.jsx(xt.ItemSlot, {
                  scope: a,
                  children: s.jsx(Gi, {
                    asChild: !0,
                    onEscapeKeyDown: U(n, () => {
                      (v.isFocusedToastEscapeKeyDownRef.current || V(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: s.jsx(J.li, {
                      tabIndex: 0,
                      "data-state": r ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...y,
                      ref: E,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: U(e.onKeyDown, (_) => {
                        _.key === "Escape" &&
                          (n == null || n(_.nativeEvent),
                          _.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            V()));
                      }),
                      onPointerDown: U(e.onPointerDown, (_) => {
                        _.button === 0 &&
                          (S.current = { x: _.clientX, y: _.clientY });
                      }),
                      onPointerMove: U(e.onPointerMove, (_) => {
                        if (!S.current) return;
                        const w = _.clientX - S.current.x,
                          j = _.clientY - S.current.y,
                          G = !!R.current,
                          H = ["left", "right"].includes(v.swipeDirection),
                          Y = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          xe = H ? Y(0, w) : 0,
                          $ = H ? 0 : Y(0, j),
                          Fe = _.pointerType === "touch" ? 10 : 2,
                          Ae = { x: xe, y: $ },
                          Rt = { originalEvent: _, delta: Ae };
                        G
                          ? ((R.current = Ae), we(er, m, Rt, { discrete: !1 }))
                          : Vt(Ae, v.swipeDirection, Fe)
                            ? ((R.current = Ae),
                              we(Zi, p, Rt, { discrete: !1 }),
                              _.target.setPointerCapture(_.pointerId))
                            : (Math.abs(w) > Fe || Math.abs(j) > Fe) &&
                              (S.current = null);
                      }),
                      onPointerUp: U(e.onPointerUp, (_) => {
                        const w = R.current,
                          j = _.target;
                        if (
                          (j.hasPointerCapture(_.pointerId) &&
                            j.releasePointerCapture(_.pointerId),
                          (R.current = null),
                          (S.current = null),
                          w)
                        ) {
                          const G = _.currentTarget,
                            H = { originalEvent: _, delta: w };
                          (Vt(w, v.swipeDirection, v.swipeThreshold)
                            ? we(ar, g, H, { discrete: !0 })
                            : we(tr, f, H, { discrete: !0 }),
                            G.addEventListener(
                              "click",
                              (Y) => Y.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  sr = (e) => {
    const { __scopeToast: t, children: a, ...o } = e,
      i = ke(Ce, t),
      [r, c] = u.useState(!1),
      [n, d] = u.useState(!1);
    return (
      lr(() => c(!0)),
      u.useEffect(() => {
        const l = window.setTimeout(() => d(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      n
        ? null
        : s.jsx(no, {
            asChild: !0,
            children: s.jsx(Qt, {
              ...o,
              children:
                r && s.jsxs(s.Fragment, { children: [i.label, " ", a] }),
            }),
          })
    );
  },
  nr = "ToastTitle",
  Sa = u.forwardRef((e, t) => {
    const { __scopeToast: a, ...o } = e;
    return s.jsx(J.div, { ...o, ref: t });
  });
Sa.displayName = nr;
var cr = "ToastDescription",
  Ra = u.forwardRef((e, t) => {
    const { __scopeToast: a, ...o } = e;
    return s.jsx(J.div, { ...o, ref: t });
  });
Ra.displayName = cr;
var wa = "ToastAction",
  Ta = u.forwardRef((e, t) => {
    const { altText: a, ...o } = e;
    return a.trim()
      ? s.jsx(Ia, {
          altText: a,
          asChild: !0,
          children: s.jsx(At, { ...o, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${wa}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Ta.displayName = wa;
var Pa = "ToastClose",
  At = u.forwardRef((e, t) => {
    const { __scopeToast: a, ...o } = e,
      i = ir(Pa, a);
    return s.jsx(Ia, {
      asChild: !0,
      children: s.jsx(J.button, {
        type: "button",
        ...o,
        ref: t,
        onClick: U(e.onClick, i.onClose),
      }),
    });
  });
At.displayName = Pa;
var Ia = u.forwardRef((e, t) => {
  const { __scopeToast: a, altText: o, ...i } = e;
  return s.jsx(J.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": o || void 0,
    ...i,
    ref: t,
  });
});
function Oa(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((o) => {
      if (
        (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent),
        dr(o))
      ) {
        const i = o.ariaHidden || o.hidden || o.style.display === "none",
          r = o.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (r) {
            const c = o.dataset.radixToastAnnounceAlt;
            c && t.push(c);
          } else t.push(...Oa(o));
      }
    }),
    t
  );
}
function we(e, t, a, { discrete: o }) {
  const i = a.originalEvent.currentTarget,
    r = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: a });
  (t && i.addEventListener(e, t, { once: !0 }),
    o ? Xt(i, r) : i.dispatchEvent(r));
}
var Vt = (e, t, a = 0) => {
  const o = Math.abs(e.x),
    i = Math.abs(e.y),
    r = o > i;
  return t === "left" || t === "right" ? r && o > a : !r && i > a;
};
function lr(e = () => {}) {
  const t = de(e);
  tt(() => {
    let a = 0,
      o = 0;
    return (
      (a = window.requestAnimationFrame(
        () => (o = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(a), window.cancelAnimationFrame(o));
      }
    );
  }, [t]);
}
function dr(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ur(e) {
  const t = [],
    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const i = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || i
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Ye(e) {
  const t = document.activeElement;
  return e.some((a) =>
    a === t ? !0 : (a.focus(), document.activeElement !== t),
  );
}
var pr = ba,
  Da = Ca,
  La = Aa,
  Na = Sa,
  Ma = Ra,
  ja = Ta,
  ka = At;
const mr = pr,
  za = u.forwardRef(({ className: e, ...t }, a) =>
    s.jsx(Da, {
      ref: a,
      className: Z(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
za.displayName = Da.displayName;
const fr = ea(
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
  qa = u.forwardRef(({ className: e, variant: t, ...a }, o) =>
    s.jsx(La, { ref: o, className: Z(fr({ variant: t }), e), ...a }),
  );
qa.displayName = La.displayName;
const gr = u.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(ja, {
    ref: a,
    className: Z(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
gr.displayName = ja.displayName;
const Fa = u.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(ka, {
    ref: a,
    className: Z(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: s.jsx(vo, { className: "h-4 w-4" }),
  }),
);
Fa.displayName = ka.displayName;
const Va = u.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(Na, { ref: a, className: Z("text-sm font-semibold", e), ...t }),
);
Va.displayName = Na.displayName;
const Ua = u.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(Ma, { ref: a, className: Z("text-sm opacity-90", e), ...t }),
);
Ua.displayName = Ma.displayName;
function hr() {
  const { toasts: e } = ki();
  return s.jsxs(mr, {
    children: [
      e.map(function ({ id: t, title: a, description: o, action: i, ...r }) {
        return s.jsxs(
          qa,
          {
            ...r,
            children: [
              s.jsxs("div", {
                className: "grid gap-1",
                children: [
                  a && s.jsx(Va, { children: a }),
                  o && s.jsx(Ua, { children: o }),
                ],
              }),
              i,
              s.jsx(Fa, {}),
            ],
          },
          t,
        );
      }),
      s.jsx(za, {}),
    ],
  });
}
const vr = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_SUPABASE_ANON_KEY: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
    VITE_SUPABASE_URL: "https://jmekjpytugnetkzphxno.supabase.co",
  },
  Ut = (e, t = !0) => {
    const a = vr[e];
    return (
      a ||
      (t && console.error(`Missing required environment variable: ${e}`), "")
    );
  },
  yr = {
    supabase: {
      url: Ut("VITE_SUPABASE_URL"),
      anonKey: Ut("VITE_SUPABASE_ANON_KEY"),
    },
    gemini: { apiKey: "" },
    isDev: !1,
    isProd: !0,
  },
  { url: pt, anonKey: Ba } = yr.supabase;
(!pt || !Ba || pt === "COLE_SUA_URL_AQUI") &&
  console.warn(
    "Supabase URL ou Anon Key não configurados no arquivo .env.local",
  );
const Ke = mo(pt || "", Ba || "", {
    auth: {
      detectSessionInUrl: !0,
      flowType: "pkce",
      persistSession: !0,
      autoRefreshToken: !0,
    },
  }),
  Ga = u.createContext({
    session: null,
    user: null,
    loading: !0,
    signOut: async () => {},
    isDemoMode: !1,
  }),
  _r = ({ children: e }) => {
    const [t, a] = u.useState(null),
      [o, i] = u.useState(null),
      [r, c] = u.useState(!0),
      [n, d] = u.useState(!1);
    u.useEffect(() => {
      if (window.location.pathname === "/auth/callback") {
        c(!1);
        return;
      }
      (async () => {
        try {
          const {
            data: { session: g },
            error: y,
          } = await Ke.auth.getSession();
          if (y) throw y;
          (a(g), i((g == null ? void 0 : g.user) ?? null));
        } catch (g) {
          (console.error("Erro ao inicializar sessão:", g), d(!0));
          const y = {
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
          i(y);
        } finally {
          c(!1);
        }
      })();
      const {
        data: { subscription: f },
      } = Ke.auth.onAuthStateChange((g, y) => {
        (a(y), i((y == null ? void 0 : y.user) ?? null));
      });
      return () => f.unsubscribe();
    }, []);
    const l = async () => {
      if (n) {
        (i(null), a(null));
        return;
      }
      try {
        await Ke.auth.signOut();
      } catch (p) {
        console.error("Erro ao fazer signOut:", p);
      }
    };
    return s.jsx(Ga.Provider, {
      value: { session: t, user: o, loading: r, signOut: l, isDemoMode: n },
      children: e,
    });
  },
  br = () => {
    const e = u.useContext(Ga);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  Er = (e, t, a, o) => {
    var r, c, n, d;
    const i = [a, { code: t, ...(o || {}) }];
    if (
      (c = (r = e == null ? void 0 : e.services) == null ? void 0 : r.logger) !=
        null &&
      c.forward
    )
      return e.services.logger.forward(i, "warn", "react-i18next::", !0);
    (oe(i[0]) && (i[0] = `react-i18next:: ${i[0]}`),
      (d = (n = e == null ? void 0 : e.services) == null ? void 0 : n.logger) !=
        null && d.warn
        ? e.services.logger.warn(...i)
        : console != null && console.warn && console.warn(...i));
  },
  Bt = {},
  Ha = (e, t, a, o) => {
    (oe(a) && Bt[a]) || (oe(a) && (Bt[a] = new Date()), Er(e, t, a, o));
  },
  $a = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const a = () => {
        (setTimeout(() => {
          e.off("initialized", a);
        }, 0),
          t());
      };
      e.on("initialized", a);
    }
  },
  mt = (e, t, a) => {
    e.loadNamespaces(t, $a(e, a));
  },
  Gt = (e, t, a, o) => {
    if (
      (oe(a) && (a = [a]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return mt(e, a, o);
    (a.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
      e.loadLanguages(t, $a(e, o)));
  },
  Cr = (e, t, a = {}) =>
    !t.languages || !t.languages.length
      ? (Ha(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: a.lng,
          precheck: (o, i) => {
            if (
              a.bindI18n &&
              a.bindI18n.indexOf("languageChanging") > -1 &&
              o.services.backendConnector.backend &&
              o.isLanguageChangingTo &&
              !i(o.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  oe = (e) => typeof e == "string",
  xr = (e) => typeof e == "object" && e !== null,
  Ar =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Sr = {
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
  Rr = (e) => Sr[e],
  wr = (e) => e.replace(Ar, Rr);
let ft = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: wr,
  transDefaultProps: void 0,
};
const Tr = (e = {}) => {
    ft = { ...ft, ...e };
  },
  Pr = () => ft;
let Wa;
const Ir = (e) => {
    Wa = e;
  },
  Or = () => Wa,
  Dr = {
    type: "3rdParty",
    init(e) {
      (Tr(e.options.react), Ir(e));
    },
  },
  Lr = u.createContext();
class Nr {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((a) => {
      this.usedNamespaces[a] || (this.usedNamespaces[a] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Mr = (e, t) => {
    if (oe(t)) return t;
    if (xr(t) && oe(t.defaultValue)) return t.defaultValue;
    if (typeof e == "function") return "";
    if (Array.isArray(e)) {
      const a = e[e.length - 1];
      return typeof a == "function" ? "" : a;
    }
    return e;
  },
  jr = { t: Mr, ready: !1 },
  kr = () => () => {},
  me = (e, t = {}) => {
    var k, z, V;
    const { i18n: a } = t,
      { i18n: o, defaultNS: i } = u.useContext(Lr) || {},
      r = a || o || Or();
    (r && !r.reportNamespaces && (r.reportNamespaces = new Nr()),
      r ||
        Ha(
          r,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        ));
    const c = u.useMemo(() => {
        var b;
        return {
          ...Pr(),
          ...((b = r == null ? void 0 : r.options) == null ? void 0 : b.react),
          ...t,
        };
      }, [r, t]),
      { useSuspense: n, keyPrefix: d } = c,
      l =
        i ||
        ((k = r == null ? void 0 : r.options) == null ? void 0 : k.defaultNS),
      p = oe(l) ? [l] : l || ["translation"],
      m = u.useMemo(() => p, p);
    (V =
      (z = r == null ? void 0 : r.reportNamespaces) == null
        ? void 0
        : z.addUsedNamespaces) == null || V.call(z, m);
    const f = u.useRef(0),
      g = u.useCallback(
        (b) => {
          if (!r) return kr;
          const { bindI18n: I, bindI18nStore: _ } = c,
            w = () => {
              ((f.current += 1), b());
            };
          return (
            I && r.on(I, w),
            _ && r.store.on(_, w),
            () => {
              (I && I.split(" ").forEach((j) => r.off(j, w)),
                _ && _.split(" ").forEach((j) => r.store.off(j, w)));
            }
          );
        },
        [r, c],
      ),
      y = u.useRef(),
      v = u.useCallback(() => {
        if (!r) return jr;
        const b =
            !!(r.isInitialized || r.initializedStoreOnce) &&
            m.every((H) => Cr(H, r, c)),
          I = t.lng || r.language,
          _ = f.current,
          w = y.current;
        if (
          w &&
          w.ready === b &&
          w.lng === I &&
          w.keyPrefix === d &&
          w.revision === _
        )
          return w;
        const G = {
          t: r.getFixedT(I, c.nsMode === "fallback" ? m : m[0], d),
          ready: b,
          lng: I,
          keyPrefix: d,
          revision: _,
        };
        return ((y.current = G), G);
      }, [r, m, d, c, t.lng]),
      [h, A] = u.useState(0),
      { t: E, ready: S } = co.useSyncExternalStore(g, v, v);
    u.useEffect(() => {
      if (r && !S && !n) {
        const b = () => A((I) => I + 1);
        t.lng ? Gt(r, t.lng, m, b) : mt(r, m, b);
      }
    }, [r, t.lng, m, S, n, h]);
    const R = r || {},
      P = u.useRef(null),
      L = u.useRef(),
      T = (b) => {
        const I = Object.getOwnPropertyDescriptors(b);
        I.__original && delete I.__original;
        const _ = Object.create(Object.getPrototypeOf(b), I);
        if (!Object.prototype.hasOwnProperty.call(_, "__original"))
          try {
            Object.defineProperty(_, "__original", {
              value: b,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return _;
      },
      F = u.useMemo(() => {
        const b = R,
          I = b == null ? void 0 : b.language;
        let _ = b;
        b &&
          (P.current && P.current.__original === b
            ? L.current !== I
              ? ((_ = T(b)), (P.current = _), (L.current = I))
              : (_ = P.current)
            : ((_ = T(b)), (P.current = _), (L.current = I)));
        const w = [E, _, S];
        return ((w.t = E), (w.i18n = _), (w.ready = S), w);
      }, [E, R, S, R.resolvedLanguage, R.language, R.languages]);
    if (r && n && !S)
      throw new Promise((b) => {
        const I = () => b();
        t.lng ? Gt(r, t.lng, m, I) : mt(r, m, I);
      });
    return F;
  },
  { slice: zr, forEach: qr } = [];
function Fr(e) {
  return (
    qr.call(zr.call(arguments, 1), (t) => {
      if (t) for (const a in t) e[a] === void 0 && (e[a] = t[a]);
    }),
    e
  );
}
function Vr(e) {
  return typeof e != "string"
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
      ].some((a) => a.test(e));
}
const Ht = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Ur = function (e, t) {
    const o =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      i = encodeURIComponent(t);
    let r = `${e}=${i}`;
    if (o.maxAge > 0) {
      const c = o.maxAge - 0;
      if (Number.isNaN(c)) throw new Error("maxAge should be a Number");
      r += `; Max-Age=${Math.floor(c)}`;
    }
    if (o.domain) {
      if (!Ht.test(o.domain)) throw new TypeError("option domain is invalid");
      r += `; Domain=${o.domain}`;
    }
    if (o.path) {
      if (!Ht.test(o.path)) throw new TypeError("option path is invalid");
      r += `; Path=${o.path}`;
    }
    if (o.expires) {
      if (typeof o.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      r += `; Expires=${o.expires.toUTCString()}`;
    }
    if (
      (o.httpOnly && (r += "; HttpOnly"),
      o.secure && (r += "; Secure"),
      o.sameSite)
    )
      switch (
        typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite
      ) {
        case !0:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return (o.partitioned && (r += "; Partitioned"), r);
  },
  $t = {
    create(e, t, a, o) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (a &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + a * 60 * 1e3)),
        o && (i.domain = o),
        (document.cookie = Ur(e, t, i)));
    },
    read(e) {
      const t = `${e}=`,
        a = document.cookie.split(";");
      for (let o = 0; o < a.length; o++) {
        let i = a[o];
        for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
      }
      return null;
    },
    remove(e, t) {
      this.create(e, "", -1, t);
    },
  };
var Br = {
    name: "cookie",
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < "u") return $t.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: a,
        cookieMinutes: o,
        cookieDomain: i,
        cookieOptions: r,
      } = t;
      a && typeof document < "u" && $t.create(a, e, o, i, r);
    },
  },
  Gr = {
    name: "querystring",
    lookup(e) {
      var o;
      let { lookupQuerystring: t } = e,
        a;
      if (typeof window < "u") {
        let { search: i } = window.location;
        !window.location.search &&
          ((o = window.location.hash) == null ? void 0 : o.indexOf("?")) > -1 &&
          (i = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        const c = i.substring(1).split("&");
        for (let n = 0; n < c.length; n++) {
          const d = c[n].indexOf("=");
          d > 0 && c[n].substring(0, d) === t && (a = c[n].substring(d + 1));
        }
      }
      return a;
    },
  },
  Hr = {
    name: "hash",
    lookup(e) {
      var i;
      let { lookupHash: t, lookupFromHashIndex: a } = e,
        o;
      if (typeof window < "u") {
        const { hash: r } = window.location;
        if (r && r.length > 2) {
          const c = r.substring(1);
          if (t) {
            const n = c.split("&");
            for (let d = 0; d < n.length; d++) {
              const l = n[d].indexOf("=");
              l > 0 &&
                n[d].substring(0, l) === t &&
                (o = n[d].substring(l + 1));
            }
          }
          if (o) return o;
          if (!o && a > -1) {
            const n = r.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(n)
              ? (i = n[typeof a == "number" ? a : 0]) == null
                ? void 0
                : i.replace("/", "")
              : void 0;
          }
        }
      }
      return o;
    },
  };
let re = null;
const Wt = () => {
  if (re !== null) return re;
  try {
    if (((re = typeof window < "u" && window.localStorage !== null), !re))
      return !1;
    const e = "i18next.translate.boo";
    (window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e));
  } catch {
    re = !1;
  }
  return re;
};
var $r = {
  name: "localStorage",
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && Wt()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: a } = t;
    a && Wt() && window.localStorage.setItem(a, e);
  },
};
let se = null;
const Yt = () => {
  if (se !== null) return se;
  try {
    if (((se = typeof window < "u" && window.sessionStorage !== null), !se))
      return !1;
    const e = "i18next.translate.boo";
    (window.sessionStorage.setItem(e, "foo"),
      window.sessionStorage.removeItem(e));
  } catch {
    se = !1;
  }
  return se;
};
var Wr = {
    name: "sessionStorage",
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && Yt()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: a } = t;
      a && Yt() && window.sessionStorage.setItem(a, e);
    },
  },
  Yr = {
    name: "navigator",
    lookup(e) {
      const t = [];
      if (typeof navigator < "u") {
        const { languages: a, userLanguage: o, language: i } = navigator;
        if (a) for (let r = 0; r < a.length; r++) t.push(a[r]);
        (o && t.push(o), i && t.push(i));
      }
      return t.length > 0 ? t : void 0;
    },
  },
  Kr = {
    name: "htmlTag",
    lookup(e) {
      let { htmlTag: t } = e,
        a;
      const o = t || (typeof document < "u" ? document.documentElement : null);
      return (
        o &&
          typeof o.getAttribute == "function" &&
          (a = o.getAttribute("lang")),
        a
      );
    },
  },
  Xr = {
    name: "path",
    lookup(e) {
      var i;
      let { lookupFromPathIndex: t } = e;
      if (typeof window > "u") return;
      const a = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(a)
        ? (i = a[typeof t == "number" ? t : 0]) == null
          ? void 0
          : i.replace("/", "")
        : void 0;
    },
  },
  Qr = {
    name: "subdomain",
    lookup(e) {
      var i, r;
      let { lookupFromSubdomainIndex: t } = e;
      const a = typeof t == "number" ? t + 1 : 1,
        o =
          typeof window < "u" &&
          ((r = (i = window.location) == null ? void 0 : i.hostname) == null
            ? void 0
            : r.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
              ));
      if (o) return o[a];
    },
  };
let Ya = !1;
try {
  (document.cookie, (Ya = !0));
} catch {}
const Ka = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
Ya || Ka.splice(1, 1);
const Jr = () => ({
  order: Ka,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (e) => e,
});
class Xa {
  constructor(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = "languageDetector"), (this.detectors = {}), this.init(t, a));
  }
  init() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = t),
      (this.options = Fr(a, this.options || {}, Jr())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = o),
      this.addDetector(Br),
      this.addDetector(Gr),
      this.addDetector($r),
      this.addDetector(Wr),
      this.addDetector(Yr),
      this.addDetector(Kr),
      this.addDetector(Xr),
      this.addDetector(Qr),
      this.addDetector(Hr));
  }
  addDetector(t) {
    return ((this.detectors[t.name] = t), this);
  }
  detect() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      a = [];
    return (
      t.forEach((o) => {
        if (this.detectors[o]) {
          let i = this.detectors[o].lookup(this.options);
          (i && typeof i == "string" && (i = [i]), i && (a = a.concat(i)));
        }
      }),
      (a = a
        .filter((o) => o != null && !Vr(o))
        .map((o) => this.options.convertDetectedLanguage(o))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? a
        : a.length > 0
          ? a[0]
          : null
    );
  }
  cacheUserLanguage(t) {
    let a =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    a &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(t) > -1) ||
        a.forEach((o) => {
          this.detectors[o] &&
            this.detectors[o].cacheUserLanguage(t, this.options);
        }));
  }
}
Xa.type = "languageDetector";
const Zr = {
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
  es = { super: "Super", reports: "Relatórios" },
  ts = {
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
  as = {
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
  os = { placeholder: "Buscar relatórios, métricas..." },
  is = {
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
  rs = {
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
  ss = {
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
  ns = {
    not_found_title: "Página não encontrada",
    not_found_desc:
      "A página que você está procurando não existe ou foi movida.",
    return_home: "Voltar para o início",
  },
  cs = {
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
  ls = {
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
  ds = {
    index_title: "SuperRelatórios - Transforme Dados em Decisões",
    index_desc:
      "Gere relatórios inteligentes em minutos. A plataforma de BI feita para PMEs que buscam crescimento real.",
  },
  us = {
    bi: Zr,
    brand: es,
    nav: ts,
    routes: as,
    search: os,
    landing: is,
    decision_panel: rs,
    common: ss,
    errors: ns,
    dashboard: cs,
    auth: ls,
    seo: ds,
  },
  ps = {
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
  ms = { super: "Super", reports: "Reports" },
  fs = {
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
  gs = {
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
  hs = { placeholder: "Search reports, metrics..." },
  vs = {
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
  ys = {
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
  _s = {
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
  bs = {
    not_found_title: "Page not found",
    not_found_desc:
      "The page you are looking for does not exist or has been moved.",
    return_home: "Return to home",
  },
  Es = {
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
  Cs = {
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
  xs = {
    index_title: "SuperRelatórios - Transform Data into Decisions",
    index_desc:
      "Generate intelligent reports in minutes. The BI platform built for SMEs seeking real growth.",
  },
  As = {
    bi: ps,
    brand: ms,
    nav: fs,
    routes: gs,
    search: hs,
    landing: vs,
    decision_panel: ys,
    common: _s,
    errors: bs,
    dashboard: Es,
    auth: Cs,
    seo: xs,
  },
  Ss = {
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
  Rs = { super: "Súper", reports: "Reportes" },
  ws = {
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
  Ts = {
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
  Ps = {
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
  Is = {
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
  Os = {
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
  Ds = {
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
  Ls = {
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
  Ns = {
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
  Ms = {
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
  js = {
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
  ks = {
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
  zs = {
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
  qs = {
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
  Fs = {
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
  Vs = {
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
  Us = {
    index_title:
      "SúperReportes | El Generador de Reportes Profesionales con IA",
    index_desc:
      "Genere reportes profesionales con análisis de consultor en minutos. La plataforma nº1 para Pymes que no quieren perder tiempo con planillas manuales.",
  },
  Bs = {
    not_found_title: "Página no encontrada",
    not_found_desc:
      "¡Oops! Parece que ha seguido un enlace que no existe o la página ha sido movida.",
    return_home: "Volver al Inicio",
  },
  Gs = {
    system: "Preparando su entorno...",
    data: "Organizando información...",
    standard: "Cargando...",
  },
  Hs = {
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
  $s = {
    bi: Ss,
    brand: Rs,
    common: ws,
    landing: Ts,
    nav: Ps,
    routes: Is,
    dashboard: Os,
    auth: Ds,
    builder: Ls,
    reports: Ns,
    report_detail: Ms,
    folders: js,
    profile: ks,
    settings: zs,
    data_hub: qs,
    priorities: Fs,
    action_plan: Vs,
    seo: Us,
    errors: Bs,
    loading_state: Gs,
    decision_panel: Hs,
  },
  Ws = {
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
  Ys = { strategy: Ws },
  Ks = {
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
  Xs = {
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
  Qs = { strategy: Ks, common: Xs },
  Js = {
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
  Zs = {
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
  en = { strategy: Js, common: Zs },
  tn = {
    "pt-BR": { translation: { ...us, ...Ys } },
    "en-US": { translation: { ...As, ...Qs } },
    "es-ES": { translation: { ...$s, ...en } },
  };
_t.use(Xa)
  .use(Dr)
  .init({
    resources: tn,
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US", "es-ES"],
    interpolation: { escapeValue: !1 },
  });
const ze = {
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
  ye = (e, t) => {
    const a = t || _t.language,
      o = ze[a];
    if (!o) return e;
    if (o[e]) return o[e];
    for (const [i, r] of Object.entries(o))
      if (i.includes(":") && e.startsWith(i.split(":")[0])) {
        const c = e.replace(i.split(":")[0], "");
        return r.replace(":id", c);
      }
    return e;
  },
  _e = (e) => {
    for (const [t, a] of Object.entries(ze))
      for (const [o, i] of Object.entries(a)) {
        if (e === i) return o;
        if (i.includes(":") && e.startsWith(i.split(":")[0])) {
          const r = e.replace(i.split(":")[0], "");
          return o.replace(":id", r);
        }
      }
    return e;
  },
  an = (e) => {
    for (const [t, a] of Object.entries(ze))
      for (const o of Object.values(a)) {
        const i = o;
        if (e === i || (i.includes(":") && e.startsWith(i.split(":")[0])))
          return t;
      }
    return _t.language;
  },
  St = () => {
    const e = ue(),
      t = Zt(),
      { i18n: a } = me(),
      [o, i] = u.useState(!1),
      r = () => {
        const f = localStorage.getItem("preferred-language");
        if (f && ["pt-BR", "en-US", "es-ES"].includes(f)) return f;
        const g = navigator.language;
        return g.startsWith("pt")
          ? "pt-BR"
          : g.startsWith("es")
            ? "es-ES"
            : g.startsWith("en")
              ? "en-US"
              : "pt-BR";
      },
      c = (f, g) => {
        const y = ye(f, a.language);
        g != null && g.replace ? t(y, { replace: !0 }) : t(y);
      },
      n = () => {
        const f = e.pathname;
        if (f === "/" || f === "") return !0;
        const g = r();
        if (an(f) !== g) {
          const v = _e(f),
            h = ye(v, g);
          if (h !== f)
            return (
              i(!0),
              localStorage.setItem("preferred-language", g),
              a.changeLanguage(g),
              t(h, { replace: !0 }),
              !0
            );
        }
        return !1;
      },
      d = (f) => {
        const g = e.pathname,
          y = _e(g),
          v = ye(y, f);
        (localStorage.setItem("preferred-language", f),
          a.changeLanguage(f),
          t(v, { replace: !0 }));
      },
      l = () => {
        const f = e.pathname;
        return _e(f);
      },
      p = () => {
        const f = _e(e.pathname),
          g = {};
        for (const y of ["pt-BR", "en-US", "es-ES"]) g[y] = ye(f, y);
        return g;
      },
      m = (f, g) => {
        const y = g || a.language,
          v = ze[y];
        return v ? Object.values(v).includes(f) : !1;
      };
    return (
      u.useEffect(() => {
        const f = r();
        (f !== a.language && a.changeLanguage(f),
          n() &&
            (i(!1),
            localStorage.setItem("preferred-language", f),
            t(ye(_e(e.pathname), f), { replace: !0 })));
      }, []),
      {
        navigateLocalized: c,
        changeLanguage: d,
        getCanonicalUrl: l,
        getAlternateUrls: p,
        isRouteAvailable: m,
        detectPreferredLanguage: r,
        checkRedirect: n,
        isRedirecting: o,
        currentLanguage: a.language,
        currentPath: e.pathname,
      }
    );
  },
  on = ({
    title: e,
    description: t,
    keywords: a,
    image: o,
    type: i = "website",
    siteName: r = "SuperRelatórios",
    locale: c,
  }) => {
    (ue(), me());
    const {
        getCanonicalUrl: n,
        getAlternateUrls: d,
        currentLanguage: l,
      } = St(),
      p = {
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
      m = p[l] || p["pt-BR"],
      f = n(),
      g = d(),
      y = e || m.defaultTitle,
      v = t || m.defaultDescription,
      h = a || m.defaultKeywords,
      A = o || "https://superrelatorios.vercel.app/og-image.jpg",
      E = c || l;
    return (
      u.useEffect(() => {
        const S = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: y,
            description: v,
            url: f,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
            author: {
              "@type": "Organization",
              name: m.siteName,
              url: "https://superrelatorios.vercel.app",
            },
            inLanguage: l,
            isAccessibleForFree: !0,
          },
          R = document.querySelector('script[type="application/ld+json"]');
        R && R.remove();
        const P = document.createElement("script");
        return (
          (P.type = "application/ld+json"),
          (P.textContent = JSON.stringify(S)),
          document.head.appendChild(P),
          () => {
            const L = document.querySelector(
              'script[type="application/ld+json"]',
            );
            L && L.remove();
          }
        );
      }, [y, v, f, l]),
      s.jsxs(Ko, {
        children: [
          s.jsx("title", { children: y }),
          s.jsx("meta", { name: "description", content: v }),
          s.jsx("meta", { name: "keywords", content: h }),
          s.jsx("meta", { name: "author", content: m.siteName }),
          s.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          s.jsx("meta", { name: "robots", content: "index, follow" }),
          s.jsx("link", { rel: "canonical", href: f }),
          Object.entries(g).map(([S, R]) =>
            s.jsx("link", { rel: "alternate", hrefLang: S, href: R }, S),
          ),
          s.jsx("link", {
            rel: "alternate",
            hrefLang: "x-default",
            href: g["en-US"] || f,
          }),
          s.jsx("meta", { property: "og:type", content: i }),
          s.jsx("meta", { property: "og:title", content: y }),
          s.jsx("meta", { property: "og:description", content: v }),
          s.jsx("meta", { property: "og:image", content: A }),
          s.jsx("meta", { property: "og:url", content: f }),
          s.jsx("meta", { property: "og:site_name", content: m.siteName }),
          s.jsx("meta", {
            property: "og:locale",
            content: E.replace("-", "_"),
          }),
          s.jsx("meta", {
            property: "twitter:card",
            content: "summary_large_image",
          }),
          s.jsx("meta", { property: "twitter:title", content: y }),
          s.jsx("meta", { property: "twitter:description", content: v }),
          s.jsx("meta", { property: "twitter:image", content: A }),
          s.jsx("meta", { name: "theme-color", content: "#3b82f6" }),
          s.jsx("meta", {
            name: "msapplication-TileColor",
            content: "#3b82f6",
          }),
          s.jsx("meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          }),
          s.jsx("meta", {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          }),
          s.jsx("meta", {
            name: "apple-mobile-web-app-title",
            content: m.siteName,
          }),
          s.jsx("html", { lang: l }),
          s.jsx("meta", { name: "geo.region", content: "BR" }),
          s.jsx("meta", { name: "geo.placename", content: "Brazil" }),
          s.jsx("meta", {
            httpEquiv: "Content-Type",
            content: "text/html; charset=UTF-8",
          }),
          s.jsx("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
          s.jsx("meta", {
            httpEquiv: "X-Content-Type-Options",
            content: "nosniff",
          }),
          s.jsx("meta", { httpEquiv: "X-Frame-Options", content: "DENY" }),
          s.jsx("meta", {
            httpEquiv: "X-XSS-Protection",
            content: "1; mode=block",
          }),
          s.jsx("meta", {
            httpEquiv: "Referrer-Policy",
            content: "strict-origin-when-cross-origin",
          }),
          s.jsx("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          s.jsx("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
          }),
        ],
      })
    );
  },
  rn = ({ children: e }) => {
    const t = ue(),
      a = Zt(),
      { i18n: o } = me(),
      { detectPreferredLanguage: i } = St(),
      [r, c] = u.useState(!1);
    return (
      u.useEffect(() => {
        const n = t.pathname.split("/").filter(Boolean),
          d = ["pt-BR", "en-US", "es-ES"];
        if (
          t.pathname === "/" ||
          t.pathname === "" ||
          (n.length > 0 && !d.includes(n[0]))
        ) {
          const m = `/${i()}${t.pathname === "/" ? "" : t.pathname}${t.search}`;
          if (m !== t.pathname + t.search) {
            a(m, { replace: !0 });
            return;
          }
        }
        const l = n[0];
        (d.includes(l) && o.language !== l && o.changeLanguage(l),
          (document.documentElement.lang = o.language),
          r || c(!0));
      }, [t.pathname, o, r, a, i]),
      s.jsxs(s.Fragment, { children: [s.jsx(on, {}), e] })
    );
  },
  Qa = () => {
    const { t: e } = me();
    return s.jsx("div", {
      className:
        "flex items-center justify-center min-h-screen w-full bg-background/50 backdrop-blur-sm z-50",
      children: s.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          s.jsx("div", {
            className:
              "w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin",
          }),
          s.jsx("p", {
            className:
              "text-sm font-medium text-muted-foreground animate-pulse",
            children: e("loading_state.system"),
          }),
        ],
      }),
    });
  },
  sn = ea(
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
  gt = u.forwardRef(
    ({ className: e, variant: t, size: a, asChild: o, ...i }, r) =>
      s.jsx("button", {
        className: Z(sn({ variant: t, size: a, className: e })),
        ref: r,
        ...i,
      }),
  );
gt.displayName = "Button";
const nn = ({ error: e, resetError: t }) => {
  const { t: a } = me();
  return s.jsxs("div", {
    className:
      "min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-fade-in",
    children: [
      s.jsx("div", {
        className: "bg-destructive/10 p-4 rounded-full mb-6",
        children: s.jsx(yo, { className: "h-12 w-12 text-destructive" }),
      }),
      s.jsx("h2", {
        className: "text-2xl font-bold mb-2 text-foreground",
        children: a("error.title", { defaultValue: "Algo deu errado" }),
      }),
      s.jsx("p", {
        className: "text-muted-foreground mb-8 max-w-md",
        children: a("error.description", {
          defaultValue:
            "Ocorreu um erro inesperado. Nossa equipe já foi notificada. Por favor, tente recarregar a página.",
        }),
      }),
      !1,
      s.jsxs("div", {
        className: "flex gap-4",
        children: [
          s.jsxs(gt, {
            onClick: t,
            size: "lg",
            children: [
              s.jsx(_o, { className: "mr-2 h-4 w-4" }),
              a("error.try_again", { defaultValue: "Tentar Novamente" }),
            ],
          }),
          s.jsx(gt, {
            variant: "outline",
            size: "lg",
            onClick: () => (window.location.href = "/"),
            children: a("error.go_home", { defaultValue: "Voltar ao Início" }),
          }),
        ],
      }),
    ],
  });
};
class cn extends u.Component {
  constructor() {
    super(...arguments);
    q(this, "state", { hasError: !1, error: null, errorInfo: null });
    q(this, "resetError", () => {
      this.setState({ hasError: !1, error: null, errorInfo: null });
    });
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0, error: a, errorInfo: null };
  }
  componentDidCatch(a, o) {
    (console.error(
      "Um erro não tratado foi capturado pelo Error Boundary:",
      a,
      o,
    ),
      this.setState({ errorInfo: o }));
  }
  render() {
    return this.state.hasError
      ? this.props.fallback
        ? this.props.fallback
        : s.jsx(nn, { error: this.state.error, resetError: this.resetError })
      : this.props.children;
  }
}
const ln = ({ children: e }) => {
  const { locale: t } = lo(),
    a = ue(),
    { i18n: o } = me(),
    { currentLanguage: i } = St(),
    r = ["pt-BR", "en-US", "es-ES"];
  if (
    (u.useEffect(() => {
      t && r.includes(t) && o.language !== t && o.changeLanguage(t);
    }, [t, o]),
    t && !r.includes(t))
  ) {
    const c = a.pathname.replace(`/${t}`, `/${i}`);
    return s.jsx(yt, { to: c + a.search, replace: !0 });
  }
  return s.jsx(s.Fragment, { children: e });
};
class qe {
  constructor() {
    q(this, "entries", []);
    q(this, "context", {});
    q(this, "maxEntries", 500);
  }
  addEntry(t, a, o) {
    const i = {
      id: `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: t,
      content: a,
      timestamp: new Date(),
      metadata: o,
    };
    return (
      this.entries.push(i),
      this.entries.length > this.maxEntries &&
        (this.entries = this.entries.slice(-this.maxEntries)),
      i.id
    );
  }
  addTask(t, a) {
    return this.addEntry("task", t, a);
  }
  addDecision(t, a) {
    return this.addEntry("decision", t, a);
  }
  addContext(t, a) {
    return this.addEntry("context", t, a);
  }
  addReference(t, a) {
    return this.addEntry("reference", t, a);
  }
  addAction(t, a) {
    return this.addEntry("action", t, a);
  }
  getEntries(t) {
    return t ? this.entries.filter((a) => a.type === t) : [...this.entries];
  }
  getTasks() {
    return this.getEntries("task");
  }
  getDecisions() {
    return this.getEntries("decision");
  }
  getRecentEntries(t = 10) {
    return this.entries.slice(-t);
  }
  search(t) {
    const a = t.toLowerCase();
    return this.entries.filter((o) => o.content.toLowerCase().includes(a));
  }
  setContext(t) {
    this.context = { ...this.context, ...t };
  }
  getContext() {
    return { ...this.context };
  }
  updateTask(t, a) {
    const o = this.entries.findIndex((i) => i.id === t);
    o !== -1 && (this.entries[o] = { ...this.entries[o], ...a });
  }
  clear() {
    ((this.entries = []), (this.context = {}));
  }
  clearType(t) {
    this.entries = this.entries.filter((a) => a.type !== t);
  }
  getSummary() {
    const t = {};
    for (const a of this.entries) t[a.type] = (t[a.type] || 0) + 1;
    return {
      totalEntries: this.entries.length,
      byType: t,
      context: this.getContext(),
      lastUpdated:
        this.entries.length > 0
          ? this.entries[this.entries.length - 1].timestamp
          : null,
    };
  }
  export() {
    return JSON.stringify(
      {
        entries: this.entries,
        context: this.context,
        exportedAt: new Date().toISOString(),
      },
      null,
      2,
    );
  }
  static fromExport(t) {
    const a = JSON.parse(t),
      o = new qe();
    return (
      (o.entries = a.entries.map((i) => ({
        ...i,
        timestamp: new Date(i.timestamp),
      }))),
      (o.context = a.context),
      o
    );
  }
}
const D = new qe(),
  te = class te {
    constructor() {
      q(this, "projectMemoryPath", "/knowledge/PROJECT_MEMORY.md");
    }
    static getInstance() {
      return (te.instance || (te.instance = new te()), te.instance);
    }
    startSession() {
      (D.setContext({ projectPhase: "active" }),
        D.addContext("Session started"));
    }
    endSession() {
      D.addContext("Session ended");
    }
    setCurrentTask(t) {
      (D.setContext({ currentTask: t }), D.addTask(`Working on: ${t}`));
    }
    setActiveDomain(t) {
      (D.setContext({ activeDomain: t }), D.addContext(`Active domain: ${t}`));
    }
    recordDecision(t, a) {
      return D.addDecision(t, { reason: a });
    }
    recordAction(t, a) {
      const o = a ? { result: a } : void 0;
      return D.addAction(t, o);
    }
    addReference(t, a) {
      const o = a ? { source: a } : void 0;
      return D.addReference(t, o);
    }
    retrieve(t = {}) {
      const { query: a, types: o, limit: i = 10 } = t;
      let r;
      return (
        a
          ? (r = D.search(a))
          : o && o.length > 0
            ? (r = o.flatMap((c) => D.getEntries(c)))
            : (r = D.getRecentEntries(i)),
        i && r.length > i && (r = r.slice(-i)),
        { entries: r, context: D.getContext() }
      );
    }
    getContextSummary() {
      const t = D.getContext(),
        a = D.getTasks()
          .slice(-5)
          .map((r) => r.content),
        o = D.getDecisions()
          .slice(-3)
          .map((r) => r.content),
        i = D.getEntries("action")
          .slice(-5)
          .map((r) => r.content);
      return {
        currentTask: t.currentTask,
        activeDomain: t.activeDomain,
        projectPhase: t.projectPhase,
        recentTasks: a,
        recentDecisions: o,
        recentActions: i,
      };
    }
    getProjectContext() {
      const t = this.getContextSummary(),
        a = D.getSummary();
      return { ...t, sessionStats: a, timestamp: new Date().toISOString() };
    }
    clearSession() {
      D.clear();
    }
    exportSession() {
      return D.export();
    }
    importSession(t) {
      const a = qe.fromExport(t);
      (D.clear(),
        D.getEntries().forEach(() => {}),
        a.getEntries().forEach((o) => {
          D.addEntry(o.type, o.content, o.metadata);
        }),
        D.setContext(a.getContext()));
    }
  };
q(te, "instance", null);
let ht = te;
const Xe = ht.getInstance(),
  dn = () => {
    u.useEffect(() => {
      Xe.startSession();
      const e = `session-${Date.now()}`;
      Xe.recordAction("Session initialized", `ID: ${e}`);
      const t = D.getSummary();
      return (
        console.log("[Memory] Session started:", t.totalEntries, "entries"),
        () => {
          (Xe.endSession(), console.log("[Memory] Session ended"));
        }
      );
    }, []);
  },
  Qe = u.lazy(() =>
    O(
      () => import("./Index-BajN7kV3.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    ),
  ),
  un = u.lazy(() =>
    O(
      () => import("./ControlPanel-CML2fplz.js"),
      __vite__mapDeps([11, 1, 2, 12, 10, 13, 14, 8, 4, 15, 16, 17, 18]),
    ),
  ),
  pn = u.lazy(() =>
    O(
      () => import("./ReportsList-XsHkvYLX.js"),
      __vite__mapDeps([19, 1, 2, 10, 8, 4, 20, 15, 7, 21, 13, 14]),
    ),
  ),
  Je = u.lazy(() =>
    O(
      () => import("./ReportBuilder-CzCG8vll.js"),
      __vite__mapDeps([
        22, 1, 2, 8, 4, 23, 12, 10, 13, 14, 24, 15, 20, 25, 26, 27, 21, 28, 29,
        30,
      ]),
    ),
  ),
  mn = u.lazy(() =>
    O(
      () => import("./ReportDetail-C10KDm-o.js"),
      __vite__mapDeps([31, 1, 2, 8, 4, 15, 7, 9, 13, 5, 28, 29, 30, 17, 10]),
    ),
  ),
  fn = u.lazy(() =>
    O(
      () => import("./Folders-DW9sgsHH.js"),
      __vite__mapDeps([32, 1, 2, 8, 4, 20, 15, 7, 10]),
    ),
  ),
  gn = u.lazy(() =>
    O(
      () => import("./FolderDetail-BfavMdCV.js"),
      __vite__mapDeps([33, 1, 2, 8, 4, 20, 15, 7, 27, 10]),
    ),
  ),
  hn = u.lazy(() =>
    O(
      () => import("./Profile-CynxlXZ5.js"),
      __vite__mapDeps([34, 1, 2, 8, 4, 20, 25, 35, 10]),
    ),
  ),
  vn = u.lazy(() =>
    O(
      () => import("./Settings-0Gyxssjo.js"),
      __vite__mapDeps([36, 1, 2, 8, 4, 20, 25, 37, 21, 35, 15, 38, 17, 10]),
    ),
  ),
  yn = u.lazy(() =>
    O(
      () => import("./Priorities-Bo080nuA.js"),
      __vite__mapDeps([
        39, 1, 2, 10, 15, 4, 40, 8, 20, 17, 30, 41, 42, 25, 43, 14,
      ]),
    ),
  ),
  _n = u.lazy(() =>
    O(
      () => import("./ActionPlan-CozFo0XK.js"),
      __vite__mapDeps([44, 1, 2, 10, 8, 4, 15, 43, 14]),
    ),
  ),
  bn = u.lazy(() =>
    O(
      () => import("./ConsolidatedDashboard-DJMyBrJ0.js"),
      __vite__mapDeps([45, 1, 2, 8, 4, 15, 40, 17, 18, 21, 24, 10]),
    ),
  ),
  En = u.lazy(() =>
    O(
      () => import("./MetricsDashboard-CUtD2IKf.js"),
      __vite__mapDeps([46, 1, 2, 8, 4, 15, 40, 18, 21, 20, 16, 24, 47, 10, 29]),
    ),
  ),
  Cn = u.lazy(() =>
    O(
      () => import("./OrganizationManager-Bue7AaQS.js"),
      __vite__mapDeps([48, 1, 2, 8, 4, 15, 20, 25, 26, 21, 41, 17, 10]),
    ),
  ),
  xn = u.lazy(() =>
    O(
      () => import("./TemplateManager-CS-0yAVY.js"),
      __vite__mapDeps([49, 1, 2, 8, 4, 15, 20, 25, 26, 21, 41, 10]),
    ),
  ),
  Ze = u.lazy(() =>
    O(
      () => import("./DecisionPanel-B-AXd4JU.js"),
      __vite__mapDeps([50, 1, 2, 8, 4, 15, 17, 24, 21, 51, 52, 10]),
    ),
  ),
  An = u.lazy(() =>
    O(
      () => import("./MetricsConfig-Bw2X7cfq.js"),
      __vite__mapDeps([
        53, 1, 2, 8, 4, 15, 20, 25, 26, 21, 37, 41, 54, 16, 47, 10,
      ]),
    ),
  ),
  Sn = u.lazy(() =>
    O(
      () => import("./Analytics-Bzu0_EzN.js"),
      __vite__mapDeps([55, 1, 2, 8, 4, 15, 21, 52, 10]),
    ),
  ),
  Rn = u.lazy(() =>
    O(
      () => import("./NotFound-IrKLjxDC.js"),
      __vite__mapDeps([56, 1, 2, 4, 10]),
    ),
  ),
  Te = u.lazy(() =>
    O(
      () => import("./Login-CGscKklW.js"),
      __vite__mapDeps([57, 1, 2, 20, 25, 4, 8, 38, 58, 6, 5, 10]),
    ),
  ),
  wn = u.lazy(() =>
    O(
      () => import("./AuthCallback-C-Lyuw_d.js"),
      __vite__mapDeps([59, 1, 2, 10, 4]),
    ),
  ),
  Tn = u.lazy(() =>
    O(
      () => import("./AppLayout-oYgXkiOe.js"),
      __vite__mapDeps([60, 1, 2, 20, 3, 4, 7, 35, 5, 6, 10]),
    ),
  ),
  Pe = u.lazy(() =>
    O(
      () => import("./index-DKqB7exO.js"),
      __vite__mapDeps([
        61, 1, 2, 3, 4, 8, 15, 38, 17, 20, 25, 37, 42, 18, 24, 41, 7, 21, 26,
        35, 54, 16, 58, 10,
      ]),
    ),
  ),
  Ie = u.lazy(() =>
    O(
      () => import("./Flows-DfzAKfDu.js"),
      __vite__mapDeps([62, 1, 2, 8, 4, 15, 10]),
    ),
  ),
  Pn = u.lazy(() =>
    O(
      () => import("./Radar-CxnHL-lz.js"),
      __vite__mapDeps([63, 1, 2, 14, 10, 8, 4, 17, 15, 51, 52]),
    ),
  ),
  In = u.lazy(() =>
    O(
      () => import("./DocumentUploader-BiYDVZOM.js"),
      __vite__mapDeps([64, 1, 2, 10, 23, 18, 4, 8, 14]),
    ),
  ),
  On = u.lazy(() =>
    O(
      () => import("./Metrics-CwyxSsOy.js"),
      __vite__mapDeps([65, 1, 2, 8, 4, 15, 10, 14, 16]),
    ),
  ),
  Dn = new fo({
    defaultOptions: {
      queries: { staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, retry: 2 },
    },
  }),
  Ln = () => {
    const e = ue();
    return (
      u.useEffect(() => {
        const t = window.dataLayer;
        t &&
          t.push({
            event: "virtual_page_view",
            pageUrl: e.pathname + e.search,
          });
      }, [e]),
      null
    );
  },
  Nn = ({ children: e }) => {
    const { session: t, loading: a } = br(),
      o = ue();
    if (a) return s.jsx(Qa, {});
    if (!t) {
      const i = o.pathname + o.search;
      return s.jsx(yt, {
        to: `/login?redirect=${encodeURIComponent(i)}`,
        replace: !0,
      });
    }
    return s.jsx(s.Fragment, { children: e });
  },
  Mn = () => (dn(), null),
  jn = () =>
    s.jsxs(cn, {
      children: [
        s.jsx(Mn, {}),
        s.jsx(go, {
          client: Dn,
          children: s.jsx(_r, {
            children: s.jsxs(Ii, {
              children: [
                s.jsx(hr, {}),
                s.jsx(uo, {
                  children: s.jsxs(rn, {
                    children: [
                      s.jsx(Ln, {}),
                      s.jsx(u.Suspense, {
                        fallback: s.jsx(Qa, {}),
                        children: s.jsxs(po, {
                          children: [
                            s.jsx(C, {
                              path: "/",
                              element: s.jsx(yt, { to: "/pt-BR", replace: !0 }),
                            }),
                            s.jsx(C, {
                              path: "/auth/callback",
                              element: s.jsx(wn, {}),
                            }),
                            s.jsx(C, {
                              path: "/pt-BR",
                              element: s.jsx(Qe, {}),
                            }),
                            s.jsx(C, {
                              path: "/en-US",
                              element: s.jsx(Qe, {}),
                            }),
                            s.jsx(C, {
                              path: "/es-ES",
                              element: s.jsx(Qe, {}),
                            }),
                            s.jsx(C, {
                              path: "/pt-BR/login",
                              element: s.jsx(Te, {}),
                            }),
                            s.jsx(C, {
                              path: "/en-US/login",
                              element: s.jsx(Te, {}),
                            }),
                            s.jsx(C, {
                              path: "/es-ES/login",
                              element: s.jsx(Te, {}),
                            }),
                            s.jsx(C, {
                              path: "/login",
                              element: s.jsx(Te, {}),
                            }),
                            s.jsx(C, {
                              path: "/design-system/*",
                              element: s.jsx(Pe, {}),
                            }),
                            s.jsx(C, {
                              path: "/pt-BR/design-system/*",
                              element: s.jsx(Pe, {}),
                            }),
                            s.jsx(C, {
                              path: "/en-US/design-system/*",
                              element: s.jsx(Pe, {}),
                            }),
                            s.jsx(C, {
                              path: "/es-ES/design-system/*",
                              element: s.jsx(Pe, {}),
                            }),
                            s.jsx(C, {
                              path: "/flows",
                              element: s.jsx(Ie, {}),
                            }),
                            s.jsx(C, {
                              path: "/pt-BR/flows",
                              element: s.jsx(Ie, {}),
                            }),
                            s.jsx(C, {
                              path: "/en-US/flows",
                              element: s.jsx(Ie, {}),
                            }),
                            s.jsx(C, {
                              path: "/es-ES/flows",
                              element: s.jsx(Ie, {}),
                            }),
                            s.jsxs(C, {
                              path: "/:locale/app",
                              element: s.jsx(Nn, {
                                children: s.jsx(ln, {
                                  children: s.jsx(Tn, {}),
                                }),
                              }),
                              children: [
                                s.jsx(C, { index: !0, element: s.jsx(un, {}) }),
                                s.jsx(C, {
                                  path: "reports",
                                  element: s.jsx(pn, {}),
                                }),
                                s.jsx(C, {
                                  path: "reports/new",
                                  element: s.jsx(Je, {}),
                                }),
                                s.jsx(C, {
                                  path: "novo-relatorio",
                                  element: s.jsx(Je, {}),
                                }),
                                s.jsx(C, {
                                  path: "new-report",
                                  element: s.jsx(Je, {}),
                                }),
                                s.jsx(C, {
                                  path: "reports/:id",
                                  element: s.jsx(mn, {}),
                                }),
                                s.jsx(C, {
                                  path: "folders",
                                  element: s.jsx(fn, {}),
                                }),
                                s.jsx(C, {
                                  path: "folders/:id",
                                  element: s.jsx(gn, {}),
                                }),
                                s.jsx(C, {
                                  path: "metrics",
                                  element: s.jsx(En, {}),
                                }),
                                s.jsx(C, {
                                  path: "metrics/config",
                                  element: s.jsx(An, {}),
                                }),
                                s.jsx(C, {
                                  path: "analytics",
                                  element: s.jsx(Sn, {}),
                                }),
                                s.jsx(C, {
                                  path: "decision-panel",
                                  element: s.jsx(Ze, {}),
                                }),
                                s.jsx(C, {
                                  path: "radar",
                                  element: s.jsx(Pn, {}),
                                }),
                                s.jsx(C, {
                                  path: "documentos",
                                  element: s.jsx(In, {}),
                                }),
                                s.jsx(C, {
                                  path: "metricas",
                                  element: s.jsx(On, {}),
                                }),
                                s.jsx(C, {
                                  path: "painel-decisao",
                                  element: s.jsx(Ze, {}),
                                }),
                                s.jsx(C, {
                                  path: "panel-decision",
                                  element: s.jsx(Ze, {}),
                                }),
                                s.jsx(C, {
                                  path: "consolidated",
                                  element: s.jsx(bn, {}),
                                }),
                                s.jsx(C, {
                                  path: "organization",
                                  element: s.jsx(Cn, {}),
                                }),
                                s.jsx(C, {
                                  path: "templates",
                                  element: s.jsx(xn, {}),
                                }),
                                s.jsx(C, {
                                  path: "action-plan",
                                  element: s.jsx(_n, {}),
                                }),
                                s.jsx(C, {
                                  path: "prioridades",
                                  element: s.jsx(yn, {}),
                                }),
                                s.jsx(C, {
                                  path: "profile",
                                  element: s.jsx(hn, {}),
                                }),
                                s.jsx(C, {
                                  path: "settings",
                                  element: s.jsx(vn, {}),
                                }),
                              ],
                            }),
                            s.jsx(C, { path: "*", element: s.jsx(Rn, {}) }),
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
      ],
    });
console.log("SuperRelatórios v1.0.0-alpha-hotfix-404-stable-v1");
ta(document.getElementById("root")).render(
  s.jsx(ca, { children: s.jsx(jn, {}) }),
);
export {
  gt as B,
  Ko as H,
  Qa as P,
  Ii as T,
  O as _,
  St as a,
  br as b,
  Z as c,
  ki as d,
  Un as e,
  Bn as f,
  Oi as g,
  sn as h,
  Ke as s,
  me as u,
};
