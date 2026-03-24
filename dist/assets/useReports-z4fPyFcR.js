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
  b = (e, t, s, i) => (
    C(e, t, "write to private field"),
    i ? i.call(e, s) : t.set(e, s),
    s
  ),
  m = (e, t, s) => (C(e, t, "access private method"), s);
import { u as Q } from "./useQuery-fq0IAKu-.js";
import {
  S as U,
  e as A,
  h as x,
  g as F,
  n as q,
  f as w,
  i as L,
  k as j,
} from "./index-BZzvAVnT.js";
import { r as f } from "./vendor-BgR6OOld.js";
import { r as k } from "./mockReports-3cW05Ka2.js";
var a,
  l,
  o,
  u,
  n,
  g,
  S,
  K,
  D =
    ((K = class extends U {
      constructor(t, s) {
        super();
        d(this, n);
        d(this, a);
        d(this, l);
        d(this, o);
        d(this, u);
        (b(this, a, t),
          this.setOptions(s),
          this.bindMethods(),
          m(this, n, g).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(t) {
        var i;
        const s = this.options;
        ((this.options = r(this, a).defaultMutationOptions(t)),
          A(this.options, s) ||
            r(this, a)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: r(this, o),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          x(s.mutationKey) !== x(this.options.mutationKey)
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
        (m(this, n, g).call(this), m(this, n, S).call(this, t));
      }
      getCurrentResult() {
        return r(this, l);
      }
      reset() {
        var t;
        ((t = r(this, o)) == null || t.removeObserver(this),
          b(this, o, void 0),
          m(this, n, g).call(this),
          m(this, n, S).call(this));
      }
      mutate(t, s) {
        var i;
        return (
          b(this, u, s),
          (i = r(this, o)) == null || i.removeObserver(this),
          b(
            this,
            o,
            r(this, a).getMutationCache().build(r(this, a), this.options),
          ),
          r(this, o).addObserver(this),
          r(this, o).execute(t)
        );
      }
    }),
    (a = new WeakMap()),
    (l = new WeakMap()),
    (o = new WeakMap()),
    (u = new WeakMap()),
    (n = new WeakSet()),
    (g = function () {
      var s;
      const t = ((s = r(this, o)) == null ? void 0 : s.state) ?? F();
      b(this, l, {
        ...t,
        isPending: t.status === "pending",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (S = function (t) {
      q.batch(() => {
        var s, i, h, y, c, v, M, E;
        if (r(this, u) && this.hasListeners()) {
          const p = r(this, l).variables,
            O = r(this, l).context;
          (t == null ? void 0 : t.type) === "success"
            ? ((i = (s = r(this, u)).onSuccess) == null ||
                i.call(s, t.data, p, O),
              (y = (h = r(this, u)).onSettled) == null ||
                y.call(h, t.data, null, p, O))
            : (t == null ? void 0 : t.type) === "error" &&
              ((v = (c = r(this, u)).onError) == null ||
                v.call(c, t.error, p, O),
              (E = (M = r(this, u)).onSettled) == null ||
                E.call(M, void 0, t.error, p, O));
        }
        this.listeners.forEach((p) => {
          p(r(this, l));
        });
      });
    }),
    K);
function I(e, t) {
  const s = w(),
    [i] = f.useState(() => new D(s, e));
  f.useEffect(() => {
    i.setOptions(e);
  }, [i, e]);
  const h = f.useSyncExternalStore(
      f.useCallback((c) => i.subscribe(q.batchCalls(c)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult(),
    ),
    y = f.useCallback(
      (c, v) => {
        i.mutate(c, v).catch(L);
      },
      [i],
    );
  if (h.error && j(i.options.throwOnError, [h.error])) throw h.error;
  return { ...h, mutate: y, mutateAsync: h.mutate };
}
const H = () => Q({ queryKey: ["reports"], queryFn: () => k.getAllReports() }),
  J = () => {
    const e = w();
    return I({
      mutationFn: (t) => k.createReport(t),
      onSuccess: () => {
        e.invalidateQueries({ queryKey: ["reports"] });
      },
    });
  };
export { J as a, H as u };
