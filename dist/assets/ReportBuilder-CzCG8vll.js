var ze = Object.defineProperty;
var He = (e, t, r) =>
  t in e
    ? ze(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var ee = (e, t, r) => He(e, typeof t != "symbol" ? t + "" : t, r);
import { j as s } from "./vendor-radix-C8JHQxE0.js";
import { r as b, i as Ge, d as $e } from "./vendor-react-Ju9LKgAZ.js";
import { C as N, b as S, c as O, a as T, d as H } from "./card-BOBgEvG6.js";
import { s as te, B as q, u as P, d as Re, c as Be } from "./index-DF8MdIXV.js";
import {
  a as Ye,
  g as We,
  e as Ke,
  b as Qe,
  p as Ze,
  s as Je,
} from "./fileParserService-LLD8jVCJ.js";
import { a as Xe } from "./useReports-DsZS_Uyb.js";
import { u as es } from "./vendor-data-BixP7Wq-.js";
import { A as xe, a as _e } from "./alert-DvUceMvY.js";
import { B as X } from "./badge-DMwHsW7P.js";
import {
  L as ne,
  g as Fe,
  f as me,
  b as ie,
  T as ve,
  B as G,
  I as ae,
  J as ss,
  K as ts,
  t as oe,
  N as rs,
  O as Se,
  U as is,
  Q as as,
  G as ye,
  F as be,
  V as ns,
  q as je,
  W as os,
  Y as cs,
  _ as pe,
  $ as ds,
  v as ls,
  Z as ce,
  a0 as us,
  E as ms,
  a1 as Ne,
  s as ps,
} from "./vendor-utils-BdCfJOxW.js";
import { I as de } from "./input-CBoaGjHY.js";
import { L as Q } from "./label-BtFA11dg.js";
import { T as Oe } from "./textarea-BfX2Fu9u.js";
import { m as Ie } from "./mockReports-3cW05Ka2.js";
import {
  S as gs,
  a as hs,
  b as fs,
  c as xs,
  d as B,
} from "./select-CWpqlRas.js";
import { D as ke, a as _s } from "./DiagnosticSection-UiAXIWaW.js";
import { P as vs } from "./PriorityCard-DUA37fg1.js";
import "./supabaseReportsService-DuiPZd3J.js";
import "./useCurrentOrganization-CMbUnvon.js";
import "./vendor-charts-mgiN6Ezj.js";
const De = b.createContext(void 0),
  ys = ({ children: e }) => {
    const [t, r] = b.useState(1),
      [i, o] = b.useState(""),
      [a, n] = b.useState({
        title: "",
        description: "",
        category: "",
        dataSource: "upload",
      }),
      [d, g] = b.useState(null),
      [p, u] = b.useState(""),
      [f, x] = b.useState(""),
      [j, _] = b.useState(!1),
      [m, l] = b.useState(!1),
      [v, y] = b.useState(null),
      [A, w] = b.useState(null),
      [D, M] = b.useState(null),
      [F, I] = b.useState(null),
      [C, R] = b.useState([]),
      [k, E] = b.useState([]),
      [L, V] = b.useState([]),
      [W, $] = b.useState(null),
      Me = b.useCallback(async () => {
        if (!v && !p && !f) {
          I("Nenhum dado fornecido para análise.");
          return;
        }
        (_(!0), I(null));
        try {
          const K = v ? v.rows : [{ content: p || f }],
            ge = `Objetivo: ${a.description}. Categoria: ${a.category}. Template: ${i}`,
            [he, fe] = await Promise.all([Ye(K, ge), We(K, ge)]),
            Le = Ke(he);
          V(Le);
          const Ve = { ...fe, ...Qe(fe.diagnostic) };
          $(Ve);
          const Pe = {
            id: crypto.randomUUID(),
            name: (d == null ? void 0 : d.name) || a.title || "Fonte de Dados",
            type: d ? "file" : f ? "url" : "raw_text",
            createdAt: new Date().toISOString(),
            metadata: {
              size: d == null ? void 0 : d.size,
              extension: d == null ? void 0 : d.name.split(".").pop(),
            },
          };
          E((U) => [...U, Pe]);
          const Ue = he.blocks.map((U) => ({
            id: crypto.randomUUID(),
            type: U.type,
            layout: { w: 12 },
            content: {
              title: U.title,
              description: U.description,
              data: U.data,
              settings: U.settings || {},
            },
          }));
          R(Ue);
        } catch (K) {
          (console.error("Erro na análise da IA:", K),
            I(K.message || "Erro ao processar dados com IA."));
        } finally {
          _(!1);
        }
      }, [v, p, f, a, i]);
    return s.jsx(De.Provider, {
      value: {
        step: t,
        setStep: r,
        selectedTemplate: i,
        setSelectedTemplate: o,
        formData: a,
        setFormData: n,
        file: d,
        setFile: g,
        textData: p,
        setTextData: u,
        urlData: f,
        setUrlData: x,
        loading: j,
        setLoading: _,
        aiSuggestionsOpen: m,
        setAiSuggestionsOpen: l,
        parsedData: v,
        setParsedData: y,
        aiResult: A,
        setAiResult: w,
        diagnosticResult: D,
        setDiagnosticResult: M,
        analysisError: F,
        setAnalysisError: I,
        blocks: C,
        setBlocks: R,
        dataSources: k,
        setDataSources: E,
        runAIAnalysis: Me,
        extractedKPIs: L,
        setExtractedKPIs: V,
        enrichedDiagnostic: W,
        setEnrichedDiagnostic: $,
      },
      children: e,
    });
  },
  Y = () => {
    const e = b.useContext(De);
    if (!e)
      throw new Error(
        "useReportBuilderContext must be used within a ReportBuilderProvider",
      );
    return e;
  },
  bs = ({ fileData: e, onTemplateSelected: t }) => {
    const [r, i] = b.useState(null),
      [o, a] = b.useState(!1),
      { data: n = [] } = es({
        queryKey: ["strategic-templates"],
        queryFn: async () => {
          const { data: m } = await te.rpc("find_best_template", {
            p_file_structure: {
              columns: e.headers.map((l) => ({ name: l, type: g(l, e.rows) })),
              row_count: e.rows.length,
            },
            p_industry: null,
            p_category: null,
          });
          return m || [];
        },
      }),
      d = b.useCallback(async () => {
        a(!0);
        try {
          const m = p(e.headers),
            l = u(e.headers),
            { data: v } = await te.rpc("find_best_template", {
              p_file_structure: {
                columns: e.headers.map((y) => ({
                  name: y,
                  type: g(y, e.rows),
                })),
                row_count: e.rows.length,
              },
              p_industry: m,
              p_category: l,
            });
          if (v && v.length > 0) {
            const y = v[0],
              A = f(e, y);
            i({
              isValid: A.length === 0,
              template: y,
              errors: A,
              warnings: x(e, y),
              suggestions: j(e, y),
            });
          } else
            i({
              isValid: !1,
              errors: ["Nenhum template compatível encontrado"],
              suggestions: [
                "Verifique se os nomes das colunas estão corretos",
                "Considere criar um template personalizado",
                "Entre em contato com o suporte para ajuda",
              ],
            });
        } catch (m) {
          (console.error("Error validating file:", m),
            i({
              isValid: !1,
              errors: ["Erro ao validar arquivo. Tente novamente."],
              suggestions: ["Verifique o formato do arquivo e tente novamente"],
            }));
        } finally {
          a(!1);
        }
      }, [e, n]),
      g = (m, l) => {
        const v = l
          .slice(0, 10)
          .map((w) => w[m])
          .filter((w) => w != null);
        if (v.length === 0) return "string";
        const y = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
        if (v.every((w) => y.test(w))) return "date";
        const A = /^-?\d+\.?\d*$/;
        return v.every((w) => A.test(w.toString()))
          ? "number"
          : v.every((w) =>
                ["true", "false", "sim", "não", "yes", "no", "1", "0"].includes(
                  w.toString().toLowerCase(),
                ),
              )
            ? "boolean"
            : "string";
      },
      p = (m) => {
        const l = m.join(" ").toLowerCase();
        return l.includes("fatura") ||
          l.includes("nota fiscal") ||
          l.includes("cnpj")
          ? "varejo"
          : l.includes("paciente") ||
              l.includes("médico") ||
              l.includes("consulta")
            ? "saude"
            : l.includes("aluno") ||
                l.includes("turma") ||
                l.includes("disciplina")
              ? "educacao"
              : l.includes("matéria-prima") ||
                  l.includes("produção") ||
                  l.includes("estoque")
                ? "manufatura"
                : l.includes("cliente") ||
                    l.includes("venda") ||
                    l.includes("produto")
                  ? "varejo"
                  : "general";
      },
      u = (m) => {
        const l = m.join(" ").toLowerCase();
        return l.includes("fluxo") ||
          l.includes("caixa") ||
          l.includes("entrada") ||
          l.includes("saída") ||
          l.includes("dre") ||
          l.includes("receita") ||
          l.includes("lucro") ||
          l.includes("margem")
          ? "financeiro"
          : l.includes("venda") ||
              l.includes("cliente") ||
              l.includes("produto")
            ? "vendas"
            : l.includes("conta") ||
                l.includes("pagar") ||
                l.includes("receber")
              ? "financeiro"
              : l.includes("funcionário") ||
                  l.includes("salário") ||
                  l.includes("rh")
                ? "rh"
                : "financeiro";
      },
      f = (m, l) => {
        var F, I, C, R;
        const v = [],
          y =
            ((F = l.file_structure) == null ? void 0 : F.required_columns) ||
            [],
          A = m.headers.map((k) => k.toLowerCase().trim());
        y.forEach((k) => {
          A.includes(k.name.toLowerCase().trim()) ||
            v.push(`Coluna obrigatória ausente: ${k.name}`);
        });
        const w = ((I = l.file_structure) == null ? void 0 : I.min_rows) || 1;
        m.rows.length < w &&
          v.push(
            `Arquivo precisa ter pelo menos ${w} linhas (tem ${m.rows.length})`,
          );
        const D =
          ((C = l.file_structure) == null ? void 0 : C.max_rows) || 1 / 0;
        m.rows.length > D &&
          v.push(`Arquivo tem muitas linhas. Máximo permitido: ${D}`);
        const M =
          ((R = l.file_structure) == null ? void 0 : R.file_types) || [];
        return (
          M.length > 0 &&
            !M.includes(m.fileType) &&
            v.push(
              `Tipo de arquivo não permitido. Tipos aceitos: ${M.join(", ")}`,
            ),
          v
        );
      },
      x = (m, l) => {
        var D, M;
        const v = [],
          y = [
            ...(((D = l.file_structure) == null
              ? void 0
              : D.required_columns) || []),
            ...(((M = l.file_structure) == null
              ? void 0
              : M.optional_columns) || []),
          ].map((F) => F.name.toLowerCase()),
          A = m.headers.filter((F) => !y.includes(F.toLowerCase()));
        A.length > 0 &&
          v.push(`Colunas não mapeadas serão ignoradas: ${A.join(", ")}`);
        const w = m.rows.filter((F) =>
          F.every((I) => !I || I.toString().trim() === ""),
        );
        return (
          w.length > m.rows.length * 0.1 &&
            v.push(
              `${w.length} linhas vazias detectadas (${((w.length / m.rows.length) * 100).toFixed(1)}%)`,
            ),
          v
        );
      },
      j = (m, l) => {
        const v = [];
        (l.match_score < 80 &&
          v.push("Considere renomear algumas colunas para melhorar o matching"),
          m.rows.length < 50 &&
            v.push("Com mais dados, a análise será mais precisa"));
        const y = l.code;
        return (
          y.includes("FLUXO_CAIXA") &&
            v.push("Adicione categorias para análise mais detalhada"),
          y.includes("DRE") &&
            v.push("Inclua dados comparativos do período anterior"),
          y.includes("VENDAS") &&
            v.push(
              "Adicione informações de região e vendedor para análise geográfica",
            ),
          v
        );
      },
      _ = () => {
        r != null &&
          r.template &&
          t &&
          (te.rpc("increment_template_usage", { p_template_id: r.template.id }),
          t(r.template));
      };
    return s.jsxs("div", {
      className: "space-y-4",
      children: [
        s.jsx("div", {
          className: "flex justify-center",
          children: s.jsx(q, {
            onClick: d,
            disabled: o,
            className: "w-full max-w-md",
            children: o
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("div", {
                      className:
                        "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                    }),
                    "Validando Estrutura...",
                  ],
                })
              : s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(ne, { className: "w-4 h-4 mr-2" }),
                    "Validar e Sugerir Template",
                  ],
                }),
          }),
        }),
        r &&
          s.jsxs(N, {
            children: [
              s.jsxs(S, {
                children: [
                  s.jsxs(O, {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx(Fe, { className: "w-5 h-5" }),
                      "Análise do Arquivo",
                    ],
                  }),
                  s.jsx(X, {
                    variant: r.isValid ? "default" : "destructive",
                    className: r.isValid ? "bg-green-100 text-green-800" : "",
                    children: r.isValid ? "Válido" : "Inválido",
                  }),
                ],
              }),
              s.jsxs(T, {
                className: "space-y-6",
                children: [
                  r.template &&
                    s.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            s.jsx("h4", {
                              className: "text-lg font-semibold",
                              children: "Template Sugerido",
                            }),
                            s.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                s.jsxs(X, {
                                  variant: "outline",
                                  children: [
                                    "Score: ",
                                    r.template.match_score,
                                    "%",
                                  ],
                                }),
                                s.jsx(me, {
                                  className: "w-4 h-4 text-green-600",
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "bg-blue-50 p-4 rounded-lg border border-blue-200",
                          children: [
                            s.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-3",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("h5", {
                                      className: "font-semibold text-blue-900",
                                      children: r.template.name,
                                    }),
                                    s.jsx("p", {
                                      className: "text-sm text-blue-700 mt-1",
                                      children: r.template.description,
                                    }),
                                  ],
                                }),
                                s.jsx(q, {
                                  size: "sm",
                                  onClick: _,
                                  disabled: !r.isValid,
                                  children: "Usar este Template",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "text-sm text-blue-800",
                              children: [
                                s.jsx("strong", { children: "Código:" }),
                                " ",
                                r.template.code,
                                s.jsx("br", {}),
                                s.jsx("strong", { children: "Indústria:" }),
                                " ",
                                r.template.industry,
                                s.jsx("br", {}),
                                s.jsx("strong", { children: "Categoria:" }),
                                " ",
                                r.template.category,
                              ],
                            }),
                            r.template.match_reasons.length > 0 &&
                              s.jsxs("div", {
                                className: "mt-3 pt-3 border-t border-blue-200",
                                children: [
                                  s.jsx("strong", {
                                    className: "text-sm",
                                    children: "Motivos do matching:",
                                  }),
                                  s.jsx("ul", {
                                    className: "mt-2 space-y-1 text-sm",
                                    children: r.template.match_reasons.map(
                                      (m, l) =>
                                        s.jsxs(
                                          "li",
                                          {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              s.jsx(ie, {
                                                className:
                                                  "w-3 h-3 text-green-600",
                                              }),
                                              m,
                                            ],
                                          },
                                          l,
                                        ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  r.errors &&
                    r.errors.length > 0 &&
                    s.jsxs(xe, {
                      className: "border-red-200 bg-red-50",
                      children: [
                        s.jsx(ve, { className: "h-4 w-4 text-red-600" }),
                        s.jsxs(_e, {
                          className: "text-red-800",
                          children: [
                            s.jsx("div", {
                              className: "font-medium mb-2",
                              children: "Erros encontrados:",
                            }),
                            s.jsx("ul", {
                              className: "space-y-1 text-sm",
                              children: r.errors.map((m, l) =>
                                s.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      s.jsx("span", {
                                        className: "text-red-600 mt-0.5",
                                        children: "•",
                                      }),
                                      m,
                                    ],
                                  },
                                  l,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  r.warnings &&
                    r.warnings.length > 0 &&
                    s.jsxs(xe, {
                      className: "border-yellow-200 bg-yellow-50",
                      children: [
                        s.jsx(ve, { className: "h-4 w-4 text-yellow-600" }),
                        s.jsxs(_e, {
                          className: "text-yellow-800",
                          children: [
                            s.jsx("div", {
                              className: "font-medium mb-2",
                              children: "Avisos:",
                            }),
                            s.jsx("ul", {
                              className: "space-y-1 text-sm",
                              children: r.warnings.map((m, l) =>
                                s.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      s.jsx("span", {
                                        className: "text-yellow-600 mt-0.5",
                                        children: "•",
                                      }),
                                      m,
                                    ],
                                  },
                                  l,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  r.suggestions &&
                    r.suggestions.length > 0 &&
                    s.jsxs("div", {
                      className: "bg-gray-50 p-4 rounded-lg",
                      children: [
                        s.jsxs("h4", {
                          className: "font-medium mb-3 flex items-center gap-2",
                          children: [
                            s.jsx(ne, { className: "w-4 h-4 text-gray-600" }),
                            "Sugestões para Melhorar",
                          ],
                        }),
                        s.jsx("ul", {
                          className: "space-y-2 text-sm",
                          children: r.suggestions.map((m, l) =>
                            s.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-2",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600 mt-0.5",
                                    children: "•",
                                  }),
                                  m,
                                ],
                              },
                              l,
                            ),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  h = (e, t, r = 0, i = 100) => {
    if (t === 0)
      return {
        value: null,
        status: "division_by_zero",
        error: `Divisor é zero: ${e} / ${t}`,
        warnings: [],
      };
    if (!isFinite(e) || !isFinite(t))
      return {
        value: null,
        status: "overflow",
        error: "Valor muito grande para cálculo",
        warnings: [],
      };
    const o = (e / t) * i;
    return isNaN(o) || !isFinite(o)
      ? {
          value: null,
          status: "invalid_input",
          error: "Resultado inválido",
          warnings: [],
        }
      : { value: o, status: "success", warnings: [] };
  },
  z = (e, t) => {
    if (!e || e.length === 0)
      return {
        value: null,
        status: "insufficient_data",
        error: "Sem dados para agregação",
        warnings: [],
      };
    const r = e.filter((a) => isFinite(a) && a !== null);
    if (r.length === 0)
      return {
        value: null,
        status: "insufficient_data",
        error: "Sem valores válidos para agregação",
        warnings: [],
      };
    let i;
    const o = [];
    switch (
      (r.length < e.length &&
        o.push(`${e.length - r.length} valores inválidos foram ignorados`),
      t)
    ) {
      case "sum":
        i = r.reduce((a, n) => a + n, 0);
        break;
      case "average":
        i = r.reduce((a, n) => a + n, 0) / r.length;
        break;
      case "last":
        i = r[r.length - 1];
        break;
      case "min":
        i = Math.min(...r);
        break;
      case "max":
        i = Math.max(...r);
        break;
    }
    return { value: i, status: "success", warnings: o };
  },
  c = (e, t) => {
    const i =
      e.filter((o) => t[o] !== void 0 && t[o] !== null).length / e.length;
    return i >= 0.9
      ? "high"
      : i >= 0.6
        ? "medium"
        : i >= 0.3
          ? "low"
          : "unknown";
  },
  Z = {
    "TECH-MRR-001": {
      code: "TECH-MRR-001",
      type: "simple_ratio",
      description: "Receita recorrente mensal de contratos SaaS",
      requiredFields: [
        { name: "mrr", description: "Monthly Recurring Revenue", required: !0 },
      ],
      calculation: (e) => {
        const t = e.mrr;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "MRR não fornecido",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["mrr"], e),
      getThresholds: () => ({ critical: 0, warning: 1e4, good: 5e4 }),
    },
    "TECH-CHURN-001": {
      code: "TECH-CHURN-001",
      type: "percentage",
      description: "Taxa de cancelamento de clientes",
      requiredFields: [
        {
          name: "churned_customers",
          description: "Clientes que cancelaram",
          required: !0,
        },
        {
          name: "total_customers",
          description: "Total de clientes",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.churned_customers,
          r = e.total_customers;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["churned_customers", "total_customers"], e),
      getThresholds: () => ({ critical: 15, warning: 8, good: 2 }),
    },
    "TECH-NRR-001": {
      code: "TECH-NRR-001",
      type: "percentage",
      description: "Retenção de receita líquida",
      requiredFields: [
        { name: "starting_mrr", description: "MRR inicial", required: !0 },
        { name: "churn_mrr", description: "MRR perdido", required: !0 },
        { name: "expansion_mrr", description: "MRR de expansão", required: !0 },
      ],
      calculation: (e) => {
        const t = e.starting_mrr,
          r = e.churn_mrr,
          i = e.expansion_mrr;
        return t === void 0 || !isFinite(t) || t === 0
          ? {
              value: null,
              status: "insufficient_data",
              error: "MRR inicial não fornecido",
              warnings: [],
            }
          : h(t - (r || 0) + (i || 0), t, 100, 100);
      },
      getConfidence: (e) => c(["starting_mrr"], e),
      getThresholds: () => ({ critical: 70, warning: 90, good: 110 }),
    },
    "TECH-CAC-001": {
      code: "TECH-CAC-001",
      type: "simple_ratio",
      description: "Custo de aquisição por cliente",
      requiredFields: [
        {
          name: "marketing_spend",
          description: "Gasto com marketing",
          required: !0,
        },
        { name: "sales_spend", description: "Gasto com vendas", required: !0 },
        {
          name: "new_customers",
          description: "Novos clientes adquiridos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.marketing_spend || 0,
          r = e.sales_spend || 0,
          i = e.new_customers,
          o = t + r;
        return h(o, i, 0, 1);
      },
      getConfidence: (e) => c(["marketing_spend", "new_customers"], e),
      getThresholds: () => ({ critical: 1e3, warning: 500, good: 200 }),
    },
    "TECH-LTV-001": {
      code: "TECH-LTV-001",
      type: "derived",
      description: "Valor do ciclo de vida do cliente",
      requiredFields: [
        { name: "mrr", description: "Monthly Recurring Revenue", required: !0 },
        {
          name: "churn_rate",
          description: "Taxa de churn mensal",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.mrr,
          r = e.churn_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "MRR não fornecido",
              warnings: [],
            }
          : r === void 0 || !isFinite(r) || r === 0
            ? {
                value: t * 24,
                status: "success",
                warnings: [
                  "Taxa de churn não fornecida, usando默认值 de 24 meses",
                ],
              }
            : { value: t / (r / 100), status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["mrr"], e),
      getThresholds: () => ({ critical: 500, warning: 2e3, good: 1e4 }),
    },
    "TECH-LTVCAC-001": {
      code: "TECH-LTVCAC-001",
      type: "simple_ratio",
      description: "Proporção LTV por CAC",
      requiredFields: [
        { name: "ltv", description: "Lifetime Value", required: !0 },
        { name: "cac", description: "Customer Acquisition Cost", required: !0 },
      ],
      calculation: (e) => {
        const t = e.ltv,
          r = e.cac;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["ltv", "cac"], e),
      getThresholds: () => ({ critical: 1, warning: 2, good: 3 }),
    },
    "TECH-DAU-001": {
      code: "TECH-DAU-001",
      type: "aggregation",
      description: "Usuários ativos diários",
      requiredFields: [
        {
          name: "daily_active_users",
          description: "Usuários ativos por dia",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.daily_active_users;
        return t
          ? z(t, "average")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados diários não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["daily_active_users"], e),
      getThresholds: () => ({ critical: 100, warning: 1e3, good: 1e4 }),
    },
    "TECH-MAU-001": {
      code: "TECH-MAU-001",
      type: "aggregation",
      description: "Usuários ativos mensais",
      requiredFields: [
        {
          name: "monthly_active_users",
          description: "Usuários ativos por mês",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.monthly_active_users;
        return t
          ? z(t, "last")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados mensais não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["monthly_active_users"], e),
      getThresholds: () => ({ critical: 500, warning: 5e3, good: 5e4 }),
    },
    "TECH-NPS-001": {
      code: "TECH-NPS-001",
      type: "simple_ratio",
      description: "Net Promoter Score",
      requiredFields: [
        { name: "promoters", description: "Promotores (9-10)", required: !0 },
        { name: "detractors", description: "Detratores (0-6)", required: !0 },
        {
          name: "total_responses",
          description: "Total de respostas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.promoters,
          r = e.detractors,
          i = e.total_responses;
        if (i === void 0 || i === 0)
          return {
            value: null,
            status: "insufficient_data",
            error: "Total de respostas não fornecido",
            warnings: [],
          };
        const o = ((t || 0) / i) * 100,
          a = ((r || 0) / i) * 100;
        return { value: o - a, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["total_responses"], e),
      getThresholds: () => ({ critical: 0, warning: 30, good: 50 }),
    },
    "TECH-FIRST-RESPONSE": {
      code: "TECH-FIRST-RESPONSE",
      type: "aggregation",
      description: "Tempo médio de primeira resposta",
      requiredFields: [
        {
          name: "response_times",
          description: "Tempos de resposta em horas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.response_times;
        return t
          ? z(t, "average")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados de tempo não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["response_times"], e),
      getThresholds: () => ({ critical: 24, warning: 8, good: 1 }),
    },
    "RET-GMV-001": {
      code: "RET-GMV-001",
      type: "simple_ratio",
      description: "Valor bruto de mercadorias vendidas",
      requiredFields: [
        { name: "gmv", description: "Gross Merchandise Value", required: !0 },
      ],
      calculation: (e) => {
        const t = e.gmv;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "GMV não fornecido",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["gmv"], e),
      getThresholds: () => ({ critical: 0, warning: 5e4, good: 2e5 }),
    },
    "RET-AOV-001": {
      code: "RET-AOV-001",
      type: "simple_ratio",
      description: "Valor médio por pedido",
      requiredFields: [
        { name: "gmv", description: "Valor total das vendas", required: !0 },
        { name: "orders", description: "Número de pedidos", required: !0 },
      ],
      calculation: (e) => {
        const t = e.gmv,
          r = e.orders;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["gmv", "orders"], e),
      getThresholds: () => ({ critical: 50, warning: 100, good: 200 }),
    },
    "RET-CONVERSION-001": {
      code: "RET-CONVERSION-001",
      type: "percentage",
      description: "Taxa de conversão de visitantes",
      requiredFields: [
        { name: "orders", description: "Pedidos concluídos", required: !0 },
        { name: "visitors", description: "Visitantes únicos", required: !0 },
      ],
      calculation: (e) => {
        const t = e.orders,
          r = e.visitors;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["orders", "visitors"], e),
      getThresholds: () => ({ critical: 0.5, warning: 2, good: 5 }),
    },
    "RET-ATC-001": {
      code: "RET-ATC-001",
      type: "percentage",
      description: "Taxa de adicionar ao carrinho",
      requiredFields: [
        { name: "cart_adds", description: "Adições ao carrinho", required: !0 },
        { name: "visitors", description: "Visitantes únicos", required: !0 },
      ],
      calculation: (e) => {
        const t = e.cart_adds,
          r = e.visitors;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["cart_adds", "visitors"], e),
      getThresholds: () => ({ critical: 5, warning: 15, good: 30 }),
    },
    "RET-RETURN-RATE": {
      code: "RET-RETURN-RATE",
      type: "percentage",
      description: "Taxa de devolução",
      requiredFields: [
        { name: "returns", description: "Pedidos devolvidos", required: !0 },
        { name: "orders", description: "Total de pedidos", required: !0 },
      ],
      calculation: (e) => {
        const t = e.returns,
          r = e.orders;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["returns", "orders"], e),
      getThresholds: () => ({ critical: 30, warning: 15, good: 5 }),
    },
    "RET-INVENTORY-TURNS": {
      code: "RET-INVENTORY-TURNS",
      type: "simple_ratio",
      description: "Giro de estoque",
      requiredFields: [
        {
          name: "cogs",
          description: "Custo de mercadorias vendidas",
          required: !0,
        },
        {
          name: "inventory_value",
          description: "Valor do estoque",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.cogs,
          r = e.inventory_value;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["cogs", "inventory_value"], e),
      getThresholds: () => ({ critical: 2, warning: 4, good: 8 }),
    },
    "RET-SELL-THROUGH": {
      code: "RET-SELL-THROUGH",
      type: "percentage",
      description: "Taxa de conversão de estoque",
      requiredFields: [
        { name: "units_sold", description: "Unidades vendidas", required: !0 },
        {
          name: "units_received",
          description: "Unidades recebidas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.units_sold,
          r = e.units_received;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["units_sold", "units_received"], e),
      getThresholds: () => ({ critical: 30, warning: 60, good: 85 }),
    },
    "RET-OTP-001": {
      code: "RET-OTP-001",
      type: "simple_ratio",
      description: "Tempo entre pedido e retirada",
      requiredFields: [
        {
          name: "order_to_pickup_time",
          description: "Tempo em horas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.order_to_pickup_time;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Tempo não fornecido",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["order_to_pickup_time"], e),
      getThresholds: () => ({ critical: 4, warning: 2, good: 0.5 }),
    },
    "RET-ATV-001": {
      code: "RET-ATV-001",
      type: "simple_ratio",
      description: "Valor médio da transação",
      requiredFields: [
        { name: "revenue", description: "Receita total", required: !0 },
        {
          name: "transactions",
          description: "Número de transações",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.revenue,
          r = e.transactions;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["revenue", "transactions"], e),
      getThresholds: () => ({ critical: 20, warning: 50, good: 100 }),
    },
    "RET-CUSTOMER-FREQ": {
      code: "RET-CUSTOMER-FREQ",
      type: "simple_ratio",
      description: "Frequência de visitas do cliente",
      requiredFields: [
        { name: "total_visits", description: "Total de visitas", required: !0 },
        {
          name: "unique_customers",
          description: "Clientes únicos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.total_visits,
          r = e.unique_customers;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["total_visits", "unique_customers"], e),
      getThresholds: () => ({ critical: 1, warning: 2, good: 4 }),
    },
    "HEALTH-OCCUPANCY": {
      code: "HEALTH-OCCUPANCY",
      type: "percentage",
      description: "Taxa de ocupação de leitos",
      requiredFields: [
        { name: "occupied_beds", description: "Leitos ocupados", required: !0 },
        { name: "total_beds", description: "Total de leitos", required: !0 },
      ],
      calculation: (e) => {
        const t = e.occupied_beds,
          r = e.total_beds;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["occupied_beds", "total_beds"], e),
      getThresholds: () => ({ critical: 50, warning: 75, good: 85 }),
    },
    "HEALTH-READMISSION": {
      code: "HEALTH-READMISSION",
      type: "percentage",
      description: "Taxa de readmissão",
      requiredFields: [
        {
          name: "readmissions",
          description: "Readmissões em 30 dias",
          required: !0,
        },
        {
          name: "total_discharges",
          description: "Total de altas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.readmissions,
          r = e.total_discharges;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["readmissions", "total_discharges"], e),
      getThresholds: () => ({ critical: 20, warning: 10, good: 5 }),
    },
    "HEALTH-WAIT-TIME": {
      code: "HEALTH-WAIT-TIME",
      type: "aggregation",
      description: "Tempo médio de espera",
      requiredFields: [
        {
          name: "wait_times",
          description: "Tempos de espera em minutos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.wait_times;
        return t
          ? z(t, "average")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados de espera não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["wait_times"], e),
      getThresholds: () => ({ critical: 120, warning: 45, good: 15 }),
    },
    "HEALTH-NPS-001": {
      code: "HEALTH-NPS-001",
      type: "simple_ratio",
      description: "Índice de satisfação do paciente",
      requiredFields: [
        { name: "promoters", description: "Promotores", required: !0 },
        { name: "detractors", description: "Detratores", required: !0 },
        {
          name: "total_responses",
          description: "Total de respostas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.promoters,
          r = e.detractors,
          i = e.total_responses;
        if (i === void 0 || i === 0)
          return {
            value: null,
            status: "insufficient_data",
            error: "Total de respostas não fornecido",
            warnings: [],
          };
        const o = ((t || 0) / i) * 100,
          a = ((r || 0) / i) * 100;
        return { value: o - a, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["total_responses"], e),
      getThresholds: () => ({ critical: 0, warning: 30, good: 50 }),
    },
    "HEALTH-STAFF-UTIL": {
      code: "HEALTH-STAFF-UTIL",
      type: "percentage",
      description: "Taxa de utilização de staff",
      requiredFields: [
        {
          name: "staff_hours_worked",
          description: "Horas trabalhadas",
          required: !0,
        },
        {
          name: "staff_hours_available",
          description: "Horas disponíveis",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.staff_hours_worked,
          r = e.staff_hours_available;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) =>
        c(["staff_hours_worked", "staff_hours_available"], e),
      getThresholds: () => ({ critical: 60, warning: 75, good: 90 }),
    },
    "HEALTH-REVENUE-PT": {
      code: "HEALTH-REVENUE-PT",
      type: "simple_ratio",
      description: "Receita por paciente",
      requiredFields: [
        { name: "total_revenue", description: "Receita total", required: !0 },
        {
          name: "total_patients",
          description: "Total de pacientes",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.total_revenue,
          r = e.total_patients;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["total_revenue", "total_patients"], e),
      getThresholds: () => ({ critical: 100, warning: 500, good: 1e3 }),
    },
    "HEALTH-CLAIMS-TIME": {
      code: "HEALTH-CLAIMS-TIME",
      type: "aggregation",
      description: "Tempo de processamento de klaims",
      requiredFields: [
        {
          name: "claims_processing_times",
          description: "Tempos em dias",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.claims_processing_times;
        return t
          ? z(t, "average")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["claims_processing_times"], e),
      getThresholds: () => ({ critical: 30, warning: 14, good: 5 }),
    },
    "HEALTH-APPOINTMENT-YIELD": {
      code: "HEALTH-APPOINTMENT-YIELD",
      type: "percentage",
      description: "Taxa de comparecimento",
      requiredFields: [
        { name: "attended", description: "Consultas realizadas", required: !0 },
        { name: "scheduled", description: "Consultas agendadas", required: !0 },
      ],
      calculation: (e) => {
        const t = e.attended,
          r = e.scheduled;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["attended", "scheduled"], e),
      getThresholds: () => ({ critical: 60, warning: 80, good: 95 }),
    },
    "MFG-OEE-001": {
      code: "MFG-OEE-001",
      type: "derived",
      description: "Eficiência global do equipamento",
      requiredFields: [
        {
          name: "availability",
          description: "Disponibilidade %",
          required: !0,
        },
        { name: "performance", description: "Performance %", required: !0 },
        { name: "quality", description: "Qualidade %", required: !0 },
      ],
      calculation: (e) => {
        const t = e.availability || 0,
          r = e.performance || 0,
          i = e.quality || 0;
        return t === 0 && r === 0 && i === 0
          ? {
              value: null,
              status: "insufficient_data",
              error: "Dados OEE não fornecidos",
              warnings: [],
            }
          : {
              value: (t / 100) * (r / 100) * (i / 100) * 100,
              status: "success",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["availability", "performance", "quality"], e),
      getThresholds: () => ({ critical: 50, warning: 65, good: 85 }),
    },
    "MFG-FPY-001": {
      code: "MFG-FPY-001",
      type: "percentage",
      description: "Taxa de primeira passagem",
      requiredFields: [
        {
          name: "first_pass_ok",
          description: "Unidades OK na primeira vez",
          required: !0,
        },
        {
          name: "total_produced",
          description: "Total produzido",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.first_pass_ok,
          r = e.total_produced;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["first_pass_ok", "total_produced"], e),
      getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
    },
    "MFG-DEFECT-RATE": {
      code: "MFG-DEFECT-RATE",
      type: "percentage",
      description: "Taxa de defeitos",
      requiredFields: [
        { name: "defects", description: "Unidades com defeito", required: !0 },
        {
          name: "total_produced",
          description: "Total produzido",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.defects,
          r = e.total_produced;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["defects", "total_produced"], e),
      getThresholds: () => ({ critical: 10, warning: 5, good: 1 }),
    },
    "MFG-DOWNTIME": {
      code: "MFG-DOWNTIME",
      type: "percentage",
      description: "Taxa de parada não planejada",
      requiredFields: [
        {
          name: "downtime_hours",
          description: "Horas de parada",
          required: !0,
        },
        {
          name: "planned_hours",
          description: "Horas planejadas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.downtime_hours,
          r = e.planned_hours;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["downtime_hours", "planned_hours"], e),
      getThresholds: () => ({ critical: 20, warning: 10, good: 3 }),
    },
    "MFG-CYCLE-TIME": {
      code: "MFG-CYCLE-TIME",
      type: "aggregation",
      description: "Tempo de ciclo",
      requiredFields: [
        {
          name: "cycle_times",
          description: "Tempos de ciclo em minutos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.cycle_times;
        return t
          ? z(t, "average")
          : {
              value: null,
              status: "insufficient_data",
              error: "Dados de ciclo não fornecidos",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["cycle_times"], e),
      getThresholds: () => ({ critical: 60, warning: 30, good: 10 }),
    },
    "MFG-INVENTORY-DAYS": {
      code: "MFG-INVENTORY-DAYS",
      type: "simple_ratio",
      description: "Dias de estoque",
      requiredFields: [
        {
          name: "inventory_value",
          description: "Valor do estoque",
          required: !0,
        },
        { name: "daily_usage", description: "Uso diário", required: !0 },
      ],
      calculation: (e) => {
        const t = e.inventory_value,
          r = e.daily_usage;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["inventory_value", "daily_usage"], e),
      getThresholds: () => ({ critical: 90, warning: 45, good: 14 }),
    },
    "MFG-CAPACITY-UTIL": {
      code: "MFG-CAPACITY-UTIL",
      type: "percentage",
      description: "Utilização de capacidade",
      requiredFields: [
        { name: "actual_output", description: "Produção real", required: !0 },
        {
          name: "max_capacity",
          description: "Capacidade máxima",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.actual_output,
          r = e.max_capacity;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["actual_output", "max_capacity"], e),
      getThresholds: () => ({ critical: 50, warning: 70, good: 85 }),
    },
    "MFG-SCRAP-RATE": {
      code: "MFG-SCRAP-RATE",
      type: "percentage",
      description: "Taxa de refugos",
      requiredFields: [
        { name: "scrap", description: "Refugos", required: !0 },
        {
          name: "total_produced",
          description: "Total produzido",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.scrap,
          r = e.total_produced;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["scrap", "total_produced"], e),
      getThresholds: () => ({ critical: 10, warning: 5, good: 1 }),
    },
    "SERV-BILLABLE-RATIO": {
      code: "SERV-BILLABLE-RATIO",
      type: "percentage",
      description: "Taxa de utilização faturável",
      requiredFields: [
        {
          name: "billable_hours",
          description: "Horas faturáveis",
          required: !0,
        },
        { name: "total_hours", description: "Horas totais", required: !0 },
      ],
      calculation: (e) => {
        const t = e.billable_hours,
          r = e.total_hours;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["billable_hours", "total_hours"], e),
      getThresholds: () => ({ critical: 50, warning: 65, good: 80 }),
    },
    "SERV-PROJECT-MARGIN": {
      code: "SERV-PROJECT-MARGIN",
      type: "percentage",
      description: "Margem do projeto",
      requiredFields: [
        {
          name: "project_revenue",
          description: "Receita do projeto",
          required: !0,
        },
        { name: "project_cost", description: "Custo do projeto", required: !0 },
      ],
      calculation: (e) => {
        const t = e.project_revenue,
          r = e.project_cost;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Receita não fornecida",
              warnings: [],
            }
          : t === 0
            ? {
                value: null,
                status: "division_by_zero",
                error: "Receita zero",
                warnings: [],
              }
            : {
                value: ((t - (r || 0)) / t) * 100,
                status: "success",
                warnings: [],
              };
      },
      getConfidence: (e) => c(["project_revenue"], e),
      getThresholds: () => ({ critical: 10, warning: 20, good: 35 }),
    },
    "SERV-UTILIZATION": {
      code: "SERV-UTILIZATION",
      type: "percentage",
      description: "Utilização de recursos",
      requiredFields: [
        {
          name: "utilized_hours",
          description: "Horas utilizadas",
          required: !0,
        },
        {
          name: "available_hours",
          description: "Horas disponíveis",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.utilized_hours,
          r = e.available_hours;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["utilized_hours", "available_hours"], e),
      getThresholds: () => ({ critical: 60, warning: 75, good: 90 }),
    },
    "SERV-BILLING-EFF": {
      code: "SERV-BILLING-EFF",
      type: "percentage",
      description: "Eficiência de faturamento",
      requiredFields: [
        { name: "billed_amount", description: "Valor faturado", required: !0 },
        {
          name: "potential_amount",
          description: "Valor potencial",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.billed_amount,
          r = e.potential_amount;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["billed_amount", "potential_amount"], e),
      getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
    },
    "SERV-TICKET-ESCAL": {
      code: "SERV-TICKET-ESCAL",
      type: "percentage",
      description: "Taxa de escalação de tickets",
      requiredFields: [
        {
          name: "escalated_tickets",
          description: "Tickets escalados",
          required: !0,
        },
        {
          name: "total_tickets",
          description: "Total de tickets",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.escalated_tickets,
          r = e.total_tickets;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["escalated_tickets", "total_tickets"], e),
      getThresholds: () => ({ critical: 20, warning: 10, good: 3 }),
    },
    "SERV-CSAT-001": {
      code: "SERV-CSAT-001",
      type: "aggregation",
      description: "Satisfação do cliente",
      requiredFields: [
        {
          name: "satisfaction_scores",
          description: "Scores de satisfação (1-5)",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.satisfaction_scores;
        if (!t)
          return {
            value: null,
            status: "insufficient_data",
            error: "Scores não fornecidos",
            warnings: [],
          };
        const r = z(t, "average");
        return (r.value !== null && (r.value = r.value * 20), r);
      },
      getConfidence: (e) => c(["satisfaction_scores"], e),
      getThresholds: () => ({ critical: 40, warning: 70, good: 85 }),
    },
    "SERV-RENEWAL-RATE": {
      code: "SERV-RENEWAL-RATE",
      type: "percentage",
      description: "Taxa de renovação de contrato",
      requiredFields: [
        {
          name: "renewed_contracts",
          description: "Contratos renovados",
          required: !0,
        },
        {
          name: "expiring_contracts",
          description: "Contratos a expirar",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.renewed_contracts,
          r = e.expiring_contracts;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["renewed_contracts", "expiring_contracts"], e),
      getThresholds: () => ({ critical: 60, warning: 80, good: 95 }),
    },
    "FIN-NPL-001": {
      code: "FIN-NPL-001",
      type: "percentage",
      description: "Empréstimos inadimplentes",
      requiredFields: [
        { name: "npl", description: "Valor inadimplente", required: !0 },
        {
          name: "total_loans",
          description: "Total de empréstimos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.npl,
          r = e.total_loans;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["npl", "total_loans"], e),
      getThresholds: () => ({ critical: 15, warning: 8, good: 3 }),
    },
    "FIN-NIM-001": {
      code: "FIN-NIM-001",
      type: "percentage",
      description: "Margem de juros líquida",
      requiredFields: [
        {
          name: "interest_income",
          description: "Receita de juros",
          required: !0,
        },
        {
          name: "interest_expense",
          description: "Despesa de juros",
          required: !0,
        },
        {
          name: "earning_assets",
          description: "Ativos geradores",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.interest_income,
          r = e.interest_expense,
          i = e.earning_assets;
        if (i === void 0 || i === 0)
          return {
            value: null,
            status: "insufficient_data",
            error: "Ativos geradores não fornecidos",
            warnings: [],
          };
        const o = (t || 0) - (r || 0);
        return h(o, i, 0, 100);
      },
      getConfidence: (e) => c(["interest_income", "earning_assets"], e),
      getThresholds: () => ({ critical: 1, warning: 3, good: 5 }),
    },
    "FIN-ROE-001": {
      code: "FIN-ROE-001",
      type: "percentage",
      description: "Retorno sobre patrimônio",
      requiredFields: [
        { name: "net_income", description: "Lucro líquido", required: !0 },
        { name: "equity", description: "Patrimônio líquido", required: !0 },
      ],
      calculation: (e) => {
        const t = e.net_income,
          r = e.equity;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["net_income", "equity"], e),
      getThresholds: () => ({ critical: 5, warning: 10, good: 15 }),
    },
    "FIN-EBITDA-001": {
      code: "FIN-EBITDA-001",
      type: "percentage",
      description: "Margem EBITDA",
      requiredFields: [
        { name: "ebitda", description: "EBITDA", required: !0 },
        { name: "revenue", description: "Receita", required: !0 },
      ],
      calculation: (e) => {
        const t = e.ebitda,
          r = e.revenue;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["ebitda", "revenue"], e),
      getThresholds: () => ({ critical: 5, warning: 15, good: 25 }),
    },
    "FIN-CASH-FLOW": {
      code: "FIN-CASH-FLOW",
      type: "simple_ratio",
      description: "Fluxo de caixa operacional",
      requiredFields: [
        { name: "cash_flow", description: "Fluxo de caixa", required: !0 },
      ],
      calculation: (e) => {
        const t = e.cash_flow;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Fluxo de caixa não fornecido",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["cash_flow"], e),
      getThresholds: () => ({ critical: 0, warning: 1e4, good: 1e5 }),
    },
    "FIN-QUICK-RATIO": {
      code: "FIN-QUICK-RATIO",
      type: "simple_ratio",
      description: "Liquidez imediata",
      requiredFields: [
        {
          name: "current_assets",
          description: "Ativos circulantes",
          required: !0,
        },
        { name: "inventory", description: "Inventário", required: !0 },
        {
          name: "current_liabilities",
          description: "Passivos circulantes",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.current_assets,
          r = e.inventory,
          i = e.current_liabilities;
        if (i === void 0 || i === 0)
          return {
            value: null,
            status: "division_by_zero",
            error: "Passivos zero",
            warnings: [],
          };
        const o = (t || 0) - (r || 0);
        return h(o, i, 0, 1);
      },
      getConfidence: (e) => c(["current_assets", "current_liabilities"], e),
      getThresholds: () => ({ critical: 0.5, warning: 1, good: 2 }),
    },
    "FIN-ACCOUNTS-REC": {
      code: "FIN-ACCOUNTS-REC",
      type: "simple_ratio",
      description: "Prazo médio de recebimento",
      requiredFields: [
        { name: "receivables", description: "Recebíveis", required: !0 },
        { name: "credit_sales", description: "Vendas a crédito", required: !0 },
      ],
      calculation: (e) => {
        const t = e.receivables,
          r = e.credit_sales;
        return r === void 0 || r === 0
          ? {
              value: null,
              status: "insufficient_data",
              error: "Vendas a crédito não fornecidas",
              warnings: [],
            }
          : h(t, r / 30, 0, 1);
      },
      getConfidence: (e) => c(["receivables", "credit_sales"], e),
      getThresholds: () => ({ critical: 60, warning: 45, good: 30 }),
    },
    "FOOD-TABLE-TURN": {
      code: "FOOD-TABLE-TURN",
      type: "simple_ratio",
      description: "Giro de mesas",
      requiredFields: [
        { name: "covers", description: "Total de covers", required: !0 },
        { name: "tables", description: "Número de mesas", required: !0 },
      ],
      calculation: (e) => {
        const t = e.covers,
          r = e.tables;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["covers", "tables"], e),
      getThresholds: () => ({ critical: 1, warning: 2, good: 4 }),
    },
    "FOOD-AVG-CHECK": {
      code: "FOOD-AVG-CHECK",
      type: "simple_ratio",
      description: "Ticket médio",
      requiredFields: [
        { name: "revenue", description: "Receita total", required: !0 },
        { name: "covers", description: "Total de covers", required: !0 },
      ],
      calculation: (e) => {
        const t = e.revenue,
          r = e.covers;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["revenue", "covers"], e),
      getThresholds: () => ({ critical: 20, warning: 40, good: 80 }),
    },
    "FOOD-FOOD-COST": {
      code: "FOOD-FOOD-COST",
      type: "percentage",
      description: "Custo de comida",
      requiredFields: [
        { name: "food_cost", description: "Custo de comida", required: !0 },
        {
          name: "food_revenue",
          description: "Receita de comida",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.food_cost,
          r = e.food_revenue;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["food_cost", "food_revenue"], e),
      getThresholds: () => ({ critical: 40, warning: 30, good: 20 }),
    },
    "FOOD-LABOR-COST": {
      code: "FOOD-LABOR-COST",
      type: "percentage",
      description: "Custo de mão de obra",
      requiredFields: [
        {
          name: "labor_cost",
          description: "Custo de mão de obra",
          required: !0,
        },
        { name: "revenue", description: "Receita total", required: !0 },
      ],
      calculation: (e) => {
        const t = e.labor_cost,
          r = e.revenue;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["labor_cost", "revenue"], e),
      getThresholds: () => ({ critical: 40, warning: 30, good: 20 }),
    },
    "FOOD-WASTE-RATE": {
      code: "FOOD-WASTE-RATE",
      type: "percentage",
      description: "Taxa de desperdício",
      requiredFields: [
        { name: "waste", description: "Desperdício em valor", required: !0 },
        { name: "food_cost", description: "Custo de comida", required: !0 },
      ],
      calculation: (e) => {
        const t = e.waste,
          r = e.food_cost;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["waste", "food_cost"], e),
      getThresholds: () => ({ critical: 15, warning: 8, good: 3 }),
    },
    "FOOD-DELIVERY-ETA": {
      code: "FOOD-DELIVERY-ETA",
      type: "percentage",
      description: "Precisão do tempo de entrega",
      requiredFields: [
        {
          name: "on_time_deliveries",
          description: "Entregas no prazo",
          required: !0,
        },
        {
          name: "total_deliveries",
          description: "Total de entregas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.on_time_deliveries,
          r = e.total_deliveries;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["on_time_deliveries", "total_deliveries"], e),
      getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
    },
    "LOG-OTIF-001": {
      code: "LOG-OTIF-001",
      type: "percentage",
      description: "Entrega no prazo e completa",
      requiredFields: [
        {
          name: "on_time_full",
          description: "Entregas no prazo e completas",
          required: !0,
        },
        {
          name: "total_deliveries",
          description: "Total de entregas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.on_time_full,
          r = e.total_deliveries;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["on_time_full", "total_deliveries"], e),
      getThresholds: () => ({ critical: 80, warning: 90, good: 98 }),
    },
    "LOG-ON-TIME": {
      code: "LOG-ON-TIME",
      type: "percentage",
      description: "Taxa de entrega no prazo",
      requiredFields: [
        { name: "on_time", description: "Entregas no prazo", required: !0 },
        {
          name: "total_deliveries",
          description: "Total de entregas",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.on_time,
          r = e.total_deliveries;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["on_time", "total_deliveries"], e),
      getThresholds: () => ({ critical: 85, warning: 92, good: 98 }),
    },
    "LOG-LOAD-FACTOR": {
      code: "LOG-LOAD-FACTOR",
      type: "percentage",
      description: "Fator de carga",
      requiredFields: [
        {
          name: "used_capacity",
          description: "Capacidade utilizada",
          required: !0,
        },
        {
          name: "total_capacity",
          description: "Capacidade total",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.used_capacity,
          r = e.total_capacity;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["used_capacity", "total_capacity"], e),
      getThresholds: () => ({ critical: 50, warning: 70, good: 85 }),
    },
    "LOG-COST-PER-MILE": {
      code: "LOG-COST-PER-MILE",
      type: "simple_ratio",
      description: "Custo por milha",
      requiredFields: [
        { name: "total_cost", description: "Custo total", required: !0 },
        { name: "total_mileage", description: "Milhas totais", required: !0 },
      ],
      calculation: (e) => {
        const t = e.total_cost,
          r = e.total_mileage;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["total_cost", "total_mileage"], e),
      getThresholds: () => ({ critical: 3, warning: 2, good: 1 }),
    },
    "LOG-WAREHOUSE-ACC": {
      code: "LOG-WAREHOUSE-ACC",
      type: "percentage",
      description: "Precisão do warehouse",
      requiredFields: [
        { name: "accurate_picks", description: "Picks acurados", required: !0 },
        { name: "total_picks", description: "Total de picks", required: !0 },
      ],
      calculation: (e) => {
        const t = e.accurate_picks,
          r = e.total_picks;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["accurate_picks", "total_picks"], e),
      getThresholds: () => ({ critical: 90, warning: 96, good: 99 }),
    },
    "LOG-PICK-ACCURACY": {
      code: "LOG-PICK-ACCURACY",
      type: "percentage",
      description: "Precisão de picking",
      requiredFields: [
        { name: "correct_picks", description: "Picks corretos", required: !0 },
        { name: "total_picks", description: "Total de picks", required: !0 },
      ],
      calculation: (e) => {
        const t = e.correct_picks,
          r = e.total_picks;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["correct_picks", "total_picks"], e),
      getThresholds: () => ({ critical: 90, warning: 96, good: 99 }),
    },
    "CONTRACT-PROFIT": {
      code: "CONTRACT-PROFIT",
      type: "percentage",
      description: "Margem do projeto",
      requiredFields: [
        {
          name: "project_revenue",
          description: "Receita do projeto",
          required: !0,
        },
        { name: "project_cost", description: "Custo do projeto", required: !0 },
      ],
      calculation: (e) => {
        const t = e.project_revenue,
          r = e.project_cost;
        return t === void 0 || !isFinite(t) || t === 0
          ? {
              value: null,
              status: "insufficient_data",
              error: "Receita não fornecida",
              warnings: [],
            }
          : {
              value: ((t - (r || 0)) / t) * 100,
              status: "success",
              warnings: [],
            };
      },
      getConfidence: (e) => c(["project_revenue"], e),
      getThresholds: () => ({ critical: 5, warning: 10, good: 20 }),
    },
    "CONTRACT-COST-VAR": {
      code: "CONTRACT-COST-VAR",
      type: "percentage",
      description: "Variação de custo",
      requiredFields: [
        { name: "actual_cost", description: "Custo real", required: !0 },
        { name: "budgeted_cost", description: "Custo orçado", required: !0 },
      ],
      calculation: (e) => {
        const t = e.actual_cost,
          r = e.budgeted_cost;
        return r === void 0 || r === 0
          ? {
              value: null,
              status: "insufficient_data",
              error: "Orçamento não fornecido",
              warnings: [],
            }
          : { value: ((t - r) / r) * 100, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["actual_cost", "budgeted_cost"], e),
      getThresholds: () => ({ critical: 20, warning: 10, good: 0 }),
    },
    "CONTRACT-SCHEDULE-VAR": {
      code: "CONTRACT-SCHEDULE-VAR",
      type: "simple_ratio",
      description: "Variação de cronograma",
      requiredFields: [
        { name: "actual_days", description: "Dias utilizados", required: !0 },
        { name: "planned_days", description: "Dias planejados", required: !0 },
      ],
      calculation: (e) => {
        const t = e.actual_days,
          r = e.planned_days;
        return r === void 0 || !isFinite(r)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Dias planejados não fornecidos",
              warnings: [],
            }
          : { value: t - r, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["actual_days", "planned_days"], e),
      getThresholds: () => ({ critical: 30, warning: 14, good: 0 }),
    },
    "CONTRACT-SAFETY-Rate": {
      code: "CONTRACT-SAFETY-Rate",
      type: "percentage",
      description: "Taxa de incidentes de segurança",
      requiredFields: [
        { name: "incidents", description: "Incidentes", required: !0 },
        { name: "work_hours", description: "Horas trabalhadas", required: !0 },
      ],
      calculation: (e) => {
        const t = e.incidents,
          r = e.work_hours;
        return h(t * 2e5, r, 0, 100);
      },
      getConfidence: (e) => c(["incidents", "work_hours"], e),
      getThresholds: () => ({ critical: 5, warning: 3, good: 1 }),
    },
    "CONTRACT-CONTINGENCY": {
      code: "CONTRACT-CONTINGENCY",
      type: "percentage",
      description: "Uso de contingência",
      requiredFields: [
        {
          name: "contingency_used",
          description: "Contingência usada",
          required: !0,
        },
        {
          name: "contingency_budget",
          description: "Orçamento de contingência",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.contingency_used,
          r = e.contingency_budget;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["contingency_used", "contingency_budget"], e),
      getThresholds: () => ({ critical: 80, warning: 50, good: 20 }),
    },
    "EDU-ENROLLMENT-001": {
      code: "EDU-ENROLLMENT-001",
      type: "simple_ratio",
      description: "Taxa de Matrículas",
      requiredFields: [
        { name: "enrollment", description: "Matrículas ativas", required: !0 },
        { name: "capacity", description: "Capacidade máxima", required: !0 },
      ],
      calculation: (e) => {
        const t = e.enrollment,
          r = e.capacity;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["enrollment"], e),
      getThresholds: () => ({ critical: 50, warning: 75, good: 95 }),
    },
    "EDU-DROPOUT-001": {
      code: "EDU-DROPOUT-001",
      type: "percentage",
      description: "Taxa de Evasão",
      requiredFields: [
        { name: "dropouts", description: "Alunos evadidos", required: !0 },
        { name: "enrollment", description: "Matrículas totales", required: !0 },
      ],
      calculation: (e) => {
        const t = e.dropouts,
          r = e.enrollment;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["dropouts", "enrollment"], e),
      getThresholds: () => ({ critical: 30, warning: 15, good: 5 }),
    },
    "EDU-ATTENDANCE-001": {
      code: "EDU-ATTENDANCE-001",
      type: "percentage",
      description: "Taxa de Frequência",
      requiredFields: [
        {
          name: "attendance_rate",
          description: "Taxa de frequência",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.attendance_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["attendance_rate"], e),
      getThresholds: () => ({ critical: 60, warning: 80, good: 95 }),
    },
    "EDU-PASS-001": {
      code: "EDU-PASS-001",
      type: "percentage",
      description: "Taxa de Aprovação",
      requiredFields: [
        { name: "pass_rate", description: "Taxa de aprovação", required: !0 },
      ],
      calculation: (e) => {
        const t = e.pass_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["pass_rate"], e),
      getThresholds: () => ({ critical: 50, warning: 70, good: 85 }),
    },
    "EDU-COMPLETION-001": {
      code: "EDU-COMPLETION-001",
      type: "percentage",
      description: "Taxa de Conclusão de Curso",
      requiredFields: [
        {
          name: "completion_rate",
          description: "Taxa de conclusão",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.completion_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["completion_rate"], e),
      getThresholds: () => ({ critical: 40, warning: 65, good: 80 }),
    },
    "EDU-PLACEMENT-001": {
      code: "EDU-PLACEMENT-001",
      type: "percentage",
      description: "Taxa de Inserção Profissional",
      requiredFields: [
        {
          name: "placement_rate",
          description: "Taxa de inserção",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.placement_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["placement_rate"], e),
      getThresholds: () => ({ critical: 30, warning: 60, good: 80 }),
    },
    "EDU-RATIO-001": {
      code: "EDU-RATIO-001",
      type: "simple_ratio",
      description: "Ratio Professor/Aluno",
      requiredFields: [
        { name: "students", description: "Total de alunos", required: !0 },
        { name: "teachers", description: "Total de professores", required: !0 },
      ],
      calculation: (e) => {
        const t = e.students,
          r = e.teachers;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["students", "teachers"], e),
      getThresholds: () => ({ critical: 30, warning: 20, good: 15 }),
    },
    "EDU-REVENUE-STU": {
      code: "EDU-REVENUE-STU",
      type: "simple_ratio",
      description: "Receita por Aluno",
      requiredFields: [
        { name: "tuition", description: "Mensalidades totais", required: !0 },
        { name: "enrollment", description: "Matrículas ativas", required: !0 },
      ],
      calculation: (e) => {
        const t = e.tuition,
          r = e.enrollment;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["tuition", "enrollment"], e),
      getThresholds: () => ({ critical: 200, warning: 500, good: 1e3 }),
    },
    "RE-VACANCY-001": {
      code: "RE-VACANCY-001",
      type: "percentage",
      description: "Taxa de Vagas",
      requiredFields: [
        { name: "vacancy_rate", description: "Taxa de vagas", required: !0 },
      ],
      calculation: (e) => {
        const t = e.vacancy_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["vacancy_rate"], e),
      getThresholds: () => ({ critical: 30, warning: 15, good: 5 }),
    },
    "RE-OCCUPANCY-001": {
      code: "RE-OCCUPANCY-001",
      type: "percentage",
      description: "Taxa de Ocupação",
      requiredFields: [
        {
          name: "occupied_units",
          description: "Unidades ocupadas",
          required: !0,
        },
        { name: "properties", description: "Total de unidades", required: !0 },
      ],
      calculation: (e) => {
        const t = e.occupied_units,
          r = e.properties;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["occupied_units", "properties"], e),
      getThresholds: () => ({ critical: 50, warning: 75, good: 95 }),
    },
    "RE-NOI-001": {
      code: "RE-NOI-001",
      type: "simple_ratio",
      description: "Net Operating Income",
      requiredFields: [{ name: "noi", description: "NOI", required: !0 }],
      calculation: (e) => {
        const t = e.noi;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "NOI não fornecido",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["noi"], e),
      getThresholds: () => ({ critical: 0, warning: 5e4, good: 2e5 }),
    },
    "RE-CAP-RATE": {
      code: "RE-CAP-RATE",
      type: "percentage",
      description: "Capitalization Rate",
      requiredFields: [
        { name: "noi", description: "NOI", required: !0 },
        {
          name: "property_value",
          description: "Valor do imóvel",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.noi,
          r = e.property_value;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["noi", "property_value"], e),
      getThresholds: () => ({ critical: 3, warning: 6, good: 10 }),
    },
    "RE-RENT-PSF": {
      code: "RE-RENT-PSF",
      type: "simple_ratio",
      description: "Aluguel por m²",
      requiredFields: [
        { name: "rent", description: "Aluguel total", required: !0 },
        { name: "area_sqft", description: "Área em m²", required: !0 },
      ],
      calculation: (e) => {
        const t = e.rent,
          r = e.area_sqft;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["rent", "area_sqft"], e),
      getThresholds: () => ({ critical: 10, warning: 25, good: 50 }),
    },
    "RE-MAINTENANCE-PC": {
      code: "RE-MAINTENANCE-PC",
      type: "percentage",
      description: "Custo de Manutenção %",
      requiredFields: [
        {
          name: "maintenance_cost",
          description: "Custo de manutenção",
          required: !0,
        },
        { name: "rent", description: "Receita de aluguel", required: !0 },
      ],
      calculation: (e) => {
        const t = e.maintenance_cost,
          r = e.rent;
        return h(t, r, 0, 100);
      },
      getConfidence: (e) => c(["maintenance_cost", "rent"], e),
      getThresholds: () => ({ critical: 20, warning: 10, good: 5 }),
    },
    "RE-TURNOVER": {
      code: "RE-TURNOVER",
      type: "percentage",
      description: "Rotatividade de Inquilinos",
      requiredFields: [
        { name: "tenant_turnover", description: "Rotatividade", required: !0 },
      ],
      calculation: (e) => {
        const t = e.tenant_turnover;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["tenant_turnover"], e),
      getThresholds: () => ({ critical: 30, warning: 15, good: 5 }),
    },
    "MEDIA-SUBS-001": {
      code: "MEDIA-SUBS-001",
      type: "simple_ratio",
      description: "Total de Assinantes",
      requiredFields: [
        { name: "subscribers", description: "Assinantes", required: !0 },
      ],
      calculation: (e) => {
        const t = e.subscribers;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Assinantes não fornecidos",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["subscribers"], e),
      getThresholds: () => ({ critical: 1e3, warning: 1e4, good: 1e5 }),
    },
    "MEDIA-ARPU-001": {
      code: "MEDIA-ARPU-001",
      type: "simple_ratio",
      description: "Average Revenue per User",
      requiredFields: [
        {
          name: "subscription_revenue",
          description: "Receita de assinatura",
          required: !0,
        },
        { name: "subscribers", description: "Assinantes", required: !0 },
      ],
      calculation: (e) => {
        const t = e.subscription_revenue,
          r = e.subscribers;
        return h(t, r, 0, 1);
      },
      getConfidence: (e) => c(["subscription_revenue", "subscribers"], e),
      getThresholds: () => ({ critical: 5, warning: 15, good: 30 }),
    },
    "MEDIA-CHURN-001": {
      code: "MEDIA-CHURN-001",
      type: "percentage",
      description: "Taxa de Churn",
      requiredFields: [
        { name: "churn_rate", description: "Taxa de churn", required: !0 },
      ],
      calculation: (e) => {
        const t = e.churn_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["churn_rate"], e),
      getThresholds: () => ({ critical: 15, warning: 8, good: 3 }),
    },
    "MEDIA-ENGAGEMENT": {
      code: "MEDIA-ENGAGEMENT",
      type: "percentage",
      description: "Taxa de Engajamento",
      requiredFields: [
        {
          name: "engagement_rate",
          description: "Taxa de engajamento",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.engagement_rate;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Taxa não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["engagement_rate"], e),
      getThresholds: () => ({ critical: 2, warning: 5, good: 10 }),
    },
    "MEDIA-VIEWS-001": {
      code: "MEDIA-VIEWS-001",
      type: "simple_ratio",
      description: "Visualizações",
      requiredFields: [
        { name: "views", description: "Visualizações", required: !0 },
      ],
      calculation: (e) => {
        const t = e.views;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Views não fornecidas",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["views"], e),
      getThresholds: () => ({ critical: 1e4, warning: 1e5, good: 1e6 }),
    },
    "MEDIA-AD-REV": {
      code: "MEDIA-AD-REV",
      type: "simple_ratio",
      description: "Receita de Anúncios",
      requiredFields: [
        {
          name: "ad_revenue",
          description: "Receita de anúncios",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.ad_revenue;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Receita não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["ad_revenue"], e),
      getThresholds: () => ({ critical: 0, warning: 5e3, good: 5e4 }),
    },
    "MEDIA-SESSION": {
      code: "MEDIA-SESSION",
      type: "simple_ratio",
      description: "Duração Média da Sessão",
      requiredFields: [
        {
          name: "session_duration",
          description: "Duração em minutos",
          required: !0,
        },
      ],
      calculation: (e) => {
        const t = e.session_duration;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Duração não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["session_duration"], e),
      getThresholds: () => ({ critical: 1, warning: 5, good: 15 }),
    },
    "MEDIA-AD-LOAD": {
      code: "MEDIA-AD-LOAD",
      type: "percentage",
      description: "Carga de Anúncios",
      requiredFields: [
        { name: "ad_load", description: "Carga de anúncios", required: !0 },
      ],
      calculation: (e) => {
        const t = e.ad_load;
        return t === void 0 || !isFinite(t)
          ? {
              value: null,
              status: "insufficient_data",
              error: "Carga não fornecida",
              warnings: [],
            }
          : { value: t, status: "success", warnings: [] };
      },
      getConfidence: (e) => c(["ad_load"], e),
      getThresholds: () => ({ critical: 20, warning: 15, good: 10 }),
    },
  },
  we = (e) => Z[e],
  J = (e) => {
    const r =
      {
        technology: ["TECH-"],
        retail: ["RET-"],
        healthcare: ["HEALTH-"],
        manufacturing: ["MFG-"],
        services: ["SERV-"],
        finance: ["FIN-"],
        food: ["FOOD-"],
        logistics: ["LOG-"],
        construction: ["CONTRACT-"],
        education: ["EDU-"],
        real_estate: ["RE-"],
        media: ["MEDIA-"],
      }[e] || [];
    return Object.values(Z).filter((i) => r.some((o) => i.code.startsWith(o)));
  },
  js = [
    {
      name: "revenue",
      aliases: ["receita", "sales", "faturamento"],
      required: !1,
      type: "currency",
      min: 0,
    },
    {
      name: "cost",
      aliases: ["custo", "costs", "despesa"],
      required: !1,
      type: "currency",
      min: 0,
    },
    {
      name: "profit",
      aliases: ["lucro", "gain"],
      required: !1,
      type: "currency",
    },
    {
      name: "customers",
      aliases: ["clientes", "clients"],
      required: !1,
      type: "count",
      min: 0,
    },
    {
      name: "leads",
      aliases: ["oportunidades", "prospects"],
      required: !1,
      type: "count",
      min: 0,
    },
    {
      name: "deals",
      aliases: ["negociacoes", "contracts"],
      required: !1,
      type: "count",
      min: 0,
    },
    {
      name: "employees",
      aliases: ["funcionarios", "staff", "team"],
      required: !1,
      type: "count",
      min: 0,
    },
  ],
  Ns = {
    technology: [
      {
        name: "mrr",
        aliases: ["monthly_recurring_revenue"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "arr",
        aliases: ["annual_recurring_revenue"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "churned_customers",
        aliases: ["cancelled_customers"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "total_customers",
        aliases: ["customer_count"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "new_customers",
        aliases: ["acquired_customers"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "marketing_spend",
        aliases: ["marketing_expense", "acquisition_spend"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "sales_spend",
        aliases: ["sales_expense"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "dau",
        aliases: ["daily_active_users"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "mau",
        aliases: ["monthly_active_users"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "nps_score",
        aliases: ["net_promoter_score"],
        required: !1,
        type: "number",
        min: -100,
        max: 100,
      },
    ],
    retail: [
      {
        name: "gmv",
        aliases: ["gross_merchandise_value", "valor_vendas"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "orders",
        aliases: ["pedidos", "transactions"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "visitors",
        aliases: ["visitors", "traffic"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "cart_adds",
        aliases: ["add_to_cart"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "returns",
        aliases: ["devolucoes"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "inventory_value",
        aliases: ["estoque"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "cogs",
        aliases: ["cost_of_goods_sold", "custo_mercadoria"],
        required: !1,
        type: "currency",
        min: 0,
      },
    ],
    healthcare: [
      {
        name: "beds",
        aliases: ["leitos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "occupied_beds",
        aliases: ["leitos_ocupados"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "readmissions",
        aliases: ["readmissoes"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "patients",
        aliases: ["pacientes"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "appointments",
        aliases: ["consultas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "no_shows",
        aliases: ["faltas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "claims",
        aliases: ["sinistros"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "staff_count",
        aliases: ["equipe"],
        required: !1,
        type: "count",
        min: 0,
      },
    ],
    manufacturing: [
      {
        name: "oee",
        aliases: ["overall_equipment_effectiveness"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "first_pass_yield",
        aliases: ["fpy"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "defects",
        aliases: ["defeitos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "total_produced",
        aliases: ["produzido"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "downtime_hours",
        aliases: ["parada"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "cycle_time",
        aliases: ["tempo_ciclo"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "inventory_days",
        aliases: ["dias_estoque"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "capacity",
        aliases: ["capacidade"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "scrap",
        aliases: ["refugo"],
        required: !1,
        type: "count",
        min: 0,
      },
    ],
    services: [
      {
        name: "billable_hours",
        aliases: ["horas_faturaveis"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "total_hours",
        aliases: ["horas_totais"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "project_revenue",
        aliases: ["receita_projeto"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "project_cost",
        aliases: ["custo_projeto"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "resources",
        aliases: ["recursos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "tickets",
        aliases: ["tickets"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "escalated_tickets",
        aliases: ["escalados"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "contracts",
        aliases: ["contratos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "renewed_contracts",
        aliases: ["renovados"],
        required: !1,
        type: "count",
        min: 0,
      },
    ],
    finance: [
      {
        name: "loans",
        aliases: ["emprestimos"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "npl",
        aliases: ["non_performing"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "interest_income",
        aliases: ["juros_receita"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "interest_expense",
        aliases: ["juros_despesa"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "equity",
        aliases: ["patrimonio"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "ebitda",
        aliases: ["lucro_operacional"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "cash_flow",
        aliases: ["fluxo_caixa"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "receivables",
        aliases: ["recebiveis"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "dso",
        aliases: ["days_sales_outstanding"],
        required: !1,
        type: "number",
        min: 0,
      },
    ],
    food: [
      {
        name: "tables",
        aliases: ["mesas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "table_turns",
        aliases: ["giros_mesa"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "covers",
        aliases: ["cover"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "food_cost",
        aliases: ["custo_comida"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "labor_cost",
        aliases: ["custo_mao_obra"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "waste",
        aliases: ["desperdicio"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "delivery_orders",
        aliases: ["pedidos_delivery"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "on_time_deliveries",
        aliases: ["entregas_tempo"],
        required: !1,
        type: "count",
        min: 0,
      },
    ],
    logistics: [
      {
        name: "deliveries",
        aliases: ["entregas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "on_time_deliveries",
        aliases: ["no_prazo"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "complete_deliveries",
        aliases: ["completas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "mileage",
        aliases: ["milhas"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "load_capacity",
        aliases: ["capacidade_carga"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "vehicles",
        aliases: ["veiculos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "warehouse_picks",
        aliases: ["picks"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "accurate_picks",
        aliases: ["picks_acurados"],
        required: !1,
        type: "count",
        min: 0,
      },
    ],
    construction: [
      {
        name: "project_revenue",
        aliases: ["receita_projeto"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "project_cost",
        aliases: ["custo_projeto"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "budget",
        aliases: ["orcamento"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "actual_cost",
        aliases: ["custo_real"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "planned_days",
        aliases: ["dias_planejados"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "actual_days",
        aliases: ["dias_reais"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "incidents",
        aliases: ["incidentes"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "contingency",
        aliases: ["contingencia"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "contingency_used",
        aliases: ["contingencia_usada"],
        required: !1,
        type: "currency",
        min: 0,
      },
    ],
    education: [
      {
        name: "enrollment",
        aliases: ["matriculas", "students"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "new_enrollments",
        aliases: ["novas_matriculas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "dropouts",
        aliases: ["evasoes", "cancelamentos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "tuition",
        aliases: ["mensalidade", "tuition_fee"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "scholarships",
        aliases: ["bolsas", "discounts"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "attendance_rate",
        aliases: ["frequencia"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "pass_rate",
        aliases: ["aprovacao"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "sat_score",
        aliases: ["nota_media"],
        required: !1,
        type: "number",
        min: 0,
        max: 1e3,
      },
      {
        name: "teacher_student_ratio",
        aliases: ["ratio_professor"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "courses",
        aliases: ["cursos"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "completion_rate",
        aliases: ["taxa_conclusao"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "placement_rate",
        aliases: ["insercao_profissional"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
    ],
    real_estate: [
      {
        name: "properties",
        aliases: ["imoveis"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "occupied_units",
        aliases: ["unidades_ocupadas"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "vacancy_rate",
        aliases: ["taxa_vagas", "vacancy"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "rent",
        aliases: ["aluguel", "rental_income"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "occupancy_rate",
        aliases: ["taxa_ocupacao"],
        required: !1,
        type: "percent",
        min: 0,
        max: 100,
      },
      {
        name: "property_value",
        aliases: ["valor_imovel", "valuation"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "maintenance_cost",
        aliases: ["custo_manutencao"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: " noi",
        aliases: ["net_operating_income"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "cap_rate",
        aliases: ["capitalization_rate"],
        required: !1,
        type: "percent",
        min: 0,
      },
      {
        name: "lease_term",
        aliases: ["prazo_contrato"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "tenant_turnover",
        aliases: ["rotatividade_inquilinos"],
        required: !1,
        type: "percent",
        min: 0,
      },
      {
        name: "collections",
        aliases: ["arrecadacao"],
        required: !1,
        type: "currency",
        min: 0,
      },
    ],
    media: [
      {
        name: "subscribers",
        aliases: ["assinantes"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "monthly_users",
        aliases: ["usuarios_mensais"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "daily_users",
        aliases: ["usuarios_diarios"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "views",
        aliases: ["visualizacoes", "impressions"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "ad_revenue",
        aliases: ["receita_anuncio"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "subscription_revenue",
        aliases: ["receita_assinatura"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "arpu",
        aliases: ["average_revenue_per_user"],
        required: !1,
        type: "currency",
        min: 0,
      },
      {
        name: "churn_rate",
        aliases: ["taxa_canc"],
        required: !1,
        type: "percent",
        min: 0,
      },
      {
        name: "engagement_rate",
        aliases: ["engajamento"],
        required: !1,
        type: "percent",
        min: 0,
      },
      {
        name: "session_duration",
        aliases: ["duracao_sessao"],
        required: !1,
        type: "number",
        min: 0,
      },
      {
        name: "content_library",
        aliases: ["biblioteca_conteudo"],
        required: !1,
        type: "count",
        min: 0,
      },
      {
        name: "ad_load",
        aliases: ["carga_anuncios"],
        required: !1,
        type: "percent",
        min: 0,
      },
    ],
  },
  le = (e) =>
    e
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "_")
      .trim(),
  ws = (e, t) => {
    for (const r of t) {
      if (le(r.name) === e) return r;
      for (const i of r.aliases) if (le(i) === e) return r;
    }
  },
  re = (e, t) => {
    const r = [...js, ...(t ? Ns[t] : [])],
      i = {},
      o = {},
      a = {},
      n = [];
    let d = 0;
    const g = Object.keys(e).length;
    for (const [u, f] of Object.entries(e)) {
      if (f == null) continue;
      const x = le(u),
        j = ws(x, r);
      if (j) {
        const _ = j.name;
        if (i[_] !== void 0) {
          n.push(
            `Conflito: múltiplas fontes para "${_}". Usando primeiro valor.`,
          );
          continue;
        }
        ((i[_] = f), (a[_] = u), d++);
      } else o[u] = f;
    }
    const p = g > 0 ? d / g : 0;
    return (
      p < 0.5 &&
        g > 0 &&
        n.push(
          `Apenas ${d} de ${g} campos foram mapeados para o setor ${t || "genérico"}`,
        ),
      { mapped: i, unmapped: o, aliasesResolved: a, confidence: p, warnings: n }
    );
  },
  qe = (e, t) => {
    const r = {};
    for (const i of t) e.mapped[i] !== void 0 && (r[i] = e.mapped[i]);
    return r;
  },
  Te = (e, t, r) => {
    if (e === null || !t) return "unknown";
    const { critical: i, warning: o, good: a } = t;
    return r === "higher_is_better"
      ? e >= a
        ? "good"
        : e >= o
          ? "warning"
          : "critical"
      : r === "lower_is_better"
        ? e <= a
          ? "good"
          : e <= o
            ? "warning"
            : "critical"
        : "unknown";
  };
class Ce {
  constructor(t, r = {}, i = []) {
    ee(this, "context");
    ee(this, "options");
    ee(this, "kpiLibrary");
    ((this.context = { ...t, period: t.period || "monthly" }),
      (this.options = r),
      (this.kpiLibrary = new Map(i.map((o) => [o.code, o]))));
  }
  calculateSingle(t, r) {
    var _;
    const i = we(t),
      o = this.kpiLibrary.get(t);
    if (!i)
      return this.createErrorResult(
        t,
        "not_applicable",
        `Fórmula não encontrada para ${t}`,
        (o == null ? void 0 : o.title) || t,
      );
    const a = re(r, this.context.sector),
      n = qe(
        a,
        i.requiredFields.map((m) => m.name),
      ),
      d = i.requiredFields.map((m) => m.name);
    if (!d.every((m) => n[m] !== void 0)) {
      const m = d.filter((l) => n[l] === void 0);
      return this.createInsufficientDataResult(
        t,
        m,
        (o == null ? void 0 : o.title) || i.description,
      );
    }
    const p = i.calculation(n),
      u = i.getConfidence(n),
      f = (_ = i.getThresholds) == null ? void 0 : _.call(i),
      x = Te(p.value, f, o == null ? void 0 : o.trend_direction);
    return {
      code: t,
      title: (o == null ? void 0 : o.title) || i.description,
      value: p.value,
      unit: (o == null ? void 0 : o.unit) || "percent",
      status: x,
      trend: "unknown",
      confidence: u,
      calculationStatus: p.status,
      calculatedAt: new Date(),
      error: p.error,
      warnings: [...a.warnings, ...p.warnings],
    };
  }
  calculateMultiple(t, r) {
    const i = Date.now(),
      o = [];
    for (const a of t) {
      const n = this.calculateSingle(a, r);
      o.push(n);
    }
    return {
      kpis: o,
      metadata: {
        sector: this.context.sector,
        businessModel: this.context.businessModel,
        period: this.context.period,
        calculatedAt: new Date(),
        calculationTimeMs: Date.now() - i,
      },
    };
  }
  calculateAllForSector(t) {
    const r = this.context.sector;
    if (!r && !this.options.includeAllSectors)
      return {
        kpis: [],
        metadata: {
          period: this.context.period,
          calculatedAt: new Date(),
          calculationTimeMs: 0,
        },
      };
    const o = (r ? J(r) : Object.values(Z)).map((a) => a.code);
    return this.calculateMultiple(o, t);
  }
  calculateFromMappedData(t, r) {
    var o;
    const i = [];
    for (const a of r) {
      const n = we(a),
        d = this.kpiLibrary.get(a);
      if (!n) continue;
      const g = qe(
          t,
          n.requiredFields.map((_) => _.name),
        ),
        p = n.requiredFields.map((_) => _.name);
      if (!p.every((_) => g[_] !== void 0)) {
        const _ = p.filter((m) => g[m] === void 0);
        i.push(
          this.createInsufficientDataResult(
            a,
            _,
            (d == null ? void 0 : d.title) || n.description,
          ),
        );
        continue;
      }
      const f = n.calculation(g),
        x = (o = n.getThresholds) == null ? void 0 : o.call(n),
        j = Te(f.value, x, d == null ? void 0 : d.trend_direction);
      i.push({
        code: a,
        title: (d == null ? void 0 : d.title) || n.description,
        value: f.value,
        unit: (d == null ? void 0 : d.unit) || "percent",
        status: j,
        trend: "unknown",
        confidence: n.getConfidence(g),
        calculationStatus: f.status,
        calculatedAt: new Date(),
        error: f.error,
        warnings: [...t.warnings, ...f.warnings],
      });
    }
    return i;
  }
  getAvailableKPIs(t) {
    const r = this.context.sector,
      i = r ? J(r) : Object.values(Z),
      o = re(t, r);
    return i
      .map((a) => {
        const n = a.requiredFields.map((u) => u.name),
          d = n.filter((u) => o.mapped[u] !== void 0),
          g = n.length > 0 ? d.length / n.length : 0,
          p = this.kpiLibrary.get(a.code);
        return {
          code: a.code,
          title: (p == null ? void 0 : p.title) || a.description,
          readiness: g,
        };
      })
      .filter((a) => a.readiness > 0)
      .sort((a, n) => n.readiness - a.readiness);
  }
  getSuggestedNextSteps(t) {
    this.getAvailableKPIs(t);
    const r = [],
      i = this.context.sector,
      o = i ? J(i) : Object.values(Z),
      a = re(t, i);
    for (const n of o) {
      const d = n.requiredFields.map((p) => p.name),
        g = d.filter((p) => a.mapped[p] !== void 0).length;
      if (g > 0 && g < d.length) {
        const p = d.find((u) => a.mapped[u] === void 0);
        if (p && !r.find((u) => u.field === p)) {
          const u = n.requiredFields.find((f) => f.name === p);
          r.push({
            field: p,
            description: (u == null ? void 0 : u.description) || p,
            impact: n.description,
          });
        }
      }
    }
    return r.slice(0, 5);
  }
  createErrorResult(t, r, i, o) {
    return {
      code: t,
      title: o,
      value: null,
      unit: "percent",
      status: "unknown",
      trend: "unknown",
      confidence: "unknown",
      calculationStatus: r,
      calculatedAt: new Date(),
      error: i,
      warnings: [],
    };
  }
  createInsufficientDataResult(t, r, i) {
    return {
      code: t,
      title: i,
      value: null,
      unit: "percent",
      status: "unknown",
      trend: "unknown",
      confidence: "low",
      calculationStatus: "insufficient_data",
      calculatedAt: new Date(),
      error: `Dados insuficientes. Campos necessários: ${r.join(", ")}`,
      warnings: [],
    };
  }
  setContext(t) {
    this.context = { ...this.context, ...t };
  }
  getContext() {
    return { ...this.context };
  }
}
const qs = {
    technology: [
      "mrr",
      "arr",
      "churn",
      "cac",
      "ltv",
      "arpu",
      "subscribers",
      "users",
      "sessions",
    ],
    retail: [
      "revenue",
      "sales",
      "orders",
      "customers",
      "products",
      "inventory",
      "margin",
      "atv",
    ],
    healthcare: [
      "patients",
      "appointments",
      "treatments",
      "beds",
      "occupancy",
      "revenue",
      "costs",
    ],
    manufacturing: [
      "production",
      "units",
      "efficiency",
      "inventory",
      "materials",
      "quality",
      "defects",
    ],
    services: [
      "hours",
      "projects",
      "clients",
      "utilization",
      "revenue",
      "tickets",
      "resolution",
    ],
    finance: [
      "revenue",
      "loans",
      "interest",
      "deposits",
      "assets",
      "clients",
      "npl",
      "nim",
    ],
    food: [
      "revenue",
      "orders",
      "customers",
      "tickets",
      "tables",
      "covers",
      "inventory",
    ],
    logistics: [
      "shipments",
      "deliveries",
      "routes",
      "vehicles",
      "fuel",
      "cost",
      "time",
    ],
    construction: [
      "projects",
      "budget",
      "costs",
      "revenue",
      "progress",
      "resources",
      "safety",
    ],
    education: [
      "students",
      "enrollment",
      "courses",
      "teachers",
      "attendance",
      "completion",
    ],
    real_estate: [
      "properties",
      "occupancy",
      "rent",
      "revenue",
      "costs",
      "tenants",
      "leases",
    ],
    media: [
      "views",
      "subscribers",
      "engagement",
      "ad_revenue",
      "sessions",
      "content",
    ],
  },
  Ts = (e, t) => {
    const r = e.map((g) => g.toLowerCase().replace(/[^a-z0-9]/g, "")),
      i = {
        technology: 0,
        retail: 0,
        healthcare: 0,
        manufacturing: 0,
        services: 0,
        finance: 0,
        food: 0,
        logistics: 0,
        construction: 0,
        education: 0,
        real_estate: 0,
        media: 0,
      };
    for (const [g, p] of Object.entries(qs))
      for (const u of p)
        for (const f of r) (f.includes(u) || u.includes(f)) && (i[g] += 1);
    let o = null,
      a = 0,
      n = 0;
    for (const [g, p] of Object.entries(i))
      (p > a && ((a = p), (o = g)), (n += p));
    const d = n > 0 ? a / n : 0;
    return { sector: o, confidence: d };
  },
  Ee = (e, t) => {
    const r = [];
    if (!t) return r;
    for (const i of e)
      i.calculationStatus !== "success" ||
        i.value === null ||
        (i.status === "good"
          ? r.push(`✓ ${i.title}: ${i.value}${i.unit === "percent" ? "%" : ""}`)
          : i.status === "warning"
            ? r.push(
                `⚠ ${i.title}: ${i.value}${i.unit === "percent" ? "%" : ""}`,
              )
            : i.status === "critical" &&
              r.push(
                `🔴 ${i.title}: ${i.value}${i.unit === "percent" ? "%" : ""}`,
              ));
    return (
      r.length === 0 &&
        e.length > 0 &&
        r.push(`📊 ${e.length} indicadores calculados`),
      r
    );
  },
  Cs = () => {
    const [e, t] = b.useState({
        isAnalyzing: !1,
        data: null,
        error: null,
        hasAnalyzed: !1,
      }),
      r = b.useCallback(async (a) => {
        t((n) => ({ ...n, isAnalyzing: !0, error: null }));
        try {
          const { headers: n, rows: d } = a,
            g = Math.min(d.length, 10),
            p = d.slice(0, g),
            u = {};
          for (const C of n) {
            const R = p
              .map((k) => k[C])
              .filter((k) => typeof k == "number" && !isNaN(k));
            R.length > 0 &&
              (u[C.toLowerCase().replace(/\s+/g, "_")] =
                R.length === 1 ? R[0] : R);
          }
          const { sector: f, confidence: x } = Ts(n, p);
          if (!f) {
            t((C) => ({
              ...C,
              isAnalyzing: !1,
              hasAnalyzed: !0,
              data: null,
              error:
                "Não foi possível detectar o setor automaticamente. Selecione manualmente.",
            }));
            return;
          }
          const j = {
              organizationId: "first-win",
              sector: f,
              businessModel: "subscription",
              period: "monthly",
            },
            _ = new Ce(j, {}, []),
            m = J(f),
            l = m.slice(0, 10).map((C) => C.code),
            y = _.calculateMultiple(l, u).kpis.filter(
              (C) => C.calculationStatus === "success",
            ),
            A = re(u, f),
            w = Object.keys(A.mapped),
            D = new Set();
          m.forEach((C) => {
            C.requiredFields.forEach((R) => D.add(R.name));
          });
          const M = Array.from(D).filter((C) => !w.includes(C)),
            F = Ee(y, f);
          t({
            isAnalyzing: !1,
            data: {
              sector: f,
              confidence: x,
              suggestedKPIs: y,
              rawData: u,
              availableFields: w,
              missingFields: M,
              insights: F,
            },
            error: null,
            hasAnalyzed: !0,
          });
        } catch (n) {
          const d = n instanceof Error ? n.message : "Erro ao analisar dados";
          t({ isAnalyzing: !1, data: null, error: d, hasAnalyzed: !0 });
        }
      }, []),
      i = b.useCallback(() => {
        t({ isAnalyzing: !1, data: null, error: null, hasAnalyzed: !1 });
      }, []),
      o = b.useCallback(
        (a) => {
          var j;
          if (!((j = e.data) != null && j.rawData)) return;
          const n = {
              organizationId: "first-win",
              sector: a,
              businessModel: "subscription",
              period: "monthly",
            },
            d = new Ce(n, {}, []),
            p = J(a)
              .slice(0, 10)
              .map((_) => _.code),
            f = d
              .calculateMultiple(p, e.data.rawData)
              .kpis.filter((_) => _.calculationStatus === "success"),
            x = Ee(f, a);
          t((_) => ({
            ..._,
            data: _.data
              ? {
                  ..._.data,
                  sector: a,
                  confidence: 1,
                  suggestedKPIs: f,
                  insights: x,
                }
              : null,
          }));
        },
        [e.data],
      );
    return { ...e, analyze: r, reset: i, setSectorManually: o };
  },
  ue = {
    technology: "Tecnologia",
    retail: "Varejo",
    healthcare: "Saúde",
    manufacturing: "Manufatura",
    services: "Serviços",
    finance: "Financeiro",
    food: "Alimentação",
    logistics: "Logística",
    construction: "Construção",
    education: "Educação",
    real_estate: "Imóveis",
    media: "Mídia",
  },
  Es = {
    technology: "bg-blue-500",
    retail: "bg-green-500",
    healthcare: "bg-red-500",
    manufacturing: "bg-orange-500",
    services: "bg-purple-500",
    finance: "bg-yellow-500",
    food: "bg-pink-500",
    logistics: "bg-cyan-500",
    construction: "bg-amber-500",
    education: "bg-indigo-500",
    real_estate: "bg-teal-500",
    media: "bg-rose-500",
  },
  As = ({ status: e }) => {
    switch (e) {
      case "good":
        return s.jsx(Se, { className: "h-4 w-4 text-green-500" });
      case "warning":
        return s.jsx(oe, { className: "h-4 w-4 text-yellow-500" });
      case "critical":
        return s.jsx(rs, { className: "h-4 w-4 text-red-500" });
      default:
        return s.jsx(oe, { className: "h-4 w-4 text-gray-400" });
    }
  },
  Rs = ({ kpi: e }) => {
    P();
    const t = (r, i) =>
      r === null
        ? "--"
        : i === "currency"
          ? `R$ ${r.toLocaleString("pt-BR")}`
          : i === "percent"
            ? `${r.toFixed(1)}%`
            : i === "ratio"
              ? `${r.toFixed(2)}x`
              : r.toLocaleString("pt-BR");
    return s.jsxs("div", {
      className: "flex items-center justify-between p-3 bg-muted/50 rounded-lg",
      children: [
        s.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            s.jsx(As, { status: e.status }),
            s.jsxs("div", {
              children: [
                s.jsx("p", {
                  className: "text-sm font-medium",
                  children: e.title,
                }),
                s.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: e.code,
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "text-right",
          children: [
            s.jsx("p", {
              className: "text-sm font-semibold",
              children: t(e.value, e.unit),
            }),
            s.jsx("p", {
              className: "text-xs text-muted-foreground capitalize",
              children: e.status,
            }),
          ],
        }),
      ],
    });
  },
  Ae = ({ currentSector: e, onSelect: t }) => {
    P();
    const r = Object.keys(ue);
    return s.jsxs("div", {
      className: "space-y-2",
      children: [
        s.jsx("p", {
          className: "text-sm font-medium",
          children: "Selecione o setor:",
        }),
        s.jsx("div", {
          className: "flex flex-wrap gap-2",
          children: r.map((i) =>
            s.jsx(
              q,
              {
                variant: e === i ? "default" : "outline",
                size: "sm",
                onClick: () => t(i),
                className: "text-xs",
                children: ue[i],
              },
              i,
            ),
          ),
        }),
      ],
    });
  },
  Fs = ({ parsedData: e, onContinue: t, onSkip: r }) => {
    const { t: i } = P(),
      {
        isAnalyzing: o,
        data: a,
        error: n,
        hasAnalyzed: d,
        analyze: g,
        reset: p,
        setSectorManually: u,
      } = Cs(),
      [f, x] = b.useState(!1),
      j = () => {
        g(e);
      },
      _ = (m) => {
        (u(m), x(!1));
      };
    return !d && !o
      ? s.jsxs(N, {
          className: "w-full max-w-2xl mx-auto border-2 border-primary/20",
          children: [
            s.jsxs(S, {
              className: "text-center pb-2",
              children: [
                s.jsx("div", {
                  className:
                    "mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center",
                  children: s.jsx(G, { className: "h-6 w-6 text-primary" }),
                }),
                s.jsx(O, {
                  children: i(
                    "firstwin.title",
                    "Pronto para descobrir insights!",
                  ),
                }),
                s.jsx(H, {
                  children: i(
                    "firstwin.description",
                    "Analise seus dados automaticamente e descubra KPIs relevantes para seu negócio.",
                  ),
                }),
              ],
            }),
            s.jsxs(T, {
              className: "space-y-4",
              children: [
                s.jsxs("div", {
                  className: "text-center text-sm text-muted-foreground",
                  children: [
                    s.jsxs("p", {
                      children: [e.headers.length, " colunas detectadas"],
                    }),
                    s.jsxs("p", {
                      children: [e.rows.length, " linhas de dados"],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    s.jsxs(q, {
                      onClick: j,
                      className: "flex-1",
                      children: [
                        s.jsx(me, { className: "h-4 w-4 mr-2" }),
                        i("firstwin.analyze", "Analisar Dados"),
                      ],
                    }),
                    r &&
                      s.jsx(q, {
                        variant: "outline",
                        onClick: r,
                        children: i("common.skip", "Pular"),
                      }),
                  ],
                }),
              ],
            }),
          ],
        })
      : o
        ? s.jsx(N, {
            className: "w-full max-w-2xl mx-auto",
            children: s.jsxs(T, {
              className: "py-12 text-center",
              children: [
                s.jsx(ae, {
                  className: "h-8 w-8 mx-auto mb-4 animate-spin text-primary",
                }),
                s.jsx("p", {
                  className: "text-lg font-medium",
                  children: "Analisando seus dados...",
                }),
                s.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Detectando setor e calculando KPIs",
                }),
              ],
            }),
          })
        : n
          ? s.jsxs(N, {
              className: "w-full max-w-2xl mx-auto border-destructive/20",
              children: [
                s.jsxs(S, {
                  children: [
                    s.jsx(O, {
                      className: "text-destructive",
                      children: i("firstwin.error_title", "Ops!"),
                    }),
                    s.jsx(H, { children: n }),
                  ],
                }),
                s.jsxs(T, {
                  className: "space-y-4",
                  children: [
                    s.jsx(Ae, {
                      currentSector: (a == null ? void 0 : a.sector) || null,
                      onSelect: _,
                    }),
                    s.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        s.jsxs(q, {
                          onClick: j,
                          variant: "outline",
                          children: [
                            s.jsx(ae, { className: "h-4 w-4 mr-2" }),
                            i("firstwin.try_again", "Tentar Novamente"),
                          ],
                        }),
                        r &&
                          s.jsx(q, {
                            variant: "ghost",
                            onClick: r,
                            children: i("common.skip", "Pular"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : a
            ? s.jsxs(N, {
                className:
                  "w-full max-w-2xl mx-auto border-2 border-green-500/30",
                children: [
                  s.jsxs(S, {
                    className: "pb-2",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsx("div", {
                                className: `h-3 w-3 rounded-full ${Es[a.sector]}`,
                              }),
                              s.jsx(O, { children: ue[a.sector] }),
                              s.jsxs(X, {
                                variant: "outline",
                                className: "ml-2",
                                children: [
                                  Math.round(a.confidence * 100),
                                  "% confiança",
                                ],
                              }),
                            ],
                          }),
                          s.jsx(q, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => x(!f),
                            children: s.jsx(ss, { className: "h-4 w-4" }),
                          }),
                        ],
                      }),
                      f && s.jsx(Ae, { currentSector: a.sector, onSelect: _ }),
                      s.jsx(H, {
                        children: i(
                          "firstwin.insights_found",
                          "Insights encontrados a partir dos seus dados",
                        ),
                      }),
                    ],
                  }),
                  s.jsxs(T, {
                    className: "space-y-4",
                    children: [
                      a.insights.length > 0 &&
                        s.jsx("div", {
                          className: "space-y-2",
                          children: a.insights.map((m, l) =>
                            s.jsx(
                              "div",
                              {
                                className: "text-sm p-2 bg-muted/50 rounded",
                                children: m,
                              },
                              l,
                            ),
                          ),
                        }),
                      a.suggestedKPIs.length > 0
                        ? s.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              s.jsx("p", {
                                className: "text-sm font-medium",
                                children: i("firstwin.kpis", "KPIs Calculados"),
                              }),
                              a.suggestedKPIs
                                .slice(0, 5)
                                .map((m) => s.jsx(Rs, { kpi: m }, m.code)),
                              a.suggestedKPIs.length > 5 &&
                                s.jsxs("p", {
                                  className:
                                    "text-xs text-muted-foreground text-center",
                                  children: [
                                    "+",
                                    a.suggestedKPIs.length - 5,
                                    " mais KPIs disponíveis",
                                  ],
                                }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "text-center py-4 text-muted-foreground",
                            children: s.jsx("p", {
                              children:
                                "Nenhum KPI calculado. Verifique se os dados estão no formato correto.",
                            }),
                          }),
                      a.missingFields.length > 0 &&
                        s.jsx("div", {
                          className: "text-xs text-muted-foreground",
                          children: s.jsxs("p", {
                            children: [
                              "Campos necessários não encontrados:",
                              " ",
                              a.missingFields.slice(0, 3).join(", "),
                              "...",
                            ],
                          }),
                        }),
                      s.jsxs("div", {
                        className: "flex gap-2 pt-2",
                        children: [
                          t &&
                            s.jsxs(q, {
                              onClick: t,
                              className: "flex-1",
                              children: [
                                i("firstwin.continue", "Continuar"),
                                s.jsx(ts, { className: "h-4 w-4 ml-2" }),
                              ],
                            }),
                          s.jsxs(q, {
                            variant: "outline",
                            onClick: p,
                            children: [
                              s.jsx(ae, { className: "h-4 w-4 mr-2" }),
                              i("firstwin.reanalyze", "Reanalisar"),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : null;
  },
  Ss = () => {
    var _;
    const {
        formData: e,
        setFormData: t,
        file: r,
        setFile: i,
        textData: o,
        setTextData: a,
        urlData: n,
        setUrlData: d,
        parsedData: g,
        setParsedData: p,
        setLoading: u,
      } = Y(),
      { toast: f } = Re(),
      { t: x } = P(),
      j = async (m) => {
        var v;
        const l = (v = m.target.files) == null ? void 0 : v[0];
        if (l) {
          (i(l), u(!0));
          try {
            const y = await Ze(l);
            (p(y),
              f({
                title: x("builder.toasts.file_uploaded_title"),
                description: x("builder.toasts.file_uploaded_desc", {
                  name: l.name,
                }),
              }));
          } catch (y) {
            const A =
              y instanceof Error ? y.message : x("builder.errors.ia_unknown");
            f({
              title: x("common.error_title"),
              description: A,
              variant: "destructive",
            });
          } finally {
            u(!1);
          }
        }
      };
    return s.jsxs("div", {
      className: "space-y-6",
      children: [
        s.jsxs("div", {
          className: "text-center",
          children: [
            s.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: x("builder.steps.data.title"),
            }),
            s.jsx("p", {
              className: "text-muted-foreground",
              children: x("builder.steps.data.desc"),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: [
            s.jsx(N, {
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "upload" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => t((m) => ({ ...m, dataSource: "upload" })),
              children: s.jsxs(S, {
                className: "text-center",
                children: [
                  s.jsx(is, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  s.jsx(O, {
                    className: "text-lg",
                    children: x("builder.steps.data.sources.upload"),
                  }),
                  s.jsx(H, {
                    children: x("builder.steps.data.sources.upload_desc"),
                  }),
                ],
              }),
            }),
            s.jsx(N, {
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "text" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => t((m) => ({ ...m, dataSource: "text" })),
              children: s.jsxs(S, {
                className: "text-center",
                children: [
                  s.jsx(as, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  s.jsx(O, {
                    className: "text-lg",
                    children: x("builder.steps.data.sources.paste"),
                  }),
                  s.jsx(H, {
                    children: x("builder.steps.data.sources.paste_desc"),
                  }),
                ],
              }),
            }),
            s.jsx(N, {
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "url" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => t((m) => ({ ...m, dataSource: "url" })),
              children: s.jsxs(S, {
                className: "text-center",
                children: [
                  s.jsx(ye, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  s.jsx(O, {
                    className: "text-lg",
                    children: x("builder.steps.data.sources.url"),
                  }),
                  s.jsx(H, {
                    children: x("builder.steps.data.sources.url_desc"),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.dataSource === "upload" &&
          s.jsx(N, {
            children: s.jsxs(T, {
              className: "p-6",
              children: [
                s.jsxs("div", {
                  className:
                    "border-2 border-dashed border-muted rounded-xl p-8 text-center",
                  children: [
                    s.jsx(be, {
                      className: "w-12 h-12 mx-auto mb-4 text-muted-foreground",
                    }),
                    s.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        s.jsx("p", {
                          className: "text-sm font-medium",
                          children: x("builder.steps.data.dropzone.title"),
                        }),
                        s.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: x("builder.steps.data.dropzone.hint"),
                        }),
                        s.jsxs("button", {
                          type: "button",
                          onClick: () =>
                            f({
                              title: x("builder.toasts.model_downloaded_title"),
                              description: x(
                                "builder.toasts.model_downloaded_desc",
                              ),
                            }),
                          className:
                            "mt-2 text-xs text-primary hover:underline font-medium flex items-center justify-center gap-1 mx-auto",
                          children: [
                            s.jsx(be, { className: "w-3 h-3" }),
                            x("builder.steps.data.example"),
                          ],
                        }),
                      ],
                    }),
                    s.jsx(de, {
                      type: "file",
                      className: "mt-4 cursor-pointer",
                      accept: ".xlsx,.xls,.csv,.pdf,.docx",
                      onChange: j,
                    }),
                  ],
                }),
                r &&
                  s.jsx("div", {
                    className:
                      "mt-4 p-4 bg-success/10 border border-success/20 rounded-lg",
                    children: s.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        s.jsx(ie, { className: "w-5 h-5 text-success" }),
                        s.jsxs("p", {
                          className: "text-sm font-medium text-success",
                          children: [
                            x("builder.steps.data.dropzone.success"),
                            ": ",
                            r.name,
                          ],
                        }),
                      ],
                    }),
                  }),
                r &&
                  g &&
                  s.jsx("div", {
                    className: "mt-6",
                    children: s.jsx(bs, {
                      fileData: {
                        headers: g.headers,
                        rows: g.rows,
                        fileName: r.name,
                        fileType:
                          ((_ = r.name.split(".").pop()) == null
                            ? void 0
                            : _.toLowerCase()) || "csv",
                      },
                      onTemplateSelected: (m) => {
                        console.log("Template selecionado:", m);
                      },
                    }),
                  }),
                g &&
                  g.headers.length > 0 &&
                  s.jsx("div", {
                    className: "mt-6",
                    children: s.jsx(Fs, {
                      parsedData: { headers: g.headers, rows: g.rows },
                    }),
                  }),
              ],
            }),
          }),
        e.dataSource === "text" &&
          s.jsx(N, {
            children: s.jsx(T, {
              className: "p-6",
              children: s.jsxs("div", {
                className: "space-y-2",
                children: [
                  s.jsx(Q, {
                    htmlFor: "textData",
                    children: x("builder.steps.data.labels.paste_area"),
                  }),
                  s.jsx(Oe, {
                    id: "textData",
                    value: o,
                    onChange: (m) => a(m.target.value),
                    placeholder: x(
                      "builder.steps.data.labels.paste_placeholder",
                    ),
                    rows: 12,
                    className: "resize-none",
                  }),
                  o &&
                    s.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        o.length,
                        " ",
                        x("builder.steps.data.labels.chars"),
                      ],
                    }),
                ],
              }),
            }),
          }),
        e.dataSource === "url" &&
          s.jsx(N, {
            children: s.jsx(T, {
              className: "p-6",
              children: s.jsxs("div", {
                className: "space-y-2",
                children: [
                  s.jsx(Q, {
                    htmlFor: "urlData",
                    children: x("builder.steps.data.labels.url_input"),
                  }),
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx(ye, {
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                      }),
                      s.jsx(de, {
                        id: "urlData",
                        type: "url",
                        value: n,
                        onChange: (m) => d(m.target.value),
                        placeholder: x(
                          "builder.steps.data.labels.url_placeholder",
                        ),
                        className: "pl-10",
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "Dica: Certifique-se de que o link é público para que nossa IA possa ler o conteúdo.",
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  Os = () => {
    const {
        formData: e,
        file: t,
        textData: r,
        selectedTemplate: i,
        setSelectedTemplate: o,
        setBlocks: a,
      } = Y(),
      { t: n } = P();
    return s.jsxs("div", {
      className: "space-y-6",
      children: [
        s.jsxs("div", {
          className: "text-center",
          children: [
            s.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: n("builder.steps.template.title"),
            }),
            s.jsx("p", {
              className: "text-muted-foreground",
              children: n("builder.steps.template.desc"),
            }),
          ],
        }),
        s.jsxs(N, {
          children: [
            s.jsx(S, {
              children: s.jsxs(O, {
                className: "flex items-center gap-2",
                children: [
                  s.jsx(ie, { className: "w-5 h-5 text-success" }),
                  n("builder.steps.template.preview_title"),
                ],
              }),
            }),
            s.jsx(T, {
              children: s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                children: [
                  s.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      s.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.source_label"),
                      }),
                      s.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          e.dataSource === "upload"
                            ? t == null
                              ? void 0
                              : t.name
                            : n("builder.steps.data.sources.paste"),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      s.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.size_label"),
                      }),
                      s.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          e.dataSource === "upload"
                            ? `${Math.round(((t == null ? void 0 : t.size) || 0) / 1024)} KB`
                            : `${r.length} chars`,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      s.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.status_label"),
                      }),
                      s.jsx("p", {
                        className: "text-success",
                        children: n("builder.steps.template.status_val"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          children: [
            s.jsx("h3", {
              className: "text-lg font-semibold mb-4",
              children: "Escolha um Modelo",
            }),
            s.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: Ie.map((d) =>
                s.jsxs(
                  N,
                  {
                    className: Be(
                      "cursor-pointer transition-all duration-300 card-hover border-2",
                      i === d.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20 shadow-lg"
                        : "border-border/40",
                    ),
                    onClick: () => {
                      (o(d.id), a(d.defaultBlocks));
                    },
                    children: [
                      s.jsxs(S, {
                        className: "pb-3",
                        children: [
                          s.jsx(O, {
                            className: "text-lg font-bold",
                            children: d.name,
                          }),
                          s.jsx(H, {
                            className: "text-xs",
                            children: d.description,
                          }),
                        ],
                      }),
                      s.jsx(T, {
                        children: s.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: d.defaultBlocks.map((g, p) =>
                            s.jsx(
                              X,
                              {
                                variant: "secondary",
                                className:
                                  "text-[10px] uppercase font-bold tracking-wider opacity-70",
                                children: g.type,
                              },
                              p,
                            ),
                          ),
                        }),
                      }),
                    ],
                  },
                  d.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  Is = () => {
    const { formData: e, setFormData: t } = Y(),
      { t: r } = P();
    return s.jsxs("div", {
      className: "space-y-6",
      children: [
        s.jsxs("div", {
          className: "text-center",
          children: [
            s.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: r("builder.steps.generation.title"),
            }),
            s.jsx("p", {
              className: "text-muted-foreground",
              children: r("builder.steps.generation.desc"),
            }),
          ],
        }),
        s.jsx(N, {
          children: s.jsxs(T, {
            className: "p-6 space-y-6",
            children: [
              s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      s.jsxs(Q, {
                        htmlFor: "title",
                        children: [
                          r("builder.steps.generation.form.title_label"),
                          " *",
                        ],
                      }),
                      s.jsx(de, {
                        id: "title",
                        value: e.title,
                        onChange: (i) =>
                          t((o) => ({ ...o, title: i.target.value })),
                        placeholder: r(
                          "builder.steps.generation.form.title_placeholder",
                        ),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      s.jsx("p", {
                        className: "font-medium",
                        children: r("builder.steps.template.status_label"),
                      }),
                      s.jsx("p", {
                        className: "text-success",
                        children: r("builder.steps.template.status_val"),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      s.jsx(Q, {
                        htmlFor: "category",
                        children: r("builder.steps.generation.form.cat_label"),
                      }),
                      s.jsxs(gs, {
                        value: e.category,
                        onValueChange: (i) => t((o) => ({ ...o, category: i })),
                        children: [
                          s.jsx(hs, {
                            children: s.jsx(fs, {
                              placeholder: r(
                                "builder.steps.generation.form.cat_placeholder",
                              ),
                            }),
                          }),
                          s.jsxs(xs, {
                            children: [
                              s.jsx(B, {
                                value: "Executivo",
                                children: r("reports.categories.executive"),
                              }),
                              s.jsx(B, {
                                value: "Vendas",
                                children: r("reports.categories.sales"),
                              }),
                              s.jsx(B, {
                                value: "Financeiro",
                                children: r("reports.categories.financial"),
                              }),
                              s.jsx(B, {
                                value: "Marketing",
                                children: r("reports.categories.marketing"),
                              }),
                              s.jsx(B, {
                                value: "Operacional",
                                children: r("reports.categories.operational"),
                              }),
                              s.jsx(B, {
                                value: "RH",
                                children: r("reports.categories.rh"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "space-y-2",
                children: [
                  s.jsx(Q, {
                    htmlFor: "description",
                    children: r("builder.steps.generation.form.desc_label"),
                  }),
                  s.jsx(Oe, {
                    id: "description",
                    value: e.description,
                    onChange: (i) =>
                      t((o) => ({ ...o, description: i.target.value })),
                    placeholder: r(
                      "builder.steps.generation.form.desc_placeholder",
                    ),
                    rows: 3,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ks = () => {
    const { blocks: e, setBlocks: t, loading: r } = Y(),
      { t: i } = P(),
      o = (n) => {
        t((d) => d.filter((g) => g.id !== n));
      },
      a = (n, d) => {
        const g = n - 1;
        if (g < 0 || g >= e.length) return;
        const p = [...e],
          [u] = p.splice(n, 1);
        (p.splice(g, 0, u), t(p));
      };
    return r && e.length === 0
      ? s.jsxs("div", {
          className: "space-y-6 py-12 text-center",
          children: [
            s.jsx("div", {
              className:
                "w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4",
            }),
            s.jsx("h2", {
              className: "text-xl font-semibold",
              children: i("builder.steps.blocks.loading_title"),
            }),
            s.jsx("p", {
              className: "text-muted-foreground",
              children: i("builder.steps.blocks.loading_desc"),
            }),
          ],
        })
      : s.jsxs("div", {
          className: "space-y-6",
          children: [
            s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx("h2", {
                  className: "text-xl md:text-2xl font-semibold mb-2",
                  children: i("builder.steps.blocks.title"),
                }),
                s.jsx("p", {
                  className: "text-muted-foreground",
                  children: i("builder.steps.blocks.desc"),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
              children: [
                s.jsxs("div", {
                  className: "lg:col-span-3 space-y-4",
                  children: [
                    e.map((n, d) =>
                      s.jsxs(
                        "div",
                        {
                          className:
                            "relative group animate-in fade-in slide-in-from-bottom-2 duration-300",
                          children: [
                            s.jsx("div", {
                              className:
                                "absolute -left-12 top-0 bottom-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                              children: s.jsx(q, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "h-8 w-8 p-0 cursor-grab active:cursor-grabbing",
                                onClick: () => {},
                                children: s.jsx(ns, {
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                              }),
                            }),
                            s.jsxs(N, {
                              className:
                                "border-border/40 overflow-hidden group/card relative",
                              children: [
                                s.jsxs("div", {
                                  className:
                                    "absolute top-2 right-2 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-20",
                                  children: [
                                    s.jsxs(q, {
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm",
                                      onClick: () => a(d),
                                      disabled: d === 0,
                                      children: [
                                        s.jsx(je, {
                                          className: "h-3 w-3 rotate-45",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    s.jsx(q, {
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm text-destructive hover:bg-destructive/10",
                                      onClick: () => o(n.id),
                                      children: s.jsx(os, {
                                        className: "h-3 w-3",
                                      }),
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "bg-muted/5 p-2 px-4 border-b border-border/20 flex justify-between items-center",
                                  children: s.jsx("span", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60",
                                    children: n.type,
                                  }),
                                }),
                                s.jsx("div", {
                                  className:
                                    "p-4 pointer-events-none opacity-80 scale-[0.98]",
                                  children: s.jsx(ke, { blocks: [n] }),
                                }),
                              ],
                            }),
                          ],
                        },
                        n.id,
                      ),
                    ),
                    s.jsxs(q, {
                      variant: "outline",
                      className:
                        "w-full border-dashed py-8 border-2 group hover:border-primary/50 hover:bg-primary/5",
                      children: [
                        s.jsx(je, {
                          className:
                            "mr-2 h-4 w-4 group-hover:scale-110 transition-transform",
                        }),
                        i("builder.steps.blocks.add_block"),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsxs(N, {
                      children: [
                        s.jsx(S, {
                          className: "pb-3",
                          children: s.jsxs(O, {
                            className: "text-base flex items-center gap-2",
                            children: [
                              s.jsx(cs, { className: "h-4 w-4" }),
                              i("builder.steps.blocks.ai_hint_title"),
                            ],
                          }),
                        }),
                        s.jsx(T, {
                          children: s.jsx("p", {
                            className:
                              "text-sm text-muted-foreground leading-relaxed",
                            children: i("builder.steps.blocks.ai_hint_body"),
                          }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "p-4 bg-primary/5 rounded-xl border border-primary/10",
                      children: [
                        s.jsxs("h4", {
                          className:
                            "text-sm font-bold text-primary mb-2 flex items-center gap-2",
                          children: [
                            s.jsx(G, { className: "h-4 w-4" }),
                            i("builder.steps.blocks.auto_mapping_title"),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-[11px] text-muted-foreground",
                          children: i("builder.steps.blocks.auto_mapping_body"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  se = [
    { id: 1, text: "Lendo e estruturando dados brutos...", icon: ls },
    { id: 2, text: "Cruzando tendências e métricas...", icon: ce },
    { id: 3, text: "Identificando gatilhos de crescimento...", icon: me },
    { id: 4, text: "Redigindo recomendações estratégicas...", icon: pe },
    { id: 5, text: "Finalizando design do relatório...", icon: G },
  ],
  Ds = ({ isProcessing: e }) => {
    const [t, r] = b.useState(0),
      [i, o] = b.useState([]);
    return (
      b.useEffect(() => {
        if (!e) {
          (r(0), o([]));
          return;
        }
        const a = setInterval(() => {
          r((n) =>
            n < se.length - 1 ? (o((d) => [...d, se[n].id]), n + 1) : n,
          );
        }, 2500);
        return () => clearInterval(a);
      }, [e]),
      e
        ? s.jsx(N, {
            className:
              "border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in duration-300",
            children: s.jsx(T, {
              className: "p-6",
              children: s.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center space-y-6",
                children: [
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx("div", {
                        className:
                          "absolute inset-0 bg-primary/20 rounded-full animate-ping",
                      }),
                      s.jsx("div", {
                        className: "relative bg-primary rounded-full p-4",
                        children: s.jsx(pe, {
                          className: "h-8 w-8 text-white animate-pulse",
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "text-center space-y-2",
                    children: [
                      s.jsx("h3", {
                        className: "text-lg font-bold text-foreground",
                        children: "A Magia está Acontecendo",
                      }),
                      s.jsx("p", {
                        className:
                          "text-sm text-muted-foreground max-w-xs mx-auto",
                        children:
                          "Nossa inteligência está transformando seus dados em um relatório profissional de elite.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "w-full space-y-4 max-w-sm",
                    children: se.map((a, n) => {
                      const d = i.includes(a.id),
                        g = n === t;
                      return s.jsxs(
                        "div",
                        {
                          className: `flex items-center gap-3 transition-all duration-500 ${g ? "translate-x-2" : d ? "opacity-60" : "opacity-30"}`,
                          children: [
                            d
                              ? s.jsx(Se, {
                                  className:
                                    "h-5 w-5 text-success fill-success/10",
                                })
                              : g
                                ? s.jsx(ds, {
                                    className:
                                      "h-5 w-5 text-primary animate-spin",
                                  })
                                : s.jsx(a.icon, {
                                    className: "h-5 w-5 text-muted-foreground",
                                  }),
                            s.jsx("span", {
                              className: `text-sm ${g ? "font-bold text-primary" : "text-muted-foreground"}`,
                              children: a.text,
                            }),
                          ],
                        },
                        a.id,
                      );
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "w-full bg-muted h-1 rounded-full overflow-hidden",
                    children: s.jsx("div", {
                      className:
                        "bg-primary h-full transition-all duration-1000 ease-out",
                      style: { width: `${((t + 1) / se.length) * 100}%` },
                    }),
                  }),
                ],
              }),
            }),
          })
        : null
    );
  },
  Ms = ({ onConfirm: e }) => {
    var f;
    const {
        formData: t,
        file: r,
        textData: i,
        selectedTemplate: o,
        loading: a,
        aiResult: n,
        diagnosticResult: d,
        analysisError: g,
        blocks: p,
      } = Y(),
      { t: u } = P();
    if (n || (p && p.length > 0)) {
      const x = d
          ? {
              id: "preview-diag",
              reportId: "preview-report",
              createdAt: new Date().toISOString(),
              ...d.diagnostic,
            }
          : null,
        j = d
          ? {
              id: "preview-prio",
              diagnosticId: "preview-diag",
              createdAt: new Date().toISOString(),
              status: "suggested",
              ...d.suggestedPriority,
            }
          : null;
      return s.jsxs("div", {
        className: "space-y-8",
        children: [
          s.jsxs("div", {
            className: "text-center",
            children: [
              s.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4",
                children: [
                  s.jsx(G, { className: "w-4 h-4" }),
                  u("builder.steps.preview.ai_badge"),
                ],
              }),
              s.jsx("h2", {
                className: "text-2xl font-bold mb-2",
                children: t.title || u("builder.steps.preview.title"),
              }),
              t.category &&
                s.jsx(X, { variant: "secondary", children: t.category }),
            ],
          }),
          (n == null ? void 0 : n.summary) &&
            s.jsxs(N, {
              className: "border-primary/20 bg-primary/5",
              children: [
                s.jsx(S, {
                  className: "pb-3",
                  children: s.jsxs(O, {
                    className: "text-lg flex items-center gap-2",
                    children: [
                      s.jsx(ne, { className: "w-5 h-5 text-primary" }),
                      u("report_detail.content.executive_summary"),
                    ],
                  }),
                }),
                s.jsx(T, {
                  children: s.jsx("p", {
                    className: "text-sm leading-relaxed text-foreground/90",
                    children: n.summary,
                  }),
                }),
              ],
            }),
          s.jsx("div", {
            className:
              "animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8",
            children: s.jsx(ke, { blocks: p }),
          }),
          x &&
            j &&
            s.jsxs("div", {
              className:
                "pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    s.jsx(ce, {
                      className: "h-5 w-5 text-primary fill-primary/20",
                    }),
                    s.jsx("h3", {
                      className: "text-lg font-bold tracking-tight",
                      children: u("builder.steps.preview.diagnostic_title"),
                    }),
                  ],
                }),
                s.jsx(_s, { diagnostic: x }),
                s.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    s.jsxs("div", {
                      className: "flex flex-col justify-center space-y-2 p-4",
                      children: [
                        s.jsx("h4", {
                          className:
                            "font-bold text-sm uppercase tracking-wider text-muted-foreground",
                          children: u(
                            "builder.steps.preview.recommended_priority",
                          ),
                        }),
                        s.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: u(
                            "builder.steps.preview.recommended_priority_desc",
                          ),
                        }),
                      ],
                    }),
                    s.jsx(vs, { priority: j }),
                  ],
                }),
              ],
            }),
          s.jsx(N, {
            className: "mt-12 bg-muted/30 border-dashed",
            children: s.jsxs(T, {
              className:
                "p-6 flex flex-col sm:flex-row items-center gap-4 justify-between",
              children: [
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className: "font-medium",
                      children: u("builder.steps.preview.save_card_title"),
                    }),
                    s.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: u("builder.steps.preview.save_card_desc"),
                    }),
                  ],
                }),
                s.jsx(q, {
                  onClick: e,
                  disabled: a,
                  size: "lg",
                  className: "w-full sm:w-auto",
                  children: u(
                    a
                      ? "common.processing"
                      : "builder.steps.preview.save_button",
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    }
    return a && !n
      ? s.jsx("div", {
          className: "max-w-md mx-auto py-12",
          children: s.jsx(Ds, { isProcessing: a }),
        })
      : g
        ? s.jsxs("div", {
            className: "space-y-6",
            children: [
              s.jsx(N, {
                className: "border-destructive/30 bg-destructive/5",
                children: s.jsxs(T, {
                  className: "p-6 flex items-start gap-3",
                  children: [
                    s.jsx(oe, {
                      className:
                        "w-6 h-6 text-destructive mt-0.5 flex-shrink-0",
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("p", {
                          className: "font-semibold text-destructive",
                          children: u("common.error_title"),
                        }),
                        s.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: g,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(q, {
                onClick: e,
                variant: "outline",
                className: "w-full",
                children: u("common.back"),
              }),
            ],
          })
        : s.jsxs("div", {
            className: "space-y-6",
            children: [
              s.jsxs("div", {
                className: "text-center",
                children: [
                  s.jsx("h2", {
                    className: "text-xl md:text-2xl font-semibold mb-2",
                    children: u("builder.steps.preview.title"),
                  }),
                  s.jsx("p", {
                    className: "text-muted-foreground",
                    children: u("builder.steps.preview.desc"),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  s.jsxs(N, {
                    children: [
                      s.jsx(S, {
                        children: s.jsx(O, {
                          className: "text-lg",
                          children: u("report_detail.sidebar.info_title"),
                        }),
                      }),
                      s.jsxs(T, {
                        className: "space-y-3",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: u(
                                  "builder.steps.generation.form.title_label",
                                ),
                              }),
                              s.jsx("p", {
                                className: "font-medium",
                                children: t.title || "—",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: u(
                                  "builder.steps.generation.form.cat_label",
                                ),
                              }),
                              s.jsx("p", { children: t.category || "—" }),
                            ],
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: u("builder.sidebar.ai_will_do.title"),
                              }),
                              s.jsx("p", {
                                children:
                                  ((f = Ie.find((x) => x.id === o)) == null
                                    ? void 0
                                    : f.name) || "—",
                              }),
                            ],
                          }),
                          t.description &&
                            s.jsxs("div", {
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: u(
                                    "builder.steps.generation.form.desc_label",
                                  ),
                                }),
                                s.jsx("p", {
                                  className: "text-sm",
                                  children: t.description,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs(N, {
                    children: [
                      s.jsx(S, {
                        children: s.jsx(O, {
                          className: "text-lg",
                          children: u("builder.steps.template.preview_title"),
                        }),
                      }),
                      s.jsxs(T, {
                        className: "space-y-3",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: u(
                                  "builder.steps.template.source_label",
                                ),
                              }),
                              s.jsx("p", {
                                children:
                                  t.dataSource === "upload"
                                    ? u("builder.steps.data.sources.upload")
                                    : u("builder.steps.data.sources.paste"),
                              }),
                            ],
                          }),
                          r &&
                            s.jsxs("div", {
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: u("common.active"),
                                }),
                                s.jsx("p", {
                                  className: "text-sm",
                                  children: r.name,
                                }),
                              ],
                            }),
                          i &&
                            s.jsxs("div", {
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: u(
                                    "builder.steps.data.labels.chars",
                                  ),
                                }),
                                s.jsx("p", {
                                  className: "text-sm",
                                  children: i.length,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx(N, {
                className:
                  "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20",
                children: s.jsx(T, {
                  className: "p-6",
                  children: s.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      s.jsx(G, {
                        className: "w-6 h-6 text-primary mt-0.5 flex-shrink-0",
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-semibold text-primary mb-2",
                            children: u("builder.steps.preview.ai_engine"),
                          }),
                          s.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: u(
                              "builder.steps.preview.ai_processing_desc",
                            ),
                          }),
                          s.jsx(q, {
                            onClick: e,
                            disabled: a,
                            className: "w-full md:w-auto",
                            size: "lg",
                            children: a
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                    }),
                                    u("builder.steps.preview.cta_loading"),
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(ce, { className: "mr-2 h-5 w-5" }),
                                    u("builder.steps.preview.cta_initial"),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
  },
  Ls = () => {
    const [e] = Ge(),
      t = $e(),
      { toast: r } = Re(),
      { t: i } = P(),
      o = [
        {
          title: i("builder.steps.summary.data.title"),
          description: i("builder.steps.summary.data.desc"),
          icon: us,
          key: "data",
        },
        {
          title: i("builder.steps.summary.model.title"),
          description: i("builder.steps.summary.model.desc"),
          icon: pe,
          key: "model",
        },
        {
          title: i("builder.steps.summary.blocks.title"),
          description: i("builder.steps.summary.blocks.desc"),
          icon: G,
          key: "blocks",
        },
        {
          title: i("builder.steps.summary.generation.title"),
          description: i("builder.steps.summary.generation.desc"),
          icon: Fe,
          key: "generation",
        },
        {
          title: i("builder.steps.summary.final.title"),
          description: i("builder.steps.summary.final.desc"),
          icon: ms,
          key: "final",
        },
      ],
      {
        step: a,
        setStep: n,
        selectedTemplate: d,
        setSelectedTemplate: g,
        formData: p,
        setFormData: u,
        file: f,
        textData: x,
        urlData: j,
        loading: _,
        setLoading: m,
        setParsedData: l,
        aiResult: v,
        diagnosticResult: y,
        setAnalysisError: A,
        blocks: w,
        extractedKPIs: D,
        enrichedDiagnostic: M,
        runAIAnalysis: F,
      } = Y();
    (Xe(),
      b.useEffect(() => {
        const E = e.get("template");
        if (E) {
          g(E);
          const L =
            templates == null ? void 0 : templates.find((V) => V.id === E);
          L && u((V) => ({ ...V, category: L.category, title: L.name }));
        }
      }, [e, g, u]));
    const I = async () => {
        if (a === 1) {
          if (p.dataSource === "upload" && !f) {
            r({
              title: i("builder.toasts.data_required_title"),
              description: i("builder.toasts.upload_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (p.dataSource === "text" && !x.trim()) {
            r({
              title: i("builder.toasts.data_required_title"),
              description: i("builder.toasts.text_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (p.dataSource === "url" && (!j.trim() || !j.startsWith("http"))) {
            r({
              title: i("builder.toasts.data_required_title"),
              description: i("builder.toasts.url_required_desc"),
              variant: "destructive",
            });
            return;
          }
        }
        if (a === 2) {
          if (!d) {
            r({
              title: i("builder.toasts.select_template_title"),
              description: i("builder.toasts.select_template_desc"),
              variant: "destructive",
            });
            return;
          }
          (n(a + 1), F());
          return;
        }
        if (a === 4 && !p.title.trim()) {
          r({
            title: i("builder.toasts.title_required_title"),
            description: i("builder.toasts.title_required_desc"),
            variant: "destructive",
          });
          return;
        }
        n(a + 1);
      },
      C = () => {
        n(a - 1);
      },
      R = async () => {
        m(!0);
        try {
          const {
            data: { user: E },
          } = await te.auth.getUser();
          if (!E) throw new Error("Usuário não autenticado");
          const L = await Je(
            {
              title: p.title,
              description: p.description,
              category: p.category,
              template_id: d,
              blocks: w,
              status: "completed",
            },
            D,
            M || (y == null ? void 0 : y.diagnostic),
            E.id,
          );
          (r({
            title: i("builder.toasts.save_success_title"),
            description: `${i("builder.toasts.save_success_desc")} (${L.metricsCount} métricas extraídas, ${L.challengeCreated ? "desafio criado" : "desafio atualizado"})`,
          }),
            t("/app"));
        } catch (E) {
          r({
            title: i("builder.errors.save_title"),
            description:
              (E == null ? void 0 : E.message) ||
              i("builder.errors.save_generic"),
            variant: "destructive",
          });
        } finally {
          m(!1);
        }
      },
      k = (a / 5) * 100;
    return s.jsxs("div", {
      className: "min-h-screen bg-gradient-subtle flex flex-col",
      children: [
        s.jsxs("header", {
          className:
            "sticky top-0 z-50 bg-background/95 backdrop-blur border-b",
          children: [
            s.jsxs("div", {
              className:
                "container mx-auto px-4 h-16 flex items-center justify-between",
              children: [
                s.jsxs(q, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => t("/app"),
                  className: "flex items-center gap-2",
                  children: [
                    s.jsx(Ne, { className: "h-4 w-4" }),
                    s.jsx("span", {
                      className: "hidden sm:inline",
                      children: i("common.back"),
                    }),
                  ],
                }),
                s.jsx("h1", {
                  className: "text-lg md:text-xl font-semibold",
                  children: i("builder.title"),
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2 text-sm",
                  children: [
                    s.jsx("span", {
                      className: "hidden sm:inline text-muted-foreground",
                      children: i("builder.step_indicator.prefix"),
                    }),
                    s.jsx("span", {
                      className: "font-medium",
                      children: i("builder.step_indicator.value", {
                        current: a,
                        total: 5,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "h-1 bg-muted",
              children: s.jsx("div", {
                className:
                  "h-full bg-primary transition-all duration-300 ease-out",
                style: { width: `${k}%` },
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "flex-1 flex overflow-hidden",
          children: s.jsxs("div", {
            className: "flex flex-1 gap-0 overflow-hidden",
            children: [
              s.jsx("aside", {
                className:
                  "hidden lg:block w-80 p-4 space-y-4 border-r bg-muted/10 overflow-y-auto",
                children: s.jsxs(N, {
                  className: "border-none shadow-none bg-transparent",
                  children: [
                    s.jsx(S, {
                      className: "px-2",
                      children: s.jsx(O, {
                        className: "text-lg",
                        children: i("builder.sidebar.summary_title"),
                      }),
                    }),
                    s.jsx(T, {
                      className: "p-2",
                      children: s.jsx("div", {
                        className: "space-y-3",
                        children: o.map((E, L) => {
                          const V = L + 1,
                            W = V === a,
                            $ = V < a;
                          return s.jsxs(
                            "div",
                            {
                              className: `flex items-start gap-3 p-3 rounded-lg transition-all ${W ? "bg-primary/10 border border-primary/20 shadow-sm" : $ ? "bg-success/5" : "bg-background/50 text-muted-foreground"}`,
                              children: [
                                s.jsx("div", {
                                  className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${$ ? "bg-success text-success-foreground" : W ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
                                  children: $
                                    ? s.jsx(ie, { className: "w-4 h-4" })
                                    : V,
                                }),
                                s.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    s.jsx("p", {
                                      className: `font-medium text-sm truncate ${W ? "text-primary" : ""}`,
                                      children: E.title,
                                    }),
                                    s.jsx("p", {
                                      className:
                                        "text-[10px] mt-0.5 line-clamp-1",
                                      children: E.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            E.key,
                          );
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx("main", {
                className: "flex-1 min-w-0 overflow-y-auto",
                children: s.jsxs("div", {
                  className:
                    "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in space-y-6",
                  children: [
                    a === 1 &&
                      s.jsxs("div", {
                        className:
                          "bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3 mb-6",
                        children: [
                          s.jsx(G, {
                            className:
                              "h-5 w-5 text-primary flex-shrink-0 mt-0.5",
                          }),
                          s.jsxs("p", {
                            className: "text-sm text-primary/90",
                            children: [
                              s.jsxs("strong", {
                                children: [
                                  i("builder.sidebar.consultant_hint"),
                                  ":",
                                ],
                              }),
                              " ",
                              i("builder.sidebar.ai_hints.step1"),
                            ],
                          }),
                        ],
                      }),
                    s.jsxs("div", {
                      className: "animate-fade-in pb-20",
                      children: [
                        a === 1 && s.jsx(Ss, {}),
                        a === 2 && s.jsx(Os, {}),
                        a === 3 && s.jsx(ks, {}),
                        a === 4 && s.jsx(Is, {}),
                        a === 5 && s.jsx(Ms, { onConfirm: R }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className:
            "lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-40",
          children: s.jsxs("div", {
            className: "flex gap-3",
            children: [
              a > 1 &&
                s.jsxs(q, {
                  variant: "outline",
                  onClick: C,
                  className: "flex-1",
                  children: [
                    s.jsx(Ne, { className: "mr-2 h-4 w-4" }),
                    i("common.back"),
                  ],
                }),
              a < 5
                ? s.jsxs(q, {
                    onClick: I,
                    className: "flex-1",
                    children: [
                      i("common.next"),
                      s.jsx(ps, { className: "ml-2 h-4 w-4" }),
                    ],
                  })
                : s.jsx(q, {
                    onClick: R,
                    disabled: _,
                    className: "flex-1",
                    children: i(
                      _ ? "common.processing" : "builder.preview.cta_initial",
                    ),
                  }),
            ],
          }),
        }),
      ],
    });
  };
function nt() {
  return s.jsx(ys, { children: s.jsx(Ls, {}) });
}
export { nt as default };
