var ve = Object.defineProperty;
var be = (t, l, a) =>
  l in t
    ? ve(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (t[l] = a);
var L = (t, l, a) => be(t, typeof l != "symbol" ? l + "" : l, a);
import { j as e } from "./vendor-radix-C8JHQxE0.js";
import { r as g } from "./vendor-react-Ju9LKgAZ.js";
import { d as de } from "./vendor-data-BixP7Wq-.js";
import {
  s as y,
  c as C,
  T as we,
  e as b,
  f as w,
  g as N,
  B as A,
  u as Ne,
  b as ye,
} from "./index-DF8MdIXV.js";
import {
  a as P,
  e as ee,
  s as se,
  c as Ce,
  p as Te,
} from "./fileParserService-LLD8jVCJ.js";
import { P as Ee } from "./progress-BlwfVCl3.js";
import {
  bk as J,
  t as ue,
  U as me,
  I as te,
  O as W,
  X as _e,
  L as Ae,
  g as pe,
  $ as xe,
  ar as De,
} from "./vendor-utils-BdCfJOxW.js";
import { C as R, b as z, c as M, d as Y, a as $ } from "./card-BOBgEvG6.js";
import { u as ke } from "./useCurrentOrganization-CMbUnvon.js";
const Se = "https://api.unstructuredapp.io/general/v0/general",
  ae = 3,
  re = 1e3,
  ne = 6e4;
async function ie(t) {
  return new Promise((l) => setTimeout(l, t));
}
class Fe {
  constructor() {
    L(this, "apiKey");
    L(this, "baseUrl");
    ((this.apiKey = ""),
      (this.baseUrl = Se),
      this.apiKey || console.warn("UNSTRUCTURED_API_KEY não configurada"));
  }
  async extractElements(l, a) {
    if (!this.apiKey) throw new Error("UNSTRUCTURED_API_KEY não configurada");
    const i = {
      files: [{ url: l }],
      strategy: (a == null ? void 0 : a.strategy) || "auto",
      extract_table_as_html: (a == null ? void 0 : a.extractTableAsHtml) ?? !0,
      include_image_base64: (a == null ? void 0 : a.includeImageBase64) ?? !1,
    };
    let o = null;
    for (let n = 1; n <= ae; n++)
      try {
        const r = new AbortController(),
          p = setTimeout(() => r.abort(), ne),
          c = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
              "Api-Key": this.apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(i),
            signal: r.signal,
          });
        if ((clearTimeout(p), c.status === 429)) {
          const x = c.headers.get("Retry-After"),
            m = x ? parseInt(x) * 1e3 : re * n;
          (console.warn(`Rate limited. Waiting ${m}ms before retry.`),
            await ie(m));
          continue;
        }
        if (!c.ok) {
          const x = await c.text();
          throw new Error(`Unstructured API error: ${c.status} - ${x}`);
        }
        const d = await c.json();
        if (!d.elements || !Array.isArray(d.elements))
          throw new Error("Resposta inválida da API Unstructured");
        return d.elements.map(this.mapElement);
      } catch (r) {
        (r instanceof Error && r.name === "AbortError"
          ? (o = new Error(`Timeout após ${ne / 1e3}s`))
          : (o = r),
          console.warn(`Unstructured attempt ${n} failed:`, r),
          n < ae && (await ie(re * n)));
      }
    throw o || new Error("Falha após múltiplas tentativas");
  }
  async extractFromStorage(l, a) {
    const { data: i, error: o } = await y.storage
      .from("documents")
      .createSignedUrl(l, 3600);
    if (o || !(i != null && i.signedUrl))
      throw new Error(
        `Erro ao obter URL do arquivo: ${o == null ? void 0 : o.message}`,
      );
    return this.extractElements(i.signedUrl);
  }
  mapElement(l) {
    const a = l.metadata;
    return {
      type: l.type || "NarrativeText",
      text: l.text || "",
      metadata: {
        page_number: a == null ? void 0 : a.page_number,
        table_as_json: a == null ? void 0 : a.table_as_json,
        image_base64: a == null ? void 0 : a.image_base64,
        filename: a == null ? void 0 : a.filename,
      },
    };
  }
  getSupportedTypes() {
    return [
      ".pdf",
      ".doc",
      ".docx",
      ".txt",
      ".xls",
      ".xlsx",
      ".csv",
      ".ppt",
      ".pptx",
      ".eml",
      ".msg",
      ".html",
      ".json",
      ".png",
      ".jpg",
      ".jpeg",
      ".tiff",
      ".bmp",
    ];
  }
  getSupportedGoogleTypes() {
    return [
      "google-docs",
      "google-sheets",
      "google-slides",
      "google-docs",
      "google-sheets",
      "google-slides",
    ];
  }
  getMimeTypeMap() {
    return {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-powerpoint": [".ppt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
      "text/csv": [".csv"],
      "text/plain": [".txt"],
      "message/rfc822": [".eml"],
      "text/html": [".html"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/tiff": [".tiff"],
      "image/bmp": [".bmp"],
    };
  }
}
const qe = new Fe(),
  oe = 50;
class Ie {
  constructor(l) {
    L(this, "config");
    this.config = l || {};
  }
  async processDocument(l, a, i, o) {
    var c;
    const n = Date.now(),
      r = [];
    let p = null;
    try {
      if (!i)
        throw new Error(
          "Organização não especificada. Selecione uma organização primeiro.",
        );
      const { data: d, error: x } = await y
        .from("organizations")
        .select("id")
        .eq("id", i)
        .single();
      if (x || !d)
        throw new Error(
          "Organização não encontrada. Verifique se você tem acesso.",
        );
      if (
        (o == null ||
          o({
            status: "queued",
            progress: 10,
            message: "Processando arquivo...",
          }),
        l.size === 0)
      )
        throw new Error("Arquivo vazio. Carregue um arquivo com conteúdo.");
      if (l.size > oe * 1024 * 1024)
        throw new Error(`Arquivo muito grande. Máximo: ${oe}MB`);
      o == null ||
        o({
          status: "queued",
          progress: 20,
          message: "Enviando para o storage...",
        });
      const m = `${i}/${Date.now()}_${l.name}`,
        { error: f } = await y.storage.from("documents").upload(m, l);
      if (f) throw new Error(`Erro ao fazer upload: ${f.message}`);
      ((p = m),
        o == null ||
          o({
            status: "extracting",
            progress: 30,
            message: "Extraindo conteúdo...",
          }));
      const v = await qe.extractFromStorage(m, i);
      if (v.length === 0)
        throw new Error("Não foi possível extrair conteúdo do arquivo");
      o == null ||
        o({ status: "parsing", progress: 50, message: "Analisando com IA..." });
      const { data: T } = await y
          .from("company_blueprints")
          .select("*")
          .eq("organization_id", i)
          .single(),
        { data: D } = await y
          .from("library_kpis")
          .select("code, title, unit")
          .limit(50),
        E = {
          blueprint: T
            ? {
                industry_sector: T.industry_sector,
                business_model: T.business_model,
              }
            : void 0,
          kpiLibrary: D || [],
        },
        O = v.map((F) => F.text).join(`

`),
        S = await P([{ type: "text", content: O }], "Extração de KPIs", E);
      o == null ||
        o({ status: "parsing", progress: 70, message: "Extraindo KPIs..." });
      const q = ee(S);
      q.length === 0 && r.push("Nenhum KPI foi extraído do documento");
      const K = {
        title:
          ((c = S.summary) == null ? void 0 : c.substring(0, 50)) ||
          "Análise Automática",
        description: S.summary || "Análise concluída",
        challenge_code: "AUTO_ANALYSIS",
        severity: "low",
        confidence: 0.8,
      };
      o == null ||
        o({ status: "mapping", progress: 85, message: "Salvando..." });
      const X = (S.blocks || []).map((F) => ({
          type: F.type,
          content: JSON.stringify(F),
        })),
        B = {
          title: `Análise - ${l.name}`,
          description: "Relatório gerado automaticamente",
          category: "auto_analysis",
          blocks: X,
          status: "completed",
        },
        I = await se(B, q, K, a);
      return (
        o == null ||
          o({ status: "completed", progress: 100, message: "Concluído!" }),
        {
          success: !0,
          reportId: I.report.id,
          metricsCount: I.metricsCount,
          challengeCreated: I.challengeCreated,
          kpis: q,
          elementsCount: v.length,
          processingTimeMs: Date.now() - n,
          errors: r,
        }
      );
    } catch (d) {
      const x = d instanceof Error ? d.message : "Erro desconhecido";
      return (
        r.push(x),
        p && (await y.storage.from("documents").remove([p])),
        o == null || o({ status: "failed", progress: 0, message: x }),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - n,
          errors: r,
        }
      );
    }
  }
  async processTextInput(l, a, i) {
    const o = Date.now(),
      n = [];
    try {
      i == null ||
        i({ status: "queued", progress: 10, message: "Analisando..." });
      const { data: r } = await y
        .from("profiles")
        .select("organization_id")
        .eq("user_id", a)
        .single();
      if (!(r != null && r.organization_id))
        throw new Error("Organização não encontrada");
      const p = r.organization_id;
      i == null ||
        i({
          status: "parsing",
          progress: 30,
          message: "Processando com IA...",
        });
      const { data: c } = await y
          .from("company_blueprints")
          .select("*")
          .eq("organization_id", p)
          .single(),
        { data: d } = await y
          .from("library_kpis")
          .select("code, title, unit")
          .limit(50),
        x = {
          blueprint: c
            ? {
                industry_sector: c.industry_sector,
                business_model: c.business_model,
              }
            : void 0,
          kpiLibrary: d || [],
        },
        m = await P([{ type: "text", content: l }], "Extração de KPIs", x);
      i == null ||
        i({ status: "mapping", progress: 70, message: "Extraindo KPIs..." });
      const f = ee(m),
        v = {
          title: "Análise de Texto",
          description: m.summary || "Análise concluída",
          challenge_code: "AUTO_ANALYSIS",
          severity: "low",
          confidence: 0.8,
        };
      i == null ||
        i({ status: "mapping", progress: 85, message: "Salvando..." });
      const T = (m.blocks || []).map((E) => ({
          type: E.type,
          content: JSON.stringify(E),
        })),
        D = await se(
          {
            title: "Análise de texto",
            description: "Análise de texto digitado",
            category: "text_input",
            blocks: T,
            status: "completed",
          },
          f,
          v,
          a,
        );
      return (
        i == null ||
          i({ status: "completed", progress: 100, message: "Concluído!" }),
        {
          success: !0,
          reportId: D.report.id,
          metricsCount: D.metricsCount,
          challengeCreated: D.challengeCreated,
          kpis: f,
          elementsCount: 1,
          processingTimeMs: Date.now() - o,
          errors: n,
        }
      );
    } catch (r) {
      const p = r instanceof Error ? r.message : "Erro desconhecido";
      return (
        n.push(p),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - o,
          errors: n,
        }
      );
    }
  }
}
const he = new Ie();
function ge(t) {
  const [l, a] = g.useState(null),
    i = de({
      mutationFn: async ({ file: n, userId: r, organizationId: p }) => {
        if (n)
          return he.processDocument(n, r, p, (c) => {
            var d;
            (a(c),
              (d = t == null ? void 0 : t.onProgress) == null || d.call(t, c));
          });
        throw t
          ? new Error("File or text required")
          : new Error("No input provided");
      },
      onSuccess: (n) => {
        var r;
        (a(null),
          (r = t == null ? void 0 : t.onSuccess) == null || r.call(t, n));
      },
      onError: (n) => {
        var r;
        (a(null), (r = t == null ? void 0 : t.onError) == null || r.call(t, n));
      },
    });
  return {
    processFile: g.useCallback(
      (n, r, p) => {
        i.mutate({ file: n, userId: r, organizationId: p });
      },
      [i],
    ),
    progress: l,
    isProcessing: i.isPending,
    isSuccess: i.isSuccess,
    isError: i.isError,
    error: i.error,
    result: i.data,
    reset: i.reset,
  };
}
function fe(t) {
  const [l, a] = g.useState(null),
    i = de({
      mutationFn: async ({ text: n, userId: r }) =>
        he.processTextInput(n, r, (p) => {
          var c;
          (a(p),
            (c = t == null ? void 0 : t.onProgress) == null || c.call(t, p));
        }),
      onSuccess: (n) => {
        var r;
        (a(null),
          (r = t == null ? void 0 : t.onSuccess) == null || r.call(t, n));
      },
      onError: (n) => {
        var r;
        (a(null), (r = t == null ? void 0 : t.onError) == null || r.call(t, n));
      },
    });
  return {
    processText: g.useCallback(
      (n, r) => {
        i.mutate({ text: n, userId: r });
      },
      [i],
    ),
    progress: l,
    isProcessing: i.isPending,
    isSuccess: i.isSuccess,
    isError: i.isError,
    error: i.error,
    result: i.data,
    reset: i.reset,
  };
}
const H = ["PDF", "CSV", "XLSX", "TXT"],
  Ue = 50 * 1024 * 1024;
function Re({ userId: t, organizationId: l, onSuccess: a, className: i }) {
  var G, Z, Q;
  const [o, n] = g.useState([]),
    [r, p] = g.useState(""),
    [c, d] = g.useState(!1),
    [x, m] = g.useState(!1),
    f = g.useRef(null),
    v = ge({
      onSuccess: (s) => {
        const u = [...o].map((j) =>
          j.status === "processing" ? { ...j, status: "success" } : j,
        );
        n(u);
        const _ = u
          .filter((j) => j.status === "success" && j.parsedData)
          .map((j) => j.parsedData);
        _.length > 0 && (a == null || a(_));
      },
      onError: (s) => {
        n((h) =>
          h.map((u) =>
            u.status === "processing"
              ? { ...u, status: "error", error: s.message }
              : u,
          ),
        );
      },
    }),
    T = fe({
      onSuccess: (s) => {
        (n((h) =>
          h.map((u) =>
            u.status === "processing" && u.name === "Texto digitado"
              ? { ...u, status: "success", parsedData: s }
              : u,
          ),
        ),
          a == null || a([s]));
      },
      onError: (s) => {
        n((h) =>
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
      return !h || !H.includes(h.toUpperCase())
        ? `Formato não suportado. Use: ${H.join(", ")}`
        : s.size > Ue
          ? "Arquivo muito grande. Máximo: 50MB"
          : null;
    },
    E = async (s) => {
      const h = D(s);
      if (h) {
        const j = {
          id: `file-${Date.now()}-${Math.random()}`,
          file: s,
          name: s.name,
          size: s.size,
          status: "error",
          error: h,
        };
        n((U) => [...U, j]);
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
      n((j) => [...j, _]);
      try {
        const j = await Te(s);
        l
          ? v.processFile(s, t, l)
          : (n((U) =>
              U.map((k) =>
                k.id === u ? { ...k, status: "success", parsedData: j } : k,
              ),
            ),
            a == null || a([j]));
      } catch (j) {
        n((U) =>
          U.map((k) =>
            k.id === u ? { ...k, status: "error", error: j.message } : k,
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
          Array.from(s.dataTransfer.files).forEach(E));
      },
      [l],
    ),
    K = g.useCallback(
      (s) => {
        (Array.from(s.target.files || []).forEach(E),
          f.current && (f.current.value = ""));
      },
      [l],
    ),
    X = g.useCallback(() => {
      if (!r.trim()) return;
      const s = {
        id: `text-${Date.now()}`,
        name: "Texto digitado",
        size: r.length,
        status: "processing",
      };
      n((u) => [...u, s]);
      const h = Ce(r);
      (n((u) =>
        u.map((_) =>
          _.id === s.id ? { ..._, status: "success", parsedData: h } : _,
        ),
      ),
        a == null || a([h]),
        p(""),
        m(!1));
    }, [r, a]),
    B = g.useCallback((s) => {
      n((h) => h.filter((u) => u.id !== s));
    }, []),
    I = g.useCallback((s) => {
      s.file && E(s.file);
    }, []),
    F = (s) =>
      s < 1024
        ? `${s} B`
        : s < 1024 * 1024
          ? `${(s / 1024).toFixed(1)} KB`
          : `${(s / (1024 * 1024)).toFixed(1)} MB`,
    je = (s) => {
      var h;
      return (
        (h = s.split(".").pop()) == null || h.toLowerCase(),
        e.jsx(pe, { className: "h-5 w-5 text-muted-foreground" })
      );
    };
  return e.jsx("div", {
    className: C("space-y-6", i),
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
                      children: e.jsx(J, {
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
            !l &&
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
                  return (s = f.current) == null ? void 0 : s.click();
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
                    ref: f,
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
                    children: [H.join(", "), " • Máximo 50MB"],
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
                        ((G = v.progress) == null ? void 0 : G.progress) || 0,
                      ),
                      "%",
                    ],
                  }),
                ],
              }),
              e.jsx(Ee, {
                value: ((Z = v.progress) == null ? void 0 : Z.progress) || 0,
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
                      e.jsx(J, {
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
              value: r,
              onChange: (s) => p(s.target.value),
              placeholder: `Cole seus dados aqui...
Exemplo:
nome,email,valor
João,joao@email.com,100
Maria,maria@email.com,200`,
              className:
                "w-full h-32 p-3 text-sm border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent",
              disabled: T.isProcessing,
            }),
            r &&
              e.jsxs(b, {
                children: [
                  e.jsx(w, {
                    asChild: !0,
                    children: e.jsxs(A, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => m(!x),
                      className: "mr-2",
                      children: [x ? "Ocultar" : "Ver", " Preview"],
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
            x &&
              r &&
              e.jsx("div", {
                className:
                  "p-3 bg-muted rounded-lg text-xs font-mono overflow-x-auto max-h-40 overflow-y-auto",
                children: e.jsx("pre", {
                  className: "whitespace-pre-wrap",
                  children: r,
                }),
              }),
            r.trim() &&
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          onClick: X,
                          disabled: T.isProcessing || !r.trim(),
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
                            (p(""), m(!1));
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
        o.length > 0 &&
          e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("h4", {
                    className: "text-sm font-medium",
                    children: ["Arquivos Carregados (", o.length, ")"],
                  }),
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => n([]),
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
                children: o.map((s) =>
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
                        je(s.name),
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
                                      onClick: () => I(s),
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
        o.length === 0 &&
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
  onChange: l,
  placeholder:
    a = "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
  disabled: i = !1,
  error: o,
  className: n,
}) {
  const [r, p] = g.useState(!1),
    c = t.length,
    d = c > V,
    x = r && c === 0,
    m = (f) => {
      const v = f.target.value.slice(0, V);
      l == null || l(v);
    };
  return e.jsxs("div", {
    className: C("space-y-2", n),
    children: [
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx("textarea", {
            value: t,
            onChange: m,
            onBlur: () => p(!0),
            placeholder: a,
            disabled: i,
            className: C(
              "min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "resize-y",
              d && "border-red-500 focus-visible:ring-red-500",
              x && "border-amber-500 focus-visible:ring-amber-500",
            ),
            "aria-invalid": d || x,
            "aria-describedby": o ? "text-input-error" : void 0,
          }),
          x &&
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
              : x
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
const le = [
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
function ce({ currentStage: t, progress: l, className: a }) {
  const i = le.findIndex((n) => n.key === t),
    o = (n) => (n < i ? "completed" : n === i ? "current" : "pending");
  return e.jsxs("div", {
    className: C("space-y-4", a),
    children: [
      e.jsx("div", {
        className: "space-y-2",
        children: le.map((n, r) => {
          const p = o(r),
            c = p === "current",
            d = p === "completed";
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
                  ? e.jsx(xe, {
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
                      children: n.label,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        c && l !== void 0
                          ? `${n.description} (${Math.round(l)}%)`
                          : n.description,
                    }),
                  ],
                }),
              ],
            },
            n.key,
          );
        }),
      }),
      l !== void 0 &&
        t !== "completed" &&
        e.jsxs("div", {
          className: "space-y-1",
          children: [
            e.jsx("div", {
              className: "h-2 w-full bg-muted rounded-full overflow-hidden",
              children: e.jsx("div", {
                className:
                  "h-full bg-blue-600 transition-all duration-300 ease-out",
                style: { width: `${l}%` },
              }),
            }),
            e.jsxs("p", {
              className: "text-xs text-right text-muted-foreground",
              children: [Math.round(l), "%"],
            }),
          ],
        }),
    ],
  });
}
function Je() {
  const { t } = Ne(),
    { user: l } = ye(),
    { organization: a, organizationId: i } = ke(),
    [o, n] = g.useState([]),
    r = (l == null ? void 0 : l.id) || "",
    p = i || "",
    c = ge({
      onSuccess: (m) => {
        console.log("Document processed:", m);
      },
      onError: (m) => {
        console.error("Document error:", m);
      },
    }),
    d = fe({
      onSuccess: (m) => {
        console.log("Text processed:", m);
      },
      onError: (m) => {
        console.error("Text error:", m);
      },
    }),
    x = (m) => {
      n((f) => [...f, ...m]);
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
              e.jsx(J, { className: "h-4 w-4 mr-2" }),
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
                  e.jsx($, {
                    children: e.jsx(Re, {
                      userId: r,
                      organizationId: p,
                      onSuccess: x,
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
                          e.jsx(pe, { className: "h-5 w-5" }),
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
                  e.jsxs($, {
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
                          onClick: () => d.processText("sample text", r),
                          disabled: d.isProcessing,
                          children: [
                            d.isProcessing &&
                              e.jsx(xe, {
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
                    e.jsxs($, {
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
                          o.length,
                          " ",
                          t("documents.arquivos", { defaultValue: "arquivos" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx($, {
                    children:
                      o.length === 0
                        ? e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: t("documents.no_files", {
                              defaultValue: "Nenhum arquivo enviado ainda",
                            }),
                          })
                        : e.jsx("ul", {
                            className: "space-y-2",
                            children: o.map((m, f) =>
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
                                        m.fileName || `Arquivo ${f + 1}`,
                                    }),
                                  ],
                                },
                                f,
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
                  e.jsxs($, {
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
export { Je as default };
