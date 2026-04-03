var ve = Object.defineProperty;
var be = (t, o, r) =>
  o in t
    ? ve(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[o] = r);
var $ = (t, o, r) => be(t, typeof o != "symbol" ? o + "" : o, r);
import {
  s as y,
  j as e,
  c as C,
  T as we,
  g as b,
  h as w,
  i as N,
  B as A,
  u as Ne,
  b as ye,
} from "./index-DJVek99o.js";
import { r as g } from "./vendor-Bp-AcFIh.js";
import { u as de } from "./useMutation-1mVySGEi.js";
import {
  a as P,
  e as ee,
  s as se,
  c as Ce,
  p as Ee,
} from "./fileParserService-CWCtn7ZM.js";
import { P as Te } from "./progress-CD8SWWEy.js";
import {
  bh as H,
  q as ue,
  U as me,
  y as te,
  J as W,
  X as _e,
  L as Ae,
  e as xe,
  W as pe,
  ao as De,
} from "./utils-BrIGbSZG.js";
import { C as R, b as z, c as M, d as Y, a as L } from "./card-Ekw6AZkO.js";
import { u as ke } from "./useCurrentOrganization-QE33f3lM.js";
import "./router-Db_Yswnp.js";
import "./useQuery-lOGkLDRM.js";
const Se = "https://api.unstructuredapp.io/general/v0/general",
  re = 3,
  ae = 1e3,
  ie = 6e4;
async function ne(t) {
  return new Promise((o) => setTimeout(o, t));
}
class Fe {
  constructor() {
    $(this, "apiKey");
    $(this, "baseUrl");
    ((this.apiKey = ""),
      (this.baseUrl = Se),
      this.apiKey || console.warn("UNSTRUCTURED_API_KEY não configurada"));
  }
  async extractElements(o, r) {
    if (!this.apiKey) throw new Error("UNSTRUCTURED_API_KEY não configurada");
    const n = {
      files: [{ url: o }],
      strategy: (r == null ? void 0 : r.strategy) || "auto",
      extract_table_as_html: (r == null ? void 0 : r.extractTableAsHtml) ?? !0,
      include_image_base64: (r == null ? void 0 : r.includeImageBase64) ?? !1,
    };
    let l = null;
    for (let i = 1; i <= re; i++)
      try {
        const a = new AbortController(),
          x = setTimeout(() => a.abort(), ie),
          c = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
              "Api-Key": this.apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(n),
            signal: a.signal,
          });
        if ((clearTimeout(x), c.status === 429)) {
          const p = c.headers.get("Retry-After"),
            m = p ? parseInt(p) * 1e3 : ae * i;
          (console.warn(`Rate limited. Waiting ${m}ms before retry.`),
            await ne(m));
          continue;
        }
        if (!c.ok) {
          const p = await c.text();
          throw new Error(`Unstructured API error: ${c.status} - ${p}`);
        }
        const d = await c.json();
        if (!d.elements || !Array.isArray(d.elements))
          throw new Error("Resposta inválida da API Unstructured");
        return d.elements.map(this.mapElement);
      } catch (a) {
        (a instanceof Error && a.name === "AbortError"
          ? (l = new Error(`Timeout após ${ie / 1e3}s`))
          : (l = a),
          console.warn(`Unstructured attempt ${i} failed:`, a),
          i < re && (await ne(ae * i)));
      }
    throw l || new Error("Falha após múltiplas tentativas");
  }
  async extractFromStorage(o, r) {
    const { data: n, error: l } = await y.storage
      .from("documents")
      .createSignedUrl(o, 3600);
    if (l || !(n != null && n.signedUrl))
      throw new Error(
        `Erro ao obter URL do arquivo: ${l == null ? void 0 : l.message}`,
      );
    return this.extractElements(n.signedUrl);
  }
  mapElement(o) {
    const r = o.metadata;
    return {
      type: o.type || "NarrativeText",
      text: o.text || "",
      metadata: {
        page_number: r == null ? void 0 : r.page_number,
        table_as_json: r == null ? void 0 : r.table_as_json,
        image_base64: r == null ? void 0 : r.image_base64,
        filename: r == null ? void 0 : r.filename,
      },
    };
  }
  getSupportedTypes() {
    return [
      ".pdf",
      ".docx",
      ".doc",
      ".pptx",
      ".ppt",
      ".xlsx",
      ".xls",
      ".csv",
      ".txt",
      ".eml",
      ".msg",
      ".html",
      ".json",
    ];
  }
}
const qe = new Fe(),
  le = 50;
class Ue {
  constructor(o) {
    $(this, "config");
    this.config = o || {};
  }
  async processDocument(o, r, n, l) {
    var c;
    const i = Date.now(),
      a = [];
    let x = null;
    try {
      if (!n)
        throw new Error(
          "Organização não especificada. Selecione uma organização primeiro.",
        );
      const { data: d, error: p } = await y
        .from("organizations")
        .select("id")
        .eq("id", n)
        .single();
      if (p || !d)
        throw new Error(
          "Organização não encontrada. Verifique se você tem acesso.",
        );
      if (
        (l == null ||
          l({
            status: "queued",
            progress: 10,
            message: "Processando arquivo...",
          }),
        o.size === 0)
      )
        throw new Error("Arquivo vazio. Carregue um arquivo com conteúdo.");
      if (o.size > le * 1024 * 1024)
        throw new Error(`Arquivo muito grande. Máximo: ${le}MB`);
      l == null ||
        l({
          status: "queued",
          progress: 20,
          message: "Enviando para o storage...",
        });
      const m = `${n}/${Date.now()}_${o.name}`,
        { error: j } = await y.storage.from("documents").upload(m, o);
      if (j) throw new Error(`Erro ao fazer upload: ${j.message}`);
      ((x = m),
        l == null ||
          l({
            status: "extracting",
            progress: 30,
            message: "Extraindo conteúdo...",
          }));
      const v = await qe.extractFromStorage(m, n);
      if (v.length === 0)
        throw new Error("Não foi possível extrair conteúdo do arquivo");
      l == null ||
        l({ status: "parsing", progress: 50, message: "Analisando com IA..." });
      const { data: E } = await y
          .from("company_blueprints")
          .select("*")
          .eq("organization_id", n)
          .single(),
        { data: D } = await y
          .from("library_kpis")
          .select("code, title, unit")
          .limit(50),
        T = {
          blueprint: E
            ? {
                industry_sector: E.industry_sector,
                business_model: E.business_model,
              }
            : void 0,
          kpiLibrary: D || [],
        },
        O = v.map((F) => F.text).join(`

`),
        S = await P([{ type: "text", content: O }], "Extração de KPIs", T);
      l == null ||
        l({ status: "parsing", progress: 70, message: "Extraindo KPIs..." });
      const q = ee(S);
      q.length === 0 && a.push("Nenhum KPI foi extraído do documento");
      const K = {
        title:
          ((c = S.summary) == null ? void 0 : c.substring(0, 50)) ||
          "Análise Automática",
        description: S.summary || "Análise concluída",
        challenge_code: "AUTO_ANALYSIS",
        severity: "low",
        confidence: 0.8,
      };
      l == null ||
        l({ status: "mapping", progress: 85, message: "Salvando..." });
      const X = (S.blocks || []).map((F) => ({
          type: F.type,
          content: JSON.stringify(F),
        })),
        B = {
          title: `Análise - ${o.name}`,
          description: "Relatório gerado automaticamente",
          category: "auto_analysis",
          blocks: X,
          status: "completed",
        },
        U = await se(B, q, K, r);
      return (
        l == null ||
          l({ status: "completed", progress: 100, message: "Concluído!" }),
        {
          success: !0,
          reportId: U.report.id,
          metricsCount: U.metricsCount,
          challengeCreated: U.challengeCreated,
          kpis: q,
          elementsCount: v.length,
          processingTimeMs: Date.now() - i,
          errors: a,
        }
      );
    } catch (d) {
      const p = d instanceof Error ? d.message : "Erro desconhecido";
      return (
        a.push(p),
        x && (await y.storage.from("documents").remove([x])),
        l == null || l({ status: "failed", progress: 0, message: p }),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - i,
          errors: a,
        }
      );
    }
  }
  async processTextInput(o, r, n) {
    const l = Date.now(),
      i = [];
    try {
      n == null ||
        n({ status: "queued", progress: 10, message: "Analisando..." });
      const { data: a } = await y
        .from("profiles")
        .select("organization_id")
        .eq("user_id", r)
        .single();
      if (!(a != null && a.organization_id))
        throw new Error("Organização não encontrada");
      const x = a.organization_id;
      n == null ||
        n({
          status: "parsing",
          progress: 30,
          message: "Processando com IA...",
        });
      const { data: c } = await y
          .from("company_blueprints")
          .select("*")
          .eq("organization_id", x)
          .single(),
        { data: d } = await y
          .from("library_kpis")
          .select("code, title, unit")
          .limit(50),
        p = {
          blueprint: c
            ? {
                industry_sector: c.industry_sector,
                business_model: c.business_model,
              }
            : void 0,
          kpiLibrary: d || [],
        },
        m = await P([{ type: "text", content: o }], "Extração de KPIs", p);
      n == null ||
        n({ status: "mapping", progress: 70, message: "Extraindo KPIs..." });
      const j = ee(m),
        v = {
          title: "Análise de Texto",
          description: m.summary || "Análise concluída",
          challenge_code: "AUTO_ANALYSIS",
          severity: "low",
          confidence: 0.8,
        };
      n == null ||
        n({ status: "mapping", progress: 85, message: "Salvando..." });
      const E = (m.blocks || []).map((T) => ({
          type: T.type,
          content: JSON.stringify(T),
        })),
        D = await se(
          {
            title: "Análise de texto",
            description: "Análise de texto digitado",
            category: "text_input",
            blocks: E,
            status: "completed",
          },
          j,
          v,
          r,
        );
      return (
        n == null ||
          n({ status: "completed", progress: 100, message: "Concluído!" }),
        {
          success: !0,
          reportId: D.report.id,
          metricsCount: D.metricsCount,
          challengeCreated: D.challengeCreated,
          kpis: j,
          elementsCount: 1,
          processingTimeMs: Date.now() - l,
          errors: i,
        }
      );
    } catch (a) {
      const x = a instanceof Error ? a.message : "Erro desconhecido";
      return (
        i.push(x),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - l,
          errors: i,
        }
      );
    }
  }
}
const he = new Ue();
function ge(t) {
  const [o, r] = g.useState(null),
    n = de({
      mutationFn: async ({ file: i, userId: a, organizationId: x }) => {
        if (i)
          return he.processDocument(i, a, x, (c) => {
            var d;
            (r(c),
              (d = t == null ? void 0 : t.onProgress) == null || d.call(t, c));
          });
        throw t
          ? new Error("File or text required")
          : new Error("No input provided");
      },
      onSuccess: (i) => {
        var a;
        (r(null),
          (a = t == null ? void 0 : t.onSuccess) == null || a.call(t, i));
      },
      onError: (i) => {
        var a;
        (r(null), (a = t == null ? void 0 : t.onError) == null || a.call(t, i));
      },
    });
  return {
    processFile: g.useCallback(
      (i, a, x) => {
        n.mutate({ file: i, userId: a, organizationId: x });
      },
      [n],
    ),
    progress: o,
    isProcessing: n.isPending,
    isSuccess: n.isSuccess,
    isError: n.isError,
    error: n.error,
    result: n.data,
    reset: n.reset,
  };
}
function je(t) {
  const [o, r] = g.useState(null),
    n = de({
      mutationFn: async ({ text: i, userId: a }) =>
        he.processTextInput(i, a, (x) => {
          var c;
          (r(x),
            (c = t == null ? void 0 : t.onProgress) == null || c.call(t, x));
        }),
      onSuccess: (i) => {
        var a;
        (r(null),
          (a = t == null ? void 0 : t.onSuccess) == null || a.call(t, i));
      },
      onError: (i) => {
        var a;
        (r(null), (a = t == null ? void 0 : t.onError) == null || a.call(t, i));
      },
    });
  return {
    processText: g.useCallback(
      (i, a) => {
        n.mutate({ text: i, userId: a });
      },
      [n],
    ),
    progress: o,
    isProcessing: n.isPending,
    isSuccess: n.isSuccess,
    isError: n.isError,
    error: n.error,
    result: n.data,
    reset: n.reset,
  };
}
const J = ["PDF", "CSV", "XLSX", "TXT"],
  Ie = 50 * 1024 * 1024;
function Re({ userId: t, organizationId: o, onSuccess: r, className: n }) {
  var Z, G, Q;
  const [l, i] = g.useState([]),
    [a, x] = g.useState(""),
    [c, d] = g.useState(!1),
    [p, m] = g.useState(!1),
    j = g.useRef(null),
    v = ge({
      onSuccess: (s) => {
        const u = [...l].map((f) =>
          f.status === "processing" ? { ...f, status: "success" } : f,
        );
        i(u);
        const _ = u
          .filter((f) => f.status === "success" && f.parsedData)
          .map((f) => f.parsedData);
        _.length > 0 && (r == null || r(_));
      },
      onError: (s) => {
        i((h) =>
          h.map((u) =>
            u.status === "processing"
              ? { ...u, status: "error", error: s.message }
              : u,
          ),
        );
      },
    }),
    E = je({
      onSuccess: (s) => {
        (i((h) =>
          h.map((u) =>
            u.status === "processing" && u.name === "Texto digitado"
              ? { ...u, status: "success", parsedData: s }
              : u,
          ),
        ),
          r == null || r([s]));
      },
      onError: (s) => {
        i((h) =>
          h.map((u) =>
            u.status === "processing" && u.name === "Texto digitado"
              ? { ...u, status: "error", error: s.message }
              : u,
          ),
        );
      },
    }),
    D = (s) => {
      var u;
      const h =
        (u = s.name.split(".").pop()) == null ? void 0 : u.toLowerCase();
      return !h || !J.includes(h.toUpperCase())
        ? `Formato não suportado. Use: ${J.join(", ")}`
        : s.size > Ie
          ? "Arquivo muito grande. Máximo: 50MB"
          : null;
    },
    T = async (s) => {
      const h = D(s);
      if (h) {
        const f = {
          id: `file-${Date.now()}-${Math.random()}`,
          file: s,
          name: s.name,
          size: s.size,
          status: "error",
          error: h,
        };
        i((I) => [...I, f]);
        return;
      }
      const u = `file-${Date.now()}-${Math.random()}`,
        _ = {
          id: u,
          file: s,
          name: s.name,
          size: s.size,
          status: "processing",
        };
      i((f) => [...f, _]);
      try {
        const f = await Ee(s);
        o
          ? v.processFile(s, t, o)
          : (i((I) =>
              I.map((k) =>
                k.id === u ? { ...k, status: "success", parsedData: f } : k,
              ),
            ),
            r == null || r([f]));
      } catch (f) {
        i((I) =>
          I.map((k) =>
            k.id === u ? { ...k, status: "error", error: f.message } : k,
          ),
        );
      }
    },
    O = g.useCallback((s) => {
      (s.preventDefault(), d(!0));
    }, []),
    S = g.useCallback((s) => {
      (s.preventDefault(), d(!1));
    }, []),
    q = g.useCallback(
      (s) => {
        (s.preventDefault(),
          d(!1),
          Array.from(s.dataTransfer.files).forEach(T));
      },
      [o],
    ),
    K = g.useCallback(
      (s) => {
        (Array.from(s.target.files || []).forEach(T),
          j.current && (j.current.value = ""));
      },
      [o],
    ),
    X = g.useCallback(() => {
      if (!a.trim()) return;
      const s = {
        id: `text-${Date.now()}`,
        name: "Texto digitado",
        size: a.length,
        status: "processing",
      };
      i((u) => [...u, s]);
      const h = Ce(a);
      (i((u) =>
        u.map((_) =>
          _.id === s.id ? { ..._, status: "success", parsedData: h } : _,
        ),
      ),
        r == null || r([h]),
        x(""),
        m(!1));
    }, [a, r]),
    B = g.useCallback((s) => {
      i((h) => h.filter((u) => u.id !== s));
    }, []),
    U = g.useCallback((s) => {
      s.file && T(s.file);
    }, []),
    F = (s) =>
      s < 1024
        ? `${s} B`
        : s < 1024 * 1024
          ? `${(s / 1024).toFixed(1)} KB`
          : `${(s / (1024 * 1024)).toFixed(1)} MB`,
    fe = (s) => {
      var h;
      return (
        (h = s.split(".").pop()) == null || h.toLowerCase(),
        e.jsx(xe, { className: "h-5 w-5 text-muted-foreground" })
      );
    };
  return e.jsx("div", {
    className: C("space-y-6", n),
    children: e.jsxs(we, {
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("h3", {
                  className: "text-lg font-semibold",
                  children: "Carregar Dados",
                }),
                e.jsxs(b, {
                  children: [
                    e.jsx(w, {
                      asChild: !0,
                      children: e.jsx(H, {
                        className: "h-4 w-4 text-muted-foreground cursor-help",
                      }),
                    }),
                    e.jsx(N, {
                      className: "max-w-xs",
                      children: e.jsx("p", {
                        children:
                          "Carregue arquivos ou cole texto para criar relatórios. Formatos suportados: PDF, CSV, XLSX, TXT.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            !o &&
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg",
                children: [
                  e.jsx(ue, {
                    className: "h-5 w-5 text-amber-500 flex-shrink-0",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-amber-700",
                    children:
                      "Selecione uma organização para processar documentos automaticamente.",
                  }),
                ],
              }),
          ],
        }),
        e.jsxs(b, {
          children: [
            e.jsx(w, {
              asChild: !0,
              children: e.jsxs("div", {
                onDragOver: O,
                onDragLeave: S,
                onDrop: q,
                onClick: () => {
                  var s;
                  return (s = j.current) == null ? void 0 : s.click();
                },
                className: C(
                  "relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
                  c
                    ? "border-primary bg-primary/5 scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-muted/50",
                  v.isProcessing && "pointer-events-none opacity-50",
                ),
                children: [
                  e.jsx("input", {
                    ref: j,
                    type: "file",
                    multiple: !0,
                    accept: ".pdf,.csv,.xlsx,.xls,.txt",
                    onChange: K,
                    className: "hidden",
                  }),
                  e.jsx(me, {
                    className: "h-10 w-10 text-muted-foreground mb-2",
                  }),
                  e.jsxs("p", {
                    className: "text-sm text-muted-foreground text-center",
                    children: [
                      e.jsx("span", {
                        className: "font-medium text-foreground",
                        children: "Clique para carregar",
                      }),
                      " ",
                      "ou arraste e solte",
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: [J.join(", "), " • Máximo 50MB"],
                  }),
                ],
              }),
            }),
            e.jsx(N, {
              children: e.jsx("p", {
                children:
                  "Arraste arquivos aqui ou clique para selecionar. Suporta múltiplos arquivos.",
              }),
            }),
          ],
        }),
        v.progress &&
          e.jsxs("div", {
            className: "space-y-2 p-4 bg-muted/50 rounded-lg",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between text-sm",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(te, { className: "h-4 w-4 animate-spin" }),
                      "Processando...",
                    ],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      Math.round(
                        ((Z = v.progress) == null ? void 0 : Z.progress) || 0,
                      ),
                      "%",
                    ],
                  }),
                ],
              }),
              e.jsx(Te, {
                value: ((G = v.progress) == null ? void 0 : G.progress) || 0,
                className: "h-2",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: (Q = v.progress) == null ? void 0 : Q.message,
              }),
            ],
          }),
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs(b, {
              children: [
                e.jsx(w, {
                  asChild: !0,
                  children: e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Ou coletexto:",
                      }),
                      e.jsx(H, {
                        className: "h-4 w-4 text-muted-foreground cursor-help",
                      }),
                    ],
                  }),
                }),
                e.jsx(N, {
                  children: e.jsx("p", {
                    children:
                      "Cole dados de planilhas, listas ou texto estruturado. Separadores: vírgula, ponto e vírgula ou tabulação.",
                  }),
                }),
              ],
            }),
            e.jsx("textarea", {
              value: a,
              onChange: (s) => x(s.target.value),
              placeholder: `Cole seus dados aqui...
Exemplo:
nome,email,valor
João,joao@email.com,100
Maria,maria@email.com,200`,
              className:
                "w-full h-32 p-3 text-sm border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent",
              disabled: E.isProcessing,
            }),
            a &&
              e.jsxs(b, {
                children: [
                  e.jsx(w, {
                    asChild: !0,
                    children: e.jsxs(A, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => m(!p),
                      className: "mr-2",
                      children: [p ? "Ocultar" : "Ver", " Preview"],
                    }),
                  }),
                  e.jsx(N, {
                    children: e.jsx("p", {
                      children:
                        "Visualize como seus dados serão interpretados.",
                    }),
                  }),
                ],
              }),
            p &&
              a &&
              e.jsx("div", {
                className:
                  "p-3 bg-muted rounded-lg text-xs font-mono overflow-x-auto max-h-40 overflow-y-auto",
                children: e.jsx("pre", {
                  className: "whitespace-pre-wrap",
                  children: a,
                }),
              }),
            a.trim() &&
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          onClick: X,
                          disabled: E.isProcessing || !a.trim(),
                          children: "Processar Texto",
                        }),
                      }),
                      e.jsx(N, {
                        children: e.jsx("p", {
                          children:
                            "Analisar e converter texto em dados estruturados.",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          variant: "ghost",
                          onClick: () => {
                            (x(""), m(!1));
                          },
                          children: "Limpar",
                        }),
                      }),
                      e.jsx(N, {
                        children: e.jsx("p", {
                          children: "Limpar campo de texto.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        l.length > 0 &&
          e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("h4", {
                    className: "text-sm font-medium",
                    children: ["Arquivos Carregados (", l.length, ")"],
                  }),
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => i([]),
                          children: "Limpar Tudo",
                        }),
                      }),
                      e.jsx(N, {
                        children: e.jsx("p", {
                          children: "Remover todos os arquivos da lista.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "space-y-2",
                children: l.map((s) =>
                  e.jsxs(
                    "div",
                    {
                      className: C(
                        "flex items-center gap-3 p-3 rounded-lg border",
                        s.status === "success" &&
                          "border-green-200 bg-green-50/50",
                        s.status === "error" && "border-red-200 bg-red-50/50",
                        s.status === "processing" &&
                          "border-amber-200 bg-amber-50/50",
                        s.status === "pending" && "border-muted",
                      ),
                      children: [
                        fe(s.name),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-medium truncate",
                              children: s.name,
                            }),
                            e.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: [
                                F(s.size),
                                s.status === "processing" &&
                                  " • Processando...",
                              ],
                            }),
                            s.error &&
                              e.jsx("p", {
                                className: "text-xs text-red-500 mt-1",
                                children: s.error,
                              }),
                            s.parsedData &&
                              e.jsxs("p", {
                                className:
                                  "text-xs text-green-600 mt-1 flex items-center gap-1",
                                children: [
                                  e.jsx(W, { className: "h-3 w-3" }),
                                  s.parsedData.rowCount,
                                  " linhas •",
                                  " ",
                                  s.parsedData.headers.length,
                                  " colunas",
                                ],
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [
                            s.status === "error" &&
                              s.file &&
                              e.jsxs(b, {
                                children: [
                                  e.jsx(w, {
                                    asChild: !0,
                                    children: e.jsx(A, {
                                      variant: "ghost",
                                      size: "icon",
                                      className: "h-8 w-8",
                                      onClick: () => U(s),
                                      children: e.jsx(te, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  }),
                                  e.jsx(N, {
                                    children: e.jsx("p", {
                                      children: "Tentar novamente",
                                    }),
                                  }),
                                ],
                              }),
                            e.jsxs(b, {
                              children: [
                                e.jsx(w, {
                                  asChild: !0,
                                  children: e.jsx(A, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-8 w-8",
                                    onClick: () => B(s.id),
                                    children: e.jsx(_e, {
                                      className: "h-4 w-4",
                                    }),
                                  }),
                                }),
                                e.jsx(N, {
                                  children: e.jsx("p", {
                                    children: "Remover arquivo",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    s.id,
                  ),
                ),
              }),
            ],
          }),
        l.length === 0 &&
          e.jsxs("div", {
            className: "flex items-center gap-2 p-4 bg-muted/30 rounded-lg",
            children: [
              e.jsx(Ae, { className: "h-5 w-5 text-amber-500" }),
              e.jsxs("div", {
                className: "text-sm",
                children: [
                  e.jsx("p", {
                    className: "font-medium text-foreground",
                    children: "Dica:",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Para melhores resultados, use dados tabulares com cabeçalhos claros.",
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
const V = 5e4;
function ze({
  value: t = "",
  onChange: o,
  placeholder:
    r = "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
  disabled: n = !1,
  error: l,
  className: i,
}) {
  const [a, x] = g.useState(!1),
    c = t.length,
    d = c > V,
    p = a && c === 0,
    m = (j) => {
      const v = j.target.value.slice(0, V);
      o == null || o(v);
    };
  return e.jsxs("div", {
    className: C("space-y-2", i),
    children: [
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx("textarea", {
            value: t,
            onChange: m,
            onBlur: () => x(!0),
            placeholder: r,
            disabled: n,
            className: C(
              "min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "resize-y",
              d && "border-red-500 focus-visible:ring-red-500",
              p && "border-amber-500 focus-visible:ring-amber-500",
            ),
            "aria-invalid": d || p,
            "aria-describedby": l ? "text-input-error" : void 0,
          }),
          p &&
            !d &&
            e.jsx("div", {
              className: "absolute top-2 right-2",
              children: e.jsx(ue, { className: "h-4 w-4 text-amber-500" }),
            }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsx("div", {
            className: "text-xs text-muted-foreground",
            children: d
              ? e.jsx("span", {
                  className: "text-red-500",
                  children: "Limite máximo excedido",
                })
              : p
                ? e.jsx("span", {
                    className: "text-amber-600",
                    children: "Campo obrigatório",
                  })
                : null,
          }),
          e.jsxs("div", {
            className: C(
              "text-xs",
              d
                ? "text-red-500"
                : c > V * 0.9
                  ? "text-amber-500"
                  : "text-muted-foreground",
            ),
            children: [c.toLocaleString(), " / ", V.toLocaleString()],
          }),
        ],
      }),
    ],
  });
}
const oe = [
  { key: "queued", label: "Na Fila", description: "Aguardando processamento" },
  {
    key: "extracting",
    label: "Extraindo",
    description: "Lendo dados do documento",
  },
  {
    key: "parsing",
    label: "Analisando",
    description: "Processando informações",
  },
  { key: "mapping", label: "Mapeando", description: "Organizando resultados" },
  {
    key: "completed",
    label: "Concluído",
    description: "Pronto para visualização",
  },
];
function ce({ currentStage: t, progress: o, className: r }) {
  const n = oe.findIndex((i) => i.key === t),
    l = (i) => (i < n ? "completed" : i === n ? "current" : "pending");
  return e.jsxs("div", {
    className: C("space-y-4", r),
    children: [
      e.jsx("div", {
        className: "space-y-2",
        children: oe.map((i, a) => {
          const x = l(a),
            c = x === "current",
            d = x === "completed";
          return e.jsxs(
            "div",
            {
              className: C(
                "flex items-center gap-3 p-3 rounded-lg transition-colors",
                c && "bg-blue-50 dark:bg-blue-950/20",
                d && "bg-green-50 dark:bg-green-950/20",
              ),
              children: [
                c
                  ? e.jsx(pe, {
                      className: "h-5 w-5 text-blue-600 animate-spin",
                    })
                  : d
                    ? e.jsx(W, { className: "h-5 w-5 text-green-600" })
                    : e.jsx(De, {
                        className: "h-5 w-5 text-muted-foreground/50",
                      }),
                e.jsxs("div", {
                  className: "flex-1",
                  children: [
                    e.jsx("p", {
                      className: C(
                        "text-sm font-medium",
                        c && "text-blue-900 dark:text-blue-100",
                        d && "text-green-900 dark:text-green-100",
                        !c && !d && "text-muted-foreground",
                      ),
                      children: i.label,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        c && o !== void 0
                          ? `${i.description} (${Math.round(o)}%)`
                          : i.description,
                    }),
                  ],
                }),
              ],
            },
            i.key,
          );
        }),
      }),
      o !== void 0 &&
        t !== "completed" &&
        e.jsxs("div", {
          className: "space-y-1",
          children: [
            e.jsx("div", {
              className: "h-2 w-full bg-muted rounded-full overflow-hidden",
              children: e.jsx("div", {
                className:
                  "h-full bg-blue-600 transition-all duration-300 ease-out",
                style: { width: `${o}%` },
              }),
            }),
            e.jsxs("p", {
              className: "text-xs text-right text-muted-foreground",
              children: [Math.round(o), "%"],
            }),
          ],
        }),
    ],
  });
}
function We() {
  const { t } = Ne(),
    { user: o } = ye(),
    { organization: r, organizationId: n } = ke(),
    [l, i] = g.useState([]),
    a = (o == null ? void 0 : o.id) || "",
    x = n || "",
    c = ge({
      onSuccess: (m) => {
        console.log("Document processed:", m);
      },
      onError: (m) => {
        console.error("Document error:", m);
      },
    }),
    d = je({
      onSuccess: (m) => {
        console.log("Text processed:", m);
      },
      onError: (m) => {
        console.error("Text error:", m);
      },
    }),
    p = (m) => {
      i((j) => [...j, ...m]);
    };
  return e.jsxs("div", {
    className: "container mx-auto py-6 space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "text-3xl font-bold tracking-tight",
                children: t("documents.upload_title", {
                  defaultValue: "Upload de Documentos",
                }),
              }),
              e.jsx("p", {
                className: "text-muted-foreground mt-2",
                children: t("documents.upload_description", {
                  defaultValue:
                    "Carregue documentos ou cole texto para análise",
                }),
              }),
            ],
          }),
          e.jsxs(A, {
            variant: "outline",
            size: "sm",
            children: [
              e.jsx(H, { className: "h-4 w-4 mr-2" }),
              t("documents.help", { defaultValue: "Ajuda" }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "lg:col-span-2",
            children: [
              e.jsxs(R, {
                children: [
                  e.jsxs(z, {
                    children: [
                      e.jsxs(M, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(me, { className: "h-5 w-5" }),
                          t("documents.carregar_dados", {
                            defaultValue: "Carregar Dados",
                          }),
                        ],
                      }),
                      e.jsx(Y, {
                        children: t("documents.supported_formats", {
                          defaultValue:
                            "Formatos suportados: PDF, CSV, XLSX, TXT",
                        }),
                      }),
                    ],
                  }),
                  e.jsx(L, {
                    children: e.jsx(Re, {
                      userId: a,
                      organizationId: x,
                      onSuccess: p,
                    }),
                  }),
                ],
              }),
              e.jsxs(R, {
                className: "mt-6",
                children: [
                  e.jsxs(z, {
                    children: [
                      e.jsxs(M, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(xe, { className: "h-5 w-5" }),
                          t("documents.texto_digitado", {
                            defaultValue: "Texto Digitado",
                          }),
                        ],
                      }),
                      e.jsx(Y, {
                        children: t("documents.paste_data", {
                          defaultValue:
                            "Cole dados de planilhas, listas ou texto estruturado",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(L, {
                    children: [
                      e.jsx(ze, {
                        placeholder: t("documents.text_placeholder", {
                          defaultValue:
                            "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
                        }),
                      }),
                      e.jsx("div", {
                        className: "mt-4 flex gap-2",
                        children: e.jsxs(A, {
                          onClick: () => d.processText("sample text", a),
                          disabled: d.isProcessing,
                          children: [
                            d.isProcessing &&
                              e.jsx(pe, {
                                className: "h-4 w-4 mr-2 animate-spin",
                              }),
                            t("documents.process_text", {
                              defaultValue: "Processar Texto",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              (c.progress || d.progress) &&
                e.jsxs(R, {
                  children: [
                    e.jsx(z, {
                      children: e.jsx(M, {
                        children: t("documents.progress", {
                          defaultValue: "Progresso",
                        }),
                      }),
                    }),
                    e.jsxs(L, {
                      children: [
                        c.progress &&
                          e.jsx(ce, {
                            currentStage:
                              c.progress.status === "completed"
                                ? "completed"
                                : c.progress.status === "parsing"
                                  ? "parsing"
                                  : c.progress.status === "extracting"
                                    ? "extracting"
                                    : c.progress.status === "mapping"
                                      ? "mapping"
                                      : c.progress.status === "queued"
                                        ? "queued"
                                        : "completed",
                            progress: c.progress.progress,
                          }),
                        d.progress &&
                          !c.progress &&
                          e.jsx(ce, {
                            currentStage:
                              d.progress.status === "completed"
                                ? "completed"
                                : d.progress.status === "parsing"
                                  ? "parsing"
                                  : d.progress.status === "extracting"
                                    ? "extracting"
                                    : d.progress.status === "mapping"
                                      ? "mapping"
                                      : d.progress.status === "queued"
                                        ? "queued"
                                        : "completed",
                            progress: d.progress.progress,
                          }),
                      ],
                    }),
                  ],
                }),
              e.jsxs(R, {
                children: [
                  e.jsxs(z, {
                    children: [
                      e.jsx(M, {
                        children: t("documents.arquivos_enviados", {
                          defaultValue: "Arquivos Enviados",
                        }),
                      }),
                      e.jsxs(Y, {
                        children: [
                          l.length,
                          " ",
                          t("documents.arquivos", { defaultValue: "arquivos" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(L, {
                    children:
                      l.length === 0
                        ? e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: t("documents.no_files", {
                              defaultValue: "Nenhum arquivo enviado ainda",
                            }),
                          })
                        : e.jsx("ul", {
                            className: "space-y-2",
                            children: l.map((m, j) =>
                              e.jsxs(
                                "li",
                                {
                                  className:
                                    "flex items-center gap-2 p-2 rounded bg-muted",
                                  children: [
                                    e.jsx(W, {
                                      className: "h-4 w-4 text-green-500",
                                    }),
                                    e.jsx("span", {
                                      className: "text-sm",
                                      children:
                                        m.fileName || `Arquivo ${j + 1}`,
                                    }),
                                  ],
                                },
                                j,
                              ),
                            ),
                          }),
                  }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsx(z, {
                    children: e.jsx(M, {
                      children: t("documents.tips", { defaultValue: "Dicas" }),
                    }),
                  }),
                  e.jsxs(L, {
                    className: "space-y-3 text-sm text-muted-foreground",
                    children: [
                      e.jsxs("p", {
                        children: [
                          "•",
                          " ",
                          t("documents.tip1", {
                            defaultValue:
                              "Use dados tabulares com cabeçalhos claros",
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        children: [
                          "•",
                          " ",
                          t("documents.tip2", {
                            defaultValue:
                              "Arquivos CSV devem usar vírgula ou ponto e vírgula",
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        children: [
                          "•",
                          " ",
                          t("documents.tip3", {
                            defaultValue: "PDFs devem ter texto selecionável",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { We as default };
