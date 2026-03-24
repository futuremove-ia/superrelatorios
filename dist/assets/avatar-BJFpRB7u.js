import {
  a1 as b,
  o as P,
  j as c,
  P as v,
  W as j,
  O as u,
  d as p,
} from "./index-BZzvAVnT.js";
import { r as o } from "./vendor-BgR6OOld.js";
function C() {
  return b.useSyncExternalStore(
    k,
    () => !0,
    () => !1,
  );
}
function k() {
  return () => {};
}
var f = "Avatar",
  [_, W] = P(f),
  [F, x] = _(f),
  S = o.forwardRef((a, t) => {
    const { __scopeAvatar: n, ...r } = a,
      [s, e] = o.useState("idle");
    return c.jsx(F, {
      scope: n,
      imageLoadingStatus: s,
      onImageLoadingStatusChange: e,
      children: c.jsx(v.span, { ...r, ref: t }),
    });
  });
S.displayName = f;
var L = "AvatarImage",
  h = o.forwardRef((a, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: s = () => {},
        ...e
      } = a,
      l = x(L, n),
      i = M(r, e),
      d = j((m) => {
        (s(m), l.onImageLoadingStatusChange(m));
      });
    return (
      u(() => {
        i !== "idle" && d(i);
      }, [i, d]),
      i === "loaded" ? c.jsx(v.img, { ...e, ref: t, src: r }) : null
    );
  });
h.displayName = L;
var w = "AvatarFallback",
  R = o.forwardRef((a, t) => {
    const { __scopeAvatar: n, delayMs: r, ...s } = a,
      e = x(w, n),
      [l, i] = o.useState(r === void 0);
    return (
      o.useEffect(() => {
        if (r !== void 0) {
          const d = window.setTimeout(() => i(!0), r);
          return () => window.clearTimeout(d);
        }
      }, [r]),
      l && e.imageLoadingStatus !== "loaded"
        ? c.jsx(v.span, { ...s, ref: t })
        : null
    );
  });
R.displayName = w;
function A(a, t) {
  return a
    ? t
      ? (a.src !== t && (a.src = t),
        a.complete && a.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function M(a, { referrerPolicy: t, crossOrigin: n }) {
  const r = C(),
    s = o.useRef(null),
    e = r ? (s.current || (s.current = new window.Image()), s.current) : null,
    [l, i] = o.useState(() => A(e, a));
  return (
    u(() => {
      i(A(e, a));
    }, [e, a]),
    u(() => {
      const d = (I) => () => {
        i(I);
      };
      if (!e) return;
      const m = d("loaded"),
        g = d("error");
      return (
        e.addEventListener("load", m),
        e.addEventListener("error", g),
        t && (e.referrerPolicy = t),
        typeof n == "string" && (e.crossOrigin = n),
        () => {
          (e.removeEventListener("load", m), e.removeEventListener("error", g));
        }
      );
    }, [e, n, t]),
    l
  );
}
var y = S,
  E = h,
  N = R;
const B = o.forwardRef(({ className: a, ...t }, n) =>
  c.jsx(y, {
    "data-lov-id": "src\\components\\ui\\avatar.tsx:10:2",
    "data-lov-name": "AvatarPrimitive.Root",
    "data-component-path": "src\\components\\ui\\avatar.tsx",
    "data-component-line": "10",
    "data-component-file": "avatar.tsx",
    "data-component-name": "AvatarPrimitive.Root",
    "data-component-content": "%7B%7D",
    ref: n,
    className: p(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      a,
    ),
    ...t,
  }),
);
B.displayName = y.displayName;
const D = o.forwardRef(({ className: a, ...t }, n) =>
  c.jsx(E, {
    "data-lov-id": "src\\components\\ui\\avatar.tsx:25:2",
    "data-lov-name": "AvatarPrimitive.Image",
    "data-component-path": "src\\components\\ui\\avatar.tsx",
    "data-component-line": "25",
    "data-component-file": "avatar.tsx",
    "data-component-name": "AvatarPrimitive.Image",
    "data-component-content": "%7B%7D",
    ref: n,
    className: p("aspect-square h-full w-full", a),
    ...t,
  }),
);
D.displayName = E.displayName;
const T = o.forwardRef(({ className: a, ...t }, n) =>
  c.jsx(N, {
    "data-lov-id": "src\\components\\ui\\avatar.tsx:37:2",
    "data-lov-name": "AvatarPrimitive.Fallback",
    "data-component-path": "src\\components\\ui\\avatar.tsx",
    "data-component-line": "37",
    "data-component-file": "avatar.tsx",
    "data-component-name": "AvatarPrimitive.Fallback",
    "data-component-content": "%7B%7D",
    ref: n,
    className: p(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      a,
    ),
    ...t,
  }),
);
T.displayName = N.displayName;
export { B as A, D as a, T as b };
