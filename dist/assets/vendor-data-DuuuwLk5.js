var Ms = (s) => {
  throw TypeError(s);
};
var is = (s, e, t) => e.has(s) || Ms("Cannot " + t);
var c = (s, e, t) => (
    is(s, e, "read from private field"),
    t ? t.call(s) : e.get(s)
  ),
  O = (s, e, t) =>
    e.has(s)
      ? Ms("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(s)
        : e.set(s, t),
  _ = (s, e, t, r) => (
    is(s, e, "write to private field"),
    r ? r.call(s, t) : e.set(s, t),
    t
  ),
  R = (s, e, t) => (is(s, e, "access private method"), t);
var qt = (s, e, t, r) => ({
  set _(i) {
    _(s, e, i, t);
  },
  get _() {
    return c(s, e, r);
  },
});
import { r as M } from "./vendor-react-DfYPWlel.js";
var $r = { exports: {} },
  Zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = M,
  di = Symbol.for("react.element"),
  fi = Symbol.for("react.fragment"),
  pi = Object.prototype.hasOwnProperty,
  gi = hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yi = { key: !0, ref: !0, __self: !0, __source: !0 };
function xr(s, e, t) {
  var r,
    i = {},
    n = null,
    a = null;
  (t !== void 0 && (n = "" + t),
    e.key !== void 0 && (n = "" + e.key),
    e.ref !== void 0 && (a = e.ref));
  for (r in e) pi.call(e, r) && !yi.hasOwnProperty(r) && (i[r] = e[r]);
  if (s && s.defaultProps)
    for (r in ((e = s.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: di,
    type: s,
    key: n,
    ref: a,
    props: i,
    _owner: gi.current,
  };
}
Zt.Fragment = fi;
Zt.jsx = xr;
Zt.jsxs = xr;
$r.exports = Zt;
var vi = $r.exports,
  vt = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(s) {
      return (
        this.listeners.add(s),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(s), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ve = typeof window > "u" || "Deno" in globalThis;
function z() {}
function mi(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function fs(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function Ur(s, e) {
  return Math.max(s + (e || 0) - Date.now(), 0);
}
function Pe(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function ee(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function Ks(s, e) {
  const {
    type: t = "all",
    exact: r,
    fetchStatus: i,
    predicate: n,
    queryKey: a,
    stale: o,
  } = s;
  if (a) {
    if (r) {
      if (e.queryHash !== Ls(a, e.options)) return !1;
    } else if (!Ot(e.queryKey, a)) return !1;
  }
  if (t !== "all") {
    const l = e.isActive();
    if ((t === "active" && !l) || (t === "inactive" && l)) return !1;
  }
  return !(
    (typeof o == "boolean" && e.isStale() !== o) ||
    (i && i !== e.state.fetchStatus) ||
    (n && !n(e))
  );
}
function Ws(s, e) {
  const { exact: t, status: r, predicate: i, mutationKey: n } = s;
  if (n) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (Ge(e.options.mutationKey) !== Ge(n)) return !1;
    } else if (!Ot(e.options.mutationKey, n)) return !1;
  }
  return !((r && e.state.status !== r) || (i && !i(e)));
}
function Ls(s, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Ge)(s);
}
function Ge(s) {
  return JSON.stringify(s, (e, t) =>
    ps(t)
      ? Object.keys(t)
          .sort()
          .reduce((r, i) => ((r[i] = t[i]), r), {})
      : t,
  );
}
function Ot(s, e) {
  return s === e
    ? !0
    : typeof s != typeof e
      ? !1
      : s && e && typeof s == "object" && typeof e == "object"
        ? Object.keys(e).every((t) => Ot(s[t], e[t]))
        : !1;
}
function Lr(s, e) {
  if (s === e) return s;
  const t = Hs(s) && Hs(e);
  if (t || (ps(s) && ps(e))) {
    const r = t ? s : Object.keys(s),
      i = r.length,
      n = t ? e : Object.keys(e),
      a = n.length,
      o = t ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let h = 0; h < a; h++) {
      const f = t ? h : n[h];
      ((!t && l.has(f)) || t) && s[f] === void 0 && e[f] === void 0
        ? ((o[f] = void 0), u++)
        : ((o[f] = Lr(s[f], e[f])), o[f] === s[f] && s[f] !== void 0 && u++);
    }
    return i === a && u === i ? s : o;
  }
  return e;
}
function zt(s, e) {
  if (!e || Object.keys(s).length !== Object.keys(e).length) return !1;
  for (const t in s) if (s[t] !== e[t]) return !1;
  return !0;
}
function Hs(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function ps(s) {
  if (!Vs(s)) return !1;
  const e = s.constructor;
  if (e === void 0) return !0;
  const t = e.prototype;
  return !(
    !Vs(t) ||
    !t.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(s) !== Object.prototype
  );
}
function Vs(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function wi(s) {
  return new Promise((e) => {
    setTimeout(e, s);
  });
}
function gs(s, e, t) {
  return typeof t.structuralSharing == "function"
    ? t.structuralSharing(s, e)
    : t.structuralSharing !== !1
      ? Lr(s, e)
      : e;
}
function bi(s, e, t = 0) {
  const r = [...s, e];
  return t && r.length > t ? r.slice(1) : r;
}
function _i(s, e, t = 0) {
  const r = [e, ...s];
  return t && r.length > t ? r.slice(0, -1) : r;
}
var Ds = Symbol();
function Dr(s, e) {
  return !s.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !s.queryFn || s.queryFn === Ds
      ? () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`))
      : s.queryFn;
}
function Nr(s, e) {
  return typeof s == "function" ? s(...e) : !!s;
}
var De,
  we,
  nt,
  kr,
  Si =
    ((kr = class extends vt {
      constructor() {
        super();
        O(this, De);
        O(this, we);
        O(this, nt);
        _(this, nt, (e) => {
          if (!Ve && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        });
      }
      onSubscribe() {
        c(this, we) || this.setEventListener(c(this, nt));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = c(this, we)) == null || e.call(this), _(this, we, void 0));
      }
      setEventListener(e) {
        var t;
        (_(this, nt, e),
          (t = c(this, we)) == null || t.call(this),
          _(
            this,
            we,
            e((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(e) {
        c(this, De) !== e && (_(this, De, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((t) => {
          t(e);
        });
      }
      isFocused() {
        var e;
        return typeof c(this, De) == "boolean"
          ? c(this, De)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (De = new WeakMap()),
    (we = new WeakMap()),
    (nt = new WeakMap()),
    kr),
  Ns = new Si(),
  at,
  be,
  ot,
  Er,
  ki =
    ((Er = class extends vt {
      constructor() {
        super();
        O(this, at, !0);
        O(this, be);
        O(this, ot);
        _(this, ot, (e) => {
          if (!Ve && window.addEventListener) {
            const t = () => e(!0),
              r = () => e(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", t),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        c(this, be) || this.setEventListener(c(this, ot));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = c(this, be)) == null || e.call(this), _(this, be, void 0));
      }
      setEventListener(e) {
        var t;
        (_(this, ot, e),
          (t = c(this, be)) == null || t.call(this),
          _(this, be, e(this.setOnline.bind(this))));
      }
      setOnline(e) {
        c(this, at) !== e &&
          (_(this, at, e),
          this.listeners.forEach((r) => {
            r(e);
          }));
      }
      isOnline() {
        return c(this, at);
      }
    }),
    (at = new WeakMap()),
    (be = new WeakMap()),
    (ot = new WeakMap()),
    Er),
  Jt = new ki();
function ys() {
  let s, e;
  const t = new Promise((i, n) => {
    ((s = i), (e = n));
  });
  ((t.status = "pending"), t.catch(() => {}));
  function r(i) {
    (Object.assign(t, i), delete t.resolve, delete t.reject);
  }
  return (
    (t.resolve = (i) => {
      (r({ status: "fulfilled", value: i }), s(i));
    }),
    (t.reject = (i) => {
      (r({ status: "rejected", reason: i }), e(i));
    }),
    t
  );
}
function Ei(s) {
  return Math.min(1e3 * 2 ** s, 3e4);
}
function qr(s) {
  return (s ?? "online") === "online" ? Jt.isOnline() : !0;
}
var Br = class extends Error {
  constructor(s) {
    (super("CancelledError"),
      (this.revert = s == null ? void 0 : s.revert),
      (this.silent = s == null ? void 0 : s.silent));
  }
};
function ns(s) {
  return s instanceof Br;
}
function Fr(s) {
  let e = !1,
    t = 0,
    r = !1,
    i;
  const n = ys(),
    a = (y) => {
      var v;
      r || (p(new Br(y)), (v = s.abort) == null || v.call(s));
    },
    o = () => {
      e = !0;
    },
    l = () => {
      e = !1;
    },
    u = () =>
      Ns.isFocused() &&
      (s.networkMode === "always" || Jt.isOnline()) &&
      s.canRun(),
    h = () => qr(s.networkMode) && s.canRun(),
    f = (y) => {
      var v;
      r ||
        ((r = !0),
        (v = s.onSuccess) == null || v.call(s, y),
        i == null || i(),
        n.resolve(y));
    },
    p = (y) => {
      var v;
      r ||
        ((r = !0),
        (v = s.onError) == null || v.call(s, y),
        i == null || i(),
        n.reject(y));
    },
    d = () =>
      new Promise((y) => {
        var v;
        ((i = (w) => {
          (r || u()) && y(w);
        }),
          (v = s.onPause) == null || v.call(s));
      }).then(() => {
        var y;
        ((i = void 0), r || (y = s.onContinue) == null || y.call(s));
      }),
    g = () => {
      if (r) return;
      let y;
      const v = t === 0 ? s.initialPromise : void 0;
      try {
        y = v ?? s.fn();
      } catch (w) {
        y = Promise.reject(w);
      }
      Promise.resolve(y)
        .then(f)
        .catch((w) => {
          var A;
          if (r) return;
          const b = s.retry ?? (Ve ? 0 : 3),
            m = s.retryDelay ?? Ei,
            k = typeof m == "function" ? m(t, w) : m,
            C =
              b === !0 ||
              (typeof b == "number" && t < b) ||
              (typeof b == "function" && b(t, w));
          if (e || !C) {
            p(w);
            return;
          }
          (t++,
            (A = s.onFail) == null || A.call(s, t, w),
            wi(k)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                e ? p(w) : g();
              }));
        });
    };
  return {
    promise: n,
    cancel: a,
    continue: () => (i == null || i(), n),
    cancelRetry: o,
    continueRetry: l,
    canStart: h,
    start: () => (h() ? g() : d().then(g), n),
  };
}
var Oi = (s) => setTimeout(s, 0);
function Ti() {
  let s = [],
    e = 0,
    t = (o) => {
      o();
    },
    r = (o) => {
      o();
    },
    i = Oi;
  const n = (o) => {
      e
        ? s.push(o)
        : i(() => {
            t(o);
          });
    },
    a = () => {
      const o = s;
      ((s = []),
        o.length &&
          i(() => {
            r(() => {
              o.forEach((l) => {
                t(l);
              });
            });
          }));
    };
  return {
    batch: (o) => {
      let l;
      e++;
      try {
        l = o();
      } finally {
        (e--, e || a());
      }
      return l;
    },
    batchCalls:
      (o) =>
      (...l) => {
        n(() => {
          o(...l);
        });
      },
    schedule: n,
    setNotifyFunction: (o) => {
      t = o;
    },
    setBatchNotifyFunction: (o) => {
      r = o;
    },
    setScheduler: (o) => {
      i = o;
    },
  };
}
var F = Ti(),
  Ne,
  Or,
  Mr =
    ((Or = class {
      constructor() {
        O(this, Ne);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          fs(this.gcTime) &&
            _(
              this,
              Ne,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(s) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          s ?? (Ve ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        c(this, Ne) && (clearTimeout(c(this, Ne)), _(this, Ne, void 0));
      }
    }),
    (Ne = new WeakMap()),
    Or),
  lt,
  qe,
  Z,
  Be,
  H,
  $t,
  Fe,
  re,
  ce,
  Tr,
  Ri =
    ((Tr = class extends Mr {
      constructor(e) {
        super();
        O(this, re);
        O(this, lt);
        O(this, qe);
        O(this, Z);
        O(this, Be);
        O(this, H);
        O(this, $t);
        O(this, Fe);
        (_(this, Fe, !1),
          _(this, $t, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          _(this, Be, e.client),
          _(this, Z, c(this, Be).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          _(this, lt, Ai(this.options)),
          (this.state = e.state ?? c(this, lt)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = c(this, H)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        ((this.options = { ...c(this, $t), ...e }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          c(this, Z).remove(this);
      }
      setData(e, t) {
        const r = gs(this.state.data, e, this.options);
        return (
          R(this, re, ce).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: t == null ? void 0 : t.updatedAt,
            manual: t == null ? void 0 : t.manual,
          }),
          r
        );
      }
      setState(e, t) {
        R(this, re, ce).call(this, {
          type: "setState",
          state: e,
          setStateOptions: t,
        });
      }
      cancel(e) {
        var r, i;
        const t = (r = c(this, H)) == null ? void 0 : r.promise;
        return (
          (i = c(this, H)) == null || i.cancel(e),
          t ? t.then(z).catch(z) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(c(this, lt)));
      }
      isActive() {
        return this.observers.some((e) => ee(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ds ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => Pe(e.options.staleTime, this) === "static",
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
              : !Ur(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var t;
        const e = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (t = c(this, H)) == null || t.continue());
      }
      onOnline() {
        var t;
        const e = this.observers.find((r) => r.shouldFetchOnReconnect());
        (e == null || e.refetch({ cancelRefetch: !1 }),
          (t = c(this, H)) == null || t.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          c(this, Z).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((t) => t !== e)),
          this.observers.length ||
            (c(this, H) &&
              (c(this, Fe)
                ? c(this, H).cancel({ revert: !0 })
                : c(this, H).cancelRetry()),
            this.scheduleGc()),
          c(this, Z).notify({
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
          R(this, re, ce).call(this, { type: "invalidate" });
      }
      fetch(e, t) {
        var u, h, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && t != null && t.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (c(this, H))
            return (c(this, H).continueRetry(), c(this, H).promise);
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const p = this.observers.find((d) => d.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          i = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (_(this, Fe, !0), r.signal),
            });
          },
          n = () => {
            const p = Dr(this.options, t),
              g = (() => {
                const y = {
                  client: c(this, Be),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (i(y), y);
              })();
            return (
              _(this, Fe, !1),
              this.options.persister ? this.options.persister(p, g, this) : p(g)
            );
          },
          o = (() => {
            const p = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              client: c(this, Be),
              state: this.state,
              fetchFn: n,
            };
            return (i(p), p);
          })();
        ((u = this.options.behavior) == null || u.onFetch(o, this),
          _(this, qe, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((h = o.fetchOptions) == null ? void 0 : h.meta)) &&
            R(this, re, ce).call(this, {
              type: "fetch",
              meta: (f = o.fetchOptions) == null ? void 0 : f.meta,
            }));
        const l = (p) => {
          var d, g, y, v;
          ((ns(p) && p.silent) ||
            R(this, re, ce).call(this, { type: "error", error: p }),
            ns(p) ||
              ((g = (d = c(this, Z).config).onError) == null ||
                g.call(d, p, this),
              (v = (y = c(this, Z).config).onSettled) == null ||
                v.call(y, this.state.data, p, this)),
            this.scheduleGc());
        };
        return (
          _(
            this,
            H,
            Fr({
              initialPromise: t == null ? void 0 : t.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var d, g, y, v;
                if (p === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (w) {
                  l(w);
                  return;
                }
                ((g = (d = c(this, Z).config).onSuccess) == null ||
                  g.call(d, p, this),
                  (v = (y = c(this, Z).config).onSettled) == null ||
                    v.call(y, p, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (p, d) => {
                R(this, re, ce).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: d,
                });
              },
              onPause: () => {
                R(this, re, ce).call(this, { type: "pause" });
              },
              onContinue: () => {
                R(this, re, ce).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            }),
          ),
          c(this, H).start()
        );
      }
    }),
    (lt = new WeakMap()),
    (qe = new WeakMap()),
    (Z = new WeakMap()),
    (Be = new WeakMap()),
    (H = new WeakMap()),
    ($t = new WeakMap()),
    (Fe = new WeakMap()),
    (re = new WeakSet()),
    (ce = function (e) {
      const t = (r) => {
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
              ...Kr(r.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            return (
              _(this, qe, void 0),
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
            const i = e.error;
            return ns(i) && i.revert && c(this, qe)
              ? { ...c(this, qe), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...e.state };
        }
      };
      ((this.state = t(this.state)),
        F.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            c(this, Z).notify({ query: this, type: "updated", action: e }));
        }));
    }),
    Tr);
function Kr(s, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qr(e.networkMode) ? "fetching" : "paused",
    ...(s === void 0 && { error: null, status: "pending" }),
  };
}
function Ai(s) {
  const e =
      typeof s.initialData == "function" ? s.initialData() : s.initialData,
    t = e !== void 0,
    r = t
      ? typeof s.initialDataUpdatedAt == "function"
        ? s.initialDataUpdatedAt()
        : s.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: t ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: t ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var ae,
  Rr,
  Pi =
    ((Rr = class extends vt {
      constructor(e = {}) {
        super();
        O(this, ae);
        ((this.config = e), _(this, ae, new Map()));
      }
      build(e, t, r) {
        const i = t.queryKey,
          n = t.queryHash ?? Ls(i, t);
        let a = this.get(n);
        return (
          a ||
            ((a = new Ri({
              client: e,
              queryKey: i,
              queryHash: n,
              options: e.defaultQueryOptions(t),
              state: r,
              defaultOptions: e.getQueryDefaults(i),
            })),
            this.add(a)),
          a
        );
      }
      add(e) {
        c(this, ae).has(e.queryHash) ||
          (c(this, ae).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const t = c(this, ae).get(e.queryHash);
        t &&
          (e.destroy(),
          t === e && c(this, ae).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        F.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return c(this, ae).get(e);
      }
      getAll() {
        return [...c(this, ae).values()];
      }
      find(e) {
        const t = { exact: !0, ...e };
        return this.getAll().find((r) => Ks(t, r));
      }
      findAll(e = {}) {
        const t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter((r) => Ks(e, r)) : t;
      }
      notify(e) {
        F.batch(() => {
          this.listeners.forEach((t) => {
            t(e);
          });
        });
      }
      onFocus() {
        F.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        F.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (ae = new WeakMap()),
    Rr),
  oe,
  V,
  Me,
  le,
  ye,
  Ar,
  Ci =
    ((Ar = class extends Mr {
      constructor(e) {
        super();
        O(this, le);
        O(this, oe);
        O(this, V);
        O(this, Me);
        ((this.mutationId = e.mutationId),
          _(this, V, e.mutationCache),
          _(this, oe, []),
          (this.state = e.state || Wr()),
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
        c(this, oe).includes(e) ||
          (c(this, oe).push(e),
          this.clearGcTimeout(),
          c(this, V).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        (_(
          this,
          oe,
          c(this, oe).filter((t) => t !== e),
        ),
          this.scheduleGc(),
          c(this, V).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          }));
      }
      optionalRemove() {
        c(this, oe).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : c(this, V).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = c(this, Me)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var n, a, o, l, u, h, f, p, d, g, y, v, w, b, m, k, C, A, x, U;
        const t = () => {
          R(this, le, ye).call(this, { type: "continue" });
        };
        _(
          this,
          Me,
          Fr({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (I, N) => {
              R(this, le, ye).call(this, {
                type: "failed",
                failureCount: I,
                error: N,
              });
            },
            onPause: () => {
              R(this, le, ye).call(this, { type: "pause" });
            },
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => c(this, V).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          i = !c(this, Me).canStart();
        try {
          if (r) t();
          else {
            (R(this, le, ye).call(this, {
              type: "pending",
              variables: e,
              isPaused: i,
            }),
              await ((a = (n = c(this, V).config).onMutate) == null
                ? void 0
                : a.call(n, e, this)));
            const N = await ((l = (o = this.options).onMutate) == null
              ? void 0
              : l.call(o, e));
            N !== this.state.context &&
              R(this, le, ye).call(this, {
                type: "pending",
                context: N,
                variables: e,
                isPaused: i,
              });
          }
          const I = await c(this, Me).start();
          return (
            await ((h = (u = c(this, V).config).onSuccess) == null
              ? void 0
              : h.call(u, I, e, this.state.context, this)),
            await ((p = (f = this.options).onSuccess) == null
              ? void 0
              : p.call(f, I, e, this.state.context)),
            await ((g = (d = c(this, V).config).onSettled) == null
              ? void 0
              : g.call(
                  d,
                  I,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((v = (y = this.options).onSettled) == null
              ? void 0
              : v.call(y, I, null, e, this.state.context)),
            R(this, le, ye).call(this, { type: "success", data: I }),
            I
          );
        } catch (I) {
          try {
            throw (
              await ((b = (w = c(this, V).config).onError) == null
                ? void 0
                : b.call(w, I, e, this.state.context, this)),
              await ((k = (m = this.options).onError) == null
                ? void 0
                : k.call(m, I, e, this.state.context)),
              await ((A = (C = c(this, V).config).onSettled) == null
                ? void 0
                : A.call(
                    C,
                    void 0,
                    I,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((U = (x = this.options).onSettled) == null
                ? void 0
                : U.call(x, void 0, I, e, this.state.context)),
              I
            );
          } finally {
            R(this, le, ye).call(this, { type: "error", error: I });
          }
        } finally {
          c(this, V).runNext(this);
        }
      }
    }),
    (oe = new WeakMap()),
    (V = new WeakMap()),
    (Me = new WeakMap()),
    (le = new WeakSet()),
    (ye = function (e) {
      const t = (r) => {
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
      ((this.state = t(this.state)),
        F.batch(() => {
          (c(this, oe).forEach((r) => {
            r.onMutationUpdate(e);
          }),
            c(this, V).notify({ mutation: this, type: "updated", action: e }));
        }));
    }),
    Ar);
function Wr() {
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
var de,
  ie,
  xt,
  Pr,
  Ii =
    ((Pr = class extends vt {
      constructor(e = {}) {
        super();
        O(this, de);
        O(this, ie);
        O(this, xt);
        ((this.config = e),
          _(this, de, new Set()),
          _(this, ie, new Map()),
          _(this, xt, 0));
      }
      build(e, t, r) {
        const i = new Ci({
          mutationCache: this,
          mutationId: ++qt(this, xt)._,
          options: e.defaultMutationOptions(t),
          state: r,
        });
        return (this.add(i), i);
      }
      add(e) {
        c(this, de).add(e);
        const t = Bt(e);
        if (typeof t == "string") {
          const r = c(this, ie).get(t);
          r ? r.push(e) : c(this, ie).set(t, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if (c(this, de).delete(e)) {
          const t = Bt(e);
          if (typeof t == "string") {
            const r = c(this, ie).get(t);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(e);
                i !== -1 && r.splice(i, 1);
              } else r[0] === e && c(this, ie).delete(t);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const t = Bt(e);
        if (typeof t == "string") {
          const r = c(this, ie).get(t),
            i =
              r == null ? void 0 : r.find((n) => n.state.status === "pending");
          return !i || i === e;
        } else return !0;
      }
      runNext(e) {
        var r;
        const t = Bt(e);
        if (typeof t == "string") {
          const i =
            (r = c(this, ie).get(t)) == null
              ? void 0
              : r.find((n) => n !== e && n.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        F.batch(() => {
          (c(this, de).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            c(this, de).clear(),
            c(this, ie).clear());
        });
      }
      getAll() {
        return Array.from(c(this, de));
      }
      find(e) {
        const t = { exact: !0, ...e };
        return this.getAll().find((r) => Ws(t, r));
      }
      findAll(e = {}) {
        return this.getAll().filter((t) => Ws(e, t));
      }
      notify(e) {
        F.batch(() => {
          this.listeners.forEach((t) => {
            t(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((t) => t.state.isPaused);
        return F.batch(() => Promise.all(e.map((t) => t.continue().catch(z))));
      }
    }),
    (de = new WeakMap()),
    (ie = new WeakMap()),
    (xt = new WeakMap()),
    Pr);
function Bt(s) {
  var e;
  return (e = s.options.scope) == null ? void 0 : e.id;
}
function Gs(s) {
  return {
    onFetch: (e, t) => {
      var h, f, p, d, g;
      const r = e.options,
        i =
          (p =
            (f = (h = e.fetchOptions) == null ? void 0 : h.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : p.direction,
        n = ((d = e.state.data) == null ? void 0 : d.pages) || [],
        a = ((g = e.state.data) == null ? void 0 : g.pageParams) || [];
      let o = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let y = !1;
        const v = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (y = !0)
                  : e.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                e.signal
              ),
            });
          },
          w = Dr(e.options, e.fetchOptions),
          b = async (m, k, C) => {
            if (y) return Promise.reject();
            if (k == null && m.pages.length) return Promise.resolve(m);
            const x = (() => {
                const Ce = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: k,
                  direction: C ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return (v(Ce), Ce);
              })(),
              U = await w(x),
              { maxPages: I } = e.options,
              N = C ? _i : bi;
            return {
              pages: N(m.pages, U, I),
              pageParams: N(m.pageParams, k, I),
            };
          };
        if (i && n.length) {
          const m = i === "backward",
            k = m ? ji : zs,
            C = { pages: n, pageParams: a },
            A = k(r, C);
          o = await b(C, A, m);
        } else {
          const m = s ?? n.length;
          do {
            const k = l === 0 ? (a[0] ?? r.initialPageParam) : zs(r, o);
            if (l > 0 && k == null) break;
            ((o = await b(o, k)), l++);
          } while (l < m);
        }
        return o;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var y, v;
            return (v = (y = e.options).persister) == null
              ? void 0
              : v.call(
                  y,
                  u,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  t,
                );
          })
        : (e.fetchFn = u);
    },
  };
}
function zs(s, { pages: e, pageParams: t }) {
  const r = e.length - 1;
  return e.length > 0 ? s.getNextPageParam(e[r], e, t[r], t) : void 0;
}
function ji(s, { pages: e, pageParams: t }) {
  var r;
  return e.length > 0
    ? (r = s.getPreviousPageParam) == null
      ? void 0
      : r.call(s, e[0], e, t[0], t)
    : void 0;
}
var L,
  _e,
  Se,
  ut,
  ct,
  ke,
  ht,
  dt,
  Cr,
  Ro =
    ((Cr = class {
      constructor(s = {}) {
        O(this, L);
        O(this, _e);
        O(this, Se);
        O(this, ut);
        O(this, ct);
        O(this, ke);
        O(this, ht);
        O(this, dt);
        (_(this, L, s.queryCache || new Pi()),
          _(this, _e, s.mutationCache || new Ii()),
          _(this, Se, s.defaultOptions || {}),
          _(this, ut, new Map()),
          _(this, ct, new Map()),
          _(this, ke, 0));
      }
      mount() {
        (qt(this, ke)._++,
          c(this, ke) === 1 &&
            (_(
              this,
              ht,
              Ns.subscribe(async (s) => {
                s && (await this.resumePausedMutations(), c(this, L).onFocus());
              }),
            ),
            _(
              this,
              dt,
              Jt.subscribe(async (s) => {
                s &&
                  (await this.resumePausedMutations(), c(this, L).onOnline());
              }),
            )));
      }
      unmount() {
        var s, e;
        (qt(this, ke)._--,
          c(this, ke) === 0 &&
            ((s = c(this, ht)) == null || s.call(this),
            _(this, ht, void 0),
            (e = c(this, dt)) == null || e.call(this),
            _(this, dt, void 0)));
      }
      isFetching(s) {
        return c(this, L).findAll({ ...s, fetchStatus: "fetching" }).length;
      }
      isMutating(s) {
        return c(this, _e).findAll({ ...s, status: "pending" }).length;
      }
      getQueryData(s) {
        var t;
        const e = this.defaultQueryOptions({ queryKey: s });
        return (t = c(this, L).get(e.queryHash)) == null
          ? void 0
          : t.state.data;
      }
      ensureQueryData(s) {
        const e = this.defaultQueryOptions(s),
          t = c(this, L).build(this, e),
          r = t.state.data;
        return r === void 0
          ? this.fetchQuery(s)
          : (s.revalidateIfStale &&
              t.isStaleByTime(Pe(e.staleTime, t)) &&
              this.prefetchQuery(e),
            Promise.resolve(r));
      }
      getQueriesData(s) {
        return c(this, L)
          .findAll(s)
          .map(({ queryKey: e, state: t }) => {
            const r = t.data;
            return [e, r];
          });
      }
      setQueryData(s, e, t) {
        const r = this.defaultQueryOptions({ queryKey: s }),
          i = c(this, L).get(r.queryHash),
          n = i == null ? void 0 : i.state.data,
          a = mi(e, n);
        if (a !== void 0)
          return c(this, L)
            .build(this, r)
            .setData(a, { ...t, manual: !0 });
      }
      setQueriesData(s, e, t) {
        return F.batch(() =>
          c(this, L)
            .findAll(s)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, e, t)]),
        );
      }
      getQueryState(s) {
        var t;
        const e = this.defaultQueryOptions({ queryKey: s });
        return (t = c(this, L).get(e.queryHash)) == null ? void 0 : t.state;
      }
      removeQueries(s) {
        const e = c(this, L);
        F.batch(() => {
          e.findAll(s).forEach((t) => {
            e.remove(t);
          });
        });
      }
      resetQueries(s, e) {
        const t = c(this, L);
        return F.batch(
          () => (
            t.findAll(s).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...s }, e)
          ),
        );
      }
      cancelQueries(s, e = {}) {
        const t = { revert: !0, ...e },
          r = F.batch(() =>
            c(this, L)
              .findAll(s)
              .map((i) => i.cancel(t)),
          );
        return Promise.all(r).then(z).catch(z);
      }
      invalidateQueries(s, e = {}) {
        return F.batch(
          () => (
            c(this, L)
              .findAll(s)
              .forEach((t) => {
                t.invalidate();
              }),
            (s == null ? void 0 : s.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...s,
                    type:
                      (s == null ? void 0 : s.refetchType) ??
                      (s == null ? void 0 : s.type) ??
                      "active",
                  },
                  e,
                )
          ),
        );
      }
      refetchQueries(s, e = {}) {
        const t = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          r = F.batch(() =>
            c(this, L)
              .findAll(s)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let n = i.fetch(void 0, t);
                return (
                  t.throwOnError || (n = n.catch(z)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : n
                );
              }),
          );
        return Promise.all(r).then(z);
      }
      fetchQuery(s) {
        const e = this.defaultQueryOptions(s);
        e.retry === void 0 && (e.retry = !1);
        const t = c(this, L).build(this, e);
        return t.isStaleByTime(Pe(e.staleTime, t))
          ? t.fetch(e)
          : Promise.resolve(t.state.data);
      }
      prefetchQuery(s) {
        return this.fetchQuery(s).then(z).catch(z);
      }
      fetchInfiniteQuery(s) {
        return ((s.behavior = Gs(s.pages)), this.fetchQuery(s));
      }
      prefetchInfiniteQuery(s) {
        return this.fetchInfiniteQuery(s).then(z).catch(z);
      }
      ensureInfiniteQueryData(s) {
        return ((s.behavior = Gs(s.pages)), this.ensureQueryData(s));
      }
      resumePausedMutations() {
        return Jt.isOnline()
          ? c(this, _e).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return c(this, L);
      }
      getMutationCache() {
        return c(this, _e);
      }
      getDefaultOptions() {
        return c(this, Se);
      }
      setDefaultOptions(s) {
        _(this, Se, s);
      }
      setQueryDefaults(s, e) {
        c(this, ut).set(Ge(s), { queryKey: s, defaultOptions: e });
      }
      getQueryDefaults(s) {
        const e = [...c(this, ut).values()],
          t = {};
        return (
          e.forEach((r) => {
            Ot(s, r.queryKey) && Object.assign(t, r.defaultOptions);
          }),
          t
        );
      }
      setMutationDefaults(s, e) {
        c(this, ct).set(Ge(s), { mutationKey: s, defaultOptions: e });
      }
      getMutationDefaults(s) {
        const e = [...c(this, ct).values()],
          t = {};
        return (
          e.forEach((r) => {
            Ot(s, r.mutationKey) && Object.assign(t, r.defaultOptions);
          }),
          t
        );
      }
      defaultQueryOptions(s) {
        if (s._defaulted) return s;
        const e = {
          ...c(this, Se).queries,
          ...this.getQueryDefaults(s.queryKey),
          ...s,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = Ls(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === Ds && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(s) {
        return s != null && s._defaulted
          ? s
          : {
              ...c(this, Se).mutations,
              ...((s == null ? void 0 : s.mutationKey) &&
                this.getMutationDefaults(s.mutationKey)),
              ...s,
              _defaulted: !0,
            };
      }
      clear() {
        (c(this, L).clear(), c(this, _e).clear());
      }
    }),
    (L = new WeakMap()),
    (_e = new WeakMap()),
    (Se = new WeakMap()),
    (ut = new WeakMap()),
    (ct = new WeakMap()),
    (ke = new WeakMap()),
    (ht = new WeakMap()),
    (dt = new WeakMap()),
    Cr),
  J,
  P,
  Ut,
  G,
  Ke,
  ft,
  Ee,
  Oe,
  Lt,
  pt,
  gt,
  We,
  He,
  Te,
  yt,
  j,
  bt,
  vs,
  ms,
  ws,
  bs,
  _s,
  Ss,
  ks,
  Hr,
  Ir,
  $i =
    ((Ir = class extends vt {
      constructor(e, t) {
        super();
        O(this, j);
        O(this, J);
        O(this, P);
        O(this, Ut);
        O(this, G);
        O(this, Ke);
        O(this, ft);
        O(this, Ee);
        O(this, Oe);
        O(this, Lt);
        O(this, pt);
        O(this, gt);
        O(this, We);
        O(this, He);
        O(this, Te);
        O(this, yt, new Set());
        ((this.options = t),
          _(this, J, e),
          _(this, Oe, null),
          _(this, Ee, ys()),
          this.options.experimental_prefetchInRender ||
            c(this, Ee).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(t));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (c(this, P).addObserver(this),
          Js(c(this, P), this.options)
            ? R(this, j, bt).call(this)
            : this.updateResult(),
          R(this, j, bs).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Es(c(this, P), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Es(c(this, P), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          R(this, j, _s).call(this),
          R(this, j, Ss).call(this),
          c(this, P).removeObserver(this));
      }
      setOptions(e) {
        const t = this.options,
          r = c(this, P);
        if (
          ((this.options = c(this, J).defaultQueryOptions(e)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof ee(this.options.enabled, c(this, P)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        (R(this, j, ks).call(this),
          c(this, P).setOptions(this.options),
          t._defaulted &&
            !zt(this.options, t) &&
            c(this, J)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: c(this, P),
                observer: this,
              }));
        const i = this.hasListeners();
        (i && Qs(c(this, P), r, this.options, t) && R(this, j, bt).call(this),
          this.updateResult(),
          i &&
            (c(this, P) !== r ||
              ee(this.options.enabled, c(this, P)) !==
                ee(t.enabled, c(this, P)) ||
              Pe(this.options.staleTime, c(this, P)) !==
                Pe(t.staleTime, c(this, P))) &&
            R(this, j, vs).call(this));
        const n = R(this, j, ms).call(this);
        i &&
          (c(this, P) !== r ||
            ee(this.options.enabled, c(this, P)) !==
              ee(t.enabled, c(this, P)) ||
            n !== c(this, Te)) &&
          R(this, j, ws).call(this, n);
      }
      getOptimisticResult(e) {
        const t = c(this, J).getQueryCache().build(c(this, J), e),
          r = this.createResult(t, e);
        return (
          Ui(this, r) &&
            (_(this, G, r),
            _(this, ft, this.options),
            _(this, Ke, c(this, P).state)),
          r
        );
      }
      getCurrentResult() {
        return c(this, G);
      }
      trackResult(e, t) {
        return new Proxy(e, {
          get: (r, i) => (
            this.trackProp(i),
            t == null || t(i),
            Reflect.get(r, i)
          ),
        });
      }
      trackProp(e) {
        c(this, yt).add(e);
      }
      getCurrentQuery() {
        return c(this, P);
      }
      refetch({ ...e } = {}) {
        return this.fetch({ ...e });
      }
      fetchOptimistic(e) {
        const t = c(this, J).defaultQueryOptions(e),
          r = c(this, J).getQueryCache().build(c(this, J), t);
        return r.fetch().then(() => this.createResult(r, t));
      }
      fetch(e) {
        return R(this, j, bt)
          .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), c(this, G)));
      }
      createResult(e, t) {
        var I;
        const r = c(this, P),
          i = this.options,
          n = c(this, G),
          a = c(this, Ke),
          o = c(this, ft),
          u = e !== r ? e.state : c(this, Ut),
          { state: h } = e;
        let f = { ...h },
          p = !1,
          d;
        if (t._optimisticResults) {
          const N = this.hasListeners(),
            Ce = !N && Js(e, t),
            ze = N && Qs(e, r, t, i);
          ((Ce || ze) && (f = { ...f, ...Kr(h.data, e.options) }),
            t._optimisticResults === "isRestoring" && (f.fetchStatus = "idle"));
        }
        let { error: g, errorUpdatedAt: y, status: v } = f;
        d = f.data;
        let w = !1;
        if (t.placeholderData !== void 0 && d === void 0 && v === "pending") {
          let N;
          (n != null &&
          n.isPlaceholderData &&
          t.placeholderData === (o == null ? void 0 : o.placeholderData)
            ? ((N = n.data), (w = !0))
            : (N =
                typeof t.placeholderData == "function"
                  ? t.placeholderData(
                      (I = c(this, gt)) == null ? void 0 : I.state.data,
                      c(this, gt),
                    )
                  : t.placeholderData),
            N !== void 0 &&
              ((v = "success"),
              (d = gs(n == null ? void 0 : n.data, N, t)),
              (p = !0)));
        }
        if (t.select && d !== void 0 && !w)
          if (
            n &&
            d === (a == null ? void 0 : a.data) &&
            t.select === c(this, Lt)
          )
            d = c(this, pt);
          else
            try {
              (_(this, Lt, t.select),
                (d = t.select(d)),
                (d = gs(n == null ? void 0 : n.data, d, t)),
                _(this, pt, d),
                _(this, Oe, null));
            } catch (N) {
              _(this, Oe, N);
            }
        c(this, Oe) &&
          ((g = c(this, Oe)),
          (d = c(this, pt)),
          (y = Date.now()),
          (v = "error"));
        const b = f.fetchStatus === "fetching",
          m = v === "pending",
          k = v === "error",
          C = m && b,
          A = d !== void 0,
          U = {
            status: v,
            fetchStatus: f.fetchStatus,
            isPending: m,
            isSuccess: v === "success",
            isError: k,
            isInitialLoading: C,
            isLoading: C,
            data: d,
            dataUpdatedAt: f.dataUpdatedAt,
            error: g,
            errorUpdatedAt: y,
            failureCount: f.fetchFailureCount,
            failureReason: f.fetchFailureReason,
            errorUpdateCount: f.errorUpdateCount,
            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
            isFetchedAfterMount:
              f.dataUpdateCount > u.dataUpdateCount ||
              f.errorUpdateCount > u.errorUpdateCount,
            isFetching: b,
            isRefetching: b && !m,
            isLoadingError: k && !A,
            isPaused: f.fetchStatus === "paused",
            isPlaceholderData: p,
            isRefetchError: k && A,
            isStale: qs(e, t),
            refetch: this.refetch,
            promise: c(this, Ee),
            isEnabled: ee(t.enabled, e) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const N = (Nt) => {
              U.status === "error"
                ? Nt.reject(U.error)
                : U.data !== void 0 && Nt.resolve(U.data);
            },
            Ce = () => {
              const Nt = _(this, Ee, (U.promise = ys()));
              N(Nt);
            },
            ze = c(this, Ee);
          switch (ze.status) {
            case "pending":
              e.queryHash === r.queryHash && N(ze);
              break;
            case "fulfilled":
              (U.status === "error" || U.data !== ze.value) && Ce();
              break;
            case "rejected":
              (U.status !== "error" || U.error !== ze.reason) && Ce();
              break;
          }
        }
        return U;
      }
      updateResult() {
        const e = c(this, G),
          t = this.createResult(c(this, P), this.options);
        if (
          (_(this, Ke, c(this, P).state),
          _(this, ft, this.options),
          c(this, Ke).data !== void 0 && _(this, gt, c(this, P)),
          zt(t, e))
        )
          return;
        _(this, G, t);
        const r = () => {
          if (!e) return !0;
          const { notifyOnChangeProps: i } = this.options,
            n = typeof i == "function" ? i() : i;
          if (n === "all" || (!n && !c(this, yt).size)) return !0;
          const a = new Set(n ?? c(this, yt));
          return (
            this.options.throwOnError && a.add("error"),
            Object.keys(c(this, G)).some((o) => {
              const l = o;
              return c(this, G)[l] !== e[l] && a.has(l);
            })
          );
        };
        R(this, j, Hr).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        (this.updateResult(), this.hasListeners() && R(this, j, bs).call(this));
      }
    }),
    (J = new WeakMap()),
    (P = new WeakMap()),
    (Ut = new WeakMap()),
    (G = new WeakMap()),
    (Ke = new WeakMap()),
    (ft = new WeakMap()),
    (Ee = new WeakMap()),
    (Oe = new WeakMap()),
    (Lt = new WeakMap()),
    (pt = new WeakMap()),
    (gt = new WeakMap()),
    (We = new WeakMap()),
    (He = new WeakMap()),
    (Te = new WeakMap()),
    (yt = new WeakMap()),
    (j = new WeakSet()),
    (bt = function (e) {
      R(this, j, ks).call(this);
      let t = c(this, P).fetch(this.options, e);
      return ((e != null && e.throwOnError) || (t = t.catch(z)), t);
    }),
    (vs = function () {
      R(this, j, _s).call(this);
      const e = Pe(this.options.staleTime, c(this, P));
      if (Ve || c(this, G).isStale || !fs(e)) return;
      const r = Ur(c(this, G).dataUpdatedAt, e) + 1;
      _(
        this,
        We,
        setTimeout(() => {
          c(this, G).isStale || this.updateResult();
        }, r),
      );
    }),
    (ms = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(c(this, P))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (ws = function (e) {
      (R(this, j, Ss).call(this),
        _(this, Te, e),
        !(
          Ve ||
          ee(this.options.enabled, c(this, P)) === !1 ||
          !fs(c(this, Te)) ||
          c(this, Te) === 0
        ) &&
          _(
            this,
            He,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Ns.isFocused()) &&
                  R(this, j, bt).call(this);
              },
              c(this, Te),
            ),
          ));
    }),
    (bs = function () {
      (R(this, j, vs).call(this),
        R(this, j, ws).call(this, R(this, j, ms).call(this)));
    }),
    (_s = function () {
      c(this, We) && (clearTimeout(c(this, We)), _(this, We, void 0));
    }),
    (Ss = function () {
      c(this, He) && (clearInterval(c(this, He)), _(this, He, void 0));
    }),
    (ks = function () {
      const e = c(this, J).getQueryCache().build(c(this, J), this.options);
      if (e === c(this, P)) return;
      const t = c(this, P);
      (_(this, P, e),
        _(this, Ut, e.state),
        this.hasListeners() &&
          (t == null || t.removeObserver(this), e.addObserver(this)));
    }),
    (Hr = function (e) {
      F.batch(() => {
        (e.listeners &&
          this.listeners.forEach((t) => {
            t(c(this, G));
          }),
          c(this, J)
            .getQueryCache()
            .notify({ query: c(this, P), type: "observerResultsUpdated" }));
      });
    }),
    Ir);
function xi(s, e) {
  return (
    ee(e.enabled, s) !== !1 &&
    s.state.data === void 0 &&
    !(s.state.status === "error" && e.retryOnMount === !1)
  );
}
function Js(s, e) {
  return xi(s, e) || (s.state.data !== void 0 && Es(s, e, e.refetchOnMount));
}
function Es(s, e, t) {
  if (ee(e.enabled, s) !== !1 && Pe(e.staleTime, s) !== "static") {
    const r = typeof t == "function" ? t(s) : t;
    return r === "always" || (r !== !1 && qs(s, e));
  }
  return !1;
}
function Qs(s, e, t, r) {
  return (
    (s !== e || ee(r.enabled, s) === !1) &&
    (!t.suspense || s.state.status !== "error") &&
    qs(s, t)
  );
}
function qs(s, e) {
  return ee(e.enabled, s) !== !1 && s.isStaleByTime(Pe(e.staleTime, s));
}
function Ui(s, e) {
  return !zt(s.getCurrentResult(), e);
}
var Re,
  Ae,
  Q,
  fe,
  pe,
  Gt,
  Os,
  jr,
  Li =
    ((jr = class extends vt {
      constructor(e, t) {
        super();
        O(this, pe);
        O(this, Re);
        O(this, Ae);
        O(this, Q);
        O(this, fe);
        (_(this, Re, e),
          this.setOptions(t),
          this.bindMethods(),
          R(this, pe, Gt).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(e) {
        var r;
        const t = this.options;
        ((this.options = c(this, Re).defaultMutationOptions(e)),
          zt(this.options, t) ||
            c(this, Re)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: c(this, Q),
                observer: this,
              }),
          t != null &&
          t.mutationKey &&
          this.options.mutationKey &&
          Ge(t.mutationKey) !== Ge(this.options.mutationKey)
            ? this.reset()
            : ((r = c(this, Q)) == null ? void 0 : r.state.status) ===
                "pending" && c(this, Q).setOptions(this.options));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          (e = c(this, Q)) == null ||
          e.removeObserver(this);
      }
      onMutationUpdate(e) {
        (R(this, pe, Gt).call(this), R(this, pe, Os).call(this, e));
      }
      getCurrentResult() {
        return c(this, Ae);
      }
      reset() {
        var e;
        ((e = c(this, Q)) == null || e.removeObserver(this),
          _(this, Q, void 0),
          R(this, pe, Gt).call(this),
          R(this, pe, Os).call(this));
      }
      mutate(e, t) {
        var r;
        return (
          _(this, fe, t),
          (r = c(this, Q)) == null || r.removeObserver(this),
          _(
            this,
            Q,
            c(this, Re).getMutationCache().build(c(this, Re), this.options),
          ),
          c(this, Q).addObserver(this),
          c(this, Q).execute(e)
        );
      }
    }),
    (Re = new WeakMap()),
    (Ae = new WeakMap()),
    (Q = new WeakMap()),
    (fe = new WeakMap()),
    (pe = new WeakSet()),
    (Gt = function () {
      var t;
      const e = ((t = c(this, Q)) == null ? void 0 : t.state) ?? Wr();
      _(this, Ae, {
        ...e,
        isPending: e.status === "pending",
        isSuccess: e.status === "success",
        isError: e.status === "error",
        isIdle: e.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Os = function (e) {
      F.batch(() => {
        var t, r, i, n, a, o, l, u;
        if (c(this, fe) && this.hasListeners()) {
          const h = c(this, Ae).variables,
            f = c(this, Ae).context;
          (e == null ? void 0 : e.type) === "success"
            ? ((r = (t = c(this, fe)).onSuccess) == null ||
                r.call(t, e.data, h, f),
              (n = (i = c(this, fe)).onSettled) == null ||
                n.call(i, e.data, null, h, f))
            : (e == null ? void 0 : e.type) === "error" &&
              ((o = (a = c(this, fe)).onError) == null ||
                o.call(a, e.error, h, f),
              (u = (l = c(this, fe)).onSettled) == null ||
                u.call(l, void 0, e.error, h, f));
        }
        this.listeners.forEach((h) => {
          h(c(this, Ae));
        });
      });
    }),
    jr),
  Vr = M.createContext(void 0),
  Gr = (s) => {
    const e = M.useContext(Vr);
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  Ao = ({ client: s, children: e }) => (
    M.useEffect(
      () => (
        s.mount(),
        () => {
          s.unmount();
        }
      ),
      [s],
    ),
    vi.jsx(Vr.Provider, { value: s, children: e })
  ),
  zr = M.createContext(!1),
  Di = () => M.useContext(zr);
zr.Provider;
function Ni() {
  let s = !1;
  return {
    clearReset: () => {
      s = !1;
    },
    reset: () => {
      s = !0;
    },
    isReset: () => s,
  };
}
var qi = M.createContext(Ni()),
  Bi = () => M.useContext(qi),
  Fi = (s, e) => {
    (s.suspense || s.throwOnError || s.experimental_prefetchInRender) &&
      (e.isReset() || (s.retryOnMount = !1));
  },
  Mi = (s) => {
    M.useEffect(() => {
      s.clearReset();
    }, [s]);
  },
  Ki = ({
    result: s,
    errorResetBoundary: e,
    throwOnError: t,
    query: r,
    suspense: i,
  }) =>
    s.isError &&
    !e.isReset() &&
    !s.isFetching &&
    r &&
    ((i && s.data === void 0) || Nr(t, [s.error, r])),
  Wi = (s) => {
    if (s.suspense) {
      const e = (r) => (r === "static" ? r : Math.max(r ?? 1e3, 1e3)),
        t = s.staleTime;
      ((s.staleTime = typeof t == "function" ? (...r) => e(t(...r)) : e(t)),
        typeof s.gcTime == "number" && (s.gcTime = Math.max(s.gcTime, 1e3)));
    }
  },
  Hi = (s, e) => s.isLoading && s.isFetching && !e,
  Vi = (s, e) => (s == null ? void 0 : s.suspense) && e.isPending,
  Ys = (s, e, t) =>
    e.fetchOptimistic(s).catch(() => {
      t.clearReset();
    });
function Gi(s, e, t) {
  var f, p, d, g, y;
  const r = Di(),
    i = Bi(),
    n = Gr(),
    a = n.defaultQueryOptions(s);
  ((p =
    (f = n.getDefaultOptions().queries) == null
      ? void 0
      : f._experimental_beforeQuery) == null || p.call(f, a),
    (a._optimisticResults = r ? "isRestoring" : "optimistic"),
    Wi(a),
    Fi(a, i),
    Mi(i));
  const o = !n.getQueryCache().get(a.queryHash),
    [l] = M.useState(() => new e(n, a)),
    u = l.getOptimisticResult(a),
    h = !r && s.subscribed !== !1;
  if (
    (M.useSyncExternalStore(
      M.useCallback(
        (v) => {
          const w = h ? l.subscribe(F.batchCalls(v)) : z;
          return (l.updateResult(), w);
        },
        [l, h],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    M.useEffect(() => {
      l.setOptions(a);
    }, [a, l]),
    Vi(a, u))
  )
    throw Ys(a, l, i);
  if (
    Ki({
      result: u,
      errorResetBoundary: i,
      throwOnError: a.throwOnError,
      query: n.getQueryCache().get(a.queryHash),
      suspense: a.suspense,
    })
  )
    throw u.error;
  if (
    ((g =
      (d = n.getDefaultOptions().queries) == null
        ? void 0
        : d._experimental_afterQuery) == null || g.call(d, a, u),
    a.experimental_prefetchInRender && !Ve && Hi(u, r))
  ) {
    const v = o
      ? Ys(a, l, i)
      : (y = n.getQueryCache().get(a.queryHash)) == null
        ? void 0
        : y.promise;
    v == null ||
      v.catch(z).finally(() => {
        l.updateResult();
      });
  }
  return a.notifyOnChangeProps ? u : l.trackResult(u);
}
function Po(s, e) {
  return Gi(s, $i);
}
function Co(s, e) {
  const t = Gr(),
    [r] = M.useState(() => new Li(t, s));
  M.useEffect(() => {
    r.setOptions(s);
  }, [r, s]);
  const i = M.useSyncExternalStore(
      M.useCallback((a) => r.subscribe(F.batchCalls(a)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    n = M.useCallback(
      (a, o) => {
        r.mutate(a, o).catch(z);
      },
      [r],
    );
  if (i.error && Nr(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: n, mutateAsync: i.mutate };
}
var Xs = function () {
  return (
    (Xs =
      Object.assign ||
      function (e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) {
          t = arguments[r];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    Xs.apply(this, arguments)
  );
};
function es(s, e) {
  var t = {};
  for (var r in s)
    Object.prototype.hasOwnProperty.call(s, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(s); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, r[i]) &&
        (t[r[i]] = s[r[i]]);
  return t;
}
function zi(s, e, t, r) {
  function i(n) {
    return n instanceof t
      ? n
      : new t(function (a) {
          a(n);
        });
  }
  return new (t || (t = Promise))(function (n, a) {
    function o(h) {
      try {
        u(r.next(h));
      } catch (f) {
        a(f);
      }
    }
    function l(h) {
      try {
        u(r.throw(h));
      } catch (f) {
        a(f);
      }
    }
    function u(h) {
      h.done ? n(h.value) : i(h.value).then(o, l);
    }
    u((r = r.apply(s, e || [])).next());
  });
}
function Io(s, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = e.length, n; r < i; r++)
      (n || !(r in e)) &&
        (n || (n = Array.prototype.slice.call(e, 0, r)), (n[r] = e[r]));
  return s.concat(n || Array.prototype.slice.call(e));
}
const Ji = (s) => (s ? (...e) => s(...e) : (...e) => fetch(...e));
class Bs extends Error {
  constructor(e, t = "FunctionsError", r) {
    (super(e), (this.name = t), (this.context = r));
  }
}
class Qi extends Bs {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e,
    );
  }
}
class Zs extends Bs {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class er extends Bs {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e,
    );
  }
}
var Ts;
(function (s) {
  ((s.Any = "any"),
    (s.ApNortheast1 = "ap-northeast-1"),
    (s.ApNortheast2 = "ap-northeast-2"),
    (s.ApSouth1 = "ap-south-1"),
    (s.ApSoutheast1 = "ap-southeast-1"),
    (s.ApSoutheast2 = "ap-southeast-2"),
    (s.CaCentral1 = "ca-central-1"),
    (s.EuCentral1 = "eu-central-1"),
    (s.EuWest1 = "eu-west-1"),
    (s.EuWest2 = "eu-west-2"),
    (s.EuWest3 = "eu-west-3"),
    (s.SaEast1 = "sa-east-1"),
    (s.UsEast1 = "us-east-1"),
    (s.UsWest1 = "us-west-1"),
    (s.UsWest2 = "us-west-2"));
})(Ts || (Ts = {}));
class Yi {
  constructor(e, { headers: t = {}, customFetch: r, region: i = Ts.Any } = {}) {
    ((this.url = e),
      (this.headers = t),
      (this.region = i),
      (this.fetch = Ji(r)));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return zi(this, arguments, void 0, function* (t, r = {}) {
      var i;
      let n, a;
      try {
        const { headers: o, method: l, body: u, signal: h, timeout: f } = r;
        let p = {},
          { region: d } = r;
        d || (d = this.region);
        const g = new URL(`${this.url}/${t}`);
        d &&
          d !== "any" &&
          ((p["x-region"] = d), g.searchParams.set("forceFunctionRegion", d));
        let y;
        u &&
        ((o && !Object.prototype.hasOwnProperty.call(o, "Content-Type")) || !o)
          ? (typeof Blob < "u" && u instanceof Blob) || u instanceof ArrayBuffer
            ? ((p["Content-Type"] = "application/octet-stream"), (y = u))
            : typeof u == "string"
              ? ((p["Content-Type"] = "text/plain"), (y = u))
              : typeof FormData < "u" && u instanceof FormData
                ? (y = u)
                : ((p["Content-Type"] = "application/json"),
                  (y = JSON.stringify(u)))
          : u &&
              typeof u != "string" &&
              !(typeof Blob < "u" && u instanceof Blob) &&
              !(u instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && u instanceof FormData)
            ? (y = JSON.stringify(u))
            : (y = u);
        let v = h;
        f &&
          ((a = new AbortController()),
          (n = setTimeout(() => a.abort(), f)),
          h
            ? ((v = a.signal), h.addEventListener("abort", () => a.abort()))
            : (v = a.signal));
        const w = yield this.fetch(g.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, p), this.headers),
              o,
            ),
            body: y,
            signal: v,
          }).catch((C) => {
            throw new Qi(C);
          }),
          b = w.headers.get("x-relay-error");
        if (b && b === "true") throw new Zs(w);
        if (!w.ok) throw new er(w);
        let m = (
            (i = w.headers.get("Content-Type")) !== null && i !== void 0
              ? i
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          k;
        return (
          m === "application/json"
            ? (k = yield w.json())
            : m === "application/octet-stream" || m === "application/pdf"
              ? (k = yield w.blob())
              : m === "text/event-stream"
                ? (k = w)
                : m === "multipart/form-data"
                  ? (k = yield w.formData())
                  : (k = yield w.text()),
          { data: k, error: null, response: w }
        );
      } catch (o) {
        return {
          data: null,
          error: o,
          response: o instanceof er || o instanceof Zs ? o.context : void 0,
        };
      } finally {
        n && clearTimeout(n);
      }
    });
  }
}
var Xi = class extends Error {
    constructor(s) {
      (super(s.message),
        (this.name = "PostgrestError"),
        (this.details = s.details),
        (this.hint = s.hint),
        (this.code = s.code));
    }
  },
  Zi = class {
    constructor(s) {
      var e, t, r;
      ((this.shouldThrowOnError = !1),
        (this.method = s.method),
        (this.url = s.url),
        (this.headers = new Headers(s.headers)),
        (this.schema = s.schema),
        (this.body = s.body),
        (this.shouldThrowOnError =
          (e = s.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
        (this.signal = s.signal),
        (this.isMaybeSingle =
          (t = s.isMaybeSingle) !== null && t !== void 0 ? t : !1),
        (this.urlLengthLimit =
          (r = s.urlLengthLimit) !== null && r !== void 0 ? r : 8e3),
        s.fetch ? (this.fetch = s.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(s, e) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(s, e),
        this
      );
    }
    then(s, e) {
      var t = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const r = this.fetch;
      let i = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (n) => {
        let a = null,
          o = null,
          l = null,
          u = n.status,
          h = n.statusText;
        if (n.ok) {
          var f, p;
          if (t.method !== "HEAD") {
            var d;
            const w = await n.text();
            w === "" ||
              (t.headers.get("Accept") === "text/csv" ||
              (t.headers.get("Accept") &&
                !((d = t.headers.get("Accept")) === null || d === void 0) &&
                d.includes("application/vnd.pgrst.plan+text"))
                ? (o = w)
                : (o = JSON.parse(w)));
          }
          const y =
              (f = t.headers.get("Prefer")) === null || f === void 0
                ? void 0
                : f.match(/count=(exact|planned|estimated)/),
            v =
              (p = n.headers.get("content-range")) === null || p === void 0
                ? void 0
                : p.split("/");
          (y && v && v.length > 1 && (l = parseInt(v[1])),
            t.isMaybeSingle &&
              t.method === "GET" &&
              Array.isArray(o) &&
              (o.length > 1
                ? ((a = {
                    code: "PGRST116",
                    details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (o = null),
                  (l = null),
                  (u = 406),
                  (h = "Not Acceptable"))
                : o.length === 1
                  ? (o = o[0])
                  : (o = null)));
        } else {
          var g;
          const y = await n.text();
          try {
            ((a = JSON.parse(y)),
              Array.isArray(a) &&
                n.status === 404 &&
                ((o = []), (a = null), (u = 200), (h = "OK")));
          } catch {
            n.status === 404 && y === ""
              ? ((u = 204), (h = "No Content"))
              : (a = { message: y });
          }
          if (
            (a &&
              t.isMaybeSingle &&
              !(a == null || (g = a.details) === null || g === void 0) &&
              g.includes("0 rows") &&
              ((a = null), (u = 200), (h = "OK")),
            a && t.shouldThrowOnError)
          )
            throw new Xi(a);
        }
        return { error: a, data: o, count: l, status: u, statusText: h };
      });
      return (
        this.shouldThrowOnError ||
          (i = i.catch((n) => {
            var a;
            let o = "",
              l = "",
              u = "";
            const h = n == null ? void 0 : n.cause;
            if (h) {
              var f, p, d, g;
              const w =
                  (f = h == null ? void 0 : h.message) !== null && f !== void 0
                    ? f
                    : "",
                b =
                  (p = h == null ? void 0 : h.code) !== null && p !== void 0
                    ? p
                    : "";
              ((o = `${(d = n == null ? void 0 : n.name) !== null && d !== void 0 ? d : "FetchError"}: ${n == null ? void 0 : n.message}`),
                (o += `

Caused by: ${(g = h == null ? void 0 : h.name) !== null && g !== void 0 ? g : "Error"}: ${w}`),
                b && (o += ` (${b})`),
                h != null &&
                  h.stack &&
                  (o += `
${h.stack}`));
            } else {
              var y;
              o =
                (y = n == null ? void 0 : n.stack) !== null && y !== void 0
                  ? y
                  : "";
            }
            const v = this.url.toString().length;
            return (
              (n == null ? void 0 : n.name) === "AbortError" ||
              (n == null ? void 0 : n.code) === "ABORT_ERR"
                ? ((u = ""),
                  (l = "Request was aborted (timeout or manual cancellation)"),
                  v > this.urlLengthLimit &&
                    (l += `. Note: Your request URL is ${v} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((h == null ? void 0 : h.name) === "HeadersOverflowError" ||
                    (h == null ? void 0 : h.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((u = ""),
                  (l = "HTTP headers exceeded server limits (typically 16KB)"),
                  v > this.urlLengthLimit &&
                    (l += `. Your request URL is ${v} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${(a = n == null ? void 0 : n.name) !== null && a !== void 0 ? a : "FetchError"}: ${n == null ? void 0 : n.message}`,
                  details: o,
                  hint: l,
                  code: u,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        i.then(s, e)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  en = class extends Zi {
    select(s) {
      let e = !1;
      const t = (s ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !e ? "" : (r === '"' && (e = !e), r)))
        .join("");
      return (
        this.url.searchParams.set("select", t),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      s,
      {
        ascending: e = !0,
        nullsFirst: t,
        foreignTable: r,
        referencedTable: i = r,
      } = {},
    ) {
      const n = i ? `${i}.order` : "order",
        a = this.url.searchParams.get(n);
      return (
        this.url.searchParams.set(
          n,
          `${a ? `${a},` : ""}${s}.${e ? "asc" : "desc"}${t === void 0 ? "" : t ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(s, { foreignTable: e, referencedTable: t = e } = {}) {
      const r = typeof t > "u" ? "limit" : `${t}.limit`;
      return (this.url.searchParams.set(r, `${s}`), this);
    }
    range(s, e, { foreignTable: t, referencedTable: r = t } = {}) {
      const i = typeof r > "u" ? "offset" : `${r}.offset`,
        n = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(i, `${s}`),
        this.url.searchParams.set(n, `${e - s + 1}`),
        this
      );
    }
    abortSignal(s) {
      return ((this.signal = s), this);
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
      analyze: s = !1,
      verbose: e = !1,
      settings: t = !1,
      buffers: r = !1,
      wal: i = !1,
      format: n = "text",
    } = {}) {
      var a;
      const o = [
          s ? "analyze" : null,
          e ? "verbose" : null,
          t ? "settings" : null,
          r ? "buffers" : null,
          i ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (a = this.headers.get("Accept")) !== null && a !== void 0
            ? a
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`,
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
    maxAffected(s) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${s}`),
        this
      );
    }
  };
const tr = new RegExp("[,()]");
var et = class extends en {
    eq(s, e) {
      return (this.url.searchParams.append(s, `eq.${e}`), this);
    }
    neq(s, e) {
      return (this.url.searchParams.append(s, `neq.${e}`), this);
    }
    gt(s, e) {
      return (this.url.searchParams.append(s, `gt.${e}`), this);
    }
    gte(s, e) {
      return (this.url.searchParams.append(s, `gte.${e}`), this);
    }
    lt(s, e) {
      return (this.url.searchParams.append(s, `lt.${e}`), this);
    }
    lte(s, e) {
      return (this.url.searchParams.append(s, `lte.${e}`), this);
    }
    like(s, e) {
      return (this.url.searchParams.append(s, `like.${e}`), this);
    }
    likeAllOf(s, e) {
      return (
        this.url.searchParams.append(s, `like(all).{${e.join(",")}}`),
        this
      );
    }
    likeAnyOf(s, e) {
      return (
        this.url.searchParams.append(s, `like(any).{${e.join(",")}}`),
        this
      );
    }
    ilike(s, e) {
      return (this.url.searchParams.append(s, `ilike.${e}`), this);
    }
    ilikeAllOf(s, e) {
      return (
        this.url.searchParams.append(s, `ilike(all).{${e.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(s, e) {
      return (
        this.url.searchParams.append(s, `ilike(any).{${e.join(",")}}`),
        this
      );
    }
    regexMatch(s, e) {
      return (this.url.searchParams.append(s, `match.${e}`), this);
    }
    regexIMatch(s, e) {
      return (this.url.searchParams.append(s, `imatch.${e}`), this);
    }
    is(s, e) {
      return (this.url.searchParams.append(s, `is.${e}`), this);
    }
    isDistinct(s, e) {
      return (this.url.searchParams.append(s, `isdistinct.${e}`), this);
    }
    in(s, e) {
      const t = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && tr.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(s, `in.(${t})`), this);
    }
    notIn(s, e) {
      const t = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && tr.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(s, `not.in.(${t})`), this);
    }
    contains(s, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(s, `cs.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(s, `cs.{${e.join(",")}}`)
            : this.url.searchParams.append(s, `cs.${JSON.stringify(e)}`),
        this
      );
    }
    containedBy(s, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(s, `cd.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(s, `cd.{${e.join(",")}}`)
            : this.url.searchParams.append(s, `cd.${JSON.stringify(e)}`),
        this
      );
    }
    rangeGt(s, e) {
      return (this.url.searchParams.append(s, `sr.${e}`), this);
    }
    rangeGte(s, e) {
      return (this.url.searchParams.append(s, `nxl.${e}`), this);
    }
    rangeLt(s, e) {
      return (this.url.searchParams.append(s, `sl.${e}`), this);
    }
    rangeLte(s, e) {
      return (this.url.searchParams.append(s, `nxr.${e}`), this);
    }
    rangeAdjacent(s, e) {
      return (this.url.searchParams.append(s, `adj.${e}`), this);
    }
    overlaps(s, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(s, `ov.${e}`)
          : this.url.searchParams.append(s, `ov.{${e.join(",")}}`),
        this
      );
    }
    textSearch(s, e, { config: t, type: r } = {}) {
      let i = "";
      r === "plain"
        ? (i = "pl")
        : r === "phrase"
          ? (i = "ph")
          : r === "websearch" && (i = "w");
      const n = t === void 0 ? "" : `(${t})`;
      return (this.url.searchParams.append(s, `${i}fts${n}.${e}`), this);
    }
    match(s) {
      return (
        Object.entries(s).forEach(([e, t]) => {
          this.url.searchParams.append(e, `eq.${t}`);
        }),
        this
      );
    }
    not(s, e, t) {
      return (this.url.searchParams.append(s, `not.${e}.${t}`), this);
    }
    or(s, { foreignTable: e, referencedTable: t = e } = {}) {
      const r = t ? `${t}.or` : "or";
      return (this.url.searchParams.append(r, `(${s})`), this);
    }
    filter(s, e, t) {
      return (this.url.searchParams.append(s, `${e}.${t}`), this);
    }
  },
  tn = class {
    constructor(
      s,
      { headers: e = {}, schema: t, fetch: r, urlLengthLimit: i = 8e3 },
    ) {
      ((this.url = s),
        (this.headers = new Headers(e)),
        (this.schema = t),
        (this.fetch = r),
        (this.urlLengthLimit = i));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(s, e) {
      const { head: t = !1, count: r } = e ?? {},
        i = t ? "HEAD" : "GET";
      let n = !1;
      const a = (s ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !n ? "" : (u === '"' && (n = !n), u)))
          .join(""),
        { url: o, headers: l } = this.cloneRequestState();
      return (
        o.searchParams.set("select", a),
        r && l.append("Prefer", `count=${r}`),
        new et({
          method: i,
          url: o,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(s, { count: e, defaultToNull: t = !0 } = {}) {
      var r;
      const i = "POST",
        { url: n, headers: a } = this.cloneRequestState();
      if (
        (e && a.append("Prefer", `count=${e}`),
        t || a.append("Prefer", "missing=default"),
        Array.isArray(s))
      ) {
        const o = s.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (o.length > 0) {
          const l = [...new Set(o)].map((u) => `"${u}"`);
          n.searchParams.set("columns", l.join(","));
        }
      }
      return new et({
        method: i,
        url: n,
        headers: a,
        schema: this.schema,
        body: s,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      s,
      {
        onConflict: e,
        ignoreDuplicates: t = !1,
        count: r,
        defaultToNull: i = !0,
      } = {},
    ) {
      var n;
      const a = "POST",
        { url: o, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${t ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && o.searchParams.set("on_conflict", e),
        r && l.append("Prefer", `count=${r}`),
        i || l.append("Prefer", "missing=default"),
        Array.isArray(s))
      ) {
        const u = s.reduce((h, f) => h.concat(Object.keys(f)), []);
        if (u.length > 0) {
          const h = [...new Set(u)].map((f) => `"${f}"`);
          o.searchParams.set("columns", h.join(","));
        }
      }
      return new et({
        method: a,
        url: o,
        headers: l,
        schema: this.schema,
        body: s,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(s, { count: e } = {}) {
      var t;
      const r = "PATCH",
        { url: i, headers: n } = this.cloneRequestState();
      return (
        e && n.append("Prefer", `count=${e}`),
        new et({
          method: r,
          url: i,
          headers: n,
          schema: this.schema,
          body: s,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: s } = {}) {
      var e;
      const t = "DELETE",
        { url: r, headers: i } = this.cloneRequestState();
      return (
        s && i.append("Prefer", `count=${s}`),
        new et({
          method: t,
          url: r,
          headers: i,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function Tt(s) {
  "@babel/helpers - typeof";
  return (
    (Tt =
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
    Tt(s)
  );
}
function sn(s, e) {
  if (Tt(s) != "object" || !s) return s;
  var t = s[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(s, e);
    if (Tt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(s);
}
function rn(s) {
  var e = sn(s, "string");
  return Tt(e) == "symbol" ? e : e + "";
}
function nn(s, e, t) {
  return (
    (e = rn(e)) in s
      ? Object.defineProperty(s, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[e] = t),
    s
  );
}
function sr(s, e) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    (e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(s, i).enumerable;
      })),
      t.push.apply(t, r));
  }
  return t;
}
function Ft(s) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? sr(Object(t), !0).forEach(function (r) {
          nn(s, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : sr(Object(t)).forEach(function (r) {
            Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return s;
}
var an = class Jr {
  constructor(
    e,
    {
      headers: t = {},
      schema: r,
      fetch: i,
      timeout: n,
      urlLengthLimit: a = 8e3,
    } = {},
  ) {
    ((this.url = e),
      (this.headers = new Headers(t)),
      (this.schemaName = r),
      (this.urlLengthLimit = a));
    const o = i ?? globalThis.fetch;
    n !== void 0 && n > 0
      ? (this.fetch = (l, u) => {
          const h = new AbortController(),
            f = setTimeout(() => h.abort(), n),
            p = u == null ? void 0 : u.signal;
          if (p) {
            if (p.aborted) return (clearTimeout(f), o(l, u));
            const d = () => {
              (clearTimeout(f), h.abort());
            };
            return (
              p.addEventListener("abort", d, { once: !0 }),
              o(l, Ft(Ft({}, u), {}, { signal: h.signal })).finally(() => {
                (clearTimeout(f), p.removeEventListener("abort", d));
              })
            );
          }
          return o(l, Ft(Ft({}, u), {}, { signal: h.signal })).finally(() =>
            clearTimeout(f),
          );
        })
      : (this.fetch = o);
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new tn(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(e) {
    return new Jr(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(e, t = {}, { head: r = !1, get: i = !1, count: n } = {}) {
    var a;
    let o;
    const l = new URL(`${this.url}/rpc/${e}`);
    let u;
    const h = (d) =>
        d !== null && typeof d == "object" && (!Array.isArray(d) || d.some(h)),
      f = r && Object.values(t).some(h);
    f
      ? ((o = "POST"), (u = t))
      : r || i
        ? ((o = r ? "HEAD" : "GET"),
          Object.entries(t)
            .filter(([d, g]) => g !== void 0)
            .map(([d, g]) => [
              d,
              Array.isArray(g) ? `{${g.join(",")}}` : `${g}`,
            ])
            .forEach(([d, g]) => {
              l.searchParams.append(d, g);
            }))
        : ((o = "POST"), (u = t));
    const p = new Headers(this.headers);
    return (
      f
        ? p.set("Prefer", n ? `count=${n},return=minimal` : "return=minimal")
        : n && p.set("Prefer", `count=${n}`),
      new et({
        method: o,
        url: l,
        headers: p,
        schema: this.schemaName,
        body: u,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class on {
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
    const t = globalThis.process;
    if (t) {
      const r = t.versions;
      if (r && r.node) {
        const i = r.node,
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
    let t = e.error || "WebSocket not supported in this environment.";
    throw (
      e.workaround &&
        (t += `

Suggested solution: ${e.workaround}`),
      new Error(t)
    );
  }
  static createWebSocket(e, t) {
    const r = this.getWebSocketConstructor();
    return new r(e, t);
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
const ln = "2.99.2",
  un = `realtime-js/${ln}`,
  cn = "1.0.0",
  Qr = "2.0.0",
  rr = Qr,
  Rs = 1e4,
  hn = 1e3,
  dn = 100;
var ve;
(function (s) {
  ((s[(s.connecting = 0)] = "connecting"),
    (s[(s.open = 1)] = "open"),
    (s[(s.closing = 2)] = "closing"),
    (s[(s.closed = 3)] = "closed"));
})(ve || (ve = {}));
var B;
(function (s) {
  ((s.closed = "closed"),
    (s.errored = "errored"),
    (s.joined = "joined"),
    (s.joining = "joining"),
    (s.leaving = "leaving"));
})(B || (B = {}));
var ne;
(function (s) {
  ((s.close = "phx_close"),
    (s.error = "phx_error"),
    (s.join = "phx_join"),
    (s.reply = "phx_reply"),
    (s.leave = "phx_leave"),
    (s.access_token = "access_token"));
})(ne || (ne = {}));
var As;
(function (s) {
  s.websocket = "websocket";
})(As || (As = {}));
var xe;
(function (s) {
  ((s.Connecting = "connecting"),
    (s.Open = "open"),
    (s.Closing = "closing"),
    (s.Closed = "closed"));
})(xe || (xe = {}));
class fn {
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
  encode(e, t) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return t(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var t;
    return this._isArrayBuffer(
      (t = e.payload) === null || t === void 0 ? void 0 : t.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var t, r;
    const i =
      (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(e) {
    var t, r;
    const i =
        (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !==
          null && r !== void 0
          ? r
          : {},
      a = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, a);
  }
  _encodeUserBroadcastPush(e, t, r) {
    var i, n;
    const a = e.topic,
      o = (i = e.ref) !== null && i !== void 0 ? i : "",
      l = (n = e.join_ref) !== null && n !== void 0 ? n : "",
      u = e.payload.event,
      h = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      f = Object.keys(h).length === 0 ? "" : JSON.stringify(h);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`ref length ${o.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`topic length ${a.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`metadata length ${f.length} exceeds maximum of 255`);
    const p =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        o.length +
        a.length +
        u.length +
        f.length,
      d = new ArrayBuffer(this.HEADER_LENGTH + p);
    let g = new DataView(d),
      y = 0;
    (g.setUint8(y++, this.KINDS.userBroadcastPush),
      g.setUint8(y++, l.length),
      g.setUint8(y++, o.length),
      g.setUint8(y++, a.length),
      g.setUint8(y++, u.length),
      g.setUint8(y++, f.length),
      g.setUint8(y++, t),
      Array.from(l, (w) => g.setUint8(y++, w.charCodeAt(0))),
      Array.from(o, (w) => g.setUint8(y++, w.charCodeAt(0))),
      Array.from(a, (w) => g.setUint8(y++, w.charCodeAt(0))),
      Array.from(u, (w) => g.setUint8(y++, w.charCodeAt(0))),
      Array.from(f, (w) => g.setUint8(y++, w.charCodeAt(0))));
    var v = new Uint8Array(d.byteLength + r.byteLength);
    return (
      v.set(new Uint8Array(d), 0),
      v.set(new Uint8Array(r), d.byteLength),
      v.buffer
    );
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return t(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e),
        [i, n, a, o, l] = r;
      return t({ join_ref: i, ref: n, topic: a, event: o, payload: l });
    }
    return t({});
  }
  _binaryDecode(e) {
    const t = new DataView(e),
      r = t.getUint8(0),
      i = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, t, i);
    }
  }
  _decodeUserBroadcast(e, t, r) {
    const i = t.getUint8(1),
      n = t.getUint8(2),
      a = t.getUint8(3),
      o = t.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = r.decode(e.slice(l, l + i));
    l = l + i;
    const h = r.decode(e.slice(l, l + n));
    l = l + n;
    const f = r.decode(e.slice(l, l + a));
    l = l + a;
    const p = e.slice(l, e.byteLength),
      d = o === this.JSON_ENCODING ? JSON.parse(r.decode(p)) : p,
      g = { type: this.BROADCAST_EVENT, event: h, payload: d };
    return (
      a > 0 && (g.meta = JSON.parse(f)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: g,
      }
    );
  }
  _isArrayBuffer(e) {
    var t;
    return (
      e instanceof ArrayBuffer ||
      ((t = e == null ? void 0 : e.constructor) === null || t === void 0
        ? void 0
        : t.name) === "ArrayBuffer"
    );
  }
  _pick(e, t) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([r]) => t.includes(r)));
  }
}
class Yr {
  constructor(e, t) {
    ((this.callback = e),
      (this.timerCalc = t),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = t));
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
var $;
(function (s) {
  ((s.abstime = "abstime"),
    (s.bool = "bool"),
    (s.date = "date"),
    (s.daterange = "daterange"),
    (s.float4 = "float4"),
    (s.float8 = "float8"),
    (s.int2 = "int2"),
    (s.int4 = "int4"),
    (s.int4range = "int4range"),
    (s.int8 = "int8"),
    (s.int8range = "int8range"),
    (s.json = "json"),
    (s.jsonb = "jsonb"),
    (s.money = "money"),
    (s.numeric = "numeric"),
    (s.oid = "oid"),
    (s.reltime = "reltime"),
    (s.text = "text"),
    (s.time = "time"),
    (s.timestamp = "timestamp"),
    (s.timestamptz = "timestamptz"),
    (s.timetz = "timetz"),
    (s.tsrange = "tsrange"),
    (s.tstzrange = "tstzrange"));
})($ || ($ = {}));
const ir = (s, e, t = {}) => {
    var r;
    const i = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
    return e
      ? Object.keys(e).reduce((n, a) => ((n[a] = pn(a, s, e, i)), n), {})
      : {};
  },
  pn = (s, e, t, r) => {
    const i = e.find((o) => o.name === s),
      n = i == null ? void 0 : i.type,
      a = t[s];
    return n && !r.includes(n) ? Xr(n, a) : Ps(a);
  },
  Xr = (s, e) => {
    if (s.charAt(0) === "_") {
      const t = s.slice(1, s.length);
      return mn(e, t);
    }
    switch (s) {
      case $.bool:
        return gn(e);
      case $.float4:
      case $.float8:
      case $.int2:
      case $.int4:
      case $.int8:
      case $.numeric:
      case $.oid:
        return yn(e);
      case $.json:
      case $.jsonb:
        return vn(e);
      case $.timestamp:
        return wn(e);
      case $.abstime:
      case $.date:
      case $.daterange:
      case $.int4range:
      case $.int8range:
      case $.money:
      case $.reltime:
      case $.text:
      case $.time:
      case $.timestamptz:
      case $.timetz:
      case $.tsrange:
      case $.tstzrange:
        return Ps(e);
      default:
        return Ps(e);
    }
  },
  Ps = (s) => s,
  gn = (s) => {
    switch (s) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return s;
    }
  },
  yn = (s) => {
    if (typeof s == "string") {
      const e = parseFloat(s);
      if (!Number.isNaN(e)) return e;
    }
    return s;
  },
  vn = (s) => {
    if (typeof s == "string")
      try {
        return JSON.parse(s);
      } catch {
        return s;
      }
    return s;
  },
  mn = (s, e) => {
    if (typeof s != "string") return s;
    const t = s.length - 1,
      r = s[t];
    if (s[0] === "{" && r === "}") {
      let n;
      const a = s.slice(1, t);
      try {
        n = JSON.parse("[" + a + "]");
      } catch {
        n = a ? a.split(",") : [];
      }
      return n.map((o) => Xr(e, o));
    }
    return s;
  },
  wn = (s) => (typeof s == "string" ? s.replace(" ", "T") : s),
  Zr = (s) => {
    const e = new URL(s);
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
class as {
  constructor(e, t, r = {}, i = Rs) {
    ((this.channel = e),
      (this.event = t),
      (this.payload = r),
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
  receive(e, t) {
    var r;
    return (
      this._hasReceived(e) &&
        t(
          (r = this.receivedResp) === null || r === void 0
            ? void 0
            : r.response,
        ),
      this.recHooks.push({ status: e, callback: t }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const e = (t) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = t),
        this._matchReceive(t));
    };
    (this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(e, t) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: t });
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
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var nr;
(function (s) {
  ((s.SYNC = "sync"), (s.JOIN = "join"), (s.LEAVE = "leave"));
})(nr || (nr = {}));
class kt {
  constructor(e, t) {
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
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(r.state, {}, (i) => {
      const { onJoin: n, onLeave: a, onSync: o } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = kt.syncState(this.state, i, n, a)),
        this.pendingDiffs.forEach((l) => {
          this.state = kt.syncDiff(this.state, l, n, a);
        }),
        (this.pendingDiffs = []),
        o());
    }),
      this.channel._on(r.diff, {}, (i) => {
        const { onJoin: n, onLeave: a, onSync: o } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = kt.syncDiff(this.state, i, n, a)), o());
      }),
      this.onJoin((i, n, a) => {
        this.channel._trigger("presence", {
          event: "join",
          key: i,
          currentPresences: n,
          newPresences: a,
        });
      }),
      this.onLeave((i, n, a) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: i,
          currentPresences: n,
          leftPresences: a,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(e, t, r, i) {
    const n = this.cloneDeep(e),
      a = this.transformState(t),
      o = {},
      l = {};
    return (
      this.map(n, (u, h) => {
        a[u] || (l[u] = h);
      }),
      this.map(a, (u, h) => {
        const f = n[u];
        if (f) {
          const p = h.map((v) => v.presence_ref),
            d = f.map((v) => v.presence_ref),
            g = h.filter((v) => d.indexOf(v.presence_ref) < 0),
            y = f.filter((v) => p.indexOf(v.presence_ref) < 0);
          (g.length > 0 && (o[u] = g), y.length > 0 && (l[u] = y));
        } else o[u] = h;
      }),
      this.syncDiff(n, { joins: o, leaves: l }, r, i)
    );
  }
  static syncDiff(e, t, r, i) {
    const { joins: n, leaves: a } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves),
    };
    return (
      r || (r = () => {}),
      i || (i = () => {}),
      this.map(n, (o, l) => {
        var u;
        const h = (u = e[o]) !== null && u !== void 0 ? u : [];
        if (((e[o] = this.cloneDeep(l)), h.length > 0)) {
          const f = e[o].map((d) => d.presence_ref),
            p = h.filter((d) => f.indexOf(d.presence_ref) < 0);
          e[o].unshift(...p);
        }
        r(o, h, l);
      }),
      this.map(a, (o, l) => {
        let u = e[o];
        if (!u) return;
        const h = l.map((f) => f.presence_ref);
        ((u = u.filter((f) => h.indexOf(f.presence_ref) < 0)),
          (e[o] = u),
          i(o, u, l),
          u.length === 0 && delete e[o]);
      }),
      e
    );
  }
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((t, r) => {
        const i = e[r];
        return (
          "metas" in i
            ? (t[r] = i.metas.map(
                (n) => (
                  (n.presence_ref = n.phx_ref),
                  delete n.phx_ref,
                  delete n.phx_ref_prev,
                  n
                ),
              ))
            : (t[r] = i),
          t
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
var ar;
(function (s) {
  ((s.ALL = "*"),
    (s.INSERT = "INSERT"),
    (s.UPDATE = "UPDATE"),
    (s.DELETE = "DELETE"));
})(ar || (ar = {}));
var Et;
(function (s) {
  ((s.BROADCAST = "broadcast"),
    (s.PRESENCE = "presence"),
    (s.POSTGRES_CHANGES = "postgres_changes"),
    (s.SYSTEM = "system"));
})(Et || (Et = {}));
var he;
(function (s) {
  ((s.SUBSCRIBED = "SUBSCRIBED"),
    (s.TIMED_OUT = "TIMED_OUT"),
    (s.CLOSED = "CLOSED"),
    (s.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(he || (he = {}));
class rt {
  constructor(e, t = { config: {} }, r) {
    var i, n;
    if (
      ((this.topic = e),
      (this.params = t),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = B.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = e.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        t.config,
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new as(this, ne.join, this.params, this.timeout)),
      (this.rejoinTimer = new Yr(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs,
      )),
      this.joinPush.receive("ok", () => {
        ((this.state = B.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((a) => a.send()),
          (this.pushBuffer = []));
      }),
      this._onClose(() => {
        (this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = B.closed),
          this.socket._remove(this));
      }),
      this._onError((a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = B.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout,
          ),
          (this.state = B.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = B.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(ne.reply, {}, (a, o) => {
        this._trigger(this._replyEventName(o), a);
      }),
      (this.presence = new kt(this)),
      (this.broadcastEndpointURL = Zr(this.socket.endPoint)),
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
  subscribe(e, t = this.timeout) {
    var r, i, n;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == B.closed)
    ) {
      const {
          config: { broadcast: a, presence: o, private: l },
        } = this.params,
        u =
          (i =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((d) => d.filter)) !== null && i !== void 0
            ? i
            : [],
        h =
          (!!this.bindings[Et.PRESENCE] &&
            this.bindings[Et.PRESENCE].length > 0) ||
          ((n = this.params.config.presence) === null || n === void 0
            ? void 0
            : n.enabled) === !0,
        f = {},
        p = {
          broadcast: a,
          presence: Object.assign(Object.assign({}, o), { enabled: h }),
          postgres_changes: u,
          private: l,
        };
      (this.socket.accessTokenValue &&
        (f.access_token = this.socket.accessTokenValue),
        this._onError((d) => (e == null ? void 0 : e(he.CHANNEL_ERROR, d))),
        this._onClose(() => (e == null ? void 0 : e(he.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: p }, f)),
        (this.joinedOnce = !0),
        this._rejoin(t),
        this.joinPush
          .receive("ok", async ({ postgres_changes: d }) => {
            var g;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              d === void 0)
            ) {
              e == null || e(he.SUBSCRIBED);
              return;
            } else {
              const y = this.bindings.postgres_changes,
                v =
                  (g = y == null ? void 0 : y.length) !== null && g !== void 0
                    ? g
                    : 0,
                w = [];
              for (let b = 0; b < v; b++) {
                const m = y[b],
                  {
                    filter: { event: k, schema: C, table: A, filter: x },
                  } = m,
                  U = d && d[b];
                if (
                  U &&
                  U.event === k &&
                  rt.isFilterValueEqual(U.schema, C) &&
                  rt.isFilterValueEqual(U.table, A) &&
                  rt.isFilterValueEqual(U.filter, x)
                )
                  w.push(Object.assign(Object.assign({}, m), { id: U.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = B.errored),
                    e == null ||
                      e(
                        he.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes",
                        ),
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = w), e && e(he.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (d) => {
            ((this.state = B.errored),
              e == null ||
                e(
                  he.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(d).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            e == null || e(he.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: e },
      t.timeout || this.timeout,
    );
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, t, r) {
    return (
      this.state === B.joined &&
        e === Et.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`,
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(e, t, r)
    );
  }
  async httpSend(e, t, r = {}) {
    var i;
    if (t == null) return Promise.reject("Payload is required for httpSend()");
    const n = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (n.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const a = {
        method: "POST",
        headers: n,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: e,
              payload: t,
              private: this.private,
            },
          ],
        }),
      },
      o = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        a,
        (i = r.timeout) !== null && i !== void 0 ? i : this.timeout,
      );
    if (o.status === 202) return { success: !0 };
    let l = o.statusText;
    try {
      const u = await o.json();
      l = u.error || u.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(e, t = {}) {
    var r, i;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: n, payload: a } = e,
        o = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (o.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: o,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: n,
              payload: a,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const u = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (r = t.timeout) !== null && r !== void 0 ? r : this.timeout,
        );
        return (
          await ((i = u.body) === null || i === void 0 ? void 0 : i.cancel()),
          u.ok ? "ok" : "error"
        );
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((n) => {
        var a, o, l;
        const u = this._push(e.type, e, t.timeout || this.timeout);
        (e.type === "broadcast" &&
          !(
            !(
              (l =
                (o =
                  (a = this.params) === null || a === void 0
                    ? void 0
                    : a.config) === null || o === void 0
                  ? void 0
                  : o.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          n("ok"),
          u.receive("ok", () => n("ok")),
          u.receive("error", () => n("error")),
          u.receive("timeout", () => n("timed out")));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = B.leaving;
    const t = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(ne.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((i) => {
      ((r = new as(this, ne.leave, {}, e)),
        r
          .receive("ok", () => {
            (t(), i("ok"));
          })
          .receive("timeout", () => {
            (t(), i("timed out"));
          })
          .receive("error", () => {
            i("error");
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
      (this.state = B.closed),
      (this.bindings = {}));
  }
  async _fetchWithTimeout(e, t, r) {
    const i = new AbortController(),
      n = setTimeout(() => i.abort(), r),
      a = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, t), { signal: i.signal }),
      );
    return (clearTimeout(n), a);
  }
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new as(this, e, t, r);
    return (this._canPush() ? i.send() : this._addToPushBuffer(i), i);
  }
  _addToPushBuffer(e) {
    if (
      (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > dn)
    ) {
      const t = this.pushBuffer.shift();
      t &&
        (t.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${t.event}`,
          t.payload,
        ));
    }
  }
  _onMessage(e, t, r) {
    return t;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, t, r) {
    var i, n;
    const a = e.toLocaleLowerCase(),
      { close: o, error: l, leave: u, join: h } = ne;
    if (r && [o, l, u, h].indexOf(a) >= 0 && r !== this._joinRef()) return;
    let p = this._onMessage(a, t, r);
    if (t && !p)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((d) => {
            var g, y, v;
            return (
              ((g = d.filter) === null || g === void 0 ? void 0 : g.event) ===
                "*" ||
              ((v =
                (y = d.filter) === null || y === void 0 ? void 0 : y.event) ===
                null || v === void 0
                ? void 0
                : v.toLocaleLowerCase()) === a
            );
          })
          .map((d) => d.callback(p, r))
      : (n = this.bindings[a]) === null ||
        n === void 0 ||
        n
          .filter((d) => {
            var g, y, v, w, b, m;
            if (["broadcast", "presence", "postgres_changes"].includes(a))
              if ("id" in d) {
                const k = d.id,
                  C =
                    (g = d.filter) === null || g === void 0 ? void 0 : g.event;
                return (
                  k &&
                  ((y = t.ids) === null || y === void 0
                    ? void 0
                    : y.includes(k)) &&
                  (C === "*" ||
                    (C == null ? void 0 : C.toLocaleLowerCase()) ===
                      ((v = t.data) === null || v === void 0
                        ? void 0
                        : v.type.toLocaleLowerCase()))
                );
              } else {
                const k =
                  (b =
                    (w = d == null ? void 0 : d.filter) === null || w === void 0
                      ? void 0
                      : w.event) === null || b === void 0
                    ? void 0
                    : b.toLocaleLowerCase();
                return (
                  k === "*" ||
                  k ===
                    ((m = t == null ? void 0 : t.event) === null || m === void 0
                      ? void 0
                      : m.toLocaleLowerCase())
                );
              }
            else return d.type.toLocaleLowerCase() === a;
          })
          .map((d) => {
            if (typeof p == "object" && "ids" in p) {
              const g = p.data,
                {
                  schema: y,
                  table: v,
                  commit_timestamp: w,
                  type: b,
                  errors: m,
                } = g;
              p = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: y,
                    table: v,
                    commit_timestamp: w,
                    eventType: b,
                    new: {},
                    old: {},
                    errors: m,
                  },
                ),
                this._getPayloadRecords(g),
              );
            }
            d.callback(p, r);
          });
  }
  _isClosed() {
    return this.state === B.closed;
  }
  _isJoined() {
    return this.state === B.joined;
  }
  _isJoining() {
    return this.state === B.joining;
  }
  _isLeaving() {
    return this.state === B.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, t, r) {
    const i = e.toLocaleLowerCase(),
      n = { type: i, filter: t, callback: r };
    return (
      this.bindings[i] ? this.bindings[i].push(n) : (this.bindings[i] = [n]),
      this
    );
  }
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return (
      this.bindings[r] &&
        (this.bindings[r] = this.bindings[r].filter((i) => {
          var n;
          return !(
            ((n = i.type) === null || n === void 0
              ? void 0
              : n.toLocaleLowerCase()) === r && rt.isEqual(i.filter, t)
          );
        })),
      this
    );
  }
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const r in e) if (e[r] !== t[r]) return !1;
    return !0;
  }
  static isFilterValueEqual(e, t) {
    return (e ?? void 0) === (t ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(e) {
    this._on(ne.close, {}, e);
  }
  _onError(e) {
    this._on(ne.error, {}, (t) => e(t));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = B.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const t = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (t.new = ir(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (t.old = ir(e.columns, e.old_record)),
      t
    );
  }
}
const os = () => {},
  Mt = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  bn = [1e3, 2e3, 5e3, 1e4],
  _n = 1e4,
  Sn = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class kn {
  constructor(e, t) {
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
      (this.timeout = Rs),
      (this.transport = null),
      (this.heartbeatIntervalMs = Mt.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = os),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = rr),
      (this.logger = os),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new fn()),
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
        !((r = t == null ? void 0 : t.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = t.params.apikey),
      (this.endPoint = `${e}/${As.websocket}`),
      (this.httpEndpoint = Zr(e)),
      this._initializeOptions(t),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch)));
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
          this.conn = on.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const t = e.message;
          throw t.includes("Node.js")
            ? new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${t}`);
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
  disconnect(e, t) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(r), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (e ? this.conn.close(e, t ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return (this.channels.length === 0 && this.disconnect(), t);
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return ((this.channels = []), this.disconnect(), e);
  }
  log(e, t, r) {
    this.logger(e, t, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ve.connecting:
        return xe.Connecting;
      case ve.open:
        return xe.Open;
      case ve.closing:
        return xe.Closing;
      default:
        return xe.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === xe.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, t = { config: {} }) {
    const r = `realtime:${e}`,
      i = this.getChannels().find((n) => n.topic === r);
    if (i) return i;
    {
      const n = new rt(`realtime:${e}`, t, this);
      return (this.channels.push(n), n);
    }
  }
  push(e) {
    const { topic: t, event: r, payload: i, ref: n } = e,
      a = () => {
        this.encode(e, (o) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(o);
        });
      };
    (this.log("push", `${t} ${r} (${n})`, i),
      this.isConnected() ? a() : this.sendBuffer.push(a));
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
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
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
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      ((this._wasManualDisconnect = !1),
        (e = this.conn) === null ||
          e === void 0 ||
          e.close(hn, "heartbeat timeout"),
        setTimeout(() => {
          var t;
          this.isConnected() ||
            (t = this.reconnectTimer) === null ||
            t === void 0 ||
            t.scheduleTimeout();
        }, Mt.HEARTBEAT_TIMEOUT_FALLBACK));
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
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
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
    let t = this.channels.find(
      (r) => r.topic === e && (r._isJoined() || r._isJoining()),
    );
    t &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      t.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((t) => t.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      if (
        t.topic === "phoenix" &&
        t.event === "phx_reply" &&
        t.ref &&
        t.ref === this.pendingHeartbeatRef
      ) {
        const u = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(t.payload.status === "ok" ? "ok" : "error", u);
        } catch (h) {
          this.log("error", "error in heartbeat callback", h);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: r, event: i, payload: n, ref: a } = t,
        o = a ? `(${a})` : "",
        l = n.status || "";
      (this.log("receive", `${l} ${r} ${i} ${o}`.trim(), n),
        this.channels
          .filter((u) => u._isMember(r))
          .forEach((u) => u._trigger(i, n, a)),
        this._triggerStateCallbacks("message", t));
    });
  }
  _clearTimer(e) {
    var t;
    e === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : e === "reconnect" &&
        ((t = this.reconnectTimer) === null || t === void 0 || t.reset());
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
      this.conn.readyState === ve.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === ve.open ||
        this.conn.readyState === ve.connecting
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
            (this.channels.forEach((t) => {
              t.updateJoinPayload({ access_token: this.accessTokenValue });
            }),
            (this.sendBuffer = []),
            this.channels.forEach((t) => {
              t._isJoining() && ((t.joinPush.sent = !1), t.joinPush.send());
            })),
            this.flushSendBuffer());
        })
        .catch((t) => {
          (this.log("error", "error waiting for auth on connect", t),
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
      (this.workerRef.onerror = (t) => {
        (this.log("worker", "worker error", t.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this.sendHeartbeat();
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
    var t;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", e),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (t = this.reconnectTimer) === null ||
        t === void 0 ||
        t.scheduleTimeout(),
      this._triggerStateCallbacks("close", e));
  }
  _onConnError(e) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${e}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", e));
    try {
      this.heartbeatCallback("error");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(ne.error));
  }
  _appendParams(e, t) {
    if (Object.keys(t).length === 0) return e;
    const r = e.match(/\?/) ? "&" : "?",
      i = new URLSearchParams(t);
    return `${e}${r}${i}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e) t = e;
    else {
      const r = new Blob([Sn], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
  _setConnectionState(e, t = !1) {
    ((this._connectionState = e),
      e === "connecting"
        ? (this._wasManualDisconnect = !1)
        : e === "disconnecting" && (this._wasManualDisconnect = t));
  }
  async _performAuth(e = null) {
    let t,
      r = !1;
    if (e) ((t = e), (r = !0));
    else if (this.accessToken)
      try {
        t = await this.accessToken();
      } catch (i) {
        (this.log("error", "Error fetching access token from callback", i),
          (t = this.accessTokenValue));
      }
    else t = this.accessTokenValue;
    (r
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != t &&
        ((this.accessTokenValue = t),
        this.channels.forEach((i) => {
          const n = { access_token: t, version: un };
          (t && i.updateJoinPayload(n),
            i.joinedOnce &&
              i._isJoined() &&
              i._push(ne.access_token, { access_token: t }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((t) => {
        this.log("error", `Error setting auth in ${e}`, t);
      });
  }
  _triggerStateCallbacks(e, t) {
    try {
      this.stateChangeCallbacks[e].forEach((r) => {
        try {
          r(t);
        } catch (i) {
          this.log("error", `error in ${e} callback`, i);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${e} callbacks`, r);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new Yr(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, Mt.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var t, r, i, n, a, o, l, u, h, f, p, d;
    switch (
      ((this.transport =
        (t = e == null ? void 0 : e.transport) !== null && t !== void 0
          ? t
          : null),
      (this.timeout =
        (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : Rs),
      (this.heartbeatIntervalMs =
        (i = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        i !== void 0
          ? i
          : Mt.HEARTBEAT_INTERVAL),
      (this.worker =
        (n = e == null ? void 0 : e.worker) !== null && n !== void 0 ? n : !1),
      (this.accessToken =
        (a = e == null ? void 0 : e.accessToken) !== null && a !== void 0
          ? a
          : null),
      (this.heartbeatCallback =
        (o = e == null ? void 0 : e.heartbeatCallback) !== null && o !== void 0
          ? o
          : os),
      (this.vsn =
        (l = e == null ? void 0 : e.vsn) !== null && l !== void 0 ? l : rr),
      e != null && e.params && (this.params = e.params),
      e != null && e.logger && (this.logger = e.logger),
      ((e != null && e.logLevel) || (e != null && e.log_level)) &&
        ((this.logLevel = e.logLevel || e.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (u = e == null ? void 0 : e.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (g) => bn[g - 1] || _n),
      this.vsn)
    ) {
      case cn:
        ((this.encode =
          (h = e == null ? void 0 : e.encode) !== null && h !== void 0
            ? h
            : (g, y) => y(JSON.stringify(g))),
          (this.decode =
            (f = e == null ? void 0 : e.decode) !== null && f !== void 0
              ? f
              : (g, y) => y(JSON.parse(g))));
        break;
      case Qr:
        ((this.encode =
          (p = e == null ? void 0 : e.encode) !== null && p !== void 0
            ? p
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (d = e == null ? void 0 : e.decode) !== null && d !== void 0
              ? d
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
var Rt = class extends Error {
  constructor(s, e) {
    var t;
    (super(s),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((t = e.icebergType) == null ? void 0 : t.includes("CommitState")) ===
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
function En(s, e, t) {
  const r = new URL(e, s);
  if (t)
    for (const [i, n] of Object.entries(t))
      n !== void 0 && r.searchParams.set(i, n);
  return r.toString();
}
async function On(s) {
  return !s || s.type === "none"
    ? {}
    : s.type === "bearer"
      ? { Authorization: `Bearer ${s.token}` }
      : s.type === "header"
        ? { [s.name]: s.value }
        : s.type === "custom"
          ? await s.getHeaders()
          : {};
}
function Tn(s) {
  const e = s.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: t, path: r, query: i, body: n, headers: a }) {
      const o = En(s.baseUrl, r, i),
        l = await On(s.auth),
        u = await e(o, {
          method: t,
          headers: {
            ...(n ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...a,
          },
          body: n ? JSON.stringify(n) : void 0,
        }),
        h = await u.text(),
        f = (u.headers.get("content-type") || "").includes("application/json"),
        p = f && h ? JSON.parse(h) : h;
      if (!u.ok) {
        const d = f ? p : void 0,
          g = d == null ? void 0 : d.error;
        throw new Rt(
          (g == null ? void 0 : g.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: g == null ? void 0 : g.type,
            icebergCode: g == null ? void 0 : g.code,
            details: d,
          },
        );
      }
      return { status: u.status, headers: u.headers, data: p };
    },
  };
}
function Kt(s) {
  return s.join("");
}
var Rn = class {
  constructor(s, e = "") {
    ((this.client = s), (this.prefix = e));
  }
  async listNamespaces(s) {
    const e = s ? { parent: Kt(s.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(s, e) {
    const t = {
      namespace: s.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: t,
      })
    ).data;
  }
  async dropNamespace(s) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Kt(s.namespace)}`,
    });
  }
  async loadNamespaceMetadata(s) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Kt(s.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(s) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Kt(s.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof Rt && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(s, e) {
    try {
      return await this.createNamespace(s, e);
    } catch (t) {
      if (t instanceof Rt && t.status === 409) return;
      throw t;
    }
  }
};
function Je(s) {
  return s.join("");
}
var An = class {
    constructor(s, e = "", t) {
      ((this.client = s), (this.prefix = e), (this.accessDelegation = t));
    }
    async listTables(s) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(s, e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables`,
            body: e,
            headers: t,
          })
        ).data.metadata
      );
    }
    async updateTable(s, e) {
      const t = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables/${s.name}`,
        body: e,
      });
      return {
        "metadata-location": t.data["metadata-location"],
        metadata: t.data.metadata,
      };
    }
    async dropTable(s, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables/${s.name}`,
        query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) },
      });
    }
    async loadTable(s) {
      const e = {};
      return (
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables/${s.name}`,
            headers: e,
          })
        ).data.metadata
      );
    }
    async tableExists(s) {
      const e = {};
      this.accessDelegation &&
        (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Je(s.namespace)}/tables/${s.name}`,
            headers: e,
          }),
          !0
        );
      } catch (t) {
        if (t instanceof Rt && t.status === 404) return !1;
        throw t;
      }
    }
    async createTableIfNotExists(s, e) {
      try {
        return await this.createTable(s, e);
      } catch (t) {
        if (t instanceof Rt && t.status === 409)
          return await this.loadTable({ namespace: s.namespace, name: e.name });
        throw t;
      }
    }
  },
  Pn = class {
    constructor(s) {
      var r;
      let e = "v1";
      s.catalogName && (e += `/${s.catalogName}`);
      const t = s.baseUrl.endsWith("/") ? s.baseUrl : `${s.baseUrl}/`;
      ((this.client = Tn({ baseUrl: t, auth: s.auth, fetchImpl: s.fetch })),
        (this.accessDelegation =
          (r = s.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new Rn(this.client, e)),
        (this.tableOps = new An(this.client, e, this.accessDelegation)));
    }
    async listNamespaces(s) {
      return this.namespaceOps.listNamespaces(s);
    }
    async createNamespace(s, e) {
      return this.namespaceOps.createNamespace(s, e);
    }
    async dropNamespace(s) {
      await this.namespaceOps.dropNamespace(s);
    }
    async loadNamespaceMetadata(s) {
      return this.namespaceOps.loadNamespaceMetadata(s);
    }
    async listTables(s) {
      return this.tableOps.listTables(s);
    }
    async createTable(s, e) {
      return this.tableOps.createTable(s, e);
    }
    async updateTable(s, e) {
      return this.tableOps.updateTable(s, e);
    }
    async dropTable(s, e) {
      await this.tableOps.dropTable(s, e);
    }
    async loadTable(s) {
      return this.tableOps.loadTable(s);
    }
    async namespaceExists(s) {
      return this.namespaceOps.namespaceExists(s);
    }
    async tableExists(s) {
      return this.tableOps.tableExists(s);
    }
    async createNamespaceIfNotExists(s, e) {
      return this.namespaceOps.createNamespaceIfNotExists(s, e);
    }
    async createTableIfNotExists(s, e) {
      return this.tableOps.createTableIfNotExists(s, e);
    }
  },
  ts = class extends Error {
    constructor(s, e = "storage", t, r) {
      (super(s),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = t),
        (this.statusCode = r));
    }
  };
function ss(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
var _t = class extends ts {
    constructor(s, e, t, r = "storage") {
      (super(s, r, e, t),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = t));
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
  ei = class extends ts {
    constructor(s, e, t = "storage") {
      (super(s, t),
        (this.name =
          t === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e));
    }
  };
const Cn = (s) => (s ? (...e) => s(...e) : (...e) => fetch(...e)),
  In = (s) => {
    if (typeof s != "object" || s === null) return !1;
    const e = Object.getPrototypeOf(s);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in s) &&
      !(Symbol.iterator in s)
    );
  },
  Cs = (s) => {
    if (Array.isArray(s)) return s.map((t) => Cs(t));
    if (typeof s == "function" || s !== Object(s)) return s;
    const e = {};
    return (
      Object.entries(s).forEach(([t, r]) => {
        const i = t.replace(/([-_][a-z])/gi, (n) =>
          n.toUpperCase().replace(/[-_]/g, ""),
        );
        e[i] = Cs(r);
      }),
      e
    );
  },
  jn = (s) =>
    !s ||
    typeof s != "string" ||
    s.length === 0 ||
    s.length > 100 ||
    s.trim() !== s ||
    s.includes("/") ||
    s.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(s);
function At(s) {
  "@babel/helpers - typeof";
  return (
    (At =
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
    At(s)
  );
}
function $n(s, e) {
  if (At(s) != "object" || !s) return s;
  var t = s[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(s, e);
    if (At(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(s);
}
function xn(s) {
  var e = $n(s, "string");
  return At(e) == "symbol" ? e : e + "";
}
function Un(s, e, t) {
  return (
    (e = xn(e)) in s
      ? Object.defineProperty(s, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[e] = t),
    s
  );
}
function or(s, e) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    (e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(s, i).enumerable;
      })),
      t.push.apply(t, r));
  }
  return t;
}
function T(s) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? or(Object(t), !0).forEach(function (r) {
          Un(s, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : or(Object(t)).forEach(function (r) {
            Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return s;
}
const lr = (s) => {
    var e;
    return (
      s.msg ||
      s.message ||
      s.error_description ||
      (typeof s.error == "string"
        ? s.error
        : (e = s.error) === null || e === void 0
          ? void 0
          : e.message) ||
      JSON.stringify(s)
    );
  },
  Ln = async (s, e, t, r) => {
    if (
      s &&
      typeof s == "object" &&
      "status" in s &&
      "ok" in s &&
      typeof s.status == "number"
    ) {
      const i = s,
        n = i.status || 500;
      if (typeof i.json == "function")
        i.json()
          .then((a) => {
            const o =
              (a == null ? void 0 : a.statusCode) ||
              (a == null ? void 0 : a.code) ||
              n + "";
            e(new _t(lr(a), n, o, r));
          })
          .catch(() => {
            if (r === "vectors") {
              const a = n + "";
              e(new _t(i.statusText || `HTTP ${n} error`, n, a, r));
            } else {
              const a = n + "";
              e(new _t(i.statusText || `HTTP ${n} error`, n, a, r));
            }
          });
      else {
        const a = n + "";
        e(new _t(i.statusText || `HTTP ${n} error`, n, a, r));
      }
    } else e(new ei(lr(s), s, r));
  },
  Dn = (s, e, t, r) => {
    const i = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
    return s === "GET" || s === "HEAD" || !r
      ? T(T({}, i), t)
      : (In(r)
          ? ((i.headers = T(
              { "Content-Type": "application/json" },
              e == null ? void 0 : e.headers,
            )),
            (i.body = JSON.stringify(r)))
          : (i.body = r),
        e != null && e.duplex && (i.duplex = e.duplex),
        T(T({}, i), t));
  };
async function wt(s, e, t, r, i, n, a) {
  return new Promise((o, l) => {
    s(t, Dn(e, r, i, n))
      .then((u) => {
        if (!u.ok) throw u;
        if (r != null && r.noResolveJson) return u;
        if (a === "vectors") {
          const h = u.headers.get("content-type");
          if (u.headers.get("content-length") === "0" || u.status === 204)
            return {};
          if (!h || !h.includes("application/json")) return {};
        }
        return u.json();
      })
      .then((u) => o(u))
      .catch((u) => Ln(u, l, r, a));
  });
}
function ti(s = "storage") {
  return {
    get: async (e, t, r, i) => wt(e, "GET", t, r, i, void 0, s),
    post: async (e, t, r, i, n) => wt(e, "POST", t, i, n, r, s),
    put: async (e, t, r, i, n) => wt(e, "PUT", t, i, n, r, s),
    head: async (e, t, r, i) =>
      wt(e, "HEAD", t, T(T({}, r), {}, { noResolveJson: !0 }), i, void 0, s),
    remove: async (e, t, r, i, n) => wt(e, "DELETE", t, i, n, r, s),
  };
}
const Nn = ti("storage"),
  { get: Pt, post: se, put: Is, head: qn, remove: Fs } = Nn,
  X = ti("vectors");
var mt = class {
    constructor(s, e = {}, t, r = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = s),
        (this.headers = e),
        (this.fetch = Cn(t)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(s, e) {
      return ((this.headers = T(T({}, this.headers), {}, { [s]: e })), this);
    }
    async handleOperation(s) {
      var e = this;
      try {
        return { data: await s(), error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (ss(t)) return { data: null, error: t };
        throw t;
      }
    }
  },
  Bn = class {
    constructor(s, e) {
      ((this.downloadFn = s), (this.shouldThrowOnError = e));
    }
    then(s, e) {
      return this.execute().then(s, e);
    }
    async execute() {
      var s = this;
      try {
        return { data: (await s.downloadFn()).body, error: null };
      } catch (e) {
        if (s.shouldThrowOnError) throw e;
        if (ss(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
let si;
si = Symbol.toStringTag;
var Fn = class {
  constructor(s, e) {
    ((this.downloadFn = s),
      (this.shouldThrowOnError = e),
      (this[si] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new Bn(this.downloadFn, this.shouldThrowOnError);
  }
  then(s, e) {
    return this.getPromise().then(s, e);
  }
  catch(s) {
    return this.getPromise().catch(s);
  }
  finally(s) {
    return this.getPromise().finally(s);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var s = this;
    try {
      return { data: await (await s.downloadFn()).blob(), error: null };
    } catch (e) {
      if (s.shouldThrowOnError) throw e;
      if (ss(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const Mn = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  ur = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var Kn = class extends mt {
  constructor(s, e = {}, t, r) {
    (super(s, e, r, "storage"), (this.bucketId = t));
  }
  async uploadOrUpdate(s, e, t, r) {
    var i = this;
    return i.handleOperation(async () => {
      let n;
      const a = T(T({}, ur), r);
      let o = T(
        T({}, i.headers),
        s === "POST" && { "x-upsert": String(a.upsert) },
      );
      const l = a.metadata;
      (typeof Blob < "u" && t instanceof Blob
        ? ((n = new FormData()),
          n.append("cacheControl", a.cacheControl),
          l && n.append("metadata", i.encodeMetadata(l)),
          n.append("", t))
        : typeof FormData < "u" && t instanceof FormData
          ? ((n = t),
            n.has("cacheControl") || n.append("cacheControl", a.cacheControl),
            l &&
              !n.has("metadata") &&
              n.append("metadata", i.encodeMetadata(l)))
          : ((n = t),
            (o["cache-control"] = `max-age=${a.cacheControl}`),
            (o["content-type"] = a.contentType),
            l && (o["x-metadata"] = i.toBase64(i.encodeMetadata(l))),
            ((typeof ReadableStream < "u" && n instanceof ReadableStream) ||
              (n &&
                typeof n == "object" &&
                "pipe" in n &&
                typeof n.pipe == "function")) &&
              !a.duplex &&
              (a.duplex = "half")),
        r != null && r.headers && (o = T(T({}, o), r.headers)));
      const u = i._removeEmptyFolders(e),
        h = i._getFinalPath(u),
        f = await (s == "PUT" ? Is : se)(
          i.fetch,
          `${i.url}/object/${h}`,
          n,
          T({ headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {}),
        );
      return { path: u, id: f.Id, fullPath: f.Key };
    });
  }
  async upload(s, e, t) {
    return this.uploadOrUpdate("POST", s, e, t);
  }
  async uploadToSignedUrl(s, e, t, r) {
    var i = this;
    const n = i._removeEmptyFolders(s),
      a = i._getFinalPath(n),
      o = new URL(i.url + `/object/upload/sign/${a}`);
    return (
      o.searchParams.set("token", e),
      i.handleOperation(async () => {
        let l;
        const u = T({ upsert: ur.upsert }, r),
          h = T(T({}, i.headers), { "x-upsert": String(u.upsert) });
        return (
          typeof Blob < "u" && t instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", u.cacheControl),
              l.append("", t))
            : typeof FormData < "u" && t instanceof FormData
              ? ((l = t), l.append("cacheControl", u.cacheControl))
              : ((l = t),
                (h["cache-control"] = `max-age=${u.cacheControl}`),
                (h["content-type"] = u.contentType)),
          {
            path: n,
            fullPath: (await Is(i.fetch, o.toString(), l, { headers: h })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(s, e) {
    var t = this;
    return t.handleOperation(async () => {
      let r = t._getFinalPath(s);
      const i = T({}, t.headers);
      e != null && e.upsert && (i["x-upsert"] = "true");
      const n = await se(
          t.fetch,
          `${t.url}/object/upload/sign/${r}`,
          {},
          { headers: i },
        ),
        a = new URL(t.url + n.url),
        o = a.searchParams.get("token");
      if (!o) throw new ts("No token returned by API");
      return { signedUrl: a.toString(), path: s, token: o };
    });
  }
  async update(s, e, t) {
    return this.uploadOrUpdate("PUT", s, e, t);
  }
  async move(s, e, t) {
    var r = this;
    return r.handleOperation(
      async () =>
        await se(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: s,
            destinationKey: e,
            destinationBucket: t == null ? void 0 : t.destinationBucket,
          },
          { headers: r.headers },
        ),
    );
  }
  async copy(s, e, t) {
    var r = this;
    return r.handleOperation(async () => ({
      path: (
        await se(
          r.fetch,
          `${r.url}/object/copy`,
          {
            bucketId: r.bucketId,
            sourceKey: s,
            destinationKey: e,
            destinationBucket: t == null ? void 0 : t.destinationBucket,
          },
          { headers: r.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(s, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let i = r._getFinalPath(s);
      const n =
        typeof (t == null ? void 0 : t.transform) == "object" &&
        t.transform !== null &&
        Object.keys(t.transform).length > 0;
      let a = await se(
        r.fetch,
        `${r.url}/object/sign/${i}`,
        T({ expiresIn: e }, n ? { transform: t.transform } : {}),
        { headers: r.headers },
      );
      const o =
          t != null && t.download
            ? `&download=${t.download === !0 ? "" : t.download}`
            : "",
        l =
          n && a.signedURL.includes("/object/sign/")
            ? a.signedURL.replace("/object/sign/", "/render/image/sign/")
            : a.signedURL;
      return { signedUrl: encodeURI(`${r.url}${l}${o}`) };
    });
  }
  async createSignedUrls(s, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const i = await se(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: e, paths: s },
          { headers: r.headers },
        ),
        n =
          t != null && t.download
            ? `&download=${t.download === !0 ? "" : t.download}`
            : "";
      return i.map((a) =>
        T(
          T({}, a),
          {},
          {
            signedUrl: a.signedURL
              ? encodeURI(`${r.url}${a.signedURL}${n}`)
              : null,
          },
        ),
      );
    });
  }
  download(s, e, t) {
    const r =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      i = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      ),
      n = i ? `?${i}` : "",
      a = this._getFinalPath(s),
      o = () =>
        Pt(
          this.fetch,
          `${this.url}/${r}/${a}${n}`,
          { headers: this.headers, noResolveJson: !0 },
          t,
        );
    return new Fn(o, this.shouldThrowOnError);
  }
  async info(s) {
    var e = this;
    const t = e._getFinalPath(s);
    return e.handleOperation(async () =>
      Cs(
        await Pt(e.fetch, `${e.url}/object/info/${t}`, { headers: e.headers }),
      ),
    );
  }
  async exists(s) {
    var e = this;
    const t = e._getFinalPath(s);
    try {
      return (
        await qn(e.fetch, `${e.url}/object/${t}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (i) {
      if (e.shouldThrowOnError) throw i;
      if (ss(i)) {
        var r;
        const n =
          i instanceof _t
            ? i.status
            : i instanceof ei
              ? (r = i.originalError) === null || r === void 0
                ? void 0
                : r.status
              : void 0;
        if (n !== void 0 && [400, 404].includes(n))
          return { data: !1, error: i };
      }
      throw i;
    }
  }
  getPublicUrl(s, e) {
    const t = this._getFinalPath(s),
      r = [],
      i =
        e != null && e.download
          ? `download=${e.download === !0 ? "" : e.download}`
          : "";
    i !== "" && r.push(i);
    const n =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image"
          : "object",
      a = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {},
      );
    a !== "" && r.push(a);
    let o = r.join("&");
    return (
      o !== "" && (o = `?${o}`),
      { data: { publicUrl: encodeURI(`${this.url}/${n}/public/${t}${o}`) } }
    );
  }
  async remove(s) {
    var e = this;
    return e.handleOperation(
      async () =>
        await Fs(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: s },
          { headers: e.headers },
        ),
    );
  }
  async list(s, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const i = T(T(T({}, Mn), e), {}, { prefix: s || "" });
      return await se(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        i,
        { headers: r.headers },
        t,
      );
    });
  }
  async listV2(s, e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = T({}, s);
      return await se(
        t.fetch,
        `${t.url}/object/list-v2/${t.bucketId}`,
        r,
        { headers: t.headers },
        e,
      );
    });
  }
  encodeMetadata(s) {
    return JSON.stringify(s);
  }
  toBase64(s) {
    return typeof Buffer < "u" ? Buffer.from(s).toString("base64") : btoa(s);
  }
  _getFinalPath(s) {
    return `${this.bucketId}/${s.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(s) {
    return s.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(s) {
    const e = [];
    return (
      s.width && e.push(`width=${s.width}`),
      s.height && e.push(`height=${s.height}`),
      s.resize && e.push(`resize=${s.resize}`),
      s.format && e.push(`format=${s.format}`),
      s.quality && e.push(`quality=${s.quality}`),
      e.join("&")
    );
  }
};
const Wn = "2.99.2",
  Dt = { "X-Client-Info": `storage-js/${Wn}` };
var Hn = class extends mt {
    constructor(s, e = {}, t, r) {
      const i = new URL(s);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(i.hostname) &&
        !i.hostname.includes("storage.supabase.") &&
        (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
      const n = i.href.replace(/\/$/, ""),
        a = T(T({}, Dt), e);
      super(n, a, t, "storage");
    }
    async listBuckets(s) {
      var e = this;
      return e.handleOperation(async () => {
        const t = e.listBucketOptionsToQueryString(s);
        return await Pt(e.fetch, `${e.url}/bucket${t}`, { headers: e.headers });
      });
    }
    async getBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Pt(e.fetch, `${e.url}/bucket/${s}`, { headers: e.headers }),
      );
    }
    async createBucket(s, e = { public: !1 }) {
      var t = this;
      return t.handleOperation(
        async () =>
          await se(
            t.fetch,
            `${t.url}/bucket`,
            {
              id: s,
              name: s,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: t.headers },
          ),
      );
    }
    async updateBucket(s, e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Is(
            t.fetch,
            `${t.url}/bucket/${s}`,
            {
              id: s,
              name: s,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: t.headers },
          ),
      );
    }
    async emptyBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await se(
            e.fetch,
            `${e.url}/bucket/${s}/empty`,
            {},
            { headers: e.headers },
          ),
      );
    }
    async deleteBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Fs(e.fetch, `${e.url}/bucket/${s}`, {}, { headers: e.headers }),
      );
    }
    listBucketOptionsToQueryString(s) {
      const e = {};
      return (
        s &&
          ("limit" in s && (e.limit = String(s.limit)),
          "offset" in s && (e.offset = String(s.offset)),
          s.search && (e.search = s.search),
          s.sortColumn && (e.sortColumn = s.sortColumn),
          s.sortOrder && (e.sortOrder = s.sortOrder)),
        Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
      );
    }
  },
  Vn = class extends mt {
    constructor(s, e = {}, t) {
      const r = s.replace(/\/$/, ""),
        i = T(T({}, Dt), e);
      super(r, i, t, "storage");
    }
    async createBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await se(
            e.fetch,
            `${e.url}/bucket`,
            { name: s },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(s) {
      var e = this;
      return e.handleOperation(async () => {
        const t = new URLSearchParams();
        ((s == null ? void 0 : s.limit) !== void 0 &&
          t.set("limit", s.limit.toString()),
          (s == null ? void 0 : s.offset) !== void 0 &&
            t.set("offset", s.offset.toString()),
          s != null && s.sortColumn && t.set("sortColumn", s.sortColumn),
          s != null && s.sortOrder && t.set("sortOrder", s.sortOrder),
          s != null && s.search && t.set("search", s.search));
        const r = t.toString(),
          i = r ? `${e.url}/bucket?${r}` : `${e.url}/bucket`;
        return await Pt(e.fetch, i, { headers: e.headers });
      });
    }
    async deleteBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Fs(e.fetch, `${e.url}/bucket/${s}`, {}, { headers: e.headers }),
      );
    }
    from(s) {
      var e = this;
      if (!jn(s))
        throw new ts(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const t = new Pn({
          baseUrl: this.url,
          catalogName: s,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(t, {
        get(i, n) {
          const a = i[n];
          return typeof a != "function"
            ? a
            : async (...o) => {
                try {
                  return { data: await a.apply(i, o), error: null };
                } catch (l) {
                  if (r) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  },
  Gn = class extends mt {
    constructor(s, e = {}, t) {
      const r = s.replace(/\/$/, ""),
        i = T(T({}, Dt), {}, { "Content-Type": "application/json" }, e);
      super(r, i, t, "vectors");
    }
    async createIndex(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await X.post(e.fetch, `${e.url}/CreateIndex`, s, {
            headers: e.headers,
          })) || {},
      );
    }
    async getIndex(s, e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await X.post(
            t.fetch,
            `${t.url}/GetIndex`,
            { vectorBucketName: s, indexName: e },
            { headers: t.headers },
          ),
      );
    }
    async listIndexes(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await X.post(e.fetch, `${e.url}/ListIndexes`, s, {
            headers: e.headers,
          }),
      );
    }
    async deleteIndex(s, e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await X.post(
            t.fetch,
            `${t.url}/DeleteIndex`,
            { vectorBucketName: s, indexName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  zn = class extends mt {
    constructor(s, e = {}, t) {
      const r = s.replace(/\/$/, ""),
        i = T(T({}, Dt), {}, { "Content-Type": "application/json" }, e);
      super(r, i, t, "vectors");
    }
    async putVectors(s) {
      var e = this;
      if (s.vectors.length < 1 || s.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await X.post(e.fetch, `${e.url}/PutVectors`, s, {
            headers: e.headers,
          })) || {},
      );
    }
    async getVectors(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await X.post(e.fetch, `${e.url}/GetVectors`, s, {
            headers: e.headers,
          }),
      );
    }
    async listVectors(s) {
      var e = this;
      if (s.segmentCount !== void 0) {
        if (s.segmentCount < 1 || s.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          s.segmentIndex !== void 0 &&
          (s.segmentIndex < 0 || s.segmentIndex >= s.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${s.segmentCount - 1}`,
          );
      }
      return e.handleOperation(
        async () =>
          await X.post(e.fetch, `${e.url}/ListVectors`, s, {
            headers: e.headers,
          }),
      );
    }
    async queryVectors(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await X.post(e.fetch, `${e.url}/QueryVectors`, s, {
            headers: e.headers,
          }),
      );
    }
    async deleteVectors(s) {
      var e = this;
      if (s.keys.length < 1 || s.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await X.post(e.fetch, `${e.url}/DeleteVectors`, s, {
            headers: e.headers,
          })) || {},
      );
    }
  },
  Jn = class extends mt {
    constructor(s, e = {}, t) {
      const r = s.replace(/\/$/, ""),
        i = T(T({}, Dt), {}, { "Content-Type": "application/json" }, e);
      super(r, i, t, "vectors");
    }
    async createBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await X.post(
            e.fetch,
            `${e.url}/CreateVectorBucket`,
            { vectorBucketName: s },
            { headers: e.headers },
          )) || {},
      );
    }
    async getBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          await X.post(
            e.fetch,
            `${e.url}/GetVectorBucket`,
            { vectorBucketName: s },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(s = {}) {
      var e = this;
      return e.handleOperation(
        async () =>
          await X.post(e.fetch, `${e.url}/ListVectorBuckets`, s, {
            headers: e.headers,
          }),
      );
    }
    async deleteBucket(s) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await X.post(
            e.fetch,
            `${e.url}/DeleteVectorBucket`,
            { vectorBucketName: s },
            { headers: e.headers },
          )) || {},
      );
    }
  },
  Qn = class extends Jn {
    constructor(s, e = {}) {
      super(s, e.headers || {}, e.fetch);
    }
    from(s) {
      return new Yn(this.url, this.headers, s, this.fetch);
    }
    async createBucket(s) {
      var e = () => super.createBucket,
        t = this;
      return e().call(t, s);
    }
    async getBucket(s) {
      var e = () => super.getBucket,
        t = this;
      return e().call(t, s);
    }
    async listBuckets(s = {}) {
      var e = () => super.listBuckets,
        t = this;
      return e().call(t, s);
    }
    async deleteBucket(s) {
      var e = () => super.deleteBucket,
        t = this;
      return e().call(t, s);
    }
  },
  Yn = class extends Gn {
    constructor(s, e, t, r) {
      (super(s, e, r), (this.vectorBucketName = t));
    }
    async createIndex(s) {
      var e = () => super.createIndex,
        t = this;
      return e().call(
        t,
        T(T({}, s), {}, { vectorBucketName: t.vectorBucketName }),
      );
    }
    async listIndexes(s = {}) {
      var e = () => super.listIndexes,
        t = this;
      return e().call(
        t,
        T(T({}, s), {}, { vectorBucketName: t.vectorBucketName }),
      );
    }
    async getIndex(s) {
      var e = () => super.getIndex,
        t = this;
      return e().call(t, t.vectorBucketName, s);
    }
    async deleteIndex(s) {
      var e = () => super.deleteIndex,
        t = this;
      return e().call(t, t.vectorBucketName, s);
    }
    index(s) {
      return new Xn(
        this.url,
        this.headers,
        this.vectorBucketName,
        s,
        this.fetch,
      );
    }
  },
  Xn = class extends zn {
    constructor(s, e, t, r, i) {
      (super(s, e, i), (this.vectorBucketName = t), (this.indexName = r));
    }
    async putVectors(s) {
      var e = () => super.putVectors,
        t = this;
      return e().call(
        t,
        T(
          T({}, s),
          {},
          { vectorBucketName: t.vectorBucketName, indexName: t.indexName },
        ),
      );
    }
    async getVectors(s) {
      var e = () => super.getVectors,
        t = this;
      return e().call(
        t,
        T(
          T({}, s),
          {},
          { vectorBucketName: t.vectorBucketName, indexName: t.indexName },
        ),
      );
    }
    async listVectors(s = {}) {
      var e = () => super.listVectors,
        t = this;
      return e().call(
        t,
        T(
          T({}, s),
          {},
          { vectorBucketName: t.vectorBucketName, indexName: t.indexName },
        ),
      );
    }
    async queryVectors(s) {
      var e = () => super.queryVectors,
        t = this;
      return e().call(
        t,
        T(
          T({}, s),
          {},
          { vectorBucketName: t.vectorBucketName, indexName: t.indexName },
        ),
      );
    }
    async deleteVectors(s) {
      var e = () => super.deleteVectors,
        t = this;
      return e().call(
        t,
        T(
          T({}, s),
          {},
          { vectorBucketName: t.vectorBucketName, indexName: t.indexName },
        ),
      );
    }
  },
  Zn = class extends Hn {
    constructor(s, e = {}, t, r) {
      super(s, e, t, r);
    }
    from(s) {
      return new Kn(this.url, this.headers, s, this.fetch);
    }
    get vectors() {
      return new Qn(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new Vn(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const ri = "2.99.2",
  tt = 30 * 1e3,
  js = 3,
  ls = js * tt,
  ea = "http://localhost:9999",
  ta = "supabase.auth.token",
  sa = { "X-Client-Info": `gotrue-js/${ri}` },
  $s = "X-Supabase-Api-Version",
  ii = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  ra = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  ia = 10 * 60 * 1e3;
class Ct extends Error {
  constructor(e, t, r) {
    (super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = t),
      (this.code = r));
  }
}
function S(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class na extends Ct {
  constructor(e, t, r) {
    (super(e, t, r),
      (this.name = "AuthApiError"),
      (this.status = t),
      (this.code = r));
  }
}
function aa(s) {
  return S(s) && s.name === "AuthApiError";
}
class Ue extends Ct {
  constructor(e, t) {
    (super(e), (this.name = "AuthUnknownError"), (this.originalError = t));
  }
}
class ge extends Ct {
  constructor(e, t, r, i) {
    (super(e, r, i), (this.name = t), (this.status = r));
  }
}
class Y extends ge {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function us(s) {
  return S(s) && s.name === "AuthSessionMissingError";
}
class Qe extends ge {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Wt extends ge {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ht extends ge {
  constructor(e, t = null) {
    (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = t));
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
function oa(s) {
  return S(s) && s.name === "AuthImplicitGrantRedirectError";
}
class cr extends ge {
  constructor(e, t = null) {
    (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = t));
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
class la extends ge {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class xs extends ge {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function cs(s) {
  return S(s) && s.name === "AuthRetryableFetchError";
}
class hr extends ge {
  constructor(e, t, r) {
    (super(e, "AuthWeakPasswordError", t, "weak_password"), (this.reasons = r));
  }
}
class Us extends ge {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Qt =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  dr = ` 	
\r=`.split(""),
  ua = (() => {
    const s = new Array(128);
    for (let e = 0; e < s.length; e += 1) s[e] = -1;
    for (let e = 0; e < dr.length; e += 1) s[dr[e].charCodeAt(0)] = -2;
    for (let e = 0; e < Qt.length; e += 1) s[Qt[e].charCodeAt(0)] = e;
    return s;
  })();
function fr(s, e, t) {
  if (s !== null)
    for (e.queue = (e.queue << 8) | s, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (t(Qt[r]), (e.queuedBits -= 6));
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;
    ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (t(Qt[r]), (e.queuedBits -= 6));
    }
}
function ni(s, e, t) {
  const r = ua[s];
  if (r > -1)
    for (e.queue = (e.queue << 6) | r, e.queuedBits += 6; e.queuedBits >= 8; )
      (t((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function pr(s) {
  const e = [],
    t = (a) => {
      e.push(String.fromCodePoint(a));
    },
    r = { utf8seq: 0, codepoint: 0 },
    i = { queue: 0, queuedBits: 0 },
    n = (a) => {
      da(a, r, t);
    };
  for (let a = 0; a < s.length; a += 1) ni(s.charCodeAt(a), i, n);
  return e.join("");
}
function ca(s, e) {
  if (s <= 127) {
    e(s);
    return;
  } else if (s <= 2047) {
    (e(192 | (s >> 6)), e(128 | (s & 63)));
    return;
  } else if (s <= 65535) {
    (e(224 | (s >> 12)), e(128 | ((s >> 6) & 63)), e(128 | (s & 63)));
    return;
  } else if (s <= 1114111) {
    (e(240 | (s >> 18)),
      e(128 | ((s >> 12) & 63)),
      e(128 | ((s >> 6) & 63)),
      e(128 | (s & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`);
}
function ha(s, e) {
  for (let t = 0; t < s.length; t += 1) {
    let r = s.charCodeAt(t);
    if (r > 55295 && r <= 56319) {
      const i = ((r - 55296) * 1024) & 65535;
      ((r = (((s.charCodeAt(t + 1) - 56320) & 65535) | i) + 65536), (t += 1));
    }
    ca(r, e);
  }
}
function da(s, e, t) {
  if (e.utf8seq === 0) {
    if (s <= 127) {
      t(s);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!((s >> (7 - r)) & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2) e.codepoint = s & 31;
    else if (e.utf8seq === 3) e.codepoint = s & 15;
    else if (e.utf8seq === 4) e.codepoint = s & 7;
    else throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (s <= 127) throw new Error("Invalid UTF-8 sequence");
    ((e.codepoint = (e.codepoint << 6) | (s & 63)),
      (e.utf8seq -= 1),
      e.utf8seq === 0 && t(e.codepoint));
  }
}
function it(s) {
  const e = [],
    t = { queue: 0, queuedBits: 0 },
    r = (i) => {
      e.push(i);
    };
  for (let i = 0; i < s.length; i += 1) ni(s.charCodeAt(i), t, r);
  return new Uint8Array(e);
}
function fa(s) {
  const e = [];
  return (ha(s, (t) => e.push(t)), new Uint8Array(e));
}
function Le(s) {
  const e = [],
    t = { queue: 0, queuedBits: 0 },
    r = (i) => {
      e.push(i);
    };
  return (s.forEach((i) => fr(i, t, r)), fr(null, t, r), e.join(""));
}
function pa(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function ga() {
  return Symbol("auth-callback");
}
const W = () => typeof window < "u" && typeof document < "u",
  Ie = { tested: !1, writable: !1 },
  ai = () => {
    if (!W()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Ie.tested) return Ie.writable;
    const s = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(s, s),
        globalThis.localStorage.removeItem(s),
        (Ie.tested = !0),
        (Ie.writable = !0));
    } catch {
      ((Ie.tested = !0), (Ie.writable = !1));
    }
    return Ie.writable;
  };
function ya(s) {
  const e = {},
    t = new URL(s);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((i, n) => {
        e[n] = i;
      });
    } catch {}
  return (
    t.searchParams.forEach((r, i) => {
      e[i] = r;
    }),
    e
  );
}
const oi = (s) => (s ? (...e) => s(...e) : (...e) => fetch(...e)),
  va = (s) =>
    typeof s == "object" &&
    s !== null &&
    "status" in s &&
    "ok" in s &&
    "json" in s &&
    typeof s.json == "function",
  st = async (s, e, t) => {
    await s.setItem(e, JSON.stringify(t));
  },
  je = async (s, e) => {
    const t = await s.getItem(e);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  },
  K = async (s, e) => {
    await s.removeItem(e);
  };
class rs {
  constructor() {
    this.promise = new rs.promiseConstructor((e, t) => {
      ((this.resolve = e), (this.reject = t));
    });
  }
}
rs.promiseConstructor = Promise;
function Vt(s) {
  const e = s.split(".");
  if (e.length !== 3) throw new Us("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!ra.test(e[r])) throw new Us("JWT not in base64url format");
  return {
    header: JSON.parse(pr(e[0])),
    payload: JSON.parse(pr(e[1])),
    signature: it(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function ma(s) {
  return await new Promise((e) => {
    setTimeout(() => e(null), s);
  });
}
function wa(s, e) {
  return new Promise((r, i) => {
    (async () => {
      for (let n = 0; n < 1 / 0; n++)
        try {
          const a = await s(n);
          if (!e(n, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!e(n, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function ba(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function _a() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = t.length;
    let i = "";
    for (let n = 0; n < 56; n++) i += t.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return (crypto.getRandomValues(e), Array.from(e, ba).join(""));
}
async function Sa(s) {
  const t = new TextEncoder().encode(s),
    r = await crypto.subtle.digest("SHA-256", t),
    i = new Uint8Array(r);
  return Array.from(i)
    .map((n) => String.fromCharCode(n))
    .join("");
}
async function ka(s) {
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
      s
    );
  const t = await Sa(s);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ye(s, e, t = !1) {
  const r = _a();
  let i = r;
  (t && (i += "/PASSWORD_RECOVERY"), await st(s, `${e}-code-verifier`, i));
  const n = await ka(r);
  return [n, r === n ? "plain" : "s256"];
}
const Ea = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Oa(s) {
  const e = s.headers.get($s);
  if (!e || !e.match(Ea)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Ta(s) {
  if (!s) throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (s <= e) throw new Error("JWT has expired");
}
function Ra(s) {
  switch (s) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Aa = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Xe(s) {
  if (!Aa.test(s))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function hs() {
  const s = {};
  return new Proxy(s, {
    get: (e, t) => {
      if (t === "__isUserNotAvailableProxy") return !0;
      if (typeof t == "symbol") {
        const r = t.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (e, t) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (e, t) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function Pa(s, e) {
  return new Proxy(s, {
    get: (t, r, i) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)" ||
          n === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(t, r, i);
      }
      return (
        !e.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (e.value = !0)),
        Reflect.get(t, r, i)
      );
    },
  });
}
function gr(s) {
  return JSON.parse(JSON.stringify(s));
}
const $e = (s) =>
    s.msg || s.message || s.error_description || s.error || JSON.stringify(s),
  Ca = [502, 503, 504];
async function yr(s) {
  var e;
  if (!va(s)) throw new xs($e(s), 0);
  if (Ca.includes(s.status)) throw new xs($e(s), s.status);
  let t;
  try {
    t = await s.json();
  } catch (n) {
    throw new Ue($e(n), n);
  }
  let r;
  const i = Oa(s);
  if (
    (i &&
    i.getTime() >= ii["2024-01-01"].timestamp &&
    typeof t == "object" &&
    t &&
    typeof t.code == "string"
      ? (r = t.code)
      : typeof t == "object" &&
        t &&
        typeof t.error_code == "string" &&
        (r = t.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new hr(
        $e(t),
        s.status,
        ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          [],
      );
    if (r === "session_not_found") throw new Y();
  } else if (
    typeof t == "object" &&
    t &&
    typeof t.weak_password == "object" &&
    t.weak_password &&
    Array.isArray(t.weak_password.reasons) &&
    t.weak_password.reasons.length &&
    t.weak_password.reasons.reduce((n, a) => n && typeof a == "string", !0)
  )
    throw new hr($e(t), s.status, t.weak_password.reasons);
  throw new na($e(t), s.status || 500, r);
}
const Ia = (s, e, t, r) => {
  const i = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET"
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers,
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), t));
};
async function E(s, e, t, r) {
  var i;
  const n = Object.assign({}, r == null ? void 0 : r.headers);
  (n[$s] || (n[$s] = ii["2024-01-01"].name),
    r != null && r.jwt && (n.Authorization = `Bearer ${r.jwt}`));
  const a =
    (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length
      ? "?" + new URLSearchParams(a).toString()
      : "",
    l = await ja(
      s,
      e,
      t + o,
      { headers: n, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body,
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function ja(s, e, t, r, i, n) {
  const a = Ia(e, r, i, n);
  let o;
  try {
    o = await s(t, Object.assign({}, a));
  } catch (l) {
    throw (console.error(l), new xs($e(l), 0));
  }
  if ((o.ok || (await yr(o)), r != null && r.noResolveJson)) return o;
  try {
    return await o.json();
  } catch (l) {
    await yr(l);
  }
}
function te(s) {
  var e;
  let t = null;
  Ua(s) &&
    ((t = Object.assign({}, s)),
    s.expires_at || (t.expires_at = pa(s.expires_in)));
  const r = (e = s.user) !== null && e !== void 0 ? e : s;
  return { data: { session: t, user: r }, error: null };
}
function vr(s) {
  const e = te(s);
  return (
    !e.error &&
      s.weak_password &&
      typeof s.weak_password == "object" &&
      Array.isArray(s.weak_password.reasons) &&
      s.weak_password.reasons.length &&
      s.weak_password.message &&
      typeof s.weak_password.message == "string" &&
      s.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) &&
      (e.data.weak_password = s.weak_password),
    e
  );
}
function me(s) {
  var e;
  return {
    data: { user: (e = s.user) !== null && e !== void 0 ? e : s },
    error: null,
  };
}
function $a(s) {
  return { data: s, error: null };
}
function xa(s) {
  const {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: i,
      verification_type: n,
    } = s,
    a = es(s, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    o = {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: i,
      verification_type: n,
    },
    l = Object.assign({}, a);
  return { data: { properties: o, user: l }, error: null };
}
function mr(s) {
  return s;
}
function Ua(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const ds = ["global", "local", "others"];
class La {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    ((this.url = e),
      (this.headers = t),
      (this.fetch = oi(r)),
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
  async signOut(e, t = ds[0]) {
    if (ds.indexOf(t) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${ds.join(", ")}`,
      );
    try {
      return (
        await E(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (S(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(e, t = {}) {
    try {
      return await E(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: me,
      });
    } catch (r) {
      if (S(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(e) {
    try {
      const { options: t } = e,
        r = es(e, ["options"]),
        i = Object.assign(Object.assign({}, r), t);
      return (
        "newEmail" in r &&
          ((i.new_email = r == null ? void 0 : r.newEmail), delete i.newEmail),
        await E(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: xa,
          redirectTo: t == null ? void 0 : t.redirectTo,
        })
      );
    } catch (t) {
      if (S(t)) return { data: { properties: null, user: null }, error: t };
      throw t;
    }
  }
  async createUser(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: me,
      });
    } catch (t) {
      if (S(t)) return { data: { user: null }, error: t };
      throw t;
    }
  }
  async listUsers(e) {
    var t, r, i, n, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        h = await E(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (t = e == null ? void 0 : e.page) === null || t === void 0
                  ? void 0
                  : t.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (n =
                (i = e == null ? void 0 : e.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && n !== void 0
                ? n
                : "",
          },
          xform: mr,
        });
      if (h.error) throw h.error;
      const f = await h.json(),
        p =
          (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        d =
          (l =
            (o = h.headers.get("link")) === null || o === void 0
              ? void 0
              : o.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((g) => {
            const y = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)),
              v = JSON.parse(g.split(";")[1].split("=")[1]);
            u[`${v}Page`] = y;
          }),
          (u.total = parseInt(p))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (S(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(e) {
    Xe(e);
    try {
      return await E(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: me,
      });
    } catch (t) {
      if (S(t)) return { data: { user: null }, error: t };
      throw t;
    }
  }
  async updateUserById(e, t) {
    Xe(e);
    try {
      return await E(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: me,
      });
    } catch (r) {
      if (S(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(e, t = !1) {
    Xe(e);
    try {
      return await E(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: t },
        xform: me,
      });
    } catch (r) {
      if (S(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    Xe(e.userId);
    try {
      const { data: t, error: r } = await E(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        },
      );
      return { data: t, error: r };
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    (Xe(e.userId), Xe(e.id));
    try {
      return {
        data: await E(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _listOAuthClients(e) {
    var t, r, i, n, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        h = await E(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (t = e == null ? void 0 : e.page) === null || t === void 0
                  ? void 0
                  : t.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (n =
                (i = e == null ? void 0 : e.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && n !== void 0
                ? n
                : "",
          },
          xform: mr,
        });
      if (h.error) throw h.error;
      const f = await h.json(),
        p =
          (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        d =
          (l =
            (o = h.headers.get("link")) === null || o === void 0
              ? void 0
              : o.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((g) => {
            const y = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)),
              v = JSON.parse(g.split(";")[1].split("=")[1]);
            u[`${v}Page`] = y;
          }),
          (u.total = parseInt(p))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (S(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null }),
      });
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await E(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (t) => ({ data: t, error: null }) },
      );
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _updateOAuthClient(e, t) {
    try {
      return await E(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: t,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (S(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await E(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await E(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (t) => ({ data: t, error: null }) },
      );
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _listCustomProviders(e) {
    try {
      const t = {};
      return (
        e != null && e.type && (t.type = e.type),
        await E(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: t,
          xform: (r) => {
            var i;
            return {
              data: {
                providers:
                  (i = r == null ? void 0 : r.providers) !== null &&
                  i !== void 0
                    ? i
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (t) {
      if (S(t)) return { data: { providers: [] }, error: t };
      throw t;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null }),
      });
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await E(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${e}`,
        { headers: this.headers, xform: (t) => ({ data: t, error: null }) },
      );
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
  async _updateCustomProvider(e, t) {
    try {
      return await E(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${e}`,
        {
          body: t,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (S(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      return (
        await E(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${e}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (t) {
      if (S(t)) return { data: null, error: t };
      throw t;
    }
  }
}
function wr(s = {}) {
  return {
    getItem: (e) => s[e] || null,
    setItem: (e, t) => {
      s[e] = t;
    },
    removeItem: (e) => {
      delete s[e];
    },
  };
}
const ue = {
  debug: !!(
    globalThis &&
    ai() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class li extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
}
class Da extends li {}
async function Na(s, e, t) {
  ue.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
  const r = new globalThis.AbortController();
  (e > 0 &&
    setTimeout(() => {
      (r.abort(),
        ue.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            s,
          ));
    }, e),
    await Promise.resolve());
  try {
    return await globalThis.navigator.locks.request(
      s,
      e === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: r.signal },
      async (i) => {
        if (i) {
          ue.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              s,
              i.name,
            );
          try {
            return await t();
          } finally {
            ue.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                s,
                i.name,
              );
          }
        } else {
          if (e === 0)
            throw (
              ue.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  s,
                ),
              new Da(
                `Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`,
              )
            );
          if (ue.debug)
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
            await t()
          );
        }
      },
    );
  } catch (i) {
    if ((i == null ? void 0 : i.name) === "AbortError" && e > 0)
      return (
        ue.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
            s,
          ),
        console.warn(
          `@supabase/gotrue-js: Lock "${s}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`,
        ),
        await Promise.resolve().then(() =>
          globalThis.navigator.locks.request(
            s,
            { mode: "exclusive", steal: !0 },
            async (n) => {
              if (n) {
                ue.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                    s,
                    n.name,
                  );
                try {
                  return await t();
                } finally {
                  ue.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released (stolen)",
                      s,
                      n.name,
                    );
                }
              } else
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                  ),
                  await t()
                );
            },
          ),
        )
      );
    throw i;
  }
}
function qa() {
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
function ui(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function Ba(s) {
  return parseInt(s, 16);
}
function Fa(s) {
  const e = new TextEncoder().encode(s);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function Ma(s) {
  var e;
  const {
    chainId: t,
    domain: r,
    expirationTime: i,
    issuedAt: n = new Date(),
    nonce: a,
    notBefore: o,
    requestId: l,
    resources: u,
    scheme: h,
    uri: f,
    version: p,
  } = s;
  {
    if (!Number.isInteger(t))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`,
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (a && a.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`,
      );
    if (!f)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (p !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${p}`,
      );
    if (
      !((e = s.statement) === null || e === void 0) &&
      e.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`,
      );
  }
  const d = ui(s.address),
    g = h ? `${h}://${r}` : r,
    y = s.statement
      ? `${s.statement}
`
      : "",
    v = `${g} wants you to sign in with your Ethereum account:
${d}

${y}`;
  let w = `URI: ${f}
Version: ${p}
Chain ID: ${t}${
    a
      ? `
Nonce: ${a}`
      : ""
  }
Issued At: ${n.toISOString()}`;
  if (
    (i &&
      (w += `
Expiration Time: ${i.toISOString()}`),
    o &&
      (w += `
Not Before: ${o.toISOString()}`),
    l &&
      (w += `
Request ID: ${l}`),
    u)
  ) {
    let b = `
Resources:`;
    for (const m of u) {
      if (!m || typeof m != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${m}`,
        );
      b += `
- ${m}`;
    }
    w += b;
  }
  return `${v}
${w}`;
}
class q extends Error {
  constructor({ message: e, code: t, cause: r, name: i }) {
    var n;
    (super(e, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (n = i ?? (r instanceof Error ? r.name : void 0)) !== null &&
        n !== void 0
          ? n
          : "Unknown Error"),
      (this.code = t));
  }
}
class Yt extends q {
  constructor(e, t) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = t));
  }
}
function Ka({ error: s, options: e }) {
  var t, r, i;
  const { publicKey: n } = e;
  if (!n) throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new q({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s,
      });
  } else if (s.name === "ConstraintError") {
    if (
      ((t = n.authenticatorSelection) === null || t === void 0
        ? void 0
        : t.requireResidentKey) === !0
    )
      return new q({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s,
      });
    if (
      e.mediation === "conditional" &&
      ((r = n.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new q({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s,
      });
    if (
      ((i = n.authenticatorSelection) === null || i === void 0
        ? void 0
        : i.userVerification) === "required"
    )
      return new q({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s,
      });
  } else {
    if (s.name === "InvalidStateError")
      return new q({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s,
      });
    if (s.name === "NotAllowedError")
      return new q({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s,
      });
    if (s.name === "NotSupportedError")
      return n.pubKeyCredParams.filter((o) => o.type === "public-key")
        .length === 0
        ? new q({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: s,
          })
        : new q({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: s,
          });
    if (s.name === "SecurityError") {
      const a = window.location.hostname;
      if (ci(a)) {
        if (n.rp.id !== a)
          return new q({
            message: `The RP ID "${n.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s,
          });
      } else
        return new q({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: s,
        });
    } else if (s.name === "TypeError") {
      if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64)
        return new q({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s,
        });
    } else if (s.name === "UnknownError")
      return new q({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s,
      });
  }
  return new q({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s,
  });
}
function Wa({ error: s, options: e }) {
  const { publicKey: t } = e;
  if (!t) throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new q({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s,
      });
  } else {
    if (s.name === "NotAllowedError")
      return new q({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s,
      });
    if (s.name === "SecurityError") {
      const r = window.location.hostname;
      if (ci(r)) {
        if (t.rpId !== r)
          return new q({
            message: `The RP ID "${t.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s,
          });
      } else
        return new q({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: s,
        });
    } else if (s.name === "UnknownError")
      return new q({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s,
      });
  }
  return new q({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s,
  });
}
class Ha {
  createNewAbortSignal() {
    if (this.controller) {
      const t = new Error("Cancelling existing WebAuthn API call for new one");
      ((t.name = "AbortError"), this.controller.abort(t));
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
const Va = new Ha();
function Ga(s) {
  if (!s) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(s);
  const { challenge: e, user: t, excludeCredentials: r } = s,
    i = es(s, ["challenge", "user", "excludeCredentials"]),
    n = it(e).buffer,
    a = Object.assign(Object.assign({}, t), { id: it(t.id).buffer }),
    o = Object.assign(Object.assign({}, i), { challenge: n, user: a });
  if (r && r.length > 0) {
    o.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: it(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return o;
}
function za(s) {
  if (!s) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: e, allowCredentials: t } = s,
    r = es(s, ["challenge", "allowCredentials"]),
    i = it(e).buffer,
    n = Object.assign(Object.assign({}, r), { challenge: i });
  if (t && t.length > 0) {
    n.allowCredentials = new Array(t.length);
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      n.allowCredentials[a] = Object.assign(Object.assign({}, o), {
        id: it(o.id).buffer,
        type: o.type || "public-key",
        transports: o.transports,
      });
    }
  }
  return n;
}
function Ja(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function") return s.toJSON();
  const t = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: Le(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: Le(new Uint8Array(s.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    authenticatorAttachment:
      (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function Qa(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function") return s.toJSON();
  const t = s,
    r = s.getClientExtensionResults(),
    i = s.response;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      authenticatorData: Le(new Uint8Array(i.authenticatorData)),
      clientDataJSON: Le(new Uint8Array(i.clientDataJSON)),
      signature: Le(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? Le(new Uint8Array(i.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function ci(s) {
  return s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s);
}
function br() {
  var s, e;
  return !!(
    W() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((s = navigator == null ? void 0 : navigator.credentials) === null ||
    s === void 0
      ? void 0
      : s.create) == "function" &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.get) == "function"
  );
}
async function Ya(s) {
  try {
    const e = await navigator.credentials.create(s);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Yt("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Yt("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Ka({ error: e, options: s }) };
  }
}
async function Xa(s) {
  try {
    const e = await navigator.credentials.get(s);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Yt("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Yt("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Wa({ error: e, options: s }) };
  }
}
const Za = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  eo = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Xt(...s) {
  const e = (i) => i !== null && typeof i == "object" && !Array.isArray(i),
    t = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i),
    r = {};
  for (const i of s)
    if (i)
      for (const n in i) {
        const a = i[n];
        if (a !== void 0)
          if (Array.isArray(a)) r[n] = a;
          else if (t(a)) r[n] = a;
          else if (e(a)) {
            const o = r[n];
            e(o) ? (r[n] = Xt(o, a)) : (r[n] = Xt(a));
          } else r[n] = a;
      }
  return r;
}
function to(s, e) {
  return Xt(Za, s, e || {});
}
function so(s, e) {
  return Xt(eo, s, e || {});
}
class ro {
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
    { factorId: e, webauthn: t, friendlyName: r, signal: i },
    n,
  ) {
    var a;
    try {
      const { data: o, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t,
      });
      if (!o) return { data: null, error: l };
      const u = i ?? Va.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: h } = o.webauthn.credential_options.publicKey;
        if (!h.name) {
          const f = r;
          if (f) h.name = `${h.id}:${f}`;
          else {
            const d = (await this.client.getUser()).data.user,
              g =
                ((a = d == null ? void 0 : d.user_metadata) === null ||
                a === void 0
                  ? void 0
                  : a.name) ||
                (d == null ? void 0 : d.email) ||
                (d == null ? void 0 : d.id) ||
                "User";
            h.name = `${h.id}:${g}`;
          }
        }
        h.displayName || (h.displayName = h.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const h = to(
              o.webauthn.credential_options.publicKey,
              n == null ? void 0 : n.create,
            ),
            { data: f, error: p } = await Ya({ publicKey: h, signal: u });
          return f
            ? {
                data: {
                  factorId: e,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: f },
                },
                error: null,
              }
            : { data: null, error: p };
        }
        case "request": {
          const h = so(
              o.webauthn.credential_options.publicKey,
              n == null ? void 0 : n.request,
            ),
            { data: f, error: p } = await Xa(
              Object.assign(Object.assign({}, o.webauthn.credential_options), {
                publicKey: h,
                signal: u,
              }),
            );
          return f
            ? {
                data: {
                  factorId: e,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: f },
                },
                error: null,
              }
            : { data: null, error: p };
        }
      }
    } catch (o) {
      return S(o)
        ? { data: null, error: o }
        : { data: null, error: new Ue("Unexpected error in challenge", o) };
    }
  }
  async _verify({ challengeId: e, factorId: t, webauthn: r }) {
    return this.client.mfa.verify({ factorId: t, challengeId: e, webauthn: r });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: t = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: i,
      } = {},
    },
    n,
  ) {
    if (!t)
      return {
        data: null,
        error: new Ct("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!br())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null),
        };
      const { data: a, error: o } = await this.challenge(
        { factorId: e, webauthn: { rpId: t, rpOrigins: r }, signal: i },
        { request: n },
      );
      if (!a) return { data: null, error: o };
      const { webauthn: l } = a;
      return this._verify({
        factorId: e,
        challengeId: a.challengeId,
        webauthn: {
          type: l.type,
          rpId: t,
          rpOrigins: r,
          credential_response: l.credential_response,
        },
      });
    } catch (a) {
      return S(a)
        ? { data: null, error: a }
        : { data: null, error: new Ue("Unexpected error in authenticate", a) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: t = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: i,
      } = {},
    },
    n,
  ) {
    if (!t)
      return {
        data: null,
        error: new Ct("rpId is required for WebAuthn registration"),
      };
    try {
      if (!br())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null),
        };
      const { data: a, error: o } = await this._enroll({ friendlyName: e });
      if (!a)
        return (
          await this.client.mfa
            .listFactors()
            .then((h) => {
              var f;
              return (f = h.data) === null || f === void 0
                ? void 0
                : f.all.find(
                    (p) =>
                      p.factor_type === "webauthn" &&
                      p.friendly_name === e &&
                      p.status !== "unverified",
                  );
            })
            .then((h) =>
              h
                ? this.client.mfa.unenroll({
                    factorId: h == null ? void 0 : h.id,
                  })
                : void 0,
            ),
          { data: null, error: o }
        );
      const { data: l, error: u } = await this._challenge(
        {
          factorId: a.id,
          friendlyName: a.friendly_name,
          webauthn: { rpId: t, rpOrigins: r },
          signal: i,
        },
        { create: n },
      );
      return l
        ? this._verify({
            factorId: a.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: t,
              rpOrigins: r,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (a) {
      return S(a)
        ? { data: null, error: a }
        : { data: null, error: new Ue("Unexpected error in register", a) };
    }
  }
}
qa();
const io = {
  url: ea,
  storageKey: ta,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: sa,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
};
async function _r(s, e, t) {
  return await t();
}
const Ze = {};
class It {
  get jwks() {
    var e, t;
    return (t =
      (e = Ze[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && t !== void 0
      ? t
      : { keys: [] };
  }
  set jwks(e) {
    Ze[this.storageKey] = Object.assign(
      Object.assign({}, Ze[this.storageKey]),
      { jwks: e },
    );
  }
  get jwks_cached_at() {
    var e, t;
    return (t =
      (e = Ze[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && t !== void 0
      ? t
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Ze[this.storageKey] = Object.assign(
      Object.assign({}, Ze[this.storageKey]),
      { cachedAt: e },
    );
  }
  constructor(e) {
    var t, r, i;
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
    const n = Object.assign(Object.assign({}, io), e);
    if (
      ((this.storageKey = n.storageKey),
      (this.instanceID =
        (t = It.nextInstanceID[this.storageKey]) !== null && t !== void 0
          ? t
          : 0),
      (It.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!n.debug),
      typeof n.debug == "function" && (this.logger = n.debug),
      this.instanceID > 0 && W())
    ) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(a), this.logDebugMessages && console.trace(a));
    }
    if (
      ((this.persistSession = n.persistSession),
      (this.autoRefreshToken = n.autoRefreshToken),
      (this.admin = new La({ url: n.url, headers: n.headers, fetch: n.fetch })),
      (this.url = n.url),
      (this.headers = n.headers),
      (this.fetch = oi(n.fetch)),
      (this.lock = n.lock || _r),
      (this.detectSessionInUrl = n.detectSessionInUrl),
      (this.flowType = n.flowType),
      (this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader),
      (this.throwOnError = n.throwOnError),
      (this.lockAcquireTimeout = n.lockAcquireTimeout),
      n.lock
        ? (this.lock = n.lock)
        : this.persistSession &&
            W() &&
            !(
              (r = globalThis == null ? void 0 : globalThis.navigator) ===
                null || r === void 0
            ) &&
            r.locks
          ? (this.lock = Na)
          : (this.lock = _r),
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
        webauthn: new ro(this),
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
            : ai()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = wr(this.memoryStorage))),
          n.userStorage && (this.userStorage = n.userStorage))
        : ((this.memoryStorage = {}), (this.storage = wr(this.memoryStorage))),
      W() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (a) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          a,
        );
      }
      (i = this.broadcastChannel) === null ||
        i === void 0 ||
        i.addEventListener("message", async (a) => {
          this._debug(
            "received broadcast notification from other tab or client",
            a,
          );
          try {
            await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
          } catch (o) {
            this._debug("#broadcastChannel", "error", o);
          }
        });
    }
    n.skipAutoInitialize ||
      this.initialize().catch((a) => {
        this._debug("#initialize()", "error", a);
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${ri}) ${new Date().toISOString()}`;
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
      let t = {},
        r = "none";
      if (
        (W() &&
          ((t = ya(window.location.href)),
          this._isImplicitGrantCallback(t)
            ? (r = "implicit")
            : (await this._isPKCECallback(t)) && (r = "pkce")),
        W() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: i, error: n } = await this._getSessionFromURL(t, r);
        if (n) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              n,
            ),
            oa(n))
          ) {
            const l =
              (e = n.details) === null || e === void 0 ? void 0 : e.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: n };
          }
          return { error: n };
        }
        const { session: a, redirectType: o } = i;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            a,
            "redirect type",
            o,
          ),
          await this._saveSession(a),
          setTimeout(async () => {
            o === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a)
              : await this._notifyAllSubscribers("SIGNED_IN", a);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (t) {
      return S(t)
        ? this._returnResult({ error: t })
        : this._returnResult({
            error: new Ue("Unexpected error during initialization", t),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(e) {
    var t, r, i;
    try {
      const n = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (t = e == null ? void 0 : e.options) === null || t === void 0
                  ? void 0
                  : t.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (i = e == null ? void 0 : e.options) === null || i === void 0
                  ? void 0
                  : i.captchaToken,
            },
          },
          xform: te,
        }),
        { data: a, error: o } = n;
      if (o || !a)
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (n) {
      if (S(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signUp(e) {
    var t, r, i;
    try {
      let n;
      if ("email" in e) {
        const { email: h, password: f, options: p } = e;
        let d = null,
          g = null;
        (this.flowType === "pkce" &&
          ([d, g] = await Ye(this.storage, this.storageKey)),
          (n = await E(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: p == null ? void 0 : p.emailRedirectTo,
            body: {
              email: h,
              password: f,
              data:
                (t = p == null ? void 0 : p.data) !== null && t !== void 0
                  ? t
                  : {},
              gotrue_meta_security: {
                captcha_token: p == null ? void 0 : p.captchaToken,
              },
              code_challenge: d,
              code_challenge_method: g,
            },
            xform: te,
          })));
      } else if ("phone" in e) {
        const { phone: h, password: f, options: p } = e;
        n = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: h,
            password: f,
            data:
              (r = p == null ? void 0 : p.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (i = p == null ? void 0 : p.channel) !== null && i !== void 0
                ? i
                : "sms",
            gotrue_meta_security: {
              captcha_token: p == null ? void 0 : p.captchaToken,
            },
          },
          xform: te,
        });
      } else
        throw new Wt(
          "You must provide either an email or phone number and a password",
        );
      const { data: a, error: o } = n;
      if (o || !a)
        return (
          await K(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: o })
        );
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (n) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(n)))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: n, password: a, options: o } = e;
        t = await E(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: n,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: vr,
          },
        );
      } else if ("phone" in e) {
        const { phone: n, password: a, options: o } = e;
        t = await E(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: n,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: vr,
          },
        );
      } else
        throw new Wt(
          "You must provide either an email or phone number and a password",
        );
      const { data: r, error: i } = t;
      if (i)
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      if (!r || !r.session || !r.user) {
        const n = new Qe();
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
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
          error: i,
        })
      );
    } catch (t) {
      if (S(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async signInWithOAuth(e) {
    var t, r, i, n;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
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
    const { chain: t } = e;
    switch (t) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
    }
  }
  async signInWithEthereum(e) {
    var t, r, i, n, a, o, l, u, h, f, p;
    let d, g;
    if ("message" in e) ((d = e.message), (g = e.signature));
    else {
      const { chain: y, wallet: v, statement: w, options: b } = e;
      let m;
      if (W())
        if (typeof v == "object") m = v;
        else {
          const I = window;
          if (
            "ethereum" in I &&
            typeof I.ethereum == "object" &&
            "request" in I.ethereum &&
            typeof I.ethereum.request == "function"
          )
            m = I.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof v != "object" || !(b != null && b.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        m = v;
      }
      const k = new URL(
          (t = b == null ? void 0 : b.url) !== null && t !== void 0
            ? t
            : window.location.href,
        ),
        C = await m
          .request({ method: "eth_requestAccounts" })
          .then((I) => I)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!C || C.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const A = ui(C[0]);
      let x =
        (r = b == null ? void 0 : b.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!x) {
        const I = await m.request({ method: "eth_chainId" });
        x = Ba(I);
      }
      const U = {
        domain: k.host,
        address: A,
        statement: w,
        uri: k.href,
        version: "1",
        chainId: x,
        nonce:
          (i = b == null ? void 0 : b.signInWithEthereum) === null ||
          i === void 0
            ? void 0
            : i.nonce,
        issuedAt:
          (a =
            (n = b == null ? void 0 : b.signInWithEthereum) === null ||
            n === void 0
              ? void 0
              : n.issuedAt) !== null && a !== void 0
            ? a
            : new Date(),
        expirationTime:
          (o = b == null ? void 0 : b.signInWithEthereum) === null ||
          o === void 0
            ? void 0
            : o.expirationTime,
        notBefore:
          (l = b == null ? void 0 : b.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (u = b == null ? void 0 : b.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (h = b == null ? void 0 : b.signInWithEthereum) === null ||
          h === void 0
            ? void 0
            : h.resources,
      };
      ((d = Ma(U)),
        (g = await m.request({ method: "personal_sign", params: [Fa(d), A] })));
    }
    try {
      const { data: y, error: v } = await E(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: d, signature: g },
            !((f = e.options) === null || f === void 0) && f.captchaToken
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
          xform: te,
        },
      );
      if (v) throw v;
      if (!y || !y.session || !y.user) {
        const w = new Qe();
        return this._returnResult({
          data: { user: null, session: null },
          error: w,
        });
      }
      return (
        y.session &&
          (await this._saveSession(y.session),
          await this._notifyAllSubscribers("SIGNED_IN", y.session)),
        this._returnResult({ data: Object.assign({}, y), error: v })
      );
    } catch (y) {
      if (S(y))
        return this._returnResult({
          data: { user: null, session: null },
          error: y,
        });
      throw y;
    }
  }
  async signInWithSolana(e) {
    var t, r, i, n, a, o, l, u, h, f, p, d;
    let g, y;
    if ("message" in e) ((g = e.message), (y = e.signature));
    else {
      const { chain: v, wallet: w, statement: b, options: m } = e;
      let k;
      if (W())
        if (typeof w == "object") k = w;
        else {
          const A = window;
          if (
            "solana" in A &&
            typeof A.solana == "object" &&
            (("signIn" in A.solana && typeof A.solana.signIn == "function") ||
              ("signMessage" in A.solana &&
                typeof A.solana.signMessage == "function"))
          )
            k = A.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof w != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        k = w;
      }
      const C = new URL(
        (t = m == null ? void 0 : m.url) !== null && t !== void 0
          ? t
          : window.location.href,
      );
      if ("signIn" in k && k.signIn) {
        const A = await k.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                m == null ? void 0 : m.signInWithSolana,
              ),
              { version: "1", domain: C.host, uri: C.href },
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
          ((g =
            typeof x.signedMessage == "string"
              ? x.signedMessage
              : new TextDecoder().decode(x.signedMessage)),
            (y = x.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in k) ||
          typeof k.signMessage != "function" ||
          !("publicKey" in k) ||
          typeof k != "object" ||
          !k.publicKey ||
          !("toBase58" in k.publicKey) ||
          typeof k.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        g = [
          `${C.host} wants you to sign in with your Solana account:`,
          k.publicKey.toBase58(),
          ...(b ? ["", b, ""] : [""]),
          "Version: 1",
          `URI: ${C.href}`,
          `Issued At: ${(i = (r = m == null ? void 0 : m.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && i !== void 0 ? i : new Date().toISOString()}`,
          ...(!(
            (n = m == null ? void 0 : m.signInWithSolana) === null ||
            n === void 0
          ) && n.notBefore
            ? [`Not Before: ${m.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (a = m == null ? void 0 : m.signInWithSolana) === null ||
            a === void 0
          ) && a.expirationTime
            ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (o = m == null ? void 0 : m.signInWithSolana) === null ||
            o === void 0
          ) && o.chainId
            ? [`Chain ID: ${m.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = m == null ? void 0 : m.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${m.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = m == null ? void 0 : m.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${m.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (f =
              (h = m == null ? void 0 : m.signInWithSolana) === null ||
              h === void 0
                ? void 0
                : h.resources) === null || f === void 0
          ) && f.length
            ? [
                "Resources",
                ...m.signInWithSolana.resources.map((x) => `- ${x}`),
              ]
            : []),
        ].join(`
`);
        const A = await k.signMessage(new TextEncoder().encode(g), "utf8");
        if (!A || !(A instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        y = A;
      }
    }
    try {
      const { data: v, error: w } = await E(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: g, signature: Le(y) },
            !((p = e.options) === null || p === void 0) && p.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (d = e.options) === null || d === void 0
                        ? void 0
                        : d.captchaToken,
                  },
                }
              : null,
          ),
          xform: te,
        },
      );
      if (w) throw w;
      if (!v || !v.session || !v.user) {
        const b = new Qe();
        return this._returnResult({
          data: { user: null, session: null },
          error: b,
        });
      }
      return (
        v.session &&
          (await this._saveSession(v.session),
          await this._notifyAllSubscribers("SIGNED_IN", v.session)),
        this._returnResult({ data: Object.assign({}, v), error: w })
      );
    } catch (v) {
      if (S(v))
        return this._returnResult({
          data: { user: null, session: null },
          error: v,
        });
      throw v;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await je(this.storage, `${this.storageKey}-code-verifier`),
      [r, i] = (t ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") throw new la();
      const { data: n, error: a } = await E(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: r },
          xform: te,
        },
      );
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), a))
        throw a;
      if (!n || !n.session || !n.user) {
        const o = new Qe();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: o,
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
          error: a,
        })
      );
    } catch (n) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(n)))
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
          options: t,
          provider: r,
          token: i,
          access_token: n,
          nonce: a,
        } = e,
        o = await E(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: i,
              access_token: n,
              nonce: a,
              gotrue_meta_security: {
                captcha_token: t == null ? void 0 : t.captchaToken,
              },
            },
            xform: te,
          },
        ),
        { data: l, error: u } = o;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!l || !l.session || !l.user) {
        const h = new Qe();
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: u })
      );
    } catch (t) {
      if (S(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async signInWithOtp(e) {
    var t, r, i, n, a;
    try {
      if ("email" in e) {
        const { email: o, options: l } = e;
        let u = null,
          h = null;
        this.flowType === "pkce" &&
          ([u, h] = await Ye(this.storage, this.storageKey));
        const { error: f } = await E(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data:
              (t = l == null ? void 0 : l.data) !== null && t !== void 0
                ? t
                : {},
            create_user:
              (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: h,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: f,
        });
      }
      if ("phone" in e) {
        const { phone: o, options: l } = e,
          { data: u, error: h } = await E(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: o,
                data:
                  (i = l == null ? void 0 : l.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  n !== void 0
                    ? n
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (a = l == null ? void 0 : l.channel) !== null && a !== void 0
                    ? a
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: h,
        });
      }
      throw new Wt("You must provide either an email or phone number.");
    } catch (o) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(o)))
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      throw o;
    }
  }
  async verifyOtp(e) {
    var t, r;
    try {
      let i, n;
      "options" in e &&
        ((i = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo),
        (n =
          (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: a, error: o } = await E(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: n },
          }),
          redirectTo: i,
          xform: te,
        },
      );
      if (o) throw o;
      if (!a) throw new Error("An error occurred on token verification.");
      const l = a.session,
        u = a.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l,
          )),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if (S(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithSSO(e) {
    var t, r, i, n, a;
    try {
      let o = null,
        l = null;
      this.flowType === "pkce" &&
        ([o, l] = await Ye(this.storage, this.storageKey));
      const u = await E(this.fetch, "POST", `${this.url}/sso`, {
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
                    (t = e.options) === null || t === void 0
                      ? void 0
                      : t.redirectTo) !== null && r !== void 0
                    ? r
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
            code_challenge: o,
            code_challenge_method: l,
          },
        ),
        headers: this.headers,
        xform: $a,
      });
      return (
        !((n = u.data) === null || n === void 0) &&
          n.url &&
          W() &&
          !(
            !((a = e.options) === null || a === void 0) && a.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (o) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(o)))
        return this._returnResult({ data: null, error: o });
      throw o;
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
          data: { session: t },
          error: r,
        } = e;
        if (r) throw r;
        if (!t) throw new Y();
        const { error: i } = await E(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: t.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      });
    } catch (e) {
      if (S(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: i, options: n } = e,
          { error: a } = await E(this.fetch, "POST", t, {
            headers: this.headers,
            body: {
              email: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      } else if ("phone" in e) {
        const { phone: r, type: i, options: n } = e,
          { data: a, error: o } = await E(this.fetch, "POST", t, {
            headers: this.headers,
            body: {
              phone: r,
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
            messageId: a == null ? void 0 : a.message_id,
          },
          error: o,
        });
      }
      throw new Wt(
        "You must provide either an email or phone number and a type",
      );
    } catch (t) {
      if (S(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (t) => t),
      )
    );
  }
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await r, await t()))();
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
          const r = t();
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
            const i = [...this.pendingInLock];
            (await Promise.all(i), this.pendingInLock.splice(0, i.length));
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
      const t = await this.__loadSession();
      return await e(t);
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
      const t = await je(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", t),
        t !== null &&
          (this._isValidSession(t)
            ? (e = t)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < ls : !1;
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
          const a = await je(this.userStorage, this.storageKey + "-user");
          a != null && a.user ? (e.user = a.user) : (e.user = hs());
        }
        if (
          this.storage.isServer &&
          e.user &&
          !e.user.__isUserNotAvailableProxy
        ) {
          const a = { value: this.suppressGetSessionWarning };
          ((e.user = Pa(e.user, a)),
            a.value && (this.suppressGetSessionWarning = !0));
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
    const t = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (t.data.user && (this.suppressGetSessionWarning = !0), t);
  }
  async _getUser(e) {
    try {
      return e
        ? await E(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: me,
          })
        : await this._useSession(async (t) => {
            var r, i, n;
            const { data: a, error: o } = t;
            if (o) throw o;
            return !(
              !((r = a.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Y() }
              : await E(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (n =
                      (i = a.session) === null || i === void 0
                        ? void 0
                        : i.access_token) !== null && n !== void 0
                      ? n
                      : void 0,
                  xform: me,
                });
          });
    } catch (t) {
      if (S(t))
        return (
          us(t) &&
            (await this._removeSession(),
            await K(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: t })
        );
      throw t;
    }
  }
  async updateUser(e, t = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(e, t),
      )
    );
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: n } = r;
        if (n) throw n;
        if (!i.session) throw new Y();
        const a = i.session;
        let o = null,
          l = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([o, l] = await Ye(this.storage, this.storageKey));
        const { data: u, error: h } = await E(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: t == null ? void 0 : t.emailRedirectTo,
            body: Object.assign(Object.assign({}, e), {
              code_challenge: o,
              code_challenge_method: l,
            }),
            jwt: a.access_token,
            xform: me,
          },
        );
        if (h) throw h;
        return (
          (a.user = u.user),
          await this._saveSession(a),
          await this._notifyAllSubscribers("USER_UPDATED", a),
          this._returnResult({ data: { user: a.user }, error: null })
        );
      });
    } catch (r) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(r)))
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
      if (!e.access_token || !e.refresh_token) throw new Y();
      const t = Date.now() / 1e3;
      let r = t,
        i = !0,
        n = null;
      const { payload: a } = Vt(e.access_token);
      if ((a.exp && ((r = a.exp), (i = r <= t)), i)) {
        const { data: o, error: l } = await this._callRefreshToken(
          e.refresh_token,
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!o) return { data: { user: null, session: null }, error: null };
        n = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        ((n = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r,
        }),
          await this._saveSession(n),
          await this._notifyAllSubscribers("SIGNED_IN", n));
      }
      return this._returnResult({
        data: { user: n.user, session: n },
        error: null,
      });
    } catch (t) {
      if (S(t))
        return this._returnResult({
          data: { session: null, user: null },
          error: t,
        });
      throw t;
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
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: a, error: o } = t;
          if (o) throw o;
          e = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new Y();
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
    } catch (t) {
      if (S(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async _getSessionFromURL(e, t) {
    try {
      if (!W()) throw new Ht("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Ht(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          },
        );
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new cr("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Ht("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new cr("No code detected.");
        const { data: b, error: m } = await this._exchangeCodeForSession(
          e.code,
        );
        if (m) throw m;
        const k = new URL(window.location.href);
        return (
          k.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", k.toString()),
          { data: { session: b.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: i,
        access_token: n,
        refresh_token: a,
        expires_in: o,
        expires_at: l,
        token_type: u,
      } = e;
      if (!n || !o || !a || !u) throw new Ht("No session defined in URL");
      const h = Math.round(Date.now() / 1e3),
        f = parseInt(o);
      let p = h + f;
      l && (p = parseInt(l));
      const d = p - h;
      d * 1e3 <= tt &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${f}s`,
        );
      const g = p - f;
      h - g >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            g,
            p,
            h,
          )
        : h - g < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            g,
            p,
            h,
          );
      const { data: y, error: v } = await this._getUser(n);
      if (v) throw v;
      const w = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: n,
        expires_in: f,
        expires_at: p,
        refresh_token: a,
        token_type: u,
        user: y.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: w, redirectType: e.type },
          error: null,
        })
      );
    } catch (r) {
      if (S(r))
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
    const t = await je(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
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
    return await this._useSession(async (t) => {
      var r;
      const { data: i, error: n } = t;
      if (n && !us(n)) return this._returnResult({ error: n });
      const a =
        (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, e);
        if (
          o &&
          !(
            (aa(o) &&
              (o.status === 404 || o.status === 401 || o.status === 403)) ||
            us(o)
          )
        )
          return this._returnResult({ error: o });
      }
      return (
        e !== "others" &&
          (await this._removeSession(),
          await K(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const t = ga(),
      r = {
        id: t,
        callback: e,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            t,
          ),
            this.stateChangeEmitters.delete(t));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", t),
      this.stateChangeEmitters.set(t, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(t);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, i;
      try {
        const {
          data: { session: n },
          error: a,
        } = t;
        if (a) throw a;
        (await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", n)),
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
  async resetPasswordForEmail(e, t = {}) {
    let r = null,
      i = null;
    this.flowType === "pkce" &&
      ([r, i] = await Ye(this.storage, this.storageKey, !0));
    try {
      return await E(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: t.captchaToken },
        },
        headers: this.headers,
        redirectTo: t.redirectTo,
      });
    } catch (n) {
      if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(n)))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (e = t.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var t;
    try {
      const { data: r, error: i } = await this._useSession(async (n) => {
        var a, o, l, u, h;
        const { data: f, error: p } = n;
        if (p) throw p;
        const d = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
            scopes:
              (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
            queryParams:
              (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await E(this.fetch, "GET", d, {
          headers: this.headers,
          jwt:
            (h =
              (u = f.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && h !== void 0
              ? h
              : void 0,
        });
      });
      if (i) throw i;
      return (
        W() &&
          !(
            !((t = e.options) === null || t === void 0) && t.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        this._returnResult({
          data: { provider: e.provider, url: r == null ? void 0 : r.url },
          error: null,
        })
      );
    } catch (r) {
      if (S(r))
        return this._returnResult({
          data: { provider: e.provider, url: null },
          error: r,
        });
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (t) => {
      var r;
      try {
        const {
          error: i,
          data: { session: n },
        } = t;
        if (i) throw i;
        const {
            options: a,
            provider: o,
            token: l,
            access_token: u,
            nonce: h,
          } = e,
          f = await E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = n == null ? void 0 : n.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: o,
                id_token: l,
                access_token: u,
                nonce: h,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: te,
            },
          ),
          { data: p, error: d } = f;
        return d
          ? this._returnResult({
              data: { user: null, session: null },
              error: d,
            })
          : !p || !p.session || !p.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Qe(),
              })
            : (p.session &&
                (await this._saveSession(p.session),
                await this._notifyAllSubscribers("USER_UPDATED", p.session)),
              this._returnResult({ data: p, error: d }));
      } catch (i) {
        if ((await K(this.storage, `${this.storageKey}-code-verifier`), S(i)))
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
      return await this._useSession(async (t) => {
        var r, i;
        const { data: n, error: a } = t;
        if (a) throw a;
        return await E(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (r = n.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && i !== void 0
                ? i
                : void 0,
          },
        );
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await wa(
        async (i) => (
          i > 0 && (await ma(200 * Math.pow(2, i - 1))),
          this._debug(t, "refreshing attempt", i),
          await E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: te },
          )
        ),
        (i, n) => {
          const a = 200 * Math.pow(2, i);
          return n && cs(n) && Date.now() + a - r < tt;
        },
      );
    } catch (r) {
      if ((this._debug(t, "error", r), S(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(t, "end");
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
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        t,
        "url",
        r,
      ),
      W() && !t.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: e, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, t;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const i = await je(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let a = await je(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !a &&
          ((a = { user: i.user }),
          await st(this.userStorage, this.storageKey + "-user", a)),
          (i.user =
            (e = a == null ? void 0 : a.user) !== null && e !== void 0
              ? e
              : hs()));
      } else if (i && !i.user && !i.user) {
        const a = await je(this.storage, this.storageKey + "-user");
        a && a != null && a.user
          ? ((i.user = a.user),
            await K(this.storage, this.storageKey + "-user"),
            await st(this.storage, this.storageKey, i))
          : (i.user = hs());
      }
      if (
        (this._debug(r, "session from storage", i), !this._isValidSession(i))
      ) {
        (this._debug(r, "session is not valid"),
          i !== null && (await this._removeSession()));
        return;
      }
      const n =
        ((t = i.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 -
          Date.now() <
        ls;
      if (
        (this._debug(
          r,
          `session has${n ? "" : " not"} expired with margin of ${ls}s`,
        ),
        n)
      ) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: a } = await this._callRefreshToken(i.refresh_token);
          a &&
            (console.error(a),
            cs(a) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                a,
              ),
              await this._removeSession()));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: o } = await this._getUser(i.access_token);
          !o && a != null && a.user
            ? ((i.user = a.user),
              await this._saveSession(i),
              await this._notifyAllSubscribers("SIGNED_IN", i))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (a) {
          (console.error("Error getting user data:", a),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              a,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      (this._debug(r, "error", i), console.error(i));
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e) throw new Y();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new rs();
      const { data: n, error: a } = await this._refreshAccessToken(e);
      if (a) throw a;
      if (!n.session) throw new Y();
      (await this._saveSession(n.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", n.session));
      const o = { data: n.session, error: null };
      return (this.refreshingDeferred.resolve(o), o);
    } catch (n) {
      if ((this._debug(i, "error", n), S(n))) {
        const a = { data: null, error: n };
        return (
          cs(n) || (await this._removeSession()),
          (t = this.refreshingDeferred) === null ||
            t === void 0 ||
            t.resolve(a),
          a
        );
      }
      throw (
        (r = this.refreshingDeferred) === null || r === void 0 || r.reject(n),
        n
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(i, "end"));
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const i = `#_notifyAllSubscribers(${e})`;
    this._debug(i, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: e, session: t });
      const n = [],
        a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
          try {
            await o.callback(e, t);
          } catch (l) {
            n.push(l);
          }
        });
      if ((await Promise.all(a), n.length > 0)) {
        for (let o = 0; o < n.length; o += 1) console.error(n[o]);
        throw n[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  async _saveSession(e) {
    (this._debug("#_saveSession()", e),
      (this.suppressGetSessionWarning = !0),
      await K(this.storage, `${this.storageKey}-code-verifier`));
    const t = Object.assign({}, e),
      r = t.user && t.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        t.user &&
        (await st(this.userStorage, this.storageKey + "-user", {
          user: t.user,
        }));
      const i = Object.assign({}, t);
      delete i.user;
      const n = gr(i);
      await st(this.storage, this.storageKey, n);
    } else {
      const i = gr(t);
      await st(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await K(this.storage, this.storageKey),
      await K(this.storage, this.storageKey + "-code-verifier"),
      await K(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await K(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        W() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const e = setInterval(() => this._autoRefreshTokenTick(), tt);
    ((this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e));
    const t = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), e && clearInterval(e));
    const t = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), t && clearTimeout(t));
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
            return await this._useSession(async (t) => {
              const {
                data: { session: r },
              } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - e) / tt);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${i} ticks, a tick lasts ${tt}ms, refresh threshold is ${js} ticks`,
              ),
                i <= js && (await this._callRefreshToken(r.refresh_token)));
            });
          } catch (t) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              t,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof li)
        this._debug("auto refresh token tick lock not available");
      else throw e;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !W() || !(window != null && window.addEventListener))
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
    const t = `#_onVisibilityChanged(${e})`;
    (this._debug(t, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          e ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  t,
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
  async _getUrlForProvider(e, t, r) {
    const i = [`provider=${encodeURIComponent(t)}`];
    if (
      (r != null &&
        r.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [n, a] = await Ye(this.storage, this.storageKey),
        o = new URLSearchParams({
          code_challenge: `${encodeURIComponent(n)}`,
          code_challenge_method: `${encodeURIComponent(a)}`,
        });
      i.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const n = new URLSearchParams(r.queryParams);
      i.push(n.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${e}?${i.join("&")}`
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: i, error: n } = t;
        return n
          ? this._returnResult({ data: null, error: n })
          : await E(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, i;
        const { data: n, error: a } = t;
        if (a) return this._returnResult({ data: null, error: a });
        const o = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
                ? { issuer: e.issuer }
                : {},
          ),
          { data: l, error: u } = await E(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: o,
              headers: this.headers,
              jwt:
                (r = n == null ? void 0 : n.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (e.factorType === "totp" &&
              l.type === "totp" &&
              !((i = l == null ? void 0 : l.totp) === null || i === void 0) &&
              i.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: i, error: n } = t;
          if (n) return this._returnResult({ data: null, error: n });
          const a = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? Ja(e.webauthn.credential_response)
                          : Qa(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code },
            ),
            { data: o, error: l } = await E(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: a,
                headers: this.headers,
                jwt:
                  (r = i == null ? void 0 : i.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                  o,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
              this._returnResult({ data: o, error: l }));
        });
      } catch (t) {
        if (S(t)) return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: i, error: n } = t;
          if (n) return this._returnResult({ data: null, error: n });
          const a = await E(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
          if (a.error) return a;
          const { data: o } = a;
          if (o.type !== "webauthn") return { data: o, error: null };
          switch (o.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, o), {
                  webauthn: Object.assign(Object.assign({}, o.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, o.webauthn.credential_options),
                      {
                        publicKey: Ga(o.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, o), {
                  webauthn: Object.assign(Object.assign({}, o.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, o.webauthn.credential_options),
                      {
                        publicKey: za(o.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (t) {
        if (S(t)) return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: e.factorId,
          challengeId: t.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: t },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const i = { all: [], phone: [], totp: [], webauthn: [] };
    for (const n of (e = t == null ? void 0 : t.factors) !== null &&
    e !== void 0
      ? e
      : [])
      (i.all.push(n), n.status === "verified" && i[n.factor_type].push(n));
    return { data: i, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var t, r, i, n;
    if (e)
      try {
        const { payload: d } = Vt(e);
        let g = null;
        d.aal && (g = d.aal);
        let y = g;
        const {
          data: { user: v },
          error: w,
        } = await this.getUser(e);
        if (w) return this._returnResult({ data: null, error: w });
        ((r =
          (t = v == null ? void 0 : v.factors) === null || t === void 0
            ? void 0
            : t.filter((k) => k.status === "verified")) !== null && r !== void 0
          ? r
          : []
        ).length > 0 && (y = "aal2");
        const m = d.amr || [];
        return {
          data: {
            currentLevel: g,
            nextLevel: y,
            currentAuthenticationMethods: m,
          },
          error: null,
        };
      } catch (d) {
        if (S(d)) return this._returnResult({ data: null, error: d });
        throw d;
      }
    const {
      data: { session: a },
      error: o,
    } = await this.getSession();
    if (o) return this._returnResult({ data: null, error: o });
    if (!a)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: l } = Vt(a.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let h = u;
    ((n =
      (i = a.user.factors) === null || i === void 0
        ? void 0
        : i.filter((d) => d.status === "verified")) !== null && n !== void 0
      ? n
      : []
    ).length > 0 && (h = "aal2");
    const p = l.amr || [];
    return {
      data: { currentLevel: u, nextLevel: h, currentAuthenticationMethods: p },
      error: null,
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: i,
        } = t;
        return i
          ? this._returnResult({ data: null, error: i })
          : r
            ? await E(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${e}`,
                {
                  headers: this.headers,
                  jwt: r.access_token,
                  xform: (n) => ({ data: n, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new Y() });
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _approveAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: i },
          error: n,
        } = r;
        if (n) return this._returnResult({ data: null, error: n });
        if (!i) return this._returnResult({ data: null, error: new Y() });
        const a = await E(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: i.access_token,
            body: { action: "approve" },
            xform: (o) => ({ data: o, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            W() &&
            !(t != null && t.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (S(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: i },
          error: n,
        } = r;
        if (n) return this._returnResult({ data: null, error: n });
        if (!i) return this._returnResult({ data: null, error: new Y() });
        const a = await E(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: i.access_token,
            body: { action: "deny" },
            xform: (o) => ({ data: o, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            W() &&
            !(t != null && t.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (S(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: t },
          error: r,
        } = e;
        return r
          ? this._returnResult({ data: null, error: r })
          : t
            ? await E(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: t.access_token,
                xform: (i) => ({ data: i, error: null }),
              })
            : this._returnResult({ data: null, error: new Y() });
      });
    } catch (e) {
      if (S(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: i,
        } = t;
        return i
          ? this._returnResult({ data: null, error: i })
          : r
            ? (await E(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                query: { client_id: e.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new Y() });
      });
    } catch (t) {
      if (S(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async fetchJwk(e, t = { keys: [] }) {
    let r = t.keys.find((o) => o.kid === e);
    if (r) return r;
    const i = Date.now();
    if (
      ((r = this.jwks.keys.find((o) => o.kid === e)),
      r && this.jwks_cached_at + ia > i)
    )
      return r;
    const { data: n, error: a } = await E(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (a) throw a;
    return !n.keys ||
      n.keys.length === 0 ||
      ((this.jwks = n),
      (this.jwks_cached_at = i),
      (r = n.keys.find((o) => o.kid === e)),
      !r)
      ? null
      : r;
  }
  async getClaims(e, t = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: d, error: g } = await this.getSession();
        if (g || !d.session)
          return this._returnResult({ data: null, error: g });
        r = d.session.access_token;
      }
      const {
        header: i,
        payload: n,
        signature: a,
        raw: { header: o, payload: l },
      } = Vt(r);
      (t != null && t.allowExpired) || Ta(n.exp);
      const u =
        !i.alg ||
        i.alg.startsWith("HS") ||
        !i.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              i.kid,
              t != null && t.keys
                ? { keys: t.keys }
                : t == null
                  ? void 0
                  : t.jwks,
            );
      if (!u) {
        const { error: d } = await this.getUser(r);
        if (d) throw d;
        return { data: { claims: n, header: i, signature: a }, error: null };
      }
      const h = Ra(i.alg),
        f = await crypto.subtle.importKey("jwk", u, h, !0, ["verify"]);
      if (!(await crypto.subtle.verify(h, f, a, fa(`${o}.${l}`))))
        throw new Us("Invalid JWT signature");
      return { data: { claims: n, header: i, signature: a }, error: null };
    } catch (r) {
      if (S(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
It.nextInstanceID = {};
const no = It,
  ao = "2.99.2";
let St = "";
typeof Deno < "u"
  ? (St = "deno")
  : typeof document < "u"
    ? (St = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (St = "react-native")
      : (St = "node");
const oo = { "X-Client-Info": `supabase-js-${St}/${ao}` },
  lo = { headers: oo },
  uo = { schema: "public" },
  co = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  ho = {};
function jt(s) {
  "@babel/helpers - typeof";
  return (
    (jt =
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
    jt(s)
  );
}
function fo(s, e) {
  if (jt(s) != "object" || !s) return s;
  var t = s[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(s, e);
    if (jt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(s);
}
function po(s) {
  var e = fo(s, "string");
  return jt(e) == "symbol" ? e : e + "";
}
function go(s, e, t) {
  return (
    (e = po(e)) in s
      ? Object.defineProperty(s, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[e] = t),
    s
  );
}
function Sr(s, e) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    (e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(s, i).enumerable;
      })),
      t.push.apply(t, r));
  }
  return t;
}
function D(s) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Sr(Object(t), !0).forEach(function (r) {
          go(s, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : Sr(Object(t)).forEach(function (r) {
            Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return s;
}
const yo = (s) => (s ? (...e) => s(...e) : (...e) => fetch(...e)),
  vo = () => Headers,
  mo = (s, e, t) => {
    const r = yo(t),
      i = vo();
    return async (n, a) => {
      var o;
      const l = (o = await e()) !== null && o !== void 0 ? o : s;
      let u = new i(a == null ? void 0 : a.headers);
      return (
        u.has("apikey") || u.set("apikey", s),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        r(n, D(D({}, a), {}, { headers: u }))
      );
    };
  };
function wo(s) {
  return s.endsWith("/") ? s : s + "/";
}
function bo(s, e) {
  var t, r;
  const { db: i, auth: n, realtime: a, global: o } = s,
    { db: l, auth: u, realtime: h, global: f } = e,
    p = {
      db: D(D({}, l), i),
      auth: D(D({}, u), n),
      realtime: D(D({}, h), a),
      storage: {},
      global: D(
        D(D({}, f), o),
        {},
        {
          headers: D(
            D(
              {},
              (t = f == null ? void 0 : f.headers) !== null && t !== void 0
                ? t
                : {},
            ),
            (r = o == null ? void 0 : o.headers) !== null && r !== void 0
              ? r
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    s.accessToken ? (p.accessToken = s.accessToken) : delete p.accessToken,
    p
  );
}
function _o(s) {
  const e = s == null ? void 0 : s.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(wo(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var So = class extends no {
    constructor(s) {
      super(s);
    }
  },
  ko = class {
    constructor(s, e, t) {
      var r, i;
      ((this.supabaseUrl = s), (this.supabaseKey = e));
      const n = _o(s);
      if (!e) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", n)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", n)),
        (this.storageUrl = new URL("storage/v1", n)),
        (this.functionsUrl = new URL("functions/v1", n)));
      const a = `sb-${n.hostname.split(".")[0]}-auth-token`,
        o = {
          db: uo,
          realtime: ho,
          auth: D(D({}, co), {}, { storageKey: a }),
          global: lo,
        },
        l = bo(t ?? {}, o);
      if (
        ((this.storageKey =
          (r = l.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (i = l.global.headers) !== null && i !== void 0 ? i : {}),
        l.accessToken)
      )
        ((this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (h, f) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`,
                );
              },
            },
          )));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = l.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          l.global.fetch,
        );
      }
      ((this.fetch = mo(e, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          D(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((h) => this.realtime.setAuth(h))
            .catch((h) =>
              console.warn("Failed to set initial Realtime auth token:", h),
            ),
        (this.rest = new an(new URL("rest/v1", n).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
          timeout: l.db.timeout,
          urlLengthLimit: l.db.urlLengthLimit,
        })),
        (this.storage = new Zn(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          t == null ? void 0 : t.storage,
        )),
        l.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new Yi(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(s) {
      return this.rest.from(s);
    }
    schema(s) {
      return this.rest.schema(s);
    }
    rpc(s, e = {}, t = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(s, e, t);
    }
    channel(s, e = { config: {} }) {
      return this.realtime.channel(s, e);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(s) {
      return this.realtime.removeChannel(s);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var s = this,
        e,
        t;
      if (s.accessToken) return await s.accessToken();
      const { data: r } = await s.auth.getSession();
      return (e =
        (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && e !== void 0
        ? e
        : s.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: s,
        persistSession: e,
        detectSessionInUrl: t,
        storage: r,
        userStorage: i,
        storageKey: n,
        flowType: a,
        lock: o,
        debug: l,
        throwOnError: u,
      },
      h,
      f,
    ) {
      const p = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new So({
        url: this.authUrl.href,
        headers: D(D({}, p), h),
        storageKey: n,
        autoRefreshToken: s,
        persistSession: e,
        detectSessionInUrl: t,
        storage: r,
        userStorage: i,
        flowType: a,
        lock: o,
        debug: l,
        throwOnError: u,
        fetch: f,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (d) => d.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(s) {
      return new kn(
        this.realtimeUrl.href,
        D(
          D({}, s),
          {},
          {
            params: D(
              D({}, { apikey: this.supabaseKey }),
              s == null ? void 0 : s.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((s, e) => {
        this._handleTokenChanged(
          s,
          "CLIENT",
          e == null ? void 0 : e.access_token,
        );
      });
    }
    _handleTokenChanged(s, e, t) {
      (s === "TOKEN_REFRESHED" || s === "SIGNED_IN") &&
      this.changedAccessToken !== t
        ? ((this.changedAccessToken = t), this.realtime.setAuth(t))
        : s === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const jo = (s, e, t) => new ko(s, e, t);
function Eo() {
  if (typeof window < "u") return !1;
  const s = globalThis.process;
  if (!s) return !1;
  const e = s.version;
  if (e == null) return !1;
  const t = e.match(/^v(\d+)\./);
  return t ? parseInt(t[1], 10) <= 18 : !1;
}
Eo() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
export {
  Ro as Q,
  Xs as _,
  es as a,
  Io as b,
  jo as c,
  Ao as d,
  Gr as e,
  Co as f,
  vi as j,
  Po as u,
};
