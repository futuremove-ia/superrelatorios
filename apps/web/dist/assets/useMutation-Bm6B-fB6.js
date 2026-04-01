var x = (i) => {
  throw TypeError(i);
};
var C = (i, t, s) => t.has(i) || x("Cannot " + s);
var e = (i, t, s) => (
    C(i, t, "read from private field"),
    s ? s.call(i) : t.get(i)
  ),
  d = (i, t, s) =>
    t.has(i)
      ? x("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(i)
        : t.set(i, s),
  p = (i, t, s, r) => (
    C(i, t, "write to private field"),
    r ? r.call(i, s) : t.set(i, s),
    s
  ),
  m = (i, t, s) => (C(i, t, "access private method"), s);
import { r as f } from "./router-XBfdTQ0K.js";
import {
  c6 as U,
  c7 as k,
  c8 as w,
  c9 as q,
  ca as R,
  F as L,
  cb as j,
  cc as A,
} from "./index-DRWQgA5q.js";
var a,
  c,
  o,
  h,
  u,
  g,
  M,
  K,
  D =
    ((K = class extends U {
      constructor(t, s) {
        super();
        d(this, u);
        d(this, a);
        d(this, c);
        d(this, o);
        d(this, h);
        (p(this, a, t),
          this.setOptions(s),
          this.bindMethods(),
          m(this, u, g).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(t) {
        var r;
        const s = this.options;
        ((this.options = e(this, a).defaultMutationOptions(t)),
          k(this.options, s) ||
            e(this, a)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: e(this, o),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          w(s.mutationKey) !== w(this.options.mutationKey)
            ? this.reset()
            : ((r = e(this, o)) == null ? void 0 : r.state.status) ===
                "pending" && e(this, o).setOptions(this.options));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          (t = e(this, o)) == null ||
          t.removeObserver(this);
      }
      onMutationUpdate(t) {
        (m(this, u, g).call(this), m(this, u, M).call(this, t));
      }
      getCurrentResult() {
        return e(this, c);
      }
      reset() {
        var t;
        ((t = e(this, o)) == null || t.removeObserver(this),
          p(this, o, void 0),
          m(this, u, g).call(this),
          m(this, u, M).call(this));
      }
      mutate(t, s) {
        var r;
        return (
          p(this, h, s),
          (r = e(this, o)) == null || r.removeObserver(this),
          p(
            this,
            o,
            e(this, a).getMutationCache().build(e(this, a), this.options),
          ),
          e(this, o).addObserver(this),
          e(this, o).execute(t)
        );
      }
    }),
    (a = new WeakMap()),
    (c = new WeakMap()),
    (o = new WeakMap()),
    (h = new WeakMap()),
    (u = new WeakSet()),
    (g = function () {
      var s;
      const t = ((s = e(this, o)) == null ? void 0 : s.state) ?? q();
      p(this, c, {
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
      R.batch(() => {
        var s, r, n, v, l, y, E, S;
        if (e(this, h) && this.hasListeners()) {
          const b = e(this, c).variables,
            O = e(this, c).context;
          (t == null ? void 0 : t.type) === "success"
            ? ((r = (s = e(this, h)).onSuccess) == null ||
                r.call(s, t.data, b, O),
              (v = (n = e(this, h)).onSettled) == null ||
                v.call(n, t.data, null, b, O))
            : (t == null ? void 0 : t.type) === "error" &&
              ((y = (l = e(this, h)).onError) == null ||
                y.call(l, t.error, b, O),
              (S = (E = e(this, h)).onSettled) == null ||
                S.call(E, void 0, t.error, b, O));
        }
        this.listeners.forEach((b) => {
          b(e(this, c));
        });
      });
    }),
    K);
function Q(i, t) {
  const s = L(),
    [r] = f.useState(() => new D(s, i));
  f.useEffect(() => {
    r.setOptions(i);
  }, [r, i]);
  const n = f.useSyncExternalStore(
      f.useCallback((l) => r.subscribe(R.batchCalls(l)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    v = f.useCallback(
      (l, y) => {
        r.mutate(l, y).catch(j);
      },
      [r],
    );
  if (n.error && A(r.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: v, mutateAsync: n.mutate };
}
export { Q as u };
