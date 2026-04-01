import {
  j as e,
  C as i,
  n as c,
  o as n,
  g as d,
  B as w,
  s as E,
  b6 as g,
} from "./index-DRWQgA5q.js";
import { r as j } from "./router-XBfdTQ0K.js";
import { u as S } from "./useQuery-pMG9BRxa.js";
import { l as D } from "./riskService-Cr9Nt8xW.js";
import { a as P } from "./useRadarItems-DdsbfOae.js";
import { B as o } from "./badge-DD2chybY.js";
import {
  bx as B,
  by as F,
  aw as u,
  aj as f,
  W as p,
} from "./utils-Er8ll4su.js";
import "./types-JQgdQoTs.js";
import "./useMutation-Bm6B-fB6.js";
import "./radarItemService-DLp7Z56m.js";
const L = { diagnoses: ["library", "diagnoses"], kpis: ["library", "kpis"] };
function q() {
  return S({
    queryKey: L.diagnoses,
    queryFn: () => D.getLibraryDiagnoses(),
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3,
  });
}
function A() {
  return S({
    queryKey: L.kpis,
    queryFn: () => D.getLibraryKPIs(),
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3,
  });
}
function M() {
  const [l, x] = j.useState("checking"),
    [N, _] = j.useState({});
  j.useEffect(() => {
    async function r() {
      try {
        const { data: a, error: t } = await E.from("library_diagnoses").select(
          "count",
          { count: "exact" },
        );
        t
          ? (console.error("Supabase connection error:", t),
            x("error"),
            g.error("Erro na conexão com Supabase: " + t.message))
          : (x("connected"), g.success("Conectado ao Supabase!"), await b());
      } catch (a) {
        (console.error("Connection test failed:", a),
          x("error"),
          g.error("Falha no teste de conexão"));
      }
    }
    r();
  }, []);
  async function b() {
    const r = [
        "library_diagnoses",
        "library_kpis",
        "library_levers",
        "library_impacts",
        "library_timeframes",
        "library_complexities",
        "library_challenges",
        "library_goals",
        "library_actions",
        "radar_items",
      ],
      a = {};
    for (const t of r)
      try {
        const { count: R, error: K } = await E.from(t).select("*", {
          count: "exact",
          head: !0,
        });
        K ? (a[t] = -1) : (a[t] = R || 0);
      } catch {
        a[t] = -1;
      }
    _(a);
  }
  const { data: s, isLoading: T, error: v } = q(),
    { data: m, isLoading: k, error: y } = A(),
    { data: h, isLoading: I, error: C } = P("test-org-uuid");
  return e.jsxs("div", {
    className: "space-y-6 p-6 max-w-6xl mx-auto",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "text-2xl font-bold",
                children: "Teste de Conexão Supabase",
              }),
              e.jsx("p", {
                className: "text-muted-foreground",
                children: "Validando conexão real e dados das tabelas V2",
              }),
            ],
          }),
          e.jsxs(o, {
            variant: l === "connected" ? "default" : "destructive",
            className: "text-base px-3 py-1",
            children: [
              l === "checking" && "Verificando...",
              l === "connected" &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(B, { className: "w-4 h-4 mr-1" }),
                    " Conectado",
                  ],
                }),
              l === "error" &&
                e.jsxs(e.Fragment, {
                  children: [e.jsx(F, { className: "w-4 h-4 mr-1" }), " Erro"],
                }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
        children: [
          e.jsxs(i, {
            children: [
              e.jsx(c, {
                className: "pb-3",
                children: e.jsxs(n, {
                  className: "text-base flex items-center gap-2",
                  children: [
                    e.jsx(u, { className: "w-4 h-4" }),
                    "Library Diagnoses",
                  ],
                }),
              }),
              e.jsx(d, {
                children: T
                  ? e.jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Carregando...",
                    })
                  : v
                    ? e.jsxs("div", {
                        className:
                          "text-sm text-red-600 flex items-center gap-2",
                        children: [
                          e.jsx(f, { className: "w-4 h-4" }),
                          "Erro: ",
                          v.message,
                        ],
                      })
                    : e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(p, { className: "w-5 h-5 text-green-500" }),
                          e.jsx("span", {
                            className: "text-2xl font-bold",
                            children: (s == null ? void 0 : s.length) || 0,
                          }),
                          e.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: "diagnósticos",
                          }),
                        ],
                      }),
              }),
            ],
          }),
          e.jsxs(i, {
            children: [
              e.jsx(c, {
                className: "pb-3",
                children: e.jsxs(n, {
                  className: "text-base flex items-center gap-2",
                  children: [
                    e.jsx(u, { className: "w-4 h-4" }),
                    "Library KPIs",
                  ],
                }),
              }),
              e.jsx(d, {
                children: k
                  ? e.jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Carregando...",
                    })
                  : y
                    ? e.jsxs("div", {
                        className:
                          "text-sm text-red-600 flex items-center gap-2",
                        children: [
                          e.jsx(f, { className: "w-4 h-4" }),
                          "Erro: ",
                          y.message,
                        ],
                      })
                    : e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(p, { className: "w-5 h-5 text-green-500" }),
                          e.jsx("span", {
                            className: "text-2xl font-bold",
                            children: (m == null ? void 0 : m.length) || 0,
                          }),
                          e.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: "KPIs",
                          }),
                        ],
                      }),
              }),
            ],
          }),
          e.jsxs(i, {
            children: [
              e.jsx(c, {
                className: "pb-3",
                children: e.jsxs(n, {
                  className: "text-base flex items-center gap-2",
                  children: [e.jsx(u, { className: "w-4 h-4" }), "Radar Items"],
                }),
              }),
              e.jsx(d, {
                children: I
                  ? e.jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Carregando...",
                    })
                  : C
                    ? e.jsxs("div", {
                        className:
                          "text-sm text-red-600 flex items-center gap-2",
                        children: [
                          e.jsx(f, { className: "w-4 h-4" }),
                          "Erro: ",
                          C.message,
                        ],
                      })
                    : e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(p, { className: "w-5 h-5 text-green-500" }),
                          e.jsx("span", {
                            className: "text-2xl font-bold",
                            children: (h == null ? void 0 : h.length) || 0,
                          }),
                          e.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: "items",
                          }),
                        ],
                      }),
              }),
            ],
          }),
        ],
      }),
      Object.keys(N).length > 0 &&
        e.jsxs(i, {
          children: [
            e.jsx(c, {
              children: e.jsx(n, {
                children: "Estatísticas do Banco (Raw Queries)",
              }),
            }),
            e.jsx(d, {
              children: e.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                children: Object.entries(N).map(([r, a]) =>
                  e.jsxs(
                    "div",
                    {
                      className: `p-3 rounded-lg ${a === -1 ? "bg-red-50" : a === 0 ? "bg-gray-50" : "bg-green-50"}`,
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground uppercase",
                          children: r,
                        }),
                        e.jsx("div", {
                          className: `text-lg font-bold ${a === -1 ? "text-red-600" : a === 0 ? "text-gray-600" : "text-green-600"}`,
                          children: a === -1 ? "Error" : a,
                        }),
                      ],
                    },
                    r,
                  ),
                ),
              }),
            }),
          ],
        }),
      s &&
        s.length > 0 &&
        e.jsxs(i, {
          children: [
            e.jsx(c, {
              children: e.jsx(n, {
                children: "Preview: Primeiro Diagnóstico (Dado Real)",
              }),
            }),
            e.jsxs(d, {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: "Código",
                        }),
                        e.jsx("div", {
                          className: "font-mono text-sm",
                          children: s[0].code,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: "Domínio",
                        }),
                        e.jsx(o, { variant: "outline", children: s[0].domain }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: "Termo Técnico",
                        }),
                        e.jsx("div", {
                          className: "font-medium",
                          children: s[0].technicalTerm,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: "Severidade Padrão",
                        }),
                        e.jsx(o, {
                          variant:
                            s[0].severityDefault === "critical"
                              ? "destructive"
                              : s[0].severityDefault === "high"
                                ? "default"
                                : "secondary",
                          children: s[0].severityDefault,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "Causa",
                    }),
                    e.jsx("p", { className: "text-sm", children: s[0].cause }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "Efeito",
                    }),
                    e.jsx("p", { className: "text-sm", children: s[0].effect }),
                  ],
                }),
                s[0].suggestedLeverCodes.length > 0 &&
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Alavancas Sugeridas",
                      }),
                      e.jsx("div", {
                        className: "flex gap-2 flex-wrap",
                        children: s[0].suggestedLeverCodes.map((r) =>
                          e.jsx(o, { variant: "secondary", children: r }, r),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      e.jsxs("div", {
        className: "flex gap-3",
        children: [
          e.jsx(w, {
            onClick: () => window.location.reload(),
            children: "Recarregar Teste",
          }),
          e.jsx(w, {
            variant: "outline",
            onClick: b,
            children: "Atualizar Estatísticas",
          }),
        ],
      }),
    ],
  });
}
export { M as SupabaseConnectionTest, M as default };
