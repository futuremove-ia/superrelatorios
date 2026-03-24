import { u as Gt, j as n, B as Et, s as Nt } from "./index-CZZTgEon.js";
import { b as r, r as _, v as Jt } from "./vendor-BgR6OOld.js";
import { a as Qt, d as Zt } from "./router-D2JcpG7e.js";
import { I as Rt } from "./input-BW1kAVjz.js";
import { L as Lt } from "./label-Bd_y0s5Z.js";
import {
  C as te,
  b as ee,
  c as ae,
  a as re,
  e as se,
} from "./card-CeRYWmFS.js";
import { S as oe } from "./separator-CdVtjmJc.js";
import { L as ne } from "./LogoIcon-Cw-zlaK5.js";
import { B as ie } from "./BrandName-xbpC75fr.js";
import "./utils-D0yiqoi7.js";
var le = (e) => {
    switch (e) {
      case "success":
        return ue;
      case "info":
        return he;
      case "warning":
        return me;
      case "error":
        return pe;
      default:
        return null;
    }
  },
  de = Array(12).fill(0),
  ce = ({ visible: e, className: a }) =>
    r.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
        "data-visible": e,
      },
      r.createElement(
        "div",
        { className: "sonner-spinner" },
        de.map((s, l) =>
          r.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${l}`,
          }),
        ),
      ),
    ),
  ue = r.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  me = r.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  he = r.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  pe = r.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  fe = r.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    r.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    r.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  ge = () => {
    let [e, a] = r.useState(document.hidden);
    return (
      r.useEffect(() => {
        let s = () => {
          a(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      e
    );
  },
  jt = 1,
  ve = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let a = this.subscribers.indexOf(e);
          this.subscribers.splice(a, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((a) => a(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var a;
          let { message: s, ...l } = e,
            m =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((a = e.id) == null ? void 0 : a.length) > 0
                ? e.id
                : jt++,
            N = this.toasts.find((x) => x.id === m),
            k = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(m) && this.dismissedToasts.delete(m),
            N
              ? (this.toasts = this.toasts.map((x) =>
                  x.id === m
                    ? (this.publish({ ...x, ...e, id: m, title: s }),
                      { ...x, ...e, id: m, dismissible: k, title: s })
                    : x,
                ))
              : this.addToast({ title: s, ...l, dismissible: k, id: m }),
            m
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((a) => {
              this.subscribers.forEach((s) => s({ id: a.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((a) => a({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, a) => this.create({ ...a, message: e })),
        (this.error = (e, a) =>
          this.create({ ...a, message: e, type: "error" })),
        (this.success = (e, a) =>
          this.create({ ...a, type: "success", message: e })),
        (this.info = (e, a) => this.create({ ...a, type: "info", message: e })),
        (this.warning = (e, a) =>
          this.create({ ...a, type: "warning", message: e })),
        (this.loading = (e, a) =>
          this.create({ ...a, type: "loading", message: e })),
        (this.promise = (e, a) => {
          if (!a) return;
          let s;
          a.loading !== void 0 &&
            (s = this.create({
              ...a,
              promise: e,
              type: "loading",
              message: a.loading,
              description:
                typeof a.description != "function" ? a.description : void 0,
            }));
          let l = e instanceof Promise ? e : e(),
            m = s !== void 0,
            N,
            k = l
              .then(async (d) => {
                if (((N = ["resolve", d]), r.isValidElement(d)))
                  ((m = !1),
                    this.create({ id: s, type: "default", message: d }));
                else if (ye(d) && !d.ok) {
                  m = !1;
                  let h =
                      typeof a.error == "function"
                        ? await a.error(`HTTP error! status: ${d.status}`)
                        : a.error,
                    E =
                      typeof a.description == "function"
                        ? await a.description(`HTTP error! status: ${d.status}`)
                        : a.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: h,
                    description: E,
                  });
                } else if (a.success !== void 0) {
                  m = !1;
                  let h =
                      typeof a.success == "function"
                        ? await a.success(d)
                        : a.success,
                    E =
                      typeof a.description == "function"
                        ? await a.description(d)
                        : a.description;
                  this.create({
                    id: s,
                    type: "success",
                    message: h,
                    description: E,
                  });
                }
              })
              .catch(async (d) => {
                if (((N = ["reject", d]), a.error !== void 0)) {
                  m = !1;
                  let h =
                      typeof a.error == "function" ? await a.error(d) : a.error,
                    E =
                      typeof a.description == "function"
                        ? await a.description(d)
                        : a.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: h,
                    description: E,
                  });
                }
              })
              .finally(() => {
                var d;
                (m && (this.dismiss(s), (s = void 0)),
                  (d = a.finally) == null || d.call(a));
              }),
            x = () =>
              new Promise((d, h) =>
                k.then(() => (N[0] === "reject" ? h(N[1]) : d(N[1]))).catch(h),
              );
          return typeof s != "string" && typeof s != "number"
            ? { unwrap: x }
            : Object.assign(s, { unwrap: x });
        }),
        (this.custom = (e, a) => {
          let s = (a == null ? void 0 : a.id) || jt++;
          return (this.create({ jsx: e(s), id: s, ...a }), s);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  C = new ve(),
  be = (e, a) => {
    let s = (a == null ? void 0 : a.id) || jt++;
    return (C.addToast({ title: e, ...a, id: s }), s);
  },
  ye = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  we = be,
  xe = () => C.toasts,
  Ee = () => C.getActiveToasts(),
  mt = Object.assign(
    we,
    {
      success: C.success,
      info: C.info,
      warning: C.warning,
      error: C.error,
      custom: C.custom,
      message: C.message,
      promise: C.promise,
      dismiss: C.dismiss,
      loading: C.loading,
    },
    { getHistory: xe, getToasts: Ee },
  );
function Ne(e, { insertAt: a } = {}) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("style");
  ((l.type = "text/css"),
    a === "top" && s.firstChild
      ? s.insertBefore(l, s.firstChild)
      : s.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = e)
      : l.appendChild(document.createTextNode(e)));
}
Ne(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ht(e) {
  return e.label !== void 0;
}
var je = 3,
  ke = "32px",
  Se = "16px",
  Pt = 4e3,
  Ce = 356,
  Te = 14,
  Be = 20,
  Me = 200;
function L(...e) {
  return e.filter(Boolean).join(" ");
}
function ze(e) {
  let [a, s] = e.split("-"),
    l = [];
  return (a && l.push(a), s && l.push(s), l);
}
var Ie = (e) => {
  var a, s, l, m, N, k, x, d, h, E, W;
  let {
      invert: p,
      toast: t,
      unstyled: Q,
      interacting: v,
      setHeights: w,
      visibleToasts: j,
      heights: P,
      index: H,
      toasts: pt,
      expanded: Z,
      removeToast: M,
      defaultRichColors: tt,
      closeButton: st,
      style: ot,
      cancelButtonStyle: ft,
      actionButtonStyle: nt,
      className: Y = "",
      descriptionClassName: it = "",
      duration: q,
      position: lt,
      gap: U,
      loadingIcon: $,
      expandByDefault: dt,
      classNames: i,
      icons: T,
      closeButtonAriaLabel: gt = "Close toast",
      pauseWhenPageIsHidden: u,
    } = e,
    [f, b] = r.useState(null),
    [S, K] = r.useState(null),
    [y, vt] = r.useState(!1),
    [et, ct] = r.useState(!1),
    [at, bt] = r.useState(!1),
    [kt, $t] = r.useState(!1),
    [_t, St] = r.useState(!1),
    [Ht, yt] = r.useState(0),
    [At, Ct] = r.useState(0),
    rt = r.useRef(t.duration || q || Pt),
    Tt = r.useRef(null),
    O = r.useRef(null),
    Dt = H === 0,
    Ft = H + 1 <= j,
    B = t.type,
    X = t.dismissible !== !1,
    Ut = t.className || "",
    Ot = t.descriptionClassName || "",
    ut = r.useMemo(
      () => P.findIndex((o) => o.toastId === t.id) || 0,
      [P, t.id],
    ),
    Vt = r.useMemo(() => {
      var o;
      return (o = t.closeButton) != null ? o : st;
    }, [t.closeButton, st]),
    Bt = r.useMemo(() => t.duration || q || Pt, [t.duration, q]),
    wt = r.useRef(0),
    G = r.useRef(0),
    Mt = r.useRef(0),
    J = r.useRef(null),
    [Wt, qt] = lt.split("-"),
    zt = r.useMemo(
      () => P.reduce((o, c, g) => (g >= ut ? o : o + c.height), 0),
      [P, ut],
    ),
    It = ge(),
    Kt = t.invert || p,
    xt = B === "loading";
  ((G.current = r.useMemo(() => ut * U + zt, [ut, zt])),
    r.useEffect(() => {
      rt.current = Bt;
    }, [Bt]),
    r.useEffect(() => {
      vt(!0);
    }, []),
    r.useEffect(() => {
      let o = O.current;
      if (o) {
        let c = o.getBoundingClientRect().height;
        return (
          Ct(c),
          w((g) => [{ toastId: t.id, height: c, position: t.position }, ...g]),
          () => w((g) => g.filter((z) => z.toastId !== t.id))
        );
      }
    }, [w, t.id]),
    r.useLayoutEffect(() => {
      if (!y) return;
      let o = O.current,
        c = o.style.height;
      o.style.height = "auto";
      let g = o.getBoundingClientRect().height;
      ((o.style.height = c),
        Ct(g),
        w((z) =>
          z.find((I) => I.toastId === t.id)
            ? z.map((I) => (I.toastId === t.id ? { ...I, height: g } : I))
            : [{ toastId: t.id, height: g, position: t.position }, ...z],
        ));
    }, [y, t.title, t.description, w, t.id]));
  let A = r.useCallback(() => {
    (ct(!0),
      yt(G.current),
      w((o) => o.filter((c) => c.toastId !== t.id)),
      setTimeout(() => {
        M(t);
      }, Me));
  }, [t, M, w, G]);
  (r.useEffect(() => {
    if (
      (t.promise && B === "loading") ||
      t.duration === 1 / 0 ||
      t.type === "loading"
    )
      return;
    let o;
    return (
      Z || v || (u && It)
        ? (() => {
            if (Mt.current < wt.current) {
              let c = new Date().getTime() - wt.current;
              rt.current = rt.current - c;
            }
            Mt.current = new Date().getTime();
          })()
        : rt.current !== 1 / 0 &&
          ((wt.current = new Date().getTime()),
          (o = setTimeout(() => {
            var c;
            ((c = t.onAutoClose) == null || c.call(t, t), A());
          }, rt.current))),
      () => clearTimeout(o)
    );
  }, [Z, v, t, B, u, It, A]),
    r.useEffect(() => {
      t.delete && A();
    }, [A, t.delete]));
  function Xt() {
    var o, c, g;
    return T != null && T.loading
      ? r.createElement(
          "div",
          {
            className: L(
              i == null ? void 0 : i.loader,
              (o = t == null ? void 0 : t.classNames) == null
                ? void 0
                : o.loader,
              "sonner-loader",
            ),
            "data-visible": B === "loading",
          },
          T.loading,
        )
      : $
        ? r.createElement(
            "div",
            {
              className: L(
                i == null ? void 0 : i.loader,
                (c = t == null ? void 0 : t.classNames) == null
                  ? void 0
                  : c.loader,
                "sonner-loader",
              ),
              "data-visible": B === "loading",
            },
            $,
          )
        : r.createElement(ce, {
            className: L(
              i == null ? void 0 : i.loader,
              (g = t == null ? void 0 : t.classNames) == null
                ? void 0
                : g.loader,
            ),
            visible: B === "loading",
          });
  }
  return r.createElement(
    "li",
    {
      tabIndex: 0,
      ref: O,
      className: L(
        Y,
        Ut,
        i == null ? void 0 : i.toast,
        (a = t == null ? void 0 : t.classNames) == null ? void 0 : a.toast,
        i == null ? void 0 : i.default,
        i == null ? void 0 : i[B],
        (s = t == null ? void 0 : t.classNames) == null ? void 0 : s[B],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (l = t.richColors) != null ? l : tt,
      "data-styled": !(t.jsx || t.unstyled || Q),
      "data-mounted": y,
      "data-promise": !!t.promise,
      "data-swiped": _t,
      "data-removed": et,
      "data-visible": Ft,
      "data-y-position": Wt,
      "data-x-position": qt,
      "data-index": H,
      "data-front": Dt,
      "data-swiping": at,
      "data-dismissible": X,
      "data-type": B,
      "data-invert": Kt,
      "data-swipe-out": kt,
      "data-swipe-direction": S,
      "data-expanded": !!(Z || (dt && y)),
      style: {
        "--index": H,
        "--toasts-before": H,
        "--z-index": pt.length - H,
        "--offset": `${et ? Ht : G.current}px`,
        "--initial-height": dt ? "auto" : `${At}px`,
        ...ot,
        ...t.style,
      },
      onDragEnd: () => {
        (bt(!1), b(null), (J.current = null));
      },
      onPointerDown: (o) => {
        xt ||
          !X ||
          ((Tt.current = new Date()),
          yt(G.current),
          o.target.setPointerCapture(o.pointerId),
          o.target.tagName !== "BUTTON" &&
            (bt(!0), (J.current = { x: o.clientX, y: o.clientY })));
      },
      onPointerUp: () => {
        var o, c, g, z;
        if (kt || !X) return;
        J.current = null;
        let I = Number(
            ((o = O.current) == null
              ? void 0
              : o.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          D = Number(
            ((c = O.current) == null
              ? void 0
              : c.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          V =
            new Date().getTime() -
            ((g = Tt.current) == null ? void 0 : g.getTime()),
          R = f === "x" ? I : D,
          F = Math.abs(R) / V;
        if (Math.abs(R) >= Be || F > 0.11) {
          (yt(G.current),
            (z = t.onDismiss) == null || z.call(t, t),
            K(f === "x" ? (I > 0 ? "right" : "left") : D > 0 ? "down" : "up"),
            A(),
            $t(!0),
            St(!1));
          return;
        }
        (bt(!1), b(null));
      },
      onPointerMove: (o) => {
        var c, g, z, I;
        if (
          !J.current ||
          !X ||
          ((c = window.getSelection()) == null ? void 0 : c.toString().length) >
            0
        )
          return;
        let D = o.clientY - J.current.y,
          V = o.clientX - J.current.x,
          R = (g = e.swipeDirections) != null ? g : ze(lt);
        !f &&
          (Math.abs(V) > 1 || Math.abs(D) > 1) &&
          b(Math.abs(V) > Math.abs(D) ? "x" : "y");
        let F = { x: 0, y: 0 };
        (f === "y"
          ? (R.includes("top") || R.includes("bottom")) &&
            ((R.includes("top") && D < 0) || (R.includes("bottom") && D > 0)) &&
            (F.y = D)
          : f === "x" &&
            (R.includes("left") || R.includes("right")) &&
            ((R.includes("left") && V < 0) || (R.includes("right") && V > 0)) &&
            (F.x = V),
          (Math.abs(F.x) > 0 || Math.abs(F.y) > 0) && St(!0),
          (z = O.current) == null ||
            z.style.setProperty("--swipe-amount-x", `${F.x}px`),
          (I = O.current) == null ||
            I.style.setProperty("--swipe-amount-y", `${F.y}px`));
      },
    },
    Vt && !t.jsx
      ? r.createElement(
          "button",
          {
            "aria-label": gt,
            "data-disabled": xt,
            "data-close-button": !0,
            onClick:
              xt || !X
                ? () => {}
                : () => {
                    var o;
                    (A(), (o = t.onDismiss) == null || o.call(t, t));
                  },
            className: L(
              i == null ? void 0 : i.closeButton,
              (m = t == null ? void 0 : t.classNames) == null
                ? void 0
                : m.closeButton,
            ),
          },
          (N = T == null ? void 0 : T.close) != null ? N : fe,
        )
      : null,
    t.jsx || _.isValidElement(t.title)
      ? t.jsx
        ? t.jsx
        : typeof t.title == "function"
          ? t.title()
          : t.title
      : r.createElement(
          r.Fragment,
          null,
          B || t.icon || t.promise
            ? r.createElement(
                "div",
                {
                  "data-icon": "",
                  className: L(
                    i == null ? void 0 : i.icon,
                    (k = t == null ? void 0 : t.classNames) == null
                      ? void 0
                      : k.icon,
                  ),
                },
                t.promise || (t.type === "loading" && !t.icon)
                  ? t.icon || Xt()
                  : null,
                t.type !== "loading"
                  ? t.icon || (T == null ? void 0 : T[B]) || le(B)
                  : null,
              )
            : null,
          r.createElement(
            "div",
            {
              "data-content": "",
              className: L(
                i == null ? void 0 : i.content,
                (x = t == null ? void 0 : t.classNames) == null
                  ? void 0
                  : x.content,
              ),
            },
            r.createElement(
              "div",
              {
                "data-title": "",
                className: L(
                  i == null ? void 0 : i.title,
                  (d = t == null ? void 0 : t.classNames) == null
                    ? void 0
                    : d.title,
                ),
              },
              typeof t.title == "function" ? t.title() : t.title,
            ),
            t.description
              ? r.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: L(
                      it,
                      Ot,
                      i == null ? void 0 : i.description,
                      (h = t == null ? void 0 : t.classNames) == null
                        ? void 0
                        : h.description,
                    ),
                  },
                  typeof t.description == "function"
                    ? t.description()
                    : t.description,
                )
              : null,
          ),
          _.isValidElement(t.cancel)
            ? t.cancel
            : t.cancel && ht(t.cancel)
              ? r.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: t.cancelButtonStyle || ft,
                    onClick: (o) => {
                      var c, g;
                      ht(t.cancel) &&
                        X &&
                        ((g = (c = t.cancel).onClick) == null || g.call(c, o),
                        A());
                    },
                    className: L(
                      i == null ? void 0 : i.cancelButton,
                      (E = t == null ? void 0 : t.classNames) == null
                        ? void 0
                        : E.cancelButton,
                    ),
                  },
                  t.cancel.label,
                )
              : null,
          _.isValidElement(t.action)
            ? t.action
            : t.action && ht(t.action)
              ? r.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: t.actionButtonStyle || nt,
                    onClick: (o) => {
                      var c, g;
                      ht(t.action) &&
                        ((g = (c = t.action).onClick) == null || g.call(c, o),
                        !o.defaultPrevented && A());
                    },
                    className: L(
                      i == null ? void 0 : i.actionButton,
                      (W = t == null ? void 0 : t.classNames) == null
                        ? void 0
                        : W.actionButton,
                    ),
                  },
                  t.action.label,
                )
              : null,
        ),
  );
};
function Yt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Re(e, a) {
  let s = {};
  return (
    [e, a].forEach((l, m) => {
      let N = m === 1,
        k = N ? "--mobile-offset" : "--offset",
        x = N ? Se : ke;
      function d(h) {
        ["top", "right", "bottom", "left"].forEach((E) => {
          s[`${k}-${E}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof l == "number" || typeof l == "string"
        ? d(l)
        : typeof l == "object"
          ? ["top", "right", "bottom", "left"].forEach((h) => {
              l[h] === void 0
                ? (s[`${k}-${h}`] = x)
                : (s[`${k}-${h}`] =
                    typeof l[h] == "number" ? `${l[h]}px` : l[h]);
            })
          : d(x);
    }),
    s
  );
}
_.forwardRef(function (e, a) {
  let {
      invert: s,
      position: l = "bottom-right",
      hotkey: m = ["altKey", "KeyT"],
      expand: N,
      closeButton: k,
      className: x,
      offset: d,
      mobileOffset: h,
      theme: E = "light",
      richColors: W,
      duration: p,
      style: t,
      visibleToasts: Q = je,
      toastOptions: v,
      dir: w = Yt(),
      gap: j = Te,
      loadingIcon: P,
      icons: H,
      containerAriaLabel: pt = "Notifications",
      pauseWhenPageIsHidden: Z,
    } = e,
    [M, tt] = r.useState([]),
    st = r.useMemo(
      () =>
        Array.from(
          new Set(
            [l].concat(M.filter((u) => u.position).map((u) => u.position)),
          ),
        ),
      [M, l],
    ),
    [ot, ft] = r.useState([]),
    [nt, Y] = r.useState(!1),
    [it, q] = r.useState(!1),
    [lt, U] = r.useState(
      E !== "system"
        ? E
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    $ = r.useRef(null),
    dt = m.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    i = r.useRef(null),
    T = r.useRef(!1),
    gt = r.useCallback((u) => {
      tt((f) => {
        var b;
        return (
          ((b = f.find((S) => S.id === u.id)) != null && b.delete) ||
            C.dismiss(u.id),
          f.filter(({ id: S }) => S !== u.id)
        );
      });
    }, []);
  return (
    r.useEffect(
      () =>
        C.subscribe((u) => {
          if (u.dismiss) {
            tt((f) => f.map((b) => (b.id === u.id ? { ...b, delete: !0 } : b)));
            return;
          }
          setTimeout(() => {
            Jt.flushSync(() => {
              tt((f) => {
                let b = f.findIndex((S) => S.id === u.id);
                return b !== -1
                  ? [...f.slice(0, b), { ...f[b], ...u }, ...f.slice(b + 1)]
                  : [u, ...f];
              });
            });
          });
        }),
      [],
    ),
    r.useEffect(() => {
      if (E !== "system") {
        U(E);
        return;
      }
      if (
        (E === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? U("dark")
            : U("light")),
        typeof window > "u")
      )
        return;
      let u = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        u.addEventListener("change", ({ matches: f }) => {
          U(f ? "dark" : "light");
        });
      } catch {
        u.addListener(({ matches: b }) => {
          try {
            U(b ? "dark" : "light");
          } catch (S) {
            console.error(S);
          }
        });
      }
    }, [E]),
    r.useEffect(() => {
      M.length <= 1 && Y(!1);
    }, [M]),
    r.useEffect(() => {
      let u = (f) => {
        var b, S;
        (m.every((K) => f[K] || f.code === K) &&
          (Y(!0), (b = $.current) == null || b.focus()),
          f.code === "Escape" &&
            (document.activeElement === $.current ||
              ((S = $.current) != null &&
                S.contains(document.activeElement))) &&
            Y(!1));
      };
      return (
        document.addEventListener("keydown", u),
        () => document.removeEventListener("keydown", u)
      );
    }, [m]),
    r.useEffect(() => {
      if ($.current)
        return () => {
          i.current &&
            (i.current.focus({ preventScroll: !0 }),
            (i.current = null),
            (T.current = !1));
        };
    }, [$.current]),
    r.createElement(
      "section",
      {
        ref: a,
        "aria-label": `${pt} ${dt}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      st.map((u, f) => {
        var b;
        let [S, K] = u.split("-");
        return M.length
          ? r.createElement(
              "ol",
              {
                key: u,
                dir: w === "auto" ? Yt() : w,
                tabIndex: -1,
                ref: $,
                className: x,
                "data-sonner-toaster": !0,
                "data-theme": lt,
                "data-y-position": S,
                "data-lifted": nt && M.length > 1 && !N,
                "data-x-position": K,
                style: {
                  "--front-toast-height": `${((b = ot[0]) == null ? void 0 : b.height) || 0}px`,
                  "--width": `${Ce}px`,
                  "--gap": `${j}px`,
                  ...t,
                  ...Re(d, h),
                },
                onBlur: (y) => {
                  T.current &&
                    !y.currentTarget.contains(y.relatedTarget) &&
                    ((T.current = !1),
                    i.current &&
                      (i.current.focus({ preventScroll: !0 }),
                      (i.current = null)));
                },
                onFocus: (y) => {
                  (y.target instanceof HTMLElement &&
                    y.target.dataset.dismissible === "false") ||
                    T.current ||
                    ((T.current = !0), (i.current = y.relatedTarget));
                },
                onMouseEnter: () => Y(!0),
                onMouseMove: () => Y(!0),
                onMouseLeave: () => {
                  it || Y(!1);
                },
                onDragEnd: () => Y(!1),
                onPointerDown: (y) => {
                  (y.target instanceof HTMLElement &&
                    y.target.dataset.dismissible === "false") ||
                    q(!0);
                },
                onPointerUp: () => q(!1),
              },
              M.filter((y) => (!y.position && f === 0) || y.position === u).map(
                (y, vt) => {
                  var et, ct;
                  return r.createElement(Ie, {
                    key: y.id,
                    icons: H,
                    index: vt,
                    toast: y,
                    defaultRichColors: W,
                    duration:
                      (et = v == null ? void 0 : v.duration) != null ? et : p,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: s,
                    visibleToasts: Q,
                    closeButton:
                      (ct = v == null ? void 0 : v.closeButton) != null
                        ? ct
                        : k,
                    interacting: it,
                    position: u,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: gt,
                    toasts: M.filter((at) => at.position == y.position),
                    heights: ot.filter((at) => at.position == y.position),
                    setHeights: ft,
                    expandByDefault: N,
                    gap: j,
                    loadingIcon: P,
                    expanded: nt,
                    pauseWhenPageIsHidden: Z,
                    swipeDirections: e.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const Le = () =>
    n.jsxs("svg", {
      className: "w-5 h-5",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        n.jsx("path", {
          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
          fill: "#4285F4",
        }),
        n.jsx("path", {
          d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
          fill: "#34A853",
        }),
        n.jsx("path", {
          d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
          fill: "#FBBC05",
        }),
        n.jsx("path", {
          d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
          fill: "#EA4335",
        }),
      ],
    }),
  Ve = () => {
    const [e, a] = _.useState(""),
      [s, l] = _.useState(""),
      [m, N] = _.useState(!1),
      [k, x] = _.useState(null),
      [d, h] = _.useState(!1),
      E = Qt(),
      [W] = Zt(),
      { t: p } = Gt(),
      t = () => W.get("redirect") || "/app",
      Q = async (w) => {
        (w.preventDefault(), N(!0));
        try {
          if (d) {
            const { error: j } = await Nt.auth.signUp({
              email: e,
              password: s,
              options: { data: { full_name: e.split("@")[0] } },
            });
            if (j) throw j;
            (mt.success(p("auth.toast.signup_success")),
              setTimeout(() => {
                E(`/login?redirect=${encodeURIComponent(t())}`);
              }, 2e3));
          } else {
            const { error: j } = await Nt.auth.signInWithPassword({
              email: e,
              password: s,
            });
            if (j) throw j;
            (mt.success(p("auth.toast.login_success")), E(t()));
          }
        } catch (j) {
          const P =
            j instanceof Error ? j.message : p("auth.toast.error_generic");
          mt.error(P);
        } finally {
          N(!1);
        }
      },
      v = async (w) => {
        x(w);
        try {
          const { error: j } = await Nt.auth.signInWithOAuth({
            provider: w,
            options: {
              redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(t())}`,
            },
          });
          if (j) throw j;
        } catch (j) {
          const P = j instanceof Error ? j.message : `Erro ao entrar com ${w}`;
          (mt.error(P), x(null));
        }
      };
    return n.jsx("div", {
      className:
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/40 px-4 py-12",
      children: n.jsxs("div", {
        className: "w-full max-w-md space-y-6",
        children: [
          n.jsxs("div", {
            className: "flex flex-col items-center gap-2 mb-2",
            children: [
              n.jsx(ne, { size: "md" }),
              n.jsx(ie, { variant: "header" }),
              n.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: p(d ? "auth.signup_title" : "auth.login_title"),
              }),
            ],
          }),
          n.jsxs(te, {
            className: "shadow-lg",
            children: [
              n.jsx(ee, {
                className: "space-y-1 pb-4",
                children: n.jsx(ae, {
                  className: "text-xl text-center",
                  children: p(d ? "auth.submit_signup" : "auth.submit_login"),
                }),
              }),
              n.jsxs(re, {
                className: "space-y-4",
                children: [
                  n.jsx("div", {
                    className: "flex justify-center",
                    children: n.jsxs(Et, {
                      variant: "outline",
                      className: "w-full gap-2 py-6 text-base btn-shine",
                      onClick: () => v("google"),
                      disabled: !!k,
                      type: "button",
                      children: [
                        k === "google"
                          ? n.jsx("div", {
                              className:
                                "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin",
                            })
                          : n.jsx(Le, {}),
                        p("auth.google_button"),
                      ],
                    }),
                  }),
                  n.jsxs("div", {
                    className: "relative",
                    children: [
                      n.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: n.jsx(oe, { className: "w-full" }),
                      }),
                      n.jsx("div", {
                        className:
                          "relative flex justify-center text-xs uppercase",
                        children: n.jsx("span", {
                          className: "bg-card px-2 text-muted-foreground",
                          children: p("auth.separator"),
                        }),
                      }),
                    ],
                  }),
                  n.jsxs("form", {
                    onSubmit: Q,
                    className: "space-y-4",
                    children: [
                      n.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          n.jsx(Lt, {
                            htmlFor: "email",
                            children: p("auth.email_label"),
                          }),
                          n.jsx(Rt, {
                            id: "email",
                            type: "email",
                            placeholder: p("auth.email_placeholder"),
                            required: !0,
                            value: e,
                            onChange: (w) => a(w.target.value),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          n.jsx(Lt, {
                            htmlFor: "password",
                            children: p("auth.password_label"),
                          }),
                          n.jsx(Rt, {
                            id: "password",
                            type: "password",
                            required: !0,
                            placeholder: p("auth.password_placeholder"),
                            value: s,
                            onChange: (w) => l(w.target.value),
                          }),
                        ],
                      }),
                      n.jsx(Et, {
                        className: "w-full",
                        type: "submit",
                        disabled: m || !!k,
                        children: m
                          ? n.jsxs(n.Fragment, {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                }),
                                p("common.processing"),
                              ],
                            })
                          : p(d ? "auth.submit_signup" : "auth.submit_login"),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsx(se, {
                children: n.jsx(Et, {
                  variant: "ghost",
                  className: "w-full text-sm",
                  type: "button",
                  onClick: () => h(!d),
                  children: p(
                    d ? "auth.switch_to_login" : "auth.switch_to_signup",
                  ),
                }),
              }),
            ],
          }),
          n.jsxs("p", {
            className: "text-center text-xs text-muted-foreground",
            children: [
              p("auth.terms_prefix"),
              " ",
              n.jsx("a", {
                href: "#",
                className: "underline hover:text-foreground",
                children: p("auth.terms_link"),
              }),
              " ",
              p("auth.and"),
              " ",
              n.jsx("a", {
                href: "#",
                className: "underline hover:text-foreground",
                children: p("auth.privacy_link"),
              }),
              ".",
            ],
          }),
        ],
      }),
    });
  };
export { Ve as default };
