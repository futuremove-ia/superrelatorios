import {
  j as e,
  s as H,
  B as _,
  d as ue,
  u as U,
  c as _e,
} from "./index-CzFfXFeY.js";
import { r as g } from "./vendor-Bp-AcFIh.js";
import { d as Se, a as ke } from "./router-Db_Yswnp.js";
import { C as f, b as D, c as T, a as y, d as Q } from "./card-DEQcRzjn.js";
import {
  a as Ce,
  g as Ae,
  e as De,
  b as Te,
  p as Ie,
  s as Ee,
} from "./fileParserService-C2ncapS-.js";
import { a as Fe } from "./useReports-D9iQcD4L.js";
import { u as Be } from "./useQuery-CUbIaUAb.js";
import { A as ie, a as le } from "./alert-4bci8o7z.js";
import { B as X } from "./badge-DQqwMB41.js";
import {
  L as J,
  e as pe,
  d as xe,
  a as Z,
  T as ne,
  U as $e,
  x as ze,
  G as de,
  F as ce,
  y as qe,
  n as oe,
  z as Re,
  B as Pe,
  I as L,
  J as se,
  K as Ve,
  N as Le,
  s as Ue,
  Z as Y,
  q as Me,
  O as Oe,
  E as Ke,
  Q as me,
  p as We,
} from "./utils-BYPr0Dmq.js";
import { I as ee } from "./input-BTdCt8gt.js";
import { L as W } from "./label-BHpRHfN1.js";
import { T as he } from "./textarea-B41S52CR.js";
import { m as ge } from "./mockReports-3cW05Ka2.js";
import {
  S as Ge,
  a as He,
  b as Qe,
  c as Xe,
  d as V,
} from "./select-CuHe0xdE.js";
import { D as je, a as Ze } from "./DiagnosticSection-CX8JKyAg.js";
import { P as Je } from "./PriorityCard-C4mY_utM.js";
import "./useMutation-CPK7jKck.js";
import "./supabaseReportsService-DqxY2XWY.js";
import "./useCurrentOrganization-qxH_0hip.js";
import "./index-Bxi3BZuB.js";
import "./index-CKeeGB76.js";
import "./index-Dsfa9Guj.js";
import "./PieChart-Dtv7QXz8.js";
const be = g.createContext(void 0),
  Ye = ({ children: i }) => {
    const [o, s] = g.useState(1),
      [t, j] = g.useState(""),
      [l, n] = g.useState({
        title: "",
        description: "",
        category: "",
        dataSource: "upload",
      }),
      [d, x] = g.useState(null),
      [h, c] = g.useState(""),
      [v, u] = g.useState(""),
      [C, A] = g.useState(!1),
      [r, a] = g.useState(!1),
      [m, p] = g.useState(null),
      [w, b] = g.useState(null),
      [B, I] = g.useState(null),
      [S, k] = g.useState(null),
      [R, $] = g.useState([]),
      [z, N] = g.useState([]),
      [E, F] = g.useState([]),
      [O, P] = g.useState(null),
      fe = g.useCallback(async () => {
        if (!m && !h && !v) {
          k("Nenhum dado fornecido para análise.");
          return;
        }
        (A(!0), k(null));
        try {
          const K = m ? m.rows : [{ content: h || v }],
            te = `Objetivo: ${l.description}. Categoria: ${l.category}. Template: ${t}`,
            [ae, re] = await Promise.all([Ce(K, te), Ae(K, te)]),
            Ne = De(ae);
          F(Ne);
          const ve = { ...re, ...Te(re.diagnostic) };
          P(ve);
          const ye = {
            id: crypto.randomUUID(),
            name: (d == null ? void 0 : d.name) || l.title || "Fonte de Dados",
            type: d ? "file" : v ? "url" : "raw_text",
            createdAt: new Date().toISOString(),
            metadata: {
              size: d == null ? void 0 : d.size,
              extension: d == null ? void 0 : d.name.split(".").pop(),
            },
          };
          N((q) => [...q, ye]);
          const we = ae.blocks.map((q) => ({
            id: crypto.randomUUID(),
            type: q.type,
            layout: { w: 12 },
            content: {
              title: q.title,
              description: q.description,
              data: q.data,
              settings: q.settings || {},
            },
          }));
          $(we);
        } catch (K) {
          (console.error("Erro na análise da IA:", K),
            k(K.message || "Erro ao processar dados com IA."));
        } finally {
          A(!1);
        }
      }, [m, h, v, l, t]);
    return e.jsx(be.Provider, {
      value: {
        step: o,
        setStep: s,
        selectedTemplate: t,
        setSelectedTemplate: j,
        formData: l,
        setFormData: n,
        file: d,
        setFile: x,
        textData: h,
        setTextData: c,
        urlData: v,
        setUrlData: u,
        loading: C,
        setLoading: A,
        aiSuggestionsOpen: r,
        setAiSuggestionsOpen: a,
        parsedData: m,
        setParsedData: p,
        aiResult: w,
        setAiResult: b,
        diagnosticResult: B,
        setDiagnosticResult: I,
        analysisError: S,
        setAnalysisError: k,
        blocks: R,
        setBlocks: $,
        dataSources: z,
        setDataSources: N,
        runAIAnalysis: fe,
        extractedKPIs: E,
        setExtractedKPIs: F,
        enrichedDiagnostic: O,
        setEnrichedDiagnostic: P,
      },
      children: i,
    });
  },
  M = () => {
    const i = g.useContext(be);
    if (!i)
      throw new Error(
        "useReportBuilderContext must be used within a ReportBuilderProvider",
      );
    return i;
  },
  es = ({ fileData: i, onTemplateSelected: o }) => {
    const [s, t] = g.useState(null),
      [j, l] = g.useState(!1),
      { data: n = [] } = Be({
        queryKey: ["strategic-templates"],
        queryFn: async () => {
          const { data: r } = await H.rpc("find_best_template", {
            p_file_structure: {
              columns: i.headers.map((a) => ({ name: a, type: x(a, i.rows) })),
              row_count: i.rows.length,
            },
            p_industry: null,
            p_category: null,
          });
          return r || [];
        },
      }),
      d = g.useCallback(async () => {
        l(!0);
        try {
          const r = h(i.headers),
            a = c(i.headers),
            { data: m } = await H.rpc("find_best_template", {
              p_file_structure: {
                columns: i.headers.map((p) => ({
                  name: p,
                  type: x(p, i.rows),
                })),
                row_count: i.rows.length,
              },
              p_industry: r,
              p_category: a,
            });
          if (m && m.length > 0) {
            const p = m[0],
              w = v(i, p);
            t({
              isValid: w.length === 0,
              template: p,
              errors: w,
              warnings: u(i, p),
              suggestions: C(i, p),
            });
          } else
            t({
              isValid: !1,
              errors: ["Nenhum template compatível encontrado"],
              suggestions: [
                "Verifique se os nomes das colunas estão corretos",
                "Considere criar um template personalizado",
                "Entre em contato com o suporte para ajuda",
              ],
            });
        } catch (r) {
          (console.error("Error validating file:", r),
            t({
              isValid: !1,
              errors: ["Erro ao validar arquivo. Tente novamente."],
              suggestions: ["Verifique o formato do arquivo e tente novamente"],
            }));
        } finally {
          l(!1);
        }
      }, [i, n]),
      x = (r, a) => {
        const m = a
          .slice(0, 10)
          .map((b) => b[r])
          .filter((b) => b != null);
        if (m.length === 0) return "string";
        const p = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
        if (m.every((b) => p.test(b))) return "date";
        const w = /^-?\d+\.?\d*$/;
        return m.every((b) => w.test(b.toString()))
          ? "number"
          : m.every((b) =>
                ["true", "false", "sim", "não", "yes", "no", "1", "0"].includes(
                  b.toString().toLowerCase(),
                ),
              )
            ? "boolean"
            : "string";
      },
      h = (r) => {
        const a = r.join(" ").toLowerCase();
        return a.includes("fatura") ||
          a.includes("nota fiscal") ||
          a.includes("cnpj")
          ? "varejo"
          : a.includes("paciente") ||
              a.includes("médico") ||
              a.includes("consulta")
            ? "saude"
            : a.includes("aluno") ||
                a.includes("turma") ||
                a.includes("disciplina")
              ? "educacao"
              : a.includes("matéria-prima") ||
                  a.includes("produção") ||
                  a.includes("estoque")
                ? "manufatura"
                : a.includes("cliente") ||
                    a.includes("venda") ||
                    a.includes("produto")
                  ? "varejo"
                  : "general";
      },
      c = (r) => {
        const a = r.join(" ").toLowerCase();
        return a.includes("fluxo") ||
          a.includes("caixa") ||
          a.includes("entrada") ||
          a.includes("saída") ||
          a.includes("dre") ||
          a.includes("receita") ||
          a.includes("lucro") ||
          a.includes("margem")
          ? "financeiro"
          : a.includes("venda") ||
              a.includes("cliente") ||
              a.includes("produto")
            ? "vendas"
            : a.includes("conta") ||
                a.includes("pagar") ||
                a.includes("receber")
              ? "financeiro"
              : a.includes("funcionário") ||
                  a.includes("salário") ||
                  a.includes("rh")
                ? "rh"
                : "financeiro";
      },
      v = (r, a) => {
        var S, k, R, $;
        const m = [],
          p =
            ((S = a.file_structure) == null ? void 0 : S.required_columns) ||
            [],
          w = r.headers.map((z) => z.toLowerCase().trim());
        p.forEach((z) => {
          w.includes(z.name.toLowerCase().trim()) ||
            m.push(`Coluna obrigatória ausente: ${z.name}`);
        });
        const b = ((k = a.file_structure) == null ? void 0 : k.min_rows) || 1;
        r.rows.length < b &&
          m.push(
            `Arquivo precisa ter pelo menos ${b} linhas (tem ${r.rows.length})`,
          );
        const B =
          ((R = a.file_structure) == null ? void 0 : R.max_rows) || 1 / 0;
        r.rows.length > B &&
          m.push(`Arquivo tem muitas linhas. Máximo permitido: ${B}`);
        const I =
          (($ = a.file_structure) == null ? void 0 : $.file_types) || [];
        return (
          I.length > 0 &&
            !I.includes(r.fileType) &&
            m.push(
              `Tipo de arquivo não permitido. Tipos aceitos: ${I.join(", ")}`,
            ),
          m
        );
      },
      u = (r, a) => {
        var B, I;
        const m = [],
          p = [
            ...(((B = a.file_structure) == null
              ? void 0
              : B.required_columns) || []),
            ...(((I = a.file_structure) == null
              ? void 0
              : I.optional_columns) || []),
          ].map((S) => S.name.toLowerCase()),
          w = r.headers.filter((S) => !p.includes(S.toLowerCase()));
        w.length > 0 &&
          m.push(`Colunas não mapeadas serão ignoradas: ${w.join(", ")}`);
        const b = r.rows.filter((S) =>
          S.every((k) => !k || k.toString().trim() === ""),
        );
        return (
          b.length > r.rows.length * 0.1 &&
            m.push(
              `${b.length} linhas vazias detectadas (${((b.length / r.rows.length) * 100).toFixed(1)}%)`,
            ),
          m
        );
      },
      C = (r, a) => {
        const m = [];
        (a.match_score < 80 &&
          m.push("Considere renomear algumas colunas para melhorar o matching"),
          r.rows.length < 50 &&
            m.push("Com mais dados, a análise será mais precisa"));
        const p = a.code;
        return (
          p.includes("FLUXO_CAIXA") &&
            m.push("Adicione categorias para análise mais detalhada"),
          p.includes("DRE") &&
            m.push("Inclua dados comparativos do período anterior"),
          p.includes("VENDAS") &&
            m.push(
              "Adicione informações de região e vendedor para análise geográfica",
            ),
          m
        );
      },
      A = () => {
        s != null &&
          s.template &&
          o &&
          (H.rpc("increment_template_usage", { p_template_id: s.template.id }),
          o(s.template));
      };
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsx("div", {
          className: "flex justify-center",
          children: e.jsx(_, {
            onClick: d,
            disabled: j,
            className: "w-full max-w-md",
            children: j
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className:
                        "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                    }),
                    "Validando Estrutura...",
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(J, { className: "w-4 h-4 mr-2" }),
                    "Validar e Sugerir Template",
                  ],
                }),
          }),
        }),
        s &&
          e.jsxs(f, {
            children: [
              e.jsxs(D, {
                children: [
                  e.jsxs(T, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(pe, { className: "w-5 h-5" }),
                      "Análise do Arquivo",
                    ],
                  }),
                  e.jsx(X, {
                    variant: s.isValid ? "default" : "destructive",
                    className: s.isValid ? "bg-green-100 text-green-800" : "",
                    children: s.isValid ? "Válido" : "Inválido",
                  }),
                ],
              }),
              e.jsxs(y, {
                className: "space-y-6",
                children: [
                  s.template &&
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("h4", {
                              className: "text-lg font-semibold",
                              children: "Template Sugerido",
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsxs(X, {
                                  variant: "outline",
                                  children: [
                                    "Score: ",
                                    s.template.match_score,
                                    "%",
                                  ],
                                }),
                                e.jsx(xe, {
                                  className: "w-4 h-4 text-green-600",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "bg-blue-50 p-4 rounded-lg border border-blue-200",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h5", {
                                      className: "font-semibold text-blue-900",
                                      children: s.template.name,
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm text-blue-700 mt-1",
                                      children: s.template.description,
                                    }),
                                  ],
                                }),
                                e.jsx(_, {
                                  size: "sm",
                                  onClick: A,
                                  disabled: !s.isValid,
                                  children: "Usar este Template",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "text-sm text-blue-800",
                              children: [
                                e.jsx("strong", { children: "Código:" }),
                                " ",
                                s.template.code,
                                e.jsx("br", {}),
                                e.jsx("strong", { children: "Indústria:" }),
                                " ",
                                s.template.industry,
                                e.jsx("br", {}),
                                e.jsx("strong", { children: "Categoria:" }),
                                " ",
                                s.template.category,
                              ],
                            }),
                            s.template.match_reasons.length > 0 &&
                              e.jsxs("div", {
                                className: "mt-3 pt-3 border-t border-blue-200",
                                children: [
                                  e.jsx("strong", {
                                    className: "text-sm",
                                    children: "Motivos do matching:",
                                  }),
                                  e.jsx("ul", {
                                    className: "mt-2 space-y-1 text-sm",
                                    children: s.template.match_reasons.map(
                                      (r, a) =>
                                        e.jsxs(
                                          "li",
                                          {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx(Z, {
                                                className:
                                                  "w-3 h-3 text-green-600",
                                              }),
                                              r,
                                            ],
                                          },
                                          a,
                                        ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  s.errors &&
                    s.errors.length > 0 &&
                    e.jsxs(ie, {
                      className: "border-red-200 bg-red-50",
                      children: [
                        e.jsx(ne, { className: "h-4 w-4 text-red-600" }),
                        e.jsxs(le, {
                          className: "text-red-800",
                          children: [
                            e.jsx("div", {
                              className: "font-medium mb-2",
                              children: "Erros encontrados:",
                            }),
                            e.jsx("ul", {
                              className: "space-y-1 text-sm",
                              children: s.errors.map((r, a) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-red-600 mt-0.5",
                                        children: "•",
                                      }),
                                      r,
                                    ],
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  s.warnings &&
                    s.warnings.length > 0 &&
                    e.jsxs(ie, {
                      className: "border-yellow-200 bg-yellow-50",
                      children: [
                        e.jsx(ne, { className: "h-4 w-4 text-yellow-600" }),
                        e.jsxs(le, {
                          className: "text-yellow-800",
                          children: [
                            e.jsx("div", {
                              className: "font-medium mb-2",
                              children: "Avisos:",
                            }),
                            e.jsx("ul", {
                              className: "space-y-1 text-sm",
                              children: s.warnings.map((r, a) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-yellow-600 mt-0.5",
                                        children: "•",
                                      }),
                                      r,
                                    ],
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  s.suggestions &&
                    s.suggestions.length > 0 &&
                    e.jsxs("div", {
                      className: "bg-gray-50 p-4 rounded-lg",
                      children: [
                        e.jsxs("h4", {
                          className: "font-medium mb-3 flex items-center gap-2",
                          children: [
                            e.jsx(J, { className: "w-4 h-4 text-gray-600" }),
                            "Sugestões para Melhorar",
                          ],
                        }),
                        e.jsx("ul", {
                          className: "space-y-2 text-sm",
                          children: s.suggestions.map((r, a) =>
                            e.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: "text-gray-600 mt-0.5",
                                    children: "•",
                                  }),
                                  r,
                                ],
                              },
                              a,
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
  ss = () => {
    var A;
    const {
        formData: i,
        setFormData: o,
        file: s,
        setFile: t,
        textData: j,
        setTextData: l,
        urlData: n,
        setUrlData: d,
        parsedData: x,
        setParsedData: h,
        setLoading: c,
      } = M(),
      { toast: v } = ue(),
      { t: u } = U(),
      C = async (r) => {
        var m;
        const a = (m = r.target.files) == null ? void 0 : m[0];
        if (a) {
          (t(a), c(!0));
          try {
            const p = await Ie(a);
            (h(p),
              v({
                title: u("builder.toasts.file_uploaded_title"),
                description: u("builder.toasts.file_uploaded_desc", {
                  name: a.name,
                }),
              }));
          } catch (p) {
            const w =
              p instanceof Error ? p.message : u("builder.errors.ia_unknown");
            v({
              title: u("common.error_title"),
              description: w,
              variant: "destructive",
            });
          } finally {
            c(!1);
          }
        }
      };
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: u("builder.steps.data.title"),
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: u("builder.steps.data.desc"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: [
            e.jsx(f, {
              className: `cursor-pointer transition-all card-hover ${i.dataSource === "upload" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => o((r) => ({ ...r, dataSource: "upload" })),
              children: e.jsxs(D, {
                className: "text-center",
                children: [
                  e.jsx($e, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  e.jsx(T, {
                    className: "text-lg",
                    children: u("builder.steps.data.sources.upload"),
                  }),
                  e.jsx(Q, {
                    children: u("builder.steps.data.sources.upload_desc"),
                  }),
                ],
              }),
            }),
            e.jsx(f, {
              className: `cursor-pointer transition-all card-hover ${i.dataSource === "text" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => o((r) => ({ ...r, dataSource: "text" })),
              children: e.jsxs(D, {
                className: "text-center",
                children: [
                  e.jsx(ze, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  e.jsx(T, {
                    className: "text-lg",
                    children: u("builder.steps.data.sources.paste"),
                  }),
                  e.jsx(Q, {
                    children: u("builder.steps.data.sources.paste_desc"),
                  }),
                ],
              }),
            }),
            e.jsx(f, {
              className: `cursor-pointer transition-all card-hover ${i.dataSource === "url" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => o((r) => ({ ...r, dataSource: "url" })),
              children: e.jsxs(D, {
                className: "text-center",
                children: [
                  e.jsx(de, { className: "w-8 h-8 mx-auto mb-2 text-primary" }),
                  e.jsx(T, {
                    className: "text-lg",
                    children: u("builder.steps.data.sources.url"),
                  }),
                  e.jsx(Q, {
                    children: u("builder.steps.data.sources.url_desc"),
                  }),
                ],
              }),
            }),
          ],
        }),
        i.dataSource === "upload" &&
          e.jsx(f, {
            children: e.jsxs(y, {
              className: "p-6",
              children: [
                e.jsxs("div", {
                  className:
                    "border-2 border-dashed border-muted rounded-xl p-8 text-center",
                  children: [
                    e.jsx(ce, {
                      className: "w-12 h-12 mx-auto mb-4 text-muted-foreground",
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium",
                          children: u("builder.steps.data.dropzone.title"),
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: u("builder.steps.data.dropzone.hint"),
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () =>
                            v({
                              title: u("builder.toasts.model_downloaded_title"),
                              description: u(
                                "builder.toasts.model_downloaded_desc",
                              ),
                            }),
                          className:
                            "mt-2 text-xs text-primary hover:underline font-medium flex items-center justify-center gap-1 mx-auto",
                          children: [
                            e.jsx(ce, { className: "w-3 h-3" }),
                            u("builder.steps.data.example"),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(ee, {
                      type: "file",
                      className: "mt-4 cursor-pointer",
                      accept: ".xlsx,.xls,.csv,.pdf,.docx",
                      onChange: C,
                    }),
                  ],
                }),
                s &&
                  e.jsx("div", {
                    className:
                      "mt-4 p-4 bg-success/10 border border-success/20 rounded-lg",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Z, { className: "w-5 h-5 text-success" }),
                        e.jsxs("p", {
                          className: "text-sm font-medium text-success",
                          children: [
                            u("builder.steps.data.dropzone.success"),
                            ": ",
                            s.name,
                          ],
                        }),
                      ],
                    }),
                  }),
                s &&
                  x &&
                  e.jsx("div", {
                    className: "mt-6",
                    children: e.jsx(es, {
                      fileData: {
                        headers: x.headers,
                        rows: x.rows,
                        fileName: s.name,
                        fileType:
                          ((A = s.name.split(".").pop()) == null
                            ? void 0
                            : A.toLowerCase()) || "csv",
                      },
                      onTemplateSelected: (r) => {
                        console.log("Template selecionado:", r);
                      },
                    }),
                  }),
              ],
            }),
          }),
        i.dataSource === "text" &&
          e.jsx(f, {
            children: e.jsx(y, {
              className: "p-6",
              children: e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(W, {
                    htmlFor: "textData",
                    children: u("builder.steps.data.labels.paste_area"),
                  }),
                  e.jsx(he, {
                    id: "textData",
                    value: j,
                    onChange: (r) => l(r.target.value),
                    placeholder: u(
                      "builder.steps.data.labels.paste_placeholder",
                    ),
                    rows: 12,
                    className: "resize-none",
                  }),
                  j &&
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        j.length,
                        " ",
                        u("builder.steps.data.labels.chars"),
                      ],
                    }),
                ],
              }),
            }),
          }),
        i.dataSource === "url" &&
          e.jsx(f, {
            children: e.jsx(y, {
              className: "p-6",
              children: e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(W, {
                    htmlFor: "urlData",
                    children: u("builder.steps.data.labels.url_input"),
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx(de, {
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                      }),
                      e.jsx(ee, {
                        id: "urlData",
                        type: "url",
                        value: n,
                        onChange: (r) => d(r.target.value),
                        placeholder: u(
                          "builder.steps.data.labels.url_placeholder",
                        ),
                        className: "pl-10",
                      }),
                    ],
                  }),
                  e.jsx("p", {
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
  ts = () => {
    const {
        formData: i,
        file: o,
        textData: s,
        selectedTemplate: t,
        setSelectedTemplate: j,
        setBlocks: l,
      } = M(),
      { t: n } = U();
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: n("builder.steps.template.title"),
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: n("builder.steps.template.desc"),
            }),
          ],
        }),
        e.jsxs(f, {
          children: [
            e.jsx(D, {
              children: e.jsxs(T, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Z, { className: "w-5 h-5 text-success" }),
                  n("builder.steps.template.preview_title"),
                ],
              }),
            }),
            e.jsx(y, {
              children: e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                children: [
                  e.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.source_label"),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          i.dataSource === "upload"
                            ? o == null
                              ? void 0
                              : o.name
                            : n("builder.steps.data.sources.paste"),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.size_label"),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          i.dataSource === "upload"
                            ? `${Math.round(((o == null ? void 0 : o.size) || 0) / 1024)} KB`
                            : `${s.length} chars`,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: n("builder.steps.template.status_label"),
                      }),
                      e.jsx("p", {
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
        e.jsxs("div", {
          children: [
            e.jsx("h3", {
              className: "text-lg font-semibold mb-4",
              children: "Escolha um Modelo",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: ge.map((d) =>
                e.jsxs(
                  f,
                  {
                    className: _e(
                      "cursor-pointer transition-all duration-300 card-hover border-2",
                      t === d.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20 shadow-lg"
                        : "border-border/40",
                    ),
                    onClick: () => {
                      (j(d.id), l(d.defaultBlocks));
                    },
                    children: [
                      e.jsxs(D, {
                        className: "pb-3",
                        children: [
                          e.jsx(T, {
                            className: "text-lg font-bold",
                            children: d.name,
                          }),
                          e.jsx(Q, {
                            className: "text-xs",
                            children: d.description,
                          }),
                        ],
                      }),
                      e.jsx(y, {
                        children: e.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: d.defaultBlocks.map((x, h) =>
                            e.jsx(
                              X,
                              {
                                variant: "secondary",
                                className:
                                  "text-[10px] uppercase font-bold tracking-wider opacity-70",
                                children: x.type,
                              },
                              h,
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
  as = () => {
    const { formData: i, setFormData: o } = M(),
      { t: s } = U();
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: s("builder.steps.generation.title"),
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: s("builder.steps.generation.desc"),
            }),
          ],
        }),
        e.jsx(f, {
          children: e.jsxs(y, {
            className: "p-6 space-y-6",
            children: [
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsxs(W, {
                        htmlFor: "title",
                        children: [
                          s("builder.steps.generation.form.title_label"),
                          " *",
                        ],
                      }),
                      e.jsx(ee, {
                        id: "title",
                        value: i.title,
                        onChange: (t) =>
                          o((j) => ({ ...j, title: t.target.value })),
                        placeholder: s(
                          "builder.steps.generation.form.title_placeholder",
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: s("builder.steps.template.status_label"),
                      }),
                      e.jsx("p", {
                        className: "text-success",
                        children: s("builder.steps.template.status_val"),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(W, {
                        htmlFor: "category",
                        children: s("builder.steps.generation.form.cat_label"),
                      }),
                      e.jsxs(Ge, {
                        value: i.category,
                        onValueChange: (t) => o((j) => ({ ...j, category: t })),
                        children: [
                          e.jsx(He, {
                            children: e.jsx(Qe, {
                              placeholder: s(
                                "builder.steps.generation.form.cat_placeholder",
                              ),
                            }),
                          }),
                          e.jsxs(Xe, {
                            children: [
                              e.jsx(V, {
                                value: "Executivo",
                                children: s("reports.categories.executive"),
                              }),
                              e.jsx(V, {
                                value: "Vendas",
                                children: s("reports.categories.sales"),
                              }),
                              e.jsx(V, {
                                value: "Financeiro",
                                children: s("reports.categories.financial"),
                              }),
                              e.jsx(V, {
                                value: "Marketing",
                                children: s("reports.categories.marketing"),
                              }),
                              e.jsx(V, {
                                value: "Operacional",
                                children: s("reports.categories.operational"),
                              }),
                              e.jsx(V, {
                                value: "RH",
                                children: s("reports.categories.rh"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(W, {
                    htmlFor: "description",
                    children: s("builder.steps.generation.form.desc_label"),
                  }),
                  e.jsx(he, {
                    id: "description",
                    value: i.description,
                    onChange: (t) =>
                      o((j) => ({ ...j, description: t.target.value })),
                    placeholder: s(
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
  rs = () => {
    const { blocks: i, setBlocks: o, loading: s } = M(),
      { t } = U(),
      j = (n) => {
        o((d) => d.filter((x) => x.id !== n));
      },
      l = (n, d) => {
        const x = n - 1;
        if (x < 0 || x >= i.length) return;
        const h = [...i],
          [c] = h.splice(n, 1);
        (h.splice(x, 0, c), o(h));
      };
    return s && i.length === 0
      ? e.jsxs("div", {
          className: "space-y-6 py-12 text-center",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4",
            }),
            e.jsx("h2", {
              className: "text-xl font-semibold",
              children: t("builder.steps.blocks.loading_title"),
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: t("builder.steps.blocks.loading_desc"),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-semibold mb-2",
                  children: t("builder.steps.blocks.title"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground",
                  children: t("builder.steps.blocks.desc"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
              children: [
                e.jsxs("div", {
                  className: "lg:col-span-3 space-y-4",
                  children: [
                    i.map((n, d) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "relative group animate-in fade-in slide-in-from-bottom-2 duration-300",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute -left-12 top-0 bottom-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                              children: e.jsx(_, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "h-8 w-8 p-0 cursor-grab active:cursor-grabbing",
                                onClick: () => {},
                                children: e.jsx(qe, {
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                              }),
                            }),
                            e.jsxs(f, {
                              className:
                                "border-border/40 overflow-hidden group/card relative",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "absolute top-2 right-2 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-20",
                                  children: [
                                    e.jsxs(_, {
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm",
                                      onClick: () => l(d),
                                      disabled: d === 0,
                                      children: [
                                        e.jsx(oe, {
                                          className: "h-3 w-3 rotate-45",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    e.jsx(_, {
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm text-destructive hover:bg-destructive/10",
                                      onClick: () => j(n.id),
                                      children: e.jsx(Re, {
                                        className: "h-3 w-3",
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-muted/5 p-2 px-4 border-b border-border/20 flex justify-between items-center",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60",
                                    children: n.type,
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "p-4 pointer-events-none opacity-80 scale-[0.98]",
                                  children: e.jsx(je, { blocks: [n] }),
                                }),
                              ],
                            }),
                          ],
                        },
                        n.id,
                      ),
                    ),
                    e.jsxs(_, {
                      variant: "outline",
                      className:
                        "w-full border-dashed py-8 border-2 group hover:border-primary/50 hover:bg-primary/5",
                      children: [
                        e.jsx(oe, {
                          className:
                            "mr-2 h-4 w-4 group-hover:scale-110 transition-transform",
                        }),
                        t("builder.steps.blocks.add_block"),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsxs(f, {
                      children: [
                        e.jsx(D, {
                          className: "pb-3",
                          children: e.jsxs(T, {
                            className: "text-base flex items-center gap-2",
                            children: [
                              e.jsx(Pe, { className: "h-4 w-4" }),
                              t("builder.steps.blocks.ai_hint_title"),
                            ],
                          }),
                        }),
                        e.jsx(y, {
                          children: e.jsx("p", {
                            className:
                              "text-sm text-muted-foreground leading-relaxed",
                            children: t("builder.steps.blocks.ai_hint_body"),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "p-4 bg-primary/5 rounded-xl border border-primary/10",
                      children: [
                        e.jsxs("h4", {
                          className:
                            "text-sm font-bold text-primary mb-2 flex items-center gap-2",
                          children: [
                            e.jsx(L, { className: "h-4 w-4" }),
                            t("builder.steps.blocks.auto_mapping_title"),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-[11px] text-muted-foreground",
                          children: t("builder.steps.blocks.auto_mapping_body"),
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
  G = [
    { id: 1, text: "Lendo e estruturando dados brutos...", icon: Ue },
    { id: 2, text: "Cruzando tendências e métricas...", icon: Y },
    { id: 3, text: "Identificando gatilhos de crescimento...", icon: xe },
    { id: 4, text: "Redigindo recomendações estratégicas...", icon: se },
    { id: 5, text: "Finalizando design do relatório...", icon: L },
  ],
  is = ({ isProcessing: i }) => {
    const [o, s] = g.useState(0),
      [t, j] = g.useState([]);
    return (
      g.useEffect(() => {
        if (!i) {
          (s(0), j([]));
          return;
        }
        const l = setInterval(() => {
          s((n) => (n < G.length - 1 ? (j((d) => [...d, G[n].id]), n + 1) : n));
        }, 2500);
        return () => clearInterval(l);
      }, [i]),
      i
        ? e.jsx(f, {
            className:
              "border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in duration-300",
            children: e.jsx(y, {
              className: "p-6",
              children: e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-primary/20 rounded-full animate-ping",
                      }),
                      e.jsx("div", {
                        className: "relative bg-primary rounded-full p-4",
                        children: e.jsx(se, {
                          className: "h-8 w-8 text-white animate-pulse",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-center space-y-2",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold text-foreground",
                        children: "A Magia está Acontecendo",
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground max-w-xs mx-auto",
                        children:
                          "Nossa inteligência está transformando seus dados em um relatório profissional de elite.",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "w-full space-y-4 max-w-sm",
                    children: G.map((l, n) => {
                      const d = t.includes(l.id),
                        x = n === o;
                      return e.jsxs(
                        "div",
                        {
                          className: `flex items-center gap-3 transition-all duration-500 ${x ? "translate-x-2" : d ? "opacity-60" : "opacity-30"}`,
                          children: [
                            d
                              ? e.jsx(Ve, {
                                  className:
                                    "h-5 w-5 text-success fill-success/10",
                                })
                              : x
                                ? e.jsx(Le, {
                                    className:
                                      "h-5 w-5 text-primary animate-spin",
                                  })
                                : e.jsx(l.icon, {
                                    className: "h-5 w-5 text-muted-foreground",
                                  }),
                            e.jsx("span", {
                              className: `text-sm ${x ? "font-bold text-primary" : "text-muted-foreground"}`,
                              children: l.text,
                            }),
                          ],
                        },
                        l.id,
                      );
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "w-full bg-muted h-1 rounded-full overflow-hidden",
                    children: e.jsx("div", {
                      className:
                        "bg-primary h-full transition-all duration-1000 ease-out",
                      style: { width: `${((o + 1) / G.length) * 100}%` },
                    }),
                  }),
                ],
              }),
            }),
          })
        : null
    );
  },
  ls = ({ onConfirm: i }) => {
    var v;
    const {
        formData: o,
        file: s,
        textData: t,
        selectedTemplate: j,
        loading: l,
        aiResult: n,
        diagnosticResult: d,
        analysisError: x,
        blocks: h,
      } = M(),
      { t: c } = U();
    if (n || (h && h.length > 0)) {
      const u = d
          ? {
              id: "preview-diag",
              reportId: "preview-report",
              createdAt: new Date().toISOString(),
              ...d.diagnostic,
            }
          : null,
        C = d
          ? {
              id: "preview-prio",
              diagnosticId: "preview-diag",
              createdAt: new Date().toISOString(),
              status: "suggested",
              ...d.suggestedPriority,
            }
          : null;
      return e.jsxs("div", {
        className: "space-y-8",
        children: [
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4",
                children: [
                  e.jsx(L, { className: "w-4 h-4" }),
                  c("builder.steps.preview.ai_badge"),
                ],
              }),
              e.jsx("h2", {
                className: "text-2xl font-bold mb-2",
                children: o.title || c("builder.steps.preview.title"),
              }),
              o.category &&
                e.jsx(X, { variant: "secondary", children: o.category }),
            ],
          }),
          (n == null ? void 0 : n.summary) &&
            e.jsxs(f, {
              className: "border-primary/20 bg-primary/5",
              children: [
                e.jsx(D, {
                  className: "pb-3",
                  children: e.jsxs(T, {
                    className: "text-lg flex items-center gap-2",
                    children: [
                      e.jsx(J, { className: "w-5 h-5 text-primary" }),
                      c("report_detail.content.executive_summary"),
                    ],
                  }),
                }),
                e.jsx(y, {
                  children: e.jsx("p", {
                    className: "text-sm leading-relaxed text-foreground/90",
                    children: n.summary,
                  }),
                }),
              ],
            }),
          e.jsx("div", {
            className:
              "animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8",
            children: e.jsx(je, { blocks: h }),
          }),
          u &&
            C &&
            e.jsxs("div", {
              className:
                "pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    e.jsx(Y, {
                      className: "h-5 w-5 text-primary fill-primary/20",
                    }),
                    e.jsx("h3", {
                      className: "text-lg font-bold tracking-tight",
                      children: c("builder.steps.preview.diagnostic_title"),
                    }),
                  ],
                }),
                e.jsx(Ze, { diagnostic: u }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col justify-center space-y-2 p-4",
                      children: [
                        e.jsx("h4", {
                          className:
                            "font-bold text-sm uppercase tracking-wider text-muted-foreground",
                          children: c(
                            "builder.steps.preview.recommended_priority",
                          ),
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: c(
                            "builder.steps.preview.recommended_priority_desc",
                          ),
                        }),
                      ],
                    }),
                    e.jsx(Je, { priority: C }),
                  ],
                }),
              ],
            }),
          e.jsx(f, {
            className: "mt-12 bg-muted/30 border-dashed",
            children: e.jsxs(y, {
              className:
                "p-6 flex flex-col sm:flex-row items-center gap-4 justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "font-medium",
                      children: c("builder.steps.preview.save_card_title"),
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: c("builder.steps.preview.save_card_desc"),
                    }),
                  ],
                }),
                e.jsx(_, {
                  onClick: i,
                  disabled: l,
                  size: "lg",
                  className: "w-full sm:w-auto",
                  children: c(
                    l
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
    return l && !n
      ? e.jsx("div", {
          className: "max-w-md mx-auto py-12",
          children: e.jsx(is, { isProcessing: l }),
        })
      : x
        ? e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsx(f, {
                className: "border-destructive/30 bg-destructive/5",
                children: e.jsxs(y, {
                  className: "p-6 flex items-start gap-3",
                  children: [
                    e.jsx(Me, {
                      className:
                        "w-6 h-6 text-destructive mt-0.5 flex-shrink-0",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-semibold text-destructive",
                          children: c("common.error_title"),
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: x,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx(_, {
                onClick: i,
                variant: "outline",
                className: "w-full",
                children: c("common.back"),
              }),
            ],
          })
        : e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "text-center",
                children: [
                  e.jsx("h2", {
                    className: "text-xl md:text-2xl font-semibold mb-2",
                    children: c("builder.steps.preview.title"),
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children: c("builder.steps.preview.desc"),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs(f, {
                    children: [
                      e.jsx(D, {
                        children: e.jsx(T, {
                          className: "text-lg",
                          children: c("report_detail.sidebar.info_title"),
                        }),
                      }),
                      e.jsxs(y, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: c(
                                  "builder.steps.generation.form.title_label",
                                ),
                              }),
                              e.jsx("p", {
                                className: "font-medium",
                                children: o.title || "—",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: c(
                                  "builder.steps.generation.form.cat_label",
                                ),
                              }),
                              e.jsx("p", { children: o.category || "—" }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: c("builder.sidebar.ai_will_do.title"),
                              }),
                              e.jsx("p", {
                                children:
                                  ((v = ge.find((u) => u.id === j)) == null
                                    ? void 0
                                    : v.name) || "—",
                              }),
                            ],
                          }),
                          o.description &&
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: c(
                                    "builder.steps.generation.form.desc_label",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: o.description,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(f, {
                    children: [
                      e.jsx(D, {
                        children: e.jsx(T, {
                          className: "text-lg",
                          children: c("builder.steps.template.preview_title"),
                        }),
                      }),
                      e.jsxs(y, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: c(
                                  "builder.steps.template.source_label",
                                ),
                              }),
                              e.jsx("p", {
                                children:
                                  o.dataSource === "upload"
                                    ? c("builder.steps.data.sources.upload")
                                    : c("builder.steps.data.sources.paste"),
                              }),
                            ],
                          }),
                          s &&
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: c("common.active"),
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: s.name,
                                }),
                              ],
                            }),
                          t &&
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: c(
                                    "builder.steps.data.labels.chars",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: t.length,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(f, {
                className:
                  "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20",
                children: e.jsx(y, {
                  className: "p-6",
                  children: e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx(L, {
                        className: "w-6 h-6 text-primary mt-0.5 flex-shrink-0",
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h4", {
                            className: "font-semibold text-primary mb-2",
                            children: c("builder.steps.preview.ai_engine"),
                          }),
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: c(
                              "builder.steps.preview.ai_processing_desc",
                            ),
                          }),
                          e.jsx(_, {
                            onClick: i,
                            disabled: l,
                            className: "w-full md:w-auto",
                            size: "lg",
                            children: l
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                    }),
                                    c("builder.steps.preview.cta_loading"),
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(Y, { className: "mr-2 h-5 w-5" }),
                                    c("builder.steps.preview.cta_initial"),
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
  ns = () => {
    const [i] = Se(),
      o = ke(),
      { toast: s } = ue(),
      { t } = U(),
      j = [
        {
          title: t("builder.steps.summary.data.title"),
          description: t("builder.steps.summary.data.desc"),
          icon: Oe,
          key: "data",
        },
        {
          title: t("builder.steps.summary.model.title"),
          description: t("builder.steps.summary.model.desc"),
          icon: se,
          key: "model",
        },
        {
          title: t("builder.steps.summary.blocks.title"),
          description: t("builder.steps.summary.blocks.desc"),
          icon: L,
          key: "blocks",
        },
        {
          title: t("builder.steps.summary.generation.title"),
          description: t("builder.steps.summary.generation.desc"),
          icon: pe,
          key: "generation",
        },
        {
          title: t("builder.steps.summary.final.title"),
          description: t("builder.steps.summary.final.desc"),
          icon: Ke,
          key: "final",
        },
      ],
      {
        step: l,
        setStep: n,
        selectedTemplate: d,
        setSelectedTemplate: x,
        formData: h,
        setFormData: c,
        file: v,
        textData: u,
        urlData: C,
        loading: A,
        setLoading: r,
        setParsedData: a,
        aiResult: m,
        diagnosticResult: p,
        setAnalysisError: w,
        blocks: b,
        extractedKPIs: B,
        enrichedDiagnostic: I,
        runAIAnalysis: S,
      } = M();
    (Fe(),
      g.useEffect(() => {
        const N = i.get("template");
        if (N) {
          x(N);
          const E =
            templates == null ? void 0 : templates.find((F) => F.id === N);
          E && c((F) => ({ ...F, category: E.category, title: E.name }));
        }
      }, [i, x, c]));
    const k = async () => {
        if (l === 1) {
          if (h.dataSource === "upload" && !v) {
            s({
              title: t("builder.toasts.data_required_title"),
              description: t("builder.toasts.upload_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (h.dataSource === "text" && !u.trim()) {
            s({
              title: t("builder.toasts.data_required_title"),
              description: t("builder.toasts.text_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (h.dataSource === "url" && (!C.trim() || !C.startsWith("http"))) {
            s({
              title: t("builder.toasts.data_required_title"),
              description: t("builder.toasts.url_required_desc"),
              variant: "destructive",
            });
            return;
          }
        }
        if (l === 2) {
          if (!d) {
            s({
              title: t("builder.toasts.select_template_title"),
              description: t("builder.toasts.select_template_desc"),
              variant: "destructive",
            });
            return;
          }
          (n(l + 1), S());
          return;
        }
        if (l === 4 && !h.title.trim()) {
          s({
            title: t("builder.toasts.title_required_title"),
            description: t("builder.toasts.title_required_desc"),
            variant: "destructive",
          });
          return;
        }
        n(l + 1);
      },
      R = () => {
        n(l - 1);
      },
      $ = async () => {
        r(!0);
        try {
          const {
            data: { user: N },
          } = await H.auth.getUser();
          if (!N) throw new Error("Usuário não autenticado");
          const E = await Ee(
            {
              title: h.title,
              description: h.description,
              category: h.category,
              template_id: d,
              blocks: b,
              status: "completed",
            },
            B,
            I || (p == null ? void 0 : p.diagnostic),
            N.id,
          );
          (s({
            title: t("builder.toasts.save_success_title"),
            description: `${t("builder.toasts.save_success_desc")} (${E.metricsCount} métricas extraídas, ${E.challengeCreated ? "desafio criado" : "desafio atualizado"})`,
          }),
            o("/app"));
        } catch (N) {
          s({
            title: t("builder.errors.save_title"),
            description:
              (N == null ? void 0 : N.message) ||
              t("builder.errors.save_generic"),
            variant: "destructive",
          });
        } finally {
          r(!1);
        }
      },
      z = (l / 5) * 100;
    return e.jsxs("div", {
      className: "min-h-screen bg-gradient-subtle flex flex-col",
      children: [
        e.jsxs("header", {
          className:
            "sticky top-0 z-50 bg-background/95 backdrop-blur border-b",
          children: [
            e.jsxs("div", {
              className:
                "container mx-auto px-4 h-16 flex items-center justify-between",
              children: [
                e.jsxs(_, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => o("/app"),
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(me, { className: "h-4 w-4" }),
                    e.jsx("span", {
                      className: "hidden sm:inline",
                      children: t("common.back"),
                    }),
                  ],
                }),
                e.jsx("h1", {
                  className: "text-lg md:text-xl font-semibold",
                  children: t("builder.title"),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-sm",
                  children: [
                    e.jsx("span", {
                      className: "hidden sm:inline text-muted-foreground",
                      children: t("builder.step_indicator.prefix"),
                    }),
                    e.jsx("span", {
                      className: "font-medium",
                      children: t("builder.step_indicator.value", {
                        current: l,
                        total: 5,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "h-1 bg-muted",
              children: e.jsx("div", {
                className:
                  "h-full bg-primary transition-all duration-300 ease-out",
                style: { width: `${z}%` },
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 flex overflow-hidden",
          children: e.jsxs("div", {
            className: "flex flex-1 gap-0 overflow-hidden",
            children: [
              e.jsx("aside", {
                className:
                  "hidden lg:block w-80 p-4 space-y-4 border-r bg-muted/10 overflow-y-auto",
                children: e.jsxs(f, {
                  className: "border-none shadow-none bg-transparent",
                  children: [
                    e.jsx(D, {
                      className: "px-2",
                      children: e.jsx(T, {
                        className: "text-lg",
                        children: t("builder.sidebar.summary_title"),
                      }),
                    }),
                    e.jsx(y, {
                      className: "p-2",
                      children: e.jsx("div", {
                        className: "space-y-3",
                        children: j.map((N, E) => {
                          const F = E + 1,
                            O = F === l,
                            P = F < l;
                          return e.jsxs(
                            "div",
                            {
                              className: `flex items-start gap-3 p-3 rounded-lg transition-all ${O ? "bg-primary/10 border border-primary/20 shadow-sm" : P ? "bg-success/5" : "bg-background/50 text-muted-foreground"}`,
                              children: [
                                e.jsx("div", {
                                  className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${P ? "bg-success text-success-foreground" : O ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
                                  children: P
                                    ? e.jsx(Z, { className: "w-4 h-4" })
                                    : F,
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className: `font-medium text-sm truncate ${O ? "text-primary" : ""}`,
                                      children: N.title,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] mt-0.5 line-clamp-1",
                                      children: N.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            N.key,
                          );
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("main", {
                className: "flex-1 min-w-0 overflow-y-auto",
                children: e.jsxs("div", {
                  className:
                    "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in space-y-6",
                  children: [
                    l === 1 &&
                      e.jsxs("div", {
                        className:
                          "bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3 mb-6",
                        children: [
                          e.jsx(L, {
                            className:
                              "h-5 w-5 text-primary flex-shrink-0 mt-0.5",
                          }),
                          e.jsxs("p", {
                            className: "text-sm text-primary/90",
                            children: [
                              e.jsxs("strong", {
                                children: [
                                  t("builder.sidebar.consultant_hint"),
                                  ":",
                                ],
                              }),
                              " ",
                              t("builder.sidebar.ai_hints.step1"),
                            ],
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "animate-fade-in pb-20",
                      children: [
                        l === 1 && e.jsx(ss, {}),
                        l === 2 && e.jsx(ts, {}),
                        l === 3 && e.jsx(rs, {}),
                        l === 4 && e.jsx(as, {}),
                        l === 5 && e.jsx(ls, { onConfirm: $ }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-40",
          children: e.jsxs("div", {
            className: "flex gap-3",
            children: [
              l > 1 &&
                e.jsxs(_, {
                  variant: "outline",
                  onClick: R,
                  className: "flex-1",
                  children: [
                    e.jsx(me, { className: "mr-2 h-4 w-4" }),
                    t("common.back"),
                  ],
                }),
              l < 5
                ? e.jsxs(_, {
                    onClick: k,
                    className: "flex-1",
                    children: [
                      t("common.next"),
                      e.jsx(We, { className: "ml-2 h-4 w-4" }),
                    ],
                  })
                : e.jsx(_, {
                    onClick: $,
                    disabled: A,
                    className: "flex-1",
                    children: t(
                      A ? "common.processing" : "builder.preview.cta_initial",
                    ),
                  }),
            ],
          }),
        }),
      ],
    });
  };
function Es() {
  return e.jsx(Ye, { children: e.jsx(ns, {}) });
}
export { Es as default };
