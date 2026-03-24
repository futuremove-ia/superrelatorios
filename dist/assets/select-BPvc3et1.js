import {
  m as ut,
  o as ft,
  M as be,
  r as L,
  j as a,
  N as ht,
  P as D,
  q as b,
  O as z,
  Q as vt,
  R as xt,
  z as Ie,
  U as St,
  V as gt,
  W as wt,
  p as Te,
  X as yt,
  Y as Ct,
  Z as It,
  d as G,
} from "./index-BZzvAVnT.js";
import { r as t, a as Re } from "./vendor-BgR6OOld.js";
import { u as Pt, c as Ne } from "./index-Cda9Zv0V.js";
import { u as Tt } from "./index-CIr2Jy9Y.js";
import { h as Nt, u as bt, R as Rt, F as Et } from "./index-DaXQxPyL.js";
import { as as Ee, at as _t, C as Dt } from "./utils-C25gojUd.js";
var jt = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Bt = [" ", "Enter"],
  J = "Select",
  [ie, de, Mt] = ut(J),
  [oe, So] = ft(J, [Mt, be]),
  pe = be(),
  [At, Y] = oe(J),
  [Ot, Lt] = oe(J),
  _e = (o) => {
    const {
        __scopeSelect: n,
        children: e,
        open: r,
        defaultOpen: i,
        onOpenChange: m,
        value: c,
        defaultValue: l,
        onValueChange: s,
        dir: u,
        name: x,
        autoComplete: w,
        disabled: T,
        required: N,
        form: P,
      } = o,
      d = pe(n),
      [v, y] = t.useState(null),
      [p, h] = t.useState(null),
      [j, B] = t.useState(!1),
      ne = Tt(u),
      [R, A] = Te({ prop: r, defaultProp: i ?? !1, onChange: m, caller: J }),
      [W, X] = Te({ prop: c, defaultProp: l, onChange: s, caller: J }),
      k = t.useRef(null),
      V = v ? P || !!v.closest("form") : !0,
      [K, H] = t.useState(new Set()),
      U = Array.from(K)
        .map((E) => E.props.value)
        .join(";");
    return a.jsx(yt, {
      ...d,
      children: a.jsxs(At, {
        required: N,
        scope: n,
        trigger: v,
        onTriggerChange: y,
        valueNode: p,
        onValueNodeChange: h,
        valueNodeHasChildren: j,
        onValueNodeHasChildrenChange: B,
        contentId: Ie(),
        value: W,
        onValueChange: X,
        open: R,
        onOpenChange: A,
        dir: ne,
        triggerPointerDownPosRef: k,
        disabled: T,
        children: [
          a.jsx(ie.Provider, {
            scope: n,
            children: a.jsx(Ot, {
              scope: o.__scopeSelect,
              onNativeOptionAdd: t.useCallback((E) => {
                H((O) => new Set(O).add(E));
              }, []),
              onNativeOptionRemove: t.useCallback((E) => {
                H((O) => {
                  const F = new Set(O);
                  return (F.delete(E), F);
                });
              }, []),
              children: e,
            }),
          }),
          V
            ? a.jsxs(
                et,
                {
                  "aria-hidden": !0,
                  required: N,
                  tabIndex: -1,
                  name: x,
                  autoComplete: w,
                  value: W,
                  onChange: (E) => X(E.target.value),
                  disabled: T,
                  form: P,
                  children: [
                    W === void 0 ? a.jsx("option", { value: "" }) : null,
                    Array.from(K),
                  ],
                },
                U,
              )
            : null,
        ],
      }),
    });
  };
_e.displayName = J;
var De = "SelectTrigger",
  je = t.forwardRef((o, n) => {
    const { __scopeSelect: e, disabled: r = !1, ...i } = o,
      m = pe(e),
      c = Y(De, e),
      l = c.disabled || r,
      s = L(n, c.onTriggerChange),
      u = de(e),
      x = t.useRef("touch"),
      [w, T, N] = ot((d) => {
        const v = u().filter((h) => !h.disabled),
          y = v.find((h) => h.value === c.value),
          p = nt(v, d, y);
        p !== void 0 && c.onValueChange(p.value);
      }),
      P = (d) => {
        (l || (c.onOpenChange(!0), N()),
          d &&
            (c.triggerPointerDownPosRef.current = {
              x: Math.round(d.pageX),
              y: Math.round(d.pageY),
            }));
      };
    return a.jsx(ht, {
      asChild: !0,
      ...m,
      children: a.jsx(D.button, {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": tt(c.value) ? "" : void 0,
        ...i,
        ref: s,
        onClick: b(i.onClick, (d) => {
          (d.currentTarget.focus(), x.current !== "mouse" && P(d));
        }),
        onPointerDown: b(i.onPointerDown, (d) => {
          x.current = d.pointerType;
          const v = d.target;
          (v.hasPointerCapture(d.pointerId) &&
            v.releasePointerCapture(d.pointerId),
            d.button === 0 &&
              d.ctrlKey === !1 &&
              d.pointerType === "mouse" &&
              (P(d), d.preventDefault()));
        }),
        onKeyDown: b(i.onKeyDown, (d) => {
          const v = w.current !== "";
          (!(d.ctrlKey || d.altKey || d.metaKey) &&
            d.key.length === 1 &&
            T(d.key),
            !(v && d.key === " ") &&
              jt.includes(d.key) &&
              (P(), d.preventDefault()));
        }),
      }),
    });
  });
je.displayName = De;
var Be = "SelectValue",
  Me = t.forwardRef((o, n) => {
    const {
        __scopeSelect: e,
        className: r,
        style: i,
        children: m,
        placeholder: c = "",
        ...l
      } = o,
      s = Y(Be, e),
      { onValueNodeHasChildrenChange: u } = s,
      x = m !== void 0,
      w = L(n, s.onValueNodeChange);
    return (
      z(() => {
        u(x);
      }, [u, x]),
      a.jsx(D.span, {
        ...l,
        ref: w,
        style: { pointerEvents: "none" },
        children: tt(s.value) ? a.jsx(a.Fragment, { children: c }) : m,
      })
    );
  });
Me.displayName = Be;
var kt = "SelectIcon",
  Ae = t.forwardRef((o, n) => {
    const { __scopeSelect: e, children: r, ...i } = o;
    return a.jsx(D.span, {
      "aria-hidden": !0,
      ...i,
      ref: n,
      children: r || "▼",
    });
  });
Ae.displayName = kt;
var Vt = "SelectPortal",
  Oe = (o) => a.jsx(Ct, { asChild: !0, ...o });
Oe.displayName = Vt;
var ee = "SelectContent",
  Le = t.forwardRef((o, n) => {
    const e = Y(ee, o.__scopeSelect),
      [r, i] = t.useState();
    if (
      (z(() => {
        i(new DocumentFragment());
      }, []),
      !e.open)
    ) {
      const m = r;
      return m
        ? Re.createPortal(
            a.jsx(ke, {
              scope: o.__scopeSelect,
              children: a.jsx(ie.Slot, {
                scope: o.__scopeSelect,
                children: a.jsx("div", { children: o.children }),
              }),
            }),
            m,
          )
        : null;
    }
    return a.jsx(Ve, { ...o, ref: n });
  });
Le.displayName = ee;
var M = 10,
  [ke, q] = oe(ee),
  Ht = "SelectContentImpl",
  Ut = It("SelectContent.RemoveScroll"),
  Ve = t.forwardRef((o, n) => {
    const {
        __scopeSelect: e,
        position: r = "item-aligned",
        onCloseAutoFocus: i,
        onEscapeKeyDown: m,
        onPointerDownOutside: c,
        side: l,
        sideOffset: s,
        align: u,
        alignOffset: x,
        arrowPadding: w,
        collisionBoundary: T,
        collisionPadding: N,
        sticky: P,
        hideWhenDetached: d,
        avoidCollisions: v,
        ...y
      } = o,
      p = Y(ee, e),
      [h, j] = t.useState(null),
      [B, ne] = t.useState(null),
      R = L(n, (f) => j(f)),
      [A, W] = t.useState(null),
      [X, k] = t.useState(null),
      V = de(e),
      [K, H] = t.useState(!1),
      U = t.useRef(!1);
    (t.useEffect(() => {
      if (h) return Nt(h);
    }, [h]),
      bt());
    const E = t.useCallback(
        (f) => {
          const [I, ..._] = V().map((g) => g.ref.current),
            [C] = _.slice(-1),
            S = document.activeElement;
          for (const g of f)
            if (
              g === S ||
              (g == null || g.scrollIntoView({ block: "nearest" }),
              g === I && B && (B.scrollTop = 0),
              g === C && B && (B.scrollTop = B.scrollHeight),
              g == null || g.focus(),
              document.activeElement !== S)
            )
              return;
        },
        [V, B],
      ),
      O = t.useCallback(() => E([A, h]), [E, A, h]);
    t.useEffect(() => {
      K && O();
    }, [K, O]);
    const { onOpenChange: F, triggerPointerDownPosRef: $ } = p;
    (t.useEffect(() => {
      if (h) {
        let f = { x: 0, y: 0 };
        const I = (C) => {
            var S, g;
            f = {
              x: Math.abs(
                Math.round(C.pageX) -
                  (((S = $.current) == null ? void 0 : S.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(C.pageY) -
                  (((g = $.current) == null ? void 0 : g.y) ?? 0),
              ),
            };
          },
          _ = (C) => {
            (f.x <= 10 && f.y <= 10
              ? C.preventDefault()
              : h.contains(C.target) || F(!1),
              document.removeEventListener("pointermove", I),
              ($.current = null));
          };
        return (
          $.current !== null &&
            (document.addEventListener("pointermove", I),
            document.addEventListener("pointerup", _, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", I),
              document.removeEventListener("pointerup", _, { capture: !0 }));
          }
        );
      }
    }, [h, F, $]),
      t.useEffect(() => {
        const f = () => F(!1);
        return (
          window.addEventListener("blur", f),
          window.addEventListener("resize", f),
          () => {
            (window.removeEventListener("blur", f),
              window.removeEventListener("resize", f));
          }
        );
      }, [F]));
    const [me, re] = ot((f) => {
        const I = V().filter((S) => !S.disabled),
          _ = I.find((S) => S.ref.current === document.activeElement),
          C = nt(I, f, _);
        C && setTimeout(() => C.ref.current.focus());
      }),
      ue = t.useCallback(
        (f, I, _) => {
          const C = !U.current && !_;
          ((p.value !== void 0 && p.value === I) || C) &&
            (W(f), C && (U.current = !0));
        },
        [p.value],
      ),
      fe = t.useCallback(() => (h == null ? void 0 : h.focus()), [h]),
      te = t.useCallback(
        (f, I, _) => {
          const C = !U.current && !_;
          ((p.value !== void 0 && p.value === I) || C) && k(f);
        },
        [p.value],
      ),
      ce = r === "popper" ? Se : He,
      ae =
        ce === Se
          ? {
              side: l,
              sideOffset: s,
              align: u,
              alignOffset: x,
              arrowPadding: w,
              collisionBoundary: T,
              collisionPadding: N,
              sticky: P,
              hideWhenDetached: d,
              avoidCollisions: v,
            }
          : {};
    return a.jsx(ke, {
      scope: e,
      content: h,
      viewport: B,
      onViewportChange: ne,
      itemRefCallback: ue,
      selectedItem: A,
      onItemLeave: fe,
      itemTextRefCallback: te,
      focusSelectedItem: O,
      selectedItemText: X,
      position: r,
      isPositioned: K,
      searchRef: me,
      children: a.jsx(Rt, {
        as: Ut,
        allowPinchZoom: !0,
        children: a.jsx(Et, {
          asChild: !0,
          trapped: p.open,
          onMountAutoFocus: (f) => {
            f.preventDefault();
          },
          onUnmountAutoFocus: b(i, (f) => {
            var I;
            ((I = p.trigger) == null || I.focus({ preventScroll: !0 }),
              f.preventDefault());
          }),
          children: a.jsx(vt, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: m,
            onPointerDownOutside: c,
            onFocusOutside: (f) => f.preventDefault(),
            onDismiss: () => p.onOpenChange(!1),
            children: a.jsx(ce, {
              role: "listbox",
              id: p.contentId,
              "data-state": p.open ? "open" : "closed",
              dir: p.dir,
              onContextMenu: (f) => f.preventDefault(),
              ...y,
              ...ae,
              onPlaced: () => H(!0),
              ref: R,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: b(y.onKeyDown, (f) => {
                const I = f.ctrlKey || f.altKey || f.metaKey;
                if (
                  (f.key === "Tab" && f.preventDefault(),
                  !I && f.key.length === 1 && re(f.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(f.key))
                ) {
                  let C = V()
                    .filter((S) => !S.disabled)
                    .map((S) => S.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(f.key) &&
                      (C = C.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(f.key))
                  ) {
                    const S = f.target,
                      g = C.indexOf(S);
                    C = C.slice(g + 1);
                  }
                  (setTimeout(() => E(C)), f.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Ve.displayName = Ht;
var Ft = "SelectItemAlignedPosition",
  He = t.forwardRef((o, n) => {
    const { __scopeSelect: e, onPlaced: r, ...i } = o,
      m = Y(ee, e),
      c = q(ee, e),
      [l, s] = t.useState(null),
      [u, x] = t.useState(null),
      w = L(n, (R) => x(R)),
      T = de(e),
      N = t.useRef(!1),
      P = t.useRef(!0),
      {
        viewport: d,
        selectedItem: v,
        selectedItemText: y,
        focusSelectedItem: p,
      } = c,
      h = t.useCallback(() => {
        if (m.trigger && m.valueNode && l && u && d && v && y) {
          const R = m.trigger.getBoundingClientRect(),
            A = u.getBoundingClientRect(),
            W = m.valueNode.getBoundingClientRect(),
            X = y.getBoundingClientRect();
          if (m.dir !== "rtl") {
            const S = X.left - A.left,
              g = W.left - S,
              Z = R.left - g,
              Q = R.width + Z,
              he = Math.max(Q, A.width),
              ve = window.innerWidth - M,
              xe = Ne(g, [M, Math.max(M, ve - he)]);
            ((l.style.minWidth = Q + "px"), (l.style.left = xe + "px"));
          } else {
            const S = A.right - X.right,
              g = window.innerWidth - W.right - S,
              Z = window.innerWidth - R.right - g,
              Q = R.width + Z,
              he = Math.max(Q, A.width),
              ve = window.innerWidth - M,
              xe = Ne(g, [M, Math.max(M, ve - he)]);
            ((l.style.minWidth = Q + "px"), (l.style.right = xe + "px"));
          }
          const k = T(),
            V = window.innerHeight - M * 2,
            K = d.scrollHeight,
            H = window.getComputedStyle(u),
            U = parseInt(H.borderTopWidth, 10),
            E = parseInt(H.paddingTop, 10),
            O = parseInt(H.borderBottomWidth, 10),
            F = parseInt(H.paddingBottom, 10),
            $ = U + E + K + F + O,
            me = Math.min(v.offsetHeight * 5, $),
            re = window.getComputedStyle(d),
            ue = parseInt(re.paddingTop, 10),
            fe = parseInt(re.paddingBottom, 10),
            te = R.top + R.height / 2 - M,
            ce = V - te,
            ae = v.offsetHeight / 2,
            f = v.offsetTop + ae,
            I = U + E + f,
            _ = $ - I;
          if (I <= te) {
            const S = k.length > 0 && v === k[k.length - 1].ref.current;
            l.style.bottom = "0px";
            const g = u.clientHeight - d.offsetTop - d.offsetHeight,
              Z = Math.max(ce, ae + (S ? fe : 0) + g + O),
              Q = I + Z;
            l.style.height = Q + "px";
          } else {
            const S = k.length > 0 && v === k[0].ref.current;
            l.style.top = "0px";
            const Z = Math.max(te, U + d.offsetTop + (S ? ue : 0) + ae) + _;
            ((l.style.height = Z + "px"), (d.scrollTop = I - te + d.offsetTop));
          }
          ((l.style.margin = `${M}px 0`),
            (l.style.minHeight = me + "px"),
            (l.style.maxHeight = V + "px"),
            r == null || r(),
            requestAnimationFrame(() => (N.current = !0)));
        }
      }, [T, m.trigger, m.valueNode, l, u, d, v, y, m.dir, r]);
    z(() => h(), [h]);
    const [j, B] = t.useState();
    z(() => {
      u && B(window.getComputedStyle(u).zIndex);
    }, [u]);
    const ne = t.useCallback(
      (R) => {
        R && P.current === !0 && (h(), p == null || p(), (P.current = !1));
      },
      [h, p],
    );
    return a.jsx(Kt, {
      scope: e,
      contentWrapper: l,
      shouldExpandOnScrollRef: N,
      onScrollButtonChange: ne,
      children: a.jsx("div", {
        ref: s,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: j,
        },
        children: a.jsx(D.div, {
          ...i,
          ref: w,
          style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
        }),
      }),
    });
  });
He.displayName = Ft;
var Wt = "SelectPopperPosition",
  Se = t.forwardRef((o, n) => {
    const {
        __scopeSelect: e,
        align: r = "start",
        collisionPadding: i = M,
        ...m
      } = o,
      c = pe(e);
    return a.jsx(xt, {
      ...c,
      ...m,
      ref: n,
      align: r,
      collisionPadding: i,
      style: {
        boxSizing: "border-box",
        ...m.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Se.displayName = Wt;
var [Kt, Pe] = oe(ee, {}),
  ge = "SelectViewport",
  Ue = t.forwardRef((o, n) => {
    const { __scopeSelect: e, nonce: r, ...i } = o,
      m = q(ge, e),
      c = Pe(ge, e),
      l = L(n, m.onViewportChange),
      s = t.useRef(0);
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        a.jsx(ie.Slot, {
          scope: e,
          children: a.jsx(D.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...i,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...i.style,
            },
            onScroll: b(i.onScroll, (u) => {
              const x = u.currentTarget,
                { contentWrapper: w, shouldExpandOnScrollRef: T } = c;
              if (T != null && T.current && w) {
                const N = Math.abs(s.current - x.scrollTop);
                if (N > 0) {
                  const P = window.innerHeight - M * 2,
                    d = parseFloat(w.style.minHeight),
                    v = parseFloat(w.style.height),
                    y = Math.max(d, v);
                  if (y < P) {
                    const p = y + N,
                      h = Math.min(P, p),
                      j = p - h;
                    ((w.style.height = h + "px"),
                      w.style.bottom === "0px" &&
                        ((x.scrollTop = j > 0 ? j : 0),
                        (w.style.justifyContent = "flex-end")));
                  }
                }
              }
              s.current = x.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Ue.displayName = ge;
var Fe = "SelectGroup",
  [$t, zt] = oe(Fe),
  Gt = t.forwardRef((o, n) => {
    const { __scopeSelect: e, ...r } = o,
      i = Ie();
    return a.jsx($t, {
      scope: e,
      id: i,
      children: a.jsx(D.div, {
        role: "group",
        "aria-labelledby": i,
        ...r,
        ref: n,
      }),
    });
  });
Gt.displayName = Fe;
var We = "SelectLabel",
  Ke = t.forwardRef((o, n) => {
    const { __scopeSelect: e, ...r } = o,
      i = zt(We, e);
    return a.jsx(D.div, { id: i.id, ...r, ref: n });
  });
Ke.displayName = We;
var le = "SelectItem",
  [Yt, $e] = oe(le),
  ze = t.forwardRef((o, n) => {
    const {
        __scopeSelect: e,
        value: r,
        disabled: i = !1,
        textValue: m,
        ...c
      } = o,
      l = Y(le, e),
      s = q(le, e),
      u = l.value === r,
      [x, w] = t.useState(m ?? ""),
      [T, N] = t.useState(!1),
      P = L(n, (p) => {
        var h;
        return (h = s.itemRefCallback) == null ? void 0 : h.call(s, p, r, i);
      }),
      d = Ie(),
      v = t.useRef("touch"),
      y = () => {
        i || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return a.jsx(Yt, {
      scope: e,
      value: r,
      disabled: i,
      textId: d,
      isSelected: u,
      onItemTextChange: t.useCallback((p) => {
        w((h) => h || ((p == null ? void 0 : p.textContent) ?? "").trim());
      }, []),
      children: a.jsx(ie.ItemSlot, {
        scope: e,
        value: r,
        disabled: i,
        textValue: x,
        children: a.jsx(D.div, {
          role: "option",
          "aria-labelledby": d,
          "data-highlighted": T ? "" : void 0,
          "aria-selected": u && T,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": i || void 0,
          "data-disabled": i ? "" : void 0,
          tabIndex: i ? void 0 : -1,
          ...c,
          ref: P,
          onFocus: b(c.onFocus, () => N(!0)),
          onBlur: b(c.onBlur, () => N(!1)),
          onClick: b(c.onClick, () => {
            v.current !== "mouse" && y();
          }),
          onPointerUp: b(c.onPointerUp, () => {
            v.current === "mouse" && y();
          }),
          onPointerDown: b(c.onPointerDown, (p) => {
            v.current = p.pointerType;
          }),
          onPointerMove: b(c.onPointerMove, (p) => {
            var h;
            ((v.current = p.pointerType),
              i
                ? (h = s.onItemLeave) == null || h.call(s)
                : v.current === "mouse" &&
                  p.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: b(c.onPointerLeave, (p) => {
            var h;
            p.currentTarget === document.activeElement &&
              ((h = s.onItemLeave) == null || h.call(s));
          }),
          onKeyDown: b(c.onKeyDown, (p) => {
            var j;
            (((j = s.searchRef) == null ? void 0 : j.current) !== "" &&
              p.key === " ") ||
              (Bt.includes(p.key) && y(), p.key === " " && p.preventDefault());
          }),
        }),
      }),
    });
  });
ze.displayName = le;
var se = "SelectItemText",
  Ge = t.forwardRef((o, n) => {
    const { __scopeSelect: e, className: r, style: i, ...m } = o,
      c = Y(se, e),
      l = q(se, e),
      s = $e(se, e),
      u = Lt(se, e),
      [x, w] = t.useState(null),
      T = L(
        n,
        (y) => w(y),
        s.onItemTextChange,
        (y) => {
          var p;
          return (p = l.itemTextRefCallback) == null
            ? void 0
            : p.call(l, y, s.value, s.disabled);
        },
      ),
      N = x == null ? void 0 : x.textContent,
      P = t.useMemo(
        () =>
          a.jsx(
            "option",
            { value: s.value, disabled: s.disabled, children: N },
            s.value,
          ),
        [s.disabled, s.value, N],
      ),
      { onNativeOptionAdd: d, onNativeOptionRemove: v } = u;
    return (
      z(() => (d(P), () => v(P)), [d, v, P]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(D.span, { id: s.textId, ...m, ref: T }),
          s.isSelected && c.valueNode && !c.valueNodeHasChildren
            ? Re.createPortal(m.children, c.valueNode)
            : null,
        ],
      })
    );
  });
Ge.displayName = se;
var Ye = "SelectItemIndicator",
  qe = t.forwardRef((o, n) => {
    const { __scopeSelect: e, ...r } = o;
    return $e(Ye, e).isSelected
      ? a.jsx(D.span, { "aria-hidden": !0, ...r, ref: n })
      : null;
  });
qe.displayName = Ye;
var we = "SelectScrollUpButton",
  Xe = t.forwardRef((o, n) => {
    const e = q(we, o.__scopeSelect),
      r = Pe(we, o.__scopeSelect),
      [i, m] = t.useState(!1),
      c = L(n, r.onScrollButtonChange);
    return (
      z(() => {
        if (e.viewport && e.isPositioned) {
          let l = function () {
            const u = s.scrollTop > 0;
            m(u);
          };
          const s = e.viewport;
          return (
            l(),
            s.addEventListener("scroll", l),
            () => s.removeEventListener("scroll", l)
          );
        }
      }, [e.viewport, e.isPositioned]),
      i
        ? a.jsx(Qe, {
            ...o,
            ref: c,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: s } = e;
              l && s && (l.scrollTop = l.scrollTop - s.offsetHeight);
            },
          })
        : null
    );
  });
Xe.displayName = we;
var ye = "SelectScrollDownButton",
  Ze = t.forwardRef((o, n) => {
    const e = q(ye, o.__scopeSelect),
      r = Pe(ye, o.__scopeSelect),
      [i, m] = t.useState(!1),
      c = L(n, r.onScrollButtonChange);
    return (
      z(() => {
        if (e.viewport && e.isPositioned) {
          let l = function () {
            const u = s.scrollHeight - s.clientHeight,
              x = Math.ceil(s.scrollTop) < u;
            m(x);
          };
          const s = e.viewport;
          return (
            l(),
            s.addEventListener("scroll", l),
            () => s.removeEventListener("scroll", l)
          );
        }
      }, [e.viewport, e.isPositioned]),
      i
        ? a.jsx(Qe, {
            ...o,
            ref: c,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: s } = e;
              l && s && (l.scrollTop = l.scrollTop + s.offsetHeight);
            },
          })
        : null
    );
  });
Ze.displayName = ye;
var Qe = t.forwardRef((o, n) => {
    const { __scopeSelect: e, onAutoScroll: r, ...i } = o,
      m = q("SelectScrollButton", e),
      c = t.useRef(null),
      l = de(e),
      s = t.useCallback(() => {
        c.current !== null &&
          (window.clearInterval(c.current), (c.current = null));
      }, []);
    return (
      t.useEffect(() => () => s(), [s]),
      z(() => {
        var x;
        const u = l().find((w) => w.ref.current === document.activeElement);
        (x = u == null ? void 0 : u.ref.current) == null ||
          x.scrollIntoView({ block: "nearest" });
      }, [l]),
      a.jsx(D.div, {
        "aria-hidden": !0,
        ...i,
        ref: n,
        style: { flexShrink: 0, ...i.style },
        onPointerDown: b(i.onPointerDown, () => {
          c.current === null && (c.current = window.setInterval(r, 50));
        }),
        onPointerMove: b(i.onPointerMove, () => {
          var u;
          ((u = m.onItemLeave) == null || u.call(m),
            c.current === null && (c.current = window.setInterval(r, 50)));
        }),
        onPointerLeave: b(i.onPointerLeave, () => {
          s();
        }),
      })
    );
  }),
  qt = "SelectSeparator",
  Je = t.forwardRef((o, n) => {
    const { __scopeSelect: e, ...r } = o;
    return a.jsx(D.div, { "aria-hidden": !0, ...r, ref: n });
  });
Je.displayName = qt;
var Ce = "SelectArrow",
  Xt = t.forwardRef((o, n) => {
    const { __scopeSelect: e, ...r } = o,
      i = pe(e),
      m = Y(Ce, e),
      c = q(Ce, e);
    return m.open && c.position === "popper"
      ? a.jsx(St, { ...i, ...r, ref: n })
      : null;
  });
Xt.displayName = Ce;
var Zt = "SelectBubbleInput",
  et = t.forwardRef(({ __scopeSelect: o, value: n, ...e }, r) => {
    const i = t.useRef(null),
      m = L(r, i),
      c = Pt(n);
    return (
      t.useEffect(() => {
        const l = i.current;
        if (!l) return;
        const s = window.HTMLSelectElement.prototype,
          x = Object.getOwnPropertyDescriptor(s, "value").set;
        if (c !== n && x) {
          const w = new Event("change", { bubbles: !0 });
          (x.call(l, n), l.dispatchEvent(w));
        }
      }, [c, n]),
      a.jsx(D.select, {
        ...e,
        style: { ...gt, ...e.style },
        ref: m,
        defaultValue: n,
      })
    );
  });
et.displayName = Zt;
function tt(o) {
  return o === "" || o === void 0;
}
function ot(o) {
  const n = wt(o),
    e = t.useRef(""),
    r = t.useRef(0),
    i = t.useCallback(
      (c) => {
        const l = e.current + c;
        (n(l),
          (function s(u) {
            ((e.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => s(""), 1e3)));
          })(l));
      },
      [n],
    ),
    m = t.useCallback(() => {
      ((e.current = ""), window.clearTimeout(r.current));
    }, []);
  return (
    t.useEffect(() => () => window.clearTimeout(r.current), []),
    [e, i, m]
  );
}
function nt(o, n, e) {
  const i = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n,
    m = e ? o.indexOf(e) : -1;
  let c = Qt(o, Math.max(m, 0));
  i.length === 1 && (c = c.filter((u) => u !== e));
  const s = c.find((u) =>
    u.textValue.toLowerCase().startsWith(i.toLowerCase()),
  );
  return s !== e ? s : void 0;
}
function Qt(o, n) {
  return o.map((e, r) => o[(n + r) % o.length]);
}
var Jt = _e,
  at = je,
  eo = Me,
  to = Ae,
  oo = Oe,
  st = Le,
  no = Ue,
  rt = Ke,
  ct = ze,
  ao = Ge,
  so = qe,
  lt = Xe,
  it = Ze,
  dt = Je;
const go = Jt,
  wo = eo,
  ro = t.forwardRef(({ className: o, children: n, ...e }, r) =>
    a.jsxs(at, {
      "data-lov-id": "src\\components\\ui\\select.tsx:17:2",
      "data-lov-name": "SelectPrimitive.Trigger",
      "data-component-path": "src\\components\\ui\\select.tsx",
      "data-component-line": "17",
      "data-component-file": "select.tsx",
      "data-component-name": "SelectPrimitive.Trigger",
      "data-component-content": "%7B%7D",
      ref: r,
      className: G(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        o,
      ),
      ...e,
      children: [
        n,
        a.jsx(to, {
          "data-lov-id": "src\\components\\ui\\select.tsx:26:4",
          "data-lov-name": "SelectPrimitive.Icon",
          "data-component-path": "src\\components\\ui\\select.tsx",
          "data-component-line": "26",
          "data-component-file": "select.tsx",
          "data-component-name": "SelectPrimitive.Icon",
          "data-component-content": "%7B%7D",
          asChild: !0,
          children: a.jsx(Ee, {
            "data-lov-id": "src\\components\\ui\\select.tsx:27:6",
            "data-lov-name": "ChevronDown",
            "data-component-path": "src\\components\\ui\\select.tsx",
            "data-component-line": "27",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronDown",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20opacity-50%22%7D",
            className: "h-4 w-4 opacity-50",
          }),
        }),
      ],
    }),
  );
ro.displayName = at.displayName;
const pt = t.forwardRef(({ className: o, ...n }, e) =>
  a.jsx(lt, {
    "data-lov-id": "src\\components\\ui\\select.tsx:37:2",
    "data-lov-name": "SelectPrimitive.ScrollUpButton",
    "data-component-path": "src\\components\\ui\\select.tsx",
    "data-component-line": "37",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.ScrollUpButton",
    "data-component-content": "%7B%7D",
    ref: e,
    className: G("flex cursor-default items-center justify-center py-1", o),
    ...n,
    children: a.jsx(_t, {
      "data-lov-id": "src\\components\\ui\\select.tsx:45:4",
      "data-lov-name": "ChevronUp",
      "data-component-path": "src\\components\\ui\\select.tsx",
      "data-component-line": "45",
      "data-component-file": "select.tsx",
      "data-component-name": "ChevronUp",
      "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
      className: "h-4 w-4",
    }),
  }),
);
pt.displayName = lt.displayName;
const mt = t.forwardRef(({ className: o, ...n }, e) =>
  a.jsx(it, {
    "data-lov-id": "src\\components\\ui\\select.tsx:54:2",
    "data-lov-name": "SelectPrimitive.ScrollDownButton",
    "data-component-path": "src\\components\\ui\\select.tsx",
    "data-component-line": "54",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.ScrollDownButton",
    "data-component-content": "%7B%7D",
    ref: e,
    className: G("flex cursor-default items-center justify-center py-1", o),
    ...n,
    children: a.jsx(Ee, {
      "data-lov-id": "src\\components\\ui\\select.tsx:62:4",
      "data-lov-name": "ChevronDown",
      "data-component-path": "src\\components\\ui\\select.tsx",
      "data-component-line": "62",
      "data-component-file": "select.tsx",
      "data-component-name": "ChevronDown",
      "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
      className: "h-4 w-4",
    }),
  }),
);
mt.displayName = it.displayName;
const co = t.forwardRef(
  ({ className: o, children: n, position: e = "popper", ...r }, i) =>
    a.jsx(oo, {
      "data-lov-id": "src\\components\\ui\\select.tsx:72:2",
      "data-lov-name": "SelectPrimitive.Portal",
      "data-component-path": "src\\components\\ui\\select.tsx",
      "data-component-line": "72",
      "data-component-file": "select.tsx",
      "data-component-name": "SelectPrimitive.Portal",
      "data-component-content": "%7B%7D",
      children: a.jsxs(st, {
        "data-lov-id": "src\\components\\ui\\select.tsx:73:4",
        "data-lov-name": "SelectPrimitive.Content",
        "data-component-path": "src\\components\\ui\\select.tsx",
        "data-component-line": "73",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Content",
        "data-component-content": "%7B%7D",
        ref: i,
        className: G(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          o,
        ),
        position: e,
        ...r,
        children: [
          a.jsx(pt, {
            "data-lov-id": "src\\components\\ui\\select.tsx:84:6",
            "data-lov-name": "SelectScrollUpButton",
            "data-component-path": "src\\components\\ui\\select.tsx",
            "data-component-line": "84",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectScrollUpButton",
            "data-component-content": "%7B%7D",
          }),
          a.jsx(no, {
            "data-lov-id": "src\\components\\ui\\select.tsx:85:6",
            "data-lov-name": "SelectPrimitive.Viewport",
            "data-component-path": "src\\components\\ui\\select.tsx",
            "data-component-line": "85",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.Viewport",
            "data-component-content": "%7B%7D",
            className: G(
              "p-1",
              e === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: n,
          }),
          a.jsx(mt, {
            "data-lov-id": "src\\components\\ui\\select.tsx:94:6",
            "data-lov-name": "SelectScrollDownButton",
            "data-component-path": "src\\components\\ui\\select.tsx",
            "data-component-line": "94",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectScrollDownButton",
            "data-component-content": "%7B%7D",
          }),
        ],
      }),
    }),
);
co.displayName = st.displayName;
const lo = t.forwardRef(({ className: o, ...n }, e) =>
  a.jsx(rt, {
    "data-lov-id": "src\\components\\ui\\select.tsx:104:2",
    "data-lov-name": "SelectPrimitive.Label",
    "data-component-path": "src\\components\\ui\\select.tsx",
    "data-component-line": "104",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Label",
    "data-component-content": "%7B%7D",
    ref: e,
    className: G("py-1.5 pl-8 pr-2 text-sm font-semibold", o),
    ...n,
  }),
);
lo.displayName = rt.displayName;
const io = t.forwardRef(({ className: o, children: n, ...e }, r) =>
  a.jsxs(ct, {
    "data-lov-id": "src\\components\\ui\\select.tsx:116:2",
    "data-lov-name": "SelectPrimitive.Item",
    "data-component-path": "src\\components\\ui\\select.tsx",
    "data-component-line": "116",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Item",
    "data-component-content": "%7B%7D",
    ref: r,
    className: G(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o,
    ),
    ...e,
    children: [
      a.jsx("span", {
        "data-lov-id": "src\\components\\ui\\select.tsx:124:4",
        "data-lov-name": "span",
        "data-component-path": "src\\components\\ui\\select.tsx",
        "data-component-line": "124",
        "data-component-file": "select.tsx",
        "data-component-name": "span",
        "data-component-content":
          "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(so, {
          "data-lov-id": "src\\components\\ui\\select.tsx:125:6",
          "data-lov-name": "SelectPrimitive.ItemIndicator",
          "data-component-path": "src\\components\\ui\\select.tsx",
          "data-component-line": "125",
          "data-component-file": "select.tsx",
          "data-component-name": "SelectPrimitive.ItemIndicator",
          "data-component-content": "%7B%7D",
          children: a.jsx(Dt, {
            "data-lov-id": "src\\components\\ui\\select.tsx:126:8",
            "data-lov-name": "Check",
            "data-component-path": "src\\components\\ui\\select.tsx",
            "data-component-line": "126",
            "data-component-file": "select.tsx",
            "data-component-name": "Check",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4",
          }),
        }),
      }),
      a.jsx(ao, {
        "data-lov-id": "src\\components\\ui\\select.tsx:130:4",
        "data-lov-name": "SelectPrimitive.ItemText",
        "data-component-path": "src\\components\\ui\\select.tsx",
        "data-component-line": "130",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ItemText",
        "data-component-content": "%7B%7D",
        children: n,
      }),
    ],
  }),
);
io.displayName = ct.displayName;
const po = t.forwardRef(({ className: o, ...n }, e) =>
  a.jsx(dt, {
    "data-lov-id": "src\\components\\ui\\select.tsx:139:2",
    "data-lov-name": "SelectPrimitive.Separator",
    "data-component-path": "src\\components\\ui\\select.tsx",
    "data-component-line": "139",
    "data-component-file": "select.tsx",
    "data-component-name": "SelectPrimitive.Separator",
    "data-component-content": "%7B%7D",
    ref: e,
    className: G("-mx-1 my-1 h-px bg-muted", o),
    ...n,
  }),
);
po.displayName = dt.displayName;
export { go as S, ro as a, wo as b, co as c, io as d };
