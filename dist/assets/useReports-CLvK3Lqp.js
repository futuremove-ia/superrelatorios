var R = (e) => {
  throw TypeError(e);
};
var C = (e, t, s) => t.has(e) || R("Cannot " + s);
var r = (e, t, s) => (
    C(e, t, "read from private field"),
    s ? s.call(e) : t.get(e)
  ),
  d = (e, t, s) =>
    t.has(e)
      ? R("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, s),
  m = (e, t, s, i) => (
    C(e, t, "write to private field"),
    i ? i.call(e, s) : t.set(e, s),
    s
  ),
  b = (e, t, s) => (C(e, t, "access private method"), s);
import { u as I } from "./useQuery-cjyHvNTQ.js";
import {
  S as k,
  e as D,
  h as q,
  g as Q,
  n as x,
  f as K,
  i as U,
  k as F,
} from "./index-DSuxXiPq.js";
import { r as f } from "./router-C2uYhr1z.js";
import { c as L, g as j } from "./supabaseReportsService-BcijqOBz.js";
import { u as z } from "./useCurrentOrganization-BrovRglL.js";
var h,
  l,
  o,
  n,
  u,
  O,
  M,
  w,
  A =
    ((w = class extends k {
      constructor(t, s) {
        super();
        d(this, u);
        d(this, h);
        d(this, l);
        d(this, o);
        d(this, n);
        (m(this, h, t),
          this.setOptions(s),
          this.bindMethods(),
          b(this, u, O).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(t) {
        var i;
        const s = this.options;
        ((this.options = r(this, h).defaultMutationOptions(t)),
          D(this.options, s) ||
            r(this, h)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: r(this, o),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          q(s.mutationKey) !== q(this.options.mutationKey)
            ? this.reset()
            : ((i = r(this, o)) == null ? void 0 : i.state.status) ===
                "pending" && r(this, o).setOptions(this.options));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          (t = r(this, o)) == null ||
          t.removeObserver(this);
      }
      onMutationUpdate(t) {
        (b(this, u, O).call(this), b(this, u, M).call(this, t));
      }
      getCurrentResult() {
        return r(this, l);
      }
      reset() {
        var t;
        ((t = r(this, o)) == null || t.removeObserver(this),
          m(this, o, void 0),
          b(this, u, O).call(this),
          b(this, u, M).call(this));
      }
      mutate(t, s) {
        var i;
        return (
          m(this, n, s),
          (i = r(this, o)) == null || i.removeObserver(this),
          m(
            this,
            o,
            r(this, h).getMutationCache().build(r(this, h), this.options),
          ),
          r(this, o).addObserver(this),
          r(this, o).execute(t)
        );
      }
    }),
    (h = new WeakMap()),
    (l = new WeakMap()),
    (o = new WeakMap()),
    (n = new WeakMap()),
    (u = new WeakSet()),
    (O = function () {
      var s;
      const t = ((s = r(this, o)) == null ? void 0 : s.state) ?? Q();
      m(this, l, {
        ...t,
        isPending: t.status === "pending",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (M = function (t) {
      x.batch(() => {
        var s, i, a, y, c, g, S, E;
        if (r(this, n) && this.hasListeners()) {
          const p = r(this, l).variables,
            v = r(this, l).context;
          (t == null ? void 0 : t.type) === "success"
            ? ((i = (s = r(this, n)).onSuccess) == null ||
                i.call(s, t.data, p, v),
              (y = (a = r(this, n)).onSettled) == null ||
                y.call(a, t.data, null, p, v))
            : (t == null ? void 0 : t.type) === "error" &&
              ((g = (c = r(this, n)).onError) == null ||
                g.call(c, t.error, p, v),
              (E = (S = r(this, n)).onSettled) == null ||
                E.call(S, void 0, t.error, p, v));
        }
        this.listeners.forEach((p) => {
          p(r(this, l));
        });
      });
    }),
    w);
function B(e, t) {
  const s = K(),
    [i] = f.useState(() => new A(s, e));
  f.useEffect(() => {
    i.setOptions(e);
  }, [i, e]);
  const a = f.useSyncExternalStore(
      f.useCallback((c) => i.subscribe(x.batchCalls(c)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult(),
    ),
    y = f.useCallback(
      (c, g) => {
        i.mutate(c, g).catch(U);
      },
      [i],
    );
  if (a.error && F(i.options.throwOnError, [a.error])) throw a.error;
  return { ...a, mutate: y, mutateAsync: a.mutate };
}
const V = () => {
    const { organizationId: e, isDemoMode: t } = z();
    return I({
      queryKey: ["reports", e],
      queryFn: () => j(e),
      enabled: !t && !!e,
    });
  },
  W = () => {
    const e = K(),
      { organizationId: t } = z();
    return B({
      mutationFn: (s) => {
        if (!t) throw new Error("Organization ID is required");
        return L(t, "", s.title, s.description, s.templateId, s.dataJson);
      },
      onSuccess: () => {
        e.invalidateQueries({ queryKey: ["reports", t] });
      },
    });
  };
export { W as a, V as u };
