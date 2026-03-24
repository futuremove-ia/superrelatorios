import { u as Xt, j as r, B as Lt, s as Nt } from "./index-BZzvAVnT.js";
import { b as n, r as Y, v as Jt } from "./vendor-BgR6OOld.js";
import { a as Qt, d as Zt } from "./router-D2JcpG7e.js";
import { I as It } from "./input-BnDZujQi.js";
import { L as Mt } from "./label-DNWlrZfM.js";
import {
  C as ta,
  b as aa,
  c as ea,
  a as na,
  e as oa,
} from "./card-DCmFy9yX.js";
import { S as sa } from "./separator-qS5yNAIC.js";
import { L as ra } from "./LogoIcon-DLwUl9vD.js";
import { B as ia } from "./BrandName-3XvNqLPU.js";
import "./utils-C25gojUd.js";
var la = (a) => {
    switch (a) {
      case "success":
        return ma;
      case "info":
        return ua;
      case "warning":
        return pa;
      case "error":
        return ha;
      default:
        return null;
    }
  },
  da = Array(12).fill(0),
  ca = ({ visible: a, className: e }) =>
    n.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
        "data-visible": a,
      },
      n.createElement(
        "div",
        { className: "sonner-spinner" },
        da.map((o, l) =>
          n.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${l}`,
          }),
        ),
      ),
    ),
  ma = n.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  pa = n.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  ua = n.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  ha = n.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  ga = n.createElement(
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
    n.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    n.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  fa = () => {
    let [a, e] = n.useState(document.hidden);
    return (
      n.useEffect(() => {
        let o = () => {
          e(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", o),
          () => window.removeEventListener("visibilitychange", o)
        );
      }, []),
      a
    );
  },
  Bt = 1,
  va = class {
    constructor() {
      ((this.subscribe = (a) => (
        this.subscribers.push(a),
        () => {
          let e = this.subscribers.indexOf(a);
          this.subscribers.splice(e, 1);
        }
      )),
        (this.publish = (a) => {
          this.subscribers.forEach((e) => e(a));
        }),
        (this.addToast = (a) => {
          (this.publish(a), (this.toasts = [...this.toasts, a]));
        }),
        (this.create = (a) => {
          var e;
          let { message: o, ...l } = a,
            p =
              typeof (a == null ? void 0 : a.id) == "number" ||
              ((e = a.id) == null ? void 0 : e.length) > 0
                ? a.id
                : Bt++,
            N = this.toasts.find((w) => w.id === p),
            E = a.dismissible === void 0 ? !0 : a.dismissible;
          return (
            this.dismissedToasts.has(p) && this.dismissedToasts.delete(p),
            N
              ? (this.toasts = this.toasts.map((w) =>
                  w.id === p
                    ? (this.publish({ ...w, ...a, id: p, title: o }),
                      { ...w, ...a, id: p, dismissible: E, title: o })
                    : w,
                ))
              : this.addToast({ title: o, ...l, dismissible: E, id: p }),
            p
          );
        }),
        (this.dismiss = (a) => (
          this.dismissedToasts.add(a),
          a ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((o) => o({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((e) => e({ id: a, dismiss: !0 })),
          a
        )),
        (this.message = (a, e) => this.create({ ...e, message: a })),
        (this.error = (a, e) =>
          this.create({ ...e, message: a, type: "error" })),
        (this.success = (a, e) =>
          this.create({ ...e, type: "success", message: a })),
        (this.info = (a, e) => this.create({ ...e, type: "info", message: a })),
        (this.warning = (a, e) =>
          this.create({ ...e, type: "warning", message: a })),
        (this.loading = (a, e) =>
          this.create({ ...e, type: "loading", message: a })),
        (this.promise = (a, e) => {
          if (!e) return;
          let o;
          e.loading !== void 0 &&
            (o = this.create({
              ...e,
              promise: a,
              type: "loading",
              message: e.loading,
              description:
                typeof e.description != "function" ? e.description : void 0,
            }));
          let l = a instanceof Promise ? a : a(),
            p = o !== void 0,
            N,
            E = l
              .then(async (d) => {
                if (((N = ["resolve", d]), n.isValidElement(d)))
                  ((p = !1),
                    this.create({ id: o, type: "default", message: d }));
                else if (ba(d) && !d.ok) {
                  p = !1;
                  let u =
                      typeof e.error == "function"
                        ? await e.error(`HTTP error! status: ${d.status}`)
                        : e.error,
                    L =
                      typeof e.description == "function"
                        ? await e.description(`HTTP error! status: ${d.status}`)
                        : e.description;
                  this.create({
                    id: o,
                    type: "error",
                    message: u,
                    description: L,
                  });
                } else if (e.success !== void 0) {
                  p = !1;
                  let u =
                      typeof e.success == "function"
                        ? await e.success(d)
                        : e.success,
                    L =
                      typeof e.description == "function"
                        ? await e.description(d)
                        : e.description;
                  this.create({
                    id: o,
                    type: "success",
                    message: u,
                    description: L,
                  });
                }
              })
              .catch(async (d) => {
                if (((N = ["reject", d]), e.error !== void 0)) {
                  p = !1;
                  let u =
                      typeof e.error == "function" ? await e.error(d) : e.error,
                    L =
                      typeof e.description == "function"
                        ? await e.description(d)
                        : e.description;
                  this.create({
                    id: o,
                    type: "error",
                    message: u,
                    description: L,
                  });
                }
              })
              .finally(() => {
                var d;
                (p && (this.dismiss(o), (o = void 0)),
                  (d = e.finally) == null || d.call(e));
              }),
            w = () =>
              new Promise((d, u) =>
                E.then(() => (N[0] === "reject" ? u(N[1]) : d(N[1]))).catch(u),
              );
          return typeof o != "string" && typeof o != "number"
            ? { unwrap: w }
            : Object.assign(o, { unwrap: w });
        }),
        (this.custom = (a, e) => {
          let o = (e == null ? void 0 : e.id) || Bt++;
          return (this.create({ jsx: a(o), id: o, ...e }), o);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  k = new va(),
  xa = (a, e) => {
    let o = (e == null ? void 0 : e.id) || Bt++;
    return (k.addToast({ title: a, ...e, id: o }), o);
  },
  ba = (a) =>
    a &&
    typeof a == "object" &&
    "ok" in a &&
    typeof a.ok == "boolean" &&
    "status" in a &&
    typeof a.status == "number",
  ya = xa,
  wa = () => k.toasts,
  La = () => k.getActiveToasts(),
  pt = Object.assign(
    ya,
    {
      success: k.success,
      info: k.info,
      warning: k.warning,
      error: k.error,
      custom: k.custom,
      message: k.message,
      promise: k.promise,
      dismiss: k.dismiss,
      loading: k.loading,
    },
    { getHistory: wa, getToasts: La },
  );
function Na(a, { insertAt: e } = {}) {
  if (typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("style");
  ((l.type = "text/css"),
    e === "top" && o.firstChild
      ? o.insertBefore(l, o.firstChild)
      : o.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = a)
      : l.appendChild(document.createTextNode(a)));
}
Na(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ut(a) {
  return a.label !== void 0;
}
var Ba = 3,
  Ea = "32px",
  ja = "16px",
  zt = 4e3,
  ka = 356,
  Ca = 14,
  Sa = 20,
  Da = 200;
function M(...a) {
  return a.filter(Boolean).join(" ");
}
function Ta(a) {
  let [e, o] = a.split("-"),
    l = [];
  return (e && l.push(e), o && l.push(o), l);
}
var Aa = (a) => {
  var e, o, l, p, N, E, w, d, u, L, W;
  let {
      invert: h,
      toast: t,
      unstyled: Q,
      interacting: v,
      setHeights: y,
      visibleToasts: B,
      heights: z,
      index: $,
      toasts: ht,
      expanded: Z,
      removeToast: D,
      defaultRichColors: tt,
      closeButton: ot,
      style: st,
      cancelButtonStyle: gt,
      actionButtonStyle: rt,
      className: R = "",
      descriptionClassName: it = "",
      duration: G,
      position: lt,
      gap: U,
      loadingIcon: P,
      expandByDefault: dt,
      classNames: i,
      icons: C,
      closeButtonAriaLabel: ft = "Close toast",
      pauseWhenPageIsHidden: m,
    } = a,
    [g, x] = n.useState(null),
    [j, q] = n.useState(null),
    [b, vt] = n.useState(!1),
    [at, ct] = n.useState(!1),
    [et, xt] = n.useState(!1),
    [Et, Pt] = n.useState(!1),
    [Yt, jt] = n.useState(!1),
    [$t, bt] = n.useState(0),
    [Ht, kt] = n.useState(0),
    nt = n.useRef(t.duration || G || zt),
    Ct = n.useRef(null),
    O = n.useRef(null),
    _t = $ === 0,
    Ft = $ + 1 <= B,
    S = t.type,
    K = t.dismissible !== !1,
    Ut = t.className || "",
    Ot = t.descriptionClassName || "",
    mt = n.useMemo(
      () => z.findIndex((s) => s.toastId === t.id) || 0,
      [z, t.id],
    ),
    Vt = n.useMemo(() => {
      var s;
      return (s = t.closeButton) != null ? s : ot;
    }, [t.closeButton, ot]),
    St = n.useMemo(() => t.duration || G || zt, [t.duration, G]),
    yt = n.useRef(0),
    X = n.useRef(0),
    Dt = n.useRef(0),
    J = n.useRef(null),
    [Wt, Gt] = lt.split("-"),
    Tt = n.useMemo(
      () => z.reduce((s, c, f) => (f >= mt ? s : s + c.height), 0),
      [z, mt],
    ),
    At = fa(),
    qt = t.invert || h,
    wt = S === "loading";
  ((X.current = n.useMemo(() => mt * U + Tt, [mt, Tt])),
    n.useEffect(() => {
      nt.current = St;
    }, [St]),
    n.useEffect(() => {
      vt(!0);
    }, []),
    n.useEffect(() => {
      let s = O.current;
      if (s) {
        let c = s.getBoundingClientRect().height;
        return (
          kt(c),
          y((f) => [{ toastId: t.id, height: c, position: t.position }, ...f]),
          () => y((f) => f.filter((T) => T.toastId !== t.id))
        );
      }
    }, [y, t.id]),
    n.useLayoutEffect(() => {
      if (!b) return;
      let s = O.current,
        c = s.style.height;
      s.style.height = "auto";
      let f = s.getBoundingClientRect().height;
      ((s.style.height = c),
        kt(f),
        y((T) =>
          T.find((A) => A.toastId === t.id)
            ? T.map((A) => (A.toastId === t.id ? { ...A, height: f } : A))
            : [{ toastId: t.id, height: f, position: t.position }, ...T],
        ));
    }, [b, t.title, t.description, y, t.id]));
  let H = n.useCallback(() => {
    (ct(!0),
      bt(X.current),
      y((s) => s.filter((c) => c.toastId !== t.id)),
      setTimeout(() => {
        D(t);
      }, Da));
  }, [t, D, y, X]);
  (n.useEffect(() => {
    if (
      (t.promise && S === "loading") ||
      t.duration === 1 / 0 ||
      t.type === "loading"
    )
      return;
    let s;
    return (
      Z || v || (m && At)
        ? (() => {
            if (Dt.current < yt.current) {
              let c = new Date().getTime() - yt.current;
              nt.current = nt.current - c;
            }
            Dt.current = new Date().getTime();
          })()
        : nt.current !== 1 / 0 &&
          ((yt.current = new Date().getTime()),
          (s = setTimeout(() => {
            var c;
            ((c = t.onAutoClose) == null || c.call(t, t), H());
          }, nt.current))),
      () => clearTimeout(s)
    );
  }, [Z, v, t, S, m, At, H]),
    n.useEffect(() => {
      t.delete && H();
    }, [H, t.delete]));
  function Kt() {
    var s, c, f;
    return C != null && C.loading
      ? n.createElement(
          "div",
          {
            className: M(
              i == null ? void 0 : i.loader,
              (s = t == null ? void 0 : t.classNames) == null
                ? void 0
                : s.loader,
              "sonner-loader",
            ),
            "data-visible": S === "loading",
          },
          C.loading,
        )
      : P
        ? n.createElement(
            "div",
            {
              className: M(
                i == null ? void 0 : i.loader,
                (c = t == null ? void 0 : t.classNames) == null
                  ? void 0
                  : c.loader,
                "sonner-loader",
              ),
              "data-visible": S === "loading",
            },
            P,
          )
        : n.createElement(ca, {
            className: M(
              i == null ? void 0 : i.loader,
              (f = t == null ? void 0 : t.classNames) == null
                ? void 0
                : f.loader,
            ),
            visible: S === "loading",
          });
  }
  return n.createElement(
    "li",
    {
      tabIndex: 0,
      ref: O,
      className: M(
        R,
        Ut,
        i == null ? void 0 : i.toast,
        (e = t == null ? void 0 : t.classNames) == null ? void 0 : e.toast,
        i == null ? void 0 : i.default,
        i == null ? void 0 : i[S],
        (o = t == null ? void 0 : t.classNames) == null ? void 0 : o[S],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (l = t.richColors) != null ? l : tt,
      "data-styled": !(t.jsx || t.unstyled || Q),
      "data-mounted": b,
      "data-promise": !!t.promise,
      "data-swiped": Yt,
      "data-removed": at,
      "data-visible": Ft,
      "data-y-position": Wt,
      "data-x-position": Gt,
      "data-index": $,
      "data-front": _t,
      "data-swiping": et,
      "data-dismissible": K,
      "data-type": S,
      "data-invert": qt,
      "data-swipe-out": Et,
      "data-swipe-direction": j,
      "data-expanded": !!(Z || (dt && b)),
      style: {
        "--index": $,
        "--toasts-before": $,
        "--z-index": ht.length - $,
        "--offset": `${at ? $t : X.current}px`,
        "--initial-height": dt ? "auto" : `${Ht}px`,
        ...st,
        ...t.style,
      },
      onDragEnd: () => {
        (xt(!1), x(null), (J.current = null));
      },
      onPointerDown: (s) => {
        wt ||
          !K ||
          ((Ct.current = new Date()),
          bt(X.current),
          s.target.setPointerCapture(s.pointerId),
          s.target.tagName !== "BUTTON" &&
            (xt(!0), (J.current = { x: s.clientX, y: s.clientY })));
      },
      onPointerUp: () => {
        var s, c, f, T;
        if (Et || !K) return;
        J.current = null;
        let A = Number(
            ((s = O.current) == null
              ? void 0
              : s.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          _ = Number(
            ((c = O.current) == null
              ? void 0
              : c.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          V =
            new Date().getTime() -
            ((f = Ct.current) == null ? void 0 : f.getTime()),
          I = g === "x" ? A : _,
          F = Math.abs(I) / V;
        if (Math.abs(I) >= Sa || F > 0.11) {
          (bt(X.current),
            (T = t.onDismiss) == null || T.call(t, t),
            q(g === "x" ? (A > 0 ? "right" : "left") : _ > 0 ? "down" : "up"),
            H(),
            Pt(!0),
            jt(!1));
          return;
        }
        (xt(!1), x(null));
      },
      onPointerMove: (s) => {
        var c, f, T, A;
        if (
          !J.current ||
          !K ||
          ((c = window.getSelection()) == null ? void 0 : c.toString().length) >
            0
        )
          return;
        let _ = s.clientY - J.current.y,
          V = s.clientX - J.current.x,
          I = (f = a.swipeDirections) != null ? f : Ta(lt);
        !g &&
          (Math.abs(V) > 1 || Math.abs(_) > 1) &&
          x(Math.abs(V) > Math.abs(_) ? "x" : "y");
        let F = { x: 0, y: 0 };
        (g === "y"
          ? (I.includes("top") || I.includes("bottom")) &&
            ((I.includes("top") && _ < 0) || (I.includes("bottom") && _ > 0)) &&
            (F.y = _)
          : g === "x" &&
            (I.includes("left") || I.includes("right")) &&
            ((I.includes("left") && V < 0) || (I.includes("right") && V > 0)) &&
            (F.x = V),
          (Math.abs(F.x) > 0 || Math.abs(F.y) > 0) && jt(!0),
          (T = O.current) == null ||
            T.style.setProperty("--swipe-amount-x", `${F.x}px`),
          (A = O.current) == null ||
            A.style.setProperty("--swipe-amount-y", `${F.y}px`));
      },
    },
    Vt && !t.jsx
      ? n.createElement(
          "button",
          {
            "aria-label": ft,
            "data-disabled": wt,
            "data-close-button": !0,
            onClick:
              wt || !K
                ? () => {}
                : () => {
                    var s;
                    (H(), (s = t.onDismiss) == null || s.call(t, t));
                  },
            className: M(
              i == null ? void 0 : i.closeButton,
              (p = t == null ? void 0 : t.classNames) == null
                ? void 0
                : p.closeButton,
            ),
          },
          (N = C == null ? void 0 : C.close) != null ? N : ga,
        )
      : null,
    t.jsx || Y.isValidElement(t.title)
      ? t.jsx
        ? t.jsx
        : typeof t.title == "function"
          ? t.title()
          : t.title
      : n.createElement(
          n.Fragment,
          null,
          S || t.icon || t.promise
            ? n.createElement(
                "div",
                {
                  "data-icon": "",
                  className: M(
                    i == null ? void 0 : i.icon,
                    (E = t == null ? void 0 : t.classNames) == null
                      ? void 0
                      : E.icon,
                  ),
                },
                t.promise || (t.type === "loading" && !t.icon)
                  ? t.icon || Kt()
                  : null,
                t.type !== "loading"
                  ? t.icon || (C == null ? void 0 : C[S]) || la(S)
                  : null,
              )
            : null,
          n.createElement(
            "div",
            {
              "data-content": "",
              className: M(
                i == null ? void 0 : i.content,
                (w = t == null ? void 0 : t.classNames) == null
                  ? void 0
                  : w.content,
              ),
            },
            n.createElement(
              "div",
              {
                "data-title": "",
                className: M(
                  i == null ? void 0 : i.title,
                  (d = t == null ? void 0 : t.classNames) == null
                    ? void 0
                    : d.title,
                ),
              },
              typeof t.title == "function" ? t.title() : t.title,
            ),
            t.description
              ? n.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: M(
                      it,
                      Ot,
                      i == null ? void 0 : i.description,
                      (u = t == null ? void 0 : t.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof t.description == "function"
                    ? t.description()
                    : t.description,
                )
              : null,
          ),
          Y.isValidElement(t.cancel)
            ? t.cancel
            : t.cancel && ut(t.cancel)
              ? n.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: t.cancelButtonStyle || gt,
                    onClick: (s) => {
                      var c, f;
                      ut(t.cancel) &&
                        K &&
                        ((f = (c = t.cancel).onClick) == null || f.call(c, s),
                        H());
                    },
                    className: M(
                      i == null ? void 0 : i.cancelButton,
                      (L = t == null ? void 0 : t.classNames) == null
                        ? void 0
                        : L.cancelButton,
                    ),
                  },
                  t.cancel.label,
                )
              : null,
          Y.isValidElement(t.action)
            ? t.action
            : t.action && ut(t.action)
              ? n.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: t.actionButtonStyle || rt,
                    onClick: (s) => {
                      var c, f;
                      ut(t.action) &&
                        ((f = (c = t.action).onClick) == null || f.call(c, s),
                        !s.defaultPrevented && H());
                    },
                    className: M(
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
function Rt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let a = document.documentElement.getAttribute("dir");
  return a === "auto" || !a
    ? window.getComputedStyle(document.documentElement).direction
    : a;
}
function Ia(a, e) {
  let o = {};
  return (
    [a, e].forEach((l, p) => {
      let N = p === 1,
        E = N ? "--mobile-offset" : "--offset",
        w = N ? ja : Ea;
      function d(u) {
        ["top", "right", "bottom", "left"].forEach((L) => {
          o[`${E}-${L}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof l == "number" || typeof l == "string"
        ? d(l)
        : typeof l == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              l[u] === void 0
                ? (o[`${E}-${u}`] = w)
                : (o[`${E}-${u}`] =
                    typeof l[u] == "number" ? `${l[u]}px` : l[u]);
            })
          : d(w);
    }),
    o
  );
}
Y.forwardRef(function (a, e) {
  let {
      invert: o,
      position: l = "bottom-right",
      hotkey: p = ["altKey", "KeyT"],
      expand: N,
      closeButton: E,
      className: w,
      offset: d,
      mobileOffset: u,
      theme: L = "light",
      richColors: W,
      duration: h,
      style: t,
      visibleToasts: Q = Ba,
      toastOptions: v,
      dir: y = Rt(),
      gap: B = Ca,
      loadingIcon: z,
      icons: $,
      containerAriaLabel: ht = "Notifications",
      pauseWhenPageIsHidden: Z,
    } = a,
    [D, tt] = n.useState([]),
    ot = n.useMemo(
      () =>
        Array.from(
          new Set(
            [l].concat(D.filter((m) => m.position).map((m) => m.position)),
          ),
        ),
      [D, l],
    ),
    [st, gt] = n.useState([]),
    [rt, R] = n.useState(!1),
    [it, G] = n.useState(!1),
    [lt, U] = n.useState(
      L !== "system"
        ? L
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    P = n.useRef(null),
    dt = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    i = n.useRef(null),
    C = n.useRef(!1),
    ft = n.useCallback((m) => {
      tt((g) => {
        var x;
        return (
          ((x = g.find((j) => j.id === m.id)) != null && x.delete) ||
            k.dismiss(m.id),
          g.filter(({ id: j }) => j !== m.id)
        );
      });
    }, []);
  return (
    n.useEffect(
      () =>
        k.subscribe((m) => {
          if (m.dismiss) {
            tt((g) => g.map((x) => (x.id === m.id ? { ...x, delete: !0 } : x)));
            return;
          }
          setTimeout(() => {
            Jt.flushSync(() => {
              tt((g) => {
                let x = g.findIndex((j) => j.id === m.id);
                return x !== -1
                  ? [...g.slice(0, x), { ...g[x], ...m }, ...g.slice(x + 1)]
                  : [m, ...g];
              });
            });
          });
        }),
      [],
    ),
    n.useEffect(() => {
      if (L !== "system") {
        U(L);
        return;
      }
      if (
        (L === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? U("dark")
            : U("light")),
        typeof window > "u")
      )
        return;
      let m = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        m.addEventListener("change", ({ matches: g }) => {
          U(g ? "dark" : "light");
        });
      } catch {
        m.addListener(({ matches: x }) => {
          try {
            U(x ? "dark" : "light");
          } catch (j) {
            console.error(j);
          }
        });
      }
    }, [L]),
    n.useEffect(() => {
      D.length <= 1 && R(!1);
    }, [D]),
    n.useEffect(() => {
      let m = (g) => {
        var x, j;
        (p.every((q) => g[q] || g.code === q) &&
          (R(!0), (x = P.current) == null || x.focus()),
          g.code === "Escape" &&
            (document.activeElement === P.current ||
              ((j = P.current) != null &&
                j.contains(document.activeElement))) &&
            R(!1));
      };
      return (
        document.addEventListener("keydown", m),
        () => document.removeEventListener("keydown", m)
      );
    }, [p]),
    n.useEffect(() => {
      if (P.current)
        return () => {
          i.current &&
            (i.current.focus({ preventScroll: !0 }),
            (i.current = null),
            (C.current = !1));
        };
    }, [P.current]),
    n.createElement(
      "section",
      {
        ref: e,
        "aria-label": `${ht} ${dt}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      ot.map((m, g) => {
        var x;
        let [j, q] = m.split("-");
        return D.length
          ? n.createElement(
              "ol",
              {
                key: m,
                dir: y === "auto" ? Rt() : y,
                tabIndex: -1,
                ref: P,
                className: w,
                "data-sonner-toaster": !0,
                "data-theme": lt,
                "data-y-position": j,
                "data-lifted": rt && D.length > 1 && !N,
                "data-x-position": q,
                style: {
                  "--front-toast-height": `${((x = st[0]) == null ? void 0 : x.height) || 0}px`,
                  "--width": `${ka}px`,
                  "--gap": `${B}px`,
                  ...t,
                  ...Ia(d, u),
                },
                onBlur: (b) => {
                  C.current &&
                    !b.currentTarget.contains(b.relatedTarget) &&
                    ((C.current = !1),
                    i.current &&
                      (i.current.focus({ preventScroll: !0 }),
                      (i.current = null)));
                },
                onFocus: (b) => {
                  (b.target instanceof HTMLElement &&
                    b.target.dataset.dismissible === "false") ||
                    C.current ||
                    ((C.current = !0), (i.current = b.relatedTarget));
                },
                onMouseEnter: () => R(!0),
                onMouseMove: () => R(!0),
                onMouseLeave: () => {
                  it || R(!1);
                },
                onDragEnd: () => R(!1),
                onPointerDown: (b) => {
                  (b.target instanceof HTMLElement &&
                    b.target.dataset.dismissible === "false") ||
                    G(!0);
                },
                onPointerUp: () => G(!1),
              },
              D.filter((b) => (!b.position && g === 0) || b.position === m).map(
                (b, vt) => {
                  var at, ct;
                  return n.createElement(Aa, {
                    key: b.id,
                    icons: $,
                    index: vt,
                    toast: b,
                    defaultRichColors: W,
                    duration:
                      (at = v == null ? void 0 : v.duration) != null ? at : h,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: o,
                    visibleToasts: Q,
                    closeButton:
                      (ct = v == null ? void 0 : v.closeButton) != null
                        ? ct
                        : E,
                    interacting: it,
                    position: m,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: ft,
                    toasts: D.filter((et) => et.position == b.position),
                    heights: st.filter((et) => et.position == b.position),
                    setHeights: gt,
                    expandByDefault: N,
                    gap: B,
                    loadingIcon: z,
                    expanded: rt,
                    pauseWhenPageIsHidden: Z,
                    swipeDirections: a.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const Ma = () =>
    r.jsxs("svg", {
      "data-lov-id": "src\\pages\\auth\\Login.tsx:15:2",
      "data-lov-name": "svg",
      "data-component-path": "src\\pages\\auth\\Login.tsx",
      "data-component-line": "15",
      "data-component-file": "Login.tsx",
      "data-component-name": "svg",
      "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
      className: "w-5 h-5",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        r.jsx("path", {
          "data-lov-id": "src\\pages\\auth\\Login.tsx:16:4",
          "data-lov-name": "path",
          "data-component-path": "src\\pages\\auth\\Login.tsx",
          "data-component-line": "16",
          "data-component-file": "Login.tsx",
          "data-component-name": "path",
          "data-component-content": "%7B%7D",
          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
          fill: "#4285F4",
        }),
        r.jsx("path", {
          "data-lov-id": "src\\pages\\auth\\Login.tsx:17:4",
          "data-lov-name": "path",
          "data-component-path": "src\\pages\\auth\\Login.tsx",
          "data-component-line": "17",
          "data-component-file": "Login.tsx",
          "data-component-name": "path",
          "data-component-content": "%7B%7D",
          d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
          fill: "#34A853",
        }),
        r.jsx("path", {
          "data-lov-id": "src\\pages\\auth\\Login.tsx:18:4",
          "data-lov-name": "path",
          "data-component-path": "src\\pages\\auth\\Login.tsx",
          "data-component-line": "18",
          "data-component-file": "Login.tsx",
          "data-component-name": "path",
          "data-component-content": "%7B%7D",
          d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
          fill: "#FBBC05",
        }),
        r.jsx("path", {
          "data-lov-id": "src\\pages\\auth\\Login.tsx:19:4",
          "data-lov-name": "path",
          "data-component-path": "src\\pages\\auth\\Login.tsx",
          "data-component-line": "19",
          "data-component-file": "Login.tsx",
          "data-component-name": "path",
          "data-component-content": "%7B%7D",
          d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
          fill: "#EA4335",
        }),
      ],
    }),
  Va = () => {
    const [a, e] = Y.useState(""),
      [o, l] = Y.useState(""),
      [p, N] = Y.useState(!1),
      [E, w] = Y.useState(null),
      [d, u] = Y.useState(!1),
      L = Qt(),
      [W] = Zt(),
      { t: h } = Xt(),
      t = () => W.get("redirect") || "/app",
      Q = async (y) => {
        (y.preventDefault(), N(!0));
        try {
          if (d) {
            const { error: B } = await Nt.auth.signUp({
              email: a,
              password: o,
              options: { data: { full_name: a.split("@")[0] } },
            });
            if (B) throw B;
            (pt.success(h("auth.toast.signup_success")),
              setTimeout(() => {
                L(`/login?redirect=${encodeURIComponent(t())}`);
              }, 2e3));
          } else {
            const { error: B } = await Nt.auth.signInWithPassword({
              email: a,
              password: o,
            });
            if (B) throw B;
            (pt.success(h("auth.toast.login_success")), L(t()));
          }
        } catch (B) {
          const z =
            B instanceof Error ? B.message : h("auth.toast.error_generic");
          pt.error(z);
        } finally {
          N(!1);
        }
      },
      v = async (y) => {
        w(y);
        try {
          const { error: B } = await Nt.auth.signInWithOAuth({
            provider: y,
            options: {
              redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(t())}`,
            },
          });
          if (B) throw B;
        } catch (B) {
          const z = B instanceof Error ? B.message : `Erro ao entrar com ${y}`;
          (pt.error(z), w(null));
        }
      };
    return r.jsx("div", {
      "data-lov-id": "src\\pages\\auth\\Login.tsx:88:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\auth\\Login.tsx",
      "data-component-line": "88",
      "data-component-file": "Login.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22flex%20min-h-screen%20items-center%20justify-center%20bg-gradient-to-br%20from-background%20to-muted%2F40%20px-4%20py-12%22%7D",
      className:
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/40 px-4 py-12",
      children: r.jsxs("div", {
        "data-lov-id": "src\\pages\\auth\\Login.tsx:89:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\auth\\Login.tsx",
        "data-component-line": "89",
        "data-component-file": "Login.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22w-full%20max-w-md%20space-y-6%22%7D",
        className: "w-full max-w-md space-y-6",
        children: [
          r.jsxs("div", {
            "data-lov-id": "src\\pages\\auth\\Login.tsx:90:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\auth\\Login.tsx",
            "data-component-line": "90",
            "data-component-file": "Login.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20flex-col%20items-center%20gap-2%20mb-2%22%7D",
            className: "flex flex-col items-center gap-2 mb-2",
            children: [
              r.jsx(ra, {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:91:10",
                "data-lov-name": "LogoIcon",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "91",
                "data-component-file": "Login.tsx",
                "data-component-name": "LogoIcon",
                "data-component-content": "%7B%7D",
                size: "md",
              }),
              r.jsx(ia, {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:92:10",
                "data-lov-name": "BrandName",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "92",
                "data-component-file": "Login.tsx",
                "data-component-name": "BrandName",
                "data-component-content": "%7B%7D",
                variant: "header",
              }),
              r.jsx("p", {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:93:10",
                "data-lov-name": "p",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "93",
                "data-component-file": "Login.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                className: "text-sm text-muted-foreground",
                children: h(d ? "auth.signup_title" : "auth.login_title"),
              }),
            ],
          }),
          r.jsxs(ta, {
            "data-lov-id": "src\\pages\\auth\\Login.tsx:98:8",
            "data-lov-name": "Card",
            "data-component-path": "src\\pages\\auth\\Login.tsx",
            "data-component-line": "98",
            "data-component-file": "Login.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%22className%22%3A%22shadow-lg%22%7D",
            className: "shadow-lg",
            children: [
              r.jsx(aa, {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:99:10",
                "data-lov-name": "CardHeader",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "99",
                "data-component-file": "Login.tsx",
                "data-component-name": "CardHeader",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-1%20pb-4%22%7D",
                className: "space-y-1 pb-4",
                children: r.jsx(ea, {
                  "data-lov-id": "src\\pages\\auth\\Login.tsx:100:12",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\auth\\Login.tsx",
                  "data-component-line": "100",
                  "data-component-file": "Login.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xl%20text-center%22%7D",
                  className: "text-xl text-center",
                  children: h(d ? "auth.submit_signup" : "auth.submit_login"),
                }),
              }),
              r.jsxs(na, {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:105:10",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "105",
                "data-component-file": "Login.tsx",
                "data-component-name": "CardContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [
                  r.jsx("div", {
                    "data-lov-id": "src\\pages\\auth\\Login.tsx:106:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\auth\\Login.tsx",
                    "data-component-line": "106",
                    "data-component-file": "Login.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20justify-center%22%7D",
                    className: "flex justify-center",
                    children: r.jsxs(Lt, {
                      "data-lov-id": "src\\pages\\auth\\Login.tsx:107:14",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\auth\\Login.tsx",
                      "data-component-line": "107",
                      "data-component-file": "Login.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-full%20gap-2%20py-6%20text-base%20btn-shine%22%7D",
                      variant: "outline",
                      className: "w-full gap-2 py-6 text-base btn-shine",
                      onClick: () => v("google"),
                      disabled: !!E,
                      type: "button",
                      children: [
                        E === "google"
                          ? r.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\auth\\Login.tsx:115:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\auth\\Login.tsx",
                              "data-component-line": "115",
                              "data-component-file": "Login.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20rounded-full%20border-2%20border-current%20border-t-transparent%20animate-spin%22%7D",
                              className:
                                "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin",
                            })
                          : r.jsx(Ma, {
                              "data-lov-id":
                                "src\\pages\\auth\\Login.tsx:117:18",
                              "data-lov-name": "GoogleIcon",
                              "data-component-path":
                                "src\\pages\\auth\\Login.tsx",
                              "data-component-line": "117",
                              "data-component-file": "Login.tsx",
                              "data-component-name": "GoogleIcon",
                              "data-component-content": "%7B%7D",
                            }),
                        h("auth.google_button"),
                      ],
                    }),
                  }),
                  r.jsxs("div", {
                    "data-lov-id": "src\\pages\\auth\\Login.tsx:123:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\auth\\Login.tsx",
                    "data-component-line": "123",
                    "data-component-file": "Login.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22relative%22%7D",
                    className: "relative",
                    children: [
                      r.jsx("div", {
                        "data-lov-id": "src\\pages\\auth\\Login.tsx:124:14",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\auth\\Login.tsx",
                        "data-component-line": "124",
                        "data-component-file": "Login.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22absolute%20inset-0%20flex%20items-center%22%7D",
                        className: "absolute inset-0 flex items-center",
                        children: r.jsx(sa, {
                          "data-lov-id": "src\\pages\\auth\\Login.tsx:125:16",
                          "data-lov-name": "Separator",
                          "data-component-path": "src\\pages\\auth\\Login.tsx",
                          "data-component-line": "125",
                          "data-component-file": "Login.tsx",
                          "data-component-name": "Separator",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          className: "w-full",
                        }),
                      }),
                      r.jsx("div", {
                        "data-lov-id": "src\\pages\\auth\\Login.tsx:127:14",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\auth\\Login.tsx",
                        "data-component-line": "127",
                        "data-component-file": "Login.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22relative%20flex%20justify-center%20text-xs%20uppercase%22%7D",
                        className:
                          "relative flex justify-center text-xs uppercase",
                        children: r.jsx("span", {
                          "data-lov-id": "src\\pages\\auth\\Login.tsx:128:16",
                          "data-lov-name": "span",
                          "data-component-path": "src\\pages\\auth\\Login.tsx",
                          "data-component-line": "128",
                          "data-component-file": "Login.tsx",
                          "data-component-name": "span",
                          "data-component-content":
                            "%7B%22className%22%3A%22bg-card%20px-2%20text-muted-foreground%22%7D",
                          className: "bg-card px-2 text-muted-foreground",
                          children: h("auth.separator"),
                        }),
                      }),
                    ],
                  }),
                  r.jsxs("form", {
                    "data-lov-id": "src\\pages\\auth\\Login.tsx:132:12",
                    "data-lov-name": "form",
                    "data-component-path": "src\\pages\\auth\\Login.tsx",
                    "data-component-line": "132",
                    "data-component-file": "Login.tsx",
                    "data-component-name": "form",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-4%22%7D",
                    onSubmit: Q,
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        "data-lov-id": "src\\pages\\auth\\Login.tsx:133:14",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\auth\\Login.tsx",
                        "data-component-line": "133",
                        "data-component-file": "Login.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-2%22%7D",
                        className: "space-y-2",
                        children: [
                          r.jsx(Mt, {
                            "data-lov-id": "src\\pages\\auth\\Login.tsx:134:16",
                            "data-lov-name": "Label",
                            "data-component-path":
                              "src\\pages\\auth\\Login.tsx",
                            "data-component-line": "134",
                            "data-component-file": "Login.tsx",
                            "data-component-name": "Label",
                            "data-component-content": "%7B%7D",
                            htmlFor: "email",
                            children: h("auth.email_label"),
                          }),
                          r.jsx(It, {
                            "data-lov-id": "src\\pages\\auth\\Login.tsx:135:16",
                            "data-lov-name": "Input",
                            "data-component-path":
                              "src\\pages\\auth\\Login.tsx",
                            "data-component-line": "135",
                            "data-component-file": "Login.tsx",
                            "data-component-name": "Input",
                            "data-component-content": "%7B%7D",
                            id: "email",
                            type: "email",
                            placeholder: h("auth.email_placeholder"),
                            required: !0,
                            value: a,
                            onChange: (y) => e(y.target.value),
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        "data-lov-id": "src\\pages\\auth\\Login.tsx:144:14",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\auth\\Login.tsx",
                        "data-component-line": "144",
                        "data-component-file": "Login.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-2%22%7D",
                        className: "space-y-2",
                        children: [
                          r.jsx(Mt, {
                            "data-lov-id": "src\\pages\\auth\\Login.tsx:145:16",
                            "data-lov-name": "Label",
                            "data-component-path":
                              "src\\pages\\auth\\Login.tsx",
                            "data-component-line": "145",
                            "data-component-file": "Login.tsx",
                            "data-component-name": "Label",
                            "data-component-content": "%7B%7D",
                            htmlFor: "password",
                            children: h("auth.password_label"),
                          }),
                          r.jsx(It, {
                            "data-lov-id": "src\\pages\\auth\\Login.tsx:146:16",
                            "data-lov-name": "Input",
                            "data-component-path":
                              "src\\pages\\auth\\Login.tsx",
                            "data-component-line": "146",
                            "data-component-file": "Login.tsx",
                            "data-component-name": "Input",
                            "data-component-content": "%7B%7D",
                            id: "password",
                            type: "password",
                            required: !0,
                            placeholder: h("auth.password_placeholder"),
                            value: o,
                            onChange: (y) => l(y.target.value),
                          }),
                        ],
                      }),
                      r.jsx(Lt, {
                        "data-lov-id": "src\\pages\\auth\\Login.tsx:155:14",
                        "data-lov-name": "Button",
                        "data-component-path": "src\\pages\\auth\\Login.tsx",
                        "data-component-line": "155",
                        "data-component-file": "Login.tsx",
                        "data-component-name": "Button",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-full%22%7D",
                        className: "w-full",
                        type: "submit",
                        disabled: p || !!E,
                        children: p
                          ? r.jsxs(r.Fragment, {
                              children: [
                                r.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\auth\\Login.tsx:157:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\auth\\Login.tsx",
                                  "data-component-line": "157",
                                  "data-component-file": "Login.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20rounded-full%20border-2%20border-white%20border-t-transparent%20animate-spin%20mr-2%22%7D",
                                  className:
                                    "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                }),
                                h("common.processing"),
                              ],
                            })
                          : h(d ? "auth.submit_signup" : "auth.submit_login"),
                      }),
                    ],
                  }),
                ],
              }),
              r.jsx(oa, {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:165:10",
                "data-lov-name": "CardFooter",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "165",
                "data-component-file": "Login.tsx",
                "data-component-name": "CardFooter",
                "data-component-content": "%7B%7D",
                children: r.jsx(Lt, {
                  "data-lov-id": "src\\pages\\auth\\Login.tsx:166:12",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\auth\\Login.tsx",
                  "data-component-line": "166",
                  "data-component-file": "Login.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-full%20text-sm%22%7D",
                  variant: "ghost",
                  className: "w-full text-sm",
                  type: "button",
                  onClick: () => u(!d),
                  children: h(
                    d ? "auth.switch_to_login" : "auth.switch_to_signup",
                  ),
                }),
              }),
            ],
          }),
          r.jsxs("p", {
            "data-lov-id": "src\\pages\\auth\\Login.tsx:177:8",
            "data-lov-name": "p",
            "data-component-path": "src\\pages\\auth\\Login.tsx",
            "data-component-line": "177",
            "data-component-file": "Login.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22text%22%3A%22.%22%2C%22className%22%3A%22text-center%20text-xs%20text-muted-foreground%22%7D",
            className: "text-center text-xs text-muted-foreground",
            children: [
              h("auth.terms_prefix"),
              " ",
              r.jsx("a", {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:179:10",
                "data-lov-name": "a",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "179",
                "data-component-file": "Login.tsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22className%22%3A%22underline%20hover%3Atext-foreground%22%7D",
                href: "#",
                className: "underline hover:text-foreground",
                children: h("auth.terms_link"),
              }),
              " ",
              h("auth.and"),
              " ",
              r.jsx("a", {
                "data-lov-id": "src\\pages\\auth\\Login.tsx:181:10",
                "data-lov-name": "a",
                "data-component-path": "src\\pages\\auth\\Login.tsx",
                "data-component-line": "181",
                "data-component-file": "Login.tsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22className%22%3A%22underline%20hover%3Atext-foreground%22%7D",
                href: "#",
                className: "underline hover:text-foreground",
                children: h("auth.privacy_link"),
              }),
              ".",
            ],
          }),
        ],
      }),
    });
  };
export { Va as default };
