import {
  m as _n,
  o as Me,
  M as he,
  j as a,
  N as Rn,
  A as W,
  r as F,
  q as v,
  Q as bn,
  R as Pn,
  P as A,
  W as ge,
  U as In,
  $ as Ce,
  a0 as yn,
  X as Sn,
  Y as Nn,
  Z as En,
  p as An,
  z as ve,
  d as b,
} from "./index-BZzvAVnT.js";
import { r as s } from "./vendor-BgR6OOld.js";
import { u as jn } from "./index-CIr2Jy9Y.js";
import { h as Tn, u as On, F as kn, R as Ln } from "./index-DaXQxPyL.js";
import { c as De, R as Fn, I as Gn } from "./index-DUaPDS5r.js";
import { a7 as Kn, C as Bn, ag as $n } from "./utils-C25gojUd.js";
var oe = ["Enter", " "],
  Un = ["ArrowDown", "PageUp", "Home"],
  _e = ["ArrowUp", "PageDown", "End"],
  Vn = [...Un, ..._e],
  Xn = { ltr: [...oe, "ArrowRight"], rtl: [...oe, "ArrowLeft"] },
  Yn = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  G = "Menu",
  [k, zn, Wn] = _n(G),
  [I, Re] = Me(G, [Wn, he, De]),
  H = he(),
  be = De(),
  [Hn, y] = I(G),
  [Zn, K] = I(G),
  Pe = (e) => {
    const {
        __scopeMenu: o,
        open: n = !1,
        children: t,
        dir: r,
        onOpenChange: c,
        modal: i = !0,
      } = e,
      l = H(o),
      [f, w] = s.useState(null),
      p = s.useRef(!1),
      d = ge(c),
      m = jn(r);
    return (
      s.useEffect(() => {
        const M = () => {
            ((p.current = !0),
              document.addEventListener("pointerdown", x, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", x, {
                capture: !0,
                once: !0,
              }));
          },
          x = () => (p.current = !1);
        return (
          document.addEventListener("keydown", M, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", M, { capture: !0 }),
              document.removeEventListener("pointerdown", x, { capture: !0 }),
              document.removeEventListener("pointermove", x, { capture: !0 }));
          }
        );
      }, []),
      a.jsx(Sn, {
        ...l,
        children: a.jsx(Hn, {
          scope: o,
          open: n,
          onOpenChange: d,
          content: f,
          onContentChange: w,
          children: a.jsx(Zn, {
            scope: o,
            onClose: s.useCallback(() => d(!1), [d]),
            isUsingKeyboardRef: p,
            dir: m,
            modal: i,
            children: t,
          }),
        }),
      })
    );
  };
Pe.displayName = G;
var qn = "MenuAnchor",
  te = s.forwardRef((e, o) => {
    const { __scopeMenu: n, ...t } = e,
      r = H(n);
    return a.jsx(Rn, { ...r, ...t, ref: o });
  });
te.displayName = qn;
var re = "MenuPortal",
  [Qn, Ie] = I(re, { forceMount: void 0 }),
  ye = (e) => {
    const { __scopeMenu: o, forceMount: n, children: t, container: r } = e,
      c = y(re, o);
    return a.jsx(Qn, {
      scope: o,
      forceMount: n,
      children: a.jsx(W, {
        present: n || c.open,
        children: a.jsx(Nn, { asChild: !0, container: r, children: t }),
      }),
    });
  };
ye.displayName = re;
var C = "MenuContent",
  [Jn, ae] = I(C),
  Se = s.forwardRef((e, o) => {
    const n = Ie(C, e.__scopeMenu),
      { forceMount: t = n.forceMount, ...r } = e,
      c = y(C, e.__scopeMenu),
      i = K(C, e.__scopeMenu);
    return a.jsx(k.Provider, {
      scope: e.__scopeMenu,
      children: a.jsx(W, {
        present: t || c.open,
        children: a.jsx(k.Slot, {
          scope: e.__scopeMenu,
          children: i.modal
            ? a.jsx(eo, { ...r, ref: o })
            : a.jsx(no, { ...r, ref: o }),
        }),
      }),
    });
  }),
  eo = s.forwardRef((e, o) => {
    const n = y(C, e.__scopeMenu),
      t = s.useRef(null),
      r = F(o, t);
    return (
      s.useEffect(() => {
        const c = t.current;
        if (c) return Tn(c);
      }, []),
      a.jsx(se, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: v(e.onFocusOutside, (c) => c.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  no = s.forwardRef((e, o) => {
    const n = y(C, e.__scopeMenu);
    return a.jsx(se, {
      ...e,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  oo = En("MenuContent.ScrollLock"),
  se = s.forwardRef((e, o) => {
    const {
        __scopeMenu: n,
        loop: t = !1,
        trapFocus: r,
        onOpenAutoFocus: c,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: l,
        onEntryFocus: f,
        onEscapeKeyDown: w,
        onPointerDownOutside: p,
        onFocusOutside: d,
        onInteractOutside: m,
        onDismiss: M,
        disableOutsideScroll: x,
        ...P
      } = e,
      S = y(C, n),
      j = K(C, n),
      B = H(n),
      $ = be(n),
      ue = zn(n),
      [xn, le] = s.useState(null),
      U = s.useRef(null),
      Mn = F(o, U, S.onContentChange),
      V = s.useRef(0),
      X = s.useRef(""),
      hn = s.useRef(0),
      Q = s.useRef(null),
      pe = s.useRef("right"),
      J = s.useRef(0),
      gn = x ? Ln : s.Fragment,
      Cn = x ? { as: oo, allowPinchZoom: !0 } : void 0,
      Dn = (u) => {
        var E, fe;
        const g = X.current + u,
          D = ue().filter((_) => !_.disabled),
          R = document.activeElement,
          ee =
            (E = D.find((_) => _.ref.current === R)) == null
              ? void 0
              : E.textValue,
          ne = D.map((_) => _.textValue),
          me = wo(ne, g, ee),
          T =
            (fe = D.find((_) => _.textValue === me)) == null
              ? void 0
              : fe.ref.current;
        ((function _(we) {
          ((X.current = we),
            window.clearTimeout(V.current),
            we !== "" && (V.current = window.setTimeout(() => _(""), 1e3)));
        })(g),
          T && setTimeout(() => T.focus()));
      };
    (s.useEffect(() => () => window.clearTimeout(V.current), []), On());
    const N = s.useCallback((u) => {
      var D, R;
      return (
        pe.current === ((D = Q.current) == null ? void 0 : D.side) &&
        xo(u, (R = Q.current) == null ? void 0 : R.area)
      );
    }, []);
    return a.jsx(Jn, {
      scope: n,
      searchRef: X,
      onItemEnter: s.useCallback(
        (u) => {
          N(u) && u.preventDefault();
        },
        [N],
      ),
      onItemLeave: s.useCallback(
        (u) => {
          var g;
          N(u) || ((g = U.current) == null || g.focus(), le(null));
        },
        [N],
      ),
      onTriggerLeave: s.useCallback(
        (u) => {
          N(u) && u.preventDefault();
        },
        [N],
      ),
      pointerGraceTimerRef: hn,
      onPointerGraceIntentChange: s.useCallback((u) => {
        Q.current = u;
      }, []),
      children: a.jsx(gn, {
        ...Cn,
        children: a.jsx(kn, {
          asChild: !0,
          trapped: r,
          onMountAutoFocus: v(c, (u) => {
            var g;
            (u.preventDefault(),
              (g = U.current) == null || g.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: i,
          children: a.jsx(bn, {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onEscapeKeyDown: w,
            onPointerDownOutside: p,
            onFocusOutside: d,
            onInteractOutside: m,
            onDismiss: M,
            children: a.jsx(Fn, {
              asChild: !0,
              ...$,
              dir: j.dir,
              orientation: "vertical",
              loop: t,
              currentTabStopId: xn,
              onCurrentTabStopIdChange: le,
              onEntryFocus: v(f, (u) => {
                j.isUsingKeyboardRef.current || u.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: a.jsx(Pn, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Xe(S.open),
                "data-radix-menu-content": "",
                dir: j.dir,
                ...B,
                ...P,
                ref: Mn,
                style: { outline: "none", ...P.style },
                onKeyDown: v(P.onKeyDown, (u) => {
                  const D =
                      u.target.closest("[data-radix-menu-content]") ===
                      u.currentTarget,
                    R = u.ctrlKey || u.altKey || u.metaKey,
                    ee = u.key.length === 1;
                  D &&
                    (u.key === "Tab" && u.preventDefault(),
                    !R && ee && Dn(u.key));
                  const ne = U.current;
                  if (u.target !== ne || !Vn.includes(u.key)) return;
                  u.preventDefault();
                  const T = ue()
                    .filter((E) => !E.disabled)
                    .map((E) => E.ref.current);
                  (_e.includes(u.key) && T.reverse(), mo(T));
                }),
                onBlur: v(e.onBlur, (u) => {
                  u.currentTarget.contains(u.target) ||
                    (window.clearTimeout(V.current), (X.current = ""));
                }),
                onPointerMove: v(
                  e.onPointerMove,
                  L((u) => {
                    const g = u.target,
                      D = J.current !== u.clientX;
                    if (u.currentTarget.contains(g) && D) {
                      const R = u.clientX > J.current ? "right" : "left";
                      ((pe.current = R), (J.current = u.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
Se.displayName = C;
var to = "MenuGroup",
  ce = s.forwardRef((e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return a.jsx(A.div, { role: "group", ...t, ref: o });
  });
ce.displayName = to;
var ro = "MenuLabel",
  Ne = s.forwardRef((e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return a.jsx(A.div, { ...t, ref: o });
  });
Ne.displayName = ro;
var Y = "MenuItem",
  xe = "menu.itemSelect",
  Z = s.forwardRef((e, o) => {
    const { disabled: n = !1, onSelect: t, ...r } = e,
      c = s.useRef(null),
      i = K(Y, e.__scopeMenu),
      l = ae(Y, e.__scopeMenu),
      f = F(o, c),
      w = s.useRef(!1),
      p = () => {
        const d = c.current;
        if (!n && d) {
          const m = new CustomEvent(xe, { bubbles: !0, cancelable: !0 });
          (d.addEventListener(xe, (M) => (t == null ? void 0 : t(M)), {
            once: !0,
          }),
            yn(d, m),
            m.defaultPrevented ? (w.current = !1) : i.onClose());
        }
      };
    return a.jsx(Ee, {
      ...r,
      ref: f,
      disabled: n,
      onClick: v(e.onClick, p),
      onPointerDown: (d) => {
        var m;
        ((m = e.onPointerDown) == null || m.call(e, d), (w.current = !0));
      },
      onPointerUp: v(e.onPointerUp, (d) => {
        var m;
        w.current || (m = d.currentTarget) == null || m.click();
      }),
      onKeyDown: v(e.onKeyDown, (d) => {
        const m = l.searchRef.current !== "";
        n ||
          (m && d.key === " ") ||
          (oe.includes(d.key) && (d.currentTarget.click(), d.preventDefault()));
      }),
    });
  });
Z.displayName = Y;
var Ee = s.forwardRef((e, o) => {
    const { __scopeMenu: n, disabled: t = !1, textValue: r, ...c } = e,
      i = ae(Y, n),
      l = be(n),
      f = s.useRef(null),
      w = F(o, f),
      [p, d] = s.useState(!1),
      [m, M] = s.useState("");
    return (
      s.useEffect(() => {
        const x = f.current;
        x && M((x.textContent ?? "").trim());
      }, [c.children]),
      a.jsx(k.ItemSlot, {
        scope: n,
        disabled: t,
        textValue: r ?? m,
        children: a.jsx(Gn, {
          asChild: !0,
          ...l,
          focusable: !t,
          children: a.jsx(A.div, {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": t || void 0,
            "data-disabled": t ? "" : void 0,
            ...c,
            ref: w,
            onPointerMove: v(
              e.onPointerMove,
              L((x) => {
                t
                  ? i.onItemLeave(x)
                  : (i.onItemEnter(x),
                    x.defaultPrevented ||
                      x.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: v(
              e.onPointerLeave,
              L((x) => i.onItemLeave(x)),
            ),
            onFocus: v(e.onFocus, () => d(!0)),
            onBlur: v(e.onBlur, () => d(!1)),
          }),
        }),
      })
    );
  }),
  ao = "MenuCheckboxItem",
  Ae = s.forwardRef((e, o) => {
    const { checked: n = !1, onCheckedChange: t, ...r } = e;
    return a.jsx(Le, {
      scope: e.__scopeMenu,
      checked: n,
      children: a.jsx(Z, {
        role: "menuitemcheckbox",
        "aria-checked": z(n) ? "mixed" : n,
        ...r,
        ref: o,
        "data-state": ie(n),
        onSelect: v(
          r.onSelect,
          () => (t == null ? void 0 : t(z(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Ae.displayName = ao;
var je = "MenuRadioGroup",
  [so, co] = I(je, { value: void 0, onValueChange: () => {} }),
  Te = s.forwardRef((e, o) => {
    const { value: n, onValueChange: t, ...r } = e,
      c = ge(t);
    return a.jsx(so, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: c,
      children: a.jsx(ce, { ...r, ref: o }),
    });
  });
Te.displayName = je;
var Oe = "MenuRadioItem",
  ke = s.forwardRef((e, o) => {
    const { value: n, ...t } = e,
      r = co(Oe, e.__scopeMenu),
      c = n === r.value;
    return a.jsx(Le, {
      scope: e.__scopeMenu,
      checked: c,
      children: a.jsx(Z, {
        role: "menuitemradio",
        "aria-checked": c,
        ...t,
        ref: o,
        "data-state": ie(c),
        onSelect: v(
          t.onSelect,
          () => {
            var i;
            return (i = r.onValueChange) == null ? void 0 : i.call(r, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
ke.displayName = Oe;
var de = "MenuItemIndicator",
  [Le, io] = I(de, { checked: !1 }),
  Fe = s.forwardRef((e, o) => {
    const { __scopeMenu: n, forceMount: t, ...r } = e,
      c = io(de, n);
    return a.jsx(W, {
      present: t || z(c.checked) || c.checked === !0,
      children: a.jsx(A.span, { ...r, ref: o, "data-state": ie(c.checked) }),
    });
  });
Fe.displayName = de;
var uo = "MenuSeparator",
  Ge = s.forwardRef((e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return a.jsx(A.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...t,
      ref: o,
    });
  });
Ge.displayName = uo;
var lo = "MenuArrow",
  Ke = s.forwardRef((e, o) => {
    const { __scopeMenu: n, ...t } = e,
      r = H(n);
    return a.jsx(In, { ...r, ...t, ref: o });
  });
Ke.displayName = lo;
var po = "MenuSub",
  [mt, Be] = I(po),
  O = "MenuSubTrigger",
  $e = s.forwardRef((e, o) => {
    const n = y(O, e.__scopeMenu),
      t = K(O, e.__scopeMenu),
      r = Be(O, e.__scopeMenu),
      c = ae(O, e.__scopeMenu),
      i = s.useRef(null),
      { pointerGraceTimerRef: l, onPointerGraceIntentChange: f } = c,
      w = { __scopeMenu: e.__scopeMenu },
      p = s.useCallback(() => {
        (i.current && window.clearTimeout(i.current), (i.current = null));
      }, []);
    return (
      s.useEffect(() => p, [p]),
      s.useEffect(() => {
        const d = l.current;
        return () => {
          (window.clearTimeout(d), f(null));
        };
      }, [l, f]),
      a.jsx(te, {
        asChild: !0,
        ...w,
        children: a.jsx(Ee, {
          id: r.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": r.contentId,
          "data-state": Xe(n.open),
          ...e,
          ref: Ce(o, r.onTriggerChange),
          onClick: (d) => {
            var m;
            ((m = e.onClick) == null || m.call(e, d),
              !(e.disabled || d.defaultPrevented) &&
                (d.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: v(
            e.onPointerMove,
            L((d) => {
              (c.onItemEnter(d),
                !d.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !i.current &&
                  (c.onPointerGraceIntentChange(null),
                  (i.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), p());
                  }, 100))));
            }),
          ),
          onPointerLeave: v(
            e.onPointerLeave,
            L((d) => {
              var M, x;
              p();
              const m =
                (M = n.content) == null ? void 0 : M.getBoundingClientRect();
              if (m) {
                const P = (x = n.content) == null ? void 0 : x.dataset.side,
                  S = P === "right",
                  j = S ? -5 : 5,
                  B = m[S ? "left" : "right"],
                  $ = m[S ? "right" : "left"];
                (c.onPointerGraceIntentChange({
                  area: [
                    { x: d.clientX + j, y: d.clientY },
                    { x: B, y: m.top },
                    { x: $, y: m.top },
                    { x: $, y: m.bottom },
                    { x: B, y: m.bottom },
                  ],
                  side: P,
                }),
                  window.clearTimeout(l.current),
                  (l.current = window.setTimeout(
                    () => c.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((c.onTriggerLeave(d), d.defaultPrevented)) return;
                c.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: v(e.onKeyDown, (d) => {
            var M;
            const m = c.searchRef.current !== "";
            e.disabled ||
              (m && d.key === " ") ||
              (Xn[t.dir].includes(d.key) &&
                (n.onOpenChange(!0),
                (M = n.content) == null || M.focus(),
                d.preventDefault()));
          }),
        }),
      })
    );
  });
$e.displayName = O;
var Ue = "MenuSubContent",
  Ve = s.forwardRef((e, o) => {
    const n = Ie(C, e.__scopeMenu),
      { forceMount: t = n.forceMount, ...r } = e,
      c = y(C, e.__scopeMenu),
      i = K(C, e.__scopeMenu),
      l = Be(Ue, e.__scopeMenu),
      f = s.useRef(null),
      w = F(o, f);
    return a.jsx(k.Provider, {
      scope: e.__scopeMenu,
      children: a.jsx(W, {
        present: t || c.open,
        children: a.jsx(k.Slot, {
          scope: e.__scopeMenu,
          children: a.jsx(se, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...r,
            ref: w,
            align: "start",
            side: i.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (p) => {
              var d;
              (i.isUsingKeyboardRef.current &&
                ((d = f.current) == null || d.focus()),
                p.preventDefault());
            },
            onCloseAutoFocus: (p) => p.preventDefault(),
            onFocusOutside: v(e.onFocusOutside, (p) => {
              p.target !== l.trigger && c.onOpenChange(!1);
            }),
            onEscapeKeyDown: v(e.onEscapeKeyDown, (p) => {
              (i.onClose(), p.preventDefault());
            }),
            onKeyDown: v(e.onKeyDown, (p) => {
              var M;
              const d = p.currentTarget.contains(p.target),
                m = Yn[i.dir].includes(p.key);
              d &&
                m &&
                (c.onOpenChange(!1),
                (M = l.trigger) == null || M.focus(),
                p.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Ve.displayName = Ue;
function Xe(e) {
  return e ? "open" : "closed";
}
function z(e) {
  return e === "indeterminate";
}
function ie(e) {
  return z(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function mo(e) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus(), document.activeElement !== o)) return;
}
function fo(e, o) {
  return e.map((n, t) => e[(o + t) % e.length]);
}
function wo(e, o, n) {
  const r = o.length > 1 && Array.from(o).every((w) => w === o[0]) ? o[0] : o,
    c = n ? e.indexOf(n) : -1;
  let i = fo(e, Math.max(c, 0));
  r.length === 1 && (i = i.filter((w) => w !== n));
  const f = i.find((w) => w.toLowerCase().startsWith(r.toLowerCase()));
  return f !== n ? f : void 0;
}
function vo(e, o) {
  const { x: n, y: t } = e;
  let r = !1;
  for (let c = 0, i = o.length - 1; c < o.length; i = c++) {
    const l = o[c],
      f = o[i],
      w = l.x,
      p = l.y,
      d = f.x,
      m = f.y;
    p > t != m > t && n < ((d - w) * (t - p)) / (m - p) + w && (r = !r);
  }
  return r;
}
function xo(e, o) {
  if (!o) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return vo(n, o);
}
function L(e) {
  return (o) => (o.pointerType === "mouse" ? e(o) : void 0);
}
var Mo = Pe,
  ho = te,
  go = ye,
  Co = Se,
  Do = ce,
  _o = Ne,
  Ro = Z,
  bo = Ae,
  Po = Te,
  Io = ke,
  yo = Fe,
  So = Ge,
  No = Ke,
  Eo = $e,
  Ao = Ve,
  q = "DropdownMenu",
  [jo, ft] = Me(q, [Re]),
  h = Re(),
  [To, Ye] = jo(q),
  ze = (e) => {
    const {
        __scopeDropdownMenu: o,
        children: n,
        dir: t,
        open: r,
        defaultOpen: c,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      f = h(o),
      w = s.useRef(null),
      [p, d] = An({ prop: r, defaultProp: c ?? !1, onChange: i, caller: q });
    return a.jsx(To, {
      scope: o,
      triggerId: ve(),
      triggerRef: w,
      contentId: ve(),
      open: p,
      onOpenChange: d,
      onOpenToggle: s.useCallback(() => d((m) => !m), [d]),
      modal: l,
      children: a.jsx(Mo, {
        ...f,
        open: p,
        onOpenChange: d,
        dir: t,
        modal: l,
        children: n,
      }),
    });
  };
ze.displayName = q;
var We = "DropdownMenuTrigger",
  He = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, disabled: t = !1, ...r } = e,
      c = Ye(We, n),
      i = h(n);
    return a.jsx(ho, {
      asChild: !0,
      ...i,
      children: a.jsx(A.button, {
        type: "button",
        id: c.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": c.open,
        "aria-controls": c.open ? c.contentId : void 0,
        "data-state": c.open ? "open" : "closed",
        "data-disabled": t ? "" : void 0,
        disabled: t,
        ...r,
        ref: Ce(o, c.triggerRef),
        onPointerDown: v(e.onPointerDown, (l) => {
          !t &&
            l.button === 0 &&
            l.ctrlKey === !1 &&
            (c.onOpenToggle(), c.open || l.preventDefault());
        }),
        onKeyDown: v(e.onKeyDown, (l) => {
          t ||
            (["Enter", " "].includes(l.key) && c.onOpenToggle(),
            l.key === "ArrowDown" && c.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        }),
      }),
    });
  });
He.displayName = We;
var Oo = "DropdownMenuPortal",
  Ze = (e) => {
    const { __scopeDropdownMenu: o, ...n } = e,
      t = h(o);
    return a.jsx(go, { ...t, ...n });
  };
Ze.displayName = Oo;
var qe = "DropdownMenuContent",
  Qe = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = Ye(qe, n),
      c = h(n),
      i = s.useRef(!1);
    return a.jsx(Co, {
      id: r.contentId,
      "aria-labelledby": r.triggerId,
      ...c,
      ...t,
      ref: o,
      onCloseAutoFocus: v(e.onCloseAutoFocus, (l) => {
        var f;
        (i.current || (f = r.triggerRef.current) == null || f.focus(),
          (i.current = !1),
          l.preventDefault());
      }),
      onInteractOutside: v(e.onInteractOutside, (l) => {
        const f = l.detail.originalEvent,
          w = f.button === 0 && f.ctrlKey === !0,
          p = f.button === 2 || w;
        (!r.modal || p) && (i.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Qe.displayName = qe;
var ko = "DropdownMenuGroup",
  Lo = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Do, { ...r, ...t, ref: o });
  });
Lo.displayName = ko;
var Fo = "DropdownMenuLabel",
  Je = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(_o, { ...r, ...t, ref: o });
  });
Je.displayName = Fo;
var Go = "DropdownMenuItem",
  en = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Ro, { ...r, ...t, ref: o });
  });
en.displayName = Go;
var Ko = "DropdownMenuCheckboxItem",
  nn = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(bo, { ...r, ...t, ref: o });
  });
nn.displayName = Ko;
var Bo = "DropdownMenuRadioGroup",
  $o = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Po, { ...r, ...t, ref: o });
  });
$o.displayName = Bo;
var Uo = "DropdownMenuRadioItem",
  on = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Io, { ...r, ...t, ref: o });
  });
on.displayName = Uo;
var Vo = "DropdownMenuItemIndicator",
  tn = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(yo, { ...r, ...t, ref: o });
  });
tn.displayName = Vo;
var Xo = "DropdownMenuSeparator",
  rn = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(So, { ...r, ...t, ref: o });
  });
rn.displayName = Xo;
var Yo = "DropdownMenuArrow",
  zo = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(No, { ...r, ...t, ref: o });
  });
zo.displayName = Yo;
var Wo = "DropdownMenuSubTrigger",
  an = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Eo, { ...r, ...t, ref: o });
  });
an.displayName = Wo;
var Ho = "DropdownMenuSubContent",
  sn = s.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e,
      r = h(n);
    return a.jsx(Ao, {
      ...r,
      ...t,
      ref: o,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
sn.displayName = Ho;
var Zo = ze,
  qo = He,
  Qo = Ze,
  cn = Qe,
  dn = Je,
  un = en,
  ln = nn,
  pn = on,
  mn = tn,
  fn = rn,
  wn = an,
  vn = sn;
const wt = Zo,
  vt = qo,
  Jo = s.forwardRef(({ className: e, inset: o, children: n, ...t }, r) =>
    a.jsxs(wn, {
      "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:25:2",
      "data-lov-name": "DropdownMenuPrimitive.SubTrigger",
      "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
      "data-component-line": "25",
      "data-component-file": "dropdown-menu.tsx",
      "data-component-name": "DropdownMenuPrimitive.SubTrigger",
      "data-component-content": "%7B%7D",
      ref: r,
      className: b(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        o && "pl-8",
        e,
      ),
      ...t,
      children: [
        n,
        a.jsx(Kn, {
          "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:35:4",
          "data-lov-name": "ChevronRight",
          "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
          "data-component-line": "35",
          "data-component-file": "dropdown-menu.tsx",
          "data-component-name": "ChevronRight",
          "data-component-content":
            "%7B%22className%22%3A%22ml-auto%20h-4%20w-4%22%7D",
          className: "ml-auto h-4 w-4",
        }),
      ],
    }),
  );
Jo.displayName = wn.displayName;
const et = s.forwardRef(({ className: e, ...o }, n) =>
  a.jsx(vn, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:45:2",
    "data-lov-name": "DropdownMenuPrimitive.SubContent",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "45",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.SubContent",
    "data-component-content": "%7B%7D",
    ref: n,
    className: b(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
    ),
    ...o,
  }),
);
et.displayName = vn.displayName;
const nt = s.forwardRef(({ className: e, sideOffset: o = 4, ...n }, t) =>
  a.jsx(Qo, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:61:2",
    "data-lov-name": "DropdownMenuPrimitive.Portal",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "61",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.Portal",
    "data-component-content": "%7B%7D",
    children: a.jsx(cn, {
      "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:62:4",
      "data-lov-name": "DropdownMenuPrimitive.Content",
      "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
      "data-component-line": "62",
      "data-component-file": "dropdown-menu.tsx",
      "data-component-name": "DropdownMenuPrimitive.Content",
      "data-component-content": "%7B%7D",
      ref: t,
      sideOffset: o,
      className: b(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  }),
);
nt.displayName = cn.displayName;
const ot = s.forwardRef(({ className: e, inset: o, ...n }, t) =>
  a.jsx(un, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:81:2",
    "data-lov-name": "DropdownMenuPrimitive.Item",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "81",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.Item",
    "data-component-content": "%7B%7D",
    ref: t,
    className: b(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o && "pl-8",
      e,
    ),
    ...n,
  }),
);
ot.displayName = un.displayName;
const tt = s.forwardRef(({ className: e, children: o, checked: n, ...t }, r) =>
  a.jsxs(ln, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:97:2",
    "data-lov-name": "DropdownMenuPrimitive.CheckboxItem",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "97",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.CheckboxItem",
    "data-component-content": "%7B%7D",
    ref: r,
    className: b(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: n,
    ...t,
    children: [
      a.jsx("span", {
        "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:106:4",
        "data-lov-name": "span",
        "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
        "data-component-line": "106",
        "data-component-file": "dropdown-menu.tsx",
        "data-component-name": "span",
        "data-component-content":
          "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(mn, {
          "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:107:6",
          "data-lov-name": "DropdownMenuPrimitive.ItemIndicator",
          "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
          "data-component-line": "107",
          "data-component-file": "dropdown-menu.tsx",
          "data-component-name": "DropdownMenuPrimitive.ItemIndicator",
          "data-component-content": "%7B%7D",
          children: a.jsx(Bn, {
            "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:108:8",
            "data-lov-name": "Check",
            "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
            "data-component-line": "108",
            "data-component-file": "dropdown-menu.tsx",
            "data-component-name": "Check",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4",
          }),
        }),
      }),
      o,
    ],
  }),
);
tt.displayName = ln.displayName;
const rt = s.forwardRef(({ className: e, children: o, ...n }, t) =>
  a.jsxs(pn, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:121:2",
    "data-lov-name": "DropdownMenuPrimitive.RadioItem",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "121",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.RadioItem",
    "data-component-content": "%7B%7D",
    ref: t,
    className: b(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      a.jsx("span", {
        "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:129:4",
        "data-lov-name": "span",
        "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
        "data-component-line": "129",
        "data-component-file": "dropdown-menu.tsx",
        "data-component-name": "span",
        "data-component-content":
          "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(mn, {
          "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:130:6",
          "data-lov-name": "DropdownMenuPrimitive.ItemIndicator",
          "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
          "data-component-line": "130",
          "data-component-file": "dropdown-menu.tsx",
          "data-component-name": "DropdownMenuPrimitive.ItemIndicator",
          "data-component-content": "%7B%7D",
          children: a.jsx($n, {
            "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:131:8",
            "data-lov-name": "Circle",
            "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
            "data-component-line": "131",
            "data-component-file": "dropdown-menu.tsx",
            "data-component-name": "Circle",
            "data-component-content":
              "%7B%22className%22%3A%22h-2%20w-2%20fill-current%22%7D",
            className: "h-2 w-2 fill-current",
          }),
        }),
      }),
      o,
    ],
  }),
);
rt.displayName = pn.displayName;
const at = s.forwardRef(({ className: e, inset: o, ...n }, t) =>
  a.jsx(dn, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:145:2",
    "data-lov-name": "DropdownMenuPrimitive.Label",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "145",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.Label",
    "data-component-content": "%7B%7D",
    ref: t,
    className: b("px-2 py-1.5 text-sm font-semibold", o && "pl-8", e),
    ...n,
  }),
);
at.displayName = dn.displayName;
const st = s.forwardRef(({ className: e, ...o }, n) =>
  a.jsx(fn, {
    "data-lov-id": "src\\components\\ui\\dropdown-menu.tsx:161:2",
    "data-lov-name": "DropdownMenuPrimitive.Separator",
    "data-component-path": "src\\components\\ui\\dropdown-menu.tsx",
    "data-component-line": "161",
    "data-component-file": "dropdown-menu.tsx",
    "data-component-name": "DropdownMenuPrimitive.Separator",
    "data-component-content": "%7B%7D",
    ref: n,
    className: b("-mx-1 my-1 h-px bg-muted", e),
    ...o,
  }),
);
st.displayName = fn.displayName;
export { wt as D, vt as a, nt as b, ot as c, st as d };
