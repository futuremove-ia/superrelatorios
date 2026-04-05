var ve = Object.defineProperty;
var be = (t, l, a) =>
  l in t
    ? ve(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (t[l] = a);
var L = (t, l, a) => be(t, typeof l != "symbol" ? l + "" : l, a);
import { f as de, j as e } from "./vendor-data-DuuuwLk5.js";
import { r as g } from "./vendor-react-DfYPWlel.js";
import {
  s as y,
  T as we,
  e as b,
  f as w,
  g as N,
  c as C,
  B as A,
  u as Ne,
  b as ye,
} from "./index-CaCe4Bjh.js";
import {
  a as P,
  e as ee,
  s as se,
  c as Ce,
  p as Te,
} from "./fileParserService-BwXorQ7f.js";
import { P as Ee } from "./progress-D0h63-PB.js";
import {
  bl as J,
  s as ue,
  U as me,
  I as te,
  O as W,
  X as _e,
  L as Ae,
  g as pe,
  $ as xe,
  as as De,
} from "./vendor-utils-CGetvm_l.js";
import { C as R, b as M, c as z, d as Y, a as $ } from "./card-CTs8HHrG.js";
import { u as Se } from "./useCurrentOrganization-DeW0zOch.js";
import "./vendor-radix-CfL9Rjb9.js";
import "./xlsx-BA-nE33S.js";
const ke = "https://api.unstructuredapp.io/general/v0/general",
  ae = 3,
  re = 1e3,
  ie = 6e4;
async function ne(t) {
  return new Promise((l) => setTimeout(l, t));
}
class Fe {
  constructor() {
    L(this, "apiKey");
    L(this, "baseUrl");
    ((this.apiKey = ""),
      (this.baseUrl = ke),
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
    for (let r = 1; r <= ae; r++)
      try {
        const n = new AbortController(),
          d = setTimeout(() => n.abort(), ie),
          c = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
              "Api-Key": this.apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(i),
            signal: n.signal,
          });
        if ((clearTimeout(d), c.status === 429)) {
          const u = c.headers.get("Retry-After"),
            h = u ? parseInt(u) * 1e3 : re * r;
          (console.warn(`Rate limited. Waiting ${h}ms before retry.`),
            await ne(h));
          continue;
        }
        if (!c.ok) {
          const u = await c.text();
          throw new Error(`Unstructured API error: ${c.status} - ${u}`);
        }
        const m = await c.json();
        if (!m.elements || !Array.isArray(m.elements))
          throw new Error("Resposta inválida da API Unstructured");
        return m.elements.map(this.mapElement);
      } catch (n) {
        (n instanceof Error && n.name === "AbortError"
          ? (o = new Error(`Timeout após ${ie / 1e3}s`))
          : (o = n),
          console.warn(`Unstructured attempt ${r} failed:`, n),
          r < ae && (await ne(re * r)));
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
  le = 50;
class Ie {
  constructor(l) {
    L(this, "config");
    this.config = l || {};
  }
  async processDocument(l, a, i, o) {
    var c;
    const r = Date.now(),
      n = [];
    let d = null;
    try {
      if (!i)
        throw new Error(
          "Organização não especificada. Selecione uma organização primeiro.",
        );
      const { data: m, error: u } = await y
        .from("organizations")
        .select("id")
        .eq("id", i)
        .single();
      if (u || !m)
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
      if (l.size > le * 1024 * 1024)
        throw new Error(`Arquivo muito grande. Máximo: ${le}MB`);
      o == null ||
        o({
          status: "queued",
          progress: 20,
          message: "Enviando para o storage...",
        });
      const h = `${i}/${Date.now()}_${l.name}`,
        { error: v } = await y.storage.from("documents").upload(h, l);
      if (v) throw new Error(`Erro ao fazer upload: ${v.message}`);
      ((d = h),
        o == null ||
          o({
            status: "extracting",
            progress: 30,
            message: "Extraindo conteúdo...",
          }));
      const j = await qe.extractFromStorage(h, i);
      if (j.length === 0)
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
        O = j.map((F) => F.text).join(`

`),
        k = await P([{ type: "text", content: O }], "Extração de KPIs", E);
      o == null ||
        o({ status: "parsing", progress: 70, message: "Extraindo KPIs..." });
      const q = ee(k);
      q.length === 0 && n.push("Nenhum KPI foi extraído do documento");
      const K = {
        title:
          ((c = k.summary) == null ? void 0 : c.substring(0, 50)) ||
          "Análise Automática",
        description: k.summary || "Análise concluída",
        challenge_code: "AUTO_ANALYSIS",
        severity: "low",
        confidence: 0.8,
      };
      o == null ||
        o({ status: "mapping", progress: 85, message: "Salvando..." });
      const X = (k.blocks || []).map((F) => ({
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
          elementsCount: j.length,
          processingTimeMs: Date.now() - r,
          errors: n,
        }
      );
    } catch (m) {
      const u = m instanceof Error ? m.message : "Erro desconhecido";
      return (
        n.push(u),
        d && (await y.storage.from("documents").remove([d])),
        o == null || o({ status: "failed", progress: 0, message: u }),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - r,
          errors: n,
        }
      );
    }
  }
  async processTextInput(l, a, i) {
    const o = Date.now(),
      r = [];
    try {
      i == null ||
        i({ status: "queued", progress: 10, message: "Analisando..." });
      const { data: n } = await y
        .from("profiles")
        .select("organization_id")
        .eq("user_id", a)
        .single();
      if (!(n != null && n.organization_id))
        throw new Error("Organização não encontrada");
      const d = n.organization_id;
      i == null ||
        i({
          status: "parsing",
          progress: 30,
          message: "Processando com IA...",
        });
      const { data: c } = await y
          .from("company_blueprints")
          .select("*")
          .eq("organization_id", d)
          .single(),
        { data: m } = await y
          .from("library_kpis")
          .select("code, title, unit")
          .limit(50),
        u = {
          blueprint: c
            ? {
                industry_sector: c.industry_sector,
                business_model: c.business_model,
              }
            : void 0,
          kpiLibrary: m || [],
        },
        h = await P([{ type: "text", content: l }], "Extração de KPIs", u);
      i == null ||
        i({ status: "mapping", progress: 70, message: "Extraindo KPIs..." });
      const v = ee(h),
        j = {
          title: "Análise de Texto",
          description: h.summary || "Análise concluída",
          challenge_code: "AUTO_ANALYSIS",
          severity: "low",
          confidence: 0.8,
        };
      i == null ||
        i({ status: "mapping", progress: 85, message: "Salvando..." });
      const T = (h.blocks || []).map((E) => ({
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
          v,
          j,
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
          kpis: v,
          elementsCount: 1,
          processingTimeMs: Date.now() - o,
          errors: r,
        }
      );
    } catch (n) {
      const d = n instanceof Error ? n.message : "Erro desconhecido";
      return (
        r.push(d),
        {
          success: !1,
          metricsCount: 0,
          challengeCreated: !1,
          kpis: [],
          elementsCount: 0,
          processingTimeMs: Date.now() - o,
          errors: r,
        }
      );
    }
  }
}
const he = new Ie();
function ge(t) {
  const [l, a] = g.useState(null),
    i = de({
      mutationFn: async ({ file: r, userId: n, organizationId: d }) => {
        if (r)
          return he.processDocument(r, n, d, (c) => {
            var m;
            (a(c),
              (m = t == null ? void 0 : t.onProgress) == null || m.call(t, c));
          });
        throw t
          ? new Error("File or text required")
          : new Error("No input provided");
      },
      onSuccess: (r) => {
        var n;
        (a(null),
          (n = t == null ? void 0 : t.onSuccess) == null || n.call(t, r));
      },
      onError: (r) => {
        var n;
        (a(null), (n = t == null ? void 0 : t.onError) == null || n.call(t, r));
      },
    });
  return {
    processFile: g.useCallback(
      (r, n, d) => {
        i.mutate({ file: r, userId: n, organizationId: d });
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
      mutationFn: async ({ text: r, userId: n }) =>
        he.processTextInput(r, n, (d) => {
          var c;
          (a(d),
            (c = t == null ? void 0 : t.onProgress) == null || c.call(t, d));
        }),
      onSuccess: (r) => {
        var n;
        (a(null),
          (n = t == null ? void 0 : t.onSuccess) == null || n.call(t, r));
      },
      onError: (r) => {
        var n;
        (a(null), (n = t == null ? void 0 : t.onError) == null || n.call(t, r));
      },
    });
  return {
    processText: g.useCallback(
      (r, n) => {
        i.mutate({ text: r, userId: n });
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
  const [o, r] = g.useState([]),
    [n, d] = g.useState(""),
    [c, m] = g.useState(!1),
    [u, h] = g.useState(!1),
    v = g.useRef(null),
    j = ge({
      onSuccess: (s) => {
        const p = [...o].map((f) =>
          f.status === "processing" ? { ...f, status: "success" } : f,
        );
        r(p);
        const _ = p
          .filter((f) => f.status === "success" && f.parsedData)
          .map((f) => f.parsedData);
        _.length > 0 && (a == null || a(_));
      },
      onError: (s) => {
        r((x) =>
          x.map((p) =>
            p.status === "processing"
              ? { ...p, status: "error", error: s.message }
              : p,
          ),
        );
      },
    }),
    T = fe({
      onSuccess: (s) => {
        (r((x) =>
          x.map((p) =>
            p.status === "processing" && p.name === "Texto digitado"
              ? { ...p, status: "success", parsedData: s }
              : p,
          ),
        ),
          a == null || a([s]));
      },
      onError: (s) => {
        r((x) =>
          x.map((p) =>
            p.status === "processing" && p.name === "Texto digitado"
              ? { ...p, status: "error", error: s.message }
              : p,
          ),
        );
      },
    }),
    D = (s) => {
      var p;
      const x =
        (p = s.name.split(".").pop()) == null ? void 0 : p.toLowerCase();
      return !x || !H.includes(x.toUpperCase())
        ? `Formato não suportado. Use: ${H.join(", ")}`
        : s.size > Ue
          ? "Arquivo muito grande. Máximo: 50MB"
          : null;
    },
    E = async (s) => {
      const x = D(s);
      if (x) {
        const f = {
          id: `file-${Date.now()}-${Math.random()}`,
          file: s,
          name: s.name,
          size: s.size,
          status: "error",
          error: x,
        };
        r((U) => [...U, f]);
        return;
      }
      const p = `file-${Date.now()}-${Math.random()}`,
        _ = {
          id: p,
          file: s,
          name: s.name,
          size: s.size,
          status: "processing",
        };
      r((f) => [...f, _]);
      try {
        const f = await Te(s);
        l
          ? j.processFile(s, t, l)
          : (r((U) =>
              U.map((S) =>
                S.id === p ? { ...S, status: "success", parsedData: f } : S,
              ),
            ),
            a == null || a([f]));
      } catch (f) {
        r((U) =>
          U.map((S) =>
            S.id === p ? { ...S, status: "error", error: f.message } : S,
          ),
        );
      }
    },
    O = g.useCallback((s) => {
      (s.preventDefault(), m(!0));
    }, []),
    k = g.useCallback((s) => {
      (s.preventDefault(), m(!1));
    }, []),
    q = g.useCallback(
      (s) => {
        (s.preventDefault(),
          m(!1),
          Array.from(s.dataTransfer.files).forEach(E));
      },
      [l],
    ),
    K = g.useCallback(
      (s) => {
        (Array.from(s.target.files || []).forEach(E),
          v.current && (v.current.value = ""));
      },
      [l],
    ),
    X = g.useCallback(() => {
      if (!n.trim()) return;
      const s = {
        id: `text-${Date.now()}`,
        name: "Texto digitado",
        size: n.length,
        status: "processing",
      };
      r((p) => [...p, s]);
      const x = Ce(n);
      (r((p) =>
        p.map((_) =>
          _.id === s.id ? { ..._, status: "success", parsedData: x } : _,
        ),
      ),
        a == null || a([x]),
        d(""),
        h(!1));
    }, [n, a]),
    B = g.useCallback((s) => {
      r((x) => x.filter((p) => p.id !== s));
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
      var x;
      return (
        (x = s.split(".").pop()) == null || x.toLowerCase(),
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
                onDragLeave: k,
                onDrop: q,
                onClick: () => {
                  var s;
                  return (s = v.current) == null ? void 0 : s.click();
                },
                className: C(
                  "relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
                  c
                    ? "border-primary bg-primary/5 scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-muted/50",
                  j.isProcessing && "pointer-events-none opacity-50",
                ),
                children: [
                  e.jsx("input", {
                    ref: v,
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
        j.progress &&
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
                        ((G = j.progress) == null ? void 0 : G.progress) || 0,
                      ),
                      "%",
                    ],
                  }),
                ],
              }),
              e.jsx(Ee, {
                value: ((Z = j.progress) == null ? void 0 : Z.progress) || 0,
                className: "h-2",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: (Q = j.progress) == null ? void 0 : Q.message,
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
              value: n,
              onChange: (s) => d(s.target.value),
              placeholder: `Cole seus dados aqui...
Exemplo:
nome,email,valor
João,joao@email.com,100
Maria,maria@email.com,200`,
              className:
                "w-full h-32 p-3 text-sm border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent",
              disabled: T.isProcessing,
            }),
            n &&
              e.jsxs(b, {
                children: [
                  e.jsx(w, {
                    asChild: !0,
                    children: e.jsxs(A, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => h(!u),
                      className: "mr-2",
                      children: [u ? "Ocultar" : "Ver", " Preview"],
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
            u &&
              n &&
              e.jsx("div", {
                className:
                  "p-3 bg-muted rounded-lg text-xs font-mono overflow-x-auto max-h-40 overflow-y-auto",
                children: e.jsx("pre", {
                  className: "whitespace-pre-wrap",
                  children: n,
                }),
              }),
            n.trim() &&
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsxs(b, {
                    children: [
                      e.jsx(w, {
                        asChild: !0,
                        children: e.jsx(A, {
                          onClick: X,
                          disabled: T.isProcessing || !n.trim(),
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
                            (d(""), h(!1));
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
                          onClick: () => r([]),
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
function Me({
  value: t = "",
  onChange: l,
  placeholder:
    a = "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
  disabled: i = !1,
  error: o,
  className: r,
}) {
  const [n, d] = g.useState(!1),
    c = t.length,
    m = c > V,
    u = n && c === 0,
    h = (v) => {
      const j = v.target.value.slice(0, V);
      l == null || l(j);
    };
  return e.jsxs("div", {
    className: C("space-y-2", r),
    children: [
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx("textarea", {
            value: t,
            onChange: h,
            onBlur: () => d(!0),
            placeholder: a,
            disabled: i,
            className: C(
              "min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "resize-y",
              m && "border-red-500 focus-visible:ring-red-500",
              u && "border-amber-500 focus-visible:ring-amber-500",
            ),
            "aria-invalid": m || u,
            "aria-describedby": o ? "text-input-error" : void 0,
          }),
          u &&
            !m &&
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
            children: m
              ? e.jsx("span", {
                  className: "text-red-500",
                  children: "Limite máximo excedido",
                })
              : u
                ? e.jsx("span", {
                    className: "text-amber-600",
                    children: "Campo obrigatório",
                  })
                : null,
          }),
          e.jsxs("div", {
            className: C(
              "text-xs",
              m
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
function ce({ currentStage: t, progress: l, className: a }) {
  const i = oe.findIndex((r) => r.key === t),
    o = (r) => (r < i ? "completed" : r === i ? "current" : "pending");
  return e.jsxs("div", {
    className: C("space-y-4", a),
    children: [
      e.jsx("div", {
        className: "space-y-2",
        children: oe.map((r, n) => {
          const d = o(n),
            c = d === "current",
            m = d === "completed";
          return e.jsxs(
            "div",
            {
              className: C(
                "flex items-center gap-3 p-3 rounded-lg transition-colors",
                c && "bg-blue-50 dark:bg-blue-950/20",
                m && "bg-green-50 dark:bg-green-950/20",
              ),
              children: [
                c
                  ? e.jsx(xe, {
                      className: "h-5 w-5 text-blue-600 animate-spin",
                    })
                  : m
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
                        m && "text-green-900 dark:text-green-100",
                        !c && !m && "text-muted-foreground",
                      ),
                      children: r.label,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        c && l !== void 0
                          ? `${r.description} (${Math.round(l)}%)`
                          : r.description,
                    }),
                  ],
                }),
              ],
            },
            r.key,
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
function We() {
  const { t } = Ne(),
    { user: l } = ye(),
    { organizationId: a } = Se(),
    [i, o] = g.useState([]),
    r = (l == null ? void 0 : l.id) || "",
    n = a || "",
    d = ge({
      onSuccess: (u) => {
        console.log("Document processed:", u);
      },
      onError: (u) => {
        console.error("Document error:", u);
      },
    }),
    c = fe({
      onSuccess: (u) => {
        console.log("Text processed:", u);
      },
      onError: (u) => {
        console.error("Text error:", u);
      },
    }),
    m = (u) => {
      o((h) => [...h, ...u]);
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
                  e.jsxs(M, {
                    children: [
                      e.jsxs(z, {
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
                      organizationId: n,
                      onSuccess: m,
                    }),
                  }),
                ],
              }),
              e.jsxs(R, {
                className: "mt-6",
                children: [
                  e.jsxs(M, {
                    children: [
                      e.jsxs(z, {
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
                      e.jsx(Me, {
                        placeholder: t("documents.text_placeholder", {
                          defaultValue:
                            "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
                        }),
                      }),
                      e.jsx("div", {
                        className: "mt-4 flex gap-2",
                        children: e.jsxs(A, {
                          onClick: () => c.processText("sample text", r),
                          disabled: c.isProcessing,
                          children: [
                            c.isProcessing &&
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
              (d.progress || c.progress) &&
                e.jsxs(R, {
                  children: [
                    e.jsx(M, {
                      children: e.jsx(z, {
                        children: t("documents.progress", {
                          defaultValue: "Progresso",
                        }),
                      }),
                    }),
                    e.jsxs($, {
                      children: [
                        d.progress &&
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
                        c.progress &&
                          !d.progress &&
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
                      ],
                    }),
                  ],
                }),
              e.jsxs(R, {
                children: [
                  e.jsxs(M, {
                    children: [
                      e.jsx(z, {
                        children: t("documents.arquivos_enviados", {
                          defaultValue: "Arquivos Enviados",
                        }),
                      }),
                      e.jsxs(Y, {
                        children: [
                          i.length,
                          " ",
                          t("documents.arquivos", { defaultValue: "arquivos" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx($, {
                    children:
                      i.length === 0
                        ? e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: t("documents.no_files", {
                              defaultValue: "Nenhum arquivo enviado ainda",
                            }),
                          })
                        : e.jsx("ul", {
                            className: "space-y-2",
                            children: i.map((u, h) =>
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
                                        u.fileName || `Arquivo ${h + 1}`,
                                    }),
                                  ],
                                },
                                h,
                              ),
                            ),
                          }),
                  }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsx(M, {
                    children: e.jsx(z, {
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
export { We as default };
