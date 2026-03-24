import {
  o as I,
  r as C,
  p as M,
  j as n,
  P,
  q as H,
  t as q,
  d as g,
} from "./index-BZzvAVnT.js";
import { r as o } from "./vendor-BgR6OOld.js";
import { u as A } from "./index-Cda9Zv0V.js";
var f = "Switch",
  [D, G] = I(f),
  [U, z] = D(f),
  y = o.forwardRef((e, s) => {
    const {
        __scopeSwitch: t,
        name: r,
        checked: a,
        defaultChecked: w,
        required: d,
        disabled: c,
        value: l = "on",
        onCheckedChange: b,
        form: i,
        ...v
      } = e,
      [p, u] = o.useState(null),
      S = C(s, (m) => u(m)),
      x = o.useRef(!1),
      k = p ? i || !!p.closest("form") : !0,
      [h, B] = M({ prop: a, defaultProp: w ?? !1, onChange: b, caller: f });
    return n.jsxs(U, {
      scope: t,
      checked: h,
      disabled: c,
      children: [
        n.jsx(P.button, {
          type: "button",
          role: "switch",
          "aria-checked": h,
          "aria-required": d,
          "data-state": j(h),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...v,
          ref: S,
          onClick: H(e.onClick, (m) => {
            (B((T) => !T),
              k &&
                ((x.current = m.isPropagationStopped()),
                x.current || m.stopPropagation()));
          }),
        }),
        k &&
          n.jsx(N, {
            control: p,
            bubbles: !x.current,
            name: r,
            value: l,
            checked: h,
            required: d,
            disabled: c,
            form: i,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
y.displayName = f;
var R = "SwitchThumb",
  E = o.forwardRef((e, s) => {
    const { __scopeSwitch: t, ...r } = e,
      a = z(R, t);
    return n.jsx(P.span, {
      "data-state": j(a.checked),
      "data-disabled": a.disabled ? "" : void 0,
      ...r,
      ref: s,
    });
  });
E.displayName = R;
var L = "SwitchBubbleInput",
  N = o.forwardRef(
    (
      { __scopeSwitch: e, control: s, checked: t, bubbles: r = !0, ...a },
      w,
    ) => {
      const d = o.useRef(null),
        c = C(d, w),
        l = A(t),
        b = q(s);
      return (
        o.useEffect(() => {
          const i = d.current;
          if (!i) return;
          const v = window.HTMLInputElement.prototype,
            u = Object.getOwnPropertyDescriptor(v, "checked").set;
          if (l !== t && u) {
            const S = new Event("click", { bubbles: r });
            (u.call(i, t), i.dispatchEvent(S));
          }
        }, [l, t, r]),
        n.jsx("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: t,
          ...a,
          tabIndex: -1,
          ref: c,
          style: {
            ...a.style,
            ...b,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
N.displayName = L;
function j(e) {
  return e ? "checked" : "unchecked";
}
var _ = y,
  O = E;
const F = o.forwardRef(({ className: e, ...s }, t) =>
  n.jsx(_, {
    "data-lov-id": "src\\components\\ui\\switch.tsx:10:2",
    "data-lov-name": "SwitchPrimitives.Root",
    "data-component-path": "src\\components\\ui\\switch.tsx",
    "data-component-line": "10",
    "data-component-file": "switch.tsx",
    "data-component-name": "SwitchPrimitives.Root",
    "data-component-content": "%7B%7D",
    className: g(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e,
    ),
    ...s,
    ref: t,
    children: n.jsx(O, {
      "data-lov-id": "src\\components\\ui\\switch.tsx:18:4",
      "data-lov-name": "SwitchPrimitives.Thumb",
      "data-component-path": "src\\components\\ui\\switch.tsx",
      "data-component-line": "18",
      "data-component-file": "switch.tsx",
      "data-component-name": "SwitchPrimitives.Thumb",
      "data-component-content": "%7B%7D",
      className: g(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
F.displayName = _.displayName;
export { F as S };
