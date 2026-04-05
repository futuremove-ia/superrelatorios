var C = Object.defineProperty;
var w = (t, r, s) =>
  r in t
    ? C(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[r] = s);
var g = (t, r, s) => w(t, typeof r != "symbol" ? r + "" : r, s);
import { j as e } from "./vendor-radix-C8JHQxE0.js";
import { C as d, b as B, c as A, d as R, a as L } from "./card-BOBgEvG6.js";
import { c as l, B as T } from "./index-DF8MdIXV.js";
import {
  f as D,
  a6 as S,
  O,
  B as I,
  d as z,
  t as N,
  a7 as E,
  T as v,
  b as P,
  L as K,
  I as H,
  a8 as F,
  a9 as _,
} from "./vendor-utils-BdCfJOxW.js";
import {
  R as p,
  B as y,
  C as x,
  X as m,
  Y as h,
  T as o,
  a as b,
  A as k,
  b as M,
  P as U,
  c as $,
  d as G,
  L as V,
} from "./vendor-charts-mgiN6Ezj.js";
import { r as W } from "./vendor-react-Ju9LKgAZ.js";
import { B as X } from "./badge-DMwHsW7P.js";
const f = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"],
  Y = ({ block: t }) =>
    e.jsxs("div", {
      className:
        "py-6 border-b border-border/50 mb-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      children: [
        e.jsx("h1", {
          className: "text-3xl font-bold tracking-tight text-foreground",
          children: t.content.title,
        }),
        t.content.body &&
          e.jsx("p", {
            className: "mt-2 text-muted-foreground text-lg leading-relaxed",
            children: t.content.body,
          }),
      ],
    }),
  Z = ({ block: t }) => {
    var i;
    const r = t.content.data || [],
      s = ((i = t.content.settings) == null ? void 0 : i.columns) || 3,
      a = Array.isArray(r)
        ? r
        : Object.entries(r).map(([n, c]) => ({ label: n, value: c }));
    return e.jsx("div", {
      className: `grid grid-cols-1 md:grid-cols-${s} gap-4 my-6`,
      children: a.map((n, c) => {
        const u =
            n.trend === "up" || (typeof n.trend == "number" && n.trend > 0),
          j = n.trend === "down" || (typeof n.trend == "number" && n.trend < 0);
        return e.jsx(
          d,
          {
            className:
              "p-5 card-hover border-border/40 bg-muted/20 relative overflow-hidden group",
            children: e.jsxs("div", {
              className: "relative z-10",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                  children: n.label,
                }),
                e.jsxs("div", {
                  className: "flex items-baseline gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-2xl font-bold text-foreground",
                      children: n.value,
                    }),
                    n.change &&
                      e.jsxs("span", {
                        className: l(
                          "flex items-center text-xs font-bold",
                          u
                            ? "text-emerald-500"
                            : j
                              ? "text-rose-500"
                              : "text-muted-foreground",
                        ),
                        children: [
                          u && e.jsx(D, { className: "h-3 w-3 mr-0.5" }),
                          j && e.jsx(S, { className: "h-3 w-3 mr-0.5" }),
                          n.change,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          },
          c,
        );
      }),
    });
  },
  q = ({ block: t }) => {
    const r = t.content.data || [],
      s = t.content.settings.chartType || "area",
      a = t.content.settings.height || 300,
      i = "hsl(var(--primary))";
    return e.jsxs(d, {
      className: "my-8 border-border/40 overflow-hidden",
      children: [
        e.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            e.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        e.jsx("div", {
          className: "p-4",
          style: { height: a },
          children: e.jsx(p, {
            width: "100%",
            height: "100%",
            children:
              s === "bar"
                ? e.jsxs(y, {
                    data: r,
                    children: [
                      e.jsx(x, {
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      e.jsx(m, {
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      e.jsx(h, {
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                        tickFormatter: (n) => `R$${n / 1e3}k`,
                      }),
                      e.jsx(o, {
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                        itemStyle: { color: "hsl(var(--foreground))" },
                      }),
                      e.jsx(b, {
                        dataKey: "value",
                        fill: i,
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  })
                : e.jsxs(k, {
                    data: r,
                    children: [
                      e.jsx("defs", {
                        children: e.jsxs("linearGradient", {
                          id: "colorValue",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            e.jsx("stop", {
                              offset: "5%",
                              stopColor: i,
                              stopOpacity: 0.3,
                            }),
                            e.jsx("stop", {
                              offset: "95%",
                              stopColor: i,
                              stopOpacity: 0,
                            }),
                          ],
                        }),
                      }),
                      e.jsx(x, {
                        strokeDasharray: "3 3",
                        vertical: !1,
                        stroke: "hsl(var(--muted))",
                      }),
                      e.jsx(m, {
                        dataKey: "name",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      e.jsx(h, { fontSize: 12, tickLine: !1, axisLine: !1 }),
                      e.jsx(o, {
                        contentStyle: {
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                        },
                      }),
                      e.jsx(M, {
                        type: "monotone",
                        dataKey: "value",
                        stroke: i,
                        fillOpacity: 1,
                        fill: "url(#colorValue)",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
          }),
        }),
      ],
    });
  },
  J = ({ block: t }) => {
    const r = t.content.data || [];
    return e.jsxs("div", {
      className: "my-8 space-y-4",
      children: [
        e.jsxs("h3", {
          className: "text-xl font-bold flex items-center gap-2",
          children: [
            e.jsx(O, { className: "h-5 w-5 text-primary" }),
            t.content.title,
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-1 gap-3",
          children: r.map((s, a) => {
            const i = typeof s == "string" ? s : s.task || s.description,
              n = s.priority || "medium";
            return e.jsxs(
              "div",
              {
                className:
                  "flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group",
                children: [
                  e.jsx("div", {
                    className: l(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all",
                      n === "high"
                        ? "bg-rose-100 text-rose-600"
                        : "bg-primary/10 text-primary",
                    ),
                    children: a + 1,
                  }),
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("p", { className: "text-foreground", children: i }),
                      s.priority &&
                        e.jsxs("span", {
                          className: l(
                            "text-[10px] uppercase font-bold tracking-tighter",
                            n === "high"
                              ? "text-rose-500"
                              : "text-muted-foreground",
                          ),
                          children: ["Prioridade: ", n],
                        }),
                    ],
                  }),
                ],
              },
              a,
            );
          }),
        }),
      ],
    });
  },
  Q = ({ block: t }) => {
    var s;
    const r =
      t.content.body ||
      ((s = t.content.data) == null ? void 0 : s.text) ||
      t.content.data ||
      "Aguardando processamento de inteligência artificial...";
    return e.jsxs(d, {
      className: "my-6 border-primary/20 bg-primary/5 overflow-hidden group",
      children: [
        e.jsx("div", {
          className: "h-1 w-full bg-gradient-to-r from-primary/50 to-primary",
        }),
        e.jsxs("div", {
          className: "p-5",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 mb-3",
              children: [
                e.jsx("u", {
                  className:
                    "h-5 w-5 text-primary animate-pulse flex items-center justify-center",
                  children: e.jsx(I, { className: "h-4 w-4" }),
                }),
                e.jsx("h3", {
                  className: "font-bold text-lg text-foreground",
                  children: t.content.title,
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "text-muted-foreground leading-relaxed whitespace-pre-wrap",
              children: r,
            }),
          ],
        }),
      ],
    });
  },
  ee = ({ block: t }) => {
    const r = t.content.data || [],
      s = t.content.settings.height || 300;
    return e.jsxs(d, {
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        e.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            e.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        e.jsx("div", {
          className: "p-4",
          style: { height: s },
          children: e.jsx(p, {
            width: "100%",
            height: "100%",
            children: e.jsxs(U, {
              children: [
                e.jsx($, {
                  data: r,
                  cx: "50%",
                  cy: "50%",
                  innerRadius: 60,
                  outerRadius: 80,
                  paddingAngle: 5,
                  dataKey: "value",
                  children: r.map((a, i) =>
                    e.jsx(G, { fill: f[i % f.length] }, `cell-${i}`),
                  ),
                }),
                e.jsx(o, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                e.jsx(V, { verticalAlign: "bottom", height: 36 }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  se = ({ block: t }) => {
    const r = t.content.data || [],
      s = t.content.settings.height || 300;
    return e.jsxs(d, {
      className: "my-6 border-border/40 overflow-hidden",
      children: [
        e.jsxs("div", {
          className: "p-6 pb-2",
          children: [
            e.jsx("h3", {
              className: "text-lg font-bold text-foreground",
              children: t.content.title,
            }),
            t.content.description &&
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: t.content.description,
              }),
          ],
        }),
        e.jsx("div", {
          className: "p-4",
          style: { height: s },
          children: e.jsx(p, {
            width: "100%",
            height: "100%",
            children: e.jsxs(y, {
              data: r,
              layout: "vertical",
              margin: { left: 40 },
              children: [
                e.jsx(x, {
                  strokeDasharray: "3 3",
                  horizontal: !1,
                  stroke: "hsl(var(--muted))",
                }),
                e.jsx(m, {
                  type: "number",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                }),
                e.jsx(h, {
                  dataKey: "name",
                  type: "category",
                  fontSize: 12,
                  tickLine: !1,
                  axisLine: !1,
                  width: 80,
                }),
                e.jsx(o, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                  },
                }),
                e.jsx(b, {
                  dataKey: "value",
                  fill: "hsl(var(--primary))",
                  radius: [0, 4, 4, 0],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  te = ({ block: t }) => {
    const r = t.content.settings.variant || "info",
      s = {
        info: e.jsx(E, { className: "h-5 w-5 text-blue-500" }),
        warning: e.jsx(v, { className: "h-5 w-5 text-amber-500" }),
        success: e.jsx(P, { className: "h-5 w-5 text-emerald-500" }),
        insight: e.jsx(K, { className: "h-5 w-5 text-primary" }),
      },
      a = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900",
        insight: "bg-primary/5 border-primary/20 text-foreground",
      };
    return e.jsxs("div", {
      className: l(
        "p-4 rounded-xl border flex gap-3 my-6 animate-in fade-in zoom-in-95 duration-300",
        a[r],
      ),
      children: [
        e.jsx("div", { className: "mt-0.5", children: s[r] }),
        e.jsxs("div", {
          children: [
            e.jsx("h4", {
              className: "font-bold text-sm uppercase tracking-wider mb-1",
              children: t.content.title,
            }),
            e.jsx("p", {
              className: "text-sm leading-relaxed",
              children: t.content.body,
            }),
          ],
        }),
      ],
    });
  },
  re = ({ block: t }) =>
    e.jsxs("div", {
      className:
        "my-8 prose prose-slate max-w-none prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed",
      children: [
        t.content.title &&
          e.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: t.content.title,
          }),
        e.jsx("div", {
          className: "whitespace-pre-wrap",
          children: t.content.body,
        }),
      ],
    }),
  ae = ({ block: t }) => {
    const r = t.content.data || [];
    return e.jsx(d, {
      className: "my-6 border-border/40",
      children: e.jsxs("div", {
        className: "p-6",
        children: [
          e.jsxs("h3", {
            className: "text-lg font-bold mb-6 flex items-center gap-2",
            children: [
              e.jsx(z, { className: "h-5 w-5 text-primary" }),
              t.content.title,
            ],
          }),
          e.jsx("div", {
            className: "space-y-6",
            children: r.map((s, a) =>
              e.jsxs(
                "div",
                {
                  className: "space-y-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between text-sm",
                      children: [
                        e.jsx("span", {
                          className: "font-medium",
                          children: s.label,
                        }),
                        e.jsxs("span", {
                          className: "text-muted-foreground",
                          children: [s.value, " vs ", s.benchmark, " (Meta)"],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "h-3 w-full bg-muted rounded-full overflow-hidden flex",
                      children: e.jsx("div", {
                        className: l(
                          "h-full transition-all duration-1000",
                          s.percent >= 100 ? "bg-emerald-500" : "bg-primary",
                        ),
                        style: { width: `${Math.min(s.percent, 100)}%` },
                      }),
                    }),
                  ],
                },
                a,
              ),
            ),
          }),
        ],
      }),
    });
  },
  ne = ({ block: t }) =>
    e.jsxs("div", {
      className:
        "p-8 border-2 border-dashed border-muted rounded-xl text-center my-4",
      children: [
        e.jsx(N, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
        e.jsxs("p", {
          className: "text-muted-foreground",
          children: ['Tipo de bloco "', t.type, '" em desenvolvimento.'],
        }),
      ],
    });
class ie extends W.Component {
  constructor() {
    super(...arguments);
    g(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError(s) {
    return { hasError: !0 };
  }
  componentDidCatch(s, a) {
    console.error("Uncaught error in Report Block:", s, a);
  }
  render() {
    return this.state.hasError
      ? e.jsxs(d, {
          className:
            "my-4 border-destructive/20 bg-destructive/5 p-6 text-center",
          children: [
            e.jsx(N, { className: "h-8 w-8 text-destructive mx-auto mb-2" }),
            e.jsx("h3", {
              className: "font-bold text-destructive mb-1",
              children: "Erro no Bloco",
            }),
            e.jsxs("p", {
              className: "text-sm text-muted-foreground mb-4",
              children: [
                'Não foi possível carregar o bloco "',
                this.props.blockTitle || "Dados",
                '".',
              ],
            }),
            e.jsxs(T, {
              variant: "outline",
              size: "sm",
              onClick: () => this.setState({ hasError: !1 }),
              className: "gap-2",
              children: [
                e.jsx(H, { className: "h-4 w-4" }),
                "Tentar Novamente",
              ],
            }),
          ],
        })
      : this.props.children;
  }
}
const ue = ({ blocks: t }) => {
    const r = (s) => {
      switch (s.type) {
        case "HERO":
          return e.jsx(Y, { block: s }, s.id);
        case "KPI_GRID":
          return e.jsx(Z, { block: s }, s.id);
        case "AI_INSIGHT":
          return e.jsx(Q, { block: s }, s.id);
        case "CHART":
          return e.jsx(q, { block: s }, s.id);
        case "CHART_DONNUT":
          return e.jsx(ee, { block: s }, s.id);
        case "CHART_BAR_HORIZONTAL":
          return e.jsx(se, { block: s }, s.id);
        case "ACTION_PLAN":
          return e.jsx(J, { block: s }, s.id);
        case "CALLOUT":
          return e.jsx(te, { block: s }, s.id);
        case "MARKDOWN":
          return e.jsx(re, { block: s }, s.id);
        case "BENCHMARK_COMPARISON":
          return e.jsx(ae, { block: s }, s.id);
        default:
          return e.jsx(ne, { block: s }, s.id);
      }
    };
    return e.jsx("div", {
      className: "space-y-4",
      children: t.map((s) =>
        e.jsx(
          ie,
          {
            blockTitle: s.content.title,
            children: e.jsx("div", {
              className: "w-full transition-all duration-300",
              children: r(s),
            }),
          },
          s.id,
        ),
      ),
    });
  },
  je = ({ diagnostic: t, onPrioritize: r }) =>
    e.jsxs(d, {
      className:
        "border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/20 to-transparent",
      children: [
        e.jsxs(B, {
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                e.jsxs(X, {
                  variant: "destructive",
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx(v, { className: "h-3 w-3" }),
                    "Alerta Crítico",
                  ],
                }),
                e.jsx("span", {
                  className: "text-xs text-muted-foreground",
                  children: "Diagnóstico gerado pela IA",
                }),
              ],
            }),
            e.jsx(A, { className: "text-xl", children: t.title }),
            e.jsx(R, {
              className: "text-sm font-medium",
              children: t.description,
            }),
          ],
        }),
        e.jsxs(L, {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            e.jsx("div", {
              className: "space-y-4",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className: "mt-1 p-1 bg-amber-100 rounded-full",
                    children: e.jsx(F, { className: "h-4 w-4 text-amber-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h4", {
                        className: "text-sm font-semibold mb-1",
                        children: "Causas Prováveis",
                      }),
                      e.jsx("ul", {
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: t.causes.map((s, a) =>
                          e.jsx("li", { children: s }, a),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "space-y-4",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className: "mt-1 p-1 bg-red-100 rounded-full",
                    children: e.jsx(_, { className: "h-4 w-4 text-red-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h4", {
                        className: "text-sm font-semibold mb-1",
                        children: "Implicações no Negócio",
                      }),
                      e.jsx("ul", {
                        className:
                          "text-sm text-muted-foreground list-disc list-inside space-y-1",
                        children: t.implications.map((s, a) =>
                          e.jsx("li", { children: s }, a),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
export { ue as D, je as a };
